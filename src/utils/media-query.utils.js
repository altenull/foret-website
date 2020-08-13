export const BreakpointEnum = Object.freeze({
  ViewPort4: 'viewPort4',
  ViewPort9: 'viewPort9',
  ViewPort12: 'viewPort12',
});

// Breakpoint references
// https://dev.to/rstacruz/what-media-query-breakpoints-should-i-use-292c
// https://flaviocopes.com/css-breakpoints/
const breakpointMap = {
  [BreakpointEnum.ViewPort4]: 480, // mobile(landscape) ~ tablet(portrait)
  [BreakpointEnum.ViewPort9]: 992, // tablet(landscape) ~ desktop
  [BreakpointEnum.ViewPort12]: 1200, // fullhd ~
};

export const mediaQuery = (breakpointEnum) => `@media (min-width: ${breakpointMap[breakpointEnum]}px)`;
