// responseFormatter.js

const { formatDate, extractDate } = require("dformater");

/**
 * Format response.
 */
class ResponseFormatter {
  /**
   * Give success response.
   */
  static success(data = null, message = null, code = 200) {
    return {
      meta: {
        code,
        status: "success",
        message,
      },
      data,
      date: formatDate(new Date()),
    };
  }

  /**
   * Give error response.
   */
  static error(data = null, message = null, code = 400) {
    return {
      meta: {
        code,
        status: "error",
        message,
      },
      data,
      date: formatDate(new Date()),
    };
  }
}

module.exports = ResponseFormatter;
