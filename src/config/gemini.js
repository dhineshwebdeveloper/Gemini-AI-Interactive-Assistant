import { GoogleGenerativeAI } from "@google/generative-ai";
// import { response } from "express";

const apiKey = "AIzaSyCzAOod6_hpXrS0Kg2E30dHmC8GkecpiJ4"; 

const genAI = new GoogleGenerativeAI(apiKey);

console.log("GoogleGenerativeAI instance created:", genAI);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text()); // Log the response text
    return result.response.text(); // Correctly return the text from the response
  } catch (error) {
    console.error("Error in run function:", error);
    throw error; // Rethrow the error to handle it in the calling code
  }
}


export default run;
