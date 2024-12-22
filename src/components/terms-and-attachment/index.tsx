import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useDropzone } from "react-dropzone";
import uploadImage from "../../assets/svgs/upload.svg";
import Image from "next/image";
import { Button } from "../ui/button";

const TermsAndAttachment = () => {
  const onDrop = React.useCallback(() => {}, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
      "image/gif": [".gif"],
      "image/webp": [".webp"],
    },
    maxSize: 4,
    multiple: true,
  });
  return (
    <div className="rounded-lg border my-5 p-4 ">
      <p className="font-semibold text-2xl text-[#1A1A21]">
        Terms and Attachments
      </p>
      <p className="text-base text-[#98A2B3] font-normal">
        Provide detailed information on payment and delivery terms{" "}
      </p>
      <div className="flex items-center gap-4 flex-wrap md:flex-nowrap my-4">
        <label htmlFor="rfqNumber" className="w-full">
          <span className="text-[#475367] text-sm font-semibold">
            Payment Terms
          </span>
          <Select value={"Net 30"}>
            <SelectTrigger className="" value={"Net 30"}>
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Net 30">Net 30</SelectItem>
            </SelectContent>
          </Select>
        </label>
        <label htmlFor="Immediate delivery" className="w-full">
          <span className="text-[#475367] text-sm font-semibold">
            Delivery Schedule
          </span>
          <Select value={"Immediate delivery"}>
            <SelectTrigger className="" value={"Immediate delivery"}>
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Immediate delivery">
                Immediate delivery
              </SelectItem>
            </SelectContent>
          </Select>
        </label>
      </div>
      <div className="flex items-center gap-4 flex-wrap md:flex-nowrap my-4">
        <label htmlFor="Shipping Method" className="w-full">
          <span className="text-[#475367] text-sm font-semibold">
            Delivery Schedule
          </span>
          <Select value={"Shipping Method"}>
            <SelectTrigger className="" value={"Shipping Method"}>
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Shipping Method">Shipping Method</SelectItem>
            </SelectContent>
          </Select>
        </label>
        <label htmlFor="10 Days" className="w-full">
          <span className="text-[#475367] text-sm font-semibold">
            Lead time
          </span>
          <Select value={"10 Days"}>
            <SelectTrigger className="" value={"10 Days"}>
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10 Days">10 Days</SelectItem>
            </SelectContent>
          </Select>
        </label>
      </div>
      <div className="">
        <p className="text-[#101928] font-semibold text-base">Attachments</p>
        <p className="text-xs text-[#98A2B3] font-normal">
          Attach all necessary files or documents
        </p>
        <div
          {...getRootProps()}
          className={`border-dashed border-2 p-6 text-center max-w-[515px] my-5 rounded-2xl cursor-pointer ${
            isDragActive ? "bg-gray-100" : "bg-white"
          }`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here...</p>
          ) : (
            <div className="">
              {
                <Image
                  src={uploadImage}
                  alt="upload items"
                  className="mx-auto my-3"
                />
              }
              <p className="text-[#475367] font-normal text-sm my-4">
                <span className="text-[#175CFF] font-medium">
                  Click to upload
                </span>{" "}
                or drag and drop
              </p>
              <p className="text-[#98A2B3] text-xs">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </p>
              <p className="text-[#98A2B3] font-bold text-xs my-4">OR</p>
              <Button className="text-[#175CFF] font-bold text-sm" variant={"outline"}>
                Browse Files
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TermsAndAttachment;
