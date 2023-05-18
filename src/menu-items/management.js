// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';

const icons = {
  IconDashboard,
  IconDeviceAnalytics
};

// ==============================|| MENU ITEMS - Management ||============================== //

const management = {
  id: 'management',
  title: <FormattedMessage id="Management" />,
  icon: icons.IconDashboard,
  type: 'group',
  children: [
    {
      id: 'Aqary Dashboard',
      title: <FormattedMessage id="Manage Users" />,
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default management;
