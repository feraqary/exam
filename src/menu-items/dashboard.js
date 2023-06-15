// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';
import { LayoutDashboard } from 'tabler-icons-react';

const icons = {
  IconDashboard,
  IconDeviceAnalytics
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'dashboard',
  title: <FormattedMessage id="dashboard" />,
  icon: <LayoutDashboard size={23} strokeWidth={1.5} color={'black'} style={{ marginRight: '10px' }} />,
  type: 'group',
  children: [
    {
      id: 'aqary-dashboard',
      title: <FormattedMessage id="statistics" />,
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
