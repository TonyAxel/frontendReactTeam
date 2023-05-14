import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import AddProductInCart from "../../../functions/addProductInCart";
import {Link} from "react-router-dom";

const ItemSlider = ({product, oldPrice, newPrice, shop, photo, id}) => {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.authReducer)
    return (
        <>
            <Link to={`/product/${id}`} style={{color: "black"}}>
                <div className='item item_slider__product'>
                    <div className="item_shop">{shop}</div>
                    <img src={photo} alt=""/>
                    <p className="name_product">{product.split(" ", 3).join(" ")}</p>
                    <p className="old_price">{oldPrice} ₽</p>
                    <p className="new_price">{newPrice} ₽</p>
                    <button onClick={(event) => {
                        event.preventDefault();
                        AddProductInCart((data) => dispatch(data), user, id)
                    }}>Добавить</button>
                </div>
            </Link>
        </>
    );
};

export default ItemSlider;


