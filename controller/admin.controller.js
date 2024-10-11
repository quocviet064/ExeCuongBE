const bcrypt = require("bcryptjs");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);
const jwt = require("jsonwebtoken");
const { tokenForVerify } = require("../config/auth");
const Admin = require("../model/Admin");
const { generateToken } = require("../utils/token");
const { sendEmail } = require("../config/email");
const { secret } = require("../config/secret");

// register
const registerAdmin = async (req, res, next) => {
  try {
    const isAdded = await Admin.findOne({ email: req.body.email });
    if (isAdded) {
      return res.status(403).send({
        // message: "This Email already Added!",
        message: "Email này đã được thêm!",
      });
    } else {
      const newStaff = new Admin({
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        password: bcrypt.hashSync(req.body.password),
      });
      const staff = await newStaff.save();
      const token = generateToken(staff);
      res.status(200).send({
        token,
        _id: staff._id,
        name: staff.name,
        email: staff.email,
        role: staff.role,
        joiningData: Date.now(),
      });
    }
  } catch (err) {
    next(err);
  }
};
// login admin
const loginAdmin = async (req, res, next) => {
  // console.log(req.body)
  try {
    const admin = await Admin.findOne({ email: req.body.email });
    // console.log(admin)
    if (admin && bcrypt.compareSync(req.body.password, admin.password)) {
      const token = generateToken(admin);
      res.send({
        token,
        _id: admin._id,
        name: admin.name,
        phone: admin.phone,
        email: admin.email,
        image: admin.image,
        role: admin.role,
      });
    } else {
      res.status(401).send({
        // message: "Invalid Email or password!",
        message: "Email hoặc mật khẩu không hợp lệ!",
      });
    }
  } catch (err) {
    next(err);
  }
};
// forget password
const forgetPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    // console.log('email--->',email)
    const admin = await Admin.findOne({ email: email });
    if (!admin) {
      return res.status(404).send({
        // message: "Admin Not found with this email!",
        message: "Không tìm thấy quản trị viên với email này!",
      });
    } else {
      const token = tokenForVerify(admin);
      const body = {
        from: secret.email_user,
        to: `${email}`,
        subject: "Password Reset",
        html: `<h2>Xin chào ${email}</h2>
        <p>Một yêu cầu đã được nhận để thay đổi mật khẩu cho tài khoản <strong>Greenscape</strong> của bạn.</p>

        <p>Liên kết này sẽ hết hạn sau <strong>10 phút</strong>.</p>

        <p style="margin-bottom:20px;">Nhấn vào liên kết này để đặt lại mật khẩu của bạn</p>

        <a href=${secret.admin_url}/forget-password/${token} style="background:#0989FF;color:white;border:1px solid #0989FF; padding: 10px 15px; border-radius: 4px; text-decoration:none;">Đặt lại mật khẩu</a>

        <p style="margin-top: 35px;">Nếu bạn không khởi tạo yêu cầu này, vui lòng liên hệ ngay với chúng tôi tại support@greenscape.com</p>

        <p style="margin-bottom:0px;">Cảm ơn</p>
        <strong>Đội ngũ Greenscape</strong>
        `,
      };
      admin.confirmationToken = token;
      const date = new Date();
      date.setDate(date.getDate() + 1);
      admin.confirmationTokenExpires = date;
      await admin.save({ validateBeforeSave: false });
      const message = "Vui lòng kiểm tra email của bạn để đặt lại mật khẩu!";
      sendEmail(body, res, message);
    }
  } catch (error) {
    next(error);
  }
};
// confirm-forget-password
const confirmAdminForgetPass = async (req, res, next) => {
  try {
    const { token, password } = req.body;
    const admin = await Admin.findOne({ confirmationToken: token });

    if (!admin) {
      return res.status(403).json({
        status: "fail",
        // message: "Invalid token",
        message: "Token không hợp lệ",
      });
    }

    const expired = new Date() > new Date(user.confirmationTokenExpires);

    if (expired) {
      return res.status(401).json({
        status: "fail",
        // message: "Token expired",
        message: "Token đã hết hạn",
      });
    } else {
      const newPassword = bcrypt.hashSync(password);
      await Admin.updateOne(
        { confirmationToken: token },
        { $set: { password: newPassword } }
      );

      admin.confirmationToken = undefined;
      admin.confirmationTokenExpires = undefined;

      await admin.save({ validateBeforeSave: false });

      res.status(200).json({
        // message: "Password reset successfully",
        message: "Đặt lại mật khẩu thành công",
      });
    }
  } catch (error) {
    next(error);
  }
};

