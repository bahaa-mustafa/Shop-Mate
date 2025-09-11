import { useParams } from "react-router-dom"
import "./ProductDetails.css"
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/counterSlice";




function ProductDetails() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const { id } = useParams()
    // console.log(id);

    let [myData, setMyData] = useState({})

    async function getData() {
        const data = await fetch(`https://fakestoreapi.com/products/${id}`)
        const apiData = await data.json()
        setMyData(apiData)
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="details">
                <h2>Product details page</h2>
                <div className="details_card">
                    <div className="img">
                        <img src={myData.image} alt={myData.image} />
                    </div>
                    <div className="text">
                        <h2>{myData.title}</h2>
                        <h3>price: {myData.price}$</h3>
                        <p>{myData.description}</p>
                    </div>
                    <div className="btn">
                        <button onClick={() => dispatch(increment())}>add to card</button>
                        <button onClick={() => dispatch(decrement())}>remove from card</button>
                        <p>Counter: {count}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
