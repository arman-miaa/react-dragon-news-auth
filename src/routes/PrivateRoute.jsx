import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loading";


const PrivateRoute = ({children}) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loader) {
      return <Loading></Loading>;
    }
    if (user && user?.email) {
        return children;
    }
    return (
        <div>
            <Navigate state={location.pathname} to='/auth/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;