/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
var DragDropDirective = /** @class */ (function () {
    function DragDropDirective() {
        this.onFileDropped = new EventEmitter();
        this.background = '#f5fcff';
        this.opacity = '1';
    }
    //Dragover listener
    //Dragover listener
    /**
     * @param {?} evt
     * @return {?}
     */
    DragDropDirective.prototype.onDragOver = 
    //Dragover listener
    /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#9ecbec';
        this.opacity = '0.8';
    };
    //Dragleave listener
    //Dragleave listener
    /**
     * @param {?} evt
     * @return {?}
     */
    DragDropDirective.prototype.onDragLeave = 
    //Dragleave listener
    /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f5fcff';
        this.opacity = '1';
    };
    //Drop listener
    //Drop listener
    /**
     * @param {?} evt
     * @return {?}
     */
    DragDropDirective.prototype.ondrop = 
    //Drop listener
    /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f5fcff';
        this.opacity = '1';
        /** @type {?} */
        var files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.onFileDropped.emit(files);
        }
    };
    DragDropDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[libDragDrop]'
                },] }
    ];
    DragDropDirective.propDecorators = {
        onFileDropped: [{ type: Output }],
        background: [{ type: HostBinding, args: ['style.background-color',] }],
        opacity: [{ type: HostBinding, args: ['style.opacity',] }],
        onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }],
        ondrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
    };
    return DragDropDirective;
}());
export { DragDropDirective };
if (false) {
    /** @type {?} */
    DragDropDirective.prototype.onFileDropped;
    /** @type {?} */
    DragDropDirective.prototype.background;
    /** @type {?} */
    DragDropDirective.prototype.opacity;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZpbGUtdXBsb2FkLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmUvZHJhZy1kcm9wLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVMsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEc7SUFBQTtRQU1ZLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVKLGVBQVUsR0FBRyxTQUFTLENBQUE7UUFDL0IsWUFBTyxHQUFHLEdBQUcsQ0FBQTtJQTZCcEQsQ0FBQztJQTNCQyxtQkFBbUI7Ozs7OztJQUNtQixzQ0FBVTs7Ozs7O0lBQWhELFVBQWlELEdBQUc7UUFDbEQsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtJQUN0QixDQUFDO0lBRUQsb0JBQW9COzs7Ozs7SUFDMEIsdUNBQVc7Ozs7OztJQUF6RCxVQUEwRCxHQUFHO1FBQzNELEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUE7SUFDcEIsQ0FBQztJQUVELGVBQWU7Ozs7OztJQUMwQixrQ0FBTTs7Ozs7O0lBQS9DLFVBQWdELEdBQUc7UUFDakQsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQTtRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQTs7WUFDZCxLQUFLLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLO1FBQ2xDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDL0I7SUFDSCxDQUFDOztnQkFyQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO2lCQUMxQjs7O2dDQUlFLE1BQU07NkJBRU4sV0FBVyxTQUFDLHdCQUF3QjswQkFDcEMsV0FBVyxTQUFDLGVBQWU7NkJBRzNCLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7OEJBUW5DLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7eUJBUXBDLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBVWxDLHdCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FsQ1ksaUJBQWlCOzs7SUFFNUIsMENBQWtEOztJQUVsRCx1Q0FBb0U7O0lBQ3BFLG9DQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tsaWJEcmFnRHJvcF0nXG59KVxuXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BEaXJlY3RpdmUge1xuXHRcbiAgQE91dHB1dCgpIG9uRmlsZURyb3BwZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0XG4gIEBIb3N0QmluZGluZygnc3R5bGUuYmFja2dyb3VuZC1jb2xvcicpIHB1YmxpYyBiYWNrZ3JvdW5kID0gJyNmNWZjZmYnXG4gIEBIb3N0QmluZGluZygnc3R5bGUub3BhY2l0eScpIHB1YmxpYyBvcGFjaXR5ID0gJzEnXG5cdFxuICAvL0RyYWdvdmVyIGxpc3RlbmVyXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSkgb25EcmFnT3ZlcihldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gJyM5ZWNiZWMnO1xuICAgIHRoaXMub3BhY2l0eSA9ICcwLjgnXG4gIH1cblx0XG4gIC8vRHJhZ2xlYXZlIGxpc3RlbmVyXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFsnJGV2ZW50J10pIHB1YmxpYyBvbkRyYWdMZWF2ZShldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gJyNmNWZjZmYnXG4gICAgdGhpcy5vcGFjaXR5ID0gJzEnXG4gIH1cblx0XG4gIC8vRHJvcCBsaXN0ZW5lclxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSkgcHVibGljIG9uZHJvcChldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gJyNmNWZjZmYnXG4gICAgdGhpcy5vcGFjaXR5ID0gJzEnXG4gICAgbGV0IGZpbGVzID0gZXZ0LmRhdGFUcmFuc2Zlci5maWxlcztcbiAgICBpZiAoZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5vbkZpbGVEcm9wcGVkLmVtaXQoZmlsZXMpXG4gICAgfVxuICB9XG59Il19