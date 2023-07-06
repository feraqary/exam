// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  IconApps,
  IconLayoutGridAdd,
  IconPin,
  IconClock,
  IconFileX,
  IconTextPlus,
  IconChecklist,
  IconFileStar,
  IconMapPin,
  IconLayoutGrid,
  IconUserCheck,
  IconClipboardPlus,
  IconBasket,
  IconMessages,
  IconLayoutKanban,
  IconMail,
  IconCalendar,
  IconNfc
} from '@tabler/icons';
import { Building } from 'tabler-icons-react';
// constant
const icons = {
  IconApps,
  IconUserCheck,
  IconBasket,
  IconMessages,
  IconLayoutKanban,
  IconMail,
  IconCalendar,
  IconNfc,
  IconClipboardPlus,
  IconLayoutGridAdd,
  IconLayoutGrid,
  IconPin,
  IconMapPin,
  IconFileStar,
  IconFileX,
  IconTextPlus,
  IconChecklist,
  IconClock
};

// ==============================|| Company MENU ITEMS ||============================== //

const companies = {
  id: 'companies',
  title: <FormattedMessage id="companies" />,
  icon: <Building size={23} strokeWidth={1.5} color={'black'} style={{ marginRight: '10px' }} />,
  type: 'group',
  children: [
    {
      id: 'add-company',
      title: <FormattedMessage id="add-company" />,
      type: 'item',
      url: '/dashboard/company/add_comp',
      icon: icons.IconUserCheck
    },
    {
      id: 'add-sub-dev-company',
      title: <FormattedMessage id="Add Sub-Developer Companies" />,
      type: 'item',
      url: '/dashboard/company/add_sub_developer',
      icon: icons.IconUserCheck
    },

    {
      id: 'add_company_types',
      title: <FormattedMessage id="Add Sub-Company Types" />,
      type: 'item',
      icon: icons.IconLayoutGridAdd,
      url: '/dashboard/company/add_type'
    },
    {
      id: 'company-types',
      title: <FormattedMessage id="Manage Sub-Company Types" />,
      type: 'item',
      icon: icons.IconLayoutGrid,
      url: '/dashboard/company/manage_type'
    },

    {
      id: 'local',
      title: <FormattedMessage id="local-companies" />,
      type: 'item',
      icon: icons.IconPin,
      url: '/dashboard/company/local_company_management'
    },
    {
      id: 'international',
      title: <FormattedMessage id="int-companies" />,
      type: 'item',
      icon: icons.IconMapPin,
      url: '/dashboard/company/int_comp_mng'
    },
    {
      id: 'featured-companies',
      title: <FormattedMessage id="Featured Companies" />,
      type: 'item',
      icon: icons.IconFileStar,
      url: '/dashboard/company/featured'
    },
    {
      id: 'blocked-companies',
      title: <FormattedMessage id="Blocked Companies" />,
      type: 'item',
      icon: icons.IconFileX,
      url: '/dashboard/company/blocked'
    },

    {
      id: 'add-subscription',
      title: <FormattedMessage id="add-subscriptions" />,
      type: 'item',
      icon: icons.IconTextPlus,
      url: '/dashboard/company/add_subs'
    },
    {
      id: 'active',
      title: <FormattedMessage id="view-active" />,
      type: 'item',
      icon: icons.IconChecklist,
      url: '/dashboard/company/active_subs'
    },
    {
      id: 'pending',
      title: <FormattedMessage id="view-pending" />,
      type: 'item',
      icon: icons.IconClock,
      url: '/dashboard/company/pending_subs'
    },
    {
      id: 'payments',
      title: <FormattedMessage id="payments" />,
      type: 'item',
      icon: icons.IconLayoutKanban,
      url: '/dashboard/company/payments'
    },
    {
      id: 'priviliges',
      title: <FormattedMessage id="company-priviliges" />,
      type: 'item',
      icon: icons.IconNfc,
      url: '/dashboard/company/priviliges'
    },
    {
      id: 'company-activities',
      title: <FormattedMessage id="activities" />,
      type: 'item',
      icon: icons.IconBasket,
      url: '/dashboard/company/activity'
    }
  ]
};

export default companies;
