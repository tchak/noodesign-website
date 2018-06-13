import Route from '@ember/routing/route';

const nav = [
  {
    title: 'QUI SOMMES-NOOS ?',
    link: '#about'
  },
  {
    title: 'ÉVÉNEMENTS À VENIR',
    link: '#events'
  },
  {
    title: 'PROJETS',
    link: '#projects'
  },
  {
    title: 'LES ARCHIVES',
    link: '#archived'
  }
];

export default Route.extend({
  model() {
    return { nav };
  }
});
