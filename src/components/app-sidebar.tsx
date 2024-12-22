"use client";

import * as React from "react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Dashboard from "@/assets/icons/dashboard";
import Inventory from "@/assets/icons/inventory";
import Procurement from "@/assets/icons/procurement";
import Finance from "@/assets/icons/finance";
import Communication from "@/assets/icons/communication";
import CalendarIcon from "@/assets/icons/calendar-icon";
import Contract from "@/assets/icons/contract";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  const data = {
    user: {
      name: "Mark Benson",
      email: "markbenson@coremed.com",
      avatar: "/avatars/shadcn.jpg",
    },

    navMain: [
      {
        title: "Dashboard",
        url: "#",
        icon: Dashboard,
        hasDropDown: false,
        hasCount: false,
        count: 0,
      },
      {
        title: "Inventory",
        url: "#",
        icon: Inventory,
        hasDropDown: false,
        hasCount: false,
        count: 0,
      },
      {
        title: "Procurement",
        url: "#",
        icon: Procurement,
        isActive: pathname.includes("quote"),
        hasDropDown: true,
        hasCount: false,
        count: 0,
        items: [
          {
            title: "Quotes",
            url: "/quotes",
            isActive: pathname.includes("quote"),
          },
          {
            title: "Orders",
            url: "#",
          },
        ],
      },
      {
        title: "Finance",
        url: "#",
        icon: Finance,
        hasDropDown: true,
        items: [],
        hasCount: false,
        count: 0,
      },
      {
        title: "Communication",
        url: "#",
        icon: Communication,
        hasDropDown: false,
        hasCount: true,
        count: 10,
      },
      {
        title: "Calendar",
        url: "#",
        icon: CalendarIcon,
        hasDropDown: false,
        hasCount: true,
        count: 10,
      },
      {
        title: "Contract",
        url: "#",
        icon: Contract,
        hasDropDown: false,
        hasCount: false,
        count: 0,
      },
    ],
  };
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
