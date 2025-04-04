# AI Image Analyzer

AI Image Analyzer is a web application that allows users to upload images and ask questions about them. The application uses OpenAI's GPT-4 model with vision capabilities to analyze the images and provide meaningful insights.

## Features

- Upload images and ask questions about them.
- Real-time chat interface for interacting with the AI.
- Chat history to revisit previous conversations.
- Drag-and-drop image upload functionality.
- Backend powered by Express.js and MongoDB for storing analysis results.

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **Tailwind CSS**: For styling the application.
- **React Dropzone**: For drag-and-drop image uploads.

### Backend
- **Express.js**: For handling API requests.
- **MongoDB**: For storing analysis results.
- **OpenAI API**: For image analysis and generating responses.

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (running locally or accessible via a URI)
- OpenAI API key

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ai-image-analyzer.git
   cd ai-image-analyzer
