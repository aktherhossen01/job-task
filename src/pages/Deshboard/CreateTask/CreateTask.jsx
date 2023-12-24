import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CreateTask = () => {
  const {
    register,
    handleSubmit,
    
   
  } = useForm();

  const onSubmit = (data) => {
    
    console.log(data)
    const info = {
        title: data.title,
        selectItem: data.selectItem,
        date: data.date,
        des:data.des,
        designation: 'to-do'
    }
    fetch('http://localhost:5000/task',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(info)
    })
    .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success!!!',
                    text: 'Add Card',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })


}







//   const handleSubmitFrom =()=>{


    
//   }
  return (
    <div>
      <h1 className="text-3xl text-center font-bold">Create task</h1>
      <form onSubmit={handleSubmit(onSubmit)} className=" md:ml-12">
        <div className="form-control  w-10/12">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            {...register("title")}
            required
            placeholder="name"
            className="input input-bordered"
          />
        </div>
        <div className="flex">
          <div className="form-control w-5/12">
            <label className="label">
              <span className="label-text">Option</span>
            </label>
            <select {...register("selectItem")} className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Please Choose
              </option>
              <option value={'Height'}>High</option>
              <option value={'Middle'}>Middle</option>
              <option value={'Low'}>Low</option>
            </select>
          </div>
          <div className="form-control w-5/12">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input className="border-2 p-2 rounded-lg"  type="date" {...register("date")}  id="" />
          </div>
        </div>
        <div>
          <label className="label">
            <span className="label-text font-semibold">Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered mt-3"
             {...register("des")}
            id=""
            cols="111"
            rows="5"
            placeholder="Please Type"
          ></textarea>
        </div>

        <input  className="btn btn-wide" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreateTask;
