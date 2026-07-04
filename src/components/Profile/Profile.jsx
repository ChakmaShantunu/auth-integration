import { use } from "react";
import { AuthContext } from "../../context/AuthContext";


const Profile = () => {
    const { user } = use(AuthContext);

    return (
        <div className="min-h-screen bg-base-200 py-10 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">

                        <div className="avatar">
                            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img
                                    src={
                                        user?.photoURL ||
                                        "https://i.ibb.co/4pDNDk1/avatar.png"
                                    }
                                    alt="Profile"
                                />
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mt-4">
                            {user?.displayName || "No Name"}
                        </h2>

                        <p className="text-gray-500">
                            {user?.email}
                        </p>

                        <div className="divider"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">

                            <div className="bg-base-200 rounded-lg p-4">
                                <h3 className="font-semibold text-lg">Display Name</h3>
                                <p>{user?.displayName || "Not Available"}</p>
                            </div>

                            <div className="bg-base-200 rounded-lg p-4">
                                <h3 className="font-semibold text-lg">Email</h3>
                                <p>{user?.email}</p>
                            </div>

                            <div className="bg-base-200 rounded-lg p-4">
                                <h3 className="font-semibold text-lg">Email Verified</h3>
                                <p>
                                    {user?.emailVerified ? "✅ Verified" : "❌ Not Verified"}
                                </p>
                            </div>

                            <div className="bg-base-200 rounded-lg p-4">
                                <h3 className="font-semibold text-lg">User ID</h3>
                                <p className="break-all">{user?.uid}</p>
                            </div>

                        </div>

                        <div className="card-actions mt-8">
                            <button className="btn btn-primary">
                                Edit Profile
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;