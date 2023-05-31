// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconClipboardCheck, IconPictureInPicture, IconForms, IconBorderAll, IconChartDots, IconStairsUp } from '@tabler/icons';

// constant
const icons = {
  IconClipboardCheck,
  IconPictureInPicture,
  IconForms,
  IconBorderAll,
  IconChartDots,
  IconStairsUp
};

// ==============================|| UI FORMS MENU ITEMS ||============================== //

const services = {
  id: 'services',
  title: <FormattedMessage id="Services" />,
  icon: icons.IconPictureInPicture,
  type: 'group',
  children: [
    {
      id: 'services-location',
      title: <FormattedMessage id="Add Services" />,
      type: 'item',
      icon: icons.IconPictureInPicture,
      url: '/services/add_services'
    },
    {
      id: 'manage',
      title: <FormattedMessage id="Manage" />,
      type: 'collapse',
      icon: icons.IconForms,
      children: [
        {
          id: 'manage-services',
          title: <FormattedMessage id="Services" />,
          type: 'item',
          url: '/services/manage_services',
          breadcrumbs: false
        },
        {
          id: 'manage-sub-services',
          title: <FormattedMessage id="Sub Services" />,
          type: 'item',
          url: '/services/sub_services',
          breadcrumbs: false
        },
        {
          id: 'manage-local-companies',
          title: <FormattedMessage id="Local Companies" />,
          type: 'item',
          url: '/services/local_services',
          breadcrumbs: false
        },
        {
          id: 'manage-international-companies',
          title: <FormattedMessage id="International Companies" />,
          type: 'item',
          url: '/services/int_services',
          breadcrumbs: false
        },
        {
          id: 'manage-company-gallery',
          title: <FormattedMessage id="Company Gallery" />,
          type: 'item',
          url: '/services/company_gallery',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'requests',
      title: <FormattedMessage id="Requests" />,
      type: 'collapse',
      icon: icons.IconForms,
      children: [
        {
          id: 'service-requests',
          title: <FormattedMessage id="Service Requests" />,
          type: 'item',
          url: '/services/service_request',
          breadcrumbs: false
        },
        {
          id: 'valuation-requests',
          title: <FormattedMessage id="Valuation Requests" />,
          type: 'item',
          url: '/services/valuation',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'services-activities',
      title: <FormattedMessage id="Activities" />,
      type: 'item',
      icon: icons.IconBorderAll,
      url: 'services/service_activities'
    }
  ]
};

export default services;
