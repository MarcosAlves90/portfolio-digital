import PropTypes from "prop-types";
import { createContext, useMemo, useState } from "react";

export const UserContext = createContext();

export function System({ children }) {
    const [slideIndex, setSlideIndex] = useState(1);

    return (
        <UserContext.Provider value={useMemo(() => ({ slideIndex, setSlideIndex }), [slideIndex])}>
            {children}
        </UserContext.Provider>
    );
}

System.propTypes = {
    children: PropTypes.node.isRequired,
};