import { helper } from '@ember/component/helper';
import { camelize } from '@ember/string';

export default helper(function([block], params = {}) {
  return styles[camelize(block)].replace(
    /{{([a-z]*)}}/g,
    (_, param) => params[param]
  );
});

const outline = 'focus:outline-none focus:shadow-outline';
const link = `no-underline ${outline}`;
const flexBetween = 'flex items-center justify-between';
const flexAround = 'flex items-center justify-around';
const hr = 'border-b border-grey-lighter';

const styles = {
  application: `flex flex-col
    font-mono text-black leading-normal text-base
    h-full mt-12`,
  page: `${flexAround} flex-col
    container md:px-8`,
  header: `${hr} ${flexBetween} flex-wrap
    fixed pin-t pin-r pin-l
    font-sans p-4 z-10
    bg-white`,
  footer: `flex-no-shrink
    font-sans md:text-lg
    text-white bg-black
    p-6 mt-12`,
  menu: `flex items-center
    px-3 py-2
    text-grey-light hover:text-grey-lighter
    border rounded border-grey-light hover:border-grey-lighter`,
  eventLink: `${link} ${flexAround}
    bg-igor-{{color}}-gray text-igor-{{color}}
    hover:bg-white hover:text-igor-{{color}}-lighter transition-bg
    m-4 h-32 md:h-48 w-full md:w-2/3
    font-bold text-sm md:text-xl`,
  navLink: `${link} text-base font-light
    p-1 mr-4 md:mt-0
    block md:inline-block
    text-black hover:text-grey-light`
};
