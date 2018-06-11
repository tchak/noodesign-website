import { helper } from '@ember/component/helper';

export default helper(function([text, separator]) {
  return text.join(separator || ', ');
});
