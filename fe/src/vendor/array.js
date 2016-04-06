/**
 * Created by fed on 16/3/31.
 */
export function mapArray(array, fn) {
  const length = array.length;
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(fn.call(array, array[i], i));
  }
  return result;
}
