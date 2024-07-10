# Dodo Payment Dashboard Backend API

This project is a simple API for managing contacts, built using Node.js, TypeScript, Express, PostgreSQL, Drizzle ORM, and Zod for validation.

## Technologies Used

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **TypeScript**: A statically typed superset of JavaScript.
- **Express**: A minimal and flexible Node.js web application framework.
- **MongodDB**: A powerful, open-source document based database system.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **SwaggerDocs**: A interactive API documentation
- **Zest**: A Javascript testing framework.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/MillanSharma/dodo-payments-backend.git
   cd dodo-payments-backend
   ```

2. Install dependencies:

   ```sh
   pnpm install
   ```

3. Set up the environment variables:

   ```sh
   cp .env.example .env
   ```

   Update `.env` with your PostgreSQL connection details.

4. Start the server:
   ```sh
   pnpm dev
   ```

## Test

1. Run the test:

   ```sh
   pnpm run test
   ```

## Exposed Routes

### GET /status

Returns the status of the API.

**Request:**

```httpf
GET /status


GET /identify
request: { email: string, phoneNumber: string }
```

#### route exposed on: https://dodo-payments-backend-wwxo.onrender.com/status

#### docs exposed on: https://dodo-payments-backend-wwxo.onrender.com/docs
