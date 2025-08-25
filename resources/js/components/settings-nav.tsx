import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { Mail, User, Lock, Palette } from 'lucide-react';

const settingsNavItems: NavItem[] = [
    {
        title: 'Profile',
        href: '/settings/profile',
        icon: User,
    },
    {
        title: 'Password',
        href: '/settings/password',
        icon: Lock,
    },
    {
        title: 'Appearance',
        href: '/settings/appearance',
        icon: Palette,
    },
    {
        title: 'Email Settings',
        href: '/settings/email',
        icon: Mail,
    },
];

interface SettingsNavProps {
    currentPath: string;
}

export function SettingsNav({ currentPath }: SettingsNavProps) {
    return (
        <nav className="flex flex-col space-y-1 space-x-0">
            {settingsNavItems.map((item, index) => (
                <Button
                    key={`${item.href}-${index}`}
                    size="sm"
                    variant="ghost"
                    asChild
                    className={cn('w-full justify-start', {
                        'bg-muted': currentPath === item.href,
                    })}
                >
                    <Link href={item.href} prefetch className="flex items-center space-x-2">
                        {item.icon && <item.icon className="h-4 w-4" />}
                        <span>{item.title}</span>
                    </Link>
                </Button>
            ))}
        </nav>
    );
}