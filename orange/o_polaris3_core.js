var BLO_Autocompletion=[],ObjectExtended={create:function(){return"function"!=typeof Object.create?function(){function a(){}var b=Object.prototype.hasOwnProperty;return function(c){if("object"!=typeof c)throw TypeError("Object prototype may only be an Object or null");a.prototype=c;var d=new a;if(a.prototype=null,arguments.length>1){var e=Object(arguments[1]);for(var f in e)b.call(e,f)&&(d[f]=e[f])}return d}}():Object.create.apply(Object,arguments)}};!function(){"use strict";function a(a){var b="o-header "+a.popin.attr.id,c="o-header "+a.attr.id,d=a.popOnOver,e=o_hGetById("o-cover"),f=function(a,b){if(!o_hasClass(b,"o-nav-zone-panel-full-width")){var c,d,e,f,g=document.querySelector("#o-header #o-ribbon").getBoundingClientRect().right,h=document.body.offsetWidth-g,i=document.querySelector("#o-header #"+a.id+" .o-nav-zone-panel-arrow");f=(document.documentElement.clientWidth-document.body.offsetWidth)/2,i&&(c=i.getBoundingClientRect().right,h+=f,c-=f,g-=f,d=Math.sqrt(Math.pow(i.offsetWidth,2)+Math.pow(i.offsetHeight,2))/2,e=document.body.offsetWidth-c-b.offsetWidth/2-h+d,g===document.body.offsetWidth?e<.03125*document.body.offsetWidth+10&&(e=.03125*document.body.offsetWidth+10):document.body.offsetWidth-(c+b.offsetWidth/2)<40&&(document.body.offsetWidth-(c+b.offsetWidth/2)<0?e+=c+b.offsetWidth/2-document.body.offsetWidth+40:e+=40-(document.body.offsetWidth-(c+b.offsetWidth/2))),b.style.right=e+"px")}};if(b&&c){var g=o_hGetById(b),h=o_hGetById(c),i=h.parentNode;o_addEvent(h,eventType,function(c){var d=document.querySelector("#o-header .o-nav-item-highlight");if(d&&(o_removeClass(d,"o-nav-item-highlight"),o_removeClass(d,"o-nav-item-hover")),o_hasClass(g,"o-on")&&!o_hasClass(g,"o-stick"))o_addClass(g,"o-stick"),o_addClass(h,"o-nav-item-highlight");else{o_toggleDisplay(b),!o_confCommon.responsiveMobile&&o_hasClass(g,"o-on")&&f(h,g);var i=document.querySelector("#o-header .o-stick");i&&""!==o_currentPanel&&i.id!==o_currentPanel&&o_removeClass(i,"o-stick"),o_toggleClass(g,"o-stick")}var j=document.querySelector("#o-header .o-nav-item-highlight");j&&(o_removeClass(j,"o-nav-item-highlight"),o_removeClass(j,"o-nav-item-hover")),o_hasClass(g,"o-on")?(o_addClass(h,"o-nav-item-highlight"),e&&o_addClass(e,"o-on"),a&&a.onShow&&a.onShow()):e&&o_removeClass(e,"o-on"),stopPropagationBehavior(c)},!0),d&&!navig.isTouchDevice()&&(o_addEvent(h,"mouseover",function(){var a=o_hGetById(window.o_currentPanel);(window.o_currentPanel!==b&&!o_hasClass(a,"o-stick")||window.o_currentPanel===b&&o_hasClass(g,"o-stick")&&!o_hasClass(g,"o-on"))&&(o_toggleDisplay(b),o_addClass(h,"o-nav-item-hover"),o_addClass(h,"o-nav-item-sense-of-place"),o_confCommon.responsiveMobile||f(h,g))}),o_addEvent(i,"mouseleave",function(){setTimeout(function(){o_removeClass(h,"o-nav-item-hover"),o_removeClass(h,"o-nav-item-sense-of-place"),!o_hasClass(g,"o-stick")&&o_hasClass(g,"o-on")&&(o_toggleDisplay(b),o_removeClass(h,"o-nav-item-highlight"))},50)}),o_hasClass(g,"o-nav-zone-panel-full-width")||o_addEvent(window,"resize",function(){!o_confCommon.responsiveMobile&&o_hasClass(g,"o-on")&&f(h,g)}))}}function b(a){var b,c,d,e,f,g=a||o_hGetById("o-header"),h=g&&g.querySelectorAll("[data-tag]");c=function(a,b){var c,d=a.getAttribute("data-tag");o_hasClass(a,"o-nav-item")&&!a.hasAttribute("href")&&(a.hasAttribute("data-oevent-category")||a.hasAttribute("data-oevent-action")||a.hasAttribute("data-oevent-label"))&&(c="clic"===b?"clic"+(a.getAttribute("data-oevent-label")?a.getAttribute("data-oevent-label"):"")+"_"+(o_hasClass(a,"o-nav-item-highlight")||o_hasClass(document.documentElement,"o-show-menu")?"fermeture":"ouverture"):"hover"+(a.getAttribute("data-oevent-label")?a.getAttribute("data-oevent-label"):"")),d&&o_link({track_refGstat:d+("hover"===b?"_hover":""),track_page:window.sUrlReferrer,track_type_event:b,oevent_label:c},a)},d=function(a){var b=a.currentTarget?a.currentTarget:a.srcElement;o_addEvent(b.firstChild,"mouseover",e),o_removeEvent(b,"mouseleave",d),clearTimeout(window.o_popinNotifTimer)},e=function(a){var b=a.currentTarget?a.currentTarget:a.srcElement;o_removeEvent(b,"mouseover",e),o_addEvent(b.parentNode,"mouseleave",d),window.o_popinNotifTimer=setTimeout(function(){c(b,"hover")},b.getAttribute("data-statsHoverTimeout")&&parseInt(b.getAttribute("data-statsHoverTimeout"))||1e3)},f=function(a){var b=a.currentTarget?a.currentTarget:a.srcElement;clearTimeout(window.o_popinNotifTimer),c(b,"clic")};for(var i=0,j=h.length;i<j;i++)b=h[i],b.getAttribute("data-link-changed")||(b.getAttribute("data-tag"),o_addEvent(b,"mousedown",f),b.setAttribute("data-link-changed",!0),"true"===b.getAttribute("data-poponover")&&null!==b.getAttribute("data-statsHoverTimeout")&&o_addEvent(b,"mouseover",e))}function c(a,b){if(b=b||"log",o_confCommon.debug)switch(b){case"info":console.info(a);break;case"warn":console.warn(a);break;case"error":console.error(a);break;default:console.log(a)}}function d(a){a=a||"";var b=a.split(" ");for(var c in b)if(!function(a){switch(a){case"if-connected":return!0===o_confCommon.isConnected;case"if-notConnected":return!1===o_confCommon.isConnected;case"if-homePage":return!0===o_confCommon.isHomePage;case"if-notHomePage":return!1===o_confCommon.isHomePage;case"if-homePageProspect":return!0===o_confCommon.isHomePageProspect;case"if-logo":return!1===o_confCommon.noLogo;case"if-navZone":return!0===o_confCommon.navZone;case"if-persoZone":return!0===o_confCommon.persoZone;case"if-launchZone":return!0===o_confCommon.launchZone;case"if-orangeBank":return o_idzone.USER_ST_B&&null!==o_idzone.USER_ST_B;case"if-globalSearch":return!o_confCommon.unifiedSearchEngine&&!o_confCommon.mobile.searchIcon;case"if-hasBtnSearch":return!1===o_confCommon.noBtnSearch;case"if-homelive":return!0===o_idzone.USER_HOMELIVE_STATUS;case"if-notWebmail":return o_bSetCookie("o-notif-webmail","","domain=.orange.fr,expires=-1"),""===o_confCommon.useMB;case"if-mainUser":return!0===o_idzone.USER_PRINCIPAL||2==o_idzone.USER_IDENT_TYPE;case"if-syndicationFooter":return o_confCommon.footer.syndicationZone;case"if-sitemapFooter":return o_confCommon.footer.sitemapZone;case"if-deezer":break;case"disabled":return!1;default:return!0}}(b[c]))return!1;return!0}function e(a){function b(a,b){if(a>0){var c=new PolarisClass.NotificationBadge(a).render(),d=o_hGetById(b),e=document.createElement("div");e.innerHTML=c,d.appendChild(e.firstChild)}}var d;try{if(!a.attr||!a.attr.id)throw new Error("Impossible d'ajouter une notification à l'élément "+a.type+" "+(a.text?a.text:a.attr.title)+" car l'attribut ID est manquant.");switch(a.notification){case"o-idzone-mail":d=o_idzone.USER_MAIL_NB,b(d,a.attr.id);break;case"o-idzone-smsmms":d=o_idzone.USER_SMS_NB+o_idzone.USER_MMS_NB,b(d,a.attr.id);break;case"o-advise":navig.isIE&&navig.getVersion()<=9||a.getNotifications(function(c){b(c,a.attr.id)});break;default:c("Notification "+a.notification+" inconnue","warn")}}catch(e){c(e.message,"warn")}}function f(a){void 0!==a&&(window.o_magicData=a),o_confCommon.isProGP&&!o_confCommon.responsiveMobile||(window.o_startHeader=function(){head.ready(function(){var a,b=function(){o_generateHeader(),clearTimeout(a)};document.getElementById("o-header")?b():a=setTimeout(b,10)})},o_startHeader())}function g(a){var b=a||document.body;o_addEvent(b,eventType,function(b){if(window.o_currentPanel)for(var c=b.target||b.srcElement;c.parentNode;){if(c.id===window.o_currentPanel)return void stopPropagationBehavior(b);c=c.parentNode}if(window.o_currentPanel&&o_hasClass(o_hGetById(window.o_currentPanel),"o-stick")){o_toggleClass(o_hGetById(window.o_currentPanel),"o-stick"),o_toggleDisplay(window.o_currentPanel);var d=document.querySelector("#o-header .o-nav-item-highlight");o_removeClass(d,"o-nav-item-highlight"),o_removeClass(d,"o-nav-item-hover")}a&&o_toggleClass(a,"o-on")})}if(window.PolarisClass||(window.PolarisClass={}),function(){(window.PolarisClass.Text=function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b])}).prototype.render=function(){return new o_t('<span {{@attr}}{{_val}}{{=_key}}="{{=_val}}"{{/_val}}{{/@attr}}>{{=text}}</span>').render(this)}}(),function(){(window.PolarisClass.Link=function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b]);!1!==this.hasText&&(this.hasText=!0)}).prototype.render=function(){return this.img&&this.imgHD&&this.imgHD.src&&navig.isIOS&&window.devicePixelRatio>1?"//"!==this.imgHD.src.substr(0,2)?this.img.src="//"+staticServ+"/Magic/"+this.imgHD.src:this.img.src=this.imgHD.src:this.img&&this.img.src&&"//"!==this.img.src.substr(0,2)&&(this.img.src="//"+staticServ+"/Magic/"+this.img.src),""!==o_confCommon.highlightPath&&(this.isSenseOfPlaceActivated=o_confCommon.highlightPath.indexOf&&o_confCommon.highlightPath.indexOf(this.text)>-1),new o_t('{{img.src}}<a {{@attr}}{{_val}}{{=_key}}="{{=_val}}"{{/_val}}{{/@attr}}><img {{@img}}{{_val}}{{=_key}}="{{=_val}}"{{/_val}}{{/@img}}/></a>{{/img.src}}{{hasText}}<a{{@attr}} {{_val}}{{=_key}}="{{=_val}}"{{/_val}}{{/@attr}}{{!disableSenseOfPlace}} data-sense-of-place="{{isSenseOfPlaceActivated}}on{{/isSenseOfPlaceActivated}}"{{/!disableSenseOfPlace}}>{{=text}}{{!disableSenseOfPlace}}<div class="o-sense-of-place"></div>{{/!disableSenseOfPlace}}</a>{{/hasText}}').render(this)}}(),function(){var b=window.PolarisClass.PopIn=function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b])};b.prototype.render=function(){if(this.popin){return new o_t('<div {{@attr}}{{_val}}{{=_key}}="{{=_val}}"{{/_val}}{{/@attr}}{{popOnOver}} data-poponover="true"{{/popOnOver}}>{{text}}<span>{{=text}}</span>{{/text}}<div class="o-nav-zone-panel-arrow"></div></div><div {{@popin.attr}}{{_val}}{{=_key}}="{{=_val}}"{{/_val}}{{/@popin.attr}}><div class="o-nav-zone-panel-content">{{=popin.html}}</div></div>').render(this)}return!1},b.prototype.addEvent=function(){this.hasOwnProperty("attr")&&this.attr.hasOwnProperty("id")&&this.hasOwnProperty("popin")&&this.popin.hasOwnProperty("attr")&&this.popin.attr.hasOwnProperty("id")?a(this):o_confCommon.debug&&c("Attribut(s) absent(s) dans le JSON pour la configuration de la popin de type "+this.template,"warn"),this.addSpecificEvent&&this.addSpecificEvent()}}(),function(){var a=window.PolarisClass.Logo=function(a){window.PolarisClass.Link.prototype.constructor.apply(this,arguments),this.hasText=!1};a.prototype=ObjectExtended.create(window.PolarisClass.Link.prototype),a.prototype.constructor=a,a.prototype.render=function(){return"http://r.orange.fr/r/Ohome_accueil"!==o_confCommon.logoUrl&&(this.attr.href=o_confCommon.logoUrl),window.PolarisClass.Link.prototype.render.apply(this)}}(),function(){var a=window.PolarisClass.AuthentLink=function(a){window.PolarisClass.Link.prototype.constructor.apply(this,arguments)};a.prototype=ObjectExtended.create(window.PolarisClass.Link.prototype),a.prototype.constructor=a,a.prototype.render=function(){""===this.attr.href&&-1===this.urlParam.indexOf("return_url")&&(""!==this.urlParam&&(this.urlParam+="&"),""!==o_confCommon.useMB?this.urlParam+="return_url="+encodeURIComponent("https://rms.orange.fr/"):this.urlParam+="return_url="+encodeURIComponent(document.location.href)),""===this.attr.href&&(this.attr.href=o_idzone.IDENT_FORM_URL),"undefined"!=typeof this.urlParam&&""!==this.urlParam&&(this.attr.href+=this.attr.href.indexOf("?")>-1?"&":"?",0===this.urlParam.indexOf("?")||0===this.urlParam.indexOf("&")?this.attr.href+=this.urlParam.substr(1):this.attr.href+=this.urlParam);var a=this.attr.href.indexOf("?");if(a>-1){for(var b,c=this.attr.href.substr(a+1).split("&"),d="",e=0;e<c.length;e++)b=c[e].split("="),2===b.length?(b[1].match(/[_\.!~*'()-]/)&&b[1].match(/%[0-9a-f]{2}/i)||(b[1]=encodeURIComponent(b[1])),""!==d&&(d+="&"),d+=b[0]+"="+b[1]):""!==b[0]&&(""!==d&&(d+="&"),d+=b[0]);this.attr.href=this.attr.href.substr(0,a+1)+d}return window.PolarisClass.Link.prototype.render.apply(this)}}(),function(){var a=window.PolarisClass.PopInNotifPanel=function(a){window.PolarisClass.PopIn.prototype.constructor.apply(this,arguments);this.notifications=[],this.canal="06o"+(o_confCommon.responsiveMobile?"mob":""),this.adviseBaseUrl=function(){var a={prod:"https://sso.orange.fr",tb1:"https://sla.mdsp.rec.orange.fr",tb2:"https://tb2n1.orange.fr"};return o_defineWassupEnv(),o_confCommon.wassupEnv&&a[o_confCommon.wassupEnv]||a.prod}(),this.adviseProposalUrl=this.adviseBaseUrl+(a.adviseProposalUrl||"/pushms/advise/1.1/proposal?targets=NEC[contract:10]&canal="+this.canal+"&data[canalPhysique]=web"),this.adviseCappingUrl=this.adviseBaseUrl+(a.adviseCappingUrl||"/pushms/advise/1.1/capping")};a.prototype=ObjectExtended.create(window.PolarisClass.PopIn.prototype),a.prototype.constructor=a,a.prototype.render=function(){if(navig.isIE&&navig.getVersion()<=9)return!1;var a=new o_t('<div class="o-nav-zone-panel-title">{{=popin.text}}</div><ul class="o-nav-zone-panel-data"><li class="o-notif-msg"><span data-icon="" class="o-notif-icon"> </span><span class="o-notif-text">{{=popin.defaultMsg}}</span></li></ul>');return this.popin.html=a.render(this),window.PolarisClass.PopIn.prototype.render.apply(this)},a.prototype.renderNotifications=function(){var a=o_hGetById("o-popin-notif-panel"),c=document.querySelector("#o-popin-notif-panel .o-nav-zone-panel-data"),d=new o_t('{{@notifications}}<li><a href="{{=_val.Argumentation.argumentationValue.url}}" class="o-notif-link{{_val.Argumentation.argumentationValue.ifNewNotif}} o-notif-new{{/_val.Argumentation.argumentationValue.ifNewNotif}}"data-offer-code="{{=_val.offerSpecificationCode}}" data-parent-offer-code="{{=_val.parentOfferSpecificationCode}}" data-adv-tracker="{{=_val.Argumentation.argumentationValue.adv_tracker}}" data-tag="navwg_rubanGP3_notif_{{=_val.offerSpecificationCode}}_{{=_key}}{{_val.Argumentation.argumentationValue.displayTag}}_{{=_val.Argumentation.argumentationValue.displayTag}}{{/_val.Argumentation.argumentationValue.displayTag}}"data-oevent-category="header_notification" data-oevent-action="{{=_val.offerSpecificationCode}}_{{=_key}}{{_val.Argumentation.argumentationValue.displayTag}}_{{=_val.Argumentation.argumentationValue.displayTag}}{{/_val.Argumentation.argumentationValue.displayTag}}"><div class="o-notif-icon">{{_val.Argumentation.argumentationValue.img}}<object class="o-notif-object" data="{{=_val.Argumentation.argumentationValue.img}}" type="image/jpg"><span data-icon="" /></object>{{:_val.Argumentation.argumentationValue.img}}<span data-icon="" />{{/_val.Argumentation.argumentationValue.img}}</div><span class="o-notif-text">{{=_val.Argumentation.argumentationValue.text2}}</span></a></li>{{/@notifications}}');o_addClass(a,"o-has-notif"),this.notifications.length>5&&!navig.isTouchDevice()&&o_addClass(a,"o-notif-scroll"),c.innerHTML=d.render(this),b(c);for(var e,f=c.querySelectorAll("a.o-notif-link"),g=function(a){var b=a.currentTarget.dataset,c=a.currentTarget.href;if(b!==undefined&&o_ajax(i.adviseCappingUrl,{method:"POST",withCredentials:!0,timeout:1e4,synchronous:!0,data:"canal="+i.canal+'&cappingdata=[ {"type":1, "codes" : [ {"m" : "'+b.offerCode+'","p" : "'+b.parentOfferCode+'","t" : "'+b.advTracker+'","a" : "enter"}] } ]',onLoadEnd:function(){navig.isFF&&(document.location=c)}}),navig.isFF)return a.preventDefault(),!1},h=0;h<f.length;h++){e=f[h];var i=this;o_addEvent(e,"click",g)}},a.prototype.renderServiceError=function(){var a=document.querySelector("#o-popin-notif-panel .o-nav-zone-panel-data"),b=new o_t('<li class="o-notif-msg"><span data-icon="" class="o-notif-icon"> </span><span class="o-notif-text">Ce service est momentanément indisponible.</span></li>');a.innerHTML=b.render(this)},a.prototype.getNotifications=function(a){if(o_confCommon.isConnected){var b=this;o_ajax(this.adviseProposalUrl,{method:"GET",accept:"application/json",withCredentials:!0,timeout:1e4,headers:{"X-Capping":'{"display": {"NEC": {"contract": {"*":1,"DEFAULT":0,"ZZZ":0},"transverse":{"*":1,"DEFAULT":0,"ZZZ":0}}}}'},onSuccess:function(c){var d;try{if(b._parseNotifResponse(c.responseText),d=o_hGetById("o-popin-notif"),d&&d.setAttribute("data-oevent-label","_nbNotif_"+b.notifications.length),b.notifications.length>0){b.renderNotifications();var e=b.notifications.filter(function(a){return"new"===a.Argumentation.argumentationValue.displayTag||""===a.Argumentation.argumentationValue.clickCount||"0"===a.Argumentation.argumentationValue.clickCount}).length;e>0&&a(e)}else{var f=o_hGetById("o-popin-notif");f.setAttribute("data-tag",f.getAttribute("data-tag")+"_nomessages")}}catch(g){d=o_hGetById("o-popin-notif"),d&&d.setAttribute("data-oevent-label","_erreur"),b.renderServiceError()}},onError:function(){var a=o_hGetById("o-popin-notif");a.setAttribute("data-tag",a.getAttribute("data-tag")+"_error"),c("Erreur à la réception des notifs Advise","warn"),b.renderServiceError()}})}},a.prototype._parseNotifResponse=function(a){var b,c,d,e,f,g,h,i=JSON.parse(a),j=i[0].NEC,k=[];for(var l in j)j.hasOwnProperty(l)&&(g=i[0].NEC[l],k=k.concat(g));for(l=0;l<k.length;l++)h=k[l],"ZZZ"!==h.coredata.main&&"DEFAULT"!==h.coredata.main&&""!==h.response.OffersSpecification.Argumentation.argumentationValue.text2&&(b=h.response.OffersSpecification.Argumentation.argumentationValue.urlMob,b!==undefined&&(h.response.OffersSpecification.Argumentation.argumentationValue.url=b),c=h.response.OffersSpecification.Argumentation.argumentationValue.images["img"+(o_confCommon.responsiveMobile?"044":"043")],""!==c&&"https://"!==c&&(h.response.OffersSpecification.Argumentation.argumentationValue.img=c),d=h.response.OffersSpecification.Argumentation.argumentationValue.displayTag,e=h.response.OffersSpecification.Argumentation.argumentationValue.clickCount,f=void 0!==e&&(""===e||"0"===e)||void 0!==d&&"new"===d,h.response.OffersSpecification.Argumentation.argumentationValue.ifNewNotif=f,this.notifications.push(h.response.OffersSpecification));this.notifications.sort(function(a,b){var c=parseInt(a.Argumentation.argumentationValue.priority,10)||0,d=parseInt(b.Argumentation.argumentationValue.priority,10)||0,e=parseInt(a.Argumentation.argumentationValue.displayDateFirst,10)||99999999999,f=parseInt(b.Argumentation.argumentationValue.displayDateFirst,10)||99999999999;return 99999999999===e&&99999999999===f?c<d:99999999999===e||99999999999===f?e<f:e<f||c<d})}}(),function(){(window.PolarisClass.NotificationBadge=function(a){this.maxValue=999,this.value=a,this.value>this.maxValue&&(this.value="+999")}).prototype.render=function(){return new o_t('<span class="o-notif-badge">{{=value}}</span>').render(this)}}(),o_confCommon.headerDisplay){var h="res",i="Polaris3",j="desktop";"BUSINESSPOSTPAID"!==o_idzone.MOBILE_OFFER_TYPE&&"BUSINESSPREPAID"!==o_idzone.MOBILE_OFFER_TYPE&&"BUSINESSSEMIPREPAID"!==o_idzone.MOBILE_OFFER_TYPE&&!0!==o_confCommon.isMobEnt||(o_confCommon.isMobEnt=!0,h="mobent"),o_confCommon.isSosh&&o_confCommon.sosh2Mode&&(i="Sosh2"),(o_confCommon.isCaraibe||o_idzone.USER_ORANGE_CARAIBE_MOBILE||o_idzone.USER_ORANGE_CARAIBE_CONVERGENT)&&(o_confCommon.isCaraibe=!0,h="oca",o_defaultMoteurModule="caraibe"),o_confCommon.responsiveMobile&&(j="mobile");var k=o_sGetCookie("hpc-prospect-abtest"),l=o_sGetCookie("hpc-prospect");"undefined"==typeof oAbtestPageProspect||!0!==oAbtestPageProspect||!1===k||"D"===k||"v1"!==l&&!1!==l||o_confCommon.responsiveMobile||(i+=".ABTEST_prospect",o_confCommon.isHomePage=!0,o_confCommon.ABTESTPageProspect=!0),"undefined"==typeof oHpPageProspect||!0!==oHpPageProspect||o_confCommon.isConnected||!o_confCommon.isHomePage||"v1"!==l&&!1!==l||o_confCommon.responsiveMobile||(o_confCommon.isHomePageProspect=!0),o_confCommon.loadJSONData&&head.js({jsonMenu:document.location.protocol+"//"+staticServ+"/Magic/"+i+"."+h+"."+j+".json"})}window.Polaris||(window.Polaris={}),window.o_addPopinToggleEvents=window.Polaris.o_addPopinToggleEvents=a,window.o_addEventCloserPopin=window.Polaris.o_addEventCloserPopin=g,window.o_log=window.Polaris.o_log=c,window.o_checkDisplayConditionItem=window.Polaris.o_checkDisplayConditionItem=d,window.o_addNotificationBadge=window.Polaris.o_addNotificationBadge=e,window.o_onGetData=window.Polaris.o_onGetData=f,window.o_registerTaggingPlan=window.Polaris.o_registerTaggingPlan=b}();