// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconBrandFramer, IconTypography, IconPalette, IconShadow, IconWindmill, IconLayoutGridAdd } from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconBrandFramer,
  IconLayoutGridAdd
};

// ==============================|| Auctions MENU ITEMS ||============================== //

const auctions = {
  id: 'auctions',
  title: <FormattedMessage id="Auctions" />,
  icon: icons.IconTypography,
  type: 'group',
  children: [
    {
      id: 'auction-users',
      title: <FormattedMessage id="Auction Users" />,
      type: 'item',
      url: '/auction/users',
      icon: icons.IconTypography,
  
    },
    {
      id: 'manage',
      title: <FormattedMessage id="Manage" />,
      type: 'collapse',
      icon: icons.IconWindmill,
      children: [
        {
          id: 'manage-local-auction',
          title: <FormattedMessage id="Local Auction" />,
          type: 'item',
          url: '/auction/local',
        },
        {
          id: 'manage-international-auction',
          title: <FormattedMessage id="Internationl Auction" />,
          type: 'item',
          url: '/auction/international',
        
        },
        {
          id: 'manage-partners',
          title: <FormattedMessage id="Partners" />,
          type: 'item',
          url: '/auction/partners',
    
        },
        {
          id: 'delete-auction',
          title: <FormattedMessage id="Delete Auction" />,
          type: 'item',
          url: '/auction/deleted_auctions',

        }
      ]
    },
    {
      id: 'auction-activities',
      title: <FormattedMessage id="Activities" />,
      type: 'item',
      url: '/auction/activities',
      icon: icons.IconBrandFramer,
    },
    {
      id: 'faqs',
      title: <FormattedMessage id="FAQs" />,
      type: 'item',
      url: '/auction/faq',
      icon: icons.IconLayoutGridAdd,
    }
  ]
};

export default auctions;
