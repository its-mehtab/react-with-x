import Card from "../components/Card";

const Products = function () {
  return (
    <>
      <div className="w-full py-5 flex justify-center items-center">
        <h1 className="font-medium text-6xl">PRODUCTS</h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Products;
