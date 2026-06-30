import { Link } from "react-router";


const Register = () => {
    return (
        <div className="card bg-base-100 w-full mx-auto mt-12 p-6 max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl font-bold text-center">Register now!</h1>
            <div className="card-body">
                <form className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <button className="btn btn-neutral mt-4">Register</button>
                </form>
                <p>Already have an account? Please <Link to="/login" className="underline text-blue-400">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;