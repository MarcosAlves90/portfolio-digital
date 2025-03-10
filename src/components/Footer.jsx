import styled from 'styled-components';
import {useContext} from "react";
import {UserContext} from "../UserContext.jsx";

const FooterContainer = styled.footer`
    background-color: var(--background-color);
    color: var(--primary-font-color);
    flex-direction: column;
    gap: 1.5rem;
    font-family: 'Poppins', sans-serif;
    padding: 3rem 2rem 0 2rem;
    width: 100%;
    box-sizing: border-box;
    text-align: start;
    --common-gap: 0.7rem;
    display: none;

    .common-title {
        margin: 0;
        text-align: start;
    }

    .footer-top {
        display: flex;
        justify-content: space-between;

        .first-section {
            .site-title {
                font-size: 3rem;
                font-family: "Gavency", serif;
                font-weight: 300;
                margin: 0;
                cursor: pointer;

                &:hover {
                    color: var(--highlight-color);
                }

                &:active {
                    font-size: 2.8rem;
                }
            }

            .description {
                max-width: 450px;
            }
        }

        .banner-section {
            width: 60%;
            margin: 0 calc(var(--common-gap) * 6);
            background-color: var(--grid-color);
            height: 15rem;
            transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
            overflow: hidden;
            position: relative;
            text-align: center;
            border-radius: var(--common-border-radius);

            svg {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                fill: var(--primary-font-color);
                width: 90%;
                opacity: 0.2;
            }

            .content-box {
                padding: calc(var(--common-gap)) calc(var(--common-gap) * 2) 0 0;
            }

            @media (max-width: 1400px) {
                width: 100%;
                order: 3;
                margin: calc(var(--common-gap) * 3) 0 0 0;
            }
        }

        .second-section {
            display: flex;
            flex-direction: column;
            gap: var(--common-gap);

            a {
                color: var(--primary-font-color);
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }

                &:active {
                    transform: scale(0.9);
                }
            }
        }

        .last-section {
            display: flex;
            flex-direction: column;
            gap: var(--common-gap);
            
            .social-links {
                display: flex;
                gap: var(--common-gap);

                a {
                    color: var(--primary-font-color);
                    text-decoration: none;
                    font-size: 1.8rem;
                    transition: color 0.3s ease;

                    &:hover {
                        color: var(--highlight-color);
                    }
                }
            }

            .contact-info {
                font-size: 1rem;
                font-weight: 500;
                display: flex;
                flex-direction: column;
                gap: var(--common-gap);

                p {
                    margin: 0;
                }
            }
        }

        .sections-group {
            display: flex;
            align-items: start;
            gap: calc(var(--common-gap) * 6);
            border-color: var(--grid-color);
        }

        @media (max-width: 1400px) {
            flex-wrap: wrap;
        }
        @media (max-width: 1100px) {
            .first-section {
                width: 100%;
            }
            .sections-group {
                padding-top: 2rem;
                margin-top: 2rem;
                border-top: 2px solid var(--grid-color);
                width: 100%;
                gap: 2rem;
                flex-wrap: wrap;
                 .second-section, .last-section {
                    width: 100%;
                }
            }
        }
    }

    .footer-bottom {
        grid-column: span 4;
        font-size: 0.8rem;
        margin-top: 2rem;
        border-top: 2px solid var(--grid-color);
        padding: 2rem 0 2rem 0;
        width: 100%;
        text-align: center;
    }

    &.open {
        display: flex;
    }
`;

export default function Footer() {
    const {isMainPageVisible} = useContext(UserContext);

    return (<FooterContainer className={`${isMainPageVisible ? "open" : ""}`}>
        <div className={"footer-top"}>
            <div className={"first-section"}>
                <h1 className={"site-title"}>Portfolio</h1>
                <p className={"description"}>Desenvolvedor full-stack, designer gráfico e escritor, sempre disposto
                    a encarar desafios e criar
                    soluções inovadoras.</p>
            </div>
            <div className={"banner-section"}>
                <svg id="Camada_2" data-name="Camada 2" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 610.02 610.02">
                    <defs>
                        <style>{`
                            .cls-1 {
                                stroke-miterlimit: 10;
                            }
                        `}</style>
                    </defs>
                    <g id="Camada_1-2" data-name="Camada 1">
                        <path className="cls-1"
                              d="M305.01,610.02h0C305.01,441.57,168.45,305.01,0,305.01H0C168.45,305.01,305.01,168.45,305.01,0h0c0,168.45,136.56,305.01,305.01,305.01h0c-168.45,0-305.01,136.56-305.01,305.01Z"/>
                    </g>
                </svg>
                <div className={"content-box"}>
                </div>
            </div>
            <div className={"sections-group"}>
                <div className={"second-section"}>
                    <h2 className={"common-title"}>Menu</h2>
                    <a href="#home">Início</a>
                    <a href="#about">Sobre</a>
                    <a href="#projects">Projetos</a>
                    <a href="#contact">Contato</a>
                </div>
                <div className={"last-section"}>
                    <h2 className={"common-title"}>Contato</h2>
                    <div className="contact-info">
                        <p>Marcos Lopes | Desenvolvedor Full-Stack</p>
                        <p>Email: marcos.a.lopes7701@gmail.com</p>
                        <p>Telefone: +55 (11) 94927-3886</p>
                    </div>
                    <div className="social-links">
                        <a href="https://www.instagram.com/marcos.pilgrim" target="_blank"
                           rel="noopener noreferrer">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://wa.me/5511949273886" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-whatsapp"></i>
                        </a>
                        <a href="mailto:marcos.a.lopes7701@gmail.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-envelope-paper"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2025 Marcos Lopes. Todos os direitos reservados.</p>
        </div>
    </FooterContainer>);
}