"use client";

import * as React from "react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logo from "@/assets/svgs/Logo";

export function TeamSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent !p-2 data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square gap-3 items-center justify-center rounded-lg ">
            <Logo />
            <p className="text-[#141460]">Medical Advanced Platform</p>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
