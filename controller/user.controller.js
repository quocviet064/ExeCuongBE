const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const { sendEmail } = require("../config/email");
const { generateToken, tokenForVerify } = require("../utils/token");
const { secret } = require("../config/secret");

// register user
// sign up
exports.signup = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email.toLowerCase() });
    if (user) {
      // res.send({ status: "failed", message: "Email already exists" });
      res.send({ status: "failed", message: "Email đã tồn tại" });
    } else {
      const saved_user = await User.create(req.body);
      const token = saved_user.generateConfirmationToken();

      await saved_user.save({ validateBeforeSave: false });

      const mailData = {
        from: secret.email_user,
        to: `${req.body.email}`,
        subject: "Email Activation",
        subject: "Xác thực email của bạn",
        html: `<h2>Xin chào ${req.body.name}</h2>
        <p>Hãy xác nhận địa chỉ email của bạn để hoàn tất đăng ký và đăng nhập vào tài khoản <strong>greenscape</strong>.</p>
  
          <p>Liên kết này sẽ hết hạn trong <strong> 10 phút</strong>.</p>
  
          <p style="margin-bottom:20px;">Nhấn vào đây để kích hoạt tài khoản của bạn</p>
  
          <a href="${secret.client_url}/email-verify/${token}" style="background:#0989FF;color:white;border:1px solid #0989FF; padding: 10px 15px; border-radius: 4px; text-decoration:none;">Xác nhận tài khoản</a>
  
          <p style="margin-top: 35px;">Nếu bạn không yêu cầu này, vui lòng liên hệ với chúng tôi ngay lập tức tại support@greenscape.com</p>
  
          <p style="margin-bottom:0px;">Xin cảm ơn</p>
          <strong>greenscape Team</strong>
           `,
      };
      // const message = "Please check your email to verify!";
      const message = "Vui lòng kiểm tra email để xác thực!";
      sendEmail(mailData, res, message);
    }
  } catch (error) {
    next(error);
  }
};

/**
 * 1. Check if Email and password are given
 * 2. Load user with email
 * 3. if not user send res
 * 4. compare password
 * 5. if password not correct send res
 * 6. check if user is active
 * 7. if not active send res
 * 8. generate token
 * 9. send user and token
 */
