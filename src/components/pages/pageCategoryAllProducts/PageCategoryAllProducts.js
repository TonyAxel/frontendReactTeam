import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import AxiosClient from "../../../axiosClient/AxiosClient";
import ItemAllProducts from "./ItemAllProducts";

const PageCategoryAllProducts = () => {

    const {id} = useParams();

    // const [count, setCount] = useState(10)
    const [category, setCategory] = useState([])

    useEffect(() => {
        AxiosClient.post(`/productsByCategory/${id}`)
            .then((res) => {
                setCategory(res.data[0])
            })

    }, [id]);

    return (
        <div className='page_content'>
            <div className="content_products">
                {
                    (category || []).map((category) => {
                        return (
                            <>
                                <div className="card_header">
                                    <h2>{category.name_subcategory}</h2>
                                </div>

                                <div className="items_products">
                                    {
                                        category.products.map((product) => {
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
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default PageCategoryAllProducts;
