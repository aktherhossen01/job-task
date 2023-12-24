import { useEffect, useState } from "react";
import PreviousTaskData from "./PreviousTaskData";


const PreviousTask = () => {
    const [taskData,setTaskData]= useState()

    useEffect(()=>{
        fetch('http://localhost:5000/task')
        .then(res=>res.json())
        .then(data=>setTaskData(data))
    },[])
    console.log(taskData);
    return (
        <div>
           <div className="flex justify-between items-center">
            <div> <h1 className="bg-orange-400  text-white px-7 py-2 rounded-md font-semibold uppercase ">To Do List</h1></div>
            <div><h1 className="bg-blue-500 text-white px-7 py-2 rounded-md font-semibold uppercase">ongoing </h1></div>
            <div><h1 className="bg-red-500 text-white px-7 py-2 rounded-md font-semibold uppercase">completed</h1></div>
           </div>
           <div>
            {taskData?.map(data=><PreviousTaskData key={data._id} data={data} setTaskData={setTaskData} taskData={taskData}></PreviousTaskData>)}
           </div>
        </div>
    );
};

export default PreviousTask;