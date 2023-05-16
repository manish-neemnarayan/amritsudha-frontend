import axios from "axios";
import { useState } from "react";

const SignUp = function() {

    const [userName, setUserName] = useState("yourname");
    const [email, setEmail] = useState("demomail@gmail.com");
    const [password, setPassword] = useState("Specify Your Password");
    const [role, setRole] = useState("MEMBER");

    // funtion to post data to my backend
    const handleSignup = async function() {
        await axios.post("/auth/signup", {
            userName,
            email,
            password,
            role
        })
    }


    return(
        <>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap h-[84vh] items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-8 lg:pr-0 pr-0">
                <h1 className="title-font font-medium text-3xl text-gray-900">Add a <span className="text-orange-500">New User</span> to Your Team</h1>
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                <div className="relative mb-4">
                    <label for="userName" className="leading-7 text-sm text-gray-600">Full Name</label>
                    <input onChange={(e) => setUserName(e.target.value)} type="text" id="userName" name="userName" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4">
                    <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4">
                    <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="user-select" className="leading-7 text-sm text-gray-600">Select User Type:</label>
                    <select id="user-select" onChange={(e) => setRole(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                        <option value="MEMBER">MEMBER</option>
                        <option value="ADMIN">ADMIN</option>
                    </select>
                </div>
                <button onClick={handleSignup} className="text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">SignUp</button>

                </div>
            </div>
        </section>
        </>
    )
}

export default SignUp;