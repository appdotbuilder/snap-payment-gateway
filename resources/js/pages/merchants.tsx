import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { 
    Plus, 
    Search, 
    Filter, 
    Eye, 
    Edit, 
    CheckCircle, 
    XCircle,
    Users,
    Building,
    Globe

} from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Merchants',
        href: '/merchants',
    },
];

const merchants = [
    { 
        id: 'MERCH-001', 
        name: 'TechCorp Solutions', 
        email: 'admin@techcorp.com', 
        status: 'Active', 
        company: 'TechCorp Inc.',
        revenue: '$45,230',
        transactions: 234,
        joinDate: '2024-12-15'
    },
    { 
        id: 'MERCH-002', 
        name: 'E-Shop Pro', 
        email: 'contact@eshoppro.com', 
        status: 'Active', 
        company: 'E-Shop Pro Ltd.',
        revenue: '$38,750',
        transactions: 189,
        joinDate: '2024-11-22'
    },
    { 
        id: 'MERCH-003', 
        name: 'Digital Mart', 
        email: 'info@digitalmart.com', 
        status: 'Pending', 
        company: 'Digital Mart LLC',
        revenue: '$12,500',
        transactions: 67,
        joinDate: '2025-01-20'
    },
    { 
        id: 'MERCH-004', 
        name: 'Fashion Boutique', 
        email: 'hello@fashionboutique.com', 
        status: 'Active', 
        company: 'Fashion Boutique Co.',
        revenue: '$28,900',
        transactions: 156,
        joinDate: '2024-10-08'
    },
    { 
        id: 'MERCH-005', 
        name: 'Tech Gadgets', 
        email: 'support@techgadgets.com', 
        status: 'Inactive', 
        company: 'Tech Gadgets Inc.',
        revenue: '$8,200',
        transactions: 23,
        joinDate: '2024-09-12'
    },
    { 
        id: 'MERCH-006', 
        name: 'Book Store', 
        email: 'orders@bookstore.com', 
        status: 'Active', 
        company: 'Book Store Online',
        revenue: '$15,680',
        transactions: 89,
        joinDate: '2024-08-30'
    },
];

const StatusBadge = ({ status }: { status: string }) => {
    const statusConfig = {
        'Active': { color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400', icon: CheckCircle },
        'Inactive': { color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400', icon: XCircle },
        'Pending': { color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400', icon: CheckCircle },
    };

    const config = statusConfig[status as keyof typeof statusConfig];
    const Icon = config.icon;

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
            <Icon className="w-3 h-3 mr-1" />
            {status}
        </span>
    );
};

export default function Merchants() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Merchants - Payment Gateway Hub" />
            <div className="flex h-full flex-1 flex-col gap-6 p-6 bg-gray-50 dark:bg-slate-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Merchants 👥</h1>
                        <p className="text-gray-600 mt-1 dark:text-gray-400">Manage your merchant partners and their accounts</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors dark:bg-slate-800 dark:border-slate-600 dark:hover:bg-slate-700">
                            <Filter className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-400" />
                            <span className="text-gray-700 dark:text-gray-300">Filter</span>
                        </button>
                        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            <Plus className="w-4 h-4 mr-2" />
                            <span>Add Merchant</span>
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Merchants</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">1,456</p>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center dark:bg-blue-900/30">
                                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active</p>
                                <p className="text-2xl font-bold text-green-600 dark:text-green-400">1,298</p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center dark:bg-green-900/30">
                                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending</p>
                                <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">89</p>
                            </div>
                            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center dark:bg-yellow-900/30">
                                <Building className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Inactive</p>
                                <p className="text-2xl font-bold text-red-600 dark:text-red-400">69</p>
                            </div>
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center dark:bg-red-900/30">
                                <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search and Filters */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search merchants by name, email, or company..."
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                                />
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white">
                                <option>All Status</option>
                                <option>Active</option>
                                <option>Pending</option>
                                <option>Inactive</option>
                            </select>
                            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white">
                                <option>All Time</option>
                                <option>Last 30 days</option>
                                <option>Last 3 months</option>
                                <option>Last 6 months</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Merchant Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {merchants.map((merchant) => (
                        <div key={merchant.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-200 dark:bg-slate-800 dark:border-slate-700">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        {merchant.name.split(' ').map(word => word[0]).join('').substring(0, 2)}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">{merchant.name}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{merchant.id}</p>
                                    </div>
                                </div>
                                <StatusBadge status={merchant.status} />
                            </div>

                            <div className="space-y-3 mb-4">
                                <div className="flex items-center space-x-2">
                                    <Globe className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm text-gray-600 dark:text-gray-400">{merchant.email}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Building className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm text-gray-600 dark:text-gray-400">{merchant.company}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="bg-gray-50 p-3 rounded-lg dark:bg-slate-700">
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Revenue</p>
                                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{merchant.revenue}</p>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-lg dark:bg-slate-700">
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Transactions</p>
                                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{merchant.transactions}</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-600">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Joined {new Date(merchant.joinDate).toLocaleDateString()}
                                </span>
                                <div className="flex items-center space-x-2">
                                    <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-blue-900/20">
                                        <Eye className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors dark:text-gray-400 dark:hover:text-green-400 dark:hover:bg-green-900/20">
                                        <Edit className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More */}
                <div className="flex justify-center">
                    <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors dark:bg-slate-800 dark:border-slate-600 dark:hover:bg-slate-700">
                        <span className="text-gray-700 dark:text-gray-300">Load More Merchants</span>
                    </button>
                </div>
            </div>
        </AppLayout>
    );
}