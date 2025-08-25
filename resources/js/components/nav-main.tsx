import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const page = usePage();
    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel className="text-blue-600 font-semibold dark:text-blue-400">Payment Hub</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton 
                            asChild 
                            isActive={page.url.startsWith(item.href)} 
                            tooltip={{ children: item.title }}
                            className="hover:bg-blue-50 data-[active=true]:bg-blue-100 data-[active=true]:text-blue-700 dark:hover:bg-slate-700 dark:data-[active=true]:bg-blue-900/30 dark:data-[active=true]:text-blue-400"
                        >
                            <Link href={item.href} prefetch>
                                {item.icon && <item.icon className="w-4 h-4" />}
                                <span className="font-medium">{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                        {item.children && (
                            <SidebarMenuSub>
                                {item.children.map((subItem) => (
                                    <SidebarMenuSubItem key={subItem.title}>
                                        <SidebarMenuSubButton
                                            asChild
                                            isActive={page.url.startsWith(subItem.href)}
                                            className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100"
                                        >
                                            <Link href={subItem.href} prefetch>
                                                {subItem.icon && <subItem.icon className="w-3 h-3 mr-1" />} {/* Smaller icon for submenu */}
                                                <span>{subItem.title}</span>
                                            </Link>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                ))}
                            </SidebarMenuSub>
                        )}
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
