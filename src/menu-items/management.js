// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  IconClipboardCheck,
  IconPictureInPicture,
  IconForms,
  IconBorderAll,
  IconChartDots,
  IconUserX,
  IconUserExclamation,
  IconStairsUp,
  IconUserPlus,
  IconUserCircle,
  IconPerspective
} from '@tabler/icons';
import { Adjustments } from 'tabler-icons-react';
// constant
const icons = {
  IconClipboardCheck,
  IconPictureInPicture,
  IconForms,
  IconBorderAll,
  IconChartDots,
  IconStairsUp,
  IconUserPlus,
  IconUserCircle,
  IconUserExclamation,
  IconUserX,
  IconPerspective
};

// ==============================|| UI FORMS MENU ITEMS ||============================== //
const items = 'dashboard.menuItems.management';

const management = {
  id: 'management',
  title: <FormattedMessage id={items + '.management'} />,
  icon: <Adjustments size={23} strokeWidth={1.5} color={'black'} style={{ marginRight: '10px' }} />,
  type: 'group',
  children: [
    {
      id: 'add_user',
      title: <FormattedMessage id={items + '.addUser'} />,
      type: 'item',
      icon: icons.IconUserPlus,
      url: '/dashboard/management/add_user'
    },
    {
      id: 'manage-users',
      title: <FormattedMessage id={items + '.manageUsers'} />,
      type: 'item',
      icon: icons.IconUserCircle,
      url: '/dashboard/management/manage_user'
    },
    {
      id: 'manage-user-roles',
      title: <FormattedMessage id={items + '.manageUserRoles'} />,
      type: 'item',
      icon: icons.IconUserExclamation,
      url: '/dashboard/management/user_roles'
    },
    {
      id: 'manage-deparment',
      title: <FormattedMessage id={items + '.manageDepartment'} />,
      icon: icons.IconPerspective,
      type: 'item',
      url: '/dashboard/management/manage_department'
    },
    {
      id: 'deleted-users',
      title: <FormattedMessage id={items + '.manageDeletedUsers'} />,
      type: 'item',
      icon: icons.IconUserX,
      url: '/dashboard/management/deleted_users'
    },
    {
      id: 'management-activities',
      title: <FormattedMessage id={items + '.activities'} />,
      type: 'item',
      icon: icons.IconBorderAll,
      url: '/dashboard/management/activities'
    }
  ]
};

export default management;
