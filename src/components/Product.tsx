import { useParams } from "react-router-dom"
import { products } from '../constants/product'

const Product = () => {
  const { id }: any = useParams()
  const product = products.find((product) => product.id === parseInt(id))

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="flex p-44">
      <div>
        <img src={product.image} />
      </div>
      <div className="ml-12 font-bold olx-font grid">
        <span className="p-3">Price: {product.price}</span> <br />
        <span className="p-3">Reason: {product.reason}</span> <br />
        <span className="p-3">Place: {product.place}</span> <br />
        <span className="p-3">Time: {product.day}</span>
      </div>
    </div>
  )
}

export default Product