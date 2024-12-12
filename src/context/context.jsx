import { createContext, useState } from 'react'
import run from '../config/gemini'

export const Context = createContext()

const ContextProvider = props => {
  const [input, setInput] = useState('')
  const [recentPrompt, setRecentPrompt] = useState('')
  const [prevPrompts, setPervPrompts] = useState([])
  const [showResult, setShowResults] = useState(false)
  const [loading, setLoading] = useState(false)
  const [resultDate, setResultsDate] = useState('')

  const delaypara = (index, nextWord) => {
    setTimeout(function () {
      setResultsDate((prev) => prev + nextWord);
    }, 10 * index); // Adjust the multiplier for typing speed
  };
  
const newChat = () => {
  setLoading(false);
  setShowResults(false)
}

  const onSend = async (prompt) => {
    try {
      setResultsDate(''); // Reset results
      setLoading(true); // Start loading
      setShowResults(true); // Show results

      let respones;
      if(prompt !== undefined){
        respones = await run(prompt);
        setRecentPrompt(prompt);
      }else{
        setPervPrompts(prev => [...prev, input])
        setRecentPrompt(input)
        respones = await run(input)
      }
  
      let responseArray = respones.split('**');
      let newRespones = '';
      for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newRespones += responseArray[i];
        } else {
          newRespones += '<b>' + responseArray[i] + '</b>';
        }
      }
  
      let newresponse2 = newRespones.split('*').join('</br>');
  
      // Wrap the response in a container with inline styles for alignment
      const styledResponse = `
        <div style="text-align: left; font-family: Arial, sans-serif; line-height: 1.5;">
          ${newresponse2}
        </div>
      `;
  
      // Split styledResponse into characters for the typing effect
      const newResponesArray = styledResponse.split('');
      for (let i = 0; i < newResponesArray.length; i++) {
        const nextWord = newResponesArray[i];
        delaypara(i, nextWord); // Typing effect
      }
    } catch (error) {
      console.error('Error while running the function:', error);
      setResultsDate('An error occurred. Please try again.'); // Optionally show an error message
    } finally {
      setLoading(false); // Stop loading
      setInput(''); // Clear input
    }
  };
  
  const contextvalue = {
    prevPrompts,
    setPervPrompts,
    onSend,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultDate,
    input,
    setInput,
    newChat
  }

  return (
    <Context.Provider value={contextvalue}>{props.children}</Context.Provider>
  )
}
export default ContextProvider
