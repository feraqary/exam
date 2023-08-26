// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconClipboardCheck, IconPictureInPicture, IconForms, IconBorderAll, IconChartDots, IconStairsUp } from '@tabler/icons';
import { Briefcase } from 'tabler-icons-react';
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
const items = 'dashboard.menuItems.careers';

const careers = {
  id: 'careers',
  title: <FormattedMessage id={items + '.careers'} />,
  icon: <Briefcase size={23} strokeWidth={1.5} style={{ marginRight: '10px' }} color={'black'} />,
  type: 'group',
  children: [
    {
      id: 'manage-jobs',
      title: <FormattedMessage id={items + '.jobs'} />,
      type: 'item',
      url: '/dashboard/career/jobs'
    },
    {
      id: 'manage-categories',
      title: <FormattedMessage id={items + '.categories'} />,
      type: 'item',
      url: '/dashboard/career/categories'
    },
    {
      id: 'manage-articles',
      title: <FormattedMessage id={items + '.articles'} />,
      type: 'item',
      url: '/dashboard/career/articles'
    },
    {
      id: 'delete-articles',
      title: <FormattedMessage id={items + '.deletedCareers'} />,
      type: 'item',
      url: '/dashboard/career/deleted_careers'
    },
    {
      id: 'career-activities',
      title: <FormattedMessage id={items + '.activities'} />,
      type: 'item',
      icon: icons.IconBorderAll,
      url: '/dashboard/career/activities'
    }
  ]
};

export default careers;
