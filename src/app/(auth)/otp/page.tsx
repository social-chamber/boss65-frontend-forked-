import Image from "next/image";
import OtpForm from "./_components/otpForm";
import { Suspense } from "react";

export default function OtpFormPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      {/* Left side - Image */}
      <div className="hidden md:block md:col-span-1">
        <Image
          src="/images/auth-sidebar.jpg"
          alt="auth sidebar"
          width={720}
          height={1024}
          className="w-full h-[1024px] object-cover"
        />
      </div>

      {/* Right side - form */}
      <div className="md:col-span-1 h-full flex flex-col items-center justify-center">
        <Image
          src="/images/auth_logo.png"
          width={80}
          height={80}
          alt="Logo"
          className="w-[80px] h-[80px] rounded-full"
        />
        <div className="mx-auto w-full max-w-md mt-[60px]">
          {/* Logo */}

          {/* form text */}
          <div className="text-center pb-6">
            <h1 className="text-black font-poppins font-semibold text-[32px] leading-[120%] tracking-[0%] pb-2">
              Enter OTP
            </h1>
            <p className="text-base font-poppins font-normal leading-[150%] tracking-[0%] text-black">
              Enter the OTP
            </p>
          </div>

          {/* otp form component */}
          <Suspense fallback={<div>Loading...</div>}>
            <OtpForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
