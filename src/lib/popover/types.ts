export type SatPopoverScrollStrategy = 'noop' | 'block' | 'reposition' | 'close';
export const VALID_SCROLL: readonly SatPopoverScrollStrategy[] = ['noop', 'block', 'reposition', 'close'] as const;

export type SatPopoverHorizontalAlign = 'before' | 'start' | 'center' | 'end' | 'after';
export const VALID_HORIZ_ALIGN: readonly SatPopoverHorizontalAlign[] = ['before', 'start', 'center', 'end', 'after'] as const;

export type SatPopoverVerticalAlign = 'above' | 'start' | 'center' | 'end' | 'below';
export const VALID_VERT_ALIGN: readonly SatPopoverVerticalAlign[] = ['above', 'start', 'center', 'end', 'below'] as const;

export interface SatPopoverOpenOptions {
  /**
   * Whether the popover should return focus to the previously focused element after
   * closing. Defaults to true.
   */
  restoreFocus?: boolean;

  /** Whether the first focusable element should be focused on open. Defaults to true. */
  autoFocus?: boolean;
}
