import PropTypes from "prop-types";
import {createContext, useState} from "react";

export const UserContext = createContext();

export function System({children}) {
    const [slideIndex, setSlideIndex] = useState(1);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [isMainPageVisible, setIsMainPageVisible] = useState(false);

    const contextValue = {
        slideIndex,
        setSlideIndex,
        theme,
        setTheme,
        isMainPageVisible,
        setIsMainPageVisible
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}

System.propTypes = {
    children: PropTypes.node.isRequired,
};