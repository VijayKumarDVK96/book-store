import React from "react";

const clickHandler = function (a, b) {
    console.log(a+b);
}

const Shirt = ({image, title, desc, price}) => {
    return (
        <article className='product'>
            <img src={image} alt={title} className='product-image'/>
            <h3 className='product-title'>{title}</h3>
            <p className='product-description'>{desc}</p>
            <h4 className='product-price'>{price}</h4>

            <button className="btn btn-click" onClick={() => clickHandler(3,4)}>Click</button>
        </article>
    )
}

export default Shirt