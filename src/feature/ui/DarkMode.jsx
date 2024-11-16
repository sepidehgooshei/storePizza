import { useState } from "react";


export default function DarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark-mode", !isDarkMode); 
    };

    return (
        <div>
            <button onClick={toggleDarkMode} className="btn btn-light ">
                {isDarkMode ? (
                    <i className="fas fa-moon fa-2x text-warning"></i>
                ) : (
                    <i className="fas fa-sun fa-2x text-dark"></i>
                )}
                <span className="visually-hidden">
                    {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </span>
            </button>
        </div>
    );
}




