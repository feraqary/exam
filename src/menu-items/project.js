// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconApps, IconUserCheck, IconBasket, IconMessages, IconLayoutKanban, IconMail, IconCalendar, IconNfc } from '@tabler/icons';

// constant
const icons = {
  IconApps,
  IconUserCheck,
  IconBasket,
  IconMessages,
  IconLayoutKanban,
  IconMail,
  IconCalendar,
  IconNfc
};

// ==============================|| Project MENU ITEMS ||============================== //

const project = {
  id: 'Project',
  title: <FormattedMessage id="Project" />,
  icon: icons.IconApps,
  type: 'group',
  children: [
    {
      id: 'add-project',
      title: <FormattedMessage id="Add Project" />,
      type: 'item',
      icon: icons.IconUserCheck,
      url: '/project/add_project'
    },
    {
      id: 'manage-projects',
      title: <FormattedMessage id="Manage Projects" />,
      type: 'collapse',
      icon: icons.IconUserCheck,
      children: [
        {
          id: 'local',
          title: <FormattedMessage id="Local Projects" />,
          type: 'item',
          url: '/src/pages/project/'
        },
        {
          id: 'international',
          title: <FormattedMessage id="International Projects" />,
          type: 'item'
        },
        {
          id: 'company-types',
          title: <FormattedMessage id="Manage Company Types" />,
          caption: 'Manage Company Types',
          type: 'item',
          icon: icons.IconMessages,
          url: '/app/chat'
        }
      ]
    },
    {
      id: 'manage-subscriptions',
      title: <FormattedMessage id=" Manage Subscriptions" />,
      type: 'collapse',
      icon: icons.IconBasket,
      children: [
        {
          id: 'add-subscription',
          title: <FormattedMessage id="Add Subscriptions" />,
          type: 'item',
          url: '/app/customer/customer-list',
          breadcrumbs: false
        },
        {
          id: 'active',
          title: <FormattedMessage id="View Active Subscriptions" />,
          type: 'item',
          url: '/app/customer/order-list',
          breadcrumbs: false
        },
        {
          id: 'pending',
          title: <FormattedMessage id="View Pending Subscriptions" />,
          type: 'item',
          url: '/app/customer/create-invoice',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'payments',
      title: 'Payments',
      type: 'item',
      icon: icons.IconLayoutKanban,
      url: '/app/kanban/board'
    },
    {
      id: 'second-phase',
      title: <FormattedMessage id="Second Phase Upload" />,
      type: 'item',
      icon: icons.IconMail,
      url: '/app/mail'
    },
    {
      id: 'blocked',
      title: <FormattedMessage id="View Blocked Companies" />,
      type: 'item',
      url: '/app/calendar',
      icon: icons.IconCalendar,
      breadcrumbs: false
    },
    {
      id: 'previliges',
      title: <FormattedMessage id="Company Previliges" />,
      type: 'item',
      icon: icons.IconNfc
    },
    {
      id: 'activities',
      title: <FormattedMessage id="Activities" />,
      type: 'item',
      icon: icons.IconBasket
    }
  ]
};

export default project;
