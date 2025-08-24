import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import { router } from '@inertiajs/react';

interface Props {
    currentPage: string;
    [key: string]: unknown;
}

export default function PaymentGatewayDashboard({ currentPage }: Props) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: '📊', route: '/dashboard' },
        { id: 'transactions', label: 'Transactions', icon: '💳', route: '/transactions' },
        { id: 'merchants', label: 'Merchants', icon: '🏪', route: '/merchants' },
        { id: 'widgets', label: 'Widgets', icon: '🧩', route: '/widgets' },
        { id: 'analytics', label: 'Analytics', icon: '📈', route: '/analytics' },
        { id: 'settings', label: 'Settings', icon: '⚙️', route: '/payment-settings' },
        { id: 'documentation', label: 'Documentation', icon: '📚', route: '/documentation' },
    ];

    const handleMenuClick = (route: string) => {
        router.get(route);
        setSidebarOpen(false);
    };

    const renderDashboardContent = () => (
        <div className="space-y-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome to Payment Gateway Hub 🚀</h1>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Monitor your payment ecosystem with real-time insights</p>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-xl p-6 text-white transform hover:scale-105 transition-all duration-200">
                    <div className="flex items-center">
                        <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                            <span className="text-3xl">💰</span>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-blue-100">Total Transactions</p>
                            <p className="text-3xl font-bold">1,234</p>
                            <p className="text-xs text-blue-100 mt-1">↗️ +12% from last month</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-xl p-6 text-white transform hover:scale-105 transition-all duration-200">
                    <div className="flex items-center">
                        <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                            <span className="text-3xl">💵</span>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-green-100">Revenue Today</p>
                            <p className="text-3xl font-bold">$5,678</p>
                            <p className="text-xs text-green-100 mt-1">🚀 +8% from yesterday</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-xl p-6 text-white transform hover:scale-105 transition-all duration-200">
                    <div className="flex items-center">
                        <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                            <span className="text-3xl">🏪</span>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-purple-100">Active Merchants</p>
                            <p className="text-3xl font-bold">45</p>
                            <p className="text-xs text-purple-100 mt-1">✨ 3 new this week</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Transaction Trends 📈</h3>
                    <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-600 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse transform -skew-x-12"></div>
                        <div className="text-center">
                            <div className="text-4xl mb-2">📈</div>
                            <span className="text-gray-600 dark:text-gray-400 font-medium">Interactive Chart Loading...</span>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Revenue Analysis 💵</h3>
                    <div className="h-64 bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-600 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse transform -skew-x-12"></div>
                        <div className="text-center">
                            <div className="text-4xl mb-2">📊</div>
                            <span className="text-gray-600 dark:text-gray-400 font-medium">Revenue Charts Loading...</span>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Merchant Activity 🎯</h3>
                    <div className="h-64 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-600 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse transform -skew-x-12"></div>
                        <div className="text-center">
                            <div className="text-4xl mb-2">🎯</div>
                            <span className="text-gray-600 dark:text-gray-400 font-medium">Activity Charts Loading...</span>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Success Rate 🎉</h3>
                    <div className="h-64 bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-600 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse transform -skew-x-12"></div>
                        <div className="text-center">
                            <div className="text-4xl mb-2">🎉</div>
                            <span className="text-gray-600 dark:text-gray-400 font-medium">Success Rate Charts Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderTransactionsContent = () => (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Transactions 💳</h1>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Transaction ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Merchant</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amount</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {[
                                { id: 'TXN-001', merchant: 'Merchant A', amount: '$100.00', status: 'Success', date: '2025-01-23' },
                                { id: 'TXN-002', merchant: 'Merchant B', amount: '$250.50', status: 'Success', date: '2025-01-23' },
                                { id: 'TXN-003', merchant: 'Merchant C', amount: '$75.25', status: 'Pending', date: '2025-01-23' },
                                { id: 'TXN-004', merchant: 'Merchant A', amount: '$180.00', status: 'Failed', date: '2025-01-22' },
                                { id: 'TXN-005', merchant: 'Merchant D', amount: '$320.75', status: 'Success', date: '2025-01-22' },
                            ].map((transaction) => (
                                <tr key={transaction.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{transaction.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{transaction.merchant}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{transaction.amount}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                            transaction.status === 'Success' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' :
                                            transaction.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100' :
                                            'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                                        }`}>
                                            {transaction.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{transaction.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const renderMerchantsContent = () => (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Merchants 🏪</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { name: 'Merchant A', email: 'merchanta@example.com', status: 'Active' },
                    { name: 'Merchant B', email: 'merchantb@example.com', status: 'Active' },
                    { name: 'Merchant C', email: 'merchantc@example.com', status: 'Inactive' },
                ].map((merchant, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{merchant.name}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">{merchant.email}</p>
                        <div className="mt-4">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                merchant.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' :
                                'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                            }`}>
                                {merchant.status}
                            </span>
                        </div>
                        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderWidgetsContent = () => (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Payment Widgets 🧩</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Generate Widget</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Merchant ID</label>
                            <input type="text" className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-white" placeholder="MERCH-001" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Transaction ID</label>
                            <input type="text" className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-white" placeholder="TXN-001" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Amount</label>
                            <input type="text" className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-white" placeholder="$100.00" />
                        </div>
                        <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                            Generate Widget
                        </button>
                    </form>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Widget Preview</h2>
                    <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                        <span className="text-gray-500 dark:text-gray-400">Widget Preview (iframe placeholder)</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderAnalyticsContent = () => (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics 📈</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Transactions by Bank 🏦</h3>
                    <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                        <span className="text-gray-500 dark:text-gray-400">Bar Chart Placeholder</span>
                    </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Payment Methods 💳</h3>
                    <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                        <span className="text-gray-500 dark:text-gray-400">Pie Chart Placeholder</span>
                    </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Revenue Trends 📊</h3>
                    <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                        <span className="text-gray-500 dark:text-gray-400">Line Chart Placeholder</span>
                    </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Fraud Detection 🔍</h3>
                    <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                        <span className="text-gray-500 dark:text-gray-400">Scatter Plot Placeholder</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderSettingsContent = () => (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings ⚙️</h1>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="border-b border-gray-200 dark:border-gray-700">
                    <nav className="flex">
                        <button className="bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-6 py-4 font-medium">General</button>
                        <button className="text-gray-500 dark:text-gray-400 px-6 py-4 font-medium hover:text-gray-700 dark:hover:text-gray-200">Security</button>
                        <button className="text-gray-500 dark:text-gray-400 px-6 py-4 font-medium hover:text-gray-700 dark:hover:text-gray-200">Notifications</button>
                    </nav>
                </div>
                <div className="p-6 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">API Key</label>
                        <input type="text" className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-white" placeholder="sk_live_..." />
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded" />
                        <label className="ml-2 text-sm text-gray-700 dark:text-gray-300">Enable AES-128 Encryption</label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded" />
                        <label className="ml-2 text-sm text-gray-700 dark:text-gray-300">Email Notifications</label>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                        Save Settings
                    </button>
                </div>
            </div>
        </div>
    );

    const renderDocumentationContent = () => (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Documentation 📚</h1>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">
                        Welcome to the Payment Gateway Hub documentation. Here you'll find everything you need to integrate our payment solution into your application.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                        View Full Docs
                    </button>
                </div>
                
                <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-2">
                        <details className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                            <summary className="font-medium cursor-pointer">How do I integrate the payment widget?</summary>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">Use our widget generator to create custom payment forms for your merchants.</p>
                        </details>
                        <details className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                            <summary className="font-medium cursor-pointer">What payment methods are supported?</summary>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">We support credit cards, bank transfers, and digital wallets.</p>
                        </details>
                        <details className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                            <summary className="font-medium cursor-pointer">How do I handle webhooks?</summary>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">Set up webhook endpoints to receive real-time transaction updates.</p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (currentPage) {
            case 'transactions': return renderTransactionsContent();
            case 'merchants': return renderMerchantsContent();
            case 'widgets': return renderWidgetsContent();
            case 'analytics': return renderAnalyticsContent();
            case 'settings': return renderSettingsContent();
            case 'documentation': return renderDocumentationContent();
            default: return renderDashboardContent();
        }
    };

    return (
        <>
            <Head title="Payment Gateway Hub" />
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-[Roboto,sans-serif]">
                {/* Mobile menu backdrop */}
                {sidebarOpen && (
                    <div 
                        className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden" 
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Sidebar */}
                <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-xl transform ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
                    <div className="flex flex-col h-full">
                        {/* Logo */}
                        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-lg">💳</span>
                                </div>
                                <span className="text-lg font-bold text-gray-900 dark:text-white">Payment Gateway Hub</span>
                            </div>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                            >
                                <span className="text-xl">✕</span>
                            </button>
                        </div>

                        {/* Navigation */}
                        <nav className="flex-1 px-4 py-6 space-y-2">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleMenuClick(item.route)}
                                    className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-all duration-200 ${
                                        currentPage === item.id
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105 font-medium'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 hover:transform hover:translate-x-1'
                                    }`}
                                >
                                    <span className="text-xl mr-3">{item.icon}</span>
                                    {item.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Main content */}
                <div className="lg:ml-64 flex flex-col min-h-screen">
                    {/* Top navigation */}
                    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
                        <div className="flex items-center justify-between">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                            >
                                <span className="text-xl">☰</span>
                            </button>
                            
                            <div className="flex items-center space-x-4">
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                                    PG
                                </div>
                                <button 
                                    onClick={() => window.location.href = '/'}
                                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                                >
                                    🏠 Home
                                </button>
                            </div>
                        </div>
                    </header>

                    {/* Page content */}
                    <main className="flex-1 p-6">
                        {renderContent()}
                    </main>

                    {/* Footer */}
                    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-6 py-4">
                        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                            © 2025 Payment Gateway Hub. All rights reserved.
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}