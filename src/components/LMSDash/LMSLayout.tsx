// Layout.tsx
import React from 'react';
import SideNav from './SideNav';

const Layout: React.FC = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '2px', flexShrink: 0, paddingTop: '100px' }}>
        <SideNav />
      </div>
      <div style={{ padding: '20px' }}>
        {children}
      </div> 
    </div>
  );
};

export default Layout;
