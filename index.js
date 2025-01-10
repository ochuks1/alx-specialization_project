# My index.js file
cat > index.js << 'EOL'
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Subsea Engineering Platform API' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
EOL
