import Card from "../components/Card";

const Contact = function () {
  return (
    <>
      <div className="w-full py-5 flex justify-center items-center">
        <h1 className="font-medium text-6xl">CONTACT</h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Contact;
