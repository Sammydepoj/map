import React from "react";
import { Input } from "../ui/input";
import { X } from "lucide-react";
import { ItemsTable } from "../table/items-table";
import { Textarea } from "../ui/textarea";
import Calendar from "@/assets/icons/calendar";

const RequestInfo = () => {
  return (
    <div className="rounded-lg border my-5 p-4 ">
      <p className="font-semibold text-2xl text-[#1A1A21]">Request for Quote</p>
      <p className="text-base text-[#98A2B3] font-normal">
        Fill out these details to send the RFQ
      </p>
      <div className="flex items-center gap-4 flex-wrap md:flex-nowrap my-4">
        <label htmlFor="rfqNumber" className="w-full">
          <span className="text-[#475367] text-sm font-semibold">RFQ No</span>
          <Input className="" id="rfqNumber" disabled placeholder="RFQ-10234" />
        </label>
        <label htmlFor="title" className="w-full">
          <span className="text-[#475367] text-sm font-semibold">Title</span>
          <Input className="" id="title" disabled placeholder="RFQ-10234" />
        </label>
      </div>
      <div className="flex items-center gap-4 flex-wrap md:flex-nowrap my-4">
        <label htmlFor="department" className="w-full relative">
          <span className="text-[#475367] text-sm font-semibold">
            Department
          </span>
          <Input
            className=""
            id="department"
            disabled
            placeholder="RFQ-10234"
          />
          <X className="absolute right-1 top-9 cursor-pointer" />
        </label>
        <label htmlFor="edd" className="w-full relative">
          <span className="text-[#475367] text-sm font-semibold">
            Expected delivery date
          </span>
          <Input className="pl-8" id="edd" disabled placeholder="2024-12-02" />
          <button className="absolute left-1 top-10 cursor-pointer">
            <Calendar />
          </button>
          <p className="text-[#667185] text-xs font-medium">
            Calculated based on lead time and issue date
          </p>
        </label>
      </div>
      <div className="">
        <ItemsTable />
      </div>
      <label>
        <span className="text-[#475367] text-sm font-semibold mb-5">Note</span>
        <Textarea className=" max-w-[500px]" rows={10} />
      </label>
    </div>
  );
};

export default RequestInfo;
