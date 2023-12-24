import { Link } from "react-router-dom";
import banner from "../../assets/6282f519081a58feae9b1fc4_Task-management-vs-project-management.jpeg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="text-center md:w-7/12 bg-black md:px-36 py-20 bg-opacity-50 text-white">
        <h1 className="text-4xl font-bold mb-5">Create a Task Management</h1>
        <p className="mb-5">
          Task Management is crucial for productivity. Efficiently organize,
          prioritize, and track tasks with user-friendly tools. Set deadlines,
          collaborate seamlessly, and achieve goals systematically, enhancing
          team collaboration and individual effectiveness.
        </p>
        <Link to={'/deshboard'}><button className="btn btn-wide">Let’s Explore</button></Link>
      </div>
    </div>
  );
};

export default Banner;
