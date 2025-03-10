import {useState, useRef, useEffect, useContext} from 'react';
import styled, { keyframes } from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaPhp, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobeillustrator, SiFigma, SiVuedotjs, SiVite, SiC, SiSass, SiBootstrap } from 'react-icons/si';
import { BiLogoVisualStudio } from 'react-icons/bi';
import Slideshow from '../components/SlideShow.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import ProjectCards from '../components/ProjectCards';
import {UserContext} from "../UserContext.jsx";

const backgroundAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

const SectionHeader = styled.div`
    height: calc(100vh - 8rem);
    padding: 8rem 0 0 0;
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
        font-weight: 300;
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
        border-radius: var(--common-border-radius);

        &:hover {
            background-color: var(--highlight-color);
        }

        &:active {
            transform: scale(0.9);
        }
    }
    
    @media (max-width: 950px) {
        background-size: 70px 70px;
        --common-font-size: 3.78vw;
        h1 {
            margin-top: -5vw;
            font-size: 17vw;
            &:active {
                font-size: 13vw;
            }
        }
        p {
            letter-spacing: 0;
            margin-top: -5vw;
            font-size: var(--common-font-size);
            padding-bottom: 5vw;
        }
        button {
            margin-top: 0;
            font-size: var(--common-font-size);
            padding: 0.5rem 22vw;
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
            border-radius: var(--common-border-radius);

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
                    width: 3.8rem;

                    svg {
                        cursor: pointer;
                        color: var(--highlight-color);
                        width: 50px;
                        height: 50px;

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
                    }
                }

                @media (max-width: 1050px) {
                    gap: 1rem;
                }
            }

            &.languages,
            .contactItem {
                width: 22rem;
            }

            &.education,
            &.skills {
                box-sizing: border-box;
                max-width: 50rem;
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

            &.viewer {
                display: flex;
                gap: 4rem;
                justify-content: center;
                align-items: start;
                width: 100%;

                .firstSlice {
                    width: 100%;
                    .buttonsBox {
                        gap: 1rem;
                        .clickButtton {
                            background-color: #f2d6bd;
                            outline: none;
                            color: var(--highlight-color);
                            border: none;
                            padding: 0.7rem 1rem;
                            font-size: 1rem;
                            cursor: pointer;
                            border-radius: var(--common-border-radius);
                            width: 100%;
                            font-family: "Poppins", serif;
                            font-weight: 600;
                            
                            &.reversed {
                                background-color: var(--highlight-color);
                                color: #f2d6bd;
                            }

                            &:active {
                                transform: scale(0.9);
                            }
                        }
                    }
                }
            }
        }

        &.sectionDarkBackground {
            background-color: var(--second-section-background-color);
            color: #f2d6bd;

            &.about {
                .imageBox {
                    height: 16rem;
                    width: 21rem;
                    background-color: var(--second-section-secondary-color);
                    display: flex;
                    align-items: flex-end;
                    border-radius: var(--common-border-radius) var(--common-border-radius) 0 var(--common-border-radius);

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
                .textBox p {
                    max-width: 30rem;
                }
                @media (max-width: 950px) {
                    flex-direction: column;
                    padding: 6rem 2rem 4rem 2rem;
                    .textBox {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                    }
                    .textBox p {
                        margin-bottom: 0;
                        text-align: justify;
                    }
                }
            }

            &.projects {
                padding: 7rem 18vw;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                @media (max-width: 1350px) {
                    padding: 7rem 10vw;
                }
            }
        }

        &.sectionCommonBackground {
            color: var(--primary-font-color);
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
    const sectionImageRef = useRef(null);
    const [currentProject, setCurrentProject] = useState(0);
    const {setSlideIndex, theme, isMainPageVisible, setIsMainPageVisible} = useContext(UserContext);

    const toggleIsOpen = () => {
        setIsMainPageVisible(!isMainPageVisible);
    };

useEffect(() => {
    if (isMainPageVisible && sectionImageRef.current) {
        const offset = 5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
        const elementPosition = sectionImageRef.current.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    }
}, [isMainPageVisible]);

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
                { src: './midnight/pagina_status.png', caption: 'Página de status' },
                { src: './midnight/pagina_skills.png', caption: 'Página de skills' },
                { src: './midnight/pagina_anotacoes.png', caption: 'Página de anotações' },
                { src: './midnight/pagina_inventario.png', caption: 'Página de inventário' },
                { src: './midnight/pagina_configuracoes.png', caption: 'Página de configurações' },
                { src: './midnight/pagina_login.png', caption: 'Página de login' },
            ],
            site: "https://tmwcse.vercel.app/",
            code: "https://github.com/MarcosAlves90/projetoRPG_TMW_Ficha/tree/develop",
        },
        {
            name: "Bunchin",
            description: "Imagine uma plataforma onde as empresas podem gerenciar funcionários, bater ponto e até corrigir eventuais erros de registro. Esse é o Bunchin, um site de ponto digital e gestão empresarial desenvolvido como parte do projeto interdisciplinar do segundo semestre da minha graduação.",
            smallDescription: "Plataforma de ponto digital e gestão empresarial.",
            images: [
                { src: './bunchin/image_1.png', caption: 'Página inicial' },
                { src: './bunchin/image_2.png', caption: 'Página de login' },
            ],
            code: "https://github.com/MarcosAlves90/bunchin/tree/main",
        },
        {
            name: "Dicenders",
            description: "O projeto Dicenders foi meu Trabalho de Conclusão de Curso na Etec Professora Maria Cristina " +
                "Medeiros, onde cursei Informática para Internet. Ele consiste em uma plataforma que integra recursos " +
                "de tabletop, ou seja, um aplicativo web para jogar RPG em formato virtual, com funcionalidades de uma " +
                "rede social.",
            smallDescription: "Tabletop virtual e rede social voltada à RPG.",
            images: [
                {src: "./dicenders/image_1.png", caption: "Página inicial"},
                {src: "./dicenders/image_2.png", caption: "Página de cadastro"},
            ],
            site: "https://dicenders-ai8s.onrender.com/",
            code: "https://github.com/Dicenders/DicendersSite",
        },
        {
            name: "Além do Olhar",
            description: "Plataforma online oficial que apresenta diversos trabalhos criativos de mulheres empreendedoras envolvidas no projeto “Além do Olhar”. Construída utilizando HTML, CSS, JavaScript e React, além de várias bibliotecas, como Bootstrap, Bootstrap Icons e Reactjs-popup.",
            smallDescription: "Plataforma de divulgação de trabalhos criativos.",
            images: [
                { src: './alem_do_olhar/pagina_inicial.png', caption: 'Página inicial' },
            ],
            site: "https://alem-do-olhar.vercel.app/",
            code: "https://github.com/MarcosAlves90/alem_do_olhar",
        },
        {
            name: "Coconut Links",
            description: "Construído com HTML, CSS, React e o módulo gh-pages do node, o Coconut Links reúne todos os meus links importantes (LinkedIn, GitHub, X (Twitter) e e-mail) com um design minimalista e agradável.",
            smallDescription: "Página de links pessoais estilo Linktree.",
            images: [
                { src: './coconut_links/image_1.png', caption: 'Página inicial' },
            ],
            site: "https://marcosalves90.github.io/coconut_links/",
            code: "https://github.com/MarcosAlves90/coconut_links",
        },
        {
            name: "Antônia Fernandes",
            description: "Site da Antônia Fernandes Store, uma loja online de moda feminina e acessórios, desenvolvido " +
                "utilizando a plataforma Bagy. Além do editor padrão, personalizei grande parte das seções com HTML e " +
                "CSS, e criei o logo e as imagens no Photoshop e Illustrator, garantindo um design único e alinhado " +
                "à identidade da marca.",
            smallDescription: "Loja online de moda feminina e acessórios.",
            images: [
                { src: './antonia_fernandes_store/imagem_1.png', caption: 'Página inicial' },
                { src: './antonia_fernandes_store/imagem_2.png', caption: 'Página de produtos' },
            ],
            site: "https://www.antoniafernandestore.com.br/",
        },
        {
            name: "Which Dog Are You?",
            description: "Projeto final do curso FRAMEWORK VALLEY: REACT do Codédex. Desenvolvi um quiz de personalidade em React que identifica qual raça de cachorro você seria, com base em preferências pessoais. Utilizei React Router, Context API e sessionStorage para navegação e estado, além de uma API externa para exibir imagens das raças. O site é responsivo, com design amigável e transições suaves.",
            smallDescription: "Quiz que indica qual seria sua raça de cachorro.",
            images: [
                { src: './which_dog_are_you/image_1.png', caption: 'Página inicial' },
                { src: './which_dog_are_you/image_2.png', caption: 'Página de sobre' },
            ],
            site: "https://which-dog-are-you.vercel.app/",
            code: "https://github.com/MarcosAlves90/personality_quiz"
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
                <button onClick={toggleIsOpen}>{isMainPageVisible ? "Fechar" : "Abrir"}</button>
            </SectionHeader>
            <SectionContent ref={sectionImageRef} className={isMainPageVisible ? "" : "closed"}>
                <article ref={el => sectionRefs.current[0] = el} className="sectionDarkBackground about">
                    <div className="imageBox">
                        <img src={theme === "dark" ? "/pilgrim.magenta.png" : "/pilgrim.ciano.png"} alt="Profile" />
                    </div>
                    <div className="textBox">
                        <h1>quem sou <strong>EU</strong>?</h1>
                        <p>
                            Sou um desenvolvedor full-stack, designer gráfico e escritor que está sempre disposto a encarar desafios.
                        </p>
                    </div>
                </article>
                <article className="sectionCommonBackground">
                    <div className="textBox">
                        <h1>Contatos</h1>
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
                        <h1>Idiomas</h1>
                        <div className="invertedBox languages">
                            <p>Português</p>
                            <ProgressBar progress={8} />
                            <p className="description">Meu idioma natal, nenhuma dificuldade</p>
                            <p>Inglês</p>
                            <ProgressBar progress={5} />
                            <p className="description">Eu entendo bem, mas minha conversação ainda pode melhorar</p>
                        </div>
                    </div>
                    <div className="textBox">
                        <h1>Educação / Experiência</h1>
                        <div className="invertedBox education">
                            <ul>
                                <li><span>2022 - 2023</span> Técnico em Informática para Internet</li>
                                <li><span>2024 - 2026</span> Tecnólogo em Desenvolvimento de Software Multiplataforma</li>
                                <li><span>2024 - ....</span> Fazendo freelances e criando projetos pessoais e acadêmicos</li>
                            </ul>
                        </div>
                        <h1>Habilidades</h1>
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
                        <div className="firstSlice">
                            <h1>{projects[currentProject].name}</h1>
                            <p>{projects[currentProject].description}</p>
                            <div className={"flex-row buttonsBox"}>
                                {projects[currentProject].site && <button className={"clickButtton reversed"} onClick={() => window.open(projects[currentProject].site, '_blank')}>Verificar Site</button>}
                                {projects[currentProject].code && <button className={"clickButtton"} onClick={() => window.open(projects[currentProject].code, '_blank')}>Código Fonte</button>}
                            </div>
                        </div>
                        <Slideshow slides={projects[currentProject].images} />
                    </div>
                    <ProjectCards projects={projects} setCurrentProject={handleProjectClick} />
                </article>
            </SectionContent>
        </main>
    );
}