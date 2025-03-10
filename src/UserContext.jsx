import PropTypes from "prop-types";
import {createContext, useMemo, useState} from "react";

export const UserContext = createContext();

export function System({children}) {
    const [slideIndex, setSlideIndex] = useState(1);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [isMainPageVisible, setIsMainPageVisible] = useState(false);

    return (
        <UserContext.Provider value={useMemo(() => ({
            slideIndex,
            setSlideIndex,
            theme,
            setTheme,
            isMainPageVisible,
            setIsMainPageVisible
        }), [isMainPageVisible, slideIndex, theme])}>
            {children}
        </UserContext.Provider>
    );
}

System.propTypes = {
    children: PropTypes.node.isRequired,
};