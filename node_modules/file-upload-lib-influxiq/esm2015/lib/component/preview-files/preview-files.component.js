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
export class PreviewFilesComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log('Preview component: ', this.data);
    }
}
PreviewFilesComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-preview-files',
                template: "<h2 mat-dialog-title>File Preview</h2>\n<mat-dialog-content class=\"mat-typography\">\n  <img mat-card-image [src]=\"this.data.imgURL\" *ngIf=\"this.data.imgURL\">\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button type=\"button\" mat-dialog-close>Cancel</button>\n</mat-dialog-actions>",
                styles: ["img{max-width:100%;max-height:64vh}"]
            }] }
];
/** @nocollapse */
PreviewFilesComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    PreviewFilesComponent.prototype.dialogRef;
    /** @type {?} */
    PreviewFilesComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy1maWxlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9maWxlLXVwbG9hZC1saWItaW5mbHV4aXEvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L3ByZXZpZXctZmlsZXMvcHJldmlldy1maWxlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBYSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFFcEYsZ0NBRUM7OztJQURDLDRCQUFZOztBQVFkLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBRWhDLFlBQ1MsU0FBOEMsRUFDckIsSUFBZ0I7UUFEekMsY0FBUyxHQUFULFNBQVMsQ0FBcUM7UUFDckIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7Ozs7SUFFdkQsU0FBUztRQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixpREFBaUQ7SUFDbkQsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3Qix3VUFBNkM7O2FBRTlDOzs7O1lBVm1CLFlBQVk7NENBZTNCLE1BQU0sU0FBQyxlQUFlOzs7O0lBRHZCLDBDQUFxRDs7SUFDckQscUNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcbiAgaW1nVVJMOiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1wcmV2aWV3LWZpbGVzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ByZXZpZXctZmlsZXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcmV2aWV3LWZpbGVzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcmV2aWV3RmlsZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxQcmV2aWV3RmlsZXNDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YSkgeyB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnUHJldmlldyBjb21wb25lbnQ6ICcsIHRoaXMuZGF0YSk7XG4gIH1cblxufVxuIl19