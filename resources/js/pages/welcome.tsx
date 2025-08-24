import React from 'react';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowRight, Shield, Zap, BarChart3, CreditCard, Users, Globe } from 'lucide-react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Payment Gateway Hub">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <div style={{ fontFamily: 'Roboto, sans-serif' }} className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                {/* Header */}
                <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 dark:bg-slate-800/80 dark:border-slate-700">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                                    <CreditCard className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900 dark:text-white">Payment Gateway Hub</h1>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Secure Payment Processing</p>
                                </div>
                            </div>
                            
                            <nav className="flex items-center space-x-4">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="inline-flex items-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                                    >
                                        Go to Dashboard
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 dark:text-gray-300 dark:hover:text-blue-400"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="inline-flex items-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                                        >
                                            Get Started
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-16">
                        <div className="mb-6">
                            <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full dark:bg-blue-900 dark:text-blue-200">
                                🚀 Modern Payment Solutions
                            </span>
                        </div>
                        <h1 className="text-5xl font-bold text-gray-900 mb-6 dark:text-white">
                            💳 Payment Gateway Hub
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed dark:text-gray-300">
                            Streamline your payment processing with our comprehensive dashboard. 
                            Monitor transactions, manage merchants, and gain valuable insights all in one place.
                        </p>
                        
                        {!auth.user && (
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href={route('register')}
                                    className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 text-lg"
                                >
                                    Start Free Trial
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                                <Link
                                    href={route('login')}
                                    className="inline-flex items-center px-8 py-3 border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold rounded-lg transition-colors duration-200 text-lg dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
                                >
                                    Sign In
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Dashboard Preview */}
                    <div className="mb-16">
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden dark:bg-slate-800 dark:border-slate-700">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                            <CreditCard className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-white font-semibold">Payment Gateway Hub</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-8">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 dark:from-green-900/20 dark:to-emerald-900/20 dark:border-green-800">
                                        <h3 className="text-green-800 font-semibold mb-2 dark:text-green-200">Total Transactions</h3>
                                        <p className="text-3xl font-bold text-green-900 dark:text-green-100">$1,234,567</p>
                                        <p className="text-green-600 text-sm mt-2 dark:text-green-300">↗ +12% from last month</p>
                                    </div>
                                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200 dark:from-blue-900/20 dark:to-cyan-900/20 dark:border-blue-800">
                                        <h3 className="text-blue-800 font-semibold mb-2 dark:text-blue-200">Active Merchants</h3>
                                        <p className="text-3xl font-bold text-blue-900 dark:text-blue-100">1,456</p>
                                        <p className="text-blue-600 text-sm mt-2 dark:text-blue-300">↗ +8% from last month</p>
                                    </div>
                                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 dark:from-purple-900/20 dark:to-pink-900/20 dark:border-purple-800">
                                        <h3 className="text-purple-800 font-semibold mb-2 dark:text-purple-200">Success Rate</h3>
                                        <p className="text-3xl font-bold text-purple-900 dark:text-purple-100">99.8%</p>
                                        <p className="text-purple-600 text-sm mt-2 dark:text-purple-300">↗ +0.2% from last month</p>
                                    </div>
                                </div>
                                
                                <div className="bg-gray-50 rounded-xl p-6 dark:bg-slate-700">
                                    <h3 className="text-gray-800 font-semibold mb-4 dark:text-gray-200">Recent Activity</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 dark:bg-slate-600 dark:border-slate-500">
                                            <span className="text-gray-700 dark:text-gray-300">New merchant registration</span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">2 minutes ago</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 dark:bg-slate-600 dark:border-slate-500">
                                            <span className="text-gray-700 dark:text-gray-300">Transaction completed: $2,340</span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">5 minutes ago</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 dark:bg-slate-600 dark:border-slate-500">
                                            <span className="text-gray-700 dark:text-gray-300">API key generated</span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">12 minutes ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 dark:bg-blue-900/30">
                                <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 dark:text-white">📊 Real-time Analytics</h3>
                            <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                                Monitor your payment flows with comprehensive charts, transaction trends, and revenue insights.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 dark:bg-green-900/30">
                                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 dark:text-white">🔒 Advanced Security</h3>
                            <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                                Bank-grade encryption, fraud detection, and PCI compliance ensure your transactions are secure.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 dark:bg-purple-900/30">
                                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 dark:text-white">👥 Merchant Management</h3>
                            <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                                Easily onboard, manage, and monitor all your merchants from a single, intuitive interface.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700">
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 dark:bg-orange-900/30">
                                <Zap className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 dark:text-white">⚡ Payment Widgets</h3>
                            <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                                Generate customizable payment widgets that integrate seamlessly with any website or app.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700">
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6 dark:bg-red-900/30">
                                <CreditCard className="w-6 h-6 text-red-600 dark:text-red-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 dark:text-white">💳 Transaction Hub</h3>
                            <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                                View, search, and manage all transactions with detailed filtering and export capabilities.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700">
                            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6 dark:bg-teal-900/30">
                                <Globe className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 dark:text-white">🌐 Global Coverage</h3>
                            <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                                Support for multiple currencies and payment methods across 180+ countries worldwide.
                            </p>
                        </div>
                    </div>

                    {/* CTA Section */}
                    {!auth.user && (
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Ready to Get Started? 🚀</h2>
                            <p className="text-xl mb-8 text-blue-100">
                                Join thousands of businesses already using Payment Gateway Hub
                            </p>
                            <Link
                                href={route('register')}
                                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
                            >
                                Create Your Account
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    )}
                </main>

                {/* Footer */}
                <footer className="bg-gray-50 border-t border-gray-200 py-12 dark:bg-slate-800 dark:border-slate-700">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="flex items-center space-x-3 mb-4 md:mb-0">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                                    <CreditCard className="w-5 h-5 text-white" />
                                </div>
                                <span className="font-semibold text-gray-900 dark:text-white">Payment Gateway Hub</span>
                            </div>
                            <p className="text-gray-600 text-center dark:text-gray-400">
                                © 2025 Payment Gateway Hub. All rights reserved. Built with ❤️ for secure payments.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}