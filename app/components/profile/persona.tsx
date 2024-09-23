/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const ProfilePage: React.FC = () => {
  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (values: any) => {
    console.log("Updated Profile: ", values);
    setIsEditing(false);
    // Add your profile update logic here
  };

  return (
    <Form form={form} onFinish={handleSubmit} layout="vertical">
      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true, message: "Please enter your username" }]}
      >
        <Input disabled={!isEditing} />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            type: "email",
            message: "Please enter a valid email",
          },
        ]}
      >
        <Input disabled={!isEditing} />
      </Form.Item>

      <Form.Item
        name="bio"
        label="Bio"
        rules={[{ required: true, message: "Please enter your bio" }]}
      >
        <Input.TextArea disabled={!isEditing} rows={4} />
      </Form.Item>

      {isEditing ? (
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
          <Button
            type="default"
            onClick={handleEdit}
            style={{ marginLeft: 10 }}
          >
            Cancel
          </Button>
        </Form.Item>
      ) : (
        <Form.Item>
          <Button type="primary" onClick={handleEdit}>
            Edit Profile
          </Button>
        </Form.Item>
      )}
    </Form>
  );
};

export default ProfilePage;
