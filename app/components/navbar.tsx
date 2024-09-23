"use client";
import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Button, Dropdown, Menu } from "antd";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logoGc.jpeg";

const Navbar: React.FC = () => {
  const user = "jane doe"; // Replace with actual user authentication logic
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="profile">
        <Link href="/profile" onClick={onClose}>
          Profile
        </Link>
      </Menu.Item>
      <Menu.Item key="logout">
        <Link href="/logout" onClick={onClose}>
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center justify-center">
        <Image
          className="w-12 h-full object-cover z-10 rounded-full"
          src={Logo}
          alt="Hero Banner"
        />

        <h1 className="text-3xl font-bold text-blue-600">GitConnect</h1>
      </div>

      <div className="hidden md:flex space-x-4">
        <Link href="/" className="hover:text-gray-400">
          Dashboard
        </Link>
        <Link href="/posts" className="hover:text-gray-400">
          Posts
        </Link>
        <Link href="/users" className="hover:text-gray-400">
          users
        </Link>
        <Link href="/settings" className="hover:text-gray-400">
          Settings
        </Link>
      </div>
      <Button
        className="md:hidden"
        type="text"
        icon={<MenuOutlined />}
        onClick={showDrawer}
      />
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
        className="md:hidden"
      >
        <Link href="/" className="block p-2" onClick={onClose}>
          Dashboard
        </Link>
        <Link href="/posts" className="block p-2" onClick={onClose}>
          Posts
        </Link>
        <Link href="/users" className="block p-2" onClick={onClose}>
          users
        </Link>
        <Link href="/settings" className="block p-2" onClick={onClose}>
          Settings
        </Link>
      </Drawer>
      <div className="md:flex md:items-center">
        {user ? (
          <Dropdown overlay={userMenu} trigger={["click"]}>
            <Button className="hover:text-gray-400">{user}</Button>
          </Dropdown>
        ) : (
          <>
            <Link href="/signin">
              <Button className="mr-2">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button type="primary">Get Started</Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
