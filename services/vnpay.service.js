const request = require('request');
const crypto = require('crypto');
const config = require('../config/default.json');
const { url } = require('inspector');

const vnp_TmnCode = config.vnp_TmnCode;
const vnp_HashSecret = config.vnp_HashSecret;
const vnp_Url = config.vnp_Url;
const returnUrl = config.vnp_ReturnUrl;

const createPaymentUrl = (orderId, amount) => {
  const ipAddr = '127.0.0.1';
  const createDate = new Date().toISOString().replace(/[-:.]/g, '').replace('T', '').replace('Z', '').slice(0, 14);
  const orderIdStr = orderId.toString();
  const amountStr = amount;

  const vnp_Params = {};
  vnp_Params['vnp_Version'] = '2.1.0';
  vnp_Params['vnp_Command'] = 'pay';
  vnp_Params['vnp_TmnCode'] = vnp_TmnCode;
  vnp_Params['vnp_Locale'] = 'vn';
  vnp_Params['vnp_CurrCode'] = 'VND';
  vnp_Params['vnp_TxnRef'] = orderIdStr;
  vnp_Params['vnp_OrderInfo'] = 'Thanh toan cho ma GD:' + orderIdStr;
  vnp_Params['vnp_OrderType'] = 'other';
  vnp_Params['vnp_Amount'] = parseInt(amountStr * 100);
  vnp_Params['vnp_ReturnUrl'] = returnUrl;
  vnp_Params['vnp_IpAddr'] = ipAddr;
  vnp_Params['vnp_CreateDate'] = createDate;

  const paymentURL = new URL(vnp_Url);
  Object.entries(vnp_Params).sort(([key1], [key2]) => key1.toString().localeCompare(key2.toString()))
                            .forEach(([key, value]) => {
                              //skip empty value
                              if(!value || value === "" || value === undefined || value === null){
                                return;
                              }
                              paymentURL.searchParams.append(key, value.toString());
                            })
   
  const hmac = crypto.createHmac("sha512", vnp_HashSecret);
  const signed = hmac.
    update(
      Buffer.from(
        paymentURL.search.slice(1).toString(),
        "utf-8"
      )
    ).digest("hex");
  paymentURL.searchParams.append("vnp_SecureHash", signed);
  // const vnp_ParamsSorted = Object.keys(vnp_Params).sort().reduce((obj, key) => {
  //   obj[key] = vnp_Params[key];
  //   return obj;
  // }, {});


  // const querystring = require('qs');
  // const signData = querystring.stringify(vnp_ParamsSorted);
  // const hmac = crypto.createHmac('sha512', vnp_HashSecret);
  // const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');
  
  // vnp_ParamsSorted['vnp_SecureHash'] = signed;
  
  // const vnpUrl = vnp_Url + '?' + querystring.stringify(vnp_ParamsSorted);

  return paymentURL;
};

module.exports = createPaymentUrl;