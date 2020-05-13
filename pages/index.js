import React, { useState, useEffect } from "react";
import Layout from "../component/layout";
import ModalTambahTamu from "../Modals/Tambahtamu";
import ModalEditTamu from "../Modals/Edittamu";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Index = () => {
  const initial = {
    company_name: "",
    name: "",
    start: "",
    end: "",
  };
  const dataset = [
    {
      company_name: "perusahaan 1",
      name: "aaa",
      start: "asdfasdf",
      end: "asdfasdfadf",
    },
    {
      company_name: "perusahaan 2",
      name: "bbb",
      start: "asdfasdf",
      end: "asdfasdfadf",
    },
    {
      company_name: "perusahaan 3",
      name: "ccc",
      start: "asdfasdf",
      end: "asdfasdfadf",
    },
    {
      company_name: "perusahaan 4",
      name: "ddd",
      start: "asdfasdf",
      end: "asdfasdfadf",
    },
    {
      company_name: "perusahaan 5",
      name: "eee",
      start: "asdfasdf",
      end: "asdfasdfadf",
    },
  ];
  const [data, setData] = useState(dataset);
  const [edit, setEdit] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  const handleHapus = (index) => {
    let result = data.filter((item, i) => i !== index);
    setData(result);
  };
  const handleOpenModal = (index) => {
    setShowModal(true);
  };

  const handleOpenModalEdit = (index) => {
    setEdit(index);
    setShowModalEdit(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleCloseModalEdit = () => {
    setShowModalEdit(false);
  };

  const addData = (value) => {
    setData([...data, value]);
  };

  const editData = (index, value) => {
    let dataset = data;
    dataset[index] = value;
    setData(dataset);
    setEdit(0);
  };

  let table = null;
  if (data) {
    table = data.map((x, i) => (
      <tr key={i}>
        <td>{x.company_name}</td>
        <td>{x.name}</td>
        <td>{x.start}</td>
        <td>{x.end}</td>
        <td>
          <Button size="sm" variant="primary" onClick={() => handleHapus(i)}>
            Hapus
          </Button>
          <Button
            size="sm"
            variant="primary"
            onClick={() => handleOpenModalEdit(i)}
          >
            Edit
          </Button>
        </td>
      </tr>
    ));
  }
  // const aaa = console.log(localStorage.getItem("datea"));
  console.log("edit", edit);

  return (
    <Layout>
      <Button variant="primary" onClick={() => handleOpenModal(null)}>
        Tambah Data
      </Button>

      <ModalTambahTamu
        addData={addData}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        showModal={showModal}
        editData={editData}
      />
      <ModalEditTamu
        edit={edit}
        handleOpenModal={handleOpenModalEdit}
        handleCloseModal={handleCloseModalEdit}
        showModal={showModalEdit}
        editData={editData}
        data={edit === null ? initial : dataset[edit]}
      />
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Nama Perusahaan</th>
              <th>Nama Pemesan</th>
              <th>Tanggal Pemakaian Ballroom</th>
              <th>Tanggal Selesai Pemakaian </th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>{table}</tbody>
        </table>
      </div>
    </Layout>
  );
};
export default Index;
