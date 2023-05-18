import dashboard from './dashboard';
import project from './project';
import propertyhub from './property-hub';
import units from './units';
import auctions from './auctions';
import management from './management';
import exhibition from './exhibition';
/**
 * import auctions from './auctions';
 * import services from './services';
 * 
 * import leads from './leads';
 
 * import agents from './agents';
 * import users from './users';
 * import careers from './companies';
 * import reviews from './reviews';
 * import pages from './pages';
 * import blogs from './blogs';
 * import community_guide from './community_guide';
 * import banners from './banners';
 * import reports from './reports';
 * import subscribers from './subscribers';
 * import settings from './settings';
 * import contracts from './contracts';
 */
import companies from './companies';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard, management, project, propertyhub, companies, units, exhibition, auctions]
};

export default menuItems;
