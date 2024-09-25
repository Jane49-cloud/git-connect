/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Form, Input, Button, Avatar, Divider, Typography } from "antd";

const { Text } = Typography;

const dummyData = {
  username: "JaneDoe",
  email: "jane.doe@example.com",
  bio: "Full Stack Developer with a passion for building web applications.",
  education: [
    {
      degree: "BSc in Computer Science",
      institution: "XYZ University",
      year: "2020",
    },
    {
      degree: "MSc in Software Engineering",
      institution: "ABC University",
      year: "2022",
    },
  ],
  experience: [
    {
      position: "Frontend Developer",
      company: "Tech Solutions",
      year: "2021 - Present",
    },
    {
      position: "Intern Developer",
      company: "Web Innovations",
      year: "2020 - 2021",
    },
  ],
  repositories: [
    {
      name: "AwesomeProject",
      url: "https://github.com/janedoe/awesomeproject",
    },
    { name: "AnotherRepo", url: "https://github.com/janedoe/anotherrepo" },
  ],
};

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
    <div className="max-w-7xl mx-auto p-5 py-10">
      <div className="flex items-center mb-5">
        <Avatar size={64} src="https://via.placeholder.com/64" />
        <div className="ml-4">
          <Text className="text-xl font-semibold">{dummyData.username}</Text>
          <Text className="text-gray-500 block">{dummyData.email}</Text>
        </div>
      </div>

      <Divider />

      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Form.Item
          name="username"
          label="Username"
          initialValue={dummyData.username}
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input disabled={!isEditing} />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          initialValue={dummyData.email}
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
          initialValue={dummyData.bio}
          rules={[{ required: true, message: "Please enter your bio" }]}
        >
          <Input.TextArea disabled={!isEditing} rows={4} />
        </Form.Item>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Education</h3>
          {dummyData.education.map((edu, index) => (
            <div key={index}>
              <Text>
                {edu.degree} - {edu.institution} ({edu.year})
              </Text>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Work Experience</h3>
          {dummyData.experience.map((exp, index) => (
            <div key={index}>
              <Text>
                {exp.position} at {exp.company} ({exp.year})
              </Text>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">GitHub Repositories</h3>
          {dummyData.repositories.map((repo, index) => (
            <div key={index}>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                {repo.name}
              </a>
            </div>
          ))}
        </div>

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
    </div>
  );
};

export default ProfilePage;
