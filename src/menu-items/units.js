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

const units = {
  id: 'units',
  title: <FormattedMessage id="units" />,
  icon: icons.IconPictureInPicture,
  type: 'group',
  children: [
    {
      id: 'add-unit',
      title: <FormattedMessage id="Add Unit" />,
      type: 'item',
      icon: icons.IconPictureInPicture,
      url: '/units/add_unit'
    },
    {
      id: 'manage-units',
      title: <FormattedMessage id="Manage Units" />,
      type: 'collapse',
      icon: icons.IconForms,
      children: [
        {
          id: 'sale-units',
          title: <FormattedMessage id="Sale Units" />,
          type: 'item',
          url: '/units/sale_units',
          breadcrumbs: false
        },
        {
          id: 'rent-units',
          title: <FormattedMessage id="Rent Units" />,
          type: 'item',
          url: '/units/rent_units',
          breadcrumbs: false
        },
        {
          id: 'shared-units',
          title: <FormattedMessage id="Shared Units" />,
          type: 'item',
          url: '/units/shared_units',
          breadcrumbs: false
        },
        {
          id: 'international-units',
          title: <FormattedMessage id="International Units" />,
          type: 'item',
          url: '/units/international_units',
          breadcrumbs: false
        },
        {
          id: 'rejected-units',
          title: <FormattedMessage id="Rejected Units" />,
          type: 'item',
          url: '/units/rejected_units',
          breadcrumbs: false
        },
        {
          id: 'deleted-units',
          title: <FormattedMessage id="Deleted Units" />,
          type: 'item',
          url: '/units/deleted_units',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'unit-activities',
      title: <FormattedMessage id="Activities" />,
      type: 'item',
      icon: icons.IconBorderAll,
      url: '/units/activities'
    },
    {
      id: 'problem-reports',
      title: <FormattedMessage id="Problem Reports" />,
      type: 'item',
      icon: icons.IconBorderAll,
      url: '/units/problem_reports'
    }
  ]
};

export default units;
