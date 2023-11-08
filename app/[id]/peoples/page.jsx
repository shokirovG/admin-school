"use client";

import PeoplesList from "@/components/PeoplesList";
import { useFetch } from "@/hooks/useFetch";
import {
  studentsFetched,
  studentsFetching,
} from "@/redux/actions/studentsAction";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = ({ params }) => {
  return (
    <div className="category">
      <div>
        <div className="container  text-center">
          <PeoplesList />
        </div>
      </div>
    </div>
  );
};

export default page;
