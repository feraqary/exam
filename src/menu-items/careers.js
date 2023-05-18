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

const careers = {
  id: 'careers',
  title: <FormattedMessage id="Careers" />,
  icon: icons.IconPictureInPicture,
  type: 'group',
  children: [
    {
      id: 'manage-careers',
      title: <FormattedMessage id="Manage" />,
      type: 'collapse',
      icon: icons.IconForms,
      children: [
        {
          id: 'manage-jobs',
          title: <FormattedMessage id="Jobs" />,
          type: 'item',
          url: '/exchange/manage-units',
          breadcrumbs: false
        },
        {
          id: 'manage-categories',
          title: <FormattedMessage id="Categories" />,
          type: 'item',
          url: '/exchange/manage-units',
          breadcrumbs: false
        },
        {
          id: 'manage-articles',
          title: <FormattedMessage id="Articles" />,
          type: 'item',
          url: '/exchange/manage-units',
          breadcrumbs: false
        },
        {
          id: 'delete-articles',
          title: <FormattedMessage id="Delete Articles" />,
          type: 'item',
          url: '/exchange/manage-units',
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

export default careers;
