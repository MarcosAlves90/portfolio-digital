import styled from 'styled-components';

const ProgressBarContainer = styled.div`
    width: 100%;
    overflow: hidden;
    display: flex;
    gap: 0.5rem;
`;

const ProgressSegment = styled.div`
    height: 0.5rem;
    background-color: ${({ $active }) => $active ? 'var(--highlight-color)' : 'var(--background-color)'};
    width: 12.5%;
`;

export default function ProgressBar({ language, progress }) {
    return (
        <ProgressBarContainer className={language}>
            {Array.from({ length: 8 }, (_, index) => (
                <ProgressSegment key={index} $active={index < progress} />
            ))}
        </ProgressBarContainer>
    );
}