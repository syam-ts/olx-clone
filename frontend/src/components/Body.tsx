import { products } from "../constants/product.ts";
import { useState } from "react";
import { Link } from 'react-router-dom'

function Body() {
  const [load, setLoad] = useState(true); 

  return (
    <div>
        <div className="w-full justify-center ml-96 p-3 olx-font">
    <span>Freash Recomentations</span>
    </div>

    <div className="grid grid-cols-4 gap-4 px-96">
  
  {load
    ? products.slice(0, 13).map((product) => {
        return (
     <Link to={`/product/${product.id}`} key={product.id}>
          <div className="border border-gray-300 rounded-md w-[280px]" key={product.id} >
            <div>
            
              <img
                className="w-8 h-8 text-white bg-white rounded-full absolute ml-60 mt-2"
                src="public/heart (1).png"
              />
                <img
                className="w-[280px] h-44 p-2 object-cover"
                src={product.image}
              />
            </div>
            <div className="p-2 grid">
              <span className="font-bold">₹ {product.price}</span>
              <span className="font-light">{product.reason}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs font-mono text-gray-500">
                {product.place}
              </span>
              <span className="text-xs font-mono text-gray-500">
                {product.day}
              </span>
            </div>
          </div>
     </Link>
        );
      })
    : products.map((product) => {
        return (
          <Link to={`/product/${product.id}`} key={product.id}>
          <div className="border border-gray-300 rounded-md w-[280px]">
            <div>
            <img
                className="w-8 h-8 text-white bg-white rounded-full absolute ml-60 mt-2"
                src="public/heart (1).png"
              />
                <img
                className="w-[280px] h-44 p-2 object-cover"
                src={product.image}
              />
            </div>
            <div className="p-2 grid">
              <span className="font-bold">₹ {product.price}</span>
              <span className="font-light">{product.reason}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs font-mono text-gray-500">
                {product.place}
              </span>
              <span className="text-xs font-mono text-gray-500">
                {product.day}
              </span>
            </div>
          </div>
              </Link>
        );
      })}
  {load && (
    <div className="w-28 h-12 border-2 mt-72 ml-72 rounded-md border-gray-950 hover:border-4 hover:border-gray-950">
      <button className="olx-font font-bold p-2" onClick={() => setLoad(false)}>Load more</button>
    </div>
  )}
</div>
    </div>
  
  );
}

export default Body;
