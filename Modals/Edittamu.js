//import Layout from "../component/layout";
import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ModalEditTamu = (props) => {
  const { data } = props;
  const [name, setName] = useState("");
  const [company_name, setCompanyName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  useEffect(() => {
    const { data } = props;
    setName(data.name);
    setCompanyName(data.company_name);
    setStart(data.start);
    setEnd(data.end);
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasil = {
      company_name: company_name,
      name: name,
      start: start,
      end: end,
    };
    if (props.edit) {
      props.editData(props.edit, hasil);
    } else {
      props.editData(index, hasil);
    }
    resetForm();
    props.handleCloseModal();
  };

  const resetForm = () => {
    setName("");
    setStart("");
    setEnd("");
    setCompanyName("");
  };

  const onCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onStartChange = (e) => {
    setStart(e.target.value);
  };
  const onEndChange = (e) => {
    setEnd(e.target.value);
  };

  return (
    <>
      <Modal show={props.showModal} onHide={props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="company_name">
              <Form.Label>Nama Perusahaan</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukan Nama Perusahaan"
                value={company_name}
                onChange={onCompanyNameChange}
              />
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Label>Nama Pemesan</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukan Nama Pemesan"
                value={name}
                onChange={onNameChange}
              />
            </Form.Group>
            <Form.Group controlId="start">
              <Form.Label>Tanggal Pemakaian</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukan Nama Pemesan"
                value={start}
                onChange={onStartChange}
              />
            </Form.Group>
            <Form.Group controlId="end">
              <Form.Label>tangal selesai</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukan Nama Pemesan"
                value={end}
                onChange={onEndChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalEditTamu;
