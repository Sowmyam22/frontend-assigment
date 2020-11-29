import React from "react";

function Sidebar({ handleMenuOption, optionSelected }) {
	return (
		<div className="flex-1 flex flex-col">
      <nav className="flex-1 px-6 space-y-1 my-56">
        <div 
        	className={`group flex items-center px-2 py-4 text-sm font-medium cursor-pointer
        		${optionSelected === "Profile" ? "text-white justify-between" : "text-gray-500"}`
        	} 
        	onClick={() => handleMenuOption('Profile')}
      	>
          Profile

          {optionSelected === "Profile" && (
            <svg 
              className="w-6 h-6 border rounded-full bg-white p-1 -mr-10" 
              fill="none" 
              stroke="black" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 5l7 7-7 7"
              >
              </path>
            </svg>
          )}
        </div>

        <div 
        	className={`group flex items-center px-2 py-4 text-sm font-medium cursor-pointer border-t border-b border-gray-500 focus:text-white
        		${optionSelected === "Posts" ? "text-white justify-between" : "text-gray-500"}`
        	}
        	onClick={() => handleMenuOption('Posts')}
      	>
          Posts

          {optionSelected === "Posts" && (
            <svg 
              className="w-6 h-6 border rounded-full bg-white p-1 -mr-10" 
              fill="none" 
              stroke="black" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 5l7 7-7 7"
              >
              </path>
            </svg>
          )}
        </div>

        <div 
        	className={`group flex items-center px-2 py-4 text-sm font-medium cursor-pointer border-b border-gray-500 focus:text-white
        		${optionSelected === "Gallery" ? "text-white justify-between" : "text-gray-500"}`
        	} 
        	onClick={() => handleMenuOption('Gallery')}
      	>
          Gallery

          {optionSelected === "Gallery" && (
            <svg 
              className="w-6 h-6 border rounded-full bg-white p-1 -mr-10" 
              fill="none" 
              stroke="black" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 5l7 7-7 7"
              >
              </path>
            </svg>
          )}
        </div>

        <div 
        	className={`group flex items-center px-2 py-4 text-sm font-medium cursor-pointer focus:text-white 
        		${optionSelected === "ToDo" ? "text-white justify-between" : "text-gray-500"}`} 
        	onClick={() => handleMenuOption('ToDo')}
      	>
          ToDo

          {optionSelected === "ToDo" && (
            <svg 
              className="w-6 h-6 border rounded-full bg-white p-1 -mr-10" 
              fill="none" 
              stroke="black" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 5l7 7-7 7"
              >
              </path>
            </svg>
          )}
        </div>
      </nav>
    </div>
	)
}

export default Sidebar;