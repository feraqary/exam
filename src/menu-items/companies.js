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
  title: <FormattedMessage id="companies" />,
  icon: icons.IconApps,
  type: 'group',
  children: [
    {
      id: 'add-company',
      title: <FormattedMessage id="add-company" />,
      type: 'item',
      url: '/company/add_comp',
      icon: icons.IconUserCheck
    },
    {
      id: 'manage-companies',
      title: <FormattedMessage id="manage-companies" />,
      type: 'collapse',
      icon: icons.IconUserCheck,
      children: [
        {
          id: 'local',
          title: <FormattedMessage id="local-companies" />,
          type: 'item',
          url: '/company/local_company_management'
        },
        {
          id: 'international',
          title: <FormattedMessage id="int-companies" />,
          type: 'item',
          url: '/company/int_comp_mng'
        },
        {
          id: 'add_company_types',
          title: <FormattedMessage id="add-types" />,
          type: 'item',
          url: '/company/add_type'
        },
        {
          id: 'company-types',
          title: <FormattedMessage id="manage-types" />,
          caption: 'Manage Company Types',
          type: 'item',
          icon: icons.IconMessages,
          url: '/company/manage_type'
        }
      ]
    },
    {
      id: 'manage-subscriptions',
      title: <FormattedMessage id="manage-subscriptions" />,
      type: 'collapse',
      icon: icons.IconBasket,
      children: [
        {
          id: 'add-subscription',
          title: <FormattedMessage id="add-subscriptions" />,
          type: 'item',
          url: '/company/add_subs',
          breadcrumbs: false
        },
        {
          id: 'active',
          title: <FormattedMessage id="view-active" />,
          type: 'item',
          url: '/company/active_subs',
          breadcrumbs: false
        },
        {
          id: 'pending',
          title: <FormattedMessage id="view-pending" />,
          type: 'item',
          url: '/company/pending_subs',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'payments',
      title: <FormattedMessage id="payments" />,
      type: 'item',
      icon: icons.IconLayoutKanban,
      url: '/company/payments'
    },
    {
      id: 'second-phase',
      title: <FormattedMessage id="reg" />,
      type: 'item',
      icon: icons.IconMail,
      url: '/company/company_reg'
    },
    {
      id: 'priviliges',
      title: <FormattedMessage id="company-priviliges" />,
      type: 'item',
      icon: icons.IconNfc,
      url: '/company/priviliges'
    },
    {
      id: 'company-activities',
      title: <FormattedMessage id="activities" />,
      type: 'item',
      icon: icons.IconBasket,
      url: '/company/activity'
    }
  ]
};

export default companies;
