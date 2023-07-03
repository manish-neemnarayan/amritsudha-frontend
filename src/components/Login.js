import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = function() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const navigate = useNavigate();

    const emailHandle = (e) => {
        return setEmail(e.target.value)
    }
    const passHandle = (e) => {
        return setPassword(e.target.value)
    }

    // to logout
    // const logout = async function() {
    //     await axios.post(`https://amritsudha-backend-server123.onrender.com/api/auth/logout`);
    // }


    // main function to connect with our backend
    const handleSubmit = async (e) => {
        // logout();
        e.preventDefault();
        // fetch method to get data response
        const res = await axios.post('https://amritsudha-backend-server123.onrender.com/api/auth/login', {
            email,
            password
          }, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '.onrender.com',
                'withCredentials': true, // Set as boolean value
            }
          });
        console.log(res)
        const data =  res.data;
        console.log(data)
        if(data?.user) {
            localStorage.setItem("user", JSON.stringify(data.user));
        } 
        // else {
            // localStorage.setItem("user", JSON.stringify({role : "user"}));
        // }
        
        navigate("/");
        // window.location.reload();
        setEmail("");
        setPassword("");

    }

    return(
        <>
        <section className="text-gray-600 md:h-[80vh] body-font relative">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Login</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
                <form method="POST" className="w-full">
                    <div className="p-2 ">
                    <div className="relative">
                        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" onChange={emailHandle}  id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    </div>
                    <div className="p-2 ">
                    <div className="relative">
                        <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
                        <input type="password" onChange={passHandle} id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    </div>
                    
                    <div className="p-2 md:pt-28 w-full">
                    <button type="submit" onClick={handleSubmit} className="flex mx-auto text-white bg-orange-400 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg font-bold">Login</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
        </section>        
        </>
    )
} 

export default Login;