// third-party
import { FormattedMessage } from 'react-intl';
import { ArrowsExchange2 } from 'tabler-icons-react';
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

const exchange = {
  id: 'exchange',
  title: <FormattedMessage id="Exchange" />,
  icon: <ArrowsExchange2 size={23} style={{ marginRight: '10px' }} strokeWidth={1.5} color={'black'} />,
  type: 'group',
  children: [
    {
      id: 'local-units',
      title: <FormattedMessage id="Local Units" />,
      type: 'item',
      url: '/dashboard/exchange/local'
    },
    {
      id: 'international-units',
      title: <FormattedMessage id="International Units" />,
      type: 'item',
      url: '/dashboard/exchange/international'
    },
    {
      id: 'offer-units',
      title: <FormattedMessage id="Offer Units" />,
      type: 'item',
      icon: icons.IconForms,
      url: '/dashboard/exchange/offer'
    },
    {
      id: 'manage-offer-categories',
      title: <FormattedMessage id="Manage Offer Categories" />,
      type: 'item',
      icon: icons.IconForms,
      url: '/dashboard/exchange/manage'
    },
    {
      id: 'exchange-activities',
      title: <FormattedMessage id="Activities" />,
      type: 'item',
      icon: icons.IconBorderAll,
      url: '/dashboard/exchange/activities'
    }
  ]
};

export default exchange;
