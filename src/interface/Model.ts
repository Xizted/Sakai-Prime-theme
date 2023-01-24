interface MenuItem {
  label: string;
  icon: string;
  to?: string;
  preventExact?: boolean;
  class?: string;
  url?: string;
  target?: string;
  items?: MenuItem[] | MenuItem[][];
}

interface Model {
  label: string;
  items?: MenuItem[];
  separator?: boolean;
}

export default Model;
