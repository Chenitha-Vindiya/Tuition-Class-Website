!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() :
    "function" == typeof define && define.amd ? define(e) :
    (t = "undefined" != typeof globalThis ? globalThis : t || self).Cropper = e()
}(this, function() {
    "use strict";

    function e(e, t) {
        var i, a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            i = Object.getOwnPropertySymbols(e);
            if (t) {
                i = i.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })
            }
            a.push.apply(a, i)
        }
        return a
    }

    function B(a) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? e(Object(n), !0).forEach(function(t) {
                var e, i;
                e = a, t = n[i = t], i in e ? Object.defineProperty(e, i, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[i] = t
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(n)) : e(Object(n)).forEach(function(t) {
                Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return a
    }

    function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }

    function T(t) {
        return function(t) {
            if (Array.isArray(t)) return a(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || function(t, e) {
            if (t) {
                if ("string" == typeof t) return a(t, e);
                var i = Object.prototype.toString.call(t).slice(8, -1);
                return "Map" === (i = "Object" === i && t.constructor ? t.constructor.name : i) || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? a(t, e) : void 0
            }
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function a(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, a = new Array(e); i < e; i++) a[i] = t[i];
        return a
    }

    var t = "undefined" != typeof window && void 0 !== window.document,
        h = t ? window : {},
        o = !(!t || !h.document.documentElement) && "ontouchstart" in h.document.documentElement,
        r = t && "PointerEvent" in h,
        c = "cropper",
        k = "all",
        O = "crop",
        E = "move",
        W = "zoom",
        H = "e",
        N = "w",
        L = "s",
        z = "n",
        Y = "ne",
        X = "nw",
        R = "se",
        S = "sw",
        s = "".concat(c, "-crop"),
        d = "".concat(c, "-disabled"),
        A = "".concat(c, "-hidden"),
        l = "".concat(c, "-hide"),
        p = "".concat(c, "-invisible"),
        m = "".concat(c, "-modal"),
        u = "".concat(c, "-move"),
        g = "".concat(c, "Action"),
        f = "".concat(c, "Preview"),
        v = "crop",
        w = "move",
        b = "none",
        y = "crop",
        x = "cropend",
        M = "cropmove",
        C = "cropstart",
        D = "dblclick",
        j = r ? "pointerdown" : o ? "touchstart" : "mousedown",
        I = r ? "pointermove" : o ? "touchmove" : "mousemove",
        P = r ? "pointerup pointercancel" : o ? "touchend touchcancel" : "mouseup",
        U = "zoom",
        q = "image/jpeg",
        $ = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,
        Q = /^data:/,
        K = /^data:image\/jpeg;base64,/,
        Z = /^img|canvas$/i,
        G = {
            viewMode: 0,
            dragMode: v,
            initialAspectRatio: NaN,
            aspectRatio: NaN,
            data: null,
            preview: "",
            responsive: !0,
            restore: !0,
            checkCrossOrigin: !0,
            checkOrientation: !0,
            modal: !0,
            guides: !0,
            center: !0,
            highlight: !0,
            background: !0,
            autoCrop: !0,
            autoCropArea: .8,
            movable: !0,
            rotatable: !0,
            scalable: !0,
            zoomable: !0,
            zoomOnTouch: !0,
            zoomOnWheel: !0,
            wheelZoomRatio: .1,
            cropBoxMovable: !0,
            cropBoxResizable: !0,
            toggleDragModeOnDblclick: !0,
            minCanvasWidth: 0,
            minCanvasHeight: 0,
            minCropBoxWidth: 0,
            minCropBoxHeight: 0,
            minContainerWidth: 200,
            minContainerHeight: 100,
            ready: null,
            cropstart: null,
            cropmove: null,
            cropend: null,
            crop: null,
            zoom: null
        },
        V = Number.isNaN || h.isNaN;

    function F(t) {
        return "number" == typeof t && !V(t)
    }

    var J = function(t) {
        return 0 < t && t < 1 / 0
    };

    function _(t) {
        return void 0 === t
    }

    function tt(t) {
        return "object" === i(t) && null !== t
    }

    var et = Object.prototype.hasOwnProperty;

    function it(t) {
        if (!tt(t)) return !1;
        try {
            var e = t.constructor,
                i = e.prototype;
            return e && i && et.call(i, "isPrototypeOf")
        } catch (t) {
            return !1
        }
    }

    function at(t) {
        return "function" == typeof t
    }

    var nt = Array.prototype.slice;

    function ot(t) {
        return Array.from ? Array.from(t) : nt.call(t)
    }

    function ht(i, a) {
        return i && at(a) && (Array.isArray(i) || F(i.length) ? ot(i).forEach(function(t, e) {
            a.call(i, t, e, i)
        }) : tt(i) && Object.keys(i).forEach(function(t) {
            a.call(i, i[t], t, i)
        })), i
    }

    var rt = Object.assign || function(i) {
        for (var t = arguments.length, e = new Array(1 < t ? t - 1 : 0), a = 1; a < t; a++) e[a - 1] = arguments[a];
        return tt(i) && 0 < e.length && e.forEach(function(e) {
            tt(e) && Object.keys(e).forEach(function(t) {
                i[t] = e[t]
            })
        }), i
    },
        st = /\.\d*(?:0|9){12}\d*$/;

    function ct(t, e) {
        e = 1 < arguments.length && void 0 !== e ? e : 1e11;
        return st.test(t) ? Math.round(t * e) / e : t
    }

    var dt = /^width|height|left|top|marginLeft|marginTop$/;

    function lt(t, e) {
        var i = t.style;
        ht(e, function(t, e) {
            dt.test(e) && F(t) && (t = "".concat(t, "px")), i[e] = t
        })
    }

    function pt(t) {
        return 1 === t.nodeType
    }

    function mt(t) {
        return "string" == typeof t && t.length > 0
    }
});

var y, x, M, C = o[Object.keys(o)[0]], D = { x: C.endX - C.startX, y: C.endY - C.startY };

switch (h) {
  case k:
    s += D.x;
    c += D.y;
    break;
  
  case H:
    if (0 <= D.x && (f <= p || r && (c <= g || v <= m))) {
      w = !1;
      break;
    }
    b(H);
    (d += D.x) < 0 && (h = N, s -= d = -d);
    r && (c += (n.height - (l = d / r)) / 2);
    break;
  
  case z:
    if (D.y <= 0 && (c <= g || r && (s <= u || f <= p))) {
      w = !1;
      break;
    }
    b(z);
    l -= D.y;
    c += D.y;
    l < 0 && (h = L, c -= l = -l);
    r && (s += (n.width - (d = l * r)) / 2);
    break;
  
  case N:
    if (D.x <= 0 && (s <= u || r && (c <= g || v <= m))) {
      w = !1;
      break;
    }
    b(N);
    d -= D.x;
    s += D.x;
    d < 0 && (h = H, s -= d = -d);
    r && (c += (n.height - (l = d / r)) / 2);
    break;
  
  case L:
    if (0 <= D.y && (v <= m || r && (s <= u || f <= p))) {
      w = !1;
      break;
    }
    b(L);
    (l += D.y) < 0 && (h = z, c -= l = -l);
    r && (s += (n.width - (d = l * r)) / 2);
    break;
  
  case Y:
    if (r) {
      if (D.y <= 0 && (c <= g || f <= p)) {
        w = !1;
        break;
      }
      b(z);
      l -= D.y;
      c += D.y;
      d = l * r;
    } else {
      b(z);
      b(H);
      !(0 <= D.x) || p < f ? d += D.x : D.y <= 0 && c <= g && (w = !1);
      D.y <= 0 && !(g < c) || (l -= D.y, c += D.y);
      d < 0 && l < 0 ? (h = S, c -= l = -l, s -= d = -d) : d < 0 ? (h = X, s -= d = -d) : l < 0 && (h = R, c -= l = -l);
    }
    break;
  
  case X:
    if (r) {
      if (D.y <= 0 && (c <= g || s <= u)) {
        w = !1;
        break;
      }
      b(z);
      l -= D.y;
      c += D.y;
      s += n.width - (d = l * r);
    } else {
      b(z);
      b(N);
      !(D.x <= 0) || u < s ? d -= D.x : D.y <= 0 && c <= g && (w = !1);
      D.y <= 0 && !(g < c) || (l -= D.y, c += D.y);
      d < 0 && l < 0 ? (h = R, c -= l = -l, s -= d = -d) : d < 0 ? (h = Y, s -= d = -d) : l < 0 && (h = S, c -= l = -l);
    }
    break;
  
  case S:
    if (r) {
      if (0 <= D.x && (f <= p || v <= m)) {
        w = !1;
        break;
      }
      b(N);
      l = (d += D.x) / r;
    } else {
      b(L);
      b(H);
      !(0 <= D.x) || p < f ? d += D.x : 0 <= D.y && v <= m && (w = !1);
      0 <= D.y && !(m < v) || (l += D.y);
      d < 0 && l < 0 ? (h = Y, c -= l = -l, s -= d = -d) : d < 0 ? (h = R, s -= d = -d) : l < 0 && (h = X, c -= l = -l);
    }
    break;
  
  case R:
    if (r) {
      if (0 <= D.x && (f <= p || v <= m)) {
        w = !1;
        break;
      }
      b(H);
      l = (d += D.x) / r;
    } else {
      b(L);
      b(H);
      !(0 <= D.x) || p < f ? d += D.x : 0 <= D.y && v <= m && (w = !1);
      0 <= D.y && !(m < v) || (l += D.y);
      d < 0 && l < 0 ? (h = X, c -= l = -l, s -= d = -d) : d < 0 ? (h = S, s -= d = -d) : l < 0 && (h = Y, c -= l = -l);
    }
    break;
  
  case E:
    this.move(D.x, D.y);
    w = !1;
    break;
  
  case W:
    this.zoom((x = B({}, y = o), M = 0, ht(y, function(n, t) {
      delete x[t];
      ht(x, function(t) {
        var e = Math.abs(n.startX - t.startX),
            i = Math.abs(n.startY - t.startY),
            a = Math.abs(n.endX - t.endX),
            t = Math.abs(n.endY - t.endY),
            i = Math.sqrt(e * e + i * i),
            i = (Math.sqrt(a * a + t * t) - i) / i;
        Math.abs(i) > Math.abs(M) && (M = i);
      });
    }), M), t);
    w = !1;
    break;
  
  case O:
    if (!D.x || !D.y) {
      w = !1;
      break;
    }
    y = kt(this.cropper);
    s = C.startX - y.left;
    c = C.startY - y.top;
    d = n.minWidth;
    l = n.minHeight;
    0 < D.x ? h = 0 < D.y ? R : Y : D.x < 0 && (s -= d, h = 0 < D.y ? S : X);
    D.y < 0 && (c -= l);
    this.cropped || (mt(this.cropBox, A), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
    w = !1;
    break;
}

w && (n.width = d, n.height = l, n.left = s, n.top = c, this.action = h, this.renderCropBox());
ht(o, function(t) {
  t.startX = t.endX;
  t.startY = t.endY;
});
