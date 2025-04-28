import Image from "next/image";
import React from "react";

// Auth Left Section Component
export default function LeftSection() {
  return (
    <section className="w-1/2 bg-[#F0F4FC] flex flex-col justify-center items-start px-20 py-10 rounded-r-[100px]  shadow-deep">
      <h1 className="text-3xl font-semibold">Welcome to</h1>
      <h2 className="text-5xl font-bold text-brand mt-2">Elevate</h2>
      <p className="mt-4 text-muted-foreground text-sm w-2/3">
        Quidem autem voluptatibus qui quaerat aspernatur architecto natus
      </p>
      <div className="mt-10">
        <Image
          src="/assets/images/bro.png"
          alt="Illustration"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}
