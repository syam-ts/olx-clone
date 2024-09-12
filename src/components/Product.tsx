import { useParams } from "react-router-dom"
import { products } from '../constants/product'

const Product = () => {
  const { id }: any = useParams()
  const product = products.find((product) => product.id === parseInt(id))

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div class="bg-stone-100 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 :bg-gray-700 mb-4">
                    <img class="w-full h-full object-cover" src={product.image} alt="Product Image"
                    />
                </div>
                <div class="flex -mx-2 mb-4">
                    <div class="w-1/2 px-2">
                        <button class="w-full bg-gray-900 :bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 :hover:bg-gray-700">Make an Offer</button>
                    </div>
                    <div class="w-1/2 px-2">
                        <button class="w-full bg-gray-200 :bg-gray-700 text-gray-800 :text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 :hover:bg-gray-600">Sell a Product</button>
                    </div>
                </div>
            </div>
            <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-gray-800 :text-white mb-2">{product.id}</h2>
                <p class="text-gray-600 :text-gray-300 text-sm mb-4">
                   Olx trustable Customer
                </p>
                <div class="flex mb-4">
                    <div class="mr-4">
                        <span class="font-bold text-gray-700 :text-gray-300">Price:</span>
                        <span class="text-gray-600 :text-gray-300">{product.price}</span>
                    </div>
                    <div>
                        <span class="font-bold text-gray-700 :text-gray-300">Availability:</span>
                        <span class="text-gray-600 :text-gray-300">Not Sold</span>
                    </div>
                </div>
                <div class="mb-4">
                    <span class="font-bold text-gray-700 :text-gray-300">Posted Date:</span>
                    <div class="flex items-center mt-2">
                        <span class="text-black mr-2">
                          {product.day}
                        </span>
                       
                    </div>
                </div>
                <div class="mb-4">
                    <span class="font-bold text-gray-700 :text-gray-300">Place:</span>
                    <div class="flex items-center mt-2">
                        <button class="bg-gray-300 :bg-gray-700 text-gray-700 :text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 :hover:bg-gray-600">
                          {product.place}
                          </button>
                       
                    </div>
                </div>
                <div>
                    <span class="font-bold text-gray-700 :text-gray-300">Reason:</span>
                    <p class="text-gray-600 :text-gray-300 text-sm mt-2">
                      {product.reason}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                        lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                        ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                        sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

 
  )
}

export default Product
