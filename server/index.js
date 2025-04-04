const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ai-analyzer')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Analysis Schema
const analysisSchema = new mongoose.Schema({
  prompt: String,
  imageUrl: String,
  result: String,
  createdAt: { type: Date, default: Date.now }
});

const Analysis = mongoose.model('Analysis', analysisSchema);

// Helper function to convert base64 to buffer
const base64ToBuffer = (base64String) => {
  const base64Image = base64String.split(';base64,').pop();
  return Buffer.from(base64Image, 'base64');
};

// Routes
app.post('/api/analyze', async (req, res) => {
  try {
    const { prompt, image } = req.body;
    
    // Convert base64 image to buffer
    const imageBuffer = base64ToBuffer(image);

    // Call OpenAI API for image analysis
    const response = await openai.chat.completions.create({
      model: "gpt-4-vision-preview",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: prompt },
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${imageBuffer.toString('base64')}`,
              },
            },
          ],
        },
      ],
      max_tokens: 300,
    });

    const aiResponse = response.choices[0].message.content;
    
    // Store in MongoDB
    const analysis = new Analysis({
      prompt,
      imageUrl: image,
      result: aiResponse
    });

    await analysis.save();
    
    res.json({ success: true, result: analysis });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));