// swagger.js
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Greenscape API",
      version: "1.0.0",
      description: "API documentation for Greenscape project",
      contact: {
        name: "Greenscape Team",
        email: "team@greenscape.com",
      },
    },
    servers: [
      {
        url: "http://localhost:7000",
        description: "Development server",
      },
    ],
  },
  deepLinking: true,
  apis: ["./routes/*.js"], // Đường dẫn tới file định nghĩa các API
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
module.exports = swaggerDocs;
