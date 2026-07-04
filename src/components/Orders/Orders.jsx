const orders = [
    {
        id: "#1001",
        customer: "John Doe",
        product: "Wireless Mouse",
        status: "Pending",
        price: "$25",
    },
    {
        id: "#1002",
        customer: "Alice Smith",
        product: "Mechanical Keyboard",
        status: "Delivered",
        price: "$85",
    },
    {
        id: "#1003",
        customer: "Michael Brown",
        product: "Gaming Headset",
        status: "Shipped",
        price: "$60",
    },
];

const Orders = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-2">My Orders</h2>
            <p className="text-gray-500 mb-6">
                Manage and track all your orders.
            </p>

            <div className="overflow-x-auto bg-white rounded-xl shadow">
                <table className="table">
                    <thead className="bg-gray-100">
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.customer}</td>
                                <td>{order.product}</td>
                                <td>
                                    <span
                                        className={`badge ${order.status === "Delivered"
                                                ? "badge-success"
                                                : order.status === "Pending"
                                                    ? "badge-warning"
                                                    : "badge-info"
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                                <td>{order.price}</td>
                                <td>
                                    <button className="btn btn-sm btn-primary">
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;