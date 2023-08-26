// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  IconKey,
  IconReceipt2,
  IconSettings2,
  IconBug,
  IconBorderAll,
  IconBellRinging,
  IconPhoneCall,
  IconQuestionMark,
  IconShieldLock,
  IconFileSettings,
  IconSettings
} from '@tabler/icons';
import { Settings } from 'tabler-icons-react';
// import { FileSettings } from 'tabler-icons-react';
// constant
const icons = {
  IconKey,
  IconReceipt2,
  IconBug,
  IconBellRinging,
  IconPhoneCall,
  IconQuestionMark,
  IconShieldLock,
  IconSettings,
  IconFileSettings,
  IconSettings2,
  IconBorderAll
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //
const items = 'dashboard.menuItems.settings';

const settings = {
  id: 'settings',
  title: <FormattedMessage id={items + '.settings'} />,
  icon: <Settings size={23} style={{ marginRight: '10px' }} strokeWidth={1.5} color={'black'} />,
  type: 'group',
  children: [
    {
      id: 'xml-feeds' + items,
      title: <FormattedMessage id={items + '.xmlFeeds'} />,
      type: 'item',
      icon: icons.IconSettings2,
      url: '/dashboard/settings/manage_xml_feeds'
    },
    {
      id: 'amenities' + items,
      title: <FormattedMessage id={items + '.amenities'} />,
      type: 'item',
      icon: icons.IconSettings2,
      url: '/dashboard/settings/manage_amenities'
    },
    {
      id: 'facilities' + items,
      title: <FormattedMessage id={items + '.facilities'} />,
      type: 'item',
      icon: icons.IconSettings2,
      url: '/dashboard/settings/manage_facilities'
    },
    {
      id: 'image-categories' + items,
      title: <FormattedMessage id={items + '.imageCategories'} />,
      type: 'item',
      icon: icons.IconSettings2,
      url: '/dashboard/settings/manage_image_categories'
    },
    {
      id: 'international-content' + items,
      title: <FormattedMessage id={items + '.internationalContents'} />,
      type: 'item',
      icon: icons.IconSettings2,
      url: '/dashboard/settings/manage_international_contents'
    },
    {
      id: 'vat/tax' + items,
      title: <FormattedMessage id={items + '.vatTax'} />,
      type: 'item',
      icon: icons.IconSettings2,
      url: '/dashboard/settings/manage_vat_tax'
    },
    {
      id: 'subscriptions' + items,
      title: <FormattedMessage id={items + '.subscriptions'} />,
      type: 'item',
      icon: icons.IconSettings2,
      url: '/dashboard/settings/manage_subscriptions'
    },
    {
      id: 'subscription-cost' + items,
      title: <FormattedMessage id={items + '.subscriptionCost'} />,
      type: 'item',
      icon: icons.IconSettings2,
      url: '/dashboard/settings/manage_subscription_costs'
    },
    {
      id: 'menu' + items,
      title: <FormattedMessage id={items + '.menu'} />,
      type: 'item',
      icon: icons.IconSettings2,
      url: '/dashboard/settings/manage_menu'
    },
    {
      id: 'menu-country-wise' + items,
      title: <FormattedMessage id={items + '.menuCountryWise'} />,
      type: 'item',
      icon: icons.IconSettings2,
      url: '/dashboard/settings/manage_menu_country_wise'
    },
    {
      id: 'settings-activities' + items,
      title: <FormattedMessage id={items + '.activities'} />,
      type: 'item',
      url: '/dashboard/settings/activities',
      icon: icons.IconBorderAll
    }
  ]
};

export default settings;
