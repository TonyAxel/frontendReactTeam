import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setErrorAuth} from "../../../../store/AuthSlice";

const ItemSlider = ({product, oldPrice, newPrice, shop, photo, id}) => {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.authReducer)
    const addProduct = () => {
        if(user.id){

        }
        else{
            dispatch(setErrorAuth(true))
        }
    }
    return (
        <>
            <div>
                <div className='item item_slider__product'>
                    <div className="item_shop">{shop}</div>
                    <img src={photo} alt=""/>
                    <p className="name_product">{product.split(" ", 3).join(" ")}</p>
                    <p className="old_price">{oldPrice} ₽</p>
                    <p className="new_price">{newPrice} ₽</p>
                    <button onClick={() => addProduct()}>Добавить</button>
                </div>
            </div>
        </>
    );
};

export default ItemSlider;


