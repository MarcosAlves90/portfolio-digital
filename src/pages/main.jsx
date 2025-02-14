import styled, { keyframes } from "styled-components";
import { useState, useRef, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPhp,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
  SiVuedotjs,
  SiVite,
  SiC,
  SiSass,
  SiBootstrap,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const backgroundAnimation = keyframes`
  0% { background-position: 0% 50%; }
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
  article {
    transition: all 0.2s ease-in-out;
    display: flex;
    gap: 4rem;
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
        text-align: start;
        ul {
          list-style-type: none;
          padding: 0;
        }
        li::before {
          content: "";
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
      &.skills {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        justify-content: center;
        flex-direction: row;
        .skill {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          font-size: 0.9rem;
          width: 4rem;
          svg {
            transition: all 0.2s ease-in-out;
            cursor: pointer;
            color: var(--highlight-color);
            width: 65px;
            height: 65px;
            &:active {
              transform: scale(0.75);
            }
          }
          span {
            margin-top: 0.5rem;
            font-weight: 600;
            color: var(--background-color);
          }
          @media (max-width: 1050px) {
            width: 3rem;
            font-size: 0.7rem;
            svg {
              width: 50px;
              height: 50px;
            }
          }
        }
        @media (max-width: 1050px) {
          gap: 1rem;
        }
      }
      &.languages,
      .contactItem {
        width: 25rem;
        transition: all 0.2s ease-in-out;
      }
      &.education,
      &.skills {
        box-sizing: border-box;
        max-width: 55rem;
        transition: all 0.2s ease-in-out;
      }
    }
    &.sectionProfileImage {
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
    &.sectionDetails {
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
      box-sizing: border-box;
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
  @media (max-width: 1180px) {
    article {
      gap: 2rem;

      .invertedBox {
        &.languages,
        .contactItem {
          width: 20rem;
        }
        &.education,
        &.skills {
          width: 100%;
        }
      }
    }
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
          backgroundColor:
            index < progress
              ? "var(--highlight-color)"
              : "var(--background-color)",
        }}
      ></div>
    ));

    return <div className={`progress-bar ${language}`}>{segments}</div>;
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
              <p className="description">
                Meu idioma natal, nenhuma dificuldade
              </p>
              <p>Inglês</p>
              <ProgressBar language="english" progress={5} />
              <p className="description">
                Eu entendo bem, mas minha conversação ainda pode melhorar
              </p>
            </div>
          </div>
          <div className="textBox">
            <h1>educação / experiência</h1>
            <div className="invertedBox education">
              <ul>
                <li>
                  <span>2022 - 2023</span> Técnico em Informática para Internet
                </li>
                <li>
                  <span>2024 - 2026</span> Tecnólogo em Desenvolvimento de
                  Software Multiplataforma
                </li>
                <li>
                  <span>2024 - ...</span> Fazendo freelances e criando projetos
                  pessoais e acadêmicos
                </li>
              </ul>
            </div>
            <h1>habilidades</h1>
            <div className="invertedBox skills">
              <div className="skill">
                <FaHtml5 />
                <span>HTML5</span>
              </div>
              <div className="skill">
                <FaCss3Alt />
                <span>CSS3</span>
              </div>
              <div className="skill">
                <FaJs />
                <span>JavaScript</span>
              </div>
              <div className="skill">
                <FaReact />
                <span>React</span>
              </div>
              <div className="skill">
                <FaNodeJs />
                <span>Node.js</span>
              </div>
              <div className="skill">
                <FaPhp />
                <span>PHP</span>
              </div>
              <div className="skill">
                <FaJava />
                <span>Java</span>
              </div>
              <div className="skill">
                <SiC />
                <span>C</span>
              </div>
              <div className="skill">
                <FaPython />
                <span>Python</span>
              </div>
              <div className="skill">
                <SiSass />
                <span>Sass</span>
              </div>
              <div className="skill">
                <SiBootstrap />
                <span>Bootstrap</span>
              </div>
              <div className="skill">
                <FaGitAlt />
                <span>Git</span>
              </div>
              <div className="skill">
                <BiLogoVisualStudio />
                <span>VSCode</span>
              </div>
              <div className="skill">
                <SiAdobephotoshop />
                <span>Photoshop</span>
              </div>
              <div className="skill">
                <SiAdobeillustrator />
                <span>Illustrator</span>
              </div>
              <div className="skill">
                <SiFigma />
                <span>Figma</span>
              </div>
              <div className="skill">
                <SiVuedotjs />
                <span>Vue.js</span>
              </div>
              <div className="skill">
                <SiVite />
                <span>Vite</span>
              </div>
            </div>
          </div>
        </article>
      </SectionContent>
    </main>
  );
}
