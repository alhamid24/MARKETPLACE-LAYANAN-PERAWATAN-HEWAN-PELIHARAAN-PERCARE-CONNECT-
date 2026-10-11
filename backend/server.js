const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API PetCare Connect berjalan dengan baik!');
});

app.listen(PORT, () => {
    console.log(`Server aktif di http://localhost:${PORT}`);
});