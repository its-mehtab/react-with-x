import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const users = [
    {
      name: "John Doe",
      img: "user-1.jpg",
      profession: "Software Engineer",
    },
    {
      name: "Jane Smith",
      img: "user-2.jpg",
      profession: "Graphic Designer",
    },
    {
      name: "Alice Johnson",
      img: "user-3.jpg",
      profession: "UI/UX Designer",
    },
    {
      name: "Michael Brown",
      img: "user-4.jpg",
      profession: "Project Manager",
    },
    {
      name: "Emily Davis",
      img: "user-5.jpg",
      profession: "Full Stack Developer",
    },
    {
      name: "David Wilson",
      img: "user-6.jpg",
      profession: "Data Scientist",
    },
  ];

  return (
    <>
      <Header />
      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((currUser, index) => {
            return (
              <Card
                key={index}
                name={currUser.name}
                img={currUser.img}
                prof={currUser.profession}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
