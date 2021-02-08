interface Link {
  route: string;
  label: string;
}

export const NAV_LINKS: Link[] = [
  {
    route: '/',
    label: 'Home',
  },
  {
    route: '/portfolio',
    label: 'My Portfolio',
  },
  {
    route: '/explore',
    label: 'Explore',
  },
];
