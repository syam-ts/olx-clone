import { useParams } from "react-router-dom"


const Product = () => {
    const { id } = useParams()

    console.log('The params', id)

    return (
        <div className="flex p-20">
            <div>
            <img src="https://apollo.olx.in/v1/files/tcomtjnw4d6v-IN/image;s=780x0;q=60" />

            </div>
            <div className=" ml-12 font-bold">
            <span>Price</span> <br/>
            <span>Reason</span> <br/>
            <span>Place</span> <br/>
            <span>Time</span>
            </div>
           
        </div>
    )
}

export default Product