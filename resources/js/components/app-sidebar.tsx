import React from 'react';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { 
    LayoutGrid, 
    List, 
    Users, 
    Code, 
    BarChart3, 
    Settings, 
    BookOpen,
    CreditCard
} from 'lucide-react';


const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Transactions',
        href: '/transactions',
        icon: List,
    },
    {
        title: 'Merchants',
        href: '/merchants',
        icon: Users,
    },
    {
        title: 'Widgets',
        href: '/widgets',
        icon: Code,
    },
    {
        title: 'Analytics',
        href: '/analytics',
        icon: BarChart3,
    },
    {
        title: 'Settings',
        href: '/settings',
        icon: Settings,
    },
    {
        title: 'Documentation',
        href: '/documentation',
        icon: BookOpen,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'API Documentation',
        href: '/api-docs',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset" className="border-r border-blue-100 dark:border-slate-700">
            <SidebarHeader className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild className="hover:bg-blue-100 dark:hover:bg-slate-600">
                            <Link href="/dashboard" prefetch className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                                    <CreditCard className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-900 dark:text-white">Payment Gateway</div>
                                    <div className="text-xs text-gray-600 dark:text-gray-300">Hub</div>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent className="bg-white dark:bg-slate-800">
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter className="bg-white dark:bg-slate-800 border-t border-blue-100 dark:border-slate-700">
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}