"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _default = async (baseUrl, formData, captcha, lambdaEndpoint) => {
  let lambaData = {
    captcha,
    baseUrl: baseUrl,
    payload: formData
  };
  let result;

  try {
    result = await _axios.default.post(lambdaEndpoint, {
      responseType: 'json',
      withCredentials: true,
      crossdomain: true,
      data: lambaData
    });
  } catch (err) {
    // Pass back error
    return {
      status: 'error',
      data: err.response
    };
  }

  return {
    status: 'success',
    data: result
  };
};

exports.default = _default;