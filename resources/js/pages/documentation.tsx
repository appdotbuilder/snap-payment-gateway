import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { 
    
    ExternalLink, 
    ChevronDown,
    ChevronRight,
    Code,
    Key,
    Shield,
    Zap,
    Globe,
    MessageCircle
} from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Documentation',
        href: '/documentation',
    },
];

export default function Documentation() {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    const faqItems = [
        {
            question: 'How do I integrate the payment gateway into my website?',
            answer: 'You can integrate our payment gateway using our REST API, JavaScript SDK, or pre-built widgets. Start by obtaining your API keys from the Settings page, then follow our integration guide in the full documentation.'
        },
        {
            question: 'What payment methods are supported?',
            answer: 'We support all major credit and debit cards (Visa, Mastercard, American Express), bank transfers, digital wallets (PayPal, Apple Pay, Google Pay), and various local payment methods depending on your region.'
        },
        {
            question: 'How long does it take for funds to be deposited?',
            answer: 'Funds are typically deposited within 1-2 business days for standard accounts. Premium accounts can receive same-day deposits. The exact timing depends on your bank and the payment method used.'
        },
        {
            question: 'What are the transaction fees?',
            answer: 'Our fees start at 2.9% + $0.30 per transaction for online payments. Volume discounts are available for businesses processing over $10,000 monthly. Contact our sales team for custom pricing.'
        },
        {
            question: 'Is the payment gateway PCI compliant?',
            answer: 'Yes, our platform is fully PCI DSS Level 1 compliant. We use bank-grade encryption and security measures to protect all sensitive payment data. Your business benefits from our compliance without additional certification requirements.'
        },
        {
            question: 'Can I customize the payment form appearance?',
            answer: 'Absolutely! Our widget generator allows you to customize colors, themes, and branding to match your website. You can also use our API to build completely custom payment forms while maintaining security compliance.'
        }
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Documentation - Payment Gateway Hub" />
            <div className="flex h-full flex-1 flex-col gap-6 p-6 bg-gray-50 dark:bg-slate-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Documentation 📚</h1>
                        <p className="text-gray-600 mt-1 dark:text-gray-400">Guides, API references, and resources to get you started</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <a
                            href="https://docs.paymentgateway.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            <span>View Full Docs</span>
                        </a>
                    </div>
                </div>

                {/* Quick Start Guide */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 dark:bg-green-900/30">
                            <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">🚀 Quick Start Guide</h2>
                            <p className="text-gray-600 dark:text-gray-400">Get up and running with Payment Gateway Hub in minutes</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl dark:from-blue-900/20 dark:to-blue-800/20">
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-4">1</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 dark:text-white">Get API Keys</h3>
                            <p className="text-gray-600 text-sm mb-4 dark:text-gray-400">
                                Navigate to Settings → General and generate your API keys for sandbox and production environments.
                            </p>
                            <div className="bg-gray-800 rounded p-3 font-mono text-sm">
                                <code className="text-green-400">pk_test_123456789...</code>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl dark:from-green-900/20 dark:to-green-800/20">
                            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mb-4">2</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 dark:text-white">Install SDK</h3>
                            <p className="text-gray-600 text-sm mb-4 dark:text-gray-400">
                                Install our JavaScript SDK or use direct API calls. We support Node.js, Python, PHP, and more.
                            </p>
                            <div className="bg-gray-800 rounded p-3 font-mono text-sm">
                                <code className="text-green-400">npm install @paygateway/js</code>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl dark:from-purple-900/20 dark:to-purple-800/20">
                            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mb-4">3</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 dark:text-white">Process Payment</h3>
                            <p className="text-gray-600 text-sm mb-4 dark:text-gray-400">
                                Create a payment intent and handle the response. Test with our sandbox before going live.
                            </p>
                            <div className="bg-gray-800 rounded p-3 font-mono text-sm">
                                <code className="text-green-400">gateway.charge(amount)</code>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Documentation Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-200 dark:bg-slate-800 dark:border-slate-700">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-3 dark:bg-blue-900/30">
                                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">API Reference</h3>
                        </div>
                        <p className="text-gray-600 mb-4 dark:text-gray-400">
                            Complete REST API documentation with examples, parameters, and response formats.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li>• Authentication & API Keys</li>
                            <li>• Payment Processing</li>
                            <li>• Webhook Handling</li>
                            <li>• Error Codes & Responses</li>
                        </ul>
                        <a href="#" className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 font-medium dark:text-blue-400 dark:hover:text-blue-300">
                            View API Docs
                            <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-200 dark:bg-slate-800 dark:border-slate-700">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-3 dark:bg-green-900/30">
                                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Security Guide</h3>
                        </div>
                        <p className="text-gray-600 mb-4 dark:text-gray-400">
                            Best practices for secure payment processing and PCI compliance guidelines.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li>• PCI DSS Compliance</li>
                            <li>• Data Encryption</li>
                            <li>• Fraud Prevention</li>
                            <li>• Security Audits</li>
                        </ul>
                        <a href="#" className="inline-flex items-center mt-4 text-green-600 hover:text-green-800 font-medium dark:text-green-400 dark:hover:text-green-300">
                            Security Docs
                            <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-200 dark:bg-slate-800 dark:border-slate-700">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-3 dark:bg-purple-900/30">
                                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Widget Builder</h3>
                        </div>
                        <p className="text-gray-600 mb-4 dark:text-gray-400">
                            Learn how to create and customize payment widgets for your website.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li>• Widget Configuration</li>
                            <li>• Styling & Themes</li>
                            <li>• Event Handling</li>
                            <li>• Mobile Optimization</li>
                        </ul>
                        <a href="#" className="inline-flex items-center mt-4 text-purple-600 hover:text-purple-800 font-medium dark:text-purple-400 dark:hover:text-purple-300">
                            Widget Guide
                            <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-200 dark:bg-slate-800 dark:border-slate-700">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-3 dark:bg-orange-900/30">
                                <Globe className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">SDKs & Libraries</h3>
                        </div>
                        <p className="text-gray-600 mb-4 dark:text-gray-400">
                            Ready-to-use SDKs and libraries for popular programming languages.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li>• JavaScript/Node.js</li>
                            <li>• Python</li>
                            <li>• PHP</li>
                            <li>• Ruby, Java, .NET</li>
                        </ul>
                        <a href="#" className="inline-flex items-center mt-4 text-orange-600 hover:text-orange-800 font-medium dark:text-orange-400 dark:hover:text-orange-300">
                            Download SDKs
                            <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-200 dark:bg-slate-800 dark:border-slate-700">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-3 dark:bg-red-900/30">
                                <Key className="w-6 h-6 text-red-600 dark:text-red-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Testing Guide</h3>
                        </div>
                        <p className="text-gray-600 mb-4 dark:text-gray-400">
                            Test your integration with our sandbox environment and test cards.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li>• Sandbox Environment</li>
                            <li>• Test Card Numbers</li>
                            <li>• Error Scenarios</li>
                            <li>• Webhook Testing</li>
                        </ul>
                        <a href="#" className="inline-flex items-center mt-4 text-red-600 hover:text-red-800 font-medium dark:text-red-400 dark:hover:text-red-300">
                            Testing Docs
                            <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-200 dark:bg-slate-800 dark:border-slate-700">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-3 dark:bg-teal-900/30">
                                <MessageCircle className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Support Center</h3>
                        </div>
                        <p className="text-gray-600 mb-4 dark:text-gray-400">
                            Get help from our support team and browse common troubleshooting solutions.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li>• Contact Support</li>
                            <li>• Troubleshooting</li>
                            <li>• Status Page</li>
                            <li>• Community Forum</li>
                        </ul>
                        <a href="#" className="inline-flex items-center mt-4 text-teal-600 hover:text-teal-800 font-medium dark:text-teal-400 dark:hover:text-teal-300">
                            Get Support
                            <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                    <div className="flex items-center mb-6">
                        <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center mr-3 dark:bg-yellow-900/30">
                            <MessageCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Frequently Asked Questions ❓</h3>
                    </div>
                    
                    <div className="space-y-4">
                        {faqItems.map((item, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg dark:border-slate-600">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                                >
                                    <span className="font-medium text-gray-900 dark:text-white">{item.question}</span>
                                    {expandedFaq === index ? (
                                        <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                    ) : (
                                        <ChevronRight className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                    )}
                                </button>
                                {expandedFaq === index && (
                                    <div className="px-4 pb-4 text-gray-600 dark:text-gray-400">
                                        <p>{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-600">
                        <p className="text-center text-gray-600 dark:text-gray-400">
                            Can't find what you're looking for?{' '}
                            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium dark:text-blue-400 dark:hover:text-blue-300">
                                Contact our support team
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}