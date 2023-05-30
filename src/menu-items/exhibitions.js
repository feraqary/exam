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

const exhibitions = {
  id: 'exhibitions',
  title: <FormattedMessage id="Exhibitions" />,
  icon: icons.IconPictureInPicture,
  type: 'group',
  children: [
    {
      id: 'add-exhibitions',
      title: <FormattedMessage id="Add Exhibitions" />,
      type: 'item',
      icon: icons.IconPictureInPicture
    },
    {
      id: 'manage-exhibitions',
      title: <FormattedMessage id="Manage" />,
      type: 'collapse',
      icon: icons.IconForms,
      children: [
        {
          id: 'manage-local-exhibitions',
          title: <FormattedMessage id="Local Exhibitions" />,
          type: 'item',
          url: '/exchange/manage-units',
          breadcrumbs: false
        },
        {
          id: 'manage-international-exhibitions',
          title: <FormattedMessage id="International Exhibitions" />,
          type: 'item',
          url: '/exchange/manage-units',
          breadcrumbs: false
        },
        {
          id: 'manage-clients',
          title: <FormattedMessage id="Clients" />,
          type: 'item',
          url: '/exchange/manage-units',
          breadcrumbs: false
        },
        {
          id: 'manage-exhibition-services',
          title: <FormattedMessage id="Exhibition Services" />,
          type: 'item',
          url: '/exchange/manage-units',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'exhibitions-activities',
      title: <FormattedMessage id="Activities" />,
      type: 'item',
      icon: icons.IconBorderAll
    }
  ]
};

export default exhibitions;
