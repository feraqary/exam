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

const items = 'dashboard.menuItems.services';

const services = {
  id: 'services',
  title: <FormattedMessage id={items + '.services'} />,
  icon: <FileSettings size={23} style={{ marginRight: '10px' }} strokeWidth={1.5} color={'black'} />,
  type: 'group',
  children: [
    {
      id: 'add_company_type' + items,
      title: <FormattedMessage id={items + '.addCompanyType'} />,
      type: 'item',
      url: '/dashboard/services/add_company_type'
    },
    {
      id: 'manage_company_type' + items,
      title: <FormattedMessage id={items + '.manageCompanyType'} />,
      type: 'item',
      url: '/dashboard/services/manage_company_type'
    },
    {
      id: 'add_main_services' + items,
      title: <FormattedMessage id={items + '.addMainServices'} />,
      type: 'item',
      url: '/dashboard/services/add_main_services'
    },
    {
      id: 'manage_main_services' + items,
      title: <FormattedMessage id={items + '.manageMainServices'} />,
      type: 'item',
      url: '/dashboard/services/manage_main_services'
    },
    {
      id: 'add_services' + items,
      title: <FormattedMessage id={items + '.addSubServices'} />,
      type: 'item',
      icon: icons.IconClipboardPlus,
      url: '/dashboard/services/add_services'
    },
    {
      id: 'manage_sub_services' + items,
      title: <FormattedMessage id={items + '.manageSubServices'} />,
      type: 'item',
      url: '/dashboard/services/manage_sub_services'
    }
  ]
};

export default services;
