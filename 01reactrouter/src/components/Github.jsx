import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function Github() {
  const data = useLoaderData();
  // const [followers, setfollowers] = useState(null);
  // const [userProfile, setUserProfile] = useState(null);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hamzaraheem06")
  //     .then((res) => res.json())
  //     .then((userData) => {
  //       setfollowers(userData["followers"]);
  //       setUserProfile(userData["avatar_url"]);
  //     });
  // }, []);
  return (
    <>
      <div className=" flex flex-col items-center gap-4 justify-center text-3xl text-white bg-gray-700 p-4 text-center">
        <p>Github Followers : {data.followers}</p>
        <img className="h-52 w-52" src={data.avatar_url} alt="" />
      </div>
    </>
  );
}

export const githubDataLoader = async () => {
  const response = await fetch("https://api.github.com/users/hamzaraheem06");
  return response.json();
};
