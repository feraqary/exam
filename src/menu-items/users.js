// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconClipboardCheck, IconPictureInPicture, IconForms, IconBorderAll, IconChartDots, IconStairsUp } from '@tabler/icons';
import { Users } from 'tabler-icons-react';
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
const items = 'dashboard.menuItems.users';

const users = {
  id: 'users',
  title: <FormattedMessage id={items + '.users'} />,
  icon: <Users size={23} strokeWidth={1.5} style={{ marginRight: '10px' }} color={'black'} />,
  type: 'group',
  children: [
    {
      id: 'normal-users' + items,
      title: <FormattedMessage id={items + '.normalUsers'} />,
      type: 'item',
      icon: icons.IconPictureInPicture
    },
    {
      id: 'registered-users' + items,
      title: <FormattedMessage id={items + '.registeredUsers'} />,
      type: 'item',
      icon: icons.IconForms
    },
    {
      id: 'pending-users' + items,
      title: <FormattedMessage id={items + '.pendingUsers'} />,
      type: 'item',
      icon: icons.IconBorderAll
    }
  ]
};

export default users;
