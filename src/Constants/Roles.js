export const RolesTreeData = [
  {
    title: "Dashboard",
    key: "dashboard",
  },
  {
    title: "Payments",
    key: "payments",
    children: [
      {
        title: "View Payments",
        key: "payments:all",
      },
      {
        title: "Create Payment",
        key: "payments:create",
      },
      {
        title: "Payment Details",
        key: "payments:detail",
      },
    ],
  },
  {
    title: "Manage Tenants",
    key: "manageTenants",
    children: [
      {title: "Register Tenant", key: "tenants:create"},
      {title: "View Tenant", key: "tenants:all"},
      {title: "Update Tenant", key: "tenants:update"},
      {title: "Upgrade plan", key: "tenants:upgradeplan"},
      {title: "Disable Tenant", key: "tenants:disable"}, // active - inactive
    ],
  },
  {
    title: "Demo Requests",
    key: "demoRequests",
    children: [
      {title: "View Requests", key: "demorequests:all"},
      {title: "Request Detail", key: "demorequests:detail"},
      {title: "Change Request Status", key: "demorequests:changestatus"},
      {title: "Extend Date", key: "demorequests:extenddate"},
    ],
  },
  {
    title: "Users Management",
    key: "usersManagement",
    children: [
      {
        title: "Manage Users",
        key: "manageUsers",
        children: [
          {title: "View Users", key: "users:all"},
          {title: "User Details", key: "users:detail"},
          {title: "Create User", key: "users:create"},
          {title: "Update User", key: "users:update"},
        ],
      },
      {
        title: "Manage Roles",
        key: "manageRoles",
        children: [
          {title: "View Role", key: "roles:all"},
          {title: "Role Detail", key: "roles:detail"},
          {title: "Create Role", key: "roles:create"},
          {title: "Update Role", key: "roles:update"},
        ],
      },
    ],
  },

  {
    title: "Plans",
    key: "plans",
    children: [
      {title: "View Plans", key: "plans:all"},
      {title: "Plan Detail", key: "plans:detail"},
      {title: "Create Plan", key: "plans:create"},
      {title: "Update Plan", key: "plans:update"},
    ],
  },
  {
    title: "Configurations",
    key: "configurations",
    children: [
      {title: "General Settings", key: "configuration:detail"},
      {title: "Update General Settings", key: "configuration:update"},
    ],
  },
  {
    title: "Business Details",
    key: "businessDetails",
    children: [
      {title: "Business Details", key: "businessinfo:detail"},
      {title: "Update Business Details", key: "businessinfo:update"},
    ],
  },
];
