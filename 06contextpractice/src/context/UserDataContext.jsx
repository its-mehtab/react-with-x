import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

function UserDataContext({ children }) {
  const [userData, setUserData] = useState({});

  const getUserData = async function () {
    try {
      const response = await fetch("https://api.github.com/users/its-mehtab");
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message); // Set error message if fetch fails
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <UserContext.Provider value={{ userData, setUserData }}>
        {children}
      </UserContext.Provider>
    </>
  );
}

export default UserDataContext;
