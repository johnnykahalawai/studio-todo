/**
 * @module ui/task-cell.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class TaskCell
 * @extends Component
 */
exports.TaskCell = Component.specialize(/** @lends TaskCell# */ {
    constructor: {
        value: function TaskCell() {
            this.super();
        }
    },
    
    enterDocument: {
        value: function(firstTime) {
            console.log("Entering document");
        }
    },
    
    didDraw: {
        value: function() {
            console.log("Did draw");
        }   
    }

});
