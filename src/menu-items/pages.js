// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconKey,IconGridDots,IconReceipt2,IconBuildingSkyscraper,IconViewportWide,IconArrowsExchange,IconBug,IconAlignBoxBottomCenter, IconBellRinging,IconFileHorizontal, IconPhoneCall, IconQuestionMark, IconShieldLock } from '@tabler/icons';
import { AppWindow } from 'tabler-icons-react';
// constant
const icons = {
  IconKey,
  IconReceipt2,
  IconBug,
  IconBellRinging,
  IconPhoneCall,
  IconQuestionMark,
  IconShieldLock,
  IconFileHorizontal,
  IconAlignBoxBottomCenter,
  IconArrowsExchange,
  IconViewportWide,
  IconBuildingSkyscraper,
  IconGridDots
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
      title: <FormattedMessage id="Manage Pages" />,
      type: 'item',
      icon: icons.IconFileHorizontal,
      url: '/pages/manage-pages'
    },
    {
      id: 'manage-advertise',
      title: <FormattedMessage id="Manage Adverts" />,
      icon: icons.IconAlignBoxBottomCenter,
      type: 'item',
      url: '/pages/manage-advertise'
    },
    {
      id: 'manage-exchange-contents',
      title: <FormattedMessage id="Manage Exchange Contents" />,
      icon: icons.IconArrowsExchange,
      type: 'item',
      url: '/pages/manage-exchange-contents'
    },
    {
      id: 'manage-exhibition-contents',
      title: <FormattedMessage id="Manage Exhibition Contents" />,
      icon: icons.IconViewportWide,
      type: 'item',
      url: '/pages/manage-exhibition-contents'
    },
    {
      id: 'manage-tower-contents',
      title: <FormattedMessage id="Manage Tower Contents" />,
      icon: icons.IconBuildingSkyscraper,
      type: 'item',
      url: '/pages/manage-tower-contents'
    },
    {
      id: 'manage-auction-contents',
      title: <FormattedMessage id="Manage Auction Contents" />,
      icon: icons.IconGridDots,
      type: 'item',
      url: '/pages/manage-auction-contents'
    }
  ]
};

export default pages;
