import { Form } from "react-bootstrap";

function Input({ dataParent, setDataParent }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formText">
        <Form.Label>parent: {dataParent}</Form.Label>
        <Form.Control type="text" value={dataParent} onChange={e => setDataParent(e.target.value)} />
      </Form.Group>
    </Form>
  );
}

export default Input;
