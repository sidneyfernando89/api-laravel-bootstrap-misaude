/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/editors/quill/autosave.js":
/*!*************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/editors/quill/autosave.js ***!
  \*************************************************************************/
/***/ (() => {

eval("/*\r\n * ATTENTION: An \"eval-source-map\" devtool has been used.\r\n * This devtool is neither made for production nor for readable output files.\r\n * It uses \"eval()\" calls to create a separate source file with attached SourceMaps in the browser devtools.\r\n * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)\r\n * or disable the default devtool with \"devtool: false\".\r\n * If you are looking for production-ready output files, see mode: \"production\" (https://webpack.js.org/configuration/mode/).\r\n */\n\n/******/\n(function () {\n  // webpackBootstrap\n\n  /******/\n  \"use strict\";\n  /******/\n\n  var __webpack_modules__ = {\n    /***/\n    \"./resources/assets/core/js/custom/documentation/editors/quill/autosave.js\":\n    /*!*********************************************************************************!*\\\r\n      !*** ./resources/assets/core/js/custom/documentation/editors/quill/autosave.js ***!\r\n      \\*********************************************************************************/\n\n    /***/\n    function resourcesAssetsCoreJsCustomDocumentationEditorsQuillAutosaveJs() {\n      eval(\" // Class definition\\n\\nvar KTFormsQuillAutosave = function () {\\n  // Private functions\\n  var exampleAutosave = function exampleAutosave() {\\n    var Delta = Quill[\\\"import\\\"]('delta');\\n    var quill = new Quill('#kt_docs_quill_autosave', {\\n      modules: {\\n        toolbar: true\\n      },\\n      placeholder: 'Type your text here...',\\n      theme: 'snow'\\n    }); // Store accumulated changes\\n\\n    var change = new Delta();\\n    quill.on('text-change', function (delta) {\\n      change = change.compose(delta);\\n    }); // Save periodically\\n\\n    setInterval(function () {\\n      if (change.length() > 0) {\\n        console.log('Saving changes', change);\\n        /*\\r\\n        Send partial changes\\r\\n        $.post('/your-endpoint', {\\r\\n        partial: JSON.stringify(change)\\r\\n        });\\r\\n          Send entire document\\r\\n        $.post('/your-endpoint', {\\r\\n        doc: JSON.stringify(quill.getContents())\\r\\n        });\\r\\n        */\\n\\n        change = new Delta();\\n      }\\n    }, 5 * 1000); // Check for unsaved data\\n\\n    window.onbeforeunload = function () {\\n      if (change.length() > 0) {\\n        return 'There are unsaved changes. Are you sure you want to leave?';\\n      }\\n    };\\n  };\\n\\n  return {\\n    // Public Functions\\n    init: function init() {\\n      exampleAutosave();\\n    }\\n  };\\n}(); // On document ready\\n\\n\\nKTUtil.onDOMContentLoaded(function () {\\n  KTFormsQuillAutosave.init();\\n});//# sourceURL=[module]\\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy9xdWlsbC9hdXRvc2F2ZS5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxvQkFBb0IsR0FBRyxZQUFZO0FBQ25DO0FBQ0EsTUFBSUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFZO0FBQzlCLFFBQUlDLEtBQUssR0FBR0MsS0FBSyxVQUFMLENBQWEsT0FBYixDQUFaO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLElBQUlELEtBQUosQ0FBVSx5QkFBVixFQUFxQztBQUM3Q0UsTUFBQUEsT0FBTyxFQUFFO0FBQ0xDLFFBQUFBLE9BQU8sRUFBRTtBQURKLE9BRG9DO0FBSTdDQyxNQUFBQSxXQUFXLEVBQUUsd0JBSmdDO0FBSzdDQyxNQUFBQSxLQUFLLEVBQUU7QUFMc0MsS0FBckMsQ0FBWixDQUY4QixDQVU5Qjs7QUFDQSxRQUFJQyxNQUFNLEdBQUcsSUFBSVAsS0FBSixFQUFiO0FBQ0FFLElBQUFBLEtBQUssQ0FBQ00sRUFBTixDQUFTLGFBQVQsRUFBd0IsVUFBVUMsS0FBVixFQUFpQjtBQUNyQ0YsTUFBQUEsTUFBTSxHQUFHQSxNQUFNLENBQUNHLE9BQVAsQ0FBZUQsS0FBZixDQUFUO0FBQ0gsS0FGRCxFQVo4QixDQWdCOUI7O0FBQ0FFLElBQUFBLFdBQVcsQ0FBQyxZQUFZO0FBQ3BCLFVBQUlKLE1BQU0sQ0FBQ0ssTUFBUCxLQUFrQixDQUF0QixFQUF5QjtBQUNyQkMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJQLE1BQTlCO0FBQ0E7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVnQkEsUUFBQUEsTUFBTSxHQUFHLElBQUlQLEtBQUosRUFBVDtBQUNIO0FBQ0osS0FoQlUsRUFnQlIsSUFBSSxJQWhCSSxDQUFYLENBakI4QixDQW1DOUI7O0FBQ0FlLElBQUFBLE1BQU0sQ0FBQ0MsY0FBUCxHQUF3QixZQUFZO0FBQ2hDLFVBQUlULE1BQU0sQ0FBQ0ssTUFBUCxLQUFrQixDQUF0QixFQUF5QjtBQUNyQixlQUFPLDREQUFQO0FBQ0g7QUFDSixLQUpEO0FBS0gsR0F6Q0Q7O0FBMkNBLFNBQU87QUFDSDtBQUNBSyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZGxCLE1BQUFBLGVBQWU7QUFDbEI7QUFKRSxHQUFQO0FBTUgsQ0FuRDBCLEVBQTNCLEMsQ0FxREE7OztBQUNBbUIsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFZO0FBQ2xDckIsRUFBQUEsb0JBQW9CLENBQUNtQixJQUFyQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy9xdWlsbC9hdXRvc2F2ZS5qcz9jZTQ2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RGb3Jtc1F1aWxsQXV0b3NhdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAgdmFyIGV4YW1wbGVBdXRvc2F2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgRGVsdGEgPSBRdWlsbC5pbXBvcnQoJ2RlbHRhJyk7XHJcbiAgICAgICAgdmFyIHF1aWxsID0gbmV3IFF1aWxsKCcja3RfZG9jc19xdWlsbF9hdXRvc2F2ZScsIHtcclxuICAgICAgICAgICAgbW9kdWxlczoge1xyXG4gICAgICAgICAgICAgICAgdG9vbGJhcjogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1R5cGUgeW91ciB0ZXh0IGhlcmUuLi4nLFxyXG4gICAgICAgICAgICB0aGVtZTogJ3Nub3cnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFN0b3JlIGFjY3VtdWxhdGVkIGNoYW5nZXNcclxuICAgICAgICB2YXIgY2hhbmdlID0gbmV3IERlbHRhKCk7XHJcbiAgICAgICAgcXVpbGwub24oJ3RleHQtY2hhbmdlJywgZnVuY3Rpb24gKGRlbHRhKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZSA9IGNoYW5nZS5jb21wb3NlKGRlbHRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU2F2ZSBwZXJpb2RpY2FsbHlcclxuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGFuZ2UubGVuZ3RoKCkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2F2aW5nIGNoYW5nZXMnLCBjaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIFNlbmQgcGFydGlhbCBjaGFuZ2VzXHJcbiAgICAgICAgICAgICAgICAkLnBvc3QoJy95b3VyLWVuZHBvaW50Jywge1xyXG4gICAgICAgICAgICAgICAgcGFydGlhbDogSlNPTi5zdHJpbmdpZnkoY2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgU2VuZCBlbnRpcmUgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICQucG9zdCgnL3lvdXItZW5kcG9pbnQnLCB7XHJcbiAgICAgICAgICAgICAgICBkb2M6IEpTT04uc3RyaW5naWZ5KHF1aWxsLmdldENvbnRlbnRzKCkpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2UgPSBuZXcgRGVsdGEoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDUgKiAxMDAwKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHVuc2F2ZWQgZGF0YVxyXG4gICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGNoYW5nZS5sZW5ndGgoKSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnVGhlcmUgYXJlIHVuc2F2ZWQgY2hhbmdlcy4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGxlYXZlPyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlQXV0b3NhdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcclxuICAgIEtURm9ybXNRdWlsbEF1dG9zYXZlLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVEZvcm1zUXVpbGxBdXRvc2F2ZSIsImV4YW1wbGVBdXRvc2F2ZSIsIkRlbHRhIiwiUXVpbGwiLCJxdWlsbCIsIm1vZHVsZXMiLCJ0b29sYmFyIiwicGxhY2Vob2xkZXIiLCJ0aGVtZSIsImNoYW5nZSIsIm9uIiwiZGVsdGEiLCJjb21wb3NlIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwib25iZWZvcmV1bmxvYWQiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/editors/quill/autosave.js\\n\");\n      /***/\n    }\n    /******/\n\n  };\n  /************************************************************************/\n\n  /******/\n\n  /******/\n  // startup\n\n  /******/\n  // Load entry module and return exports\n\n  /******/\n  // This entry module can't be inlined because the eval-source-map devtool is used.\n\n  /******/\n\n  var __webpack_exports__ = {};\n  /******/\n\n  __webpack_modules__[\"./resources/assets/core/js/custom/documentation/editors/quill/autosave.js\"]();\n  /******/\n\n  /******/\n\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2VkaXRvcnMvcXVpbGwvYXV0b3NhdmUuanM/YWFlYiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfbW9kdWxlc19fIiwiZXZhbCIsIl9fd2VicGFja19leHBvcnRzX18iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBUyxDQUFDLFlBQU07QUFBRTs7QUFDbEI7QUFBVTtBQUNWOztBQUFVLE1BQUlBLG1CQUFtQixHQUFJO0FBRXJDO0FBQU07QUFDTjtBQUNBO0FBQ0E7O0FBQ0E7QUFBTyw4RUFBTTtBQUViQyxNQUFBQSxJQUFJLENBQUMsaWdNQUFELENBQUo7QUFFQTtBQUFPO0FBRVA7O0FBWnFDLEdBQTNCO0FBYVY7O0FBQ0E7O0FBQ0E7QUFBVTs7QUFDVjtBQUFVOztBQUNWO0FBQVU7O0FBQ1Y7O0FBQVUsTUFBSUMsbUJBQW1CLEdBQUcsRUFBMUI7QUFDVjs7QUFBVUYsRUFBQUEsbUJBQW1CLENBQUMsMkVBQUQsQ0FBbkI7QUFDVjs7QUFDQTs7QUFBVSxDQXZCRCIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEFUVEVOVElPTjogQW4gXCJldmFsLXNvdXJjZS1tYXBcIiBkZXZ0b29sIGhhcyBiZWVuIHVzZWQuXHJcbiAqIFRoaXMgZGV2dG9vbCBpcyBuZWl0aGVyIG1hZGUgZm9yIHByb2R1Y3Rpb24gbm9yIGZvciByZWFkYWJsZSBvdXRwdXQgZmlsZXMuXHJcbiAqIEl0IHVzZXMgXCJldmFsKClcIiBjYWxscyB0byBjcmVhdGUgYSBzZXBhcmF0ZSBzb3VyY2UgZmlsZSB3aXRoIGF0dGFjaGVkIFNvdXJjZU1hcHMgaW4gdGhlIGJyb3dzZXIgZGV2dG9vbHMuXHJcbiAqIElmIHlvdSBhcmUgdHJ5aW5nIHRvIHJlYWQgdGhlIG91dHB1dCBmaWxlLCBzZWxlY3QgYSBkaWZmZXJlbnQgZGV2dG9vbCAoaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9jb25maWd1cmF0aW9uL2RldnRvb2wvKVxyXG4gKiBvciBkaXNhYmxlIHRoZSBkZWZhdWx0IGRldnRvb2wgd2l0aCBcImRldnRvb2w6IGZhbHNlXCIuXHJcbiAqIElmIHlvdSBhcmUgbG9va2luZyBmb3IgcHJvZHVjdGlvbi1yZWFkeSBvdXRwdXQgZmlsZXMsIHNlZSBtb2RlOiBcInByb2R1Y3Rpb25cIiAoaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9jb25maWd1cmF0aW9uL21vZGUvKS5cclxuICovXHJcbi8qKioqKiovICgoKSA9PiB7IC8vIHdlYnBhY2tCb290c3RyYXBcclxuLyoqKioqKi8gXHRcInVzZSBzdHJpY3RcIjtcclxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XHJcblxyXG4vKioqLyBcIi4vcmVzb3VyY2VzL2Fzc2V0cy9jb3JlL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2VkaXRvcnMvcXVpbGwvYXV0b3NhdmUuanNcIjpcclxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxyXG4gICEqKiogLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy9xdWlsbC9hdXRvc2F2ZS5qcyAqKiohXHJcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qKiovICgoKSA9PiB7XHJcblxyXG5ldmFsKFwiIC8vIENsYXNzIGRlZmluaXRpb25cXG5cXG52YXIgS1RGb3Jtc1F1aWxsQXV0b3NhdmUgPSBmdW5jdGlvbiAoKSB7XFxuICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xcbiAgdmFyIGV4YW1wbGVBdXRvc2F2ZSA9IGZ1bmN0aW9uIGV4YW1wbGVBdXRvc2F2ZSgpIHtcXG4gICAgdmFyIERlbHRhID0gUXVpbGxbXFxcImltcG9ydFxcXCJdKCdkZWx0YScpO1xcbiAgICB2YXIgcXVpbGwgPSBuZXcgUXVpbGwoJyNrdF9kb2NzX3F1aWxsX2F1dG9zYXZlJywge1xcbiAgICAgIG1vZHVsZXM6IHtcXG4gICAgICAgIHRvb2xiYXI6IHRydWVcXG4gICAgICB9LFxcbiAgICAgIHBsYWNlaG9sZGVyOiAnVHlwZSB5b3VyIHRleHQgaGVyZS4uLicsXFxuICAgICAgdGhlbWU6ICdzbm93J1xcbiAgICB9KTsgLy8gU3RvcmUgYWNjdW11bGF0ZWQgY2hhbmdlc1xcblxcbiAgICB2YXIgY2hhbmdlID0gbmV3IERlbHRhKCk7XFxuICAgIHF1aWxsLm9uKCd0ZXh0LWNoYW5nZScsIGZ1bmN0aW9uIChkZWx0YSkge1xcbiAgICAgIGNoYW5nZSA9IGNoYW5nZS5jb21wb3NlKGRlbHRhKTtcXG4gICAgfSk7IC8vIFNhdmUgcGVyaW9kaWNhbGx5XFxuXFxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcXG4gICAgICBpZiAoY2hhbmdlLmxlbmd0aCgpID4gMCkge1xcbiAgICAgICAgY29uc29sZS5sb2coJ1NhdmluZyBjaGFuZ2VzJywgY2hhbmdlKTtcXG4gICAgICAgIC8qXFxyXFxuICAgICAgICBTZW5kIHBhcnRpYWwgY2hhbmdlc1xcclxcbiAgICAgICAgJC5wb3N0KCcveW91ci1lbmRwb2ludCcsIHtcXHJcXG4gICAgICAgIHBhcnRpYWw6IEpTT04uc3RyaW5naWZ5KGNoYW5nZSlcXHJcXG4gICAgICAgIH0pO1xcclxcbiAgICAgICAgICBTZW5kIGVudGlyZSBkb2N1bWVudFxcclxcbiAgICAgICAgJC5wb3N0KCcveW91ci1lbmRwb2ludCcsIHtcXHJcXG4gICAgICAgIGRvYzogSlNPTi5zdHJpbmdpZnkocXVpbGwuZ2V0Q29udGVudHMoKSlcXHJcXG4gICAgICAgIH0pO1xcclxcbiAgICAgICAgKi9cXG5cXG4gICAgICAgIGNoYW5nZSA9IG5ldyBEZWx0YSgpO1xcbiAgICAgIH1cXG4gICAgfSwgNSAqIDEwMDApOyAvLyBDaGVjayBmb3IgdW5zYXZlZCBkYXRhXFxuXFxuICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcXG4gICAgICBpZiAoY2hhbmdlLmxlbmd0aCgpID4gMCkge1xcbiAgICAgICAgcmV0dXJuICdUaGVyZSBhcmUgdW5zYXZlZCBjaGFuZ2VzLiBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbGVhdmU/JztcXG4gICAgICB9XFxuICAgIH07XFxuICB9O1xcblxcbiAgcmV0dXJuIHtcXG4gICAgLy8gUHVibGljIEZ1bmN0aW9uc1xcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xcbiAgICAgIGV4YW1wbGVBdXRvc2F2ZSgpO1xcbiAgICB9XFxuICB9O1xcbn0oKTsgLy8gT24gZG9jdW1lbnQgcmVhZHlcXG5cXG5cXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcXG4gIEtURm9ybXNRdWlsbEF1dG9zYXZlLmluaXQoKTtcXG59KTsvLyMgc291cmNlVVJMPVttb2R1bGVdXFxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lMaTl5WlhOdmRYSmpaWE12WVhOelpYUnpMMk52Y21VdmFuTXZZM1Z6ZEc5dEwyUnZZM1Z0Wlc1MFlYUnBiMjR2WldScGRHOXljeTl4ZFdsc2JDOWhkWFJ2YzJGMlpTNXFjeTVxY3lJc0ltMWhjSEJwYm1keklqb2lRMEZGUVRzN1FVRkRRU3hKUVVGSlFTeHZRa0ZCYjBJc1IwRkJSeXhaUVVGWk8wRkJRMjVETzBGQlEwRXNUVUZCU1VNc1pVRkJaU3hIUVVGSExGTkJRV3hDUVN4bFFVRnJRaXhIUVVGWk8wRkJRemxDTEZGQlFVbERMRXRCUVVzc1IwRkJSME1zUzBGQlN5eFZRVUZNTEVOQlFXRXNUMEZCWWl4RFFVRmFPMEZCUTBFc1VVRkJTVU1zUzBGQlN5eEhRVUZITEVsQlFVbEVMRXRCUVVvc1EwRkJWU3g1UWtGQlZpeEZRVUZ4UXp0QlFVTTNRMFVzVFVGQlFVRXNUMEZCVHl4RlFVRkZPMEZCUTB4RExGRkJRVUZCTEU5QlFVOHNSVUZCUlR0QlFVUktMRTlCUkc5RE8wRkJTVGREUXl4TlFVRkJRU3hYUVVGWExFVkJRVVVzZDBKQlNtZERPMEZCU3pkRFF5eE5RVUZCUVN4TFFVRkxMRVZCUVVVN1FVRk1jME1zUzBGQmNrTXNRMEZCV2l4RFFVWTRRaXhEUVZVNVFqczdRVUZEUVN4UlFVRkpReXhOUVVGTkxFZEJRVWNzU1VGQlNWQXNTMEZCU2l4RlFVRmlPMEZCUTBGRkxFbEJRVUZCTEV0QlFVc3NRMEZCUTAwc1JVRkJUaXhEUVVGVExHRkJRVlFzUlVGQmQwSXNWVUZCVlVNc1MwRkJWaXhGUVVGcFFqdEJRVU55UTBZc1RVRkJRVUVzVFVGQlRTeEhRVUZIUVN4TlFVRk5MRU5CUVVOSExFOUJRVkFzUTBGQlpVUXNTMEZCWml4RFFVRlVPMEZCUTBnc1MwRkdSQ3hGUVZvNFFpeERRV2RDT1VJN08wRkJRMEZGTEVsQlFVRkJMRmRCUVZjc1EwRkJReXhaUVVGWk8wRkJRM0JDTEZWQlFVbEtMRTFCUVUwc1EwRkJRMHNzVFVGQlVDeExRVUZyUWl4RFFVRjBRaXhGUVVGNVFqdEJRVU55UWtNc1VVRkJRVUVzVDBGQlR5eERRVUZEUXl4SFFVRlNMRU5CUVZrc1owSkJRVm9zUlVGQk9FSlFMRTFCUVRsQ08wRkJRMEU3UVVGRGFFSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVm5Ra0VzVVVGQlFVRXNUVUZCVFN4SFFVRkhMRWxCUVVsUUxFdEJRVW9zUlVGQlZEdEJRVU5JTzBGQlEwb3NTMEZvUWxVc1JVRm5RbElzU1VGQlNTeEpRV2hDU1N4RFFVRllMRU5CYWtJNFFpeERRVzFET1VJN08wRkJRMEZsTEVsQlFVRkJMRTFCUVUwc1EwRkJRME1zWTBGQlVDeEhRVUYzUWl4WlFVRlpPMEZCUTJoRExGVkJRVWxVTEUxQlFVMHNRMEZCUTBzc1RVRkJVQ3hMUVVGclFpeERRVUYwUWl4RlFVRjVRanRCUVVOeVFpeGxRVUZQTERSRVFVRlFPMEZCUTBnN1FVRkRTaXhMUVVwRU8wRkJTMGdzUjBGNlEwUTdPMEZCTWtOQkxGTkJRVTg3UVVGRFNEdEJRVU5CU3l4SlFVRkJRU3hKUVVGSkxFVkJRVVVzWjBKQlFWazdRVUZEWkd4Q0xFMUJRVUZCTEdWQlFXVTdRVUZEYkVJN1FVRktSU3hIUVVGUU8wRkJUVWdzUTBGdVJEQkNMRVZCUVROQ0xFTXNRMEZ4UkVFN096dEJRVU5CYlVJc1RVRkJUU3hEUVVGRFF5eHJRa0ZCVUN4RFFVRXdRaXhaUVVGWk8wRkJRMnhEY2tJc1JVRkJRVUVzYjBKQlFXOUNMRU5CUVVOdFFpeEpRVUZ5UWp0QlFVTklMRU5CUmtRaUxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2TGk5eVpYTnZkWEpqWlhNdllYTnpaWFJ6TDJOdmNtVXZhbk12WTNWemRHOXRMMlJ2WTNWdFpXNTBZWFJwYjI0dlpXUnBkRzl5Y3k5eGRXbHNiQzloZFhSdmMyRjJaUzVxY3o5alpUUTJJbDBzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWx3aWRYTmxJSE4wY21samRGd2lPMXh5WEc1Y2NseHVMeThnUTJ4aGMzTWdaR1ZtYVc1cGRHbHZibHh5WEc1MllYSWdTMVJHYjNKdGMxRjFhV3hzUVhWMGIzTmhkbVVnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQXZMeUJRY21sMllYUmxJR1oxYm1OMGFXOXVjMXh5WEc0Z0lDQWdkbUZ5SUdWNFlXMXdiR1ZCZFhSdmMyRjJaU0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ1JHVnNkR0VnUFNCUmRXbHNiQzVwYlhCdmNuUW9KMlJsYkhSaEp5azdYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlIRjFhV3hzSUQwZ2JtVjNJRkYxYVd4c0tDY2phM1JmWkc5amMxOXhkV2xzYkY5aGRYUnZjMkYyWlNjc0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2JXOWtkV3hsY3pvZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkRzl2YkdKaGNqb2dkSEoxWlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J3YkdGalpXaHZiR1JsY2pvZ0oxUjVjR1VnZVc5MWNpQjBaWGgwSUdobGNtVXVMaTRuTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdWdFpUb2dKM051YjNjblhISmNiaUFnSUNBZ0lDQWdmU2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQzh2SUZOMGIzSmxJR0ZqWTNWdGRXeGhkR1ZrSUdOb1lXNW5aWE5jY2x4dUlDQWdJQ0FnSUNCMllYSWdZMmhoYm1kbElEMGdibVYzSUVSbGJIUmhLQ2s3WEhKY2JpQWdJQ0FnSUNBZ2NYVnBiR3d1YjI0b0ozUmxlSFF0WTJoaGJtZGxKeXdnWm5WdVkzUnBiMjRnS0dSbGJIUmhLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR05vWVc1blpTQTlJR05vWVc1blpTNWpiMjF3YjNObEtHUmxiSFJoS1R0Y2NseHVJQ0FnSUNBZ0lDQjlLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdMeThnVTJGMlpTQndaWEpwYjJScFkyRnNiSGxjY2x4dUlDQWdJQ0FnSUNCelpYUkpiblJsY25aaGJDaG1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoamFHRnVaMlV1YkdWdVozUm9LQ2tnUGlBd0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emIyeGxMbXh2WnlnblUyRjJhVzVuSUdOb1lXNW5aWE1uTENCamFHRnVaMlVwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5cGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRk5sYm1RZ2NHRnlkR2xoYkNCamFHRnVaMlZ6WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBa0xuQnZjM1FvSnk5NWIzVnlMV1Z1WkhCdmFXNTBKeXdnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NHRnlkR2xoYkRvZ1NsTlBUaTV6ZEhKcGJtZHBabmtvWTJoaGJtZGxLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnVTJWdVpDQmxiblJwY21VZ1pHOWpkVzFsYm5SY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDUXVjRzl6ZENnbkwzbHZkWEl0Wlc1a2NHOXBiblFuTENCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtiMk02SUVwVFQwNHVjM1J5YVc1bmFXWjVLSEYxYVd4c0xtZGxkRU52Ym5SbGJuUnpLQ2twWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ292WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamFHRnVaMlVnUFNCdVpYY2dSR1ZzZEdFb0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJSDBzSURVZ0tpQXhNREF3S1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnTHk4Z1EyaGxZMnNnWm05eUlIVnVjMkYyWldRZ1pHRjBZVnh5WEc0Z0lDQWdJQ0FnSUhkcGJtUnZkeTV2Ym1KbFptOXlaWFZ1Ykc5aFpDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHTm9ZVzVuWlM1c1pXNW5kR2dvS1NBK0lEQXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUFuVkdobGNtVWdZWEpsSUhWdWMyRjJaV1FnWTJoaGJtZGxjeTRnUVhKbElIbHZkU0J6ZFhKbElIbHZkU0IzWVc1MElIUnZJR3hsWVhabFB5YzdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2NtVjBkWEp1SUh0Y2NseHVJQ0FnSUNBZ0lDQXZMeUJRZFdKc2FXTWdSblZ1WTNScGIyNXpYSEpjYmlBZ0lDQWdJQ0FnYVc1cGREb2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsZUdGdGNHeGxRWFYwYjNOaGRtVW9LVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOU8xeHlYRzU5S0NrN1hISmNibHh5WEc0dkx5QlBiaUJrYjJOMWJXVnVkQ0J5WldGa2VWeHlYRzVMVkZWMGFXd3ViMjVFVDAxRGIyNTBaVzUwVEc5aFpHVmtLR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUV0VVJtOXliWE5SZFdsc2JFRjFkRzl6WVhabExtbHVhWFFvS1R0Y2NseHVmU2s3WEhKY2JpSmRMQ0p1WVcxbGN5STZXeUpMVkVadmNtMXpVWFZwYkd4QmRYUnZjMkYyWlNJc0ltVjRZVzF3YkdWQmRYUnZjMkYyWlNJc0lrUmxiSFJoSWl3aVVYVnBiR3dpTENKeGRXbHNiQ0lzSW0xdlpIVnNaWE1pTENKMGIyOXNZbUZ5SWl3aWNHeGhZMlZvYjJ4a1pYSWlMQ0owYUdWdFpTSXNJbU5vWVc1blpTSXNJbTl1SWl3aVpHVnNkR0VpTENKamIyMXdiM05sSWl3aWMyVjBTVzUwWlhKMllXd2lMQ0pzWlc1bmRHZ2lMQ0pqYjI1emIyeGxJaXdpYkc5bklpd2lkMmx1Wkc5M0lpd2liMjVpWldadmNtVjFibXh2WVdRaUxDSnBibWwwSWl3aVMxUlZkR2xzSWl3aWIyNUVUMDFEYjI1MFpXNTBURzloWkdWa0lsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT1cXG4vLyMgc291cmNlVVJMPXdlYnBhY2staW50ZXJuYWw6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy9xdWlsbC9hdXRvc2F2ZS5qc1xcblwiKTtcclxuXHJcbi8qKiovIH0pXHJcblxyXG4vKioqKioqLyBcdH0pO1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKioqKioqLyBcdFxyXG4vKioqKioqLyBcdC8vIHN0YXJ0dXBcclxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcclxuLyoqKioqKi8gXHQvLyBUaGlzIGVudHJ5IG1vZHVsZSBjYW4ndCBiZSBpbmxpbmVkIGJlY2F1c2UgdGhlIGV2YWwtc291cmNlLW1hcCBkZXZ0b29sIGlzIHVzZWQuXHJcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcclxuLyoqKioqKi8gXHRfX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy9xdWlsbC9hdXRvc2F2ZS5qc1wiXSgpO1xyXG4vKioqKioqLyBcdFxyXG4vKioqKioqLyB9KSgpXHJcbjsiXSwiZmlsZSI6Ii4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9lZGl0b3JzL3F1aWxsL2F1dG9zYXZlLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/editors/quill/autosave.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/editors/quill/autosave.js"]();
/******/ 	
/******/ })()
;