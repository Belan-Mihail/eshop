import "./App.css";
import { sampleProducts } from "./data";

function App() {
  return (
    <>
      <h2 className="text-3xl font-bold underline text-center mt-8">Products</h2>
      <div className="flex gap-4 justify-around items-center p-4 m-4">
        {sampleProducts.map((product) => (
          <div key={product.slug} className="flex flex-col gap-2 justify-center items-center p-4 m-4">
            <p className="text-center">{product.name}</p>
            <img src={product.image} alt={product.name} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
