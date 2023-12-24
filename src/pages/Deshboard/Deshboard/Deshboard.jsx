import { NavLink, Outlet } from "react-router-dom";


const Deshboard = () => {
    return (
         <div className="flex relative">
           <div className="w-3/12 min-h-screen fixed  bg-orange-400   ">
               <ul className="menu p-4">
                   {
                        <>
                        {/* admin */}
                    <li><NavLink to={'profile'}>
                       
                      User Profile</NavLink>
                     </li>
                       <li><NavLink to={'createTask'}>
                          
                       Create Task
                           </NavLink>
                     </li>
                       <li><NavLink to={'previous-task'}>
                          
                       previous tasks
                           </NavLink>
                     </li>
                       <li><NavLink to={'Dan'}>
                          
                       D&D
                           </NavLink>
                     </li>
                        </> 
                   }
                  


                    




                  
                    
                    

                    

                  
                     
                    
                    
                    
                   
                    {/* divider */}
                    <div className="divider"></div>

                    <li><NavLink to={'/'}>
                        
                         Home</NavLink>
                    </li>
                    
               </ul>
            </div> 
           <div className="w-9/12 p-8  absolute right-0">
            <Outlet></Outlet>
            </div> 
        </div>
    );
};

export default Deshboard;