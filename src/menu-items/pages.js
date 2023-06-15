// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconKey, IconReceipt2, IconBug, IconBellRinging, IconPhoneCall, IconQuestionMark, IconShieldLock } from '@tabler/icons';
import { AppWindow } from 'tabler-icons-react';
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

const pages = {
  id: 'pages',
  title: <FormattedMessage id="pages" />,
  icon: <AppWindow size={23} strokeWidth={1.5} style={{ marginRight: '10px' }} color={'black'} />,
  type: 'group',
  children: [
    {
      id: 'add-pages',
      title: <FormattedMessage id="Add Pages" />,
      type: 'item',
      icon: icons.IconKey,
      url: '/pages/add-pages'
    },

    {
      id: 'manage-pages',
      title: <FormattedMessage id="Pages" />,
      type: 'item',
      url: '/pages/manage-pages'
    },
    {
      id: 'manage-advertise',
      title: <FormattedMessage id="Advertise" />,
      type: 'item',
      url: '/pages/manage-advertise'
    },
    {
      id: 'manage-exchange-contents',
      title: <FormattedMessage id="Exchange Contents" />,
      type: 'item',
      url: '/pages/manage-exchange-contents'
    },
    {
      id: 'manage-exhibition-contents',
      title: <FormattedMessage id="Exhibition Contents" />,
      type: 'item',
      url: '/pages/manage-exhibition-contents'
    },
    {
      id: 'manage-tower-contents',
      title: <FormattedMessage id="Tower Contents" />,
      type: 'item',
      url: '/pages/manage-tower-contents'
    },
    {
      id: 'manage-auction-contents',
      title: <FormattedMessage id="Auction Contents" />,
      type: 'item',
      url: '/pages/manage-auction-contents'
    }
  ]
};

export default pages;
