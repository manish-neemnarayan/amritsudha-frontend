import {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import companyLogoTrans from "../images/logo-amritsudha-tp.png"

import bar from "../images/bar-cross/bars-filter.png"
import cross from "../images/bar-cross/cross.png"

const Header = function() {
    const [clickedHamburger, setClickedHamburger] = useState(true);
    const [imgChangeBar, setImgChangeBar] = useState(bar);
    const [curUser, setCurUser] = useState();

    function changeHamburgerState() {
        setClickedHamburger(!clickedHamburger);
        
        if(clickedHamburger) {
           return setImgChangeBar(cross);
        } else {
           return setImgChangeBar(bar)
        }
    }
    // current user getting from the browser
    useEffect(() => {
        if (localStorage.getItem("user") !== undefined ) {
            setCurUser(JSON.parse(localStorage.getItem("user")));
        } 
    },[]);

    return (
        <>
        <nav className="
            flex
            items-center
            md:justify-center
            justify-around
            gap-x-20 
            bg-blue-100
            shadow-xl
            pt-4
            rounded-lg
        ">
            {/* logo image */}
            <Link to="/">
            <img alt="this is logo" src={companyLogoTrans} 
            className="
                w-24
                rounded-sm
                pb-2
            "/>
            </Link>

            {/* nav items container */}
            <div className="
                hidden 
                md:block
                mb-2
                text-sm
            " >
               { (curUser && curUser.role === "ADMIN") ?
                <ul className="
                    flex
                    items-center
                    justify-center
                    gap-x-20
                    font-bold
                    font-serif
                    text-gray-800
                " > 
                
                    <li className="hover:text-gray-500" ><Link to="/"  >HOME</Link></li>
                    <li className="hover:text-gray-500" ><Link to="/aboutUs" >ABOUT US</Link></li>
                    {/* <li className="hover:text-gray-500" ><Link to="/fpokisanbazar" >FPO KISAN BAZAR</Link></li> */}
                    <li className="hover:text-gray-500" ><Link to="/gallery" >GALLERY</Link></li>
                    <li className="hover:text-gray-500" ><Link to="/faqs" >FAQs</Link></li>
                    <li className="hover:text-gray-500" ><Link to="/login" >LOGIN</Link></li>
                    <li className="hover:text-gray-500" ><Link to="/signup" >SIGNUP</Link></li>
                    <li className="hover:text-gray-500" ><Link to="/edit" >Edit</Link></li>
                    <li className="hover:text-gray-500" ><Link to="/edit/gallary" >Edit Gallery</Link></li>

                </ul>
                :
                <ul className="
                    flex
                    items-center
                    justify-center
                    gap-x-20
                    font-bold
                    font-serif
                    text-gray-800
                " > 
                
                    <li className="hover:text-gray-500" ><Link to="/"  >HOME</Link></li>
                    <li className="hover:text-gray-500" ><Link to="/aboutUs" >ABOUT US</Link></li>
                    {/* <li className="hover:text-gray-500" ><Link to="/fpokisanbazar" >FPO KISAN BAZAR</Link></li> */}
                    <li className="hover:text-gray-500" ><Link to="/gallery" >GALLERY</Link></li>
                    <li className="hover:text-gray-500" ><Link to="/faqs" >FAQs</Link></li>
                    <li className="hover:text-gray-500" ><Link to="/login" >LOGIN</Link></li>

                </ul>
                }
            </div>

            {/* FOR MOBILE RESPONSIVE */}
            {/* sidebar on click on hamburger */}
            <div className= {clickedHamburger ? "hidden" : `
                    md:hidden
                    fixed
                    left-0
                    top-0
                    w-full
                    h-full
                    z-50
                    backdrop-blur-sm
                    `} >
            
            <div className={`
                    md:hidden
                    fixed
                    left-0
                    top-0
                    w-[90vw]
                    h-full
                    z-50
                `} >
                
                {(curUser && curUser.role === "ADMIN") ?
                <ul className="
                    fixed
                    h-full
                    w-56
                    bg-white
                    left-0
                    top-0
                    p-8 
                    flex
                    flex-col
                    gap-y-10
                    bg-gradient-to-r from-orange-100  to-[#CAD5E2] 
                    font-bold
                    text-gray-800
                    font-serif
                    rounded-sm
                " >

                    <li className="hover:text-gray-500" ><Link to="/" onClick={changeHamburgerState} >HOME</Link></li>
                    <li className="hover:text-gray-500" ><Link to="/aboutUs" onClick={changeHamburgerState}>ABOUT US</Link></li>
                    {/* <li className="hover:text-gray-500" ><Link to="/fpokisanbazar" onClick={changeHamburgerState}>FPO KISAN BAZAR</Link></li> */}
                    <li className="hover:text-gray-500" ><Link to="/gallery" onClick={changeHamburgerState}>GALLERY</Link></li>
                    <li className="hover:text-gray-500" ><Link to="/faqs" onClick={changeHamburgerState}>FAQs</Link></li>
                    <li className="hover:text-gray-500" ><Link to="/login" onClick={changeHamburgerState} >LOGIN</Link></li>
                    <li className="hover:text-gray-500" ><Link to="/signup" onClick={changeHamburgerState} >SIGNUP</Link></li>
                    <li className="hover:text-gray-500" ><Link to="/edit" onClick={changeHamburgerState} >Edit</Link></li>
                    <li className="hover:text-gray-500" ><Link to="/edit/gallary" onClick={changeHamburgerState} >Edit Gallery</Link></li>
                    <li className="w-full ml-5">
                        <img src={companyLogoTrans} alt="trans logo footer" className="w-32 object-cover object-center " />
                    </li>
                   
                </ul>
                :
                <ul className="
                    fixed
                    h-full
                    w-56
                    bg-white
                    left-0
                    top-0
                    p-8 
                    flex
                    flex-col
                    gap-y-10
                    bg-gradient-to-r from-orange-100  to-[#CAD5E2] 
                    font-bold
                    text-gray-800
                    font-serif
                    rounded-sm
                " >

                    <li className="hover:text-gray-500" ><Link to="/" onClick={changeHamburgerState} >HOME</Link></li>
                    <li className="hover:text-gray-500" ><Link to="/aboutUs" onClick={changeHamburgerState}>ABOUT US</Link></li>
                    {/* <li className="hover:text-gray-500" ><Link to="/fpokisanbazar" onClick={changeHamburgerState}>FPO KISAN BAZAR</Link></li> */}
                    <li className="hover:text-gray-500" ><Link to="/gallery" onClick={changeHamburgerState}>GALLERY</Link></li>
                    <li className="hover:text-gray-500" ><Link to="/faqs" onClick={changeHamburgerState}>FAQs</Link></li>
                    <li className="hover:text-gray-500" ><Link to="/login" onClick={changeHamburgerState} >LOGIN</Link></li>

                    <li className="w-full ml-5">
                        <img src={companyLogoTrans} alt="trans logo footer" className="w-32 object-cover object-center " />
                    </li>
                   
                </ul>
                }
                <div className="
                    fixed
                    hidden
                    left-0
                    top-0
                    w-full
                    h-full
                    bg-gray-300
                    -z-50
                    opacity-10
                " ></div>

            </div>
            </div>
            <img onClick={changeHamburgerState} className="
                md:hidden
                cursor-pointer
                w-5
                z-50
                mb-3
            "  alt="alter" src={imgChangeBar} ></img>
        </nav>

        
        </>
    )
}

export default Header;