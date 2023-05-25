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
          title: <FormattedMessage id="Mangage Users" />,
          type: 'item',
          url: '/management/manage_user'
        },
        {
          id: 'manage-user-roles',
          title: <FormattedMessage id="Mangage User Roles" />,
          type: 'item',
          url: '/management/user_roles'
        },
        {
          id: 'manage-deparment',
          title: <FormattedMessage id="Mangage Department" />,
          type: 'item',
          url: '/management/manage_department'
        },
        {
          id: 'deleted-users',
          title: <FormattedMessage id="Mangage Deleted Users" />,
          type: 'item',
          url: '/management/deleted_users'
        }
      ]
    },
    {
      id: 'activities',
      title: <FormattedMessage id="activities" />,
      type: 'item',
      icon: icons.IconBorderAll,
      url: ' /management/activities'
    }
  ]
};

export default management;
