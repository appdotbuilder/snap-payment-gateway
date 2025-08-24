import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { 
    TrendingUp, 
    DollarSign, 
    Users, 
    Activity,
    CreditCard,
    ArrowUpRight

} from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard - Payment Gateway Hub" />
            <div className="flex h-full flex-1 flex-col gap-6 p-6 bg-gray-50 dark:bg-slate-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
                {/* Welcome Section */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold mb-2">Welcome to Payment Gateway Hub 💳</h1>
                            <p className="text-blue-100 text-lg">Monitor your payment ecosystem in real-time</p>
                        </div>
                        <div className="hidden md:block">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                                <CreditCard className="w-8 h-8 text-white" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center dark:bg-green-900/30">
                                <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <div className="flex items-center text-green-600 text-sm font-medium dark:text-green-400">
                                <ArrowUpRight className="w-4 h-4 mr-1" />
                                +12.5%
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">$1,234,567</h3>
                            <p className="text-gray-600 mt-1 dark:text-gray-400">Total Transactions</p>
                            <p className="text-sm text-gray-500 mt-2 dark:text-gray-500">Last 30 days</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center dark:bg-orange-900/30">
                                <DollarSign className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                            </div>
                            <div className="flex items-center text-orange-600 text-sm font-medium dark:text-orange-400">
                                <ArrowUpRight className="w-4 h-4 mr-1" />
                                +8.3%
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">$56,789</h3>
                            <p className="text-gray-600 mt-1 dark:text-gray-400">Revenue Today</p>
                            <p className="text-sm text-gray-500 mt-2 dark:text-gray-500">As of 2:30 PM</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center dark:bg-blue-900/30">
                                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div className="flex items-center text-blue-600 text-sm font-medium dark:text-blue-400">
                                <ArrowUpRight className="w-4 h-4 mr-1" />
                                +5.7%
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">1,456</h3>
                            <p className="text-gray-600 mt-1 dark:text-gray-400">Active Merchants</p>
                            <p className="text-sm text-gray-500 mt-2 dark:text-gray-500">Currently online</p>
                        </div>
                    </div>
                </div>

                {/* Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Transaction Trends Chart */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Transaction Trends</h3>
                            <div className="flex items-center text-green-600 text-sm font-medium dark:text-green-400">
                                <TrendingUp className="w-4 h-4 mr-1" />
                                +15.2%
                            </div>
                        </div>
                        <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center dark:from-blue-900/20 dark:to-blue-800/20">
                            <div className="text-center">
                                <Activity className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                                <p className="text-gray-600 dark:text-gray-400">Line Chart: Transaction Volume Over Time</p>
                                <p className="text-sm text-gray-500 mt-2 dark:text-gray-500">Real-time data visualization</p>
                            </div>
                        </div>
                    </div>

                    {/* Revenue Chart */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue Analytics</h3>
                            <div className="flex items-center text-purple-600 text-sm font-medium dark:text-purple-400">
                                <TrendingUp className="w-4 h-4 mr-1" />
                                +22.8%
                            </div>
                        </div>
                        <div className="h-64 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg flex items-center justify-center dark:from-purple-900/20 dark:to-purple-800/20">
                            <div className="text-center">
                                <DollarSign className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                                <p className="text-gray-600 dark:text-gray-400">Bar Chart: Daily Revenue Breakdown</p>
                                <p className="text-sm text-gray-500 mt-2 dark:text-gray-500">Last 30 days comparison</p>
                            </div>
                        </div>
                    </div>

                    {/* Merchant Activity Chart */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Merchant Activity</h3>
                            <div className="flex items-center text-indigo-600 text-sm font-medium dark:text-indigo-400">
                                <Users className="w-4 h-4 mr-1" />
                                1,456 Active
                            </div>
                        </div>
                        <div className="h-64 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg flex items-center justify-center dark:from-indigo-900/20 dark:to-indigo-800/20">
                            <div className="text-center">
                                <Users className="w-12 h-12 text-indigo-400 mx-auto mb-2" />
                                <p className="text-gray-600 dark:text-gray-400">Area Chart: Merchant Engagement</p>
                                <p className="text-sm text-gray-500 mt-2 dark:text-gray-500">Active vs. Inactive merchants</p>
                            </div>
                        </div>
                    </div>

                    {/* Success Rate Chart */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Success Rate Metrics</h3>
                            <div className="flex items-center text-emerald-600 text-sm font-medium dark:text-emerald-400">
                                <Activity className="w-4 h-4 mr-1" />
                                99.8%
                            </div>
                        </div>
                        <div className="h-64 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg flex items-center justify-center dark:from-emerald-900/20 dark:to-emerald-800/20">
                            <div className="text-center">
                                <Activity className="w-12 h-12 text-emerald-400 mx-auto mb-2" />
                                <p className="text-gray-600 dark:text-gray-400">Gauge Chart: Transaction Success Rate</p>
                                <p className="text-sm text-gray-500 mt-2 dark:text-gray-500">Real-time monitoring</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6 dark:text-white">Recent Activity</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg dark:bg-slate-700">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center dark:bg-green-900/30">
                                    <ArrowUpRight className="w-5 h-5 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">Payment processed successfully</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Transaction ID: TXN-789123 • Amount: $2,340</p>
                                </div>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">2 minutes ago</span>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg dark:bg-slate-700">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center dark:bg-blue-900/30">
                                    <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">New merchant registered</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">TechCorp Solutions • Pending verification</p>
                                </div>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">8 minutes ago</span>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg dark:bg-slate-700">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center dark:bg-purple-900/30">
                                    <CreditCard className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">API key generated</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">For merchant: E-Shop Pro • Environment: Production</p>
                                </div>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">15 minutes ago</span>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg dark:bg-slate-700">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center dark:bg-orange-900/30">
                                    <Activity className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">System maintenance completed</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">All services restored • Duration: 5 minutes</p>
                                </div>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">1 hour ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}