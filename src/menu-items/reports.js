// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconKey, IconReceipt2, IconBug, IconBellRinging, IconPhoneCall, IconQuestionMark, IconShieldLock } from '@tabler/icons';
import { ReportAnalytics } from 'tabler-icons-react';
// constant
const icons = {
  IconKey,
  IconReceipt2,
  IconBug,
  IconBellRinging,
  IconPhoneCall,
  IconQuestionMark,
  IconShieldLock
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const items = 'dashboard.menuItems.reports';

const reports = {
  id: 'reports',
  title: <FormattedMessage id={items + '.reports'} />,
  icon: <ReportAnalytics size={23} strokeWidth={1.5} style={{ marginRight: '10px' }} color={'black'} />,
  type: 'group',
  children: [
    {
      id: items + '.location',
      title: <FormattedMessage id={items + '.location'} />,
      type: 'item',
      icon: icons.IconKey,
      url: '/dashboard/reports/location'
    },
    {
      id: items + '.competitive',
      title: <FormattedMessage id={items + '.competitive'} />,
      type: 'item',
      icon: icons.IconBug,
      url: '/dashboard/reports/competitive'
    },
    {
      id: items + '.agents',
      title: <FormattedMessage id={items + '.agents'} />,
      type: 'item',
      icon: icons.IconBellRinging,
      url: '/dashboard/reports/agents',
      target: true
    },
    {
      id: items + '.transactions',
      title: <FormattedMessage id={items + '.transactions'} />,
      type: 'item',
      icon: icons.IconPhoneCall,
      url: '/dashboard/reports/transactions',
      target: true
    },
    {
      id: items + '.market',
      title: <FormattedMessage id={items + '.market'} />,
      type: 'item',
      icon: icons.IconPhoneCall,
      url: '/dashboard/reports/market',
      target: true
    }
  ]
};

export default reports;
