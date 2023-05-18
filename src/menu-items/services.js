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
      title: <FormattedMessage id="Add/Edit Services Location" />,
      type: 'item',
      icon: icons.IconPictureInPicture
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
          url: '/exchange/manage-units',
          breadcrumbs: false
        },
        {
          id: 'manage-sub-services',
          title: <FormattedMessage id="Sub Services" />,
          type: 'item',
          url: '/exchange/manage-units',
          breadcrumbs: false
        },
        {
          id: 'manage-local-companies',
          title: <FormattedMessage id="Local Companies" />,
          type: 'item',
          url: '/exchange/manage-units',
          breadcrumbs: false
        },
        {
          id: 'manage-international-companies',
          title: <FormattedMessage id="International Companies" />,
          type: 'item',
          url: '/exchange/manage-units',
          breadcrumbs: false
        },
        {
          id: 'manage-company-gallery',
          title: <FormattedMessage id="Company Gallery" />,
          type: 'item',
          url: '/exchange/manage-units',
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
          url: '/exchange/service-requests',
          breadcrumbs: false
        },
        {
          id: 'valuation-requests',
          title: <FormattedMessage id="Valuation Requests" />,
          type: 'item',
          url: '/exchange/valuation-requests',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'activities',
      title: <FormattedMessage id="Activities" />,
      type: 'item',
      icon: icons.IconBorderAll
    }
  ]
};

export default services;
