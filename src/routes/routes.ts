import type { Router, Request, Response } from "express";
import { createRouter } from "@/utils/create";
import {
  type InvoiceResponse,
  type TransactionResponse,
} from "@/schema/transaction";
import {
  handleGetInvoices,
  handleGetTransactions,
} from "@/controllers/transaction";

export default createRouter((router: Router) => {
  /**
   * @swagger
   * /status:
   *   get:
   *     summary: Get server status
   *     description: Returns server running status, uptime, and current timestamp (utility route)
   *     tags: [Status]
   *     responses:
   *       200:
   *         description: Successful response
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   example: Server is running
   *                 uptime:
   *                   type: number
   *                   example: 12345.67
   *                 timestamp:
   *                   type: number
   *                   example: 16252
   */
  router.get("/status", (_req, res) => {
    res.json({
      message: "Server is running",
      uptime: process.uptime(),
      timestamp: Date.now(),
    });
  });

  /**
   * @swagger
   * /transactions:
   *   get:
   *     summary: Get transactions
   *     description: Returns a list of transactions with pagination
   *     tags: [Transactions]
   *     parameters:
   *       - in: query
   *         name: page
   *         schema:
   *           type: integer
   *         description: The page number to retrieve
   *       - in: query
   *         name: limit
   *         schema:
   *           type: integer
   *         description: The number of items per page
   *       - in: query
   *         name: search
   *         schema:
   *           type: string
   *         description: Search term for transactions
   *     responses:
   *       200:
   *         description: Successful response
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   example: Transactions retrieved successfully
   *                 data:
   *                   type: array
   *                   items:
   *                     type: object
   *                     properties:
   *                       _id:
   *                         type: string
   *                         description: The mongo ID
   *                         example: 123456
   *                       transaction_id:
   *                         type: string
   *                         description: The transaction ID
   *                         example: txn_123456
   *                       user_name:
   *                         type: string 
   *                         description: The transaction initiator name 
   *                         example: Albert
   *                       amount:
   *                         type: string 
   *                         description: The transaction amount
   *                         example: 100.50
   *                       currency:
   *                         type: string
   *                         description: The currency of the transaction
   *                         example: USD
   *                       status:
   *                         type: string
   *                         description: The status of the transaction
   *                         example: failed, received
   *                       payment:
   *                         type: string
   *                         description: The payment method for transaction
   *                         example: bank_transfer
   *       400:
   *         description: Bad Request
   *       500:
   *         description: Internal Server Error
   */
  router.get("/transactions", async (req: Request, res: Response) => {
    const page: number = parseInt(req.query.page as string, 10) || 1;
    const limit: number = parseInt(req.query.limit as string, 10) || 10;
    const search: string = (req.query.search as string) || "";

    try {
      const transactions: TransactionResponse = await handleGetTransactions(
        page,
        limit,
        search
      );
      res.json(transactions);
    } catch (err) {
      console.error("Error retrieving transactions:", err);
      res.status(500).json({ error: "Failed to retrieve transactions" });
    }
  });

/**
 * @swagger
 * /invoices:
 *   get:
 *     summary: Retrieve a list of invoices
 *     description: Returns a paginated list of invoices
 *     tags: [Invoices]
 *     parameters:
 *       - name: page
 *         in: query
 *         required: false
 *         description: The page number for pagination
 *         schema:
 *           type: integer
 *           default: 1
 *       - name: limit
 *         in: query
 *         required: false
 *         description: The number of invoices per page
 *         schema:
 *           type: integer
 *           default: 10
 *       - name: search
 *         in: query
 *         required: false
 *         description: Search term to filter invoices
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string 
 *                     description: The unique identifier for the invoice
 *                     example: 1
 *                   invoice_id:
 *                     type: string 
 *                     description: The unique identifier for the invoice
 *                     example: 1
 *                   customer_name:
 *                     type: string
 *                     description: The name of the customer
 *                     example: Madan
 *                   customer_email:
 *                     type: string
 *                     description: The email of the customer
 *                     example: madan@gmail.com
 *                   customer_phone:
 *                     type: number
 *                     description: The phone number of the customer
 *                     example: 99922424
 *                   currency:
 *                     type: string
 *                     description: The currency of the invoice
 *                     example: INR/USD
 *                   due_date:
 *                     type: string
 *                     format: date
 *                     description: The due date of the invoice
 *                     example: 2024-01-14T00:33:27.407Z
 *                   amount:
 *                     type: number
 *                     description: The amount of the invoice
 *                     example: 822.93
 *                   status:
 *                     type: string
 *                     description: The current status of the invoice
 *                     example: failed
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
router.get("/invoices", async (req: Request, res: Response) => {
  const page: number = parseInt(req.query.page as string, 10) || 1;
  const limit: number = parseInt(req.query.limit as string, 10) || 10;
  const search: string = (req.query.search as string) || "";

  try {
    const invoices: InvoiceResponse = await handleGetInvoices(
      page,
      limit,
      search
    );
    res.json(invoices);
  } catch (err) {
    console.error("Error retrieving invoices:", err);
    res.status(500).json({ error: "Failed to retrieve invoices" });
  }
});
});
