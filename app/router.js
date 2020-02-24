import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('event', { path: 'events/:id' });
  this.route('argumentaire-theorique', {
    path: 'designing-community/argumentaire-theorique'
  });
});
