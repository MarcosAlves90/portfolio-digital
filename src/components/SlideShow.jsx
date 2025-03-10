import { useEffect, useRef, useCallback, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from "../UserContext.jsx";
import PropTypes from "prop-types";

const SlideshowContainer = styled.div`
    max-width: 1000px;
    position: relative;
    margin: auto;
`;

const Slide = styled.div`
    display: ${props => (props.$active ? 'block' : 'none')};
    width: 640px;
    height: 360px;

    @media (max-width: 1600px) {
        width: 480px;
        height: 270px;
    }
`;

const SlideImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--common-border-radius);
`;

const TextOverlay = styled.div`
    color: #f2f2f2;
    font-size: ${props => props.$size}px;
    padding: 8px 12px;
    position: absolute;
    mix-blend-mode: difference;
    background: rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
`;

const NavigationButton = styled.button`
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 14px;
    margin-top: -22px;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    user-select: none;
    border: none;
    background-color: rgba(var(--highlight-color-rgb), 0.4);
    backdrop-filter: blur(10px);
    color: white;
    --navigation-border-radius: calc(var(--common-border-radius) / 2);

    &.prev {
        left: 0;
        border-radius: 0 var(--navigation-border-radius) var(--navigation-border-radius) 0;
    }

    &.next {
        right: 0;
        border-radius: var(--navigation-border-radius) 0 0 var(--navigation-border-radius);
    }
`;

const DotsContainer = styled.div`
    text-align: center;
`;

const Dot = styled.button`
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 4px;
    border: none;
    border-radius: calc(var(--common-border-radius) / 2);
    background-color: rgba(var(--highlight-color-rgb), 0.3);
    transition: background-color 0.3s ease;

    &:hover,
    &:focus,
    &[aria-current="true"] {
        background-color: rgba(var(--highlight-color-rgb), 1);
        outline: none;
    }
`;

export default function SlideShow({ slides }) {
    const { slideIndex, setSlideIndex } = useContext(UserContext);
    const intervalRef = useRef(null);
    const totalSlides = slides.length;

    const nextSlide = useCallback(() => {
        setSlideIndex(prev => (prev % totalSlides) + 1);
    }, [totalSlides]);

    const resetInterval = useCallback(() => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(nextSlide, 7000);
    }, [nextSlide]);

    const changeSlide = useCallback((n) => {
        setSlideIndex(prev => {
            const newIndex = (prev - 1 + n + totalSlides) % totalSlides;
            return newIndex + 1;
        });
        resetInterval();
    }, [totalSlides, resetInterval]);

    const goToSlide = useCallback((n) => {
        setSlideIndex(n);
        resetInterval();
    }, [resetInterval]);

    useEffect(() => {
        resetInterval();
        return () => clearInterval(intervalRef.current);
    }, [resetInterval]);

    return (
        <div>
            <SlideshowContainer>
                {slides.map((slide, index) => {
                    const slideNumber = index + 1;
                    return (
                        <Slide key={slide.src} $active={slideIndex === slideNumber}>

                            <SlideImage
                                src={slide.src}
                                alt={slide.caption || `Slide ${slideNumber}`}
                                loading="lazy"
                            />

                            {slide.caption && (
                                <TextOverlay $size={15} style={{ width: "100%", bottom: 0, textAlign: 'center' }}>
                                    {slide.caption}
                                </TextOverlay>
                            )}
                        </Slide>
                    );
                })}

                <NavigationButton
                    className="prev"
                    onClick={() => changeSlide(-1)}
                    aria-label="Previous slide"
                >
                    ❮
                </NavigationButton>

                <NavigationButton
                    className="next"
                    onClick={() => changeSlide(1)}
                    aria-label="Next slide"
                >
                    ❯
                </NavigationButton>
            </SlideshowContainer>

            <DotsContainer>
                {slides.map((_, index) => {
                    const slideNumber = index + 1;
                    return (
                        <Dot
                            key={slideNumber}
                            onClick={() => goToSlide(slideNumber)}
                            aria-label={`Go to slide ${slideNumber}`}
                            aria-current={slideIndex === slideNumber}
                        />
                    );
                })}
            </DotsContainer>
        </div>
    );
}

SlideShow.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            caption: PropTypes.string,
        }).isRequired
    ).isRequired,
};
