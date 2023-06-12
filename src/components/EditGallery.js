import axios from "axios";
import { useContext, useState } from "react";
import MyContext from "../utils/context";

function EditGallery() {

    const [image, setImage] = useState(); // add image state
    let [addImageTitle, setAddImageTitle] = useState();
    let [addImageDescription, setAddImageDescription] = useState();
    const {images} = useContext(MyContext);


    // ADD IMAGE handler STARTING------------------------------------------------------------------------------------------
    const handleAddImage = async () => {
        let formData = new FormData();
        formData.append("image", image);
        formData.append("title", addImageTitle)
        formData.append("description", addImageDescription)
        try {
          await axios({
            method: "post",
            url: `${process.env.REACT_APP_BACKEND_API_URL}/image/upload`,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          });

          setImage(null);
        } catch(error) {
          console.log(error);
        }
    }
    // set image
    const handleSubmitImage = function(e) {
        setImage(e.target.files[0])
    }
    // ADD IMAGE handler ENDING------------------------------------------------------------------------------------------

    // REMOVE IMAGE STARTING------------------------------------------------------------------------------------------
        async function handlerRemoveImage(imgId) {
            await axios.delete(`${process.env.REACT_APP_BACKEND_API_URL}/image/delete/${imgId}`).then(res => alert(res.data.message));
            window.location.reload();
        }
    // REMOVE IMAGE ENDING------------------------------------------------------------------------------------------


    return(
        <>
        {/* UI element to show Add Image */}
        <div className="p-2  md:text-center w-full">
           {/* heading */}
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add <span className="text-orange-500" > Image </span></h1>
                {/* container */}
                <div className='bg-gray-400 px-2 py-2 rounded'>
                    <form className="flex flex-col gap-4">
                        <input onChange={(e) => setAddImageTitle(e.target.value)} className='mb-1 rounded p-2 w-full' type="text" name='title' placeholder='write image title' />
                        <textarea onChange={(e) => setAddImageDescription(e.target.value)} className='mb-1 rounded p-2 w-full' placeholder='write your image description' />
                        <input type="file" accept="image/*"  onChange={handleSubmitImage} className='mb-1 rounded p-2 w-full' name='add image' placeholder='Add Your Image' />
                        <button type="submit" onClick={(e) => {
                            e.preventDefault();
                            handleAddImage();
                        }} className='bg-green-600 text-white px-4 py-1 md:center md:w-32  rounded'>ADD</button>
                    </form>
                </div>
        </div>

        {/* UI element to edit images or can say just remove it */}
        {/* heading */}
        <h1 className="md:text-center sm:text-3xl text-2xl font-medium title-font my-4 p-2 text-gray-900">Edit <span className="text-orange-500" > Image </span></h1>
        {
            (!images) ? <p>Loading...</p> 
            :
        <div className="overflow-y-auto md:flex md:flex-row md:flex-wrap md:gap-4 md:justify-center md:h-[50vh] h-80 w-full p-2">
            {
                Array.from(images).map((image, id) => {
                    return <div key={id} className="flex flex-col md:w-[30%] md:flex-col  justify-center  rounded-md bg-gray-400 mb-2 w-full gap-4" >
                    <img src={image.avatar} width={200} height={200} alt="" className="rounded-md w-full md:w-[100%]" />
                    {/* div to contain buttons */}
                    <div className="flex flex-col justify-center flex-wrap ">
                        <button onClick={(e) => {
                            e.preventDefault();
                            handlerRemoveImage(image._id);
                        }} className='bg-red-600 text-white px-4  rounded' >Remove</button>
                    </div>
                </div>
                })
            }
        </div>
        }
        </>
    )
}

export default EditGallery;