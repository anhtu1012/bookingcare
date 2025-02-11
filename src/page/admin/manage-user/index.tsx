import { Form, Input, Radio, Select } from "antd";
import { useState } from "react";
import ManageTemplate from "../../../components/ManageDashboard";
import { formatDistanceToNow } from "date-fns";

function ManageAccount() {
  const title = "Account";
  const [loginError, setLoginError] = useState("");

  const handleError = (message: string) => {
    setLoginError(message); // Cập nhật thông tin lỗi
  };
  const formItem = (
    <>
      <Form.Item
        name="gender"
        rules={[{ required: true, message: "Vui lòng chọn giới tính!" }]}
        validateStatus={loginError ? "error" : ""}
      >
        <Radio.Group>
          <Radio value="M">Nam</Radio>
          <Radio value="F">Nữ</Radio>
          <Radio value="O">Khác</Radio>
        </Radio.Group>
      </Form.Item>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Form.Item
          name="firstName"
          rules={[{ required: true, message: "Vui lòng nhập Tên!" }]}
          validateStatus={loginError ? "error" : ""}
        >
          <Input
            className="input"
            style={{ width: "225px" }}
            placeholder="First Name"
          />
        </Form.Item>
        <Form.Item
          name="lastName"
          rules={[{ required: true, message: "Vui lòng nhập Họ!" }]}
          validateStatus={loginError ? "error" : ""}
        >
          <Input
            className="input"
            style={{ width: "225px" }}
            placeholder="Last Name"
          />
        </Form.Item>
      </div>

      <Form.Item
        name="email"
        rules={[
          { type: "email", message: "E-mail không hợp lệ" },
          { required: true, message: "Vui lòng nhập E-mail!" },
        ]}
        help={loginError}
        validateStatus={loginError ? "error" : ""}
      >
        <Input className="input" placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          { required: true, message: "Vui lòng nhập mật khẩu!" },
          {
            pattern: new RegExp("^(?=.*[A-Za-z])(?=.*\\d).{8,}$"),
            message:
              "Mật khẩu phải dài ít nhất 8 ký tự, một chữ số và một chữ cái.",
          },
        ]}
        hasFeedback
      >
        <Input.Password className="inputpass" placeholder="Password" />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        dependencies={["password"]}
        rules={[
          { required: true, message: "Nhập lại mật khẩu!!!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Mật khẩu không hợp lệ!"));
            },
          }),
        ]}
      >
        <Input.Password className="inputpass" placeholder="Confirm Password" />
      </Form.Item>

      <Form.Item
        name="address"
        rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
        validateStatus={loginError ? "error" : ""}
      >
        <Input className="input" placeholder="Address" />
      </Form.Item>

      <Form.Item
        name="phoneNumber"
        rules={[
          { required: true, message: "Vui lòng nhập số điện thoại!" },
          {
            pattern: new RegExp("^[0-9]{10,15}$"),
            message: "Số điện thoại không hợp lệ!",
          },
        ]}
        validateStatus={loginError ? "error" : ""}
      >
        <Input className="input" placeholder="Phone Number" />
      </Form.Item>
      <Form.Item
        name="positionId"
        rules={[{ required: true, message: "Vui lòng chọn chức danh!" }]}
        validateStatus={loginError ? "error" : ""}
      >
        <Select placeholder="Position">
          <Select.Option value="P0">Bác sĩ</Select.Option>
          <Select.Option value="P1">Thạc sĩ</Select.Option>
          <Select.Option value="P2">Tiến sĩ</Select.Option>
          <Select.Option value="P3">Phó giáo sư</Select.Option>
          <Select.Option value="P4">Giáo sư</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="roleId"
        rules={[{ required: true, message: "Vui lòng chọn vai trò!" }]}
        validateStatus={loginError ? "error" : ""}
      >
        <Select placeholder="Role">
          <Select.Option value="R1">Admin</Select.Option>
          <Select.Option value="R2">Doctor</Select.Option>
          <Select.Option value="R3">Patient</Select.Option>
        </Select>
      </Form.Item>
    </>
  );
  const columns = [
    {
      title: "firstName",
      dataIndex: "firstName",
      key: "firstName",
      align: "center",
    },
    {
      title: "lastName",
      dataIndex: "lastName",
      key: "lastName",
      align: "center",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },

    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      align: "center",
    },
    {
      title: "Role",
      dataIndex: "roleId",
      key: "roleId",
      align: "center",
    },
    // {
    //   title: "UpdateAt",
    //   dataIndex: "updatedAt",
    //   key: "updatedAt",
    //   align: "center",
    //   render: (updatedAt) => (
    //     <p>{moment(updatedAt).format("YYYY-MM-DD HH:mm:ss")}</p>
    //   ),
    // },
    {
      title: "Create At",
      dataIndex: "createdAt",
      key: "createdAt",
      align: "center",
      render: (createdAt) => {
        return formatDistanceToNow(new Date(createdAt), { addSuffix: true });
      },
    },
  ];

  return (
    <div>
      <ManageTemplate
        columns={columns}
        title={title}
        formItems={formItem}
        apiURI="account"
        onError={handleError}
      />
    </div>
  );
}

export default ManageAccount;
