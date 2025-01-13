import React from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Navbar } from 'react-bootstrap';

const Header = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div>
    <Navbar bg="light" expand="lg" className="shadow-md">
      <div className="container flex justify-between items-center py-2">
        {/* Sidebar Menu Button (Visible only when Sidebar is hidden) */}
        {!isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="text-xl text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out lg:block"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '24px',
              position: 'absolute',
              left: '10px',
            }}
          >
            <MenuOutlined />
          </button>
        )}

        {/* Right-aligned section with user info and logout button */}
        <Navbar.Collapse id="basic-navbar-nav" className="lg:flex lg:justify-between lg:w-auto flex-grow">
          <div className="flex items-center ml-auto space-x-4">
           
        header
            
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>

  
  </div>
  );
};

export default Header;
