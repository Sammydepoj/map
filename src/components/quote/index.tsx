import React from "react";
import { DataTableDemo } from "@/components/table/DataTable";
import { Button } from "@/components/ui/button";
import { ChevronDown, X } from "lucide-react";
import Client from "@/assets/icons/client";
import Terms from "@/assets/icons/terms";
import Edit from "@/assets/icons/edit";

const Quote = ({ isInfoFilled = true }: { isInfoFilled?: boolean }) => {
  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <div className="">
          <h3 className="text-2xl font-semibold">Quote details</h3>
          <p className="text-[#667185] font-extralight text-sm">
            Created on Wed, 12th June 2022, 08:00am
          </p>
        </div>
        {!isInfoFilled && (
          <div className="flex items-center gap-4">
            <Button>Respond</Button>
            <Button variant={"destructive"}>
              <X /> Rejected
            </Button>
          </div>
        )}
      </div>
      <div className="rounded-lg border my-5 p-4">
        {!isInfoFilled ? (
          <span className="flex items-center justify-between">
            <h4 className="text-[#1D2739] font-semibold text-xl">
              Quote Information
            </h4>
            <p className="text-[#667185] font-extralight text-sm ">
              Expected delivery date : 2024-12-02
            </p>
          </span>
        ) : (
          <span className="flex items-center justify-between">
            <h4 className="text-[#1D2739] font-semibold text-xl">
              Request Information
            </h4>
            <Edit />
          </span>
        )}
        <div className="flex items-center gap-16 justify-between w-full my-8">
          <div
            className={`grid gap-3 ${
              !isInfoFilled ? "w-full " : "w-full max-w-[600px]"
            }`}
          >
            <span className="flex items-center gap-4 flex-wrap w-full justify-between">
              <p className="text-base text-[#555E68] font-normal">Title</p>
              <p className="text-base text-[#344054] font-normal">
                Request for Equipments
              </p>
            </span>
            <span className="flex items-center gap-4 flex-wrap w-full justify-between">
              <p className="text-base text-[#555E68] font-normal">RFQNo</p>
              <p className="text-base text-[#344054] font-normal">RQ #01234</p>
            </span>
            <span className="flex items-center gap-4 flex-wrap w-full justify-between">
              <p className="text-base text-[#555E68] font-normal">Requestor</p>
              <span className="text-base text-[#344054] font-normal flex items-center gap-2">
                <span className="rounded-full bg-[#FFECE5] p-2">JD</span>
                <p className=" text-[#344054]">Jane Doe</p>
                <span className="rounded-full h-2 w-2 bg-[#D9D9D9] p-1"></span>
                <p className="text-[#98A2B3]">Head Nurse, Paediatrics</p>
              </span>
            </span>
            <span className="flex items-center gap-4 flex-wrap w-full justify-between">
              <p className="text-base text-[#555E68] font-normal">Status</p>
              <p className="text-xs bg-[#FFECE5] text-[#F56630] font- rounded-xl py-1 px-2">
                Awaiting
              </p>
            </span>
            <span className="flex items-center gap-4 flex-wrap w-full justify-between">
              <p className="text-base text-[#555E68] font-normal">Department</p>
              <p className="text-base text-[#344054] font-normal">Maternity</p>
            </span>
          </div>
          {!isInfoFilled && (
            <div className="rounded-lg border grid gap-4 p-4 w-full">
              <span className="flex items-center gap-2">
                <Client />
                <p className="text-[#475367] text-xs font-normal">Client</p>
              </span>
              <div className="flex items-center gap-4">
                <span className="rounded-full bg-[#FFECE5] py-2 px-3 ">W</span>
                <span>
                  <p className="text-base text-[#555E68] font-normal">
                    Westend Hospital
                  </p>
                  <p className="text-[#475367] text-xs font-normal">
                    Clear street
                  </p>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <DataTableDemo />
      <div className="rounded-lg border my-5 p-4 flex items-center justify-between">
        <span className="flex items-center gap-3">
          <Terms />
          <span>
            <p className="text-2xl font-semibold">Terms and Attachments</p>
            <p className="text-[#667185] font-extralight text-sm ">
              Review payment and delivery terms.
            </p>
          </span>
        </span>
        <ChevronDown />
      </div>
    </div>
  );
};

export default Quote;
