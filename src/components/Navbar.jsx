import {useContext, useState, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import {Moon, Sun} from 'lucide-react';
import {UserContext} from '../UserContext.jsx';
import PropTypes from 'prop-types';

const NAVBAR_HEIGHT = {normal: '8rem', small: '5rem'};
const SCROLL_THRESHOLD = 64;
const TEXTS = ["隠者", "巡礼者", "賢い", "勇者", "探求者", "賢者", "冒険者", "守護者"];

const NavbarContainer = styled.nav`
    height: ${({$isSmall}) => $isSmall ? NAVBAR_HEIGHT.small : NAVBAR_HEIGHT.normal};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    background-color: ${({
                             $isSmall,
                             $isNearSection,
                             $isMainPageVisible
                         }) => $isSmall && $isNearSection && $isMainPageVisible ? 'var(--second-section-background-color)' : 'var(--background-color)'};
    border-bottom: 2px solid ${({
                                    $isSmall,
                                    $isNearSection,
                                    $isMainPageVisible
                                }) => $isSmall && $isNearSection && $isMainPageVisible ? '#f2d6bd' : 'var(--border-color)'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({
                  $isSmall,
                  $isNearSection,
                  $isMainPageVisible
              }) => $isSmall && $isNearSection && $isMainPageVisible ? '#f2d6bd' : 'var(--primary-font-color)'};
    padding: 0 2rem;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;

    h1 {
        font-family: 'Roboto', sans-serif;
        font-size: ${({$isSmall}) => $isSmall ? '3rem' : '4rem'};
        color: var(--primary-color);
        font-weight: bold;
        transition: all 0.2s ease-in-out;
        cursor: pointer;

        &:hover {
            color: var(--highlight-color);
        }

        &:active {
            transform: scale(0.85);
        }
    }

    button {
        background-color: ${({
                                 $isSmall,
                                 $isNearSection,
                                 $isMainPageVisible
                             }) => $isSmall && $isNearSection && $isMainPageVisible ? '#f2d6bd' : 'var(--primary-font-color)'};
        padding: ${({$isSmall}) => $isSmall ? '0.7rem' : '1rem'};
        border: none;
        cursor: pointer;
        border-radius: 5px;
        transition: all 0.2s ease-in-out;

        .lucide {
            color: ${({
                          $isSmall,
                          $isNearSection,
                          $isMainPageVisible
                      }) => $isSmall && $isNearSection && $isMainPageVisible ? '#1b1a1a' : 'var(--background-color)'};
            stroke-width: 2;
        }

        &:hover {
            background-color: ${({
                                     $isSmall,
                                     $isNearSection,
                                     $isMainPageVisible
                                 }) => $isSmall && $isNearSection && $isMainPageVisible ? '#1b1a1a' : 'var(--highlight-color)'};

            .lucide {
                color: ${({
                              $isSmall,
                              $isNearSection,
                              $isMainPageVisible
                          }) => $isSmall && $isNearSection && $isMainPageVisible ? '#f2d6bd' : 'var(--primary-font-color)'};
            }
        }

        &:active {
            transform: scale(0.85);
        }
    }

    @media (max-width: 950px) {
        padding: 0 2rem;
        h1 {
            font-size: ${({$isSmall}) => $isSmall ? '2.5rem' : '3.5rem'};
        }
    }
`;

function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

function Navbar({sectionRefs}) {
    const {theme, setTheme, isMainPageVisible} = useContext(UserContext);
    const [isSmall, setIsSmall] = useState(false);
    const [textIndex, setTextIndex] = useState(0);
    const [isNearSection, setIsNearSection] = useState(false);

    const changeTheme = useCallback(() => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    }, [setTheme]);

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleScroll = useCallback(throttle(() => {
        setIsSmall(window.scrollY > SCROLL_THRESHOLD);

        const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
        setIsNearSection(sectionRefs.current.some(section => {
            if (!section) return false;
            const rect = section.getBoundingClientRect();
            return rect.top <= navbarHeight && rect.bottom >= 0;
        }));
    }, 100), [sectionRefs]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);


    return (
        <NavbarContainer
            $isSmall={isSmall}
            $isNearSection={isNearSection}
            $isMainPageVisible={isMainPageVisible}
            aria-label="Main navigation"
        >
            <h1 aria-live="polite">{TEXTS[textIndex]}</h1>
            <button onClick={changeTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
                {theme === 'light' ? <Moon aria-hidden="true"/> : <Sun aria-hidden="true"/>}
            </button>
        </NavbarContainer>
    );
}

Navbar.propTypes = {
    sectionRefs: PropTypes.shape({
        current: PropTypes.arrayOf(
            PropTypes.shape({
                getBoundingClientRect: PropTypes.func.isRequired
            })
        )
    }).isRequired
};

export default Navbar;