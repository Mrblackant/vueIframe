(function(n, e) {
  var t = n.documentElement,
    i = "orientationchange" in window ? "orientationchange" : "resize",
    d = function() {
      var n = t.clientWidth;
      n && (t.style.fontSize = n / 7.5 + "px")
    };
  n.addEventListener && (e.addEventListener(i, d, !1), n.addEventListener("DOMContentLoaded", d, !1))
})(document, window);
