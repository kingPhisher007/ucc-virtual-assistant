const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fetch = require('node-fetch');
const path = require('path');

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware with increased payload limit
app.use(cors());
app.use(express.json({ limit: '50mb' })); // allow large requests

// Serve static files from the root directory (one level up from /backend)
app.use(express.static(path.join(__dirname, '..')));

// Explicitly serve index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.post('/api/chat', async (req, res) => {
  const apiKey = process.env.OPENAI_API_KEY;
  
  if (!apiKey) {
    console.error('ERROR: OPENAI_API_KEY is missing in .env file');
    return res.status(500).json({ error: { message: 'OpenAI API Key is missing in the backend .env file.' } });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(req.body)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API Error:', errorData);
      return res.status(response.status).json(errorData);
    }

    if (req.body.stream) {
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');
      
      response.body.on('error', (err) => {
        console.error('Stream Error:', err);
        res.end();
      });

      response.body.pipe(res);
    } else {
      const data = await response.json();
      res.status(response.status).json(data);
    }
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: { message: error.message || 'Internal server error' } });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});