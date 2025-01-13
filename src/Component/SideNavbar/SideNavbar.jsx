import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import { MdSpaceDashboard } from "react-icons/md";
import { PiUserListFill } from "react-icons/pi";
import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SiGitconnected } from "react-icons/si";

const menuItems = [
  { key: '/', icon: <MdSpaceDashboard size={25} />, label: <Link to="/">Dashboard</Link> },
 
];

const SideNavBar = ({ isSidebarOpen, toggleSidebar }) => {
  const location = useLocation();
  const [openKeys, setOpenKeys] = useState([]);

  const handleOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  return (
    <div
      style={{
        width: '256px',
        height: '100vh',
        position: 'fixed',
        top: '0',
        left: isSidebarOpen ? '0' : '-256px',
        backgroundColor: '#fff',
        boxShadow: '2px 0px 10px rgba(0,0,0,0.1)',
        transition: 'left 0.3s ease',
        overflowY: 'auto',
        zIndex: '999',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 20px',
        }}
      >
       
        <button
          onClick={toggleSidebar}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            
          }}
        >
          <MenuOutlined />
        </button>
      </div>

      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
        style={{ width: '100%' }}
        items={menuItems}
      />
    </div>
  );
};

export default SideNavBar;
