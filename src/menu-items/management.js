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
  title: <FormattedMessage id="Management" />,
  icon: icons.IconPictureInPicture,
  type: 'group',
  children: [
    {
      id: 'add-user',
      title: <FormattedMessage id="Add user" />,
      type: 'item',
      icon: icons.IconPictureInPicture
    },
    {
      id: 'manage-management',
      title: <FormattedMessage id="Manage" />,
      type: 'collapse',
      icon: icons.IconForms,
      children: [
        {
          id: 'manage-users',
          title: <FormattedMessage id="Users" />,
          type: 'item',
          url: '/exchange/manage-units',
          breadcrumbs: false
        },
        {
          id: 'manage-user-roles',
          title: <FormattedMessage id="User Roles" />,
          type: 'item',
          url: '/exchange/manage-units',
          breadcrumbs: false
        },
        {
          id: 'manage-deparment',
          title: <FormattedMessage id="Department" />,
          type: 'item',
          url: '/exchange/manage-units',
          breadcrumbs: false
        },
        {
          id: 'delete-user',
          title: <FormattedMessage id="Delete User" />,
          type: 'item',
          url: '/exchange/manage-units',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'activities',
      title: <FormattedMessage id="Activities" />,
      type: 'item',
      icon: icons.IconBorderAll
    }
  ]
};

export default management;
