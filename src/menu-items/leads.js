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

const leads = {
  id: 'leads',
  title: <FormattedMessage id="leads" />,
  icon: icons.IconPictureInPicture,
  type: 'group',
  children: [
    {
      id: 'manage-leads',
      title: <FormattedMessage id="Manage Leads" />,
      type: 'item',
      icon: icons.IconPictureInPicture
    },
    {
      id: 'requests',
      title: <FormattedMessage id="Requests" />,
      type: 'collapse',
      icon: icons.IconForms,
      children: [
        {
          id: 'video-requests',
          title: <FormattedMessage id="Video Requests" />,
          type: 'item',
          url: '/exchange/manage-units',
          breadcrumbs: false
        },
        {
          id: 'general-requests',
          title: <FormattedMessage id="General Requests" />,
          type: 'item',
          url: '/exchange/manage-units',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'view-schedules',
      title: <FormattedMessage id="View Schedules" />,
      type: 'item',
      icon: icons.IconForms
    }
  ]
};

export default leads;
