import React from 'react';
import {useState, useEffect} from "react";
import AxiosClient from "../../../axiosClient/AxiosClient";

const CategoryProductPopupMenu = () => {

    const [categorySubcategory, setCategorySubcategory] = useState([]);
    const [showSubcategory, setShowSubcategory] = useState('');

    useEffect(() => {
        AxiosClient.post('/productCategoriesForMenu')
            .then(
                (res) => {
                    setCategorySubcategory(res.data);
                    setShowSubcategory(res.data[0].id)
                }
            )
    }, []);

    return (
        <div className="category_product">
            <div className="category">
                {
                    categorySubcategory.map((category) => {
                        return(
                            <div key={category.id} onMouseEnter={() => setShowSubcategory(category.id)}>
                                {category.name_category}
                            </div>
                        )

                    })
                }

            </div>
            <div className="subcategory">
                {
                    categorySubcategory.map((category) => {
                        if (category.id === showSubcategory)
                            return category.sub_categories.map((subCategory) => {
                                return(
                                    <div key={subCategory.id}>
                                        {
                                            subCategory.name_subcategory
                                        }
                                    </div>
                                )
                            })
                        else {
                            return null
                        }
                    })
                }
            </div>
        </div>
    );
};

export default CategoryProductPopupMenu;
