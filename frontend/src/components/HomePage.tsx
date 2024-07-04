import { useState } from "react";
import { sampleProducts } from "../data";
import { Product } from "../types/Product";

const HomePage = () => {
  const selectedProductsForHomePage: Product[] = [];
  const [gridNumber, setGridNumber] = useState(1)

const  gridChanger = () => (
    gridNumber === 1 ? (setGridNumber(2)) : gridNumber === 2 ? (setGridNumber(3)) : gridNumber === 3 ? (setGridNumber(4)) : (setGridNumber(1))
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
      <div className="my-2 text-center" onClick={gridChanger}>Change view</div>

      {gridNumber === 1 && ( 
<div className="grid grid-cols-3 grid-rows-4 gap-3 h-screen mx-8">
    <div className="col-span-2  overflow-hidden"><img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product1.image} alt={product1.name} /></div>
    <div className="row-span-2 col-start-2 row-start-2 overflow-hidden"> <img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product2.image} alt={product2.name} /></div>
    <div className="col-start-3 row-start-1  overflow-hidden"> <img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product3.image} alt={product3.name} /></div>
    <div className="row-span-3 col-start-1 row-start-2  overflow-hidden"> <img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product4.image} alt={product4.name} /></div>
    <div className="row-span-3 row-start-2  overflow-hidden"> <img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product5.image} alt={product5.name} /></div>
    <div className="col-start-2 row-start-4  overflow-hidden"><img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product6.image} alt={product6.name} /></div>
</div>
    )}

    {gridNumber === 2 && (
      
<div className="grid grid-cols-3 grid-rows-4 gap-4 h-screen mx-8">
    <div className="col-start-2 row-start-1"><img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product6.image} alt={product6.name} /></div>
    <div className="row-span-3 col-start-2 row-start-2"><img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product5.image} alt={product5.name} /></div>
    <div className="row-span-2 col-start-3 row-start-1"><img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product4.image} alt={product4.name} /></div>
    <div className="row-span-2 col-start-1 row-start-1"><img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product3.image} alt={product3.name} /></div>
    <div className="row-span-2 col-start-3 row-start-3"><img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product2.image} alt={product2.name} /></div>
    <div className="row-span-2 col-start-1 row-start-3"><img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product1.image} alt={product1.name} /></div>
</div>   
    
    
    )}

{gridNumber === 3 && (
      
      <div className="grid grid-cols-3 grid-rows-4 gap-4 h-screen mx-8">
    <div className="col-start-3 row-start-1"><img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product5.image} alt={product5.name} /></div>
    <div className="row-span-2 col-start-2 row-start-3"><img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product6.image} alt={product6.name} /></div>
    <div className="row-span-2 col-start-3 row-start-2"><img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product4.image} alt={product4.name} /></div>
    <div className="col-span-2 row-span-2 col-start-1 row-start-1"><img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product3.image} alt={product3.name} /></div>
    <div className="col-start-3 row-start-4"><img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product1.image} alt={product1.name} /></div>
    <div className="row-span-2 col-start-1 row-start-3"><img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product2.image} alt={product2.name} /></div>
</div> 
          
          
          )}

{gridNumber === 4 && (
      
      
<div className="grid grid-cols-3 grid-rows-4 gap-4 h-screen mx-8">
    <div className="row-span-2 col-start-3 row-start-1"><img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product3.image} alt={product3.name} /></div>
    <div className="row-span-2 col-start-2 row-start-3"><img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product2.image} alt={product2.name} /></div>
    <div className="row-span-2 col-start-2 row-start-1"><img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product5.image} alt={product5.name} /></div>
    <div className="row-span-2 col-start-1 row-start-1"><img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product4.image} alt={product4.name} /></div>
    <div className="row-span-2 col-start-3 row-start-3"><img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product1.image} alt={product1.name} /></div>
    <div className="row-span-2 col-start-1 row-start-3"><img className="object-cover max-w-[100%] h-[100%] w-[100%]" src={product6.image} alt={product6.name} /></div>
</div>
     
          
          
          )}

    

    </>
  );
};

export default HomePage;
