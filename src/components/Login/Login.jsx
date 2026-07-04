import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";


const Login = () => {

    const { signInUser } = use(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        // login user
        signInUser(email, password)
            .then(result => {
                console.log(result);
                navigate("/profile")
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="card bg-base-100 w-full mx-auto mt-12 p-6 max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl font-bold text-center">Login now!</h1>
            <div className="card-body">
                <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>New to this site? Please <Link className="underline text-blue-400" to="/register">Register</Link></p>
            </div>
        </div>

    );
};

export default Login;