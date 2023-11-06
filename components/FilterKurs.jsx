import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "@/hooks/useFetch";
import {
  filterKurs,
  studentsFetched,
  studentsFetching,
} from "@/redux/actions/studentsAction";
function FilterKurs({ handleGuruhName }) {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { request } = useFetch();
  const handleValue = (e) => {
    handleGuruhName(e.target.value);
    // dispatch(studentsFetching());
    request(store.month).then((res) => {
      dispatch(studentsFetched(res.peoples));
      dispatch(filterKurs(e.target.value));
    });
  };
  return (
    <Form.Select aria-label="Default select example" onChange={handleValue}>
      <option>Barcha guruhlar</option>
      <option value="front-end">front-end</option>
      <option value="animatsiya">animatsiya</option>
      <option value="savodxonlik">savodxonlik</option>
      <option value="python">python</option>
      <option value="inglizTili">inglizTili</option>
    </Form.Select>
  );
}

export default FilterKurs;
