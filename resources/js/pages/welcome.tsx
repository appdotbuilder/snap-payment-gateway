import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Payment Gateway Hub - Modern Payment Solutions">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=roboto:400,500,600,700" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-[Roboto,sans-serif]">
                {/* Navigation */}
                <header className="relative z-10 w-full">
                    <nav className="mx-auto max-w-7xl px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">💳</span>
                                <span className="text-xl font-bold text-gray-900 dark:text-white">Payment Gateway Hub</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors"
                                    >
                                        Go to Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium px-4 py-2 rounded-lg transition-colors"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </nav>
                </header>

                {/* Hero Section */}
                <section className="relative px-6 py-20 lg:py-32">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div className="text-center lg:text-left">
                                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                                    💳 Modern Payment
                                    <span className="text-blue-600 dark:text-blue-400"> Gateway Hub</span>
                                </h1>
                                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                    Streamline your payment operations with our comprehensive dashboard. 
                                    Monitor transactions, manage merchants, and analyze performance in real-time.
                                </p>
                                
                                {/* Feature highlights */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-2xl">📊</span>
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">Real-time Analytics</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-2xl">🔒</span>
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">Secure Transactions</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-2xl">🏪</span>
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">Merchant Management</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-2xl">🧩</span>
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">Widget Generator</span>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    {auth.user ? (
                                        <Link
                                            href={route('dashboard')}
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105"
                                        >
                                            🚀 Open Dashboard
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href={route('register')}
                                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105"
                                            >
                                                🚀 Get Started Free
                                            </Link>
                                            <Link
                                                href={route('login')}
                                                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 py-4 rounded-lg text-lg transition-all"
                                            >
                                                Sign In
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Right Content - Dashboard Preview */}
                            <div className="relative">
                                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                                    {/* Mock browser bar */}
                                    <div className="bg-gray-100 dark:bg-gray-700 px-4 py-3 flex items-center space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                        <div className="ml-4 text-sm text-gray-600 dark:text-gray-300">Payment Gateway Hub</div>
                                    </div>
                                    
                                    {/* Mock dashboard content */}
                                    <div className="p-6 space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                                                <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">Transactions</div>
                                                <div className="text-lg font-bold text-gray-900 dark:text-white">1,234</div>
                                            </div>
                                            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                                                <div className="text-xs text-green-600 dark:text-green-400 font-medium">Revenue</div>
                                                <div className="text-lg font-bold text-gray-900 dark:text-white">$5,678</div>
                                            </div>
                                            <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                                                <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">Merchants</div>
                                                <div className="text-lg font-bold text-gray-900 dark:text-white">45</div>
                                            </div>
                                        </div>
                                        
                                        {/* Mock chart area */}
                                        <div className="h-32 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                                            <span className="text-sm text-gray-500 dark:text-gray-400">📈 Analytics Charts</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Floating elements */}
                                <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl animate-bounce">
                                    💳
                                </div>
                                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-lg animate-pulse">
                                    📊
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="bg-white dark:bg-gray-800 py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                🎯 Everything You Need
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300">
                                Comprehensive payment management tools in one dashboard
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: '📊',
                                    title: 'Real-time Dashboard',
                                    description: 'Monitor transactions, revenue, and merchant activity with live updates and beautiful charts.'
                                },
                                {
                                    icon: '💳',
                                    title: 'Transaction Management',
                                    description: 'View, search, and manage all transactions with detailed status tracking and filtering.'
                                },
                                {
                                    icon: '🏪',
                                    title: 'Merchant Portal',
                                    description: 'Manage merchant accounts, view details, and track their performance and status.'
                                },
                                {
                                    icon: '🧩',
                                    title: 'Widget Generator',
                                    description: 'Create custom payment widgets for seamless integration into any website or app.'
                                },
                                {
                                    icon: '📈',
                                    title: 'Advanced Analytics',
                                    description: 'Deep insights with charts, trends, fraud detection, and payment method analysis.'
                                },
                                {
                                    icon: '⚙️',
                                    title: 'Security Settings',
                                    description: 'Configure API keys, encryption, notifications, and other security preferences.'
                                }
                            ].map((feature, index) => (
                                <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            Ready to Transform Your Payment Operations? 🚀
                        </h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Join thousands of businesses using our payment gateway solution
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105"
                                >
                                    🎛️ Go to Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('register')}
                                        className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105"
                                    >
                                        🎉 Start Free Trial
                                    </Link>
                                    <Link
                                        href={route('login')}
                                        className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold px-8 py-4 rounded-lg text-lg transition-all"
                                    >
                                        Sign In Now
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12">
                    <div className="mx-auto max-w-7xl px-6 text-center">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <span className="text-2xl">💳</span>
                            <span className="text-xl font-bold">Payment Gateway Hub</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            © 2025 Payment Gateway Hub. All rights reserved.
                        </p>
                        <p className="text-sm text-gray-500">
                            Built with ❤️ by{" "}
                            <a 
                                href="https://app.build" 
                                target="_blank" 
                                className="text-blue-400 hover:text-blue-300 font-medium"
                            >
                                app.build
                            </a>
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}