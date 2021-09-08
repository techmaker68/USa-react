import Logo from "../Assets/logo.svg";
import DashboardIcon from "../Assets/icons/dashboard.svg";
import PaymentsIcon from "../Assets/icons/payments.svg";
import TenantsIcon from "../Assets/icons/tenants.svg";
import RequestsIcon from "../Assets/icons/requests.svg";
import ManagementIcon from "../Assets/icons/management.svg";
import ProfileIcon from "../Assets/icons/profile.svg";
import DownIcon from "../Assets/icons/downIcon.svg";
import {Menu, Dropdown} from "antd";
import {Link} from "react-router-dom";

// profile menu

const menu = (
  <Menu>
    <Menu.Item key='0'>
      <a href='https://www.antgroup.com'>Logout</a>
    </Menu.Item>
  </Menu>
);

// Use as parent wrapper. Render Sidebar, Top nav and Content of the page
const Index = ({children, title, currentPage}) => {
  // static nav links data
  const navLinks = [
    {title: "Dashboard", url: "/dashboard", icon: DashboardIcon},
    {title: "Payments", url: "/payments", icon: PaymentsIcon},
    {title: "Manage Tenants", url: "/manage-tenants", icon: TenantsIcon},
    {title: "Demo Requests", url: "/demo-requests", icon: RequestsIcon},
    {title: "User Management", url: "/user-management", icon: ManagementIcon},
  ];

  return (
    <div className='layout-wrapper'>
      <nav className='side-nav'>
        {
          // logo
        }
        <div className='logo'>
          <img src={Logo} alt='' />
        </div>
        {
          // nav links
        }
        <ul>
          {navLinks.map((link, index) => {
            return (
              <li
                key={link.title}
                className={currentPage === index ? "li-active" : ""}
              >
                <Link to={link.url}>
                  <img src={link.icon} alt='' /> {link.title}{" "}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className='flex-1'>
        <nav className='top-nav'>
          <div className='f-16 fw-600'>{title}</div>
          <Dropdown
            placement='bottomLeft'
            className='cursor-pointer'
            overlay={menu}
            trigger={["click"]}
          >
            <div className='dropdown-trigger'>
              <img src={ProfileIcon} alt='' />
              <span className='fw-500 f-12 color-primary username'>
                Muzamil Afridi
              </span>
              <img className='down-icon' src={DownIcon} alt='' />
            </div>
          </Dropdown>
        </nav>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Index;
