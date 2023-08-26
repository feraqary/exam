// third-party
import { FormattedMessage } from 'react-intl';
import { HomeStar } from 'tabler-icons-react';

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
const items = 'dashboard.menuItems.reviews';

const reviews = {
  id: 'reviews',
  title: <FormattedMessage id={items + '.reviews'} />,
  icon: <HomeStar size={23} strokeWidth={1.5} color={'black'} style={{ marginRight: '10px' }} />,
  type: 'group',
  children: [
    {
      id: 'agent-reviews',
      title: <FormattedMessage id={items + '.agentReviews'} />,
      type: 'item',
      icon: icons.IconForms,
      url: '/dashboard/review/agentreview'
    },
    {
      id: 'company-reviews',
      title: <FormattedMessage id={items + '.companyReviews'} />,
      type: 'item',
      url: '/dashboard/review/company',
      icon: icons.IconForms
    },
    {
      id: 'project-reviews',
      title: <FormattedMessage id={items + '.projectReviews'} />,
      type: 'item',
      url: '/dashboard/review/project',
      icon: icons.IconForms
    },
    {
      id: 'building-reviews',
      title: <FormattedMessage id={items + '.buildingReviews'} />,
      type: 'item',
      url: '/dashboard/review/building',
      icon: icons.IconForms
    }
  ]
};

export default reviews;
