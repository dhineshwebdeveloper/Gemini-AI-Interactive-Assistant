import React, { useState, useEffect } from 'react';
import './ThemeToggle.css'; // Add your styles here

const ThemeToggle = () => {
    // State to track the current theme
    const [theme, setTheme] = useState('light');

    // Apply the saved theme on component mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.body.className = savedTheme;
    }, []);

    // Handle theme toggle
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.className = newTheme;
        localStorage.setItem('theme', newTheme);
    };

    return (

        <>
         <div className="toggleBox">
          
         <label className="switch">
                <input type="checkbox" onClick={toggleTheme} />
                <span className="slider"></span>
            </label>
         </div>
           
        </>


    );
};

export default ThemeToggle;
