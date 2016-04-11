/**
 * Created by fed on 16/3/31.
 */
import classNames from 'classnames';

const $locale = process.env.LOCALE || 'us';

export default function (className, style) {
  const rawClassNames = [className, `${className}-${$locale}`];
  if (style) {
    return classNames(...rawClassNames.map(name => style[name] || ''));
  }
  return classNames(...rawClassNames);
}
