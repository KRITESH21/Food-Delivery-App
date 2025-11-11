import { useEffect, useState } from "react";

const About = () => {
  const [showMyDetails, setShowMyDetails] = useState("");

  useEffect(() => {
    fetchMyDetails();
  }, []);

  const fetchMyDetails = async () => {
    const data = await fetch("https://api.github.com/users/KRITESH21");
    const json = await data.json();
    console.log(json);
    setShowMyDetails(json);
  };

  return showMyDetails == null ? (
    <h1>Welcome to About us page</h1>
  ) : (
    <div className="flex flex-col items-center border font-bold m-4 p-4">
      <img
        src={showMyDetails.avatar_url}
        alt="my-profile"
        className="w-32 rounded-full"
      />
      {showMyDetails.name}
    </div>
  );
};

export default About;
