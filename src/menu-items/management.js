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
      id: 'add-user',
      title: <FormattedMessage id="add-user" />,
      type: 'item',
      icon: icons.IconPictureInPicture
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
          url: '/exchange/manage-units',
          breadcrumbs: false
        },
        {
          id: 'manage-user-roles',
          title: <FormattedMessage id="user-roles" />,
          type: 'item',
          url: '/exchange/manage-units',
          breadcrumbs: false
        },
        {
          id: 'manage-deparment',
          title: <FormattedMessage id="department" />,
          type: 'item',
          url: '/exchange/manage-units',
          breadcrumbs: false
        },
        {
          id: 'delete-user',
          title: <FormattedMessage id="delete-user" />,
          type: 'item',
          url: '/exchange/manage-units',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'activities',
      title: <FormattedMessage id="activities" />,
      type: 'item',
      icon: icons.IconBorderAll
    }
  ]
};

export default management;
