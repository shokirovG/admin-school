"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import peoples from "../img/peoples.jpg";
import workers from "../img/teachers.jpg";
import experiens from "../img/experense.jpg";
import React from "react";

import Image from "next/image";

const page = ({ params }) => {
  const router = useRouter();
  const pathName = usePathname();
  const months = ["sentabr", "oktabr", "noyabr", "dekabr"];
  const findRoute = months.findIndex((el) => el == params.id);

  if (findRoute < 0) {
    return router.back();
  }

  return (
    <div className="container text-center">
      <h1>{params.id.toUpperCase()}</h1>
      <div className="row gap-4 category__cards mt-10">
        <Link
          href={`${pathName}/peoples`}
          className="btn-section col  cursor-pointer text-white d-flex align-items-center justify-content-center"
        >
          <Image src={peoples} width={350} height={350} alt="peoples" />
          <p>O'quvchilar bo'limi</p>
        </Link>
        <Link
          href={`${pathName}/workers`}
          className="btn-section col  text-white d-flex align-items-center justify-content-center"
        >
          <Image src={workers} width={350} height={350} alt="peoples" />
          <p>Ishchilar bo'limi</p>
        </Link>
        <Link
          href={`${pathName}/expenses`}
          className="btn-section col  text-white d-flex align-items-center justify-content-center"
        >
          <Image src={experiens} width={350} height={350} alt="peoples" />
          <p>Harajatlar bo'limi</p>
        </Link>
      </div>
    </div>
  );
};

export default page;
