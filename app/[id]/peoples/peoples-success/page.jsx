"use client";

import Loader from "@/components/Loader";
import StudentListParent from "@/components/StudentListParent";
import StudentSuccessParent from "@/components/StudentSuccessParent";
import useFetch from "@/hooks/useFetch";
import {
  saveMonth,
  studentsFetched,
  studentsFetching,
  studentSuccess,
} from "@/redux/actions/studentsAction";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = ({ params }) => {
  const dispatch = useDispatch();
  const { request } = useFetch();
  const store = useSelector((state) => state);
  useEffect(() => {
    dispatch(saveMonth(params.id));
    dispatch(studentsFetching());

    request(params.id).then((data) => {
      dispatch(studentsFetched(data.peoples));
      dispatch(studentSuccess());
    });
  }, []);

  return (
    <>{store.loading == "loaded" ? <StudentSuccessParent /> : <Loader />}</>
  );
};

export default page;
