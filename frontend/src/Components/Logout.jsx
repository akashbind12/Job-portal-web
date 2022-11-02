import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../Redux/auth/action';

const Logout = () => {

    const user = useSelector((store) => store.userAuth);
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    useEffect(() => {
        dispatch(logout())
        navigate("/login")
    }, []);
    
    return (
       <div></div>
   )
};

export default Logout;