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
      url: '/utils/util-typography',
      icon: icons.IconTypography,
      breadcrumbs: false
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
          url: 'https://tabler-icons.io/',
          external: true,
          target: true,
          breadcrumbs: false
        },
        {
          id: 'manage-international-auction',
          title: <FormattedMessage id="Internationl Auction" />,
          type: 'item',
          url: 'https://mui.com/material-ui/material-icons/#main-content',
          external: true,
          target: true,
          breadcrumbs: false
        },
        {
          id: 'manage-partners',
          title: <FormattedMessage id="Partners" />,
          type: 'item',
          url: 'https://mui.com/material-ui/material-icons/#main-content',
          external: true,
          target: true
        },
        {
          id: 'delete-auction',
          title: <FormattedMessage id="Delete Auction" />,
          type: 'item',
          url: 'https://mui.com/material-ui/material-icons/#main-content',
          external: true,
          target: true
        }
      ]
    },
    {
      id: 'activities',
      title: <FormattedMessage id="Activities" />,
      type: 'item',
      url: '/utils/util-animation',
      icon: icons.IconBrandFramer,
      breadcrumbs: false
    },
    {
      id: 'faqs',
      title: <FormattedMessage id="FAQs" />,
      type: 'item',
      url: '/utils/util-grid',
      icon: icons.IconLayoutGridAdd,
      breadcrumbs: false
    }
  ]
};

export default auctions;
