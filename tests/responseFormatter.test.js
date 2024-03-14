// responseFormatter.test.js

const ResponseFormatter = require("../index.js");

describe("ResponseFormatter", () => {
  describe("success", () => {
    it("should return a success response with data and message", () => {
      const data = { user: "John" };
      const message = "User retrieved successfully";
      const code = 200;

      const result = ResponseFormatter.success(data, message, code);

      expect(result).toEqual({
        meta: {
          code,
          status: "success",
          message,
        },
        data,
        date: expect.any(String),
      });
    });

    it("should return a success response without data and message", () => {
      const result = ResponseFormatter.success();

      expect(result).toEqual({
        meta: {
          code: 200,
          status: "success",
          message: null,
        },
        data: null,
        date: expect.any(String),
      });
    });
  });

  describe("error", () => {
    it("should return an error response with data, message, and code", () => {
      const data = null;
      const message = "User not found";
      const code = 404;

      const result = ResponseFormatter.error(data, message, code);

      expect(result).toEqual({
        meta: {
          code,
          status: "error",
          message,
        },
        data,
        date: expect.any(String),
      });
    });

    it("should return an error response without data, message, and code", () => {
      const result = ResponseFormatter.error();

      expect(result).toEqual({
        meta: {
          code: 400,
          status: "error",
          message: null,
        },
        data: null,
        date: expect.any(String),
      });
    });
  });
});
