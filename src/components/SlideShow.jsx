import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const SlideshowContainer = styled.div`
    max-width: 1000px;
    position: relative;
    margin: auto;
    img {
        border-radius: 10px;
    }
`;

const Slide = styled.div`
    display: ${props => (props.$active ? 'block' : 'none')};
    width: 640px;
    height: 360px;
    @media (max-width: 1180px) {
        width: 480px;
        height: 270px;
    }
`;

const NumberText = styled.div`
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
    mix-blend-mode: difference;
`;

const CaptionText = styled.div`
    color: #f2f2f2;
    font-size: 15px;
    padding: 8px 12px;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    mix-blend-mode: difference;
    box-sizing: border-box;
`;

const PrevNextButton = styled.a`
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 14px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    user-select: none;
    background-color: rgba(var(--highlight-color-rgb), 0.7);   
    backdrop-filter: blur(10px);
    
    &.prev {
        left: 0;
        border-radius: 0 20px 20px 0;
    }

    &.next {
        right: 0;
        border-radius: 20px 0 0 20px;
    }
`;

const DotsContainer = styled.div`
    text-align: center;
`;

const Dot = styled.span`
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 10px 2px 0 2px;
    background-color: rgba(var(--highlight-color-rgb), 0.5);
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;

    &.active, &:hover {
        background-color: rgba(var(--highlight-color-rgb), 1);
    }
`;

export default function SlideShow({ slides }) {
    const [slideIndex, setSlideIndex] = useState(1);
    const intervalRef = useRef(null);

    const resetInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex % slides.length) + 1);
        }, 7000);
    };

    const plusSlides = (n) => {
        setSlideIndex((prevIndex) => {
            let newIndex = prevIndex + n;
            if (newIndex > slides.length) newIndex = 1;
            if (newIndex < 1) newIndex = slides.length;
            return newIndex;
        });
        resetInterval();
    };

    const currentSlide = (n) => {
        setSlideIndex(n);
        resetInterval();
    };

    useEffect(() => {
        resetInterval();
        return () => clearInterval(intervalRef.current);
    }, [slides.length]);

    return (
        <div>
            <SlideshowContainer>
                {slides.map((slide, index) => (
                    <Slide key={index} $active={slideIndex === index + 1}>
                        <NumberText>{index + 1} / {slides.length}</NumberText>
                        <img src={slide.src} style={{ width: '100%', height: '100%' }} alt={`Slide ${index + 1}`} />
                        <CaptionText>{slide.caption}</CaptionText>
                    </Slide>
                ))}
                <PrevNextButton className="prev" onClick={() => plusSlides(-1)}>❮</PrevNextButton>
                <PrevNextButton className="next" onClick={() => plusSlides(1)}>❯</PrevNextButton>
            </SlideshowContainer>
            <DotsContainer>
                {slides.map((_, index) => (
                    <Dot key={index} className={slideIndex === index + 1 ? 'active' : ''}
                         onClick={() => currentSlide(index + 1)}></Dot>
                ))}
            </DotsContainer>
        </div>
    );
}