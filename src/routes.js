import {Routes, Route} from "react-router-dom";
import PageLoader from "./components/misc/PageLoader";
import LandingPage from "./pages/LandingPage";
import { useState, useEffect } from "react";


const Router = () => {
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(false)
    }, [])
 return (
    <>
    {loading ? (
        <PageLoader />
    ):(
       <Routes>
            <Route path = "/" element = {<LandingPage />}/>
       </Routes> 
    )}
    </>
 )   
}

export default Router 