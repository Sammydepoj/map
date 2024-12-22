import Messages from "@/assets/icons/messages";
import NotificationBell from "@/assets/icons/notification-bell";
import { AppSidebar } from "@/components/app-sidebar";
import { Input } from "@/components/ui/input";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ChevronDown, ChevronLeft, Search } from "lucide-react";
import Image from "next/image";

import userImg from "../../assets/svgs/user.svg";
import Link from "next/link";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-20 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b">
          <div className="flex items-center gap-2 px-4 justify-between w-full">
            <Link
              href={"/quotes"}
              className="flex items-center gap-2 cursor-pointer text-[#667185] font-normal"
            >
              <ChevronLeft /> Back
            </Link>
            <div className="flex gap-3 items-center ">
              <span className="border flex items-center gap-3 rounded-lg px-2 w-full max-w-[450px] min-w-[450px]">
                <Search />
                <Input
                  className="!border-none !outline-none focus-visible:outline-none !focus:border-transparent !focus:border-none p-0 !focus:outline-none !active:outline-none !active:border-none"
                  placeholder="Search here...."
                />
              </span>
              <span className="flex items-center gap-3">
                <NotificationBell />
                <Messages />
                <Image src={userImg} alt="Logged in user avatar" />
                <ChevronDown />
              </span>
            </div>
            {/* <SidebarTrigger className="-ml-1" /> */}
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
