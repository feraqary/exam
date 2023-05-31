// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconKey, IconReceipt2, IconBug, IconBellRinging, IconPhoneCall, IconQuestionMark, IconShieldLock } from '@tabler/icons';

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
  icon: icons.IconKey,
  type: 'group',
  children: [
    {
      id: 'location',
      title: <FormattedMessage id="Location" />,
      type: 'item',
      icon: icons.IconKey
    },
    {
      id: 'competitive',
      title: <FormattedMessage id="Competitive" />,
      type: 'item',
      icon: icons.IconBug
    },
    {
      id: 'agents',
      title: <FormattedMessage id="Agents" />,
      type: 'item',
      icon: icons.IconBellRinging,
      url: '/reports/agents',
      target: true
    },
    {
      id: 'transactions',
      title: <FormattedMessage id="Transactions" />,
      type: 'item',
      icon: icons.IconPhoneCall,
      url: '/pages/landing',
      target: true
    },
    {
      id: 'market',
      title: <FormattedMessage id="Market" />,
      type: 'item',
      icon: icons.IconPhoneCall,
      url: '/pages/landing',
      target: true
    }
  ]
};

export default reports;
