/**
 * Created by fed on 16/4/8.
 */
export const changePopupVisibility = shouldShow => ({
  type: 'TOP_BANNER_POPUP_VISIBILITY_CHANGE',
  shouldShow
});

export const changeCurrency = index => ({
  type: 'TOP_BANNER_CURRENCY_CHANGE',
  index
});
