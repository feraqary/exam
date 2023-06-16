// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconClipboardCheck, IconPictureInPicture, IconForms, IconBorderAll, IconChartDots, IconStairsUp } from '@tabler/icons';
import { Ticket } from 'tabler-icons-react';
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

const exhibitions = {
  id: 'exhibitions',
  title: <FormattedMessage id="Exhibitions" />,
  icon: <Ticket size={23} style={{ marginRight: '10px' }} strokeWidth={1.5} color={'black'} />,
  type: 'group',
  children: [
    {
      id: 'add-exhibitions',
      title: <FormattedMessage id="Add Exhibitions" />,
      type: 'item',
      icon: icons.IconPictureInPicture,
      url: '/exhibition/add'
    },
    {
      id: 'manage-local-exhibitions',
      title: <FormattedMessage id="Manage Local Exhibitions" />,
      type: 'item',
      url: '/exhibition/local'
    },
    {
      id: 'manage-international-exhibitions',
      title: <FormattedMessage id="Manage International Exhibitions" />,
      type: 'item',
      url: '/exhibition/international'
    },
    {
      id: 'manage-clients',
      title: <FormattedMessage id="Manage Clients" />,
      type: 'item',
      url: '/exhibition/clients'
    },
    {
      id: 'manage-exhibition-services',
      title: <FormattedMessage id="Manage Exhibition Services" />,
      type: 'item',
      url: '/exhibition/services'
    },
    {
      id: 'exhibitions-activities',
      title: <FormattedMessage id="Activities" />,
      type: 'item',
      icon: icons.IconBorderAll,
      url: '/exhibition/activities'
    }
  ]
};

export default exhibitions;
