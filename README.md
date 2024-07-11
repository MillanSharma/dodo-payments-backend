# Dodo Payment Dashboard Backend API

This project is a simple API for fetching transactions and invoices, built using Node.js, TypeScript, Express, MongoDB, and Zod for validation.

## Technologies Used

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **TypeScript**: A statically typed superset of JavaScript.
- **Express**: A minimal and flexible Node.js web application framework.
- **MongodDB**: A powerful, open-source document based database system.
- **Zod**: A TypeScript-first schema declaration and validation library.

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

## Exposed Routes

### GET /status

Returns the status of the API.

**Request:**

```httpf
GET /status

```

#### route exposed on: https://dodo-payments-backend.onrender.com/status



