(function() {
  $(function() {
    var current_anchor, link;
    current_anchor = window.location.hash || "blah";
    $.fn.vtabs = function() {
      if ($('.vtabs-content-item#' + current_anchor).length) {
        $('.vtabs-content-item').removeClass('active');
        $('.vtabs-content-item#' + current_anchor).addClass('active');
        $('.vtabs-controller a').removeClass('selected');
        $('.vtabs-controller a[href*="' + current_anchor + '"]').addClass('selected');
      }
      $('.vtabs-content-item').not('.active').hide();
      return $(this).each(function() {
        var vtabswrapper;
        vtabswrapper = $(this);
        return vtabswrapper.find('.vtabs-controller a, .vtabs-content a.vtabs-nav').bind('click', function() {
          var targetpanel;
          vtabswrapper.find('.vtabs-controller a').removeClass('selected');
          vtabswrapper.find('.vtabs-controller a[href=' + $(this).attr('href') + ']').addClass('selected');
          targetpanel = vtabswrapper.find('#' + $(this).attr('href').substr(1));
          targetpanel.slideDown();
          return vtabswrapper.find('.vtabs-content-item').not(targetpanel).slideUp();
        });
      });
    };
    if ($('.vtabs-wrapper').length > 0) {
      $('.vtabs-wrapper').vtabs();
      console.log("got");
    }
    $(".nav a.active").removeClass("active");
    if (window.location.pathname === "/") {
      $(".nav a.home").addClass("active");
    } else if ((link = $(".nav a[href*=" + window.location.pathname + "]")).length > 0) {
      link.addClass("active");
    }
    return $(".slider").each(function() {
      var next, prev, s, viewport;
      s = $(this);
      s.tinycarousel({
        animation: true,
        duration: 600,
        axis: 'x',
        interval: $(this).attr("data-auto") || false,
        intervaltime: 5000
      });
      viewport = s.find(".viewport");
      next = s.find(".next");
      prev = s.find(".prev");
      viewport.click(function() {
        if (!next.hasClass("disable")) {
          return next.click();
        } else {
          return prev.click();
        }
      });
      viewport.mouseenter(function() {
        return next.addClass("opacity1");
      });
      viewport.mouseleave(function() {
        return next.removeClass("opacity1");
      });
      next.mouseenter(function() {
        return next.addClass("opacity1");
      });
      next.mouseleave(function() {
        return next.removeClass("opacity1");
      });
      prev.mouseenter(function() {
        return prev.addClass("opacity1");
      });
      return prev.mouseleave(function() {
        return prev.removeClass("opacity1");
      });
    });
  });
}).call(this);
