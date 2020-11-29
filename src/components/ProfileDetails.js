import React from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

function ProfileDetails({ user }) {
	const mapStyles = {
	  width: '100%',
	  height: '100%'
	};

	const google = window.google;
	
	return (
		<div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex">
      	<div className="border-r py-6" style={{width: "24rem"}}>
      		<div className="border-b">
      			<div className="flex justify-center">
							<img className="h-48 w-48 rounded-full" src={user.profilepicture} alt="" />
						</div>
						<h2 className="py-2 text-center text-base text-gray-700 font-medium">{user.name}</h2>

						<div className="flex items-center">
							<h2 className="text-base text-gray-500 font-medium">Username : </h2>
							<div className="ml-3 text-lg text-gray-700 font-medium">{user.username}</div>
						</div>

						<div className="flex items-center py-2">
							<h2 className="text-base text-gray-500 font-medium">email : </h2>
							<div className="ml-3 text-lg text-gray-700 font-medium">{user.email}</div>
						</div>

						<div className="flex items-center">
							<h2 className="text-base text-gray-500 font-medium">Phone : </h2>
							<div className="ml-3 text-lg text-gray-700 font-medium">{user.phone}</div>
						</div>

						<div className="flex items-center py-2">
							<h2 className="text-base text-gray-500 font-medium">Website : </h2>
							<div className="ml-3 text-lg text-gray-700 font-medium">{user.website}</div>
						</div>
					</div>

					<div>
						<h2 className="py-2 text-center text-base text-gray-500 font-medium">Company</h2>

						<div className="flex items-center py-2">
							<h2 className="text-base text-gray-500 font-medium">Name: </h2>
							<div className="ml-3 text-lg text-gray-700 font-medium">{user.company && user.company.name}</div>
						</div>

						<div className="flex py-2">
							<h2 className="text-base text-gray-500 font-medium">catchPhrase: </h2>
							<div className="ml-3 text-lg text-gray-700 font-medium">{user.company && user.company.catchPhrase}</div>
						</div>

						<div className="flex items-center py-2">
							<h2 className="text-base text-gray-500 font-medium">bs: </h2>
							<div className="ml-3 text-lg text-gray-700 font-medium">{user.company && user.company.bs}</div>
						</div>
					</div>
      	</div>

        <div className="">
        	<div className="py-2 -ml-20 text-center text-base text-gray-500 font-medium">Address</div>

        	<div className="ml-20">
          	<div className="flex items-center">
							<h2 className="text-base text-gray-500 font-medium">Street: </h2>
							<div className="ml-3 text-lg text-gray-700 font-medium">{user.address && user.address.street}</div>
						</div>

						<div className="flex items-center py-2">
							<h2 className="text-base text-gray-500 font-medium">Suite: </h2>
							<div className="ml-3 text-lg text-gray-700 font-medium">{user.address && user.address.suite}</div>
						</div>

						<div className="flex items-center">
							<h2 className="text-base text-gray-500 font-medium">City: </h2>
							<div className="ml-3 text-lg text-gray-700 font-medium">{user.address && user.address.city}</div>
						</div>

						<div className="flex items-center py-2">
							<h2 className="text-base text-gray-500 font-medium">Zipcode: </h2>
							<div className="ml-3 text-lg text-gray-700 font-medium">{user.address && user.address.zipcode}</div>
						</div>

						<Map
			        google={google}
			        zoom={14}
			        style={mapStyles}
			        initialCenter={user.geo && user.geo}
			      />
		      </div>
        </div>
      </div>
    </div>
	)
}

export default ProfileDetails;