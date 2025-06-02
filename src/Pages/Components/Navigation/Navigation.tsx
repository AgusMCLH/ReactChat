
import { Link } from "react-router-dom";
import { useEffect } from "react";
import type { SetUserFn } from "../../../utils/types.ts";

type NavigationProps = {
    IsUserLogged: boolean;
    setUser: SetUserFn;
};
  
const Navigation = ({IsUserLogged, setUser}: NavigationProps) => {
        useEffect(() => {
            console.log('Navigation component mounted', IsUserLogged);
        }, [IsUserLogged]);

        const handleLogout = () => {
            setUser(null);
        }
        return (
            <nav>
                <Link to="/">Login</Link><br/>
                <Link to="/PublicPage">Public Page</Link><br/>
                <Link to="/AdminPage">Admin Page</Link>
                {IsUserLogged? (<p onClick={handleLogout}>LogOut</p>):null}
            </nav>
        );
    }
export default Navigation;