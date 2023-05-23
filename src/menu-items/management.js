// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconClipboardCheck, IconPictureInPicture, IconForms, IconBorderAll, IconChartDots, IconStairsUp } from '@tabler/icons';

// constant
const icons = {
  IconClipboardCheck,
  IconPictureInPicture,
  IconForms,
  IconBorderAll,
  IconChartDots,
  IconStairsUp
};

// ==============================|| UI FORMS MENU ITEMS ||============================== //

const management = {
  id: 'management',
  title: <FormattedMessage id="management" />,
  icon: icons.IconPictureInPicture,
  type: 'group',
  children: [
    {
      id: 'add_user',
      title: <FormattedMessage id="Add User" />,
      type: 'item',
      icon: icons.IconPictureInPicture,
      url: '/management/add_user'
    },
    {
      id: 'manage-management',
      title: <FormattedMessage id="manage" />,
      type: 'collapse',
      icon: icons.IconForms,
      children: [
        {
          id: 'manage-users',
          title: <FormattedMessage id="users" />,
          type: 'item',
          url: '/management/manage_user',
          breadcrumbs: false
        },
        {
          id: 'manage-user-roles',
          title: <FormattedMessage id="user-roles" />,
          type: 'item',
          url: '/management/user_roles',
          breadcrumbs: false
        },
        {
          id: 'manage-deparment',
          title: <FormattedMessage id="department" />,
          type: 'item',
          url: '/managament/manage_deparment',
          breadcrumbs: false
        },
        {
          id: 'delete-user',
          title: <FormattedMessage id="delete-user" />,
          type: 'item',
          url: '/managament/deleted_user',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'activities',
      title: <FormattedMessage id="activities" />,
      type: 'item',
      icon: icons.IconBorderAll,
      url: ' /managament/activities'
    }
  ]
};

export default management;
