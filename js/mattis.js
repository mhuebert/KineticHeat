(function() {
  $(function() {
    var $prods, current_anchor, filterText, link, selectOption;
    selectOption = function(item) {
      $(".view-controller .active").removeClass("active");
      return item.addClass("active");
    };
    $prods = $('#prod-list');
    if ($prods.length === 1) {
      console.log(window.location.hash);
      if (filterText = window.location.hash) {
        filterText = "." + filterText.slice(1);
        $('.view-controller .active').removeClass("active");
      } else {
        filterText = ".wrap";
      }
      $prods.isotope({
        layoutMode: 'straightDown',
        animationEngine: 'jquery',
        filter: filterText
      });
    }
    $(".view-controller.filter a, .view-controller.filter area").click(function() {
      var $this, filterName;
      $this = $(this);
      selectOption($this);
      filterName = "." + $this.attr('href').slice(1);
      console.log("filter " + filterName);
      $prods.isotope({
        filter: filterName
      });
      return false;
    });
    $('.shownext').click(function() {
      $(this).closest('p').next().show();
      return $(this).hide();
    });
    current_anchor = window.location.hash || "blah";
    $.fn.vtabs = function() {
      if ($('.vtabs-content-item#' + current_anchor + "-c").length) {
        $('.vtabs-content-item').removeClass('active');
        $('.vtabs-content-item#' + current_anchor + "-c").addClass('active');
        $('.vtabs-controller a.vnav').removeClass('selected');
        $('.vtabs-controller a.vnav[href*="' + current_anchor + '"]').addClass('selected');
      }
      $('.vtabs-content-item').not('.active').hide();
      return $(this).each(function() {
        var vtabswrapper;
        vtabswrapper = $(this);
        return vtabswrapper.find('.vtabs-controller a.vnav, .vtabs-content a.vtabs-nav').bind('click', function() {
          var targetpanel;
          vtabswrapper.find('.vtabs-controller a.vnav').removeClass('selected');
          vtabswrapper.find('.vtabs-controller a.vnav[href=' + $(this).attr('href') + ']').addClass('selected');
          targetpanel = vtabswrapper.find('#' + $(this).attr('href').substr(1) + "-c");
          targetpanel.show();
          vtabswrapper.find('.vtabs-content-item').not(targetpanel).hide();
          return window.location.hash = "top";
        });
      });
    };
    if ($('.vtabs-wrapper').length > 0) {
      $('.vtabs-wrapper').vtabs();
    }
    $(".nav a.vnav.active").removeClass("active");
    if (window.location.pathname === "/") {
      $(".nav a.vnav.home").addClass("active");
    } else if ((link = $(".nav a.vnav[href*=" + window.location.pathname + "]")).length > 0) {
      link.addClass("active");
    }
    $('.qa').each(function() {
      $(this).find(".q").click(function() {
        var a;
        a = $(this).next(".a");
        if (a.is(":visible")) {
          return a.slideUp();
        } else {
          return a.slideDown();
        }
      });
      return $(this).find(".a .hider").click(function() {
        return $(this).closest(".a").slideUp();
      });
    });
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
