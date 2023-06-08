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
          title: <FormattedMessage id="Manage Services" />,
          type: 'item',
          url: '/services/manage_services'
        },
        {
          id: 'manage-sub-services',
          title: <FormattedMessage id="Sub Services" />,
          type: 'item',
          url: '/services/sub_services'
        },
        {
          id: 'manage-local-companies',
          title: <FormattedMessage id="Local Companies" />,
          type: 'item',
          url: '/services/local_services'
        },
        {
          id: 'manage-international-companies',
          title: <FormattedMessage id="International Companies" />,
          type: 'item',
          url: '/services/int_services'
        },
        {
          id: 'manage-company-gallery',
          title: <FormattedMessage id="Company Gallery" />,
          type: 'item',
          url: '/services/company_gallery'
        },
        {
          id: 'add_service_company_location',
          title: <FormattedMessage id="Add/Edit Services Location" />,
          type: 'item',
          url: '/services/add_service_company_loc'
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
          url: '/services/service_request'
        },
        {
          id: 'valuation-requests',
          title: <FormattedMessage id="Valuation Requests" />,
          type: 'item',
          url: '/services/valuation'
        }
      ]
    },
    {
      id: 'services-activities',
      title: <FormattedMessage id="Service Activities" />,
      type: 'item',
      icon: icons.IconBorderAll,
      url: '/services/service_activities'
    }
  ]
};

export default services;
