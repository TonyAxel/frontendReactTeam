import React from 'react';
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import AddProductInCart from "../../functions/addProductInCart";
import {Link} from "react-router-dom";

const ItemAllProducts = ({name, oldPrice, newPrice, photo, id}) => {

    const classes = classNames({
        'new_price_p_salle': newPrice !== '',
        'new_price_p': newPrice === ''
    })
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.authReducer)
    return (
        <Link to={`/product/${id}`} className="item_product">
            <div className="product_img" >
                <img
                    src={photo}
                    alt=""/>
            </div>
            <p className="name_product">{name}</p>
            {
                newPrice !== '' ?
                    <div>
                        <p className="old_price_p">{oldPrice}</p>
                        <p className={classes}>{newPrice} ₽</p>
                    </div> :
                    <div>
                        <p className={classes}>{oldPrice} ₽</p>
                    </div>

            }
            <button onClick={(event) => {
                event.preventDefault();
                AddProductInCart((data) => dispatch(data), user, id)
            }}>Добавить</button>
        </Link>
    );
};

export default ItemAllProducts;
