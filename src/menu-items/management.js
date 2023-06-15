// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconClipboardCheck, IconPictureInPicture, IconForms, IconBorderAll, IconChartDots,IconUserX,IconUserExclamation, IconStairsUp, IconUserPlus, IconUserCircle, IconPerspective} from '@tabler/icons';
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

const management = {
  id: 'management',
  title: <FormattedMessage id="management" />,
  icon: <Adjustments size={23} strokeWidth={1.5} color={'black'} style={{ marginRight: '10px' }} />,
  type: 'group',
  children: [
    {
      id: 'add_user',
      title: <FormattedMessage id="Add User" />,
      type: 'item',
      icon: icons.IconUserPlus,
      url: '/management/add_user'
    },
    {
      id: 'manage-users',
      title: <FormattedMessage id="Manage Users" />,
      type: 'item',
      icon: icons.IconUserCircle,
      url: '/management/manage_user'
      
    },
    {
      id: 'manage-user-roles',
      title: <FormattedMessage id="Manage User Roles" />,
      type: 'item',
      icon: icons.IconUserExclamation,
      url: '/management/user_roles'
    },
    {
      id: 'manage-deparment',
      title: <FormattedMessage id="Manage Department" />,
      icon: icons.IconPerspective,
      type: 'item',
      url: '/management/manage_department'
    },
    {
      id: 'deleted-users',
      title: <FormattedMessage id="Manage Deleted Users" />,
      type: 'item',
      icon: icons.IconUserX,
      url: '/management/deleted_users'
    },
    {
      id: 'management-activities',
      title: <FormattedMessage id="activities" />,
      type: 'item',
      icon: icons.IconBorderAll,
      url: ' /management/activities'
    }
  ]
};

export default management;
