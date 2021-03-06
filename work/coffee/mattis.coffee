$ ->
  

  selectOption = (item) ->
    $(".view-controller .active").removeClass("active")
    item.addClass("active")

  $prods = $('#prod-list')
  
  if $prods.length == 1
    console.log window.location.hash
    if filterText = window.location.hash
      filterText = "."+filterText.slice(1)
      $('.view-controller .active').removeClass("active")
    else
      filterText = ".wrap"
  
    $prods.isotope
      layoutMode: 'straightDown'
      animationEngine: 'jquery'
      filter: filterText
    
  $(".view-controller.filter a, .view-controller.filter area").click ->
    $this = $(this)
    selectOption $this
    filterName = "."+$this.attr('href').slice(1)
    console.log "filter #{filterName}"
    $prods.isotope
      filter : filterName
    return false
    
    
  $('.shownext').click ->
    $(this).closest('p').next().show()
    $(this).hide()
  current_anchor = window.location.hash || "blah"
  $.fn.vtabs = ->
    
    # // If there is an #anchor on the present link that matches one of our items, get rid of the default 'selected' link and 'active' panel, change it to the one that was requested in the URL
  	if $('.vtabs-content-item#'+current_anchor+"-c").length  # // if there is a vtab with the #id == the current URL #anchor... 
  		$('.vtabs-content-item').removeClass('active') #; // get rid of the currently 'active' panel
  		$('.vtabs-content-item#'+current_anchor+"-c").addClass('active') #; // activate the panel that matches the #anchor
  		$('.vtabs-controller a.vnav').removeClass('selected') #; // get rid of the currently 'selected' controller link
  		$('.vtabs-controller a.vnav[href*="'+current_anchor+'"]').addClass('selected') #; // select the controller link that matches the anchor
	
	
  	$('.vtabs-content-item').not('.active').hide() #; // hide the content that isn't 'active'
	
  	$(this).each ->
  		vtabswrapper = $(this)
		
  		vtabswrapper.find('.vtabs-controller a.vnav, .vtabs-content a.vtabs-nav').bind 'click', ->
  			vtabswrapper.find('.vtabs-controller a.vnav').removeClass('selected') #; // remove 'selected' from all nav links
  			vtabswrapper.find('.vtabs-controller a.vnav[href='+$(this).attr('href')+']').addClass('selected') # add 'selected' to the link inside vtabs-controller whose ID equals the #href of the link that we're applying this event to
  			targetpanel = vtabswrapper.find('#'+$(this).attr('href').substr(1)+"-c") #  the target panel is the one with the #id of the #href of the link that was clicked
  			targetpanel.show() #.slideDown()
  			vtabswrapper.find('.vtabs-content-item').not(targetpanel).hide() #slideUp()
  			window.location.hash = "top"
  			return false
        # return false
		
  if $('.vtabs-wrapper').length > 0
    $('.vtabs-wrapper').vtabs()

  $(".nav a.vnav.active").removeClass("active")
  if window.location.pathname == "/"
    $(".nav a.vnav.home").addClass("active")
  else if (link = $(".nav a.vnav[href*="+window.location.pathname+"]")).length > 0
    link.addClass("active")
  
  $('.qa').each ->
    $(this).find(".q").click ->
      a = $(this).next(".a")
      if a.is(":visible")
        a.slideUp()
      else
        a.slideDown()
    $(this).find(".a .hider").click ->
      $(this).closest(".a").slideUp()
  $(".slider").each ->
    s = $(this)
    s.tinycarousel
      animation: true
      duration: 600
      axis: 'x'
      interval: $(this).attr("data-auto") || false
      intervaltime: 5000

    viewport = s.find(".viewport")
    next = s.find(".next")
    prev = s.find(".prev")

    viewport.click ->
      if !next.hasClass("disable")
        next.click()
      else
        prev.click()

    viewport.mouseenter ->
      next.addClass("opacity1")
    viewport.mouseleave ->
      next.removeClass("opacity1")
    next.mouseenter ->
      next.addClass("opacity1")
    next.mouseleave ->
      next.removeClass("opacity1")
    prev.mouseenter ->
      prev.addClass("opacity1")
    prev.mouseleave ->
      prev.removeClass("opacity1")