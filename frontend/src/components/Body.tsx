import { products } from "../constants/api.ts";
import { useState } from "react";

function Body() {
  const [load, setLoad] = useState(true);

  return (
    <div className="grid grid-cols-4 gap-4 px-96">
      {load
        ? products.slice(0, 13).map((product) => {
            return (
              <div className="border border-gray-300 rounded-md w-[280px]">
                <div>
                  <img
                    className="w-[280px] h-44 p-2 object-cover"
                    src={product.image}
                  />
                  <img
                    className="w-8 h-8"
                    src="https://w7.pngwing.com/pngs/646/82/png-transparent-wishlist-heart-love-add-to-wishlist-retail-shopping-icon-thumbnail.png"
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
            );
          })
        : products.map((product) => {
            return (
              <div className="border border-gray-300 rounded-md w-[280px]">
                <div>
                  <img
                    className="w-[280px] h-44 p-2 object-cover"
                    src={product.image}
                  />
                  <img
                    className="w-8 h-8"
                    src="https://w7.pngwing.com/pngs/646/82/png-transparent-wishlist-heart-love-add-to-wishlist-retail-shopping-icon-thumbnail.png"
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
            );
          })}
      {load && (
        <div className="w-24 h-10 border border-gray-950 p-2">
          <button onClick={() => setLoad(false)}>Load more</button>
        </div>
      )}
    </div>
  );
}

export default Body;
