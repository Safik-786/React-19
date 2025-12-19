
// 1. Two Valid Carousel Patterns

// A. Track + Transform Carousel (previous approach)
// Render all slides
// Move container using transform: translateX
// Best for:
// Smooth sliding animations
// Swipe gestures
// Complex transitions

import React, { useEffect, useRef, useState } from "react";

/* ------------------ JSON DATA ------------------ */
const slidesData = [
    {
        id: 1,
        title: "Welcome",
        description: "This is the first slide",
        bg: "bg-red-400",
    },
    {
        id: 2,
        title: "Discover",
        description: "This is the second slide",
        bg: "bg-blue-400",
    },
    {
        id: 3,
        title: "Build",
        description: "This is the third slide",
        bg: "bg-green-400",
    },
];

/* ------------------ COMPONENT ------------------ */
export default function Carousel() {
    const [index, setIndex] = useState(0);
    const timerRef = useRef(null);
    const SLIDE_INTERVAL = 3000;

    /* ------------------ TIMER FUNCTIONS ------------------ */

    const startTimer = () => {
        if (timerRef.current) return; // prevent multiple intervals

        timerRef.current = setInterval(() => {
            setIndex((prev) =>
                prev === slidesData.length - 1 ? 0 : prev + 1
            );
        }, SLIDE_INTERVAL);
    };

    const stopTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
    };

    /* ------------------ LIFECYCLE ------------------ */

    useEffect(() => {
        startTimer();
        return stopTimer; // cleanup on unmount
    }, []);

    /* ------------------ RENDER ------------------ */

    return (
        <div
            className="relative w-full max-w-xl mx-auto overflow-hidden rounded-lg"
            onMouseEnter={stopTimer}
            onMouseLeave={startTimer}
        >
            {/* Slides */}
            <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {slidesData.map((slide) => (
                    <div
                        key={slide.id}
                        className={`w-full flex-shrink-0 h-64 flex items-center justify-center text-white ${slide.bg}`}
                    >
                        <div className="text-center">
                            <h2 className="text-2xl font-bold">{slide.title}</h2>
                            <p className="mt-2">{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={() =>
                    setIndex(index === 0 ? slidesData.length - 1 : index - 1)
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded"
            >
                ‹
            </button>

            <button
                onClick={() =>
                    setIndex(index === slidesData.length - 1 ? 0 : index + 1)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded"
            >
                ›
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slidesData.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}






// B. Index-Based Carousel (Your idea)
// Render only the active slide
// Change index
// Re-render content
// Best for:
// Image banners
// Hero sections
// Simple auto-rotating content
// Lower memory usage
// ✔ Your approach is correct and often preferred


const slides = [
    {
        id: 1,
        name: "Mountains",
        imgUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
        id: 2,
        name: "Forest",
        imgUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
        id: 3,
        name: "Ocean",
        imgUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
];


export function ImageCarousel() {
    const [index, setIndex] = useState(0);
    const timerRef = useRef(null);
    const INTERVAL = 3000;

    const startTimer = () => {
        if (timerRef.current) return;

        timerRef.current = setInterval(() => {
            setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, INTERVAL);
    };

    const stopTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
    };

    useEffect(() => {
        startTimer();
        return stopTimer;
    }, []);

    const currentSlide = slides[index];

    return (
        <div
            className="relative w-full max-w-xl mx-auto"
            onMouseEnter={stopTimer}
            onMouseLeave={startTimer}
        >
            {/* Image */}
            <div className="overflow-hidden rounded-lg">
                <img
                    src={currentSlide.imgUrl}
                    alt={currentSlide.name}
                    className="w-full h-64 object-cover transition-opacity duration-500"
                />
            </div>

            {/* Caption */}
            <h2 className="mt-2 text-center font-semibold">
                {currentSlide.name}
            </h2>

            {/* Controls */}
            <button
                onClick={() =>
                    setIndex(index === 0 ? slides.length - 1 : index - 1)
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded"
            >
                ‹
            </button>

            <button
                onClick={() =>
                    setIndex(index === slides.length - 1 ? 0 : index + 1)
                }
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded"
            >
                ›
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-3 gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full ${i === index ? "bg-black" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
