"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggle = toggle;

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Toggle behavior for navigation / search buttons.
 *
 * @package ResponsiveFoundation
 */
function toggle() {
  var $body = (0, _jquery.default)('body');
  var $toggle = (0, _jquery.default)('.js-nav-toggle');
  var $toggleitems = $toggle.add('nav');
  var $searchtoggle = (0, _jquery.default)('.js-search-toggle');
  var $searchitems = $searchtoggle.add('#quicksearch'); // Add aria attributes for control/expanded if JS is available

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
}
