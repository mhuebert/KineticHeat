(function() {
  $(function() {
    var $list, link, selectOption;
    $list = $('#cv');
    $list.isotope({
      layoutMode: 'straightDown',
      getSortData: {
        date: function($elem) {
          return $elem.attr('data-date');
        },
        length: function($elem) {
          return parseFloat($elem.attr('data-length'));
        },
        passion: function($elem) {
          return parseFloat($elem.attr('data-passion'));
        }
      },
      filter: ".entrepreneurial",
      sortBy: "passion",
      sortAscending: false,
      animationEngine: 'jquery'
    });
    selectOption = function(item) {
      item.closest(".view-controller").find(".active").removeClass("active");
      return item.addClass("active");
    };
    $('#filter a').click(function() {
      var $this, filterName;
      $this = $(this);
      selectOption($this);
      filterName = $this.attr('href').slice(1);
      $list.isotope({
        filter: filterName
      });
      return false;
    });
    $('#sort a').click(function() {
      var $this, asc, sortName;
      $this = $(this);
      selectOption($this);
      sortName = $this.attr('href').slice(1);
      asc = $this.hasClass("asc");
      $list.isotope({
        sortBy: sortName,
        sortAscending: asc
      });
      return false;
    });
    $(".nav a.active").removeClass("active");
    if (window.location.pathname === "/") {
      return $(".nav a.cv").addClass("active");
    } else if ((link = $(".nav a[href*=" + window.location.pathname + "]")).length > 0) {
      return link.addClass("active");
    } else {
      return $(".nav a.blog").addClass("active");
    }
  });
}).call(this);
