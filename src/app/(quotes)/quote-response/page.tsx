"use client";
import BreadCrumbComponent from "@/components/breadcrumb";
import Quote from "@/components/quote";
import RequestInfo from "@/components/request-info";
import TermsAndAttachment from "@/components/terms-and-attachment";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const QuoteResponse = () => {
  const [currentStep, setCurrentStep] = React.useState<
    "requestInfo" | "termsAndAttachment" | "requestFilled"
  >("requestInfo");
  const handleSubmit = () => {
    if (currentStep === "requestInfo") {
      setCurrentStep("termsAndAttachment");
    } else if (currentStep === "termsAndAttachment") {
      setCurrentStep("requestFilled");
    }
  };
  return (
    <div>
      <BreadCrumbComponent
        previousPageTitle="Quotes"
        previousPageUrl="/quotes"
        currentPageTitle="Quote Response"
      />
      <div className="rounded-lg border my-5 p-4 flex items-center justify-between">
        <div
          className={`flex items-center gap-3 ${
            currentStep === "requestInfo" ? "" : "opacity-55"
          }`}
        >
          <p
            className={`rounded-full py-2 px-4 ${
              currentStep === "requestInfo"
                ? " bg-[#175CFF]  text-white"
                : "border-2 text-[#98A2B3]"
            }`}
          >
            1
          </p>
          <span>
            <p
              className={`${
                currentStep === "requestInfo"
                  ? "text-[#101928] font-semibold text-base"
                  : ""
              }`}
            >
              Request Information
            </p>
            <p className="text-xs text-[#475367] font-normal">
              Provide details about the RFQ
            </p>
          </span>
        </div>
        <div
          className={`flex items-center gap-3 ${
            currentStep === "termsAndAttachment" ? "" : "opacity-55"
          }`}
        >
          <p
            className={`rounded-full py-2 px-4 ${
              currentStep === "termsAndAttachment"
                ? " bg-[#175CFF]  text-white"
                : "border-2 text-[#98A2B3]"
            }`}
          >
            2
          </p>
          <span>
            <p
              className={`${
                currentStep === "termsAndAttachment"
                  ? "text-[#101928] font-semibold text-base"
                  : ""
              }`}
            >
              Terms and Attachments
            </p>
            <p className="text-xs text-[#475367] font-normal">
              Payment and delivery terms
            </p>
          </span>
        </div>
        <div
          className={`flex items-center gap-3 ${
            currentStep === "requestFilled" ? "" : "opacity-55"
          }`}
        >
          <p
            className={`rounded-full py-2 px-4 ${
              currentStep === "requestFilled"
                ? " bg-[#175CFF]  text-white"
                : "border-2 text-[#98A2B3]"
            }`}
          >
            3
          </p>
          <span>
            <p
              className={`${
                currentStep === "requestFilled"
                  ? "text-[#101928] font-semibold text-base"
                  : ""
              }`}
            >
              Review
            </p>
            <p className="text-xs text-[#475367] font-normal">
              Confirm all information provided
            </p>
          </span>
        </div>
      </div>
      {currentStep === "requestInfo" && <RequestInfo />}
      {currentStep === "termsAndAttachment" && <TermsAndAttachment />}
      {currentStep === "requestFilled" && <Quote />}
      <div className="flex items-center justify-end gap-4 my-4">
        <Button
          variant={"outline"}
          className="border-[#D0D5DD] text-[#344054] hover:text-[#344054]"
        >
          <Link href={"/quotes"}>Cancel</Link>
        </Button>
        <Button variant={"outline"} className="text-[#175CFF]">
          <Link href={"/quotes"}> Save as draft</Link>
        </Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default QuoteResponse;
