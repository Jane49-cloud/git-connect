/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logoGc.jpeg";

const LoginForm: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Form Values: ", values);
    // Add your login logic here
  };

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      layout="vertical"
      className="max-w-3xl mx-auto border border-gray-700 bg-gray-800 shadow-md p-5 py-20 min-h-[50vh] rounded"
    >
      <div className="flex items-center justify-center gap-2">
        <Image
          className="w-12 h-full object-cover z-10 rounded-full"
          src={Logo}
          alt="Hero Banner"
        />

        <h1 className="text-3xl font-bold text-blue-600">GitConnect</h1>
      </div>
      <Form.Item
        name="email"
        label={<span className="text-white">Email</span>}
        rules={[
          {
            required: true,
            type: "email",
            message: "Please enter a valid email",
          },
        ]}
      >
        <Input className="bg-gray-900 text-white border-gray-600" />
      </Form.Item>

      <Form.Item
        name="password"
        label={<span className="text-white">Password</span>}
        rules={[{ required: true, message: "Please enter your password" }]}
      >
        <Input.Password className="bg-gray-900 text-white border-gray-600" />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="bg-blue-600 hover:bg-blue-700"
        >
          Login
        </Button>
        <div className="flex gap-2 text-white py-2 mt-5">
          <p>Do not have an account ?</p>
          <Link href="/signup" className="text-blue-600 underline">
            Sign up
          </Link>
        </div>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
