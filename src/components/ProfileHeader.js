import React, { useEffect } from "react";

function ProfileHeader({ 
	menuOption, 
	user, 
	allUsers, 
	setOpen, 
	history,
	open,
  setAllUsers
}) {
  const showProfile = (user) => {
    history.push({
      pathname: "/view",
      search: `?user_id=${user.id}`,
      state: {user_id: user.id}
    });
  }

  useEffect(() => {
    if(open) {
      let array = allUsers;
      let index = array.indexOf(user);
      array.splice(index, 1);

      setAllUsers([...array]);
    }
   }, [open])

	return (
		<div className="flex-1 px-4 flex justify-between items-center">
    	<div className="text-xl font-medium leading-6 text-gray-700">{menuOption}</div>
      <div className="ml-4 flex items-center md:ml-6">
        <div className="ml-3 relative">
          <div>
            <button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu" aria-haspopup="true" onClick={() => setOpen(!open)}>
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src={user && user.profilepicture} alt="" />
            	<div className="ml-3 text-base text-gray-700">{user && user.name}</div>
            </button>
          </div>

        {/** open pop up when clicked on username **/
        	open && (
            <div className="origin-top-right absolute right-0 mt-2 w-64 rounded-3xl shadow-2xl bg-white ring-1 ring-black ring-opacity-5 px-4 py-12" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
            	<div className="border-b">
	            	<div className="flex justify-center">
	            		<img className="h-20 w-20 rounded-full" src={user && user.profilepicture} alt="" />
            		</div>
            		<div className="ml-3 text-center text-base text-gray-700 pt-2">{user && user.name}</div>
            		<div className="ml-3 text-center text-sm text-gray-500 pb-2">{user && user.email}</div>
          		</div>

          		<div className="h-20 overflow-y-auto">
          			{allUsers && allUsers.map((userData, index) => {
          				return (
          					<div className="flex justify-center border-b py-2 cursor-pointer" onClick={() => {
                      showProfile(userData);
                      window.location.reload();
                    }}>
          						<img className="h-8 w-8 rounded-full" src={userData.profilepicture} alt="" />
          						<div className="ml-3 text-center text-base text-gray-700">{userData && userData.name}</div>
          					</div>
        					)
          			})}
        			</div>

        			<div className="flex justify-center pt-8">
        				<button className="max-w-xs bg-red-700 px-3 py-2 text-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu" aria-haspopup="true" 
        					onClick={() => {
        						setOpen(!open);
        						history.push("/")
        					}}
      					>
	                Sign out
	              </button>
        			</div>
            </div>
      		)
        }
        </div>
      </div>
    </div>
	)
}

export default ProfileHeader;