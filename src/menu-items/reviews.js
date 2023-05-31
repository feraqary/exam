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

const reviews = {
  id: 'reviews',
  title: <FormattedMessage id="Reviews" />,
  icon: icons.IconPictureInPicture,
  type: 'group',
  children: [
    {
      id: 'agent-reviews',
      title: <FormattedMessage id="Agent Reviews" />,
      type: 'item',
      icon: icons.IconForms,
      url:'/review/agentreview'
    },
    {
      id: 'company-reviews',
      title: <FormattedMessage id="Company Reviews" />,
      type: 'item',
      url:'/review/company',
      icon: icons.IconForms,
    },
    {
      id: 'project-reviews',
      title: <FormattedMessage id="Project Reviews" />,
      type: 'item',
      url:'/review/project',
      icon: icons.IconForms,
    },
    {
      id: 'building-reviews',
      title: <FormattedMessage id="Building Reviews" />,
      type: 'item',
      url:'/review/building',
      icon: icons.IconForms,
    }
  ]
};

export default reviews;
