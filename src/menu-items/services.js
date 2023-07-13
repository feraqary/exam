// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconClipboardCheck, IconPictureInPicture, IconForms, IconBorderAll, IconChartDots, IconStairsUp } from '@tabler/icons';
import { FileSettings } from 'tabler-icons-react';
// constant
const icons = {
  IconClipboardCheck,
  IconPictureInPicture,
  IconForms,
  IconBorderAll,
  IconChartDots,
  IconStairsUp
};

// ==============================|| services menu ||============================== //

const services = {
  id: 'services',
  title: <FormattedMessage id="Services" />,
  icon: <FileSettings size={23} style={{ marginRight: '10px' }} strokeWidth={1.5} color={'black'} />,
  type: 'group',
  children: [
    {
      id: 'add_main_services',
      title: <FormattedMessage id="Add Main Services" />,
      type: 'item',
      url: '/dashboard/services/add_main_services'
    },

    {
      id: 'manage-services',
      title: <FormattedMessage id="Manage Main Services" />,
      type: 'item',
      url: '/dashboard/services/manage_services'
    },
    {
      id: 'add_services',
      title: <FormattedMessage id="Add Sub Services" />,
      type: 'item',
      icon: icons.IconClipboardPlus,
      url: '/dashboard/services/add_services'
    },
    {
      id: 'manage-sub-services',
      title: <FormattedMessage id="Manage Sub Services" />,
      type: 'item',
      url: '/dashboard/services/sub_services'
    },
    {
      id: 'services-activities',
      title: <FormattedMessage id="Service Activities" />,
      type: 'item',
      icon: icons.IconBorderAll,
      url: '/dashboard/services/service_activities'
    }
  ]
};

export default services;
