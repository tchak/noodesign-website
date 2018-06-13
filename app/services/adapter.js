import Adapter from 'ember-fetch-adapter';
import Cache from 'ember-fetch-adapter/cache';
import Bucket from 'ember-fetch-adapter/buckets/shoebox';
import { computed } from '@ember/object';

class PremberCache extends Cache {
  cacheKey(request) {
    return request.url.replace(/^http:\/\/localhost:\d+/, '');
  }
}

export default Adapter.extend({
  cache: computed(function() {
    return new PremberCache(new Bucket(this.fastboot));
  })
});
