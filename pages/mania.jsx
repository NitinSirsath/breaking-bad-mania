import React, { useEffect } from "react";

const mania = () => {
  const API_ENDPOINT = "https://www.breakingbadapi.com/api/characters";

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    console.log(data);
  };

  return <div>mania</div>;
};

export default mania;
