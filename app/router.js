import EmberRouter from '@ember/routing/router';
import RouterScroll from 'ember-router-scroll';
import config from './config/environment';

const Router = EmberRouter.extend(RouterScroll, {
  location: 'router-scroll',
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('event', { path: 'events/:id' });
});

export default Router;
