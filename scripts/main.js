!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.MiniLightbox=e()}}(function(){return function e(t,n,o){function i(l,d){if(!n[l]){if(!t[l]){var c="function"==typeof require&&require;if(!d&&c)return c(l,!0);if(r)return r(l,!0);var f=new Error("Cannot find module '"+l+"'");throw f.code="MODULE_NOT_FOUND",f}var u=n[l]={exports:{}};t[l][0].call(u.exports,function(e){var n=t[l][1][e];return i(n?n:e)},u,u.exports,e,t,n,o)}return n[l].exports}for(var r="function"==typeof require&&require,l=0;l<o.length;l++)i(o[l]);return i}({1:[function(e,t,n){(function(e){function n(e,t){for(var n=document.querySelectorAll(e),o=0;o<n.length;o++)if(n[o]===t)return!0;return!1}function o(e){var t,r=e.selector||e,l=document.querySelectorAll(r),d=function(e){var t,n,r=this.id,l=i[r];r||this.setAttribute("id",r="ml_"+Math.random().toString(36)),l?o.open(r):(t=document.createElement("div"),t.setAttribute("class","ml_box"),n=document.createElement("img"),n.setAttribute("src",this.getAttribute("data-image-opened")||this.src),t.appendChild(n),t.addEventListener("click",function(){o.close(r)}),i[r]={el:this,box:t,img:n,opened:!1},document.body.appendChild(t),o.open(r)),e.preventDefault()};for(t=0;t<l.length;++t)new Image(l[t].getAttribute("data-image-opened"));if(e.delegation)return document.querySelector(e.delegation).addEventListener("click",function(o){for(var i=o.target,r=[i];i;)r.push(i=i.parentNode);for(t=0;t<r.length;++t){var l=r[t];if(n(e.selector,l)&&(i=l))break}i&&"IMG"===i.tagName&&!i.parentNode.classList.contains("ml_box")&&d.call(i,o)});for(t=0;t<l.length;++t)!function(e){e.addEventListener("click",d)}(l[t])}var i;e.addEventListener&&(e.addEventListener("scroll",function(){o.close()}),e.addEventListener("keydown",function(e){27===e.which&&o.close()})),o.close=function(e){if(e)i[e].opened&&(i[e].opened=!1,("function"!=typeof o.customClose||o.customClose.call(i[e])!==!1)&&(i[e].box.style.display="none"));else for(var t=Object.keys(i),n=0;n<t.length;++n)o.close(t[n])},o.open=function(e){i[e].opened||(i[e].opened=!0,("function"!=typeof o.customOpen||o.customOpen.call(i[e])!==!1)&&(i[e].box.style.display="block"))},i=o._cache={},t.exports=o}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)});
MiniLightbox.customClose = function () {
    var self = this;
    self.img.classList.add("animated", "fadeOutDown");
    setTimeout(function () {
        self.box.classList.add("animated", "fadeOut");
        setTimeout(function () {
            self.box.classList.remove("animated", "fadeOut");
            self.img.classList.remove("animated", "fadeOutDown");
            self.box.style.display = "none";
        }, 500);
    }, 500);
    return false;
};

MiniLightbox.customOpen = function () {
    this.box.classList.add("animated", "fadeIn");
    this.img.classList.add("animated", "fadeInUp");
};

window.onload = function () {
    MiniLightbox("#first-image");
    MiniLightbox("#second-image");
};