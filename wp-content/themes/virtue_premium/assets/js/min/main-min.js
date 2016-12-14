var kt_isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return kt_isMobile.Android()||kt_isMobile.BlackBerry()||kt_isMobile.iOS()||kt_isMobile.Opera()||kt_isMobile.Windows()}};jQuery(document).ready(function($){function t(){$("a[rel^='lightbox']").magnificPopup({type:"image"}),$("a[data-rel^='lightbox']").magnificPopup({type:"image"}),$(".kad-light-gallery").each(function(){$(this).find('a[rel^="lightbox"]').magnificPopup({type:"image",gallery:{enabled:!0},image:{titleSrc:"title"}})}),$(".kad-light-gallery").each(function(){$(this).find("a[data-rel^='lightbox']").magnificPopup({type:"image",gallery:{enabled:!0},image:{titleSrc:"title"}})}),$(".kad-light-wp-gallery").each(function(){$(this).find('a[rel^="lightbox"]').magnificPopup({type:"image",gallery:{enabled:!0},image:{titleSrc:function(t){return t.el.find("img").attr("alt")}}})}),$(".kad-light-wp-gallery").each(function(){$(this).find("a[data-rel^='lightbox']").magnificPopup({type:"image",gallery:{enabled:!0},image:{titleSrc:function(t){return t.el.find("img").attr("alt")}}})})}function e(){var t=$(r).height(),e=$(".stickyheader #kad-banner #topbar").height();if(set_height=function(){var t=u.scrollTop(),i=0;v/1>t?(i=v-t/2,r.removeClass("header-scrolled")):(i=v/2,r.addClass("header-scrolled")),m.css({height:i+"px",lineHeight:i+"px"}),h.css({height:i+"px",lineHeight:i+"px"}),r.css({height:i+e+"px"}),g.css({height:i+"px",lineHeight:i+"px"}),f.css({maxHeight:i+"px"})},1==d&&1==s&&$(window).width()>992)r.css({top:k+"px"}),r.sticky({topSpacing:k}),u.scroll(set_height);else if(1==s&&$(window).width()>992)r.css({height:t+"px"}),r.css({top:k+"px"}),r.sticky({topSpacing:k});else if(1==d&&1==s&&1==p&&$(window).width()<992){r.css({height:"auto"}),r.sticky({topSpacing:k});var i=$(window).height(),a=v/2;y.css({maxHeight:i-a+"px"})}else r.css({position:"static"}),w.css({"padding-top":"15px"}),r.css({height:"auto"})}function i(){$(".kt-panel-row-stretch").each(function(){var t=$(window).width()-$(this).parent(".panel-grid").width();$(this).css({"padding-left":t/2+"px"}),$(this).css({"padding-right":t/2+"px"}),$(this).css({"margin-left":"-"+t/2+"px"}),$(this).css({"margin-right":"-"+t/2+"px"}),$(this).css({visibility:"visible"})}),$(".panel-row-style-wide-grey").each(function(){var t=$(window).width()-$(this).parent(".panel-grid").width();$(this).css({"padding-left":t/2+"px"}),$(this).css({"padding-right":t/2+"px"}),$(this).css({"margin-left":"-"+t/2+"px"}),$(this).css({"margin-right":"-"+t/2+"px"}),$(this).css({visibility:"visible"})}),$(".panel-row-style-wide-feature").each(function(){var t=$(window).width()-$(this).parent(".panel-grid").width();$(this).css({"padding-left":t/2+"px"}),$(this).css({"padding-right":t/2+"px"}),$(this).css({"margin-left":"-"+t/2+"px"}),$(this).css({"margin-right":"-"+t/2+"px"}),$(this).css({visibility:"visible"})}),$(".panel-row-style-wide-parallax").each(function(){var t=$(window).width()-$(this).parent(".panel-grid").width();$(this).css({"padding-left":t/2+"px"}),$(this).css({"padding-right":t/2+"px"}),$(this).css({"margin-left":"-"+t/2+"px"}),$(this).css({"margin-right":"-"+t/2+"px"}),$(this).css({visibility:"visible"})}),$(".kt-panel-row-full-stretch").each(function(){var t=$(window).width()-$(this).parent(".panel-grid").width();$(this).css({"margin-left":"-"+t/2+"px"}),$(this).css({"margin-right":"-"+t/2+"px"}),$(this).css({width:+$(window).width()+"px"}),$(this).css({visibility:"visible"})}),$(".kt-custom-row-full-stretch").each(function(){var t=$(window).width()-$(this).parents("#content").width();$(this).css({"margin-left":"-"+t/2+"px"}),$(this).css({"margin-right":"-"+t/2+"px"}),$(this).css({width:+$(window).width()+"px"}),$(this).css({visibility:"visible"})}),$(".kt-custom-row-full").each(function(){var t=$(window).width()-$(this).parents("#content").width();$(this).css({"padding-left":t/2+"px"}),$(this).css({"padding-right":t/2+"px"}),$(this).css({"margin-left":"-"+t/2+"px"}),$(this).css({"margin-right":"-"+t/2+"px"}),$(this).css({visibility:"visible"})})}function a(){o.isotopeb({masonry:{columnWidth:S},transitionDuration:"0s"})}$("[rel=tooltip]").tooltip(),$("[data-toggle=tooltip]").tooltip(),$("[data-toggle=popover]").popover(),$("#authorTab a").click(function(t){t.preventDefault(),$(this).tab("show")}),$(".sc_tabs a").click(function(t){t.preventDefault(),$(this).tab("show")}),$(document).mouseup(function(t){var e=$("#kad-menu-search-popup");e.is(t.target)||0!==e.has(t.target).length||$("#kad-menu-search-popup.in").collapse("hide")}),$(".videofit").fitVids(),$(".embed-youtube").fitVids(),$(".collapse-next").click(function(t){var e=$(this).siblings(".sf-dropdown-menu");e.hasClass("in")?(e.collapse("toggle"),$(this).removeClass("toggle-active")):(e.collapse("toggle"),$(this).addClass("toggle-active"))}),$.extend(!0,$.magnificPopup.defaults,{tClose:"",tLoading:light_load,gallery:{tPrev:"",tNext:"",tCounter:light_of},image:{tError:light_error,titleSrc:function(t){return t.el.find("img").attr("alt")}}}),$("a[rel^='lightbox']").magnificPopup({type:"image"}),$("a[data-rel^='lightbox']").magnificPopup({type:"image"}),$(".kad-light-gallery").each(function(){$(this).find('a[rel^="lightbox"]').magnificPopup({type:"image",gallery:{enabled:!0},image:{titleSrc:"title"}})}),$(".kad-light-gallery").each(function(){$(this).find("a[data-rel^='lightbox']").magnificPopup({type:"image",gallery:{enabled:!0},image:{titleSrc:"title"}})}),$(".kad-light-wp-gallery").each(function(){$(this).find('a[rel^="lightbox"]').magnificPopup({type:"image",gallery:{enabled:!0},image:{titleSrc:function(t){return t.el.find("img").attr("alt")}}})}),$(".kad-light-wp-gallery").each(function(){$(this).find("a[data-rel^='lightbox']").magnificPopup({type:"image",gallery:{enabled:!0},image:{titleSrc:function(t){return t.el.find("img").attr("alt")}}})}),$("a.ktvideolight").magnificPopup({type:"iframe"}),$(".no-lightbox").magnificPopup({disableOn:function(){return!1}}),$(window).on("infintescrollnewelements",function(e){t()}),$("#archive-orderby").customSelect(),$(window).width()>790&&!kt_isMobile.any()?($(".kad-select").select2({minimumResultsForSearch:-1}),$(".variations td.product_value select").select2({minimumResultsForSearch:-1}),$(".woocommerce-ordering .orderby").select2({minimumResultsForSearch:-1}),$(".component_options_select").select2({minimumResultsForSearch:-1}),$(".component").on("wc-composite-item-updated",function(){$("select").select2("destroy"),$("select").select2({minimumResultsForSearch:-1})})):($(".kad-select").customSelect(),$(".woocommerce-ordering .orderby").customSelect(),$(".variations td.product_value select").customSelect());var n=$("body").attr("data-jsselect");if($(window).width()>790&&!kt_isMobile.any()&&1==n&&($("select").select2({minimumResultsForSearch:-1}),$("select.country_select").select2(),$("select.state_select").select2()),$(".tab-pane .kad_product_wrapper").length){var o=$(".kad_product_wrapper");$(".sc_tabs").on("shown.bs.tab",function(t){o.isotopeb({masonry:{columnWidth:".kad_product"},transitionDuration:"0.8s"})})}if($(".panel-body .kad_product_wrapper").length){var o=$(".kad_product_wrapper");$(".panel-group").on("shown.bs.collapse",function(t){o.isotopeb({masonry:{columnWidth:".kad_product"},transitionDuration:"0.8s"})}),$(".panel-group").on("hidden.bs.collapse",function(t){o.isotopeb({masonry:{columnWidth:".kad_product"},transitionDuration:"0.8s"})})}$(".kad_fullslider_arrow").localScroll();var s=$("body").attr("data-sticky"),r=$("#kad-banner"),c=$("body").attr("data-product-tab-scroll");if(1==c&&$(window).width()>992){if(1==s)var l=$(r).height()+100;else var l=100;$(".woocommerce-tabs").localScroll({offset:-l})}var s=$("body").attr("data-sticky"),d=$("#kad-banner").attr("data-header-shrink"),p=$("#kad-banner").attr("data-mobile-sticky"),u=$(window),r=$(".stickyheader #kad-banner"),h=$(".stickyheader #kad-banner #kad-shrinkheader"),g=$(".stickyheader #kad-banner #logo a, .stickyheader #kad-banner #logo a #thelogo"),f=$(".stickyheader #kad-banner #logo a img"),m=$(".stickyheader #kad-banner .nav-main ul.sf-menu > li > a"),w=$(".stickyheader .wrap"),y=$(".stickyheader .mobile-stickyheader .mobile_menu_collapse"),_=$(".stickyheader .sticky-wrapper"),v=$("#kad-banner").attr("data-header-base-height"),k=$("body").hasClass("admin-bar")?32:0;r.imagesLoadedn(function(){e()}),$("ul.sf-menu").superfish({delay:200,animation:{opacity:"show",height:"show"},speed:"fast"}),i(),$(window).on("debouncedresize",function(t){i()});var b=$("body").attr("data-animate");if(1==b&&$(window).width()>790?($(".kad-animation").each(function(){$(this).appear(function(){$(this).delay($(this).attr("data-delay")).animate({opacity:1,top:0},800,"swing")},{accX:0,accY:-25},"easeInCubic")}),$(".kt-animate-fade-in-up").each(function(){$(this).appear(function(){$(this).animate({opacity:1,top:0},900,"swing")},{accX:0,accY:-25},"easeInCubic")}),$(".kt-animate-fade-in-down").each(function(){$(this).appear(function(){$(this).animate({opacity:1,top:0},900,"swing")},{accX:0,accY:-25},"easeInCubic")}),$(".kt-animate-fade-in-left").each(function(){$(this).appear(function(){$(this).animate({opacity:1,left:0},900,"swing")},{accX:-25,accY:0},"easeInCubic")}),$(".kt-animate-fade-in-right").each(function(){$(this).appear(function(){$(this).animate({opacity:1,right:0},900,"swing")},{accX:-25,accY:0},"easeInCubic")}),$(".kt-animate-fade-in").each(function(){$(this).appear(function(){$(this).animate({opacity:1},900,"swing")})})):($(".kad-animation").each(function(){$(this).animate({opacity:1,top:0})}),$(".kt-animate-fade-in-up").each(function(){$(this).animate({opacity:1,top:0})}),$(".kt-animate-fade-in-down").each(function(){$(this).animate({opacity:1,top:0})}),$(".kt-animate-fade-in-left").each(function(){$(this).animate({opacity:1,left:0})}),$(".kt-animate-fade-in-right").each(function(){$(this).animate({opacity:1,right:0})}),$(".kt-animate-fade-in").each(function(){$(this).animate({opacity:1})})),$(".kt-flexslider").each(function(){var t=$(this).data("flex-speed"),e=$(this).data("flex-animation"),i=$(this).data("flex-initdelay"),a=$(this).data("flex-anim-speed"),n=$(this).data("flex-auto");null==i&&(i=0),$(this).flexslider({animation:e,animationSpeed:a,slideshow:n,initDelay:i,slideshowSpeed:t,start:function(t){t.removeClass("loading")}})}),$(".init-isotope").each(function(){var t=$(this),e=$(this).data("iso-selector"),i=$(this).data("iso-style"),a=$(this).data("iso-filter");t.imagesLoadedn(function(){if(t.isotopeb({masonry:{columnWidth:e},layoutMode:i,itemSelector:e,transitionDuration:"0.8s"}),1==t.attr("data-fade-in")){var n=t.find(".kt_item_fade_in");n.css("opacity",0),n.each(function(t){$(this).delay(150*t).animate({opacity:1},350)})}if(1==a){var o=t.parents(".main"),s=o.find("#filters");if(s.length){s.on("click","a",function(e){var i=$(this).attr("data-filter");return t.isotopeb({filter:i}),!1});var r=$("#options .option-set"),c=r.find("a");c.click(function(){var t=$(this);if(t.hasClass("selected"))return!1;var e=t.parents(".option-set");e.find(".selected").removeClass("selected"),t.addClass("selected")})}}})}),$(".kt_product_toggle_container").length){var x=$(".kt_product_toggle_container .toggle_list"),C=$(".kt_product_toggle_container .toggle_grid");x.click(function(){if($(this).hasClass("toggle_active"))return!1;if($(this).parents(".kt_product_toggle_container").find(".toggle_active").removeClass("toggle_active"),$(this).addClass("toggle_active"),$(".kad_product_wrapper").length){$(".kad_product_wrapper").addClass("shopcolumn1"),$(".kad_product_wrapper").addClass("tfsinglecolumn");var t=$(".kad_product_wrapper"),e=$(".kad_product_wrapper").data("iso-selector");t.isotopeb({masonry:{columnWidth:e},transitionDuration:".4s"})}return!1}),C.click(function(){if($(this).hasClass("toggle_active"))return!1;if($(this).parents(".kt_product_toggle_container").find(".toggle_active").removeClass("toggle_active"),$(this).addClass("toggle_active"),$(".kad_product_wrapper").length){$(".kad_product_wrapper").removeClass("shopcolumn1"),$(".kad_product_wrapper").removeClass("tfsinglecolumn");var t=$(".kad_product_wrapper"),e=$(".kad_product_wrapper").data("iso-selector");t.isotopeb({masonry:{columnWidth:e},transitionDuration:".4s"})}return!1})}if($(".kt_product_toggle_container_list").length){var x=$(".kt_product_toggle_container_list .toggle_list"),C=$(".kt_product_toggle_container_list .toggle_grid");x.click(function(){if($(this).hasClass("toggle_active"))return!1;if($(this).parents(".kt_product_toggle_container_list").find(".toggle_active").removeClass("toggle_active"),$(this).addClass("toggle_active"),$(".kad_product_wrapper").length){$(".kad_product_wrapper").addClass("shopcolumn1"),$(".kad_product_wrapper").addClass("tfsinglecolumn"),$(".kad_product_wrapper").removeClass("kt_force_grid_three");var t=$(".kad_product_wrapper"),e=$(".kad_product_wrapper").data("iso-selector");t.isotopeb({masonry:{columnWidth:e},transitionDuration:".4s"})}return!1}),C.click(function(){if($(this).hasClass("toggle_active"))return!1;if($(this).parents(".kt_product_toggle_container_list").find(".toggle_active").removeClass("toggle_active"),$(this).addClass("toggle_active"),$(".kad_product_wrapper").length){$(".kad_product_wrapper").removeClass("shopcolumn1"),$(".kad_product_wrapper").removeClass("tfsinglecolumn"),$(".kad_product_wrapper").addClass("kt_force_grid_three");var t=$(".kad_product_wrapper"),e=$(".kad_product_wrapper").data("iso-selector");t.isotopeb({masonry:{columnWidth:e},transitionDuration:".4s"})}return!1})}if($(".woocommerce-tabs .panel .init-isotope").length){var o=$(".init-isotope"),S=$(".init-isotope").data("iso-selector");$(".woocommerce-tabs ul.tabs li a").click(function(){setTimeout(a,50)})}if($(".panel-body .init-isotope").length){var o=$(".init-isotope"),S=$(".init-isotope").data("iso-selector");$(".panel-group").on("shown.bs.collapse",function(t){o.isotopeb({masonry:{columnWidth:S},transitionDuration:"0s"})})}if($(".tab-pane .init-isotope").length){var o=$(".init-isotope"),S=$(".init-isotope").data("iso-selector");$(".sc_tabs").on("shown.bs.tab",function(t){o.isotopeb({masonry:{columnWidth:S},transitionDuration:"0s"})})}jQuery(".initcaroufedsel").each(function(){function t(){var t;return t=jQuery(window).width()<=540?g.width()/d:jQuery(window).width()<=768?g.width()/p:jQuery(window).width()<=990?g.width()/u:g.width()/h}function e(){var e=t()-1;a.children().css({width:e})}function i(){a.carouFredSel({scroll:{items:r,easing:"swing",duration:s,pauseOnHover:!0},auto:{play:c,timeoutDuration:o},prev:"#prevport-"+l,next:"#nextport-"+l,pagination:!1,swipe:!0,items:{visible:null}})}var a=jQuery(this),n=a.data("carousel-container"),o=a.data("carousel-speed"),s=a.data("carousel-transition"),r=a.data("carousel-scroll"),c=a.data("carousel-auto"),l=a.data("carousel-id"),d=a.data("carousel-ss"),p=a.data("carousel-xs"),u=a.data("carousel-sm"),h=a.data("carousel-md");""==r&&(r=null);var g=jQuery(n);e(),a.imagesLoadedn(function(){g.animate({opacity:1}),i(),g.parent().removeClass("carousel_outerrim_load")}),jQuery(window).on("debouncedresize",function(t){a.trigger("destroy"),e(),i()})}),jQuery(".initcarouselslider").each(function(){function t(){var t=i.width();i.children().css({width:t}),jQuery(window).width()<=768&&(c=null,i.children().css({height:"auto"}))}function e(){i.carouFredSel({width:"100%",height:c,align:l,auto:{play:s,timeoutDuration:n},scroll:{items:1,easing:"quadratic"},items:{visible:1,width:"variable"},prev:"#prevport-"+r,next:"#nextport-"+r,swipe:{onMouse:!1,onTouch:!0}})}var i=jQuery(this),a=i.data("carousel-container"),n=i.data("carousel-speed"),o=i.data("carousel-transition"),s=i.data("carousel-auto"),r=i.data("carousel-id"),c=i.data("carousel-height"),l="center",d=jQuery(a);t(),i.imagesLoadedn(function(){e(),d.animate({opacity:1}),d.css({height:"auto"}),d.parent().removeClass("loading")}),jQuery(window).on("debouncedresize",function(a){i.trigger("destroy"),t(),e()})}),jQuery(".initimagecarousel").each(function(){function t(){if(jQuery(window).width()<=767){l="center",c=null;var t=jQuery(window).width()-10;i.children().css({width:t}),i.children().css({height:"auto"})}}function e(){i.carouFredSel({width:"100%",height:c,align:l,auto:{play:!0,timeoutDuration:n},scroll:{items:1,easing:"quadratic"},items:{visible:1,width:"variable"},prev:"#prevport-"+r,next:"#nextport-"+r,swipe:{onMouse:!0,onTouch:!0},onCreate:function(){jQuery(".gallery-carousel").css("positon","static")}})}var i=jQuery(this),a=i.data("carousel-container"),n=i.data("carousel-speed"),o=i.data("carousel-transition"),s=i.data("carousel-auto"),r=i.data("carousel-id"),c=i.data("carousel-height"),l=!1,d=jQuery(a);t(),i.imagesLoadedn(function(){e(),d.animate({opacity:1}),d.css({height:"auto"}),d.parent().removeClass("loading")}),jQuery(window).on("debouncedresize",function(a){i.trigger("destroy"),t(),e()})})}),kt_isMobile.any()&&jQuery(document).ready(function($){matchMedia("only screen and (max-width: 480px)").addListener(function(t){$("select.hasCustomSelect").removeAttr("style"),$("select.hasCustomSelect").css({width:"250px"}),$(".kad-select.customSelect").remove(),$("select.kad-select").customSelect(),$(".customSelectInner").css("width","100%")}),$(".caroufedselclass").tswipe({excludedElements:"button, input, select, textarea, .noSwipe",tswipeLeft:function(){$(".caroufedselclass").trigger("next",1)},tswipeRight:function(){$(".caroufedselclass").trigger("prev",1)},tap:function(t,e){window.open(jQuery(e).closest(".grid_item").find("a").attr("href"),"_self")}}),$(".caroufedselgallery").tswipe({excludedElements:"button, input, select, textarea, .noSwipe",tswipeLeft:function(){$(".caroufedselgallery").trigger("next",1)},tswipeRight:function(){$(".caroufedselgallery").trigger("prev",1)},tap:function(t,e){magnificPopup(jQuery(e).closest(".grid_item").find("a.lightboxhover").attr("href"))}})}),jQuery(window).load(function(){jQuery.stellar({horizontalScrolling:!1,verticalOffset:40}),jQuery("body").animate({opacity:1})});