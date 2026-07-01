import { AuthContext } from "./AuthContext";


const AuthProvider = ({ children }) => {

    const userInfo = {
        email: "chakmashantunu.web@gmail.com"
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;