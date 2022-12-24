import React from "react";
import Shirt from "./Shirt";

const ApparelList = ({products}) => {
    return (
        <section className='store'>
            <hr/>
            {products.map((product, index) => {
                return (
                <Shirt {...product} key={index}/>
                )
            })}
        </section>
    )
}

export default ApparelList