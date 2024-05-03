const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.post('/track', (req, res) => {
  // Simulate tracking a phone number's location
  const phoneNumber = req.body.phoneNumber;
  const location = {
    latitude: 37.7749,
    longitude: -122.4194
  };
  res.json(location);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
