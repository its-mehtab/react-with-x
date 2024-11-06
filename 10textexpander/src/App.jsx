import { useState } from "react";
import TextWrap from "./components/TextWrap";

function App() {
  return (
    <>
      <div>
        <TextWrap>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          mollitia consequatur animi commodi enim sed nulla eius odio quidem
          atque quia inventore natus aliquid soluta eligendi unde magni, eveniet
          in cum vero quibusdam doloremque vel incidunt. Fuga nam nobis
          similique!
        </TextWrap>
        <TextWrap minimumText={30}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          mollitia consequatur animi commodi enim sed nulla eius odio quidem
          atque quia inventore natus aliquid soluta eligendi unde magni, eveniet
          in cum vero quibusdam doloremque vel incidunt. Fuga nam nobis
          similique!
        </TextWrap>
        <TextWrap textShopOnLoad={false} space={20} containerBg={"whitesmoke"}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          mollitia consequatur animi commodi enim sed nulla eius odio quidem
          atque quia inventore natus aliquid soluta eligendi unde magni, eveniet
          in cum vero quibusdam doloremque vel incidunt. Fuga nam nobis
          similique!
        </TextWrap>
      </div>
    </>
  );
}

export default App;
