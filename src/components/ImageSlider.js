
import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import img1 from "../images/img-1.jpg"
import img2 from "../images/img-2.jpg"
import img3 from "../images/img-3.jpg"

const ImageSlider = function() {
    return(
        <>
        <div className="bg-gray-100 p-4" >
        <div className="flex justify-center items-center  w-[250px] md:w-[400px] m-auto pt-4">
            <AliceCarousel autoPlay autoPlayInterval="2000" >
            <div className="mb-4">
                <img src={img1} loading="eager" className="w-[100%] h-auto rounded-lg" alt="" />
            </div>

            <div className="mb-4">
                <img src={img2} loading="eager" className="w-[100%] h-auto rounded" alt="" />
            </div>
            <div className="mb-4">
                <img src={img3} loading="eager" className="w-[100%] h-auto rounded" alt="" />
            </div>
            </AliceCarousel>
        </div>
        </div>
        </>
    )
}

export default ImageSlider;
