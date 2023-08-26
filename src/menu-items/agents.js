// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconClipboardCheck, IconPictureInPicture, IconForms, IconBorderAll, IconChartDots, IconStairsUp } from '@tabler/icons';
import { User } from 'tabler-icons-react';
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

const items = 'dashboard.menuItems.agents';

const agents = {
  id: 'agents',
  title: <FormattedMessage id={items + '.agents'} />,
  icon: <User size={23} strokeWidth={1.5} style={{ marginRight: '10px' }} color={'black'} />,
  type: 'group',
  children: [
    {
      id: 'add-agent',
      title: <FormattedMessage id={items + '.addAgent'} />,
      type: 'item',
      icon: icons.IconPictureInPicture,
      url: '/dashboard/agent/add_agent'
    },
    {
      id: 'local-agents',
      title: <FormattedMessage id={items + '.manageLocalAgents'} />,
      type: 'item',
      url: '/dashboard/agent/local',
      breadcrumbs: false
    },
    {
      id: 'international-agents',
      title: <FormattedMessage id={items + '.manageInternationalAgents'} />,
      type: 'item',
      url: '/dashboard/agent/international',
      breadcrumbs: false
    },
    {
      id: 'deleted-agent',
      title: <FormattedMessage id={items + '.manageDeletedAgents'} />,
      type: 'item',
      url: '/dashboard/agent/deleted_agents',
      breadcrumbs: false
    },
    {
      id: 'agent-activities',
      title: <FormattedMessage id={items + '.activities'} />,
      type: 'item',
      icon: icons.IconBorderAll,
      url: '/dashboard/agent/activities'
    }
  ]
};

export default agents;
