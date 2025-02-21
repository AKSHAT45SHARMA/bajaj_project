const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/bfhl", (req, res) => {
    var ansobj={
        "operation_code":1
    }
    res.status(200).send(ansobj)
})

app.post("/bfhl", (req, res) => {
    const { data } = req.body;

    const alphabets = data.filter(item => /^[A-Za-z]+$/.test(item));
    const numbers = data.filter(item => /^[0-9]+$/.test(item));
    const highestAlphabet = alphabets.length > 0 ? alphabets.sort().pop() : null;

    res.json({ alphabets, numbers, highest_alphabet: highestAlphabet });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
