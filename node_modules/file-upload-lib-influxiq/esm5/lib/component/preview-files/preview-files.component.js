/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.imgURL;
}
var PreviewFilesComponent = /** @class */ (function () {
    function PreviewFilesComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    PreviewFilesComponent.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    /**
     * @return {?}
     */
    PreviewFilesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // console.log('Preview component: ', this.data);
    };
    PreviewFilesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-preview-files',
                    template: "<h2 mat-dialog-title>File Preview</h2>\n<mat-dialog-content class=\"mat-typography\">\n  <img mat-card-image [src]=\"this.data.imgURL\" *ngIf=\"this.data.imgURL\">\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button type=\"button\" mat-dialog-close>Cancel</button>\n</mat-dialog-actions>",
                    styles: ["img{max-width:100%;max-height:64vh}"]
                }] }
    ];
    /** @nocollapse */
    PreviewFilesComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return PreviewFilesComponent;
}());
export { PreviewFilesComponent };
if (false) {
    /** @type {?} */
    PreviewFilesComponent.prototype.dialogRef;
    /** @type {?} */
    PreviewFilesComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy1maWxlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9maWxlLXVwbG9hZC1saWItaW5mbHV4aXEvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L3ByZXZpZXctZmlsZXMvcHJldmlldy1maWxlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBYSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFFcEYsZ0NBRUM7OztJQURDLDRCQUFZOztBQUdkO0lBT0UsK0JBQ1MsU0FBOEMsRUFDckIsSUFBZ0I7UUFEekMsY0FBUyxHQUFULFNBQVMsQ0FBcUM7UUFDckIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7Ozs7SUFFdkQseUNBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsd0NBQVE7OztJQUFSO1FBQ0UsaURBQWlEO0lBQ25ELENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0Isd1VBQTZDOztpQkFFOUM7Ozs7Z0JBVm1CLFlBQVk7Z0RBZTNCLE1BQU0sU0FBQyxlQUFlOztJQVUzQiw0QkFBQztDQUFBLEFBbkJELElBbUJDO1NBZFkscUJBQXFCOzs7SUFHOUIsMENBQXFEOztJQUNyRCxxQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBpbWdVUkw6IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXByZXZpZXctZmlsZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJldmlldy1maWxlcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3ByZXZpZXctZmlsZXMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByZXZpZXdGaWxlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFByZXZpZXdGaWxlc0NvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7IH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdQcmV2aWV3IGNvbXBvbmVudDogJywgdGhpcy5kYXRhKTtcbiAgfVxuXG59XG4iXX0=