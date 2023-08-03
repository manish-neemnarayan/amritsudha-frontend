import axios from "axios";
import React, { useContext} from "react";
import { useEffect, useState } from 'react';
import MyContext from "../utils/context";

function EditUserPage() {
    let [userName, setName] = useState();
    let [email, setEmail] = useState();
    let [_password, setPassword] = useState();
    let [_role, setRole] = useState();

    const {notices, programmes} = useContext(MyContext); //notices fetch from context

    // EDIT USER handling START-------------------------------------------------------------------------------------
    // able to edit it toggle the disabled attr on input element
    let [edit, setEdit] = useState(true);


    // for updating the boolean value of edit usestate--------------------------------
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios.get(`https://amritsudha-backend-server123.onrender.com/apiauth/getAllUser`).then(res => {
            setPost(res.data.users);
        })
    }, [post])

    // for updating the value in db-------------------------------------
    const handleUpdate = async (userId) => {
        await axios.put(`https://amritsudha-backend-server123.onrender.com/api/auth/user/update/${userId}`, {
            userName,
            email
        })
        window.location.reload();
    }

    // for removing user from the db
    const handleDelete = async (userId) => {
        await axios.delete(`https://amritsudha-backend-server123.onrender.com/api/auth/user/delete/${userId}`).then(res => alert(res.data.message));
        window.location.reload();
    }

    // EDIT USER handling ENDING-----------------------------------------------------------------------------------------------------------

    // EDIT NOTICE handling STARTING----------------------------------------------------------------------------------------------------

        let [editNotice, setEditNotice] = useState(true);
        let [noticeTitle, setNoticeTitle] = useState();
        let [noticeMessage, setNoticeMessage] = useState();  
        
        // for updating the value in db-------------------------------------
        const handleUpdateNotice = async () => {
            await axios.put(`https://amritsudha-backend-server123.onrender.com/api/notice/create`, {
                title: noticeTitle,
                message: noticeMessage
            })
            window.location.reload();

        }

        // for removing user from the db
        const handleNoticeDelete = async (noticeId) => {
            await axios.delete(`https://amritsudha-backend-server123.onrender.com/api/notice/delete/${noticeId}`).then(res => alert(res.data.message));
            window.location.reload();
        }
    // EDIT NOTICE handling ENDING----------------------------------------------------------------------------------------------------
   
    // ADD NOTICE handling STARTING----------------------------------------------------------------------------------------------------
    let [addNoticeTitle, setAddNoticeTitle] = useState();
    let [addNoticeMessage, setAddNoticeMessage] = useState();

    const handleAddNotice = async function() {
        await axios.post(`https://amritsudha-backend-server123.onrender.com/api/notice/create`, {
            title: addNoticeTitle,
            message: addNoticeMessage
        })
        window.location.reload();
    }
    // ADD NOTICE handling ENDING----------------------------------------------------------------------------------------------------

    // EDIT PROGRAMMES handling STARTING----------------------------------------------------------------------------------------------------
    let [editProgram, setEditProgram] = useState(true);
    let [programTitle, setProgramTitle] = useState();
    let [programMessage, setProgramMessage] = useState();

    // for updating the value in db-------------------------------------
    const handleUpdateProgram = async (programId) => {
        await axios.put(`https://amritsudha-backend-server123.onrender.com/api/program/update/${programId}`, {
            title: programTitle,
            message: programMessage
        })
        window.location.reload();
    }    

    // for removing user from the db
    const handleProgramDelete = async (programId) => {
        await axios.delete(`https://amritsudha-backend-server123.onrender.com/api/program/delete/${programId}`).then(res => alert(res.data.message));
        window.location.reload();
    }
    // EDIT PROGRAMMES handling ENDING----------------------------------------------------------------------------------------------------

    // ADD NOTICE handling STARTING----------------------------------------------------------------------------------------------------
    let [addProgramTitle, setAddProgramTitle] = useState();
    let [addProgramMessage, setAddProgramMessage] = useState();

    const handleAddProgram = async function(noticeId) {
        await axios.post(`https://amritsudha-backend-server123.onrender.com/api/program/create`, {
            title: addProgramTitle,
            message: addProgramMessage
        })
        window.location.reload();
    }
    // ADD NOTICE handling ENDING----------------------------------------------------------------------------------------------------

    
    return (
        <>
            {/* Edit user  ***************************************************************/}
            <div className='p-2 mb-4 w-full'>
                {/* heading */}
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Edit<span className="text-orange-500" > User </span></h1>
                {/* container to contain all the users */}
                <div className='flex flex-wrap justify-center gap-y-2 gap-x-4 max-h-80 md:max-h-92 overflow-y-scroll'>
                    {/* div for containing single user */}
                    {post.map((user, id) => {
                        return <div key={id} className='flex flex-wrap gap-4  bg-gray-200 rounded p-2 '>
                            {/* another div for containing single user info */}
                            <div className='flex flex-col w-full'>
                                {/* user name */}
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" defaultValue={user.userName} disabled={edit} className="px-2 my-1 rounded w-full" />
                                {/* user email */}
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" defaultValue={user.email} disabled={edit} className="px-2 my-1 rounded w-full" />
                                {/* user password */}
                                <input onChange={(e) => setPassword(e.target.value)} type="text" name="password" defaultValue="change password" disabled={edit} className="px-2 my-1 rounded w-full" />
                                {/* user role */}
                                <input onChange={(e) => setRole(e.target.value)} type="text" name="role" defaultValue={user.role} disabled={edit} className="px-2 my-1 rounded w-full" />
                            </div>
                            {/* div for action buttons to perform on user */}
                            <div className='flex gap-5'>
                                {/* for edit */}
                                <button onClick={() => setEdit(!edit)} className='px-2 py-1 bg-green-300 rounded'>Edit</button>
                                {/* for update */}
                                <button onClick={() => handleUpdate(user._id)} className='px-2 py-1 bg-green-600 text-white rounded'>Update</button>
                                {/* for delete */}
                                <button onClick={() => handleDelete(user._id)} className='px-2 py-1 bg-red-600 text-white rounded'>Delete</button>
                            </div>
                        </div>
                    })}


                </div>
            </div>

            {/* Add Notice **************************************************************/}
            <div className='p-2  w-full'>
                {/* heading */}
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add <span className="text-orange-500" > Notice </span></h1>
                {/* container */}
                <div className='bg-gray-400 px-2 py-2 rounded'>
                    <form>
                        <input onChange={(e) => setAddNoticeTitle(e.target.value)} className='mb-1 rounded p-2 w-full' type="text" name='title' placeholder='write notice title' />
                        <textarea onChange={(e) => setAddNoticeMessage(e.target.value)} className='mb-1 rounded p-2 w-full' placeholder='write your notice here' />
                        <button onClick={(e) => {
                            e.preventDefault();
                            handleAddNotice();
                        }} className='bg-green-600 text-white px-4 py-1 rounded' type='submit'>ADD</button>
                    </form>
                </div>
            </div>

            {/* Edit Notice  ***************************************************************/}
            <div className='p-2 mb-4 w-full'>
                {/* heading */}
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Edit<span className="text-orange-500" > Notice </span></h1>
                {/* container to contain all the notices */}
                { 
                        (!notices) ? <p>Loading...</p> 
                        :
                <div className='flex flex-wrap justify-center gap-y-2 gap-x-4 max-h-80 md:max-h-92 overflow-y-scroll'>
                    {
                        Array.from(notices).map((notice, id) => {
                            return <div key={id} className='flex flex-wrap gap-4  bg-gray-200 rounded p-2 '>
                                    {/* another div for containing single notice info */}
                                    <div className='flex flex-col w-full'>
                                        {/* notice title */}
                                        <input onChange={(e) => setNoticeTitle(e.target.value)} type="text" name="title" defaultValue={notice.title} disabled={editNotice} className="px-2 my-1 rounded w-full" />
                                        {/* notice message */}
                                        <textarea onChange={(e) => setNoticeMessage(e.target.value)} className='mb-1 rounded p-2 w-full' defaultValue={notice.message} disabled={editNotice} />

                                    </div>
                                    {/* div for action buttons to perform on user */}
                                    <div className='flex gap-5'>
                                        {/* for edit */}
                                        <button onClick={() => setEditNotice(!editNotice)} className='px-2 py-1 bg-green-300 rounded'>Edit</button>
                                        {/* for update */}
                                        <button onClick={() => {
                                            handleUpdateNotice(notice._id);
                                        }} className='px-2 py-1 bg-green-600 text-white rounded'>Update</button>
                                        {/* for delete */}
                                        <button onClick={() => handleNoticeDelete(notice._id)} className='px-2 py-1 bg-red-600 text-white rounded'>Delete</button>

                                    </div>
                                </div>
                        })
                    }
                    
                </div>
                }
            </div>

            {/* Add Program **************************************************************/}
            <div className='p-2  w-full'>
                {/* heading */}
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add <span className="text-orange-500" > Program </span></h1>
                {/* container */}
                <div className='bg-gray-400 px-2 py-2 rounded'>
                    <form>
                        <input onChange={(e) => setAddProgramTitle(e.target.value)} className='mb-1 rounded p-2 w-full' type="text" name='title' placeholder='write program title' />
                        <textarea onChange={(e) => setAddProgramMessage(e.target.value)} className='mb-1 rounded p-2 w-full' placeholder='write your program here' />
                        <button onClick={(e) => {
                            e.preventDefault();
                            handleAddProgram();
                        }} className='bg-green-600 text-white px-4 py-1 rounded' type='submit'>ADD</button>
                    </form>
                </div>
            </div>
            {/* Edit Programmes  ***************************************************************/}
            <div className='p-2 mb-4 w-full'>
                {/* heading */}
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Edit<span className="text-orange-500" > Programmes </span></h1>
                {/* container to contain all the programmes */}
                { 
                        (!programmes) ? <p>Loading...</p> 
                        :
                <div className='flex flex-wrap justify-center gap-y-2 gap-x-4 max-h-80 md:max-h-92 overflow-y-scroll'>
                    {/* div for containing single programme */}
                    {
                        Array.from(programmes).map((program, id) => {
                            return <div key={id} className='flex flex-wrap gap-4  bg-gray-200 rounded p-2 '>
                                    {/* another div for containing single programme info */}
                                    <div className='flex flex-col w-full'>
                                        {/* notice title */}
                                        <input onChange={(e) => setProgramTitle(e.target.value)} type="text" name="title" defaultValue={program.title} disabled={editProgram} className="px-2 my-1 rounded w-full" />
                                        {/* notice message */}
                                        <textarea onChange={(e) => setProgramMessage(e.target.value)} className='mb-1 rounded p-2 w-full' disabled={editProgram} defaultValue={program.message} />

                                    </div>
                                    {/* div for action buttons to perform on awareness programmes */}
                                    <div className='flex gap-5'>
                                        {/* for edit */}
                                        <button onClick={() => setEditProgram(!editProgram)} className='px-2 py-1 bg-green-300 rounded'>Edit</button>
                                        {/* for update */}
                                        <button onClick={() => handleUpdateProgram(program._id)} className='px-2 py-1 bg-green-600 text-white rounded'>Update</button>
                                        {/* for delete */}
                                        <button onClick={() => handleProgramDelete(program._id)} className='px-2 py-1 bg-red-600 text-white rounded'>Delete</button>

                                    </div>
                                </div>
                        })
                    }
                  
                </div>
                }
            </div>
        </>
    );
}

export default EditUserPage;
