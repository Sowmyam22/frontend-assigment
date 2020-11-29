import React from "react";

function Chats({ handleChats, openChat, allUsers }) {
	return (
		<div className="fixed bottom-0 right-0 px-12">
	  	<div 
	  		className="flex items-center border rounded-lg rounded-b-none bg-indigo-500 p-3 justify-between cursor-pointer"
	  		onClick={handleChats}
	  	>
	  		<div className="flex items-center mr-32">
		  		<svg 
		  			className="w-6 h-6" 
		  			fill="none" 
		  			stroke="white" 
		  			viewBox="0 0 24 24" 
		  			xmlns="http://www.w3.org/2000/svg"
	  			>
	  				<path 
	  					strokeLinecap="round" 
	  					strokeLinejoin="round" 
	  					strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
  					>
  					</path>
					</svg>
					<h2 className="text-base text-white ml-2">Chats</h2>
				</div>

				<div>
				{openChat ? (
					<svg 
						className="w-4 h-4" 
						fill="none" 
						stroke="white" 
						viewBox="0 0 24 24" 
						xmlns="http://www.w3.org/2000/svg"
					>
						<path 
							strokeLinecap="round" 
							strokeLinejoin="round" 
							strokeWidth="2" 
							d="M19 9l-7 7-7-7"
						>
						</path>
					</svg>
				) : (
					<svg 
						className="w-4 h-4" 
						fill="none" 
						stroke="white" 
						viewBox="0 0 24 24" 
						xmlns="http://www.w3.org/2000/svg"
					>
						<path 
							strokeLinecap="round" 
							strokeLinejoin="round" 
							strokeWidth="2" 
							d="M5 15l7-7 7 7"
						>
						</path>
					</svg>
				)}
				</div>
		  	</div>
		  	{openChat && (
			  	<div className="border border-indigo-500 -mt-1 h-64 overflow-y-auto">
				  	{allUsers.map((chat, index) => {
				  		return (
					  		<div key={index} className="flex items-center p-2 cursor-pointer justify-between">
					  			<div className="flex">
						  			<img className="w-6 h-6 rounded-full" src={chat.profilepicture} alt="" />
						  			<p className="text-sm text-gray-500 ml-2">{chat.name}</p>
					  			</div>

					  			<img className="w-3 h-3" src="https://img.icons8.com/emoji/48/000000/green-circle-emoji.png"/>
					  		</div>
			  			)
				  	})}
			  	</div>
	  		)}
	  </div>
	)
}

export default Chats;