// change password
const changePassword = async (req, res, next) => {
  try {
    const { email, oldPass, newPass } = req.body || {};
    const admin = await Admin.findOne({ email: email });
    // Check if the admin exists
    if (!admin) {
      return res.status(404).json({
        // message: "Admin not found"
        message: "Không tìm thấy quản trị viên",
      });
    }
    if (!bcrypt.compareSync(oldPass, admin.password)) {
      return res.status(401).json({
        // message: "Incorrect current password"
        message: "Mật khẩu hiện tại không đúng",
      });
    } else {
      const hashedPassword = bcrypt.hashSync(newPass);
      await Admin.updateOne({ email: email }, { password: hashedPassword });
      res.status(200).json({
        // message: "Password changed successfully"
        message: "Đã đổi mật khẩu thành công",
      });
    }
  } catch (error) {
    next(error);
  }
};
// reset Password
const resetPassword = async (req, res) => {
  const token = req.body.token;
  const { email } = jwt.decode(token);
  const staff = await Admin.findOne({ email: email });

  if (token) {
    jwt.verify(token, secret.jwt_secret_for_verify, (err, decoded) => {
      if (err) {
        return res.status(500).send({
          // message: "Token expired, please try again!",
          message: "Token đã hết hạn, vui lòng thử lại!",
        });
      } else {
        staff.password = bcrypt.hashSync(req.body.newPassword);
        staff.save();
        res.send({
          // message: "Your password change successful, you can login now!",
          message:
            "Mật khẩu của bạn đã thay đổi thành công, bạn có thể đăng nhập ngay bây giờ!",
        });
      }
    });
  }
};
// add staff
const addStaff = async (req, res, next) => {
  try {
    const isAdded = await Admin.findOne({ email: req.body.email });
    if (isAdded) {
      return res.status(500).send({
        // message: "This Email already Added!",
        message: "Email này đã được thêm!",
      });
    } else {
      const newStaff = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
        phone: req.body.phone,
        joiningDate: req.body.joiningDate,
        role: req.body.role,
        image: req.body.image,
      });
      await newStaff.save();
      res.status(200).send({
        // message: "Staff Added Successfully!",
        message: "Đã thêm nhân viên thành công!",
      });
    }
  } catch (err) {
    next(err);
  }
};
// get all staff
const getAllStaff = async (req, res, next) => {
  try {
    const admins = await Admin.find({}).sort({ _id: -1 });
    res.status(200).json({
      status: true,
      // message: "Staff get successfully",
      message: "Lấy danh sách nhân viên thành công",
      data: admins,
    });
  } catch (err) {
    next(err);
  }
};
// getStaffById
const getStaffById = async (req, res, next) => {
  // console.log('getStaffById',req.params.id)
  try {
    const admin = await Admin.findById(req.params.id);
    res.send(admin);
  } catch (err) {
    next(err);
  }
};
// updateStaff
const updateStaff = async (req, res) => {
  try {
    const admin = await Admin.findOne({ _id: req.params.id });
    if (admin) {
      admin.name = req.body.name;
      admin.email = req.body.email;
      admin.phone = req.body.phone;
      admin.role = req.body.role;
      admin.joiningData = req.body.joiningDate;
      admin.image = req.body.image;
      admin.password =
        req.body.password !== undefined
          ? bcrypt.hashSync(req.body.password)
          : admin.password;
      const updatedAdmin = await admin.save();
      const token = generateToken(updatedAdmin);
      res.send({
        token,
        _id: updatedAdmin._id,
        name: updatedAdmin.name,
        email: updatedAdmin.email,
        role: updatedAdmin.role,
        image: updatedAdmin.image,
        phone: updatedAdmin.phone,
      });
    } else {
      res.status(404).send({
        // message: "This Staff not found!",
        message: "Không tìm thấy nhân viên này!",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};
// deleteStaff
const deleteStaff = async (req, res, next) => {
  try {
    await Admin.findByIdAndDelete(req.params.id);
    res.status(200).json({
      // message: "Admin Deleted Successfully",
      message: "Đã xóa quản trị viên thành công",
    });
  } catch (err) {
    next(err);
  }
};

const updatedStatus = async (req, res) => {
  try {
    const newStatus = req.body.status;

    await Admin.updateOne(
      { _id: req.params.id },
      {
        $set: {
          status: newStatus,
        },
      }
    );
    res.send({
      // message: `Store ${newStatus} Successfully!`,
      message: `Đã cập nhật trạng thái thành công: ${newStatus}!`,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  registerAdmin,
  loginAdmin,
  forgetPassword,
  resetPassword,
  addStaff,
  getAllStaff,
  getStaffById,
  updateStaff,
  deleteStaff,
  updatedStatus,
  changePassword,
  confirmAdminForgetPass,
};
