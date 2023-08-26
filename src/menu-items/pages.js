// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  IconKey,
  IconGridDots,
  IconReceipt2,
  IconBuildingSkyscraper,
  IconViewportWide,
  IconArrowsExchange,
  IconBug,
  IconAlignBoxBottomCenter,
  IconBellRinging,
  IconFileHorizontal,
  IconPhoneCall,
  IconQuestionMark,
  IconShieldLock
} from '@tabler/icons';
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

const items = 'dashboard.menuItems.pages';

const pages = {
  id: 'pages',
  title: <FormattedMessage id={items + '.pages'} />,
  icon: <AppWindow size={23} strokeWidth={1.5} style={{ marginRight: '10px' }} color={'black'} />,
  type: 'group',
  children: [
    {
      id: 'add-pages',
      title: <FormattedMessage id={items + '.addPages'} />,
      type: 'item',
      icon: icons.IconKey,
      url: '/dashboard/pages/add-pages'
    },
    {
      id: 'manage-pages',
      title: <FormattedMessage id={items + '.managePages'} />,
      type: 'item',
      icon: icons.IconFileHorizontal,
      url: '/dashboard/pages/manage-pages'
    },
    {
      id: 'manage-advertise',
      title: <FormattedMessage id={items + '.manageAdverts'} />,
      icon: icons.IconAlignBoxBottomCenter,
      type: 'item',
      url: '/dashboard/pages/manage-advertise'
    },
    {
      id: 'manage-exchange-contents',
      title: <FormattedMessage id={items + '.manageExchangeContents'} />,
      icon: icons.IconArrowsExchange,
      type: 'item',
      url: '/dashboard/pages/manage-exchange-contents'
    },
    {
      id: 'manage-exhibition-contents',
      title: <FormattedMessage id={items + '.manageExhibitionContents'} />,
      icon: icons.IconViewportWide,
      type: 'item',
      url: '/dashboard/pages/manage-exhibition-contents'
    },
    {
      id: 'manage-tower-contents',
      title: <FormattedMessage id={items + '.manageTowerContents'} />,
      icon: icons.IconBuildingSkyscraper,
      type: 'item',
      url: '/dashboard/pages/manage-tower-contents'
    },
    {
      id: 'manage-auction-contents',
      title: <FormattedMessage id={items + '.manageAuctionContents'} />,
      icon: icons.IconGridDots,
      type: 'item',
      url: '/dashboard/pages/manage-auction-contents'
    }
  ]
};

export default pages;
