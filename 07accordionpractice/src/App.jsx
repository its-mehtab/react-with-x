import { useState } from "react";
import Accordion from "./assets/components/accordion";

const dataFaq = [
  {
    id: 1,
    title: "What is Flowbite?",
    answer: `Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.

    Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.`,
  },
  {
    id: 2,
    title: "Is there a Figma file available?",
    answer: `Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.

    Check out the Figma design system based on the utility classes from Tailwind CSS and components from Flowbite.`,
  },
  {
    id: 3,
    title: "What are the differences between Flowbite and Tailwind UI?",
    answer: `The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.

    However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.

    Learn more about these technologies:`,
  },
];

function App() {
  const [currActive, setCurrActive] = useState(null);

  return (
    <>
      <div className="max-w-screen-xl mx-auto py-20">
        {dataFaq.map((currFaq) => {
          return (
            <Accordion
              currId={currFaq.id}
              currTitle={currFaq.title}
              currAnswer={currFaq.answer}
              key={currFaq.id}
              currActive={currActive}
              setCurrActive={setCurrActive}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
