// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  IconKey,
  IconHeartHandshake,
  IconPhoto,
  IconReceipt2,
  IconBug,
  IconBellRinging,
  IconPhoneCall,
  IconQuestionMark,
  IconShieldLock
} from '@tabler/icons';
import { MessageChatbot } from 'tabler-icons-react';

// constant
const icons = {
  IconKey,
  IconReceipt2,
  IconBug,
  IconBellRinging,
  IconPhoneCall,
  IconQuestionMark,
  IconShieldLock,
  IconPhoto,
  IconHeartHandshake
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const items = 'dashboard.menuItems.communityGuide';

const communityGuide = {
  id: 'community-guide',
  title: <FormattedMessage id={items + '.communityGuide'} />,
  icon: <MessageChatbot size={23} style={{ marginRight: '10px' }} strokeWidth={1.5} color={'black'} />,
  type: 'group',
  children: [
    {
      id: 'manage-community',
      title: <FormattedMessage id={items + '.community'} />,
      type: 'item',
      icon: icons.IconHeartHandshake,
      url: '/dashboard/community-guide/community'
    },
    {
      id: 'manage-tower-image',
      title: <FormattedMessage id={items + '.towerImage'} />,
      type: 'item',
      icon: icons.IconPhoto,
      url: '/dashboard/community-guide/tower'
    },
    {
      id: 'change-community-publish-status',
      title: <FormattedMessage id={items + '.changeCommunityPublishStatus'} />,
      type: 'item',
      icon: icons.IconBug,
      url: '/dashboard/community-guide/list_community_status'
    },
    {
      id: 'change-tower-status',
      title: <FormattedMessage id={items + '.changeTowerStatus'} />,
      type: 'item',
      icon: icons.IconBellRinging,
      url: '/dashboard/community-guide/list_tower_status',
      target: true
    },
    {
      id: 'community-activities',
      title: <FormattedMessage id={items + '.activities'} />,
      type: 'item',
      icon: icons.IconPhoneCall,
      url: '/dashboard/community-guide/activities',
      target: true
    }
  ]
};

export default communityGuide;
