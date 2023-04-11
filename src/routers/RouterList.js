import MainPage from "../components/pages/mainPage/MainPage";
import PageShopAllProducts from "../components/pages/pageShopAllProducts/PageShopAllProducts";
import {Navigate} from "react-router-dom";
const publicRouters = [
    {path: '/', component: <MainPage/>},
    {path: '/shop/:id/products', component: <PageShopAllProducts/>},
    {path: '*', component: <Navigate to={'/'}/>}
]

export {publicRouters};