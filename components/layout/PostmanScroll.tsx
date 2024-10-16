"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

export function PostmanScroll() {
  return (
    <div className="flex flex-col overflow-hidden bg-white dark:bg-black">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Focus more on <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                implementing logic
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/postman.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-fit object-left-top"
          draggable={false}
          unoptimized
        />
      </ContainerScroll>
    </div>
  );
}
