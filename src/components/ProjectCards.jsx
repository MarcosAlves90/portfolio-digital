import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    align-items: start;
`;

const Card = styled.div`
    width: 250px;
    overflow: hidden;
    cursor: pointer;

    &:active {
        transform: scale(0.9);
    }

    img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 10px;
    }

    .card-content {
        padding: 1rem;
        color: #e9e5e2;
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