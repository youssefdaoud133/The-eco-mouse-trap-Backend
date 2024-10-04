// const express = require('express');
// const axios = require('axios');


// const apiKey = 'AIzaSyCstVbRPXHc4qiOJLahUu-O-f15orGO6o8';
// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const genAI = new GoogleGenerativeAI(apiKey);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

// // Function to fetch data from Gemini API
// const fetchGeminiData = async () => {
//   const response = await fetch('https://api.gemini.com/v1/endpoint', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       // Include any necessary authentication headers here
//     },
//   });

//   if (!response.ok) {
//     throw new Error(`Error fetching from Gemini: ${response.statusText}`);
//   }

//   const data = await response.json();
//   return data;
// };

// module.exports = { fetchGeminiData };
// controllers/geminiController.js

const { GoogleGenerativeAI } = require('@google/generative-ai');
// const dotenv = require('dotenv');

// Load environment variables from .env file
// dotenv.config();

// Initialize Google Generative AI
// const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI("AIzaSyCstVbRPXHc4qiOJLahUu-O-f15orGO6o8");
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const chatWithGemini = async (message) => {
    try {
        const result = await model.generateContent([
            `If the message is related to greenhouse gases, please provide an answer; if not, return 'Sorry, I can only answer questions about greenhouse gases message: ${message}'`
        ]);
        return result.response.text();
    } catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while communicating with the Gemini API');
    }
};

module.exports = {
    chatWithGemini,
};
