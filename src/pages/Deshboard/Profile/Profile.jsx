import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";


const Profile = () => {
    const {user}= useContext(AuthContext)
    console.log(user.photoUrl);
    console.log(user);
    return (
        <div className="md:flex justify-center mx-auto md:gap-6">
      <div className=" md:mt-10">
        <h1 className="text-4xl font-bold border-l-8 p-8 border-orange-400 items-center">
          Profile <br /> Card UI <br /> Design
        </h1>
      </div>
      <div className="border rounded-xl ">
      
        <div className="bg-orange-400 pt-7 flex justify-center rounded-t-xl">
            <div className="relative -bottom-4  border-4 border-black rounded-full ">
            <img className="w-28 rounded-full border-4  border-white" src={user.photoURL} alt="" />

            </div>
        </div>
          <div className="p-12">
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>


          <div>
          {user.status ? (
            user.status
          ) : (
            <Link to={"/dashboard/payment"}>
              <button className="btn uppercase font-semibold">
                {" "}
                Please membership Fee 500
              </button>
            </Link>
          )}
        </div>
          </div>
        
        
      </div>
    </div>
    );
};

export default Profile;