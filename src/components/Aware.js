import axios from "axios";
import React, { useState } from "react";

const Aware = function() {
    const [allNotices, setAllNotices] = useState("");
    const [awareProgrammes, setAwareProgrammes] = useState("");
    const [curUser, setCurUser] = useState();
    // fetch function to get all the notices
    const getNotices = async function() {
        await axios.get("/notice/getAll").then(res => setAllNotices(res.data.notices));
    }

    // fetch function to get all the awareness programmes
    const getAwareProgrmmes = async function() {
        await axios.get("/program/getAll").then(res => setAwareProgrammes(res.data.programs));
    }

    // use effect
    React.useEffect( ()=> {
        getAwareProgrmmes();
        getNotices();
    }, []);
    
    React.useEffect(() => {
        setCurUser(JSON.parse(localStorage.getItem("user")));
    },[]);

    return(
        <>
        <div className="
            flex
            justify-center
            w-full md:w-[98.8vw]
            p-2
            bg-blue-100
            flex-wrap
            md:flex-nowrap
        ">
            {/* left container */}
            <div className="
                w-full
                h-full
                rounded-xl
            ">
            <div className="
                flex
                flex-col
                md:p-8
                pb-8
            ">
                <h2 className="
                    text-3xl
                    text-green-800
                    md:text-4xl
                    font-bold
                    pb-8
                    underline
                ">Awareness Programmes</h2>
                {
                    (curUser && (curUser.role === "MEMBER" || curUser.role === "ADMIN")) ? 
                    <ul className="
                    overflow-y-scroll
                    h-52
                    shadow-inner
                    p-4
                    bg-white
                    rounded-xl
                ">
                     <li className="pb-4 text-m w-full font-semibold text-violet-700">
                        <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container py-2 mx-auto">
                            <div className="-my-8 divide-y-2 divide-gray-100">
                            {/* mapping all the notices fetching from database */}
                                {Array.from(awareProgrammes).map((program, index) => {
                                    return <div key={index} className="py-8 flex flex-wrap md:flex-nowrap">
                                        <div className="md:w-64 w-full md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                            <span className="mt-1 mb-1 text-gray-500 text-sm">{program.updatedAt.slice(0, 10)}</span>
                                        </div>
                                        <div className="md:flex-grow">
                                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{program.title}</h2>
                                            <p className="leading-relaxed">{program.message}</p>
                                        </div>
                                    </div>
                                })}
                            
                            </div>
                        </div>
                        </section>
                    </li>
                </ul> 
                :
                <ul className="
                    overflow-y-scroll
                    h-[26rem]
                    shadow-inner
                    p-4
                    bg-white
                    rounded-xl
                ">
                     <li className="pb-4 text-m w-full font-semibold text-violet-700">
                        <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container py-2 mx-auto">
                            <div className="-my-8 divide-y-2 divide-gray-100">
                            {/* mapping all the notices fetching from database */}
                                {Array.from(awareProgrammes).map((program, index) => {
                                    return <div key={index} className="py-8 flex flex-wrap md:flex-nowrap">
                                        <div className="md:w-64 w-full md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                            <span className="mt-1 mb-1 text-gray-500 text-sm">{program.updatedAt.slice(0, 10)}</span>
                                        </div>
                                        <div className="md:flex-grow">
                                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{program.title}</h2>
                                            <p className="leading-relaxed">{program.message}</p>
                                        </div>
                                    </div>
                                })}
                            
                            </div>
                        </div>
                        </section>
                    </li>
                </ul>
                }
            </div>

            {/* notices */}
            { (curUser && (curUser.role === "MEMBER" || curUser.role === "ADMIN")) ?
            <div className="
                w-full
                flex
                flex-col
                md:p-8
                pb-8
            ">
                <h2 className="
                    text-3xl
                    text-green-800
                    md:text-4xl
                    font-bold
                    pb-8
                    underline
                ">Notices</h2>
                
                <ul className="
                    overflow-y-scroll
                    h-52
                    shadow-inner
                    p-4
                    bg-white
                    rounded-xl
                " >
                    <li className="pb-4 text-m w-full font-semibold text-violet-700">
                        <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container py-2 mx-auto">
                            <div className="-my-8 divide-y-2 divide-gray-100">
                            {/* mapping all the notices fetching from database */}
                                {Array.from(allNotices).map((notice, index) => {
                                    return <div key={index} className="py-8 flex flex-wrap md:flex-nowrap">
                                        <div className="md:w-64 w-full md:mb-0 mb-6  flex-shrink-0 flex flex-col">
                                            <span className="mt-1 mb-1 text-gray-500 text-sm">{notice.updatedAt.slice(0, 10)}</span>
                                        </div>
                                        <div className="md:flex-grow">
                                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{notice.title}</h2>
                                            <p className="leading-relaxed">{notice.message}</p>
                                        </div>
                                    </div>
                                })}
                            
                            </div>
                        </div>
                        </section>
                    </li>
                </ul>
            </div>
            : ""
            }
            </div>
            
            {/* sidebar container for videos */}
            <div className="
                w-1/3
                flex
                flex-col
                items-center
                
            ">
                <iframe className="md:w-2/3 md:m-auto md:p-2 rounded-xl p-2"  src="https://www.youtube.com/embed/SbPPJw_qHxM" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe className="md:w-2/3 md:m-auto md:p-2 rounded-xl p-2"  src="https://www.youtube.com/embed/SbPPJw_qHxM" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe className="md:w-2/3 md:m-auto md:p-2 rounded-xl p-2"  src="https://www.youtube.com/embed/SbPPJw_qHxM" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
        </>
    )
}

export default Aware