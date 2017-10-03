/**
  All the color binding possibilities

  @property colorBindings
  @returns Array
  @private
*/
export const _colorBindings = ['dark:is-dark', 'isDark:is-dark', 'info:is-info', 'isInfo:is-info', 'warning:is-warning', 'isWarning:is-warning', 'isSuccess:is-success', 'success:is-success', 'info:is-info', 'isInfo:is-info', 'primary:is-primary', 'isPrimary:is-primary', 'isDanger:is-danger', 'danger:is-danger', 'isSmall:is-small', 'small:is-small', 'isMedium:is-medium', 'medium:is-medium', 'isLarge:is-large', 'large:is-large'];

/**
  All the responsive helpers

  @property _responsiveHelpers
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

/**
  All general UI class helpers

  @property _helpers
  @returns Array
  @private
*/
export const _helpers = [
  // Float
  'isClearfix:is-clearfix',
  'isPulledLeft:is-pulled-left',
  'isPulledRight:is-pulled-right',

  // Spacing
  'isMarginless:is-marginless',
  'isPaddingless:is-paddingless',

  // Other
  'isOverlay:is-overlay',
  'isClipped:is-clipped',
  'isRadiusless:is-radiusless',
  'isShadowless:is-shadowless',
  'isUnselectable:is-unselectable'
];

/**
  All the grid attribute bindings

  @property gridBindings
  @private
*/
export const _gridBindings = ['isThreeQuarters:is-three-quarters', 'isOffsetThreeQuarters:is-offset-three-quarters', 'isNarrowThreeQuarters:is-narrow-three-quarters', 'isThreeQuartersDesktop:is-three-quarters-desktop', 'isThreeQuartersMobile:is-three-quarters-mobile', 'isThreeQuartersTablet:is-three-quarters-tablet', 'isTwoThirds:is-two-thirds', 'isOffsetTwoThirds:is-offset-two-thirds', 'isNarrowTwoThirds:is-narrow-two-thirds', 'isTwoThirdsDesktop:is-two-thirds-desktop', 'isTwoThirdsMobile:is-two-thirds-mobile', 'isTwoThirdsTablet:is-two-thirds-tablet', 'isHalf:is-half', 'isOffsetHalf:is-offset-half', 'isNarrowHalf:is-narrow-half', 'isHalfDesktop:is-half-desktop', 'isHalfMobile:is-half-mobile', 'isHalfTablet:is-half-tablet', 'isOneThird:is-one-third', 'isOffsetOneThird:is-offset-one-third', 'isNarrowOneThird:is-narrow-one-third', 'isOneThirdDesktop:is-one-third-desktop', 'isOneThirdMobile:is-one-third-mobile', 'isOneThirdTablet:is-one-third-tablet', 'isOneQuarter:is-one-quarter', 'isOffsetOneQuarter:is-offset-one-quarter', 'isNarrowOneQuarter:is-narrow-one-quarter', 'isOneQuarterDesktop:is-one-quarter-desktop', 'isOneQuarterMobile:is-one-quarter-mobile', 'isOneQuarterTablet:is-one-quarter-tablet', 'is1:is-1', 'isOffset1:is-offset-1', 'isNarrow1:is-narrow-1', 'is1Desktop:is-1-desktop', 'is1Mobile:is-1-mobile', 'is1Tablet:is-1-tablet', 'is2:is-2', 'isOffset2:is-offset-2', 'isNarrow2:is-narrow-2', 'is2Desktop:is-2-desktop', 'is2Mobile:is-2-mobile', 'is2Tablet:is-2-tablet', 'is3:is-3', 'isOffset3:is-offset-3', 'isNarrow3:is-narrow-3', 'is3Desktop:is-3-desktop', 'is3Mobile:is-3-mobile', 'is3Tablet:is-3-tablet', 'is4:is-4', 'isOffset4:is-offset-4', 'isNarrow4:is-narrow-4', 'is4Desktop:is-4-desktop', 'is4Mobile:is-4-mobile', 'is4Tablet:is-4-tablet', 'is5:is-5', 'isOffset5:is-offset-5', 'isNarrow5:is-narrow-5', 'is5Desktop:is-5-desktop', 'is5Mobile:is-5-mobile', 'is5Tablet:is-5-tablet', 'is6:is-6', 'isOffset6:is-offset-6', 'isNarrow6:is-narrow-6', 'is6Desktop:is-6-desktop', 'is6Mobile:is-6-mobile', 'is6Tablet:is-6-tablet', 'is7:is-7', 'isOffset7:is-offset-7', 'isNarrow7:is-narrow-7', 'is7Desktop:is-7-desktop', 'is7Mobile:is-7-mobile', 'is7Tablet:is-7-tablet', 'is8:is-8', 'isOffset8:is-offset-8', 'isNarrow8:is-narrow-8', 'is8Desktop:is-8-desktop', 'is8Mobile:is-8-mobile', 'is8Tablet:is-8-tablet', 'is9:is-9', 'isOffset9:is-offset-9', 'isNarrow9:is-narrow-9', 'is9Desktop:is-9-desktop', 'is9Mobile:is-9-mobile', 'is9Tablet:is-9-tablet', 'is10:is-10', 'isOffset10:is-offset-10', 'isNarrow10:is-narrow-10', 'is10Desktop:is-10-desktop', 'is10Mobile:is-10-mobile', 'is10Tablet:is-10-tablet', 'is11:is-11', 'isOffset11:is-offset-11', 'isNarrow11:is-narrow-11', 'is11Desktop:is-11-desktop', 'is11Mobile:is-11-mobile', 'is11Tablet:is-11-tablet'];
