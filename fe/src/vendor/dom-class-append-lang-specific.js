/**
 * Created by fed on 16/3/31.
 */
import classNames from 'classnames';

import { mapArray } from './array';

const $locale = process.env.LOCALE || 'us';

export default function (className, style) {
  const rawClassNames = [className, `${className}-${$locale}`];
  if (style) {
    return classNames(...mapArray(rawClassNames, x => style[x]||''));
  }
  return classNames(...rawClassNames);
}
