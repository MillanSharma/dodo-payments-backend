import type { Options } from "swagger-jsdoc";
import dotenv from 'dotenv'
dotenv.config();

const swaggerOptions: Options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "API documentation for dodo payments backend",
    },
    servers: [
      {
        url: `${process.env.API_BASE_URL}`,
        description: "Server",
      },
    ],
  },
  apis: ["./src/routes/*.ts", "./src/controllers/*.ts"],
};

export default swaggerOptions;
