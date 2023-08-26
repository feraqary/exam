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
const items = 'dashboard.menuItems.exhibitions';

const exhibitions = {
  id: 'exhibitions',
  title: <FormattedMessage id={items + '.exhibitions'} />,
  icon: <Ticket size={23} style={{ marginRight: '10px' }} strokeWidth={1.5} color={'black'} />,
  type: 'group',
  children: [
    {
      id: 'add-exhibitions',
      title: <FormattedMessage id={items + '.addExhibitions'} />,
      type: 'item',
      icon: icons.IconPictureInPicture,
      url: '/dashboard/exhibition/add'
    },
    {
      id: 'manage-local-exhibitions',
      title: <FormattedMessage id={items + '.manageLocalExhibitions'} />,
      type: 'item',
      url: '/dashboard/exhibition/local'
    },
    {
      id: 'manage-international-exhibitions',
      title: <FormattedMessage id={items + '.manageInternationalExhibitions'} />,
      type: 'item',
      url: '/dashboard/exhibition/international'
    },
    {
      id: 'manage-clients',
      title: <FormattedMessage id={items + '.manageClients'} />,
      type: 'item',
      url: '/dashboard/exhibition/clients'
    },
    {
      id: 'manage-exhibition-services',
      title: <FormattedMessage id={items + '.manageExhibitionServices'} />,
      type: 'item',
      url: '/dashboard/exhibition/services'
    },
    {
      id: 'exhibitions-activities',
      title: <FormattedMessage id={items + '.activities'} />,
      type: 'item',
      icon: icons.IconBorderAll,
      url: '/dashboard/exhibition/activities'
    }
  ]
};

export default exhibitions;
