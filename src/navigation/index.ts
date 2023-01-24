import getStartedNavigations from './getStarted';
import hierarchyNavigations from './hierarchy';
import homeNavigations from './home';
import pagesNavigations from './pages';
import uiComponentsNavigations from './uiComponents';
import utilitiesNavigations from './utilities';

const allNavigations = [...homeNavigations, ...uiComponentsNavigations, ...utilitiesNavigations, ...pagesNavigations, ...hierarchyNavigations, ...getStartedNavigations];

export default allNavigations;
