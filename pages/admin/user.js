import { Button, Table, Form, Modal, Input } from "antd";
import { useEffect, useState } from "react";

const { useForm } = Form;

const User = () => {
  const form = useForm()[0];

  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      no: 1,
      name: "Kolya1",
      gender: "male",
      mail: "kolyap@gmail.com",
    },
    {
      id: 2,
      no: 2,
      name: "Kolya2",
      gender: "male",
      mail: "kolyapa@gmail.com",
    },
    {
      id: 3,
      no: 3,
      name: "Kolya3",
      gender: "male",
      mail: "kolyapap@gmail.com",
    },
    {
      id: 4,
      no: 4,
      name: "Kolya4",
      gender: "male",
      mail: "kolyapapoy@gmail.com",
    },
    {
      id: 5,
      no: 5,
      name: "Kolya5",
      gender: "male",
      mail: "kolyapapoyan@gmail.com",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState();

  const columns = [
    {
      title: "No",
      key: "no",
      dataIndex: "no",
    },
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Gender",
      key: "gender",
      dataIndex: "gender",
    },
    {
      title: "Mail Address",
      key: "mail",
      dataIndex: "mail",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "action",
      render: (text, row) => {
        return (
          <>
            <Button type="primary" onClick={() => onEdit(row)}>
              Edit
            </Button>
            <Button
              type="primary"
              style={{ marginLeft: "5px" }}
              danger
              onClick={() => onDelete(row.id)}
            >
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  const onEdit = (row) => {
    setOpen(row);
    setEditItem(row);
    form.setFieldsValue(row);
  };

  const editData = () => {
    const data = dataSource;

    const index = data.findIndex((item) => item.id === editItem.id);

    if (index > -1) {
      form.validateFields().then((values) => {
        data[index] = { id: editItem.id, no: editItem.no, ...values };

        setDataSource([...data]);

        setOpen(false);
      });
    }
  };

  const onDelete = (id) => {
    const data = dataSource;

    const index = data.findIndex((item) => item.id === id);

    data.splice(index, 1);

    setDataSource([...data]);
  };

  return (
    <div>
      <Table bordered size="small" columns={columns} dataSource={dataSource} />
      <Modal
        title="Edit"
        onCancel={() => setOpen(false)}
        open={open}
        onOk={() => editData()}
      >
        <Form form={form}>
          <Form.Item name="name" children={<Input />} />
          <Form.Item name="gender" children={<Input />} />
          <Form.Item name="mail" children={<Input />} />
        </Form>
      </Modal>
    </div>
  );
};

export default User;
