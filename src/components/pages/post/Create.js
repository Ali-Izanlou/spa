import { useRef, useState } from "react";
import requestCreate from "./requestCreate";

const Create = () => {
    
    const[title , setTitle] =useState('')
    const[body , setBody] =useState('')

    return (
        <div className="container mt-4">
            <h1 className="text-4xl  mb-4" > Create Post:</h1>
            <form action="" className="flex flex-col md:w-[700px] my-8 gap-8" onSubmit={e =>  requestCreate(e, title, body)}>
                <div className="flex flex-col gap-4 ">
                    <label htmlFor="" className="text-xl font-bold">Title</label>
                    <input onChange={e => {setTitle(e.target.value)}} className="border p-4" type="text" />
                    <span className="text-red-500"> {title ? '' : 'Title is required'}</span>
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="" className="text-xl font-bold">Body</label>
                    <textarea  onChange={e => setBody(e.target.value)} className="border p-4 h-56" type="text" />
                    <span className="text-red-500"> {body ? '' : 'Body is required'}</span>
                </div>
                <button disabled={title === '' || body === ''}  className="w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ">Create</button>
            </form>
        </div >
    )
}

export default Create