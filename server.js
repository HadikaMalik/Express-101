import express from "express";
const app = express();
app.get("/node", (req,res) => {
    res.send("Hello World!");
});
app.get("/codeyourfuture", (req,res) => {
    res.send("Welcome to CYF!");
});
app.get("/chocolate", (req,res) => {
    let amountQuery = req.query.amount;
    res.send("Gimme " + amountQuery + " chocolates!");
});
app.get("/multiply", (req,res) => {
    let value1Query = req.query.value1;
    let value2Query = req.query.value2;
    res.send(`${value1Query*value2Query}`);
});
app.listen(3000, () => {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});