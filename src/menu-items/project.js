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

const items = 'dashboard.menuItems.projects';

const project = {
  id: 'projects',
  title: <FormattedMessage id={items + '.projects'} />,
  icon: <BuildingEstate size={23} strokeWidth={1.5} color={'black'} style={{ marginRight: '10px' }} />,
  type: 'group',
  children: [
    {
      id: 'add-project',
      title: <FormattedMessage id={items + '.addProject'} />,
      type: 'item',
      icon: icons.IconUserCheck,
      url: '/dashboard/project/add_project'
    },
    {
      id: 'local',
      title: <FormattedMessage id={items + '.localProjects'} />,
      type: 'item',
      icon: icons.IconPin,
      url: '/dashboard/project/project_management/local'
    },
    {
      id: 'international',
      title: <FormattedMessage id={items + '.internationalProjects'} />,
      type: 'item',
      icon: icons.IconMapPin,
      url: '/dashboard/project/project_management/international'
    },
    {
      id: 'create-category',
      title: <FormattedMessage id={items + '.createCategory'} />,
      type: 'item',
      icon: icons.IconMapPin,
      url: '/dashboard/project/create_category'
    },
    {
      id: 'shared-projects',
      title: <FormattedMessage id={items + '.sharedProjects'} />,
      type: 'item',
      icon: icons.IconHomeShare,
      url: '/dashboard/project/shared_projects'
    },
    {
      id: 'blocked-projects',
      title: <FormattedMessage id={items + '.blockedProjects'} />,
      type: 'item',
      icon: icons.IconTrashX,
      url: '/dashboard/project/blocked_projects'
    },
    {
      id: 'deleted-projects',
      title: <FormattedMessage id={items + '.deletedProjects'} />,
      type: 'item',
      icon: icons.IconTrashX,
      url: '/dashboard/project/del_project'
    },
    {
      id: 'promotions',
      title: <FormattedMessage id={items + '.promotions'} />,
      type: 'item',
      icon: icons.IconLayoutKanban,
      url: '/dashboard/project/project_management/promotions'
    },
    {
      id: 'manage-requests',
      title: <FormattedMessage id={items + '.manageRequests'} />,
      type: 'item',
      icon: icons.IconMail,
      url: '/dashboard/project/manage_requests'
    },
    {
      id: 'project-activities',
      title: <FormattedMessage id={items + '.activities'} />,
      type: 'item',
      icon: icons.IconBasket,
      url: '/dashboard/project/activities'
    }
  ]
};

export default project;
