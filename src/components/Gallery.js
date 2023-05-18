import React, { useContext } from "react";
import MyContext from "../utils/context";

const Gallery = function() {

    const {images} = useContext(MyContext);

    return(
        <>
        <section className="text-gray-600 body-font bg-orange-50 mt-2 md:h-[85vh]">
          <div className="container h-full px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Enterprise <span className="text-orange-500" >Photos </span> Collection</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
            </div>
            {
              (!images) ? <p>Loading...</p>
              :
            <div className="flex justify-center items-center flex-wrap -m-4 md:h-[90vh]">
              {
              Array.from(images).map((photo, index) => {
                return (
                    <div key={index} className="lg:w-1/2 sm:w-1/2 p-4">
                      <div className="flex group relative">
                        <img alt="gallery" className="inset-0 w-full h-full object-cover object-center" src={photo.avatar} />
                        <div className="bg-white opacity-90 z-50 hidden group-hover:grid absolute top-0 left-0 w-full h-full place-content-center ">
                          <h2 className="text-3xl title-font font-medium text-orange-500 mb-1">THE SUBTITLE</h2>
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{photo.title}</h1>
                          <p className="leading-relaxed">{photo.description}</p>
                        </div>
                      </div>
                    </div>
                )
              })}
            </div>
            }
          </div>
        </section> 
        </>
    )
}

export default Gallery;
