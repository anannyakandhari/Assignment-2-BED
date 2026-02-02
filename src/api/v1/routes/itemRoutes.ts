import { Router,Request, Response } from "express";

//Router helps us create routes separately//
const router = Router();
// Temporary in-memory array
let items = ["Item 1", "Item 2", "Item 3"];

//Test route  URL: /api/v1/items//
router.get("/", (req, res) => {
    //So API returns JSON, not plain text (backend standard).//
    res.json({
    success: true,
    data: ["Item 1", "Item 2", "Item 3"]
  });
});

// POST route to add an item
router.post("/", (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, message: "Name is required" });
  }
  items.push(name);
  res.status(201).json({ success: true, data: items });
});

//We export router so app.ts can use it//
export default router;
