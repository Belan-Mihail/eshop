import { useState } from "react";
import { sampleProducts } from "../data";
import { Product } from "../types/Product";

const HomePage = () => {
  const selectedProductsForHomePage: Product[] = [];
  const [gridNumber, setGridNumber] = useState(1)

const  gridChanger = () => (
    gridNumber === 1 ? (setGridNumber(2)) : (setGridNumber(1))
  )
  

  sampleProducts.map((arrayProduct) =>
    selectedProductsForHomePage.push(
      arrayProduct[Math.floor(Math.random() * arrayProduct.length)]
    )
  );

  const [product1, product2, product3, product4, product5, product6] = selectedProductsForHomePage     

  // const selectProductForHomePage = () => {
  //   selectedProductsForHomePage.length = 0;
  //   sampleProducts.map((arrayProduct) =>
  //     selectedProductsForHomePage.push(
  //       arrayProduct[Math.floor(Math.random() * arrayProduct.length)]
  //     )
  //   );
  // };

  return (
    <>
      <h2 className="text-3xl font-bold underline text-center my-8">
        Products
      </h2>

      {gridNumber === 1 && ( 
<div className="grid grid-cols-3 grid-rows-4 gap-3 h-[1000px] mx-8">
    <div className="col-span-2 bg-red-500 m-h-100 overflow-hidden w-100%"><img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product1.image} alt={product1.name} /></div>
    <div className="row-span-2 col-start-2 row-start-2 bg-green-500 m-h-100 overflow-hidden"> <img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product2.image} alt={product2.name} /></div>
    <div className="col-start-3 row-start-1 bg-blue-500 m-h-100 overflow-hidden"> <img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product3.image} alt={product3.name} /></div>
    <div className="row-span-3 col-start-1 row-start-2 bg-yellow-500 m-h-100% overflow-hidden"> <img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product4.image} alt={product4.name} /></div>
    <div className="row-span-3 row-start-2 bg-gray-500 m-h-100 overflow-hidden"> <img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product5.image} alt={product5.name} /></div>
    <div className="col-start-2 row-start-4 bg-orange-500 m-h-100 overflow-hidden"><img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product6.image} alt={product6.name} /></div>
</div>
    )}

    <div className="my-20 text-center" onClick={gridChanger}>Change view</div>

    </>
  );
};

export default HomePage;
