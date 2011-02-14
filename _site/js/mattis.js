(function() {
  $(function() {
    var $list, selectOption;
    $list = $('#cv');
    $list.isotope({
      layoutMode: 'fitRows',
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
      filter: "*",
      sortBy: "date",
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
    return $('#sort a').click(function() {
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
  });
}).call(this);
