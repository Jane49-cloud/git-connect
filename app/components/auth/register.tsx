/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logoGc.jpeg";

const RegistrationForm: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Form Values: ", values);
    // Add your registration logic here
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
        name="username"
        label={<span className="text-white">Username</span>}
        rules={[{ required: true, message: "Please enter your username" }]}
      >
        <Input className="bg-gray-900 text-white border-gray-600" />
      </Form.Item>

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

      <Form.Item
        name="confirmPassword"
        label={<span className="text-white">Confirm Password</span>}
        dependencies={["password"]}
        rules={[
          { required: true, message: "Please confirm your password" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Passwords do not match"));
            },
          }),
        ]}
      >
        <Input.Password className="bg-gray-900 text-white border-gray-600" />
      </Form.Item>

      <Form.Item
        name="bio"
        label={<span className="text-white">Bio</span>}
        rules={[{ required: true, message: "Please enter your bio" }]}
      >
        <Input.TextArea
          rows={4}
          className="bg-gray-900 text-white border-gray-600"
        />
      </Form.Item>

      <Form.Item
        name="education"
        label={<span className="text-white">Education</span>}
        rules={[{ required: true, message: "Please enter your education" }]}
      >
        <Input
          placeholder="e.g., BSc in Computer Science"
          className="bg-gray-900 text-white border-gray-600"
        />
      </Form.Item>

      <Form.Item
        name="experience"
        label={<span className="text-white">Work Experience</span>}
        rules={[
          { required: true, message: "Please enter your work experience" },
        ]}
      >
        <Input
          placeholder="e.g., Frontend Developer at XYZ Company"
          className="bg-gray-900 text-white border-gray-600"
        />
      </Form.Item>

      <Form.Item
        name="repositories"
        label={<span className="text-white">GitHub Repositories</span>}
        rules={[
          { required: true, message: "Please enter your GitHub repositories" },
        ]}
      >
        <Input
          placeholder="e.g., https://github.com/janedoe/project"
          className="bg-gray-900 text-white border-gray-600"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="bg-blue-600 hover:bg-blue-700"
        >
          Register
        </Button>
        <div className="flex gap-2 my-2 mt-5 text-white">
          <p>Already have an account?</p>
          <Link href="/signin" className="text-blue-600 underline">
            Sign in
          </Link>
        </div>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
