import './App.css'
import MainPage from './pages/MainPage.jsx'
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = styled.nav`
  height: 12vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  background-color: var(--background-color);
  border-bottom: 2px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--primary-font-color);
  padding: 0 2rem;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 4rem;
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
    background-color: var(--primary-font-color);
    border: none;
    padding: 1rem 1rem;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    .lucide {
      color: var(--background-color);
      stroke-width: 2;
    }
    &:hover {
      background-color: var(--highlight-color);
    }
    &:active {
      transform: scale(0.85);
    }
  }
  &.small {
  height: 8vh;
    h1 {
      font-size: 3rem;
    }
    button {
      padding: 0.7rem 0.7rem;
    }
  }
`

function App() {
  const [theme, setTheme] = useState("light");
  const [isSmall, setIsSmall] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["隠者", "巡礼者", "賢い", "勇者", "探求者", "賢者", "冒険者", "守護者"];
  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 64) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar className={isSmall ? "small" : ""}>
        <h1>
          {texts[textIndex]}
        </h1>
        <button onClick={changeTheme}>
          {theme === "light" ? <Moon /> : <Sun />}
        </button>
      </Navbar>
      <MainPage/>
    </>
  )
}

export default App