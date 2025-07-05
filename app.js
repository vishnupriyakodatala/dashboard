const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/get-info", (req, res) => {
  const { businessName, location } = req.body;

  // Log input to debug
  console.log("Received:", businessName, location);

  // Normalize input: trim spaces and make case-insensitive
  const normalizedName = businessName?.trim().toLowerCase();
  const normalizedLocation = location?.trim().toLowerCase();

  if (normalizedName === "cake & co" && normalizedLocation === "mumbai") {
    res.json({
      rating: "4.3",
      reviews: "127",
      headline: `Why ${businessName} is ${location}'s Sweetest Spot in 2025`,
    });
  } else {
    res.status(404).json({ error: "Business not found" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});