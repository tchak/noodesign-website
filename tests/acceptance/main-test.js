import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | main', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
