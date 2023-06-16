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

const careers = {
  id: 'careers',
  title: <FormattedMessage id="Careers" />,
  icon: <Briefcase size={23} strokeWidth={1.5} style={{ marginRight: '10px' }} color={'black'} />,
  type: 'group',
  children: [
    {
      id: 'manage-jobs',
      title: <FormattedMessage id="Jobs" />,
      type: 'item',
      url: '/career/jobs'
    },
    {
      id: 'manage-categories',
      title: <FormattedMessage id="Categories" />,
      type: 'item',
      url: '/career/categories'
    },
    {
      id: 'manage-articles',
      title: <FormattedMessage id="Articles" />,
      type: 'item',
      url: '/career/articles'
    },
    {
      id: 'delete-articles',
      title: <FormattedMessage id="Deleted Careers" />,
      type: 'item',
      url: '/career/deleted_careers'
    },
    {
      id: 'career-activities',
      title: <FormattedMessage id="Activities" />,
      type: 'item',
      icon: icons.IconBorderAll,
      url: '/career/activities'
    }
  ]
};

export default careers;
