/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var FileUploadService = /** @class */ (function () {
    function FileUploadService(httpClient) {
        this.httpClient = httpClient;
        this.BASE_URL = "http://3.15.236.141:5005/uploads";
    }
    /* Upload Function */
    /* Upload Function */
    /**
     * @param {?} uploadURL
     * @param {?} data
     * @return {?}
     */
    FileUploadService.prototype.upload = /* Upload Function */
    /**
     * @param {?} uploadURL
     * @param {?} data
     * @return {?}
     */
    function (uploadURL, data) {
        /** @type {?} */
        var formData = new FormData();
        formData.append('file', data.file);
        formData.append('type', data.type);
        formData.append('path', data.path);
        formData.append('prefix', data.prefix);
        formData.append('conversion_needed', data.conversion_needed);
        formData.append('bucketname', data.bucketname);
        return this.httpClient.post(uploadURL, formData, {
            reportProgress: true,
            observe: 'events'
        }).pipe(map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            switch (event.type) {
                case HttpEventType.UploadProgress:
                    /** @type {?} */
                    var percentage = Math.round(100 * event.loaded / event.total);
                    if (percentage >= 0 && percentage <= 100) {
                        return { status: 'progress', data: { totalData: event.total, loadedData: event.loaded, percentage: percentage } };
                    }
                    else {
                        return { status: 'complete', data: null };
                    }
                case HttpEventType.Response:
                    if (event.body.status == 'success') {
                        return { status: 'complete', data: event.body };
                    }
                    else {
                        return { status: 'error', data: 'An error occord.' };
                    }
                default:
                    return { status: 'waiting', data: '' };
                    return "Unhandled event: " + event.type;
            }
        })));
    };
    /**
     * @param {?} uploadURL
     * @param {?} data
     * @return {?}
     */
    FileUploadService.prototype.uploadBase64 = /**
     * @param {?} uploadURL
     * @param {?} data
     * @return {?}
     */
    function (uploadURL, data) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpClient.post(uploadURL, data, httpOptions);
    };
    FileUploadService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FileUploadService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ FileUploadService.ngInjectableDef = i0.defineInjectable({ factory: function FileUploadService_Factory() { return new FileUploadService(i0.inject(i1.HttpClient)); }, token: FileUploadService, providedIn: "root" });
    return FileUploadService;
}());
export { FileUploadService };
if (false) {
    /** @type {?} */
    FileUploadService.prototype.BASE_URL;
    /**
     * @type {?}
     * @private
     */
    FileUploadService.prototype.httpClient;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZpbGUtdXBsb2FkLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9maWxlLXVwbG9hZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFnQyxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU1RyxPQUFPLEVBQUUsR0FBRyxFQUFtQixNQUFNLGdCQUFnQixDQUFDOzs7QUFFdEQ7SUFRRSwyQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUZuQyxhQUFRLEdBQVcsa0NBQWtDLENBQUM7SUFFZixDQUFDO0lBRS9DLHFCQUFxQjs7Ozs7OztJQUNkLGtDQUFNOzs7Ozs7SUFBYixVQUFjLFNBQVMsRUFBRSxJQUFJOztZQUNyQixRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUU7UUFDL0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLFFBQVEsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDN0QsUUFBUSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRS9DLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQU0sU0FBUyxFQUFFLFFBQVEsRUFBRTtZQUNwRCxjQUFjLEVBQUUsSUFBSTtZQUNwQixPQUFPLEVBQUUsUUFBUTtTQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLEtBQUs7WUFDZCxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ2xCLEtBQUssYUFBYSxDQUFDLGNBQWM7O3dCQUN6QixVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUMvRCxJQUFHLFVBQVUsSUFBSSxDQUFDLElBQUksVUFBVSxJQUFJLEdBQUcsRUFBRTt3QkFDdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUM7cUJBQ25IO3lCQUFNO3dCQUNMLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztxQkFDM0M7Z0JBQ0gsS0FBSyxhQUFhLENBQUMsUUFBUTtvQkFDekIsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7d0JBQ2pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7cUJBQ2pEO3lCQUFNO3dCQUNMLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxDQUFDO3FCQUN0RDtnQkFDSDtvQkFDRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUM7b0JBQ3ZDLE9BQU8sc0JBQW9CLEtBQUssQ0FBQyxJQUFNLENBQUM7YUFDM0M7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU0sd0NBQVk7Ozs7O0lBQW5CLFVBQW9CLFNBQVMsRUFBRSxJQUFJOztZQUMzQixXQUFXLEdBQUc7WUFDbEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2FBQ25DLENBQUM7U0FDSDtRQUVELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM1RCxDQUFDOztnQkF0REYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOUSxVQUFVOzs7NEJBRG5CO0NBNkRDLEFBeERELElBd0RDO1NBcERZLGlCQUFpQjs7O0lBRTVCLHFDQUE2RDs7Ozs7SUFFakQsdUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBFdmVudCwgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBFdmVudFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZFNlcnZpY2Uge1xuXG4gIHB1YmxpYyBCQVNFX1VSTDogc3RyaW5nID0gXCJodHRwOi8vMy4xNS4yMzYuMTQxOjUwMDUvdXBsb2Fkc1wiO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkgeyB9XG5cbiAgLyogVXBsb2FkIEZ1bmN0aW9uICovXG4gIHB1YmxpYyB1cGxvYWQodXBsb2FkVVJMLCBkYXRhKSB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBkYXRhLmZpbGUpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgndHlwZScsIGRhdGEudHlwZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdwYXRoJywgZGF0YS5wYXRoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3ByZWZpeCcsIGRhdGEucHJlZml4KTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbnZlcnNpb25fbmVlZGVkJywgZGF0YS5jb252ZXJzaW9uX25lZWRlZCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdidWNrZXRuYW1lJywgZGF0YS5idWNrZXRuYW1lKTtcbiAgICBcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3Q8YW55Pih1cGxvYWRVUkwsIGZvcm1EYXRhLCB7XG4gICAgICByZXBvcnRQcm9ncmVzczogdHJ1ZSxcbiAgICAgIG9ic2VydmU6ICdldmVudHMnXG4gICAgfSkucGlwZShtYXAoKGV2ZW50KSA9PiB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICAgIGNhc2UgSHR0cEV2ZW50VHlwZS5VcGxvYWRQcm9ncmVzczpcbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBNYXRoLnJvdW5kKDEwMCAqIGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKTtcbiAgICAgICAgICAgIGlmKHBlcmNlbnRhZ2UgPj0gMCAmJiBwZXJjZW50YWdlIDw9IDEwMCkge1xuICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6ICdwcm9ncmVzcycsIGRhdGE6IHsgdG90YWxEYXRhOiBldmVudC50b3RhbCwgbG9hZGVkRGF0YTogZXZlbnQubG9hZGVkLCBwZXJjZW50YWdlOiBwZXJjZW50YWdlIH0gfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogJ2NvbXBsZXRlJywgZGF0YTogbnVsbCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgSHR0cEV2ZW50VHlwZS5SZXNwb25zZTpcbiAgICAgICAgICAgIGlmKGV2ZW50LmJvZHkuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6ICdjb21wbGV0ZScsIGRhdGE6IGV2ZW50LmJvZHkgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogJ2Vycm9yJywgZGF0YTogJ0FuIGVycm9yIG9jY29yZC4nIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogJ3dhaXRpbmcnLCBkYXRhOiAnJyB9O1xuICAgICAgICAgICAgcmV0dXJuIGBVbmhhbmRsZWQgZXZlbnQ6ICR7ZXZlbnQudHlwZX1gO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgdXBsb2FkQmFzZTY0KHVwbG9hZFVSTCwgZGF0YSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3QodXBsb2FkVVJMLCBkYXRhLCBodHRwT3B0aW9ucyk7XG4gIH1cblxufVxuIl19