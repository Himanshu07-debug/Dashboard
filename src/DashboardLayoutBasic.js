import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionIcon from '@mui/icons-material/Description';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { BsPersonWorkspace } from "react-icons/bs";
import { MdOutlineLeaderboard, MdOutlineFindInPage } from "react-icons/md";
import { RiAdvertisementFill, RiMetaLine, RiGift2Line } from "react-icons/ri";
import { FaRegNewspaper, FaVrCardboard } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

// Define navigation items
const NAVIGATION = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'workSpace',
    title: 'My WorkSpace',
    icon: <BsPersonWorkspace />,
    dropdown: [
      { title: 'Project A' },
      { title: 'Project B' },
      { title: 'Project C' },
    ],
  },
  {
    segment: 'transactions',
    title: 'Transactions',
    icon: <DescriptionIcon />,
  },
  {
    segment: 'leads',
    title: 'My Leads',
    icon: <MdOutlineLeaderboard />,
  },
  {
    segment: 'advertisments',
    title: 'Advertisements',
    icon: <RiAdvertisementFill />,
  },
  {
    segment: 'find',
    title: 'Title need to Find',
    icon: <MdOutlineFindInPage />,
    dropdown: [
      { title: 'Feed A' },
      { title: 'Feed B' },
      { title: 'Feed C' },
    ],
  },
  {
    segment: 'news',
    title: 'Properties News',
    icon: <FaRegNewspaper />,
  },
  {
    segment: 'ar',
    title: 'AR/VR',
    icon: <FaVrCardboard />,
  },
  {
    segment: 'meta',
    title: 'Metaverse',
    icon: <RiMetaLine />,
  },
  {
    segment: 'rewards',
    title: 'Rewards',
    icon: <RiGift2Line />,
  },
  {
    segment: 'settings',
    title: 'Settings',
    icon: <IoIosSettings />,
  },
];

// Sidebar styles
const SidebarContainer = styled('div')(({ theme, isMinimized }) => ({
  width: isMinimized ? '80px' : '280px',
  transition: 'width 0.3s ease',
  backgroundColor: theme.palette.background.paper,
  height: '85vh',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '15px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  marginTop: '10px',
  position: 'relative',
}));

// Sidebar header styles
const SidebarHeader = styled('div')(({ theme }) => ({
  padding: '16px',
  fontWeight: 'bold',
  fontSize: '18px',
  color: theme.palette.text.primary,
  textAlign: 'center',
}));

// Dropdown item styles
const DropdownItem = styled('div')(({ theme }) => ({
  padding: '8px 16px',
  margin: '4px 0',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function DashboardLayoutBasic(props) {
  const [isMinimized, setIsMinimized] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState({
    workSpace: false,
    find: false,
  });

  return (
    <div style={{ display: 'flex' }}>
      <SidebarContainer isMinimized={isMinimized}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {!isMinimized && (
            <SidebarHeader>
              Dashboard.Ltd
            </SidebarHeader>
          )}

          <IconButton
            onClick={() => setIsMinimized(!isMinimized)}
            style={{ margin: '8px', alignSelf: isMinimized ? 'center' : 'flex-end' }}
          >
            {isMinimized ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>

        {!isMinimized && (
          <nav>
            {NAVIGATION.map((item, index) => (
              <div key={index}>
                <div
                  style={{ display: 'flex', alignItems: 'center', margin: '14px', cursor: 'pointer' }}
                  onClick={() => {
                    if (item.segment === 'workSpace') {
                      setDropdownOpen((prev) => ({ ...prev, workSpace: !prev.workSpace }));
                    } else if (item.segment === 'find') {
                      setDropdownOpen((prev) => ({ ...prev, find: !prev.find }));
                    }
                  }} 
                >
                  {item.icon}
                  <span style={{ marginLeft: '8px', flexGrow: 1 }}>{item.title}</span>
                  {(item.segment === 'workSpace' || item.segment === 'find') && (
                    <IoIosArrowForward style={{ marginLeft: '8px', transition: 'transform 0.3s', transform: dropdownOpen[item.segment] ? 'rotate(90deg)' : 'rotate(0deg)', alignSelf: 'center' }} />
                  )}
                </div>

                {item.segment === 'workSpace' && dropdownOpen.workSpace && (
                  <div style={{ paddingLeft: '32px', margin: '4px 0' }}>
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <DropdownItem key={dropdownIndex}>
                        {dropdownItem.title}
                      </DropdownItem>
                    ))}
                  </div>
                )}
                {/* Render dropdown items for Time New to Feed */}
                {item.segment === 'find' && dropdownOpen.find && (
                  <div style={{ paddingLeft: '26px', margin: '1px 0' }}>
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <DropdownItem key={dropdownIndex}>
                        {dropdownItem.title}
                      </DropdownItem>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}

        {isMinimized && (
          <nav style={{ textAlign: 'center' }}>
            {NAVIGATION.map((item, index) => (
              <div key={index} style={{ margin: '8px 0' }}>
                {item.icon}
              </div>
            ))}
          </nav>
        )}
      </SidebarContainer>
    </div>
  );
}
