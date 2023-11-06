"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import peoplesLIst from "../app/img/people-list.jpg";
import warning from "../app/img/warning.jpg";
import danger from "../app/img/danger.jpg";
import success from "../app/img/success.jpg";
import Image from "next/image";
const PeoplesList = () => {
  const pathName = usePathname();

  return (
    <>
      <div className="row category__cards gap-2 text-white ">
        <Link
          href={`${pathName}/peoples-list`}
          className="btn-section col peoples-card"
        >
          <Image src={peoplesLIst} width={150} height={150} alt="peoples" />
          <br />
          <br />
          <p>O'quvchilar ro'yxati</p>
        </Link>
        <Link
          href={`${pathName}/peoples-success`}
          className="btn-section col peoples-card"
        >
          <Image src={success} width={150} height={150} alt="peoples" />
          <br />
          <br />
          <p> To'lov qilgan o'quvchilar</p>
        </Link>
        <Link
          href={`${pathName}/peoples-warning`}
          className="btn-section col peoples-card"
        >
          <Image src={warning} width={150} height={150} alt="peoples" />
          <br />
          <br />
          <p>To'lov qilmagan o'quvchilar</p>
        </Link>
        <Link
          href={`${pathName}/peoples-danger`}
          className="btn-section col  peoples-card"
        >
          <Image src={danger} width={150} height={150} alt="peoples" />
          <br />
          <br />
          <p>Kursni tugatmasdan ketib qolgan</p>
        </Link>
      </div>
    </>
  );
};

export default PeoplesList;
