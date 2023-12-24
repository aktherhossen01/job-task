/* eslint-disable react/prop-types */

import Swal from "sweetalert2";


const PreviousTaskData = ({data,setTaskData,taskData}) => {
    console.log(data);


  

    const handleDelete= (_id)=>{
        console.log(_id);


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/taskData/${_id}`,{
                    method:"DELETE",
                })

             .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");

              const remaining = taskData.filter(cof=>cof._id !== _id)
              setTaskData(remaining)
            }
          })
            }
          })

    }

    return (
        <div>
            <div className=" w-56 mt-5  ">
                <h1 className="text-2xl font-bold text-center">{data.title}</h1>
                <span className="flex justify-between gap-6">
                <p>Type: {data.selectItem}</p>
                <p>{data.date}</p></span>
                <p>Des: {data.des}</p>
                <div className="flex justify-between">
                    <button className="btn btn-outline btn-info  border-0 border-b-4">On Going</button>
                <button
                 onClick={()=>handleDelete(data._id)}
                className="btn btn-outline btn-secondary">Delete</button>
                </div>
            </div>
            
        </div>
    );
};

export default PreviousTaskData;