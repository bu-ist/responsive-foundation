(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

require("./modules/toggle");

},{"./modules/toggle":2}],2:[function(require,module,exports){
(function (global){
"use strict";

var _jquery = _interopRequireDefault((typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Toggle behavior for navigation / search buttons.
 */
var $body = (0, _jquery.default)("body"),
    $toggle = (0, _jquery.default)(".js-nav-toggle"),
    $toggleitems = $toggle.add("nav"),
    $searchtoggle = (0, _jquery.default)(".js-search-toggle"),
    $searchitems = $searchtoggle.add("#quicksearch"); // Add aria attributes for control/expanded if JS is available

$searchtoggle.attr("aria-expanded", "false").attr("aria-controls", "quicksearch");
$toggle.attr("aria-expanded", "false").attr("aria-controls", "primary-nav-menu");
$toggle.on("click", function (e) {
  e.preventDefault();

  if ($toggle.attr("aria-expanded") === "false") {
    $toggle.attr("aria-expanded", "true").attr("aria-label", "Close menu");
  } else {
    $toggle.attr("aria-expanded", "false").attr("aria-label", "Open menu");
  }

  $toggleitems.toggleClass("is-open");
  $searchitems.removeClass("is-open");
  $body.toggleClass("nav-open").removeClass("search-open");
});

function toggleSearchPanel(focus) {
  $toggleitems.removeClass("is-open");

  if (focus === true && !(0, _jquery.default)(this).hasClass("is-open")) {
    setTimeout(function () {
      (0, _jquery.default)("#q").focus();
    }, 100);
  }

  if ($searchtoggle.attr("aria-expanded") === "false") {
    $searchtoggle.attr("aria-expanded", "true").attr("aria-label", "Close search");
  } else {
    $searchtoggle.attr("aria-expanded", "false").attr("aria-label", "Open search");
  }

  $searchitems.toggleClass("is-open");
  $body.toggleClass("search-open").removeClass("nav-open");
}

$searchtoggle.on({
  click: function click(e) {
    e.preventDefault();
    toggleSearchPanel(true);
  },
  keypress: function keypress(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      toggleSearchPanel(false);
    }
  }
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy1kZXYvbWFpbi5qcyIsImpzLWRldi9tb2R1bGVzL3RvZ2dsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDU0E7Ozs7OztBQ1RBOzs7O0FBRUE7OztBQUdBLElBQUksS0FBSyxHQUFHLHFCQUFFLE1BQUYsQ0FBWjtBQUFBLElBQ0MsT0FBTyxHQUFHLHFCQUFFLGdCQUFGLENBRFg7QUFBQSxJQUVDLFlBQVksR0FBRyxPQUFPLENBQUMsR0FBUixDQUFZLEtBQVosQ0FGaEI7QUFBQSxJQUdDLGFBQWEsR0FBRyxxQkFBRSxtQkFBRixDQUhqQjtBQUFBLElBSUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxHQUFkLENBQWtCLGNBQWxCLENBSmhCLEMsQ0FNQTs7QUFDQSxhQUFhLENBQ1gsSUFERixDQUNPLGVBRFAsRUFDd0IsT0FEeEIsRUFFRSxJQUZGLENBRU8sZUFGUCxFQUV3QixhQUZ4QjtBQUdBLE9BQU8sQ0FDTCxJQURGLENBQ08sZUFEUCxFQUN3QixPQUR4QixFQUVFLElBRkYsQ0FFTyxlQUZQLEVBRXdCLGtCQUZ4QjtBQUlBLE9BQU8sQ0FBQyxFQUFSLENBQVcsT0FBWCxFQUFvQixVQUFTLENBQVQsRUFBWTtBQUMvQixFQUFBLENBQUMsQ0FBQyxjQUFGOztBQUVBLE1BQUksT0FBTyxDQUFDLElBQVIsQ0FBYSxlQUFiLE1BQWtDLE9BQXRDLEVBQStDO0FBQzlDLElBQUEsT0FBTyxDQUFDLElBQVIsQ0FBYSxlQUFiLEVBQThCLE1BQTlCLEVBQXNDLElBQXRDLENBQTJDLFlBQTNDLEVBQXlELFlBQXpEO0FBQ0EsR0FGRCxNQUVPO0FBQ04sSUFBQSxPQUFPLENBQUMsSUFBUixDQUFhLGVBQWIsRUFBOEIsT0FBOUIsRUFBdUMsSUFBdkMsQ0FBNEMsWUFBNUMsRUFBMEQsV0FBMUQ7QUFDQTs7QUFFRCxFQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLFNBQXpCO0FBQ0EsRUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixTQUF6QjtBQUNBLEVBQUEsS0FBSyxDQUFDLFdBQU4sQ0FBa0IsVUFBbEIsRUFBOEIsV0FBOUIsQ0FBMEMsYUFBMUM7QUFDQSxDQVpEOztBQWNBLFNBQVMsaUJBQVQsQ0FBMkIsS0FBM0IsRUFBa0M7QUFDakMsRUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixTQUF6Qjs7QUFFQSxNQUFJLEtBQUssS0FBSyxJQUFWLElBQWtCLENBQUMscUJBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsU0FBakIsQ0FBdkIsRUFBb0Q7QUFDbkQsSUFBQSxVQUFVLENBQUMsWUFBVztBQUNyQiwyQkFBRSxJQUFGLEVBQVEsS0FBUjtBQUNBLEtBRlMsRUFFUCxHQUZPLENBQVY7QUFHQTs7QUFFRCxNQUFJLGFBQWEsQ0FBQyxJQUFkLENBQW1CLGVBQW5CLE1BQXdDLE9BQTVDLEVBQXFEO0FBQ3BELElBQUEsYUFBYSxDQUNYLElBREYsQ0FDTyxlQURQLEVBQ3dCLE1BRHhCLEVBRUUsSUFGRixDQUVPLFlBRlAsRUFFcUIsY0FGckI7QUFHQSxHQUpELE1BSU87QUFDTixJQUFBLGFBQWEsQ0FDWCxJQURGLENBQ08sZUFEUCxFQUN3QixPQUR4QixFQUVFLElBRkYsQ0FFTyxZQUZQLEVBRXFCLGFBRnJCO0FBR0E7O0FBRUQsRUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixTQUF6QjtBQUNBLEVBQUEsS0FBSyxDQUFDLFdBQU4sQ0FBa0IsYUFBbEIsRUFBaUMsV0FBakMsQ0FBNkMsVUFBN0M7QUFDQTs7QUFFRCxhQUFhLENBQUMsRUFBZCxDQUFpQjtBQUNoQixFQUFBLEtBQUssRUFBRSxlQUFTLENBQVQsRUFBWTtBQUNsQixJQUFBLENBQUMsQ0FBQyxjQUFGO0FBQ0EsSUFBQSxpQkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0EsR0FKZTtBQUtoQixFQUFBLFFBQVEsRUFBRSxrQkFBUyxDQUFULEVBQVk7QUFDckIsUUFBSSxDQUFDLENBQUMsT0FBRixLQUFjLEVBQWxCLEVBQXNCO0FBQ3JCLE1BQUEsQ0FBQyxDQUFDLGNBQUY7QUFDQSxNQUFBLGlCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFDQTtBQUNEO0FBVmUsQ0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKipcbiAqIFRoZSBtYWluIGpzIGZpbGUgZm9yIHRoZSBwcm9qZWN0LlxuICpcbiAqIFRoaXMgaXMgdGhlIGVudHJ5IHBvaW50IHdoZXJlIGFsbCBtb2R1bGVzIGFyZSBpbXBvcnRlZCBhbmQgY29tcGlsZWQgdG9nZXRoZXJcbiAqIGludG8gb25lIHJlc3VsdGluZyBgbWFpbi5qc2Agb3IgYG1haW4ubWluLmpzYCBmaWxlLlxuICpcbiAqIEBwYWNrYWdlIFJlc3BvbnNpdmVGb3VuZGF0aW9uXG4gKi9cblxuaW1wb3J0IFwiLi9tb2R1bGVzL3RvZ2dsZVwiO1xuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuXG4vKipcbiAqIFRvZ2dsZSBiZWhhdmlvciBmb3IgbmF2aWdhdGlvbiAvIHNlYXJjaCBidXR0b25zLlxuICovXG52YXIgJGJvZHkgPSAkKFwiYm9keVwiKSxcblx0JHRvZ2dsZSA9ICQoXCIuanMtbmF2LXRvZ2dsZVwiKSxcblx0JHRvZ2dsZWl0ZW1zID0gJHRvZ2dsZS5hZGQoXCJuYXZcIiksXG5cdCRzZWFyY2h0b2dnbGUgPSAkKFwiLmpzLXNlYXJjaC10b2dnbGVcIiksXG5cdCRzZWFyY2hpdGVtcyA9ICRzZWFyY2h0b2dnbGUuYWRkKFwiI3F1aWNrc2VhcmNoXCIpO1xuXG4vLyBBZGQgYXJpYSBhdHRyaWJ1dGVzIGZvciBjb250cm9sL2V4cGFuZGVkIGlmIEpTIGlzIGF2YWlsYWJsZVxuJHNlYXJjaHRvZ2dsZVxuXHQuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKVxuXHQuYXR0cihcImFyaWEtY29udHJvbHNcIiwgXCJxdWlja3NlYXJjaFwiKTtcbiR0b2dnbGVcblx0LmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIilcblx0LmF0dHIoXCJhcmlhLWNvbnRyb2xzXCIsIFwicHJpbWFyeS1uYXYtbWVudVwiKTtcblxuJHRvZ2dsZS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdGlmICgkdG9nZ2xlLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIpID09PSBcImZhbHNlXCIpIHtcblx0XHQkdG9nZ2xlLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKS5hdHRyKFwiYXJpYS1sYWJlbFwiLCBcIkNsb3NlIG1lbnVcIik7XG5cdH0gZWxzZSB7XG5cdFx0JHRvZ2dsZS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpLmF0dHIoXCJhcmlhLWxhYmVsXCIsIFwiT3BlbiBtZW51XCIpO1xuXHR9XG5cblx0JHRvZ2dsZWl0ZW1zLnRvZ2dsZUNsYXNzKFwiaXMtb3BlblwiKTtcblx0JHNlYXJjaGl0ZW1zLnJlbW92ZUNsYXNzKFwiaXMtb3BlblwiKTtcblx0JGJvZHkudG9nZ2xlQ2xhc3MoXCJuYXYtb3BlblwiKS5yZW1vdmVDbGFzcyhcInNlYXJjaC1vcGVuXCIpO1xufSk7XG5cbmZ1bmN0aW9uIHRvZ2dsZVNlYXJjaFBhbmVsKGZvY3VzKSB7XG5cdCR0b2dnbGVpdGVtcy5yZW1vdmVDbGFzcyhcImlzLW9wZW5cIik7XG5cblx0aWYgKGZvY3VzID09PSB0cnVlICYmICEkKHRoaXMpLmhhc0NsYXNzKFwiaXMtb3BlblwiKSkge1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKFwiI3FcIikuZm9jdXMoKTtcblx0XHR9LCAxMDApO1xuXHR9XG5cblx0aWYgKCRzZWFyY2h0b2dnbGUuYXR0cihcImFyaWEtZXhwYW5kZWRcIikgPT09IFwiZmFsc2VcIikge1xuXHRcdCRzZWFyY2h0b2dnbGVcblx0XHRcdC5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCBcInRydWVcIilcblx0XHRcdC5hdHRyKFwiYXJpYS1sYWJlbFwiLCBcIkNsb3NlIHNlYXJjaFwiKTtcblx0fSBlbHNlIHtcblx0XHQkc2VhcmNodG9nZ2xlXG5cdFx0XHQuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKVxuXHRcdFx0LmF0dHIoXCJhcmlhLWxhYmVsXCIsIFwiT3BlbiBzZWFyY2hcIik7XG5cdH1cblxuXHQkc2VhcmNoaXRlbXMudG9nZ2xlQ2xhc3MoXCJpcy1vcGVuXCIpO1xuXHQkYm9keS50b2dnbGVDbGFzcyhcInNlYXJjaC1vcGVuXCIpLnJlbW92ZUNsYXNzKFwibmF2LW9wZW5cIik7XG59XG5cbiRzZWFyY2h0b2dnbGUub24oe1xuXHRjbGljazogZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR0b2dnbGVTZWFyY2hQYW5lbCh0cnVlKTtcblx0fSxcblx0a2V5cHJlc3M6IGZ1bmN0aW9uKGUpIHtcblx0XHRpZiAoZS5rZXlDb2RlID09PSAxMykge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dG9nZ2xlU2VhcmNoUGFuZWwoZmFsc2UpO1xuXHRcdH1cblx0fVxufSk7XG4iXX0=
