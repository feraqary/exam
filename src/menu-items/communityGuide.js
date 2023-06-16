// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconKey,IconHeartHandshake,IconPhoto, IconReceipt2, IconBug, IconBellRinging, IconPhoneCall, IconQuestionMark, IconShieldLock } from '@tabler/icons';
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

const communityGuide = {
  id: 'community-guide',
  title: <FormattedMessage id="community guide" />,
  icon: <MessageChatbot size={23} style={{ marginRight: '10px' }} strokeWidth={1.5} color={'black'} />,
  type: 'group',
  children: [
    {
      id: 'manage-community',
      title: <FormattedMessage id="Community" />,
      type: 'item',
      icon:icons.IconHeartHandshake,
      url: '/community-guide/community'
    },
    {
      id: 'manage-tower-image',
      title: <FormattedMessage id="Tower Image" />,
      type: 'item',
      icon:icons.IconPhoto,
      url: '/community-guide/tower'
    },

    {
      id: 'change-community-publish-status',
      title: <FormattedMessage id="Change Community Publish Status" />,
      type: 'item',
      icon: icons.IconBug,
      url: '/community-guide/list_community_status'
    },
    {
      id: 'change-tower-status',
      title: <FormattedMessage id="Change Tower Status" />,
      type: 'item',
      icon: icons.IconBellRinging,
      url: '/community-guide/list_tower_status',
      target: true
    },
    {
      id: 'community-activities',
      title: <FormattedMessage id="Activities" />,
      type: 'item',
      icon: icons.IconPhoneCall,
      url: '/community-guide/activities',
      target: true
    }
  ]
};

export default communityGuide;
