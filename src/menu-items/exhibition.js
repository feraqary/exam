// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';

const icons = {
  IconDashboard,
  IconDeviceAnalytics
};

// ==============================|| MENU ITEMS - Exhibition ||============================== //

const exhibition = {
  id: 'exhibition',
  title: <FormattedMessage id="Exhibition" />,
  icon: icons.IconDashboard,
  type: 'group',
  children: [
    {
      id: 'add-exhibition',
      title: <FormattedMessage id="Add Exhibition" />,
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default exhibition;
