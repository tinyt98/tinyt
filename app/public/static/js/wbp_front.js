var WBP=window.WBP||{};WBP.dwq={Browser:{isMobile:/mobile/i.test(navigator.userAgent),isAndriod:/android/i.test(navigator.userAgent),isiOS:/iPhone|iPad|iPod/i.test(navigator.userAgent),isWeiXin:/MicroMessenger/i.test(navigator.userAgent)},tabs:function(a,t,e){var e=e||{},o=t||a("#J_tabBox"),i=e.tabNav||o.find(".tab-nav-item,.tab-nav li"),s=e.tabCont||o.find(".tab-cont"),n=e.currClass||"current",d=e.tabEvent||WBP.dwq.Browser.isMobile?"click":"mouseover",r=e.callBackFn,c=0;i.on(d,function(){c=a(this).index(),i.removeClass(n).eq(c).addClass(n),s.removeClass(n).eq(c).addClass(n),r&&r()})},popover:function(a,t,e,o){(t||a("[data-ppo-name]")).on("click",function(){var t=a(this).attr("data-ppo-name"),o=a(this).attr("data-ppo-mask")||!1,i=a(t),s=Math.round(i.width()),n=Math.round(i.height());i.css({width:s%2?s+1:s,height:n%2?n+1:n}).show(0,function(){a(this).addClass("wb-fadein"),e&&e()}),o&&WBP.dwq.showMask()}),a(".com-popover").on("click",".wb-ppo-close",function(){var t=a(this).parents(".com-popover");WBP.dwq.popoverClose(a,t),o&&o()})},popoverClose:function(a,t){t.removeClass("wb-fadein").addClass("wb-fadeout"),setTimeout(function(){t.hide().removeClass("wb-fadeout")},300),a(".wb-mask").length&&WBP.dwq.hideMask(a)},showMask:function(a,t){a(".wb-mask").length||a("body").append('<div class="wb-mask"></div>'),setTimeout(function(){a(".wb-mask").addClass("mask-active")},10),t&&t(a(".wb-mask"))},hideMask:function(a,t){if(!a(".wb-mask").length)return!1;a(".wb-mask").removeClass("mask-active"),setTimeout(function(){a(".wb-mask").remove()},300),t&&t()}},jQuery(function(a){a("#J_tabBoxDWQ").length&&WBP.dwq.tabs(a,a("#J_tabBoxDWQ")),a("#J_ppoDonateBtn").length&&WBP.dwq.popover(a,a("#J_ppoDonateBtn")),a(".wb-btn-like").length&&a(".wb-btn-like").on("click",function(){var t=a(this);if(!t.hasClass("active")){var e=t.data("api");e||(e="/wp-admin/admin-ajax.php");var o=t.data("post_id");o&&a.post(e,{action:"dwqr_ajax",do:"like",post_id:o},function(a){a&&(t.find("span").eq(0).html("赞("+a+")"),t.addClass("active"))})}})});