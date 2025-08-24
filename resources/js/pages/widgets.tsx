import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { 
    Code, 
    Copy, 
    
    Download, 
    Settings,
    Palette,
    Monitor,
    Smartphone,
    Tablet
} from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Widgets',
        href: '/widgets',
    },
];

export default function Widgets() {
    const [formData, setFormData] = useState({
        merchantId: '',
        transactionId: '',
        amount: '',
        currency: 'USD',
        theme: 'light',
        color: 'blue'
    });

    const [previewDevice, setPreviewDevice] = useState('desktop');

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const generateWidget = () => {
        // Widget generation logic would go here
        console.log('Generating widget with:', formData);
    };

    const copyCode = () => {
        navigator.clipboard.writeText(`<iframe src="https://pay.gateway.com/widget/${formData.merchantId}" width="400" height="600"></iframe>`);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Widgets - Payment Gateway Hub" />
            <div className="flex h-full flex-1 flex-col gap-6 p-6 bg-gray-50 dark:bg-slate-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Payment Widgets ⚡</h1>
                        <p className="text-gray-600 mt-1 dark:text-gray-400">Generate customizable payment widgets for your merchants</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors dark:bg-slate-800 dark:border-slate-600 dark:hover:bg-slate-700">
                            <Download className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-400" />
                            <span className="text-gray-700 dark:text-gray-300">Export Template</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    {/* Widget Generator Form */}
                    <div className="space-y-6">
                        {/* Basic Configuration */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3 dark:bg-blue-900/30">
                                    <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Basic Configuration</h3>
                            </div>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                        Merchant ID <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.merchantId}
                                        onChange={(e) => handleInputChange('merchantId', e.target.value)}
                                        placeholder="e.g., MERCH-001"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                        Transaction ID
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.transactionId}
                                        onChange={(e) => handleInputChange('transactionId', e.target.value)}
                                        placeholder="e.g., TXN-789123"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                            Amount <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            value={formData.amount}
                                            onChange={(e) => handleInputChange('amount', e.target.value)}
                                            placeholder="0.00"
                                            step="0.01"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                            Currency
                                        </label>
                                        <select
                                            value={formData.currency}
                                            onChange={(e) => handleInputChange('currency', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                                        >
                                            <option value="USD">USD</option>
                                            <option value="EUR">EUR</option>
                                            <option value="GBP">GBP</option>
                                            <option value="CAD">CAD</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Styling Options */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mr-3 dark:bg-purple-900/30">
                                    <Palette className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Styling Options</h3>
                            </div>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">Theme</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            onClick={() => handleInputChange('theme', 'light')}
                                            className={`p-3 rounded-lg border-2 transition-colors ${
                                                formData.theme === 'light'
                                                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                                    : 'border-gray-300 dark:border-slate-600'
                                            }`}
                                        >
                                            <div className="bg-white border border-gray-300 rounded p-2 mb-2 dark:bg-slate-700 dark:border-slate-600">
                                                <div className="h-2 bg-gray-200 rounded dark:bg-slate-600"></div>
                                            </div>
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">Light</span>
                                        </button>
                                        <button
                                            onClick={() => handleInputChange('theme', 'dark')}
                                            className={`p-3 rounded-lg border-2 transition-colors ${
                                                formData.theme === 'dark'
                                                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                                    : 'border-gray-300 dark:border-slate-600'
                                            }`}
                                        >
                                            <div className="bg-gray-800 border border-gray-700 rounded p-2 mb-2">
                                                <div className="h-2 bg-gray-600 rounded"></div>
                                            </div>
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">Dark</span>
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">Primary Color</label>
                                    <div className="grid grid-cols-4 gap-3">
                                        {['blue', 'green', 'purple', 'red'].map((color) => (
                                            <button
                                                key={color}
                                                onClick={() => handleInputChange('color', color)}
                                                className={`h-12 rounded-lg border-2 transition-colors ${
                                                    formData.color === color
                                                        ? 'border-gray-800 dark:border-white'
                                                        : 'border-transparent'
                                                } ${
                                                    color === 'blue' ? 'bg-blue-500' :
                                                    color === 'green' ? 'bg-green-500' :
                                                    color === 'purple' ? 'bg-purple-500' :
                                                    'bg-red-500'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Generate Button */}
                        <button
                            onClick={generateWidget}
                            className="w-full flex items-center justify-center px-6 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                        >
                            <Code className="w-5 h-5 mr-2" />
                            Generate Widget
                        </button>
                    </div>

                    {/* Preview Section */}
                    <div className="space-y-6">
                        {/* Device Preview Toggle */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Widget Preview</h3>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => setPreviewDevice('desktop')}
                                        className={`p-2 rounded-lg ${previewDevice === 'desktop' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30' : 'text-gray-600 dark:text-gray-400'}`}
                                    >
                                        <Monitor className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => setPreviewDevice('tablet')}
                                        className={`p-2 rounded-lg ${previewDevice === 'tablet' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30' : 'text-gray-600 dark:text-gray-400'}`}
                                    >
                                        <Tablet className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => setPreviewDevice('mobile')}
                                        className={`p-2 rounded-lg ${previewDevice === 'mobile' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30' : 'text-gray-600 dark:text-gray-400'}`}
                                    >
                                        <Smartphone className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Preview Frame */}
                            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center min-h-96 dark:bg-slate-700">
                                <div className={`bg-white rounded-lg shadow-lg border-2 border-dashed border-gray-300 p-6 flex items-center justify-center dark:bg-slate-600 dark:border-slate-500 ${
                                    previewDevice === 'desktop' ? 'w-full max-w-md h-80' :
                                    previewDevice === 'tablet' ? 'w-64 h-80' :
                                    'w-48 h-72'
                                }`}>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center dark:bg-slate-500">
                                            <Code className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                                        </div>
                                        <p className="text-gray-600 font-medium mb-2 dark:text-gray-300">Payment Widget Preview</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {formData.merchantId || 'Merchant ID'} • ${formData.amount || '0.00'}
                                        </p>
                                        <div className="mt-4 space-y-2">
                                            <div className="h-3 bg-gray-200 rounded dark:bg-slate-500"></div>
                                            <div className="h-3 bg-gray-200 rounded w-3/4 dark:bg-slate-500"></div>
                                            <div className="h-8 bg-blue-500 rounded mt-4"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Generated Code */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Embed Code</h3>
                                <button
                                    onClick={copyCode}
                                    className="flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors dark:bg-slate-700 dark:text-gray-300 dark:hover:bg-slate-600"
                                >
                                    <Copy className="w-4 h-4 mr-2" />
                                    Copy
                                </button>
                            </div>
                            
                            <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                                <code className="text-green-400">
                                    {`<iframe\n  src="https://pay.gateway.com/widget/${formData.merchantId || 'MERCHANT_ID'}"\n  width="400"\n  height="600"\n  frameborder="0">\n</iframe>`}
                                </code>
                            </div>
                        </div>

                        {/* Widget Stats */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 dark:text-white">Widget Statistics</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 dark:text-gray-400">Total Widgets Generated</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">2,847</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 dark:text-gray-400">Active Widgets</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">1,923</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 dark:text-gray-400">Success Rate</span>
                                    <span className="font-semibold text-green-600 dark:text-green-400">94.2%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}