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
          url: '/settings/manage_xml_feeds'
        },
        {
          id: 'amenities',
          title: <FormattedMessage id="Amenities" />,
          type: 'item',
          url: '/settings/manage_amenities'
        },
        {
          id: 'facilities',
          title: <FormattedMessage id="Facilities" />,
          type: 'item',
          url: '/settings/manage_facilities'
        },
        {
          id: 'image-categories',
          title: <FormattedMessage id="Image Categories" />,
          type: 'item',
          url: '/settings/manage_image_categories'
        },
        {
          id: 'international-content',
          title: <FormattedMessage id="International Contents" />,
          type: 'item',
          url: '/settings/manage_international_contents'
        },
        {
          id: 'vat/tax',
          title: <FormattedMessage id="VAT/Tax" />,
          type: 'item',
          url: '/settings/manage_vat_tax'
        },
        {
          id: 'subscriptions',
          title: <FormattedMessage id="Subscriptions" />,
          type: 'item',
          url: '/settings/manage_subscriptions'
        },
        {
          id: 'subscription-cost',
          title: <FormattedMessage id="Subscription Cost" />,
          type: 'item',
          url: '/settings/manage_subscription_costs'
        },
        {
          id: 'menu',
          title: <FormattedMessage id="Menu" />,
          type: 'item',
          url: '/settings/manage_menu'
        },
        {
          id: 'menu-country-wise',
          title: <FormattedMessage id="Menu Country Wise" />,
          type: 'item',
          url: '/settings/manage_menu_country_wise'
        }
      ]
    },
    {
      id: 'settings-activities',
      title: <FormattedMessage id="Activities" />,
      type: 'item',
      url: '/settings/activities',
      icon: icons.IconReceipt2
    }
  ]
};

export default settings;
