import dashboard from './dashboard';
import project from './project';
import propertyhub from './property-hub';
import units from './units';
import auctions from './auctions';
/**
 * import auctions from './auctions';
 * import services from './services';
 * import exhibition from './exhibitions';
 * import leads from './leads';
 * import managment from from './managment';
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
  items: [dashboard, project, propertyhub, companies, units, auctions]
};

export default menuItems;
