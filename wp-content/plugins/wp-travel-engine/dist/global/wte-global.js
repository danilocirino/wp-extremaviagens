(()=>{var t={2664:()=>{window.wteL10n=window.wteL10n||{},window.wteL10n.api=window.wteapi=window.WTEApi=class{constructor(){}static async get(t,e={},i={}){let n={packages:this.getPackages,categories:this.getPackageCategories,trip:this.getTrip};return wteL10n.locale&&(e.lang=wteL10n.locale),this[t]||(this[t]="trip"==t?await n[t](e,i):lodash.keyBy(await n[t](e,i),"id")),this[t]}static async getTrip(t,e){const i=await fetch(`${wteL10n.wpapi.root+wteL10n.wpapi.versionString}trip/${t.id}?context=${t.context||"view"}`,e);return await i.json()}static async getPackageCategories(t){const e=await fetch(`${wteL10n.wpapi.root+wteL10n.wpapi.versionString}package-categories?per_page=100`);return await e.json()}static async getPackages(t,e){var i;const n=Object.entries(t).map((([t,e])=>`${t}=${e}`)).join("&"),a=await fetch(`${wteL10n.wpapi.root+wteL10n.wpapi.versionString}packages/${null!==(i=t.id)&&void 0!==i?i:`?${n}`}`,e);return await a.json()}static async addNewPackage(t){const e=await fetch(`${wteL10n.wpapi.root+wteL10n.wpapi.versionString}packages`,{method:"POST",headers:{"Content-Type":"application/json","X-WP-Nonce":wteL10n.wpapi.nonce},body:JSON.stringify({title:"Untitled Package",status:"publish",post_type:"trip-packages",...t})});return await e.json()}static async removePackage(t){const e=await fetch(`${wteL10n.wpapi.root+wteL10n.wpapi.versionString}packages/${t.id}`,{method:"DELETE",headers:{"Content-Type":"application/json","X-WP-Nonce":wteL10n.wpapi.nonce}});return await e.json()}}},8726:(t,e,i)=>{"use strict";function n(){}i.d(e,{A:()=>a}),n.hasClass=function(t,e){return t.classList?t.classList.contains(e):!!t.getAttribute("class").match(new RegExp("(\\s|^)"+e+"(\\s|$)"))},n.addClass=function(t,e){var i=e.split(" ");t.classList?t.classList.add(i[0]):n.hasClass(t,i[0])||t.setAttribute("class",t.getAttribute("class")+" "+i[0]),i.length>1&&n.addClass(t,i.slice(1).join(" "))},n.removeClass=function(t,e){var i=e.split(" ");if(t.classList)t.classList.remove(i[0]);else if(n.hasClass(t,i[0])){var a=new RegExp("(\\s|^)"+i[0]+"(\\s|$)");t.setAttribute("class",t.getAttribute("class").replace(a," "))}i.length>1&&n.removeClass(t,i.slice(1).join(" "))},n.toggleClass=function(t,e,i){i?n.addClass(t,e):n.removeClass(t,e)},n.setAttributes=function(t,e){for(var i in e)t?.setAttribute&&t.setAttribute(i,e[i])},n.getChildrenByClassName=function(t,e){t.children;for(var i=[],a=0;a<t.children.length;a++)n.hasClass(t.children[a],e)&&i.push(t.children[a]);return i},n.getIndexInArray=function(t,e){return Array.prototype.indexOf.call(t,e)},n.on=function(t,e,i){document.addEventListener(t,(function(t){for(var n=t.target;n&&n!=this;n=n.parentNode)if(n.matches(e)){i.call(n,t);break}}),!1)};const a=n}},e={};function i(n){var a=e[n];if(void 0!==a)return a.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,i),r.exports}i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t={};i.r(t),i.d(t,{calculateGrandTotal:()=>o,numberFormat:()=>c,phpToMomentDF:()=>d,priceFormat:()=>l,wteGetFormatedPrice:()=>n,wteGetFormatedPriceWithCurrencyCode:()=>a,wteGetFormatedPriceWithCurrencyCodeSymbol:()=>r,wteGetFormatedPriceWithCurrencySymbol:()=>s});var e=i(8726);i(2664);function n(t,e,i){return t=t||0,e=e||!0,i=i||0,"undefined"!=typeof WTE_CC_convData&&WTE_CC_convData.rate&&(t*=parseFloat(WTE_CC_convData.rate)),0==e?t:(t=(t=(t=parseFloat(t)).toFixed(i)).replace(".00",""),t=addCommas(t))}function a(t,e,i,n){return wteL10n.priceFormat(t).format(!0,!!i)}function r(t,e,i,n,a){return wteL10n.priceFormat(t).format(!1,!!n)}function s(t,e,i,n){return wteL10n.priceFormat(t).format(!1,!!i)}function o(){return parseFloat(window.wte.trip.travellersCost)+parseFloat(window.wte.trip.extraServicesCost)}function c(t,e=2,i=".",n=","){try{e=Math.abs(e),e=isNaN(e)?2:e;const a=t<0?"-":"";let r=parseInt(t=Math.abs(Number(t)||0).toFixed(e)).toString(),s=r.length>3?r.length%3:0;return a+(s?r.substr(0,s)+n:"")+r.substr(s).replace(/(\d{3})(?=\d)/g,"$1"+n)+(e?i+Math.abs(t-r).toFixed(e).slice(2):"")}catch(t){console.log(t)}}function l(t,e,i,n="%CURRENCY_SYMBOL%%FORMATED_AMOUNT%",a=2,r=".",s=",",o=!1){let l={"%CURRENCY_CODE%":o?e:`<span class="wpte-currency-code currency">${e}</span>`,"%CURRENCY_SYMBOL%":o?i:`<span class="wpte-currency-code currency">${i}</span>`,"%AMOUNT%":o?t:`<strong class="wpte-price amount">${t}</strong>`,"%FORMATED_AMOUNT%":o?c(t,a,r,s):`<strong class="wpte-price amount">${c(t,a,r,s)}</strong>`};return n.split(/(%\w+%)/g).reduce(((t="",e)=>l[e]?t+l[e]:t+e))}function d(t){let e={d:"DD",D:"ddd",j:"D",l:"dddd",w:"d",F:"MMMM",M:"MMM",m:"MM",n:"M",S:"o",jS:"Do",Y:"YYYY",y:"YY"};return t.match(/(\\?\\?[\w\W])/g)?.map((t=>e[t]||t)).join("")}window.wteL10n.util=window.wteutil=e.A,window.wteL10n.ui=window.wteui=window.wteL10n.ui||{},window.wteL10n.ui.Accordion=window.wteui.Accordion=class{constructor(t){this.element=t,e.A.addClass(this.element,"wte-accordion-initialized"),this.items=e.A.getChildrenByClassName(this.element,"wte-accordion-item"),this.version=this.element.getAttribute("data-version")?"-"+this.element.getAttribute("data-version"):"",this.showClass="wte-accordion-open",this.animateHeight="on"==this.element.getAttribute("data-animation"),this.multiItems=!("off"==this.element.getAttribute("data-multi-items")),this.deepLinkOn="on"==this.element.getAttribute("data-deep-link"),this.initAccordion()}initAccordion(){for(var t=0;t<this.items.length;t++){var i=this.items[t].getElementsByClassName("wte-accordion-button")[0];if(i){var n=this.items[t].getElementsByClassName("wte-accordion-collapse")[0],a=e.A.hasClass(this.items[t],this.showClass)?"true":"false";e.A.setAttributes(i,{"aria-expanded":a,"aria-controls":"accordion-content-"+t,id:"accordion-header-"+t}),e.A.addClass(i,"wte-accordion-trigger"),e.A.setAttributes(n,{"aria-labelledby":"accordion-header-"+t,id:"accordion-content-"+t})}}this.initAccordionEvents(),this.initDeepLink()}initAccordionEvents(){var t=this;this.element.addEventListener("click",(function(i){var n=i.target.closest(".wte-accordion-trigger");n&&e.A.getIndexInArray(t.items,n.closest(".wte-accordion-item"))>=0&&t.triggerAccordion(n)}))}triggerAccordion(t){var e="true"===t.getAttribute("aria-expanded");this.animateAccordion(t,e,!1),!e&&this.deepLinkOn&&history.replaceState(null,"","#"+t.getAttribute("aria-controls"))}animateAccordion(t,i,n){var a=t.closest(".wte-accordion-item"),r=a.getElementsByClassName("wte-accordion-collapse")[0],s=i?"false":"true";e.A.toggleClass(a,this.showClass,!i),t.setAttribute("aria-expanded",s),r&&this.resetContentVisibility(a,r,i),(!this.multiItems&&!i||n)&&this.closeSiblings(a)}resetContentVisibility(t,i,n){e.A.toggleClass(t,this.showClass,!n),i.removeAttribute("style"),n&&!this.multiItems&&this.moveContent()}closeSiblings(t){for(var i=e.A.getIndexInArray(this.items,t),n=0;n<this.items.length;n++)if(e.A.hasClass(this.items[n],this.showClass)&&n!=i)return this.animateAccordion(this.items[n].getElementsByClassName("wte-accordion-trigger")[0],!0,!1),!1}moveContent(){var t=this.element.getElementsByClassName(this.showClass);if(0!=t.length){var e=t[0].getBoundingClientRect();if(e.top<0||e.top>window.innerHeight){var i=window.scrollY||document.documentElement.scrollTop;window.scrollTo(0,e.top+i)}}}initDeepLink(){if(this.deepLinkOn){var t=window.location.hash.substr(1);if(t&&""!=t){var e=this.element.querySelector('.wte-accordion-trigger[aria-controls="'+t+'"]');e&&"true"!==e.getAttribute("aria-expanded")&&(this.animateAccordion(e,!1,!0),setTimeout((function(){e.scrollIntoView(!0)})))}}}},window.wteL10n.helpers=window.wtehelpers=t,window.addCommas||(window.addCommas=t=>{for(var e=(t+="").split("."),i=e[0],n=e.length>1?"."+e[1]:"",a=/(\d+)(\d{3})/;a.test(i);)i=i.replace(a,"$1"+WPTE_Price_Separator+"$2");return i+n}),window.wteGetFormatedPrice=n,window.wteGetFormatedPriceWithCurrencyCode=a,window.wteGetFormatedPriceWithCurrencyCodeSymbol=r,window.wteGetFormatedPriceWithCurrencySymbol=s,window.calculateGrandTotal=o;const u=function(t){const{currency:e,baseCurrency:i,currencySymbol:n,format:{number:a,price:r}}=wteL10n;let s={"%CURRENCY_CODE%":`${e}`,"%CURRENCY_SYMBOL%":`${n}`,"%AMOUNT%":""+(t*=+{[i]:1}[e]),"%FORMATED_AMOUNT%":`${c(t,+a.decimal,a.decimalSeparator,a.thousansSeparator)}`};return r.split(/(%\w+%)/g).reduce(((t="",e)=>s[e]?t+s[e]:t+e))};e.A.on("click",".wte-popper button",(function(t){let i=this.closest(".wte-popper");i&&e.A.toggleClass(i,"active",!e.A.hasClass(i,"active"))}));const w=function(t){if(!e.A.hasClass(t,"wte-price-field")){let e=t.parentElement,i=document.createElement("input");i.type="hidden",i.name=t.name,i.value=t.value,t.name="",t.value=u(t.value),e.appendChild(i),t.addEventListener("focus",(function(){t.value=i.value})),t.addEventListener("blur",(function(){i.value=t.value,t.value=u(t.value)})),t.classList.add("wte-price-field")}};function m(t){var e=wteL10n.version,i=document.querySelectorAll("[class*=_wte_update_notice_], [data-wte-update]");if(i)for(var n in i){var a=i[n];if(a.classList)if(a.classList.contains(`_wte_update_notice_${e}`))a.classList.remove(`_wte_update_notice_${e}`);else{var r=new RegExp(`^(wte_(new|updated|note)_${e})$`);if(a.dataset.wteUpdate.match(r)){var s=a.dataset.wteUpdate;a.classList.add(s),a.removeAttribute("data-wte-update")}}}}window.wteL10n.ui.priceField=w,document.addEventListener("wteEditPackageRender",(function(){document.querySelectorAll('[data-wte-field-type="price"]')?.forEach((function(t){w(t)}))})),e.A.on("change","[data-toggle-target]",(function(t){let e=document.querySelector(this.dataset.toggleTarget);e&&(this.checked?e.style.removeProperty("display"):e.style.display="none")})),e.A.on("click",".wpte-edit-booking-detail",(function(t){t.preventDefault(),this.closest(".wpte-block").querySelectorAll("select, input").forEach((function(t){t.dataset.attribName&&(t.name=t.dataset.attribName),t.dataset.attribValue&&(t.value=t.dataset.attribValue),t.dataset.attribType&&(t.type=t.dataset.attribType),t.disabled&&(t.disabled=!1),t.type&&(t.readOnly=!1)})),this.closest(".wpte-block").querySelectorAll(".show_on_edit").forEach((function(){this.style.removeProperty("display")}))})),e.A.on("click",".wte-email-template-updater",(function(t){t.preventDefault();var e=document.getElementById(this.dataset.target);e&&e.submit()})),document.addEventListener("wteSettingsTabContentLoaded",m),document.addEventListener("DOMContentLoaded",(t=>{m();var i=document.querySelectorAll(".wte-code");i&&i.forEach((function(t){t.dataset.height&&(t.style.height=t.dataset.height+"px"),hljs&&hljs.highlightBlock(t)})),e.A.on("click",".wte-onclick-toggler",(function(t){if(t.preventDefault(),this.dataset.target){var e=document.querySelector(this.dataset.target);e&&(Array.from(e.classList).includes("visible")?(e.classList.remove("visible"),e.style.display="none"):(e.style.removeProperty("display"),e.classList.add("visible")))}}))})),window.wteL10n=window.wteL10n||{};const p=function(t){this._value=t,this._getPriceFormat=function(){return wteL10n.format.price},this.get=function(){return this._value},this.format=function(t=!1,e=!0){const{currency:i,baseCurrency:n,currencySymbol:a,baseCurrencySymbol:r,format:{number:s,price:o}}=wteL10n;let c={[n]:1};if("undefined"!=typeof wteCc&&wteCc?.code&&e)for(let t in wteCc.code)c={...c,[wteCc.code[t]]:wteCc.rate[t]};let l=+this._value*(e?+c[i]:1);return wtehelpers.priceFormat(l,e?i:n,e?a:r,o,+s.decimal,s.decimalSeparator,s.thousandSeparator,t)}};window.wteL10n.priceFormat=window.wteL10n.priceFormat||function(t){return new p(t)};const h=function(t){this._time=t,this.get=function(){return this._time},this.set=function(t){this._time=t},this._getTimeFormat=function(){return wteL10n.helpers.phpToMomentDF(wteL10n.format.datetime.date)},this.format=function(t=null,e=!1){if(wteL10n.format.datetime.timezone,!this._time)return this._time;if(t)return moment(this._time).format(t);let i=moment(this._time).format(this._getTimeFormat());return i+=e?" at "+moment(this._time).format("h:mm A"):"",i},this.getDatewithOffset=function(t){if(this._time){let e=moment(this._time).utc().format("YYYY-MM-DDTHH:mm:ss")+t;return new Date(e)}}};window.wteL10n.dateFormat=window.wteL10n.dateFormat||function(t){return new h(t)}})()})();