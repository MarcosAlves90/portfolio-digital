import {useState, useRef, useEffect, useContext} from 'react';
import styled, { keyframes } from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaPhp, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobeillustrator, SiFigma, SiVuedotjs, SiVite, SiC, SiSass, SiBootstrap } from 'react-icons/si';
import { BiLogoVisualStudio } from 'react-icons/bi';
import Slideshow from '../components/slideshow.jsx';
import ProgressBar from '../components/ProgressBar';
import ProjectCards from '../components/ProjectCards';
import {System, UserContext} from "../UserContext.jsx";

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

        &:hover {
            background-color: var(--highlight-color);
        }

        &:active {
            transform: scale(0.9);
        }
    }
`;

const SectionContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    article {
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
            }

            &.education,
            &.skills {
                box-sizing: border-box;
                max-width: 55rem;
            }
        }

        &.sectionDarkBackground {
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
                    transform-origin: bottom;
                    cursor: pointer;

                    &:active {
                        transform: scale(0.9);
                    }
                }
            }

            &.projects {
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
            }
        }

        &.sectionCommonBackground {
            color: var(--primary-font-color);
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

            &.viewer {
                display: flex;
                gap: 4rem;
                justify-content: center;
                align-items: start;

                .viewer-image {
                    width: 40%;
                    height: auto;
                    cursor: pointer;

                    &:active {
                        transform: scale(0.9);
                    }

                    img {
                        width: 100%;
                        height: auto;
                    }
                }

                .text {
                    width: 26rem;
                }

                @media (max-width: 1180px) {
                    gap: 2rem;
                }
            }
        }
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

export default function MainPage({sectionRefs}) {
    const [isOpen, setIsOpen] = useState(false);
    const sectionImageRef = useRef(null);
    const [currentProject, setCurrentProject] = useState(0);
    const {setSlideIndex} = useContext(UserContext);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen && sectionImageRef.current) {
            const offset = (7.95 * window.innerHeight) / 100;
            const elementPosition = sectionImageRef.current.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    }, [isOpen]);

    const projects = [
        {
            name: "MidNight",
            description: "Um projeto de ficha online feito para o jogo de RPG de mesa virtual \"The Mental World\". " +
                "O projeto utiliza tecnologias como HTML, CSS, JavaScript, React e Vite para seu funcionamento e " +
                "estilização. A ideia é que o usuário seja capaz de montar sua ficha na plataforma e baixá-la em " +
                "formato JSON para usos futuros.",
            smallDescription: "Plataforma de fichas de RPG de mesa.",
            images: [
                { src: './midnight/homepage.png', caption: 'Página inicial' },
                { src: './midnight/individual.png', caption: 'Página de individual' },
                { src: './midnight/caracteristicas.png', caption: 'Página de características' },
            ]
        },
        {
            name: "Bunchin",
            description: "Imagine uma plataforma onde as empresas podem gerenciar funcionários, bater ponto e até corrigir eventuais erros de registro. Esse é o Bunchin, um site de ponto digital e gestão empresarial desenvolvido como parte do projeto interdisciplinar do segundo semestre da minha graduação.",
            smallDescription: "Plataforma de ponto digital e gestão empresarial.",
            images: [
                { src: 'https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp', caption: 'Caption Text' },
                { src: 'https://css-tricks.com/wp-content/uploads/2016/01/the-difference-placeholder.png', caption: 'Caption Text' },
            ]
        },
        {
            name: "Dicenders",
            description: "O projeto Dicenders foi meu Trabalho de Conclusão de Curso na Etec Professora Maria Cristina " +
                "Medeiros, onde cursei Informática para Internet. Ele consiste em uma plataforma que integra recursos " +
                "de tabletop, ou seja, um aplicativo web para jogar RPG em formato virtual, com funcionalidades de uma " +
                "rede social.",
            smallDescription: "Tabletop virtual e rede social voltada à RPG.",
            images: [
                { src: 'https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp', caption: 'Caption Text' },
                { src: 'https://css-tricks.com/wp-content/uploads/2016/01/the-difference-placeholder.png', caption: 'Caption Text' },
            ]
        }

    ];

    function handleProjectClick(index) {
        setSlideIndex(1);
        setCurrentProject(index);
    }

    return (
        <main>
            <SectionHeader>
                <h1>Portfolio</h1>
                <p>Marcos Lopes | Desenvolvedor Full-Stack</p>
                <button onClick={toggleIsOpen}>{isOpen ? "Fechar" : "Abrir"}</button>
            </SectionHeader>
            <SectionContent ref={sectionImageRef} className={isOpen ? "" : "closed"}>
                <article ref={el => sectionRefs.current[0] = el} className="sectionDarkBackground">
                    <div className="imageBox">
                        <img src="/foto_perfil.png" alt="Profile" />
                    </div>
                    <div className="textBox">
                        <h1>quem sou <strong>EU</strong>?</h1>
                        <p>
                            Sou um desenvolvedor full-stack, designer gráfico e escritor<br/>que está sempre disposto a encarar desafios.
                        </p>
                    </div>
                </article>
                <article className="sectionCommonBackground">
                    <div className="textBox">
                        <h1>contatos</h1>
                        <div className="invertedBox">
                            <div className="contactItem">
                                <i className="bi bi-envelope-paper"></i>
                                <a href="mailto:marcos.a.lopes7701@gmail.com" target="_blank" rel="noopener noreferrer">marcos.a.lopes7701@gmail.com</a>
                            </div>
                            <div className="contactItem">
                                <i className="bi bi-instagram"></i>
                                <a href="https://www.instagram.com/marcos.pilgrim" target="_blank" rel="noopener noreferrer">@marcos.pilgrim</a>
                            </div>
                            <div className="contactItem">
                                <i className="bi bi-whatsapp"></i>
                                <a href="https://wa.me/5511949273886" target="_blank" rel="noopener noreferrer">+55 (11) 94927-3886</a>
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
                        <h1>habilidades</h1>
                        <div className="invertedBox skills">
                            {[
                                { icon: <FaHtml5 />, name: 'HTML5' },
                                { icon: <FaCss3Alt />, name: 'CSS3' },
                                { icon: <FaJs />, name: 'JavaScript' },
                                { icon: <FaReact />, name: 'React' },
                                { icon: <FaNodeJs />, name: 'Node.js' },
                                { icon: <FaPhp />, name: 'PHP' },
                                { icon: <FaJava />, name: 'Java' },
                                { icon: <SiC />, name: 'C' },
                                { icon: <FaPython />, name: 'Python' },
                                { icon: <SiSass />, name: 'Sass' },
                                { icon: <SiBootstrap />, name: 'Bootstrap' },
                                { icon: <FaGitAlt />, name: 'Git' },
                                { icon: <BiLogoVisualStudio />, name: 'VSCode' },
                                { icon: <SiAdobephotoshop />, name: 'Photoshop' },
                                { icon: <SiAdobeillustrator />, name: 'Illustrator' },
                                { icon: <SiFigma />, name: 'Figma' },
                                { icon: <SiVuedotjs />, name: 'Vue.js' },
                                { icon: <SiVite />, name: 'Vite' },
                            ].map((skill, index) => (
                                <div className="skill" key={index}>
                                    {skill.icon}
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </article>
                <article ref={el => sectionRefs.current[1] = el} className="sectionDarkBackground projects">
                    <div className="textBox viewer">
                        <div className="text">
                            <h1>{projects[currentProject].name}</h1>
                            <p>{projects[currentProject].description}</p>
                        </div>
                        <Slideshow slides={projects[currentProject].images} />
                    </div>
                    <ProjectCards projects={projects} setCurrentProject={handleProjectClick} />
                </article>
            </SectionContent>
        </main>
    );
}