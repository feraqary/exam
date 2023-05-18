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

const settings = {
  id: 'settings',
  title: <FormattedMessage id="Settings" />,
  icon: icons.IconKey,
  type: 'group',
  children: [
    {
      id: 'manage',
      title: <FormattedMessage id="Manage" />,
      type: 'collapse',
      icon: icons.IconKey,
      children: [
        {
          id: 'xml-feeds',
          title: <FormattedMessage id="XML Feeds" />,
          type: 'item',
          url: '/settings/xml-feeds'
        },
        {
          id: 'amenities',
          title: <FormattedMessage id="Amenities" />,
          type: 'item',
          url: '/settings/amenities'
        },
        {
          id: 'facilities',
          title: <FormattedMessage id="Facilities" />,
          type: 'item',
          url: '/settings/facilities'
        },
        {
          id: 'image-categories',
          title: <FormattedMessage id="Image Categories" />,
          type: 'item',
          url: '/settings/image-categories'
        },
        {
          id: 'international-content',
          title: <FormattedMessage id="International Content" />,
          type: 'item',
          url: '/settings/international-content'
        },
        {
          id: 'vat/tax',
          title: <FormattedMessage id="VAT/Tax" />,
          type: 'item',
          url: '/settings/vat/tax'
        },
        {
          id: 'subscriptions',
          title: <FormattedMessage id="Subscriptions" />,
          type: 'item',
          url: '/settings/subscriptions'
        },
        {
          id: 'subscription-cost',
          title: <FormattedMessage id="Subscription Cost" />,
          type: 'item',
          url: '/settings/subscription-cost'
        },
        {
          id: 'menu',
          title: <FormattedMessage id="Menu" />,
          type: 'item',
          url: '/settings/menu'
        },
        {
          id: 'menu-country-wise',
          title: <FormattedMessage id="Menu Country Wise" />,
          type: 'item',
          url: '/settings/menu-country-wise'
        }
      ]
    },
    {
      id: 'activities',
      title: <FormattedMessage id="Activities" />,
      type: 'item',
      url: '/settings/activities',
      icon: icons.IconReceipt2
    }
  ]
};

export default settings;
