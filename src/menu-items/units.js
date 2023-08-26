// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconClipboardCheck, IconPictureInPicture, IconForms, IconBorderAll, IconChartDots, IconStairsUp } from '@tabler/icons';
import { BuildingCommunity } from 'tabler-icons-react';
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
const items = 'dashboard.menuItems.units';

const units = {
  id: 'units',
  title: <FormattedMessage id={items + '.units'} />,
  icon: <BuildingCommunity size={23} style={{ marginRight: '10px' }} strokeWidth={1.5} color={'black'} />,
  type: 'group',
  children: [
    {
      id: 'add-unit' + items,
      title: <FormattedMessage id={items + '.addUnit'} />,
      type: 'item',
      icon: icons.IconPictureInPicture,
      url: '/dashboard/units/add_unit'
    },
    {
      id: 'sale-units' + items,
      title: <FormattedMessage id={items + '.saleUnits'} />,
      type: 'item',
      url: '/dashboard/units/sale_units'
    },
    {
      id: 'rent-units' + items,
      title: <FormattedMessage id={items + '.rentUnits'} />,
      type: 'item',
      url: '/dashboard/units/rent_units'
    },
    {
      id: 'shared-units' + items,
      title: <FormattedMessage id={items + '.sharedUnits'} />,
      type: 'item',
      url: '/dashboard/units/shared_units'
    },
    {
      id: 'international-units' + items,
      title: <FormattedMessage id={items + '.internationalUnits'} />,
      type: 'item',
      url: '/dashboard/units/international_units'
    },
    {
      id: 'rejected-units' + items,
      title: <FormattedMessage id={items + '.rejectedUnits'} />,
      type: 'item',
      url: '/dashboard/units/rejected_units'
    },
    {
      id: 'deleted-units' + items,
      title: <FormattedMessage id={items + '.deletedUnits'} />,
      type: 'item',
      url: '/dashboard/units/deleted_units'
    },
    {
      id: 'unit-activities' + items,
      title: <FormattedMessage id={items + '.activities'} />,
      type: 'item',
      icon: icons.IconBorderAll,
      url: '/dashboard/units/activities'
    },
    {
      id: 'problem-reports' + items,
      title: <FormattedMessage id={items + '.problemReports'} />,
      type: 'item',
      icon: icons.IconBorderAll,
      url: '/dashboard/units/problem_reports'
    }
  ]
};

export default units;
