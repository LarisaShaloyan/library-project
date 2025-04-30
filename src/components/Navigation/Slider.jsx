import React, { useState, useEffect } from "react";
 import slider1 from '../image/slider1.jpg';
 import slider2 from '../image/slider2.jpg';
 import slider3 from '../image/slider3.jpg';
const slides = [
    {
        id: 1,
        image: slider1,
        text: "Բարի գալուստ լեզվական արկածի աշխարհ",
    },
    {
        id: 2,
        image: slider2,
        text: "Սովորիր հայերեն, անգլերեն և ռուսերեն միաժամանակ",
    },
    {
        id: 3,
        image: slider3,
        text: "Անվճար դասեր, գործնական վարժություններ",
    },
];

 function Slider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-[400px] relative overflow-hidden rounded-xl shadow-lg">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                        index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.text}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
                            {slide.text}
                        </h2>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Slider;