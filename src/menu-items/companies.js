// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconApps, IconUserCheck, IconBasket, IconMessages, IconLayoutKanban, IconMail, IconCalendar, IconNfc } from '@tabler/icons';

// constant
const icons = {
  IconApps,
  IconUserCheck,
  IconBasket,
  IconMessages,
  IconLayoutKanban,
  IconMail,
  IconCalendar,
  IconNfc
};

// ==============================|| Company MENU ITEMS ||============================== //

const companies = {
  id: 'companies',
  title: <FormattedMessage id="Companies" />,
  icon: icons.IconApps,
  type: 'group',
  children: [
    {
      id: 'add-company',
      title: <FormattedMessage id="Add Company" />,
      type: 'item',
      url: '/company/add_comp',
      icon: icons.IconUserCheck
    },
    {
      id: 'manage-companies',
      title: <FormattedMessage id="Manage Companies" />,
      type: 'collapse',
      icon: icons.IconUserCheck,
      children: [
        {
          id: 'local',
          title: <FormattedMessage id="Local Companies" />,
          type: 'item',
          url: '/company/local_company_management'
        },
        {
          id: 'international',
          title: <FormattedMessage id="International Companies" />,
          type: 'item',
          url: '/company/int_comp_mng'
        },
        {
          id: 'add_company_types',
          title: <FormattedMessage id="Add Company Types" />,
          type: 'item',
          url: '/company/add_type'
        },
        {
          id: 'company-types',
          title: <FormattedMessage id="Manage Company Types" />,
          caption: 'Manage Company Types',
          type: 'item',
          icon: icons.IconMessages,
          url: '/company/manage_type'
        }
      ]
    },
    {
      id: 'manage-subscriptions',
      title: <FormattedMessage id=" Manage Subscriptions" />,
      type: 'collapse',
      icon: icons.IconBasket,
      children: [
        {
          id: 'add-subscription',
          title: <FormattedMessage id="Add Subscriptions" />,
          type: 'item',
          url: '/company/add_subs',
          breadcrumbs: false
        },
        {
          id: 'active',
          title: <FormattedMessage id="View Active Subscriptions" />,
          type: 'item',
          url: '/company/active_subs',
          breadcrumbs: false
        },
        {
          id: 'pending',
          title: <FormattedMessage id="View Pending Subscriptions" />,
          type: 'item',
          url: '/company/pending_subs',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'payments',
      title: 'Payments',
      type: 'item',
      icon: icons.IconLayoutKanban,
      url: '/company/payments'
    },
    {
      id: 'second-phase',
      title: <FormattedMessage id="Company Registration" />,
      type: 'item',
      icon: icons.IconMail,
      url: '/company/company_reg'
    },
    {
      id: 'previliges',
      title: <FormattedMessage id="Company Previliges" />,
      type: 'item',
      icon: icons.IconNfc,
      url: '/company/previliges'
    },
    {
      id: 'activities',
      title: <FormattedMessage id="Activities" />,
      type: 'item',
      icon: icons.IconBasket,
      url: '/company/activities'
    }
  ]
};

export default companies;
