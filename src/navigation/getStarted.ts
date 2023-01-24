import Model from '../interface/Model';

const getStartedNavigations: Model[] = [
  {
    label: 'Get Started',
    items: [
      {
        label: 'Documentation',
        icon: 'pi pi-fw pi-question',
        to: '/documentation',
      },
      {
        label: 'View Source',
        icon: 'pi pi-fw pi-search',
        url: 'https://github.com/primefaces/sakai-react',
        target: '_blank',
      },
    ],
  },
];

export default getStartedNavigations;
