import { Metadata } from "next";
import { FileUploadDemo } from "@/components/includes/FileUpload";
import { EmailFormDemo } from "@/components/includes/SendMail";

export const metadata: Metadata = {
    title: "Send Email",
    description: "Send an email using the form below.",
}

export default function Page() {
    return (
        <div className="min-h-screen flex justify-center items-center w-full py-6 sm:py-12 md:py-20 lg:py-24">
            <div className="flex max-md:flex-col md:justify-evenly max-md:space-y-3 w-full">
                <FileUploadDemo />
                <EmailFormDemo />
            </div>
        </div>
    )
}