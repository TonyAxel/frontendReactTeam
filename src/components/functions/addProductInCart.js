import {setCountProduct, setErrorAuth} from "../../store/AuthSlice";
import AxiosClient from "../../axiosClient/AxiosClient";

 const AddProductInCart = (dispatch, user, id) => {
    if(user.id){
        AxiosClient.post('/addCountProduct', {id: id})
            .then((res) => {
                AxiosClient.post('/CountProductInCart')
                    .then(
                        (res) => {
                            dispatch(setCountProduct(res.data))
                        }
                    )
            })
    }
    else{
        dispatch(setErrorAuth(true))
    }
}

export default AddProductInCart;