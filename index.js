import express from "express";

const app = express();
app.use(cors({ origin: ["http://localhost:5173"] }));

app.get("/api/employees", (req, res) => {
  res.json([sampleEmployee]);
});

const port = 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const sampleEmployee = {
  name: {
    first: "Charlie",
    last: "Thompson",
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};
