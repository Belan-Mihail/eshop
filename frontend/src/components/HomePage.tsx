import { sampleProducts } from "../data";
import { Product } from "../types/Product";

const HomePage = () => {
  const selectedProductsForHomePage: Product[] = [];

  sampleProducts.map((arrayProduct) =>
    selectedProductsForHomePage.push(
      arrayProduct[Math.floor(Math.random() * arrayProduct.length)]
    )
  );

  const [product1, product2, product3, product4, product5, product6] = selectedProductsForHomePage     

  const selectProductForHomePage = () => {
    selectedProductsForHomePage.length = 0;
    sampleProducts.map((arrayProduct) =>
      selectedProductsForHomePage.push(
        arrayProduct[Math.floor(Math.random() * arrayProduct.length)]
      )
    );
  };

  return (
    <>
      <h2 className="text-3xl font-bold underline text-center my-8">
        Products
      </h2>
{/* 
      <div>
        {selectedProductsForHomePage.map((product) => (
          <div
            key={product.slug}
            className="flex flex-col gap-2 justify-center items-center p-4 m-4"
          >
            <p className="text-center">{product.name}</p>
            <img src={product.image} alt={product.name} />
          </div>
        ))}
      </div> */}

      {/* <div className="grid grid-cols-3 grid-rows-4 gap-3 h-screen">
        <div className="col-span-2 max-w-100 max-h-100"> <img className="block object-cover overflow-hidden max-w-100 max-h-100" src={product1.image} alt={product1.name} /></div>
        <div className="row-span-2 col-start-2 row-start-2 max-w-100 max-h-100"><img className="object-cover overflow-hidden w-100 h-100" src={product2.image} alt={product2.name} /></div>
        <div className="col-start-3 row-start-1"> <img className="object-cover overflow-hidden w-100 h-100" src={product3.image} alt={product3.name} /></div>
        <div className="row-span-3 col-start-1 row-start-2"> <img className="object-cover overflow-hidden w-100 h-100" src={product4.image} alt={product4.name} /></div>
        <div className="row-span-3 row-start-2"><img className="object-cover overflow-hidden w-100 h-100" src={product5.image} alt={product5.name} /></div>
        <div className="col-start-2 row-start-4"> <img className="object-cover overflow-hidden w-100 h-100" src={product6.image} alt={product6.name} /></div>
      </div> */}

      
<div className="grid grid-cols-3 grid-rows-4 gap-3 h-[600px] mx-8">
    <div className="col-span-2 bg-red-500">1</div>
    <div className="row-span-2 col-start-2 row-start-2 bg-green-500">2</div>
    <div className="col-start-3 row-start-1 bg-blue-500">3</div>
    <div className="row-span-3 col-start-1 row-start-2 bg-yellow-500">4</div>
    <div className="row-span-3 row-start-2 bg-gray-500">5</div>
    <div className="col-start-2 row-start-4 bg-orange-500">6</div>
</div>
    

      {/* <div className="flex flex-wrap gap-4 justify-around items-center p-4 m-4">
        {sampleProducts.map((arrayProduct) =>
        <div className="flex gap-8">
          {arrayProduct.map((product) => (
            <div
              key={product.slug}
              className="flex flex-col gap-2 justify-center items-center p-4 m-4"
            >
              <p className="text-center">{product.name}</p>
              <img src={product.image} alt={product.name} />
            </div>
          ))}
          </div>  
        )}
      </div> */}
    </>
  );
};

export default HomePage;
