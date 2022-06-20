import { Navigate, Outlet } from "react-router-dom";
import { useTypedSelector } from "./hooks/useTypedSelectior";
import { RootState } from "./store";

const ProtectedRoutes: React.FC = () => {
    const { isLogin } = useTypedSelector( (state:RootState)  => state.userReducer)
    return (
      isLogin ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default ProtectedRoutes
