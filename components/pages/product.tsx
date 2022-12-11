import { FC, useMemo, useState } from "react";
import {
  Button,
  Col,
  DatePicker,
  Descriptions,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Table,
  Tag,
} from "antd";

const { RangePicker } = DatePicker;

import { ShoppingOutlined, RollbackOutlined } from "@ant-design/icons";
import { useProduct } from "../../hooks/useProduct";
import dayjs from "dayjs";
interface IProductTable {
  data: any;
  isLoading: boolean;
}
export const ProductTable: FC<IProductTable> = ({
  data,
  isLoading,
}: IProductTable) => {
  const columns = [
    {
      title: "#",
      render: (_: any, __: any, index: number) => {
        return <span>{index + 1}</span>;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Availability",
      dataIndex: "availability",
      key: "availability",
      render: (_: any, { availability }: any) => (
        <span>{availability ? "Yes" : "No"}</span>
      ),
    },
    {
      title: "Need To Repair",
      dataIndex: "needing_repair",
      key: "needing_repair",
      render: (_: any, { needing_repair }: any) => (
        <span>{needing_repair ? "Yes" : "No"}</span>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];
  return (
    <Table
      style={{ marginTop: "15px" }}
      loading={isLoading}
      size="small"
      columns={columns}
      dataSource={data}
    />
  );
};

interface IProductAction {
  bookHandler: any;
  returnHandler: any;
}

export const ProductAction: FC<IProductAction> = ({
  bookHandler,
  returnHandler,
}: IProductAction) => {
  const columns = [
    {
      title: "#",
      render: (_: any, __: any, index: number) => {
        return <span>{index + 1}</span>;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Availability",
      dataIndex: "availability",
      key: "availability",
      render: (_: any, { availability }: any) => (
        <span>{availability ? "Yes" : "No"}</span>
      ),
    },
    {
      title: "Need To Repair",
      dataIndex: "needing_repair",
      key: "needing_repair",
      render: (_: any, { needing_repair }: any) => (
        <span>{needing_repair ? "Yes" : "No"}</span>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];
  return (
    <Row justify="space-between">
      <Col span={8}>
        <Input placeholder="search" />
      </Col>
      <Col>
        <Space>
          <Button
            type="default"
            icon={<ShoppingOutlined />}
            onClick={bookHandler}
          >
            Book
          </Button>
          <Button
            type="default"
            icon={<RollbackOutlined />}
            onClick={returnHandler}
          >
            Return
          </Button>
        </Space>
      </Col>
    </Row>
  );
};
interface IModal {
  modal: {
    open: boolean;
    type: string;
  };
  closeModal: any;
}
export const ProductModal: FC<IModal> = ({ modal, closeModal }: IModal) => {
  const { bookProduct } = useProduct();
  const [form] = Form.useForm();
  const columns = [
    {
      title: "#",
      render: (_: any, __: any, index: number) => {
        return <span>{index + 1}</span>;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Availability",
      dataIndex: "availability",
      key: "availability",
      render: (_: any, { availability }: any) => (
        <span>{availability ? "Yes" : "No"}</span>
      ),
    },
    {
      title: "Need To Repair",
      dataIndex: "needing_repair",
      key: "needing_repair",
      render: (_: any, { needing_repair }: any) => (
        <span>{needing_repair ? "Yes" : "No"}</span>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];
  return (
    <Modal
      title={modal.type === "book" ? "Book" : "Return"}
      centered
      open={modal.open}
      onOk={() => {
        form.validateFields().then((values) => {
          form.resetFields();
          modal.type === "book" && bookProduct(values);
          //   onCreate(values);
        });
      }}
      onCancel={closeModal}
    >
      {modal.type === "book" && <Book form={form} />}
    </Modal>
  );
};

const ProductInfo = ({ productInfo }: any) => {
  const { product, days } = productInfo;
  return (
    <Tag
      color={product?.availability ? "blue" : "red"}
      style={{ marginRight: 0 }}
    >
      <Descriptions title="Product Info">
        <Descriptions.Item label="Name" span={2}>
          {product?.name}
        </Descriptions.Item>
        <Descriptions.Item label="Type" span={1}>
          {product?.type}
        </Descriptions.Item>
        <Descriptions.Item label="Availability">
          {product?.availability ? "Yes" : "No"}
        </Descriptions.Item>
        <Descriptions.Item label="Minimun period">
          {product?.minimum_rent_period}
        </Descriptions.Item>
        <Descriptions.Item label="Discount">
          {product?.discount || 0}
        </Descriptions.Item>
        <Descriptions.Item label="Price">{product?.price}</Descriptions.Item>
        <Descriptions.Item label="Days">{days}</Descriptions.Item>
        <Descriptions.Item label="Total">
          {days * product?.price}
        </Descriptions.Item>
      </Descriptions>
    </Tag>
  );
};

const Book = ({ form }: any) => {
  const { products } = useProduct();
  const productMap = useMemo(() => {
    return products.reduce((acc: any, item: any) => {
      acc[item.code] = item;
      return acc;
    }, {});
  }, [products]);
  const [productInfo, setProductInfo] = useState({});

  const onValuesChange = (value: any, values: any) => {
    setProductInfo({
      product: productMap[values.product],
      days: values.rentPeriod
        ? dayjs(values.rentPeriod[1]["$d"]).diff(
            dayjs(values.rentPeriod[0]["$d"]),
            "d"
          )
        : 0,
    });
  };
  return (
    <Form
      form={form}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={() => {}}
      onFinishFailed={() => {}}
      autoComplete="off"
      layout="vertical"
      onValuesChange={onValuesChange}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Product"
            name="product"
            rules={[{ required: true, message: "Please select a product" }]}
          >
            <Select
              placeholder="Select a product"
              options={products}
              fieldNames={{
                label: "name",
                value: "code",
              }}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Rent Period"
            name="rentPeriod"
            rules={[{ required: true, message: "Please enter date" }]}
          >
            <RangePicker />
          </Form.Item>
        </Col>
      </Row>
      <ProductInfo productInfo={productInfo} />
    </Form>
  );
};
