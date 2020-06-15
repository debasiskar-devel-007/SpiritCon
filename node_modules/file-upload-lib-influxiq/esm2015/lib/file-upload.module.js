/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FileUploadComponent } from './file-upload.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './Module/material-module';
import { HttpClientModule } from '@angular/common/http';
import { ListingModule } from "listing-angular7";
import { DragDropDirective } from './directive/drag-drop.directive';
import { AlertMessageComponent } from './component/alert-message/alert-message.component';
import { DialogBoxComponent } from './component/dialog-box/dialog-box.component';
import { PreviewFilesComponent } from './component/preview-files/preview-files.component';
export class FileUploadModule {
}
FileUploadModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    FileUploadComponent,
                    DragDropDirective,
                    AlertMessageComponent,
                    DialogBoxComponent,
                    PreviewFilesComponent
                ],
                imports: [
                    BrowserModule,
                    MaterialModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    ListingModule,
                ],
                providers: [],
                exports: [FileUploadComponent],
                entryComponents: [
                    AlertMessageComponent,
                    DialogBoxComponent,
                    PreviewFilesComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmlsZS11cGxvYWQtbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL2ZpbGUtdXBsb2FkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDMUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDakYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUEwQjFGLE1BQU0sT0FBTyxnQkFBZ0I7OztZQXhCNUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixtQkFBbUI7b0JBQ25CLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQixrQkFBa0I7b0JBQ2xCLHFCQUFxQjtpQkFDdEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO29CQUNoQixhQUFhO2lCQUNkO2dCQUNELFNBQVMsRUFBRSxFQUFFO2dCQUNiLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUM5QixlQUFlLEVBQUU7b0JBQ2YscUJBQXFCO29CQUNyQixrQkFBa0I7b0JBQ2xCLHFCQUFxQjtpQkFDdEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWxlVXBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi9maWxlLXVwbG9hZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vTW9kdWxlL21hdGVyaWFsLW1vZHVsZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTGlzdGluZ01vZHVsZSB9IGZyb20gXCJsaXN0aW5nLWFuZ3VsYXI3XCI7XG5pbXBvcnQgeyBEcmFnRHJvcERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL2RyYWctZHJvcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQWxlcnRNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvYWxlcnQtbWVzc2FnZS9hbGVydC1tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaWFsb2dCb3hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9kaWFsb2ctYm94L2RpYWxvZy1ib3guY29tcG9uZW50JztcbmltcG9ydCB7IFByZXZpZXdGaWxlc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L3ByZXZpZXctZmlsZXMvcHJldmlldy1maWxlcy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBGaWxlVXBsb2FkQ29tcG9uZW50LFxuICAgIERyYWdEcm9wRGlyZWN0aXZlLFxuICAgIEFsZXJ0TWVzc2FnZUNvbXBvbmVudCxcbiAgICBEaWFsb2dCb3hDb21wb25lbnQsXG4gICAgUHJldmlld0ZpbGVzQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIE1hdGVyaWFsTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBMaXN0aW5nTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBleHBvcnRzOiBbRmlsZVVwbG9hZENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIEFsZXJ0TWVzc2FnZUNvbXBvbmVudCxcbiAgICBEaWFsb2dCb3hDb21wb25lbnQsXG4gICAgUHJldmlld0ZpbGVzQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZE1vZHVsZSB7IH1cbiJdfQ==