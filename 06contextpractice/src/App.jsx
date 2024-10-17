import { useState } from "react";
import Card from "./components/Card";
import UserDataContext from "./context/UserDataContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserDataContext>
        <div className="py-14 px-20">
          <Card />
        </div>
      </UserDataContext>
    </>
  );
}

export default App;
