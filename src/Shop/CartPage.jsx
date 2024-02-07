import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from "../assets/images/shop/del.png";
import CheckOutPage from './CheckOutPage';

const CartPage = () => {
    const [cartItems, setCartItems] =useState([])

    useEffect(()=>{
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCartItems);
    }, [])

    const calculateTotalPrice =(item)=>{
        return item.price * item.quantity
    }

    const handleIncease =(item)=>{
        item.quantity += 1;
        setCartItems([...cartItems])


        localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    const handleDecrease =(item)=>{
        if(item.quantity > 1){
            item.quantity -= 1;
            setCartItems([...cartItems]);


            localStorage.setItem("cart", JSON.stringify(cartItems));
        }
    };


    const handleRemoveItem =(item)=>{
        const updatedCart = cartItems.filter((cartItems)=> cartItems.id !== item.id)

        setCartItems([updatedCart])

        updateLocalStorage(updatedCart);
    }

    const updateLocalStorage = (cart)=>{
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    const cartSubtotal = cartItems.reduce((total, item)=>{
        return total + calculateTotalPrice(item);
    }, 0)

    const orderTotal = cartSubtotal;

  return (
    <div>
        <PageHeader title={"Shop Cart"} curPage={"Cart Page"}/>

        <div className='shop-cart padding-tb'>
            <div className="container">
                <div className="section-wrapper">

                    <div className="cart-top">
                        <table>
                            <thead>
                                <tr>
                                    <th className='cat-product'>Product</th>
                                    <th className='cat-price'>Price</th>
                                    <th className='cat-quantity'>Quantity</th>
                                    <th className='cat-toprice'>Total</th>
                                    <th className='cat-edit'>Edit</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    cartItems.map((item, indx) =>(
                                        <tr key={indx}>
                                            <td className='product-item cat-product'>
                                                <div className='p-thumb'>
                                                    <Link to="/shop"><img src={item.img} alt="" /></Link>
                                                </div>
                                            </td>

                                            <td className='cat-price'>$ {item.price}</td>
                                            <td className='cat-quantity'>
                                                <div className='cart-plus-minus'>
                                                    <div className='dec qtybutton' onChange={()=> handleDecrease(item)}>-</div>
                                                    <input type="text" name="qtybutton"className='cart-plus-minus-box' value={item.quantity} />
                                                    <div className='inc qtybutton' onChange={()=> handleIncease(item)}>+</div>
                                                </div>
                                            </td>
                                            <td className='cat-toprice'>${calculateTotalPrice(item)}</td>
                                            <td className='cat-edit'>
                                                <a href="#" onClick={() => handleRemoveItem(item)}>
                                                    <img src={delImgUrl} alt="" />
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>


                    <div className="cart-bottom">

                    {/* <div className='cart-bottom'></div> */}

                        <div className="cart-checkout-box">
                            <form className='coupon'>
                                <input className='cart-page-input-text' type="text" name='coupon' id='coupon' placeholder='Coupon code ....'/>
                                <input type="submit" value="Apply Coupon" />
                            </form>


                        </div>

                        <div className="shiping-box">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="calculate-shiping">
                                        <h3>Calculate Shiping</h3>
                                        <div className="outline-select">
                                            <select>
                                                <option value="uk">Namangan</option>
                                                <option value="bd">Andijon</option>
                                                <option value="pak">Farg'ona</option>
                                                <option value="ind">Toshkent</option>
                                                <option value="np">Samarqand</option>
                                                <option value="br">Buxoro</option>
                                                <option value="xz">Xorazim</option>
                                                <option value="ny">Navoiy</option>
                                                <option value="qsh">Qashqadaryo</option>
                                                <option value="jx">Jizzax</option>
                                                <option value="sd">Sirdaryo</option>
                                                <option value="sx">Surxandaryo</option>
                                            </select>
                                                <span className='select-icon'>
                                                    <i className='icofont-rounded-down'></i>
                                                </span>
                                        </div>
                                       
                                            <button type='submit'>Update Adress</button>

                                        </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="cart-overview">
                                        <h3>Cart Totals</h3>
                                        <ul className='lab-ul'> 
                                            <li>
                                                <span className="pull-left">Cart Subtotal</span>
                                                <p className='pull-right'>$ {cartSubtotal}</p>
                                            </li>
                                            <li>
                                                <span className="pull-left">Shipping and Handling</span>
                                                <p className='pull-right'>Free Shipping</p>
                                            </li>
                                            <li>
                                                <span className="pull-left">Order Total</span>
                                                <p className='pull-right'>$ {orderTotal.toFixed(2)}</p>
                                            </li>
                                        </ul>
                                    <CheckOutPage />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartPage