import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import InputError from '@/components/input-error';
import { Eye, EyeOff, Lock, Mail, X } from 'lucide-react';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSwitchToRegister: () => void;
}

export function LoginModal({ isOpen, onClose, onSwitchToRegister }: LoginModalProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm<{
        email: string;
        password: string;
        remember: boolean;
    }>({
        email: '',
        password: '',
        remember: false,
    });

    const { data: forgotData, setData: setForgotData, post: postForgot, processing: forgotProcessing, errors: forgotErrors } = useForm({
        email: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
            onSuccess: () => onClose(),
        });
    };

    const handleForgotPassword = (e: React.FormEvent) => {
        e.preventDefault();
        postForgot(route('password.email'), {
            onSuccess: () => {
                setShowForgotPassword(false);
                // You could show a success message here
            }
        });
    };

    const handleClose = () => {
        reset();
        setShowForgotPassword(false);
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <div className="flex items-center justify-between">
                        <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                            {showForgotPassword ? '🔐 Reset Password' : '🔑 Welcome Back'}
                        </DialogTitle>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleClose}
                            className="h-8 w-8 p-0"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        {showForgotPassword 
                            ? 'Enter your email to receive a reset link'
                            : 'Sign in to access your payment dashboard'
                        }
                    </p>
                </DialogHeader>

                {showForgotPassword ? (
                    <form onSubmit={handleForgotPassword} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="forgot-email" className="text-sm font-medium">
                                Email Address
                            </Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                <Input
                                    id="forgot-email"
                                    type="email"
                                    value={forgotData.email}
                                    onChange={(e) => setForgotData('email', e.target.value)}
                                    className="pl-10"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <InputError message={forgotErrors.email} />
                        </div>

                        <div className="flex flex-col space-y-3">
                            <Button
                                type="submit"
                                disabled={forgotProcessing}
                                className="w-full bg-blue-600 hover:bg-blue-700"
                            >
                                {forgotProcessing ? 'Sending...' : 'Send Reset Link'}
                            </Button>
                            <Button
                                type="button"
                                variant="ghost"
                                onClick={() => setShowForgotPassword(false)}
                                className="w-full"
                            >
                                Back to Login
                            </Button>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium">
                                Email Address
                            </Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                <Input
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="pl-10"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <InputError message={errors.email} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-sm font-medium">
                                Password
                            </Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                <Input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    className="pl-10 pr-10"
                                    placeholder="Enter your password"
                                    required
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-4 w-4 text-gray-400" />
                                    ) : (
                                        <Eye className="h-4 w-4 text-gray-400" />
                                    )}
                                </Button>
                            </div>
                            <InputError message={errors.password} />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="remember"
                                    checked={data.remember}
                                    onCheckedChange={(checked) => setData('remember', Boolean(checked))}
                                />
                                <Label htmlFor="remember" className="text-sm text-gray-600 dark:text-gray-400">
                                    Remember me
                                </Label>
                            </div>
                            <Button
                                type="button"
                                variant="link"
                                onClick={() => setShowForgotPassword(true)}
                                className="text-sm text-blue-600 hover:text-blue-500 p-0"
                            >
                                Forgot password?
                            </Button>
                        </div>

                        <div className="flex flex-col space-y-3">
                            <Button
                                type="submit"
                                disabled={processing}
                                className="w-full bg-blue-600 hover:bg-blue-700"
                            >
                                {processing ? 'Signing in...' : 'Sign In'}
                            </Button>
                            <div className="text-center">
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                    Don't have an account?{' '}
                                </span>
                                <Button
                                    type="button"
                                    variant="link"
                                    onClick={onSwitchToRegister}
                                    className="text-sm text-blue-600 hover:text-blue-500 p-0"
                                >
                                    Create one now
                                </Button>
                            </div>
                        </div>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
}