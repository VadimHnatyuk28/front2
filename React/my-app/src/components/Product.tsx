import React, { useState } from "react";
import { IProduct } from "../models";

interface ProductProps{
    product:IProduct
}

export function Product(props:ProductProps){
    const [details,setDetails] = useState(false)

    

    return(
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            Product : 
            {props.product.title}
            <img src={props.product.image} alt="123" className="w-1/6 " />
            <p>{props.product.title}</p>
            <span className="font-bold">{props.product.price}</span>
            <button 
            className="py-2 px-4 border bg-yellow-400"
            onClick={()=>setDetails(true)}
            >Show details
            </button>

{/* 43 minut */}
            {details && <div>
                <p>{props.product.description}</p>
            </div>}
            
        </div>
    )
}