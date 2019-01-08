(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

/**
 * Toggle behavior for navigation / search buttons.
 */
(function ($) {
  var $body = $('body'),
      $toggle = $('.js-nav-toggle'),
      $toggleitems = $toggle.add('nav'),
      $searchtoggle = $('.js-search-toggle'),
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

    if (focus === true && !$(this).hasClass('is-open')) {
      setTimeout(function () {
        $('#q').focus();
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
})(jQuery);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy1kZXYvdG9nZ2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7O0FBR0UsV0FBVyxDQUFYLEVBQWU7QUFDaEIsTUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFFLE1BQUYsQ0FBYjtBQUFBLE1BQ0UsT0FBTyxHQUFHLENBQUMsQ0FBRSxnQkFBRixDQURiO0FBQUEsTUFFRSxZQUFZLEdBQUcsT0FBTyxDQUFDLEdBQVIsQ0FBYSxLQUFiLENBRmpCO0FBQUEsTUFHRSxhQUFhLEdBQUcsQ0FBQyxDQUFFLG1CQUFGLENBSG5CO0FBQUEsTUFJRSxZQUFZLEdBQUcsYUFBYSxDQUFDLEdBQWQsQ0FBbUIsY0FBbkIsQ0FKakIsQ0FEZ0IsQ0FPaEI7O0FBQ0EsRUFBQSxhQUFhLENBQUMsSUFBZCxDQUFvQixlQUFwQixFQUFxQyxPQUFyQyxFQUErQyxJQUEvQyxDQUFxRCxlQUFyRCxFQUFzRSxhQUF0RTtBQUNBLEVBQUEsT0FBTyxDQUFDLElBQVIsQ0FBYyxlQUFkLEVBQStCLE9BQS9CLEVBQXlDLElBQXpDLENBQStDLGVBQS9DLEVBQWdFLGtCQUFoRTtBQUVBLEVBQUEsT0FBTyxDQUFDLEVBQVIsQ0FBWSxPQUFaLEVBQXFCLFVBQVcsQ0FBWCxFQUFlO0FBQ25DLElBQUEsQ0FBQyxDQUFDLGNBQUY7O0FBRUEsUUFBSyxPQUFPLENBQUMsSUFBUixDQUFjLGVBQWQsTUFBb0MsT0FBekMsRUFBbUQ7QUFDbEQsTUFBQSxPQUFPLENBQUMsSUFBUixDQUFjLGVBQWQsRUFBK0IsTUFBL0IsRUFDSSxJQURKLENBQ1UsWUFEVixFQUN3QixZQUR4QjtBQUVBLEtBSEQsTUFHTztBQUNOLE1BQUEsT0FBTyxDQUFDLElBQVIsQ0FBYyxlQUFkLEVBQStCLE9BQS9CLEVBQ0ksSUFESixDQUNVLFlBRFYsRUFDd0IsV0FEeEI7QUFFQTs7QUFFRCxJQUFBLFlBQVksQ0FBQyxXQUFiLENBQTBCLFNBQTFCO0FBQ0EsSUFBQSxZQUFZLENBQUMsV0FBYixDQUEwQixTQUExQjtBQUNBLElBQUEsS0FBSyxDQUFDLFdBQU4sQ0FBbUIsVUFBbkIsRUFBZ0MsV0FBaEMsQ0FBNkMsYUFBN0M7QUFDQSxHQWREOztBQWdCQSxXQUFTLGlCQUFULENBQTRCLEtBQTVCLEVBQW9DO0FBQ25DLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBMEIsU0FBMUI7O0FBRUEsUUFBSSxLQUFLLEtBQUssSUFBVixJQUFrQixDQUFFLENBQUMsQ0FBRSxJQUFGLENBQUQsQ0FBVSxRQUFWLENBQW9CLFNBQXBCLENBQXhCLEVBQXlEO0FBQ3hELE1BQUEsVUFBVSxDQUFFLFlBQVU7QUFDckIsUUFBQSxDQUFDLENBQUUsSUFBRixDQUFELENBQVUsS0FBVjtBQUNBLE9BRlMsRUFFUCxHQUZPLENBQVY7QUFHQTs7QUFFRCxRQUFLLGFBQWEsQ0FBQyxJQUFkLENBQW9CLGVBQXBCLE1BQTBDLE9BQS9DLEVBQXlEO0FBQ3hELE1BQUEsYUFBYSxDQUFDLElBQWQsQ0FBb0IsZUFBcEIsRUFBcUMsTUFBckMsRUFBOEMsSUFBOUMsQ0FBb0QsWUFBcEQsRUFBa0UsY0FBbEU7QUFDQSxLQUZELE1BRU87QUFDTixNQUFBLGFBQWEsQ0FBQyxJQUFkLENBQW9CLGVBQXBCLEVBQXFDLE9BQXJDLEVBQStDLElBQS9DLENBQXFELFlBQXJELEVBQW1FLGFBQW5FO0FBQ0E7O0FBRUQsSUFBQSxZQUFZLENBQUMsV0FBYixDQUEwQixTQUExQjtBQUNBLElBQUEsS0FBSyxDQUFDLFdBQU4sQ0FBbUIsYUFBbkIsRUFBbUMsV0FBbkMsQ0FBZ0QsVUFBaEQ7QUFDQTs7QUFFRCxFQUFBLGFBQWEsQ0FBQyxFQUFkLENBQWlCO0FBQ2hCLElBQUEsS0FBSyxFQUFFLGVBQVcsQ0FBWCxFQUFlO0FBQ3JCLE1BQUEsQ0FBQyxDQUFDLGNBQUY7QUFDQSxNQUFBLGlCQUFpQixDQUFFLElBQUYsQ0FBakI7QUFDQSxLQUplO0FBS2hCLElBQUEsUUFBUSxFQUFFLGtCQUFXLENBQVgsRUFBZTtBQUN4QixVQUFLLENBQUMsQ0FBQyxPQUFGLEtBQWMsRUFBbkIsRUFBd0I7QUFDdkIsUUFBQSxDQUFDLENBQUMsY0FBRjtBQUNBLFFBQUEsaUJBQWlCLENBQUUsS0FBRixDQUFqQjtBQUNBO0FBQ0Q7QUFWZSxHQUFqQjtBQWFBLENBM0RDLEVBMkRFLE1BM0RGLENBQUYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKipcbiAqIFRvZ2dsZSBiZWhhdmlvciBmb3IgbmF2aWdhdGlvbiAvIHNlYXJjaCBidXR0b25zLlxuICovXG4oIGZ1bmN0aW9uICggJCApIHtcblx0dmFyICRib2R5ID0gJCggJ2JvZHknICksXG5cdFx0ICR0b2dnbGUgPSAkKCAnLmpzLW5hdi10b2dnbGUnICksXG5cdFx0ICR0b2dnbGVpdGVtcyA9ICR0b2dnbGUuYWRkKCAnbmF2JyApLFxuXHRcdCAkc2VhcmNodG9nZ2xlID0gJCggJy5qcy1zZWFyY2gtdG9nZ2xlJyApLFxuXHRcdCAkc2VhcmNoaXRlbXMgPSAkc2VhcmNodG9nZ2xlLmFkZCggJyNxdWlja3NlYXJjaCcgKTtcblxuXHQvLyBBZGQgYXJpYSBhdHRyaWJ1dGVzIGZvciBjb250cm9sL2V4cGFuZGVkIGlmIEpTIGlzIGF2YWlsYWJsZVxuXHQkc2VhcmNodG9nZ2xlLmF0dHIoICdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyApLmF0dHIoICdhcmlhLWNvbnRyb2xzJywgJ3F1aWNrc2VhcmNoJyApO1xuXHQkdG9nZ2xlLmF0dHIoICdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyApLmF0dHIoICdhcmlhLWNvbnRyb2xzJywgJ3ByaW1hcnktbmF2LW1lbnUnICk7XG5cblx0JHRvZ2dsZS5vbiggJ2NsaWNrJywgZnVuY3Rpb24gKCBlICkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmICggJHRvZ2dsZS5hdHRyKCAnYXJpYS1leHBhbmRlZCcgKSA9PT0gJ2ZhbHNlJyApIHtcblx0XHRcdCR0b2dnbGUuYXR0ciggJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScgKVxuXHRcdFx0XHRcdCAuYXR0ciggJ2FyaWEtbGFiZWwnLCAnQ2xvc2UgbWVudScgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHRvZ2dsZS5hdHRyKCAnYXJpYS1leHBhbmRlZCcsICdmYWxzZScgKVxuXHRcdFx0XHRcdCAuYXR0ciggJ2FyaWEtbGFiZWwnLCAnT3BlbiBtZW51JyApO1xuXHRcdH1cblxuXHRcdCR0b2dnbGVpdGVtcy50b2dnbGVDbGFzcyggJ2lzLW9wZW4nICk7XG5cdFx0JHNlYXJjaGl0ZW1zLnJlbW92ZUNsYXNzKCAnaXMtb3BlbicgKTtcblx0XHQkYm9keS50b2dnbGVDbGFzcyggJ25hdi1vcGVuJyApLnJlbW92ZUNsYXNzKCAnc2VhcmNoLW9wZW4nICk7XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIHRvZ2dsZVNlYXJjaFBhbmVsKCBmb2N1cyApIHtcblx0XHQkdG9nZ2xlaXRlbXMucmVtb3ZlQ2xhc3MoICdpcy1vcGVuJyApO1xuXG5cdFx0aWYoIGZvY3VzID09PSB0cnVlICYmICEgJCggdGhpcyApLmhhc0NsYXNzKCAnaXMtb3BlbicgKSApe1xuXHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKXtcblx0XHRcdFx0JCggJyNxJyApLmZvY3VzKCk7XG5cdFx0XHR9LCAxMDAgKTtcblx0XHR9XG5cblx0XHRpZiAoICRzZWFyY2h0b2dnbGUuYXR0ciggJ2FyaWEtZXhwYW5kZWQnICkgPT09ICdmYWxzZScgKSB7XG5cdFx0XHQkc2VhcmNodG9nZ2xlLmF0dHIoICdhcmlhLWV4cGFuZGVkJywgJ3RydWUnICkuYXR0ciggJ2FyaWEtbGFiZWwnLCAnQ2xvc2Ugc2VhcmNoJyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkc2VhcmNodG9nZ2xlLmF0dHIoICdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyApLmF0dHIoICdhcmlhLWxhYmVsJywgJ09wZW4gc2VhcmNoJyApO1xuXHRcdH1cblxuXHRcdCRzZWFyY2hpdGVtcy50b2dnbGVDbGFzcyggJ2lzLW9wZW4nICk7XG5cdFx0JGJvZHkudG9nZ2xlQ2xhc3MoICdzZWFyY2gtb3BlbicgKS5yZW1vdmVDbGFzcyggJ25hdi1vcGVuJyApO1xuXHR9XG5cblx0JHNlYXJjaHRvZ2dsZS5vbih7XG5cdFx0Y2xpY2s6IGZ1bmN0aW9uICggZSApIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRvZ2dsZVNlYXJjaFBhbmVsKCB0cnVlICk7XG5cdFx0fSxcblx0XHRrZXlwcmVzczogZnVuY3Rpb24gKCBlICkge1xuXHRcdFx0aWYgKCBlLmtleUNvZGUgPT09IDEzICkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdHRvZ2dsZVNlYXJjaFBhbmVsKCBmYWxzZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cbn0gKCBqUXVlcnkgKSApOyJdfQ==
