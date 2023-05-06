import MainPage from "../components/pages/mainPage/MainPage";
import PageShopAllProducts from "../components/pages/pageShopAllProducts/PageShopAllProducts";
import {Navigate} from "react-router-dom";
import PageCategoryAllProducts from "../components/pages/pageCategoryAllProducts/PageCategoryAllProducts";
import PageSubCategoryAllProducts from "../components/pages/pageSubCategoryAllProducts/pageSubCategoryAllProducts";
import PageProductInfo from "../components/pages/pageProductInfo/PageProductInfo";
import PageProfile from "../components/pages/pageProfile/PageProfile";
import PageCart from "../components/pages/pageCart/PageCart";
const publicRouters = [
    {path: '/', component: <MainPage/>},
    {path: '/shop/:id/products', component: <PageShopAllProducts/>},
    {path: '/category/:id/products', component: <PageCategoryAllProducts/>},
    {path: '/subcategory/:id/products', component: <PageSubCategoryAllProducts/>},
    {path: '/product/:id', component: <PageProductInfo/>},
    {path: '/profile', component: <PageProfile/>},
    {path: '/cart', component: <PageCart/>},
    {path: '*', component: <Navigate to={'/'}/>}
]

export {publicRouters};