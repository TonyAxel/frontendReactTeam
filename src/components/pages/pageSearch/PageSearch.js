import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import AxiosClient from "../../../axiosClient/AxiosClient";
import ItemAllProducts from "../pageShopAllProducts/ItemAllProducts";

const PageSearch = () => {
    const {string} = useParams();
    const [products, setProducts] = useState([])

    useEffect(() => {
        AxiosClient.post(`/searchProducts/${string}`)
            .then((res) => {
                setProducts(res.data)
            })

    }, [string]);

    return (
        <div className='page_content'>
            <div className="content_products">
                <div className="items_products">
                    {products.map((product) => {
                        return <ItemAllProducts
                            key={product.id}
                            oldPrice={product.cost}
                            newPrice={product.discounted_cost === 0 ? '' : product.discounted_cost}
                            name={product.name_product.split(" ", 3).join(" ")}
                            photo={product.image}
                            id={product.id}/>
                    })
                    }
                </div>
            </div>
        </div>
    );
};

export default PageSearch;
