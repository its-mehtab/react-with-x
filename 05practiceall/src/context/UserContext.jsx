import React, { createContext, useState } from "react";

export const DataContext = createContext();

const UserContext = ({ children }) => {
  const [data, setData] = useState([]);

  const getData = async function () {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=2&limit=3"
    );
    const data = await response.json();
    setData(data);
  };
  getData();

  return (
    <div>
      <DataContext.Provider value={data}>{children}</DataContext.Provider>
    </div>
  );
};

export default UserContext;
