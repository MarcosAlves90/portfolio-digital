import styled, { keyframes } from "styled-components";
import { useState, useRef, useEffect } from "react";

const backgroundAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const SectionHeader = styled.div`
  height: 88vh;
  padding: 12vh 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(90deg, var(--grid-color) 2px, transparent 2px),
    linear-gradient(var(--grid-color) 2px, transparent 2px);
  background-size: 100px 100px;
  background-attachment: fixed;
  color: var(--primary-font-color);
  h1 {
    margin-top: -3.9rem;
    font-family: "Gavency", serif;
    font-size: 11rem;
    margin-bottom: 0;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    @supports (background-clip: text) or (-webkit-background-clip: text) {
      background-image: var(--header-title-animation);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      background-clip: text;
      animation: ${backgroundAnimation} 10s ease infinite;
    }
    &:hover {
      @supports (background-clip: text) or (-webkit-background-clip: text) {
        background-position: center;
        color: transparent;
      }
    }
    &:active {
      transition: all 0.1s ease-in-out;
      font-size: 10rem;
    }
  }
  p {
    padding-bottom: 2rem;
    font-size: 1.3rem;
    margin-top: -3.9rem;
    font-weight: 600;
    letter-spacing: 0.61rem;
  }
  button {
    background-color: var(--primary-font-color);
    color: var(--background-color);
    border: none;
    padding: 0.5rem 7rem;
    font-size: 1.15rem;
    cursor: pointer;
    margin-top: 2rem;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: var(--highlight-color);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const SectionContent = styled.div`
  .sectionProfileImage {
    background-color: var(--second-section-background-color);
    color: #e9e5e2;
    .imageBox {
      height: 16rem;
      width: 21rem;
      background-color: var(--second-section-secondary-color);
      display: flex;
      align-items: flex-end;
      img {
        width: 100%;
        height: auto;
        transition: all 0.2s ease-in-out;
        transform-origin: bottom;
        cursor: pointer;
        &:active {
          transform: scale(0.9);
        }
      }
    }
  }
  .sectionDetails {
    color: var(--primary-font-color);
    .progress-bar {
      width: 100%;
      overflow: hidden;
      display: flex;
      gap: 0.5rem;
      .progress-segment {
        height: 0.5rem;
        background-color: var(--background-color);
      }
    }
  }
  .textBox {
    h1 {
      font-size: 3rem;
      margin: 0;
      font-weight: 600;
    }
    p,
    h1 {
      text-align: justify;
    }
  }
  article {
    display: flex;
    gap: 6rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 7rem 2rem;
    box-sizing: border-box;
    .invertedBox {
      background-color: var(--primary-font-color);
      color: var(--background-color);
      padding: 1.5rem;
      margin-bottom: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      gap: 1rem;
      width: 25rem;
      .contactItem {
        display: flex;
        align-items: center;
        gap: 0.7rem;
        a {
          color: var(--background-color);
          text-decoration: none;
          transition: all 0.2s ease-in-out;
          font-weight: 600;
          word-break: break-word;
          overflow-wrap: break-word;
          text-align: start;
          &:hover {
            text-decoration: underline;
          }
          &:active {
            transform: scale(0.9);
          }
        }
        .bi {
          transition: all 0.2s ease-in-out;
          font-size: 1.3rem;
          color: var(--background-color);
        }
      }
      &.languages {
        p {
          margin: 0;
          font-weight: 600;
        }
        .description {
          margin-bottom: 1rem;
          font-weight: normal;
          text-align: start;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      &.education {
        width: 100%;
        text-align: start;
        box-sizing: border-box;
        ul {
          list-style-type: none;
          padding: 0;
        }
        li::before {
          content: '';
          background-color: var(--highlight-color);
          width: 0.5rem;
          height: 0.5rem;
          display: inline-block;
          margin-right: 0.6rem;
        }
        li {
          margin-bottom: 3rem;
          display: flex;
          align-items: center;
          justify-content: start;
          font-weight: 600;
          &:last-child {
            margin-bottom: 0;
          }
        }
        li span {
          margin-right: 1rem;
          width: 6rem;
        }
      }
      @media (max-width: 1180px) {
        width: 20rem;
      }
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &.open {
    display: flex;
  }
  &.closed {
    display: none;
  }
`;

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const sectionImageRef = useRef(null);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && sectionImageRef.current) {
      const offset = (7.95 * window.innerHeight) / 100;
      const elementPosition =
        sectionImageRef.current.getBoundingClientRect().top +
        window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, [isOpen]);

  function ProgressBar({ language, progress }) {
    const segments = Array.from({ length: 8 }, (_, index) => (
      <div
        key={index}
        className="progress-segment"
        style={{
          width: "12.5%",
          backgroundColor: index < progress ? "var(--highlight-color)" : "var(--background-color)"
        }}
      ></div>
    ));
  
    return (
      <div className={`progress-bar ${language}`}>
        {segments}
      </div>
    );
  }

  return (
    <main>
      <SectionHeader>
        <h1>Portfolio</h1>
        <p>Marcos Lopes | Desenvolvedor Full-Stack</p>
        <button onClick={toggleIsOpen}>{isOpen ? "Fechar" : "Abrir"}</button>
      </SectionHeader>
      <SectionContent
        ref={sectionImageRef}
        className={isOpen ? "open" : "closed"}
      >
        <article className="sectionProfileImage">
          <div className="imageBox">
            <img src="/foto_perfil.png"></img>
          </div>
          <div className="textBox">
            <h1>
              quem sou <strong>EU</strong>?
            </h1>
            <p>
              Sou um desenvolvedor full-stack, designer gráfico e escritor que
              <br></br>
              está sempre disposto a encarar desafios.
            </p>
          </div>
        </article>
        <article className="sectionDetails">
          <div className="textBox">
            <h1>contatos</h1>
            <div className="invertedBox">
              <div className="contactItem">
                <i className="bi bi-envelope-paper"></i>
                <a
                  href="mailto:marcos.a.lopes7701@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  marcos.a.lopes7701@gmail.com
                </a>
              </div>
              <div className="contactItem">
                <i className="bi bi-instagram"></i>
                <a
                  href="https://www.instagram.com/marcos.pilgrim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @marcos.pilgrim
                </a>
              </div>
              <div className="contactItem">
                <i className="bi bi-whatsapp"></i>
                <a
                  href="https://wa.me/5511949273886"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +55 (11) 94927-3886
                </a>
              </div>
            </div>
            <h1>idiomas</h1>
            <div className="invertedBox languages">
              <p>Português</p>
              <ProgressBar language="portuguese" progress={8} />
              <p className="description">Meu idioma natal, nenhuma dificuldade</p>
              <p>Inglês</p>
              <ProgressBar language="english" progress={5} />
              <p className="description">Eu entendo bem, mas minha conversação ainda pode melhorar</p>
            </div>
          </div>
          <div className="textBox">
            <h1>educação / experiência</h1>
            <div className="invertedBox education">
            <ul>
              <li><span>2022 - 2023</span> Técnico em Informática para Internet</li>
              <li><span>2024 - 2026</span> Tecnólogo em Desenvolvimento de Software Multiplataforma</li>
              <li><span>2024 - ...</span> Fazendo freelances e criando projetos pessoais e acadêmicos</li>
            </ul>
          </div>
        </div>
        </article>
      </SectionContent>
    </main>
  );
}
