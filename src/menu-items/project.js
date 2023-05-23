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
          url: '/project/local_project'
        },
        {
          id: 'international',
          title: <FormattedMessage id="International Projects" />,
          type: 'item',
          url: '/project/int_project'
        },
        {
          id: 'shared-projects',
          title: <FormattedMessage id="Shared Projects" />,
          type: 'item',
          url: '/project/shared_project'
        }
      ]
    },
    {
      id: 'deleted-projects',
      title: <FormattedMessage id="Deleted Projects" />,
      type: 'item',
      icon: icons.IconBasket,
      url: '/project/del_project'
    },
    {
      id: 'promotions',
      title: 'Promotions',
      type: 'item',
      icon: icons.IconLayoutKanban,
      url: '/project/promotions'
    },
    {
      id: 'manage-requests',
      title: <FormattedMessage id="Manage Requests" />,
      type: 'item',
      icon: icons.IconMail,
      url: '/project/manage_requests'
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
