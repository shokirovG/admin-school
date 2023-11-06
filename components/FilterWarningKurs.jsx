import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "@/hooks/useFetch";
import {
  filterKurs,
  studentsFetched,
  studentsFetching,
  studentSuccess,
  studentSuccessFilter,
  studentWarning,
  studentWarningFilter,
} from "@/redux/actions/studentsAction";
function FilterWarningKurs({ handleGuruhName }) {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { request } = useFetch();
  const handleValue = (e) => {
    handleGuruhName(e.target.value);
    // dispatch(studentsFetching());
    // request(store.month).then((res) => {
    //   dispatch(studentsFetched(res.peoples));
    //   dispatch(filterKurs(e.target.value));
    // });
    console.log("filter store", store.studentSuccess);
    if (e.target.value == "Barcha guruhlar") {
      dispatch(studentWarning());
    } else {
      dispatch(studentWarningFilter(e.target.value));
    }
  };
  return (
    <Form.Select aria-label="Default select example" onChange={handleValue}>
      <option value="Barcha guruhlar">Barcha guruhlar</option>
      <option value="front-5">front-5</option>
      <option value="front-6">front-6</option>
      <option value="front-8">front-8</option>

      <option value="front-10">front-10</option>
      <option value="front-11">front-11</option>
      <option value="front-12">front-12</option>
      <option value="front-9">front-13</option>
      <option value="animatsiya-1">animatsiya-1</option>
      <option value="savodxonlik-1">savodxonlik-1</option>

      <option value="inglizTili-1">inglizTili-1</option>
    </Form.Select>
  );
}

export default FilterWarningKurs;
