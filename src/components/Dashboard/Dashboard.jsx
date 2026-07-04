// App.jsx
import React, { useState } from 'react';
import {
    FiHome, FiBarChart2, FiShoppingBag, FiUsers,
    FiSettings, FiHelpCircle, FiSearch, FiBell,
    FiChevronLeft, FiChevronRight, FiTrendingUp,
    FiTrendingDown, FiDollarSign, FiPackage, FiUserCheck,
    FiClock, FiCheckCircle, FiAlertCircle
} from 'react-icons/fi';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // Sample data
    const stats = [
        {
            title: 'Total Revenue',
            value: '$54,239',
            change: '+12.5%',
            trend: 'up',
            icon: FiDollarSign,
            color: 'primary'
        },
        {
            title: 'Orders',
            value: '1,432',
            change: '+8.2%',
            trend: 'up',
            icon: FiPackage,
            color: 'secondary'
        },
        {
            title: 'Customers',
            value: '8,945',
            change: '+3.7%',
            trend: 'up',
            icon: FiUsers,
            color: 'accent'
        },
        {
            title: 'Conversion Rate',
            value: '24.8%',
            change: '-2.1%',
            trend: 'down',
            icon: FiBarChart2,
            color: 'warning'
        },
    ];

    const recentOrders = [
        { id: 1, customer: 'John Doe', product: 'Product A', amount: '$120', status: 'Completed' },
        { id: 2, customer: 'Jane Smith', product: 'Product B', amount: '$85', status: 'Processing' },
        { id: 3, customer: 'Bob Johnson', product: 'Product C', amount: '$200', status: 'Completed' },
        { id: 4, customer: 'Alice Brown', product: 'Product D', amount: '$150', status: 'Pending' },
        { id: 5, customer: 'Charlie Wilson', product: 'Product E', amount: '$95', status: 'Cancelled' },
    ];

    const chartData = [
        { day: 'Mon', value: 65 },
        { day: 'Tue', value: 78 },
        { day: 'Wed', value: 90 },
        { day: 'Thu', value: 85 },
        { day: 'Fri', value: 95 },
        { day: 'Sat', value: 70 },
        { day: 'Sun', value: 88 },
    ];

    const getStatusBadge = (status) => {
        const badges = {
            'Completed': 'badge-success',
            'Processing': 'badge-warning',
            'Pending': 'badge-error',
            'Cancelled': 'badge-ghost'
        };
        return badges[status] || 'badge-ghost';
    };

    const getStatusIcon = (status) => {
        const icons = {
            'Completed': <FiCheckCircle className="w-3 h-3" />,
            'Processing': <FiClock className="w-3 h-3" />,
            'Pending': <FiAlertCircle className="w-3 h-3" />,
            'Cancelled': <FiAlertCircle className="w-3 h-3" />
        };
        return icons[status] || null;
    };

    return (
        <div className="min-h-screen bg-base-200 flex">
            {/* Sidebar */}
            <div className={`${isSidebarOpen ? 'w-72' : 'w-20'} bg-base-100 shadow-xl transition-all duration-300 fixed h-full z-50`}>
                <div className="p-4 flex items-center justify-between border-b border-base-300">
                    {isSidebarOpen && (
                        <h2 className="text-xl font-bold text-primary flex items-center gap-2">
                            <FiBarChart2 className="text-2xl" />
                            Dashboard
                        </h2>
                    )}
                    <button
                        className="btn btn-ghost btn-sm"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        {isSidebarOpen ? <FiChevronLeft size={20} /> : <FiChevronRight size={20} />}
                    </button>
                </div>

                <ul className="menu p-4 gap-2">
                    <li>
                        <a className="active bg-primary text-primary-content hover:bg-primary-focus">
                            <FiHome size={20} />
                            {isSidebarOpen && <span>Dashboard</span>}
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-base-200">
                            <FiBarChart2 size={20} />
                            {isSidebarOpen && <span>Analytics</span>}
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-base-200">
                            <FiShoppingBag size={20} />
                            {isSidebarOpen && <span>Orders</span>}
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-base-200">
                            <FiUsers size={20} />
                            {isSidebarOpen && <span>Customers</span>}
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-base-200">
                            <FiSettings size={20} />
                            {isSidebarOpen && <span>Settings</span>}
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-base-200">
                            <FiHelpCircle size={20} />
                            {isSidebarOpen && <span>Help</span>}
                        </a>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-72' : 'ml-20'}`}>
                {/* Top Bar */}
                <div className="navbar bg-base-100 shadow-md px-6 sticky top-0 z-40">
                    <div className="flex-1">
                        <div className="form-control w-full max-w-xs">
                            <div className="input-group">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="input input-bordered w-full"
                                />
                                <button className="btn btn-square btn-ghost">
                                    <FiSearch size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex-none gap-3">
                        <button className="btn btn-ghost btn-circle relative">
                            <FiBell size={22} />
                            <span className="badge badge-error badge-xs absolute top-0 right-0">3</span>
                        </button>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://i.pravatar.cc/40?img=1" alt="User" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu dropdown-content z-50 p-2 shadow-lg bg-base-100 rounded-box w-52">
                                <li><a>Profile</a></li>
                                <li><a>Settings</a></li>
                                <li><hr className="my-1" /></li>
                                <li><a className="text-error">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6">
                    {/* Welcome Section */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-base-content">Welcome back, Admin! 👋</h1>
                        <p className="text-base-content/60 mt-1">Here's what's happening with your business today</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat bg-base-100 shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <div className="stat-title text-base-content/60 text-sm">{stat.title}</div>
                                        <div className="stat-value text-2xl font-bold mt-1">{stat.value}</div>
                                        <div className={`flex items-center gap-1 mt-2 text-sm ${stat.trend === 'up' ? 'text-success' : 'text-error'
                                            }`}>
                                            {stat.trend === 'up' ? <FiTrendingUp /> : <FiTrendingDown />}
                                            {stat.change}
                                        </div>
                                    </div>
                                    <div className={`p-3 rounded-xl bg-${stat.color}/10 text-${stat.color}`}>
                                        <stat.icon size={24} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Charts and Orders Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Chart */}
                        <div className="bg-base-100 shadow-md rounded-xl p-6">
                            <h3 className="text-lg font-semibold mb-6">Weekly Sales</h3>
                            <div className="h-64 flex items-end gap-4">
                                {chartData.map((item, index) => (
                                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                                        <div
                                            className="w-full max-w-[40px] bg-primary rounded-lg transition-all hover:opacity-80"
                                            style={{ height: `${(item.value / 100) * 200}px` }}
                                        ></div>
                                        <span className="text-xs text-base-content/60">{item.day}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Orders */}
                        <div className="bg-base-100 shadow-md rounded-xl p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-semibold">Recent Orders</h3>
                                <button className="btn btn-ghost btn-sm">View All</button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="table table-sm">
                                    <thead>
                                        <tr>
                                            <th>Customer</th>
                                            <th>Product</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recentOrders.map((order) => (
                                            <tr key={order.id} className="hover">
                                                <td className="font-medium">{order.customer}</td>
                                                <td>{order.product}</td>
                                                <td>{order.amount}</td>
                                                <td>
                                                    <div className={`badge ${getStatusBadge(order.status)} gap-1`}>
                                                        {getStatusIcon(order.status)}
                                                        {order.status}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Additional Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        <div className="bg-gradient-to-r from-primary to-secondary text-primary-content rounded-xl p-6 shadow-lg">
                            <div className="flex items-center gap-4">
                                <div className="bg-white/20 p-3 rounded-xl">
                                    <FiShoppingBag size={24} />
                                </div>
                                <div>
                                    <p className="text-sm opacity-90">Total Orders</p>
                                    <p className="text-2xl font-bold">1,432</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-accent to-secondary text-accent-content rounded-xl p-6 shadow-lg">
                            <div className="flex items-center gap-4">
                                <div className="bg-white/20 p-3 rounded-xl">
                                    <FiUserCheck size={24} />
                                </div>
                                <div>
                                    <p className="text-sm opacity-90">New Customers</p>
                                    <p className="text-2xl font-bold">247</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-warning to-error text-warning-content rounded-xl p-6 shadow-lg">
                            <div className="flex items-center gap-4">
                                <div className="bg-white/20 p-3 rounded-xl">
                                    <FiDollarSign size={24} />
                                </div>
                                <div>
                                    <p className="text-sm opacity-90">Revenue Today</p>
                                    <p className="text-2xl font-bold">$8,450</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;