import { NgModule } from '@angular/core';
import { SatPopoverHoverDirective } from './popover-hover.directive';
import { SatPopover, SatPopoverAnchor } from './popover.component';

const COMPONENTS = [SatPopoverAnchor, SatPopoverHoverDirective, SatPopover];

/**
 * All-in-one module that imports and re-exports all popover components and directives.
 * 
 * Instead of importing this module, it is better to use the standalone components,
 * and import the necessary component/directive only.
 */
@NgModule({
  imports: COMPONENTS,
  exports: COMPONENTS,
})
export class SatPopoverModule {}