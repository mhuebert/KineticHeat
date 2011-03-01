# $ ->
# 
# 
#   $list = $('#cv')
#   
#   $list.isotope
#     layoutMode: 'straightDown'
#     getSortData:
#       date: ( $elem ) ->
#         return $elem.attr('data-date')
#       ,
#       length: ( $elem ) ->
#         return parseFloat($elem.attr('data-length'))
#       ,
#       passion: ( $elem ) ->
#         return parseFloat($elem.attr('data-passion'))
#       
#     filter: ".entrepreneurial"
#     sortBy: "passion"
#     sortAscending: false
#     animationEngine: 'jquery'
# 
#   selectOption = (item) ->
#     item.closest(".view-controller").find(".active").removeClass("active")
#     item.addClass("active")
# 
#   
#   $('#filter a').click ->
#     $this = $(this)
#     selectOption $this
#     filterName = $this.attr('href').slice(1)
#     $list.isotope
#       filter : filterName
#     return false
# 
# 
#   $('#sort a').click ->
#     $this = $(this)
#     selectOption $this
#     sortName = $this.attr('href').slice(1)
#     asc = $this.hasClass("asc")
#     $list.isotope
#       sortBy : sortName
#       sortAscending : asc
#     return false
#     
#   $(".nav a.active").removeClass("active")
#   if window.location.pathname == "/"
#     $(".nav a.blog").addClass("active")
#   else if (link = $(".nav a[href*="+window.location.pathname+"]")).length > 0
#     link.addClass("active")
#   else
#     $(".nav a.blog").addClass("active")
#     
#   
# 
#   # currentLayout = 'fitRows'
# 
#   # $('#layouts a').click ->
#   #   layoutName = $(this).attr('href').slice(1)
#   #   $list.removeClass( currentLayout ).addClass( layoutName )
#   #   currentLayout = layoutName
#   #   $list.isotope
#   #     layoutMode : layoutName
#   #   return false
# 
