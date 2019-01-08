(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
"use strict";

var _jquery = _interopRequireDefault((typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Toggle behavior for navigation / search buttons.
 */
var $body = (0, _jquery.default)('body'),
    $toggle = (0, _jquery.default)('.js-nav-toggle'),
    $toggleitems = $toggle.add('nav'),
    $searchtoggle = (0, _jquery.default)('.js-search-toggle'),
    $searchitems = $searchtoggle.add('#quicksearch'); // Add aria attributes for control/expanded if JS is available

$searchtoggle.attr('aria-expanded', 'false').attr('aria-controls', 'quicksearch');
$toggle.attr('aria-expanded', 'false').attr('aria-controls', 'primary-nav-menu');
$toggle.on('click', function (e) {
  e.preventDefault();

  if ($toggle.attr('aria-expanded') === 'false') {
    $toggle.attr('aria-expanded', 'true').attr('aria-label', 'Close menu');
  } else {
    $toggle.attr('aria-expanded', 'false').attr('aria-label', 'Open menu');
  }

  $toggleitems.toggleClass('is-open');
  $searchitems.removeClass('is-open');
  $body.toggleClass('nav-open').removeClass('search-open');
});

function toggleSearchPanel(focus) {
  $toggleitems.removeClass('is-open');

  if (focus === true && !(0, _jquery.default)(this).hasClass('is-open')) {
    setTimeout(function () {
      (0, _jquery.default)('#q').focus();
    }, 100);
  }

  if ($searchtoggle.attr('aria-expanded') === 'false') {
    $searchtoggle.attr('aria-expanded', 'true').attr('aria-label', 'Close search');
  } else {
    $searchtoggle.attr('aria-expanded', 'false').attr('aria-label', 'Open search');
  }

  $searchitems.toggleClass('is-open');
  $body.toggleClass('search-open').removeClass('nav-open');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy1kZXYvdG9nZ2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDQUE7Ozs7QUFFQTs7O0FBR0MsSUFBSSxLQUFLLEdBQUcscUJBQUcsTUFBSCxDQUFaO0FBQUEsSUFDRSxPQUFPLEdBQUcscUJBQUcsZ0JBQUgsQ0FEWjtBQUFBLElBRUUsWUFBWSxHQUFHLE9BQU8sQ0FBQyxHQUFSLENBQWEsS0FBYixDQUZqQjtBQUFBLElBR0UsYUFBYSxHQUFHLHFCQUFHLG1CQUFILENBSGxCO0FBQUEsSUFJRSxZQUFZLEdBQUcsYUFBYSxDQUFDLEdBQWQsQ0FBbUIsY0FBbkIsQ0FKakIsQyxDQU1BOztBQUNBLGFBQWEsQ0FBQyxJQUFkLENBQW9CLGVBQXBCLEVBQXFDLE9BQXJDLEVBQStDLElBQS9DLENBQXFELGVBQXJELEVBQXNFLGFBQXRFO0FBQ0EsT0FBTyxDQUFDLElBQVIsQ0FBYyxlQUFkLEVBQStCLE9BQS9CLEVBQXlDLElBQXpDLENBQStDLGVBQS9DLEVBQWdFLGtCQUFoRTtBQUVBLE9BQU8sQ0FBQyxFQUFSLENBQVksT0FBWixFQUFxQixVQUFXLENBQVgsRUFBZTtBQUNuQyxFQUFBLENBQUMsQ0FBQyxjQUFGOztBQUVBLE1BQUssT0FBTyxDQUFDLElBQVIsQ0FBYyxlQUFkLE1BQW9DLE9BQXpDLEVBQW1EO0FBQ2xELElBQUEsT0FBTyxDQUFDLElBQVIsQ0FBYyxlQUFkLEVBQStCLE1BQS9CLEVBQ0ksSUFESixDQUNVLFlBRFYsRUFDd0IsWUFEeEI7QUFFQSxHQUhELE1BR087QUFDTixJQUFBLE9BQU8sQ0FBQyxJQUFSLENBQWMsZUFBZCxFQUErQixPQUEvQixFQUNJLElBREosQ0FDVSxZQURWLEVBQ3dCLFdBRHhCO0FBRUE7O0FBRUQsRUFBQSxZQUFZLENBQUMsV0FBYixDQUEwQixTQUExQjtBQUNBLEVBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBMEIsU0FBMUI7QUFDQSxFQUFBLEtBQUssQ0FBQyxXQUFOLENBQW1CLFVBQW5CLEVBQWdDLFdBQWhDLENBQTZDLGFBQTdDO0FBQ0EsQ0FkRDs7QUFnQkEsU0FBUyxpQkFBVCxDQUE0QixLQUE1QixFQUFvQztBQUNuQyxFQUFBLFlBQVksQ0FBQyxXQUFiLENBQTBCLFNBQTFCOztBQUVBLE1BQUksS0FBSyxLQUFLLElBQVYsSUFBa0IsQ0FBRSxxQkFBRyxJQUFILEVBQVUsUUFBVixDQUFvQixTQUFwQixDQUF4QixFQUF5RDtBQUN4RCxJQUFBLFVBQVUsQ0FBRSxZQUFVO0FBQ3JCLDJCQUFHLElBQUgsRUFBVSxLQUFWO0FBQ0EsS0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUdBOztBQUVELE1BQUssYUFBYSxDQUFDLElBQWQsQ0FBb0IsZUFBcEIsTUFBMEMsT0FBL0MsRUFBeUQ7QUFDeEQsSUFBQSxhQUFhLENBQUMsSUFBZCxDQUFvQixlQUFwQixFQUFxQyxNQUFyQyxFQUE4QyxJQUE5QyxDQUFvRCxZQUFwRCxFQUFrRSxjQUFsRTtBQUNBLEdBRkQsTUFFTztBQUNOLElBQUEsYUFBYSxDQUFDLElBQWQsQ0FBb0IsZUFBcEIsRUFBcUMsT0FBckMsRUFBK0MsSUFBL0MsQ0FBcUQsWUFBckQsRUFBbUUsYUFBbkU7QUFDQTs7QUFFRCxFQUFBLFlBQVksQ0FBQyxXQUFiLENBQTBCLFNBQTFCO0FBQ0EsRUFBQSxLQUFLLENBQUMsV0FBTixDQUFtQixhQUFuQixFQUFtQyxXQUFuQyxDQUFnRCxVQUFoRDtBQUNBOztBQUVELGFBQWEsQ0FBQyxFQUFkLENBQWlCO0FBQ2hCLEVBQUEsS0FBSyxFQUFFLGVBQVcsQ0FBWCxFQUFlO0FBQ3JCLElBQUEsQ0FBQyxDQUFDLGNBQUY7QUFDQSxJQUFBLGlCQUFpQixDQUFFLElBQUYsQ0FBakI7QUFDQSxHQUplO0FBS2hCLEVBQUEsUUFBUSxFQUFFLGtCQUFXLENBQVgsRUFBZTtBQUN4QixRQUFLLENBQUMsQ0FBQyxPQUFGLEtBQWMsRUFBbkIsRUFBd0I7QUFDdkIsTUFBQSxDQUFDLENBQUMsY0FBRjtBQUNBLE1BQUEsaUJBQWlCLENBQUUsS0FBRixDQUFqQjtBQUNBO0FBQ0Q7QUFWZSxDQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuLyoqXG4gKiBUb2dnbGUgYmVoYXZpb3IgZm9yIG5hdmlnYXRpb24gLyBzZWFyY2ggYnV0dG9ucy5cbiAqL1xuXHR2YXIgJGJvZHkgPSAkKCAnYm9keScgKSxcblx0XHQgJHRvZ2dsZSA9ICQoICcuanMtbmF2LXRvZ2dsZScgKSxcblx0XHQgJHRvZ2dsZWl0ZW1zID0gJHRvZ2dsZS5hZGQoICduYXYnICksXG5cdFx0ICRzZWFyY2h0b2dnbGUgPSAkKCAnLmpzLXNlYXJjaC10b2dnbGUnICksXG5cdFx0ICRzZWFyY2hpdGVtcyA9ICRzZWFyY2h0b2dnbGUuYWRkKCAnI3F1aWNrc2VhcmNoJyApO1xuXG5cdC8vIEFkZCBhcmlhIGF0dHJpYnV0ZXMgZm9yIGNvbnRyb2wvZXhwYW5kZWQgaWYgSlMgaXMgYXZhaWxhYmxlXG5cdCRzZWFyY2h0b2dnbGUuYXR0ciggJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnICkuYXR0ciggJ2FyaWEtY29udHJvbHMnLCAncXVpY2tzZWFyY2gnICk7XG5cdCR0b2dnbGUuYXR0ciggJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnICkuYXR0ciggJ2FyaWEtY29udHJvbHMnLCAncHJpbWFyeS1uYXYtbWVudScgKTtcblxuXHQkdG9nZ2xlLm9uKCAnY2xpY2snLCBmdW5jdGlvbiAoIGUgKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYgKCAkdG9nZ2xlLmF0dHIoICdhcmlhLWV4cGFuZGVkJyApID09PSAnZmFsc2UnICkge1xuXHRcdFx0JHRvZ2dsZS5hdHRyKCAnYXJpYS1leHBhbmRlZCcsICd0cnVlJyApXG5cdFx0XHRcdFx0IC5hdHRyKCAnYXJpYS1sYWJlbCcsICdDbG9zZSBtZW51JyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdG9nZ2xlLmF0dHIoICdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyApXG5cdFx0XHRcdFx0IC5hdHRyKCAnYXJpYS1sYWJlbCcsICdPcGVuIG1lbnUnICk7XG5cdFx0fVxuXG5cdFx0JHRvZ2dsZWl0ZW1zLnRvZ2dsZUNsYXNzKCAnaXMtb3BlbicgKTtcblx0XHQkc2VhcmNoaXRlbXMucmVtb3ZlQ2xhc3MoICdpcy1vcGVuJyApO1xuXHRcdCRib2R5LnRvZ2dsZUNsYXNzKCAnbmF2LW9wZW4nICkucmVtb3ZlQ2xhc3MoICdzZWFyY2gtb3BlbicgKTtcblx0fSk7XG5cblx0ZnVuY3Rpb24gdG9nZ2xlU2VhcmNoUGFuZWwoIGZvY3VzICkge1xuXHRcdCR0b2dnbGVpdGVtcy5yZW1vdmVDbGFzcyggJ2lzLW9wZW4nICk7XG5cblx0XHRpZiggZm9jdXMgPT09IHRydWUgJiYgISAkKCB0aGlzICkuaGFzQ2xhc3MoICdpcy1vcGVuJyApICl7XG5cdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpe1xuXHRcdFx0XHQkKCAnI3EnICkuZm9jdXMoKTtcblx0XHRcdH0sIDEwMCApO1xuXHRcdH1cblxuXHRcdGlmICggJHNlYXJjaHRvZ2dsZS5hdHRyKCAnYXJpYS1leHBhbmRlZCcgKSA9PT0gJ2ZhbHNlJyApIHtcblx0XHRcdCRzZWFyY2h0b2dnbGUuYXR0ciggJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScgKS5hdHRyKCAnYXJpYS1sYWJlbCcsICdDbG9zZSBzZWFyY2gnICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRzZWFyY2h0b2dnbGUuYXR0ciggJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnICkuYXR0ciggJ2FyaWEtbGFiZWwnLCAnT3BlbiBzZWFyY2gnICk7XG5cdFx0fVxuXG5cdFx0JHNlYXJjaGl0ZW1zLnRvZ2dsZUNsYXNzKCAnaXMtb3BlbicgKTtcblx0XHQkYm9keS50b2dnbGVDbGFzcyggJ3NlYXJjaC1vcGVuJyApLnJlbW92ZUNsYXNzKCAnbmF2LW9wZW4nICk7XG5cdH1cblxuXHQkc2VhcmNodG9nZ2xlLm9uKHtcblx0XHRjbGljazogZnVuY3Rpb24gKCBlICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dG9nZ2xlU2VhcmNoUGFuZWwoIHRydWUgKTtcblx0XHR9LFxuXHRcdGtleXByZXNzOiBmdW5jdGlvbiAoIGUgKSB7XG5cdFx0XHRpZiAoIGUua2V5Q29kZSA9PT0gMTMgKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dG9nZ2xlU2VhcmNoUGFuZWwoIGZhbHNlICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTsiXX0=
