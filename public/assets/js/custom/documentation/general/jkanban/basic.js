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

/***/ "./resources/src/js/custom/documentation/general/jkanban/basic.js":
/*!************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/jkanban/basic.js ***!
  \************************************************************************/
/***/ (() => {

eval("/*\r\n * ATTENTION: An \"eval-source-map\" devtool has been used.\r\n * This devtool is neither made for production nor for readable output files.\r\n * It uses \"eval()\" calls to create a separate source file with attached SourceMaps in the browser devtools.\r\n * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)\r\n * or disable the default devtool with \"devtool: false\".\r\n * If you are looking for production-ready output files, see mode: \"production\" (https://webpack.js.org/configuration/mode/).\r\n */\n\n/******/\n(function () {\n  // webpackBootstrap\n\n  /******/\n  \"use strict\";\n  /******/\n\n  var __webpack_modules__ = {\n    /***/\n    \"./resources/assets/core/js/custom/documentation/general/jkanban/basic.js\":\n    /*!********************************************************************************!*\\\r\n      !*** ./resources/assets/core/js/custom/documentation/general/jkanban/basic.js ***!\r\n      \\********************************************************************************/\n\n    /***/\n    function resourcesAssetsCoreJsCustomDocumentationGeneralJkanbanBasicJs() {\n      eval(\" // Class definition\\n\\nvar KTJKanbanDemoBasic = function () {\\n  // Private functions\\n  var exampleBasic = function exampleBasic() {\\n    var kanban = new jKanban({\\n      element: '#kt_docs_jkanban_basic',\\n      gutter: '0',\\n      widthBoard: '250px',\\n      boards: [{\\n        'id': '_inprocess',\\n        'title': 'In Process',\\n        'item': [{\\n          'title': '<span class=\\\"fw-bold\\\">You can drag me too</span>'\\n        }, {\\n          'title': '<span class=\\\"fw-bold\\\">Buy Milk</span>'\\n        }]\\n      }, {\\n        'id': '_working',\\n        'title': 'Working',\\n        'item': [{\\n          'title': '<span class=\\\"fw-bold\\\">Do Something!</span>'\\n        }, {\\n          'title': '<span class=\\\"fw-bold\\\">Run?</span>'\\n        }]\\n      }, {\\n        'id': '_done',\\n        'title': 'Done',\\n        'item': [{\\n          'title': '<span class=\\\"fw-bold\\\">All right</span>'\\n        }, {\\n          'title': '<span class=\\\"fw-bold\\\">Ok!</span>'\\n        }]\\n      }]\\n    });\\n  };\\n\\n  return {\\n    // Public Functions\\n    init: function init() {\\n      exampleBasic();\\n    }\\n  };\\n}(); // On document ready\\n\\n\\nKTUtil.onDOMContentLoaded(function () {\\n  KTJKanbanDemoBasic.init();\\n});//# sourceURL=[module]\\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9qa2FuYmFuL2Jhc2ljLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGtCQUFrQixHQUFHLFlBQVc7QUFDaEM7QUFDQSxNQUFJQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFXO0FBQzFCLFFBQUlDLE1BQU0sR0FBRyxJQUFJQyxPQUFKLENBQVk7QUFDckJDLE1BQUFBLE9BQU8sRUFBRSx3QkFEWTtBQUVyQkMsTUFBQUEsTUFBTSxFQUFFLEdBRmE7QUFHckJDLE1BQUFBLFVBQVUsRUFBRSxPQUhTO0FBSXJCQyxNQUFBQSxNQUFNLEVBQUUsQ0FBQztBQUNELGNBQU0sWUFETDtBQUVELGlCQUFTLFlBRlI7QUFHRCxnQkFBUSxDQUFDO0FBQ0QsbUJBQVM7QUFEUixTQUFELEVBR0o7QUFDSSxtQkFBUztBQURiLFNBSEk7QUFIUCxPQUFELEVBVUQ7QUFDQyxjQUFNLFVBRFA7QUFFQyxpQkFBUyxTQUZWO0FBR0MsZ0JBQVEsQ0FBQztBQUNELG1CQUFTO0FBRFIsU0FBRCxFQUdKO0FBQ0ksbUJBQVM7QUFEYixTQUhJO0FBSFQsT0FWQyxFQW9CRDtBQUNDLGNBQU0sT0FEUDtBQUVDLGlCQUFTLE1BRlY7QUFHQyxnQkFBUSxDQUFDO0FBQ0QsbUJBQVM7QUFEUixTQUFELEVBR0o7QUFDSSxtQkFBUztBQURiLFNBSEk7QUFIVCxPQXBCQztBQUphLEtBQVosQ0FBYjtBQXFDSCxHQXRDRDs7QUF3Q0EsU0FBTztBQUNIO0FBQ0FDLElBQUFBLElBQUksRUFBRSxnQkFBVztBQUNiUCxNQUFBQSxZQUFZO0FBQ2Y7QUFKRSxHQUFQO0FBTUgsQ0FoRHdCLEVBQXpCLEMsQ0FrREE7OztBQUNBUSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNWLEVBQUFBLGtCQUFrQixDQUFDUSxJQUFuQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9qa2FuYmFuL2Jhc2ljLmpzPzY1OWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEpLYW5iYW5EZW1vQmFzaWMgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZXhhbXBsZUJhc2ljID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGthbmJhbiA9IG5ldyBqS2FuYmFuKHtcclxuICAgICAgICAgICAgZWxlbWVudDogJyNrdF9kb2NzX2prYW5iYW5fYmFzaWMnLFxyXG4gICAgICAgICAgICBndXR0ZXI6ICcwJyxcclxuICAgICAgICAgICAgd2lkdGhCb2FyZDogJzI1MHB4JyxcclxuICAgICAgICAgICAgYm9hcmRzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdfaW5wcm9jZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnSW4gUHJvY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2l0ZW0nOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJzxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPllvdSBjYW4gZHJhZyBtZSB0b288L3NwYW4+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+QnV5IE1pbGs8L3NwYW4+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdfd29ya2luZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1dvcmtpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdpdGVtJzogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICc8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5EbyBTb21ldGhpbmchPC9zcGFuPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJzxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPlJ1bj88L3NwYW4+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdfZG9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0RvbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdpdGVtJzogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICc8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5BbGwgcmlnaHQ8L3NwYW4+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+T2shPC9zcGFuPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlQmFzaWMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgS1RKS2FuYmFuRGVtb0Jhc2ljLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVEpLYW5iYW5EZW1vQmFzaWMiLCJleGFtcGxlQmFzaWMiLCJrYW5iYW4iLCJqS2FuYmFuIiwiZWxlbWVudCIsImd1dHRlciIsIndpZHRoQm9hcmQiLCJib2FyZHMiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/general/jkanban/basic.js\\n\");\n      /***/\n    }\n    /******/\n\n  };\n  /************************************************************************/\n\n  /******/\n\n  /******/\n  // startup\n\n  /******/\n  // Load entry module and return exports\n\n  /******/\n  // This entry module can't be inlined because the eval-source-map devtool is used.\n\n  /******/\n\n  var __webpack_exports__ = {};\n  /******/\n\n  __webpack_modules__[\"./resources/assets/core/js/custom/documentation/general/jkanban/basic.js\"]();\n  /******/\n\n  /******/\n\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvamthbmJhbi9iYXNpYy5qcz9kZTI1Il0sIm5hbWVzIjpbIl9fd2VicGFja19tb2R1bGVzX18iLCJldmFsIiwiX193ZWJwYWNrX2V4cG9ydHNfXyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFTLENBQUMsWUFBTTtBQUFFOztBQUNsQjtBQUFVO0FBQ1Y7O0FBQVUsTUFBSUEsbUJBQW1CLEdBQUk7QUFFckM7QUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFDQTtBQUFPLDZFQUFNO0FBRWJDLE1BQUFBLElBQUksQ0FBQyx1MktBQUQsQ0FBSjtBQUVBO0FBQU87QUFFUDs7QUFacUMsR0FBM0I7QUFhVjs7QUFDQTs7QUFDQTtBQUFVOztBQUNWO0FBQVU7O0FBQ1Y7QUFBVTs7QUFDVjs7QUFBVSxNQUFJQyxtQkFBbUIsR0FBRyxFQUExQjtBQUNWOztBQUFVRixFQUFBQSxtQkFBbUIsQ0FBQywwRUFBRCxDQUFuQjtBQUNWOztBQUNBOztBQUFVLENBdkJEIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQVRURU5USU9OOiBBbiBcImV2YWwtc291cmNlLW1hcFwiIGRldnRvb2wgaGFzIGJlZW4gdXNlZC5cclxuICogVGhpcyBkZXZ0b29sIGlzIG5laXRoZXIgbWFkZSBmb3IgcHJvZHVjdGlvbiBub3IgZm9yIHJlYWRhYmxlIG91dHB1dCBmaWxlcy5cclxuICogSXQgdXNlcyBcImV2YWwoKVwiIGNhbGxzIHRvIGNyZWF0ZSBhIHNlcGFyYXRlIHNvdXJjZSBmaWxlIHdpdGggYXR0YWNoZWQgU291cmNlTWFwcyBpbiB0aGUgYnJvd3NlciBkZXZ0b29scy5cclxuICogSWYgeW91IGFyZSB0cnlpbmcgdG8gcmVhZCB0aGUgb3V0cHV0IGZpbGUsIHNlbGVjdCBhIGRpZmZlcmVudCBkZXZ0b29sIChodHRwczovL3dlYnBhY2suanMub3JnL2NvbmZpZ3VyYXRpb24vZGV2dG9vbC8pXHJcbiAqIG9yIGRpc2FibGUgdGhlIGRlZmF1bHQgZGV2dG9vbCB3aXRoIFwiZGV2dG9vbDogZmFsc2VcIi5cclxuICogSWYgeW91IGFyZSBsb29raW5nIGZvciBwcm9kdWN0aW9uLXJlYWR5IG91dHB1dCBmaWxlcywgc2VlIG1vZGU6IFwicHJvZHVjdGlvblwiIChodHRwczovL3dlYnBhY2suanMub3JnL2NvbmZpZ3VyYXRpb24vbW9kZS8pLlxyXG4gKi9cclxuLyoqKioqKi8gKCgpID0+IHsgLy8gd2VicGFja0Jvb3RzdHJhcFxyXG4vKioqKioqLyBcdFwidXNlIHN0cmljdFwiO1xyXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcclxuXHJcbi8qKiovIFwiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9qa2FuYmFuL2Jhc2ljLmpzXCI6XHJcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxyXG4gICEqKiogLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9qa2FuYmFuL2Jhc2ljLmpzICoqKiFcclxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKioqLyAoKCkgPT4ge1xyXG5cclxuZXZhbChcIiAvLyBDbGFzcyBkZWZpbml0aW9uXFxuXFxudmFyIEtUSkthbmJhbkRlbW9CYXNpYyA9IGZ1bmN0aW9uICgpIHtcXG4gIC8vIFByaXZhdGUgZnVuY3Rpb25zXFxuICB2YXIgZXhhbXBsZUJhc2ljID0gZnVuY3Rpb24gZXhhbXBsZUJhc2ljKCkge1xcbiAgICB2YXIga2FuYmFuID0gbmV3IGpLYW5iYW4oe1xcbiAgICAgIGVsZW1lbnQ6ICcja3RfZG9jc19qa2FuYmFuX2Jhc2ljJyxcXG4gICAgICBndXR0ZXI6ICcwJyxcXG4gICAgICB3aWR0aEJvYXJkOiAnMjUwcHgnLFxcbiAgICAgIGJvYXJkczogW3tcXG4gICAgICAgICdpZCc6ICdfaW5wcm9jZXNzJyxcXG4gICAgICAgICd0aXRsZSc6ICdJbiBQcm9jZXNzJyxcXG4gICAgICAgICdpdGVtJzogW3tcXG4gICAgICAgICAgJ3RpdGxlJzogJzxzcGFuIGNsYXNzPVxcXCJmdy1ib2xkXFxcIj5Zb3UgY2FuIGRyYWcgbWUgdG9vPC9zcGFuPidcXG4gICAgICAgIH0sIHtcXG4gICAgICAgICAgJ3RpdGxlJzogJzxzcGFuIGNsYXNzPVxcXCJmdy1ib2xkXFxcIj5CdXkgTWlsazwvc3Bhbj4nXFxuICAgICAgICB9XVxcbiAgICAgIH0sIHtcXG4gICAgICAgICdpZCc6ICdfd29ya2luZycsXFxuICAgICAgICAndGl0bGUnOiAnV29ya2luZycsXFxuICAgICAgICAnaXRlbSc6IFt7XFxuICAgICAgICAgICd0aXRsZSc6ICc8c3BhbiBjbGFzcz1cXFwiZnctYm9sZFxcXCI+RG8gU29tZXRoaW5nITwvc3Bhbj4nXFxuICAgICAgICB9LCB7XFxuICAgICAgICAgICd0aXRsZSc6ICc8c3BhbiBjbGFzcz1cXFwiZnctYm9sZFxcXCI+UnVuPzwvc3Bhbj4nXFxuICAgICAgICB9XVxcbiAgICAgIH0sIHtcXG4gICAgICAgICdpZCc6ICdfZG9uZScsXFxuICAgICAgICAndGl0bGUnOiAnRG9uZScsXFxuICAgICAgICAnaXRlbSc6IFt7XFxuICAgICAgICAgICd0aXRsZSc6ICc8c3BhbiBjbGFzcz1cXFwiZnctYm9sZFxcXCI+QWxsIHJpZ2h0PC9zcGFuPidcXG4gICAgICAgIH0sIHtcXG4gICAgICAgICAgJ3RpdGxlJzogJzxzcGFuIGNsYXNzPVxcXCJmdy1ib2xkXFxcIj5PayE8L3NwYW4+J1xcbiAgICAgICAgfV1cXG4gICAgICB9XVxcbiAgICB9KTtcXG4gIH07XFxuXFxuICByZXR1cm4ge1xcbiAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXFxuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XFxuICAgICAgZXhhbXBsZUJhc2ljKCk7XFxuICAgIH1cXG4gIH07XFxufSgpOyAvLyBPbiBkb2N1bWVudCByZWFkeVxcblxcblxcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xcbiAgS1RKS2FuYmFuRGVtb0Jhc2ljLmluaXQoKTtcXG59KTsvLyMgc291cmNlVVJMPVttb2R1bGVdXFxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lMaTl5WlhOdmRYSmpaWE12WVhOelpYUnpMMk52Y21VdmFuTXZZM1Z6ZEc5dEwyUnZZM1Z0Wlc1MFlYUnBiMjR2WjJWdVpYSmhiQzlxYTJGdVltRnVMMkpoYzJsakxtcHpMbXB6SWl3aWJXRndjR2x1WjNNaU9pSkRRVVZCT3p0QlFVTkJMRWxCUVVsQkxHdENRVUZyUWl4SFFVRkhMRmxCUVZjN1FVRkRhRU03UVVGRFFTeE5RVUZKUXl4WlFVRlpMRWRCUVVjc1UwRkJaa0VzV1VGQlpTeEhRVUZYTzBGQlF6RkNMRkZCUVVsRExFMUJRVTBzUjBGQlJ5eEpRVUZKUXl4UFFVRktMRU5CUVZrN1FVRkRja0pETEUxQlFVRkJMRTlCUVU4c1JVRkJSU3gzUWtGRVdUdEJRVVZ5UWtNc1RVRkJRVUVzVFVGQlRTeEZRVUZGTEVkQlJtRTdRVUZIY2tKRExFMUJRVUZCTEZWQlFWVXNSVUZCUlN4UFFVaFRPMEZCU1hKQ1F5eE5RVUZCUVN4TlFVRk5MRVZCUVVVc1EwRkJRenRCUVVORUxHTkJRVTBzV1VGRVREdEJRVVZFTEdsQ1FVRlRMRmxCUmxJN1FVRkhSQ3huUWtGQlVTeERRVUZETzBGQlEwUXNiVUpCUVZNN1FVRkVVaXhUUVVGRUxFVkJSMG83UVVGRFNTeHRRa0ZCVXp0QlFVUmlMRk5CU0VrN1FVRklVQ3hQUVVGRUxFVkJWVVE3UVVGRFF5eGpRVUZOTEZWQlJGQTdRVUZGUXl4cFFrRkJVeXhUUVVaV08wRkJSME1zWjBKQlFWRXNRMEZCUXp0QlFVTkVMRzFDUVVGVE8wRkJSRklzVTBGQlJDeEZRVWRLTzBGQlEwa3NiVUpCUVZNN1FVRkVZaXhUUVVoSk8wRkJTRlFzVDBGV1F5eEZRVzlDUkR0QlFVTkRMR05CUVUwc1QwRkVVRHRCUVVWRExHbENRVUZUTEUxQlJsWTdRVUZIUXl4blFrRkJVU3hEUVVGRE8wRkJRMFFzYlVKQlFWTTdRVUZFVWl4VFFVRkVMRVZCUjBvN1FVRkRTU3h0UWtGQlV6dEJRVVJpTEZOQlNFazdRVUZJVkN4UFFYQkNRenRCUVVwaExFdEJRVm9zUTBGQllqdEJRWEZEU0N4SFFYUkRSRHM3UVVGM1EwRXNVMEZCVHp0QlFVTklPMEZCUTBGRExFbEJRVUZCTEVsQlFVa3NSVUZCUlN4blFrRkJWenRCUVVOaVVDeE5RVUZCUVN4WlFVRlpPMEZCUTJZN1FVRktSU3hIUVVGUU8wRkJUVWdzUTBGb1JIZENMRVZCUVhwQ0xFTXNRMEZyUkVFN096dEJRVU5CVVN4TlFVRk5MRU5CUVVORExHdENRVUZRTEVOQlFUQkNMRmxCUVZjN1FVRkRha05XTEVWQlFVRkJMR3RDUVVGclFpeERRVUZEVVN4SlFVRnVRanRCUVVOSUxFTkJSa1FpTENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZMaTl5WlhOdmRYSmpaWE12WVhOelpYUnpMMk52Y21VdmFuTXZZM1Z6ZEc5dEwyUnZZM1Z0Wlc1MFlYUnBiMjR2WjJWdVpYSmhiQzlxYTJGdVltRnVMMkpoYzJsakxtcHpQelkxT1dFaVhTd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lYQ0oxYzJVZ2MzUnlhV04wWENJN1hISmNibHh5WEc0dkx5QkRiR0Z6Y3lCa1pXWnBibWwwYVc5dVhISmNiblpoY2lCTFZFcExZVzVpWVc1RVpXMXZRbUZ6YVdNZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjY2x4dUlDQWdJQzh2SUZCeWFYWmhkR1VnWm5WdVkzUnBiMjV6WEhKY2JpQWdJQ0IyWVhJZ1pYaGhiWEJzWlVKaGMybGpJRDBnWm5WdVkzUnBiMjRvS1NCN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUd0aGJtSmhiaUE5SUc1bGR5QnFTMkZ1WW1GdUtIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeGxiV1Z1ZERvZ0p5TnJkRjlrYjJOelgycHJZVzVpWVc1ZlltRnphV01uTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JuZFhSMFpYSTZJQ2N3Snl4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZDJsa2RHaENiMkZ5WkRvZ0p6STFNSEI0Snl4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWW05aGNtUnpPaUJiZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ2RwWkNjNklDZGZhVzV3Y205alpYTnpKeXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQW5kR2wwYkdVbk9pQW5TVzRnVUhKdlkyVnpjeWNzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdKMmwwWlcwbk9pQmJlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0ozUnBkR3hsSnpvZ0p6eHpjR0Z1SUdOc1lYTnpQVndpWm5jdFltOXNaRndpUGxsdmRTQmpZVzRnWkhKaFp5QnRaU0IwYjI4OEwzTndZVzQrSjF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBbmRHbDBiR1VuT2lBblBITndZVzRnWTJ4aGMzTTlYQ0ptZHkxaWIyeGtYQ0krUW5WNUlFMXBiR3M4TDNOd1lXNCtKMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlN3Z2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNkcFpDYzZJQ2RmZDI5eWEybHVaeWNzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdKM1JwZEd4bEp6b2dKMWR2Y210cGJtY25MRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDZHBkR1Z0SnpvZ1czdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNkMGFYUnNaU2M2SUNjOGMzQmhiaUJqYkdGemN6MWNJbVozTFdKdmJHUmNJajVFYnlCVGIyMWxkR2hwYm1jaFBDOXpjR0Z1UGlkY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0ozUnBkR3hsSnpvZ0p6eHpjR0Z1SUdOc1lYTnpQVndpWm5jdFltOXNaRndpUGxKMWJqODhMM053WVc0K0oxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU3dnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ2RwWkNjNklDZGZaRzl1WlNjc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSjNScGRHeGxKem9nSjBSdmJtVW5MRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDZHBkR1Z0SnpvZ1czdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNkMGFYUnNaU2M2SUNjOGMzQmhiaUJqYkdGemN6MWNJbVozTFdKdmJHUmNJajVCYkd3Z2NtbG5hSFE4TDNOd1lXNCtKMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FuZEdsMGJHVW5PaUFuUEhOd1lXNGdZMnhoYzNNOVhDSm1keTFpYjJ4a1hDSStUMnNoUEM5emNHRnVQaWRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRjFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWFZ4eVhHNGdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhKbGRIVnliaUI3WEhKY2JpQWdJQ0FnSUNBZ0x5OGdVSFZpYkdsaklFWjFibU4wYVc5dWMxeHlYRzRnSUNBZ0lDQWdJR2x1YVhRNklHWjFibU4wYVc5dUtDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxlR0Z0Y0d4bFFtRnphV01vS1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlPMXh5WEc1OUtDazdYSEpjYmx4eVhHNHZMeUJQYmlCa2IyTjFiV1Z1ZENCeVpXRmtlVnh5WEc1TFZGVjBhV3d1YjI1RVQwMURiMjUwWlc1MFRHOWhaR1ZrS0daMWJtTjBhVzl1S0NrZ2UxeHlYRzRnSUNBZ1MxUktTMkZ1WW1GdVJHVnRiMEpoYzJsakxtbHVhWFFvS1R0Y2NseHVmU2s3WEhKY2JpSmRMQ0p1WVcxbGN5STZXeUpMVkVwTFlXNWlZVzVFWlcxdlFtRnphV01pTENKbGVHRnRjR3hsUW1GemFXTWlMQ0pyWVc1aVlXNGlMQ0pxUzJGdVltRnVJaXdpWld4bGJXVnVkQ0lzSW1kMWRIUmxjaUlzSW5kcFpIUm9RbTloY21RaUxDSmliMkZ5WkhNaUxDSnBibWwwSWl3aVMxUlZkR2xzSWl3aWIyNUVUMDFEYjI1MFpXNTBURzloWkdWa0lsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT1cXG4vLyMgc291cmNlVVJMPXdlYnBhY2staW50ZXJuYWw6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9qa2FuYmFuL2Jhc2ljLmpzXFxuXCIpO1xyXG5cclxuLyoqKi8gfSlcclxuXHJcbi8qKioqKiovIFx0fSk7XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qKioqKiovIFx0XHJcbi8qKioqKiovIFx0Ly8gc3RhcnR1cFxyXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xyXG4vKioqKioqLyBcdC8vIFRoaXMgZW50cnkgbW9kdWxlIGNhbid0IGJlIGlubGluZWQgYmVjYXVzZSB0aGUgZXZhbC1zb3VyY2UtbWFwIGRldnRvb2wgaXMgdXNlZC5cclxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xyXG4vKioqKioqLyBcdF9fd2VicGFja19tb2R1bGVzX19bXCIuL3Jlc291cmNlcy9hc3NldHMvY29yZS9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9nZW5lcmFsL2prYW5iYW4vYmFzaWMuanNcIl0oKTtcclxuLyoqKioqKi8gXHRcclxuLyoqKioqKi8gfSkoKVxyXG47Il0sImZpbGUiOiIuL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9qa2FuYmFuL2Jhc2ljLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/jkanban/basic.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/jkanban/basic.js"]();
/******/ 	
/******/ })()
;