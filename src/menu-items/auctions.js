// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconBrandFramer, IconTypography, IconPalette, IconShadow, IconWindmill, IconLayoutGridAdd } from '@tabler/icons';
import { Hammer } from 'tabler-icons-react';
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
  icon: <Hammer size={23} style={{ marginRight: '10px' }} strokeWidth={1.5} color={'black'} />,
  type: 'group',
  children: [
    {
      id: 'auction-users',
      title: <FormattedMessage id="Auction Users" />,
      type: 'item',
      url: '/dashboard/auction/users',
      icon: icons.IconTypography
    },

    {
      id: 'manage-local-auction',
      title: <FormattedMessage id="Manage Local Auction" />,
      type: 'item',
      url: '/dashboard/auction/local'
    },
    {
      id: 'manage-international-auction',
      title: <FormattedMessage id="Manage Internationl Auction" />,
      type: 'item',
      url: '/dashboard/auction/international'
    },
    {
      id: 'manage-partners',
      title: <FormattedMessage id="Manage Partners" />,
      type: 'item',
      url: '/dashboard/auction/partners'
    },
    {
      id: 'deleted-auction',
      title: <FormattedMessage id="Manage Deleted Auctions" />,
      type: 'item',
      url: '/dashboard/auction/deleted_auctions'
    },
    {
      id: 'auction-activities',
      title: <FormattedMessage id="Activities" />,
      type: 'item',
      url: '/dashboard/auction/activities',
      icon: icons.IconBrandFramer
    },
    {
      id: 'faqs',
      title: <FormattedMessage id="FAQs" />,
      type: 'item',
      url: '/dashboard/auction/faq',
      icon: icons.IconLayoutGridAdd
    }
  ]
};

export default auctions;
