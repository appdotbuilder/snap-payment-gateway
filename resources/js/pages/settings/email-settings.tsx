import AppLayout from '@/layouts/app-layout';
import { CustomSettingsLayout } from '@/components/custom-settings-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pencil, Trash, Save, Plus } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Settings',
        href: '/settings/profile',
    },
    {
        title: 'Email Settings',
        href: '/settings/email',
    },
];

interface EmailConfig {
    id: number;
    host: string;
    port: number;
    encryption: string;
    username: string;
    password: string;
}

export default function EmailSettings() {
    const [configs, setConfigs] = useState<EmailConfig[]>([
        { id: 1, host: 'smtp.example.com', port: 587, encryption: 'TLS', username: 'user@example.com', password: 'password123' },
        { id: 2, host: 'mail.another.com', port: 465, encryption: 'SSL', username: 'admin@another.com', password: 'securepassword' },
    ]);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [newConfig, setNewConfig] = useState<Omit<EmailConfig, 'id'>>({
        host: '',
        port: 587,
        encryption: 'TLS',
        username: '',
        password: '',
    });

    const handleEdit = (id: number) => {
        setEditingId(id);
    };

    const handleSave = () => {
        setEditingId(null);
        // In a real app, this would send a PUT/PATCH request to update the config
    };

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this email configuration?')) {
            setConfigs(configs.filter(config => config.id !== id));
            // In a real app, this would send a DELETE request
        }
    };

    const handleAddConfig = () => {
        const newId = configs.length > 0 ? Math.max(...configs.map(c => c.id)) + 1 : 1;
        setConfigs([...configs, { id: newId, ...newConfig }]);
        setNewConfig({ host: '', port: 587, encryption: 'TLS', username: '', password: '' });
        // In a real app, this would send a POST request
    };

    const handleConfigChange = (id: number, field: keyof EmailConfig, value: string | number) => {
        setConfigs(configs.map(config =>
            config.id === id ? { ...config, [field]: value } : config
        ));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Email Settings" />

            <CustomSettingsLayout>
                <div className="space-y-8">
                    {/* Create Form */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Add New Email Configuration</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="new-host" className="text-sm font-medium">Email Host</Label>
                                <Input
                                    id="new-host"
                                    type="text"
                                    value={newConfig.host}
                                    onChange={(e) => setNewConfig(prev => ({ ...prev, host: e.target.value }))}
                                    placeholder="e.g., smtp.mailgun.org"
                                    className="mt-1"
                                />
                            </div>
                            <div>
                                <Label htmlFor="new-port" className="text-sm font-medium">Email Port</Label>
                                <Input
                                    id="new-port"
                                    type="number"
                                    value={newConfig.port}
                                    onChange={(e) => setNewConfig(prev => ({ ...prev, port: parseInt(e.target.value) || 0 }))}
                                    placeholder="e.g., 587"
                                    className="mt-1"
                                />
                            </div>
                            <div>
                                <Label htmlFor="new-encryption" className="text-sm font-medium">Encryption</Label>
                                <Select
                                    value={newConfig.encryption}
                                    onValueChange={(value) => setNewConfig(prev => ({ ...prev, encryption: value }))}
                                >
                                    <SelectTrigger className="w-full mt-1">
                                        <SelectValue placeholder="Select encryption" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="TLS">TLS</SelectItem>
                                        <SelectItem value="SSL">SSL</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="new-username" className="text-sm font-medium">Username</Label>
                                <Input
                                    id="new-username"
                                    type="text"
                                    value={newConfig.username}
                                    onChange={(e) => setNewConfig(prev => ({ ...prev, username: e.target.value }))}
                                    placeholder="e.g., user@example.com"
                                    className="mt-1"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <Label htmlFor="new-password" className="text-sm font-medium">Password</Label>
                                <Input
                                    id="new-password"
                                    type="password"
                                    value={newConfig.password}
                                    onChange={(e) => setNewConfig(prev => ({ ...prev, password: e.target.value }))}
                                    placeholder="Enter password"
                                    className="mt-1"
                                />
                            </div>
                        </div>
                        <Button onClick={handleAddConfig} className="mt-6 flex items-center bg-blue-600 hover:bg-blue-700 text-white">
                            <Plus className="w-4 h-4 mr-2" /> Save Configuration
                        </Button>
                    </div>

                    {/* Read Table */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Existing Email Configurations</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-slate-700">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Host</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Port</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Encryption</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Username</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:bg-slate-800 dark:divide-slate-700">
                                    {configs.map((config) => (
                                        <tr key={config.id} className="hover:bg-gray-50 dark:hover:bg-slate-700">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                                                {editingId === config.id ? (
                                                    <Input
                                                        value={config.host}
                                                        onChange={(e) => handleConfigChange(config.id, 'host', e.target.value)}
                                                        className="h-8"
                                                    />
                                                ) : (
                                                    config.host
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                                                {editingId === config.id ? (
                                                    <Input
                                                        type="number"
                                                        value={config.port}
                                                        onChange={(e) => handleConfigChange(config.id, 'port', parseInt(e.target.value) || 0)}
                                                        className="h-8"
                                                    />
                                                ) : (
                                                    config.port
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                                                {editingId === config.id ? (
                                                    <Select
                                                        value={config.encryption}
                                                        onValueChange={(value) => handleConfigChange(config.id, 'encryption', value)}
                                                    >
                                                        <SelectTrigger className="w-full h-8">
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="TLS">TLS</SelectItem>
                                                            <SelectItem value="SSL">SSL</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                ) : (
                                                    config.encryption
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                                                {editingId === config.id ? (
                                                    <Input
                                                        value={config.username}
                                                        onChange={(e) => handleConfigChange(config.id, 'username', e.target.value)}
                                                        className="h-8"
                                                    />
                                                ) : (
                                                    config.username
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                {editingId === config.id ? (
                                                    <Button variant="outline" size="sm" onClick={() => handleSave()} className="mr-2">
                                                        <Save className="w-4 h-4 mr-1" /> Save
                                                    </Button>
                                                ) : (
                                                    <Button variant="outline" size="sm" onClick={() => handleEdit(config.id)} className="mr-2">
                                                        <Pencil className="w-4 h-4 mr-1" /> Edit
                                                    </Button>
                                                )}
                                                <Button variant="destructive" size="sm" onClick={() => handleDelete(config.id)}>
                                                    <Trash className="w-4 h-4" /> Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </CustomSettingsLayout>
        </AppLayout>
    );
}