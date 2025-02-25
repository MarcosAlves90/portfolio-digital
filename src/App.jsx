import { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Moon, Sun } from 'lucide-react';
import MainPage from './pages/MainPage.jsx';
import './App.css';

const NAVBAR_HEIGHT = {
  normal: '12vh',
  small: '8vh'
};
const SCROLL_THRESHOLD = 64;
const TEXTS = ["隠者", "巡礼者", "賢い", "勇者", "探求者", "賢者", "冒険者", "守護者"];

const Navbar = styled.nav`
  height: ${({ $isSmall }) => $isSmall ? NAVBAR_HEIGHT.small : NAVBAR_HEIGHT.normal};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  background-color: ${({ $isSmall, $isNearSection }) => $isSmall && $isNearSection
      ? 'var(--second-section-background-color)'
      : 'var(--background-color)'};
  border-bottom: 2px solid ${({ $isSmall, $isNearSection }) => $isSmall && $isNearSection ? '#f2d6bd' : 'var(--border-color)'};;;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ $isSmall, $isNearSection }) => $isSmall && $isNearSection ? '#f2d6bd' : 'var(--primary-font-color)'};;
  padding: 0 2rem;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: ${({ $isSmall }) => $isSmall ? '3rem' : '4rem'};
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
    background-color: ${({ $isSmall, $isNearSection }) => $isSmall && $isNearSection ? '#f2d6bd' : 'var(--primary-font-color)'};
    padding: ${({ $isSmall }) => $isSmall ? '0.7rem' : '1rem'};
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;

    .lucide {
      color: ${({ $isSmall, $isNearSection }) => $isSmall && $isNearSection ? '#1b1a1a' : 'var(--background-color)'};
      stroke-width: 2;
    }

    &:hover {
      background-color: ${({ $isSmall, $isNearSection }) => $isSmall && $isNearSection ? '#1b1a1a' : 'var(--highlight-color)'};
      .lucide {
        color: ${({ $isSmall, $isNearSection }) => $isSmall && $isNearSection ? '#f2d6bd' : 'var(--primary-font-color)'};
      }
    }

    &:active {
      transform: scale(0.85);
    }
  }
`;
function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isSmall, setIsSmall] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isNearSection, setIsNearSection] = useState(false);
  const sectionRefs = useRef([]);

  const changeTheme = useCallback(() => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleScroll = useCallback(() => {
    setIsSmall(window.scrollY > SCROLL_THRESHOLD);

    const navbar = document.querySelector('nav');
    const navbarHeight = navbar?.offsetHeight || 0;

    const isNear = sectionRefs.current.some(section => {
      if (!section) return false;
      const rect = section.getBoundingClientRect();
      return rect.top <= navbarHeight && rect.bottom >= 0;
    });

    setIsNearSection(isNear);
  }, []);

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(prev => (prev + 1) % TEXTS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
      <>
        <Navbar
            $isSmall={isSmall}
            $isNearSection={isNearSection}
            aria-label="Main navigation"
        >
          <h1 aria-live="polite">
            {TEXTS[textIndex]}
          </h1>
          <button
              onClick={changeTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
          </button>
        </Navbar>
        <MainPage sectionRefs={sectionRefs} />
      </>
  );
}

function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function() {
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

MainPage.propTypes = {
  sectionRefs: PropTypes.shape({
    current: PropTypes.arrayOf(
        PropTypes.shape({
          getBoundingClientRect: PropTypes.func.isRequired
        })
    )
  }).isRequired
};

export default App;