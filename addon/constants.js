/**
  All the color binding possibilities

  @property colorBindings
  @returns Array
  @private
*/
export const _colorBindings = ['dark:is-dark', 'isDark:is-dark', 'info:is-info', 'isInfo:is-info', 'warning:is-warning', 'isWarning:is-warning', 'isSuccess:is-success', 'success:is-success', 'info:is-info', 'isInfo:is-info', 'primary:is-primary', 'isPrimary:is-primary', 'isDanger:is-danger', 'danger:is-danger', 'isSmall:is-small', 'small:is-small', 'isMedium:is-medium', 'medium:is-medium', 'isLarge:is-large', 'large:is-large'];

/**
  All the responsive helpers

  @property responsiveHelpers
  @returns Array
  @private
*/
// REVIEW consider moving this to a service like grid bindings
export const _responsiveHelpers = [
  'isFlexMobile:is-flex-mobile',
  'isFlexTabletOnly:is-flex-tablet-only',
  'isFlexDesktopOnly:is-flex-desktop-only',
  'isFlexWidescreen:is-flex-wide-screen',
  'isFlexTouch:is-flex-touch',
  'isFlexTablet:is-flex-tablet',
  'isFlexDesktop:is-flex-desktop',

  'isBlockMobile:is-block-mobile',
  'isBlockTabletOnly:is-block-tablet-only',
  'isBlockDesktopOnly:is-block-desktop-only',
  'isBlockWidescreen:is-block-wide-screen',
  'isBlockTouch:is-block-touch',
  'isBlockTablet:is-block-tablet',
  'isBlockDesktop:is-block-desktop',

  'isInlineMobile:is-inline-mobile',
  'isInlineTabletOnly:is-inline-tablet-only',
  'isInlineDesktopOnly:is-inline-desktop-only',
  'isInlineWidescreen:is-inline-wide-screen',
  'isInlineTouch:is-inline-touch',
  'isInlineTablet:is-inline-tablet',
  'isInlineDesktop:is-inline-desktop',

  'isInlineBlockMobile:is-inline-block-mobile',
  'isInlineBlockTabletOnly:is-inline-block-tablet-only',
  'isInlineBlockDesktopOnly:is-inline-block-desktop-only',
  'isInlineBlockWidescreen:is-inline-block-wide-screen',
  'isInlineBlockTouch:is-inline-block-touch',
  'isInlineBlockTablet:is-inline-block-tablet',
  'isInlineBlockDesktop:is-inline-block-desktop',

  'isInlineFlexMobile:is-inline-flex-mobile',
  'isInlineFlexTabletOnly:is-inline-flex-tablet-only',
  'isInlineFlexDesktopOnly:is-inline-flex-desktop-only',
  'isInlineFlexWidescreen:is-inline-flex-wide-screen',
  'isInlineFlexTouch:is-inline-flex-touch',
  'isInlineFlexTablet:is-inline-flex-tablet',
  'isInlineFlexDesktop:is-inline-flex-desktop',

  'isHiddenMobile:is-hidden-mobile',
  'isHiddenTabletOnly:is-hidden-tablet-only',
  'isHiddenDesktopOnly:is-hidden-desktop-only',
  'isHiddenWidescreen:is-hidden-widescreen',
  'isHiddenTouch:is-hidden-touch',
  'isHiddenTablet:is-hidden-tablet',
  'isHiddenDesktop:is-hidden-desktop',

  'block',
  'flex',
  'inline',
  'inlineBlock:inline-block',
  'inlineFlex:inline-flex'
];
