# ResponseFormatter

The ResponseFormatter package provides a convenient way to format success and error responses in Node.js applications. It simplifies the process of generating JSON responses with standardized meta information such as status, message, and data.

## Installation

You can install ResponseFormatter via npm or yarn:

```bash
npm install response-formatter
```

or using yarn by add

```bash
yarn add response-formatter
```

## Usage

Here's how you can use ResponseFormatter in your Node.js application:

```javascript
const ResponseFormatter = require("response-formatter");

// Generate success response
const successResponse = ResponseFormatter.success(
  { user: "John" },
  "User retrieved successfully"
);
console.log(successResponse);

// Generate error response
const errorResponse = ResponseFormatter.error(null, "User not found", 404);
console.log(errorResponse);
```

### OUTPUT

- Success

```json
{
  "meta": {
    "code": 200,
    "status": "success",
    "message": "User retrieved successfully"
  },
  "data": {
    "user": "John"
  }
}
```

- Error

```json
{
  "meta": {
    "code": 404,
    "status": "error",
    "message": "User not found"
  },
  "data": null
}
```

## API

### ResponseFormatter.success(data, message, code)

Generates a success response with the provided data, message, and status code.

- `data` (optional): Data to include in the response.
- `message` (optional): A message describing the success.
- `code` (optional): HTTP status code. Default is 200.

### ResponseFormatter.error(data, message, code)

Generates an error response with the provided data, message, and status code.

- `data` (optional): Data to include in the response.
- `message` (optional): A message describing the error.
- `code` (optional): HTTP status code. Default is 400.

# License

This package is licensed under the MIT License. See the LICENSE file for details.

```vbnet
Feel free to adjust the README.md file according to your preferences or additional information you want to include. Let me know if you need further assistance!
```
