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

const banners = {
  id: 'banners_ads',
  title: <FormattedMessage id="Banners / Ads" />,
  icon: icons.IconPictureInPicture,
  type: 'group',
  children: [
    {
      id: 'add-banners',
      title: <FormattedMessage id="Add Banner" />,
      type: 'item',
      icon: icons.IconPictureInPicture,
      url: '/banners_ads/add_banner'
    },
    {
      id: 'manage-banners',
      title: <FormattedMessage id="Manage Banners" />,
      type: 'collapse',
      icon: icons.IconForms,
      children: [
        {
          id: 'banners',
          title: <FormattedMessage id="Banners" />,
          type: 'item',
          url: '/banners_ads/banners',
          breadcrumbs: false
        },
        {
          id: 'company-videos',
          title: <FormattedMessage id="Company Videos" />,
          type: 'item',
          url: '/banners_ads/company_videos',
          breadcrumbs: false
        },
        {
          id: 'project-videos',
          title: <FormattedMessage id="Project Videos" />,
          type: 'item',
          url: '/banners_ads/project_videos',
          breadcrumbs: false
        },
        {
          id: 'tower-videos',
          title: <FormattedMessage id="Tower Videos" />,
          type: 'item',
          url: '/banners_ads/tower_videos',
          breadcrumbs: false
        },
        {
          id: 'deleted-banners',
          title: <FormattedMessage id="Deleted Banners" />,
          type: 'item',
          url: '/banners_ads/deleted_banners',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'banner-activities',
      title: <FormattedMessage id="Activities" />,
      type: 'item',
      icon: icons.IconBorderAll,
      url: '/banners_ads/activities'
    }
  ]
};

export default banners;