module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        status: "fail",
        // error: "Please provide your credentials",
        error: "Vui lòng cung cấp thông tin đăng nhập",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        status: "fail",
        // error: "No user found. Please create an account",
        error: "Không tìm thấy người dùng. Vui lòng tạo tài khoản",
      });
    }

    const isPasswordValid = user.comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(403).json({
        status: "fail",
        // error: "Password is not correct",
        error: "Mật khẩu không đúng",
      });
    }

    if (user.status != "active") {
      return res.status(401).json({
        status: "fail",
        // error: "Your account is not active yet.",
        error: "Tài khoản của bạn chưa được kích hoạt.",
      });
    }

    const token = generateToken(user);

    const { password: pwd, ...others } = user.toObject();

    res.status(200).json({
      status: "success",
      // message: "Successfully logged in",
      message: "Đăng nhập thành công",
      data: {
        user: others,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

// confirmEmail
exports.confirmEmail = async (req, res, next) => {
  try {
    const { token } = req.params;
    const user = await User.findOne({ confirmationToken: token });

    if (!user) {
      return res.status(403).json({
        status: "fail",
        // error: "Invalid token",
        error: "Mã xác thực không hợp lệ",
      });
    }

    const expired = new Date() > new Date(user.confirmationTokenExpires);

    if (expired) {
      return res.status(401).json({
        status: "fail",
        // error: "Token expired",
        error: "Mã xác thực đã hết hạn",
      });
    }

    user.status = "active";
    user.confirmationToken = undefined;
    user.confirmationTokenExpires = undefined;

    await user.save({ validateBeforeSave: false });

    const accessToken = generateToken(user);

    const { password: pwd, ...others } = user.toObject();

    res.status(200).json({
      status: "success",
      // message: "Successfully activated your account.",
      message: "Kích hoạt tài khoản thành công.",
      data: {
        user: others,
        token: accessToken,
      },
    });
  } catch (error) {
    next(error);
  }
};

// forgetPassword
exports.forgetPassword = async (req, res, next) => {
  try {
    const { verifyEmail } = req.body;
    const user = await User.findOne({ email: verifyEmail });
    if (!user) {
      return res.status(404).send({
        // message: "User Not found with this email!",
        message: "Không tìm thấy người dùng với email này!",
      });
    } else {
      const token = tokenForVerify(user);
      const body = {
        from: secret.email_user,
        to: `${verifyEmail}`,
        subject: "Password Reset",
        html: `<h2>Xin chào ${verifyEmail}</h2>
        <p>Yêu cầu thay đổi mật khẩu cho tài khoản <strong>greenscape</strong> của bạn đã được gửi.</p>

        <p>Liên kết này sẽ hết hạn trong <strong> 10 phút</strong>.</p>

        <p style="margin-bottom:20px;">Nhấn vào đây để đặt lại mật khẩu của bạn</p>

        <a href=${secret.client_url}/forget-password/${token} style="background:#0989FF;color:white;border:1px solid #0989FF; padding: 10px 15px; border-radius: 4px; text-decoration:none;">Đặt lại mật khẩu</a>

        <p style="margin-top: 35px;">Nếu bạn không yêu cầu này, vui lòng liên hệ với chúng tôi ngay lập tức tại support@greenscape.com</p>

        <p style="margin-bottom:0px;">Xin cảm ơn</p>
        <strong>greenscape Team</strong>
        `,
      };
      user.confirmationToken = token;
      const date = new Date();
      date.setDate(date.getDate() + 1);
      user.confirmationTokenExpires = date;
      await user.save({ validateBeforeSave: false });
      // const message = "Please check your email to reset password!";
      const message = "Vui lòng kiểm tra email để đặt lại mật khẩu!";
      sendEmail(body, res, message);
    }
  } catch (error) {
    next(error);
  }
};

// confirm-forget-password
exports.confirmForgetPassword = async (req, res, next) => {
  try {
    const { token, password } = req.body;
    const user = await User.findOne({ confirmationToken: token });

    if (!user) {
      return res.status(403).json({
        status: "fail",
        // error: "Invalid token",
        error: "Mã xác thực không hợp lệ",
      });
    }

    const expired = new Date() > new Date(user.confirmationTokenExpires);

    if (expired) {
      return res.status(401).json({
        status: "fail",
        // error: "Token expired",
        error: "Mã xác thực đã hết hạn",
      });
    } else {
      const newPassword = bcrypt.hashSync(password);
      await User.updateOne(
        { confirmationToken: token },
        { $set: { password: newPassword } }
      );

      user.confirmationToken = undefined;
      user.confirmationTokenExpires = undefined;

      await user.save({ validateBeforeSave: false });

      res.status(200).json({
        status: "success",
        // message: "Password reset successfully",
        message: "Đặt lại mật khẩu thành công",
      });
    }
  } catch (error) {
    next(error);
  }
};

// change password
exports.changePassword = async (req, res, next) => {
  try {
    const { email, password, googleSignIn, newPassword } = req.body || {};
    const user = await User.findOne({ email: email });
    // Check if the user exists
    if (!user) {
      return res.status(404).json({
        // message: "User not found"
        message: "Không tìm thấy người dùng",
      });
    }
    if (googleSignIn) {
      const hashedPassword = bcrypt.hashSync(newPassword);
      await User.updateOne({ email: email }, { password: hashedPassword });
      return res.status(200).json({
        // message: "Password changed successfully"
        message: "Đổi mật khẩu thành công",
      });
    }
    if (!bcrypt.compareSync(password, user?.password)) {
      return res.status(401).json({
        // message: "Incorrect current password"
        message: "Mật khẩu hiện tại không đúng",
      });
    } else {
      const hashedPassword = bcrypt.hashSync(newPassword);
      await User.updateOne({ email: email }, { password: hashedPassword });
      res.status(200).json({
        // message: "Password changed successfully"
        message: "Đổi mật khẩu thành công",
      });
    }
  } catch (error) {
    next(error);
  }
};

// update a profile
exports.updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (user) {
      user.name = req.body.name;
      user.email = req.body.email;
      user.phone = req.body.phone;
      user.address = req.body.address;
      user.bio = req.body.bio;
      const updatedUser = await user.save();
      const token = generateToken(updatedUser);
      res.status(200).json({
        status: "success",
        // message: "Successfully updated profile",
        message: "Cập nhật hồ sơ thành công",
        data: {
          user: updatedUser,
          token,
        },
      });
    }
  } catch (error) {
    next(error);
  }
};

// signUpWithProvider
exports.signUpWithProvider = async (req, res, next) => {
  try {
    const user = jwt.decode(req.params.token);
    const isAdded = await User.findOne({ email: user.email });
    if (isAdded) {
      const token = generateToken(isAdded);
      res.status(200).send({
        status: "success",
        data: {
          token,
          user: {
            _id: isAdded._id,
            name: isAdded.name,
            email: isAdded.email,
            address: isAdded.address,
            phone: isAdded.phone,
            imageURL: isAdded.imageURL,
            googleSignIn: true,
          },
        },
      });
    } else {
      const newUser = new User({
        name: user.name,
        email: user.email,
        imageURL: user.picture,
        status: "active",
      });

      const signUpUser = await newUser.save();
      // console.log(signUpUser)
      const token = generateToken(signUpUser);
      res.status(200).send({
        status: "success",
        data: {
          token,
          user: {
            _id: signUpUser._id,
            name: signUpUser.name,
            email: signUpUser.email,
            imageURL: signUpUser.imageURL,
            googleSignIn: true,
          },
        },
      });
    }
  } catch (error) {
    next(error);
  }
};
