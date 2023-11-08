"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  setTimeout(() => {
    return router.push("/");
  }, 2000);
  return <h1>not-found</h1>;
};

export default NotFound;
