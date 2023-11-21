import { Button, Table, Form, Modal, Input, Tag } from "antd";
import { useEffect, useState } from "react";

const { useForm } = Form;

const Reddit = () => {
  const form = useForm()[0];

  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      no: 1,
      title: "title1",
      content: "content1",
      author: "kolyap@gmail.com",
      voteRatio: 5,
      createdAt: "2023/19/11",
      status: 0,
    },
    {
      id: 2,
      no: 2,
      title: "title2",
      content: "content2",
      author: "kolyapoy@gmail.com",
      voteRatio: 3,
      createdAt: "2023/19/11",
      status: 2,
    },
    {
      id: 3,
      no: 3,
      title: "title3",
      content: "content3",
      author: "kolyap@gmail.com",
      voteRatio: 1,
      createdAt: "2023/19/11",
      status: 1,
    },
    {
      id: 4,
      no: 4,
      title: "title4",
      content: "content4",
      author: "kolyapoyan@gmail.com",
      voteRatio: 2,
      createdAt: "2023/19/11",
      status: 1,
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
      title: "Title",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "Content",
      key: "content",
      dataIndex: "content",
    },
    {
      title: "Author",
      key: "author",
      dataIndex: "author",
    },
    {
      title: "VoteCount",
      key: "voteRatio",
      dataIndex: "voteRatio",
    },
    {
      title: "Date",
      key: "createdAt",
      dataIndex: "createdAt",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (text, row) => {
        return text === 0 ? (
          <Tag color="#87d068">Pending</Tag>
        ) : text === 1 ? (
          <Tag color="#f50">Declined</Tag>
        ) : (
          <Tag color="#108ee9">Allowed</Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "action",
      render: (text, row) => {
        return (
          <div>
            <Button
              type="primary"
              style={{ marginLeft: "5px" }}
              onClick={() => onAllow(row.id)}
            >
              Allow
            </Button>
            <Button
              style={{ marginLeft: "5px" }}
              onClick={() => onDecline(row.id)}
              danger
            >
              Decline
            </Button>
            <Button
              type="primary"
              style={{ marginLeft: "5px" }}
              danger
              onClick={() => onDelete(row.id)}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  const onAllow = (id) => {
    const data = dataSource;

    const index = data.findIndex((item) => item.id === id);

    data[index].status = 2;

    setDataSource([...data]);
  };

  const onDecline = (id) => {
    const data = dataSource;

    const index = data.findIndex((item) => item.id === id);

    data[index].status = 1;

    setDataSource([...data]);
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

export default Reddit;
