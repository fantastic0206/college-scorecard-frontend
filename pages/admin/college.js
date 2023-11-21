import { Button, Table, Form, Modal, Input } from "antd";
import { useEffect, useState } from "react";
import { getDeviceType } from "library/helpers/get-device-type";
import { getAPIData, processAPIData } from "library/helpers/get-api-data";
import isEmpty from "is-empty";

const { useForm } = Form;

const College = (props) => {
  const { className, universityData, deviceType } = props;

  const form = useForm()[0];

  const [dataSource, setDataSource] = useState([]);

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
      key: "title",
      dataIndex: "title",
    },
    {
      title: "Address",
      key: "statePlace",
      dataIndex: "statePlace",
    },
    {
      title: "State",
      key: "state",
      dataIndex: "state",
    },
    {
      title: "City",
      key: "city",
      dataIndex: "city",
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

  useEffect(() => {
    if (!isEmpty(universityData)) {
      const temp = [];

      universityData.map((item, index) => {
        item.no = index + 1;

        temp.push(item);
      });

      setDataSource(temp);
    } else setDataSource(universityData);
  }, [universityData]);

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
          <Form.Item name="title" children={<Input />} />
          <Form.Item name="mark" children={<Input />} />
          <Form.Item name="reviews" children={<Input />} />
          <Form.Item name="statePlace" children={<Input />} />
          <Form.Item name="state" children={<Input />} />
          <Form.Item name="year" children={<Input />} />
          <Form.Item name="public" children={<Input />} />
          <Form.Item name="city" children={<Input />} />
          <Form.Item name="students" children={<Input />} />
          <Form.Item name="description" children={<Input />} />
          <Form.Item name="median_earning" children={<Input />} />
          <Form.Item name="monthly_earning" children={<Input />} />
          <Form.Item name="graduates" children={<Input />} />
          <Form.Item name="graduation_rate" children={<Input />} />
          <Form.Item name="average_annual_cost" children={<Input />} />
          <Form.Item name="user_score" children={<Input />} />
        </Form>
      </Modal>
    </div>
  );
};

export default College;

export async function getServerSideProps(context) {
  const { req } = context;
  const apiUrl = [
    {
      endpoint: "university",
      name: "listingUniversity",
    },
  ];
  const pageData = await getAPIData(apiUrl);
  const universityData = processAPIData(pageData);
  const deviceType = getDeviceType(req);
  return {
    props: { universityData, deviceType },
  };
}
