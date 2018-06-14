import EmberRouter from '@ember/routing/router';
import { inject as service } from '@ember/service';
import RouterScroll from 'ember-router-scroll';
import config from './config/environment';

const Router = EmberRouter.extend(RouterScroll, {
  location: config.locationType,
  rootURL: config.rootURL,

  headData: service(),
  setTitle(title) {
    this.headData.set('title', title);
  }
});

Router.map(function() {
  this.route('event', { path: 'events/:id' });
});

export default Router;
