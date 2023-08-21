// third-party
import { FormattedMessage } from 'react-intl';
import { BuildingEstate } from 'tabler-icons-react';
// assets
import {
  IconApps,
  IconUserCheck,
  IconTrashX,
  IconHomeShare,
  IconPin,
  IconMapPin,
  IconBasket,
  IconMessages,
  IconLayoutKanban,
  IconMail,
  IconCalendar,
  IconNfc
} from '@tabler/icons';

// constant
const icons = {
  IconApps,
  IconUserCheck,
  IconBasket,
  IconMessages,
  IconLayoutKanban,
  IconMail,
  IconCalendar,
  IconNfc,
  IconPin,
  IconMapPin,
  IconHomeShare,
  IconTrashX
};

// ==============================|| Project MENU ITEMS ||============================== //

const categories = {
  id: 'categories',
  title: <FormattedMessage id="Categories" />,
  icon: <BuildingEstate size={23} strokeWidth={1.5} color={'black'} style={{ marginRight: '10px' }} />,
  type: 'group',
  children: [
    {
      id: 'company-category',
      title: <FormattedMessage id="Company" />,
      type: 'item',
      icon: icons.IconUserCheck,
      url: '/dashboard/categories/company'
    }
  ]
};

export default categories;
