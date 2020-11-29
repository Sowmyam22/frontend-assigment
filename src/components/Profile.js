import React, { useState, useEffect } from "react";
import axios from 'axios';
import { find } from "lodash";
import { useHistory } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileHeader from "./ProfileHeader";
import Posts from "./Posts";
import Gallery from "./Gallery";
import ToDo from "./ToDo";
import Sidebar from "./Sidebar";
import Chats from "./Chats";

function Profile() {
	const [allUsers, setAllUsers] = useState(null);
	const [user, setUser] = useState({});
	const [open, setOpen] = useState(false);
	const [optionSelected, setOptionSelected] = useState('Profile');
	const [openChat, setOpenChat] = useState(false);

	const history = useHistory();

	const apiURL = "https://panorbit.in/api/users.json";

	const fetchProfileDetails = async () => {
		let response = await axios.get(apiURL);
		setAllUsers(response.data.users);

		if (response) {
			let id = history.location.state.user_id;

			let user = find(response.data.users, ['id', id]);

	    setUser(user);
		}
	}

	useEffect(() => {
		fetchProfileDetails();
	}, []);

	const handleMenuOption = (selectedMenu) => {
		setOptionSelected(selectedMenu);
	};

	const handleChats = () => {
		setOpenChat(!openChat);
	}

	return (
		<div className="flex overflow-y-auto bg-white p-6" style={{height: "50rem"}}>
		  <div className="hidden bg-indigo-700 rounded-3xl md:flex md:flex-shrink-0">
		    <div className="flex flex-col w-64">
		      <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
		        <Sidebar 
		        	handleMenuOption={handleMenuOption} 
		        	optionSelected={optionSelected} 
	        	/>
		      </div>
		    </div>
		  </div>

		  <div className="flex flex-col w-0 flex-1 overflow-hidden bg-white p-8">
		    <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b pb-5">
		      <button className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
		        <span className="sr-only">Open sidebar</span>
		        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
		          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
		        </svg>
		      </button>

		      <ProfileHeader 
		      	menuOption={optionSelected} 
		      	setOpen={setOpen} 
		      	user={user} 
		      	allUsers={allUsers} 
		      	history={history} 
		      	open={open}
		      	setAllUsers={setAllUsers}
	      	/>
		    </div>

		    <div className="flex-1 relative focus:outline-none bg-white" tabIndex="0">
			    {user && (
			    	<div>
				      {optionSelected === "Profile" && <ProfileDetails user={user} />}
				      {optionSelected === "Posts" && <Posts />}
				      {optionSelected === "Gallery" && <Gallery />}
				      {optionSelected === "ToDo" && <ToDo />}
			      </div>
		    	)}
		    </div>
		  </div>

		  <Chats 
		  	handleChats={handleChats} 
		  	allUsers={allUsers} 
		  	openChat={openChat} 
		  	setAllUsers={setAllUsers}
		  	user={user}
	  	/>
		</div>
	)
}

export default Profile;