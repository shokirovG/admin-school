import { filterPrice } from "@/redux/actions/studentsAction";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";

function FilterPrice({ qolganTolov }) {
  const handleValue = (e) => {};
  return (
    <Form.Select aria-label="Default select example" onChange={handleValue}>
      <option>Barchasi</option>
      <option value="1">To'lov qilganlar</option>
      <option value="2">Qarzdorlar</option>
    </Form.Select>
  );
}

export default FilterPrice;
