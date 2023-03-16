import Footer from "../components/layouts/footer/Footer";
import Header from "../components/layouts/header/Header";
import LeftPopupMenu from "../components/layouts/leftPopupMenu/LeftPopupMenu";
import PopupAuth from "../components/popup/popupAuth/PopupAuth";
import PopupRegister from "../components/popup/popupRegister/PopupRegister";


const Router = ({children}) => {
    return(
        <div style={{margin: 'auto', position: 'relative', overflow: 'hidden', height: '100vh'}}>
            <Header/>
            <PopupAuth/>
            <PopupRegister/>
            <LeftPopupMenu/>
                {children}
            <Footer/>
        </div>
    )
}

export default Router;