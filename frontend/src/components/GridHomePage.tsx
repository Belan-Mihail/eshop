import { Product } from '../types/Product';


export type Props = {
    selectedProductsForHomePage: Product[],
    gridNumber: number
  }

const GridHomePage = ({selectedProductsForHomePage, gridNumber}: Props) => {

    const [product1, product2, product3, product4, product5, product6] =
    selectedProductsForHomePage;
  return (
    <>
        {gridNumber === 1 && (
        <div className="grid grid-cols-3 grid-rows-4 gap-3 h-screen mx-8">
          <div className="col-span-2  overflow-hidden">
            <img
              className="object-cover max-w-[100%] h-[100%] w-[100%]"
              src={product1.image}
              alt={product1.name}
            />
          </div>
          <div className="row-span-2 col-start-2 row-start-2 overflow-hidden">
            {" "}
            <img
              className="object-cover max-w-[100%] h-[100%] w-[100%]"
              src={product2.image}
              alt={product2.name}
            />
          </div>
          <div className="col-start-3 row-start-1  overflow-hidden">
            {" "}
            <img
              className="object-cover max-w-[100%] h-[100%] w-[100%]"
              src={product3.image}
              alt={product3.name}
            />
          </div>
          <div className="row-span-3 col-start-1 row-start-2  overflow-hidden">
            {" "}
            <img
              className="object-cover max-w-[100%] h-[100%] w-[100%]"
              src={product4.image}
              alt={product4.name}
            />
          </div>
          <div className="row-span-3 row-start-2  overflow-hidden">
            {" "}
            <img
              className="object-cover max-w-[100%] h-[100%] w-[100%]"
              src={product5.image}
              alt={product5.name}
            />
          </div>
          <div className="col-start-2 row-start-4  overflow-hidden">
            <img
              className="object-cover max-w-[100%] h-[100%] w-[100%]"
              src={product6.image}
              alt={product6.name}
            />
          </div>
        </div>
      )}

      {gridNumber === 2 && (
        <div className="grid grid-cols-3 grid-rows-4 gap-4 h-screen mx-8">
          <div className="col-start-2 row-start-1">
            <img
              className="object-cover max-w-[100%] h-[100%] w-[100%]"
              src={product6.image}
              alt={product6.name}
            />
          </div>
          <div className="row-span-3 col-start-2 row-start-2">
            <img
              className="object-cover max-w-[100%] h-[100%] w-[100%]"
              src={product5.image}
              alt={product5.name}
            />
          </div>
          <div className="row-span-2 col-start-3 row-start-1">
            <img
              className="object-cover max-w-[100%] h-[100%] w-[100%]"
              src={product4.image}
              alt={product4.name}
            />
          </div>
          <div className="row-span-2 col-start-1 row-start-1">
            <img
              className="object-cover max-w-[100%] h-[100%] w-[100%]"
              src={product3.image}
              alt={product3.name}
            />
          </div>
          <div className="row-span-2 col-start-3 row-start-3">
            <img
              className="object-cover max-w-[100%] h-[100%] w-[100%]"
              src={product2.image}
              alt={product2.name}
            />
          </div>
          <div className="row-span-2 col-start-1 row-start-3">
            <img
              className="object-cover max-w-[100%] h-[100%] w-[100%]"
              src={product1.image}
              alt={product1.name}
            />
          </div>
        </div>
      )}

      {gridNumber === 3 && (
        <div className="grid grid-cols-3 grid-rows-4 gap-4 h-screen mx-8">
          <div className="col-start-3 row-start-1">
            <img
              className="object-cover max-w-[100%] h-[100%] w-[100%]"
              src={product5.image}
              alt={product5.name}
            />
          </div>
          <div className="row-span-2 col-start-2 row-start-3">
            <img
              className="object-cover max-w-[100%] h-[100%] w-[100%]"
              src={product6.image}
              alt={product6.name}
            />
          </div>
          <div className="row-span-2 col-start-3 row-start-2">
            <img
              className="object-cover max-w-[100%] h-[100%] w-[100%]"
              src={product4.image}
              alt={product4.name}
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-1 row-start-1">
            <img
              className="object-cover max-w-[100%] h-[100%] w-[100%]"
              src={product3.image}
              alt={product3.name}
            />
          </div>
          <div className="col-start-3 row-start-4">
            <img
              className="object-cover max-w-[100%] h-[100%] w-[100%]"
              src={product1.image}
              alt={product1.name}
            />
          </div>
          <div className="row-span-2 col-start-1 row-start-3">
            <img
              className="object-cover max-w-[100%] h-[100%] w-[100%]"
              src={product2.image}
              alt={product2.name}
            />
          </div>
        </div>
      )}

      {gridNumber === 4 && (
        <div className="grid grid-cols-3 grid-rows-4 gap-4 h-screen mx-8">
          <div className="row-span-2 col-start-3 row-start-1">
            <img
              className="object-cover max-w-[100%] h-[100%] w-[100%]"
              src={product3.image}
              alt={product3.name}
            />
          </div>
          <div className="row-span-2 col-start-2 row-start-3">
            <img
              className="object-cover max-w-[100%] h-[100%] w-[100%]"
              src={product2.image}
              alt={product2.name}
            />
          </div>
          <div className="row-span-2 col-start-2 row-start-1">
            <img
              className="object-cover max-w-[100%] h-[100%] w-[100%]"
              src={product5.image}
              alt={product5.name}
            />
          </div>
          <div className="row-span-2 col-start-1 row-start-1">
            <img
              className="object-cover max-w-[100%] h-[100%] w-[100%]"
              src={product4.image}
              alt={product4.name}
            />
          </div>
          <div className="row-span-2 col-start-3 row-start-3">
            <img
              className="object-cover max-w-[100%] h-[100%] w-[100%]"
              src={product1.image}
              alt={product1.name}
            />
          </div>
          <div className="row-span-2 col-start-1 row-start-3">
            <img
              className="object-cover max-w-[100%] h-[100%] w-[100%]"
              src={product6.image}
              alt={product6.name}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default GridHomePage