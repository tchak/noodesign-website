import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export default helper(function([text]) {
  const [t, l] = text.split(/https/);
  const a = `<a href="https${l}" target="_blank" rel="noreferrer noopener">https${l}</a>`;
  return htmlSafe(`${t}<br>${a}`);
});
