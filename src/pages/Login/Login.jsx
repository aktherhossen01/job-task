import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Login = () => {

    const {signIn,googleSignIn}= useContext(AuthContext)
const navigate=useNavigate()
const location = useLocation()


// const from = location.state?.from?.pathname || '/'
    const handleLogin = e=>{
      

        e.preventDefault()
        const form = new FormData(e.currentTarget)
            const email= form.get('email')
            const password= form.get('password')
        console.log(email,password);
    
    //     if (password.length < 6) {
    //       toast.error('Password must be at least 6 characters');
    //       return;
    //   }
    
    signIn(email,password)
        .then(res=>{
          console.log(res.user);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login success !!!",
            showConfirmButton: false,
            timer: 1500
          });
          
          
           // navigate
      navigate(location?.state ? location.state : '/')
        })
        .catch(err=>{
          toast.error(err.message)
        })
    
      }


      const handleGoogle =(media)=>{
        media()
        .then((res)=>{
            console.log(res);
            navigate("/")
        })
        .catch()
      }
    return (
        <div className=" md:w-8/12 mx-auto bg-red-500 ">
       <Navbar></Navbar>
        <div className=" min-h-screen bg-base-200">
<div className="hero-content flex-col ">
<div className="text-center  lg:text-left mb-5">
<h1 className="text-5xl font-bold design-color">Login  now!!</h1>
</div>
<div className="card flex-shrink-0 w-full  max-w-xl shadow-2xl bg-base-100">
<form onSubmit={handleLogin} className="card-body">

<div className="form-control">
  <label className="label">
    <span className="text-xl font-semibold">Email</span>
  </label>
  <input type="email" name="email" placeholder="email" className="input input-bordered" required />
</div>
<div className="form-control">
  <label className="label">
    <span className="text-xl font-semibold">Password</span>
  </label>
  <input type="password" name="password" placeholder="password" className="input input-bordered" required />
  
</div>

<h1 className="text-lg font-semibold">Do not have an account ? <Link className="underline text-blue-600" to={'/signUp'}>Register</Link></h1>
<div className="form-control mt-6">
  <button className="btn btn-primary">Login</button>
</div>
</form>

<div className="flex  justify-center items-center gap-5"> 
  <h1 className="font-bold text-center md:ml-32">Google SignIn</h1>

<button  onClick={()=>handleGoogle(googleSignIn)} className="btn mx-auto  btn-outline items-center mb-4">Google</button>
    </div>

</div>
</div>
</div>
</div>
    );
};

export default Login;