// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  IconClipboardCheck,
  IconPictureInPicture,
  IconPin,
  IconMapPin,
  IconForms,
  IconBorderAll,
  IconChartDots,
  IconStairsUp,
  IconHomeShare
} from '@tabler/icons';
import { BuildingSkyscraper } from 'tabler-icons-react';
// constant
const icons = {
  IconClipboardCheck,
  IconPictureInPicture,
  IconForms,
  IconBorderAll,
  IconChartDots,
  IconStairsUp,
  IconPin,
  IconMapPin,
  IconHomeShare
};

// ==============================|| UI FORMS MENU ITEMS ||============================== //
const items = 'dashboard.menuItems.propertyHub';

const propertyhub = {
  id: 'ui-forms',
  title: <FormattedMessage id={items + '.propertyHub'} />,
  icon: <BuildingSkyscraper size={23} strokeWidth={1.5} style={{ marginRight: '10px' }} color={'black'} />,
  type: 'group',
  children: [
    {
      id: items + '.add-property',
      title: <FormattedMessage id={items + '.addProperty'} />,
      type: 'item',
      icon: icons.IconPictureInPicture,
      url: '/dashboard/property_hub/add_property'
    },
    {
      id: items + '.local-properties',
      title: <FormattedMessage id={items + '.localProperties'} />,
      type: 'item',
      icon: icons.IconPin,
      url: '/dashboard/property_hub/local_properties'
    },
    {
      id: items + '.international-properties',
      title: <FormattedMessage id={items + '.internationalProperties'} />,
      type: 'item',
      icon: icons.IconMapPin,
      url: '/dashboard/property_hub/international_properties'
    },
    {
      id: items + '.shared-properties',
      title: <FormattedMessage id={items + '.sharedProperties'} />,
      type: 'item',
      icon: icons.IconHomeShare,
      url: '/dashboard/property_hub/shared_properties'
    },
    {
      id: items + '.deleted-properties',
      title: <FormattedMessage id={items + '.deletedProperties'} />,
      type: 'item',
      icon: icons.IconForms,
      url: '/dashboard/property_hub/deleted_properties'
    },
    {
      id: items + '.property-hub-activities',
      title: <FormattedMessage id={items + '.activities'} />,
      type: 'item',
      icon: icons.IconForms,
      url: '/dashboard/property_hub/activities'
    }
  ]
};

export default propertyhub;
