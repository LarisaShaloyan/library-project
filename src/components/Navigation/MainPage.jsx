import React from 'react';
import HomePage from "./HomePage";
import Slider from "./Slider";

function MainPage(props) {
    return (
        <div>
            <Slider />
            <HomePage />
        </div>
    );
}

export default MainPage;