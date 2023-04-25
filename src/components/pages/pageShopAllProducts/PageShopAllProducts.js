import React from 'react';
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import ItemAllProducts from "./ItemAllProducts";
import AxiosClient from "../../../axiosClient/AxiosClient";

const PageShopAllProducts = () => {
    const {id} = useParams();
    console.log(id)
    const [count, setCount] = useState(10)
    const [products, setProducts] = useState([])
    const [shop, setShop] = useState('');

    useEffect(() => {
        AxiosClient.post(`/productsByShop/${id}/${count}`)
            .then((res) => {
                setShop(res.data[0][0])
                setProducts(res.data[1])
                console.log(res.data[1])
            })

    }, [count, id]);

    return (<div className='page_content'>
        <div className="content_products">
            <div className="card_header">
                <h2>{shop.name_shop}</h2>
            </div>
            <div className="items_products">
                {products.map((product) => {
                    return <ItemAllProducts
                        key={product.id}
                        oldPrice={product.cost}
                        newPrice={product.discounted_cost === 0 ? '' : product.discounted_cost}
                        name={product.name_product.split(" ", 3).join(" ")}
                        photo={product.image}/>
                })
                }
            </div>
        </div>
    </div>);
};

export default PageShopAllProducts;
