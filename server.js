const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res) => {
  console.log(req.method, req.url);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  res.send('Received!');
});

// Use Render's PORT environment variable
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));