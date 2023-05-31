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

const users = {
  id: 'users',
  title: <FormattedMessage id="Users" />,
  icon: icons.IconPictureInPicture,
  type: 'group',
  children: [
    {
      id: 'normal-users',
      title: <FormattedMessage id="Normal Users" />,
      type: 'item',
      icon: icons.IconPictureInPicture
    },
    {
      id: 'registered-users',
      title: <FormattedMessage id="Registered Users" />,
      type: 'item',
      icon: icons.IconForms
    },
    {
      id: 'pending-users',
      title: <FormattedMessage id="Pending Users" />,
      type: 'item',
      icon: icons.IconBorderAll
    }
  ]
};

export default users;
