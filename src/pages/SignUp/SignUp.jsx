import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {
   const {signUp,userUpdateProfile}= useContext(AuthContext)
  
    const navigate = useNavigate()
      const handleRegister = e=>{
          e.preventDefault()
          const email = e.target.email.value;
          const password = e.target.password.value;
          const photoUrl = e.target.photoUrl.value;
          const name= e.target.name.value
  
          
          signUp(email,password)
         .then(res =>{
          
          console.log(res.user)
  
          userUpdateProfile(name,photoUrl)
          .then(()=>{
            const userInfo={
              name: name,
              email:email,
              photoUrl:photoUrl
            }

            fetch('http://localhost:5000/register',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(userInfo)
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
                      navigate('/')
                }
            })
            // 
          })
          
         })
         .catch(err =>console.log(err))
      }
      return (
          <div>
          
          <div className=" min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
  <div className="text-center  lg:text-left mb-5">
    <h1 className="text-5xl  font-bold design-color">Registration  now!</h1>
    
    {/* <p className="text-center font-semibold text2">{error}</p> */}
  </div>
  <div className="card flex-shrink-0 w-full  max-w-xl shadow-2xl bg-base-100">
    <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="text-xl font-semibold">Name</span>
        </label>
        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="text-xl font-semibold">Email</span>
        </label>
        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="text-xl font-semibold">Photo</span>
        </label>
        <input type="text" name="photoUrl" placeholder="photo" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="text-xl font-semibold">Password</span>
        </label>
        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        <h1 className="text-lg font-semibold">Already have an account ? <Link className="underline text-blue-600" to={'/login'}>Login</Link></h1>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Registration</button>
      </div>
    </form>
  </div>
  </div>
  </div>
      </div>
    );
};

export default SignUp;