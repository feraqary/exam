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

const agents = {
  id: 'agents',
  title: <FormattedMessage id="agents" />,
  icon: icons.IconPictureInPicture,
  type: 'group',
  children: [
    {
      id: 'add-agent',
      title: <FormattedMessage id="Add Agent" />,
      type: 'item',
      icon: icons.IconPictureInPicture
    },
    {
      id: 'manage-agents',
      title: <FormattedMessage id="Manage Agents" />,
      type: 'collapse',
      icon: icons.IconForms,
      children: [
        {
          id: 'local-agents',
          title: <FormattedMessage id="Local Agents" />,
          type: 'item',
          url: '/agent/local',
          breadcrumbs: false
        },
        {
          id: 'international-agents',
          title: <FormattedMessage id="International Agents" />,
          type: 'item',
          url: '/agent/international',
          breadcrumbs: false
        },
        {
          id: 'delete-agent',
          title: <FormattedMessage id="Delete Agent" />,
          type: 'item',
          url: '/agent/deleted_agents',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'activities',
      title: <FormattedMessage id="Activities" />,
      type: 'item',
      icon: icons.IconBorderAll,
      url: '/agent/activities',
    }
  ]
};

export default agents;
