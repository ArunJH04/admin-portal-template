interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
  role?: number;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    role: 1
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
  },
  {
    name: 'Projects',
    url: '/components/projects',
    icon: 'icon-paper-clip',
    role: 1,
    children: [
      {
        name: 'Add Project',
        url: '/components/add-project',
        icon: 'icon-pencil'
      },
      {
        name: 'List Project',
        url: '/components/projects',
        icon: 'icon-list'
      }
    ]
  },
  {
    name: 'Talent',
    url: '/components/talents',
    icon: 'icon-bulb',
    role: 2,
    children: [
      {
        name: 'Add Talent',
        url: '/components/add-talent',
        icon: 'icon-pencil',
        children: [
          {
            name: 'Add Temp Staff',
            url: '/components/add-temp-staff',
            icon: 'icon-user-follow'
          },
          {
            name: 'Add Perm Hiring',
            url: '/components/add-perm-hire',
            icon: 'icon-user-follow'
          }
        ]
      },
      {
        name: 'List Talents',
        url: '/components/talents',
        icon: 'icon-list'
      }
    ]
  },
  {
    name: 'Reports',
    url: '/components/reports',
    icon: 'icon-docs',
    role: 2
  },
  {
    name: 'Master Data',
    url: '/components/master-data',
    icon: 'icon-briefcase',
    role: 1,
    children: [
      {
        name: 'Vendors',
        url: '/components/vendors',
        icon: 'icon-people',
        children: [
          {
            name: 'Add Vendor',
            url: '/components/add-vendor',
            icon: 'icon-pencil'
          },
          {
            name: 'List Vendor',
            url: '/components/vendors',
            icon: 'icon-list'
          }
        ]
      },
      {
        name: 'Business Unit',
        url: '/components/business',
        icon: 'icon-chart',
        children: [
          {
            name: 'Add Business',
            url: '/components/add-business',
            icon: 'icon-pencil'
          },
          {
            name: 'List Business',
            url: '/components/business',
            icon: 'icon-list'
          }
        ]
      },
      {
        name: 'Departments',
        url: '/components/departments',
        icon: 'icon-wallet',
        children: [
          {
            name: 'Add Department',
            url: '/components/add-department',
            icon: 'icon-pencil'
          },
          {
            name: 'List Department',
            url: '/components/departments',
            icon: 'icon-list'
          }
        ]
      },
      {
        name: 'LOB',
        url: '/components/lob',
        icon: 'icon-rocket',
        children: [
          {
            name: 'Add LOB',
            url: '/components/add-lob',
            icon: 'icon-pencil'
          },

          {
            name: 'List LOB',
            url: '/components/lobs',
            icon: 'icon-list'
          }
        ]
      },
      {
        name: 'Locations',
        url: '/components/locations',
        icon: 'icon-location-pin',
        children: [
          {
            name: 'Add Location',
            url: '/components/add-location',
            icon: 'icon-pencil'
          },
          {
            name: 'List Location',
            url: '/components/locations',
            icon: 'icon-list'
          }
        ]
      }
    ]
  },
  // {
  //   name: 'Users',
  //   url: '/components/users',
  //   icon: 'icon-pencil'
  // },

  // ,
  // {
  //   title: true,
  //   name: 'Components'
  // },
  // {
  //   name: 'Base',
  //   url: '/base',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Cards',
  //       url: '/base/cards',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Carousels',
  //       url: '/base/carousels',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Collapses',
  //       url: '/base/collapses',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Forms',
  //       url: '/base/forms',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Pagination',
  //       url: '/base/paginations',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Popovers',
  //       url: '/base/popovers',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Progress',
  //       url: '/base/progress',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Switches',
  //       url: '/base/switches',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tables',
  //       url: '/base/tables',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tabs',
  //       url: '/base/tabs',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tooltips',
  //       url: '/base/tooltips',
  //       icon: 'icon-puzzle'
  //     }
  //   ]
  // },
  // {
  //   name: 'Buttons',
  //   url: '/buttons',
  //   icon: 'icon-cursor',
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/buttons/buttons',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/buttons/dropdowns',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Brand Buttons',
  //       url: '/buttons/brand-buttons',
  //       icon: 'icon-cursor'
  //     }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   icon: 'icon-pie-chart'
  // },
  // {
  //   name: 'Icons',
  //   url: '/icons',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'CoreUI Icons',
  //       url: '/icons/coreui-icons',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'success',
  //         text: 'NEW'
  //       }
  //     },
  //     {
  //       name: 'Flags',
  //       url: '/icons/flags',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Font Awesome',
  //       url: '/icons/font-awesome',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'secondary',
  //         text: '4.7'
  //       }
  //     },
  //     {
  //       name: 'Simple Line Icons',
  //       url: '/icons/simple-line-icons',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   icon: 'icon-bell',
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Modals',
  //       url: '/notifications/modals',
  //       icon: 'icon-bell'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   icon: 'icon-calculator',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  {
    divider: true
  }
  // {
  //   title: true,
  //   name: 'Extras'
  // },
  // {
  //   name: 'Pages',
  //   url: '/pages',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Disabled',
  //   url: '/dashboard',
  //   icon: 'icon-ban',
  //   badge: {
  //     variant: 'secondary',
  //     text: 'NEW'
  //   },
  //   attributes: { disabled: true }
  // }
  // ,
  // {
  //   name: 'Download CoreUI',
  //   url: 'http://coreui.io/angular/',
  //   icon: 'icon-cloud-download',
  //   class: 'mt-auto',
  //   variant: 'success',
  //   attributes: { target: '_blank', rel: 'noopener' }
  // },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'http://coreui.io/pro/angular/',
  //   icon: 'icon-layers',
  //   variant: 'danger',
  //   attributes: { target: '_blank', rel: 'noopener' }
  // }
];
