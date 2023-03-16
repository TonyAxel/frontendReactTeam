import { Route, Routes } from 'react-router-dom'
import Router from './Router'
import { publicRouters } from './RouterList'
const Index = () => {
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