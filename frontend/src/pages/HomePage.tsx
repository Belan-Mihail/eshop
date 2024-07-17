import { useEffect, useState } from "react";
import { sampleProducts } from "../data";
import { Product } from "../types/Product";
import GridHomePage from "../components/GridHomePage";

const HomePage = () => {
  const selectedProductsForHomePage: Product[] = [];
  const [gridNumber, setGridNumber] = useState(1);

  // function randomInteger(min: number, max: number) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  // useEffect(() => {
  //   const timer = window.setInterval(() => {
  //     setGridNumber((prevGridNumber) => randomInteger(5, 8));
  //   }, 3000);
  //   return () => {
  //     window.clearInterval(timer);
  //   };
  // }, []);
  
  useEffect(() => {
    gridNumber === 1 && setTimeout(() => {
      setGridNumber(5)
    }, 5000);
    gridNumber === 2 && setTimeout(() => {
      setGridNumber(6)
    }, 5000);
    gridNumber === 3 && setTimeout(() => {
      setGridNumber(7)
    }, 5000);
    gridNumber === 4 && setTimeout(() => {
      setGridNumber(8)
    }, 5000);
    gridNumber === 5 && setTimeout(() => {
      setGridNumber(2)
    }, 2000);
    gridNumber === 6 && setTimeout(() => {
      setGridNumber(3)
    }, 2000);
    gridNumber === 7 && setTimeout(() => {
      setGridNumber(4)
    }, 2000);
    gridNumber === 8 && setTimeout(() => {
      setGridNumber(1)
    }, 2000);
  }, [gridNumber])

  // const nextSlide = () => {
  //     gridNumber === 1 ? setGridNumber(5) : gridNumber === 2 ? setGridNumber(6) : gridNumber === 3 ? setGridNumber(7) : setGridNumber(8)

  // }

  // const prevSlide = () => {
  //   gridNumber === 1 ? setGridNumber(4) : gridNumber === 2 ? setGridNumber(1) : gridNumber === 3 ? setGridNumber(2) : setGridNumber(3)
  // }

  sampleProducts.map((arrayProduct) =>
    selectedProductsForHomePage.push(
      arrayProduct[Math.floor(Math.random() * arrayProduct.length)]
    )
  );

  // const [product1, product2, product3, product4, product5, product6] =
  //   selectedProductsForHomePage;

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
      {/* <div className="my-10 items-center text-center">
        <button className="text-white text-center bg-red-500 p-4 rounded-3xl hover:bg-red-600 mx-4 " onClick={prevSlide}>Prev</button>
        <button className="text-white text-center bg-orange-500 p-4 rounded-3xl hover:bg-orange-600 mx-4 " onClick={nextSlide}>Next</button>
      </div> */}

      <div>
        <GridHomePage selectedProductsForHomePage={selectedProductsForHomePage} gridNumber={gridNumber} />
      </div>
      

    </>
  );
};

export default HomePage;
