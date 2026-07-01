// import { createUserWithEmailAndPassword } from "firebase/auth";
import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";
// import { auth } from "../../firebase.init";


const Register = () => {

    const { createUser } = use(AuthContext);

    const handleRegister = e => {
        e.preventDefault();

        //form validation
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        //create user
        // createUserWithEmailAndPassword(auth, email, password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);
        //     })
        //     .catch(error => {
        //         console.log(error.message);
        //     })
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })


    }
    return (
        <div className="card bg-base-100 w-full mx-auto mt-12 p-6 max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl font-bold text-center">Register now!</h1>
            <div className="card-body">
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name="name" className="input" placeholder="Name" />
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />
                    <button className="btn btn-neutral mt-4">Register</button>
                </form>
                <p>Already have an account? Please <Link to="/login" className="underline text-blue-400">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;