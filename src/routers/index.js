import { Route, Routes } from 'react-router-dom'
import Router from './Router'
import { publicRouters } from './RouterList'
import AxiosClient from "../axiosClient/AxiosClient";
import {useEffect} from "react";
import {setUser} from "../store/AuthSlice";
import {useDispatch} from "react-redux";
const Index = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        localStorage.getItem('ACCESS_TOKEN') && AxiosClient.get('/user').then(r => dispatch(setUser(r.data)))
    }, []);


    return(
        <>
            <Router>
                <Routes>
                    <Route>
                        {
                            publicRouters.map(({path,component},i) => {
                                return <Route key={i} path={path} element={component} />
                            })
                        }
                    </Route>
                </Routes>
            </Router>
        </>
    )
}
export default Index;