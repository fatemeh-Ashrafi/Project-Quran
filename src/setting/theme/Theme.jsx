import "./Theme.css";
import React, { createContext, useState, useEffect } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext("light");

function Theme() {

    const [themeState, setThemeState] = useState(false);
    useEffect(() => {
        const getTheme = localStorage.getItem("Them");
        if (getTheme === "dark") {
            setThemeState(true);
        }
    }, []);

    useEffect(() => {
        if (themeState) {
            localStorage.setItem("Them", "dark"); 
            document.body.classList.add("dark-mode");
        } else {
            localStorage.setItem("Them", "light");
            document.body.classList.remove("dark-mode");
        }
    }, [themeState]);

    return (
        <div className="App">
            <div className="switch">
                <ReactSwitch
                    onChange={() => setThemeState(!themeState)}
                    checked={themeState === true}
                />
            </div>
            <div className="theme">
                <p>تم  </p>
            </div>
        </div>
    );
}
export default Theme;
