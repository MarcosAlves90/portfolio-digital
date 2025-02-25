import styled from 'styled-components';

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    justify-items: center;
    align-items: start;
    width: 100%;
    @media (max-width: 1350px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;

const Card = styled.div`
    width: 100%;
    overflow: hidden;
    cursor: pointer;

    &:active {
        transform: scale(0.9);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card-content {
        padding: 1rem;
        color: #F2E3D5;
        width: 100%;
        box-sizing: border-box;

        h2 {
            font-size: 1.2rem;
            margin: 0 0 0.5rem 0;
        }

        p {
            font-size: 0.9rem;
            margin: 0;
        }

        @media (max-width: 1350px) {
            h2 {
                font-size: 1rem;
            }
            p {
                font-size: 0.8rem;
            }
        }
    }
`;

export default function ProjectCards({ projects, setCurrentProject }) {
    return (
        <CardContainer>
            {projects.map((project, index) => (
                <Card key={index} onClick={() => setCurrentProject(index)}>
                    <img src={project.images[0].src} alt={project.name} />
                    <div className="card-content">
                        <h2>{project.name}</h2>
                        <p>{project.smallDescription}</p>
                    </div>
                </Card>
            ))}
        </CardContainer>
    );
}