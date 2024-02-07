import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const desc = "Energistia an deliver atactice metrcs after avsionary Apropria trnittion enterpris an sources applications emerging psd template."
const ProductDisplay = ({ item }) => {
    const { name, id, price, seller, ratingsCount, quantity, img } = item;
    // Removed the useState for quantity
    const [prequantity, setQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState("");
    const [sizes, setSizes] = useState("Select Size");
    const [color, setColor] = useState("Select Color");


    const handleSizeChange =(e)=>{
        setSizes(e.target.value);
    }
    const handleColorChange =(e)=>{
        setColor(e.target.value);
    }
    const handleDec =()=>{
        if(prequantity > 1){
            setQuantity(prequantity - 1);
        }
    }
    const handleInc =()=>{
        setQuantity(prequantity + 1);
        }
        const handleSubmit =(e)=>{
            e.preventDefault();
            const product={
                id: id,
                img: img,
                name: name,
                price: price,
                quantity: prequantity,
                sizes: sizes,
                color: color,
                coupon: coupon
            }
            // console.log(product);
            const existingCart= JSON.parse(localStorage.getItem("cart")) || [];

            const existingProductIndex = existingCart.findIndex((item) => item.id === id)
            if(existingProductIndex !== -1){
                existingCart[existingProductIndex].quantity += prequantity;
            }else{
                existingCart.push(product);
            }


            localStorage.setItem("cart", JSON.stringify(existingCart))

            setQuantity(1);
            setSizes("Select Size");
            setColor("Select Color");
            setCoupon("");


        }
    return (
        <div>
            <div>
                <h4>{name}</h4>
                <p className='rating'>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <span>{ratingsCount} review</span>
                </p>
                <h4>${price}</h4>
                <h6>{seller}</h6>
                <p>{desc}</p>
            </div>


            <div>
                <form onSubmit={handleSubmit}>
                    <div className='select-product size'>
                        <select value={sizes} onChange={handleSizeChange}>
                            <option>Select Size</option>
                            <option>SM</option>
                            <option>MD</option>
                            <option>LG</option>
                            <option>XL</option>
                            <option>XXL</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>
                    <div className='select-product color'>
                        <select value={color} onChange={handleColorChange}>
                            <option>Select Color</option>
                            <option>Pink</option>
                            <option>Ash</option>
                            <option>Red</option>
                            <option>White</option>
                            <option>Blue</option>
                            <option>Black</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>

                    <div className='cart-plus-minus'>
                        <div className='dec qtybutton' onClick={handleDec}>-</div>
                        <input className='cart-plus-minus-box' type="text" name='qtybutton' id='qtybutton' value={prequantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))} />
                        <div className='inc qtybutton' onClick={handleInc}>+</div>
                    </div>


                    <div className='discount-code mb-2'>
                        <input type="text" placeholder='Enter Discount Code' onChange={(e)=> setCoupon(e.target.value)} />
                    </div>


                    <button className='lab-btn' type='submit'>
                        <span>Add to Cart</span>
                    </button>
                    <Link to="/cart-page" className='lab-btn bg-primary'>
                        <span>Check Out</span>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default ProductDisplay;
