import { useContext, useState } from "react";
import Card from "../components/Card";
import { DataContext } from "../context/userContext";

const Home = function ({ data }) {
  console.log(data);

  return (
    <>
      <div className="w-full py-5 flex justify-center items-center">
        <h1 className="font-medium text-6xl">HOME</h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {data.map((currData) => {
          return (
            <Card
              img={currData.download_url}
              name={currData.author}
              key={currData.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
