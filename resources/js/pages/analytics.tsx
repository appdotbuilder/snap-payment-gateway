import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { 
    BarChart3, 
    PieChart, 
    TrendingUp, 
    Activity,
    Download,
    Calendar,
    Filter,
    ArrowUpRight,
    ArrowDownRight
} from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Analytics',
        href: '/analytics',
    },
];

export default function Analytics() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Analytics - Payment Gateway Hub" />
            <div className="flex h-full flex-1 flex-col gap-6 p-6 bg-gray-50 dark:bg-slate-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics 📊</h1>
                        <p className="text-gray-600 mt-1 dark:text-gray-400">Comprehensive insights into your payment data</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors dark:bg-slate-800 dark:border-slate-600 dark:hover:bg-slate-700">
                            <Calendar className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-400" />
                            <span className="text-gray-700 dark:text-gray-300">Last 30 Days</span>
                        </button>
                        <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors dark:bg-slate-800 dark:border-slate-600 dark:hover:bg-slate-700">
                            <Filter className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-400" />
                            <span className="text-gray-700 dark:text-gray-300">Filter</span>
                        </button>
                        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            <Download className="w-4 h-4 mr-2" />
                            <span>Export Report</span>
                        </button>
                    </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center dark:bg-green-900/30">
                                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <div className="flex items-center text-green-600 text-sm font-medium dark:text-green-400">
                                <ArrowUpRight className="w-4 h-4 mr-1" />
                                +12.5%
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">$2.4M</h3>
                        <p className="text-gray-600 mt-1 dark:text-gray-400">Total Revenue</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center dark:bg-blue-900/30">
                                <Activity className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div className="flex items-center text-blue-600 text-sm font-medium dark:text-blue-400">
                                <ArrowUpRight className="w-4 h-4 mr-1" />
                                +8.2%
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">45,678</h3>
                        <p className="text-gray-600 mt-1 dark:text-gray-400">Total Transactions</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center dark:bg-purple-900/30">
                                <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div className="flex items-center text-green-600 text-sm font-medium dark:text-green-400">
                                <ArrowUpRight className="w-4 h-4 mr-1" />
                                +0.3%
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">99.2%</h3>
                        <p className="text-gray-600 mt-1 dark:text-gray-400">Success Rate</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center dark:bg-orange-900/30">
                                <PieChart className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                            </div>
                            <div className="flex items-center text-red-600 text-sm font-medium dark:text-red-400">
                                <ArrowDownRight className="w-4 h-4 mr-1" />
                                -2.1%
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">$52.40</h3>
                        <p className="text-gray-600 mt-1 dark:text-gray-400">Avg. Transaction</p>
                    </div>
                </div>

                {/* Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Transactions by Bank */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3 dark:bg-blue-900/30">
                                    <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Transactions by Bank</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Volume distribution across banks</p>
                                </div>
                            </div>
                            <div className="flex items-center text-green-600 text-sm font-medium dark:text-green-400">
                                <TrendingUp className="w-4 h-4 mr-1" />
                                +15.2%
                            </div>
                        </div>
                        
                        <div className="h-80 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center dark:from-blue-900/20 dark:to-blue-800/20">
                            <div className="text-center">
                                <BarChart3 className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                                <p className="text-gray-600 font-medium mb-2 dark:text-gray-400">Bar Chart Visualization</p>
                                <p className="text-sm text-gray-500 dark:text-gray-500">Bank A: 35% • Bank B: 28% • Bank C: 22% • Others: 15%</p>
                            </div>
                        </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-3 dark:bg-green-900/30">
                                    <PieChart className="w-5 h-5 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Payment Methods</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Distribution by payment type</p>
                                </div>
                            </div>
                            <div className="flex items-center text-purple-600 text-sm font-medium dark:text-purple-400">
                                <PieChart className="w-4 h-4 mr-1" />
                                Mixed
                            </div>
                        </div>
                        
                        <div className="h-80 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg flex items-center justify-center dark:from-green-900/20 dark:to-emerald-800/20">
                            <div className="text-center">
                                <PieChart className="w-16 h-16 text-green-400 mx-auto mb-4" />
                                <p className="text-gray-600 font-medium mb-2 dark:text-gray-400">Pie Chart Visualization</p>
                                <p className="text-sm text-gray-500 dark:text-gray-500">Credit Cards: 45% • Debit Cards: 32% • Bank Transfer: 15% • E-wallets: 8%</p>
                            </div>
                        </div>
                    </div>

                    {/* Revenue Trends */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mr-3 dark:bg-purple-900/30">
                                    <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue Trends</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Monthly revenue growth</p>
                                </div>
                            </div>
                            <div className="flex items-center text-green-600 text-sm font-medium dark:text-green-400">
                                <ArrowUpRight className="w-4 h-4 mr-1" />
                                +22.8%
                            </div>
                        </div>
                        
                        <div className="h-80 bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg flex items-center justify-center dark:from-purple-900/20 dark:to-pink-800/20">
                            <div className="text-center">
                                <TrendingUp className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                                <p className="text-gray-600 font-medium mb-2 dark:text-gray-400">Line Chart Visualization</p>
                                <p className="text-sm text-gray-500 dark:text-gray-500">6-month revenue progression with trend analysis</p>
                            </div>
                        </div>
                    </div>

                    {/* Fraud Detection */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mr-3 dark:bg-red-900/30">
                                    <Activity className="w-5 h-5 text-red-600 dark:text-red-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Fraud Detection</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Risk analysis scatter plot</p>
                                </div>
                            </div>
                            <div className="flex items-center text-red-600 text-sm font-medium dark:text-red-400">
                                <Activity className="w-4 h-4 mr-1" />
                                0.8% Risk
                            </div>
                        </div>
                        
                        <div className="h-80 bg-gradient-to-br from-red-50 to-orange-100 rounded-lg flex items-center justify-center dark:from-red-900/20 dark:to-orange-800/20">
                            <div className="text-center">
                                <Activity className="w-16 h-16 text-red-400 mx-auto mb-4" />
                                <p className="text-gray-600 font-medium mb-2 dark:text-gray-400">Scatter Plot Visualization</p>
                                <p className="text-sm text-gray-500 dark:text-gray-500">Transaction risk vs amount correlation analysis</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 dark:text-white">Top Performing Merchants</h3>
                        <div className="space-y-4">
                            {[
                                { name: 'TechCorp Solutions', revenue: '$45,230', growth: '+12.5%', trend: 'up' },
                                { name: 'E-Shop Pro', revenue: '$38,750', growth: '+8.3%', trend: 'up' },
                                { name: 'Fashion Boutique', revenue: '$28,900', growth: '-2.1%', trend: 'down' },
                                { name: 'Digital Mart', revenue: '$25,680', growth: '+15.7%', trend: 'up' },
                            ].map((merchant, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg dark:bg-slate-700">
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">{merchant.name}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{merchant.revenue}</p>
                                    </div>
                                    <div className={`flex items-center text-sm font-medium ${
                                        merchant.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                                    }`}>
                                        {merchant.trend === 'up' ? (
                                            <ArrowUpRight className="w-4 h-4 mr-1" />
                                        ) : (
                                            <ArrowDownRight className="w-4 h-4 mr-1" />
                                        )}
                                        {merchant.growth}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 dark:text-white">Geographic Distribution</h3>
                        <div className="space-y-4">
                            {[
                                { country: 'United States', percentage: '42%', amount: '$1.01M' },
                                { country: 'United Kingdom', percentage: '18%', amount: '$432K' },
                                { country: 'Canada', percentage: '15%', amount: '$360K' },
                                { country: 'Germany', percentage: '12%', amount: '$288K' },
                                { country: 'Other', percentage: '13%', amount: '$312K' },
                            ].map((location, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 dark:bg-blue-900/30">
                                            <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                                                {location.country.substring(0, 2).toUpperCase()}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">{location.country}</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{location.amount}</p>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{location.percentage}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 dark:text-white">System Performance</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">API Response Time</span>
                                    <span className="text-sm font-medium text-green-600 dark:text-green-400">142ms</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-slate-600">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">System Uptime</span>
                                    <span className="text-sm font-medium text-green-600 dark:text-green-400">99.9%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-slate-600">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '99%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Error Rate</span>
                                    <span className="text-sm font-medium text-green-600 dark:text-green-400">0.1%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-slate-600">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '99%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Throughput</span>
                                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">2.3K/min</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-slate-600">
                                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '76%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}