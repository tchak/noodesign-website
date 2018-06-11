import { helper } from '@ember/component/helper';

export default helper(function([url]) {
  let [,, host] = url.split('/');
  return host;
});
