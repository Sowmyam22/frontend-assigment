import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

function LandingPage() {
	const [users, setUsers] = useState(null);

	const history = useHistory();

	const apiURL = "https://panorbit.in/api/users.json";

	useEffect(() => {
		fetchUsers();
	}, [])

	const fetchUsers = async () => {
		let response = await axios.get(apiURL);

    setUsers(response.data.users);
	}

	const showProfile = (user) => {
		history.push({
			pathname: "/view",
			search: `?user_id=${user.id}`,
			state: {user_id: user.id}
		});
	}

	console.log("users", users);

	return (
		<div className="bg-gradient-to-br from-blue-400 to-white-500">
     	<div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
  			<div className="mt-12 max-w-xl mx-auto">
      		<div className="flex flex-col rounded-2xl shadow-lg overflow-hidden">
				    <h2 className="text-xl font-bold text-gray-700 px-6 py-8 text-center bg-gray-200">
			        Select an account
			      </h2>

			      <div className="bg-white text-center overflow-y-auto" style={{height: "28rem"}}>
			      	{users && users.map((user, index) => {
			      		return (
			      			<div key={index} className="flex items-center p-4 border-b mx-6 cursor-pointer" onClick={() => showProfile(user)} >
		      					<img className="rounded-full mr-3" width="30" src={user.profilepicture} style={{height: "30px"}} alt="" />
			      				<h2 className="text-lg text-gray-700">{user.name}</h2>
			      			</div>
		      			)
			      	})}
			      </div>
        	</div>
      	</div>
  		</div>
		</div>
	)
}

export default LandingPage;