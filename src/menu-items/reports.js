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

const reports = {
  id: 'reports',
  title: <FormattedMessage id="reports" />,
  icon: <ReportAnalytics size={23} strokeWidth={1.5} style={{ marginRight: '10px' }} color={'black'} />,
  type: 'group',
  children: [
    {
      id: 'location',
      title: <FormattedMessage id="Location" />,
      type: 'item',
      icon: icons.IconKey,
      url: '/dashboard/reports/location',
    },
    {
      id: 'competitive',
      title: <FormattedMessage id="Competitive" />,
      type: 'item',
      icon: icons.IconBug,
      url: '/dashboard/reports/competitive',
    },
    {
      id: 'agents',
      title: <FormattedMessage id="Agents" />,
      type: 'item',
      icon: icons.IconBellRinging,
      url: '/dashboard/reports/agents',
      target: true
    },
    {
      id: 'transactions',
      title: <FormattedMessage id="Transactions" />,
      type: 'item',
      icon: icons.IconPhoneCall,
      url: '/dashboard/reports/transactions',
      target: true
    },
    {
      id: 'market',
      title: <FormattedMessage id="Market" />,
      type: 'item',
      icon: icons.IconPhoneCall,
      url: '/dashboard/reports/market',
      target: true
    }
  ]
};

export default reports;
