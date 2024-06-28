import { sampleProducts } from "../data";
import { Product } from "../types/Product";

const HomePage = () => {

    const productForHomePage:Product[] = []

    sampleProducts.map((arrayProduct) => (
        productForHomePage.push(arrayProduct[Math.floor(Math.random() * arrayProduct.length)])
    ))

  return (
    <>
      <h2 className="text-3xl font-bold underline text-center mt-8">
        Products
      </h2>

      <div>
        {productForHomePage.map((product) => (
            <div
            key={product.slug}
            className="flex flex-col gap-2 justify-center items-center p-4 m-4"
          >
            <p className="text-center">{product.name}</p>
            <img src={product.image} alt={product.name} />
          </div>
        ))
        
        }
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
