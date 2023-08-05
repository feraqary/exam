// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconClipboardCheck, IconPictureInPicture, IconForms, IconBorderAll, IconChartDots, IconStairsUp } from '@tabler/icons';
import { GitBranch } from 'tabler-icons-react';
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
  icon: <GitBranch size={22} style={{ marginRight: '10px' }} strokeWidth={1.5} color={'black'} />,
  type: 'group',
  children: [
    {
      id: 'add-leads',
      title: <FormattedMessage id="Add Leads" />,
      type: 'item',
      icon: icons.IconPictureInPicture,
      url: '/dashboard/leads/add_leads'
    },
    {
      id: 'manage-leads',
      title: <FormattedMessage id="Manage Leads" />,
      type: 'item',
      icon: icons.IconPictureInPicture,
      url: '/dashboard/leads/manage_leads'
    },

    {
      id: 'video-requests',
      title: <FormattedMessage id="Video Requests" />,
      type: 'item',
      url: '/dashboard/leads/request_video'
    },
    {
      id: 'general-requests',
      title: <FormattedMessage id="General Requests" />,
      type: 'item',
      url: '/dashboard/leads/general_request'
    },
    {
      id: 'view-schedules',
      title: <FormattedMessage id="View Schedules" />,
      type: 'item',
      icon: icons.IconForms,
      url: '/dashboard/leads/schedule_viewing'
    }
  ]
};

export default leads;
