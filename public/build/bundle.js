var app = (function () {
  "use strict";
  function t() {}
  function e(t, e) {
    for (const n in e) t[n] = e[n];
    return t;
  }
  function n(t) {
    return t();
  }
  function r() {
    return Object.create(null);
  }
  function i(t) {
    t.forEach(n);
  }
  function o(t) {
    return "function" == typeof t;
  }
  function s(t, e) {
    return t != t
      ? e == e
      : t !== e || (t && "object" == typeof t) || "function" == typeof t;
  }
  let a, u;
  function c(t, e) {
    return a || (a = document.createElement("a")), (a.href = e), t === a.href;
  }
  function l(e, n, r) {
    e.$$.on_destroy.push(
      (function (e, ...n) {
        if (null == e) return t;
        const r = e.subscribe(...n);
        return r.unsubscribe ? () => r.unsubscribe() : r;
      })(n, r)
    );
  }
  function h(t, e, n) {
    return t.set(n), e;
  }
  function f(t, e) {
    t.appendChild(e);
  }
  function d(t, e, n) {
    t.insertBefore(e, n || null);
  }
  function p(t) {
    t.parentNode.removeChild(t);
  }
  function v(t, e) {
    for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
  }
  function g(t) {
    return document.createElement(t);
  }
  function y(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function m(t) {
    return document.createTextNode(t);
  }
  function b() {
    return m(" ");
  }
  function w() {
    return m("");
  }
  function E(t, e, n, r) {
    return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
  }
  function I(t, e, n) {
    null == n
      ? t.removeAttribute(e)
      : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  function T(t, e) {
    (e = "" + e), t.wholeText !== e && (t.data = e);
  }
  function _(t, e, n, r) {
    t.style.setProperty(e, n, r ? "important" : "");
  }
  function S(t, e) {
    for (let n = 0; n < t.options.length; n += 1) {
      const r = t.options[n];
      if (r.__value === e) return void (r.selected = !0);
    }
  }
  function A(t) {
    const e = t.querySelector(":checked") || t.options[0];
    return e && e.__value;
  }
  function k(t, e, n) {
    t.classList[n ? "add" : "remove"](e);
  }
  class N {
    constructor() {
      this.e = this.n = null;
    }
    c(t) {
      this.h(t);
    }
    m(t, e, n = null) {
      this.e || ((this.e = g(e.nodeName)), (this.t = e), this.c(t)), this.i(n);
    }
    h(t) {
      (this.e.innerHTML = t), (this.n = Array.from(this.e.childNodes));
    }
    i(t) {
      for (let e = 0; e < this.n.length; e += 1) d(this.t, this.n[e], t);
    }
    p(t) {
      this.d(), this.h(t), this.i(this.a);
    }
    d() {
      this.n.forEach(p);
    }
  }
  function D(t) {
    u = t;
  }
  function C() {
    if (!u) throw new Error("Function called outside component initialization");
    return u;
  }
  const x = [],
    R = [],
    O = [],
    L = [],
    P = Promise.resolve();
  let M = !1;
  function F(t) {
    O.push(t);
  }
  let V = !1;
  const q = new Set();
  function U() {
    if (!V) {
      V = !0;
      do {
        for (let t = 0; t < x.length; t += 1) {
          const e = x[t];
          D(e), j(e.$$);
        }
        for (D(null), x.length = 0; R.length; ) R.pop()();
        for (let t = 0; t < O.length; t += 1) {
          const e = O[t];
          q.has(e) || (q.add(e), e());
        }
        O.length = 0;
      } while (x.length);
      for (; L.length; ) L.pop()();
      (M = !1), (V = !1), q.clear();
    }
  }
  function j(t) {
    if (null !== t.fragment) {
      t.update(), i(t.before_update);
      const e = t.dirty;
      (t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(F);
    }
  }
  const B = new Set();
  let z;
  function K() {
    z = { r: 0, c: [], p: z };
  }
  function $() {
    z.r || i(z.c), (z = z.p);
  }
  function G(t, e) {
    t && t.i && (B.delete(t), t.i(e));
  }
  function H(t, e, n, r) {
    if (t && t.o) {
      if (B.has(t)) return;
      B.add(t),
        z.c.push(() => {
          B.delete(t), r && (n && t.d(1), r());
        }),
        t.o(e);
    }
  }
  function Q(t, e) {
    const n = (e.token = {});
    function r(t, r, i, o) {
      if (e.token !== n) return;
      e.resolved = o;
      let s = e.ctx;
      void 0 !== i && ((s = s.slice()), (s[i] = o));
      const a = t && (e.current = t)(s);
      let u = !1;
      e.block &&
        (e.blocks
          ? e.blocks.forEach((t, n) => {
              n !== r &&
                t &&
                (K(),
                H(t, 1, 1, () => {
                  e.blocks[n] === t && (e.blocks[n] = null);
                }),
                $());
            })
          : e.block.d(1),
        a.c(),
        G(a, 1),
        a.m(e.mount(), e.anchor),
        (u = !0)),
        (e.block = a),
        e.blocks && (e.blocks[r] = a),
        u && U();
    }
    if ((i = t) && "object" == typeof i && "function" == typeof i.then) {
      const n = C();
      if (
        (t.then(
          (t) => {
            D(n), r(e.then, 1, e.value, t), D(null);
          },
          (t) => {
            if ((D(n), r(e.catch, 2, e.error, t), D(null), !e.hasCatch))
              throw t;
          }
        ),
        e.current !== e.pending)
      )
        return r(e.pending, 0), !0;
    } else {
      if (e.current !== e.then) return r(e.then, 1, e.value, t), !0;
      e.resolved = t;
    }
    var i;
  }
  function W(t, e, n) {
    const r = e.slice(),
      { resolved: i } = t;
    t.current === t.then && (r[t.value] = i),
      t.current === t.catch && (r[t.error] = i),
      t.block.p(r, n);
  }
  function Y(t, e) {
    const n = {},
      r = {},
      i = { $$scope: 1 };
    let o = t.length;
    for (; o--; ) {
      const s = t[o],
        a = e[o];
      if (a) {
        for (const t in s) t in a || (r[t] = 1);
        for (const t in a) i[t] || ((n[t] = a[t]), (i[t] = 1));
        t[o] = a;
      } else for (const t in s) i[t] = 1;
    }
    for (const t in r) t in n || (n[t] = void 0);
    return n;
  }
  function X(t) {
    return "object" == typeof t && null !== t ? t : {};
  }
  function J(t) {
    t && t.c();
  }
  function Z(t, e, r, s) {
    const { fragment: a, on_mount: u, on_destroy: c, after_update: l } = t.$$;
    a && a.m(e, r),
      s ||
        F(() => {
          const e = u.map(n).filter(o);
          c ? c.push(...e) : i(e), (t.$$.on_mount = []);
        }),
      l.forEach(F);
  }
  function tt(t, e) {
    const n = t.$$;
    null !== n.fragment &&
      (i(n.on_destroy),
      n.fragment && n.fragment.d(e),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function et(t, e) {
    -1 === t.$$.dirty[0] &&
      (x.push(t), M || ((M = !0), P.then(U)), t.$$.dirty.fill(0)),
      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function nt(e, n, o, s, a, c, l, h = [-1]) {
    const f = u;
    D(e);
    const d = (e.$$ = {
      fragment: null,
      ctx: null,
      props: c,
      update: t,
      not_equal: a,
      bound: r(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(f ? f.$$.context : n.context || []),
      callbacks: r(),
      dirty: h,
      skip_bound: !1,
      root: n.target || f.$$.root,
    });
    l && l(d.root);
    let v = !1;
    if (
      ((d.ctx = o
        ? o(e, n.props || {}, (t, n, ...r) => {
            const i = r.length ? r[0] : n;
            return (
              d.ctx &&
                a(d.ctx[t], (d.ctx[t] = i)) &&
                (!d.skip_bound && d.bound[t] && d.bound[t](i), v && et(e, t)),
              n
            );
          })
        : []),
      d.update(),
      (v = !0),
      i(d.before_update),
      (d.fragment = !!s && s(d.ctx)),
      n.target)
    ) {
      if (n.hydrate) {
        const t = (function (t) {
          return Array.from(t.childNodes);
        })(n.target);
        d.fragment && d.fragment.l(t), t.forEach(p);
      } else d.fragment && d.fragment.c();
      n.intro && G(e.$$.fragment),
        Z(e, n.target, n.anchor, n.customElement),
        U();
    }
    D(f);
  }
  class rt {
    $destroy() {
      tt(this, 1), (this.$destroy = t);
    }
    $on(t, e) {
      const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return (
        n.push(e),
        () => {
          const t = n.indexOf(e);
          -1 !== t && n.splice(t, 1);
        }
      );
    }
    $set(t) {
      var e;
      this.$$set &&
        ((e = t), 0 !== Object.keys(e).length) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  }
  function it(e) {
    let n;
    return {
      c() {
        (n = g("div")),
          I(n, "class", "circle svelte-14upwad"),
          _(n, "--size", e[3] + e[1]),
          _(n, "--color", e[0]),
          _(n, "--duration", e[2]);
      },
      m(t, e) {
        d(t, n, e);
      },
      p(t, [e]) {
        10 & e && _(n, "--size", t[3] + t[1]),
          1 & e && _(n, "--color", t[0]),
          4 & e && _(n, "--duration", t[2]);
      },
      i: t,
      o: t,
      d(t) {
        t && p(n);
      },
    };
  }
  function ot(t, e, n) {
    let { color: r = "#FF3E00" } = e,
      { unit: i = "px" } = e,
      { duration: o = "0.75s" } = e,
      { size: s = "60" } = e;
    return (
      (t.$$set = (t) => {
        "color" in t && n(0, (r = t.color)),
          "unit" in t && n(1, (i = t.unit)),
          "duration" in t && n(2, (o = t.duration)),
          "size" in t && n(3, (s = t.size));
      }),
      [r, i, o, s]
    );
  }
  class st extends rt {
    constructor(t) {
      super(),
        nt(this, t, ot, it, s, { color: 0, unit: 1, duration: 2, size: 3 });
    }
  }
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ var at =
    function (t, e) {
      return (at =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(t, e);
    };
  function ut(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError(
        "Class extends value " + String(e) + " is not a constructor or null"
      );
    function n() {
      this.constructor = t;
    }
    at(t, e),
      (t.prototype =
        null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
  }
  var ct = function () {
    return (ct =
      Object.assign ||
      function (t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in (e = arguments[n]))
            Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t;
      }).apply(this, arguments);
  };
  function lt(t, e, n, r) {
    return new (n || (n = Promise))(function (i, o) {
      function s(t) {
        try {
          u(r.next(t));
        } catch (t) {
          o(t);
        }
      }
      function a(t) {
        try {
          u(r.throw(t));
        } catch (t) {
          o(t);
        }
      }
      function u(t) {
        var e;
        t.done
          ? i(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                })).then(s, a);
      }
      u((r = r.apply(t, e || [])).next());
    });
  }
  function ht(t, e) {
    var n,
      r,
      i,
      o,
      s = {
        label: 0,
        sent: function () {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (o = { next: a(0), throw: a(1), return: a(2) }),
      "function" == typeof Symbol &&
        (o[Symbol.iterator] = function () {
          return this;
        }),
      o
    );
    function a(o) {
      return function (a) {
        return (function (o) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; s; )
            try {
              if (
                ((n = 1),
                r &&
                  (i =
                    2 & o[0]
                      ? r.return
                      : o[0]
                      ? r.throw || ((i = r.return) && i.call(r), 0)
                      : r.next) &&
                  !(i = i.call(r, o[1])).done)
              )
                return i;
              switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                case 0:
                case 1:
                  i = o;
                  break;
                case 4:
                  return s.label++, { value: o[1], done: !1 };
                case 5:
                  s.label++, (r = o[1]), (o = [0]);
                  continue;
                case 7:
                  (o = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (
                    !((i = s.trys),
                    (i = i.length > 0 && i[i.length - 1]) ||
                      (6 !== o[0] && 2 !== o[0]))
                  ) {
                    s = 0;
                    continue;
                  }
                  if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                    s.label = o[1];
                    break;
                  }
                  if (6 === o[0] && s.label < i[1]) {
                    (s.label = i[1]), (i = o);
                    break;
                  }
                  if (i && s.label < i[2]) {
                    (s.label = i[2]), s.ops.push(o);
                    break;
                  }
                  i[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              o = e.call(t, s);
            } catch (t) {
              (o = [6, t]), (r = 0);
            } finally {
              n = i = 0;
            }
          if (5 & o[0]) throw o[1];
          return { value: o[0] ? o[1] : void 0, done: !0 };
        })([o, a]);
      };
    }
  }
  function ft(t) {
    var e = "function" == typeof Symbol && Symbol.iterator,
      n = e && t[e],
      r = 0;
    if (n) return n.call(t);
    if (t && "number" == typeof t.length)
      return {
        next: function () {
          return (
            t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? "Object is not iterable." : "Symbol.iterator is not defined."
    );
  }
  function dt(t, e) {
    var n = "function" == typeof Symbol && t[Symbol.iterator];
    if (!n) return t;
    var r,
      i,
      o = n.call(t),
      s = [];
    try {
      for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
        s.push(r.value);
    } catch (t) {
      i = { error: t };
    } finally {
      try {
        r && !r.done && (n = o.return) && n.call(o);
      } finally {
        if (i) throw i.error;
      }
    }
    return s;
  }
  function pt(t, e, n) {
    if (n || 2 === arguments.length)
      for (var r, i = 0, o = e.length; i < o; i++)
        (!r && i in e) ||
          (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]));
    return t.concat(r || e);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var vt = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: "function" == typeof atob,
    encodeByteArray: function (t, e) {
      if (!Array.isArray(t))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      for (
        var n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
          r = [],
          i = 0;
        i < t.length;
        i += 3
      ) {
        var o = t[i],
          s = i + 1 < t.length,
          a = s ? t[i + 1] : 0,
          u = i + 2 < t.length,
          c = u ? t[i + 2] : 0,
          l = o >> 2,
          h = ((3 & o) << 4) | (a >> 4),
          f = ((15 & a) << 2) | (c >> 6),
          d = 63 & c;
        u || ((d = 64), s || (f = 64)), r.push(n[l], n[h], n[f], n[d]);
      }
      return r.join("");
    },
    encodeString: function (t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? btoa(t)
        : this.encodeByteArray(
            (function (t) {
              for (var e = [], n = 0, r = 0; r < t.length; r++) {
                var i = t.charCodeAt(r);
                i < 128
                  ? (e[n++] = i)
                  : i < 2048
                  ? ((e[n++] = (i >> 6) | 192), (e[n++] = (63 & i) | 128))
                  : 55296 == (64512 & i) &&
                    r + 1 < t.length &&
                    56320 == (64512 & t.charCodeAt(r + 1))
                  ? ((i =
                      65536 + ((1023 & i) << 10) + (1023 & t.charCodeAt(++r))),
                    (e[n++] = (i >> 18) | 240),
                    (e[n++] = ((i >> 12) & 63) | 128),
                    (e[n++] = ((i >> 6) & 63) | 128),
                    (e[n++] = (63 & i) | 128))
                  : ((e[n++] = (i >> 12) | 224),
                    (e[n++] = ((i >> 6) & 63) | 128),
                    (e[n++] = (63 & i) | 128));
              }
              return e;
            })(t),
            e
          );
    },
    decodeString: function (t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(t)
        : (function (t) {
            for (var e = [], n = 0, r = 0; n < t.length; ) {
              var i = t[n++];
              if (i < 128) e[r++] = String.fromCharCode(i);
              else if (i > 191 && i < 224) {
                var o = t[n++];
                e[r++] = String.fromCharCode(((31 & i) << 6) | (63 & o));
              } else if (i > 239 && i < 365) {
                var s =
                  (((7 & i) << 18) |
                    ((63 & (o = t[n++])) << 12) |
                    ((63 & (a = t[n++])) << 6) |
                    (63 & t[n++])) -
                  65536;
                (e[r++] = String.fromCharCode(55296 + (s >> 10))),
                  (e[r++] = String.fromCharCode(56320 + (1023 & s)));
              } else {
                o = t[n++];
                var a = t[n++];
                e[r++] = String.fromCharCode(
                  ((15 & i) << 12) | ((63 & o) << 6) | (63 & a)
                );
              }
            }
            return e.join("");
          })(this.decodeStringToByteArray(t, e));
    },
    decodeStringToByteArray: function (t, e) {
      this.init_();
      for (
        var n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
          r = [],
          i = 0;
        i < t.length;

      ) {
        var o = n[t.charAt(i++)],
          s = i < t.length ? n[t.charAt(i)] : 0,
          a = ++i < t.length ? n[t.charAt(i)] : 64,
          u = ++i < t.length ? n[t.charAt(i)] : 64;
        if ((++i, null == o || null == s || null == a || null == u))
          throw Error();
        var c = (o << 2) | (s >> 4);
        if ((r.push(c), 64 !== a)) {
          var l = ((s << 4) & 240) | (a >> 2);
          if ((r.push(l), 64 !== u)) {
            var h = ((a << 6) & 192) | u;
            r.push(h);
          }
        }
      }
      return r;
    },
    init_: function () {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (var t = 0; t < this.ENCODED_VALS.length; t++)
          (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
            (this.charToByteMap_[this.byteToCharMap_[t]] = t),
            (this.byteToCharMapWebSafe_[t] =
              this.ENCODED_VALS_WEBSAFE.charAt(t)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
            t >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t));
      }
    },
  };
  function gt(t, e) {
    if (!(e instanceof Object)) return e;
    switch (e.constructor) {
      case Date:
        return new Date(e.getTime());
      case Object:
        void 0 === t && (t = {});
        break;
      case Array:
        t = [];
        break;
      default:
        return e;
    }
    for (var n in e)
      e.hasOwnProperty(n) && "__proto__" !== n && (t[n] = gt(t[n], e[n]));
    return t;
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var yt = (function () {
    function t() {
      var t = this;
      (this.reject = function () {}),
        (this.resolve = function () {}),
        (this.promise = new Promise(function (e, n) {
          (t.resolve = e), (t.reject = n);
        }));
    }
    return (
      (t.prototype.wrapCallback = function (t) {
        var e = this;
        return function (n, r) {
          n ? e.reject(n) : e.resolve(r),
            "function" == typeof t &&
              (e.promise.catch(function () {}),
              1 === t.length ? t(n) : t(n, r));
        };
      }),
      t
    );
  })();
  /**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  function mt() {
    return "undefined" != typeof navigator &&
      "string" == typeof navigator.userAgent
      ? navigator.userAgent
      : "";
  }
  function bt() {
    try {
      return (
        "[object process]" === Object.prototype.toString.call(global.process)
      );
    } catch (t) {
      return !1;
    }
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var wt = (function (t) {
      function e(n, r, i) {
        var o = t.call(this, r) || this;
        return (
          (o.code = n),
          (o.customData = i),
          (o.name = "FirebaseError"),
          Object.setPrototypeOf(o, e.prototype),
          Error.captureStackTrace &&
            Error.captureStackTrace(o, Et.prototype.create),
          o
        );
      }
      return ut(e, t), e;
    })(Error),
    Et = (function () {
      function t(t, e, n) {
        (this.service = t), (this.serviceName = e), (this.errors = n);
      }
      return (
        (t.prototype.create = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          var r = e[0] || {},
            i = this.service + "/" + t,
            o = this.errors[t],
            s = o ? It(o, r) : "Error",
            a = this.serviceName + ": " + s + " (" + i + ").",
            u = new wt(i, a, r);
          return u;
        }),
        t
      );
    })();
  function It(t, e) {
    return t.replace(Tt, function (t, n) {
      var r = e[n];
      return null != r ? String(r) : "<" + n + "?>";
    });
  }
  var Tt = /\{\$([^}]+)}/g;
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function _t(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }
  function St(t, e) {
    var n = new At(t, e);
    return n.subscribe.bind(n);
  }
  var At = (function () {
    function t(t, e) {
      var n = this;
      (this.observers = []),
        (this.unsubscribes = []),
        (this.observerCount = 0),
        (this.task = Promise.resolve()),
        (this.finalized = !1),
        (this.onNoObservers = e),
        this.task
          .then(function () {
            t(n);
          })
          .catch(function (t) {
            n.error(t);
          });
    }
    return (
      (t.prototype.next = function (t) {
        this.forEachObserver(function (e) {
          e.next(t);
        });
      }),
      (t.prototype.error = function (t) {
        this.forEachObserver(function (e) {
          e.error(t);
        }),
          this.close(t);
      }),
      (t.prototype.complete = function () {
        this.forEachObserver(function (t) {
          t.complete();
        }),
          this.close();
      }),
      (t.prototype.subscribe = function (t, e, n) {
        var r,
          i = this;
        if (void 0 === t && void 0 === e && void 0 === n)
          throw new Error("Missing Observer.");
        void 0 ===
          (r = (function (t, e) {
            if ("object" != typeof t || null === t) return !1;
            for (var n = 0, r = e; n < r.length; n++) {
              var i = r[n];
              if (i in t && "function" == typeof t[i]) return !0;
            }
            return !1;
          })(t, ["next", "error", "complete"])
            ? t
            : { next: t, error: e, complete: n }).next && (r.next = kt),
          void 0 === r.error && (r.error = kt),
          void 0 === r.complete && (r.complete = kt);
        var o = this.unsubscribeOne.bind(this, this.observers.length);
        return (
          this.finalized &&
            this.task.then(function () {
              try {
                i.finalError ? r.error(i.finalError) : r.complete();
              } catch (t) {}
            }),
          this.observers.push(r),
          o
        );
      }),
      (t.prototype.unsubscribeOne = function (t) {
        void 0 !== this.observers &&
          void 0 !== this.observers[t] &&
          (delete this.observers[t],
          (this.observerCount -= 1),
          0 === this.observerCount &&
            void 0 !== this.onNoObservers &&
            this.onNoObservers(this));
      }),
      (t.prototype.forEachObserver = function (t) {
        if (!this.finalized)
          for (var e = 0; e < this.observers.length; e++) this.sendOne(e, t);
      }),
      (t.prototype.sendOne = function (t, e) {
        var n = this;
        this.task.then(function () {
          if (void 0 !== n.observers && void 0 !== n.observers[t])
            try {
              e(n.observers[t]);
            } catch (t) {
              "undefined" != typeof console &&
                console.error &&
                console.error(t);
            }
        });
      }),
      (t.prototype.close = function (t) {
        var e = this;
        this.finalized ||
          ((this.finalized = !0),
          void 0 !== t && (this.finalError = t),
          this.task.then(function () {
            (e.observers = void 0), (e.onNoObservers = void 0);
          }));
      }),
      t
    );
  })();
  function kt() {}
  /**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Nt(t) {
    return t && t._delegate ? t._delegate : t;
  }
  var Dt = (function () {
      function t(t, e, n) {
        (this.name = t),
          (this.instanceFactory = e),
          (this.type = n),
          (this.multipleInstances = !1),
          (this.serviceProps = {}),
          (this.instantiationMode = "LAZY"),
          (this.onInstanceCreated = null);
      }
      return (
        (t.prototype.setInstantiationMode = function (t) {
          return (this.instantiationMode = t), this;
        }),
        (t.prototype.setMultipleInstances = function (t) {
          return (this.multipleInstances = t), this;
        }),
        (t.prototype.setServiceProps = function (t) {
          return (this.serviceProps = t), this;
        }),
        (t.prototype.setInstanceCreatedCallback = function (t) {
          return (this.onInstanceCreated = t), this;
        }),
        t
      );
    })(),
    Ct = "[DEFAULT]",
    xt = (function () {
      function t(t, e) {
        (this.name = t),
          (this.container = e),
          (this.component = null),
          (this.instances = new Map()),
          (this.instancesDeferred = new Map()),
          (this.onInitCallbacks = new Map());
      }
      return (
        (t.prototype.get = function (t) {
          var e = this.normalizeInstanceIdentifier(t);
          if (!this.instancesDeferred.has(e)) {
            var n = new yt();
            if (
              (this.instancesDeferred.set(e, n),
              this.isInitialized(e) || this.shouldAutoInitialize())
            )
              try {
                var r = this.getOrInitializeService({ instanceIdentifier: e });
                r && n.resolve(r);
              } catch (t) {}
          }
          return this.instancesDeferred.get(e).promise;
        }),
        (t.prototype.getImmediate = function (t) {
          var e,
            n = this.normalizeInstanceIdentifier(
              null == t ? void 0 : t.identifier
            ),
            r =
              null !== (e = null == t ? void 0 : t.optional) &&
              void 0 !== e &&
              e;
          if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
            if (r) return null;
            throw Error("Service " + this.name + " is not available");
          }
          try {
            return this.getOrInitializeService({ instanceIdentifier: n });
          } catch (t) {
            if (r) return null;
            throw t;
          }
        }),
        (t.prototype.getComponent = function () {
          return this.component;
        }),
        (t.prototype.setComponent = function (t) {
          var e, n;
          if (t.name !== this.name)
            throw Error(
              "Mismatching Component " +
                t.name +
                " for Provider " +
                this.name +
                "."
            );
          if (this.component)
            throw Error(
              "Component for " + this.name + " has already been provided"
            );
          if (((this.component = t), this.shouldAutoInitialize())) {
            if (
              (function (t) {
                return "EAGER" === t.instantiationMode;
              })(
                /**
                 * @license
                 * Copyright 2019 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */ t
              )
            )
              try {
                this.getOrInitializeService({ instanceIdentifier: Ct });
              } catch (t) {}
            try {
              for (
                var r = ft(this.instancesDeferred.entries()), i = r.next();
                !i.done;
                i = r.next()
              ) {
                var o = dt(i.value, 2),
                  s = o[0],
                  a = o[1],
                  u = this.normalizeInstanceIdentifier(s);
                try {
                  var c = this.getOrInitializeService({
                    instanceIdentifier: u,
                  });
                  a.resolve(c);
                } catch (t) {}
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                i && !i.done && (n = r.return) && n.call(r);
              } finally {
                if (e) throw e.error;
              }
            }
          }
        }),
        (t.prototype.clearInstance = function (t) {
          void 0 === t && (t = Ct),
            this.instancesDeferred.delete(t),
            this.instances.delete(t);
        }),
        (t.prototype.delete = function () {
          return lt(this, void 0, void 0, function () {
            var t;
            return ht(this, function (e) {
              switch (e.label) {
                case 0:
                  return (
                    (t = Array.from(this.instances.values())),
                    [
                      4,
                      Promise.all(
                        pt(
                          pt(
                            [],
                            dt(
                              t
                                .filter(function (t) {
                                  return "INTERNAL" in t;
                                })
                                .map(function (t) {
                                  return t.INTERNAL.delete();
                                })
                            )
                          ),
                          dt(
                            t
                              .filter(function (t) {
                                return "_delete" in t;
                              })
                              .map(function (t) {
                                return t._delete();
                              })
                          )
                        )
                      ),
                    ]
                  );
                case 1:
                  return e.sent(), [2];
              }
            });
          });
        }),
        (t.prototype.isComponentSet = function () {
          return null != this.component;
        }),
        (t.prototype.isInitialized = function (t) {
          return void 0 === t && (t = Ct), this.instances.has(t);
        }),
        (t.prototype.initialize = function (t) {
          var e, n;
          void 0 === t && (t = {});
          var r = t.options,
            i = void 0 === r ? {} : r,
            o = this.normalizeInstanceIdentifier(t.instanceIdentifier);
          if (this.isInitialized(o))
            throw Error(this.name + "(" + o + ") has already been initialized");
          if (!this.isComponentSet())
            throw Error(
              "Component " + this.name + " has not been registered yet"
            );
          var s = this.getOrInitializeService({
            instanceIdentifier: o,
            options: i,
          });
          try {
            for (
              var a = ft(this.instancesDeferred.entries()), u = a.next();
              !u.done;
              u = a.next()
            ) {
              var c = dt(u.value, 2),
                l = c[0],
                h = c[1];
              o === this.normalizeInstanceIdentifier(l) && h.resolve(s);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              u && !u.done && (n = a.return) && n.call(a);
            } finally {
              if (e) throw e.error;
            }
          }
          return s;
        }),
        (t.prototype.onInit = function (t, e) {
          var n,
            r = this.normalizeInstanceIdentifier(e),
            i =
              null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n
                ? n
                : new Set();
          i.add(t), this.onInitCallbacks.set(r, i);
          var o = this.instances.get(r);
          return (
            o && t(o, r),
            function () {
              i.delete(t);
            }
          );
        }),
        (t.prototype.invokeOnInitCallbacks = function (t, e) {
          var n,
            r,
            i = this.onInitCallbacks.get(e);
          if (i)
            try {
              for (var o = ft(i), s = o.next(); !s.done; s = o.next()) {
                var a = s.value;
                try {
                  a(t, e);
                } catch (t) {}
              }
            } catch (t) {
              n = { error: t };
            } finally {
              try {
                s && !s.done && (r = o.return) && r.call(o);
              } finally {
                if (n) throw n.error;
              }
            }
        }),
        (t.prototype.getOrInitializeService = function (t) {
          var e,
            n = t.instanceIdentifier,
            r = t.options,
            i = void 0 === r ? {} : r,
            o = this.instances.get(n);
          if (
            !o &&
            this.component &&
            ((o = this.component.instanceFactory(this.container, {
              instanceIdentifier: ((e = n), e === Ct ? void 0 : e),
              options: i,
            })),
            this.instances.set(n, o),
            this.invokeOnInitCallbacks(o, n),
            this.component.onInstanceCreated)
          )
            try {
              this.component.onInstanceCreated(this.container, n, o);
            } catch (t) {}
          return o || null;
        }),
        (t.prototype.normalizeInstanceIdentifier = function (t) {
          return (
            void 0 === t && (t = Ct),
            this.component ? (this.component.multipleInstances ? t : Ct) : t
          );
        }),
        (t.prototype.shouldAutoInitialize = function () {
          return (
            !!this.component && "EXPLICIT" !== this.component.instantiationMode
          );
        }),
        t
      );
    })();
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Rt,
    Ot = (function () {
      function t(t) {
        (this.name = t), (this.providers = new Map());
      }
      return (
        (t.prototype.addComponent = function (t) {
          var e = this.getProvider(t.name);
          if (e.isComponentSet())
            throw new Error(
              "Component " +
                t.name +
                " has already been registered with " +
                this.name
            );
          e.setComponent(t);
        }),
        (t.prototype.addOrOverwriteComponent = function (t) {
          this.getProvider(t.name).isComponentSet() &&
            this.providers.delete(t.name),
            this.addComponent(t);
        }),
        (t.prototype.getProvider = function (t) {
          if (this.providers.has(t)) return this.providers.get(t);
          var e = new xt(t, this);
          return this.providers.set(t, e), e;
        }),
        (t.prototype.getProviders = function () {
          return Array.from(this.providers.values());
        }),
        t
      );
    })();
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */ function Lt() {
    for (var t = 0, e = 0, n = arguments.length; e < n; e++)
      t += arguments[e].length;
    var r = Array(t),
      i = 0;
    for (e = 0; e < n; e++)
      for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++)
        r[i] = o[s];
    return r;
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Pt,
    Mt = [];
  !(function (t) {
    (t[(t.DEBUG = 0)] = "DEBUG"),
      (t[(t.VERBOSE = 1)] = "VERBOSE"),
      (t[(t.INFO = 2)] = "INFO"),
      (t[(t.WARN = 3)] = "WARN"),
      (t[(t.ERROR = 4)] = "ERROR"),
      (t[(t.SILENT = 5)] = "SILENT");
  })(Pt || (Pt = {}));
  var Ft,
    Vt = {
      debug: Pt.DEBUG,
      verbose: Pt.VERBOSE,
      info: Pt.INFO,
      warn: Pt.WARN,
      error: Pt.ERROR,
      silent: Pt.SILENT,
    },
    qt = Pt.INFO,
    Ut =
      (((Rt = {})[Pt.DEBUG] = "log"),
      (Rt[Pt.VERBOSE] = "log"),
      (Rt[Pt.INFO] = "info"),
      (Rt[Pt.WARN] = "warn"),
      (Rt[Pt.ERROR] = "error"),
      Rt),
    jt = function (t, e) {
      for (var n = [], r = 2; r < arguments.length; r++)
        n[r - 2] = arguments[r];
      if (!(e < t.logLevel)) {
        var i = new Date().toISOString(),
          o = Ut[e];
        if (!o)
          throw new Error(
            "Attempted to log a message with an invalid logType (value: " +
              e +
              ")"
          );
        console[o].apply(console, Lt(["[" + i + "]  " + t.name + ":"], n));
      }
    },
    Bt = (function () {
      function t(t) {
        (this.name = t),
          (this._logLevel = qt),
          (this._logHandler = jt),
          (this._userLogHandler = null),
          Mt.push(this);
      }
      return (
        Object.defineProperty(t.prototype, "logLevel", {
          get: function () {
            return this._logLevel;
          },
          set: function (t) {
            if (!(t in Pt))
              throw new TypeError(
                'Invalid value "' + t + '" assigned to `logLevel`'
              );
            this._logLevel = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.setLogLevel = function (t) {
          this._logLevel = "string" == typeof t ? Vt[t] : t;
        }),
        Object.defineProperty(t.prototype, "logHandler", {
          get: function () {
            return this._logHandler;
          },
          set: function (t) {
            if ("function" != typeof t)
              throw new TypeError(
                "Value assigned to `logHandler` must be a function"
              );
            this._logHandler = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "userLogHandler", {
          get: function () {
            return this._userLogHandler;
          },
          set: function (t) {
            this._userLogHandler = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.debug = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          this._userLogHandler &&
            this._userLogHandler.apply(this, Lt([this, Pt.DEBUG], t)),
            this._logHandler.apply(this, Lt([this, Pt.DEBUG], t));
        }),
        (t.prototype.log = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          this._userLogHandler &&
            this._userLogHandler.apply(this, Lt([this, Pt.VERBOSE], t)),
            this._logHandler.apply(this, Lt([this, Pt.VERBOSE], t));
        }),
        (t.prototype.info = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          this._userLogHandler &&
            this._userLogHandler.apply(this, Lt([this, Pt.INFO], t)),
            this._logHandler.apply(this, Lt([this, Pt.INFO], t));
        }),
        (t.prototype.warn = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          this._userLogHandler &&
            this._userLogHandler.apply(this, Lt([this, Pt.WARN], t)),
            this._logHandler.apply(this, Lt([this, Pt.WARN], t));
        }),
        (t.prototype.error = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          this._userLogHandler &&
            this._userLogHandler.apply(this, Lt([this, Pt.ERROR], t)),
            this._logHandler.apply(this, Lt([this, Pt.ERROR], t));
        }),
        t
      );
    })();
  function zt(t) {
    Mt.forEach(function (e) {
      e.setLogLevel(t);
    });
  }
  var Kt,
    $t =
      (((Ft = {})["no-app"] =
        "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),
      (Ft["bad-app-name"] = "Illegal App name: '{$appName}"),
      (Ft["duplicate-app"] = "Firebase App named '{$appName}' already exists"),
      (Ft["app-deleted"] = "Firebase App named '{$appName}' already deleted"),
      (Ft["invalid-app-argument"] =
        "firebase.{$appName}() takes either no argument or a Firebase App instance."),
      (Ft["invalid-log-argument"] =
        "First argument to `onLog` must be null or a function."),
      Ft),
    Gt = new Et("app", "Firebase", $t),
    Ht = "@firebase/app",
    Qt = "[DEFAULT]",
    Wt =
      (((Kt = {})[Ht] = "fire-core"),
      (Kt["@firebase/analytics"] = "fire-analytics"),
      (Kt["@firebase/app-check"] = "fire-app-check"),
      (Kt["@firebase/auth"] = "fire-auth"),
      (Kt["@firebase/database"] = "fire-rtdb"),
      (Kt["@firebase/functions"] = "fire-fn"),
      (Kt["@firebase/installations"] = "fire-iid"),
      (Kt["@firebase/messaging"] = "fire-fcm"),
      (Kt["@firebase/performance"] = "fire-perf"),
      (Kt["@firebase/remote-config"] = "fire-rc"),
      (Kt["@firebase/storage"] = "fire-gcs"),
      (Kt["@firebase/firestore"] = "fire-fst"),
      (Kt["fire-js"] = "fire-js"),
      (Kt["firebase-wrapper"] = "fire-js-all"),
      Kt),
    Yt = new Bt("@firebase/app"),
    Xt = (function () {
      function t(t, e, n) {
        var r = this;
        (this.firebase_ = n),
          (this.isDeleted_ = !1),
          (this.name_ = e.name),
          (this.automaticDataCollectionEnabled_ =
            e.automaticDataCollectionEnabled || !1),
          (this.options_ = gt(void 0, t)),
          (this.container = new Ot(e.name)),
          this._addComponent(
            new Dt(
              "app",
              function () {
                return r;
              },
              "PUBLIC"
            )
          ),
          this.firebase_.INTERNAL.components.forEach(function (t) {
            return r._addComponent(t);
          });
      }
      return (
        Object.defineProperty(t.prototype, "automaticDataCollectionEnabled", {
          get: function () {
            return this.checkDestroyed_(), this.automaticDataCollectionEnabled_;
          },
          set: function (t) {
            this.checkDestroyed_(), (this.automaticDataCollectionEnabled_ = t);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "name", {
          get: function () {
            return this.checkDestroyed_(), this.name_;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "options", {
          get: function () {
            return this.checkDestroyed_(), this.options_;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.delete = function () {
          var t = this;
          return new Promise(function (e) {
            t.checkDestroyed_(), e();
          })
            .then(function () {
              return (
                t.firebase_.INTERNAL.removeApp(t.name_),
                Promise.all(
                  t.container.getProviders().map(function (t) {
                    return t.delete();
                  })
                )
              );
            })
            .then(function () {
              t.isDeleted_ = !0;
            });
        }),
        (t.prototype._getService = function (t, e) {
          var n;
          void 0 === e && (e = Qt), this.checkDestroyed_();
          var r = this.container.getProvider(t);
          return (
            r.isInitialized() ||
              "EXPLICIT" !==
                (null === (n = r.getComponent()) || void 0 === n
                  ? void 0
                  : n.instantiationMode) ||
              r.initialize(),
            r.getImmediate({ identifier: e })
          );
        }),
        (t.prototype._removeServiceInstance = function (t, e) {
          void 0 === e && (e = Qt),
            this.container.getProvider(t).clearInstance(e);
        }),
        (t.prototype._addComponent = function (t) {
          try {
            this.container.addComponent(t);
          } catch (e) {
            Yt.debug(
              "Component " +
                t.name +
                " failed to register with FirebaseApp " +
                this.name,
              e
            );
          }
        }),
        (t.prototype._addOrOverwriteComponent = function (t) {
          this.container.addOrOverwriteComponent(t);
        }),
        (t.prototype.toJSON = function () {
          return {
            name: this.name,
            automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
            options: this.options,
          };
        }),
        (t.prototype.checkDestroyed_ = function () {
          if (this.isDeleted_)
            throw Gt.create("app-deleted", { appName: this.name_ });
        }),
        t
      );
    })();
  (Xt.prototype.name && Xt.prototype.options) ||
    Xt.prototype.delete ||
    console.log("dc");
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  function Jt(t) {
    var e = {},
      n = new Map(),
      r = {
        __esModule: !0,
        initializeApp: function (n, i) {
          void 0 === i && (i = {});
          if ("object" != typeof i || null === i) {
            i = { name: i };
          }
          var o = i;
          void 0 === o.name && (o.name = Qt);
          var s = o.name;
          if ("string" != typeof s || !s)
            throw Gt.create("bad-app-name", { appName: String(s) });
          if (_t(e, s)) throw Gt.create("duplicate-app", { appName: s });
          var a = new t(n, o, r);
          return (e[s] = a), a;
        },
        app: i,
        registerVersion: function (t, e, n) {
          var r,
            i = null !== (r = Wt[t]) && void 0 !== r ? r : t;
          n && (i += "-" + n);
          var s = i.match(/\s|\//),
            a = e.match(/\s|\//);
          if (s || a) {
            var u = [
              'Unable to register library "' +
                i +
                '" with version "' +
                e +
                '":',
            ];
            return (
              s &&
                u.push(
                  'library name "' +
                    i +
                    '" contains illegal characters (whitespace or "/")'
                ),
              s && a && u.push("and"),
              a &&
                u.push(
                  'version name "' +
                    e +
                    '" contains illegal characters (whitespace or "/")'
                ),
              void Yt.warn(u.join(" "))
            );
          }
          o(
            new Dt(
              i + "-version",
              function () {
                return { library: i, version: e };
              },
              "VERSION"
            )
          );
        },
        setLogLevel: zt,
        onLog: function (t, e) {
          if (null !== t && "function" != typeof t)
            throw Gt.create("invalid-log-argument");
          !(function (t, e) {
            for (
              var n = function (n) {
                  var r = null;
                  e && e.level && (r = Vt[e.level]),
                    (n.userLogHandler =
                      null === t
                        ? null
                        : function (e, n) {
                            for (var i = [], o = 2; o < arguments.length; o++)
                              i[o - 2] = arguments[o];
                            var s = i
                              .map(function (t) {
                                if (null == t) return null;
                                if ("string" == typeof t) return t;
                                if (
                                  "number" == typeof t ||
                                  "boolean" == typeof t
                                )
                                  return t.toString();
                                if (t instanceof Error) return t.message;
                                try {
                                  return JSON.stringify(t);
                                } catch (t) {
                                  return null;
                                }
                              })
                              .filter(function (t) {
                                return t;
                              })
                              .join(" ");
                            n >= (null != r ? r : e.logLevel) &&
                              t({
                                level: Pt[n].toLowerCase(),
                                message: s,
                                args: i,
                                type: e.name,
                              });
                          });
                },
                r = 0,
                i = Mt;
              r < i.length;
              r++
            )
              n(i[r]);
          })(
            /**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */ t,
            e
          );
        },
        apps: null,
        SDK_VERSION: "8.7.0",
        INTERNAL: {
          registerComponent: o,
          removeApp: function (t) {
            delete e[t];
          },
          components: n,
          useAsService: function (t, e) {
            if ("serverAuth" === e) return null;
            return e;
          },
        },
      };
    function i(t) {
      if (!_t(e, (t = t || Qt))) throw Gt.create("no-app", { appName: t });
      return e[t];
    }
    function o(o) {
      var s = o.name;
      if (n.has(s))
        return (
          Yt.debug(
            "There were multiple attempts to register component " + s + "."
          ),
          "PUBLIC" === o.type ? r[s] : null
        );
      if ((n.set(s, o), "PUBLIC" === o.type)) {
        var a = function (t) {
          if ((void 0 === t && (t = i()), "function" != typeof t[s]))
            throw Gt.create("invalid-app-argument", { appName: s });
          return t[s]();
        };
        void 0 !== o.serviceProps && gt(a, o.serviceProps),
          (r[s] = a),
          (t.prototype[s] = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            var n = this._getService.bind(this, s);
            return n.apply(this, o.multipleInstances ? t : []);
          });
      }
      for (var u = 0, c = Object.keys(e); u < c.length; u++) {
        var l = c[u];
        e[l]._addComponent(o);
      }
      return "PUBLIC" === o.type ? r[s] : null;
    }
    return (
      (r.default = r),
      Object.defineProperty(r, "apps", {
        get: function () {
          return Object.keys(e).map(function (t) {
            return e[t];
          });
        },
      }),
      (i.App = t),
      r
    );
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Zt = (function t() {
      var e = Jt(Xt);
      return (
        (e.INTERNAL = ct(ct({}, e.INTERNAL), {
          createFirebaseNamespace: t,
          extendNamespace: function (t) {
            gt(e, t);
          },
          createSubscribe: St,
          ErrorFactory: Et,
          deepExtend: gt,
        })),
        e
      );
    })(),
    te = (function () {
      function t(t) {
        this.container = t;
      }
      return (
        (t.prototype.getPlatformInfoString = function () {
          return this.container
            .getProviders()
            .map(function (t) {
              if (
                (function (t) {
                  var e = t.getComponent();
                  return "VERSION" === (null == e ? void 0 : e.type);
                })(
                  /**
                   * @license
                   * Copyright 2019 Google LLC
                   *
                   * Licensed under the Apache License, Version 2.0 (the "License");
                   * you may not use this file except in compliance with the License.
                   * You may obtain a copy of the License at
                   *
                   *   http://www.apache.org/licenses/LICENSE-2.0
                   *
                   * Unless required by applicable law or agreed to in writing, software
                   * distributed under the License is distributed on an "AS IS" BASIS,
                   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                   * See the License for the specific language governing permissions and
                   * limitations under the License.
                   */ t
                )
              ) {
                var e = t.getImmediate();
                return e.library + "/" + e.version;
              }
              return null;
            })
            .filter(function (t) {
              return t;
            })
            .join(" ");
        }),
        t
      );
    })();
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  if (
    "object" == typeof self &&
    self.self === self &&
    void 0 !== self.firebase
  ) {
    Yt.warn(
      "\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  "
    );
    var ee = self.firebase.SDK_VERSION;
    ee &&
      ee.indexOf("LITE") >= 0 &&
      Yt.warn(
        "\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    "
      );
  }
  var ne = Zt.initializeApp;
  Zt.initializeApp = function () {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return (
      bt() &&
        Yt.warn(
          '\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '
        ),
      ne.apply(void 0, t)
    );
  };
  var re = Zt;
  !(function (t, e) {
    t.INTERNAL.registerComponent(
      new Dt(
        "platform-logger",
        function (t) {
          return new te(t);
        },
        "PRIVATE"
      )
    ),
      t.registerVersion(Ht, "0.6.28", e),
      t.registerVersion("fire-js", "");
  })(re);
  var ie = "8.8.0";
  /**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  re.registerVersion("firebase", ie, "app"), (re.SDK_VERSION = ie);
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
  var oe = function (t, e) {
    return (oe =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      })(t, e);
  };
  function se(t) {
    var e = "function" == typeof Symbol && Symbol.iterator,
      n = e && t[e],
      r = 0;
    if (n) return n.call(t);
    if (t && "number" == typeof t.length)
      return {
        next: function () {
          return (
            t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? "Object is not iterable." : "Symbol.iterator is not defined."
    );
  }
  var ae,
    ue =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
    ce = ce || {},
    le = ue || self;
  function he() {}
  function fe(t) {
    var e = typeof t;
    return (
      "array" ==
        (e =
          "object" != e ? e : t ? (Array.isArray(t) ? "array" : e) : "null") ||
      ("object" == e && "number" == typeof t.length)
    );
  }
  function de(t) {
    var e = typeof t;
    return ("object" == e && null != t) || "function" == e;
  }
  var pe = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
    ve = 0;
  function ge(t, e, n) {
    return t.call.apply(t.bind, arguments);
  }
  function ye(t, e, n) {
    if (!t) throw Error();
    if (2 < arguments.length) {
      var r = Array.prototype.slice.call(arguments, 2);
      return function () {
        var n = Array.prototype.slice.call(arguments);
        return Array.prototype.unshift.apply(n, r), t.apply(e, n);
      };
    }
    return function () {
      return t.apply(e, arguments);
    };
  }
  function me(t, e, n) {
    return (me =
      Function.prototype.bind &&
      -1 != Function.prototype.bind.toString().indexOf("native code")
        ? ge
        : ye).apply(null, arguments);
  }
  function be(t, e) {
    var n = Array.prototype.slice.call(arguments, 1);
    return function () {
      var e = n.slice();
      return e.push.apply(e, arguments), t.apply(this, e);
    };
  }
  function we(t, e) {
    function n() {}
    (n.prototype = e.prototype),
      (t.Z = e.prototype),
      (t.prototype = new n()),
      (t.prototype.constructor = t),
      (t.Vb = function (t, n, r) {
        for (
          var i = Array(arguments.length - 2), o = 2;
          o < arguments.length;
          o++
        )
          i[o - 2] = arguments[o];
        return e.prototype[n].apply(t, i);
      });
  }
  function Ee() {
    (this.s = this.s), (this.o = this.o);
  }
  var Ie = {};
  (Ee.prototype.s = !1),
    (Ee.prototype.na = function () {
      if (!this.s && ((this.s = !0), this.M(), 0)) {
        var t = (function (t) {
          return (
            (Object.prototype.hasOwnProperty.call(t, pe) && t[pe]) ||
            (t[pe] = ++ve)
          );
        })(this);
        delete Ie[t];
      }
    }),
    (Ee.prototype.M = function () {
      if (this.o) for (; this.o.length; ) this.o.shift()();
    });
  var Te = Array.prototype.indexOf
      ? function (t, e) {
          return Array.prototype.indexOf.call(t, e, void 0);
        }
      : function (t, e) {
          if ("string" == typeof t)
            return "string" != typeof e || 1 != e.length ? -1 : t.indexOf(e, 0);
          for (var n = 0; n < t.length; n++) if (n in t && t[n] === e) return n;
          return -1;
        },
    _e = Array.prototype.forEach
      ? function (t, e, n) {
          Array.prototype.forEach.call(t, e, n);
        }
      : function (t, e, n) {
          for (
            var r = t.length, i = "string" == typeof t ? t.split("") : t, o = 0;
            o < r;
            o++
          )
            o in i && e.call(n, i[o], o, t);
        };
  function Se(t) {
    return Array.prototype.concat.apply([], arguments);
  }
  function Ae(t) {
    var e = t.length;
    if (0 < e) {
      for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r];
      return n;
    }
    return [];
  }
  function ke(t) {
    return /^[\s\xa0]*$/.test(t);
  }
  var Ne,
    De = String.prototype.trim
      ? function (t) {
          return t.trim();
        }
      : function (t) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
        };
  function Ce(t, e) {
    return -1 != t.indexOf(e);
  }
  function xe(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
  }
  t: {
    var Re = le.navigator;
    if (Re) {
      var Oe = Re.userAgent;
      if (Oe) {
        Ne = Oe;
        break t;
      }
    }
    Ne = "";
  }
  function Le(t, e, n) {
    for (var r in t) e.call(n, t[r], r, t);
  }
  function Pe(t) {
    var e = {};
    for (var n in t) e[n] = t[n];
    return e;
  }
  var Me =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " "
    );
  function Fe(t, e) {
    for (var n, r, i = 1; i < arguments.length; i++) {
      for (n in (r = arguments[i])) t[n] = r[n];
      for (var o = 0; o < Me.length; o++)
        (n = Me[o]),
          Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
  }
  function Ve(t) {
    return Ve[" "](t), t;
  }
  Ve[" "] = he;
  var qe,
    Ue,
    je = Ce(Ne, "Opera"),
    Be = Ce(Ne, "Trident") || Ce(Ne, "MSIE"),
    ze = Ce(Ne, "Edge"),
    Ke = ze || Be,
    $e =
      Ce(Ne, "Gecko") &&
      !(Ce(Ne.toLowerCase(), "webkit") && !Ce(Ne, "Edge")) &&
      !(Ce(Ne, "Trident") || Ce(Ne, "MSIE")) &&
      !Ce(Ne, "Edge"),
    Ge = Ce(Ne.toLowerCase(), "webkit") && !Ce(Ne, "Edge");
  function He() {
    var t = le.document;
    return t ? t.documentMode : void 0;
  }
  t: {
    var Qe = "",
      We =
        ((Ue = Ne),
        $e
          ? /rv:([^\);]+)(\)|;)/.exec(Ue)
          : ze
          ? /Edge\/([\d\.]+)/.exec(Ue)
          : Be
          ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Ue)
          : Ge
          ? /WebKit\/(\S+)/.exec(Ue)
          : je
          ? /(?:Version)[ \/]?(\S+)/.exec(Ue)
          : void 0);
    if ((We && (Qe = We ? We[1] : ""), Be)) {
      var Ye = He();
      if (null != Ye && Ye > parseFloat(Qe)) {
        qe = String(Ye);
        break t;
      }
    }
    qe = Qe;
  }
  var Xe,
    Je = {};
  function Ze() {
    return (function (t) {
      var e = Je;
      return Object.prototype.hasOwnProperty.call(e, 9) ? e[9] : (e[9] = t(9));
    })(function () {
      for (
        var t = 0,
          e = De(String(qe)).split("."),
          n = De("9").split("."),
          r = Math.max(e.length, n.length),
          i = 0;
        0 == t && i < r;
        i++
      ) {
        var o = e[i] || "",
          s = n[i] || "";
        do {
          if (
            ((o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""]),
            (s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""]),
            0 == o[0].length && 0 == s[0].length)
          )
            break;
          (t =
            xe(
              0 == o[1].length ? 0 : parseInt(o[1], 10),
              0 == s[1].length ? 0 : parseInt(s[1], 10)
            ) ||
            xe(0 == o[2].length, 0 == s[2].length) ||
            xe(o[2], s[2])),
            (o = o[3]),
            (s = s[3]);
        } while (0 == t);
      }
      return 0 <= t;
    });
  }
  if (le.document && Be) {
    var tn = He();
    Xe = tn || parseInt(qe, 10) || void 0;
  } else Xe = void 0;
  var en = Xe,
    nn = (function () {
      if (!le.addEventListener || !Object.defineProperty) return !1;
      var t = !1,
        e = Object.defineProperty({}, "passive", {
          get: function () {
            t = !0;
          },
        });
      try {
        le.addEventListener("test", he, e),
          le.removeEventListener("test", he, e);
      } catch (t) {}
      return t;
    })();
  function rn(t, e) {
    (this.type = t), (this.g = this.target = e), (this.defaultPrevented = !1);
  }
  function on(t, e) {
    if (
      (rn.call(this, t ? t.type : ""),
      (this.relatedTarget = this.g = this.target = null),
      (this.button =
        this.screenY =
        this.screenX =
        this.clientY =
        this.clientX =
          0),
      (this.key = ""),
      (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
      (this.state = null),
      (this.pointerId = 0),
      (this.pointerType = ""),
      (this.i = null),
      t)
    ) {
      var n = (this.type = t.type),
        r =
          t.changedTouches && t.changedTouches.length
            ? t.changedTouches[0]
            : null;
      if (
        ((this.target = t.target || t.srcElement),
        (this.g = e),
        (e = t.relatedTarget))
      ) {
        if ($e) {
          t: {
            try {
              Ve(e.nodeName);
              var i = !0;
              break t;
            } catch (t) {}
            i = !1;
          }
          i || (e = null);
        }
      } else
        "mouseover" == n
          ? (e = t.fromElement)
          : "mouseout" == n && (e = t.toElement);
      (this.relatedTarget = e),
        r
          ? ((this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX),
            (this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY),
            (this.screenX = r.screenX || 0),
            (this.screenY = r.screenY || 0))
          : ((this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX),
            (this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY),
            (this.screenX = t.screenX || 0),
            (this.screenY = t.screenY || 0)),
        (this.button = t.button),
        (this.key = t.key || ""),
        (this.ctrlKey = t.ctrlKey),
        (this.altKey = t.altKey),
        (this.shiftKey = t.shiftKey),
        (this.metaKey = t.metaKey),
        (this.pointerId = t.pointerId || 0),
        (this.pointerType =
          "string" == typeof t.pointerType
            ? t.pointerType
            : sn[t.pointerType] || ""),
        (this.state = t.state),
        (this.i = t),
        t.defaultPrevented && on.Z.h.call(this);
    }
  }
  (rn.prototype.h = function () {
    this.defaultPrevented = !0;
  }),
    we(on, rn);
  var sn = { 2: "touch", 3: "pen", 4: "mouse" };
  on.prototype.h = function () {
    on.Z.h.call(this);
    var t = this.i;
    t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
  };
  var an = "closure_listenable_" + ((1e6 * Math.random()) | 0),
    un = 0;
  function cn(t, e, n, r, i) {
    (this.listener = t),
      (this.proxy = null),
      (this.src = e),
      (this.type = n),
      (this.capture = !!r),
      (this.ia = i),
      (this.key = ++un),
      (this.ca = this.fa = !1);
  }
  function ln(t) {
    (t.ca = !0),
      (t.listener = null),
      (t.proxy = null),
      (t.src = null),
      (t.ia = null);
  }
  function hn(t) {
    (this.src = t), (this.g = {}), (this.h = 0);
  }
  function fn(t, e) {
    var n = e.type;
    if (n in t.g) {
      var r,
        i = t.g[n],
        o = Te(i, e);
      (r = 0 <= o) && Array.prototype.splice.call(i, o, 1),
        r && (ln(e), 0 == t.g[n].length && (delete t.g[n], t.h--));
    }
  }
  function dn(t, e, n, r) {
    for (var i = 0; i < t.length; ++i) {
      var o = t[i];
      if (!o.ca && o.listener == e && o.capture == !!n && o.ia == r) return i;
    }
    return -1;
  }
  hn.prototype.add = function (t, e, n, r, i) {
    var o = t.toString();
    (t = this.g[o]) || ((t = this.g[o] = []), this.h++);
    var s = dn(t, e, r, i);
    return (
      -1 < s
        ? ((e = t[s]), n || (e.fa = !1))
        : (((e = new cn(e, this.src, o, !!r, i)).fa = n), t.push(e)),
      e
    );
  };
  var pn = "closure_lm_" + ((1e6 * Math.random()) | 0),
    vn = {};
  function gn(t, e, n, r, i) {
    if (r && r.once) return mn(t, e, n, r, i);
    if (Array.isArray(e)) {
      for (var o = 0; o < e.length; o++) gn(t, e[o], n, r, i);
      return null;
    }
    return (
      (n = Sn(n)),
      t && t[an]
        ? t.N(e, n, de(r) ? !!r.capture : !!r, i)
        : yn(t, e, n, !1, r, i)
    );
  }
  function yn(t, e, n, r, i, o) {
    if (!e) throw Error("Invalid event type");
    var s = de(i) ? !!i.capture : !!i,
      a = Tn(t);
    if ((a || (t[pn] = a = new hn(t)), (n = a.add(e, n, r, s, o)).proxy))
      return n;
    if (
      ((r = (function () {
        function t(n) {
          return e.call(t.src, t.listener, n);
        }
        var e = In;
        return t;
      })()),
      (n.proxy = r),
      (r.src = t),
      (r.listener = n),
      t.addEventListener)
    )
      nn || (i = s),
        void 0 === i && (i = !1),
        t.addEventListener(e.toString(), r, i);
    else if (t.attachEvent) t.attachEvent(En(e.toString()), r);
    else {
      if (!t.addListener || !t.removeListener)
        throw Error("addEventListener and attachEvent are unavailable.");
      t.addListener(r);
    }
    return n;
  }
  function mn(t, e, n, r, i) {
    if (Array.isArray(e)) {
      for (var o = 0; o < e.length; o++) mn(t, e[o], n, r, i);
      return null;
    }
    return (
      (n = Sn(n)),
      t && t[an]
        ? t.O(e, n, de(r) ? !!r.capture : !!r, i)
        : yn(t, e, n, !0, r, i)
    );
  }
  function bn(t, e, n, r, i) {
    if (Array.isArray(e))
      for (var o = 0; o < e.length; o++) bn(t, e[o], n, r, i);
    else
      (r = de(r) ? !!r.capture : !!r),
        (n = Sn(n)),
        t && t[an]
          ? ((t = t.i),
            (e = String(e).toString()) in t.g &&
              -1 < (n = dn((o = t.g[e]), n, r, i)) &&
              (ln(o[n]),
              Array.prototype.splice.call(o, n, 1),
              0 == o.length && (delete t.g[e], t.h--)))
          : t &&
            (t = Tn(t)) &&
            ((e = t.g[e.toString()]),
            (t = -1),
            e && (t = dn(e, n, r, i)),
            (n = -1 < t ? e[t] : null) && wn(n));
  }
  function wn(t) {
    if ("number" != typeof t && t && !t.ca) {
      var e = t.src;
      if (e && e[an]) fn(e.i, t);
      else {
        var n = t.type,
          r = t.proxy;
        e.removeEventListener
          ? e.removeEventListener(n, r, t.capture)
          : e.detachEvent
          ? e.detachEvent(En(n), r)
          : e.addListener && e.removeListener && e.removeListener(r),
          (n = Tn(e))
            ? (fn(n, t), 0 == n.h && ((n.src = null), (e[pn] = null)))
            : ln(t);
      }
    }
  }
  function En(t) {
    return t in vn ? vn[t] : (vn[t] = "on" + t);
  }
  function In(t, e) {
    if (t.ca) t = !0;
    else {
      e = new on(e, this);
      var n = t.listener,
        r = t.ia || t.src;
      t.fa && wn(t), (t = n.call(r, e));
    }
    return t;
  }
  function Tn(t) {
    return (t = t[pn]) instanceof hn ? t : null;
  }
  var _n = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
  function Sn(t) {
    return "function" == typeof t
      ? t
      : (t[_n] ||
          (t[_n] = function (e) {
            return t.handleEvent(e);
          }),
        t[_n]);
  }
  function An() {
    Ee.call(this), (this.i = new hn(this)), (this.P = this), (this.I = null);
  }
  function kn(t, e) {
    var n,
      r = t.I;
    if (r) for (n = []; r; r = r.I) n.push(r);
    if (((t = t.P), (r = e.type || e), "string" == typeof e)) e = new rn(e, t);
    else if (e instanceof rn) e.target = e.target || t;
    else {
      var i = e;
      Fe((e = new rn(r, t)), i);
    }
    if (((i = !0), n))
      for (var o = n.length - 1; 0 <= o; o--) {
        var s = (e.g = n[o]);
        i = Nn(s, r, !0, e) && i;
      }
    if (((i = Nn((s = e.g = t), r, !0, e) && i), (i = Nn(s, r, !1, e) && i), n))
      for (o = 0; o < n.length; o++) i = Nn((s = e.g = n[o]), r, !1, e) && i;
  }
  function Nn(t, e, n, r) {
    if (!(e = t.i.g[String(e)])) return !0;
    e = e.concat();
    for (var i = !0, o = 0; o < e.length; ++o) {
      var s = e[o];
      if (s && !s.ca && s.capture == n) {
        var a = s.listener,
          u = s.ia || s.src;
        s.fa && fn(t.i, s), (i = !1 !== a.call(u, r) && i);
      }
    }
    return i && !r.defaultPrevented;
  }
  we(An, Ee),
    (An.prototype[an] = !0),
    (An.prototype.removeEventListener = function (t, e, n, r) {
      bn(this, t, e, n, r);
    }),
    (An.prototype.M = function () {
      if ((An.Z.M.call(this), this.i)) {
        var t,
          e = this.i;
        for (t in e.g) {
          for (var n = e.g[t], r = 0; r < n.length; r++) ln(n[r]);
          delete e.g[t], e.h--;
        }
      }
      this.I = null;
    }),
    (An.prototype.N = function (t, e, n, r) {
      return this.i.add(String(t), e, !1, n, r);
    }),
    (An.prototype.O = function (t, e, n, r) {
      return this.i.add(String(t), e, !0, n, r);
    });
  var Dn = le.JSON.stringify;
  function Cn() {
    var t = Vn,
      e = null;
    return (
      t.g &&
        ((e = t.g), (t.g = t.g.next), t.g || (t.h = null), (e.next = null)),
      e
    );
  }
  var xn,
    Rn = (function () {
      function t() {
        this.h = this.g = null;
      }
      return (
        (t.prototype.add = function (t, e) {
          var n = On.get();
          n.set(t, e), this.h ? (this.h.next = n) : (this.g = n), (this.h = n);
        }),
        t
      );
    })(),
    On = new ((function () {
      function t(t, e) {
        (this.i = t), (this.j = e), (this.h = 0), (this.g = null);
      }
      return (
        (t.prototype.get = function () {
          var t;
          return (
            0 < this.h
              ? (this.h--, (t = this.g), (this.g = t.next), (t.next = null))
              : (t = this.i()),
            t
          );
        }),
        t
      );
    })())(
      function () {
        return new Ln();
      },
      function (t) {
        return t.reset();
      }
    ),
    Ln = (function () {
      function t() {
        this.next = this.g = this.h = null;
      }
      return (
        (t.prototype.set = function (t, e) {
          (this.h = t), (this.g = e), (this.next = null);
        }),
        (t.prototype.reset = function () {
          this.next = this.g = this.h = null;
        }),
        t
      );
    })();
  function Pn(t) {
    le.setTimeout(function () {
      throw t;
    }, 0);
  }
  function Mn(t, e) {
    xn ||
      (function () {
        var t = le.Promise.resolve(void 0);
        xn = function () {
          t.then(qn);
        };
      })(),
      Fn || (xn(), (Fn = !0)),
      Vn.add(t, e);
  }
  var Fn = !1,
    Vn = new Rn();
  function qn() {
    for (var t; (t = Cn()); ) {
      try {
        t.h.call(t.g);
      } catch (t) {
        Pn(t);
      }
      var e = On;
      e.j(t), 100 > e.h && (e.h++, (t.next = e.g), (e.g = t));
    }
    Fn = !1;
  }
  function Un(t, e) {
    An.call(this),
      (this.h = t || 1),
      (this.g = e || le),
      (this.j = me(this.kb, this)),
      (this.l = Date.now());
  }
  function jn(t) {
    (t.da = !1), t.S && (t.g.clearTimeout(t.S), (t.S = null));
  }
  function Bn(t, e, n) {
    if ("function" == typeof t) n && (t = me(t, n));
    else {
      if (!t || "function" != typeof t.handleEvent)
        throw Error("Invalid listener argument");
      t = me(t.handleEvent, t);
    }
    return 2147483647 < Number(e) ? -1 : le.setTimeout(t, e || 0);
  }
  function zn(t) {
    t.g = Bn(function () {
      (t.g = null), t.i && ((t.i = !1), zn(t));
    }, t.j);
    var e = t.h;
    (t.h = null), t.m.apply(null, e);
  }
  we(Un, An),
    ((ae = Un.prototype).da = !1),
    (ae.S = null),
    (ae.kb = function () {
      if (this.da) {
        var t = Date.now() - this.l;
        0 < t && t < 0.8 * this.h
          ? (this.S = this.g.setTimeout(this.j, this.h - t))
          : (this.S && (this.g.clearTimeout(this.S), (this.S = null)),
            kn(this, "tick"),
            this.da && (jn(this), this.start()));
      }
    }),
    (ae.start = function () {
      (this.da = !0),
        this.S ||
          ((this.S = this.g.setTimeout(this.j, this.h)), (this.l = Date.now()));
    }),
    (ae.M = function () {
      Un.Z.M.call(this), jn(this), delete this.g;
    });
  var Kn = (function (t) {
    function e(e, n) {
      var r = t.call(this) || this;
      return (r.m = e), (r.j = n), (r.h = null), (r.i = !1), (r.g = null), r;
    }
    return (
      (function (t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function n() {
          this.constructor = t;
        }
        oe(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      })(e, t),
      (e.prototype.l = function (t) {
        (this.h = arguments), this.g ? (this.i = !0) : zn(this);
      }),
      (e.prototype.M = function () {
        t.prototype.M.call(this),
          this.g &&
            (le.clearTimeout(this.g),
            (this.g = null),
            (this.i = !1),
            (this.h = null));
      }),
      e
    );
  })(Ee);
  function $n(t) {
    Ee.call(this), (this.h = t), (this.g = {});
  }
  we($n, Ee);
  var Gn = [];
  function Hn(t, e, n, r) {
    Array.isArray(n) || (n && (Gn[0] = n.toString()), (n = Gn));
    for (var i = 0; i < n.length; i++) {
      var o = gn(e, n[i], r || t.handleEvent, !1, t.h || t);
      if (!o) break;
      t.g[o.key] = o;
    }
  }
  function Qn(t) {
    Le(
      t.g,
      function (t, e) {
        this.g.hasOwnProperty(e) && wn(t);
      },
      t
    ),
      (t.g = {});
  }
  function Wn() {
    this.g = !0;
  }
  function Yn(t, e, n, r) {
    t.info(function () {
      return (
        "XMLHTTP TEXT (" +
        e +
        "): " +
        (function (t, e) {
          if (!t.g) return e;
          if (!e) return null;
          try {
            var n = JSON.parse(e);
            if (n)
              for (t = 0; t < n.length; t++)
                if (Array.isArray(n[t])) {
                  var r = n[t];
                  if (!(2 > r.length)) {
                    var i = r[1];
                    if (Array.isArray(i) && !(1 > i.length)) {
                      var o = i[0];
                      if ("noop" != o && "stop" != o && "close" != o)
                        for (var s = 1; s < i.length; s++) i[s] = "";
                    }
                  }
                }
            return Dn(n);
          } catch (t) {
            return e;
          }
        })(t, n) +
        (r ? " " + r : "")
      );
    });
  }
  ($n.prototype.M = function () {
    $n.Z.M.call(this), Qn(this);
  }),
    ($n.prototype.handleEvent = function () {
      throw Error("EventHandler.handleEvent not implemented");
    }),
    (Wn.prototype.Aa = function () {
      this.g = !1;
    }),
    (Wn.prototype.info = function () {});
  var Xn = {},
    Jn = null;
  function Zn() {
    return (Jn = Jn || new An());
  }
  function tr(t) {
    rn.call(this, Xn.Ma, t);
  }
  function er(t) {
    var e = Zn();
    kn(e, new tr(e, t));
  }
  function nr(t, e) {
    rn.call(this, Xn.STAT_EVENT, t), (this.stat = e);
  }
  function rr(t) {
    var e = Zn();
    kn(e, new nr(e, t));
  }
  function ir(t, e) {
    rn.call(this, Xn.Na, t), (this.size = e);
  }
  function or(t, e) {
    if ("function" != typeof t)
      throw Error("Fn must not be null and must be a function");
    return le.setTimeout(function () {
      t();
    }, e);
  }
  (Xn.Ma = "serverreachability"),
    we(tr, rn),
    (Xn.STAT_EVENT = "statevent"),
    we(nr, rn),
    (Xn.Na = "timingevent"),
    we(ir, rn);
  var sr = {
      NO_ERROR: 0,
      lb: 1,
      yb: 2,
      xb: 3,
      sb: 4,
      wb: 5,
      zb: 6,
      Ja: 7,
      TIMEOUT: 8,
      Cb: 9,
    },
    ar = {
      qb: "complete",
      Mb: "success",
      Ka: "error",
      Ja: "abort",
      Eb: "ready",
      Fb: "readystatechange",
      TIMEOUT: "timeout",
      Ab: "incrementaldata",
      Db: "progress",
      tb: "downloadprogress",
      Ub: "uploadprogress",
    };
  function ur() {}
  function cr(t) {
    return t.h || (t.h = t.i());
  }
  function lr() {}
  ur.prototype.h = null;
  var hr,
    fr = { OPEN: "a", pb: "b", Ka: "c", Bb: "d" };
  function dr() {
    rn.call(this, "d");
  }
  function pr() {
    rn.call(this, "c");
  }
  function vr() {}
  function gr(t, e, n, r) {
    (this.l = t),
      (this.j = e),
      (this.m = n),
      (this.X = r || 1),
      (this.V = new $n(this)),
      (this.P = mr),
      (t = Ke ? 125 : void 0),
      (this.W = new Un(t)),
      (this.H = null),
      (this.i = !1),
      (this.s = this.A = this.v = this.K = this.F = this.Y = this.B = null),
      (this.D = []),
      (this.g = null),
      (this.C = 0),
      (this.o = this.u = null),
      (this.N = -1),
      (this.I = !1),
      (this.O = 0),
      (this.L = null),
      (this.aa = this.J = this.$ = this.U = !1),
      (this.h = new yr());
  }
  function yr() {
    (this.i = null), (this.g = ""), (this.h = !1);
  }
  we(dr, rn),
    we(pr, rn),
    we(vr, ur),
    (vr.prototype.g = function () {
      return new XMLHttpRequest();
    }),
    (vr.prototype.i = function () {
      return {};
    }),
    (hr = new vr());
  var mr = 45e3,
    br = {},
    wr = {};
  function Er(t, e, n) {
    (t.K = 1), (t.v = Kr(Vr(e))), (t.s = n), (t.U = !0), Ir(t, null);
  }
  function Ir(t, e) {
    (t.F = Date.now()), Ar(t), (t.A = Vr(t.v));
    var n = t.A,
      r = t.X;
    Array.isArray(r) || (r = [String(r)]),
      ri(n.h, "t", r),
      (t.C = 0),
      (n = t.l.H),
      (t.h = new yr()),
      (t.g = io(t.l, n ? e : null, !t.s)),
      0 < t.O && (t.L = new Kn(me(t.Ia, t, t.g), t.O)),
      Hn(t.V, t.g, "readystatechange", t.gb),
      (e = t.H ? Pe(t.H) : {}),
      t.s
        ? (t.u || (t.u = "POST"),
          (e["Content-Type"] = "application/x-www-form-urlencoded"),
          t.g.ea(t.A, t.u, t.s, e))
        : ((t.u = "GET"), t.g.ea(t.A, t.u, null, e)),
      er(1),
      (function (t, e, n, r, i, o) {
        t.info(function () {
          if (t.g)
            if (o)
              for (var s = "", a = o.split("&"), u = 0; u < a.length; u++) {
                var c = a[u].split("=");
                if (1 < c.length) {
                  var l = c[0];
                  c = c[1];
                  var h = l.split("_");
                  s =
                    2 <= h.length && "type" == h[1]
                      ? s + (l + "=") + c + "&"
                      : s + (l + "=redacted&");
                }
              }
            else s = null;
          else s = o;
          return (
            "XMLHTTP REQ (" +
            r +
            ") [attempt " +
            i +
            "]: " +
            e +
            "\n" +
            n +
            "\n" +
            s
          );
        });
      })(t.j, t.u, t.A, t.m, t.X, t.s);
  }
  function Tr(t) {
    return !!t.g && "GET" == t.u && 2 != t.K && t.l.Ba;
  }
  function _r(t, e, n) {
    for (var r, i = !0; !t.I && t.C < n.length; ) {
      if ((r = Sr(t, n)) == wr) {
        4 == e && ((t.o = 4), rr(14), (i = !1)),
          Yn(t.j, t.m, null, "[Incomplete Response]");
        break;
      }
      if (r == br) {
        (t.o = 4), rr(15), Yn(t.j, t.m, n, "[Invalid Chunk]"), (i = !1);
        break;
      }
      Yn(t.j, t.m, r, null), xr(t, r);
    }
    Tr(t) && r != wr && r != br && ((t.h.g = ""), (t.C = 0)),
      4 != e || 0 != n.length || t.h.h || ((t.o = 1), rr(16), (i = !1)),
      (t.i = t.i && i),
      i
        ? 0 < n.length &&
          !t.aa &&
          ((t.aa = !0),
          (e = t.l).g == t &&
            e.$ &&
            !e.L &&
            (e.h.info(
              "Great, no buffering proxy detected. Bytes received: " + n.length
            ),
            Yi(e),
            (e.L = !0),
            rr(11)))
        : (Yn(t.j, t.m, n, "[Invalid Chunked Response]"), Cr(t), Dr(t));
  }
  function Sr(t, e) {
    var n = t.C,
      r = e.indexOf("\n", n);
    return -1 == r
      ? wr
      : ((n = Number(e.substring(n, r))),
        isNaN(n)
          ? br
          : (r += 1) + n > e.length
          ? wr
          : ((e = e.substr(r, n)), (t.C = r + n), e));
  }
  function Ar(t) {
    (t.Y = Date.now() + t.P), kr(t, t.P);
  }
  function kr(t, e) {
    if (null != t.B) throw Error("WatchDog timer not null");
    t.B = or(me(t.eb, t), e);
  }
  function Nr(t) {
    t.B && (le.clearTimeout(t.B), (t.B = null));
  }
  function Dr(t) {
    0 == t.l.G || t.I || Zi(t.l, t);
  }
  function Cr(t) {
    Nr(t);
    var e = t.L;
    e && "function" == typeof e.na && e.na(),
      (t.L = null),
      jn(t.W),
      Qn(t.V),
      t.g && ((e = t.g), (t.g = null), e.abort(), e.na());
  }
  function xr(t, e) {
    try {
      var n = t.l;
      if (0 != n.G && (n.g == t || li(n.i, t)))
        if (((n.I = t.N), !t.J && li(n.i, t) && 3 == n.G)) {
          try {
            var r = n.Ca.g.parse(e);
          } catch (o) {
            r = null;
          }
          if (Array.isArray(r) && 3 == r.length) {
            var i = r;
            if (0 == i[0]) {
              t: if (!n.u) {
                if (n.g) {
                  if (!(n.g.F + 3e3 < t.F)) break t;
                  Ji(n), ji(n);
                }
                Wi(n), rr(18);
              }
            } else
              (n.ta = i[1]),
                0 < n.ta - n.U &&
                  37500 > i[2] &&
                  n.N &&
                  0 == n.A &&
                  !n.v &&
                  (n.v = or(me(n.ab, n), 6e3));
            if (1 >= ci(n.i) && n.ka) {
              try {
                n.ka();
              } catch (o) {}
              n.ka = void 0;
            }
          } else eo(n, 11);
        } else if (((t.J || n.g == t) && Ji(n), !ke(e)))
          for (i = n.Ca.g.parse(e), e = 0; e < i.length; e++) {
            var o = i[e];
            if (((n.U = o[0]), (o = o[1]), 2 == n.G))
              if ("c" == o[0]) {
                (n.J = o[1]), (n.la = o[2]);
                var s = o[3];
                null != s && ((n.ma = s), n.h.info("VER=" + n.ma));
                var a = o[4];
                null != a && ((n.za = a), n.h.info("SVER=" + n.za));
                var u = o[5];
                null != u &&
                  "number" == typeof u &&
                  0 < u &&
                  ((r = 1.5 * u),
                  (n.K = r),
                  n.h.info("backChannelRequestTimeoutMs_=" + r)),
                  (r = n);
                var c = t.g;
                if (c) {
                  var l = c.g
                    ? c.g.getResponseHeader("X-Client-Wire-Protocol")
                    : null;
                  if (l) {
                    var h = r.i;
                    !h.g &&
                      (Ce(l, "spdy") || Ce(l, "quic") || Ce(l, "h2")) &&
                      ((h.j = h.l),
                      (h.g = new Set()),
                      h.h && (hi(h, h.h), (h.h = null)));
                  }
                  if (r.D) {
                    var f = c.g
                      ? c.g.getResponseHeader("X-HTTP-Session-Id")
                      : null;
                    f && ((r.sa = f), zr(r.F, r.D, f));
                  }
                }
                (n.G = 3),
                  n.j && n.j.xa(),
                  n.$ &&
                    ((n.O = Date.now() - t.F),
                    n.h.info("Handshake RTT: " + n.O + "ms"));
                var d = t;
                if ((((r = n).oa = ro(r, r.H ? r.la : null, r.W)), d.J)) {
                  fi(r.i, d);
                  var p = d,
                    v = r.K;
                  v && p.setTimeout(v), p.B && (Nr(p), Ar(p)), (r.g = d);
                } else Qi(r);
                0 < n.l.length && Ki(n);
              } else ("stop" != o[0] && "close" != o[0]) || eo(n, 7);
            else
              3 == n.G &&
                ("stop" == o[0] || "close" == o[0]
                  ? "stop" == o[0]
                    ? eo(n, 7)
                    : Ui(n)
                  : "noop" != o[0] && n.j && n.j.wa(o),
                (n.A = 0));
          }
      er(4);
    } catch (o) {}
  }
  function Rr(t, e) {
    if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
    else if (fe(t) || "string" == typeof t) _e(t, e, void 0);
    else {
      if (t.T && "function" == typeof t.T) var n = t.T();
      else if (t.R && "function" == typeof t.R) n = void 0;
      else if (fe(t) || "string" == typeof t) {
        n = [];
        for (var r = t.length, i = 0; i < r; i++) n.push(i);
      } else for (i in ((n = []), (r = 0), t)) n[r++] = i;
      i = (r = (function (t) {
        if (t.R && "function" == typeof t.R) return t.R();
        if ("string" == typeof t) return t.split("");
        if (fe(t)) {
          for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
          return e;
        }
        for (r in ((e = []), (n = 0), t)) e[n++] = t[r];
        return e;
      })(t)).length;
      for (var o = 0; o < i; o++) e.call(void 0, r[o], n && n[o], t);
    }
  }
  function Or(t, e) {
    (this.h = {}), (this.g = []), (this.i = 0);
    var n = arguments.length;
    if (1 < n) {
      if (n % 2) throw Error("Uneven number of arguments");
      for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1]);
    } else if (t)
      if (t instanceof Or)
        for (n = t.T(), r = 0; r < n.length; r++) this.set(n[r], t.get(n[r]));
      else for (r in t) this.set(r, t[r]);
  }
  function Lr(t) {
    if (t.i != t.g.length) {
      for (var e = 0, n = 0; e < t.g.length; ) {
        var r = t.g[e];
        Pr(t.h, r) && (t.g[n++] = r), e++;
      }
      t.g.length = n;
    }
    if (t.i != t.g.length) {
      var i = {};
      for (n = e = 0; e < t.g.length; )
        Pr(i, (r = t.g[e])) || ((t.g[n++] = r), (i[r] = 1)), e++;
      t.g.length = n;
    }
  }
  function Pr(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }
  ((ae = gr.prototype).setTimeout = function (t) {
    this.P = t;
  }),
    (ae.gb = function (t) {
      t = t.target;
      var e = this.L;
      e && 3 == Pi(t) ? e.l() : this.Ia(t);
    }),
    (ae.Ia = function (t) {
      try {
        if (t == this.g)
          t: {
            var e = Pi(this.g),
              n = this.g.Da(),
              r = this.g.ba();
            if (
              !(3 > e) &&
              (3 != e ||
                Ke ||
                (this.g && (this.h.h || this.g.ga() || Mi(this.g))))
            ) {
              this.I || 4 != e || 7 == n || er(8 == n || 0 >= r ? 3 : 2),
                Nr(this);
              var i = this.g.ba();
              this.N = i;
              e: if (Tr(this)) {
                var o = Mi(this.g);
                t = "";
                var s = o.length,
                  a = 4 == Pi(this.g);
                if (!this.h.i) {
                  if ("undefined" == typeof TextDecoder) {
                    Cr(this), Dr(this);
                    var u = "";
                    break e;
                  }
                  this.h.i = new le.TextDecoder();
                }
                for (n = 0; n < s; n++)
                  (this.h.h = !0),
                    (t += this.h.i.decode(o[n], { stream: a && n == s - 1 }));
                o.splice(0, s), (this.h.g += t), (this.C = 0), (u = this.h.g);
              } else u = this.g.ga();
              if (
                ((this.i = 200 == i),
                (function (t, e, n, r, i, o, s) {
                  t.info(function () {
                    return (
                      "XMLHTTP RESP (" +
                      r +
                      ") [ attempt " +
                      i +
                      "]: " +
                      e +
                      "\n" +
                      n +
                      "\n" +
                      o +
                      " " +
                      s
                    );
                  });
                })(this.j, this.u, this.A, this.m, this.X, e, i),
                this.i)
              ) {
                if (this.$ && !this.J) {
                  e: {
                    if (this.g) {
                      var c,
                        l = this.g;
                      if (
                        (c = l.g
                          ? l.g.getResponseHeader("X-HTTP-Initial-Response")
                          : null) &&
                        !ke(c)
                      ) {
                        var h = c;
                        break e;
                      }
                    }
                    h = null;
                  }
                  if (!(i = h)) {
                    (this.i = !1), (this.o = 3), rr(12), Cr(this), Dr(this);
                    break t;
                  }
                  Yn(
                    this.j,
                    this.m,
                    i,
                    "Initial handshake response via X-HTTP-Initial-Response"
                  ),
                    (this.J = !0),
                    xr(this, i);
                }
                this.U
                  ? (_r(this, e, u),
                    Ke &&
                      this.i &&
                      3 == e &&
                      (Hn(this.V, this.W, "tick", this.fb), this.W.start()))
                  : (Yn(this.j, this.m, u, null), xr(this, u)),
                  4 == e && Cr(this),
                  this.i &&
                    !this.I &&
                    (4 == e ? Zi(this.l, this) : ((this.i = !1), Ar(this)));
              } else
                400 == i && 0 < u.indexOf("Unknown SID")
                  ? ((this.o = 3), rr(12))
                  : ((this.o = 0), rr(13)),
                  Cr(this),
                  Dr(this);
            }
          }
      } catch (e) {}
    }),
    (ae.fb = function () {
      if (this.g) {
        var t = Pi(this.g),
          e = this.g.ga();
        this.C < e.length &&
          (Nr(this), _r(this, t, e), this.i && 4 != t && Ar(this));
      }
    }),
    (ae.cancel = function () {
      (this.I = !0), Cr(this);
    }),
    (ae.eb = function () {
      this.B = null;
      var t = Date.now();
      0 <= t - this.Y
        ? ((function (t, e) {
            t.info(function () {
              return "TIMEOUT: " + e;
            });
          })(this.j, this.A),
          2 != this.K && (er(3), rr(17)),
          Cr(this),
          (this.o = 2),
          Dr(this))
        : kr(this, this.Y - t);
    }),
    ((ae = Or.prototype).R = function () {
      Lr(this);
      for (var t = [], e = 0; e < this.g.length; e++) t.push(this.h[this.g[e]]);
      return t;
    }),
    (ae.T = function () {
      return Lr(this), this.g.concat();
    }),
    (ae.get = function (t, e) {
      return Pr(this.h, t) ? this.h[t] : e;
    }),
    (ae.set = function (t, e) {
      Pr(this.h, t) || (this.i++, this.g.push(t)), (this.h[t] = e);
    }),
    (ae.forEach = function (t, e) {
      for (var n = this.T(), r = 0; r < n.length; r++) {
        var i = n[r],
          o = this.get(i);
        t.call(e, o, i, this);
      }
    });
  var Mr =
    /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
  function Fr(t, e) {
    if (
      ((this.i = this.s = this.j = ""),
      (this.m = null),
      (this.o = this.l = ""),
      (this.g = !1),
      t instanceof Fr)
    ) {
      (this.g = void 0 !== e ? e : t.g),
        qr(this, t.j),
        (this.s = t.s),
        Ur(this, t.i),
        jr(this, t.m),
        (this.l = t.l),
        (e = t.h);
      var n = new Zr();
      (n.i = e.i),
        e.g && ((n.g = new Or(e.g)), (n.h = e.h)),
        Br(this, n),
        (this.o = t.o);
    } else
      t && (n = String(t).match(Mr))
        ? ((this.g = !!e),
          qr(this, n[1] || "", !0),
          (this.s = $r(n[2] || "")),
          Ur(this, n[3] || "", !0),
          jr(this, n[4]),
          (this.l = $r(n[5] || "", !0)),
          Br(this, n[6] || "", !0),
          (this.o = $r(n[7] || "")))
        : ((this.g = !!e), (this.h = new Zr(null, this.g)));
  }
  function Vr(t) {
    return new Fr(t);
  }
  function qr(t, e, n) {
    (t.j = n ? $r(e, !0) : e), t.j && (t.j = t.j.replace(/:$/, ""));
  }
  function Ur(t, e, n) {
    t.i = n ? $r(e, !0) : e;
  }
  function jr(t, e) {
    if (e) {
      if (((e = Number(e)), isNaN(e) || 0 > e))
        throw Error("Bad port number " + e);
      t.m = e;
    } else t.m = null;
  }
  function Br(t, e, n) {
    e instanceof Zr
      ? ((t.h = e),
        (function (t, e) {
          e &&
            !t.j &&
            (ti(t),
            (t.i = null),
            t.g.forEach(function (t, e) {
              var n = e.toLowerCase();
              e != n && (ei(this, e), ri(this, n, t));
            }, t)),
            (t.j = e);
        })(t.h, t.g))
      : (n || (e = Gr(e, Xr)), (t.h = new Zr(e, t.g)));
  }
  function zr(t, e, n) {
    t.h.set(e, n);
  }
  function Kr(t) {
    return (
      zr(
        t,
        "zx",
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(
            Math.floor(2147483648 * Math.random()) ^ Date.now()
          ).toString(36)
      ),
      t
    );
  }
  function $r(t, e) {
    return t
      ? e
        ? decodeURI(t.replace(/%25/g, "%2525"))
        : decodeURIComponent(t)
      : "";
  }
  function Gr(t, e, n) {
    return "string" == typeof t
      ? ((t = encodeURI(t).replace(e, Hr)),
        n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        t)
      : null;
  }
  function Hr(t) {
    return (
      "%" +
      (((t = t.charCodeAt(0)) >> 4) & 15).toString(16) +
      (15 & t).toString(16)
    );
  }
  Fr.prototype.toString = function () {
    var t = [],
      e = this.j;
    e && t.push(Gr(e, Qr, !0), ":");
    var n = this.i;
    return (
      (n || "file" == e) &&
        (t.push("//"),
        (e = this.s) && t.push(Gr(e, Qr, !0), "@"),
        t.push(
          encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
        ),
        null != (n = this.m) && t.push(":", String(n))),
      (n = this.l) &&
        (this.i && "/" != n.charAt(0) && t.push("/"),
        t.push(Gr(n, "/" == n.charAt(0) ? Yr : Wr, !0))),
      (n = this.h.toString()) && t.push("?", n),
      (n = this.o) && t.push("#", Gr(n, Jr)),
      t.join("")
    );
  };
  var Qr = /[#\/\?@]/g,
    Wr = /[#\?:]/g,
    Yr = /[#\?]/g,
    Xr = /[#\?@]/g,
    Jr = /#/g;
  function Zr(t, e) {
    (this.h = this.g = null), (this.i = t || null), (this.j = !!e);
  }
  function ti(t) {
    t.g ||
      ((t.g = new Or()),
      (t.h = 0),
      t.i &&
        (function (t, e) {
          if (t) {
            t = t.split("&");
            for (var n = 0; n < t.length; n++) {
              var r = t[n].indexOf("="),
                i = null;
              if (0 <= r) {
                var o = t[n].substring(0, r);
                i = t[n].substring(r + 1);
              } else o = t[n];
              e(o, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "");
            }
          }
        })(t.i, function (e, n) {
          t.add(decodeURIComponent(e.replace(/\+/g, " ")), n);
        }));
  }
  function ei(t, e) {
    ti(t),
      (e = ii(t, e)),
      Pr(t.g.h, e) &&
        ((t.i = null),
        (t.h -= t.g.get(e).length),
        Pr((t = t.g).h, e) &&
          (delete t.h[e], t.i--, t.g.length > 2 * t.i && Lr(t)));
  }
  function ni(t, e) {
    return ti(t), (e = ii(t, e)), Pr(t.g.h, e);
  }
  function ri(t, e, n) {
    ei(t, e),
      0 < n.length &&
        ((t.i = null), t.g.set(ii(t, e), Ae(n)), (t.h += n.length));
  }
  function ii(t, e) {
    return (e = String(e)), t.j && (e = e.toLowerCase()), e;
  }
  ((ae = Zr.prototype).add = function (t, e) {
    ti(this), (this.i = null), (t = ii(this, t));
    var n = this.g.get(t);
    return n || this.g.set(t, (n = [])), n.push(e), (this.h += 1), this;
  }),
    (ae.forEach = function (t, e) {
      ti(this),
        this.g.forEach(function (n, r) {
          _e(
            n,
            function (n) {
              t.call(e, n, r, this);
            },
            this
          );
        }, this);
    }),
    (ae.T = function () {
      ti(this);
      for (var t = this.g.R(), e = this.g.T(), n = [], r = 0; r < e.length; r++)
        for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]);
      return n;
    }),
    (ae.R = function (t) {
      ti(this);
      var e = [];
      if ("string" == typeof t)
        ni(this, t) && (e = Se(e, this.g.get(ii(this, t))));
      else {
        t = this.g.R();
        for (var n = 0; n < t.length; n++) e = Se(e, t[n]);
      }
      return e;
    }),
    (ae.set = function (t, e) {
      return (
        ti(this),
        (this.i = null),
        ni(this, (t = ii(this, t))) && (this.h -= this.g.get(t).length),
        this.g.set(t, [e]),
        (this.h += 1),
        this
      );
    }),
    (ae.get = function (t, e) {
      return t && 0 < (t = this.R(t)).length ? String(t[0]) : e;
    }),
    (ae.toString = function () {
      if (this.i) return this.i;
      if (!this.g) return "";
      for (var t = [], e = this.g.T(), n = 0; n < e.length; n++) {
        var r = e[n],
          i = encodeURIComponent(String(r));
        r = this.R(r);
        for (var o = 0; o < r.length; o++) {
          var s = i;
          "" !== r[o] && (s += "=" + encodeURIComponent(String(r[o]))),
            t.push(s);
        }
      }
      return (this.i = t.join("&"));
    });
  var oi = function (t, e) {
    (this.h = t), (this.g = e);
  };
  function si(t) {
    (this.l = t || ai),
      le.PerformanceNavigationTiming
        ? (t =
            0 < (t = le.performance.getEntriesByType("navigation")).length &&
            ("hq" == t[0].nextHopProtocol || "h2" == t[0].nextHopProtocol))
        : (t = !!(le.g && le.g.Ea && le.g.Ea() && le.g.Ea().Zb)),
      (this.j = t ? this.l : 1),
      (this.g = null),
      1 < this.j && (this.g = new Set()),
      (this.h = null),
      (this.i = []);
  }
  var ai = 10;
  function ui(t) {
    return !!t.h || (!!t.g && t.g.size >= t.j);
  }
  function ci(t) {
    return t.h ? 1 : t.g ? t.g.size : 0;
  }
  function li(t, e) {
    return t.h ? t.h == e : !!t.g && t.g.has(e);
  }
  function hi(t, e) {
    t.g ? t.g.add(e) : (t.h = e);
  }
  function fi(t, e) {
    t.h && t.h == e ? (t.h = null) : t.g && t.g.has(e) && t.g.delete(e);
  }
  function di(t) {
    var e, n;
    if (null != t.h) return t.i.concat(t.h.D);
    if (null != t.g && 0 !== t.g.size) {
      var r = t.i;
      try {
        for (var i = se(t.g.values()), o = i.next(); !o.done; o = i.next()) {
          var s = o.value;
          r = r.concat(s.D);
        }
      } catch (t) {
        e = { error: t };
      } finally {
        try {
          o && !o.done && (n = i.return) && n.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return r;
    }
    return Ae(t.i);
  }
  function pi() {}
  function vi() {
    this.g = new pi();
  }
  function gi(t, e, n) {
    var r = n || "";
    try {
      Rr(t, function (t, n) {
        var i = t;
        de(t) && (i = Dn(t)), e.push(r + n + "=" + encodeURIComponent(i));
      });
    } catch (t) {
      throw (e.push(r + "type=" + encodeURIComponent("_badmap")), t);
    }
  }
  function yi(t, e, n, r, i) {
    try {
      (e.onload = null),
        (e.onerror = null),
        (e.onabort = null),
        (e.ontimeout = null),
        i(r);
    } catch (t) {}
  }
  function mi(t) {
    (this.l = t.$b || null), (this.j = t.ib || !1);
  }
  function bi(t, e) {
    An.call(this),
      (this.D = t),
      (this.u = e),
      (this.m = void 0),
      (this.readyState = wi),
      (this.status = 0),
      (this.responseType =
        this.responseText =
        this.response =
        this.statusText =
          ""),
      (this.onreadystatechange = null),
      (this.v = new Headers()),
      (this.h = null),
      (this.C = "GET"),
      (this.B = ""),
      (this.g = !1),
      (this.A = this.j = this.l = null);
  }
  (si.prototype.cancel = function () {
    var t, e;
    if (((this.i = di(this)), this.h)) this.h.cancel(), (this.h = null);
    else if (this.g && 0 !== this.g.size) {
      try {
        for (var n = se(this.g.values()), r = n.next(); !r.done; r = n.next()) {
          r.value.cancel();
        }
      } catch (e) {
        t = { error: e };
      } finally {
        try {
          r && !r.done && (e = n.return) && e.call(n);
        } finally {
          if (t) throw t.error;
        }
      }
      this.g.clear();
    }
  }),
    (pi.prototype.stringify = function (t) {
      return le.JSON.stringify(t, void 0);
    }),
    (pi.prototype.parse = function (t) {
      return le.JSON.parse(t, void 0);
    }),
    we(mi, ur),
    (mi.prototype.g = function () {
      return new bi(this.l, this.j);
    }),
    (mi.prototype.i = (function (t) {
      return function () {
        return t;
      };
    })({})),
    we(bi, An);
  var wi = 0;
  function Ei(t) {
    t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t));
  }
  function Ii(t) {
    (t.readyState = 4), (t.l = null), (t.j = null), (t.A = null), Ti(t);
  }
  function Ti(t) {
    t.onreadystatechange && t.onreadystatechange.call(t);
  }
  ((ae = bi.prototype).open = function (t, e) {
    if (this.readyState != wi)
      throw (this.abort(), Error("Error reopening a connection"));
    (this.C = t), (this.B = e), (this.readyState = 1), Ti(this);
  }),
    (ae.send = function (t) {
      if (1 != this.readyState)
        throw (this.abort(), Error("need to call open() first. "));
      this.g = !0;
      var e = {
        headers: this.v,
        method: this.C,
        credentials: this.m,
        cache: void 0,
      };
      t && (e.body = t),
        (this.D || le)
          .fetch(new Request(this.B, e))
          .then(this.Va.bind(this), this.ha.bind(this));
    }),
    (ae.abort = function () {
      (this.response = this.responseText = ""),
        (this.v = new Headers()),
        (this.status = 0),
        this.j && this.j.cancel("Request was aborted."),
        1 <= this.readyState &&
          this.g &&
          4 != this.readyState &&
          ((this.g = !1), Ii(this)),
        (this.readyState = wi);
    }),
    (ae.Va = function (t) {
      if (
        this.g &&
        ((this.l = t),
        this.h ||
          ((this.status = this.l.status),
          (this.statusText = this.l.statusText),
          (this.h = t.headers),
          (this.readyState = 2),
          Ti(this)),
        this.g && ((this.readyState = 3), Ti(this), this.g))
      )
        if ("arraybuffer" === this.responseType)
          t.arrayBuffer().then(this.Ta.bind(this), this.ha.bind(this));
        else if (void 0 !== le.ReadableStream && "body" in t) {
          if (((this.j = t.body.getReader()), this.u)) {
            if (this.responseType)
              throw Error(
                'responseType must be empty for "streamBinaryChunks" mode responses.'
              );
            this.response = [];
          } else
            (this.response = this.responseText = ""),
              (this.A = new TextDecoder());
          Ei(this);
        } else t.text().then(this.Ua.bind(this), this.ha.bind(this));
    }),
    (ae.Sa = function (t) {
      if (this.g) {
        if (this.u && t.value) this.response.push(t.value);
        else if (!this.u) {
          var e = t.value ? t.value : new Uint8Array(0);
          (e = this.A.decode(e, { stream: !t.done })) &&
            (this.response = this.responseText += e);
        }
        t.done ? Ii(this) : Ti(this), 3 == this.readyState && Ei(this);
      }
    }),
    (ae.Ua = function (t) {
      this.g && ((this.response = this.responseText = t), Ii(this));
    }),
    (ae.Ta = function (t) {
      this.g && ((this.response = t), Ii(this));
    }),
    (ae.ha = function () {
      this.g && Ii(this);
    }),
    (ae.setRequestHeader = function (t, e) {
      this.v.append(t, e);
    }),
    (ae.getResponseHeader = function (t) {
      return (this.h && this.h.get(t.toLowerCase())) || "";
    }),
    (ae.getAllResponseHeaders = function () {
      if (!this.h) return "";
      for (var t = [], e = this.h.entries(), n = e.next(); !n.done; )
        (n = n.value), t.push(n[0] + ": " + n[1]), (n = e.next());
      return t.join("\r\n");
    }),
    Object.defineProperty(bi.prototype, "withCredentials", {
      get: function () {
        return "include" === this.m;
      },
      set: function (t) {
        this.m = t ? "include" : "same-origin";
      },
    });
  var _i = le.JSON.parse;
  function Si(t) {
    An.call(this),
      (this.headers = new Or()),
      (this.u = t || null),
      (this.h = !1),
      (this.C = this.g = null),
      (this.H = ""),
      (this.m = 0),
      (this.j = ""),
      (this.l = this.F = this.v = this.D = !1),
      (this.B = 0),
      (this.A = null),
      (this.J = Ai),
      (this.K = this.L = !1);
  }
  we(Si, An);
  var Ai = "",
    ki = /^https?$/i,
    Ni = ["POST", "PUT"];
  function Di(t) {
    return "content-type" == t.toLowerCase();
  }
  function Ci(t, e) {
    (t.h = !1),
      t.g && ((t.l = !0), t.g.abort(), (t.l = !1)),
      (t.j = e),
      (t.m = 5),
      xi(t),
      Oi(t);
  }
  function xi(t) {
    t.D || ((t.D = !0), kn(t, "complete"), kn(t, "error"));
  }
  function Ri(t) {
    if (t.h && void 0 !== ce && (!t.C[1] || 4 != Pi(t) || 2 != t.ba()))
      if (t.v && 4 == Pi(t)) Bn(t.Fa, 0, t);
      else if ((kn(t, "readystatechange"), 4 == Pi(t))) {
        t.h = !1;
        try {
          var e,
            n = t.ba();
          t: switch (n) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var r = !0;
              break t;
            default:
              r = !1;
          }
          if (!(e = r)) {
            var i;
            if ((i = 0 === n)) {
              var o = String(t.H).match(Mr)[1] || null;
              if (!o && le.self && le.self.location) {
                var s = le.self.location.protocol;
                o = s.substr(0, s.length - 1);
              }
              i = !ki.test(o ? o.toLowerCase() : "");
            }
            e = i;
          }
          if (e) kn(t, "complete"), kn(t, "success");
          else {
            t.m = 6;
            try {
              var a = 2 < Pi(t) ? t.g.statusText : "";
            } catch (t) {
              a = "";
            }
            (t.j = a + " [" + t.ba() + "]"), xi(t);
          }
        } finally {
          Oi(t);
        }
      }
  }
  function Oi(t, e) {
    if (t.g) {
      Li(t);
      var n = t.g,
        r = t.C[0] ? he : null;
      (t.g = null), (t.C = null), e || kn(t, "ready");
      try {
        n.onreadystatechange = r;
      } catch (t) {}
    }
  }
  function Li(t) {
    t.g && t.K && (t.g.ontimeout = null),
      t.A && (le.clearTimeout(t.A), (t.A = null));
  }
  function Pi(t) {
    return t.g ? t.g.readyState : 0;
  }
  function Mi(t) {
    try {
      if (!t.g) return null;
      if ("response" in t.g) return t.g.response;
      switch (t.J) {
        case Ai:
        case "text":
          return t.g.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in t.g)
            return t.g.mozResponseArrayBuffer;
      }
      return null;
    } catch (t) {
      return null;
    }
  }
  function Fi(t, e, n) {
    t: {
      for (r in n) {
        var r = !1;
        break t;
      }
      r = !0;
    }
    r ||
      ((n = (function (t) {
        var e = "";
        return (
          Le(t, function (t, n) {
            (e += n), (e += ":"), (e += t), (e += "\r\n");
          }),
          e
        );
      })(n)),
      "string" == typeof t
        ? null != n && encodeURIComponent(String(n))
        : zr(t, e, n));
  }
  function Vi(t, e, n) {
    return (n && n.internalChannelParams && n.internalChannelParams[t]) || e;
  }
  function qi(t) {
    (this.za = 0),
      (this.l = []),
      (this.h = new Wn()),
      (this.la =
        this.oa =
        this.F =
        this.W =
        this.g =
        this.sa =
        this.D =
        this.aa =
        this.o =
        this.P =
        this.s =
          null),
      (this.Za = this.V = 0),
      (this.Xa = Vi("failFast", !1, t)),
      (this.N = this.v = this.u = this.m = this.j = null),
      (this.X = !0),
      (this.I = this.ta = this.U = -1),
      (this.Y = this.A = this.C = 0),
      (this.Pa = Vi("baseRetryDelayMs", 5e3, t)),
      (this.$a = Vi("retryDelaySeedMs", 1e4, t)),
      (this.Ya = Vi("forwardChannelMaxRetries", 2, t)),
      (this.ra = Vi("forwardChannelRequestTimeoutMs", 2e4, t)),
      (this.qa = (t && t.xmlHttpFactory) || void 0),
      (this.Ba = (t && t.Yb) || !1),
      (this.K = void 0),
      (this.H = (t && t.supportsCrossDomainXhr) || !1),
      (this.J = ""),
      (this.i = new si(t && t.concurrentRequestLimit)),
      (this.Ca = new vi()),
      (this.ja = (t && t.fastHandshake) || !1),
      (this.Ra = (t && t.Wb) || !1),
      t && t.Aa && this.h.Aa(),
      t && t.forceLongPolling && (this.X = !1),
      (this.$ = (!this.ja && this.X && t && t.detectBufferingProxy) || !1),
      (this.ka = void 0),
      (this.O = 0),
      (this.L = !1),
      (this.B = null),
      (this.Wa = !t || !1 !== t.Xb);
  }
  function Ui(t) {
    if ((Bi(t), 3 == t.G)) {
      var e = t.V++,
        n = Vr(t.F);
      zr(n, "SID", t.J),
        zr(n, "RID", e),
        zr(n, "TYPE", "terminate"),
        Gi(t, n),
        ((e = new gr(t, t.h, e, void 0)).K = 2),
        (e.v = Kr(Vr(n))),
        (n = !1),
        le.navigator &&
          le.navigator.sendBeacon &&
          (n = le.navigator.sendBeacon(e.v.toString(), "")),
        !n && le.Image && ((new Image().src = e.v), (n = !0)),
        n || ((e.g = io(e.l, null)), e.g.ea(e.v)),
        (e.F = Date.now()),
        Ar(e);
    }
    no(t);
  }
  function ji(t) {
    t.g && (Yi(t), t.g.cancel(), (t.g = null));
  }
  function Bi(t) {
    ji(t),
      t.u && (le.clearTimeout(t.u), (t.u = null)),
      Ji(t),
      t.i.cancel(),
      t.m && ("number" == typeof t.m && le.clearTimeout(t.m), (t.m = null));
  }
  function zi(t, e) {
    t.l.push(new oi(t.Za++, e)), 3 == t.G && Ki(t);
  }
  function Ki(t) {
    ui(t.i) || t.m || ((t.m = !0), Mn(t.Ha, t), (t.C = 0));
  }
  function $i(t, e) {
    var n;
    n = e ? e.m : t.V++;
    var r = Vr(t.F);
    zr(r, "SID", t.J),
      zr(r, "RID", n),
      zr(r, "AID", t.U),
      Gi(t, r),
      t.o && t.s && Fi(r, t.o, t.s),
      (n = new gr(t, t.h, n, t.C + 1)),
      null === t.o && (n.H = t.s),
      e && (t.l = e.D.concat(t.l)),
      (e = Hi(t, n, 1e3)),
      n.setTimeout(
        Math.round(0.5 * t.ra) + Math.round(0.5 * t.ra * Math.random())
      ),
      hi(t.i, n),
      Er(n, r, e);
  }
  function Gi(t, e) {
    t.j &&
      Rr({}, function (t, n) {
        zr(e, n, t);
      });
  }
  function Hi(t, e, n) {
    n = Math.min(t.l.length, n);
    var r = t.j ? me(t.j.Oa, t.j, t) : null;
    t: for (var i = t.l, o = -1; ; ) {
      var s = ["count=" + n];
      -1 == o
        ? 0 < n
          ? ((o = i[0].h), s.push("ofs=" + o))
          : (o = 0)
        : s.push("ofs=" + o);
      for (var a = !0, u = 0; u < n; u++) {
        var c = i[u].h,
          l = i[u].g;
        if (0 > (c -= o)) (o = Math.max(0, i[u].h - 100)), (a = !1);
        else
          try {
            gi(l, s, "req" + c + "_");
          } catch (t) {
            r && r(l);
          }
      }
      if (a) {
        r = s.join("&");
        break t;
      }
    }
    return (t = t.l.splice(0, n)), (e.D = t), r;
  }
  function Qi(t) {
    t.g || t.u || ((t.Y = 1), Mn(t.Ga, t), (t.A = 0));
  }
  function Wi(t) {
    return (
      !(t.g || t.u || 3 <= t.A) &&
      (t.Y++, (t.u = or(me(t.Ga, t), to(t, t.A))), t.A++, !0)
    );
  }
  function Yi(t) {
    null != t.B && (le.clearTimeout(t.B), (t.B = null));
  }
  function Xi(t) {
    (t.g = new gr(t, t.h, "rpc", t.Y)),
      null === t.o && (t.g.H = t.s),
      (t.g.O = 0);
    var e = Vr(t.oa);
    zr(e, "RID", "rpc"),
      zr(e, "SID", t.J),
      zr(e, "CI", t.N ? "0" : "1"),
      zr(e, "AID", t.U),
      Gi(t, e),
      zr(e, "TYPE", "xmlhttp"),
      t.o && t.s && Fi(e, t.o, t.s),
      t.K && t.g.setTimeout(t.K);
    var n = t.g;
    (t = t.la),
      (n.K = 1),
      (n.v = Kr(Vr(e))),
      (n.s = null),
      (n.U = !0),
      Ir(n, t);
  }
  function Ji(t) {
    null != t.v && (le.clearTimeout(t.v), (t.v = null));
  }
  function Zi(t, e) {
    var n = null;
    if (t.g == e) {
      Ji(t), Yi(t), (t.g = null);
      var r = 2;
    } else {
      if (!li(t.i, e)) return;
      (n = e.D), fi(t.i, e), (r = 1);
    }
    if (((t.I = e.N), 0 != t.G))
      if (e.i)
        if (1 == r) {
          (n = e.s ? e.s.length : 0), (e = Date.now() - e.F);
          var i = t.C;
          kn((r = Zn()), new ir(r, n, e, i)), Ki(t);
        } else Qi(t);
      else if (
        3 == (i = e.o) ||
        (0 == i && 0 < t.I) ||
        !(
          (1 == r &&
            (function (t, e) {
              return !(
                ci(t.i) >= t.i.j - (t.m ? 1 : 0) ||
                (t.m
                  ? ((t.l = e.D.concat(t.l)), 0)
                  : 1 == t.G ||
                    2 == t.G ||
                    t.C >= (t.Xa ? 0 : t.Ya) ||
                    ((t.m = or(me(t.Ha, t, e), to(t, t.C))), t.C++, 0))
              );
            })(t, e)) ||
          (2 == r && Wi(t))
        )
      )
        switch ((n && 0 < n.length && ((e = t.i), (e.i = e.i.concat(n))), i)) {
          case 1:
            eo(t, 5);
            break;
          case 4:
            eo(t, 10);
            break;
          case 3:
            eo(t, 6);
            break;
          default:
            eo(t, 2);
        }
  }
  function to(t, e) {
    var n = t.Pa + Math.floor(Math.random() * t.$a);
    return t.j || (n *= 2), n * e;
  }
  function eo(t, e) {
    if ((t.h.info("Error code " + e), 2 == e)) {
      var n = null;
      t.j && (n = null);
      var r = me(t.jb, t);
      n ||
        ((n = new Fr("//www.google.com/images/cleardot.gif")),
        (le.location && "http" == le.location.protocol) || qr(n, "https"),
        Kr(n)),
        (function (t, e) {
          var n = new Wn();
          if (le.Image) {
            var r = new Image();
            (r.onload = be(yi, n, r, "TestLoadImage: loaded", !0, e)),
              (r.onerror = be(yi, n, r, "TestLoadImage: error", !1, e)),
              (r.onabort = be(yi, n, r, "TestLoadImage: abort", !1, e)),
              (r.ontimeout = be(yi, n, r, "TestLoadImage: timeout", !1, e)),
              le.setTimeout(function () {
                r.ontimeout && r.ontimeout();
              }, 1e4),
              (r.src = t);
          } else e(!1);
        })(n.toString(), r);
    } else rr(2);
    (t.G = 0), t.j && t.j.va(e), no(t), Bi(t);
  }
  function no(t) {
    (t.G = 0),
      (t.I = -1),
      t.j &&
        ((0 == di(t.i).length && 0 == t.l.length) ||
          ((t.i.i.length = 0), Ae(t.l), (t.l.length = 0)),
        t.j.ua());
  }
  function ro(t, e, n) {
    var r = (function (t) {
      return t instanceof Fr ? Vr(t) : new Fr(t, void 0);
    })(n);
    if ("" != r.i) e && Ur(r, e + "." + r.i), jr(r, r.m);
    else {
      var i = le.location;
      r = (function (t, e, n, r) {
        var i = new Fr(null, void 0);
        return t && qr(i, t), e && Ur(i, e), n && jr(i, n), r && (i.l = r), i;
      })(i.protocol, e ? e + "." + i.hostname : i.hostname, +i.port, n);
    }
    return (
      t.aa &&
        Le(t.aa, function (t, e) {
          zr(r, e, t);
        }),
      (e = t.D),
      (n = t.sa),
      e && n && zr(r, e, n),
      zr(r, "VER", t.ma),
      Gi(t, r),
      r
    );
  }
  function io(t, e, n) {
    if (e && !t.H)
      throw Error("Can't create secondary domain capable XhrIo object.");
    return (
      ((e = n && t.Ba && !t.qa ? new Si(new mi({ ib: !0 })) : new Si(t.qa)).L =
        t.H),
      e
    );
  }
  function oo() {}
  function so() {
    if (Be && !(10 <= Number(en)))
      throw Error("Environmental error: no available transport.");
  }
  function ao(t, e) {
    An.call(this),
      (this.g = new qi(e)),
      (this.l = t),
      (this.h = (e && e.messageUrlParams) || null),
      (t = (e && e.messageHeaders) || null),
      e &&
        e.clientProtocolHeaderRequired &&
        (t
          ? (t["X-Client-Protocol"] = "webchannel")
          : (t = { "X-Client-Protocol": "webchannel" })),
      (this.g.s = t),
      (t = (e && e.initMessageHeaders) || null),
      e &&
        e.messageContentType &&
        (t
          ? (t["X-WebChannel-Content-Type"] = e.messageContentType)
          : (t = { "X-WebChannel-Content-Type": e.messageContentType })),
      e &&
        e.ya &&
        (t
          ? (t["X-WebChannel-Client-Profile"] = e.ya)
          : (t = { "X-WebChannel-Client-Profile": e.ya })),
      (this.g.P = t),
      (t = e && e.httpHeadersOverwriteParam) && !ke(t) && (this.g.o = t),
      (this.A = (e && e.supportsCrossDomainXhr) || !1),
      (this.v = (e && e.sendRawJson) || !1),
      (e = e && e.httpSessionIdParam) &&
        !ke(e) &&
        ((this.g.D = e),
        null !== (t = this.h) && e in t && e in (t = this.h) && delete t[e]),
      (this.j = new lo(this));
  }
  function uo(t) {
    dr.call(this);
    var e = t.__sm__;
    if (e) {
      t: {
        for (var n in e) {
          t = n;
          break t;
        }
        t = void 0;
      }
      (this.i = t) &&
        ((t = this.i), (e = null !== e && t in e ? e[t] : void 0)),
        (this.data = e);
    } else this.data = t;
  }
  function co() {
    pr.call(this), (this.status = 1);
  }
  function lo(t) {
    this.g = t;
  }
  ((ae = Si.prototype).ea = function (t, e, n, r) {
    if (this.g)
      throw Error(
        "[goog.net.XhrIo] Object is active with another request=" +
          this.H +
          "; newUri=" +
          t
      );
    (e = e ? e.toUpperCase() : "GET"),
      (this.H = t),
      (this.j = ""),
      (this.m = 0),
      (this.D = !1),
      (this.h = !0),
      (this.g = this.u ? this.u.g() : hr.g()),
      (this.C = this.u ? cr(this.u) : cr(hr)),
      (this.g.onreadystatechange = me(this.Fa, this));
    try {
      (this.F = !0), this.g.open(e, String(t), !0), (this.F = !1);
    } catch (t) {
      return void Ci(this, t);
    }
    t = n || "";
    var i = new Or(this.headers);
    r &&
      Rr(r, function (t, e) {
        i.set(e, t);
      }),
      (r = (function (t) {
        t: {
          for (
            var e = Di,
              n = t.length,
              r = "string" == typeof t ? t.split("") : t,
              i = 0;
            i < n;
            i++
          )
            if (i in r && e.call(void 0, r[i], i, t)) {
              e = i;
              break t;
            }
          e = -1;
        }
        return 0 > e ? null : "string" == typeof t ? t.charAt(e) : t[e];
      })(i.T())),
      (n = le.FormData && t instanceof le.FormData),
      !(0 <= Te(Ni, e)) ||
        r ||
        n ||
        i.set(
          "Content-Type",
          "application/x-www-form-urlencoded;charset=utf-8"
        ),
      i.forEach(function (t, e) {
        this.g.setRequestHeader(e, t);
      }, this),
      this.J && (this.g.responseType = this.J),
      "withCredentials" in this.g &&
        this.g.withCredentials !== this.L &&
        (this.g.withCredentials = this.L);
    try {
      Li(this),
        0 < this.B &&
          ((this.K = (function (t) {
            return (
              Be &&
              Ze() &&
              "number" == typeof t.timeout &&
              void 0 !== t.ontimeout
            );
          })(this.g))
            ? ((this.g.timeout = this.B),
              (this.g.ontimeout = me(this.pa, this)))
            : (this.A = Bn(this.pa, this.B, this))),
        (this.v = !0),
        this.g.send(t),
        (this.v = !1);
    } catch (t) {
      Ci(this, t);
    }
  }),
    (ae.pa = function () {
      void 0 !== ce &&
        this.g &&
        ((this.j = "Timed out after " + this.B + "ms, aborting"),
        (this.m = 8),
        kn(this, "timeout"),
        this.abort(8));
    }),
    (ae.abort = function (t) {
      this.g &&
        this.h &&
        ((this.h = !1),
        (this.l = !0),
        this.g.abort(),
        (this.l = !1),
        (this.m = t || 7),
        kn(this, "complete"),
        kn(this, "abort"),
        Oi(this));
    }),
    (ae.M = function () {
      this.g &&
        (this.h &&
          ((this.h = !1), (this.l = !0), this.g.abort(), (this.l = !1)),
        Oi(this, !0)),
        Si.Z.M.call(this);
    }),
    (ae.Fa = function () {
      this.s || (this.F || this.v || this.l ? Ri(this) : this.cb());
    }),
    (ae.cb = function () {
      Ri(this);
    }),
    (ae.ba = function () {
      try {
        return 2 < Pi(this) ? this.g.status : -1;
      } catch (t) {
        return -1;
      }
    }),
    (ae.ga = function () {
      try {
        return this.g ? this.g.responseText : "";
      } catch (t) {
        return "";
      }
    }),
    (ae.Qa = function (t) {
      if (this.g) {
        var e = this.g.responseText;
        return t && 0 == e.indexOf(t) && (e = e.substring(t.length)), _i(e);
      }
    }),
    (ae.Da = function () {
      return this.m;
    }),
    (ae.La = function () {
      return "string" == typeof this.j ? this.j : String(this.j);
    }),
    ((ae = qi.prototype).ma = 8),
    (ae.G = 1),
    (ae.hb = function (t) {
      try {
        this.h.info("Origin Trials invoked: " + t);
      } catch (t) {}
    }),
    (ae.Ha = function (t) {
      if (this.m)
        if (((this.m = null), 1 == this.G)) {
          if (!t) {
            (this.V = Math.floor(1e5 * Math.random())), (t = this.V++);
            var e = new gr(this, this.h, t, void 0),
              n = this.s;
            if (
              (this.P && (n ? Fe((n = Pe(n)), this.P) : (n = this.P)),
              null === this.o && (e.H = n),
              this.ja)
            )
              t: {
                for (var r = 0, i = 0; i < this.l.length; i++) {
                  var o = this.l[i];
                  if (
                    void 0 ===
                    (o =
                      "__data__" in o.g && "string" == typeof (o = o.g.__data__)
                        ? o.length
                        : void 0)
                  )
                    break;
                  if (4096 < (r += o)) {
                    r = i;
                    break t;
                  }
                  if (4096 === r || i === this.l.length - 1) {
                    r = i + 1;
                    break t;
                  }
                }
                r = 1e3;
              }
            else r = 1e3;
            (r = Hi(this, e, r)),
              zr((i = Vr(this.F)), "RID", t),
              zr(i, "CVER", 22),
              this.D && zr(i, "X-HTTP-Session-Id", this.D),
              Gi(this, i),
              this.o && n && Fi(i, this.o, n),
              hi(this.i, e),
              this.Ra && zr(i, "TYPE", "init"),
              this.ja
                ? (zr(i, "$req", r),
                  zr(i, "SID", "null"),
                  (e.$ = !0),
                  Er(e, i, null))
                : Er(e, i, r),
              (this.G = 2);
          }
        } else
          3 == this.G &&
            (t ? $i(this, t) : 0 == this.l.length || ui(this.i) || $i(this));
    }),
    (ae.Ga = function () {
      if (
        ((this.u = null),
        Xi(this),
        this.$ && !(this.L || null == this.g || 0 >= this.O))
      ) {
        var t = 2 * this.O;
        this.h.info("BP detection timer enabled: " + t),
          (this.B = or(me(this.bb, this), t));
      }
    }),
    (ae.bb = function () {
      this.B &&
        ((this.B = null),
        this.h.info("BP detection timeout reached."),
        this.h.info("Buffering proxy detected and switch to long-polling!"),
        (this.N = !1),
        (this.L = !0),
        rr(10),
        ji(this),
        Xi(this));
    }),
    (ae.ab = function () {
      null != this.v && ((this.v = null), ji(this), Wi(this), rr(19));
    }),
    (ae.jb = function (t) {
      t
        ? (this.h.info("Successfully pinged google.com"), rr(2))
        : (this.h.info("Failed to ping google.com"), rr(1));
    }),
    ((ae = oo.prototype).xa = function () {}),
    (ae.wa = function () {}),
    (ae.va = function () {}),
    (ae.ua = function () {}),
    (ae.Oa = function () {}),
    (so.prototype.g = function (t, e) {
      return new ao(t, e);
    }),
    we(ao, An),
    (ao.prototype.m = function () {
      (this.g.j = this.j), this.A && (this.g.H = !0);
      var t = this.g,
        e = this.l,
        n = this.h || void 0;
      t.Wa && (t.h.info("Origin Trials enabled."), Mn(me(t.hb, t, e))),
        rr(0),
        (t.W = e),
        (t.aa = n || {}),
        (t.N = t.X),
        (t.F = ro(t, null, t.W)),
        Ki(t);
    }),
    (ao.prototype.close = function () {
      Ui(this.g);
    }),
    (ao.prototype.u = function (t) {
      if ("string" == typeof t) {
        var e = {};
        (e.__data__ = t), zi(this.g, e);
      } else
        this.v ? (((e = {}).__data__ = Dn(t)), zi(this.g, e)) : zi(this.g, t);
    }),
    (ao.prototype.M = function () {
      (this.g.j = null),
        delete this.j,
        Ui(this.g),
        delete this.g,
        ao.Z.M.call(this);
    }),
    we(uo, dr),
    we(co, pr),
    we(lo, oo),
    (lo.prototype.xa = function () {
      kn(this.g, "a");
    }),
    (lo.prototype.wa = function (t) {
      kn(this.g, new uo(t));
    }),
    (lo.prototype.va = function (t) {
      kn(this.g, new co(t));
    }),
    (lo.prototype.ua = function () {
      kn(this.g, "b");
    }),
    (so.prototype.createWebChannel = so.prototype.g),
    (ao.prototype.send = ao.prototype.u),
    (ao.prototype.open = ao.prototype.m),
    (ao.prototype.close = ao.prototype.close),
    (sr.NO_ERROR = 0),
    (sr.TIMEOUT = 8),
    (sr.HTTP_ERROR = 6),
    (ar.COMPLETE = "complete"),
    (lr.EventType = fr),
    (fr.OPEN = "a"),
    (fr.CLOSE = "b"),
    (fr.ERROR = "c"),
    (fr.MESSAGE = "d"),
    (An.prototype.listen = An.prototype.N),
    (Si.prototype.listenOnce = Si.prototype.O),
    (Si.prototype.getLastError = Si.prototype.La),
    (Si.prototype.getLastErrorCode = Si.prototype.Da),
    (Si.prototype.getStatus = Si.prototype.ba),
    (Si.prototype.getResponseJson = Si.prototype.Qa),
    (Si.prototype.getResponseText = Si.prototype.ga),
    (Si.prototype.send = Si.prototype.ea);
  var ho = sr,
    fo = ar,
    po = Xn,
    vo = 10,
    go = 11,
    yo = mi,
    mo = lr,
    bo = Si,
    wo = (function () {
      function t(t, e) {
        var n = this;
        (this.previousValue = t),
          e &&
            ((e.sequenceNumberHandler = function (t) {
              return n.t(t);
            }),
            (this.i = function (t) {
              return e.writeSequenceNumber(t);
            }));
      }
      return (
        (t.prototype.t = function (t) {
          return (
            (this.previousValue = Math.max(t, this.previousValue)),
            this.previousValue
          );
        }),
        (t.prototype.next = function () {
          var t = ++this.previousValue;
          return this.i && this.i(t), t;
        }),
        t
      );
    })();
  wo.o = -1;
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var Eo = {
      OK: "ok",
      CANCELLED: "cancelled",
      UNKNOWN: "unknown",
      INVALID_ARGUMENT: "invalid-argument",
      DEADLINE_EXCEEDED: "deadline-exceeded",
      NOT_FOUND: "not-found",
      ALREADY_EXISTS: "already-exists",
      PERMISSION_DENIED: "permission-denied",
      UNAUTHENTICATED: "unauthenticated",
      RESOURCE_EXHAUSTED: "resource-exhausted",
      FAILED_PRECONDITION: "failed-precondition",
      ABORTED: "aborted",
      OUT_OF_RANGE: "out-of-range",
      UNIMPLEMENTED: "unimplemented",
      INTERNAL: "internal",
      UNAVAILABLE: "unavailable",
      DATA_LOSS: "data-loss",
    },
    Io = (function (t) {
      function e(e, n) {
        var r = this;
        return (
          ((r = t.call(this, n) || this).code = e),
          (r.message = n),
          (r.name = "FirebaseError"),
          (r.toString = function () {
            return r.name + ": [code=" + r.code + "]: " + r.message;
          }),
          r
        );
      }
      return ut(e, t), e;
    })(Error),
    To = new Bt("@firebase/firestore");
  function _o() {
    return To.logLevel;
  }
  function So(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (To.logLevel <= Pt.DEBUG) {
      var r = e.map(No);
      To.debug.apply(To, pt(["Firestore (8.8.0): " + t], r));
    }
  }
  function Ao(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (To.logLevel <= Pt.ERROR) {
      var r = e.map(No);
      To.error.apply(To, pt(["Firestore (8.8.0): " + t], r));
    }
  }
  function ko(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (To.logLevel <= Pt.WARN) {
      var r = e.map(No);
      To.warn.apply(To, pt(["Firestore (8.8.0): " + t], r));
    }
  }
  function No(t) {
    if ("string" == typeof t) return t;
    try {
      return (e = t), JSON.stringify(e);
    } catch (e) {
      return t;
    }
    var e;
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Do(t) {
    void 0 === t && (t = "Unexpected state");
    var e = "FIRESTORE (8.8.0) INTERNAL ASSERTION FAILED: " + t;
    throw (Ao(e), new Error(e));
  }
  function Co(t, e) {
    t || Do();
  }
  function xo(t, e) {
    return t;
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Ro(t) {
    var e = "undefined" != typeof self && (self.crypto || self.msCrypto),
      n = new Uint8Array(t);
    if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n);
    else for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
    return n;
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Oo = (function () {
    function t() {}
    return (
      (t.u = function () {
        for (
          var t =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            e = Math.floor(256 / t.length) * t.length,
            n = "";
          n.length < 20;

        )
          for (var r = Ro(40), i = 0; i < r.length; ++i)
            n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
        return n;
      }),
      t
    );
  })();
  function Lo(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
  }
  function Po(t, e, n) {
    return (
      t.length === e.length &&
      t.every(function (t, r) {
        return n(t, e[r]);
      })
    );
  }
  function Mo(t) {
    return t + "\0";
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Fo = (function () {
      function t(t, e) {
        if (((this.seconds = t), (this.nanoseconds = e), e < 0))
          throw new Io(
            Eo.INVALID_ARGUMENT,
            "Timestamp nanoseconds out of range: " + e
          );
        if (e >= 1e9)
          throw new Io(
            Eo.INVALID_ARGUMENT,
            "Timestamp nanoseconds out of range: " + e
          );
        if (t < -62135596800)
          throw new Io(
            Eo.INVALID_ARGUMENT,
            "Timestamp seconds out of range: " + t
          );
        if (t >= 253402300800)
          throw new Io(
            Eo.INVALID_ARGUMENT,
            "Timestamp seconds out of range: " + t
          );
      }
      return (
        (t.now = function () {
          return t.fromMillis(Date.now());
        }),
        (t.fromDate = function (e) {
          return t.fromMillis(e.getTime());
        }),
        (t.fromMillis = function (e) {
          var n = Math.floor(e / 1e3);
          return new t(n, Math.floor(1e6 * (e - 1e3 * n)));
        }),
        (t.prototype.toDate = function () {
          return new Date(this.toMillis());
        }),
        (t.prototype.toMillis = function () {
          return 1e3 * this.seconds + this.nanoseconds / 1e6;
        }),
        (t.prototype._compareTo = function (t) {
          return this.seconds === t.seconds
            ? Lo(this.nanoseconds, t.nanoseconds)
            : Lo(this.seconds, t.seconds);
        }),
        (t.prototype.isEqual = function (t) {
          return (
            t.seconds === this.seconds && t.nanoseconds === this.nanoseconds
          );
        }),
        (t.prototype.toString = function () {
          return (
            "Timestamp(seconds=" +
            this.seconds +
            ", nanoseconds=" +
            this.nanoseconds +
            ")"
          );
        }),
        (t.prototype.toJSON = function () {
          return { seconds: this.seconds, nanoseconds: this.nanoseconds };
        }),
        (t.prototype.valueOf = function () {
          var t = this.seconds - -62135596800;
          return (
            String(t).padStart(12, "0") +
            "." +
            String(this.nanoseconds).padStart(9, "0")
          );
        }),
        t
      );
    })(),
    Vo = (function () {
      function t(t) {
        this.timestamp = t;
      }
      return (
        (t.fromTimestamp = function (e) {
          return new t(e);
        }),
        (t.min = function () {
          return new t(new Fo(0, 0));
        }),
        (t.prototype.compareTo = function (t) {
          return this.timestamp._compareTo(t.timestamp);
        }),
        (t.prototype.isEqual = function (t) {
          return this.timestamp.isEqual(t.timestamp);
        }),
        (t.prototype.toMicroseconds = function () {
          return (
            1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
          );
        }),
        (t.prototype.toString = function () {
          return "SnapshotVersion(" + this.timestamp.toString() + ")";
        }),
        (t.prototype.toTimestamp = function () {
          return this.timestamp;
        }),
        t
      );
    })();
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function qo(t) {
    var e = 0;
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e;
  }
  function Uo(t, e) {
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
  }
  function jo(t) {
    for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
    return !0;
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Bo = (function () {
      function t(t, e, n) {
        void 0 === e ? (e = 0) : e > t.length && Do(),
          void 0 === n ? (n = t.length - e) : n > t.length - e && Do(),
          (this.segments = t),
          (this.offset = e),
          (this.len = n);
      }
      return (
        Object.defineProperty(t.prototype, "length", {
          get: function () {
            return this.len;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.isEqual = function (e) {
          return 0 === t.comparator(this, e);
        }),
        (t.prototype.child = function (e) {
          var n = this.segments.slice(this.offset, this.limit());
          return (
            e instanceof t
              ? e.forEach(function (t) {
                  n.push(t);
                })
              : n.push(e),
            this.construct(n)
          );
        }),
        (t.prototype.limit = function () {
          return this.offset + this.length;
        }),
        (t.prototype.popFirst = function (t) {
          return (
            (t = void 0 === t ? 1 : t),
            this.construct(this.segments, this.offset + t, this.length - t)
          );
        }),
        (t.prototype.popLast = function () {
          return this.construct(this.segments, this.offset, this.length - 1);
        }),
        (t.prototype.firstSegment = function () {
          return this.segments[this.offset];
        }),
        (t.prototype.lastSegment = function () {
          return this.get(this.length - 1);
        }),
        (t.prototype.get = function (t) {
          return this.segments[this.offset + t];
        }),
        (t.prototype.isEmpty = function () {
          return 0 === this.length;
        }),
        (t.prototype.isPrefixOf = function (t) {
          if (t.length < this.length) return !1;
          for (var e = 0; e < this.length; e++)
            if (this.get(e) !== t.get(e)) return !1;
          return !0;
        }),
        (t.prototype.isImmediateParentOf = function (t) {
          if (this.length + 1 !== t.length) return !1;
          for (var e = 0; e < this.length; e++)
            if (this.get(e) !== t.get(e)) return !1;
          return !0;
        }),
        (t.prototype.forEach = function (t) {
          for (var e = this.offset, n = this.limit(); e < n; e++)
            t(this.segments[e]);
        }),
        (t.prototype.toArray = function () {
          return this.segments.slice(this.offset, this.limit());
        }),
        (t.comparator = function (t, e) {
          for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
            var i = t.get(r),
              o = e.get(r);
            if (i < o) return -1;
            if (i > o) return 1;
          }
          return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
        }),
        t
      );
    })(),
    zo = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        ut(e, t),
        (e.prototype.construct = function (t, n, r) {
          return new e(t, n, r);
        }),
        (e.prototype.canonicalString = function () {
          return this.toArray().join("/");
        }),
        (e.prototype.toString = function () {
          return this.canonicalString();
        }),
        (e.fromString = function () {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          for (var r = [], i = 0, o = t; i < o.length; i++) {
            var s = o[i];
            if (s.indexOf("//") >= 0)
              throw new Io(
                Eo.INVALID_ARGUMENT,
                "Invalid segment (" +
                  s +
                  "). Paths must not contain // in them."
              );
            r.push.apply(
              r,
              s.split("/").filter(function (t) {
                return t.length > 0;
              })
            );
          }
          return new e(r);
        }),
        (e.emptyPath = function () {
          return new e([]);
        }),
        e
      );
    })(Bo),
    Ko = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
    $o = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        ut(e, t),
        (e.prototype.construct = function (t, n, r) {
          return new e(t, n, r);
        }),
        (e.isValidIdentifier = function (t) {
          return Ko.test(t);
        }),
        (e.prototype.canonicalString = function () {
          return this.toArray()
            .map(function (t) {
              return (
                (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
                e.isValidIdentifier(t) || (t = "`" + t + "`"),
                t
              );
            })
            .join(".");
        }),
        (e.prototype.toString = function () {
          return this.canonicalString();
        }),
        (e.prototype.isKeyField = function () {
          return 1 === this.length && "__name__" === this.get(0);
        }),
        (e.keyField = function () {
          return new e(["__name__"]);
        }),
        (e.fromServerFormat = function (t) {
          for (
            var n = [],
              r = "",
              i = 0,
              o = function () {
                if (0 === r.length)
                  throw new Io(
                    Eo.INVALID_ARGUMENT,
                    "Invalid field path (" +
                      t +
                      "). Paths must not be empty, begin with '.', end with '.', or contain '..'"
                  );
                n.push(r), (r = "");
              },
              s = !1;
            i < t.length;

          ) {
            var a = t[i];
            if ("\\" === a) {
              if (i + 1 === t.length)
                throw new Io(
                  Eo.INVALID_ARGUMENT,
                  "Path has trailing escape character: " + t
                );
              var u = t[i + 1];
              if ("\\" !== u && "." !== u && "`" !== u)
                throw new Io(
                  Eo.INVALID_ARGUMENT,
                  "Path has invalid escape sequence: " + t
                );
              (r += u), (i += 2);
            } else
              "`" === a
                ? ((s = !s), i++)
                : "." !== a || s
                ? ((r += a), i++)
                : (o(), i++);
          }
          if ((o(), s))
            throw new Io(Eo.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
          return new e(n);
        }),
        (e.emptyPath = function () {
          return new e([]);
        }),
        e
      );
    })(Bo),
    Go = (function () {
      function t(t) {
        (this.fields = t), t.sort($o.comparator);
      }
      return (
        (t.prototype.covers = function (t) {
          for (var e = 0, n = this.fields; e < n.length; e++)
            if (n[e].isPrefixOf(t)) return !0;
          return !1;
        }),
        (t.prototype.isEqual = function (t) {
          return Po(this.fields, t.fields, function (t, e) {
            return t.isEqual(e);
          });
        }),
        t
      );
    })(),
    Ho = (function () {
      function t(t) {
        this.binaryString = t;
      }
      return (
        (t.fromBase64String = function (e) {
          return new t(atob(e));
        }),
        (t.fromUint8Array = function (e) {
          return new t(
            (function (t) {
              for (var e = "", n = 0; n < t.length; ++n)
                e += String.fromCharCode(t[n]);
              return e;
            })(e)
          );
        }),
        (t.prototype.toBase64 = function () {
          return (t = this.binaryString), btoa(t);
          var t;
        }),
        (t.prototype.toUint8Array = function () {
          return (function (t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++)
              e[n] = t.charCodeAt(n);
            return e;
          })(this.binaryString);
        }),
        (t.prototype.approximateByteSize = function () {
          return 2 * this.binaryString.length;
        }),
        (t.prototype.compareTo = function (t) {
          return Lo(this.binaryString, t.binaryString);
        }),
        (t.prototype.isEqual = function (t) {
          return this.binaryString === t.binaryString;
        }),
        t
      );
    })();
  Ho.EMPTY_BYTE_STRING = new Ho("");
  var Qo = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
  function Wo(t) {
    if ((Co(!!t), "string" == typeof t)) {
      var e = 0,
        n = Qo.exec(t);
      if ((Co(!!n), n[1])) {
        var r = n[1];
        (r = (r + "000000000").substr(0, 9)), (e = Number(r));
      }
      var i = new Date(t);
      return { seconds: Math.floor(i.getTime() / 1e3), nanos: e };
    }
    return { seconds: Yo(t.seconds), nanos: Yo(t.nanos) };
  }
  function Yo(t) {
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
  }
  function Xo(t) {
    return "string" == typeof t ? Ho.fromBase64String(t) : Ho.fromUint8Array(t);
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Jo(t) {
    var e, n;
    return (
      "server_timestamp" ===
      (null ===
        (n = (
          (null === (e = null == t ? void 0 : t.mapValue) || void 0 === e
            ? void 0
            : e.fields) || {}
        ).__type__) || void 0 === n
        ? void 0
        : n.stringValue)
    );
  }
  function Zo(t) {
    var e = t.mapValue.fields.__previous_value__;
    return Jo(e) ? Zo(e) : e;
  }
  function ts(t) {
    var e = Wo(t.mapValue.fields.__local_write_time__.timestampValue);
    return new Fo(e.seconds, e.nanos);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function es(t) {
    return null == t;
  }
  function ns(t) {
    return 0 === t && 1 / t == -1 / 0;
  }
  function rs(t) {
    return (
      "number" == typeof t &&
      Number.isInteger(t) &&
      !ns(t) &&
      t <= Number.MAX_SAFE_INTEGER &&
      t >= Number.MIN_SAFE_INTEGER
    );
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var is = (function () {
    function t(t) {
      this.path = t;
    }
    return (
      (t.fromPath = function (e) {
        return new t(zo.fromString(e));
      }),
      (t.fromName = function (e) {
        return new t(zo.fromString(e).popFirst(5));
      }),
      (t.prototype.hasCollectionId = function (t) {
        return (
          this.path.length >= 2 && this.path.get(this.path.length - 2) === t
        );
      }),
      (t.prototype.isEqual = function (t) {
        return null !== t && 0 === zo.comparator(this.path, t.path);
      }),
      (t.prototype.toString = function () {
        return this.path.toString();
      }),
      (t.comparator = function (t, e) {
        return zo.comparator(t.path, e.path);
      }),
      (t.isDocumentKey = function (t) {
        return t.length % 2 == 0;
      }),
      (t.fromSegments = function (e) {
        return new t(new zo(e.slice()));
      }),
      t
    );
  })();
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function os(t) {
    return "nullValue" in t
      ? 0
      : "booleanValue" in t
      ? 1
      : "integerValue" in t || "doubleValue" in t
      ? 2
      : "timestampValue" in t
      ? 3
      : "stringValue" in t
      ? 5
      : "bytesValue" in t
      ? 6
      : "referenceValue" in t
      ? 7
      : "geoPointValue" in t
      ? 8
      : "arrayValue" in t
      ? 9
      : "mapValue" in t
      ? Jo(t)
        ? 4
        : 10
      : Do();
  }
  function ss(t, e) {
    var n = os(t);
    if (n !== os(e)) return !1;
    switch (n) {
      case 0:
        return !0;
      case 1:
        return t.booleanValue === e.booleanValue;
      case 4:
        return ts(t).isEqual(ts(e));
      case 3:
        return (function (t, e) {
          if (
            "string" == typeof t.timestampValue &&
            "string" == typeof e.timestampValue &&
            t.timestampValue.length === e.timestampValue.length
          )
            return t.timestampValue === e.timestampValue;
          var n = Wo(t.timestampValue),
            r = Wo(e.timestampValue);
          return n.seconds === r.seconds && n.nanos === r.nanos;
        })(t, e);
      case 5:
        return t.stringValue === e.stringValue;
      case 6:
        return (function (t, e) {
          return Xo(t.bytesValue).isEqual(Xo(e.bytesValue));
        })(t, e);
      case 7:
        return t.referenceValue === e.referenceValue;
      case 8:
        return (function (t, e) {
          return (
            Yo(t.geoPointValue.latitude) === Yo(e.geoPointValue.latitude) &&
            Yo(t.geoPointValue.longitude) === Yo(e.geoPointValue.longitude)
          );
        })(t, e);
      case 2:
        return (function (t, e) {
          if ("integerValue" in t && "integerValue" in e)
            return Yo(t.integerValue) === Yo(e.integerValue);
          if ("doubleValue" in t && "doubleValue" in e) {
            var n = Yo(t.doubleValue),
              r = Yo(e.doubleValue);
            return n === r ? ns(n) === ns(r) : isNaN(n) && isNaN(r);
          }
          return !1;
        })(t, e);
      case 9:
        return Po(t.arrayValue.values || [], e.arrayValue.values || [], ss);
      case 10:
        return (function (t, e) {
          var n = t.mapValue.fields || {},
            r = e.mapValue.fields || {};
          if (qo(n) !== qo(r)) return !1;
          for (var i in n)
            if (n.hasOwnProperty(i) && (void 0 === r[i] || !ss(n[i], r[i])))
              return !1;
          return !0;
        })(t, e);
      default:
        return Do();
    }
  }
  function as(t, e) {
    return (
      void 0 !==
      (t.values || []).find(function (t) {
        return ss(t, e);
      })
    );
  }
  function us(t, e) {
    var n = os(t),
      r = os(e);
    if (n !== r) return Lo(n, r);
    switch (n) {
      case 0:
        return 0;
      case 1:
        return Lo(t.booleanValue, e.booleanValue);
      case 2:
        return (function (t, e) {
          var n = Yo(t.integerValue || t.doubleValue),
            r = Yo(e.integerValue || e.doubleValue);
          return n < r
            ? -1
            : n > r
            ? 1
            : n === r
            ? 0
            : isNaN(n)
            ? isNaN(r)
              ? 0
              : -1
            : 1;
        })(t, e);
      case 3:
        return cs(t.timestampValue, e.timestampValue);
      case 4:
        return cs(ts(t), ts(e));
      case 5:
        return Lo(t.stringValue, e.stringValue);
      case 6:
        return (function (t, e) {
          var n = Xo(t),
            r = Xo(e);
          return n.compareTo(r);
        })(t.bytesValue, e.bytesValue);
      case 7:
        return (function (t, e) {
          for (
            var n = t.split("/"), r = e.split("/"), i = 0;
            i < n.length && i < r.length;
            i++
          ) {
            var o = Lo(n[i], r[i]);
            if (0 !== o) return o;
          }
          return Lo(n.length, r.length);
        })(t.referenceValue, e.referenceValue);
      case 8:
        return (function (t, e) {
          var n = Lo(Yo(t.latitude), Yo(e.latitude));
          return 0 !== n ? n : Lo(Yo(t.longitude), Yo(e.longitude));
        })(t.geoPointValue, e.geoPointValue);
      case 9:
        return (function (t, e) {
          for (
            var n = t.values || [], r = e.values || [], i = 0;
            i < n.length && i < r.length;
            ++i
          ) {
            var o = us(n[i], r[i]);
            if (o) return o;
          }
          return Lo(n.length, r.length);
        })(t.arrayValue, e.arrayValue);
      case 10:
        return (function (t, e) {
          var n = t.fields || {},
            r = Object.keys(n),
            i = e.fields || {},
            o = Object.keys(i);
          r.sort(), o.sort();
          for (var s = 0; s < r.length && s < o.length; ++s) {
            var a = Lo(r[s], o[s]);
            if (0 !== a) return a;
            var u = us(n[r[s]], i[o[s]]);
            if (0 !== u) return u;
          }
          return Lo(r.length, o.length);
        })(t.mapValue, e.mapValue);
      default:
        throw Do();
    }
  }
  function cs(t, e) {
    if ("string" == typeof t && "string" == typeof e && t.length === e.length)
      return Lo(t, e);
    var n = Wo(t),
      r = Wo(e),
      i = Lo(n.seconds, r.seconds);
    return 0 !== i ? i : Lo(n.nanos, r.nanos);
  }
  function ls(t) {
    return hs(t);
  }
  function hs(t) {
    return "nullValue" in t
      ? "null"
      : "booleanValue" in t
      ? "" + t.booleanValue
      : "integerValue" in t
      ? "" + t.integerValue
      : "doubleValue" in t
      ? "" + t.doubleValue
      : "timestampValue" in t
      ? (function (t) {
          var e = Wo(t);
          return "time(" + e.seconds + "," + e.nanos + ")";
        })(t.timestampValue)
      : "stringValue" in t
      ? t.stringValue
      : "bytesValue" in t
      ? Xo(t.bytesValue).toBase64()
      : "referenceValue" in t
      ? ((n = t.referenceValue), is.fromName(n).toString())
      : "geoPointValue" in t
      ? "geo(" + (e = t.geoPointValue).latitude + "," + e.longitude + ")"
      : "arrayValue" in t
      ? (function (t) {
          for (
            var e = "[", n = !0, r = 0, i = t.values || [];
            r < i.length;
            r++
          )
            n ? (n = !1) : (e += ","), (e += hs(i[r]));
          return e + "]";
        })(t.arrayValue)
      : "mapValue" in t
      ? (function (t) {
          for (
            var e = "{", n = !0, r = 0, i = Object.keys(t.fields || {}).sort();
            r < i.length;
            r++
          ) {
            var o = i[r];
            n ? (n = !1) : (e += ","), (e += o + ":" + hs(t.fields[o]));
          }
          return e + "}";
        })(t.mapValue)
      : Do();
    var e, n;
  }
  function fs(t, e) {
    return {
      referenceValue:
        "projects/" +
        t.projectId +
        "/databases/" +
        t.database +
        "/documents/" +
        e.path.canonicalString(),
    };
  }
  function ds(t) {
    return !!t && "integerValue" in t;
  }
  function ps(t) {
    return !!t && "arrayValue" in t;
  }
  function vs(t) {
    return !!t && "nullValue" in t;
  }
  function gs(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
  }
  function ys(t) {
    return !!t && "mapValue" in t;
  }
  function ms(t) {
    if (t.geoPointValue)
      return { geoPointValue: Object.assign({}, t.geoPointValue) };
    if (t.timestampValue && "object" == typeof t.timestampValue)
      return { timestampValue: Object.assign({}, t.timestampValue) };
    if (t.mapValue) {
      var e = { mapValue: { fields: {} } };
      return (
        Uo(t.mapValue.fields, function (t, n) {
          return (e.mapValue.fields[t] = ms(n));
        }),
        e
      );
    }
    if (t.arrayValue) {
      for (
        var n = { arrayValue: { values: [] } }, r = 0;
        r < (t.arrayValue.values || []).length;
        ++r
      )
        n.arrayValue.values[r] = ms(t.arrayValue.values[r]);
      return n;
    }
    return Object.assign({}, t);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var bs = (function () {
    function t(t) {
      this.value = t;
    }
    return (
      (t.empty = function () {
        return new t({ mapValue: {} });
      }),
      (t.prototype.field = function (t) {
        if (t.isEmpty()) return this.value;
        for (var e = this.value, n = 0; n < t.length - 1; ++n)
          if (!ys((e = (e.mapValue.fields || {})[t.get(n)]))) return null;
        return (e = (e.mapValue.fields || {})[t.lastSegment()]) || null;
      }),
      (t.prototype.set = function (t, e) {
        this.getFieldsMap(t.popLast())[t.lastSegment()] = ms(e);
      }),
      (t.prototype.setAll = function (t) {
        var e = this,
          n = $o.emptyPath(),
          r = {},
          i = [];
        t.forEach(function (t, o) {
          if (!n.isImmediateParentOf(o)) {
            var s = e.getFieldsMap(n);
            e.applyChanges(s, r, i), (r = {}), (i = []), (n = o.popLast());
          }
          t ? (r[o.lastSegment()] = ms(t)) : i.push(o.lastSegment());
        });
        var o = this.getFieldsMap(n);
        this.applyChanges(o, r, i);
      }),
      (t.prototype.delete = function (t) {
        var e = this.field(t.popLast());
        ys(e) && e.mapValue.fields && delete e.mapValue.fields[t.lastSegment()];
      }),
      (t.prototype.isEqual = function (t) {
        return ss(this.value, t.value);
      }),
      (t.prototype.getFieldsMap = function (t) {
        var e = this.value;
        e.mapValue.fields || (e.mapValue = { fields: {} });
        for (var n = 0; n < t.length; ++n) {
          var r = e.mapValue.fields[t.get(n)];
          (ys(r) && r.mapValue.fields) ||
            ((r = { mapValue: { fields: {} } }),
            (e.mapValue.fields[t.get(n)] = r)),
            (e = r);
        }
        return e.mapValue.fields;
      }),
      (t.prototype.applyChanges = function (t, e, n) {
        Uo(e, function (e, n) {
          return (t[e] = n);
        });
        for (var r = 0, i = n; r < i.length; r++) {
          var o = i[r];
          delete t[o];
        }
      }),
      (t.prototype.clone = function () {
        return new t(ms(this.value));
      }),
      t
    );
  })();
  function ws(t) {
    var e = [];
    return (
      Uo(t.fields, function (t, n) {
        var r = new $o([t]);
        if (ys(n)) {
          var i = ws(n.mapValue).fields;
          if (0 === i.length) e.push(r);
          else
            for (var o = 0, s = i; o < s.length; o++) {
              var a = s[o];
              e.push(r.child(a));
            }
        } else e.push(r);
      }),
      new Go(e)
    );
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
  }
  var Es = (function () {
      function t(t, e, n, r, i) {
        (this.key = t),
          (this.documentType = e),
          (this.version = n),
          (this.data = r),
          (this.documentState = i);
      }
      return (
        (t.newInvalidDocument = function (e) {
          return new t(e, 0, Vo.min(), bs.empty(), 0);
        }),
        (t.newFoundDocument = function (e, n, r) {
          return new t(e, 1, n, r, 0);
        }),
        (t.newNoDocument = function (e, n) {
          return new t(e, 2, n, bs.empty(), 0);
        }),
        (t.newUnknownDocument = function (e, n) {
          return new t(e, 3, n, bs.empty(), 2);
        }),
        (t.prototype.convertToFoundDocument = function (t, e) {
          return (
            (this.version = t),
            (this.documentType = 1),
            (this.data = e),
            (this.documentState = 0),
            this
          );
        }),
        (t.prototype.convertToNoDocument = function (t) {
          return (
            (this.version = t),
            (this.documentType = 2),
            (this.data = bs.empty()),
            (this.documentState = 0),
            this
          );
        }),
        (t.prototype.convertToUnknownDocument = function (t) {
          return (
            (this.version = t),
            (this.documentType = 3),
            (this.data = bs.empty()),
            (this.documentState = 2),
            this
          );
        }),
        (t.prototype.setHasCommittedMutations = function () {
          return (this.documentState = 2), this;
        }),
        (t.prototype.setHasLocalMutations = function () {
          return (this.documentState = 1), this;
        }),
        Object.defineProperty(t.prototype, "hasLocalMutations", {
          get: function () {
            return 1 === this.documentState;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "hasCommittedMutations", {
          get: function () {
            return 2 === this.documentState;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "hasPendingWrites", {
          get: function () {
            return this.hasLocalMutations || this.hasCommittedMutations;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.isValidDocument = function () {
          return 0 !== this.documentType;
        }),
        (t.prototype.isFoundDocument = function () {
          return 1 === this.documentType;
        }),
        (t.prototype.isNoDocument = function () {
          return 2 === this.documentType;
        }),
        (t.prototype.isUnknownDocument = function () {
          return 3 === this.documentType;
        }),
        (t.prototype.isEqual = function (e) {
          return (
            e instanceof t &&
            this.key.isEqual(e.key) &&
            this.version.isEqual(e.version) &&
            this.documentType === e.documentType &&
            this.documentState === e.documentState &&
            this.data.isEqual(e.data)
          );
        }),
        (t.prototype.clone = function () {
          return new t(
            this.key,
            this.documentType,
            this.version,
            this.data.clone(),
            this.documentState
          );
        }),
        (t.prototype.toString = function () {
          return (
            "Document(" +
            this.key +
            ", " +
            this.version +
            ", " +
            JSON.stringify(this.data.value) +
            ", {documentType: " +
            this.documentType +
            "}), {documentState: " +
            this.documentState +
            "})"
          );
        }),
        t
      );
    })(),
    Is = function (t, e, n, r, i, o, s) {
      void 0 === e && (e = null),
        void 0 === n && (n = []),
        void 0 === r && (r = []),
        void 0 === i && (i = null),
        void 0 === o && (o = null),
        void 0 === s && (s = null),
        (this.path = t),
        (this.collectionGroup = e),
        (this.orderBy = n),
        (this.filters = r),
        (this.limit = i),
        (this.startAt = o),
        (this.endAt = s),
        (this.h = null);
    };
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Ts(t, e, n, r, i, o, s) {
    return (
      void 0 === e && (e = null),
      void 0 === n && (n = []),
      void 0 === r && (r = []),
      void 0 === i && (i = null),
      void 0 === o && (o = null),
      void 0 === s && (s = null),
      new Is(t, e, n, r, i, o, s)
    );
  }
  function _s(t) {
    var e = xo(t);
    if (null === e.h) {
      var n = e.path.canonicalString();
      null !== e.collectionGroup && (n += "|cg:" + e.collectionGroup),
        (n += "|f:"),
        (n += e.filters
          .map(function (t) {
            return (function (t) {
              return t.field.canonicalString() + t.op.toString() + ls(t.value);
            })(t);
          })
          .join(",")),
        (n += "|ob:"),
        (n += e.orderBy
          .map(function (t) {
            return (function (t) {
              return t.field.canonicalString() + t.dir;
            })(t);
          })
          .join(",")),
        es(e.limit) || ((n += "|l:"), (n += e.limit)),
        e.startAt && ((n += "|lb:"), (n += Fs(e.startAt))),
        e.endAt && ((n += "|ub:"), (n += Fs(e.endAt))),
        (e.h = n);
    }
    return e.h;
  }
  function Ss(t, e) {
    if (t.limit !== e.limit) return !1;
    if (t.orderBy.length !== e.orderBy.length) return !1;
    for (var n = 0; n < t.orderBy.length; n++)
      if (!qs(t.orderBy[n], e.orderBy[n])) return !1;
    if (t.filters.length !== e.filters.length) return !1;
    for (var r = 0; r < t.filters.length; r++)
      if (
        ((i = t.filters[r]),
        (o = e.filters[r]),
        i.op !== o.op || !i.field.isEqual(o.field) || !ss(i.value, o.value))
      )
        return !1;
    var i, o;
    return (
      t.collectionGroup === e.collectionGroup &&
      !!t.path.isEqual(e.path) &&
      !!js(t.startAt, e.startAt) &&
      js(t.endAt, e.endAt)
    );
  }
  function As(t) {
    return (
      is.isDocumentKey(t.path) &&
      null === t.collectionGroup &&
      0 === t.filters.length
    );
  }
  var ks = (function (t) {
      function e(e, n, r) {
        var i = this;
        return (
          ((i = t.call(this) || this).field = e), (i.op = n), (i.value = r), i
        );
      }
      return (
        ut(e, t),
        (e.create = function (t, n, r) {
          return t.isKeyField()
            ? "in" === n || "not-in" === n
              ? this.l(t, n, r)
              : new Ns(t, n, r)
            : "array-contains" === n
            ? new Rs(t, r)
            : "in" === n
            ? new Os(t, r)
            : "not-in" === n
            ? new Ls(t, r)
            : "array-contains-any" === n
            ? new Ps(t, r)
            : new e(t, n, r);
        }),
        (e.l = function (t, e, n) {
          return "in" === e ? new Ds(t, n) : new Cs(t, n);
        }),
        (e.prototype.matches = function (t) {
          var e = t.data.field(this.field);
          return "!=" === this.op
            ? null !== e && this.m(us(e, this.value))
            : null !== e &&
                os(this.value) === os(e) &&
                this.m(us(e, this.value));
        }),
        (e.prototype.m = function (t) {
          switch (this.op) {
            case "<":
              return t < 0;
            case "<=":
              return t <= 0;
            case "==":
              return 0 === t;
            case "!=":
              return 0 !== t;
            case ">":
              return t > 0;
            case ">=":
              return t >= 0;
            default:
              return Do();
          }
        }),
        (e.prototype.g = function () {
          return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
        }),
        e
      );
    })(function () {}),
    Ns = (function (t) {
      function e(e, n, r) {
        var i = this;
        return (
          ((i = t.call(this, e, n, r) || this).key = is.fromName(
            r.referenceValue
          )),
          i
        );
      }
      return (
        ut(e, t),
        (e.prototype.matches = function (t) {
          var e = is.comparator(t.key, this.key);
          return this.m(e);
        }),
        e
      );
    })(ks),
    Ds = (function (t) {
      function e(e, n) {
        var r = this;
        return ((r = t.call(this, e, "in", n) || this).keys = xs("in", n)), r;
      }
      return (
        ut(e, t),
        (e.prototype.matches = function (t) {
          return this.keys.some(function (e) {
            return e.isEqual(t.key);
          });
        }),
        e
      );
    })(ks),
    Cs = (function (t) {
      function e(e, n) {
        var r = this;
        return (
          ((r = t.call(this, e, "not-in", n) || this).keys = xs("not-in", n)), r
        );
      }
      return (
        ut(e, t),
        (e.prototype.matches = function (t) {
          return !this.keys.some(function (e) {
            return e.isEqual(t.key);
          });
        }),
        e
      );
    })(ks);
  function xs(t, e) {
    var n;
    return (
      (null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []
    ).map(function (t) {
      return is.fromName(t.referenceValue);
    });
  }
  var Rs = (function (t) {
      function e(e, n) {
        return t.call(this, e, "array-contains", n) || this;
      }
      return (
        ut(e, t),
        (e.prototype.matches = function (t) {
          var e = t.data.field(this.field);
          return ps(e) && as(e.arrayValue, this.value);
        }),
        e
      );
    })(ks),
    Os = (function (t) {
      function e(e, n) {
        return t.call(this, e, "in", n) || this;
      }
      return (
        ut(e, t),
        (e.prototype.matches = function (t) {
          var e = t.data.field(this.field);
          return null !== e && as(this.value.arrayValue, e);
        }),
        e
      );
    })(ks),
    Ls = (function (t) {
      function e(e, n) {
        return t.call(this, e, "not-in", n) || this;
      }
      return (
        ut(e, t),
        (e.prototype.matches = function (t) {
          if (as(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return !1;
          var e = t.data.field(this.field);
          return null !== e && !as(this.value.arrayValue, e);
        }),
        e
      );
    })(ks),
    Ps = (function (t) {
      function e(e, n) {
        return t.call(this, e, "array-contains-any", n) || this;
      }
      return (
        ut(e, t),
        (e.prototype.matches = function (t) {
          var e = this,
            n = t.data.field(this.field);
          return (
            !(!ps(n) || !n.arrayValue.values) &&
            n.arrayValue.values.some(function (t) {
              return as(e.value.arrayValue, t);
            })
          );
        }),
        e
      );
    })(ks),
    Ms = function (t, e) {
      (this.position = t), (this.before = e);
    };
  function Fs(t) {
    return (
      (t.before ? "b" : "a") +
      ":" +
      t.position
        .map(function (t) {
          return ls(t);
        })
        .join(",")
    );
  }
  var Vs = function (t, e) {
    void 0 === e && (e = "asc"), (this.field = t), (this.dir = e);
  };
  function qs(t, e) {
    return t.dir === e.dir && t.field.isEqual(e.field);
  }
  function Us(t, e, n) {
    for (var r = 0, i = 0; i < t.position.length; i++) {
      var o = e[i],
        s = t.position[i];
      if (
        ((r = o.field.isKeyField()
          ? is.comparator(is.fromName(s.referenceValue), n.key)
          : us(s, n.data.field(o.field))),
        "desc" === o.dir && (r *= -1),
        0 !== r)
      )
        break;
    }
    return t.before ? r <= 0 : r < 0;
  }
  function js(t, e) {
    if (null === t) return null === e;
    if (null === e) return !1;
    if (t.before !== e.before || t.position.length !== e.position.length)
      return !1;
    for (var n = 0; n < t.position.length; n++)
      if (!ss(t.position[n], e.position[n])) return !1;
    return !0;
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Bs = function (t, e, n, r, i, o, s, a) {
    void 0 === e && (e = null),
      void 0 === n && (n = []),
      void 0 === r && (r = []),
      void 0 === i && (i = null),
      void 0 === o && (o = "F"),
      void 0 === s && (s = null),
      void 0 === a && (a = null),
      (this.path = t),
      (this.collectionGroup = e),
      (this.explicitOrderBy = n),
      (this.filters = r),
      (this.limit = i),
      (this.limitType = o),
      (this.startAt = s),
      (this.endAt = a),
      (this.p = null),
      (this.T = null),
      this.startAt,
      this.endAt;
  };
  function zs(t, e, n, r, i, o, s, a) {
    return new Bs(t, e, n, r, i, o, s, a);
  }
  function Ks(t) {
    return new Bs(t);
  }
  function $s(t) {
    return !es(t.limit) && "F" === t.limitType;
  }
  function Gs(t) {
    return !es(t.limit) && "L" === t.limitType;
  }
  function Hs(t) {
    return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null;
  }
  function Qs(t) {
    for (var e = 0, n = t.filters; e < n.length; e++) {
      var r = n[e];
      if (r.g()) return r.field;
    }
    return null;
  }
  function Ws(t) {
    return null !== t.collectionGroup;
  }
  function Ys(t) {
    var e = xo(t);
    if (null === e.p) {
      e.p = [];
      var n = Qs(e),
        r = Hs(e);
      if (null !== n && null === r)
        n.isKeyField() || e.p.push(new Vs(n)),
          e.p.push(new Vs($o.keyField(), "asc"));
      else {
        for (var i = !1, o = 0, s = e.explicitOrderBy; o < s.length; o++) {
          var a = s[o];
          e.p.push(a), a.field.isKeyField() && (i = !0);
        }
        if (!i) {
          var u =
            e.explicitOrderBy.length > 0
              ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
              : "asc";
          e.p.push(new Vs($o.keyField(), u));
        }
      }
    }
    return e.p;
  }
  function Xs(t) {
    var e = xo(t);
    if (!e.T)
      if ("F" === e.limitType)
        e.T = Ts(
          e.path,
          e.collectionGroup,
          Ys(e),
          e.filters,
          e.limit,
          e.startAt,
          e.endAt
        );
      else {
        for (var n = [], r = 0, i = Ys(e); r < i.length; r++) {
          var o = i[r],
            s = "desc" === o.dir ? "asc" : "desc";
          n.push(new Vs(o.field, s));
        }
        var a = e.endAt ? new Ms(e.endAt.position, !e.endAt.before) : null,
          u = e.startAt ? new Ms(e.startAt.position, !e.startAt.before) : null;
        e.T = Ts(e.path, e.collectionGroup, n, e.filters, e.limit, a, u);
      }
    return e.T;
  }
  function Js(t, e, n) {
    return new Bs(
      t.path,
      t.collectionGroup,
      t.explicitOrderBy.slice(),
      t.filters.slice(),
      e,
      n,
      t.startAt,
      t.endAt
    );
  }
  function Zs(t, e) {
    return Ss(Xs(t), Xs(e)) && t.limitType === e.limitType;
  }
  function ta(t) {
    return _s(Xs(t)) + "|lt:" + t.limitType;
  }
  function ea(t) {
    return (
      "Query(target=" +
      (function (t) {
        var e = t.path.canonicalString();
        return (
          null !== t.collectionGroup &&
            (e += " collectionGroup=" + t.collectionGroup),
          t.filters.length > 0 &&
            (e +=
              ", filters: [" +
              t.filters
                .map(function (t) {
                  return (
                    (e = t).field.canonicalString() +
                    " " +
                    e.op +
                    " " +
                    ls(e.value)
                  );
                  var e;
                })
                .join(", ") +
              "]"),
          es(t.limit) || (e += ", limit: " + t.limit),
          t.orderBy.length > 0 &&
            (e +=
              ", orderBy: [" +
              t.orderBy
                .map(function (t) {
                  return (function (t) {
                    return t.field.canonicalString() + " (" + t.dir + ")";
                  })(t);
                })
                .join(", ") +
              "]"),
          t.startAt && (e += ", startAt: " + Fs(t.startAt)),
          t.endAt && (e += ", endAt: " + Fs(t.endAt)),
          "Target(" + e + ")"
        );
      })(Xs(t)) +
      "; limitType=" +
      t.limitType +
      ")"
    );
  }
  function na(t, e) {
    return (
      e.isFoundDocument() &&
      (function (t, e) {
        var n = e.key.path;
        return null !== t.collectionGroup
          ? e.key.hasCollectionId(t.collectionGroup) && t.path.isPrefixOf(n)
          : is.isDocumentKey(t.path)
          ? t.path.isEqual(n)
          : t.path.isImmediateParentOf(n);
      })(t, e) &&
      (function (t, e) {
        for (var n = 0, r = t.explicitOrderBy; n < r.length; n++) {
          var i = r[n];
          if (!i.field.isKeyField() && null === e.data.field(i.field))
            return !1;
        }
        return !0;
      })(t, e) &&
      (function (t, e) {
        for (var n = 0, r = t.filters; n < r.length; n++)
          if (!r[n].matches(e)) return !1;
        return !0;
      })(t, e) &&
      (function (t, e) {
        return !(
          (t.startAt && !Us(t.startAt, Ys(t), e)) ||
          (t.endAt && Us(t.endAt, Ys(t), e))
        );
      })(t, e)
    );
  }
  function ra(t) {
    return function (e, n) {
      for (var r = !1, i = 0, o = Ys(t); i < o.length; i++) {
        var s = o[i],
          a = ia(s, e, n);
        if (0 !== a) return a;
        r = r || s.field.isKeyField();
      }
      return 0;
    };
  }
  function ia(t, e, n) {
    var r = t.field.isKeyField()
      ? is.comparator(e.key, n.key)
      : (function (t, e, n) {
          var r = e.data.field(t),
            i = n.data.field(t);
          return null !== r && null !== i ? us(r, i) : Do();
        })(t.field, e, n);
    switch (t.dir) {
      case "asc":
        return r;
      case "desc":
        return -1 * r;
      default:
        return Do();
    }
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function oa(t, e) {
    if (t.I) {
      if (isNaN(e)) return { doubleValue: "NaN" };
      if (e === 1 / 0) return { doubleValue: "Infinity" };
      if (e === -1 / 0) return { doubleValue: "-Infinity" };
    }
    return { doubleValue: ns(e) ? "-0" : e };
  }
  function sa(t) {
    return { integerValue: "" + t };
  }
  function aa(t, e) {
    return rs(e) ? sa(e) : oa(t, e);
  }
  /**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var ua = function () {
    this._ = void 0;
  };
  function ca(t, e, n) {
    return t instanceof fa
      ? (function (t, e) {
          var n = {
            fields: {
              __type__: { stringValue: "server_timestamp" },
              __local_write_time__: {
                timestampValue: { seconds: t.seconds, nanos: t.nanoseconds },
              },
            },
          };
          return e && (n.fields.__previous_value__ = e), { mapValue: n };
        })(n, e)
      : t instanceof da
      ? pa(t, e)
      : t instanceof va
      ? ga(t, e)
      : (function (t, e) {
          var n = ha(t, e),
            r = ma(n) + ma(t.A);
          return ds(n) && ds(t.A) ? sa(r) : oa(t.R, r);
        })(t, e);
  }
  function la(t, e, n) {
    return t instanceof da ? pa(t, e) : t instanceof va ? ga(t, e) : n;
  }
  function ha(t, e) {
    return t instanceof ya
      ? ds((n = e)) ||
        (function (t) {
          return !!t && "doubleValue" in t;
        })(n)
        ? e
        : { integerValue: 0 }
      : null;
    var n;
  }
  var fa = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return ut(e, t), e;
    })(ua),
    da = (function (t) {
      function e(e) {
        var n = this;
        return ((n = t.call(this) || this).elements = e), n;
      }
      return ut(e, t), e;
    })(ua);
  function pa(t, e) {
    for (
      var n = ba(e),
        r = function (t) {
          n.some(function (e) {
            return ss(e, t);
          }) || n.push(t);
        },
        i = 0,
        o = t.elements;
      i < o.length;
      i++
    )
      r(o[i]);
    return { arrayValue: { values: n } };
  }
  var va = (function (t) {
    function e(e) {
      var n = this;
      return ((n = t.call(this) || this).elements = e), n;
    }
    return ut(e, t), e;
  })(ua);
  function ga(t, e) {
    for (
      var n = ba(e),
        r = function (t) {
          n = n.filter(function (e) {
            return !ss(e, t);
          });
        },
        i = 0,
        o = t.elements;
      i < o.length;
      i++
    )
      r(o[i]);
    return { arrayValue: { values: n } };
  }
  var ya = (function (t) {
    function e(e, n) {
      var r = this;
      return ((r = t.call(this) || this).R = e), (r.A = n), r;
    }
    return ut(e, t), e;
  })(ua);
  function ma(t) {
    return Yo(t.integerValue || t.doubleValue);
  }
  function ba(t) {
    return ps(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var wa = function (t, e) {
      (this.field = t), (this.transform = e);
    },
    Ea = function (t, e) {
      (this.version = t), (this.transformResults = e);
    },
    Ia = (function () {
      function t(t, e) {
        (this.updateTime = t), (this.exists = e);
      }
      return (
        (t.none = function () {
          return new t();
        }),
        (t.exists = function (e) {
          return new t(void 0, e);
        }),
        (t.updateTime = function (e) {
          return new t(e);
        }),
        Object.defineProperty(t.prototype, "isNone", {
          get: function () {
            return void 0 === this.updateTime && void 0 === this.exists;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.isEqual = function (t) {
          return (
            this.exists === t.exists &&
            (this.updateTime
              ? !!t.updateTime && this.updateTime.isEqual(t.updateTime)
              : !t.updateTime)
          );
        }),
        t
      );
    })();
  function Ta(t, e) {
    return void 0 !== t.updateTime
      ? e.isFoundDocument() && e.version.isEqual(t.updateTime)
      : void 0 === t.exists || t.exists === e.isFoundDocument();
  }
  var _a = function () {};
  function Sa(t, e, n) {
    t instanceof Ca
      ? (function (t, e, n) {
          var r = t.value.clone(),
            i = Oa(t.fieldTransforms, e, n.transformResults);
          r.setAll(i),
            e.convertToFoundDocument(n.version, r).setHasCommittedMutations();
        })(t, e, n)
      : t instanceof xa
      ? (function (t, e, n) {
          if (Ta(t.precondition, e)) {
            var r = Oa(t.fieldTransforms, e, n.transformResults),
              i = e.data;
            i.setAll(Ra(t)),
              i.setAll(r),
              e.convertToFoundDocument(n.version, i).setHasCommittedMutations();
          } else e.convertToUnknownDocument(n.version);
        })(t, e, n)
      : (function (t, e, n) {
          e.convertToNoDocument(n.version).setHasCommittedMutations();
        })(0, e, n);
  }
  function Aa(t, e, n) {
    t instanceof Ca
      ? (function (t, e, n) {
          if (Ta(t.precondition, e)) {
            var r = t.value.clone(),
              i = La(t.fieldTransforms, n, e);
            r.setAll(i),
              e.convertToFoundDocument(Da(e), r).setHasLocalMutations();
          }
        })(t, e, n)
      : t instanceof xa
      ? (function (t, e, n) {
          if (Ta(t.precondition, e)) {
            var r = La(t.fieldTransforms, n, e),
              i = e.data;
            i.setAll(Ra(t)),
              i.setAll(r),
              e.convertToFoundDocument(Da(e), i).setHasLocalMutations();
          }
        })(t, e, n)
      : (function (t, e) {
          Ta(t.precondition, e) && e.convertToNoDocument(Vo.min());
        })(t, e);
  }
  function ka(t, e) {
    for (var n = null, r = 0, i = t.fieldTransforms; r < i.length; r++) {
      var o = i[r],
        s = e.data.field(o.field),
        a = ha(o.transform, s || null);
      null != a && (null == n && (n = bs.empty()), n.set(o.field, a));
    }
    return n || null;
  }
  function Na(t, e) {
    return (
      t.type === e.type &&
      !!t.key.isEqual(e.key) &&
      !!t.precondition.isEqual(e.precondition) &&
      !!(function (t, e) {
        return (
          (void 0 === t && void 0 === e) ||
          (!(!t || !e) &&
            Po(t, e, function (t, e) {
              return (function (t, e) {
                return (
                  t.field.isEqual(e.field) &&
                  (function (t, e) {
                    return (t instanceof da && e instanceof da) ||
                      (t instanceof va && e instanceof va)
                      ? Po(t.elements, e.elements, ss)
                      : t instanceof ya && e instanceof ya
                      ? ss(t.A, e.A)
                      : t instanceof fa && e instanceof fa;
                  })(t.transform, e.transform)
                );
              })(t, e);
            }))
        );
      })(t.fieldTransforms, e.fieldTransforms) &&
      (0 === t.type
        ? t.value.isEqual(e.value)
        : 1 !== t.type ||
          (t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask)))
    );
  }
  function Da(t) {
    return t.isFoundDocument() ? t.version : Vo.min();
  }
  var Ca = (function (t) {
      function e(e, n, r, i) {
        void 0 === i && (i = []);
        var o = this;
        return (
          ((o = t.call(this) || this).key = e),
          (o.value = n),
          (o.precondition = r),
          (o.fieldTransforms = i),
          (o.type = 0),
          o
        );
      }
      return ut(e, t), e;
    })(_a),
    xa = (function (t) {
      function e(e, n, r, i, o) {
        void 0 === o && (o = []);
        var s = this;
        return (
          ((s = t.call(this) || this).key = e),
          (s.data = n),
          (s.fieldMask = r),
          (s.precondition = i),
          (s.fieldTransforms = o),
          (s.type = 1),
          s
        );
      }
      return ut(e, t), e;
    })(_a);
  function Ra(t) {
    var e = new Map();
    return (
      t.fieldMask.fields.forEach(function (n) {
        if (!n.isEmpty()) {
          var r = t.data.field(n);
          e.set(n, r);
        }
      }),
      e
    );
  }
  function Oa(t, e, n) {
    var r = new Map();
    Co(t.length === n.length);
    for (var i = 0; i < n.length; i++) {
      var o = t[i],
        s = o.transform,
        a = e.data.field(o.field);
      r.set(o.field, la(s, a, n[i]));
    }
    return r;
  }
  function La(t, e, n) {
    for (var r = new Map(), i = 0, o = t; i < o.length; i++) {
      var s = o[i],
        a = s.transform,
        u = n.data.field(s.field);
      r.set(s.field, ca(a, u, e));
    }
    return r;
  }
  var Pa,
    Ma,
    Fa = (function (t) {
      function e(e, n) {
        var r = this;
        return (
          ((r = t.call(this) || this).key = e),
          (r.precondition = n),
          (r.type = 2),
          (r.fieldTransforms = []),
          r
        );
      }
      return ut(e, t), e;
    })(_a),
    Va = (function (t) {
      function e(e, n) {
        var r = this;
        return (
          ((r = t.call(this) || this).key = e),
          (r.precondition = n),
          (r.type = 3),
          (r.fieldTransforms = []),
          r
        );
      }
      return ut(e, t), e;
    })(_a),
    qa = function (t) {
      this.count = t;
    };
  function Ua(t) {
    switch (t) {
      case Eo.OK:
        return Do();
      case Eo.CANCELLED:
      case Eo.UNKNOWN:
      case Eo.DEADLINE_EXCEEDED:
      case Eo.RESOURCE_EXHAUSTED:
      case Eo.INTERNAL:
      case Eo.UNAVAILABLE:
      case Eo.UNAUTHENTICATED:
        return !1;
      case Eo.INVALID_ARGUMENT:
      case Eo.NOT_FOUND:
      case Eo.ALREADY_EXISTS:
      case Eo.PERMISSION_DENIED:
      case Eo.FAILED_PRECONDITION:
      case Eo.ABORTED:
      case Eo.OUT_OF_RANGE:
      case Eo.UNIMPLEMENTED:
      case Eo.DATA_LOSS:
        return !0;
      default:
        return Do();
    }
  }
  function ja(t) {
    if (void 0 === t) return Ao("GRPC error has no .code"), Eo.UNKNOWN;
    switch (t) {
      case Pa.OK:
        return Eo.OK;
      case Pa.CANCELLED:
        return Eo.CANCELLED;
      case Pa.UNKNOWN:
        return Eo.UNKNOWN;
      case Pa.DEADLINE_EXCEEDED:
        return Eo.DEADLINE_EXCEEDED;
      case Pa.RESOURCE_EXHAUSTED:
        return Eo.RESOURCE_EXHAUSTED;
      case Pa.INTERNAL:
        return Eo.INTERNAL;
      case Pa.UNAVAILABLE:
        return Eo.UNAVAILABLE;
      case Pa.UNAUTHENTICATED:
        return Eo.UNAUTHENTICATED;
      case Pa.INVALID_ARGUMENT:
        return Eo.INVALID_ARGUMENT;
      case Pa.NOT_FOUND:
        return Eo.NOT_FOUND;
      case Pa.ALREADY_EXISTS:
        return Eo.ALREADY_EXISTS;
      case Pa.PERMISSION_DENIED:
        return Eo.PERMISSION_DENIED;
      case Pa.FAILED_PRECONDITION:
        return Eo.FAILED_PRECONDITION;
      case Pa.ABORTED:
        return Eo.ABORTED;
      case Pa.OUT_OF_RANGE:
        return Eo.OUT_OF_RANGE;
      case Pa.UNIMPLEMENTED:
        return Eo.UNIMPLEMENTED;
      case Pa.DATA_LOSS:
        return Eo.DATA_LOSS;
      default:
        return Do();
    }
  }
  ((Ma = Pa || (Pa = {}))[(Ma.OK = 0)] = "OK"),
    (Ma[(Ma.CANCELLED = 1)] = "CANCELLED"),
    (Ma[(Ma.UNKNOWN = 2)] = "UNKNOWN"),
    (Ma[(Ma.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
    (Ma[(Ma.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
    (Ma[(Ma.NOT_FOUND = 5)] = "NOT_FOUND"),
    (Ma[(Ma.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
    (Ma[(Ma.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
    (Ma[(Ma.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
    (Ma[(Ma.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
    (Ma[(Ma.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
    (Ma[(Ma.ABORTED = 10)] = "ABORTED"),
    (Ma[(Ma.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
    (Ma[(Ma.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
    (Ma[(Ma.INTERNAL = 13)] = "INTERNAL"),
    (Ma[(Ma.UNAVAILABLE = 14)] = "UNAVAILABLE"),
    (Ma[(Ma.DATA_LOSS = 15)] = "DATA_LOSS");
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var Ba = (function () {
      function t(t, e) {
        (this.comparator = t), (this.root = e || Ka.EMPTY);
      }
      return (
        (t.prototype.insert = function (e, n) {
          return new t(
            this.comparator,
            this.root
              .insert(e, n, this.comparator)
              .copy(null, null, Ka.BLACK, null, null)
          );
        }),
        (t.prototype.remove = function (e) {
          return new t(
            this.comparator,
            this.root
              .remove(e, this.comparator)
              .copy(null, null, Ka.BLACK, null, null)
          );
        }),
        (t.prototype.get = function (t) {
          for (var e = this.root; !e.isEmpty(); ) {
            var n = this.comparator(t, e.key);
            if (0 === n) return e.value;
            n < 0 ? (e = e.left) : n > 0 && (e = e.right);
          }
          return null;
        }),
        (t.prototype.indexOf = function (t) {
          for (var e = 0, n = this.root; !n.isEmpty(); ) {
            var r = this.comparator(t, n.key);
            if (0 === r) return e + n.left.size;
            r < 0 ? (n = n.left) : ((e += n.left.size + 1), (n = n.right));
          }
          return -1;
        }),
        (t.prototype.isEmpty = function () {
          return this.root.isEmpty();
        }),
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.root.size;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.minKey = function () {
          return this.root.minKey();
        }),
        (t.prototype.maxKey = function () {
          return this.root.maxKey();
        }),
        (t.prototype.inorderTraversal = function (t) {
          return this.root.inorderTraversal(t);
        }),
        (t.prototype.forEach = function (t) {
          this.inorderTraversal(function (e, n) {
            return t(e, n), !1;
          });
        }),
        (t.prototype.toString = function () {
          var t = [];
          return (
            this.inorderTraversal(function (e, n) {
              return t.push(e + ":" + n), !1;
            }),
            "{" + t.join(", ") + "}"
          );
        }),
        (t.prototype.reverseTraversal = function (t) {
          return this.root.reverseTraversal(t);
        }),
        (t.prototype.getIterator = function () {
          return new za(this.root, null, this.comparator, !1);
        }),
        (t.prototype.getIteratorFrom = function (t) {
          return new za(this.root, t, this.comparator, !1);
        }),
        (t.prototype.getReverseIterator = function () {
          return new za(this.root, null, this.comparator, !0);
        }),
        (t.prototype.getReverseIteratorFrom = function (t) {
          return new za(this.root, t, this.comparator, !0);
        }),
        t
      );
    })(),
    za = (function () {
      function t(t, e, n, r) {
        (this.isReverse = r), (this.nodeStack = []);
        for (var i = 1; !t.isEmpty(); )
          if (((i = e ? n(t.key, e) : 1), r && (i *= -1), i < 0))
            t = this.isReverse ? t.left : t.right;
          else {
            if (0 === i) {
              this.nodeStack.push(t);
              break;
            }
            this.nodeStack.push(t), (t = this.isReverse ? t.right : t.left);
          }
      }
      return (
        (t.prototype.getNext = function () {
          var t = this.nodeStack.pop(),
            e = { key: t.key, value: t.value };
          if (this.isReverse)
            for (t = t.left; !t.isEmpty(); )
              this.nodeStack.push(t), (t = t.right);
          else
            for (t = t.right; !t.isEmpty(); )
              this.nodeStack.push(t), (t = t.left);
          return e;
        }),
        (t.prototype.hasNext = function () {
          return this.nodeStack.length > 0;
        }),
        (t.prototype.peek = function () {
          if (0 === this.nodeStack.length) return null;
          var t = this.nodeStack[this.nodeStack.length - 1];
          return { key: t.key, value: t.value };
        }),
        t
      );
    })(),
    Ka = (function () {
      function t(e, n, r, i, o) {
        (this.key = e),
          (this.value = n),
          (this.color = null != r ? r : t.RED),
          (this.left = null != i ? i : t.EMPTY),
          (this.right = null != o ? o : t.EMPTY),
          (this.size = this.left.size + 1 + this.right.size);
      }
      return (
        (t.prototype.copy = function (e, n, r, i, o) {
          return new t(
            null != e ? e : this.key,
            null != n ? n : this.value,
            null != r ? r : this.color,
            null != i ? i : this.left,
            null != o ? o : this.right
          );
        }),
        (t.prototype.isEmpty = function () {
          return !1;
        }),
        (t.prototype.inorderTraversal = function (t) {
          return (
            this.left.inorderTraversal(t) ||
            t(this.key, this.value) ||
            this.right.inorderTraversal(t)
          );
        }),
        (t.prototype.reverseTraversal = function (t) {
          return (
            this.right.reverseTraversal(t) ||
            t(this.key, this.value) ||
            this.left.reverseTraversal(t)
          );
        }),
        (t.prototype.min = function () {
          return this.left.isEmpty() ? this : this.left.min();
        }),
        (t.prototype.minKey = function () {
          return this.min().key;
        }),
        (t.prototype.maxKey = function () {
          return this.right.isEmpty() ? this.key : this.right.maxKey();
        }),
        (t.prototype.insert = function (t, e, n) {
          var r = this,
            i = n(t, r.key);
          return (r =
            i < 0
              ? r.copy(null, null, null, r.left.insert(t, e, n), null)
              : 0 === i
              ? r.copy(null, e, null, null, null)
              : r.copy(
                  null,
                  null,
                  null,
                  null,
                  r.right.insert(t, e, n)
                )).fixUp();
        }),
        (t.prototype.removeMin = function () {
          if (this.left.isEmpty()) return t.EMPTY;
          var e = this;
          return (
            e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()),
            (e = e.copy(null, null, null, e.left.removeMin(), null)).fixUp()
          );
        }),
        (t.prototype.remove = function (e, n) {
          var r,
            i = this;
          if (n(e, i.key) < 0)
            i.left.isEmpty() ||
              i.left.isRed() ||
              i.left.left.isRed() ||
              (i = i.moveRedLeft()),
              (i = i.copy(null, null, null, i.left.remove(e, n), null));
          else {
            if (
              (i.left.isRed() && (i = i.rotateRight()),
              i.right.isEmpty() ||
                i.right.isRed() ||
                i.right.left.isRed() ||
                (i = i.moveRedRight()),
              0 === n(e, i.key))
            ) {
              if (i.right.isEmpty()) return t.EMPTY;
              (r = i.right.min()),
                (i = i.copy(r.key, r.value, null, null, i.right.removeMin()));
            }
            i = i.copy(null, null, null, null, i.right.remove(e, n));
          }
          return i.fixUp();
        }),
        (t.prototype.isRed = function () {
          return this.color;
        }),
        (t.prototype.fixUp = function () {
          var t = this;
          return (
            t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()),
            t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()),
            t.left.isRed() && t.right.isRed() && (t = t.colorFlip()),
            t
          );
        }),
        (t.prototype.moveRedLeft = function () {
          var t = this.colorFlip();
          return (
            t.right.left.isRed() &&
              (t = (t = (t = t.copy(
                null,
                null,
                null,
                null,
                t.right.rotateRight()
              )).rotateLeft()).colorFlip()),
            t
          );
        }),
        (t.prototype.moveRedRight = function () {
          var t = this.colorFlip();
          return (
            t.left.left.isRed() && (t = (t = t.rotateRight()).colorFlip()), t
          );
        }),
        (t.prototype.rotateLeft = function () {
          var e = this.copy(null, null, t.RED, null, this.right.left);
          return this.right.copy(null, null, this.color, e, null);
        }),
        (t.prototype.rotateRight = function () {
          var e = this.copy(null, null, t.RED, this.left.right, null);
          return this.left.copy(null, null, this.color, null, e);
        }),
        (t.prototype.colorFlip = function () {
          var t = this.left.copy(null, null, !this.left.color, null, null),
            e = this.right.copy(null, null, !this.right.color, null, null);
          return this.copy(null, null, !this.color, t, e);
        }),
        (t.prototype.checkMaxDepth = function () {
          var t = this.check();
          return Math.pow(2, t) <= this.size + 1;
        }),
        (t.prototype.check = function () {
          if (this.isRed() && this.left.isRed()) throw Do();
          if (this.right.isRed()) throw Do();
          var t = this.left.check();
          if (t !== this.right.check()) throw Do();
          return t + (this.isRed() ? 0 : 1);
        }),
        t
      );
    })();
  (Ka.EMPTY = null),
    (Ka.RED = !0),
    (Ka.BLACK = !1),
    (Ka.EMPTY = new ((function () {
      function t() {
        this.size = 0;
      }
      return (
        Object.defineProperty(t.prototype, "key", {
          get: function () {
            throw Do();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "value", {
          get: function () {
            throw Do();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "color", {
          get: function () {
            throw Do();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "left", {
          get: function () {
            throw Do();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "right", {
          get: function () {
            throw Do();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.copy = function (t, e, n, r, i) {
          return this;
        }),
        (t.prototype.insert = function (t, e, n) {
          return new Ka(t, e);
        }),
        (t.prototype.remove = function (t, e) {
          return this;
        }),
        (t.prototype.isEmpty = function () {
          return !0;
        }),
        (t.prototype.inorderTraversal = function (t) {
          return !1;
        }),
        (t.prototype.reverseTraversal = function (t) {
          return !1;
        }),
        (t.prototype.minKey = function () {
          return null;
        }),
        (t.prototype.maxKey = function () {
          return null;
        }),
        (t.prototype.isRed = function () {
          return !1;
        }),
        (t.prototype.checkMaxDepth = function () {
          return !0;
        }),
        (t.prototype.check = function () {
          return 0;
        }),
        t
      );
    })())());
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var $a = (function () {
      function t(t) {
        (this.comparator = t), (this.data = new Ba(this.comparator));
      }
      return (
        (t.prototype.has = function (t) {
          return null !== this.data.get(t);
        }),
        (t.prototype.first = function () {
          return this.data.minKey();
        }),
        (t.prototype.last = function () {
          return this.data.maxKey();
        }),
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.data.size;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.indexOf = function (t) {
          return this.data.indexOf(t);
        }),
        (t.prototype.forEach = function (t) {
          this.data.inorderTraversal(function (e, n) {
            return t(e), !1;
          });
        }),
        (t.prototype.forEachInRange = function (t, e) {
          for (var n = this.data.getIteratorFrom(t[0]); n.hasNext(); ) {
            var r = n.getNext();
            if (this.comparator(r.key, t[1]) >= 0) return;
            e(r.key);
          }
        }),
        (t.prototype.forEachWhile = function (t, e) {
          var n;
          for (
            n =
              void 0 !== e
                ? this.data.getIteratorFrom(e)
                : this.data.getIterator();
            n.hasNext();

          )
            if (!t(n.getNext().key)) return;
        }),
        (t.prototype.firstAfterOrEqual = function (t) {
          var e = this.data.getIteratorFrom(t);
          return e.hasNext() ? e.getNext().key : null;
        }),
        (t.prototype.getIterator = function () {
          return new Ga(this.data.getIterator());
        }),
        (t.prototype.getIteratorFrom = function (t) {
          return new Ga(this.data.getIteratorFrom(t));
        }),
        (t.prototype.add = function (t) {
          return this.copy(this.data.remove(t).insert(t, !0));
        }),
        (t.prototype.delete = function (t) {
          return this.has(t) ? this.copy(this.data.remove(t)) : this;
        }),
        (t.prototype.isEmpty = function () {
          return this.data.isEmpty();
        }),
        (t.prototype.unionWith = function (t) {
          var e = this;
          return (
            e.size < t.size && ((e = t), (t = this)),
            t.forEach(function (t) {
              e = e.add(t);
            }),
            e
          );
        }),
        (t.prototype.isEqual = function (e) {
          if (!(e instanceof t)) return !1;
          if (this.size !== e.size) return !1;
          for (
            var n = this.data.getIterator(), r = e.data.getIterator();
            n.hasNext();

          ) {
            var i = n.getNext().key,
              o = r.getNext().key;
            if (0 !== this.comparator(i, o)) return !1;
          }
          return !0;
        }),
        (t.prototype.toArray = function () {
          var t = [];
          return (
            this.forEach(function (e) {
              t.push(e);
            }),
            t
          );
        }),
        (t.prototype.toString = function () {
          var t = [];
          return (
            this.forEach(function (e) {
              return t.push(e);
            }),
            "SortedSet(" + t.toString() + ")"
          );
        }),
        (t.prototype.copy = function (e) {
          var n = new t(this.comparator);
          return (n.data = e), n;
        }),
        t
      );
    })(),
    Ga = (function () {
      function t(t) {
        this.iter = t;
      }
      return (
        (t.prototype.getNext = function () {
          return this.iter.getNext().key;
        }),
        (t.prototype.hasNext = function () {
          return this.iter.hasNext();
        }),
        t
      );
    })(),
    Ha = new Ba(is.comparator);
  function Qa() {
    return Ha;
  }
  var Wa = new Ba(is.comparator);
  function Ya() {
    return Wa;
  }
  var Xa = new Ba(is.comparator);
  var Ja = new $a(is.comparator);
  function Za() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = Ja, r = 0, i = t; r < i.length; r++) {
      var o = i[r];
      n = n.add(o);
    }
    return n;
  }
  var tu = new $a(Lo);
  function eu() {
    return tu;
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var nu = (function () {
      function t(t, e, n, r, i) {
        (this.snapshotVersion = t),
          (this.targetChanges = e),
          (this.targetMismatches = n),
          (this.documentUpdates = r),
          (this.resolvedLimboDocuments = i);
      }
      return (
        (t.createSynthesizedRemoteEventForCurrentChange = function (e, n) {
          var r = new Map();
          return (
            r.set(e, ru.createSynthesizedTargetChangeForCurrentChange(e, n)),
            new t(Vo.min(), r, eu(), Qa(), Za())
          );
        }),
        t
      );
    })(),
    ru = (function () {
      function t(t, e, n, r, i) {
        (this.resumeToken = t),
          (this.current = e),
          (this.addedDocuments = n),
          (this.modifiedDocuments = r),
          (this.removedDocuments = i);
      }
      return (
        (t.createSynthesizedTargetChangeForCurrentChange = function (e, n) {
          return new t(Ho.EMPTY_BYTE_STRING, n, Za(), Za(), Za());
        }),
        t
      );
    })(),
    iu = function (t, e, n, r) {
      (this.v = t), (this.removedTargetIds = e), (this.key = n), (this.P = r);
    },
    ou = function (t, e) {
      (this.targetId = t), (this.V = e);
    },
    su = function (t, e, n, r) {
      void 0 === n && (n = Ho.EMPTY_BYTE_STRING),
        void 0 === r && (r = null),
        (this.state = t),
        (this.targetIds = e),
        (this.resumeToken = n),
        (this.cause = r);
    },
    au = (function () {
      function t() {
        (this.S = 0),
          (this.D = lu()),
          (this.C = Ho.EMPTY_BYTE_STRING),
          (this.N = !1),
          (this.F = !0);
      }
      return (
        Object.defineProperty(t.prototype, "current", {
          get: function () {
            return this.N;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "resumeToken", {
          get: function () {
            return this.C;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "k", {
          get: function () {
            return 0 !== this.S;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "$", {
          get: function () {
            return this.F;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.O = function (t) {
          t.approximateByteSize() > 0 && ((this.F = !0), (this.C = t));
        }),
        (t.prototype.M = function () {
          var t = Za(),
            e = Za(),
            n = Za();
          return (
            this.D.forEach(function (r, i) {
              switch (i) {
                case 0:
                  t = t.add(r);
                  break;
                case 2:
                  e = e.add(r);
                  break;
                case 1:
                  n = n.add(r);
                  break;
                default:
                  Do();
              }
            }),
            new ru(this.C, this.N, t, e, n)
          );
        }),
        (t.prototype.L = function () {
          (this.F = !1), (this.D = lu());
        }),
        (t.prototype.B = function (t, e) {
          (this.F = !0), (this.D = this.D.insert(t, e));
        }),
        (t.prototype.q = function (t) {
          (this.F = !0), (this.D = this.D.remove(t));
        }),
        (t.prototype.U = function () {
          this.S += 1;
        }),
        (t.prototype.K = function () {
          this.S -= 1;
        }),
        (t.prototype.j = function () {
          (this.F = !0), (this.N = !0);
        }),
        t
      );
    })(),
    uu = (function () {
      function t(t) {
        (this.W = t),
          (this.G = new Map()),
          (this.H = Qa()),
          (this.J = cu()),
          (this.Y = new $a(Lo));
      }
      return (
        (t.prototype.X = function (t) {
          for (var e = 0, n = t.v; e < n.length; e++) {
            var r = n[e];
            t.P && t.P.isFoundDocument()
              ? this.Z(r, t.P)
              : this.tt(r, t.key, t.P);
          }
          for (var i = 0, o = t.removedTargetIds; i < o.length; i++)
            (r = o[i]), this.tt(r, t.key, t.P);
        }),
        (t.prototype.et = function (t) {
          var e = this;
          this.forEachTarget(t, function (n) {
            var r = e.nt(n);
            switch (t.state) {
              case 0:
                e.st(n) && r.O(t.resumeToken);
                break;
              case 1:
                r.K(), r.k || r.L(), r.O(t.resumeToken);
                break;
              case 2:
                r.K(), r.k || e.removeTarget(n);
                break;
              case 3:
                e.st(n) && (r.j(), r.O(t.resumeToken));
                break;
              case 4:
                e.st(n) && (e.it(n), r.O(t.resumeToken));
                break;
              default:
                Do();
            }
          });
        }),
        (t.prototype.forEachTarget = function (t, e) {
          var n = this;
          t.targetIds.length > 0
            ? t.targetIds.forEach(e)
            : this.G.forEach(function (t, r) {
                n.st(r) && e(r);
              });
        }),
        (t.prototype.rt = function (t) {
          var e = t.targetId,
            n = t.V.count,
            r = this.ot(e);
          if (r) {
            var i = r.target;
            if (As(i))
              if (0 === n) {
                var o = new is(i.path);
                this.tt(e, o, Es.newNoDocument(o, Vo.min()));
              } else Co(1 === n);
            else this.ct(e) !== n && (this.it(e), (this.Y = this.Y.add(e)));
          }
        }),
        (t.prototype.ut = function (t) {
          var e = this,
            n = new Map();
          this.G.forEach(function (r, i) {
            var o = e.ot(i);
            if (o) {
              if (r.current && As(o.target)) {
                var s = new is(o.target.path);
                null !== e.H.get(s) ||
                  e.at(i, s) ||
                  e.tt(i, s, Es.newNoDocument(s, t));
              }
              r.$ && (n.set(i, r.M()), r.L());
            }
          });
          var r = Za();
          this.J.forEach(function (t, n) {
            var i = !0;
            n.forEachWhile(function (t) {
              var n = e.ot(t);
              return !n || 2 === n.purpose || ((i = !1), !1);
            }),
              i && (r = r.add(t));
          });
          var i = new nu(t, n, this.Y, this.H, r);
          return (this.H = Qa()), (this.J = cu()), (this.Y = new $a(Lo)), i;
        }),
        (t.prototype.Z = function (t, e) {
          if (this.st(t)) {
            var n = this.at(t, e.key) ? 2 : 0;
            this.nt(t).B(e.key, n),
              (this.H = this.H.insert(e.key, e)),
              (this.J = this.J.insert(e.key, this.ht(e.key).add(t)));
          }
        }),
        (t.prototype.tt = function (t, e, n) {
          if (this.st(t)) {
            var r = this.nt(t);
            this.at(t, e) ? r.B(e, 1) : r.q(e),
              (this.J = this.J.insert(e, this.ht(e).delete(t))),
              n && (this.H = this.H.insert(e, n));
          }
        }),
        (t.prototype.removeTarget = function (t) {
          this.G.delete(t);
        }),
        (t.prototype.ct = function (t) {
          var e = this.nt(t).M();
          return (
            this.W.getRemoteKeysForTarget(t).size +
            e.addedDocuments.size -
            e.removedDocuments.size
          );
        }),
        (t.prototype.U = function (t) {
          this.nt(t).U();
        }),
        (t.prototype.nt = function (t) {
          var e = this.G.get(t);
          return e || ((e = new au()), this.G.set(t, e)), e;
        }),
        (t.prototype.ht = function (t) {
          var e = this.J.get(t);
          return e || ((e = new $a(Lo)), (this.J = this.J.insert(t, e))), e;
        }),
        (t.prototype.st = function (t) {
          var e = null !== this.ot(t);
          return (
            e || So("WatchChangeAggregator", "Detected inactive target", t), e
          );
        }),
        (t.prototype.ot = function (t) {
          var e = this.G.get(t);
          return e && e.k ? null : this.W.lt(t);
        }),
        (t.prototype.it = function (t) {
          var e = this;
          this.G.set(t, new au()),
            this.W.getRemoteKeysForTarget(t).forEach(function (n) {
              e.tt(t, n, null);
            });
        }),
        (t.prototype.at = function (t, e) {
          return this.W.getRemoteKeysForTarget(t).has(e);
        }),
        t
      );
    })();
  function cu() {
    return new Ba(is.comparator);
  }
  function lu() {
    return new Ba(is.comparator);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var hu = { asc: "ASCENDING", desc: "DESCENDING" },
    fu = {
      "<": "LESS_THAN",
      "<=": "LESS_THAN_OR_EQUAL",
      ">": "GREATER_THAN",
      ">=": "GREATER_THAN_OR_EQUAL",
      "==": "EQUAL",
      "!=": "NOT_EQUAL",
      "array-contains": "ARRAY_CONTAINS",
      in: "IN",
      "not-in": "NOT_IN",
      "array-contains-any": "ARRAY_CONTAINS_ANY",
    },
    du = function (t, e) {
      (this.databaseId = t), (this.I = e);
    };
  function pu(t, e) {
    return t.I
      ? new Date(1e3 * e.seconds)
          .toISOString()
          .replace(/\.\d*/, "")
          .replace("Z", "") +
          "." +
          ("000000000" + e.nanoseconds).slice(-9) +
          "Z"
      : { seconds: "" + e.seconds, nanos: e.nanoseconds };
  }
  function vu(t, e) {
    return t.I ? e.toBase64() : e.toUint8Array();
  }
  function gu(t, e) {
    return pu(t, e.toTimestamp());
  }
  function yu(t) {
    return (
      Co(!!t),
      Vo.fromTimestamp(
        (function (t) {
          var e = Wo(t);
          return new Fo(e.seconds, e.nanos);
        })(t)
      )
    );
  }
  function mu(t, e) {
    return (function (t) {
      return new zo(["projects", t.projectId, "databases", t.database]);
    })(t)
      .child("documents")
      .child(e)
      .canonicalString();
  }
  function bu(t) {
    var e = zo.fromString(t);
    return Co(Bu(e)), e;
  }
  function wu(t, e) {
    return mu(t.databaseId, e.path);
  }
  function Eu(t, e) {
    var n = bu(e);
    if (n.get(1) !== t.databaseId.projectId)
      throw new Io(
        Eo.INVALID_ARGUMENT,
        "Tried to deserialize key from different project: " +
          n.get(1) +
          " vs " +
          t.databaseId.projectId
      );
    if (n.get(3) !== t.databaseId.database)
      throw new Io(
        Eo.INVALID_ARGUMENT,
        "Tried to deserialize key from different database: " +
          n.get(3) +
          " vs " +
          t.databaseId.database
      );
    return new is(Su(n));
  }
  function Iu(t, e) {
    return mu(t.databaseId, e);
  }
  function Tu(t) {
    var e = bu(t);
    return 4 === e.length ? zo.emptyPath() : Su(e);
  }
  function _u(t) {
    return new zo([
      "projects",
      t.databaseId.projectId,
      "databases",
      t.databaseId.database,
    ]).canonicalString();
  }
  function Su(t) {
    return Co(t.length > 4 && "documents" === t.get(4)), t.popFirst(5);
  }
  function Au(t, e, n) {
    return { name: wu(t, e), fields: n.value.mapValue.fields };
  }
  function ku(t, e) {
    var n;
    if (e instanceof Ca) n = { update: Au(t, e.key, e.value) };
    else if (e instanceof Fa) n = { delete: wu(t, e.key) };
    else if (e instanceof xa)
      n = { update: Au(t, e.key, e.data), updateMask: ju(e.fieldMask) };
    else {
      if (!(e instanceof Va)) return Do();
      n = { verify: wu(t, e.key) };
    }
    return (
      e.fieldTransforms.length > 0 &&
        (n.updateTransforms = e.fieldTransforms.map(function (t) {
          return (function (t, e) {
            var n = e.transform;
            if (n instanceof fa)
              return {
                fieldPath: e.field.canonicalString(),
                setToServerValue: "REQUEST_TIME",
              };
            if (n instanceof da)
              return {
                fieldPath: e.field.canonicalString(),
                appendMissingElements: { values: n.elements },
              };
            if (n instanceof va)
              return {
                fieldPath: e.field.canonicalString(),
                removeAllFromArray: { values: n.elements },
              };
            if (n instanceof ya)
              return { fieldPath: e.field.canonicalString(), increment: n.A };
            throw Do();
          })(0, t);
        })),
      e.precondition.isNone ||
        (n.currentDocument = (function (t, e) {
          return void 0 !== e.updateTime
            ? { updateTime: gu(t, e.updateTime) }
            : void 0 !== e.exists
            ? { exists: e.exists }
            : Do();
        })(t, e.precondition)),
      n
    );
  }
  function Nu(t, e) {
    var n = e.currentDocument
        ? (function (t) {
            return void 0 !== t.updateTime
              ? Ia.updateTime(yu(t.updateTime))
              : void 0 !== t.exists
              ? Ia.exists(t.exists)
              : Ia.none();
          })(e.currentDocument)
        : Ia.none(),
      r = e.updateTransforms
        ? e.updateTransforms.map(function (e) {
            return (function (t, e) {
              var n = null;
              if ("setToServerValue" in e)
                Co("REQUEST_TIME" === e.setToServerValue), (n = new fa());
              else if ("appendMissingElements" in e) {
                var r = e.appendMissingElements.values || [];
                n = new da(r);
              } else if ("removeAllFromArray" in e) {
                var i = e.removeAllFromArray.values || [];
                n = new va(i);
              } else "increment" in e ? (n = new ya(t, e.increment)) : Do();
              var o = $o.fromServerFormat(e.fieldPath);
              return new wa(o, n);
            })(t, e);
          })
        : [];
    if (e.update) {
      e.update.name;
      var i = Eu(t, e.update.name),
        o = new bs({ mapValue: { fields: e.update.fields } });
      if (e.updateMask) {
        var s = (function (t) {
          var e = t.fieldPaths || [];
          return new Go(
            e.map(function (t) {
              return $o.fromServerFormat(t);
            })
          );
        })(e.updateMask);
        return new xa(i, o, s, n, r);
      }
      return new Ca(i, o, n, r);
    }
    if (e.delete) {
      var a = Eu(t, e.delete);
      return new Fa(a, n);
    }
    if (e.verify) {
      var u = Eu(t, e.verify);
      return new Va(u, n);
    }
    return Do();
  }
  function Du(t, e) {
    return { documents: [Iu(t, e.path)] };
  }
  function Cu(t, e) {
    var n = { structuredQuery: {} },
      r = e.path;
    null !== e.collectionGroup
      ? ((n.parent = Iu(t, r)),
        (n.structuredQuery.from = [
          { collectionId: e.collectionGroup, allDescendants: !0 },
        ]))
      : ((n.parent = Iu(t, r.popLast())),
        (n.structuredQuery.from = [{ collectionId: r.lastSegment() }]));
    var i = (function (t) {
      if (0 !== t.length) {
        var e = t.map(function (t) {
          return (function (t) {
            if ("==" === t.op) {
              if (gs(t.value))
                return { unaryFilter: { field: Fu(t.field), op: "IS_NAN" } };
              if (vs(t.value))
                return { unaryFilter: { field: Fu(t.field), op: "IS_NULL" } };
            } else if ("!=" === t.op) {
              if (gs(t.value))
                return {
                  unaryFilter: { field: Fu(t.field), op: "IS_NOT_NAN" },
                };
              if (vs(t.value))
                return {
                  unaryFilter: { field: Fu(t.field), op: "IS_NOT_NULL" },
                };
            }
            return {
              fieldFilter: { field: Fu(t.field), op: Mu(t.op), value: t.value },
            };
          })(t);
        });
        return 1 === e.length
          ? e[0]
          : { compositeFilter: { op: "AND", filters: e } };
      }
    })(e.filters);
    i && (n.structuredQuery.where = i);
    var o = (function (t) {
      if (0 !== t.length)
        return t.map(function (t) {
          return (function (t) {
            return { field: Fu(t.field), direction: Pu(t.dir) };
          })(t);
        });
    })(e.orderBy);
    o && (n.structuredQuery.orderBy = o);
    var s = (function (t, e) {
      return t.I || es(e) ? e : { value: e };
    })(t, e.limit);
    return (
      null !== s && (n.structuredQuery.limit = s),
      e.startAt && (n.structuredQuery.startAt = Ou(e.startAt)),
      e.endAt && (n.structuredQuery.endAt = Ou(e.endAt)),
      n
    );
  }
  function xu(t) {
    var e = Tu(t.parent),
      n = t.structuredQuery,
      r = n.from ? n.from.length : 0,
      i = null;
    if (r > 0) {
      Co(1 === r);
      var o = n.from[0];
      o.allDescendants ? (i = o.collectionId) : (e = e.child(o.collectionId));
    }
    var s = [];
    n.where && (s = Ru(n.where));
    var a = [];
    n.orderBy &&
      (a = n.orderBy.map(function (t) {
        return (function (t) {
          return new Vs(
            Vu(t.field),
            (function (t) {
              switch (t) {
                case "ASCENDING":
                  return "asc";
                case "DESCENDING":
                  return "desc";
                default:
                  return;
              }
            })(t.direction)
          );
        })(t);
      }));
    var u = null;
    n.limit &&
      (u = (function (t) {
        var e;
        return es((e = "object" == typeof t ? t.value : t)) ? null : e;
      })(n.limit));
    var c = null;
    n.startAt && (c = Lu(n.startAt));
    var l = null;
    return n.endAt && (l = Lu(n.endAt)), zs(e, i, a, s, u, "F", c, l);
  }
  function Ru(t) {
    return t
      ? void 0 !== t.unaryFilter
        ? [Uu(t)]
        : void 0 !== t.fieldFilter
        ? [qu(t)]
        : void 0 !== t.compositeFilter
        ? t.compositeFilter.filters
            .map(function (t) {
              return Ru(t);
            })
            .reduce(function (t, e) {
              return t.concat(e);
            })
        : Do()
      : [];
  }
  function Ou(t) {
    return { before: t.before, values: t.position };
  }
  function Lu(t) {
    var e = !!t.before,
      n = t.values || [];
    return new Ms(n, e);
  }
  function Pu(t) {
    return hu[t];
  }
  function Mu(t) {
    return fu[t];
  }
  function Fu(t) {
    return { fieldPath: t.canonicalString() };
  }
  function Vu(t) {
    return $o.fromServerFormat(t.fieldPath);
  }
  function qu(t) {
    return ks.create(
      Vu(t.fieldFilter.field),
      (function (t) {
        switch (t) {
          case "EQUAL":
            return "==";
          case "NOT_EQUAL":
            return "!=";
          case "GREATER_THAN":
            return ">";
          case "GREATER_THAN_OR_EQUAL":
            return ">=";
          case "LESS_THAN":
            return "<";
          case "LESS_THAN_OR_EQUAL":
            return "<=";
          case "ARRAY_CONTAINS":
            return "array-contains";
          case "IN":
            return "in";
          case "NOT_IN":
            return "not-in";
          case "ARRAY_CONTAINS_ANY":
            return "array-contains-any";
          case "OPERATOR_UNSPECIFIED":
          default:
            return Do();
        }
      })(t.fieldFilter.op),
      t.fieldFilter.value
    );
  }
  function Uu(t) {
    switch (t.unaryFilter.op) {
      case "IS_NAN":
        var e = Vu(t.unaryFilter.field);
        return ks.create(e, "==", { doubleValue: NaN });
      case "IS_NULL":
        var n = Vu(t.unaryFilter.field);
        return ks.create(n, "==", { nullValue: "NULL_VALUE" });
      case "IS_NOT_NAN":
        var r = Vu(t.unaryFilter.field);
        return ks.create(r, "!=", { doubleValue: NaN });
      case "IS_NOT_NULL":
        var i = Vu(t.unaryFilter.field);
        return ks.create(i, "!=", { nullValue: "NULL_VALUE" });
      case "OPERATOR_UNSPECIFIED":
      default:
        return Do();
    }
  }
  function ju(t) {
    var e = [];
    return (
      t.fields.forEach(function (t) {
        return e.push(t.canonicalString());
      }),
      { fieldPaths: e }
    );
  }
  function Bu(t) {
    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function zu(t) {
    for (var e = "", n = 0; n < t.length; n++)
      e.length > 0 && (e = $u(e)), (e = Ku(t.get(n), e));
    return $u(e);
  }
  function Ku(t, e) {
    for (var n = e, r = t.length, i = 0; i < r; i++) {
      var o = t.charAt(i);
      switch (o) {
        case "\0":
          n += "";
          break;
        case "":
          n += "";
          break;
        default:
          n += o;
      }
    }
    return n;
  }
  function $u(t) {
    return t + "";
  }
  function Gu(t) {
    var e = t.length;
    if ((Co(e >= 2), 2 === e))
      return Co("" === t.charAt(0) && "" === t.charAt(1)), zo.emptyPath();
    for (var n = e - 2, r = [], i = "", o = 0; o < e; ) {
      var s = t.indexOf("", o);
      switch (((s < 0 || s > n) && Do(), t.charAt(s + 1))) {
        case "":
          var a = t.substring(o, s),
            u = void 0;
          0 === i.length ? (u = a) : ((u = i += a), (i = "")), r.push(u);
          break;
        case "":
          (i += t.substring(o, s)), (i += "\0");
          break;
        case "":
          i += t.substring(o, s + 1);
          break;
        default:
          Do();
      }
      o = s + 2;
    }
    return new zo(r);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Hu = function (t, e) {
      (this.seconds = t), (this.nanoseconds = e);
    },
    Qu = function (t, e, n) {
      (this.ownerId = t),
        (this.allowTabSynchronization = e),
        (this.leaseTimestampMs = n);
    };
  (Qu.store = "owner"), (Qu.key = "owner");
  var Wu = function (t, e, n) {
    (this.userId = t),
      (this.lastAcknowledgedBatchId = e),
      (this.lastStreamToken = n);
  };
  (Wu.store = "mutationQueues"), (Wu.keyPath = "userId");
  var Yu = function (t, e, n, r, i) {
    (this.userId = t),
      (this.batchId = e),
      (this.localWriteTimeMs = n),
      (this.baseMutations = r),
      (this.mutations = i);
  };
  (Yu.store = "mutations"),
    (Yu.keyPath = "batchId"),
    (Yu.userMutationsIndex = "userMutationsIndex"),
    (Yu.userMutationsKeyPath = ["userId", "batchId"]);
  var Xu = (function () {
    function t() {}
    return (
      (t.prefixForUser = function (t) {
        return [t];
      }),
      (t.prefixForPath = function (t, e) {
        return [t, zu(e)];
      }),
      (t.key = function (t, e, n) {
        return [t, zu(e), n];
      }),
      t
    );
  })();
  (Xu.store = "documentMutations"), (Xu.PLACEHOLDER = new Xu());
  var Ju = function (t, e) {
      (this.path = t), (this.readTime = e);
    },
    Zu = function (t, e) {
      (this.path = t), (this.version = e);
    },
    tc = function (t, e, n, r, i, o) {
      (this.unknownDocument = t),
        (this.noDocument = e),
        (this.document = n),
        (this.hasCommittedMutations = r),
        (this.readTime = i),
        (this.parentPath = o);
    };
  (tc.store = "remoteDocuments"),
    (tc.readTimeIndex = "readTimeIndex"),
    (tc.readTimeIndexPath = "readTime"),
    (tc.collectionReadTimeIndex = "collectionReadTimeIndex"),
    (tc.collectionReadTimeIndexPath = ["parentPath", "readTime"]);
  var ec = function (t) {
    this.byteSize = t;
  };
  (ec.store = "remoteDocumentGlobal"), (ec.key = "remoteDocumentGlobalKey");
  var nc = function (t, e, n, r, i, o, s) {
    (this.targetId = t),
      (this.canonicalId = e),
      (this.readTime = n),
      (this.resumeToken = r),
      (this.lastListenSequenceNumber = i),
      (this.lastLimboFreeSnapshotVersion = o),
      (this.query = s);
  };
  (nc.store = "targets"),
    (nc.keyPath = "targetId"),
    (nc.queryTargetsIndexName = "queryTargetsIndex"),
    (nc.queryTargetsKeyPath = ["canonicalId", "targetId"]);
  var rc = function (t, e, n) {
    (this.targetId = t), (this.path = e), (this.sequenceNumber = n);
  };
  (rc.store = "targetDocuments"),
    (rc.keyPath = ["targetId", "path"]),
    (rc.documentTargetsIndex = "documentTargetsIndex"),
    (rc.documentTargetsKeyPath = ["path", "targetId"]);
  var ic = function (t, e, n, r) {
    (this.highestTargetId = t),
      (this.highestListenSequenceNumber = e),
      (this.lastRemoteSnapshotVersion = n),
      (this.targetCount = r);
  };
  (ic.key = "targetGlobalKey"), (ic.store = "targetGlobal");
  var oc = function (t, e) {
    (this.collectionId = t), (this.parent = e);
  };
  (oc.store = "collectionParents"), (oc.keyPath = ["collectionId", "parent"]);
  var sc = function (t, e, n, r) {
    (this.clientId = t),
      (this.updateTimeMs = e),
      (this.networkEnabled = n),
      (this.inForeground = r);
  };
  (sc.store = "clientMetadata"), (sc.keyPath = "clientId");
  var ac = function (t, e, n) {
    (this.bundleId = t), (this.createTime = e), (this.version = n);
  };
  (ac.store = "bundles"), (ac.keyPath = "bundleId");
  var uc = function (t, e, n) {
    (this.name = t), (this.readTime = e), (this.bundledQuery = n);
  };
  (uc.store = "namedQueries"), (uc.keyPath = "name");
  var cc = pt(
      pt(
        [],
        pt(
          pt(
            [],
            pt(
              pt(
                [],
                pt(
                  pt(
                    [],
                    [
                      Wu.store,
                      Yu.store,
                      Xu.store,
                      tc.store,
                      nc.store,
                      Qu.store,
                      ic.store,
                      rc.store,
                    ]
                  ),
                  [sc.store]
                )
              ),
              [ec.store]
            )
          ),
          [oc.store]
        )
      ),
      [ac.store, uc.store]
    ),
    lc =
      "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
    hc = (function () {
      function t() {
        this.onCommittedListeners = [];
      }
      return (
        (t.prototype.addOnCommittedListener = function (t) {
          this.onCommittedListeners.push(t);
        }),
        (t.prototype.raiseOnCommittedEvent = function () {
          this.onCommittedListeners.forEach(function (t) {
            return t();
          });
        }),
        t
      );
    })(),
    fc = function () {
      var t = this;
      this.promise = new Promise(function (e, n) {
        (t.resolve = e), (t.reject = n);
      });
    },
    dc = (function () {
      function t(t) {
        var e = this;
        (this.nextCallback = null),
          (this.catchCallback = null),
          (this.result = void 0),
          (this.error = void 0),
          (this.isDone = !1),
          (this.callbackAttached = !1),
          t(
            function (t) {
              (e.isDone = !0),
                (e.result = t),
                e.nextCallback && e.nextCallback(t);
            },
            function (t) {
              (e.isDone = !0),
                (e.error = t),
                e.catchCallback && e.catchCallback(t);
            }
          );
      }
      return (
        (t.prototype.catch = function (t) {
          return this.next(void 0, t);
        }),
        (t.prototype.next = function (e, n) {
          var r = this;
          return (
            this.callbackAttached && Do(),
            (this.callbackAttached = !0),
            this.isDone
              ? this.error
                ? this.wrapFailure(n, this.error)
                : this.wrapSuccess(e, this.result)
              : new t(function (t, i) {
                  (r.nextCallback = function (n) {
                    r.wrapSuccess(e, n).next(t, i);
                  }),
                    (r.catchCallback = function (e) {
                      r.wrapFailure(n, e).next(t, i);
                    });
                })
          );
        }),
        (t.prototype.toPromise = function () {
          var t = this;
          return new Promise(function (e, n) {
            t.next(e, n);
          });
        }),
        (t.prototype.wrapUserFunction = function (e) {
          try {
            var n = e();
            return n instanceof t ? n : t.resolve(n);
          } catch (e) {
            return t.reject(e);
          }
        }),
        (t.prototype.wrapSuccess = function (e, n) {
          return e
            ? this.wrapUserFunction(function () {
                return e(n);
              })
            : t.resolve(n);
        }),
        (t.prototype.wrapFailure = function (e, n) {
          return e
            ? this.wrapUserFunction(function () {
                return e(n);
              })
            : t.reject(n);
        }),
        (t.resolve = function (e) {
          return new t(function (t, n) {
            t(e);
          });
        }),
        (t.reject = function (e) {
          return new t(function (t, n) {
            n(e);
          });
        }),
        (t.waitFor = function (e) {
          return new t(function (t, n) {
            var r = 0,
              i = 0,
              o = !1;
            e.forEach(function (e) {
              ++r,
                e.next(
                  function () {
                    ++i, o && i === r && t();
                  },
                  function (t) {
                    return n(t);
                  }
                );
            }),
              (o = !0),
              i === r && t();
          });
        }),
        (t.or = function (e) {
          for (
            var n = t.resolve(!1),
              r = function (e) {
                n = n.next(function (n) {
                  return n ? t.resolve(n) : e();
                });
              },
              i = 0,
              o = e;
            i < o.length;
            i++
          )
            r(o[i]);
          return n;
        }),
        (t.forEach = function (t, e) {
          var n = this,
            r = [];
          return (
            t.forEach(function (t, i) {
              r.push(e.call(n, t, i));
            }),
            this.waitFor(r)
          );
        }),
        t
      );
    })(),
    pc = (function () {
      function t(t, e) {
        var n = this;
        (this.action = t),
          (this.transaction = e),
          (this.aborted = !1),
          (this.ft = new fc()),
          (this.transaction.oncomplete = function () {
            n.ft.resolve();
          }),
          (this.transaction.onabort = function () {
            e.error ? n.ft.reject(new yc(t, e.error)) : n.ft.resolve();
          }),
          (this.transaction.onerror = function (e) {
            var r = Ic(e.target.error);
            n.ft.reject(new yc(t, r));
          });
      }
      return (
        (t.open = function (e, n, r, i) {
          try {
            return new t(n, e.transaction(i, r));
          } catch (e) {
            throw new yc(n, e);
          }
        }),
        Object.defineProperty(t.prototype, "dt", {
          get: function () {
            return this.ft.promise;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.abort = function (t) {
          t && this.ft.reject(t),
            this.aborted ||
              (So(
                "SimpleDb",
                "Aborting transaction:",
                t ? t.message : "Client-initiated abort"
              ),
              (this.aborted = !0),
              this.transaction.abort());
        }),
        (t.prototype.store = function (t) {
          var e = this.transaction.objectStore(t);
          return new bc(e);
        }),
        t
      );
    })(),
    vc = (function () {
      function t(e, n, r) {
        (this.name = e),
          (this.version = n),
          (this.wt = r),
          12.2 === t._t(mt()) &&
            Ao(
              "Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."
            );
      }
      return (
        (t.delete = function (t) {
          return (
            So("SimpleDb", "Removing database:", t),
            wc(window.indexedDB.deleteDatabase(t)).toPromise()
          );
        }),
        (t.yt = function () {
          if ("undefined" == typeof indexedDB) return !1;
          if (t.gt()) return !0;
          var e = mt(),
            n = t._t(e),
            r = 0 < n && n < 10,
            i = t.Et(e),
            o = 0 < i && i < 4.5;
          return !(
            e.indexOf("MSIE ") > 0 ||
            e.indexOf("Trident/") > 0 ||
            e.indexOf("Edge/") > 0 ||
            r ||
            o
          );
        }),
        (t.gt = function () {
          var t;
          return (
            "undefined" != typeof process &&
            "YES" ===
              (null === (t = process.env) || void 0 === t ? void 0 : t.Tt)
          );
        }),
        (t.It = function (t, e) {
          return t.store(e);
        }),
        (t._t = function (t) {
          var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
            n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
          return Number(n);
        }),
        (t.Et = function (t) {
          var e = t.match(/Android ([\d.]+)/i),
            n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
          return Number(n);
        }),
        (t.prototype.At = function (t) {
          return lt(this, void 0, void 0, function () {
            var e,
              n = this;
            return ht(this, function (r) {
              switch (r.label) {
                case 0:
                  return this.db
                    ? [3, 2]
                    : (So("SimpleDb", "Opening database:", this.name),
                      (e = this),
                      [
                        4,
                        new Promise(function (e, r) {
                          var i = indexedDB.open(n.name, n.version);
                          (i.onsuccess = function (t) {
                            var n = t.target.result;
                            e(n);
                          }),
                            (i.onblocked = function () {
                              r(
                                new yc(
                                  t,
                                  "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."
                                )
                              );
                            }),
                            (i.onerror = function (e) {
                              var n = e.target.error;
                              "VersionError" === n.name
                                ? r(
                                    new Io(
                                      Eo.FAILED_PRECONDITION,
                                      "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh."
                                    )
                                  )
                                : r(new yc(t, n));
                            }),
                            (i.onupgradeneeded = function (t) {
                              So(
                                "SimpleDb",
                                'Database "' +
                                  n.name +
                                  '" requires upgrade from version:',
                                t.oldVersion
                              );
                              var e = t.target.result;
                              n.wt
                                .Rt(e, i.transaction, t.oldVersion, n.version)
                                .next(function () {
                                  So(
                                    "SimpleDb",
                                    "Database upgrade to version " +
                                      n.version +
                                      " complete"
                                  );
                                });
                            });
                        }),
                      ]);
                case 1:
                  (e.db = r.sent()), (r.label = 2);
                case 2:
                  return [
                    2,
                    (this.bt &&
                      (this.db.onversionchange = function (t) {
                        return n.bt(t);
                      }),
                    this.db),
                  ];
              }
            });
          });
        }),
        (t.prototype.vt = function (t) {
          (this.bt = t),
            this.db &&
              (this.db.onversionchange = function (e) {
                return t(e);
              });
        }),
        (t.prototype.runTransaction = function (t, e, n, r) {
          return lt(this, void 0, void 0, function () {
            var i, o, s, a, u;
            return ht(this, function (c) {
              switch (c.label) {
                case 0:
                  (i = "readonly" === e),
                    (o = 0),
                    (s = function () {
                      var e, s, u, c, l;
                      return ht(this, function (h) {
                        switch (h.label) {
                          case 0:
                            ++o, (h.label = 1);
                          case 1:
                            return h.trys.push([1, 4, , 5]), [4, a.At(t)];
                          case 2:
                            return (
                              (a.db = h.sent()),
                              (e = pc.open(
                                a.db,
                                t,
                                i ? "readonly" : "readwrite",
                                n
                              )),
                              (s = r(e)
                                .catch(function (t) {
                                  return e.abort(t), dc.reject(t);
                                })
                                .toPromise()),
                              (u = {}),
                              s.catch(function () {}),
                              [4, e.dt]
                            );
                          case 3:
                            return [2, ((u.value = (h.sent(), s)), u)];
                          case 4:
                            return (
                              (c = h.sent()),
                              (l = "FirebaseError" !== c.name && o < 3),
                              So(
                                "SimpleDb",
                                "Transaction failed with error:",
                                c.message,
                                "Retrying:",
                                l
                              ),
                              a.close(),
                              l ? [3, 5] : [2, { value: Promise.reject(c) }]
                            );
                          case 5:
                            return [2];
                        }
                      });
                    }),
                    (a = this),
                    (c.label = 1);
                case 1:
                  return [5, s()];
                case 2:
                  if ("object" == typeof (u = c.sent())) return [2, u.value];
                  c.label = 3;
                case 3:
                  return [3, 1];
                case 4:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.close = function () {
          this.db && this.db.close(), (this.db = void 0);
        }),
        t
      );
    })(),
    gc = (function () {
      function t(t) {
        (this.Pt = t), (this.Vt = !1), (this.St = null);
      }
      return (
        Object.defineProperty(t.prototype, "isDone", {
          get: function () {
            return this.Vt;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "Dt", {
          get: function () {
            return this.St;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "cursor", {
          set: function (t) {
            this.Pt = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.done = function () {
          this.Vt = !0;
        }),
        (t.prototype.Ct = function (t) {
          this.St = t;
        }),
        (t.prototype.delete = function () {
          return wc(this.Pt.delete());
        }),
        t
      );
    })(),
    yc = (function (t) {
      function e(e, n) {
        var r = this;
        return (
          ((r =
            t.call(
              this,
              Eo.UNAVAILABLE,
              "IndexedDB transaction '" + e + "' failed: " + n
            ) || this).name = "IndexedDbTransactionError"),
          r
        );
      }
      return ut(e, t), e;
    })(Io);
  function mc(t) {
    return "IndexedDbTransactionError" === t.name;
  }
  var bc = (function () {
    function t(t) {
      this.store = t;
    }
    return (
      (t.prototype.put = function (t, e) {
        var n;
        return (
          void 0 !== e
            ? (So("SimpleDb", "PUT", this.store.name, t, e),
              (n = this.store.put(e, t)))
            : (So("SimpleDb", "PUT", this.store.name, "<auto-key>", t),
              (n = this.store.put(t))),
          wc(n)
        );
      }),
      (t.prototype.add = function (t) {
        return (
          So("SimpleDb", "ADD", this.store.name, t, t), wc(this.store.add(t))
        );
      }),
      (t.prototype.get = function (t) {
        var e = this;
        return wc(this.store.get(t)).next(function (n) {
          return (
            void 0 === n && (n = null),
            So("SimpleDb", "GET", e.store.name, t, n),
            n
          );
        });
      }),
      (t.prototype.delete = function (t) {
        return (
          So("SimpleDb", "DELETE", this.store.name, t), wc(this.store.delete(t))
        );
      }),
      (t.prototype.count = function () {
        return So("SimpleDb", "COUNT", this.store.name), wc(this.store.count());
      }),
      (t.prototype.Nt = function (t, e) {
        var n = this.cursor(this.options(t, e)),
          r = [];
        return this.xt(n, function (t, e) {
          r.push(e);
        }).next(function () {
          return r;
        });
      }),
      (t.prototype.Ft = function (t, e) {
        So("SimpleDb", "DELETE ALL", this.store.name);
        var n = this.options(t, e);
        n.kt = !1;
        var r = this.cursor(n);
        return this.xt(r, function (t, e, n) {
          return n.delete();
        });
      }),
      (t.prototype.$t = function (t, e) {
        var n;
        e ? (n = t) : ((n = {}), (e = t));
        var r = this.cursor(n);
        return this.xt(r, e);
      }),
      (t.prototype.Ot = function (t) {
        var e = this.cursor({});
        return new dc(function (n, r) {
          (e.onerror = function (t) {
            var e = Ic(t.target.error);
            r(e);
          }),
            (e.onsuccess = function (e) {
              var r = e.target.result;
              r
                ? t(r.primaryKey, r.value).next(function (t) {
                    t ? r.continue() : n();
                  })
                : n();
            });
        });
      }),
      (t.prototype.xt = function (t, e) {
        var n = [];
        return new dc(function (r, i) {
          (t.onerror = function (t) {
            i(t.target.error);
          }),
            (t.onsuccess = function (t) {
              var i = t.target.result;
              if (i) {
                var o = new gc(i),
                  s = e(i.primaryKey, i.value, o);
                if (s instanceof dc) {
                  var a = s.catch(function (t) {
                    return o.done(), dc.reject(t);
                  });
                  n.push(a);
                }
                o.isDone
                  ? r()
                  : null === o.Dt
                  ? i.continue()
                  : i.continue(o.Dt);
              } else r();
            });
        }).next(function () {
          return dc.waitFor(n);
        });
      }),
      (t.prototype.options = function (t, e) {
        var n;
        return (
          void 0 !== t && ("string" == typeof t ? (n = t) : (e = t)),
          { index: n, range: e }
        );
      }),
      (t.prototype.cursor = function (t) {
        var e = "next";
        if ((t.reverse && (e = "prev"), t.index)) {
          var n = this.store.index(t.index);
          return t.kt ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
        }
        return this.store.openCursor(t.range, e);
      }),
      t
    );
  })();
  function wc(t) {
    return new dc(function (e, n) {
      (t.onsuccess = function (t) {
        var n = t.target.result;
        e(n);
      }),
        (t.onerror = function (t) {
          var e = Ic(t.target.error);
          n(e);
        });
    });
  }
  var Ec = !1;
  function Ic(t) {
    var e = vc._t(mt());
    if (e >= 12.2 && e < 13) {
      var n =
        "An internal error was encountered in the Indexed Database server";
      if (t.message.indexOf(n) >= 0) {
        var r = new Io(
          "internal",
          "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" +
            n +
            "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."
        );
        return (
          Ec ||
            ((Ec = !0),
            setTimeout(function () {
              throw r;
            }, 0)),
          r
        );
      }
    }
    return t;
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Tc = (function (t) {
    function e(e, n) {
      var r = this;
      return (
        ((r = t.call(this) || this).Mt = e), (r.currentSequenceNumber = n), r
      );
    }
    return ut(e, t), e;
  })(hc);
  function _c(t, e) {
    var n = xo(t);
    return vc.It(n.Mt, e);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Sc = (function () {
      function t(t, e, n, r) {
        (this.batchId = t),
          (this.localWriteTime = e),
          (this.baseMutations = n),
          (this.mutations = r);
      }
      return (
        (t.prototype.applyToRemoteDocument = function (t, e) {
          for (
            var n = e.mutationResults, r = 0;
            r < this.mutations.length;
            r++
          ) {
            var i = this.mutations[r];
            i.key.isEqual(t.key) && Sa(i, t, n[r]);
          }
        }),
        (t.prototype.applyToLocalView = function (t) {
          for (var e = 0, n = this.baseMutations; e < n.length; e++)
            (o = n[e]).key.isEqual(t.key) && Aa(o, t, this.localWriteTime);
          for (var r = 0, i = this.mutations; r < i.length; r++) {
            var o;
            (o = i[r]).key.isEqual(t.key) && Aa(o, t, this.localWriteTime);
          }
        }),
        (t.prototype.applyToLocalDocumentSet = function (t) {
          var e = this;
          this.mutations.forEach(function (n) {
            var r = t.get(n.key),
              i = r;
            e.applyToLocalView(i),
              r.isValidDocument() || i.convertToNoDocument(Vo.min());
          });
        }),
        (t.prototype.keys = function () {
          return this.mutations.reduce(function (t, e) {
            return t.add(e.key);
          }, Za());
        }),
        (t.prototype.isEqual = function (t) {
          return (
            this.batchId === t.batchId &&
            Po(this.mutations, t.mutations, function (t, e) {
              return Na(t, e);
            }) &&
            Po(this.baseMutations, t.baseMutations, function (t, e) {
              return Na(t, e);
            })
          );
        }),
        t
      );
    })(),
    Ac = (function () {
      function t(t, e, n, r) {
        (this.batch = t),
          (this.commitVersion = e),
          (this.mutationResults = n),
          (this.docVersions = r);
      }
      return (
        (t.from = function (e, n, r) {
          Co(e.mutations.length === r.length);
          for (var i = Xa, o = e.mutations, s = 0; s < o.length; s++)
            i = i.insert(o[s].key, r[s].version);
          return new t(e, n, r, i);
        }),
        t
      );
    })(),
    kc = (function () {
      function t(t, e, n, r, i, o, s) {
        void 0 === i && (i = Vo.min()),
          void 0 === o && (o = Vo.min()),
          void 0 === s && (s = Ho.EMPTY_BYTE_STRING),
          (this.target = t),
          (this.targetId = e),
          (this.purpose = n),
          (this.sequenceNumber = r),
          (this.snapshotVersion = i),
          (this.lastLimboFreeSnapshotVersion = o),
          (this.resumeToken = s);
      }
      return (
        (t.prototype.withSequenceNumber = function (e) {
          return new t(
            this.target,
            this.targetId,
            this.purpose,
            e,
            this.snapshotVersion,
            this.lastLimboFreeSnapshotVersion,
            this.resumeToken
          );
        }),
        (t.prototype.withResumeToken = function (e, n) {
          return new t(
            this.target,
            this.targetId,
            this.purpose,
            this.sequenceNumber,
            n,
            this.lastLimboFreeSnapshotVersion,
            e
          );
        }),
        (t.prototype.withLastLimboFreeSnapshotVersion = function (e) {
          return new t(
            this.target,
            this.targetId,
            this.purpose,
            this.sequenceNumber,
            this.snapshotVersion,
            e,
            this.resumeToken
          );
        }),
        t
      );
    })(),
    Nc = function (t) {
      this.Lt = t;
    };
  function Dc(t, e) {
    if (e.document)
      return (function (t, e, n) {
        var r = Eu(t, e.name),
          i = yu(e.updateTime),
          o = new bs({ mapValue: { fields: e.fields } }),
          s = Es.newFoundDocument(r, i, o);
        return (
          n && s.setHasCommittedMutations(),
          n ? s.setHasCommittedMutations() : s
        );
      })(t.Lt, e.document, !!e.hasCommittedMutations);
    if (e.noDocument) {
      var n = is.fromSegments(e.noDocument.path),
        r = Lc(e.noDocument.readTime),
        i = Es.newNoDocument(n, r);
      return e.hasCommittedMutations ? i.setHasCommittedMutations() : i;
    }
    if (e.unknownDocument) {
      var o = is.fromSegments(e.unknownDocument.path);
      return (r = Lc(e.unknownDocument.version)), Es.newUnknownDocument(o, r);
    }
    return Do();
  }
  function Cc(t, e, n) {
    var r = xc(n),
      i = e.key.path.popLast().toArray();
    if (e.isFoundDocument()) {
      var o = (function (t, e) {
          return {
            name: wu(t, e.key),
            fields: e.data.value.mapValue.fields,
            updateTime: pu(t, e.version.toTimestamp()),
          };
        })(t.Lt, e),
        s = e.hasCommittedMutations;
      return new tc(null, null, o, s, r, i);
    }
    if (e.isNoDocument()) {
      var a = e.key.path.toArray(),
        u = Oc(e.version);
      return (
        (s = e.hasCommittedMutations), new tc(null, new Ju(a, u), null, s, r, i)
      );
    }
    if (e.isUnknownDocument()) {
      var c = e.key.path.toArray(),
        l = Oc(e.version);
      return new tc(new Zu(c, l), null, null, !0, r, i);
    }
    return Do();
  }
  function xc(t) {
    var e = t.toTimestamp();
    return [e.seconds, e.nanoseconds];
  }
  function Rc(t) {
    var e = new Fo(t[0], t[1]);
    return Vo.fromTimestamp(e);
  }
  function Oc(t) {
    var e = t.toTimestamp();
    return new Hu(e.seconds, e.nanoseconds);
  }
  function Lc(t) {
    var e = new Fo(t.seconds, t.nanoseconds);
    return Vo.fromTimestamp(e);
  }
  function Pc(t, e) {
    for (
      var n = (e.baseMutations || []).map(function (e) {
          return Nu(t.Lt, e);
        }),
        r = 0;
      r < e.mutations.length - 1;
      ++r
    ) {
      var i = e.mutations[r];
      if (
        r + 1 < e.mutations.length &&
        void 0 !== e.mutations[r + 1].transform
      ) {
        var o = e.mutations[r + 1];
        (i.updateTransforms = o.transform.fieldTransforms),
          e.mutations.splice(r + 1, 1),
          ++r;
      }
    }
    var s = e.mutations.map(function (e) {
        return Nu(t.Lt, e);
      }),
      a = Fo.fromMillis(e.localWriteTimeMs);
    return new Sc(e.batchId, a, n, s);
  }
  function Mc(t) {
    var e,
      n,
      r = Lc(t.readTime),
      i =
        void 0 !== t.lastLimboFreeSnapshotVersion
          ? Lc(t.lastLimboFreeSnapshotVersion)
          : Vo.min();
    return (
      void 0 !== t.query.documents
        ? (Co(1 === (n = t.query).documents.length),
          (e = Xs(Ks(Tu(n.documents[0])))))
        : (e = (function (t) {
            return Xs(xu(t));
          })(t.query)),
      new kc(
        e,
        t.targetId,
        0,
        t.lastListenSequenceNumber,
        r,
        i,
        Ho.fromBase64String(t.resumeToken)
      )
    );
  }
  function Fc(t, e) {
    var n,
      r = Oc(e.snapshotVersion),
      i = Oc(e.lastLimboFreeSnapshotVersion);
    n = As(e.target) ? Du(t.Lt, e.target) : Cu(t.Lt, e.target);
    var o = e.resumeToken.toBase64();
    return new nc(e.targetId, _s(e.target), r, o, e.sequenceNumber, i, n);
  }
  function Vc(t) {
    var e = xu({ parent: t.parent, structuredQuery: t.structuredQuery });
    return "LAST" === t.limitType ? Js(e, e.limit, "L") : e;
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var qc = (function () {
    function t() {}
    return (
      (t.prototype.getBundleMetadata = function (t, e) {
        return Uc(t)
          .get(e)
          .next(function (t) {
            if (t)
              return {
                id: (e = t).bundleId,
                createTime: Lc(e.createTime),
                version: e.version,
              };
            var e;
          });
      }),
      (t.prototype.saveBundleMetadata = function (t, e) {
        return Uc(t).put({
          bundleId: (n = e).id,
          createTime: Oc(yu(n.createTime)),
          version: n.version,
        });
        var n;
      }),
      (t.prototype.getNamedQuery = function (t, e) {
        return jc(t)
          .get(e)
          .next(function (t) {
            if (t)
              return {
                name: (e = t).name,
                query: Vc(e.bundledQuery),
                readTime: Lc(e.readTime),
              };
            var e;
          });
      }),
      (t.prototype.saveNamedQuery = function (t, e) {
        return jc(t).put(
          (function (t) {
            return {
              name: t.name,
              readTime: Oc(yu(t.readTime)),
              bundledQuery: t.bundledQuery,
            };
          })(e)
        );
      }),
      t
    );
  })();
  function Uc(t) {
    return _c(t, ac.store);
  }
  function jc(t) {
    return _c(t, uc.store);
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Bc = (function () {
      function t() {
        this.Bt = new zc();
      }
      return (
        (t.prototype.addToCollectionParentIndex = function (t, e) {
          return this.Bt.add(e), dc.resolve();
        }),
        (t.prototype.getCollectionParents = function (t, e) {
          return dc.resolve(this.Bt.getEntries(e));
        }),
        t
      );
    })(),
    zc = (function () {
      function t() {
        this.index = {};
      }
      return (
        (t.prototype.add = function (t) {
          var e = t.lastSegment(),
            n = t.popLast(),
            r = this.index[e] || new $a(zo.comparator),
            i = !r.has(n);
          return (this.index[e] = r.add(n)), i;
        }),
        (t.prototype.has = function (t) {
          var e = t.lastSegment(),
            n = t.popLast(),
            r = this.index[e];
          return r && r.has(n);
        }),
        (t.prototype.getEntries = function (t) {
          return (this.index[t] || new $a(zo.comparator)).toArray();
        }),
        t
      );
    })(),
    Kc = (function () {
      function t() {
        this.qt = new zc();
      }
      return (
        (t.prototype.addToCollectionParentIndex = function (t, e) {
          var n = this;
          if (!this.qt.has(e)) {
            var r = e.lastSegment(),
              i = e.popLast();
            t.addOnCommittedListener(function () {
              n.qt.add(e);
            });
            var o = { collectionId: r, parent: zu(i) };
            return $c(t).put(o);
          }
          return dc.resolve();
        }),
        (t.prototype.getCollectionParents = function (t, e) {
          var n = [],
            r = IDBKeyRange.bound([e, ""], [Mo(e), ""], !1, !0);
          return $c(t)
            .Nt(r)
            .next(function (t) {
              for (var r = 0, i = t; r < i.length; r++) {
                var o = i[r];
                if (o.collectionId !== e) break;
                n.push(Gu(o.parent));
              }
              return n;
            });
        }),
        t
      );
    })();
  function $c(t) {
    return _c(t, oc.store);
  }
  /**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Gc = {
      didRun: !1,
      sequenceNumbersCollected: 0,
      targetsRemoved: 0,
      documentsRemoved: 0,
    },
    Hc = (function () {
      function t(t, e, n) {
        (this.cacheSizeCollectionThreshold = t),
          (this.percentileToCollect = e),
          (this.maximumSequenceNumbersToCollect = n);
      }
      return (
        (t.withCacheSize = function (e) {
          return new t(
            e,
            t.DEFAULT_COLLECTION_PERCENTILE,
            t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
          );
        }),
        t
      );
    })();
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Qc(t, e, n) {
    var r = t.store(Yu.store),
      i = t.store(Xu.store),
      o = [],
      s = IDBKeyRange.only(n.batchId),
      a = 0,
      u = r.$t({ range: s }, function (t, e, n) {
        return a++, n.delete();
      });
    o.push(
      u.next(function () {
        Co(1 === a);
      })
    );
    for (var c = [], l = 0, h = n.mutations; l < h.length; l++) {
      var f = h[l],
        d = Xu.key(e, f.key.path, n.batchId);
      o.push(i.delete(d)), c.push(f.key);
    }
    return dc.waitFor(o).next(function () {
      return c;
    });
  }
  function Wc(t) {
    if (!t) return 0;
    var e;
    if (t.document) e = t.document;
    else if (t.unknownDocument) e = t.unknownDocument;
    else {
      if (!t.noDocument) throw Do();
      e = t.noDocument;
    }
    return JSON.stringify(e).length;
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ (Hc.DEFAULT_COLLECTION_PERCENTILE = 10),
    (Hc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3),
    (Hc.DEFAULT = new Hc(
      41943040,
      Hc.DEFAULT_COLLECTION_PERCENTILE,
      Hc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
    )),
    (Hc.DISABLED = new Hc(-1, 0, 0));
  var Yc = (function () {
    function t(t, e, n, r) {
      (this.userId = t),
        (this.R = e),
        (this.Ut = n),
        (this.referenceDelegate = r),
        (this.Kt = {});
    }
    return (
      (t.Qt = function (e, n, r, i) {
        return (
          Co("" !== e.uid), new t(e.isAuthenticated() ? e.uid : "", n, r, i)
        );
      }),
      (t.prototype.checkEmpty = function (t) {
        var e = !0,
          n = IDBKeyRange.bound(
            [this.userId, Number.NEGATIVE_INFINITY],
            [this.userId, Number.POSITIVE_INFINITY]
          );
        return Jc(t)
          .$t({ index: Yu.userMutationsIndex, range: n }, function (t, n, r) {
            (e = !1), r.done();
          })
          .next(function () {
            return e;
          });
      }),
      (t.prototype.addMutationBatch = function (t, e, n, r) {
        var i = this,
          o = Zc(t),
          s = Jc(t);
        return s.add({}).next(function (a) {
          Co("number" == typeof a);
          for (
            var u = new Sc(a, e, n, r),
              c = (function (t, e, n) {
                var r = n.baseMutations.map(function (e) {
                    return ku(t.Lt, e);
                  }),
                  i = n.mutations.map(function (e) {
                    return ku(t.Lt, e);
                  });
                return new Yu(e, n.batchId, n.localWriteTime.toMillis(), r, i);
              })(i.R, i.userId, u),
              l = [],
              h = new $a(function (t, e) {
                return Lo(t.canonicalString(), e.canonicalString());
              }),
              f = 0,
              d = r;
            f < d.length;
            f++
          ) {
            var p = d[f],
              v = Xu.key(i.userId, p.key.path, a);
            (h = h.add(p.key.path.popLast())),
              l.push(s.put(c)),
              l.push(o.put(v, Xu.PLACEHOLDER));
          }
          return (
            h.forEach(function (e) {
              l.push(i.Ut.addToCollectionParentIndex(t, e));
            }),
            t.addOnCommittedListener(function () {
              i.Kt[a] = u.keys();
            }),
            dc.waitFor(l).next(function () {
              return u;
            })
          );
        });
      }),
      (t.prototype.lookupMutationBatch = function (t, e) {
        var n = this;
        return Jc(t)
          .get(e)
          .next(function (t) {
            return t ? (Co(t.userId === n.userId), Pc(n.R, t)) : null;
          });
      }),
      (t.prototype.jt = function (t, e) {
        var n = this;
        return this.Kt[e]
          ? dc.resolve(this.Kt[e])
          : this.lookupMutationBatch(t, e).next(function (t) {
              if (t) {
                var r = t.keys();
                return (n.Kt[e] = r), r;
              }
              return null;
            });
      }),
      (t.prototype.getNextMutationBatchAfterBatchId = function (t, e) {
        var n = this,
          r = e + 1,
          i = IDBKeyRange.lowerBound([this.userId, r]),
          o = null;
        return Jc(t)
          .$t({ index: Yu.userMutationsIndex, range: i }, function (t, e, i) {
            e.userId === n.userId && (Co(e.batchId >= r), (o = Pc(n.R, e))),
              i.done();
          })
          .next(function () {
            return o;
          });
      }),
      (t.prototype.getHighestUnacknowledgedBatchId = function (t) {
        var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]),
          n = -1;
        return Jc(t)
          .$t(
            { index: Yu.userMutationsIndex, range: e, reverse: !0 },
            function (t, e, r) {
              (n = e.batchId), r.done();
            }
          )
          .next(function () {
            return n;
          });
      }),
      (t.prototype.getAllMutationBatches = function (t) {
        var e = this,
          n = IDBKeyRange.bound(
            [this.userId, -1],
            [this.userId, Number.POSITIVE_INFINITY]
          );
        return Jc(t)
          .Nt(Yu.userMutationsIndex, n)
          .next(function (t) {
            return t.map(function (t) {
              return Pc(e.R, t);
            });
          });
      }),
      (t.prototype.getAllMutationBatchesAffectingDocumentKey = function (t, e) {
        var n = this,
          r = Xu.prefixForPath(this.userId, e.path),
          i = IDBKeyRange.lowerBound(r),
          o = [];
        return Zc(t)
          .$t({ range: i }, function (r, i, s) {
            var a = r[0],
              u = r[1],
              c = r[2],
              l = Gu(u);
            if (a === n.userId && e.path.isEqual(l))
              return Jc(t)
                .get(c)
                .next(function (t) {
                  if (!t) throw Do();
                  Co(t.userId === n.userId), o.push(Pc(n.R, t));
                });
            s.done();
          })
          .next(function () {
            return o;
          });
      }),
      (t.prototype.getAllMutationBatchesAffectingDocumentKeys = function (
        t,
        e
      ) {
        var n = this,
          r = new $a(Lo),
          i = [];
        return (
          e.forEach(function (e) {
            var o = Xu.prefixForPath(n.userId, e.path),
              s = IDBKeyRange.lowerBound(o),
              a = Zc(t).$t({ range: s }, function (t, i, o) {
                var s = t[0],
                  a = t[1],
                  u = t[2],
                  c = Gu(a);
                s === n.userId && e.path.isEqual(c) ? (r = r.add(u)) : o.done();
              });
            i.push(a);
          }),
          dc.waitFor(i).next(function () {
            return n.Wt(t, r);
          })
        );
      }),
      (t.prototype.getAllMutationBatchesAffectingQuery = function (t, e) {
        var n = this,
          r = e.path,
          i = r.length + 1,
          o = Xu.prefixForPath(this.userId, r),
          s = IDBKeyRange.lowerBound(o),
          a = new $a(Lo);
        return Zc(t)
          .$t({ range: s }, function (t, e, o) {
            var s = t[0],
              u = t[1],
              c = t[2],
              l = Gu(u);
            s === n.userId && r.isPrefixOf(l)
              ? l.length === i && (a = a.add(c))
              : o.done();
          })
          .next(function () {
            return n.Wt(t, a);
          });
      }),
      (t.prototype.Wt = function (t, e) {
        var n = this,
          r = [],
          i = [];
        return (
          e.forEach(function (e) {
            i.push(
              Jc(t)
                .get(e)
                .next(function (t) {
                  if (null === t) throw Do();
                  Co(t.userId === n.userId), r.push(Pc(n.R, t));
                })
            );
          }),
          dc.waitFor(i).next(function () {
            return r;
          })
        );
      }),
      (t.prototype.removeMutationBatch = function (t, e) {
        var n = this;
        return Qc(t.Mt, this.userId, e).next(function (r) {
          return (
            t.addOnCommittedListener(function () {
              n.Gt(e.batchId);
            }),
            dc.forEach(r, function (e) {
              return n.referenceDelegate.markPotentiallyOrphaned(t, e);
            })
          );
        });
      }),
      (t.prototype.Gt = function (t) {
        delete this.Kt[t];
      }),
      (t.prototype.performConsistencyCheck = function (t) {
        var e = this;
        return this.checkEmpty(t).next(function (n) {
          if (!n) return dc.resolve();
          var r = IDBKeyRange.lowerBound(Xu.prefixForUser(e.userId)),
            i = [];
          return Zc(t)
            .$t({ range: r }, function (t, n, r) {
              if (t[0] === e.userId) {
                var o = Gu(t[1]);
                i.push(o);
              } else r.done();
            })
            .next(function () {
              Co(0 === i.length);
            });
        });
      }),
      (t.prototype.containsKey = function (t, e) {
        return Xc(t, this.userId, e);
      }),
      (t.prototype.zt = function (t) {
        var e = this;
        return tl(t)
          .get(this.userId)
          .next(function (t) {
            return t || new Wu(e.userId, -1, "");
          });
      }),
      t
    );
  })();
  function Xc(t, e, n) {
    var r = Xu.prefixForPath(e, n.path),
      i = r[1],
      o = IDBKeyRange.lowerBound(r),
      s = !1;
    return Zc(t)
      .$t({ range: o, kt: !0 }, function (t, n, r) {
        var o = t[0],
          a = t[1];
        t[2], o === e && a === i && (s = !0), r.done();
      })
      .next(function () {
        return s;
      });
  }
  function Jc(t) {
    return _c(t, Yu.store);
  }
  function Zc(t) {
    return _c(t, Xu.store);
  }
  function tl(t) {
    return _c(t, Wu.store);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var el = (function () {
      function t(t) {
        this.Ht = t;
      }
      return (
        (t.prototype.next = function () {
          return (this.Ht += 2), this.Ht;
        }),
        (t.Jt = function () {
          return new t(0);
        }),
        (t.Yt = function () {
          return new t(-1);
        }),
        t
      );
    })(),
    nl = (function () {
      function t(t, e) {
        (this.referenceDelegate = t), (this.R = e);
      }
      return (
        (t.prototype.allocateTargetId = function (t) {
          var e = this;
          return this.Xt(t).next(function (n) {
            var r = new el(n.highestTargetId);
            return (
              (n.highestTargetId = r.next()),
              e.Zt(t, n).next(function () {
                return n.highestTargetId;
              })
            );
          });
        }),
        (t.prototype.getLastRemoteSnapshotVersion = function (t) {
          return this.Xt(t).next(function (t) {
            return Vo.fromTimestamp(
              new Fo(
                t.lastRemoteSnapshotVersion.seconds,
                t.lastRemoteSnapshotVersion.nanoseconds
              )
            );
          });
        }),
        (t.prototype.getHighestSequenceNumber = function (t) {
          return this.Xt(t).next(function (t) {
            return t.highestListenSequenceNumber;
          });
        }),
        (t.prototype.setTargetsMetadata = function (t, e, n) {
          var r = this;
          return this.Xt(t).next(function (i) {
            return (
              (i.highestListenSequenceNumber = e),
              n && (i.lastRemoteSnapshotVersion = n.toTimestamp()),
              e > i.highestListenSequenceNumber &&
                (i.highestListenSequenceNumber = e),
              r.Zt(t, i)
            );
          });
        }),
        (t.prototype.addTargetData = function (t, e) {
          var n = this;
          return this.te(t, e).next(function () {
            return n.Xt(t).next(function (r) {
              return (r.targetCount += 1), n.ee(e, r), n.Zt(t, r);
            });
          });
        }),
        (t.prototype.updateTargetData = function (t, e) {
          return this.te(t, e);
        }),
        (t.prototype.removeTargetData = function (t, e) {
          var n = this;
          return this.removeMatchingKeysForTargetId(t, e.targetId)
            .next(function () {
              return rl(t).delete(e.targetId);
            })
            .next(function () {
              return n.Xt(t);
            })
            .next(function (e) {
              return Co(e.targetCount > 0), (e.targetCount -= 1), n.Zt(t, e);
            });
        }),
        (t.prototype.removeTargets = function (t, e, n) {
          var r = this,
            i = 0,
            o = [];
          return rl(t)
            .$t(function (s, a) {
              var u = Mc(a);
              u.sequenceNumber <= e &&
                null === n.get(u.targetId) &&
                (i++, o.push(r.removeTargetData(t, u)));
            })
            .next(function () {
              return dc.waitFor(o);
            })
            .next(function () {
              return i;
            });
        }),
        (t.prototype.forEachTarget = function (t, e) {
          return rl(t).$t(function (t, n) {
            var r = Mc(n);
            e(r);
          });
        }),
        (t.prototype.Xt = function (t) {
          return il(t)
            .get(ic.key)
            .next(function (t) {
              return Co(null !== t), t;
            });
        }),
        (t.prototype.Zt = function (t, e) {
          return il(t).put(ic.key, e);
        }),
        (t.prototype.te = function (t, e) {
          return rl(t).put(Fc(this.R, e));
        }),
        (t.prototype.ee = function (t, e) {
          var n = !1;
          return (
            t.targetId > e.highestTargetId &&
              ((e.highestTargetId = t.targetId), (n = !0)),
            t.sequenceNumber > e.highestListenSequenceNumber &&
              ((e.highestListenSequenceNumber = t.sequenceNumber), (n = !0)),
            n
          );
        }),
        (t.prototype.getTargetCount = function (t) {
          return this.Xt(t).next(function (t) {
            return t.targetCount;
          });
        }),
        (t.prototype.getTargetData = function (t, e) {
          var n = _s(e),
            r = IDBKeyRange.bound(
              [n, Number.NEGATIVE_INFINITY],
              [n, Number.POSITIVE_INFINITY]
            ),
            i = null;
          return rl(t)
            .$t(
              { range: r, index: nc.queryTargetsIndexName },
              function (t, n, r) {
                var o = Mc(n);
                Ss(e, o.target) && ((i = o), r.done());
              }
            )
            .next(function () {
              return i;
            });
        }),
        (t.prototype.addMatchingKeys = function (t, e, n) {
          var r = this,
            i = [],
            o = ol(t);
          return (
            e.forEach(function (e) {
              var s = zu(e.path);
              i.push(o.put(new rc(n, s))),
                i.push(r.referenceDelegate.addReference(t, n, e));
            }),
            dc.waitFor(i)
          );
        }),
        (t.prototype.removeMatchingKeys = function (t, e, n) {
          var r = this,
            i = ol(t);
          return dc.forEach(e, function (e) {
            var o = zu(e.path);
            return dc.waitFor([
              i.delete([n, o]),
              r.referenceDelegate.removeReference(t, n, e),
            ]);
          });
        }),
        (t.prototype.removeMatchingKeysForTargetId = function (t, e) {
          var n = ol(t),
            r = IDBKeyRange.bound([e], [e + 1], !1, !0);
          return n.delete(r);
        }),
        (t.prototype.getMatchingKeysForTargetId = function (t, e) {
          var n = IDBKeyRange.bound([e], [e + 1], !1, !0),
            r = ol(t),
            i = Za();
          return r
            .$t({ range: n, kt: !0 }, function (t, e, n) {
              var r = Gu(t[1]),
                o = new is(r);
              i = i.add(o);
            })
            .next(function () {
              return i;
            });
        }),
        (t.prototype.containsKey = function (t, e) {
          var n = zu(e.path),
            r = IDBKeyRange.bound([n], [Mo(n)], !1, !0),
            i = 0;
          return ol(t)
            .$t(
              { index: rc.documentTargetsIndex, kt: !0, range: r },
              function (t, e, n) {
                var r = t[0];
                t[1], 0 !== r && (i++, n.done());
              }
            )
            .next(function () {
              return i > 0;
            });
        }),
        (t.prototype.lt = function (t, e) {
          return rl(t)
            .get(e)
            .next(function (t) {
              return t ? Mc(t) : null;
            });
        }),
        t
      );
    })();
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function rl(t) {
    return _c(t, nc.store);
  }
  function il(t) {
    return _c(t, ic.store);
  }
  function ol(t) {
    return _c(t, rc.store);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function sl(t) {
    return lt(this, void 0, void 0, function () {
      return ht(this, function (e) {
        if (t.code !== Eo.FAILED_PRECONDITION || t.message !== lc) throw t;
        return So("LocalStore", "Unexpectedly lost primary lease"), [2];
      });
    });
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function al(t, e) {
    var n = t[0],
      r = t[1],
      i = e[0],
      o = e[1],
      s = Lo(n, i);
    return 0 === s ? Lo(r, o) : s;
  }
  var ul = (function () {
      function t(t) {
        (this.ne = t), (this.buffer = new $a(al)), (this.se = 0);
      }
      return (
        (t.prototype.ie = function () {
          return ++this.se;
        }),
        (t.prototype.re = function (t) {
          var e = [t, this.ie()];
          if (this.buffer.size < this.ne) this.buffer = this.buffer.add(e);
          else {
            var n = this.buffer.last();
            al(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e));
          }
        }),
        Object.defineProperty(t.prototype, "maxValue", {
          get: function () {
            return this.buffer.last()[0];
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      );
    })(),
    cl = (function () {
      function t(t, e) {
        (this.garbageCollector = t),
          (this.asyncQueue = e),
          (this.oe = !1),
          (this.ce = null);
      }
      return (
        (t.prototype.start = function (t) {
          -1 !== this.garbageCollector.params.cacheSizeCollectionThreshold &&
            this.ue(t);
        }),
        (t.prototype.stop = function () {
          this.ce && (this.ce.cancel(), (this.ce = null));
        }),
        Object.defineProperty(t.prototype, "started", {
          get: function () {
            return null !== this.ce;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.ue = function (t) {
          var e = this,
            n = this.oe ? 3e5 : 6e4;
          So(
            "LruGarbageCollector",
            "Garbage collection scheduled in " + n + "ms"
          ),
            (this.ce = this.asyncQueue.enqueueAfterDelay(
              "lru_garbage_collection",
              n,
              function () {
                return lt(e, void 0, void 0, function () {
                  var e;
                  return ht(this, function (n) {
                    switch (n.label) {
                      case 0:
                        (this.ce = null), (this.oe = !0), (n.label = 1);
                      case 1:
                        return (
                          n.trys.push([1, 3, , 7]),
                          [4, t.collectGarbage(this.garbageCollector)]
                        );
                      case 2:
                        return n.sent(), [3, 7];
                      case 3:
                        return mc((e = n.sent()))
                          ? (So(
                              "LruGarbageCollector",
                              "Ignoring IndexedDB error during garbage collection: ",
                              e
                            ),
                            [3, 6])
                          : [3, 4];
                      case 4:
                        return [4, sl(e)];
                      case 5:
                        n.sent(), (n.label = 6);
                      case 6:
                        return [3, 7];
                      case 7:
                        return [4, this.ue(t)];
                      case 8:
                        return n.sent(), [2];
                    }
                  });
                });
              }
            ));
        }),
        t
      );
    })(),
    ll = (function () {
      function t(t, e) {
        (this.ae = t), (this.params = e);
      }
      return (
        (t.prototype.calculateTargetCount = function (t, e) {
          return this.ae.he(t).next(function (t) {
            return Math.floor((e / 100) * t);
          });
        }),
        (t.prototype.nthSequenceNumber = function (t, e) {
          var n = this;
          if (0 === e) return dc.resolve(wo.o);
          var r = new ul(e);
          return this.ae
            .forEachTarget(t, function (t) {
              return r.re(t.sequenceNumber);
            })
            .next(function () {
              return n.ae.le(t, function (t) {
                return r.re(t);
              });
            })
            .next(function () {
              return r.maxValue;
            });
        }),
        (t.prototype.removeTargets = function (t, e, n) {
          return this.ae.removeTargets(t, e, n);
        }),
        (t.prototype.removeOrphanedDocuments = function (t, e) {
          return this.ae.removeOrphanedDocuments(t, e);
        }),
        (t.prototype.collect = function (t, e) {
          var n = this;
          return -1 === this.params.cacheSizeCollectionThreshold
            ? (So(
                "LruGarbageCollector",
                "Garbage collection skipped; disabled"
              ),
              dc.resolve(Gc))
            : this.getCacheSize(t).next(function (r) {
                return r < n.params.cacheSizeCollectionThreshold
                  ? (So(
                      "LruGarbageCollector",
                      "Garbage collection skipped; Cache size " +
                        r +
                        " is lower than threshold " +
                        n.params.cacheSizeCollectionThreshold
                    ),
                    Gc)
                  : n.fe(t, e);
              });
        }),
        (t.prototype.getCacheSize = function (t) {
          return this.ae.getCacheSize(t);
        }),
        (t.prototype.fe = function (t, e) {
          var n,
            r,
            i,
            o,
            s,
            a,
            u,
            c = this,
            l = Date.now();
          return this.calculateTargetCount(t, this.params.percentileToCollect)
            .next(function (e) {
              return (
                e > c.params.maximumSequenceNumbersToCollect
                  ? (So(
                      "LruGarbageCollector",
                      "Capping sequence numbers to collect down to the maximum of " +
                        c.params.maximumSequenceNumbersToCollect +
                        " from " +
                        e
                    ),
                    (r = c.params.maximumSequenceNumbersToCollect))
                  : (r = e),
                (o = Date.now()),
                c.nthSequenceNumber(t, r)
              );
            })
            .next(function (r) {
              return (n = r), (s = Date.now()), c.removeTargets(t, n, e);
            })
            .next(function (e) {
              return (i = e), (a = Date.now()), c.removeOrphanedDocuments(t, n);
            })
            .next(function (t) {
              return (
                (u = Date.now()),
                _o() <= Pt.DEBUG &&
                  So(
                    "LruGarbageCollector",
                    "LRU Garbage Collection\n\tCounted targets in " +
                      (o - l) +
                      "ms\n\tDetermined least recently used " +
                      r +
                      " in " +
                      (s - o) +
                      "ms\n\tRemoved " +
                      i +
                      " targets in " +
                      (a - s) +
                      "ms\n\tRemoved " +
                      t +
                      " documents in " +
                      (u - a) +
                      "ms\nTotal Duration: " +
                      (u - l) +
                      "ms"
                  ),
                dc.resolve({
                  didRun: !0,
                  sequenceNumbersCollected: r,
                  targetsRemoved: i,
                  documentsRemoved: t,
                })
              );
            });
        }),
        t
      );
    })(),
    hl = (function () {
      function t(t, e) {
        (this.db = t),
          (this.garbageCollector = (function (t, e) {
            return new ll(t, e);
          })(this, e));
      }
      return (
        (t.prototype.he = function (t) {
          var e = this.de(t);
          return this.db
            .getTargetCache()
            .getTargetCount(t)
            .next(function (t) {
              return e.next(function (e) {
                return t + e;
              });
            });
        }),
        (t.prototype.de = function (t) {
          var e = 0;
          return this.le(t, function (t) {
            e++;
          }).next(function () {
            return e;
          });
        }),
        (t.prototype.forEachTarget = function (t, e) {
          return this.db.getTargetCache().forEachTarget(t, e);
        }),
        (t.prototype.le = function (t, e) {
          return this.we(t, function (t, n) {
            return e(n);
          });
        }),
        (t.prototype.addReference = function (t, e, n) {
          return fl(t, n);
        }),
        (t.prototype.removeReference = function (t, e, n) {
          return fl(t, n);
        }),
        (t.prototype.removeTargets = function (t, e, n) {
          return this.db.getTargetCache().removeTargets(t, e, n);
        }),
        (t.prototype.markPotentiallyOrphaned = function (t, e) {
          return fl(t, e);
        }),
        (t.prototype._e = function (t, e) {
          return (function (t, e) {
            var n = !1;
            return tl(t)
              .Ot(function (r) {
                return Xc(t, r, e).next(function (t) {
                  return t && (n = !0), dc.resolve(!t);
                });
              })
              .next(function () {
                return n;
              });
          })(t, e);
        }),
        (t.prototype.removeOrphanedDocuments = function (t, e) {
          var n = this,
            r = this.db.getRemoteDocumentCache().newChangeBuffer(),
            i = [],
            o = 0;
          return this.we(t, function (s, a) {
            if (a <= e) {
              var u = n._e(t, s).next(function (e) {
                if (!e)
                  return (
                    o++,
                    r.getEntry(t, s).next(function () {
                      return r.removeEntry(s), ol(t).delete([0, zu(s.path)]);
                    })
                  );
              });
              i.push(u);
            }
          })
            .next(function () {
              return dc.waitFor(i);
            })
            .next(function () {
              return r.apply(t);
            })
            .next(function () {
              return o;
            });
        }),
        (t.prototype.removeTarget = function (t, e) {
          var n = e.withSequenceNumber(t.currentSequenceNumber);
          return this.db.getTargetCache().updateTargetData(t, n);
        }),
        (t.prototype.updateLimboDocument = function (t, e) {
          return fl(t, e);
        }),
        (t.prototype.we = function (t, e) {
          var n,
            r = ol(t),
            i = wo.o;
          return r
            .$t({ index: rc.documentTargetsIndex }, function (t, r) {
              var o = t[0];
              t[1];
              var s = r.path,
                a = r.sequenceNumber;
              0 === o
                ? (i !== wo.o && e(new is(Gu(n)), i), (i = a), (n = s))
                : (i = wo.o);
            })
            .next(function () {
              i !== wo.o && e(new is(Gu(n)), i);
            });
        }),
        (t.prototype.getCacheSize = function (t) {
          return this.db.getRemoteDocumentCache().getSize(t);
        }),
        t
      );
    })();
  function fl(t, e) {
    return ol(t).put(
      (function (t, e) {
        return new rc(0, zu(t.path), e);
      })(e, t.currentSequenceNumber)
    );
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var dl = (function () {
      function t(t, e) {
        (this.mapKeyFn = t), (this.equalsFn = e), (this.inner = {});
      }
      return (
        (t.prototype.get = function (t) {
          var e = this.mapKeyFn(t),
            n = this.inner[e];
          if (void 0 !== n)
            for (var r = 0, i = n; r < i.length; r++) {
              var o = i[r],
                s = o[0],
                a = o[1];
              if (this.equalsFn(s, t)) return a;
            }
        }),
        (t.prototype.has = function (t) {
          return void 0 !== this.get(t);
        }),
        (t.prototype.set = function (t, e) {
          var n = this.mapKeyFn(t),
            r = this.inner[n];
          if (void 0 !== r) {
            for (var i = 0; i < r.length; i++)
              if (this.equalsFn(r[i][0], t)) return void (r[i] = [t, e]);
            r.push([t, e]);
          } else this.inner[n] = [[t, e]];
        }),
        (t.prototype.delete = function (t) {
          var e = this.mapKeyFn(t),
            n = this.inner[e];
          if (void 0 === n) return !1;
          for (var r = 0; r < n.length; r++)
            if (this.equalsFn(n[r][0], t))
              return 1 === n.length ? delete this.inner[e] : n.splice(r, 1), !0;
          return !1;
        }),
        (t.prototype.forEach = function (t) {
          Uo(this.inner, function (e, n) {
            for (var r = 0, i = n; r < i.length; r++) {
              var o = i[r],
                s = o[0],
                a = o[1];
              t(s, a);
            }
          });
        }),
        (t.prototype.isEmpty = function () {
          return jo(this.inner);
        }),
        t
      );
    })(),
    pl = (function () {
      function t() {
        (this.changes = new dl(
          function (t) {
            return t.toString();
          },
          function (t, e) {
            return t.isEqual(e);
          }
        )),
          (this.changesApplied = !1);
      }
      return (
        (t.prototype.getReadTime = function (t) {
          var e = this.changes.get(t);
          return e ? e.readTime : Vo.min();
        }),
        (t.prototype.addEntry = function (t, e) {
          this.assertNotApplied(),
            this.changes.set(t.key, { document: t, readTime: e });
        }),
        (t.prototype.removeEntry = function (t, e) {
          void 0 === e && (e = null),
            this.assertNotApplied(),
            this.changes.set(t, {
              document: Es.newInvalidDocument(t),
              readTime: e,
            });
        }),
        (t.prototype.getEntry = function (t, e) {
          this.assertNotApplied();
          var n = this.changes.get(e);
          return void 0 !== n
            ? dc.resolve(n.document)
            : this.getFromCache(t, e);
        }),
        (t.prototype.getEntries = function (t, e) {
          return this.getAllFromCache(t, e);
        }),
        (t.prototype.apply = function (t) {
          return (
            this.assertNotApplied(),
            (this.changesApplied = !0),
            this.applyChanges(t)
          );
        }),
        (t.prototype.assertNotApplied = function () {}),
        t
      );
    })(),
    vl = (function () {
      function t(t, e) {
        (this.R = t), (this.Ut = e);
      }
      return (
        (t.prototype.addEntry = function (t, e, n) {
          return ml(t).put(bl(e), n);
        }),
        (t.prototype.removeEntry = function (t, e) {
          var n = ml(t),
            r = bl(e);
          return n.delete(r);
        }),
        (t.prototype.updateMetadata = function (t, e) {
          var n = this;
          return this.getMetadata(t).next(function (r) {
            return (r.byteSize += e), n.me(t, r);
          });
        }),
        (t.prototype.getEntry = function (t, e) {
          var n = this;
          return ml(t)
            .get(bl(e))
            .next(function (t) {
              return n.ye(e, t);
            });
        }),
        (t.prototype.ge = function (t, e) {
          var n = this;
          return ml(t)
            .get(bl(e))
            .next(function (t) {
              return { document: n.ye(e, t), size: Wc(t) };
            });
        }),
        (t.prototype.getEntries = function (t, e) {
          var n = this,
            r = Qa();
          return this.pe(t, e, function (t, e) {
            var i = n.ye(t, e);
            r = r.insert(t, i);
          }).next(function () {
            return r;
          });
        }),
        (t.prototype.Ee = function (t, e) {
          var n = this,
            r = Qa(),
            i = new Ba(is.comparator);
          return this.pe(t, e, function (t, e) {
            var o = n.ye(t, e);
            (r = r.insert(t, o)), (i = i.insert(t, Wc(e)));
          }).next(function () {
            return { documents: r, Te: i };
          });
        }),
        (t.prototype.pe = function (t, e, n) {
          if (e.isEmpty()) return dc.resolve();
          var r = IDBKeyRange.bound(
              e.first().path.toArray(),
              e.last().path.toArray()
            ),
            i = e.getIterator(),
            o = i.getNext();
          return ml(t)
            .$t({ range: r }, function (t, e, r) {
              for (var s = is.fromSegments(t); o && is.comparator(o, s) < 0; )
                n(o, null), (o = i.getNext());
              o &&
                o.isEqual(s) &&
                (n(o, e), (o = i.hasNext() ? i.getNext() : null)),
                o ? r.Ct(o.path.toArray()) : r.done();
            })
            .next(function () {
              for (; o; ) n(o, null), (o = i.hasNext() ? i.getNext() : null);
            });
        }),
        (t.prototype.getDocumentsMatchingQuery = function (t, e, n) {
          var r = this,
            i = Qa(),
            o = e.path.length + 1,
            s = {};
          if (n.isEqual(Vo.min())) {
            var a = e.path.toArray();
            s.range = IDBKeyRange.lowerBound(a);
          } else {
            var u = e.path.toArray(),
              c = xc(n);
            (s.range = IDBKeyRange.lowerBound([u, c], !0)),
              (s.index = tc.collectionReadTimeIndex);
          }
          return ml(t)
            .$t(s, function (t, n, s) {
              if (t.length === o) {
                var a = Dc(r.R, n);
                e.path.isPrefixOf(a.key.path)
                  ? na(e, a) && (i = i.insert(a.key, a))
                  : s.done();
              }
            })
            .next(function () {
              return i;
            });
        }),
        (t.prototype.newChangeBuffer = function (t) {
          return new gl(this, !!t && t.trackRemovals);
        }),
        (t.prototype.getSize = function (t) {
          return this.getMetadata(t).next(function (t) {
            return t.byteSize;
          });
        }),
        (t.prototype.getMetadata = function (t) {
          return yl(t)
            .get(ec.key)
            .next(function (t) {
              return Co(!!t), t;
            });
        }),
        (t.prototype.me = function (t, e) {
          return yl(t).put(ec.key, e);
        }),
        (t.prototype.ye = function (t, e) {
          if (e) {
            var n = Dc(this.R, e);
            if (!n.isNoDocument() || !n.version.isEqual(Vo.min())) return n;
          }
          return Es.newInvalidDocument(t);
        }),
        t
      );
    })(),
    gl = (function (t) {
      function e(e, n) {
        var r = this;
        return (
          ((r = t.call(this) || this).Ie = e),
          (r.trackRemovals = n),
          (r.Ae = new dl(
            function (t) {
              return t.toString();
            },
            function (t, e) {
              return t.isEqual(e);
            }
          )),
          r
        );
      }
      return (
        ut(e, t),
        (e.prototype.applyChanges = function (t) {
          var e = this,
            n = [],
            r = 0,
            i = new $a(function (t, e) {
              return Lo(t.canonicalString(), e.canonicalString());
            });
          return (
            this.changes.forEach(function (o, s) {
              var a = e.Ae.get(o);
              if (s.document.isValidDocument()) {
                var u = Cc(e.Ie.R, s.document, e.getReadTime(o));
                i = i.add(o.path.popLast());
                var c = Wc(u);
                (r += c - a), n.push(e.Ie.addEntry(t, o, u));
              } else if (((r -= a), e.trackRemovals)) {
                var l = Cc(
                  e.Ie.R,
                  Es.newNoDocument(o, Vo.min()),
                  e.getReadTime(o)
                );
                n.push(e.Ie.addEntry(t, o, l));
              } else n.push(e.Ie.removeEntry(t, o));
            }),
            i.forEach(function (r) {
              n.push(e.Ie.Ut.addToCollectionParentIndex(t, r));
            }),
            n.push(this.Ie.updateMetadata(t, r)),
            dc.waitFor(n)
          );
        }),
        (e.prototype.getFromCache = function (t, e) {
          var n = this;
          return this.Ie.ge(t, e).next(function (t) {
            return n.Ae.set(e, t.size), t.document;
          });
        }),
        (e.prototype.getAllFromCache = function (t, e) {
          var n = this;
          return this.Ie.Ee(t, e).next(function (t) {
            var e = t.documents;
            return (
              t.Te.forEach(function (t, e) {
                n.Ae.set(t, e);
              }),
              e
            );
          });
        }),
        e
      );
    })(pl);
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function yl(t) {
    return _c(t, ec.store);
  }
  function ml(t) {
    return _c(t, tc.store);
  }
  function bl(t) {
    return t.path.toArray();
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var wl = (function () {
    function t(t) {
      this.R = t;
    }
    return (
      (t.prototype.Rt = function (t, e, n, r) {
        var i = this;
        Co(n < r && n >= 0 && r <= 11);
        var o = new pc("createOrUpgrade", e);
        n < 1 &&
          r >= 1 &&
          ((function (t) {
            t.createObjectStore(Qu.store);
          })(t),
          (function (t) {
            t.createObjectStore(Wu.store, { keyPath: Wu.keyPath }),
              t
                .createObjectStore(Yu.store, {
                  keyPath: Yu.keyPath,
                  autoIncrement: !0,
                })
                .createIndex(Yu.userMutationsIndex, Yu.userMutationsKeyPath, {
                  unique: !0,
                }),
              t.createObjectStore(Xu.store);
          })(t),
          El(t),
          (function (t) {
            t.createObjectStore(tc.store);
          })(t));
        var s = dc.resolve();
        return (
          n < 3 &&
            r >= 3 &&
            (0 !== n &&
              ((function (t) {
                t.deleteObjectStore(rc.store),
                  t.deleteObjectStore(nc.store),
                  t.deleteObjectStore(ic.store);
              })(t),
              El(t)),
            (s = s.next(function () {
              return (function (t) {
                var e = t.store(ic.store),
                  n = new ic(0, 0, Vo.min().toTimestamp(), 0);
                return e.put(ic.key, n);
              })(o);
            }))),
          n < 4 &&
            r >= 4 &&
            (0 !== n &&
              (s = s.next(function () {
                return (function (t, e) {
                  return e
                    .store(Yu.store)
                    .Nt()
                    .next(function (n) {
                      t.deleteObjectStore(Yu.store),
                        t
                          .createObjectStore(Yu.store, {
                            keyPath: Yu.keyPath,
                            autoIncrement: !0,
                          })
                          .createIndex(
                            Yu.userMutationsIndex,
                            Yu.userMutationsKeyPath,
                            { unique: !0 }
                          );
                      var r = e.store(Yu.store),
                        i = n.map(function (t) {
                          return r.put(t);
                        });
                      return dc.waitFor(i);
                    });
                })(t, o);
              })),
            (s = s.next(function () {
              !(function (t) {
                t.createObjectStore(sc.store, { keyPath: sc.keyPath });
              })(t);
            }))),
          n < 5 &&
            r >= 5 &&
            (s = s.next(function () {
              return i.Re(o);
            })),
          n < 6 &&
            r >= 6 &&
            (s = s.next(function () {
              return (
                (function (t) {
                  t.createObjectStore(ec.store);
                })(t),
                i.be(o)
              );
            })),
          n < 7 &&
            r >= 7 &&
            (s = s.next(function () {
              return i.ve(o);
            })),
          n < 8 &&
            r >= 8 &&
            (s = s.next(function () {
              return i.Pe(t, o);
            })),
          n < 9 &&
            r >= 9 &&
            (s = s.next(function () {
              !(function (t) {
                t.objectStoreNames.contains("remoteDocumentChanges") &&
                  t.deleteObjectStore("remoteDocumentChanges");
              })(t),
                (function (t) {
                  var e = t.objectStore(tc.store);
                  e.createIndex(tc.readTimeIndex, tc.readTimeIndexPath, {
                    unique: !1,
                  }),
                    e.createIndex(
                      tc.collectionReadTimeIndex,
                      tc.collectionReadTimeIndexPath,
                      { unique: !1 }
                    );
                })(e);
            })),
          n < 10 &&
            r >= 10 &&
            (s = s.next(function () {
              return i.Ve(o);
            })),
          n < 11 &&
            r >= 11 &&
            (s = s.next(function () {
              !(function (t) {
                t.createObjectStore(ac.store, { keyPath: ac.keyPath });
              })(t),
                (function (t) {
                  t.createObjectStore(uc.store, { keyPath: uc.keyPath });
                })(t);
            })),
          s
        );
      }),
      (t.prototype.be = function (t) {
        var e = 0;
        return t
          .store(tc.store)
          .$t(function (t, n) {
            e += Wc(n);
          })
          .next(function () {
            var n = new ec(e);
            return t.store(ec.store).put(ec.key, n);
          });
      }),
      (t.prototype.Re = function (t) {
        var e = this,
          n = t.store(Wu.store),
          r = t.store(Yu.store);
        return n.Nt().next(function (n) {
          return dc.forEach(n, function (n) {
            var i = IDBKeyRange.bound(
              [n.userId, -1],
              [n.userId, n.lastAcknowledgedBatchId]
            );
            return r.Nt(Yu.userMutationsIndex, i).next(function (r) {
              return dc.forEach(r, function (r) {
                Co(r.userId === n.userId);
                var i = Pc(e.R, r);
                return Qc(t, n.userId, i).next(function () {});
              });
            });
          });
        });
      }),
      (t.prototype.ve = function (t) {
        var e = t.store(rc.store),
          n = t.store(tc.store);
        return t
          .store(ic.store)
          .get(ic.key)
          .next(function (t) {
            var r = [];
            return n
              .$t(function (n, i) {
                var o = new zo(n),
                  s = (function (t) {
                    return [0, zu(t)];
                  })(o);
                r.push(
                  e.get(s).next(function (n) {
                    return n
                      ? dc.resolve()
                      : (function (n) {
                          return e.put(
                            new rc(0, zu(n), t.highestListenSequenceNumber)
                          );
                        })(o);
                  })
                );
              })
              .next(function () {
                return dc.waitFor(r);
              });
          });
      }),
      (t.prototype.Pe = function (t, e) {
        t.createObjectStore(oc.store, { keyPath: oc.keyPath });
        var n = e.store(oc.store),
          r = new zc(),
          i = function (t) {
            if (r.add(t)) {
              var e = t.lastSegment(),
                i = t.popLast();
              return n.put({ collectionId: e, parent: zu(i) });
            }
          };
        return e
          .store(tc.store)
          .$t({ kt: !0 }, function (t, e) {
            var n = new zo(t);
            return i(n.popLast());
          })
          .next(function () {
            return e.store(Xu.store).$t({ kt: !0 }, function (t, e) {
              t[0];
              var n = t[1];
              t[2];
              var r = Gu(n);
              return i(r.popLast());
            });
          });
      }),
      (t.prototype.Ve = function (t) {
        var e = this,
          n = t.store(nc.store);
        return n.$t(function (t, r) {
          var i = Mc(r),
            o = Fc(e.R, i);
          return n.put(o);
        });
      }),
      t
    );
  })();
  function El(t) {
    t
      .createObjectStore(rc.store, { keyPath: rc.keyPath })
      .createIndex(rc.documentTargetsIndex, rc.documentTargetsKeyPath, {
        unique: !0,
      }),
      t
        .createObjectStore(nc.store, { keyPath: nc.keyPath })
        .createIndex(nc.queryTargetsIndexName, nc.queryTargetsKeyPath, {
          unique: !0,
        }),
      t.createObjectStore(ic.store);
  }
  var Il =
      "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",
    Tl = (function () {
      function t(e, n, r, i, o, s, a, u, c, l) {
        if (
          ((this.allowTabSynchronization = e),
          (this.persistenceKey = n),
          (this.clientId = r),
          (this.Se = o),
          (this.window = s),
          (this.document = a),
          (this.De = c),
          (this.Ce = l),
          (this.Ne = null),
          (this.xe = !1),
          (this.isPrimary = !1),
          (this.networkEnabled = !0),
          (this.Fe = null),
          (this.inForeground = !1),
          (this.ke = null),
          (this.$e = null),
          (this.Oe = Number.NEGATIVE_INFINITY),
          (this.Me = function (t) {
            return Promise.resolve();
          }),
          !t.yt())
        )
          throw new Io(
            Eo.UNIMPLEMENTED,
            "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled."
          );
        (this.referenceDelegate = new hl(this, i)),
          (this.Le = n + "main"),
          (this.R = new Nc(u)),
          (this.Be = new vc(this.Le, 11, new wl(this.R))),
          (this.qe = new nl(this.referenceDelegate, this.R)),
          (this.Ut = new Kc()),
          (this.Ue = (function (t, e) {
            return new vl(t, e);
          })(this.R, this.Ut)),
          (this.Ke = new qc()),
          this.window && this.window.localStorage
            ? (this.Qe = this.window.localStorage)
            : ((this.Qe = null),
              !1 === l &&
                Ao(
                  "IndexedDbPersistence",
                  "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."
                ));
      }
      return (
        (t.prototype.start = function () {
          var t = this;
          return this.je()
            .then(function () {
              if (!t.isPrimary && !t.allowTabSynchronization)
                throw new Io(Eo.FAILED_PRECONDITION, Il);
              return (
                t.We(),
                t.Ge(),
                t.ze(),
                t.runTransaction(
                  "getHighestListenSequenceNumber",
                  "readonly",
                  function (e) {
                    return t.qe.getHighestSequenceNumber(e);
                  }
                )
              );
            })
            .then(function (e) {
              t.Ne = new wo(e, t.De);
            })
            .then(function () {
              t.xe = !0;
            })
            .catch(function (e) {
              return t.Be && t.Be.close(), Promise.reject(e);
            });
        }),
        (t.prototype.He = function (t) {
          var e = this;
          return (
            (this.Me = function (n) {
              return lt(e, void 0, void 0, function () {
                return ht(this, function (e) {
                  return this.started ? [2, t(n)] : [2];
                });
              });
            }),
            t(this.isPrimary)
          );
        }),
        (t.prototype.setDatabaseDeletedListener = function (t) {
          var e = this;
          this.Be.vt(function (n) {
            return lt(e, void 0, void 0, function () {
              return ht(this, function (e) {
                switch (e.label) {
                  case 0:
                    return null === n.newVersion ? [4, t()] : [3, 2];
                  case 1:
                    e.sent(), (e.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          });
        }),
        (t.prototype.setNetworkEnabled = function (t) {
          var e = this;
          this.networkEnabled !== t &&
            ((this.networkEnabled = t),
            this.Se.enqueueAndForget(function () {
              return lt(e, void 0, void 0, function () {
                return ht(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return this.started ? [4, this.je()] : [3, 2];
                    case 1:
                      t.sent(), (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }));
        }),
        (t.prototype.je = function () {
          var t = this;
          return this.runTransaction(
            "updateClientMetadataAndTryBecomePrimary",
            "readwrite",
            function (e) {
              return Sl(e)
                .put(
                  new sc(
                    t.clientId,
                    Date.now(),
                    t.networkEnabled,
                    t.inForeground
                  )
                )
                .next(function () {
                  if (t.isPrimary)
                    return t.Je(e).next(function (e) {
                      e ||
                        ((t.isPrimary = !1),
                        t.Se.enqueueRetryable(function () {
                          return t.Me(!1);
                        }));
                    });
                })
                .next(function () {
                  return t.Ye(e);
                })
                .next(function (n) {
                  return t.isPrimary && !n
                    ? t.Xe(e).next(function () {
                        return !1;
                      })
                    : !!n &&
                        t.Ze(e).next(function () {
                          return !0;
                        });
                });
            }
          )
            .catch(function (e) {
              if (mc(e))
                return (
                  So(
                    "IndexedDbPersistence",
                    "Failed to extend owner lease: ",
                    e
                  ),
                  t.isPrimary
                );
              if (!t.allowTabSynchronization) throw e;
              return (
                So(
                  "IndexedDbPersistence",
                  "Releasing owner lease after error during lease refresh",
                  e
                ),
                !1
              );
            })
            .then(function (e) {
              t.isPrimary !== e &&
                t.Se.enqueueRetryable(function () {
                  return t.Me(e);
                }),
                (t.isPrimary = e);
            });
        }),
        (t.prototype.Je = function (t) {
          var e = this;
          return _l(t)
            .get(Qu.key)
            .next(function (t) {
              return dc.resolve(e.tn(t));
            });
        }),
        (t.prototype.en = function (t) {
          return Sl(t).delete(this.clientId);
        }),
        (t.prototype.nn = function () {
          return lt(this, void 0, void 0, function () {
            var t,
              e,
              n,
              r,
              i = this;
            return ht(this, function (o) {
              switch (o.label) {
                case 0:
                  return !this.isPrimary || this.sn(this.Oe, 18e5)
                    ? [3, 2]
                    : ((this.Oe = Date.now()),
                      [
                        4,
                        this.runTransaction(
                          "maybeGarbageCollectMultiClientState",
                          "readwrite-primary",
                          function (t) {
                            var e = _c(t, sc.store);
                            return e.Nt().next(function (t) {
                              var n = i.rn(t, 18e5),
                                r = t.filter(function (t) {
                                  return -1 === n.indexOf(t);
                                });
                              return dc
                                .forEach(r, function (t) {
                                  return e.delete(t.clientId);
                                })
                                .next(function () {
                                  return r;
                                });
                            });
                          }
                        ).catch(function () {
                          return [];
                        }),
                      ]);
                case 1:
                  if (((t = o.sent()), this.Qe))
                    for (e = 0, n = t; e < n.length; e++)
                      (r = n[e]), this.Qe.removeItem(this.on(r.clientId));
                  o.label = 2;
                case 2:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.ze = function () {
          var t = this;
          this.$e = this.Se.enqueueAfterDelay(
            "client_metadata_refresh",
            4e3,
            function () {
              return t
                .je()
                .then(function () {
                  return t.nn();
                })
                .then(function () {
                  return t.ze();
                });
            }
          );
        }),
        (t.prototype.tn = function (t) {
          return !!t && t.ownerId === this.clientId;
        }),
        (t.prototype.Ye = function (t) {
          var e = this;
          return this.Ce
            ? dc.resolve(!0)
            : _l(t)
                .get(Qu.key)
                .next(function (n) {
                  if (
                    null !== n &&
                    e.sn(n.leaseTimestampMs, 5e3) &&
                    !e.cn(n.ownerId)
                  ) {
                    if (e.tn(n) && e.networkEnabled) return !0;
                    if (!e.tn(n)) {
                      if (!n.allowTabSynchronization)
                        throw new Io(Eo.FAILED_PRECONDITION, Il);
                      return !1;
                    }
                  }
                  return (
                    !(!e.networkEnabled || !e.inForeground) ||
                    Sl(t)
                      .Nt()
                      .next(function (t) {
                        return (
                          void 0 ===
                          e.rn(t, 5e3).find(function (t) {
                            if (e.clientId !== t.clientId) {
                              var n = !e.networkEnabled && t.networkEnabled,
                                r = !e.inForeground && t.inForeground,
                                i = e.networkEnabled === t.networkEnabled;
                              if (n || (r && i)) return !0;
                            }
                            return !1;
                          })
                        );
                      })
                  );
                })
                .next(function (t) {
                  return (
                    e.isPrimary !== t &&
                      So(
                        "IndexedDbPersistence",
                        "Client " +
                          (t ? "is" : "is not") +
                          " eligible for a primary lease."
                      ),
                    t
                  );
                });
        }),
        (t.prototype.shutdown = function () {
          return lt(this, void 0, void 0, function () {
            var t = this;
            return ht(this, function (e) {
              switch (e.label) {
                case 0:
                  return (
                    (this.xe = !1),
                    this.un(),
                    this.$e && (this.$e.cancel(), (this.$e = null)),
                    this.an(),
                    this.hn(),
                    [
                      4,
                      this.Be.runTransaction(
                        "shutdown",
                        "readwrite",
                        [Qu.store, sc.store],
                        function (e) {
                          var n = new Tc(e, wo.o);
                          return t.Xe(n).next(function () {
                            return t.en(n);
                          });
                        }
                      ),
                    ]
                  );
                case 1:
                  return e.sent(), this.Be.close(), this.ln(), [2];
              }
            });
          });
        }),
        (t.prototype.rn = function (t, e) {
          var n = this;
          return t.filter(function (t) {
            return n.sn(t.updateTimeMs, e) && !n.cn(t.clientId);
          });
        }),
        (t.prototype.fn = function () {
          var t = this;
          return this.runTransaction(
            "getActiveClients",
            "readonly",
            function (e) {
              return Sl(e)
                .Nt()
                .next(function (e) {
                  return t.rn(e, 18e5).map(function (t) {
                    return t.clientId;
                  });
                });
            }
          );
        }),
        Object.defineProperty(t.prototype, "started", {
          get: function () {
            return this.xe;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.getMutationQueue = function (t) {
          return Yc.Qt(t, this.R, this.Ut, this.referenceDelegate);
        }),
        (t.prototype.getTargetCache = function () {
          return this.qe;
        }),
        (t.prototype.getRemoteDocumentCache = function () {
          return this.Ue;
        }),
        (t.prototype.getIndexManager = function () {
          return this.Ut;
        }),
        (t.prototype.getBundleCache = function () {
          return this.Ke;
        }),
        (t.prototype.runTransaction = function (t, e, n) {
          var r = this;
          So("IndexedDbPersistence", "Starting transaction:", t);
          var i,
            o = "readonly" === e ? "readonly" : "readwrite";
          return this.Be.runTransaction(t, o, cc, function (o) {
            return (
              (i = new Tc(o, r.Ne ? r.Ne.next() : wo.o)),
              "readwrite-primary" === e
                ? r
                    .Je(i)
                    .next(function (t) {
                      return !!t || r.Ye(i);
                    })
                    .next(function (e) {
                      if (!e)
                        throw (
                          (Ao(
                            "Failed to obtain primary lease for action '" +
                              t +
                              "'."
                          ),
                          (r.isPrimary = !1),
                          r.Se.enqueueRetryable(function () {
                            return r.Me(!1);
                          }),
                          new Io(Eo.FAILED_PRECONDITION, lc))
                        );
                      return n(i);
                    })
                    .next(function (t) {
                      return r.Ze(i).next(function () {
                        return t;
                      });
                    })
                : r.dn(i).next(function () {
                    return n(i);
                  })
            );
          }).then(function (t) {
            return i.raiseOnCommittedEvent(), t;
          });
        }),
        (t.prototype.dn = function (t) {
          var e = this;
          return _l(t)
            .get(Qu.key)
            .next(function (t) {
              if (
                null !== t &&
                e.sn(t.leaseTimestampMs, 5e3) &&
                !e.cn(t.ownerId) &&
                !e.tn(t) &&
                !(
                  e.Ce ||
                  (e.allowTabSynchronization && t.allowTabSynchronization)
                )
              )
                throw new Io(Eo.FAILED_PRECONDITION, Il);
            });
        }),
        (t.prototype.Ze = function (t) {
          var e = new Qu(
            this.clientId,
            this.allowTabSynchronization,
            Date.now()
          );
          return _l(t).put(Qu.key, e);
        }),
        (t.yt = function () {
          return vc.yt();
        }),
        (t.prototype.Xe = function (t) {
          var e = this,
            n = _l(t);
          return n.get(Qu.key).next(function (t) {
            return e.tn(t)
              ? (So("IndexedDbPersistence", "Releasing primary lease."),
                n.delete(Qu.key))
              : dc.resolve();
          });
        }),
        (t.prototype.sn = function (t, e) {
          var n = Date.now();
          return !(
            t < n - e ||
            (t > n &&
              (Ao(
                "Detected an update time that is in the future: " +
                  t +
                  " > " +
                  n
              ),
              1))
          );
        }),
        (t.prototype.We = function () {
          var t = this;
          null !== this.document &&
            "function" == typeof this.document.addEventListener &&
            ((this.ke = function () {
              t.Se.enqueueAndForget(function () {
                return (
                  (t.inForeground = "visible" === t.document.visibilityState),
                  t.je()
                );
              });
            }),
            this.document.addEventListener("visibilitychange", this.ke),
            (this.inForeground = "visible" === this.document.visibilityState));
        }),
        (t.prototype.an = function () {
          this.ke &&
            (this.document.removeEventListener("visibilitychange", this.ke),
            (this.ke = null));
        }),
        (t.prototype.Ge = function () {
          var t,
            e = this;
          "function" ==
            typeof (null === (t = this.window) || void 0 === t
              ? void 0
              : t.addEventListener) &&
            ((this.Fe = function () {
              e.un(),
                !bt() &&
                  navigator.userAgent.includes("Safari") &&
                  !navigator.userAgent.includes("Chrome") &&
                  navigator.appVersion.match("Version/14") &&
                  e.Se.enterRestrictedMode(!0),
                e.Se.enqueueAndForget(function () {
                  return e.shutdown();
                });
            }),
            this.window.addEventListener("pagehide", this.Fe));
        }),
        (t.prototype.hn = function () {
          this.Fe &&
            (this.window.removeEventListener("pagehide", this.Fe),
            (this.Fe = null));
        }),
        (t.prototype.cn = function (t) {
          var e;
          try {
            var n =
              null !==
              (null === (e = this.Qe) || void 0 === e
                ? void 0
                : e.getItem(this.on(t)));
            return (
              So(
                "IndexedDbPersistence",
                "Client '" +
                  t +
                  "' " +
                  (n ? "is" : "is not") +
                  " zombied in LocalStorage"
              ),
              n
            );
          } catch (t) {
            return (
              Ao("IndexedDbPersistence", "Failed to get zombied client id.", t),
              !1
            );
          }
        }),
        (t.prototype.un = function () {
          if (this.Qe)
            try {
              this.Qe.setItem(this.on(this.clientId), String(Date.now()));
            } catch (t) {
              Ao("Failed to set zombie client id.", t);
            }
        }),
        (t.prototype.ln = function () {
          if (this.Qe)
            try {
              this.Qe.removeItem(this.on(this.clientId));
            } catch (t) {}
        }),
        (t.prototype.on = function (t) {
          return "firestore_zombie_" + this.persistenceKey + "_" + t;
        }),
        t
      );
    })();
  function _l(t) {
    return _c(t, Qu.store);
  }
  function Sl(t) {
    return _c(t, sc.store);
  }
  function Al(t, e) {
    var n = t.projectId;
    return (
      t.isDefaultDatabase || (n += "." + t.database),
      "firestore/" + e + "/" + n + "/"
    );
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
  }
  var kl = (function () {
      function t(t, e, n) {
        (this.Ue = t), (this._n = e), (this.Ut = n);
      }
      return (
        (t.prototype.mn = function (t, e) {
          var n = this;
          return this._n
            .getAllMutationBatchesAffectingDocumentKey(t, e)
            .next(function (r) {
              return n.yn(t, e, r);
            });
        }),
        (t.prototype.yn = function (t, e, n) {
          return this.Ue.getEntry(t, e).next(function (t) {
            for (var e = 0, r = n; e < r.length; e++) r[e].applyToLocalView(t);
            return t;
          });
        }),
        (t.prototype.gn = function (t, e) {
          t.forEach(function (t, n) {
            for (var r = 0, i = e; r < i.length; r++) i[r].applyToLocalView(n);
          });
        }),
        (t.prototype.pn = function (t, e) {
          var n = this;
          return this.Ue.getEntries(t, e).next(function (e) {
            return n.En(t, e).next(function () {
              return e;
            });
          });
        }),
        (t.prototype.En = function (t, e) {
          var n = this;
          return this._n
            .getAllMutationBatchesAffectingDocumentKeys(t, e)
            .next(function (t) {
              return n.gn(e, t);
            });
        }),
        (t.prototype.getDocumentsMatchingQuery = function (t, e, n) {
          return (function (t) {
            return (
              is.isDocumentKey(t.path) &&
              null === t.collectionGroup &&
              0 === t.filters.length
            );
          })(e)
            ? this.Tn(t, e.path)
            : Ws(e)
            ? this.In(t, e, n)
            : this.An(t, e, n);
        }),
        (t.prototype.Tn = function (t, e) {
          return this.mn(t, new is(e)).next(function (t) {
            var e = Ya();
            return t.isFoundDocument() && (e = e.insert(t.key, t)), e;
          });
        }),
        (t.prototype.In = function (t, e, n) {
          var r = this,
            i = e.collectionGroup,
            o = Ya();
          return this.Ut.getCollectionParents(t, i).next(function (s) {
            return dc
              .forEach(s, function (s) {
                var a = (function (t, e) {
                  return new Bs(
                    e,
                    null,
                    t.explicitOrderBy.slice(),
                    t.filters.slice(),
                    t.limit,
                    t.limitType,
                    t.startAt,
                    t.endAt
                  );
                })(e, s.child(i));
                return r.An(t, a, n).next(function (t) {
                  t.forEach(function (t, e) {
                    o = o.insert(t, e);
                  });
                });
              })
              .next(function () {
                return o;
              });
          });
        }),
        (t.prototype.An = function (t, e, n) {
          var r,
            i,
            o = this;
          return this.Ue.getDocumentsMatchingQuery(t, e, n)
            .next(function (n) {
              return (r = n), o._n.getAllMutationBatchesAffectingQuery(t, e);
            })
            .next(function (e) {
              return (
                (i = e),
                o.Rn(t, i, r).next(function (t) {
                  r = t;
                  for (var e = 0, n = i; e < n.length; e++)
                    for (
                      var o = n[e], s = 0, a = o.mutations;
                      s < a.length;
                      s++
                    ) {
                      var u = a[s],
                        c = u.key,
                        l = r.get(c);
                      null == l &&
                        ((l = Es.newInvalidDocument(c)), (r = r.insert(c, l))),
                        Aa(u, l, o.localWriteTime),
                        l.isFoundDocument() || (r = r.remove(c));
                    }
                })
              );
            })
            .next(function () {
              return (
                r.forEach(function (t, n) {
                  na(e, n) || (r = r.remove(t));
                }),
                r
              );
            });
        }),
        (t.prototype.Rn = function (t, e, n) {
          for (var r = Za(), i = 0, o = e; i < o.length; i++)
            for (var s = 0, a = o[i].mutations; s < a.length; s++) {
              var u = a[s];
              u instanceof xa && null === n.get(u.key) && (r = r.add(u.key));
            }
          var c = n;
          return this.Ue.getEntries(t, r).next(function (t) {
            return (
              t.forEach(function (t, e) {
                e.isFoundDocument() && (c = c.insert(t, e));
              }),
              c
            );
          });
        }),
        t
      );
    })(),
    Nl = (function () {
      function t(t, e, n, r) {
        (this.targetId = t), (this.fromCache = e), (this.bn = n), (this.vn = r);
      }
      return (
        (t.Pn = function (e, n) {
          for (
            var r = Za(), i = Za(), o = 0, s = n.docChanges;
            o < s.length;
            o++
          ) {
            var a = s[o];
            switch (a.type) {
              case 0:
                r = r.add(a.doc.key);
                break;
              case 1:
                i = i.add(a.doc.key);
            }
          }
          return new t(e, n.fromCache, r, i);
        }),
        t
      );
    })(),
    Dl = (function () {
      function t() {}
      return (
        (t.prototype.Vn = function (t) {
          this.Sn = t;
        }),
        (t.prototype.getDocumentsMatchingQuery = function (t, e, n, r) {
          var i = this;
          return (function (t) {
            return (
              0 === t.filters.length &&
              null === t.limit &&
              null == t.startAt &&
              null == t.endAt &&
              (0 === t.explicitOrderBy.length ||
                (1 === t.explicitOrderBy.length &&
                  t.explicitOrderBy[0].field.isKeyField()))
            );
          })(e) || n.isEqual(Vo.min())
            ? this.Dn(t, e)
            : this.Sn.pn(t, r).next(function (o) {
                var s = i.Cn(e, o);
                return ($s(e) || Gs(e)) && i.Nn(e.limitType, s, r, n)
                  ? i.Dn(t, e)
                  : (_o() <= Pt.DEBUG &&
                      So(
                        "QueryEngine",
                        "Re-using previous result from %s to execute query: %s",
                        n.toString(),
                        ea(e)
                      ),
                    i.Sn.getDocumentsMatchingQuery(t, e, n).next(function (t) {
                      return (
                        s.forEach(function (e) {
                          t = t.insert(e.key, e);
                        }),
                        t
                      );
                    }));
              });
        }),
        (t.prototype.Cn = function (t, e) {
          var n = new $a(ra(t));
          return (
            e.forEach(function (e, r) {
              na(t, r) && (n = n.add(r));
            }),
            n
          );
        }),
        (t.prototype.Nn = function (t, e, n, r) {
          if (n.size !== e.size) return !0;
          var i = "F" === t ? e.last() : e.first();
          return !!i && (i.hasPendingWrites || i.version.compareTo(r) > 0);
        }),
        (t.prototype.Dn = function (t, e) {
          return (
            _o() <= Pt.DEBUG &&
              So(
                "QueryEngine",
                "Using full collection scan to execute query:",
                ea(e)
              ),
            this.Sn.getDocumentsMatchingQuery(t, e, Vo.min())
          );
        }),
        t
      );
    })(),
    Cl = (function () {
      function t(t, e, n, r) {
        (this.persistence = t),
          (this.xn = e),
          (this.R = r),
          (this.Fn = new Ba(Lo)),
          (this.kn = new dl(function (t) {
            return _s(t);
          }, Ss)),
          (this.$n = Vo.min()),
          (this._n = t.getMutationQueue(n)),
          (this.On = t.getRemoteDocumentCache()),
          (this.qe = t.getTargetCache()),
          (this.Mn = new kl(
            this.On,
            this._n,
            this.persistence.getIndexManager()
          )),
          (this.Ke = t.getBundleCache()),
          this.xn.Vn(this.Mn);
      }
      return (
        (t.prototype.collectGarbage = function (t) {
          var e = this;
          return this.persistence.runTransaction(
            "Collect garbage",
            "readwrite-primary",
            function (n) {
              return t.collect(n, e.Fn);
            }
          );
        }),
        t
      );
    })();
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function xl(t, e, n, r) {
    return new Cl(t, e, n, r);
  }
  function Rl(t, e) {
    return lt(this, void 0, void 0, function () {
      var n, r, i, o;
      return ht(this, function (s) {
        switch (s.label) {
          case 0:
            return (
              (n = xo(t)),
              (r = n._n),
              (i = n.Mn),
              [
                4,
                n.persistence.runTransaction(
                  "Handle user change",
                  "readonly",
                  function (t) {
                    var o;
                    return n._n
                      .getAllMutationBatches(t)
                      .next(function (s) {
                        return (
                          (o = s),
                          (r = n.persistence.getMutationQueue(e)),
                          (i = new kl(
                            n.On,
                            r,
                            n.persistence.getIndexManager()
                          )),
                          r.getAllMutationBatches(t)
                        );
                      })
                      .next(function (e) {
                        for (
                          var n = [], r = [], s = Za(), a = 0, u = o;
                          a < u.length;
                          a++
                        ) {
                          var c = u[a];
                          n.push(c.batchId);
                          for (var l = 0, h = c.mutations; l < h.length; l++) {
                            var f = h[l];
                            s = s.add(f.key);
                          }
                        }
                        for (var d = 0, p = e; d < p.length; d++) {
                          var v = p[d];
                          r.push(v.batchId);
                          for (var g = 0, y = v.mutations; g < y.length; g++) {
                            var m = y[g];
                            s = s.add(m.key);
                          }
                        }
                        return i.pn(t, s).next(function (t) {
                          return {
                            Ln: t,
                            removedBatchIds: n,
                            addedBatchIds: r,
                          };
                        });
                      });
                  }
                ),
              ]
            );
          case 1:
            return (
              (o = s.sent()), [2, ((n._n = r), (n.Mn = i), n.xn.Vn(n.Mn), o)]
            );
        }
      });
    });
  }
  function Ol(t, e) {
    var n = xo(t);
    return n.persistence.runTransaction(
      "Acknowledge batch",
      "readwrite-primary",
      function (t) {
        var r = e.batch.keys(),
          i = n.On.newChangeBuffer({ trackRemovals: !0 });
        return (function (t, e, n, r) {
          var i = n.batch,
            o = i.keys(),
            s = dc.resolve();
          return (
            o.forEach(function (t) {
              s = s
                .next(function () {
                  return r.getEntry(e, t);
                })
                .next(function (e) {
                  var o = n.docVersions.get(t);
                  Co(null !== o),
                    e.version.compareTo(o) < 0 &&
                      (i.applyToRemoteDocument(e, n),
                      e.isValidDocument() && r.addEntry(e, n.commitVersion));
                });
            }),
            s.next(function () {
              return t._n.removeMutationBatch(e, i);
            })
          );
        })(n, t, e, i)
          .next(function () {
            return i.apply(t);
          })
          .next(function () {
            return n._n.performConsistencyCheck(t);
          })
          .next(function () {
            return n.Mn.pn(t, r);
          });
      }
    );
  }
  function Ll(t) {
    var e = xo(t);
    return e.persistence.runTransaction(
      "Get last remote snapshot version",
      "readonly",
      function (t) {
        return e.qe.getLastRemoteSnapshotVersion(t);
      }
    );
  }
  function Pl(t, e) {
    var n = xo(t),
      r = e.snapshotVersion,
      i = n.Fn;
    return n.persistence
      .runTransaction("Apply remote event", "readwrite-primary", function (t) {
        var o = n.On.newChangeBuffer({ trackRemovals: !0 });
        i = n.Fn;
        var s = [];
        e.targetChanges.forEach(function (e, o) {
          var a = i.get(o);
          if (a) {
            s.push(
              n.qe
                .removeMatchingKeys(t, e.removedDocuments, o)
                .next(function () {
                  return n.qe.addMatchingKeys(t, e.addedDocuments, o);
                })
            );
            var u = e.resumeToken;
            if (u.approximateByteSize() > 0) {
              var c = a
                .withResumeToken(u, r)
                .withSequenceNumber(t.currentSequenceNumber);
              (i = i.insert(o, c)),
                (function (t, e, n) {
                  return (
                    Co(e.resumeToken.approximateByteSize() > 0),
                    0 === t.resumeToken.approximateByteSize() ||
                      e.snapshotVersion.toMicroseconds() -
                        t.snapshotVersion.toMicroseconds() >=
                        3e8 ||
                      n.addedDocuments.size +
                        n.modifiedDocuments.size +
                        n.removedDocuments.size >
                        0
                  );
                })(a, c, e) && s.push(n.qe.updateTargetData(t, c));
            }
          }
        });
        var a = Qa();
        if (
          (e.documentUpdates.forEach(function (r, i) {
            e.resolvedLimboDocuments.has(r) &&
              s.push(n.persistence.referenceDelegate.updateLimboDocument(t, r));
          }),
          s.push(
            (function (t, e, n, r, i) {
              var o = Za();
              return (
                n.forEach(function (t) {
                  return (o = o.add(t));
                }),
                e.getEntries(t, o).next(function (t) {
                  var o = Qa();
                  return (
                    n.forEach(function (n, s) {
                      var a = t.get(n),
                        u = (null == i ? void 0 : i.get(n)) || r;
                      s.isNoDocument() && s.version.isEqual(Vo.min())
                        ? (e.removeEntry(n, u), (o = o.insert(n, s)))
                        : !a.isValidDocument() ||
                          s.version.compareTo(a.version) > 0 ||
                          (0 === s.version.compareTo(a.version) &&
                            a.hasPendingWrites)
                        ? (e.addEntry(s, u), (o = o.insert(n, s)))
                        : So(
                            "LocalStore",
                            "Ignoring outdated watch update for ",
                            n,
                            ". Current version:",
                            a.version,
                            " Watch version:",
                            s.version
                          );
                    }),
                    o
                  );
                })
              );
            })(t, o, e.documentUpdates, r, void 0).next(function (t) {
              a = t;
            })
          ),
          !r.isEqual(Vo.min()))
        ) {
          var u = n.qe.getLastRemoteSnapshotVersion(t).next(function (e) {
            return n.qe.setTargetsMetadata(t, t.currentSequenceNumber, r);
          });
          s.push(u);
        }
        return dc
          .waitFor(s)
          .next(function () {
            return o.apply(t);
          })
          .next(function () {
            return n.Mn.En(t, a);
          })
          .next(function () {
            return a;
          });
      })
      .then(function (t) {
        return (n.Fn = i), t;
      });
  }
  function Ml(t, e) {
    var n = xo(t);
    return n.persistence.runTransaction(
      "Get next mutation batch",
      "readonly",
      function (t) {
        return (
          void 0 === e && (e = -1), n._n.getNextMutationBatchAfterBatchId(t, e)
        );
      }
    );
  }
  function Fl(t, e) {
    var n = xo(t);
    return n.persistence
      .runTransaction("Allocate target", "readwrite", function (t) {
        var r;
        return n.qe.getTargetData(t, e).next(function (i) {
          return i
            ? ((r = i), dc.resolve(r))
            : n.qe.allocateTargetId(t).next(function (i) {
                return (
                  (r = new kc(e, i, 0, t.currentSequenceNumber)),
                  n.qe.addTargetData(t, r).next(function () {
                    return r;
                  })
                );
              });
        });
      })
      .then(function (t) {
        var r = n.Fn.get(t.targetId);
        return (
          (null === r || t.snapshotVersion.compareTo(r.snapshotVersion) > 0) &&
            ((n.Fn = n.Fn.insert(t.targetId, t)), n.kn.set(e, t.targetId)),
          t
        );
      });
  }
  function Vl(t, e, n) {
    return lt(this, void 0, void 0, function () {
      var r, i, o, s;
      return ht(this, function (a) {
        switch (a.label) {
          case 0:
            (r = xo(t)),
              (i = r.Fn.get(e)),
              (o = n ? "readwrite" : "readwrite-primary"),
              (a.label = 1);
          case 1:
            return (
              a.trys.push([1, 4, , 5]),
              n
                ? [3, 3]
                : [
                    4,
                    r.persistence.runTransaction(
                      "Release target",
                      o,
                      function (t) {
                        return r.persistence.referenceDelegate.removeTarget(
                          t,
                          i
                        );
                      }
                    ),
                  ]
            );
          case 2:
            a.sent(), (a.label = 3);
          case 3:
            return [3, 5];
          case 4:
            if (!mc((s = a.sent()))) throw s;
            return (
              So(
                "LocalStore",
                "Failed to update sequence numbers for target " + e + ": " + s
              ),
              [3, 5]
            );
          case 5:
            return (r.Fn = r.Fn.remove(e)), r.kn.delete(i.target), [2];
        }
      });
    });
  }
  function ql(t, e, n) {
    var r = xo(t),
      i = Vo.min(),
      o = Za();
    return r.persistence.runTransaction(
      "Execute query",
      "readonly",
      function (t) {
        return (function (t, e, n) {
          var r = xo(t),
            i = r.kn.get(n);
          return void 0 !== i
            ? dc.resolve(r.Fn.get(i))
            : r.qe.getTargetData(e, n);
        })(r, t, Xs(e))
          .next(function (e) {
            if (e)
              return (
                (i = e.lastLimboFreeSnapshotVersion),
                r.qe
                  .getMatchingKeysForTargetId(t, e.targetId)
                  .next(function (t) {
                    o = t;
                  })
              );
          })
          .next(function () {
            return r.xn.getDocumentsMatchingQuery(
              t,
              e,
              n ? i : Vo.min(),
              n ? o : Za()
            );
          })
          .next(function (t) {
            return { documents: t, Bn: o };
          });
      }
    );
  }
  function Ul(t, e) {
    var n = xo(t),
      r = xo(n.qe),
      i = n.Fn.get(e);
    return i
      ? Promise.resolve(i.target)
      : n.persistence.runTransaction(
          "Get target data",
          "readonly",
          function (t) {
            return r.lt(t, e).next(function (t) {
              return t ? t.target : null;
            });
          }
        );
  }
  function jl(t) {
    var e = xo(t);
    return e.persistence
      .runTransaction("Get new document changes", "readonly", function (t) {
        return (function (t, e, n) {
          var r = xo(t),
            i = Qa(),
            o = xc(n),
            s = ml(e),
            a = IDBKeyRange.lowerBound(o, !0);
          return s
            .$t({ index: tc.readTimeIndex, range: a }, function (t, e) {
              var n = Dc(r.R, e);
              (i = i.insert(n.key, n)), (o = e.readTime);
            })
            .next(function () {
              return { wn: i, readTime: Rc(o) };
            });
        })(e.On, t, e.$n);
      })
      .then(function (t) {
        var n = t.wn,
          r = t.readTime;
        return (e.$n = r), n;
      });
  }
  function Bl(t) {
    return lt(this, void 0, void 0, function () {
      var e;
      return ht(this, function (n) {
        return [
          2,
          (e = xo(t)).persistence
            .runTransaction(
              "Synchronize last document change read time",
              "readonly",
              function (t) {
                return (function (t) {
                  var e = ml(t),
                    n = Vo.min();
                  return e
                    .$t(
                      { index: tc.readTimeIndex, reverse: !0 },
                      function (t, e, r) {
                        e.readTime && (n = Rc(e.readTime)), r.done();
                      }
                    )
                    .next(function () {
                      return n;
                    });
                })(t);
              }
            )
            .then(function (t) {
              e.$n = t;
            }),
        ];
      });
    });
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var zl = (function () {
      function t(t) {
        (this.R = t), (this.Qn = new Map()), (this.jn = new Map());
      }
      return (
        (t.prototype.getBundleMetadata = function (t, e) {
          return dc.resolve(this.Qn.get(e));
        }),
        (t.prototype.saveBundleMetadata = function (t, e) {
          var n;
          return (
            this.Qn.set(e.id, {
              id: (n = e).id,
              version: n.version,
              createTime: yu(n.createTime),
            }),
            dc.resolve()
          );
        }),
        (t.prototype.getNamedQuery = function (t, e) {
          return dc.resolve(this.jn.get(e));
        }),
        (t.prototype.saveNamedQuery = function (t, e) {
          return (
            this.jn.set(
              e.name,
              (function (t) {
                return {
                  name: t.name,
                  query: Vc(t.bundledQuery),
                  readTime: yu(t.readTime),
                };
              })(e)
            ),
            dc.resolve()
          );
        }),
        t
      );
    })(),
    Kl = (function () {
      function t() {
        (this.Wn = new $a($l.Gn)), (this.zn = new $a($l.Hn));
      }
      return (
        (t.prototype.isEmpty = function () {
          return this.Wn.isEmpty();
        }),
        (t.prototype.addReference = function (t, e) {
          var n = new $l(t, e);
          (this.Wn = this.Wn.add(n)), (this.zn = this.zn.add(n));
        }),
        (t.prototype.Jn = function (t, e) {
          var n = this;
          t.forEach(function (t) {
            return n.addReference(t, e);
          });
        }),
        (t.prototype.removeReference = function (t, e) {
          this.Yn(new $l(t, e));
        }),
        (t.prototype.Xn = function (t, e) {
          var n = this;
          t.forEach(function (t) {
            return n.removeReference(t, e);
          });
        }),
        (t.prototype.Zn = function (t) {
          var e = this,
            n = new is(new zo([])),
            r = new $l(n, t),
            i = new $l(n, t + 1),
            o = [];
          return (
            this.zn.forEachInRange([r, i], function (t) {
              e.Yn(t), o.push(t.key);
            }),
            o
          );
        }),
        (t.prototype.ts = function () {
          var t = this;
          this.Wn.forEach(function (e) {
            return t.Yn(e);
          });
        }),
        (t.prototype.Yn = function (t) {
          (this.Wn = this.Wn.delete(t)), (this.zn = this.zn.delete(t));
        }),
        (t.prototype.es = function (t) {
          var e = new is(new zo([])),
            n = new $l(e, t),
            r = new $l(e, t + 1),
            i = Za();
          return (
            this.zn.forEachInRange([n, r], function (t) {
              i = i.add(t.key);
            }),
            i
          );
        }),
        (t.prototype.containsKey = function (t) {
          var e = new $l(t, 0),
            n = this.Wn.firstAfterOrEqual(e);
          return null !== n && t.isEqual(n.key);
        }),
        t
      );
    })(),
    $l = (function () {
      function t(t, e) {
        (this.key = t), (this.ns = e);
      }
      return (
        (t.Gn = function (t, e) {
          return is.comparator(t.key, e.key) || Lo(t.ns, e.ns);
        }),
        (t.Hn = function (t, e) {
          return Lo(t.ns, e.ns) || is.comparator(t.key, e.key);
        }),
        t
      );
    })(),
    Gl = (function () {
      function t(t, e) {
        (this.Ut = t),
          (this.referenceDelegate = e),
          (this._n = []),
          (this.ss = 1),
          (this.rs = new $a($l.Gn));
      }
      return (
        (t.prototype.checkEmpty = function (t) {
          return dc.resolve(0 === this._n.length);
        }),
        (t.prototype.addMutationBatch = function (t, e, n, r) {
          var i = this.ss;
          this.ss++, this._n.length > 0 && this._n[this._n.length - 1];
          var o = new Sc(i, e, n, r);
          this._n.push(o);
          for (var s = 0, a = r; s < a.length; s++) {
            var u = a[s];
            (this.rs = this.rs.add(new $l(u.key, i))),
              this.Ut.addToCollectionParentIndex(t, u.key.path.popLast());
          }
          return dc.resolve(o);
        }),
        (t.prototype.lookupMutationBatch = function (t, e) {
          return dc.resolve(this.os(e));
        }),
        (t.prototype.getNextMutationBatchAfterBatchId = function (t, e) {
          var n = e + 1,
            r = this.cs(n),
            i = r < 0 ? 0 : r;
          return dc.resolve(this._n.length > i ? this._n[i] : null);
        }),
        (t.prototype.getHighestUnacknowledgedBatchId = function () {
          return dc.resolve(0 === this._n.length ? -1 : this.ss - 1);
        }),
        (t.prototype.getAllMutationBatches = function (t) {
          return dc.resolve(this._n.slice());
        }),
        (t.prototype.getAllMutationBatchesAffectingDocumentKey = function (
          t,
          e
        ) {
          var n = this,
            r = new $l(e, 0),
            i = new $l(e, Number.POSITIVE_INFINITY),
            o = [];
          return (
            this.rs.forEachInRange([r, i], function (t) {
              var e = n.os(t.ns);
              o.push(e);
            }),
            dc.resolve(o)
          );
        }),
        (t.prototype.getAllMutationBatchesAffectingDocumentKeys = function (
          t,
          e
        ) {
          var n = this,
            r = new $a(Lo);
          return (
            e.forEach(function (t) {
              var e = new $l(t, 0),
                i = new $l(t, Number.POSITIVE_INFINITY);
              n.rs.forEachInRange([e, i], function (t) {
                r = r.add(t.ns);
              });
            }),
            dc.resolve(this.us(r))
          );
        }),
        (t.prototype.getAllMutationBatchesAffectingQuery = function (t, e) {
          var n = e.path,
            r = n.length + 1,
            i = n;
          is.isDocumentKey(i) || (i = i.child(""));
          var o = new $l(new is(i), 0),
            s = new $a(Lo);
          return (
            this.rs.forEachWhile(function (t) {
              var e = t.key.path;
              return (
                !!n.isPrefixOf(e) && (e.length === r && (s = s.add(t.ns)), !0)
              );
            }, o),
            dc.resolve(this.us(s))
          );
        }),
        (t.prototype.us = function (t) {
          var e = this,
            n = [];
          return (
            t.forEach(function (t) {
              var r = e.os(t);
              null !== r && n.push(r);
            }),
            n
          );
        }),
        (t.prototype.removeMutationBatch = function (t, e) {
          var n = this;
          Co(0 === this.hs(e.batchId, "removed")), this._n.shift();
          var r = this.rs;
          return dc
            .forEach(e.mutations, function (i) {
              var o = new $l(i.key, e.batchId);
              return (
                (r = r.delete(o)),
                n.referenceDelegate.markPotentiallyOrphaned(t, i.key)
              );
            })
            .next(function () {
              n.rs = r;
            });
        }),
        (t.prototype.Gt = function (t) {}),
        (t.prototype.containsKey = function (t, e) {
          var n = new $l(e, 0),
            r = this.rs.firstAfterOrEqual(n);
          return dc.resolve(e.isEqual(r && r.key));
        }),
        (t.prototype.performConsistencyCheck = function (t) {
          return this._n.length, dc.resolve();
        }),
        (t.prototype.hs = function (t, e) {
          return this.cs(t);
        }),
        (t.prototype.cs = function (t) {
          return 0 === this._n.length ? 0 : t - this._n[0].batchId;
        }),
        (t.prototype.os = function (t) {
          var e = this.cs(t);
          return e < 0 || e >= this._n.length ? null : this._n[e];
        }),
        t
      );
    })(),
    Hl = (function () {
      function t(t, e) {
        (this.Ut = t),
          (this.ls = e),
          (this.docs = new Ba(is.comparator)),
          (this.size = 0);
      }
      return (
        (t.prototype.addEntry = function (t, e, n) {
          var r = e.key,
            i = this.docs.get(r),
            o = i ? i.size : 0,
            s = this.ls(e);
          return (
            (this.docs = this.docs.insert(r, {
              document: e.clone(),
              size: s,
              readTime: n,
            })),
            (this.size += s - o),
            this.Ut.addToCollectionParentIndex(t, r.path.popLast())
          );
        }),
        (t.prototype.removeEntry = function (t) {
          var e = this.docs.get(t);
          e && ((this.docs = this.docs.remove(t)), (this.size -= e.size));
        }),
        (t.prototype.getEntry = function (t, e) {
          var n = this.docs.get(e);
          return dc.resolve(n ? n.document.clone() : Es.newInvalidDocument(e));
        }),
        (t.prototype.getEntries = function (t, e) {
          var n = this,
            r = Qa();
          return (
            e.forEach(function (t) {
              var e = n.docs.get(t);
              r = r.insert(
                t,
                e ? e.document.clone() : Es.newInvalidDocument(t)
              );
            }),
            dc.resolve(r)
          );
        }),
        (t.prototype.getDocumentsMatchingQuery = function (t, e, n) {
          for (
            var r = Qa(),
              i = new is(e.path.child("")),
              o = this.docs.getIteratorFrom(i);
            o.hasNext();

          ) {
            var s = o.getNext(),
              a = s.key,
              u = s.value,
              c = u.document,
              l = u.readTime;
            if (!e.path.isPrefixOf(a.path)) break;
            l.compareTo(n) <= 0 ||
              (na(e, c) && (r = r.insert(c.key, c.clone())));
          }
          return dc.resolve(r);
        }),
        (t.prototype.fs = function (t, e) {
          return dc.forEach(this.docs, function (t) {
            return e(t);
          });
        }),
        (t.prototype.newChangeBuffer = function (t) {
          return new Ql(this);
        }),
        (t.prototype.getSize = function (t) {
          return dc.resolve(this.size);
        }),
        t
      );
    })(),
    Ql = (function (t) {
      function e(e) {
        var n = this;
        return ((n = t.call(this) || this).Ie = e), n;
      }
      return (
        ut(e, t),
        (e.prototype.applyChanges = function (t) {
          var e = this,
            n = [];
          return (
            this.changes.forEach(function (r, i) {
              i.document.isValidDocument()
                ? n.push(e.Ie.addEntry(t, i.document, e.getReadTime(r)))
                : e.Ie.removeEntry(r);
            }),
            dc.waitFor(n)
          );
        }),
        (e.prototype.getFromCache = function (t, e) {
          return this.Ie.getEntry(t, e);
        }),
        (e.prototype.getAllFromCache = function (t, e) {
          return this.Ie.getEntries(t, e);
        }),
        e
      );
    })(pl),
    Wl = (function () {
      function t(t) {
        (this.persistence = t),
          (this.ds = new dl(function (t) {
            return _s(t);
          }, Ss)),
          (this.lastRemoteSnapshotVersion = Vo.min()),
          (this.highestTargetId = 0),
          (this.ws = 0),
          (this._s = new Kl()),
          (this.targetCount = 0),
          (this.ys = el.Jt());
      }
      return (
        (t.prototype.forEachTarget = function (t, e) {
          return (
            this.ds.forEach(function (t, n) {
              return e(n);
            }),
            dc.resolve()
          );
        }),
        (t.prototype.getLastRemoteSnapshotVersion = function (t) {
          return dc.resolve(this.lastRemoteSnapshotVersion);
        }),
        (t.prototype.getHighestSequenceNumber = function (t) {
          return dc.resolve(this.ws);
        }),
        (t.prototype.allocateTargetId = function (t) {
          return (
            (this.highestTargetId = this.ys.next()),
            dc.resolve(this.highestTargetId)
          );
        }),
        (t.prototype.setTargetsMetadata = function (t, e, n) {
          return (
            n && (this.lastRemoteSnapshotVersion = n),
            e > this.ws && (this.ws = e),
            dc.resolve()
          );
        }),
        (t.prototype.te = function (t) {
          this.ds.set(t.target, t);
          var e = t.targetId;
          e > this.highestTargetId &&
            ((this.ys = new el(e)), (this.highestTargetId = e)),
            t.sequenceNumber > this.ws && (this.ws = t.sequenceNumber);
        }),
        (t.prototype.addTargetData = function (t, e) {
          return this.te(e), (this.targetCount += 1), dc.resolve();
        }),
        (t.prototype.updateTargetData = function (t, e) {
          return this.te(e), dc.resolve();
        }),
        (t.prototype.removeTargetData = function (t, e) {
          return (
            this.ds.delete(e.target),
            this._s.Zn(e.targetId),
            (this.targetCount -= 1),
            dc.resolve()
          );
        }),
        (t.prototype.removeTargets = function (t, e, n) {
          var r = this,
            i = 0,
            o = [];
          return (
            this.ds.forEach(function (s, a) {
              a.sequenceNumber <= e &&
                null === n.get(a.targetId) &&
                (r.ds.delete(s),
                o.push(r.removeMatchingKeysForTargetId(t, a.targetId)),
                i++);
            }),
            dc.waitFor(o).next(function () {
              return i;
            })
          );
        }),
        (t.prototype.getTargetCount = function (t) {
          return dc.resolve(this.targetCount);
        }),
        (t.prototype.getTargetData = function (t, e) {
          var n = this.ds.get(e) || null;
          return dc.resolve(n);
        }),
        (t.prototype.addMatchingKeys = function (t, e, n) {
          return this._s.Jn(e, n), dc.resolve();
        }),
        (t.prototype.removeMatchingKeys = function (t, e, n) {
          this._s.Xn(e, n);
          var r = this.persistence.referenceDelegate,
            i = [];
          return (
            r &&
              e.forEach(function (e) {
                i.push(r.markPotentiallyOrphaned(t, e));
              }),
            dc.waitFor(i)
          );
        }),
        (t.prototype.removeMatchingKeysForTargetId = function (t, e) {
          return this._s.Zn(e), dc.resolve();
        }),
        (t.prototype.getMatchingKeysForTargetId = function (t, e) {
          var n = this._s.es(e);
          return dc.resolve(n);
        }),
        (t.prototype.containsKey = function (t, e) {
          return dc.resolve(this._s.containsKey(e));
        }),
        t
      );
    })(),
    Yl = (function () {
      function t(t, e) {
        var n = this;
        (this.gs = {}),
          (this.Ne = new wo(0)),
          (this.xe = !1),
          (this.xe = !0),
          (this.referenceDelegate = t(this)),
          (this.qe = new Wl(this)),
          (this.Ut = new Bc()),
          (this.Ue = (function (t, e) {
            return new Hl(t, function (t) {
              return n.referenceDelegate.ps(t);
            });
          })(this.Ut)),
          (this.R = new Nc(e)),
          (this.Ke = new zl(this.R));
      }
      return (
        (t.prototype.start = function () {
          return Promise.resolve();
        }),
        (t.prototype.shutdown = function () {
          return (this.xe = !1), Promise.resolve();
        }),
        Object.defineProperty(t.prototype, "started", {
          get: function () {
            return this.xe;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.setDatabaseDeletedListener = function () {}),
        (t.prototype.setNetworkEnabled = function () {}),
        (t.prototype.getIndexManager = function () {
          return this.Ut;
        }),
        (t.prototype.getMutationQueue = function (t) {
          var e = this.gs[t.toKey()];
          return (
            e ||
              ((e = new Gl(this.Ut, this.referenceDelegate)),
              (this.gs[t.toKey()] = e)),
            e
          );
        }),
        (t.prototype.getTargetCache = function () {
          return this.qe;
        }),
        (t.prototype.getRemoteDocumentCache = function () {
          return this.Ue;
        }),
        (t.prototype.getBundleCache = function () {
          return this.Ke;
        }),
        (t.prototype.runTransaction = function (t, e, n) {
          var r = this;
          So("MemoryPersistence", "Starting transaction:", t);
          var i = new Xl(this.Ne.next());
          return (
            this.referenceDelegate.Es(),
            n(i)
              .next(function (t) {
                return r.referenceDelegate.Ts(i).next(function () {
                  return t;
                });
              })
              .toPromise()
              .then(function (t) {
                return i.raiseOnCommittedEvent(), t;
              })
          );
        }),
        (t.prototype.Is = function (t, e) {
          return dc.or(
            Object.values(this.gs).map(function (n) {
              return function () {
                return n.containsKey(t, e);
              };
            })
          );
        }),
        t
      );
    })(),
    Xl = (function (t) {
      function e(e) {
        var n = this;
        return ((n = t.call(this) || this).currentSequenceNumber = e), n;
      }
      return ut(e, t), e;
    })(hc),
    Jl = (function () {
      function t(t) {
        (this.persistence = t), (this.As = new Kl()), (this.Rs = null);
      }
      return (
        (t.bs = function (e) {
          return new t(e);
        }),
        Object.defineProperty(t.prototype, "vs", {
          get: function () {
            if (this.Rs) return this.Rs;
            throw Do();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.addReference = function (t, e, n) {
          return (
            this.As.addReference(n, e),
            this.vs.delete(n.toString()),
            dc.resolve()
          );
        }),
        (t.prototype.removeReference = function (t, e, n) {
          return (
            this.As.removeReference(n, e),
            this.vs.add(n.toString()),
            dc.resolve()
          );
        }),
        (t.prototype.markPotentiallyOrphaned = function (t, e) {
          return this.vs.add(e.toString()), dc.resolve();
        }),
        (t.prototype.removeTarget = function (t, e) {
          var n = this;
          this.As.Zn(e.targetId).forEach(function (t) {
            return n.vs.add(t.toString());
          });
          var r = this.persistence.getTargetCache();
          return r
            .getMatchingKeysForTargetId(t, e.targetId)
            .next(function (t) {
              t.forEach(function (t) {
                return n.vs.add(t.toString());
              });
            })
            .next(function () {
              return r.removeTargetData(t, e);
            });
        }),
        (t.prototype.Es = function () {
          this.Rs = new Set();
        }),
        (t.prototype.Ts = function (t) {
          var e = this,
            n = this.persistence.getRemoteDocumentCache().newChangeBuffer();
          return dc
            .forEach(this.vs, function (r) {
              var i = is.fromPath(r);
              return e.Ps(t, i).next(function (t) {
                t || n.removeEntry(i);
              });
            })
            .next(function () {
              return (e.Rs = null), n.apply(t);
            });
        }),
        (t.prototype.updateLimboDocument = function (t, e) {
          var n = this;
          return this.Ps(t, e).next(function (t) {
            t ? n.vs.delete(e.toString()) : n.vs.add(e.toString());
          });
        }),
        (t.prototype.ps = function (t) {
          return 0;
        }),
        (t.prototype.Ps = function (t, e) {
          var n = this;
          return dc.or([
            function () {
              return dc.resolve(n.As.containsKey(e));
            },
            function () {
              return n.persistence.getTargetCache().containsKey(t, e);
            },
            function () {
              return n.persistence.Is(t, e);
            },
          ]);
        }),
        t
      );
    })(),
    Zl = (function () {
      function t(t) {
        this.uid = t;
      }
      return (
        (t.prototype.isAuthenticated = function () {
          return null != this.uid;
        }),
        (t.prototype.toKey = function () {
          return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
        }),
        (t.prototype.isEqual = function (t) {
          return t.uid === this.uid;
        }),
        t
      );
    })();
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function th(t, e) {
    return "firestore_clients_" + t + "_" + e;
  }
  function eh(t, e, n) {
    var r = "firestore_mutations_" + t + "_" + n;
    return e.isAuthenticated() && (r += "_" + e.uid), r;
  }
  function nh(t, e) {
    return "firestore_targets_" + t + "_" + e;
  }
  (Zl.UNAUTHENTICATED = new Zl(null)),
    (Zl.GOOGLE_CREDENTIALS = new Zl("google-credentials-uid")),
    (Zl.FIRST_PARTY = new Zl("first-party-uid"));
  var rh = (function () {
      function t(t, e, n, r) {
        (this.user = t), (this.batchId = e), (this.state = n), (this.error = r);
      }
      return (
        (t.Vs = function (e, n, r) {
          var i,
            o = JSON.parse(r),
            s =
              "object" == typeof o &&
              -1 !== ["pending", "acknowledged", "rejected"].indexOf(o.state) &&
              (void 0 === o.error || "object" == typeof o.error);
          return (
            s &&
              o.error &&
              (s =
                "string" == typeof o.error.message &&
                "string" == typeof o.error.code) &&
              (i = new Io(o.error.code, o.error.message)),
            s
              ? new t(e, n, o.state, i)
              : (Ao(
                  "SharedClientState",
                  "Failed to parse mutation state for ID '" + n + "': " + r
                ),
                null)
          );
        }),
        (t.prototype.Ss = function () {
          var t = { state: this.state, updateTimeMs: Date.now() };
          return (
            this.error &&
              (t.error = {
                code: this.error.code,
                message: this.error.message,
              }),
            JSON.stringify(t)
          );
        }),
        t
      );
    })(),
    ih = (function () {
      function t(t, e, n) {
        (this.targetId = t), (this.state = e), (this.error = n);
      }
      return (
        (t.Vs = function (e, n) {
          var r,
            i = JSON.parse(n),
            o =
              "object" == typeof i &&
              -1 !== ["not-current", "current", "rejected"].indexOf(i.state) &&
              (void 0 === i.error || "object" == typeof i.error);
          return (
            o &&
              i.error &&
              (o =
                "string" == typeof i.error.message &&
                "string" == typeof i.error.code) &&
              (r = new Io(i.error.code, i.error.message)),
            o
              ? new t(e, i.state, r)
              : (Ao(
                  "SharedClientState",
                  "Failed to parse target state for ID '" + e + "': " + n
                ),
                null)
          );
        }),
        (t.prototype.Ss = function () {
          var t = { state: this.state, updateTimeMs: Date.now() };
          return (
            this.error &&
              (t.error = {
                code: this.error.code,
                message: this.error.message,
              }),
            JSON.stringify(t)
          );
        }),
        t
      );
    })(),
    oh = (function () {
      function t(t, e) {
        (this.clientId = t), (this.activeTargetIds = e);
      }
      return (
        (t.Vs = function (e, n) {
          for (
            var r = JSON.parse(n),
              i = "object" == typeof r && r.activeTargetIds instanceof Array,
              o = eu(),
              s = 0;
            i && s < r.activeTargetIds.length;
            ++s
          )
            (i = rs(r.activeTargetIds[s])), (o = o.add(r.activeTargetIds[s]));
          return i
            ? new t(e, o)
            : (Ao(
                "SharedClientState",
                "Failed to parse client data for instance '" + e + "': " + n
              ),
              null);
        }),
        t
      );
    })(),
    sh = (function () {
      function t(t, e) {
        (this.clientId = t), (this.onlineState = e);
      }
      return (
        (t.Vs = function (e) {
          var n = JSON.parse(e);
          return "object" == typeof n &&
            -1 !== ["Unknown", "Online", "Offline"].indexOf(n.onlineState) &&
            "string" == typeof n.clientId
            ? new t(n.clientId, n.onlineState)
            : (Ao("SharedClientState", "Failed to parse online state: " + e),
              null);
        }),
        t
      );
    })(),
    ah = (function () {
      function t() {
        this.activeTargetIds = eu();
      }
      return (
        (t.prototype.Ds = function (t) {
          this.activeTargetIds = this.activeTargetIds.add(t);
        }),
        (t.prototype.Cs = function (t) {
          this.activeTargetIds = this.activeTargetIds.delete(t);
        }),
        (t.prototype.Ss = function () {
          var t = {
            activeTargetIds: this.activeTargetIds.toArray(),
            updateTimeMs: Date.now(),
          };
          return JSON.stringify(t);
        }),
        t
      );
    })(),
    uh = (function () {
      function t(t, e, n, r, i) {
        (this.window = t),
          (this.Se = e),
          (this.persistenceKey = n),
          (this.Ns = r),
          (this.syncEngine = null),
          (this.onlineStateHandler = null),
          (this.sequenceNumberHandler = null),
          (this.xs = this.Fs.bind(this)),
          (this.ks = new Ba(Lo)),
          (this.started = !1),
          (this.$s = []);
        var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        (this.storage = this.window.localStorage),
          (this.currentUser = i),
          (this.Os = th(this.persistenceKey, this.Ns)),
          (this.Ms = (function (t) {
            return "firestore_sequence_number_" + t;
          })(this.persistenceKey)),
          (this.ks = this.ks.insert(this.Ns, new ah())),
          (this.Ls = new RegExp("^firestore_clients_" + o + "_([^_]*)$")),
          (this.Bs = new RegExp(
            "^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"
          )),
          (this.qs = new RegExp("^firestore_targets_" + o + "_(\\d+)$")),
          (this.Us = (function (t) {
            return "firestore_online_state_" + t;
          })(this.persistenceKey)),
          (this.Ks = (function (t) {
            return "firestore_bundle_loaded_" + t;
          })(this.persistenceKey)),
          this.window.addEventListener("storage", this.xs);
      }
      return (
        (t.yt = function (t) {
          return !(!t || !t.localStorage);
        }),
        (t.prototype.start = function () {
          return lt(this, void 0, void 0, function () {
            var t,
              e,
              n,
              r,
              i,
              o,
              s,
              a,
              u,
              c,
              l,
              h = this;
            return ht(this, function (f) {
              switch (f.label) {
                case 0:
                  return [4, this.syncEngine.fn()];
                case 1:
                  for (t = f.sent(), e = 0, n = t; e < n.length; e++)
                    (r = n[e]) !== this.Ns &&
                      (i = this.getItem(th(this.persistenceKey, r))) &&
                      (o = oh.Vs(r, i)) &&
                      (this.ks = this.ks.insert(o.clientId, o));
                  for (
                    this.Qs(),
                      (s = this.storage.getItem(this.Us)) &&
                        (a = this.js(s)) &&
                        this.Ws(a),
                      u = 0,
                      c = this.$s;
                    u < c.length;
                    u++
                  )
                    (l = c[u]), this.Fs(l);
                  return (
                    (this.$s = []),
                    this.window.addEventListener("pagehide", function () {
                      return h.shutdown();
                    }),
                    (this.started = !0),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.writeSequenceNumber = function (t) {
          this.setItem(this.Ms, JSON.stringify(t));
        }),
        (t.prototype.getAllActiveQueryTargets = function () {
          return this.Gs(this.ks);
        }),
        (t.prototype.isActiveQueryTarget = function (t) {
          var e = !1;
          return (
            this.ks.forEach(function (n, r) {
              r.activeTargetIds.has(t) && (e = !0);
            }),
            e
          );
        }),
        (t.prototype.addPendingMutation = function (t) {
          this.zs(t, "pending");
        }),
        (t.prototype.updateMutationState = function (t, e, n) {
          this.zs(t, e, n), this.Hs(t);
        }),
        (t.prototype.addLocalQueryTarget = function (t) {
          var e = "not-current";
          if (this.isActiveQueryTarget(t)) {
            var n = this.storage.getItem(nh(this.persistenceKey, t));
            if (n) {
              var r = ih.Vs(t, n);
              r && (e = r.state);
            }
          }
          return this.Js.Ds(t), this.Qs(), e;
        }),
        (t.prototype.removeLocalQueryTarget = function (t) {
          this.Js.Cs(t), this.Qs();
        }),
        (t.prototype.isLocalQueryTarget = function (t) {
          return this.Js.activeTargetIds.has(t);
        }),
        (t.prototype.clearQueryState = function (t) {
          this.removeItem(nh(this.persistenceKey, t));
        }),
        (t.prototype.updateQueryState = function (t, e, n) {
          this.Ys(t, e, n);
        }),
        (t.prototype.handleUserChange = function (t, e, n) {
          var r = this;
          e.forEach(function (t) {
            r.Hs(t);
          }),
            (this.currentUser = t),
            n.forEach(function (t) {
              r.addPendingMutation(t);
            });
        }),
        (t.prototype.setOnlineState = function (t) {
          this.Xs(t);
        }),
        (t.prototype.notifyBundleLoaded = function () {
          this.Zs();
        }),
        (t.prototype.shutdown = function () {
          this.started &&
            (this.window.removeEventListener("storage", this.xs),
            this.removeItem(this.Os),
            (this.started = !1));
        }),
        (t.prototype.getItem = function (t) {
          var e = this.storage.getItem(t);
          return So("SharedClientState", "READ", t, e), e;
        }),
        (t.prototype.setItem = function (t, e) {
          So("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
        }),
        (t.prototype.removeItem = function (t) {
          So("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
        }),
        (t.prototype.Fs = function (t) {
          var e = this,
            n = t;
          if (n.storageArea === this.storage) {
            if (
              (So("SharedClientState", "EVENT", n.key, n.newValue),
              n.key === this.Os)
            )
              return void Ao(
                "Received WebStorage notification for local change. Another client might have garbage-collected our state"
              );
            this.Se.enqueueRetryable(function () {
              return lt(e, void 0, void 0, function () {
                var t, e, r, i, o, s;
                return ht(this, function (a) {
                  if (this.started) {
                    if (null !== n.key)
                      if (this.Ls.test(n.key)) {
                        if (null == n.newValue)
                          return (t = this.ti(n.key)), [2, this.ei(t, null)];
                        if ((e = this.ni(n.key, n.newValue)))
                          return [2, this.ei(e.clientId, e)];
                      } else if (this.Bs.test(n.key)) {
                        if (
                          null !== n.newValue &&
                          (r = this.si(n.key, n.newValue))
                        )
                          return [2, this.ii(r)];
                      } else if (this.qs.test(n.key)) {
                        if (
                          null !== n.newValue &&
                          (i = this.ri(n.key, n.newValue))
                        )
                          return [2, this.oi(i)];
                      } else if (n.key === this.Us) {
                        if (null !== n.newValue && (o = this.js(n.newValue)))
                          return [2, this.Ws(o)];
                      } else if (n.key === this.Ms)
                        (s = (function (t) {
                          var e = wo.o;
                          if (null != t)
                            try {
                              var n = JSON.parse(t);
                              Co("number" == typeof n), (e = n);
                            } catch (t) {
                              Ao(
                                "SharedClientState",
                                "Failed to read sequence number from WebStorage",
                                t
                              );
                            }
                          return e;
                        })(n.newValue)) !== wo.o &&
                          this.sequenceNumberHandler(s);
                      else if (n.key === this.Ks)
                        return [2, this.syncEngine.ci()];
                  } else this.$s.push(n);
                  return [2];
                });
              });
            });
          }
        }),
        Object.defineProperty(t.prototype, "Js", {
          get: function () {
            return this.ks.get(this.Ns);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.Qs = function () {
          this.setItem(this.Os, this.Js.Ss());
        }),
        (t.prototype.zs = function (t, e, n) {
          var r = new rh(this.currentUser, t, e, n),
            i = eh(this.persistenceKey, this.currentUser, t);
          this.setItem(i, r.Ss());
        }),
        (t.prototype.Hs = function (t) {
          var e = eh(this.persistenceKey, this.currentUser, t);
          this.removeItem(e);
        }),
        (t.prototype.Xs = function (t) {
          var e = { clientId: this.Ns, onlineState: t };
          this.storage.setItem(this.Us, JSON.stringify(e));
        }),
        (t.prototype.Ys = function (t, e, n) {
          var r = nh(this.persistenceKey, t),
            i = new ih(t, e, n);
          this.setItem(r, i.Ss());
        }),
        (t.prototype.Zs = function () {
          this.setItem(this.Ks, "value-not-used");
        }),
        (t.prototype.ti = function (t) {
          var e = this.Ls.exec(t);
          return e ? e[1] : null;
        }),
        (t.prototype.ni = function (t, e) {
          var n = this.ti(t);
          return oh.Vs(n, e);
        }),
        (t.prototype.si = function (t, e) {
          var n = this.Bs.exec(t),
            r = Number(n[1]),
            i = void 0 !== n[2] ? n[2] : null;
          return rh.Vs(new Zl(i), r, e);
        }),
        (t.prototype.ri = function (t, e) {
          var n = this.qs.exec(t),
            r = Number(n[1]);
          return ih.Vs(r, e);
        }),
        (t.prototype.js = function (t) {
          return sh.Vs(t);
        }),
        (t.prototype.ii = function (t) {
          return lt(this, void 0, void 0, function () {
            return ht(this, function (e) {
              return t.user.uid === this.currentUser.uid
                ? [2, this.syncEngine.ui(t.batchId, t.state, t.error)]
                : (So(
                    "SharedClientState",
                    "Ignoring mutation for non-active user " + t.user.uid
                  ),
                  [2]);
            });
          });
        }),
        (t.prototype.oi = function (t) {
          return this.syncEngine.ai(t.targetId, t.state, t.error);
        }),
        (t.prototype.ei = function (t, e) {
          var n = this,
            r = e ? this.ks.insert(t, e) : this.ks.remove(t),
            i = this.Gs(this.ks),
            o = this.Gs(r),
            s = [],
            a = [];
          return (
            o.forEach(function (t) {
              i.has(t) || s.push(t);
            }),
            i.forEach(function (t) {
              o.has(t) || a.push(t);
            }),
            this.syncEngine.hi(s, a).then(function () {
              n.ks = r;
            })
          );
        }),
        (t.prototype.Ws = function (t) {
          this.ks.get(t.clientId) && this.onlineStateHandler(t.onlineState);
        }),
        (t.prototype.Gs = function (t) {
          var e = eu();
          return (
            t.forEach(function (t, n) {
              e = e.unionWith(n.activeTargetIds);
            }),
            e
          );
        }),
        t
      );
    })(),
    ch = (function () {
      function t() {
        (this.li = new ah()),
          (this.fi = {}),
          (this.onlineStateHandler = null),
          (this.sequenceNumberHandler = null);
      }
      return (
        (t.prototype.addPendingMutation = function (t) {}),
        (t.prototype.updateMutationState = function (t, e, n) {}),
        (t.prototype.addLocalQueryTarget = function (t) {
          return this.li.Ds(t), this.fi[t] || "not-current";
        }),
        (t.prototype.updateQueryState = function (t, e, n) {
          this.fi[t] = e;
        }),
        (t.prototype.removeLocalQueryTarget = function (t) {
          this.li.Cs(t);
        }),
        (t.prototype.isLocalQueryTarget = function (t) {
          return this.li.activeTargetIds.has(t);
        }),
        (t.prototype.clearQueryState = function (t) {
          delete this.fi[t];
        }),
        (t.prototype.getAllActiveQueryTargets = function () {
          return this.li.activeTargetIds;
        }),
        (t.prototype.isActiveQueryTarget = function (t) {
          return this.li.activeTargetIds.has(t);
        }),
        (t.prototype.start = function () {
          return (this.li = new ah()), Promise.resolve();
        }),
        (t.prototype.handleUserChange = function (t, e, n) {}),
        (t.prototype.setOnlineState = function (t) {}),
        (t.prototype.shutdown = function () {}),
        (t.prototype.writeSequenceNumber = function (t) {}),
        (t.prototype.notifyBundleLoaded = function () {}),
        t
      );
    })(),
    lh = (function () {
      function t() {}
      return (
        (t.prototype.di = function (t) {}),
        (t.prototype.shutdown = function () {}),
        t
      );
    })(),
    hh = (function () {
      function t() {
        var t = this;
        (this.wi = function () {
          return t._i();
        }),
          (this.mi = function () {
            return t.yi();
          }),
          (this.gi = []),
          this.pi();
      }
      return (
        (t.prototype.di = function (t) {
          this.gi.push(t);
        }),
        (t.prototype.shutdown = function () {
          window.removeEventListener("online", this.wi),
            window.removeEventListener("offline", this.mi);
        }),
        (t.prototype.pi = function () {
          window.addEventListener("online", this.wi),
            window.addEventListener("offline", this.mi);
        }),
        (t.prototype._i = function () {
          So("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
          for (var t = 0, e = this.gi; t < e.length; t++) (0, e[t])(0);
        }),
        (t.prototype.yi = function () {
          So(
            "ConnectivityMonitor",
            "Network connectivity changed: UNAVAILABLE"
          );
          for (var t = 0, e = this.gi; t < e.length; t++) (0, e[t])(1);
        }),
        (t.yt = function () {
          return (
            "undefined" != typeof window &&
            void 0 !== window.addEventListener &&
            void 0 !== window.removeEventListener
          );
        }),
        t
      );
    })(),
    fh = {
      BatchGetDocuments: "batchGet",
      Commit: "commit",
      RunQuery: "runQuery",
    },
    dh = (function () {
      function t(t) {
        (this.Ei = t.Ei), (this.Ti = t.Ti);
      }
      return (
        (t.prototype.Ii = function (t) {
          this.Ai = t;
        }),
        (t.prototype.Ri = function (t) {
          this.bi = t;
        }),
        (t.prototype.onMessage = function (t) {
          this.vi = t;
        }),
        (t.prototype.close = function () {
          this.Ti();
        }),
        (t.prototype.send = function (t) {
          this.Ei(t);
        }),
        (t.prototype.Pi = function () {
          this.Ai();
        }),
        (t.prototype.Vi = function (t) {
          this.bi(t);
        }),
        (t.prototype.Si = function (t) {
          this.vi(t);
        }),
        t
      );
    })(),
    ph = (function (t) {
      function e(e) {
        var n = this;
        return (
          ((n = t.call(this, e) || this).forceLongPolling = e.forceLongPolling),
          (n.autoDetectLongPolling = e.autoDetectLongPolling),
          (n.useFetchStreams = e.useFetchStreams),
          n
        );
      }
      return (
        ut(e, t),
        (e.prototype.ki = function (t, e, n, r) {
          return new Promise(function (i, o) {
            var s = new bo();
            s.listenOnce(fo.COMPLETE, function () {
              try {
                switch (s.getLastErrorCode()) {
                  case ho.NO_ERROR:
                    var e = s.getResponseJson();
                    So("Connection", "XHR received:", JSON.stringify(e)), i(e);
                    break;
                  case ho.TIMEOUT:
                    So("Connection", 'RPC "' + t + '" timed out'),
                      o(new Io(Eo.DEADLINE_EXCEEDED, "Request time out"));
                    break;
                  case ho.HTTP_ERROR:
                    var n = s.getStatus();
                    if (
                      (So(
                        "Connection",
                        'RPC "' + t + '" failed with status:',
                        n,
                        "response text:",
                        s.getResponseText()
                      ),
                      n > 0)
                    ) {
                      var r = s.getResponseJson().error;
                      if (r && r.status && r.message) {
                        var a = (function (t) {
                          var e = t.toLowerCase().replace(/_/g, "-");
                          return Object.values(Eo).indexOf(e) >= 0
                            ? e
                            : Eo.UNKNOWN;
                        })(r.status);
                        o(new Io(a, r.message));
                      } else
                        o(
                          new Io(
                            Eo.UNKNOWN,
                            "Server responded with status " + s.getStatus()
                          )
                        );
                    } else o(new Io(Eo.UNAVAILABLE, "Connection failed."));
                    break;
                  default:
                    Do();
                }
              } finally {
                So("Connection", 'RPC "' + t + '" completed.');
              }
            });
            var a = JSON.stringify(r);
            s.send(e, "POST", a, n, 15);
          });
        }),
        (e.prototype.Oi = function (t, e) {
          var n,
            r = [
              this.Di,
              "/",
              "google.firestore.v1.Firestore",
              "/",
              t,
              "/channel",
            ],
            i = new so(),
            o = Zn(),
            s = {
              httpSessionIdParam: "gsessionid",
              initMessageHeaders: {},
              messageUrlParams: {
                database:
                  "projects/" +
                  this.databaseId.projectId +
                  "/databases/" +
                  this.databaseId.database,
              },
              sendRawJson: !0,
              supportsCrossDomainXhr: !0,
              internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
              forceLongPolling: this.forceLongPolling,
              detectBufferingProxy: this.autoDetectLongPolling,
            };
          this.useFetchStreams && (s.xmlHttpFactory = new yo({})),
            this.Fi(s.initMessageHeaders, e),
            ("undefined" != typeof window &&
              (window.cordova || window.phonegap || window.PhoneGap) &&
              /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())) ||
              ("object" == typeof navigator &&
                "ReactNative" === navigator.product) ||
              mt().indexOf("Electron/") >= 0 ||
              (function () {
                var t = mt();
                return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
              })() ||
              mt().indexOf("MSAppHost/") >= 0 ||
              ("object" ==
                typeof (n =
                  "object" == typeof chrome
                    ? chrome.runtime
                    : "object" == typeof browser
                    ? browser.runtime
                    : void 0) &&
                void 0 !== n.id) ||
              (s.httpHeadersOverwriteParam = "$httpHeaders");
          var a = r.join("");
          So("Connection", "Creating WebChannel: " + a, s);
          var u = i.createWebChannel(a, s),
            c = !1,
            l = !1,
            h = new dh({
              Ei: function (t) {
                l
                  ? So(
                      "Connection",
                      "Not sending because WebChannel is closed:",
                      t
                    )
                  : (c ||
                      (So("Connection", "Opening WebChannel transport."),
                      u.open(),
                      (c = !0)),
                    So("Connection", "WebChannel sending:", t),
                    u.send(t));
              },
              Ti: function () {
                return u.close();
              },
            }),
            f = function (t, e, n) {
              t.listen(e, function (t) {
                try {
                  n(t);
                } catch (t) {
                  setTimeout(function () {
                    throw t;
                  }, 0);
                }
              });
            };
          return (
            f(u, mo.EventType.OPEN, function () {
              l || So("Connection", "WebChannel transport opened.");
            }),
            f(u, mo.EventType.CLOSE, function () {
              l ||
                ((l = !0),
                So("Connection", "WebChannel transport closed"),
                h.Vi());
            }),
            f(u, mo.EventType.ERROR, function (t) {
              l ||
                ((l = !0),
                ko("Connection", "WebChannel transport errored:", t),
                h.Vi(
                  new Io(Eo.UNAVAILABLE, "The operation could not be completed")
                ));
            }),
            f(u, mo.EventType.MESSAGE, function (t) {
              var e;
              if (!l) {
                var n = t.data[0];
                Co(!!n);
                var r = n,
                  i =
                    r.error ||
                    (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
                if (i) {
                  So("Connection", "WebChannel received error:", i);
                  var o = i.status,
                    s = (function (t) {
                      var e = Pa[t];
                      if (void 0 !== e) return ja(e);
                    })(o),
                    a = i.message;
                  void 0 === s &&
                    ((s = Eo.INTERNAL),
                    (a =
                      "Unknown error status: " +
                      o +
                      " with message " +
                      i.message)),
                    (l = !0),
                    h.Vi(new Io(s, a)),
                    u.close();
                } else So("Connection", "WebChannel received:", n), h.Si(n);
              }
            }),
            f(o, po.STAT_EVENT, function (t) {
              t.stat === vo
                ? So("Connection", "Detected buffering proxy")
                : t.stat === go &&
                  So("Connection", "Detected no buffering proxy");
            }),
            setTimeout(function () {
              h.Pi();
            }, 0),
            h
          );
        }),
        e
      );
    })(
      (function () {
        function t(t) {
          (this.databaseInfo = t), (this.databaseId = t.databaseId);
          var e = t.ssl ? "https" : "http";
          (this.Di = e + "://" + t.host),
            (this.Ci =
              "projects/" +
              this.databaseId.projectId +
              "/databases/" +
              this.databaseId.database +
              "/documents");
        }
        return (
          (t.prototype.Ni = function (t, e, n, r) {
            var i = this.xi(t, e);
            So("RestConnection", "Sending: ", i, n);
            var o = {};
            return (
              this.Fi(o, r),
              this.ki(t, i, o, n).then(
                function (t) {
                  return So("RestConnection", "Received: ", t), t;
                },
                function (e) {
                  throw (
                    (ko(
                      "RestConnection",
                      t + " failed with error: ",
                      e,
                      "url: ",
                      i,
                      "request:",
                      n
                    ),
                    e)
                  );
                }
              )
            );
          }),
          (t.prototype.$i = function (t, e, n, r) {
            return this.Ni(t, e, n, r);
          }),
          (t.prototype.Fi = function (t, e) {
            if (
              ((t["X-Goog-Api-Client"] = "gl-js/ fire/8.8.0"),
              (t["Content-Type"] = "text/plain"),
              this.databaseInfo.appId &&
                (t["X-Firebase-GMPID"] = this.databaseInfo.appId),
              e)
            )
              for (var n in e.authHeaders)
                e.authHeaders.hasOwnProperty(n) && (t[n] = e.authHeaders[n]);
          }),
          (t.prototype.xi = function (t, e) {
            var n = fh[t];
            return this.Di + "/v1/" + e + ":" + n;
          }),
          t
        );
      })()
    );
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function vh() {
    return "undefined" != typeof window ? window : null;
  }
  function gh() {
    return "undefined" != typeof document ? document : null;
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function yh(t) {
    return new du(t, !0);
  }
  var mh = (function () {
      function t(t, e, n, r, i) {
        void 0 === n && (n = 1e3),
          void 0 === r && (r = 1.5),
          void 0 === i && (i = 6e4),
          (this.Se = t),
          (this.timerId = e),
          (this.Mi = n),
          (this.Li = r),
          (this.Bi = i),
          (this.qi = 0),
          (this.Ui = null),
          (this.Ki = Date.now()),
          this.reset();
      }
      return (
        (t.prototype.reset = function () {
          this.qi = 0;
        }),
        (t.prototype.Qi = function () {
          this.qi = this.Bi;
        }),
        (t.prototype.ji = function (t) {
          var e = this;
          this.cancel();
          var n = Math.floor(this.qi + this.Wi()),
            r = Math.max(0, Date.now() - this.Ki),
            i = Math.max(0, n - r);
          i > 0 &&
            So(
              "ExponentialBackoff",
              "Backing off for " +
                i +
                " ms (base delay: " +
                this.qi +
                " ms, delay with jitter: " +
                n +
                " ms, last attempt: " +
                r +
                " ms ago)"
            ),
            (this.Ui = this.Se.enqueueAfterDelay(this.timerId, i, function () {
              return (e.Ki = Date.now()), t();
            })),
            (this.qi *= this.Li),
            this.qi < this.Mi && (this.qi = this.Mi),
            this.qi > this.Bi && (this.qi = this.Bi);
        }),
        (t.prototype.Gi = function () {
          null !== this.Ui && (this.Ui.skipDelay(), (this.Ui = null));
        }),
        (t.prototype.cancel = function () {
          null !== this.Ui && (this.Ui.cancel(), (this.Ui = null));
        }),
        (t.prototype.Wi = function () {
          return (Math.random() - 0.5) * this.qi;
        }),
        t
      );
    })(),
    bh = (function () {
      function t(t, e, n, r, i, o) {
        (this.Se = t),
          (this.zi = n),
          (this.Hi = r),
          (this.Ji = i),
          (this.listener = o),
          (this.state = 0),
          (this.Yi = 0),
          (this.Xi = null),
          (this.stream = null),
          (this.Zi = new mh(t, e));
      }
      return (
        (t.prototype.tr = function () {
          return 1 === this.state || 2 === this.state || 4 === this.state;
        }),
        (t.prototype.er = function () {
          return 2 === this.state;
        }),
        (t.prototype.start = function () {
          3 !== this.state ? this.auth() : this.nr();
        }),
        (t.prototype.stop = function () {
          return lt(this, void 0, void 0, function () {
            return ht(this, function (t) {
              switch (t.label) {
                case 0:
                  return this.tr() ? [4, this.close(0)] : [3, 2];
                case 1:
                  t.sent(), (t.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.sr = function () {
          (this.state = 0), this.Zi.reset();
        }),
        (t.prototype.ir = function () {
          var t = this;
          this.er() &&
            null === this.Xi &&
            (this.Xi = this.Se.enqueueAfterDelay(this.zi, 6e4, function () {
              return t.rr();
            }));
        }),
        (t.prototype.cr = function (t) {
          this.ur(), this.stream.send(t);
        }),
        (t.prototype.rr = function () {
          return lt(this, void 0, void 0, function () {
            return ht(this, function (t) {
              return this.er() ? [2, this.close(0)] : [2];
            });
          });
        }),
        (t.prototype.ur = function () {
          this.Xi && (this.Xi.cancel(), (this.Xi = null));
        }),
        (t.prototype.close = function (t, e) {
          return lt(this, void 0, void 0, function () {
            return ht(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    this.ur(),
                    this.Zi.cancel(),
                    this.Yi++,
                    3 !== t
                      ? this.Zi.reset()
                      : e && e.code === Eo.RESOURCE_EXHAUSTED
                      ? (Ao(e.toString()),
                        Ao(
                          "Using maximum backoff delay to prevent overloading the backend."
                        ),
                        this.Zi.Qi())
                      : e &&
                        e.code === Eo.UNAUTHENTICATED &&
                        this.Ji.invalidateToken(),
                    null !== this.stream &&
                      (this.ar(), this.stream.close(), (this.stream = null)),
                    (this.state = t),
                    [4, this.listener.Ri(e)]
                  );
                case 1:
                  return n.sent(), [2];
              }
            });
          });
        }),
        (t.prototype.ar = function () {}),
        (t.prototype.auth = function () {
          var t = this;
          this.state = 1;
          var e = this.hr(this.Yi),
            n = this.Yi;
          this.Ji.getToken().then(
            function (e) {
              t.Yi === n && t.lr(e);
            },
            function (n) {
              e(function () {
                var e = new Io(
                  Eo.UNKNOWN,
                  "Fetching auth token failed: " + n.message
                );
                return t.dr(e);
              });
            }
          );
        }),
        (t.prototype.lr = function (t) {
          var e = this,
            n = this.hr(this.Yi);
          (this.stream = this.wr(t)),
            this.stream.Ii(function () {
              n(function () {
                return (e.state = 2), e.listener.Ii();
              });
            }),
            this.stream.Ri(function (t) {
              n(function () {
                return e.dr(t);
              });
            }),
            this.stream.onMessage(function (t) {
              n(function () {
                return e.onMessage(t);
              });
            });
        }),
        (t.prototype.nr = function () {
          var t = this;
          (this.state = 4),
            this.Zi.ji(function () {
              return lt(t, void 0, void 0, function () {
                return ht(this, function (t) {
                  return (this.state = 0), this.start(), [2];
                });
              });
            });
        }),
        (t.prototype.dr = function (t) {
          return (
            So("PersistentStream", "close with error: " + t),
            (this.stream = null),
            this.close(3, t)
          );
        }),
        (t.prototype.hr = function (t) {
          var e = this;
          return function (n) {
            e.Se.enqueueAndForget(function () {
              return e.Yi === t
                ? n()
                : (So(
                    "PersistentStream",
                    "stream callback skipped by getCloseGuardedDispatcher."
                  ),
                  Promise.resolve());
            });
          };
        }),
        t
      );
    })(),
    wh = (function (t) {
      function e(e, n, r, i, o) {
        var s = this;
        return (
          ((s =
            t.call(
              this,
              e,
              "listen_stream_connection_backoff",
              "listen_stream_idle",
              n,
              r,
              o
            ) || this).R = i),
          s
        );
      }
      return (
        ut(e, t),
        (e.prototype.wr = function (t) {
          return this.Hi.Oi("Listen", t);
        }),
        (e.prototype.onMessage = function (t) {
          this.Zi.reset();
          var e = (function (t, e) {
              var n;
              if ("targetChange" in e) {
                e.targetChange;
                var r = (function (t) {
                    return "NO_CHANGE" === t
                      ? 0
                      : "ADD" === t
                      ? 1
                      : "REMOVE" === t
                      ? 2
                      : "CURRENT" === t
                      ? 3
                      : "RESET" === t
                      ? 4
                      : Do();
                  })(e.targetChange.targetChangeType || "NO_CHANGE"),
                  i = e.targetChange.targetIds || [],
                  o = (function (t, e) {
                    return t.I
                      ? (Co(void 0 === e || "string" == typeof e),
                        Ho.fromBase64String(e || ""))
                      : (Co(void 0 === e || e instanceof Uint8Array),
                        Ho.fromUint8Array(e || new Uint8Array()));
                  })(t, e.targetChange.resumeToken),
                  s =
                    (a = e.targetChange.cause) &&
                    (function (t) {
                      var e = void 0 === t.code ? Eo.UNKNOWN : ja(t.code);
                      return new Io(e, t.message || "");
                    })(a);
                n = new su(r, i, o, s || null);
              } else if ("documentChange" in e) {
                e.documentChange,
                  (r = e.documentChange).document,
                  r.document.name,
                  r.document.updateTime,
                  (i = Eu(t, r.document.name)),
                  (o = yu(r.document.updateTime));
                var a = new bs({ mapValue: { fields: r.document.fields } }),
                  u = ((s = Es.newFoundDocument(i, o, a)), r.targetIds || []),
                  c = r.removedTargetIds || [];
                n = new iu(u, c, s.key, s);
              } else if ("documentDelete" in e)
                e.documentDelete,
                  (r = e.documentDelete).document,
                  (i = Eu(t, r.document)),
                  (o = r.readTime ? yu(r.readTime) : Vo.min()),
                  (a = Es.newNoDocument(i, o)),
                  (s = r.removedTargetIds || []),
                  (n = new iu([], s, a.key, a));
              else if ("documentRemove" in e)
                e.documentRemove,
                  (r = e.documentRemove).document,
                  (i = Eu(t, r.document)),
                  (o = r.removedTargetIds || []),
                  (n = new iu([], o, i, null));
              else {
                if (!("filter" in e)) return Do();
                e.filter;
                var l = e.filter;
                l.targetId,
                  (r = l.count || 0),
                  (i = new qa(r)),
                  (o = l.targetId),
                  (n = new ou(o, i));
              }
              return n;
            })(this.R, t),
            n = (function (t) {
              if (!("targetChange" in t)) return Vo.min();
              var e = t.targetChange;
              return e.targetIds && e.targetIds.length
                ? Vo.min()
                : e.readTime
                ? yu(e.readTime)
                : Vo.min();
            })(t);
          return this.listener._r(e, n);
        }),
        (e.prototype.mr = function (t) {
          var e = {};
          (e.database = _u(this.R)),
            (e.addTarget = (function (t, e) {
              var n,
                r = e.target;
              return (
                ((n = As(r)
                  ? { documents: Du(t, r) }
                  : { query: Cu(t, r) }).targetId = e.targetId),
                e.resumeToken.approximateByteSize() > 0
                  ? (n.resumeToken = vu(t, e.resumeToken))
                  : e.snapshotVersion.compareTo(Vo.min()) > 0 &&
                    (n.readTime = pu(t, e.snapshotVersion.toTimestamp())),
                n
              );
            })(this.R, t));
          var n = (function (t, e) {
            var n = (function (t, e) {
              switch (e) {
                case 0:
                  return null;
                case 1:
                  return "existence-filter-mismatch";
                case 2:
                  return "limbo-document";
                default:
                  return Do();
              }
            })(0, e.purpose);
            return null == n ? null : { "goog-listen-tags": n };
          })(this.R, t);
          n && (e.labels = n), this.cr(e);
        }),
        (e.prototype.yr = function (t) {
          var e = {};
          (e.database = _u(this.R)), (e.removeTarget = t), this.cr(e);
        }),
        e
      );
    })(bh),
    Eh = (function (t) {
      function e(e, n, r, i, o) {
        var s = this;
        return (
          ((s =
            t.call(
              this,
              e,
              "write_stream_connection_backoff",
              "write_stream_idle",
              n,
              r,
              o
            ) || this).R = i),
          (s.gr = !1),
          s
        );
      }
      return (
        ut(e, t),
        Object.defineProperty(e.prototype, "pr", {
          get: function () {
            return this.gr;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.start = function () {
          (this.gr = !1),
            (this.lastStreamToken = void 0),
            t.prototype.start.call(this);
        }),
        (e.prototype.ar = function () {
          this.gr && this.Er([]);
        }),
        (e.prototype.wr = function (t) {
          return this.Hi.Oi("Write", t);
        }),
        (e.prototype.onMessage = function (t) {
          if (
            (Co(!!t.streamToken),
            (this.lastStreamToken = t.streamToken),
            this.gr)
          ) {
            this.Zi.reset();
            var e = (function (t, e) {
                return t && t.length > 0
                  ? (Co(void 0 !== e),
                    t.map(function (t) {
                      return (function (t, e) {
                        var n = t.updateTime ? yu(t.updateTime) : yu(e);
                        return (
                          n.isEqual(Vo.min()) && (n = yu(e)),
                          new Ea(n, t.transformResults || [])
                        );
                      })(t, e);
                    }))
                  : [];
              })(t.writeResults, t.commitTime),
              n = yu(t.commitTime);
            return this.listener.Tr(n, e);
          }
          return (
            Co(!t.writeResults || 0 === t.writeResults.length),
            (this.gr = !0),
            this.listener.Ir()
          );
        }),
        (e.prototype.Ar = function () {
          var t = {};
          (t.database = _u(this.R)), this.cr(t);
        }),
        (e.prototype.Er = function (t) {
          var e = this,
            n = {
              streamToken: this.lastStreamToken,
              writes: t.map(function (t) {
                return ku(e.R, t);
              }),
            };
          this.cr(n);
        }),
        e
      );
    })(bh),
    Ih = (function (t) {
      function e(e, n, r) {
        var i = this;
        return (
          ((i = t.call(this) || this).credentials = e),
          (i.Hi = n),
          (i.R = r),
          (i.Rr = !1),
          i
        );
      }
      return (
        ut(e, t),
        (e.prototype.br = function () {
          if (this.Rr)
            throw new Io(
              Eo.FAILED_PRECONDITION,
              "The client has already been terminated."
            );
        }),
        (e.prototype.Ni = function (t, e, n) {
          var r = this;
          return (
            this.br(),
            this.credentials
              .getToken()
              .then(function (i) {
                return r.Hi.Ni(t, e, n, i);
              })
              .catch(function (t) {
                throw "FirebaseError" === t.name
                  ? (t.code === Eo.UNAUTHENTICATED &&
                      r.credentials.invalidateToken(),
                    t)
                  : new Io(Eo.UNKNOWN, t.toString());
              })
          );
        }),
        (e.prototype.$i = function (t, e, n) {
          var r = this;
          return (
            this.br(),
            this.credentials
              .getToken()
              .then(function (i) {
                return r.Hi.$i(t, e, n, i);
              })
              .catch(function (t) {
                throw "FirebaseError" === t.name
                  ? (t.code === Eo.UNAUTHENTICATED &&
                      r.credentials.invalidateToken(),
                    t)
                  : new Io(Eo.UNKNOWN, t.toString());
              })
          );
        }),
        (e.prototype.terminate = function () {
          this.Rr = !0;
        }),
        e
      );
    })(function () {}),
    Th = (function () {
      function t(t, e) {
        (this.asyncQueue = t),
          (this.onlineStateHandler = e),
          (this.state = "Unknown"),
          (this.vr = 0),
          (this.Pr = null),
          (this.Vr = !0);
      }
      return (
        (t.prototype.Sr = function () {
          var t = this;
          0 === this.vr &&
            (this.Dr("Unknown"),
            (this.Pr = this.asyncQueue.enqueueAfterDelay(
              "online_state_timeout",
              1e4,
              function () {
                return (
                  (t.Pr = null),
                  t.Cr("Backend didn't respond within 10 seconds."),
                  t.Dr("Offline"),
                  Promise.resolve()
                );
              }
            )));
        }),
        (t.prototype.Nr = function (t) {
          "Online" === this.state
            ? this.Dr("Unknown")
            : (this.vr++,
              this.vr >= 1 &&
                (this.Fr(),
                this.Cr(
                  "Connection failed 1 times. Most recent error: " +
                    t.toString()
                ),
                this.Dr("Offline")));
        }),
        (t.prototype.set = function (t) {
          this.Fr(),
            (this.vr = 0),
            "Online" === t && (this.Vr = !1),
            this.Dr(t);
        }),
        (t.prototype.Dr = function (t) {
          t !== this.state && ((this.state = t), this.onlineStateHandler(t));
        }),
        (t.prototype.Cr = function (t) {
          var e =
            "Could not reach Cloud Firestore backend. " +
            t +
            "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
          this.Vr ? (Ao(e), (this.Vr = !1)) : So("OnlineStateTracker", e);
        }),
        (t.prototype.Fr = function () {
          null !== this.Pr && (this.Pr.cancel(), (this.Pr = null));
        }),
        t
      );
    })(),
    _h = function (t, e, n, r, i) {
      var o = this;
      (this.localStore = t),
        (this.datastore = e),
        (this.asyncQueue = n),
        (this.remoteSyncer = {}),
        (this.kr = []),
        (this.$r = new Map()),
        (this.Or = new Set()),
        (this.Mr = []),
        (this.Lr = i),
        this.Lr.di(function (t) {
          n.enqueueAndForget(function () {
            return lt(o, void 0, void 0, function () {
              return ht(this, function (t) {
                switch (t.label) {
                  case 0:
                    return Oh(this)
                      ? (So(
                          "RemoteStore",
                          "Restarting streams for network reachability change."
                        ),
                        [
                          4,
                          (function (t) {
                            return lt(this, void 0, void 0, function () {
                              var e;
                              return ht(this, function (n) {
                                switch (n.label) {
                                  case 0:
                                    return (e = xo(t)).Or.add(4), [4, Ah(e)];
                                  case 1:
                                    return (
                                      n.sent(),
                                      e.Br.set("Unknown"),
                                      e.Or.delete(4),
                                      [4, Sh(e)]
                                    );
                                  case 2:
                                    return n.sent(), [2];
                                }
                              });
                            });
                          })(this),
                        ])
                      : [3, 2];
                  case 1:
                    t.sent(), (t.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          });
        }),
        (this.Br = new Th(n, r));
    };
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Sh(t) {
    return lt(this, void 0, void 0, function () {
      var e, n;
      return ht(this, function (r) {
        switch (r.label) {
          case 0:
            if (!Oh(t)) return [3, 4];
            (e = 0), (n = t.Mr), (r.label = 1);
          case 1:
            return e < n.length ? [4, (0, n[e])(!0)] : [3, 4];
          case 2:
            r.sent(), (r.label = 3);
          case 3:
            return e++, [3, 1];
          case 4:
            return [2];
        }
      });
    });
  }
  function Ah(t) {
    return lt(this, void 0, void 0, function () {
      var e, n;
      return ht(this, function (r) {
        switch (r.label) {
          case 0:
            (e = 0), (n = t.Mr), (r.label = 1);
          case 1:
            return e < n.length ? [4, (0, n[e])(!1)] : [3, 4];
          case 2:
            r.sent(), (r.label = 3);
          case 3:
            return e++, [3, 1];
          case 4:
            return [2];
        }
      });
    });
  }
  function kh(t, e) {
    var n = xo(t);
    n.$r.has(e.targetId) ||
      (n.$r.set(e.targetId, e), Rh(n) ? xh(n) : Qh(n).er() && Dh(n, e));
  }
  function Nh(t, e) {
    var n = xo(t),
      r = Qh(n);
    n.$r.delete(e),
      r.er() && Ch(n, e),
      0 === n.$r.size && (r.er() ? r.ir() : Oh(n) && n.Br.set("Unknown"));
  }
  function Dh(t, e) {
    t.qr.U(e.targetId), Qh(t).mr(e);
  }
  function Ch(t, e) {
    t.qr.U(e), Qh(t).yr(e);
  }
  function xh(t) {
    (t.qr = new uu({
      getRemoteKeysForTarget: function (e) {
        return t.remoteSyncer.getRemoteKeysForTarget(e);
      },
      lt: function (e) {
        return t.$r.get(e) || null;
      },
    })),
      Qh(t).start(),
      t.Br.Sr();
  }
  function Rh(t) {
    return Oh(t) && !Qh(t).tr() && t.$r.size > 0;
  }
  function Oh(t) {
    return 0 === xo(t).Or.size;
  }
  function Lh(t) {
    t.qr = void 0;
  }
  function Ph(t) {
    return lt(this, void 0, void 0, function () {
      return ht(this, function (e) {
        return (
          t.$r.forEach(function (e, n) {
            Dh(t, e);
          }),
          [2]
        );
      });
    });
  }
  function Mh(t, e) {
    return lt(this, void 0, void 0, function () {
      return ht(this, function (n) {
        return Lh(t), Rh(t) ? (t.Br.Nr(e), xh(t)) : t.Br.set("Unknown"), [2];
      });
    });
  }
  function Fh(t, e, n) {
    return lt(this, void 0, void 0, function () {
      var r, i, o;
      return ht(this, function (s) {
        switch (s.label) {
          case 0:
            if (
              (t.Br.set("Online"),
              !(e instanceof su && 2 === e.state && e.cause))
            )
              return [3, 6];
            s.label = 1;
          case 1:
            return (
              s.trys.push([1, 3, , 5]),
              [
                4,
                (function (t, e) {
                  return lt(this, void 0, void 0, function () {
                    var n, r, i, o;
                    return ht(this, function (s) {
                      switch (s.label) {
                        case 0:
                          (n = e.cause),
                            (r = 0),
                            (i = e.targetIds),
                            (s.label = 1);
                        case 1:
                          return r < i.length
                            ? ((o = i[r]),
                              t.$r.has(o)
                                ? [4, t.remoteSyncer.rejectListen(o, n)]
                                : [3, 3])
                            : [3, 5];
                        case 2:
                          s.sent(),
                            t.$r.delete(o),
                            t.qr.removeTarget(o),
                            (s.label = 3);
                        case 3:
                          s.label = 4;
                        case 4:
                          return r++, [3, 1];
                        case 5:
                          return [2];
                      }
                    });
                  });
                })(t, e),
              ]
            );
          case 2:
            return s.sent(), [3, 5];
          case 3:
            return (
              (r = s.sent()),
              So(
                "RemoteStore",
                "Failed to remove targets %s: %s ",
                e.targetIds.join(","),
                r
              ),
              [4, Vh(t, r)]
            );
          case 4:
            return s.sent(), [3, 5];
          case 5:
            return [3, 13];
          case 6:
            if (
              (e instanceof iu
                ? t.qr.X(e)
                : e instanceof ou
                ? t.qr.rt(e)
                : t.qr.et(e),
              n.isEqual(Vo.min()))
            )
              return [3, 13];
            s.label = 7;
          case 7:
            return s.trys.push([7, 11, , 13]), [4, Ll(t.localStore)];
          case 8:
            return (
              (i = s.sent()),
              n.compareTo(i) >= 0
                ? [
                    4,
                    (function (t, e) {
                      var n = t.qr.ut(e);
                      return (
                        n.targetChanges.forEach(function (n, r) {
                          if (n.resumeToken.approximateByteSize() > 0) {
                            var i = t.$r.get(r);
                            i &&
                              t.$r.set(r, i.withResumeToken(n.resumeToken, e));
                          }
                        }),
                        n.targetMismatches.forEach(function (e) {
                          var n = t.$r.get(e);
                          if (n) {
                            t.$r.set(
                              e,
                              n.withResumeToken(
                                Ho.EMPTY_BYTE_STRING,
                                n.snapshotVersion
                              )
                            ),
                              Ch(t, e);
                            var r = new kc(n.target, e, 1, n.sequenceNumber);
                            Dh(t, r);
                          }
                        }),
                        t.remoteSyncer.applyRemoteEvent(n)
                      );
                    })(t, n),
                  ]
                : [3, 10]
            );
          case 9:
            s.sent(), (s.label = 10);
          case 10:
            return [3, 13];
          case 11:
            return (
              So("RemoteStore", "Failed to raise snapshot:", (o = s.sent())),
              [4, Vh(t, o)]
            );
          case 12:
            return s.sent(), [3, 13];
          case 13:
            return [2];
        }
      });
    });
  }
  function Vh(t, e, n) {
    return lt(this, void 0, void 0, function () {
      var r = this;
      return ht(this, function (i) {
        switch (i.label) {
          case 0:
            if (!mc(e)) throw e;
            return t.Or.add(1), [4, Ah(t)];
          case 1:
            return (
              i.sent(),
              t.Br.set("Offline"),
              n ||
                (n = function () {
                  return Ll(t.localStore);
                }),
              t.asyncQueue.enqueueRetryable(function () {
                return lt(r, void 0, void 0, function () {
                  return ht(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return (
                          So("RemoteStore", "Retrying IndexedDB access"),
                          [4, n()]
                        );
                      case 1:
                        return e.sent(), t.Or.delete(1), [4, Sh(t)];
                      case 2:
                        return e.sent(), [2];
                    }
                  });
                });
              }),
              [2]
            );
        }
      });
    });
  }
  function qh(t, e) {
    return e().catch(function (n) {
      return Vh(t, n, e);
    });
  }
  function Uh(t) {
    return lt(this, void 0, void 0, function () {
      var e, n, r, i, o;
      return ht(this, function (s) {
        switch (s.label) {
          case 0:
            (e = xo(t)),
              (n = Wh(e)),
              (r = e.kr.length > 0 ? e.kr[e.kr.length - 1].batchId : -1),
              (s.label = 1);
          case 1:
            if (
              !(function (t) {
                return Oh(t) && t.kr.length < 10;
              })(e)
            )
              return [3, 7];
            s.label = 2;
          case 2:
            return s.trys.push([2, 4, , 6]), [4, Ml(e.localStore, r)];
          case 3:
            return null === (i = s.sent())
              ? (0 === e.kr.length && n.ir(), [3, 7])
              : ((r = i.batchId),
                (function (t, e) {
                  t.kr.push(e);
                  var n = Wh(t);
                  n.er() && n.pr && n.Er(e.mutations);
                })(e, i),
                [3, 6]);
          case 4:
            return (o = s.sent()), [4, Vh(e, o)];
          case 5:
            return s.sent(), [3, 6];
          case 6:
            return [3, 1];
          case 7:
            return jh(e) && Bh(e), [2];
        }
      });
    });
  }
  function jh(t) {
    return Oh(t) && !Wh(t).tr() && t.kr.length > 0;
  }
  function Bh(t) {
    Wh(t).start();
  }
  function zh(t) {
    return lt(this, void 0, void 0, function () {
      return ht(this, function (e) {
        return Wh(t).Ar(), [2];
      });
    });
  }
  function Kh(t) {
    return lt(this, void 0, void 0, function () {
      var e, n, r, i;
      return ht(this, function (o) {
        for (e = Wh(t), n = 0, r = t.kr; n < r.length; n++)
          (i = r[n]), e.Er(i.mutations);
        return [2];
      });
    });
  }
  function $h(t, e, n) {
    return lt(this, void 0, void 0, function () {
      var r, i;
      return ht(this, function (o) {
        switch (o.label) {
          case 0:
            return (
              (r = t.kr.shift()),
              (i = Ac.from(r, e, n)),
              [
                4,
                qh(t, function () {
                  return t.remoteSyncer.applySuccessfulWrite(i);
                }),
              ]
            );
          case 1:
            return o.sent(), [4, Uh(t)];
          case 2:
            return o.sent(), [2];
        }
      });
    });
  }
  function Gh(t, e) {
    return lt(this, void 0, void 0, function () {
      return ht(this, function (n) {
        switch (n.label) {
          case 0:
            return e && Wh(t).pr
              ? [
                  4,
                  (function (t, e) {
                    return lt(this, void 0, void 0, function () {
                      var n, r;
                      return ht(this, function (i) {
                        switch (i.label) {
                          case 0:
                            return Ua((r = e.code)) && r !== Eo.ABORTED
                              ? ((n = t.kr.shift()),
                                Wh(t).sr(),
                                [
                                  4,
                                  qh(t, function () {
                                    return t.remoteSyncer.rejectFailedWrite(
                                      n.batchId,
                                      e
                                    );
                                  }),
                                ])
                              : [3, 3];
                          case 1:
                            return i.sent(), [4, Uh(t)];
                          case 2:
                            i.sent(), (i.label = 3);
                          case 3:
                            return [2];
                        }
                      });
                    });
                  })(t, e),
                ]
              : [3, 2];
          case 1:
            n.sent(), (n.label = 2);
          case 2:
            return jh(t) && Bh(t), [2];
        }
      });
    });
  }
  function Hh(t, e) {
    return lt(this, void 0, void 0, function () {
      var n;
      return ht(this, function (r) {
        switch (r.label) {
          case 0:
            return (n = xo(t)), e ? (n.Or.delete(2), [4, Sh(n)]) : [3, 2];
          case 1:
            return r.sent(), [3, 5];
          case 2:
            return e ? [3, 4] : (n.Or.add(2), [4, Ah(n)]);
          case 3:
            r.sent(), n.Br.set("Unknown"), (r.label = 4);
          case 4:
            r.label = 5;
          case 5:
            return [2];
        }
      });
    });
  }
  function Qh(t) {
    var e = this;
    return (
      t.Ur ||
        ((t.Ur = (function (t, e, n) {
          var r = xo(t);
          return r.br(), new wh(e, r.Hi, r.credentials, r.R, n);
        })(t.datastore, t.asyncQueue, {
          Ii: Ph.bind(null, t),
          Ri: Mh.bind(null, t),
          _r: Fh.bind(null, t),
        })),
        t.Mr.push(function (n) {
          return lt(e, void 0, void 0, function () {
            return ht(this, function (e) {
              switch (e.label) {
                case 0:
                  return n
                    ? (t.Ur.sr(), Rh(t) ? xh(t) : t.Br.set("Unknown"), [3, 3])
                    : [3, 1];
                case 1:
                  return [4, t.Ur.stop()];
                case 2:
                  e.sent(), Lh(t), (e.label = 3);
                case 3:
                  return [2];
              }
            });
          });
        })),
      t.Ur
    );
  }
  function Wh(t) {
    var e = this;
    return (
      t.Kr ||
        ((t.Kr = (function (t, e, n) {
          var r = xo(t);
          return r.br(), new Eh(e, r.Hi, r.credentials, r.R, n);
        })(t.datastore, t.asyncQueue, {
          Ii: zh.bind(null, t),
          Ri: Gh.bind(null, t),
          Ir: Kh.bind(null, t),
          Tr: $h.bind(null, t),
        })),
        t.Mr.push(function (n) {
          return lt(e, void 0, void 0, function () {
            return ht(this, function (e) {
              switch (e.label) {
                case 0:
                  return n ? (t.Kr.sr(), [4, Uh(t)]) : [3, 2];
                case 1:
                  return e.sent(), [3, 4];
                case 2:
                  return [4, t.Kr.stop()];
                case 3:
                  e.sent(),
                    t.kr.length > 0 &&
                      (So(
                        "RemoteStore",
                        "Stopping write stream with " +
                          t.kr.length +
                          " pending writes"
                      ),
                      (t.kr = [])),
                    (e.label = 4);
                case 4:
                  return [2];
              }
            });
          });
        })),
      t.Kr
    );
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
  }
  var Yh = (function () {
    function t(t, e, n, r, i) {
      (this.asyncQueue = t),
        (this.timerId = e),
        (this.targetTimeMs = n),
        (this.op = r),
        (this.removalCallback = i),
        (this.deferred = new fc()),
        (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
        this.deferred.promise.catch(function (t) {});
    }
    return (
      (t.createAndSchedule = function (e, n, r, i, o) {
        var s = new t(e, n, Date.now() + r, i, o);
        return s.start(r), s;
      }),
      (t.prototype.start = function (t) {
        var e = this;
        this.timerHandle = setTimeout(function () {
          return e.handleDelayElapsed();
        }, t);
      }),
      (t.prototype.skipDelay = function () {
        return this.handleDelayElapsed();
      }),
      (t.prototype.cancel = function (t) {
        null !== this.timerHandle &&
          (this.clearTimeout(),
          this.deferred.reject(
            new Io(Eo.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))
          ));
      }),
      (t.prototype.handleDelayElapsed = function () {
        var t = this;
        this.asyncQueue.enqueueAndForget(function () {
          return null !== t.timerHandle
            ? (t.clearTimeout(),
              t.op().then(function (e) {
                return t.deferred.resolve(e);
              }))
            : Promise.resolve();
        });
      }),
      (t.prototype.clearTimeout = function () {
        null !== this.timerHandle &&
          (this.removalCallback(this),
          clearTimeout(this.timerHandle),
          (this.timerHandle = null));
      }),
      t
    );
  })();
  function Xh(t, e) {
    if ((Ao("AsyncQueue", e + ": " + t), mc(t)))
      return new Io(Eo.UNAVAILABLE, e + ": " + t);
    throw t;
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Jh = (function () {
      function t(t) {
        (this.comparator = t
          ? function (e, n) {
              return t(e, n) || is.comparator(e.key, n.key);
            }
          : function (t, e) {
              return is.comparator(t.key, e.key);
            }),
          (this.keyedMap = Ya()),
          (this.sortedSet = new Ba(this.comparator));
      }
      return (
        (t.emptySet = function (e) {
          return new t(e.comparator);
        }),
        (t.prototype.has = function (t) {
          return null != this.keyedMap.get(t);
        }),
        (t.prototype.get = function (t) {
          return this.keyedMap.get(t);
        }),
        (t.prototype.first = function () {
          return this.sortedSet.minKey();
        }),
        (t.prototype.last = function () {
          return this.sortedSet.maxKey();
        }),
        (t.prototype.isEmpty = function () {
          return this.sortedSet.isEmpty();
        }),
        (t.prototype.indexOf = function (t) {
          var e = this.keyedMap.get(t);
          return e ? this.sortedSet.indexOf(e) : -1;
        }),
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.sortedSet.size;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.forEach = function (t) {
          this.sortedSet.inorderTraversal(function (e, n) {
            return t(e), !1;
          });
        }),
        (t.prototype.add = function (t) {
          var e = this.delete(t.key);
          return e.copy(
            e.keyedMap.insert(t.key, t),
            e.sortedSet.insert(t, null)
          );
        }),
        (t.prototype.delete = function (t) {
          var e = this.get(t);
          return e
            ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e))
            : this;
        }),
        (t.prototype.isEqual = function (e) {
          if (!(e instanceof t)) return !1;
          if (this.size !== e.size) return !1;
          for (
            var n = this.sortedSet.getIterator(), r = e.sortedSet.getIterator();
            n.hasNext();

          ) {
            var i = n.getNext().key,
              o = r.getNext().key;
            if (!i.isEqual(o)) return !1;
          }
          return !0;
        }),
        (t.prototype.toString = function () {
          var t = [];
          return (
            this.forEach(function (e) {
              t.push(e.toString());
            }),
            0 === t.length
              ? "DocumentSet ()"
              : "DocumentSet (\n  " + t.join("  \n") + "\n)"
          );
        }),
        (t.prototype.copy = function (e, n) {
          var r = new t();
          return (
            (r.comparator = this.comparator),
            (r.keyedMap = e),
            (r.sortedSet = n),
            r
          );
        }),
        t
      );
    })(),
    Zh = (function () {
      function t() {
        this.Qr = new Ba(is.comparator);
      }
      return (
        (t.prototype.track = function (t) {
          var e = t.doc.key,
            n = this.Qr.get(e);
          n
            ? 0 !== t.type && 3 === n.type
              ? (this.Qr = this.Qr.insert(e, t))
              : 3 === t.type && 1 !== n.type
              ? (this.Qr = this.Qr.insert(e, { type: n.type, doc: t.doc }))
              : 2 === t.type && 2 === n.type
              ? (this.Qr = this.Qr.insert(e, { type: 2, doc: t.doc }))
              : 2 === t.type && 0 === n.type
              ? (this.Qr = this.Qr.insert(e, { type: 0, doc: t.doc }))
              : 1 === t.type && 0 === n.type
              ? (this.Qr = this.Qr.remove(e))
              : 1 === t.type && 2 === n.type
              ? (this.Qr = this.Qr.insert(e, { type: 1, doc: n.doc }))
              : 0 === t.type && 1 === n.type
              ? (this.Qr = this.Qr.insert(e, { type: 2, doc: t.doc }))
              : Do()
            : (this.Qr = this.Qr.insert(e, t));
        }),
        (t.prototype.jr = function () {
          var t = [];
          return (
            this.Qr.inorderTraversal(function (e, n) {
              t.push(n);
            }),
            t
          );
        }),
        t
      );
    })(),
    tf = (function () {
      function t(t, e, n, r, i, o, s, a) {
        (this.query = t),
          (this.docs = e),
          (this.oldDocs = n),
          (this.docChanges = r),
          (this.mutatedKeys = i),
          (this.fromCache = o),
          (this.syncStateChanged = s),
          (this.excludesMetadataChanges = a);
      }
      return (
        (t.fromInitialDocuments = function (e, n, r, i) {
          var o = [];
          return (
            n.forEach(function (t) {
              o.push({ type: 0, doc: t });
            }),
            new t(e, n, Jh.emptySet(n), o, r, i, !0, !1)
          );
        }),
        Object.defineProperty(t.prototype, "hasPendingWrites", {
          get: function () {
            return !this.mutatedKeys.isEmpty();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.isEqual = function (t) {
          if (
            !(
              this.fromCache === t.fromCache &&
              this.syncStateChanged === t.syncStateChanged &&
              this.mutatedKeys.isEqual(t.mutatedKeys) &&
              Zs(this.query, t.query) &&
              this.docs.isEqual(t.docs) &&
              this.oldDocs.isEqual(t.oldDocs)
            )
          )
            return !1;
          var e = this.docChanges,
            n = t.docChanges;
          if (e.length !== n.length) return !1;
          for (var r = 0; r < e.length; r++)
            if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc))
              return !1;
          return !0;
        }),
        t
      );
    })(),
    ef = function () {
      (this.Wr = void 0), (this.listeners = []);
    },
    nf = function () {
      (this.queries = new dl(function (t) {
        return ta(t);
      }, Zs)),
        (this.onlineState = "Unknown"),
        (this.Gr = new Set());
    };
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function rf(t, e) {
    return lt(this, void 0, void 0, function () {
      var n, r, i, o, s, a, u;
      return ht(this, function (c) {
        switch (c.label) {
          case 0:
            if (
              ((n = xo(t)),
              (r = e.query),
              (i = !1),
              (o = n.queries.get(r)) || ((i = !0), (o = new ef())),
              !i)
            )
              return [3, 4];
            c.label = 1;
          case 1:
            return c.trys.push([1, 3, , 4]), (s = o), [4, n.onListen(r)];
          case 2:
            return (s.Wr = c.sent()), [3, 4];
          case 3:
            return (
              (a = c.sent()),
              (u = Xh(
                a,
                "Initialization of query '" + ea(e.query) + "' failed"
              )),
              [2, void e.onError(u)]
            );
          case 4:
            return (
              n.queries.set(r, o),
              o.listeners.push(e),
              e.zr(n.onlineState),
              o.Wr && e.Hr(o.Wr) && uf(n),
              [2]
            );
        }
      });
    });
  }
  function of(t, e) {
    return lt(this, void 0, void 0, function () {
      var n, r, i, o, s;
      return ht(this, function (a) {
        return (
          (n = xo(t)),
          (r = e.query),
          (i = !1),
          (o = n.queries.get(r)) &&
            (s = o.listeners.indexOf(e)) >= 0 &&
            (o.listeners.splice(s, 1), (i = 0 === o.listeners.length)),
          i ? [2, (n.queries.delete(r), n.onUnlisten(r))] : [2]
        );
      });
    });
  }
  function sf(t, e) {
    for (var n = xo(t), r = !1, i = 0, o = e; i < o.length; i++) {
      var s = o[i],
        a = s.query,
        u = n.queries.get(a);
      if (u) {
        for (var c = 0, l = u.listeners; c < l.length; c++)
          l[c].Hr(s) && (r = !0);
        u.Wr = s;
      }
    }
    r && uf(n);
  }
  function af(t, e, n) {
    var r = xo(t),
      i = r.queries.get(e);
    if (i) for (var o = 0, s = i.listeners; o < s.length; o++) s[o].onError(n);
    r.queries.delete(e);
  }
  function uf(t) {
    t.Gr.forEach(function (t) {
      t.next();
    });
  }
  var cf = (function () {
      function t(t, e, n) {
        (this.query = t),
          (this.Jr = e),
          (this.Yr = !1),
          (this.Xr = null),
          (this.onlineState = "Unknown"),
          (this.options = n || {});
      }
      return (
        (t.prototype.Hr = function (t) {
          if (!this.options.includeMetadataChanges) {
            for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
              var i = r[n];
              3 !== i.type && e.push(i);
            }
            t = new tf(
              t.query,
              t.docs,
              t.oldDocs,
              e,
              t.mutatedKeys,
              t.fromCache,
              t.syncStateChanged,
              !0
            );
          }
          var o = !1;
          return (
            this.Yr
              ? this.Zr(t) && (this.Jr.next(t), (o = !0))
              : this.eo(t, this.onlineState) && (this.no(t), (o = !0)),
            (this.Xr = t),
            o
          );
        }),
        (t.prototype.onError = function (t) {
          this.Jr.error(t);
        }),
        (t.prototype.zr = function (t) {
          this.onlineState = t;
          var e = !1;
          return (
            this.Xr &&
              !this.Yr &&
              this.eo(this.Xr, t) &&
              (this.no(this.Xr), (e = !0)),
            e
          );
        }),
        (t.prototype.eo = function (t, e) {
          if (!t.fromCache) return !0;
          var n = "Offline" !== e;
          return !(
            (this.options.so && n) ||
            (t.docs.isEmpty() && "Offline" !== e)
          );
        }),
        (t.prototype.Zr = function (t) {
          if (t.docChanges.length > 0) return !0;
          var e = this.Xr && this.Xr.hasPendingWrites !== t.hasPendingWrites;
          return (
            !(!t.syncStateChanged && !e) &&
            !0 === this.options.includeMetadataChanges
          );
        }),
        (t.prototype.no = function (t) {
          (t = tf.fromInitialDocuments(
            t.query,
            t.docs,
            t.mutatedKeys,
            t.fromCache
          )),
            (this.Yr = !0),
            this.Jr.next(t);
        }),
        t
      );
    })(),
    lf = function (t) {
      this.key = t;
    },
    hf = function (t) {
      this.key = t;
    },
    ff = (function () {
      function t(t, e) {
        (this.query = t),
          (this.uo = e),
          (this.ao = null),
          (this.current = !1),
          (this.ho = Za()),
          (this.mutatedKeys = Za()),
          (this.lo = ra(t)),
          (this.fo = new Jh(this.lo));
      }
      return (
        Object.defineProperty(t.prototype, "wo", {
          get: function () {
            return this.uo;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype._o = function (t, e) {
          var n = this,
            r = e ? e.mo : new Zh(),
            i = e ? e.fo : this.fo,
            o = e ? e.mutatedKeys : this.mutatedKeys,
            s = i,
            a = !1,
            u = $s(this.query) && i.size === this.query.limit ? i.last() : null,
            c =
              Gs(this.query) && i.size === this.query.limit ? i.first() : null;
          if (
            (t.inorderTraversal(function (t, e) {
              var l = i.get(t),
                h = na(n.query, e) ? e : null,
                f = !!l && n.mutatedKeys.has(l.key),
                d =
                  !!h &&
                  (h.hasLocalMutations ||
                    (n.mutatedKeys.has(h.key) && h.hasCommittedMutations)),
                p = !1;
              l && h
                ? l.data.isEqual(h.data)
                  ? f !== d && (r.track({ type: 3, doc: h }), (p = !0))
                  : n.yo(l, h) ||
                    (r.track({ type: 2, doc: h }),
                    (p = !0),
                    ((u && n.lo(h, u) > 0) || (c && n.lo(h, c) < 0)) &&
                      (a = !0))
                : !l && h
                ? (r.track({ type: 0, doc: h }), (p = !0))
                : l &&
                  !h &&
                  (r.track({ type: 1, doc: l }),
                  (p = !0),
                  (u || c) && (a = !0)),
                p &&
                  (h
                    ? ((s = s.add(h)), (o = d ? o.add(t) : o.delete(t)))
                    : ((s = s.delete(t)), (o = o.delete(t))));
            }),
            $s(this.query) || Gs(this.query))
          )
            for (; s.size > this.query.limit; ) {
              var l = $s(this.query) ? s.last() : s.first();
              (s = s.delete(l.key)),
                (o = o.delete(l.key)),
                r.track({ type: 1, doc: l });
            }
          return { fo: s, mo: r, Nn: a, mutatedKeys: o };
        }),
        (t.prototype.yo = function (t, e) {
          return (
            t.hasLocalMutations &&
            e.hasCommittedMutations &&
            !e.hasLocalMutations
          );
        }),
        (t.prototype.applyChanges = function (t, e, n) {
          var r = this,
            i = this.fo;
          (this.fo = t.fo), (this.mutatedKeys = t.mutatedKeys);
          var o = t.mo.jr();
          o.sort(function (t, e) {
            return (
              (function (t, e) {
                var n = function (t) {
                  switch (t) {
                    case 0:
                      return 1;
                    case 2:
                    case 3:
                      return 2;
                    case 1:
                      return 0;
                    default:
                      return Do();
                  }
                };
                return n(t) - n(e);
              })(t.type, e.type) || r.lo(t.doc, e.doc)
            );
          }),
            this.po(n);
          var s = e ? this.Eo() : [],
            a = 0 === this.ho.size && this.current ? 1 : 0,
            u = a !== this.ao;
          return (
            (this.ao = a),
            0 !== o.length || u
              ? {
                  snapshot: new tf(
                    this.query,
                    t.fo,
                    i,
                    o,
                    t.mutatedKeys,
                    0 === a,
                    u,
                    !1
                  ),
                  To: s,
                }
              : { To: s }
          );
        }),
        (t.prototype.zr = function (t) {
          return this.current && "Offline" === t
            ? ((this.current = !1),
              this.applyChanges(
                {
                  fo: this.fo,
                  mo: new Zh(),
                  mutatedKeys: this.mutatedKeys,
                  Nn: !1,
                },
                !1
              ))
            : { To: [] };
        }),
        (t.prototype.Io = function (t) {
          return (
            !this.uo.has(t) &&
            !!this.fo.has(t) &&
            !this.fo.get(t).hasLocalMutations
          );
        }),
        (t.prototype.po = function (t) {
          var e = this;
          t &&
            (t.addedDocuments.forEach(function (t) {
              return (e.uo = e.uo.add(t));
            }),
            t.modifiedDocuments.forEach(function (t) {}),
            t.removedDocuments.forEach(function (t) {
              return (e.uo = e.uo.delete(t));
            }),
            (this.current = t.current));
        }),
        (t.prototype.Eo = function () {
          var t = this;
          if (!this.current) return [];
          var e = this.ho;
          (this.ho = Za()),
            this.fo.forEach(function (e) {
              t.Io(e.key) && (t.ho = t.ho.add(e.key));
            });
          var n = [];
          return (
            e.forEach(function (e) {
              t.ho.has(e) || n.push(new hf(e));
            }),
            this.ho.forEach(function (t) {
              e.has(t) || n.push(new lf(t));
            }),
            n
          );
        }),
        (t.prototype.Ao = function (t) {
          (this.uo = t.Bn), (this.ho = Za());
          var e = this._o(t.documents);
          return this.applyChanges(e, !0);
        }),
        (t.prototype.Ro = function () {
          return tf.fromInitialDocuments(
            this.query,
            this.fo,
            this.mutatedKeys,
            0 === this.ao
          );
        }),
        t
      );
    })(),
    df = function (t, e, n) {
      (this.query = t), (this.targetId = e), (this.view = n);
    },
    pf = function (t) {
      (this.key = t), (this.bo = !1);
    },
    vf = (function () {
      function t(t, e, n, r, i, o) {
        (this.localStore = t),
          (this.remoteStore = e),
          (this.eventManager = n),
          (this.sharedClientState = r),
          (this.currentUser = i),
          (this.maxConcurrentLimboResolutions = o),
          (this.vo = {}),
          (this.Po = new dl(function (t) {
            return ta(t);
          }, Zs)),
          (this.Vo = new Map()),
          (this.So = new Set()),
          (this.Do = new Ba(is.comparator)),
          (this.Co = new Map()),
          (this.No = new Kl()),
          (this.xo = {}),
          (this.Fo = new Map()),
          (this.ko = el.Yt()),
          (this.onlineState = "Unknown"),
          (this.$o = void 0);
      }
      return (
        Object.defineProperty(t.prototype, "isPrimaryClient", {
          get: function () {
            return !0 === this.$o;
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      );
    })();
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function gf(t, e) {
    return lt(this, void 0, void 0, function () {
      var n, r, i, o, s, a;
      return ht(this, function (u) {
        switch (u.label) {
          case 0:
            return (
              (n = $f(t)),
              (o = n.Po.get(e))
                ? ((r = o.targetId),
                  n.sharedClientState.addLocalQueryTarget(r),
                  (i = o.view.Ro()),
                  [3, 4])
                : [3, 1]
            );
          case 1:
            return [4, Fl(n.localStore, Xs(e))];
          case 2:
            return (
              (s = u.sent()),
              (a = n.sharedClientState.addLocalQueryTarget(s.targetId)),
              (r = s.targetId),
              [4, yf(n, e, r, "current" === a)]
            );
          case 3:
            (i = u.sent()),
              n.isPrimaryClient && kh(n.remoteStore, s),
              (u.label = 4);
          case 4:
            return [2, i];
        }
      });
    });
  }
  function yf(t, e, n, r) {
    return lt(this, void 0, void 0, function () {
      var i, o, s, a, u, c;
      return ht(this, function (l) {
        switch (l.label) {
          case 0:
            return (
              (t.Oo = function (e, n, r) {
                return (function (t, e, n, r) {
                  return lt(this, void 0, void 0, function () {
                    var i, o, s;
                    return ht(this, function (a) {
                      switch (a.label) {
                        case 0:
                          return (i = e.view._o(n)).Nn
                            ? [
                                4,
                                ql(t.localStore, e.query, !1).then(function (
                                  t
                                ) {
                                  var n = t.documents;
                                  return e.view._o(n, i);
                                }),
                              ]
                            : [3, 2];
                        case 1:
                          (i = a.sent()), (a.label = 2);
                        case 2:
                          return (
                            (o = r && r.targetChanges.get(e.targetId)),
                            (s = e.view.applyChanges(i, t.isPrimaryClient, o)),
                            [2, (Cf(t, e.targetId, s.To), s.snapshot)]
                          );
                      }
                    });
                  });
                })(t, e, n, r);
              }),
              [4, ql(t.localStore, e, !0)]
            );
          case 1:
            return (
              (i = l.sent()),
              (o = new ff(e, i.Bn)),
              (s = o._o(i.documents)),
              (a = ru.createSynthesizedTargetChangeForCurrentChange(
                n,
                r && "Offline" !== t.onlineState
              )),
              (u = o.applyChanges(s, t.isPrimaryClient, a)),
              Cf(t, n, u.To),
              (c = new df(e, n, o)),
              [
                2,
                (t.Po.set(e, c),
                t.Vo.has(n) ? t.Vo.get(n).push(e) : t.Vo.set(n, [e]),
                u.snapshot),
              ]
            );
        }
      });
    });
  }
  function mf(t, e) {
    return lt(this, void 0, void 0, function () {
      var n, r, i;
      return ht(this, function (o) {
        switch (o.label) {
          case 0:
            return (
              (n = xo(t)),
              (r = n.Po.get(e)),
              (i = n.Vo.get(r.targetId)).length > 1
                ? [
                    2,
                    (n.Vo.set(
                      r.targetId,
                      i.filter(function (t) {
                        return !Zs(t, e);
                      })
                    ),
                    void n.Po.delete(e)),
                  ]
                : n.isPrimaryClient
                ? (n.sharedClientState.removeLocalQueryTarget(r.targetId),
                  n.sharedClientState.isActiveQueryTarget(r.targetId)
                    ? [3, 2]
                    : [
                        4,
                        Vl(n.localStore, r.targetId, !1)
                          .then(function () {
                            n.sharedClientState.clearQueryState(r.targetId),
                              Nh(n.remoteStore, r.targetId),
                              Nf(n, r.targetId);
                          })
                          .catch(sl),
                      ])
                : [3, 3]
            );
          case 1:
            o.sent(), (o.label = 2);
          case 2:
            return [3, 5];
          case 3:
            return Nf(n, r.targetId), [4, Vl(n.localStore, r.targetId, !0)];
          case 4:
            o.sent(), (o.label = 5);
          case 5:
            return [2];
        }
      });
    });
  }
  function bf(t, e, n) {
    return lt(this, void 0, void 0, function () {
      var r, i, o, s;
      return ht(this, function (a) {
        switch (a.label) {
          case 0:
            (r = Gf(t)), (a.label = 1);
          case 1:
            return (
              a.trys.push([1, 5, , 6]),
              [
                4,
                (function (t, e) {
                  var n,
                    r = xo(t),
                    i = Fo.now(),
                    o = e.reduce(function (t, e) {
                      return t.add(e.key);
                    }, Za());
                  return r.persistence
                    .runTransaction(
                      "Locally write mutations",
                      "readwrite",
                      function (t) {
                        return r.Mn.pn(t, o).next(function (o) {
                          n = o;
                          for (var s = [], a = 0, u = e; a < u.length; a++) {
                            var c = u[a],
                              l = ka(c, n.get(c.key));
                            null != l &&
                              s.push(
                                new xa(
                                  c.key,
                                  l,
                                  ws(l.value.mapValue),
                                  Ia.exists(!0)
                                )
                              );
                          }
                          return r._n.addMutationBatch(t, i, s, e);
                        });
                      }
                    )
                    .then(function (t) {
                      return (
                        t.applyToLocalDocumentSet(n),
                        { batchId: t.batchId, changes: n }
                      );
                    });
                })(r.localStore, e),
              ]
            );
          case 2:
            return (
              (i = a.sent()),
              r.sharedClientState.addPendingMutation(i.batchId),
              (function (t, e, n) {
                var r = t.xo[t.currentUser.toKey()];
                r || (r = new Ba(Lo)),
                  (r = r.insert(e, n)),
                  (t.xo[t.currentUser.toKey()] = r);
              })(r, i.batchId, n),
              [4, Of(r, i.changes)]
            );
          case 3:
            return a.sent(), [4, Uh(r.remoteStore)];
          case 4:
            return a.sent(), [3, 6];
          case 5:
            return (
              (o = a.sent()),
              (s = Xh(o, "Failed to persist write")),
              n.reject(s),
              [3, 6]
            );
          case 6:
            return [2];
        }
      });
    });
  }
  function wf(t, e) {
    return lt(this, void 0, void 0, function () {
      var n, r;
      return ht(this, function (i) {
        switch (i.label) {
          case 0:
            (n = xo(t)), (i.label = 1);
          case 1:
            return i.trys.push([1, 4, , 6]), [4, Pl(n.localStore, e)];
          case 2:
            return (
              (r = i.sent()),
              e.targetChanges.forEach(function (t, e) {
                var r = n.Co.get(e);
                r &&
                  (Co(
                    t.addedDocuments.size +
                      t.modifiedDocuments.size +
                      t.removedDocuments.size <=
                      1
                  ),
                  t.addedDocuments.size > 0
                    ? (r.bo = !0)
                    : t.modifiedDocuments.size > 0
                    ? Co(r.bo)
                    : t.removedDocuments.size > 0 && (Co(r.bo), (r.bo = !1)));
              }),
              [4, Of(n, r, e)]
            );
          case 3:
            return i.sent(), [3, 6];
          case 4:
            return [4, sl(i.sent())];
          case 5:
            return i.sent(), [3, 6];
          case 6:
            return [2];
        }
      });
    });
  }
  function Ef(t, e, n) {
    var r = xo(t);
    if ((r.isPrimaryClient && 0 === n) || (!r.isPrimaryClient && 1 === n)) {
      var i = [];
      r.Po.forEach(function (t, n) {
        var r = n.view.zr(e);
        r.snapshot && i.push(r.snapshot);
      }),
        (function (t, e) {
          var n = xo(t);
          n.onlineState = e;
          var r = !1;
          n.queries.forEach(function (t, n) {
            for (var i = 0, o = n.listeners; i < o.length; i++)
              o[i].zr(e) && (r = !0);
          }),
            r && uf(n);
        })(r.eventManager, e),
        i.length && r.vo._r(i),
        (r.onlineState = e),
        r.isPrimaryClient && r.sharedClientState.setOnlineState(e);
    }
  }
  function If(t, e, n) {
    return lt(this, void 0, void 0, function () {
      var r, i, o, s, a, u;
      return ht(this, function (c) {
        switch (c.label) {
          case 0:
            return (
              (r = xo(t)).sharedClientState.updateQueryState(e, "rejected", n),
              (i = r.Co.get(e)),
              (o = i && i.key)
                ? ((s = (s = new Ba(is.comparator)).insert(
                    o,
                    Es.newNoDocument(o, Vo.min())
                  )),
                  (a = Za().add(o)),
                  (u = new nu(Vo.min(), new Map(), new $a(Lo), s, a)),
                  [4, wf(r, u)])
                : [3, 2]
            );
          case 1:
            return (
              c.sent(), (r.Do = r.Do.remove(o)), r.Co.delete(e), Rf(r), [3, 4]
            );
          case 2:
            return [
              4,
              Vl(r.localStore, e, !1)
                .then(function () {
                  return Nf(r, e, n);
                })
                .catch(sl),
            ];
          case 3:
            c.sent(), (c.label = 4);
          case 4:
            return [2];
        }
      });
    });
  }
  function Tf(t, e) {
    return lt(this, void 0, void 0, function () {
      var n, r, i;
      return ht(this, function (o) {
        switch (o.label) {
          case 0:
            (n = xo(t)), (r = e.batch.batchId), (o.label = 1);
          case 1:
            return o.trys.push([1, 4, , 6]), [4, Ol(n.localStore, e)];
          case 2:
            return (
              (i = o.sent()),
              kf(n, r, null),
              Af(n, r),
              n.sharedClientState.updateMutationState(r, "acknowledged"),
              [4, Of(n, i)]
            );
          case 3:
            return o.sent(), [3, 6];
          case 4:
            return [4, sl(o.sent())];
          case 5:
            return o.sent(), [3, 6];
          case 6:
            return [2];
        }
      });
    });
  }
  function _f(t, e, n) {
    return lt(this, void 0, void 0, function () {
      var r, i;
      return ht(this, function (o) {
        switch (o.label) {
          case 0:
            (r = xo(t)), (o.label = 1);
          case 1:
            return (
              o.trys.push([1, 4, , 6]),
              [
                4,
                (function (t, e) {
                  var n = xo(t);
                  return n.persistence.runTransaction(
                    "Reject batch",
                    "readwrite-primary",
                    function (t) {
                      var r;
                      return n._n
                        .lookupMutationBatch(t, e)
                        .next(function (e) {
                          return (
                            Co(null !== e),
                            (r = e.keys()),
                            n._n.removeMutationBatch(t, e)
                          );
                        })
                        .next(function () {
                          return n._n.performConsistencyCheck(t);
                        })
                        .next(function () {
                          return n.Mn.pn(t, r);
                        });
                    }
                  );
                })(r.localStore, e),
              ]
            );
          case 2:
            return (
              (i = o.sent()),
              kf(r, e, n),
              Af(r, e),
              r.sharedClientState.updateMutationState(e, "rejected", n),
              [4, Of(r, i)]
            );
          case 3:
            return o.sent(), [3, 6];
          case 4:
            return [4, sl(o.sent())];
          case 5:
            return o.sent(), [3, 6];
          case 6:
            return [2];
        }
      });
    });
  }
  function Sf(t, e) {
    return lt(this, void 0, void 0, function () {
      var n, r, i, o, s;
      return ht(this, function (a) {
        switch (a.label) {
          case 0:
            Oh((n = xo(t)).remoteStore) ||
              So(
                "SyncEngine",
                "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."
              ),
              (a.label = 1);
          case 1:
            return (
              a.trys.push([1, 3, , 4]),
              [
                4,
                (function (t) {
                  var e = xo(t);
                  return e.persistence.runTransaction(
                    "Get highest unacknowledged batch id",
                    "readonly",
                    function (t) {
                      return e._n.getHighestUnacknowledgedBatchId(t);
                    }
                  );
                })(n.localStore),
              ]
            );
          case 2:
            return -1 === (r = a.sent())
              ? [2, void e.resolve()]
              : ((i = n.Fo.get(r) || []).push(e), n.Fo.set(r, i), [3, 4]);
          case 3:
            return (
              (o = a.sent()),
              (s = Xh(
                o,
                "Initialization of waitForPendingWrites() operation failed"
              )),
              e.reject(s),
              [3, 4]
            );
          case 4:
            return [2];
        }
      });
    });
  }
  function Af(t, e) {
    (t.Fo.get(e) || []).forEach(function (t) {
      t.resolve();
    }),
      t.Fo.delete(e);
  }
  function kf(t, e, n) {
    var r = xo(t),
      i = r.xo[r.currentUser.toKey()];
    if (i) {
      var o = i.get(e);
      o && (n ? o.reject(n) : o.resolve(), (i = i.remove(e))),
        (r.xo[r.currentUser.toKey()] = i);
    }
  }
  function Nf(t, e, n) {
    void 0 === n && (n = null), t.sharedClientState.removeLocalQueryTarget(e);
    for (var r = 0, i = t.Vo.get(e); r < i.length; r++) {
      var o = i[r];
      t.Po.delete(o), n && t.vo.Mo(o, n);
    }
    t.Vo.delete(e),
      t.isPrimaryClient &&
        t.No.Zn(e).forEach(function (e) {
          t.No.containsKey(e) || Df(t, e);
        });
  }
  function Df(t, e) {
    t.So.delete(e.path.canonicalString());
    var n = t.Do.get(e);
    null !== n &&
      (Nh(t.remoteStore, n), (t.Do = t.Do.remove(e)), t.Co.delete(n), Rf(t));
  }
  function Cf(t, e, n) {
    for (var r = 0, i = n; r < i.length; r++) {
      var o = i[r];
      o instanceof lf
        ? (t.No.addReference(o.key, e), xf(t, o))
        : o instanceof hf
        ? (So("SyncEngine", "Document no longer in limbo: " + o.key),
          t.No.removeReference(o.key, e),
          t.No.containsKey(o.key) || Df(t, o.key))
        : Do();
    }
  }
  function xf(t, e) {
    var n = e.key,
      r = n.path.canonicalString();
    t.Do.get(n) ||
      t.So.has(r) ||
      (So("SyncEngine", "New document in limbo: " + n), t.So.add(r), Rf(t));
  }
  function Rf(t) {
    for (; t.So.size > 0 && t.Do.size < t.maxConcurrentLimboResolutions; ) {
      var e = t.So.values().next().value;
      t.So.delete(e);
      var n = new is(zo.fromString(e)),
        r = t.ko.next();
      t.Co.set(r, new pf(n)),
        (t.Do = t.Do.insert(n, r)),
        kh(t.remoteStore, new kc(Xs(Ks(n.path)), r, 2, wo.o));
    }
  }
  function Of(t, e, n) {
    return lt(this, void 0, void 0, function () {
      var r, i, o, s;
      return ht(this, function (a) {
        switch (a.label) {
          case 0:
            return (
              (r = xo(t)),
              (i = []),
              (o = []),
              (s = []),
              r.Po.isEmpty()
                ? [3, 3]
                : (r.Po.forEach(function (t, a) {
                    s.push(
                      r.Oo(a, e, n).then(function (t) {
                        if (t) {
                          r.isPrimaryClient &&
                            r.sharedClientState.updateQueryState(
                              a.targetId,
                              t.fromCache ? "not-current" : "current"
                            ),
                            i.push(t);
                          var e = Nl.Pn(a.targetId, t);
                          o.push(e);
                        }
                      })
                    );
                  }),
                  [4, Promise.all(s)])
            );
          case 1:
            return (
              a.sent(),
              r.vo._r(i),
              [
                4,
                (function (t, e) {
                  return lt(this, void 0, void 0, function () {
                    var n, r, i, o, s, a, u, c, l;
                    return ht(this, function (h) {
                      switch (h.label) {
                        case 0:
                          (n = xo(t)), (h.label = 1);
                        case 1:
                          return (
                            h.trys.push([1, 3, , 4]),
                            [
                              4,
                              n.persistence.runTransaction(
                                "notifyLocalViewChanges",
                                "readwrite",
                                function (t) {
                                  return dc.forEach(e, function (e) {
                                    return dc
                                      .forEach(e.bn, function (r) {
                                        return n.persistence.referenceDelegate.addReference(
                                          t,
                                          e.targetId,
                                          r
                                        );
                                      })
                                      .next(function () {
                                        return dc.forEach(e.vn, function (r) {
                                          return n.persistence.referenceDelegate.removeReference(
                                            t,
                                            e.targetId,
                                            r
                                          );
                                        });
                                      });
                                  });
                                }
                              ),
                            ]
                          );
                        case 2:
                          return h.sent(), [3, 4];
                        case 3:
                          if (!mc((r = h.sent()))) throw r;
                          return (
                            So(
                              "LocalStore",
                              "Failed to update sequence numbers: " + r
                            ),
                            [3, 4]
                          );
                        case 4:
                          for (i = 0, o = e; i < o.length; i++)
                            (s = o[i]),
                              (a = s.targetId),
                              s.fromCache ||
                                ((u = n.Fn.get(a)),
                                (c = u.snapshotVersion),
                                (l = u.withLastLimboFreeSnapshotVersion(c)),
                                (n.Fn = n.Fn.insert(a, l)));
                          return [2];
                      }
                    });
                  });
                })(r.localStore, o),
              ]
            );
          case 2:
            a.sent(), (a.label = 3);
          case 3:
            return [2];
        }
      });
    });
  }
  function Lf(t, e) {
    return lt(this, void 0, void 0, function () {
      var n, r;
      return ht(this, function (i) {
        switch (i.label) {
          case 0:
            return (n = xo(t)).currentUser.isEqual(e)
              ? [3, 3]
              : (So("SyncEngine", "User change. New user:", e.toKey()),
                [4, Rl(n.localStore, e)]);
          case 1:
            return (
              (r = i.sent()),
              (n.currentUser = e),
              (function (t, e) {
                t.Fo.forEach(function (t) {
                  t.forEach(function (t) {
                    t.reject(
                      new Io(
                        Eo.CANCELLED,
                        "'waitForPendingWrites' promise is rejected due to a user change."
                      )
                    );
                  });
                }),
                  t.Fo.clear();
              })(n),
              n.sharedClientState.handleUserChange(
                e,
                r.removedBatchIds,
                r.addedBatchIds
              ),
              [4, Of(n, r.Ln)]
            );
          case 2:
            i.sent(), (i.label = 3);
          case 3:
            return [2];
        }
      });
    });
  }
  function Pf(t, e) {
    var n = xo(t),
      r = n.Co.get(e);
    if (r && r.bo) return Za().add(r.key);
    var i = Za(),
      o = n.Vo.get(e);
    if (!o) return i;
    for (var s = 0, a = o; s < a.length; s++) {
      var u = a[s],
        c = n.Po.get(u);
      i = i.unionWith(c.view.wo);
    }
    return i;
  }
  function Mf(t, e) {
    return lt(this, void 0, void 0, function () {
      var n, r, i;
      return ht(this, function (o) {
        switch (o.label) {
          case 0:
            return [4, ql((n = xo(t)).localStore, e.query, !0)];
          case 1:
            return (
              (r = o.sent()),
              (i = e.view.Ao(r)),
              [2, (n.isPrimaryClient && Cf(n, e.targetId, i.To), i)]
            );
        }
      });
    });
  }
  function Ff(t) {
    return lt(this, void 0, void 0, function () {
      var e;
      return ht(this, function (n) {
        return [
          2,
          jl((e = xo(t)).localStore).then(function (t) {
            return Of(e, t);
          }),
        ];
      });
    });
  }
  function Vf(t, e, n, r) {
    return lt(this, void 0, void 0, function () {
      var i, o;
      return ht(this, function (s) {
        switch (s.label) {
          case 0:
            return [
              4,
              (function (t, e) {
                var n = xo(t),
                  r = xo(n._n);
                return n.persistence.runTransaction(
                  "Lookup mutation documents",
                  "readonly",
                  function (t) {
                    return r.jt(t, e).next(function (e) {
                      return e ? n.Mn.pn(t, e) : dc.resolve(null);
                    });
                  }
                );
              })((i = xo(t)).localStore, e),
            ];
          case 1:
            return null === (o = s.sent())
              ? [3, 6]
              : "pending" !== n
              ? [3, 3]
              : [4, Uh(i.remoteStore)];
          case 2:
            return s.sent(), [3, 4];
          case 3:
            "acknowledged" === n || "rejected" === n
              ? (kf(i, e, r || null),
                Af(i, e),
                (function (t, e) {
                  xo(xo(t)._n).Gt(e);
                })(i.localStore, e))
              : Do(),
              (s.label = 4);
          case 4:
            return [4, Of(i, o)];
          case 5:
            return s.sent(), [3, 7];
          case 6:
            So("SyncEngine", "Cannot apply mutation batch with id: " + e),
              (s.label = 7);
          case 7:
            return [2];
        }
      });
    });
  }
  function qf(t, e) {
    return lt(this, void 0, void 0, function () {
      var n, r, i, o, s, a, u, c;
      return ht(this, function (l) {
        switch (l.label) {
          case 0:
            return (
              $f((n = xo(t))),
              Gf(n),
              !0 !== e || !0 === n.$o
                ? [3, 3]
                : ((r = n.sharedClientState.getAllActiveQueryTargets()),
                  [4, Uf(n, r.toArray())])
            );
          case 1:
            return (i = l.sent()), (n.$o = !0), [4, Hh(n.remoteStore, !0)];
          case 2:
            for (l.sent(), o = 0, s = i; o < s.length; o++)
              (a = s[o]), kh(n.remoteStore, a);
            return [3, 7];
          case 3:
            return !1 !== e || !1 === n.$o
              ? [3, 7]
              : ((u = []),
                (c = Promise.resolve()),
                n.Vo.forEach(function (t, e) {
                  n.sharedClientState.isLocalQueryTarget(e)
                    ? u.push(e)
                    : (c = c.then(function () {
                        return Nf(n, e), Vl(n.localStore, e, !0);
                      })),
                    Nh(n.remoteStore, e);
                }),
                [4, c]);
          case 4:
            return l.sent(), [4, Uf(n, u)];
          case 5:
            return (
              l.sent(),
              (function (t) {
                var e = xo(t);
                e.Co.forEach(function (t, n) {
                  Nh(e.remoteStore, n);
                }),
                  e.No.ts(),
                  (e.Co = new Map()),
                  (e.Do = new Ba(is.comparator));
              })(n),
              (n.$o = !1),
              [4, Hh(n.remoteStore, !1)]
            );
          case 6:
            l.sent(), (l.label = 7);
          case 7:
            return [2];
        }
      });
    });
  }
  function Uf(t, e, n) {
    return lt(this, void 0, void 0, function () {
      var n, r, i, o, s, a, u, c, l, h, f, d, p, v;
      return ht(this, function (g) {
        switch (g.label) {
          case 0:
            (n = xo(t)), (r = []), (i = []), (o = 0), (s = e), (g.label = 1);
          case 1:
            return o < s.length
              ? ((a = s[o]),
                (u = void 0),
                (c = n.Vo.get(a)) && 0 !== c.length
                  ? [4, Fl(n.localStore, Xs(c[0]))]
                  : [3, 7])
              : [3, 13];
          case 2:
            (u = g.sent()), (l = 0), (h = c), (g.label = 3);
          case 3:
            return l < h.length
              ? ((f = h[l]), (d = n.Po.get(f)), [4, Mf(n, d)])
              : [3, 6];
          case 4:
            (p = g.sent()).snapshot && i.push(p.snapshot), (g.label = 5);
          case 5:
            return l++, [3, 3];
          case 6:
            return [3, 11];
          case 7:
            return [4, Ul(n.localStore, a)];
          case 8:
            return (v = g.sent()), [4, Fl(n.localStore, v)];
          case 9:
            return (u = g.sent()), [4, yf(n, jf(v), a, !1)];
          case 10:
            g.sent(), (g.label = 11);
          case 11:
            r.push(u), (g.label = 12);
          case 12:
            return o++, [3, 1];
          case 13:
            return [2, (n.vo._r(i), r)];
        }
      });
    });
  }
  function jf(t) {
    return zs(
      t.path,
      t.collectionGroup,
      t.orderBy,
      t.filters,
      t.limit,
      "F",
      t.startAt,
      t.endAt
    );
  }
  function Bf(t) {
    var e = xo(t);
    return xo(xo(e.localStore).persistence).fn();
  }
  function zf(t, e, n, r) {
    return lt(this, void 0, void 0, function () {
      var i, o, s;
      return ht(this, function (a) {
        switch (a.label) {
          case 0:
            return (i = xo(t)).$o
              ? (So(
                  "SyncEngine",
                  "Ignoring unexpected query state notification."
                ),
                [3, 8])
              : [3, 1];
          case 1:
            if (!i.Vo.has(e)) return [3, 8];
            switch (n) {
              case "current":
              case "not-current":
                return [3, 2];
              case "rejected":
                return [3, 5];
            }
            return [3, 7];
          case 2:
            return [4, jl(i.localStore)];
          case 3:
            return (
              (o = a.sent()),
              (s = nu.createSynthesizedRemoteEventForCurrentChange(
                e,
                "current" === n
              )),
              [4, Of(i, o, s)]
            );
          case 4:
            return a.sent(), [3, 8];
          case 5:
            return [4, Vl(i.localStore, e, !0)];
          case 6:
            return a.sent(), Nf(i, e, r), [3, 8];
          case 7:
            Do(), (a.label = 8);
          case 8:
            return [2];
        }
      });
    });
  }
  function Kf(t, e, n) {
    return lt(this, void 0, void 0, function () {
      var r, i, o, s, a, u, c, l, h, f;
      return ht(this, function (d) {
        switch (d.label) {
          case 0:
            if (!(r = $f(t)).$o) return [3, 10];
            (i = 0), (o = e), (d.label = 1);
          case 1:
            return i < o.length
              ? ((s = o[i]),
                r.Vo.has(s)
                  ? (So("SyncEngine", "Adding an already active target " + s),
                    [3, 5])
                  : [4, Ul(r.localStore, s)])
              : [3, 6];
          case 2:
            return (a = d.sent()), [4, Fl(r.localStore, a)];
          case 3:
            return (u = d.sent()), [4, yf(r, jf(a), u.targetId, !1)];
          case 4:
            d.sent(), kh(r.remoteStore, u), (d.label = 5);
          case 5:
            return i++, [3, 1];
          case 6:
            (c = function (t) {
              return ht(this, function (e) {
                switch (e.label) {
                  case 0:
                    return r.Vo.has(t)
                      ? [
                          4,
                          Vl(r.localStore, t, !1)
                            .then(function () {
                              Nh(r.remoteStore, t), Nf(r, t);
                            })
                            .catch(sl),
                        ]
                      : [3, 2];
                  case 1:
                    e.sent(), (e.label = 2);
                  case 2:
                    return [2];
                }
              });
            }),
              (l = 0),
              (h = n),
              (d.label = 7);
          case 7:
            return l < h.length ? ((f = h[l]), [5, c(f)]) : [3, 10];
          case 8:
            d.sent(), (d.label = 9);
          case 9:
            return l++, [3, 7];
          case 10:
            return [2];
        }
      });
    });
  }
  function $f(t) {
    var e = xo(t);
    return (
      (e.remoteStore.remoteSyncer.applyRemoteEvent = wf.bind(null, e)),
      (e.remoteStore.remoteSyncer.getRemoteKeysForTarget = Pf.bind(null, e)),
      (e.remoteStore.remoteSyncer.rejectListen = If.bind(null, e)),
      (e.vo._r = sf.bind(null, e.eventManager)),
      (e.vo.Mo = af.bind(null, e.eventManager)),
      e
    );
  }
  function Gf(t) {
    var e = xo(t);
    return (
      (e.remoteStore.remoteSyncer.applySuccessfulWrite = Tf.bind(null, e)),
      (e.remoteStore.remoteSyncer.rejectFailedWrite = _f.bind(null, e)),
      e
    );
  }
  var Hf = (function () {
      function t() {
        this.synchronizeTabs = !1;
      }
      return (
        (t.prototype.initialize = function (t) {
          return lt(this, void 0, void 0, function () {
            return ht(this, function (e) {
              switch (e.label) {
                case 0:
                  return (
                    (this.R = yh(t.databaseInfo.databaseId)),
                    (this.sharedClientState = this.Bo(t)),
                    (this.persistence = this.qo(t)),
                    [4, this.persistence.start()]
                  );
                case 1:
                  return (
                    e.sent(),
                    (this.gcScheduler = this.Uo(t)),
                    (this.localStore = this.Ko(t)),
                    [2]
                  );
              }
            });
          });
        }),
        (t.prototype.Uo = function (t) {
          return null;
        }),
        (t.prototype.Ko = function (t) {
          return xl(this.persistence, new Dl(), t.initialUser, this.R);
        }),
        (t.prototype.qo = function (t) {
          return new Yl(Jl.bs, this.R);
        }),
        (t.prototype.Bo = function (t) {
          return new ch();
        }),
        (t.prototype.terminate = function () {
          return lt(this, void 0, void 0, function () {
            return ht(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    this.gcScheduler && this.gcScheduler.stop(),
                    [4, this.sharedClientState.shutdown()]
                  );
                case 1:
                  return t.sent(), [4, this.persistence.shutdown()];
                case 2:
                  return t.sent(), [2];
              }
            });
          });
        }),
        t
      );
    })(),
    Qf = (function (t) {
      function e(e, n, r) {
        var i = this;
        return (
          ((i = t.call(this) || this).Qo = e),
          (i.cacheSizeBytes = n),
          (i.forceOwnership = r),
          (i.synchronizeTabs = !1),
          i
        );
      }
      return (
        ut(e, t),
        (e.prototype.initialize = function (e) {
          return lt(this, void 0, void 0, function () {
            return ht(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, t.prototype.initialize.call(this, e)];
                case 1:
                  return n.sent(), [4, Bl(this.localStore)];
                case 2:
                  return n.sent(), [4, this.Qo.initialize(this, e)];
                case 3:
                  return n.sent(), [4, Gf(this.Qo.syncEngine)];
                case 4:
                  return n.sent(), [4, Uh(this.Qo.remoteStore)];
                case 5:
                  return n.sent(), [2];
              }
            });
          });
        }),
        (e.prototype.Ko = function (t) {
          return xl(this.persistence, new Dl(), t.initialUser, this.R);
        }),
        (e.prototype.Uo = function (t) {
          var e = this.persistence.referenceDelegate.garbageCollector;
          return new cl(e, t.asyncQueue);
        }),
        (e.prototype.qo = function (t) {
          var e = Al(t.databaseInfo.databaseId, t.databaseInfo.persistenceKey),
            n =
              void 0 !== this.cacheSizeBytes
                ? Hc.withCacheSize(this.cacheSizeBytes)
                : Hc.DEFAULT;
          return new Tl(
            this.synchronizeTabs,
            e,
            t.clientId,
            n,
            t.asyncQueue,
            vh(),
            gh(),
            this.R,
            this.sharedClientState,
            !!this.forceOwnership
          );
        }),
        (e.prototype.Bo = function (t) {
          return new ch();
        }),
        e
      );
    })(Hf),
    Wf = (function (t) {
      function e(e, n) {
        var r = this;
        return (
          ((r = t.call(this, e, n, !1) || this).Qo = e),
          (r.cacheSizeBytes = n),
          (r.synchronizeTabs = !0),
          r
        );
      }
      return (
        ut(e, t),
        (e.prototype.initialize = function (e) {
          return lt(this, void 0, void 0, function () {
            var n,
              r = this;
            return ht(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, t.prototype.initialize.call(this, e)];
                case 1:
                  return (
                    i.sent(),
                    (n = this.Qo.syncEngine),
                    this.sharedClientState instanceof uh
                      ? ((this.sharedClientState.syncEngine = {
                          ui: Vf.bind(null, n),
                          ai: zf.bind(null, n),
                          hi: Kf.bind(null, n),
                          fn: Bf.bind(null, n),
                          ci: Ff.bind(null, n),
                        }),
                        [4, this.sharedClientState.start()])
                      : [3, 3]
                  );
                case 2:
                  i.sent(), (i.label = 3);
                case 3:
                  return [
                    4,
                    this.persistence.He(function (t) {
                      return lt(r, void 0, void 0, function () {
                        return ht(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return [4, qf(this.Qo.syncEngine, t)];
                            case 1:
                              return (
                                e.sent(),
                                this.gcScheduler &&
                                  (t && !this.gcScheduler.started
                                    ? this.gcScheduler.start(this.localStore)
                                    : t || this.gcScheduler.stop()),
                                [2]
                              );
                          }
                        });
                      });
                    }),
                  ];
                case 4:
                  return i.sent(), [2];
              }
            });
          });
        }),
        (e.prototype.Bo = function (t) {
          var e = vh();
          if (!uh.yt(e))
            throw new Io(
              Eo.UNIMPLEMENTED,
              "IndexedDB persistence is only available on platforms that support LocalStorage."
            );
          var n = Al(t.databaseInfo.databaseId, t.databaseInfo.persistenceKey);
          return new uh(e, t.asyncQueue, n, t.clientId, t.initialUser);
        }),
        e
      );
    })(Qf),
    Yf = (function () {
      function t() {}
      return (
        (t.prototype.initialize = function (t, e) {
          return lt(this, void 0, void 0, function () {
            var n = this;
            return ht(this, function (r) {
              switch (r.label) {
                case 0:
                  return this.localStore
                    ? [3, 2]
                    : ((this.localStore = t.localStore),
                      (this.sharedClientState = t.sharedClientState),
                      (this.datastore = this.createDatastore(e)),
                      (this.remoteStore = this.createRemoteStore(e)),
                      (this.eventManager = this.createEventManager(e)),
                      (this.syncEngine = this.createSyncEngine(
                        e,
                        !t.synchronizeTabs
                      )),
                      (this.sharedClientState.onlineStateHandler = function (
                        t
                      ) {
                        return Ef(n.syncEngine, t, 1);
                      }),
                      (this.remoteStore.remoteSyncer.handleCredentialChange =
                        Lf.bind(null, this.syncEngine)),
                      [
                        4,
                        Hh(this.remoteStore, this.syncEngine.isPrimaryClient),
                      ]);
                case 1:
                  r.sent(), (r.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.createEventManager = function (t) {
          return new nf();
        }),
        (t.prototype.createDatastore = function (t) {
          var e,
            n = yh(t.databaseInfo.databaseId),
            r = ((e = t.databaseInfo), new ph(e));
          return (function (t, e, n) {
            return new Ih(t, e, n);
          })(t.credentials, r, n);
        }),
        (t.prototype.createRemoteStore = function (t) {
          var e,
            n,
            r,
            i,
            o,
            s = this;
          return (
            (e = this.localStore),
            (n = this.datastore),
            (r = t.asyncQueue),
            (i = function (t) {
              return Ef(s.syncEngine, t, 0);
            }),
            (o = hh.yt() ? new hh() : new lh()),
            new _h(e, n, r, i, o)
          );
        }),
        (t.prototype.createSyncEngine = function (t, e) {
          return (function (t, e, n, r, i, o, s) {
            var a = new vf(t, e, n, r, i, o);
            return s && (a.$o = !0), a;
          })(
            this.localStore,
            this.remoteStore,
            this.eventManager,
            this.sharedClientState,
            t.initialUser,
            t.maxConcurrentLimboResolutions,
            e
          );
        }),
        (t.prototype.terminate = function () {
          return (function (t) {
            return lt(this, void 0, void 0, function () {
              var e;
              return ht(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      (e = xo(t)),
                      So("RemoteStore", "RemoteStore shutting down."),
                      e.Or.add(5),
                      [4, Ah(e)]
                    );
                  case 1:
                    return n.sent(), e.Lr.shutdown(), e.Br.set("Unknown"), [2];
                }
              });
            });
          })(this.remoteStore);
        }),
        t
      );
    })(),
    Xf = (function () {
      function t(t) {
        (this.observer = t), (this.muted = !1);
      }
      return (
        (t.prototype.next = function (t) {
          this.observer.next && this.jo(this.observer.next, t);
        }),
        (t.prototype.error = function (t) {
          this.observer.error
            ? this.jo(this.observer.error, t)
            : console.error("Uncaught Error in snapshot listener:", t);
        }),
        (t.prototype.Wo = function () {
          this.muted = !0;
        }),
        (t.prototype.jo = function (t, e) {
          var n = this;
          this.muted ||
            setTimeout(function () {
              n.muted || t(e);
            }, 0);
        }),
        t
      );
    })(),
    Jf = (function () {
      function t(t) {
        (this.datastore = t),
          (this.readVersions = new Map()),
          (this.mutations = []),
          (this.committed = !1),
          (this.lastWriteError = null),
          (this.writtenDocs = new Set());
      }
      return (
        (t.prototype.lookup = function (t) {
          return lt(this, void 0, void 0, function () {
            var e,
              n = this;
            return ht(this, function (r) {
              switch (r.label) {
                case 0:
                  if ((this.ensureCommitNotCalled(), this.mutations.length > 0))
                    throw new Io(
                      Eo.INVALID_ARGUMENT,
                      "Firestore transactions require all reads to be executed before all writes."
                    );
                  return [
                    4,
                    (function (t, e) {
                      return lt(this, void 0, void 0, function () {
                        var n, r, i, o, s, a;
                        return ht(this, function (u) {
                          switch (u.label) {
                            case 0:
                              return (
                                (n = xo(t)),
                                (r = _u(n.R) + "/documents"),
                                (i = {
                                  documents: e.map(function (t) {
                                    return wu(n.R, t);
                                  }),
                                }),
                                [4, n.$i("BatchGetDocuments", r, i)]
                              );
                            case 1:
                              return (
                                (o = u.sent()),
                                (s = new Map()),
                                o.forEach(function (t) {
                                  var e = (function (t, e) {
                                    return "found" in e
                                      ? (function (t, e) {
                                          Co(!!e.found),
                                            e.found.name,
                                            e.found.updateTime;
                                          var n = Eu(t, e.found.name),
                                            r = yu(e.found.updateTime),
                                            i = new bs({
                                              mapValue: {
                                                fields: e.found.fields,
                                              },
                                            });
                                          return Es.newFoundDocument(n, r, i);
                                        })(t, e)
                                      : "missing" in e
                                      ? (function (t, e) {
                                          Co(!!e.missing), Co(!!e.readTime);
                                          var n = Eu(t, e.missing),
                                            r = yu(e.readTime);
                                          return Es.newNoDocument(n, r);
                                        })(t, e)
                                      : Do();
                                  })(n.R, t);
                                  s.set(e.key.toString(), e);
                                }),
                                (a = []),
                                [
                                  2,
                                  (e.forEach(function (t) {
                                    var e = s.get(t.toString());
                                    Co(!!e), a.push(e);
                                  }),
                                  a),
                                ]
                              );
                          }
                        });
                      });
                    })(this.datastore, t),
                  ];
                case 1:
                  return [
                    2,
                    ((e = r.sent()).forEach(function (t) {
                      return n.recordVersion(t);
                    }),
                    e),
                  ];
              }
            });
          });
        }),
        (t.prototype.set = function (t, e) {
          this.write(e.toMutation(t, this.precondition(t))),
            this.writtenDocs.add(t.toString());
        }),
        (t.prototype.update = function (t, e) {
          try {
            this.write(e.toMutation(t, this.preconditionForUpdate(t)));
          } catch (t) {
            this.lastWriteError = t;
          }
          this.writtenDocs.add(t.toString());
        }),
        (t.prototype.delete = function (t) {
          this.write(new Fa(t, this.precondition(t))),
            this.writtenDocs.add(t.toString());
        }),
        (t.prototype.commit = function () {
          return lt(this, void 0, void 0, function () {
            var t,
              e = this;
            return ht(this, function (n) {
              switch (n.label) {
                case 0:
                  if ((this.ensureCommitNotCalled(), this.lastWriteError))
                    throw this.lastWriteError;
                  return (
                    (t = this.readVersions),
                    this.mutations.forEach(function (e) {
                      t.delete(e.key.toString());
                    }),
                    t.forEach(function (t, n) {
                      var r = is.fromPath(n);
                      e.mutations.push(new Va(r, e.precondition(r)));
                    }),
                    [
                      4,
                      (function (t, e) {
                        return lt(this, void 0, void 0, function () {
                          var n, r, i;
                          return ht(this, function (o) {
                            switch (o.label) {
                              case 0:
                                return (
                                  (n = xo(t)),
                                  (r = _u(n.R) + "/documents"),
                                  (i = {
                                    writes: e.map(function (t) {
                                      return ku(n.R, t);
                                    }),
                                  }),
                                  [4, n.Ni("Commit", r, i)]
                                );
                              case 1:
                                return o.sent(), [2];
                            }
                          });
                        });
                      })(this.datastore, this.mutations),
                    ]
                  );
                case 1:
                  return n.sent(), (this.committed = !0), [2];
              }
            });
          });
        }),
        (t.prototype.recordVersion = function (t) {
          var e;
          if (t.isFoundDocument()) e = t.version;
          else {
            if (!t.isNoDocument()) throw Do();
            e = Vo.min();
          }
          var n = this.readVersions.get(t.key.toString());
          if (n) {
            if (!e.isEqual(n))
              throw new Io(
                Eo.ABORTED,
                "Document version changed between two reads."
              );
          } else this.readVersions.set(t.key.toString(), e);
        }),
        (t.prototype.precondition = function (t) {
          var e = this.readVersions.get(t.toString());
          return !this.writtenDocs.has(t.toString()) && e
            ? Ia.updateTime(e)
            : Ia.none();
        }),
        (t.prototype.preconditionForUpdate = function (t) {
          var e = this.readVersions.get(t.toString());
          if (!this.writtenDocs.has(t.toString()) && e) {
            if (e.isEqual(Vo.min()))
              throw new Io(
                Eo.INVALID_ARGUMENT,
                "Can't update a document that doesn't exist."
              );
            return Ia.updateTime(e);
          }
          return Ia.exists(!0);
        }),
        (t.prototype.write = function (t) {
          this.ensureCommitNotCalled(), this.mutations.push(t);
        }),
        (t.prototype.ensureCommitNotCalled = function () {}),
        t
      );
    })(),
    Zf = (function () {
      function t(t, e, n, r) {
        (this.asyncQueue = t),
          (this.datastore = e),
          (this.updateFunction = n),
          (this.deferred = r),
          (this.ec = 5),
          (this.Zi = new mh(this.asyncQueue, "transaction_retry"));
      }
      return (
        (t.prototype.run = function () {
          (this.ec -= 1), this.nc();
        }),
        (t.prototype.nc = function () {
          var t = this;
          this.Zi.ji(function () {
            return lt(t, void 0, void 0, function () {
              var t,
                e,
                n = this;
              return ht(this, function (r) {
                return (
                  (t = new Jf(this.datastore)),
                  (e = this.sc(t)) &&
                    e
                      .then(function (e) {
                        n.asyncQueue.enqueueAndForget(function () {
                          return t
                            .commit()
                            .then(function () {
                              n.deferred.resolve(e);
                            })
                            .catch(function (t) {
                              n.ic(t);
                            });
                        });
                      })
                      .catch(function (t) {
                        n.ic(t);
                      }),
                  [2]
                );
              });
            });
          });
        }),
        (t.prototype.sc = function (t) {
          try {
            var e = this.updateFunction(t);
            return !es(e) && e.catch && e.then
              ? e
              : (this.deferred.reject(
                  Error("Transaction callback must return a Promise")
                ),
                null);
          } catch (t) {
            return this.deferred.reject(t), null;
          }
        }),
        (t.prototype.ic = function (t) {
          var e = this;
          this.ec > 0 && this.rc(t)
            ? ((this.ec -= 1),
              this.asyncQueue.enqueueAndForget(function () {
                return e.nc(), Promise.resolve();
              }))
            : this.deferred.reject(t);
        }),
        (t.prototype.rc = function (t) {
          if ("FirebaseError" === t.name) {
            var e = t.code;
            return "aborted" === e || "failed-precondition" === e || !Ua(e);
          }
          return !1;
        }),
        t
      );
    })(),
    td = (function () {
      function t(t, e, n) {
        var r = this;
        (this.credentials = t),
          (this.asyncQueue = e),
          (this.databaseInfo = n),
          (this.user = Zl.UNAUTHENTICATED),
          (this.clientId = Oo.u()),
          (this.credentialListener = function () {
            return Promise.resolve();
          }),
          this.credentials.setChangeListener(e, function (t) {
            return lt(r, void 0, void 0, function () {
              return ht(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      So("FirestoreClient", "Received user=", t.uid),
                      [4, this.credentialListener(t)]
                    );
                  case 1:
                    return e.sent(), (this.user = t), [2];
                }
              });
            });
          });
      }
      return (
        (t.prototype.getConfiguration = function () {
          return lt(this, void 0, void 0, function () {
            return ht(this, function (t) {
              return [
                2,
                {
                  asyncQueue: this.asyncQueue,
                  databaseInfo: this.databaseInfo,
                  clientId: this.clientId,
                  credentials: this.credentials,
                  initialUser: this.user,
                  maxConcurrentLimboResolutions: 100,
                },
              ];
            });
          });
        }),
        (t.prototype.setCredentialChangeListener = function (t) {
          this.credentialListener = t;
        }),
        (t.prototype.verifyNotTerminated = function () {
          if (this.asyncQueue.isShuttingDown)
            throw new Io(
              Eo.FAILED_PRECONDITION,
              "The client has already been terminated."
            );
        }),
        (t.prototype.terminate = function () {
          var t = this;
          this.asyncQueue.enterRestrictedMode();
          var e = new fc();
          return (
            this.asyncQueue.enqueueAndForgetEvenWhileRestricted(function () {
              return lt(t, void 0, void 0, function () {
                var t, n;
                return ht(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        r.trys.push([0, 5, , 6]),
                        this.onlineComponents
                          ? [4, this.onlineComponents.terminate()]
                          : [3, 2]
                      );
                    case 1:
                      r.sent(), (r.label = 2);
                    case 2:
                      return this.offlineComponents
                        ? [4, this.offlineComponents.terminate()]
                        : [3, 4];
                    case 3:
                      r.sent(), (r.label = 4);
                    case 4:
                      return (
                        this.credentials.removeChangeListener(),
                        e.resolve(),
                        [3, 6]
                      );
                    case 5:
                      return (
                        (t = r.sent()),
                        (n = Xh(t, "Failed to shutdown persistence")),
                        e.reject(n),
                        [3, 6]
                      );
                    case 6:
                      return [2];
                  }
                });
              });
            }),
            e.promise
          );
        }),
        t
      );
    })();
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  function ed(t, e) {
    return lt(this, void 0, void 0, function () {
      var n,
        r,
        i = this;
      return ht(this, function (o) {
        switch (o.label) {
          case 0:
            return (
              t.asyncQueue.verifyOperationInProgress(),
              So("FirestoreClient", "Initializing OfflineComponentProvider"),
              [4, t.getConfiguration()]
            );
          case 1:
            return (n = o.sent()), [4, e.initialize(n)];
          case 2:
            return (
              o.sent(),
              (r = n.initialUser),
              t.setCredentialChangeListener(function (t) {
                return lt(i, void 0, void 0, function () {
                  return ht(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return r.isEqual(t) ? [3, 2] : [4, Rl(e.localStore, t)];
                      case 1:
                        n.sent(), (r = t), (n.label = 2);
                      case 2:
                        return [2];
                    }
                  });
                });
              }),
              e.persistence.setDatabaseDeletedListener(function () {
                return t.terminate();
              }),
              (t.offlineComponents = e),
              [2]
            );
        }
      });
    });
  }
  function nd(t, e) {
    return lt(this, void 0, void 0, function () {
      var n, r;
      return ht(this, function (i) {
        switch (i.label) {
          case 0:
            return t.asyncQueue.verifyOperationInProgress(), [4, rd(t)];
          case 1:
            return (
              (n = i.sent()),
              So("FirestoreClient", "Initializing OnlineComponentProvider"),
              [4, t.getConfiguration()]
            );
          case 2:
            return (r = i.sent()), [4, e.initialize(n, r)];
          case 3:
            return (
              i.sent(),
              t.setCredentialChangeListener(function (t) {
                return (function (t, e) {
                  return lt(this, void 0, void 0, function () {
                    var n, r;
                    return ht(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return (
                            (n = xo(t)).asyncQueue.verifyOperationInProgress(),
                            So(
                              "RemoteStore",
                              "RemoteStore received new credentials"
                            ),
                            (r = Oh(n)),
                            n.Or.add(3),
                            [4, Ah(n)]
                          );
                        case 1:
                          return (
                            i.sent(),
                            r && n.Br.set("Unknown"),
                            [4, n.remoteSyncer.handleCredentialChange(e)]
                          );
                        case 2:
                          return i.sent(), n.Or.delete(3), [4, Sh(n)];
                        case 3:
                          return i.sent(), [2];
                      }
                    });
                  });
                })(e.remoteStore, t);
              }),
              (t.onlineComponents = e),
              [2]
            );
        }
      });
    });
  }
  function rd(t) {
    return lt(this, void 0, void 0, function () {
      return ht(this, function (e) {
        switch (e.label) {
          case 0:
            return t.offlineComponents
              ? [3, 2]
              : (So(
                  "FirestoreClient",
                  "Using default OfflineComponentProvider"
                ),
                [4, ed(t, new Hf())]);
          case 1:
            e.sent(), (e.label = 2);
          case 2:
            return [2, t.offlineComponents];
        }
      });
    });
  }
  function id(t) {
    return lt(this, void 0, void 0, function () {
      return ht(this, function (e) {
        switch (e.label) {
          case 0:
            return t.onlineComponents
              ? [3, 2]
              : (So("FirestoreClient", "Using default OnlineComponentProvider"),
                [4, nd(t, new Yf())]);
          case 1:
            e.sent(), (e.label = 2);
          case 2:
            return [2, t.onlineComponents];
        }
      });
    });
  }
  function od(t) {
    return rd(t).then(function (t) {
      return t.persistence;
    });
  }
  function sd(t) {
    return rd(t).then(function (t) {
      return t.localStore;
    });
  }
  function ad(t) {
    return id(t).then(function (t) {
      return t.remoteStore;
    });
  }
  function ud(t) {
    return id(t).then(function (t) {
      return t.syncEngine;
    });
  }
  function cd(t) {
    return lt(this, void 0, void 0, function () {
      var e, n;
      return ht(this, function (r) {
        switch (r.label) {
          case 0:
            return [4, id(t)];
          case 1:
            return (
              (e = r.sent()),
              [
                2,
                (((n = e.eventManager).onListen = gf.bind(null, e.syncEngine)),
                (n.onUnlisten = mf.bind(null, e.syncEngine)),
                n),
              ]
            );
        }
      });
    });
  }
  function ld(t, e, n) {
    var r = this;
    void 0 === n && (n = {});
    var i = new fc();
    return (
      t.asyncQueue.enqueueAndForget(function () {
        return lt(r, void 0, void 0, function () {
          var r;
          return ht(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (r = function (t, e, n, r, i) {
                    var o = new Xf({
                        next: function (o) {
                          e.enqueueAndForget(function () {
                            return of(t, s);
                          });
                          var a = o.docs.has(n);
                          !a && o.fromCache
                            ? i.reject(
                                new Io(
                                  Eo.UNAVAILABLE,
                                  "Failed to get document because the client is offline."
                                )
                              )
                            : a && o.fromCache && r && "server" === r.source
                            ? i.reject(
                                new Io(
                                  Eo.UNAVAILABLE,
                                  'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
                                )
                              )
                            : i.resolve(o);
                        },
                        error: function (t) {
                          return i.reject(t);
                        },
                      }),
                      s = new cf(Ks(n.path), o, {
                        includeMetadataChanges: !0,
                        so: !0,
                      });
                    return rf(t, s);
                  }),
                  [4, cd(t)]
                );
              case 1:
                return [2, r.apply(void 0, [o.sent(), t.asyncQueue, e, n, i])];
            }
          });
        });
      }),
      i.promise
    );
  }
  function hd(t, e, n) {
    var r = this;
    void 0 === n && (n = {});
    var i = new fc();
    return (
      t.asyncQueue.enqueueAndForget(function () {
        return lt(r, void 0, void 0, function () {
          var r;
          return ht(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (r = function (t, e, n, r, i) {
                    var o = new Xf({
                        next: function (n) {
                          e.enqueueAndForget(function () {
                            return of(t, s);
                          }),
                            n.fromCache && "server" === r.source
                              ? i.reject(
                                  new Io(
                                    Eo.UNAVAILABLE,
                                    'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                                  )
                                )
                              : i.resolve(n);
                        },
                        error: function (t) {
                          return i.reject(t);
                        },
                      }),
                      s = new cf(n, o, { includeMetadataChanges: !0, so: !0 });
                    return rf(t, s);
                  }),
                  [4, cd(t)]
                );
              case 1:
                return [2, r.apply(void 0, [o.sent(), t.asyncQueue, e, n, i])];
            }
          });
        });
      }),
      i.promise
    );
  }
  var fd = function (t, e, n, r, i, o, s, a) {
      (this.databaseId = t),
        (this.appId = e),
        (this.persistenceKey = n),
        (this.host = r),
        (this.ssl = i),
        (this.forceLongPolling = o),
        (this.autoDetectLongPolling = s),
        (this.useFetchStreams = a);
    },
    dd = (function () {
      function t(t, e) {
        (this.projectId = t), (this.database = e || "(default)");
      }
      return (
        Object.defineProperty(t.prototype, "isDefaultDatabase", {
          get: function () {
            return "(default)" === this.database;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.isEqual = function (e) {
          return (
            e instanceof t &&
            e.projectId === this.projectId &&
            e.database === this.database
          );
        }),
        t
      );
    })(),
    pd = new Map(),
    vd = function (t, e) {
      (this.user = e),
        (this.type = "OAuth"),
        (this.authHeaders = {}),
        (this.authHeaders.Authorization = "Bearer " + t);
    },
    gd = (function () {
      function t() {
        this.changeListener = null;
      }
      return (
        (t.prototype.getToken = function () {
          return Promise.resolve(null);
        }),
        (t.prototype.invalidateToken = function () {}),
        (t.prototype.setChangeListener = function (t, e) {
          (this.changeListener = e),
            t.enqueueRetryable(function () {
              return e(Zl.UNAUTHENTICATED);
            });
        }),
        (t.prototype.removeChangeListener = function () {
          this.changeListener = null;
        }),
        t
      );
    })(),
    yd = (function () {
      function t(t) {
        (this.token = t), (this.changeListener = null);
      }
      return (
        (t.prototype.getToken = function () {
          return Promise.resolve(this.token);
        }),
        (t.prototype.invalidateToken = function () {}),
        (t.prototype.setChangeListener = function (t, e) {
          var n = this;
          (this.changeListener = e),
            t.enqueueRetryable(function () {
              return e(n.token.user);
            });
        }),
        (t.prototype.removeChangeListener = function () {
          this.changeListener = null;
        }),
        t
      );
    })(),
    md = (function () {
      function t(t) {
        var e = this;
        (this.currentUser = Zl.UNAUTHENTICATED),
          (this.oc = new fc()),
          (this.cc = 0),
          (this.forceRefresh = !1),
          (this.auth = null),
          (this.asyncQueue = null),
          (this.uc = function () {
            e.cc++,
              (e.currentUser = e.ac()),
              e.oc.resolve(),
              e.changeListener &&
                e.asyncQueue.enqueueRetryable(function () {
                  return e.changeListener(e.currentUser);
                });
          });
        var n = function (t) {
          So("FirebaseCredentialsProvider", "Auth detected"),
            (e.auth = t),
            e.auth.addAuthTokenListener(e.uc);
        };
        t.onInit(function (t) {
          return n(t);
        }),
          setTimeout(function () {
            if (!e.auth) {
              var r = t.getImmediate({ optional: !0 });
              r
                ? n(r)
                : (So("FirebaseCredentialsProvider", "Auth not yet detected"),
                  e.oc.resolve());
            }
          }, 0);
      }
      return (
        (t.prototype.getToken = function () {
          var t = this,
            e = this.cc,
            n = this.forceRefresh;
          return (
            (this.forceRefresh = !1),
            this.auth
              ? this.auth.getToken(n).then(function (n) {
                  return t.cc !== e
                    ? (So(
                        "FirebaseCredentialsProvider",
                        "getToken aborted due to token change."
                      ),
                      t.getToken())
                    : n
                    ? (Co("string" == typeof n.accessToken),
                      new vd(n.accessToken, t.currentUser))
                    : null;
                })
              : Promise.resolve(null)
          );
        }),
        (t.prototype.invalidateToken = function () {
          this.forceRefresh = !0;
        }),
        (t.prototype.setChangeListener = function (t, e) {
          var n = this;
          (this.asyncQueue = t),
            this.asyncQueue.enqueueRetryable(function () {
              return lt(n, void 0, void 0, function () {
                return ht(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.oc.promise];
                    case 1:
                      return t.sent(), [4, e(this.currentUser)];
                    case 2:
                      return t.sent(), (this.changeListener = e), [2];
                  }
                });
              });
            });
        }),
        (t.prototype.removeChangeListener = function () {
          this.auth && this.auth.removeAuthTokenListener(this.uc),
            (this.changeListener = function () {
              return Promise.resolve();
            });
        }),
        (t.prototype.ac = function () {
          var t = this.auth && this.auth.getUid();
          return Co(null === t || "string" == typeof t), new Zl(t);
        }),
        t
      );
    })(),
    bd = (function () {
      function t(t, e, n) {
        (this.hc = t),
          (this.lc = e),
          (this.fc = n),
          (this.type = "FirstParty"),
          (this.user = Zl.FIRST_PARTY);
      }
      return (
        Object.defineProperty(t.prototype, "authHeaders", {
          get: function () {
            var t = { "X-Goog-AuthUser": this.lc },
              e = this.hc.auth.getAuthHeaderValueForFirstParty([]);
            return (
              e && (t.Authorization = e),
              this.fc && (t["X-Goog-Iam-Authorization-Token"] = this.fc),
              t
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      );
    })(),
    wd = (function () {
      function t(t, e, n) {
        (this.hc = t), (this.lc = e), (this.fc = n);
      }
      return (
        (t.prototype.getToken = function () {
          return Promise.resolve(new bd(this.hc, this.lc, this.fc));
        }),
        (t.prototype.setChangeListener = function (t, e) {
          t.enqueueRetryable(function () {
            return e(Zl.FIRST_PARTY);
          });
        }),
        (t.prototype.removeChangeListener = function () {}),
        (t.prototype.invalidateToken = function () {}),
        t
      );
    })();
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Ed(t, e, n) {
    if (!n)
      throw new Io(
        Eo.INVALID_ARGUMENT,
        "Function " + t + "() cannot be called with an empty " + e + "."
      );
  }
  function Id(t, e) {
    if (void 0 === e) return { merge: !1 };
    if (void 0 !== e.mergeFields && void 0 !== e.merge)
      throw new Io(
        Eo.INVALID_ARGUMENT,
        "Invalid options passed to function " +
          t +
          '(): You cannot specify both "merge" and "mergeFields".'
      );
    return e;
  }
  function Td(t, e, n, r) {
    if (!0 === e && !0 === r)
      throw new Io(
        Eo.INVALID_ARGUMENT,
        t + " and " + n + " cannot be used together."
      );
  }
  function _d(t) {
    if (!is.isDocumentKey(t))
      throw new Io(
        Eo.INVALID_ARGUMENT,
        "Invalid document reference. Document references must have an even number of segments, but " +
          t +
          " has " +
          t.length +
          "."
      );
  }
  function Sd(t) {
    if (is.isDocumentKey(t))
      throw new Io(
        Eo.INVALID_ARGUMENT,
        "Invalid collection reference. Collection references must have an odd number of segments, but " +
          t +
          " has " +
          t.length +
          "."
      );
  }
  function Ad(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t)
      return (
        t.length > 20 && (t = t.substring(0, 20) + "..."), JSON.stringify(t)
      );
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
      if (t instanceof Array) return "an array";
      var e = (function (t) {
        if (t.constructor) {
          var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
          if (e && e.length > 1) return e[1];
        }
        return null;
      })(t);
      return e ? "a custom " + e + " object" : "an object";
    }
    return "function" == typeof t ? "a function" : Do();
  }
  function kd(t, e) {
    if (("_delegate" in t && (t = t._delegate), !(t instanceof e))) {
      if (e.name === t.constructor.name)
        throw new Io(
          Eo.INVALID_ARGUMENT,
          "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"
        );
      var n = Ad(t);
      throw new Io(
        Eo.INVALID_ARGUMENT,
        "Expected type '" + e.name + "', but it was: " + n
      );
    }
    return t;
  }
  function Nd(t, e) {
    if (e <= 0)
      throw new Io(
        Eo.INVALID_ARGUMENT,
        "Function " +
          t +
          "() requires a positive number, but it was: " +
          e +
          "."
      );
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Dd = (function () {
      function t(t) {
        var e;
        if (void 0 === t.host) {
          if (void 0 !== t.ssl)
            throw new Io(
              Eo.INVALID_ARGUMENT,
              "Can't provide ssl option if host option is not set"
            );
          (this.host = "firestore.googleapis.com"), (this.ssl = !0);
        } else
          (this.host = t.host),
            (this.ssl = null === (e = t.ssl) || void 0 === e || e);
        if (
          ((this.credentials = t.credentials),
          (this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties),
          void 0 === t.cacheSizeBytes)
        )
          this.cacheSizeBytes = 41943040;
        else {
          if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576)
            throw new Io(
              Eo.INVALID_ARGUMENT,
              "cacheSizeBytes must be at least 1048576"
            );
          this.cacheSizeBytes = t.cacheSizeBytes;
        }
        (this.experimentalForceLongPolling = !!t.experimentalForceLongPolling),
          (this.experimentalAutoDetectLongPolling =
            !!t.experimentalAutoDetectLongPolling),
          (this.useFetchStreams = !!t.useFetchStreams),
          Td(
            "experimentalForceLongPolling",
            t.experimentalForceLongPolling,
            "experimentalAutoDetectLongPolling",
            t.experimentalAutoDetectLongPolling
          );
      }
      return (
        (t.prototype.isEqual = function (t) {
          return (
            this.host === t.host &&
            this.ssl === t.ssl &&
            this.credentials === t.credentials &&
            this.cacheSizeBytes === t.cacheSizeBytes &&
            this.experimentalForceLongPolling ===
              t.experimentalForceLongPolling &&
            this.experimentalAutoDetectLongPolling ===
              t.experimentalAutoDetectLongPolling &&
            this.ignoreUndefinedProperties === t.ignoreUndefinedProperties &&
            this.useFetchStreams === t.useFetchStreams
          );
        }),
        t
      );
    })(),
    Cd = (function () {
      function t(t, e) {
        (this.type = "firestore-lite"),
          (this._persistenceKey = "(lite)"),
          (this._settings = new Dd({})),
          (this._settingsFrozen = !1),
          t instanceof dd
            ? ((this._databaseId = t), (this._credentials = new gd()))
            : ((this._app = t),
              (this._databaseId = (function (t) {
                if (
                  !Object.prototype.hasOwnProperty.apply(t.options, [
                    "projectId",
                  ])
                )
                  throw new Io(
                    Eo.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  );
                return new dd(t.options.projectId);
              })(t)),
              (this._credentials = new md(e)));
      }
      return (
        Object.defineProperty(t.prototype, "app", {
          get: function () {
            if (!this._app)
              throw new Io(
                Eo.FAILED_PRECONDITION,
                "Firestore was not initialized using the Firebase SDK. 'app' is not available"
              );
            return this._app;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "_initialized", {
          get: function () {
            return this._settingsFrozen;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "_terminated", {
          get: function () {
            return void 0 !== this._terminateTask;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype._setSettings = function (t) {
          if (this._settingsFrozen)
            throw new Io(
              Eo.FAILED_PRECONDITION,
              "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object."
            );
          (this._settings = new Dd(t)),
            void 0 !== t.credentials &&
              (this._credentials = (function (t) {
                if (!t) return new gd();
                switch (t.type) {
                  case "gapi":
                    var e = t.client;
                    return (
                      Co(
                        !(
                          "object" != typeof e ||
                          null === e ||
                          !e.auth ||
                          !e.auth.getAuthHeaderValueForFirstParty
                        )
                      ),
                      new wd(e, t.sessionIndex || "0", t.iamToken || null)
                    );
                  case "provider":
                    return t.client;
                  default:
                    throw new Io(
                      Eo.INVALID_ARGUMENT,
                      "makeCredentialsProvider failed due to invalid credential type"
                    );
                }
              })(t.credentials));
        }),
        (t.prototype._getSettings = function () {
          return this._settings;
        }),
        (t.prototype._freezeSettings = function () {
          return (this._settingsFrozen = !0), this._settings;
        }),
        (t.prototype._delete = function () {
          return (
            this._terminateTask || (this._terminateTask = this._terminate()),
            this._terminateTask
          );
        }),
        (t.prototype.toJSON = function () {
          return {
            app: this._app,
            databaseId: this._databaseId,
            settings: this._settings,
          };
        }),
        (t.prototype._terminate = function () {
          return (
            this,
            (t = pd.get(this)) &&
              (So("ComponentProvider", "Removing Datastore"),
              pd.delete(this),
              t.terminate()),
            Promise.resolve()
          );
          var t;
        }),
        t
      );
    })(),
    xd = (function () {
      function t(t, e, n) {
        (this.converter = e),
          (this._key = n),
          (this.type = "document"),
          (this.firestore = t);
      }
      return (
        Object.defineProperty(t.prototype, "_path", {
          get: function () {
            return this._key.path;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "id", {
          get: function () {
            return this._key.path.lastSegment();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "path", {
          get: function () {
            return this._key.path.canonicalString();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "parent", {
          get: function () {
            return new Od(
              this.firestore,
              this.converter,
              this._key.path.popLast()
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.withConverter = function (e) {
          return new t(this.firestore, e, this._key);
        }),
        t
      );
    })(),
    Rd = (function () {
      function t(t, e, n) {
        (this.converter = e),
          (this._query = n),
          (this.type = "query"),
          (this.firestore = t);
      }
      return (
        (t.prototype.withConverter = function (e) {
          return new t(this.firestore, e, this._query);
        }),
        t
      );
    })(),
    Od = (function (t) {
      function e(e, n, r) {
        var i = this;
        return (
          ((i = t.call(this, e, n, Ks(r)) || this)._path = r),
          (i.type = "collection"),
          i
        );
      }
      return (
        ut(e, t),
        Object.defineProperty(e.prototype, "id", {
          get: function () {
            return this._query.path.lastSegment();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "path", {
          get: function () {
            return this._query.path.canonicalString();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "parent", {
          get: function () {
            var t = this._path.popLast();
            return t.isEmpty() ? null : new xd(this.firestore, null, new is(t));
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.withConverter = function (t) {
          return new e(this.firestore, t, this._path);
        }),
        e
      );
    })(Rd);
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Ld(t, e) {
    for (var n, r = [], i = 2; i < arguments.length; i++)
      r[i - 2] = arguments[i];
    if (((t = Nt(t)), Ed("collection", "path", e), t instanceof Cd))
      return Sd((n = zo.fromString.apply(zo, pt([e], r)))), new Od(t, null, n);
    if (!(t instanceof xd || t instanceof Od))
      throw new Io(
        Eo.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
      );
    return (
      Sd(
        (n = zo.fromString.apply(zo, pt([t.path], r)).child(zo.fromString(e)))
      ),
      new Od(t.firestore, null, n)
    );
  }
  function Pd(t, e) {
    for (var n, r = [], i = 2; i < arguments.length; i++)
      r[i - 2] = arguments[i];
    if (
      ((t = Nt(t)),
      1 === arguments.length && (e = Oo.u()),
      Ed("doc", "path", e),
      t instanceof Cd)
    )
      return (
        _d((n = zo.fromString.apply(zo, pt([e], r)))),
        new xd(t, null, new is(n))
      );
    if (!(t instanceof xd || t instanceof Od))
      throw new Io(
        Eo.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
      );
    return (
      _d((n = t._path.child(zo.fromString.apply(zo, pt([e], r))))),
      new xd(t.firestore, t instanceof Od ? t.converter : null, new is(n))
    );
  }
  function Md(t, e) {
    return (
      (t = Nt(t)),
      (e = Nt(e)),
      (t instanceof xd || t instanceof Od) &&
        (e instanceof xd || e instanceof Od) &&
        t.firestore === e.firestore &&
        t.path === e.path &&
        t.converter === e.converter
    );
  }
  function Fd(t, e) {
    return (
      (t = Nt(t)),
      (e = Nt(e)),
      t instanceof Rd &&
        e instanceof Rd &&
        t.firestore === e.firestore &&
        Zs(t._query, e._query) &&
        t.converter === e.converter
    );
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
  }
  var Vd = (function () {
    function t() {
      var t = this;
      (this.dc = Promise.resolve()),
        (this.wc = []),
        (this._c = !1),
        (this.mc = []),
        (this.yc = null),
        (this.gc = !1),
        (this.Ec = !1),
        (this.Tc = []),
        (this.Zi = new mh(this, "async_queue_retry")),
        (this.Ic = function () {
          var e = gh();
          e &&
            So(
              "AsyncQueue",
              "Visibility state changed to " + e.visibilityState
            ),
            t.Zi.Gi();
        });
      var e = gh();
      e &&
        "function" == typeof e.addEventListener &&
        e.addEventListener("visibilitychange", this.Ic);
    }
    return (
      Object.defineProperty(t.prototype, "isShuttingDown", {
        get: function () {
          return this._c;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.enqueueAndForget = function (t) {
        this.enqueue(t);
      }),
      (t.prototype.enqueueAndForgetEvenWhileRestricted = function (t) {
        this.Ac(), this.Rc(t);
      }),
      (t.prototype.enterRestrictedMode = function (t) {
        if (!this._c) {
          (this._c = !0), (this.Ec = t || !1);
          var e = gh();
          e &&
            "function" == typeof e.removeEventListener &&
            e.removeEventListener("visibilitychange", this.Ic);
        }
      }),
      (t.prototype.enqueue = function (t) {
        var e = this;
        if ((this.Ac(), this._c)) return new Promise(function () {});
        var n = new fc();
        return this.Rc(function () {
          return e._c && e.Ec
            ? Promise.resolve()
            : (t().then(n.resolve, n.reject), n.promise);
        }).then(function () {
          return n.promise;
        });
      }),
      (t.prototype.enqueueRetryable = function (t) {
        var e = this;
        this.enqueueAndForget(function () {
          return e.wc.push(t), e.bc();
        });
      }),
      (t.prototype.bc = function () {
        return lt(this, void 0, void 0, function () {
          var t,
            e = this;
          return ht(this, function (n) {
            switch (n.label) {
              case 0:
                if (0 === this.wc.length) return [3, 5];
                n.label = 1;
              case 1:
                return n.trys.push([1, 3, , 4]), [4, this.wc[0]()];
              case 2:
                return n.sent(), this.wc.shift(), this.Zi.reset(), [3, 4];
              case 3:
                if (!mc((t = n.sent()))) throw t;
                return (
                  So(
                    "AsyncQueue",
                    "Operation failed with retryable error: " + t
                  ),
                  [3, 4]
                );
              case 4:
                this.wc.length > 0 &&
                  this.Zi.ji(function () {
                    return e.bc();
                  }),
                  (n.label = 5);
              case 5:
                return [2];
            }
          });
        });
      }),
      (t.prototype.Rc = function (t) {
        var e = this,
          n = this.dc.then(function () {
            return (
              (e.gc = !0),
              t()
                .catch(function (t) {
                  throw (
                    ((e.yc = t),
                    (e.gc = !1),
                    Ao(
                      "INTERNAL UNHANDLED ERROR: ",
                      (function (t) {
                        var e = t.message || "";
                        return (
                          t.stack &&
                            (e = t.stack.includes(t.message)
                              ? t.stack
                              : t.message + "\n" + t.stack),
                          e
                        );
                      })(t)
                    ),
                    t)
                  );
                })
                .then(function (t) {
                  return (e.gc = !1), t;
                })
            );
          });
        return (this.dc = n), n;
      }),
      (t.prototype.enqueueAfterDelay = function (t, e, n) {
        var r = this;
        this.Ac(), this.Tc.indexOf(t) > -1 && (e = 0);
        var i = Yh.createAndSchedule(this, t, e, n, function (t) {
          return r.vc(t);
        });
        return this.mc.push(i), i;
      }),
      (t.prototype.Ac = function () {
        this.yc && Do();
      }),
      (t.prototype.verifyOperationInProgress = function () {}),
      (t.prototype.Pc = function () {
        return lt(this, void 0, void 0, function () {
          var t;
          return ht(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, (t = this.dc)];
              case 1:
                e.sent(), (e.label = 2);
              case 2:
                if (t !== this.dc) return [3, 0];
                e.label = 3;
              case 3:
                return [2];
            }
          });
        });
      }),
      (t.prototype.Vc = function (t) {
        for (var e = 0, n = this.mc; e < n.length; e++)
          if (n[e].timerId === t) return !0;
        return !1;
      }),
      (t.prototype.Sc = function (t) {
        var e = this;
        return this.Pc().then(function () {
          e.mc.sort(function (t, e) {
            return t.targetTimeMs - e.targetTimeMs;
          });
          for (var n = 0, r = e.mc; n < r.length; n++) {
            var i = r[n];
            if ((i.skipDelay(), "all" !== t && i.timerId === t)) break;
          }
          return e.Pc();
        });
      }),
      (t.prototype.Dc = function (t) {
        this.Tc.push(t);
      }),
      (t.prototype.vc = function (t) {
        var e = this.mc.indexOf(t);
        this.mc.splice(e, 1);
      }),
      t
    );
  })();
  function qd(t) {
    return (function (t, e) {
      if ("object" != typeof t || null === t) return !1;
      for (
        var n = t, r = 0, i = ["next", "error", "complete"];
        r < i.length;
        r++
      ) {
        var o = i[r];
        if (o in n && "function" == typeof n[o]) return !0;
      }
      return !1;
    })(t);
  }
  var Ud = (function (t) {
    function e(e, n) {
      var r = this;
      return (
        ((r = t.call(this, e, n) || this).type = "firestore"),
        (r._queue = new Vd()),
        (r._persistenceKey = "name" in e ? e.name : "[DEFAULT]"),
        r
      );
    }
    return (
      ut(e, t),
      (e.prototype._terminate = function () {
        return (
          this._firestoreClient || Bd(this), this._firestoreClient.terminate()
        );
      }),
      e
    );
  })(Cd);
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function jd(t) {
    return (
      t._firestoreClient || Bd(t),
      t._firestoreClient.verifyNotTerminated(),
      t._firestoreClient
    );
  }
  function Bd(t) {
    var e,
      n = t._freezeSettings(),
      r = (function (t, e, n, r) {
        return new fd(
          t,
          e,
          n,
          r.host,
          r.ssl,
          r.experimentalForceLongPolling,
          r.experimentalAutoDetectLongPolling,
          r.useFetchStreams
        );
      })(
        t._databaseId,
        (null === (e = t._app) || void 0 === e ? void 0 : e.options.appId) ||
          "",
        t._persistenceKey,
        n
      );
    t._firestoreClient = new td(t._credentials, t._queue, r);
  }
  function zd(t, e, n) {
    var r = this,
      i = new fc();
    return t.asyncQueue
      .enqueue(function () {
        return lt(r, void 0, void 0, function () {
          var r;
          return ht(this, function (o) {
            switch (o.label) {
              case 0:
                return o.trys.push([0, 3, , 4]), [4, ed(t, n)];
              case 1:
                return o.sent(), [4, nd(t, e)];
              case 2:
                return o.sent(), i.resolve(), [3, 4];
              case 3:
                if (
                  !(function (t) {
                    return "FirebaseError" === t.name
                      ? t.code === Eo.FAILED_PRECONDITION ||
                          t.code === Eo.UNIMPLEMENTED
                      : !(
                          "undefined" != typeof DOMException &&
                          t instanceof DOMException
                        ) ||
                          22 === t.code ||
                          20 === t.code ||
                          11 === t.code;
                  })((r = o.sent()))
                )
                  throw r;
                return (
                  console.warn(
                    "Error enabling offline persistence. Falling back to persistence disabled: " +
                      r
                  ),
                  i.reject(r),
                  [3, 4]
                );
              case 4:
                return [2];
            }
          });
        });
      })
      .then(function () {
        return i.promise;
      });
  }
  function Kd(t) {
    if (t._initialized || t._terminated)
      throw new Io(
        Eo.FAILED_PRECONDITION,
        "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object."
      );
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var $d = (function () {
      function t() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = 0; n < t.length; ++n)
          if (0 === t[n].length)
            throw new Io(
              Eo.INVALID_ARGUMENT,
              "Invalid field name at argument $(i + 1). Field names must not be empty."
            );
        this._internalPath = new $o(t);
      }
      return (
        (t.prototype.isEqual = function (t) {
          return this._internalPath.isEqual(t._internalPath);
        }),
        t
      );
    })(),
    Gd = (function () {
      function t(t) {
        this._byteString = t;
      }
      return (
        (t.fromBase64String = function (e) {
          try {
            return new t(Ho.fromBase64String(e));
          } catch (e) {
            throw new Io(
              Eo.INVALID_ARGUMENT,
              "Failed to construct data from Base64 string: " + e
            );
          }
        }),
        (t.fromUint8Array = function (e) {
          return new t(Ho.fromUint8Array(e));
        }),
        (t.prototype.toBase64 = function () {
          return this._byteString.toBase64();
        }),
        (t.prototype.toUint8Array = function () {
          return this._byteString.toUint8Array();
        }),
        (t.prototype.toString = function () {
          return "Bytes(base64: " + this.toBase64() + ")";
        }),
        (t.prototype.isEqual = function (t) {
          return this._byteString.isEqual(t._byteString);
        }),
        t
      );
    })(),
    Hd = function (t) {
      this._methodName = t;
    },
    Qd = (function () {
      function t(t, e) {
        if (!isFinite(t) || t < -90 || t > 90)
          throw new Io(
            Eo.INVALID_ARGUMENT,
            "Latitude must be a number between -90 and 90, but was: " + t
          );
        if (!isFinite(e) || e < -180 || e > 180)
          throw new Io(
            Eo.INVALID_ARGUMENT,
            "Longitude must be a number between -180 and 180, but was: " + e
          );
        (this._lat = t), (this._long = e);
      }
      return (
        Object.defineProperty(t.prototype, "latitude", {
          get: function () {
            return this._lat;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "longitude", {
          get: function () {
            return this._long;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.isEqual = function (t) {
          return this._lat === t._lat && this._long === t._long;
        }),
        (t.prototype.toJSON = function () {
          return { latitude: this._lat, longitude: this._long };
        }),
        (t.prototype._compareTo = function (t) {
          return Lo(this._lat, t._lat) || Lo(this._long, t._long);
        }),
        t
      );
    })(),
    Wd = /^__.*__$/,
    Yd = (function () {
      function t(t, e, n) {
        (this.data = t), (this.fieldMask = e), (this.fieldTransforms = n);
      }
      return (
        (t.prototype.toMutation = function (t, e) {
          return null !== this.fieldMask
            ? new xa(t, this.data, this.fieldMask, e, this.fieldTransforms)
            : new Ca(t, this.data, e, this.fieldTransforms);
        }),
        t
      );
    })(),
    Xd = (function () {
      function t(t, e, n) {
        (this.data = t), (this.fieldMask = e), (this.fieldTransforms = n);
      }
      return (
        (t.prototype.toMutation = function (t, e) {
          return new xa(t, this.data, this.fieldMask, e, this.fieldTransforms);
        }),
        t
      );
    })();
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Jd(t) {
    switch (t) {
      case 0:
      case 2:
      case 1:
        return !0;
      case 3:
      case 4:
        return !1;
      default:
        throw Do();
    }
  }
  var Zd = (function () {
      function t(t, e, n, r, i, o) {
        (this.settings = t),
          (this.databaseId = e),
          (this.R = n),
          (this.ignoreUndefinedProperties = r),
          void 0 === i && this.Cc(),
          (this.fieldTransforms = i || []),
          (this.fieldMask = o || []);
      }
      return (
        Object.defineProperty(t.prototype, "path", {
          get: function () {
            return this.settings.path;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "Nc", {
          get: function () {
            return this.settings.Nc;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.xc = function (e) {
          return new t(
            Object.assign(Object.assign({}, this.settings), e),
            this.databaseId,
            this.R,
            this.ignoreUndefinedProperties,
            this.fieldTransforms,
            this.fieldMask
          );
        }),
        (t.prototype.Fc = function (t) {
          var e,
            n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
            r = this.xc({ path: n, kc: !1 });
          return r.$c(t), r;
        }),
        (t.prototype.Oc = function (t) {
          var e,
            n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
            r = this.xc({ path: n, kc: !1 });
          return r.Cc(), r;
        }),
        (t.prototype.Mc = function (t) {
          return this.xc({ path: void 0, kc: !0 });
        }),
        (t.prototype.Lc = function (t) {
          return bp(
            t,
            this.settings.methodName,
            this.settings.Bc || !1,
            this.path,
            this.settings.qc
          );
        }),
        (t.prototype.contains = function (t) {
          return (
            void 0 !==
              this.fieldMask.find(function (e) {
                return t.isPrefixOf(e);
              }) ||
            void 0 !==
              this.fieldTransforms.find(function (e) {
                return t.isPrefixOf(e.field);
              })
          );
        }),
        (t.prototype.Cc = function () {
          if (this.path)
            for (var t = 0; t < this.path.length; t++)
              this.$c(this.path.get(t));
        }),
        (t.prototype.$c = function (t) {
          if (0 === t.length)
            throw this.Lc("Document fields must not be empty");
          if (Jd(this.Nc) && Wd.test(t))
            throw this.Lc('Document fields cannot begin and end with "__"');
        }),
        t
      );
    })(),
    tp = (function () {
      function t(t, e, n) {
        (this.databaseId = t),
          (this.ignoreUndefinedProperties = e),
          (this.R = n || yh(t));
      }
      return (
        (t.prototype.Uc = function (t, e, n, r) {
          return (
            void 0 === r && (r = !1),
            new Zd(
              {
                Nc: t,
                methodName: e,
                qc: n,
                path: $o.emptyPath(),
                kc: !1,
                Bc: r,
              },
              this.databaseId,
              this.R,
              this.ignoreUndefinedProperties
            )
          );
        }),
        t
      );
    })();
  function ep(t) {
    var e = t._freezeSettings(),
      n = yh(t._databaseId);
    return new tp(t._databaseId, !!e.ignoreUndefinedProperties, n);
  }
  function np(t, e, n, r, i, o) {
    void 0 === o && (o = {});
    var s = t.Uc(o.merge || o.mergeFields ? 2 : 0, e, n, i);
    vp("Data must be an object, but it was:", s, r);
    var a,
      u,
      c = dp(r, s);
    if (o.merge) (a = new Go(s.fieldMask)), (u = s.fieldTransforms);
    else if (o.mergeFields) {
      for (var l = [], h = 0, f = o.mergeFields; h < f.length; h++) {
        var d = gp(e, f[h], n);
        if (!s.contains(d))
          throw new Io(
            Eo.INVALID_ARGUMENT,
            "Field '" +
              d +
              "' is specified in your field mask but missing from your input data."
          );
        wp(l, d) || l.push(d);
      }
      (a = new Go(l)),
        (u = s.fieldTransforms.filter(function (t) {
          return a.covers(t.field);
        }));
    } else (a = null), (u = s.fieldTransforms);
    return new Yd(new bs(c), a, u);
  }
  var rp = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return (
      ut(e, t),
      (e.prototype._toFieldTransform = function (t) {
        if (2 !== t.Nc)
          throw 1 === t.Nc
            ? t.Lc(
                this._methodName +
                  "() can only appear at the top level of your update data"
              )
            : t.Lc(
                this._methodName +
                  "() cannot be used with set() unless you pass {merge:true}"
              );
        return t.fieldMask.push(t.path), null;
      }),
      (e.prototype.isEqual = function (t) {
        return t instanceof e;
      }),
      e
    );
  })(Hd);
  function ip(t, e, n) {
    return new Zd(
      { Nc: 3, qc: e.settings.qc, methodName: t._methodName, kc: n },
      e.databaseId,
      e.R,
      e.ignoreUndefinedProperties
    );
  }
  var op = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        ut(e, t),
        (e.prototype._toFieldTransform = function (t) {
          return new wa(t.path, new fa());
        }),
        (e.prototype.isEqual = function (t) {
          return t instanceof e;
        }),
        e
      );
    })(Hd),
    sp = (function (t) {
      function e(e, n) {
        var r = this;
        return ((r = t.call(this, e) || this).Kc = n), r;
      }
      return (
        ut(e, t),
        (e.prototype._toFieldTransform = function (t) {
          var e = ip(this, t, !0),
            n = this.Kc.map(function (t) {
              return fp(t, e);
            }),
            r = new da(n);
          return new wa(t.path, r);
        }),
        (e.prototype.isEqual = function (t) {
          return this === t;
        }),
        e
      );
    })(Hd),
    ap = (function (t) {
      function e(e, n) {
        var r = this;
        return ((r = t.call(this, e) || this).Kc = n), r;
      }
      return (
        ut(e, t),
        (e.prototype._toFieldTransform = function (t) {
          var e = ip(this, t, !0),
            n = this.Kc.map(function (t) {
              return fp(t, e);
            }),
            r = new va(n);
          return new wa(t.path, r);
        }),
        (e.prototype.isEqual = function (t) {
          return this === t;
        }),
        e
      );
    })(Hd),
    up = (function (t) {
      function e(e, n) {
        var r = this;
        return ((r = t.call(this, e) || this).Qc = n), r;
      }
      return (
        ut(e, t),
        (e.prototype._toFieldTransform = function (t) {
          var e = new ya(t.R, aa(t.R, this.Qc));
          return new wa(t.path, e);
        }),
        (e.prototype.isEqual = function (t) {
          return this === t;
        }),
        e
      );
    })(Hd);
  function cp(t, e, n, r) {
    var i = t.Uc(1, e, n);
    vp("Data must be an object, but it was:", i, r);
    var o = [],
      s = bs.empty();
    Uo(r, function (t, r) {
      var a = mp(e, t, n);
      r = Nt(r);
      var u = i.Oc(a);
      if (r instanceof rp) o.push(a);
      else {
        var c = fp(r, u);
        null != c && (o.push(a), s.set(a, c));
      }
    });
    var a = new Go(o);
    return new Xd(s, a, i.fieldTransforms);
  }
  function lp(t, e, n, r, i, o) {
    var s = t.Uc(1, e, n),
      a = [gp(e, r, n)],
      u = [i];
    if (o.length % 2 != 0)
      throw new Io(
        Eo.INVALID_ARGUMENT,
        "Function " +
          e +
          "() needs to be called with an even number of arguments that alternate between field names and values."
      );
    for (var c = 0; c < o.length; c += 2) a.push(gp(e, o[c])), u.push(o[c + 1]);
    for (var l = [], h = bs.empty(), f = a.length - 1; f >= 0; --f)
      if (!wp(l, a[f])) {
        var d = a[f],
          p = u[f];
        p = Nt(p);
        var v = s.Oc(d);
        if (p instanceof rp) l.push(d);
        else {
          var g = fp(p, v);
          null != g && (l.push(d), h.set(d, g));
        }
      }
    var y = new Go(l);
    return new Xd(h, y, s.fieldTransforms);
  }
  function hp(t, e, n, r) {
    return void 0 === r && (r = !1), fp(n, t.Uc(r ? 4 : 3, e));
  }
  function fp(t, e) {
    if (pp((t = Nt(t)))) return vp("Unsupported field value:", e, t), dp(t, e);
    if (t instanceof Hd)
      return (
        (function (t, e) {
          if (!Jd(e.Nc))
            throw e.Lc(
              t._methodName + "() can only be used with update() and set()"
            );
          if (!e.path)
            throw e.Lc(
              t._methodName + "() is not currently supported inside arrays"
            );
          var n = t._toFieldTransform(e);
          n && e.fieldTransforms.push(n);
        })(t, e),
        null
      );
    if (void 0 === t && e.ignoreUndefinedProperties) return null;
    if ((e.path && e.fieldMask.push(e.path), t instanceof Array)) {
      if (e.settings.kc && 4 !== e.Nc)
        throw e.Lc("Nested arrays are not supported");
      return (function (t, e) {
        for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
          var s = fp(o[i], e.Mc(r));
          null == s && (s = { nullValue: "NULL_VALUE" }), n.push(s), r++;
        }
        return { arrayValue: { values: n } };
      })(t, e);
    }
    return (function (t, e) {
      if (null === (t = Nt(t))) return { nullValue: "NULL_VALUE" };
      if ("number" == typeof t) return aa(e.R, t);
      if ("boolean" == typeof t) return { booleanValue: t };
      if ("string" == typeof t) return { stringValue: t };
      if (t instanceof Date) {
        var n = Fo.fromDate(t);
        return { timestampValue: pu(e.R, n) };
      }
      if (t instanceof Fo)
        return (
          (n = new Fo(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3))),
          { timestampValue: pu(e.R, n) }
        );
      if (t instanceof Qd)
        return {
          geoPointValue: { latitude: t.latitude, longitude: t.longitude },
        };
      if (t instanceof Gd) return { bytesValue: vu(e.R, t._byteString) };
      if (t instanceof xd) {
        n = e.databaseId;
        var r = t.firestore._databaseId;
        if (!r.isEqual(n))
          throw e.Lc(
            "Document reference is for database " +
              r.projectId +
              "/" +
              r.database +
              " but should be for database " +
              n.projectId +
              "/" +
              n.database
          );
        return {
          referenceValue: mu(
            t.firestore._databaseId || e.databaseId,
            t._key.path
          ),
        };
      }
      throw e.Lc("Unsupported field value: " + Ad(t));
    })(t, e);
  }
  function dp(t, e) {
    var n = {};
    return (
      jo(t)
        ? e.path && e.path.length > 0 && e.fieldMask.push(e.path)
        : Uo(t, function (t, r) {
            var i = fp(r, e.Fc(t));
            null != i && (n[t] = i);
          }),
      { mapValue: { fields: n } }
    );
  }
  function pp(t) {
    return !(
      "object" != typeof t ||
      null === t ||
      t instanceof Array ||
      t instanceof Date ||
      t instanceof Fo ||
      t instanceof Qd ||
      t instanceof Gd ||
      t instanceof xd ||
      t instanceof Hd
    );
  }
  function vp(t, e, n) {
    if (
      !pp(n) ||
      !(function (t) {
        return (
          "object" == typeof t &&
          null !== t &&
          (Object.getPrototypeOf(t) === Object.prototype ||
            null === Object.getPrototypeOf(t))
        );
      })(n)
    ) {
      var r = Ad(n);
      throw "an object" === r
        ? e.Lc(t + " a custom object")
        : e.Lc(t + " " + r);
    }
  }
  function gp(t, e, n) {
    if ((e = Nt(e)) instanceof $d) return e._internalPath;
    if ("string" == typeof e) return mp(t, e);
    throw bp(
      "Field path arguments must be of type string or FieldPath.",
      t,
      !1,
      void 0,
      n
    );
  }
  var yp = new RegExp("[~\\*/\\[\\]]");
  function mp(t, e, n) {
    if (e.search(yp) >= 0)
      throw bp(
        "Invalid field path (" +
          e +
          "). Paths must not contain '~', '*', '/', '[', or ']'",
        t,
        !1,
        void 0,
        n
      );
    try {
      return new ($d.bind.apply($d, pt([void 0], e.split("."))))()
        ._internalPath;
    } catch (r) {
      throw bp(
        "Invalid field path (" +
          e +
          "). Paths must not be empty, begin with '.', end with '.', or contain '..'",
        t,
        !1,
        void 0,
        n
      );
    }
  }
  function bp(t, e, n, r, i) {
    var o = r && !r.isEmpty(),
      s = void 0 !== i,
      a = "Function " + e + "() called with invalid data";
    n && (a += " (via `toFirestore()`)");
    var u = "";
    return (
      (o || s) &&
        ((u += " (found"),
        o && (u += " in field " + r),
        s && (u += " in document " + i),
        (u += ")")),
      new Io(Eo.INVALID_ARGUMENT, (a += ". ") + t + u)
    );
  }
  function wp(t, e) {
    return t.some(function (t) {
      return t.isEqual(e);
    });
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Ep = (function () {
      function t(t, e, n, r, i) {
        (this._firestore = t),
          (this._userDataWriter = e),
          (this._key = n),
          (this._document = r),
          (this._converter = i);
      }
      return (
        Object.defineProperty(t.prototype, "id", {
          get: function () {
            return this._key.path.lastSegment();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "ref", {
          get: function () {
            return new xd(this._firestore, this._converter, this._key);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.exists = function () {
          return null !== this._document;
        }),
        (t.prototype.data = function () {
          if (this._document) {
            if (this._converter) {
              var t = new Ip(
                this._firestore,
                this._userDataWriter,
                this._key,
                this._document,
                null
              );
              return this._converter.fromFirestore(t);
            }
            return this._userDataWriter.convertValue(this._document.data.value);
          }
        }),
        (t.prototype.get = function (t) {
          if (this._document) {
            var e = this._document.data.field(Tp("DocumentSnapshot.get", t));
            if (null !== e) return this._userDataWriter.convertValue(e);
          }
        }),
        t
      );
    })(),
    Ip = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        ut(e, t),
        (e.prototype.data = function () {
          return t.prototype.data.call(this);
        }),
        e
      );
    })(Ep);
  function Tp(t, e) {
    return "string" == typeof e
      ? mp(t, e)
      : e instanceof $d
      ? e._internalPath
      : e._delegate._internalPath;
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var _p = (function () {
      function t(t, e) {
        (this.hasPendingWrites = t), (this.fromCache = e);
      }
      return (
        (t.prototype.isEqual = function (t) {
          return (
            this.hasPendingWrites === t.hasPendingWrites &&
            this.fromCache === t.fromCache
          );
        }),
        t
      );
    })(),
    Sp = (function (t) {
      function e(e, n, r, i, o, s) {
        var a = this;
        return (
          ((a = t.call(this, e, n, r, i, s) || this)._firestore = e),
          (a._firestoreImpl = e),
          (a.metadata = o),
          a
        );
      }
      return (
        ut(e, t),
        (e.prototype.exists = function () {
          return t.prototype.exists.call(this);
        }),
        (e.prototype.data = function (t) {
          if ((void 0 === t && (t = {}), this._document)) {
            if (this._converter) {
              var e = new Ap(
                this._firestore,
                this._userDataWriter,
                this._key,
                this._document,
                this.metadata,
                null
              );
              return this._converter.fromFirestore(e, t);
            }
            return this._userDataWriter.convertValue(
              this._document.data.value,
              t.serverTimestamps
            );
          }
        }),
        (e.prototype.get = function (t, e) {
          if ((void 0 === e && (e = {}), this._document)) {
            var n = this._document.data.field(Tp("DocumentSnapshot.get", t));
            if (null !== n)
              return this._userDataWriter.convertValue(n, e.serverTimestamps);
          }
        }),
        e
      );
    })(Ep),
    Ap = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        ut(e, t),
        (e.prototype.data = function (e) {
          return void 0 === e && (e = {}), t.prototype.data.call(this, e);
        }),
        e
      );
    })(Sp),
    kp = (function () {
      function t(t, e, n, r) {
        (this._firestore = t),
          (this._userDataWriter = e),
          (this._snapshot = r),
          (this.metadata = new _p(r.hasPendingWrites, r.fromCache)),
          (this.query = n);
      }
      return (
        Object.defineProperty(t.prototype, "docs", {
          get: function () {
            var t = [];
            return (
              this.forEach(function (e) {
                return t.push(e);
              }),
              t
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this._snapshot.docs.size;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "empty", {
          get: function () {
            return 0 === this.size;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.forEach = function (t, e) {
          var n = this;
          this._snapshot.docs.forEach(function (r) {
            t.call(
              e,
              new Ap(
                n._firestore,
                n._userDataWriter,
                r.key,
                r,
                new _p(
                  n._snapshot.mutatedKeys.has(r.key),
                  n._snapshot.fromCache
                ),
                n.query.converter
              )
            );
          });
        }),
        (t.prototype.docChanges = function (t) {
          void 0 === t && (t = {});
          var e = !!t.includeMetadataChanges;
          if (e && this._snapshot.excludesMetadataChanges)
            throw new Io(
              Eo.INVALID_ARGUMENT,
              "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot()."
            );
          return (
            (this._cachedChanges &&
              this._cachedChangesIncludeMetadataChanges === e) ||
              ((this._cachedChanges = (function (t, e) {
                if (t._snapshot.oldDocs.isEmpty()) {
                  var n = 0;
                  return t._snapshot.docChanges.map(function (e) {
                    return {
                      type: "added",
                      doc: new Ap(
                        t._firestore,
                        t._userDataWriter,
                        e.doc.key,
                        e.doc,
                        new _p(
                          t._snapshot.mutatedKeys.has(e.doc.key),
                          t._snapshot.fromCache
                        ),
                        t.query.converter
                      ),
                      oldIndex: -1,
                      newIndex: n++,
                    };
                  });
                }
                var r = t._snapshot.oldDocs;
                return t._snapshot.docChanges
                  .filter(function (t) {
                    return e || 3 !== t.type;
                  })
                  .map(function (e) {
                    var n = new Ap(
                        t._firestore,
                        t._userDataWriter,
                        e.doc.key,
                        e.doc,
                        new _p(
                          t._snapshot.mutatedKeys.has(e.doc.key),
                          t._snapshot.fromCache
                        ),
                        t.query.converter
                      ),
                      i = -1,
                      o = -1;
                    return (
                      0 !== e.type &&
                        ((i = r.indexOf(e.doc.key)), (r = r.delete(e.doc.key))),
                      1 !== e.type &&
                        (o = (r = r.add(e.doc)).indexOf(e.doc.key)),
                      { type: Np(e.type), doc: n, oldIndex: i, newIndex: o }
                    );
                  });
              })(this, e)),
              (this._cachedChangesIncludeMetadataChanges = e)),
            this._cachedChanges
          );
        }),
        t
      );
    })();
  function Np(t) {
    switch (t) {
      case 0:
        return "added";
      case 2:
      case 3:
        return "modified";
      case 1:
        return "removed";
      default:
        return Do();
    }
  }
  function Dp(t, e) {
    return t instanceof Sp && e instanceof Sp
      ? t._firestore === e._firestore &&
          t._key.isEqual(e._key) &&
          (null === t._document
            ? null === e._document
            : t._document.isEqual(e._document)) &&
          t._converter === e._converter
      : t instanceof kp &&
          e instanceof kp &&
          t._firestore === e._firestore &&
          Fd(t.query, e.query) &&
          t.metadata.isEqual(e.metadata) &&
          t._snapshot.isEqual(e._snapshot);
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Cp(t) {
    if (Gs(t) && 0 === t.explicitOrderBy.length)
      throw new Io(
        Eo.UNIMPLEMENTED,
        "limitToLast() queries require specifying at least one orderBy() clause"
      );
  }
  var xp = function () {};
  function Rp(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    for (var r = 0, i = e; r < i.length; r++) {
      var o = i[r];
      t = o._apply(t);
    }
    return t;
  }
  var Op = (function (t) {
      function e(e, n, r) {
        var i = this;
        return (
          ((i = t.call(this) || this).jc = e),
          (i.Wc = n),
          (i.Gc = r),
          (i.type = "where"),
          i
        );
      }
      return (
        ut(e, t),
        (e.prototype._apply = function (t) {
          var e = ep(t.firestore),
            n = (function (t, e, n, r, i, o, s) {
              var a;
              if (i.isKeyField()) {
                if ("array-contains" === o || "array-contains-any" === o)
                  throw new Io(
                    Eo.INVALID_ARGUMENT,
                    "Invalid Query. You can't perform '" +
                      o +
                      "' queries on FieldPath.documentId()."
                  );
                if ("in" === o || "not-in" === o) {
                  Up(s, o);
                  for (var u = [], c = 0, l = s; c < l.length; c++) {
                    var h = l[c];
                    u.push(qp(r, t, h));
                  }
                  a = { arrayValue: { values: u } };
                } else a = qp(r, t, s);
              } else
                ("in" !== o && "not-in" !== o && "array-contains-any" !== o) ||
                  Up(s, o),
                  (a = hp(n, "where", s, "in" === o || "not-in" === o));
              var f = ks.create(i, o, a);
              return (
                (function (t, e) {
                  if (e.g()) {
                    var n = Qs(t);
                    if (null !== n && !n.isEqual(e.field))
                      throw new Io(
                        Eo.INVALID_ARGUMENT,
                        "Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '" +
                          n.toString() +
                          "' and '" +
                          e.field.toString() +
                          "'"
                      );
                    var r = Hs(t);
                    null !== r && jp(t, e.field, r);
                  }
                  var i = (function (t, e) {
                    for (var n = 0, r = t.filters; n < r.length; n++) {
                      var i = r[n];
                      if (e.indexOf(i.op) >= 0) return i.op;
                    }
                    return null;
                  })(
                    t,
                    (function (t) {
                      switch (t) {
                        case "!=":
                          return ["!=", "not-in"];
                        case "array-contains":
                          return [
                            "array-contains",
                            "array-contains-any",
                            "not-in",
                          ];
                        case "in":
                          return ["array-contains-any", "in", "not-in"];
                        case "array-contains-any":
                          return [
                            "array-contains",
                            "array-contains-any",
                            "in",
                            "not-in",
                          ];
                        case "not-in":
                          return [
                            "array-contains",
                            "array-contains-any",
                            "in",
                            "not-in",
                            "!=",
                          ];
                        default:
                          return [];
                      }
                    })(e.op)
                  );
                  if (null !== i)
                    throw i === e.op
                      ? new Io(
                          Eo.INVALID_ARGUMENT,
                          "Invalid query. You cannot use more than one '" +
                            e.op.toString() +
                            "' filter."
                        )
                      : new Io(
                          Eo.INVALID_ARGUMENT,
                          "Invalid query. You cannot use '" +
                            e.op.toString() +
                            "' filters with '" +
                            i.toString() +
                            "' filters."
                        );
                })(t, f),
                f
              );
            })(
              t._query,
              0,
              e,
              t.firestore._databaseId,
              this.jc,
              this.Wc,
              this.Gc
            );
          return new Rd(
            t.firestore,
            t.converter,
            (function (t, e) {
              var n = t.filters.concat([e]);
              return new Bs(
                t.path,
                t.collectionGroup,
                t.explicitOrderBy.slice(),
                n,
                t.limit,
                t.limitType,
                t.startAt,
                t.endAt
              );
            })(t._query, n)
          );
        }),
        e
      );
    })(xp),
    Lp = (function (t) {
      function e(e, n) {
        var r = this;
        return (
          ((r = t.call(this) || this).jc = e),
          (r.zc = n),
          (r.type = "orderBy"),
          r
        );
      }
      return (
        ut(e, t),
        (e.prototype._apply = function (t) {
          var e = (function (t, e, n) {
            if (null !== t.startAt)
              throw new Io(
                Eo.INVALID_ARGUMENT,
                "Invalid query. You must not call startAt() or startAfter() before calling orderBy()."
              );
            if (null !== t.endAt)
              throw new Io(
                Eo.INVALID_ARGUMENT,
                "Invalid query. You must not call endAt() or endBefore() before calling orderBy()."
              );
            var r = new Vs(e, n);
            return (
              (function (t, e) {
                if (null === Hs(t)) {
                  var n = Qs(t);
                  null !== n && jp(t, n, e.field);
                }
              })(t, r),
              r
            );
          })(t._query, this.jc, this.zc);
          return new Rd(
            t.firestore,
            t.converter,
            (function (t, e) {
              var n = t.explicitOrderBy.concat([e]);
              return new Bs(
                t.path,
                t.collectionGroup,
                n,
                t.filters.slice(),
                t.limit,
                t.limitType,
                t.startAt,
                t.endAt
              );
            })(t._query, e)
          );
        }),
        e
      );
    })(xp),
    Pp = (function (t) {
      function e(e, n, r) {
        var i = this;
        return ((i = t.call(this) || this).type = e), (i.Hc = n), (i.Jc = r), i;
      }
      return (
        ut(e, t),
        (e.prototype._apply = function (t) {
          return new Rd(
            t.firestore,
            t.converter,
            Js(t._query, this.Hc, this.Jc)
          );
        }),
        e
      );
    })(xp),
    Mp = (function (t) {
      function e(e, n, r) {
        var i = this;
        return ((i = t.call(this) || this).type = e), (i.Yc = n), (i.Xc = r), i;
      }
      return (
        ut(e, t),
        (e.prototype._apply = function (t) {
          var e = Vp(t, this.type, this.Yc, this.Xc);
          return new Rd(
            t.firestore,
            t.converter,
            (function (t, e) {
              return new Bs(
                t.path,
                t.collectionGroup,
                t.explicitOrderBy.slice(),
                t.filters.slice(),
                t.limit,
                t.limitType,
                e,
                t.endAt
              );
            })(t._query, e)
          );
        }),
        e
      );
    })(xp),
    Fp = (function (t) {
      function e(e, n, r) {
        var i = this;
        return ((i = t.call(this) || this).type = e), (i.Yc = n), (i.Xc = r), i;
      }
      return (
        ut(e, t),
        (e.prototype._apply = function (t) {
          var e = Vp(t, this.type, this.Yc, this.Xc);
          return new Rd(
            t.firestore,
            t.converter,
            (function (t, e) {
              return new Bs(
                t.path,
                t.collectionGroup,
                t.explicitOrderBy.slice(),
                t.filters.slice(),
                t.limit,
                t.limitType,
                t.startAt,
                e
              );
            })(t._query, e)
          );
        }),
        e
      );
    })(xp);
  function Vp(t, e, n, r) {
    if (((n[0] = Nt(n[0])), n[0] instanceof Ep))
      return (function (t, e, n, r, i) {
        if (!r)
          throw new Io(
            Eo.NOT_FOUND,
            "Can't use a DocumentSnapshot that doesn't exist for " + n + "()."
          );
        for (var o = [], s = 0, a = Ys(t); s < a.length; s++) {
          var u = a[s];
          if (u.field.isKeyField()) o.push(fs(e, r.key));
          else {
            var c = r.data.field(u.field);
            if (Jo(c))
              throw new Io(
                Eo.INVALID_ARGUMENT,
                'Invalid query. You are trying to start or end a query using a document for which the field "' +
                  u.field +
                  '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)'
              );
            if (null === c) {
              var l = u.field.canonicalString();
              throw new Io(
                Eo.INVALID_ARGUMENT,
                "Invalid query. You are trying to start or end a query using a document for which the field '" +
                  l +
                  "' (used as the orderBy) does not exist."
              );
            }
            o.push(c);
          }
        }
        return new Ms(o, i);
      })(t._query, t.firestore._databaseId, e, n[0]._document, r);
    var i = ep(t.firestore);
    return (function (t, e, n, r, i, o) {
      var s = t.explicitOrderBy;
      if (i.length > s.length)
        throw new Io(
          Eo.INVALID_ARGUMENT,
          "Too many arguments provided to " +
            r +
            "(). The number of arguments must be less than or equal to the number of orderBy() clauses"
        );
      for (var a = [], u = 0; u < i.length; u++) {
        var c = i[u];
        if (s[u].field.isKeyField()) {
          if ("string" != typeof c)
            throw new Io(
              Eo.INVALID_ARGUMENT,
              "Invalid query. Expected a string for document ID in " +
                r +
                "(), but got a " +
                typeof c
            );
          if (!Ws(t) && -1 !== c.indexOf("/"))
            throw new Io(
              Eo.INVALID_ARGUMENT,
              "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " +
                r +
                "() must be a plain document ID, but '" +
                c +
                "' contains a slash."
            );
          var l = t.path.child(zo.fromString(c));
          if (!is.isDocumentKey(l))
            throw new Io(
              Eo.INVALID_ARGUMENT,
              "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " +
                r +
                "() must result in a valid document path, but '" +
                l +
                "' is not because it contains an odd number of segments."
            );
          var h = new is(l);
          a.push(fs(e, h));
        } else {
          var f = hp(n, r, c);
          a.push(f);
        }
      }
      return new Ms(a, o);
    })(t._query, t.firestore._databaseId, i, e, n, r);
  }
  function qp(t, e, n) {
    if ("string" == typeof (n = Nt(n))) {
      if ("" === n)
        throw new Io(
          Eo.INVALID_ARGUMENT,
          "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string."
        );
      if (!Ws(e) && -1 !== n.indexOf("/"))
        throw new Io(
          Eo.INVALID_ARGUMENT,
          "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" +
            n +
            "' contains a '/' character."
        );
      var r = e.path.child(zo.fromString(n));
      if (!is.isDocumentKey(r))
        throw new Io(
          Eo.INVALID_ARGUMENT,
          "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" +
            r +
            "' is not because it has an odd number of segments (" +
            r.length +
            ")."
        );
      return fs(t, new is(r));
    }
    if (n instanceof xd) return fs(t, n._key);
    throw new Io(
      Eo.INVALID_ARGUMENT,
      "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " +
        Ad(n) +
        "."
    );
  }
  function Up(t, e) {
    if (!Array.isArray(t) || 0 === t.length)
      throw new Io(
        Eo.INVALID_ARGUMENT,
        "Invalid Query. A non-empty array is required for '" +
          e.toString() +
          "' filters."
      );
    if (t.length > 10)
      throw new Io(
        Eo.INVALID_ARGUMENT,
        "Invalid Query. '" +
          e.toString() +
          "' filters support a maximum of 10 elements in the value array."
      );
  }
  function jp(t, e, n) {
    if (!n.isEqual(e))
      throw new Io(
        Eo.INVALID_ARGUMENT,
        "Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '" +
          e.toString() +
          "' and so you must also use '" +
          e.toString() +
          "' as your first argument to orderBy(), but your first orderBy() is on field '" +
          n.toString() +
          "' instead."
      );
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Bp = (function () {
    function t() {}
    return (
      (t.prototype.convertValue = function (t, e) {
        switch ((void 0 === e && (e = "none"), os(t))) {
          case 0:
            return null;
          case 1:
            return t.booleanValue;
          case 2:
            return Yo(t.integerValue || t.doubleValue);
          case 3:
            return this.convertTimestamp(t.timestampValue);
          case 4:
            return this.convertServerTimestamp(t, e);
          case 5:
            return t.stringValue;
          case 6:
            return this.convertBytes(Xo(t.bytesValue));
          case 7:
            return this.convertReference(t.referenceValue);
          case 8:
            return this.convertGeoPoint(t.geoPointValue);
          case 9:
            return this.convertArray(t.arrayValue, e);
          case 10:
            return this.convertObject(t.mapValue, e);
          default:
            throw Do();
        }
      }),
      (t.prototype.convertObject = function (t, e) {
        var n = this,
          r = {};
        return (
          Uo(t.fields, function (t, i) {
            r[t] = n.convertValue(i, e);
          }),
          r
        );
      }),
      (t.prototype.convertGeoPoint = function (t) {
        return new Qd(Yo(t.latitude), Yo(t.longitude));
      }),
      (t.prototype.convertArray = function (t, e) {
        var n = this;
        return (t.values || []).map(function (t) {
          return n.convertValue(t, e);
        });
      }),
      (t.prototype.convertServerTimestamp = function (t, e) {
        switch (e) {
          case "previous":
            var n = Zo(t);
            return null == n ? null : this.convertValue(n, e);
          case "estimate":
            return this.convertTimestamp(ts(t));
          default:
            return null;
        }
      }),
      (t.prototype.convertTimestamp = function (t) {
        var e = Wo(t);
        return new Fo(e.seconds, e.nanos);
      }),
      (t.prototype.convertDocumentKey = function (t, e) {
        var n = zo.fromString(t);
        Co(Bu(n));
        var r = new dd(n.get(1), n.get(3)),
          i = new is(n.popFirst(5));
        return (
          r.isEqual(e) ||
            Ao(
              "Document " +
                i +
                " contains a document reference within a different database (" +
                r.projectId +
                "/" +
                r.database +
                ") which is not supported. It will be treated as a reference in the current database (" +
                e.projectId +
                "/" +
                e.database +
                ") instead."
            ),
          i
        );
      }),
      t
    );
  })();
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function zp(t, e, n) {
    return t
      ? n && (n.merge || n.mergeFields)
        ? t.toFirestore(e, n)
        : t.toFirestore(e)
      : e;
  }
  var Kp = (function (t) {
      function e(e) {
        var n = this;
        return ((n = t.call(this) || this).firestore = e), n;
      }
      return (
        ut(e, t),
        (e.prototype.convertBytes = function (t) {
          return new Gd(t);
        }),
        (e.prototype.convertReference = function (t) {
          var e = this.convertDocumentKey(t, this.firestore._databaseId);
          return new xd(this.firestore, null, e);
        }),
        e
      );
    })(Bp),
    $p = (function () {
      function t(t, e) {
        (this._firestore = t),
          (this._commitHandler = e),
          (this._mutations = []),
          (this._committed = !1),
          (this._dataReader = ep(t));
      }
      return (
        (t.prototype.set = function (t, e, n) {
          this._verifyNotCommitted();
          var r = Gp(t, this._firestore),
            i = zp(r.converter, e, n),
            o = np(
              this._dataReader,
              "WriteBatch.set",
              r._key,
              i,
              null !== r.converter,
              n
            );
          return this._mutations.push(o.toMutation(r._key, Ia.none())), this;
        }),
        (t.prototype.update = function (t, e, n) {
          for (var r = [], i = 3; i < arguments.length; i++)
            r[i - 3] = arguments[i];
          this._verifyNotCommitted();
          var o,
            s = Gp(t, this._firestore);
          return (
            (o =
              "string" == typeof (e = Nt(e)) || e instanceof $d
                ? lp(this._dataReader, "WriteBatch.update", s._key, e, n, r)
                : cp(this._dataReader, "WriteBatch.update", s._key, e)),
            this._mutations.push(o.toMutation(s._key, Ia.exists(!0))),
            this
          );
        }),
        (t.prototype.delete = function (t) {
          this._verifyNotCommitted();
          var e = Gp(t, this._firestore);
          return (
            (this._mutations = this._mutations.concat(
              new Fa(e._key, Ia.none())
            )),
            this
          );
        }),
        (t.prototype.commit = function () {
          return (
            this._verifyNotCommitted(),
            (this._committed = !0),
            this._mutations.length > 0
              ? this._commitHandler(this._mutations)
              : Promise.resolve()
          );
        }),
        (t.prototype._verifyNotCommitted = function () {
          if (this._committed)
            throw new Io(
              Eo.FAILED_PRECONDITION,
              "A write batch can no longer be used after commit() has been called."
            );
        }),
        t
      );
    })();
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Gp(t, e) {
    if ((t = Nt(t)).firestore !== e)
      throw new Io(
        Eo.INVALID_ARGUMENT,
        "Provided document reference is from a different Firestore instance."
      );
    return t;
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Hp = (function (t) {
    function e(e) {
      var n = this;
      return ((n = t.call(this) || this).firestore = e), n;
    }
    return (
      ut(e, t),
      (e.prototype.convertBytes = function (t) {
        return new Gd(t);
      }),
      (e.prototype.convertReference = function (t) {
        var e = this.convertDocumentKey(t, this.firestore._databaseId);
        return new xd(this.firestore, null, e);
      }),
      e
    );
  })(Bp);
  function Qp(t, e, n) {
    for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
    t = kd(t, xd);
    var o = kd(t.firestore, Ud),
      s = ep(o);
    return Yp(o, [
      ("string" == typeof (e = Nt(e)) || e instanceof $d
        ? lp(s, "updateDoc", t._key, e, n, r)
        : cp(s, "updateDoc", t._key, e)
      ).toMutation(t._key, Ia.exists(!0)),
    ]);
  }
  function Wp(t) {
    for (var e, n, r, i = [], o = 1; o < arguments.length; o++)
      i[o - 1] = arguments[o];
    t = Nt(t);
    var s = { includeMetadataChanges: !1 },
      a = 0;
    "object" != typeof i[a] || qd(i[a]) || ((s = i[a]), a++);
    var u,
      c,
      l,
      h = { includeMetadataChanges: s.includeMetadataChanges };
    if (qd(i[a])) {
      var f = i[a];
      (i[a] = null === (e = f.next) || void 0 === e ? void 0 : e.bind(f)),
        (i[a + 1] =
          null === (n = f.error) || void 0 === n ? void 0 : n.bind(f)),
        (i[a + 2] =
          null === (r = f.complete) || void 0 === r ? void 0 : r.bind(f));
    }
    if (t instanceof xd)
      (c = kd(t.firestore, Ud)),
        (l = Ks(t._key.path)),
        (u = {
          next: function (e) {
            i[a] && i[a](Xp(c, t, e));
          },
          error: i[a + 1],
          complete: i[a + 2],
        });
    else {
      var d = kd(t, Rd);
      (c = kd(d.firestore, Ud)), (l = d._query);
      var p = new Hp(c);
      (u = {
        next: function (t) {
          i[a] && i[a](new kp(c, p, d, t));
        },
        error: i[a + 1],
        complete: i[a + 2],
      }),
        Cp(t._query);
    }
    return (function (t, e, n, r) {
      var i = this,
        o = new Xf(r),
        s = new cf(e, o, n);
      return (
        t.asyncQueue.enqueueAndForget(function () {
          return lt(i, void 0, void 0, function () {
            var e;
            return ht(this, function (n) {
              switch (n.label) {
                case 0:
                  return (e = rf), [4, cd(t)];
                case 1:
                  return [2, e.apply(void 0, [n.sent(), s])];
              }
            });
          });
        }),
        function () {
          o.Wo(),
            t.asyncQueue.enqueueAndForget(function () {
              return lt(i, void 0, void 0, function () {
                var e;
                return ht(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (e = of), [4, cd(t)];
                    case 1:
                      return [2, e.apply(void 0, [n.sent(), s])];
                  }
                });
              });
            });
        }
      );
    })(jd(c), l, h, u);
  }
  function Yp(t, e) {
    return (function (t, e) {
      var n = this,
        r = new fc();
      return (
        t.asyncQueue.enqueueAndForget(function () {
          return lt(n, void 0, void 0, function () {
            var n;
            return ht(this, function (i) {
              switch (i.label) {
                case 0:
                  return (n = bf), [4, ud(t)];
                case 1:
                  return [2, n.apply(void 0, [i.sent(), e, r])];
              }
            });
          });
        }),
        r.promise
      );
    })(jd(t), e);
  }
  function Xp(t, e, n) {
    var r = n.docs.get(e._key),
      i = new Hp(t);
    return new Sp(
      t,
      i,
      e._key,
      r,
      new _p(n.hasPendingWrites, n.fromCache),
      e.converter
    );
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Jp = (function (t) {
    function e(e, n) {
      var r = this;
      return ((r = t.call(this, e, n) || this)._firestore = e), r;
    }
    return (
      ut(e, t),
      (e.prototype.get = function (e) {
        var n = this,
          r = Gp(e, this._firestore),
          i = new Hp(this._firestore);
        return t.prototype.get.call(this, e).then(function (t) {
          return new Sp(
            n._firestore,
            i,
            r._key,
            t._document,
            new _p(!1, !1),
            r.converter
          );
        });
      }),
      e
    );
  })(
    (function () {
      function t(t, e) {
        (this._firestore = t),
          (this._transaction = e),
          (this._dataReader = ep(t));
      }
      return (
        (t.prototype.get = function (t) {
          var e = this,
            n = Gp(t, this._firestore),
            r = new Kp(this._firestore);
          return this._transaction.lookup([n._key]).then(function (t) {
            if (!t || 1 !== t.length) return Do();
            var i = t[0];
            if (i.isFoundDocument())
              return new Ep(e._firestore, r, i.key, i, n.converter);
            if (i.isNoDocument())
              return new Ep(e._firestore, r, n._key, null, n.converter);
            throw Do();
          });
        }),
        (t.prototype.set = function (t, e, n) {
          var r = Gp(t, this._firestore),
            i = zp(r.converter, e, n),
            o = np(
              this._dataReader,
              "Transaction.set",
              r._key,
              i,
              null !== r.converter,
              n
            );
          return this._transaction.set(r._key, o), this;
        }),
        (t.prototype.update = function (t, e, n) {
          for (var r = [], i = 3; i < arguments.length; i++)
            r[i - 3] = arguments[i];
          var o,
            s = Gp(t, this._firestore);
          return (
            (o =
              "string" == typeof (e = Nt(e)) || e instanceof $d
                ? lp(this._dataReader, "Transaction.update", s._key, e, n, r)
                : cp(this._dataReader, "Transaction.update", s._key, e)),
            this._transaction.update(s._key, o),
            this
          );
        }),
        (t.prototype.delete = function (t) {
          var e = Gp(t, this._firestore);
          return this._transaction.delete(e._key), this;
        }),
        t
      );
    })()
  );
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Zp() {
    if ("undefined" == typeof Uint8Array)
      throw new Io(
        Eo.UNIMPLEMENTED,
        "Uint8Arrays are not available in this environment."
      );
  }
  function tv() {
    if ("undefined" == typeof atob)
      throw new Io(
        Eo.UNIMPLEMENTED,
        "Blobs are unavailable in Firestore in this environment."
      );
  }
  var ev = (function () {
      function t(t) {
        this._delegate = t;
      }
      return (
        (t.fromBase64String = function (e) {
          return tv(), new t(Gd.fromBase64String(e));
        }),
        (t.fromUint8Array = function (e) {
          return Zp(), new t(Gd.fromUint8Array(e));
        }),
        (t.prototype.toBase64 = function () {
          return tv(), this._delegate.toBase64();
        }),
        (t.prototype.toUint8Array = function () {
          return Zp(), this._delegate.toUint8Array();
        }),
        (t.prototype.isEqual = function (t) {
          return this._delegate.isEqual(t._delegate);
        }),
        (t.prototype.toString = function () {
          return "Blob(base64: " + this.toBase64() + ")";
        }),
        t
      );
    })(),
    nv = (function () {
      function t() {}
      return (
        (t.prototype.enableIndexedDbPersistence = function (t, e) {
          return (function (t, e) {
            Kd((t = kd(t, Ud)));
            var n = jd(t),
              r = t._freezeSettings(),
              i = new Yf();
            return zd(
              n,
              i,
              new Qf(i, r.cacheSizeBytes, null == e ? void 0 : e.forceOwnership)
            );
          })(t._delegate, { forceOwnership: e });
        }),
        (t.prototype.enableMultiTabIndexedDbPersistence = function (t) {
          return (function (t) {
            Kd((t = kd(t, Ud)));
            var e = jd(t),
              n = t._freezeSettings(),
              r = new Yf();
            return zd(e, r, new Wf(r, n.cacheSizeBytes));
          })(t._delegate);
        }),
        (t.prototype.clearIndexedDbPersistence = function (t) {
          return (function (t) {
            var e = this;
            if (t._initialized && !t._terminated)
              throw new Io(
                Eo.FAILED_PRECONDITION,
                "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated."
              );
            var n = new fc();
            return (
              t._queue.enqueueAndForgetEvenWhileRestricted(function () {
                return lt(e, void 0, void 0, function () {
                  var e;
                  return ht(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return (
                          r.trys.push([0, 2, , 3]),
                          [
                            4,
                            (function (t) {
                              return lt(this, void 0, void 0, function () {
                                var e;
                                return ht(this, function (n) {
                                  switch (n.label) {
                                    case 0:
                                      return vc.yt()
                                        ? ((e = t + "main"), [4, vc.delete(e)])
                                        : [2, Promise.resolve()];
                                    case 1:
                                      return n.sent(), [2];
                                  }
                                });
                              });
                            })(Al(t._databaseId, t._persistenceKey)),
                          ]
                        );
                      case 1:
                        return r.sent(), n.resolve(), [3, 3];
                      case 2:
                        return (e = r.sent()), n.reject(e), [3, 3];
                      case 3:
                        return [2];
                    }
                  });
                });
              }),
              n.promise
            );
          })(t._delegate);
        }),
        t
      );
    })(),
    rv = (function () {
      function t(t, e, n) {
        var r = this;
        (this._delegate = e),
          (this.Zc = n),
          (this.INTERNAL = {
            delete: function () {
              return r.terminate();
            },
          }),
          t instanceof dd || (this.tu = t);
      }
      return (
        Object.defineProperty(t.prototype, "_databaseId", {
          get: function () {
            return this._delegate._databaseId;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.settings = function (t) {
          var e = this._delegate._getSettings();
          t.merge ||
            e.host === t.host ||
            ko(
              "You are overriding the original host. If you did not intend to override your settings, use {merge: true}."
            ),
            t.merge &&
              delete (t = Object.assign(Object.assign({}, e), t)).merge,
            this._delegate._setSettings(t);
        }),
        (t.prototype.useEmulator = function (t, e, n) {
          void 0 === n && (n = {}),
            (function (t, e, n, r) {
              void 0 === r && (r = {});
              var i = (t = kd(t, Cd))._getSettings();
              if (
                ("firestore.googleapis.com" !== i.host &&
                  i.host !== e &&
                  ko(
                    "Host has been set in both settings() and useEmulator(), emulator host will be used"
                  ),
                t._setSettings(
                  Object.assign(Object.assign({}, i), {
                    host: e + ":" + n,
                    ssl: !1,
                  })
                ),
                r.mockUserToken)
              ) {
                var o = (function (t, e) {
                    if (t.uid)
                      throw new Error(
                        'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
                      );
                    var n = e || "demo-project",
                      r = t.iat || 0,
                      i = t.sub || t.user_id;
                    if (!i)
                      throw new Error(
                        "mockUserToken must contain 'sub' or 'user_id' field!"
                      );
                    var o = ct(
                      {
                        iss: "https://securetoken.google.com/" + n,
                        aud: n,
                        iat: r,
                        exp: r + 3600,
                        auth_time: r,
                        sub: i,
                        user_id: i,
                        firebase: {
                          sign_in_provider: "custom",
                          identities: {},
                        },
                      },
                      t
                    );
                    return [
                      vt.encodeString(
                        JSON.stringify({ alg: "none", type: "JWT" }),
                        !1
                      ),
                      vt.encodeString(JSON.stringify(o), !1),
                      "",
                    ].join(".");
                  })(r.mockUserToken),
                  s = r.mockUserToken.sub || r.mockUserToken.user_id;
                if (!s)
                  throw new Io(
                    Eo.INVALID_ARGUMENT,
                    "mockUserToken must contain 'sub' or 'user_id' field!"
                  );
                t._credentials = new yd(new vd(o, new Zl(s)));
              }
            })(this._delegate, t, e, n);
        }),
        (t.prototype.enableNetwork = function () {
          return (function (t) {
            var e = this;
            return t.asyncQueue.enqueue(function () {
              return lt(e, void 0, void 0, function () {
                var e, n;
                return ht(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, od(t)];
                    case 1:
                      return (e = r.sent()), [4, ad(t)];
                    case 2:
                      return (
                        (n = r.sent()),
                        [
                          2,
                          (e.setNetworkEnabled(!0),
                          (function (t) {
                            var e = xo(t);
                            return e.Or.delete(0), Sh(e);
                          })(n)),
                        ]
                      );
                  }
                });
              });
            });
          })(jd(kd(this._delegate, Ud)));
        }),
        (t.prototype.disableNetwork = function () {
          return (function (t) {
            var e = this;
            return t.asyncQueue.enqueue(function () {
              return lt(e, void 0, void 0, function () {
                var e, n;
                return ht(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, od(t)];
                    case 1:
                      return (e = r.sent()), [4, ad(t)];
                    case 2:
                      return (
                        (n = r.sent()),
                        [
                          2,
                          (e.setNetworkEnabled(!1),
                          (function (t) {
                            return lt(this, void 0, void 0, function () {
                              var e;
                              return ht(this, function (n) {
                                switch (n.label) {
                                  case 0:
                                    return (e = xo(t)).Or.add(0), [4, Ah(e)];
                                  case 1:
                                    return n.sent(), e.Br.set("Offline"), [2];
                                }
                              });
                            });
                          })(n)),
                        ]
                      );
                  }
                });
              });
            });
          })(jd(kd(this._delegate, Ud)));
        }),
        (t.prototype.enablePersistence = function (t) {
          var e = !1,
            n = !1;
          return (
            t &&
              Td(
                "synchronizeTabs",
                (e = !!t.synchronizeTabs),
                "experimentalForceOwningTab",
                (n = !!t.experimentalForceOwningTab)
              ),
            e
              ? this.Zc.enableMultiTabIndexedDbPersistence(this)
              : this.Zc.enableIndexedDbPersistence(this, n)
          );
        }),
        (t.prototype.clearPersistence = function () {
          return this.Zc.clearIndexedDbPersistence(this);
        }),
        (t.prototype.terminate = function () {
          return (
            this.tu &&
              (this.tu._removeServiceInstance("firestore"),
              this.tu._removeServiceInstance("firestore-exp")),
            this._delegate._delete()
          );
        }),
        (t.prototype.waitForPendingWrites = function () {
          return (function (t) {
            var e = this,
              n = new fc();
            return (
              t.asyncQueue.enqueueAndForget(function () {
                return lt(e, void 0, void 0, function () {
                  var e;
                  return ht(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return (e = Sf), [4, ud(t)];
                      case 1:
                        return [2, e.apply(void 0, [r.sent(), n])];
                    }
                  });
                });
              }),
              n.promise
            );
          })(jd(kd(this._delegate, Ud)));
        }),
        (t.prototype.onSnapshotsInSync = function (t) {
          return (function (t, e) {
            return (function (t, e) {
              var n = this,
                r = new Xf(e);
              return (
                t.asyncQueue.enqueueAndForget(function () {
                  return lt(n, void 0, void 0, function () {
                    var e;
                    return ht(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return (
                            (e = function (t, e) {
                              xo(t).Gr.add(e), e.next();
                            }),
                            [4, cd(t)]
                          );
                        case 1:
                          return [2, e.apply(void 0, [n.sent(), r])];
                      }
                    });
                  });
                }),
                function () {
                  r.Wo(),
                    t.asyncQueue.enqueueAndForget(function () {
                      return lt(n, void 0, void 0, function () {
                        var e;
                        return ht(this, function (n) {
                          switch (n.label) {
                            case 0:
                              return (
                                (e = function (t, e) {
                                  xo(t).Gr.delete(e);
                                }),
                                [4, cd(t)]
                              );
                            case 1:
                              return [2, e.apply(void 0, [n.sent(), r])];
                          }
                        });
                      });
                    });
                }
              );
            })(jd((t = kd(t, Ud))), qd(e) ? e : { next: e });
          })(this._delegate, t);
        }),
        Object.defineProperty(t.prototype, "app", {
          get: function () {
            if (!this.tu)
              throw new Io(
                Eo.FAILED_PRECONDITION,
                "Firestore was not initialized using the Firebase SDK. 'app' is not available"
              );
            return this.tu;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.collection = function (t) {
          try {
            return new yv(this, Ld(this._delegate, t));
          } catch (t) {
            throw cv(t, "collection()", "Firestore.collection()");
          }
        }),
        (t.prototype.doc = function (t) {
          try {
            return new uv(this, Pd(this._delegate, t));
          } catch (t) {
            throw cv(t, "doc()", "Firestore.doc()");
          }
        }),
        (t.prototype.collectionGroup = function (t) {
          try {
            return new pv(
              this,
              (function (t, e) {
                if (
                  ((t = kd(t, Cd)),
                  Ed("collectionGroup", "collection id", e),
                  e.indexOf("/") >= 0)
                )
                  throw new Io(
                    Eo.INVALID_ARGUMENT,
                    "Invalid collection ID '" +
                      e +
                      "' passed to function collectionGroup(). Collection IDs must not contain '/'."
                  );
                return new Rd(
                  t,
                  null,
                  (function (t) {
                    return new Bs(zo.emptyPath(), t);
                  })(e)
                );
              })(this._delegate, t)
            );
          } catch (t) {
            throw cv(t, "collectionGroup()", "Firestore.collectionGroup()");
          }
        }),
        (t.prototype.runTransaction = function (t) {
          var e = this;
          return (function (t, e) {
            return (function (t, e) {
              var n = this,
                r = new fc();
              return (
                t.asyncQueue.enqueueAndForget(function () {
                  return lt(n, void 0, void 0, function () {
                    var n;
                    return ht(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return [
                            4,
                            (function (t) {
                              return id(t).then(function (t) {
                                return t.datastore;
                              });
                            })(t),
                          ];
                        case 1:
                          return (
                            (n = i.sent()),
                            new Zf(t.asyncQueue, n, e, r).run(),
                            [2]
                          );
                      }
                    });
                  });
                }),
                r.promise
              );
            })(jd(t), function (n) {
              return e(new Jp(t, n));
            });
          })(this._delegate, function (n) {
            return t(new ov(e, n));
          });
        }),
        (t.prototype.batch = function () {
          var t = this;
          return (
            jd(this._delegate),
            new sv(
              new $p(this._delegate, function (e) {
                return Yp(t._delegate, e);
              })
            )
          );
        }),
        (t.prototype.loadBundle = function (t) {
          throw new Io(
            Eo.FAILED_PRECONDITION,
            '"loadBundle()" does not exist, have you imported "firebase/firestore/bundle"?'
          );
        }),
        (t.prototype.namedQuery = function (t) {
          throw new Io(
            Eo.FAILED_PRECONDITION,
            '"namedQuery()" does not exist, have you imported "firebase/firestore/bundle"?'
          );
        }),
        t
      );
    })(),
    iv = (function (t) {
      function e(e) {
        var n = this;
        return ((n = t.call(this) || this).firestore = e), n;
      }
      return (
        ut(e, t),
        (e.prototype.convertBytes = function (t) {
          return new ev(new Gd(t));
        }),
        (e.prototype.convertReference = function (t) {
          var e = this.convertDocumentKey(t, this.firestore._databaseId);
          return uv.eu(e, this.firestore, null);
        }),
        e
      );
    })(Bp);
  var ov = (function () {
      function t(t, e) {
        (this._firestore = t),
          (this._delegate = e),
          (this._userDataWriter = new iv(t));
      }
      return (
        (t.prototype.get = function (t) {
          var e = this,
            n = mv(t);
          return this._delegate.get(n).then(function (t) {
            return new fv(
              e._firestore,
              new Sp(
                e._firestore._delegate,
                e._userDataWriter,
                t._key,
                t._document,
                t.metadata,
                n.converter
              )
            );
          });
        }),
        (t.prototype.set = function (t, e, n) {
          var r = mv(t);
          return (
            n
              ? (Id("Transaction.set", n), this._delegate.set(r, e, n))
              : this._delegate.set(r, e),
            this
          );
        }),
        (t.prototype.update = function (t, e, n) {
          for (var r, i = [], o = 3; o < arguments.length; o++)
            i[o - 3] = arguments[o];
          var s = mv(t);
          return (
            2 === arguments.length
              ? this._delegate.update(s, e)
              : (r = this._delegate).update.apply(r, pt([s, e, n], i)),
            this
          );
        }),
        (t.prototype.delete = function (t) {
          var e = mv(t);
          return this._delegate.delete(e), this;
        }),
        t
      );
    })(),
    sv = (function () {
      function t(t) {
        this._delegate = t;
      }
      return (
        (t.prototype.set = function (t, e, n) {
          var r = mv(t);
          return (
            n
              ? (Id("WriteBatch.set", n), this._delegate.set(r, e, n))
              : this._delegate.set(r, e),
            this
          );
        }),
        (t.prototype.update = function (t, e, n) {
          for (var r, i = [], o = 3; o < arguments.length; o++)
            i[o - 3] = arguments[o];
          var s = mv(t);
          return (
            2 === arguments.length
              ? this._delegate.update(s, e)
              : (r = this._delegate).update.apply(r, pt([s, e, n], i)),
            this
          );
        }),
        (t.prototype.delete = function (t) {
          var e = mv(t);
          return this._delegate.delete(e), this;
        }),
        (t.prototype.commit = function () {
          return this._delegate.commit();
        }),
        t
      );
    })(),
    av = (function () {
      function t(t, e, n) {
        (this._firestore = t), (this._userDataWriter = e), (this._delegate = n);
      }
      return (
        (t.prototype.fromFirestore = function (t, e) {
          var n = new Ap(
            this._firestore._delegate,
            this._userDataWriter,
            t._key,
            t._document,
            t.metadata,
            null
          );
          return this._delegate.fromFirestore(
            new dv(this._firestore, n),
            null != e ? e : {}
          );
        }),
        (t.prototype.toFirestore = function (t, e) {
          return e
            ? this._delegate.toFirestore(t, e)
            : this._delegate.toFirestore(t);
        }),
        (t.nu = function (e, n) {
          var r = t.su,
            i = r.get(e);
          i || ((i = new WeakMap()), r.set(e, i));
          var o = i.get(n);
          return o || ((o = new t(e, new iv(e), n)), i.set(n, o)), o;
        }),
        t
      );
    })();
  av.su = new WeakMap();
  var uv = (function () {
    function t(t, e) {
      (this.firestore = t),
        (this._delegate = e),
        (this._userDataWriter = new iv(t));
    }
    return (
      (t.iu = function (e, n, r) {
        if (e.length % 2 != 0)
          throw new Io(
            Eo.INVALID_ARGUMENT,
            "Invalid document reference. Document references must have an even number of segments, but " +
              e.canonicalString() +
              " has " +
              e.length
          );
        return new t(n, new xd(n._delegate, r, new is(e)));
      }),
      (t.eu = function (e, n, r) {
        return new t(n, new xd(n._delegate, r, e));
      }),
      Object.defineProperty(t.prototype, "id", {
        get: function () {
          return this._delegate.id;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "parent", {
        get: function () {
          return new yv(this.firestore, this._delegate.parent);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "path", {
        get: function () {
          return this._delegate.path;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.collection = function (t) {
        try {
          return new yv(this.firestore, Ld(this._delegate, t));
        } catch (t) {
          throw cv(t, "collection()", "DocumentReference.collection()");
        }
      }),
      (t.prototype.isEqual = function (t) {
        return (t = Nt(t)) instanceof xd && Md(this._delegate, t);
      }),
      (t.prototype.set = function (t, e) {
        e = Id("DocumentReference.set", e);
        try {
          return (function (t, e, n) {
            t = kd(t, xd);
            var r = kd(t.firestore, Ud),
              i = zp(t.converter, e, n);
            return Yp(r, [
              np(
                ep(r),
                "setDoc",
                t._key,
                i,
                null !== t.converter,
                n
              ).toMutation(t._key, Ia.none()),
            ]);
          })(this._delegate, t, e);
        } catch (t) {
          throw cv(t, "setDoc()", "DocumentReference.set()");
        }
      }),
      (t.prototype.update = function (t, e) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        try {
          return 1 === arguments.length
            ? Qp(this._delegate, t)
            : Qp.apply(void 0, pt([this._delegate, t, e], n));
        } catch (t) {
          throw cv(t, "updateDoc()", "DocumentReference.update()");
        }
      }),
      (t.prototype.delete = function () {
        return Yp(kd((t = this._delegate).firestore, Ud), [
          new Fa(t._key, Ia.none()),
        ]);
        var t;
      }),
      (t.prototype.onSnapshot = function () {
        for (var t = this, e = [], n = 0; n < arguments.length; n++)
          e[n] = arguments[n];
        var r = lv(e),
          i = hv(e, function (e) {
            return new fv(
              t.firestore,
              new Sp(
                t.firestore._delegate,
                t._userDataWriter,
                e._key,
                e._document,
                e.metadata,
                t._delegate.converter
              )
            );
          });
        return Wp(this._delegate, r, i);
      }),
      (t.prototype.get = function (t) {
        var e = this;
        return (
          "cache" === (null == t ? void 0 : t.source)
            ? (function (t) {
                t = kd(t, xd);
                var e = kd(t.firestore, Ud),
                  n = jd(e),
                  r = new Hp(e);
                return (function (t, e) {
                  var n = this,
                    r = new fc();
                  return (
                    t.asyncQueue.enqueueAndForget(function () {
                      return lt(n, void 0, void 0, function () {
                        var n;
                        return ht(this, function (i) {
                          switch (i.label) {
                            case 0:
                              return (
                                (n = function (t, e, n) {
                                  return lt(this, void 0, void 0, function () {
                                    var r, i;
                                    return ht(this, function (o) {
                                      switch (o.label) {
                                        case 0:
                                          return (
                                            o.trys.push([0, 2, , 3]),
                                            [
                                              4,
                                              (function (t, e) {
                                                var n = xo(t);
                                                return n.persistence.runTransaction(
                                                  "read document",
                                                  "readonly",
                                                  function (t) {
                                                    return n.Mn.mn(t, e);
                                                  }
                                                );
                                              })(t, e),
                                            ]
                                          );
                                        case 1:
                                          return (
                                            (i = o.sent()).isFoundDocument()
                                              ? n.resolve(i)
                                              : i.isNoDocument()
                                              ? n.resolve(null)
                                              : n.reject(
                                                  new Io(
                                                    Eo.UNAVAILABLE,
                                                    "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"
                                                  )
                                                ),
                                            [3, 3]
                                          );
                                        case 2:
                                          return (
                                            (r = o.sent()),
                                            (i = Xh(
                                              r,
                                              "Failed to get document '" +
                                                e +
                                                " from cache"
                                            )),
                                            n.reject(i),
                                            [3, 3]
                                          );
                                        case 3:
                                          return [2];
                                      }
                                    });
                                  });
                                }),
                                [4, sd(t)]
                              );
                            case 1:
                              return [2, n.apply(void 0, [i.sent(), e, r])];
                          }
                        });
                      });
                    }),
                    r.promise
                  );
                })(n, t._key).then(function (n) {
                  return new Sp(
                    e,
                    r,
                    t._key,
                    n,
                    new _p(null !== n && n.hasLocalMutations, !0),
                    t.converter
                  );
                });
              })(this._delegate)
            : "server" === (null == t ? void 0 : t.source)
            ? (function (t) {
                t = kd(t, xd);
                var e = kd(t.firestore, Ud);
                return ld(jd(e), t._key, { source: "server" }).then(function (
                  n
                ) {
                  return Xp(e, t, n);
                });
              })(this._delegate)
            : (function (t) {
                t = kd(t, xd);
                var e = kd(t.firestore, Ud);
                return ld(jd(e), t._key).then(function (n) {
                  return Xp(e, t, n);
                });
              })(this._delegate)
        ).then(function (t) {
          return new fv(
            e.firestore,
            new Sp(
              e.firestore._delegate,
              e._userDataWriter,
              t._key,
              t._document,
              t.metadata,
              e._delegate.converter
            )
          );
        });
      }),
      (t.prototype.withConverter = function (e) {
        return new t(
          this.firestore,
          e
            ? this._delegate.withConverter(av.nu(this.firestore, e))
            : this._delegate.withConverter(null)
        );
      }),
      t
    );
  })();
  function cv(t, e, n) {
    return (t.message = t.message.replace(e, n)), t;
  }
  function lv(t) {
    for (var e = 0, n = t; e < n.length; e++) {
      var r = n[e];
      if ("object" == typeof r && !qd(r)) return r;
    }
    return {};
  }
  function hv(t, e) {
    var n, r, i;
    return {
      next: function (t) {
        i.next && i.next(e(t));
      },
      error:
        null ===
          (n = (i = qd(t[0])
            ? t[0]
            : qd(t[1])
            ? t[1]
            : "function" == typeof t[0]
            ? { next: t[0], error: t[1], complete: t[2] }
            : { next: t[1], error: t[2], complete: t[3] }).error) ||
        void 0 === n
          ? void 0
          : n.bind(i),
      complete: null === (r = i.complete) || void 0 === r ? void 0 : r.bind(i),
    };
  }
  var fv = (function () {
      function t(t, e) {
        (this._firestore = t), (this._delegate = e);
      }
      return (
        Object.defineProperty(t.prototype, "ref", {
          get: function () {
            return new uv(this._firestore, this._delegate.ref);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "id", {
          get: function () {
            return this._delegate.id;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "metadata", {
          get: function () {
            return this._delegate.metadata;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "exists", {
          get: function () {
            return this._delegate.exists();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.data = function (t) {
          return this._delegate.data(t);
        }),
        (t.prototype.get = function (t, e) {
          return this._delegate.get(t, e);
        }),
        (t.prototype.isEqual = function (t) {
          return Dp(this._delegate, t._delegate);
        }),
        t
      );
    })(),
    dv = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        ut(e, t),
        (e.prototype.data = function (t) {
          return this._delegate.data(t);
        }),
        e
      );
    })(fv),
    pv = (function () {
      function t(t, e) {
        (this.firestore = t),
          (this._delegate = e),
          (this._userDataWriter = new iv(t));
      }
      return (
        (t.prototype.where = function (e, n, r) {
          try {
            return new t(
              this.firestore,
              Rp(
                this._delegate,
                (function (t, e, n) {
                  var r = e,
                    i = Tp("where", t);
                  return new Op(i, r, n);
                })(e, n, r)
              )
            );
          } catch (e) {
            throw cv(e, /(orderBy|where)\(\)/, "Query.$1()");
          }
        }),
        (t.prototype.orderBy = function (e, n) {
          try {
            return new t(
              this.firestore,
              Rp(
                this._delegate,
                (function (t, e) {
                  void 0 === e && (e = "asc");
                  var n = e,
                    r = Tp("orderBy", t);
                  return new Lp(r, n);
                })(e, n)
              )
            );
          } catch (e) {
            throw cv(e, /(orderBy|where)\(\)/, "Query.$1()");
          }
        }),
        (t.prototype.limit = function (e) {
          try {
            return new t(
              this.firestore,
              Rp(
                this._delegate,
                (function (t) {
                  return Nd("limit", t), new Pp("limit", t, "F");
                })(e)
              )
            );
          } catch (e) {
            throw cv(e, "limit()", "Query.limit()");
          }
        }),
        (t.prototype.limitToLast = function (e) {
          try {
            return new t(
              this.firestore,
              Rp(
                this._delegate,
                (function (t) {
                  return Nd("limitToLast", t), new Pp("limitToLast", t, "L");
                })(e)
              )
            );
          } catch (e) {
            throw cv(e, "limitToLast()", "Query.limitToLast()");
          }
        }),
        (t.prototype.startAt = function () {
          for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          try {
            return new t(
              this.firestore,
              Rp(
                this._delegate,
                function () {
                  for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                  return new Mp("startAt", t, !0);
                }.apply(void 0, e)
              )
            );
          } catch (e) {
            throw cv(e, "startAt()", "Query.startAt()");
          }
        }),
        (t.prototype.startAfter = function () {
          for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          try {
            return new t(
              this.firestore,
              Rp(
                this._delegate,
                function () {
                  for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                  return new Mp("startAfter", t, !1);
                }.apply(void 0, e)
              )
            );
          } catch (e) {
            throw cv(e, "startAfter()", "Query.startAfter()");
          }
        }),
        (t.prototype.endBefore = function () {
          for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          try {
            return new t(
              this.firestore,
              Rp(
                this._delegate,
                function () {
                  for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                  return new Fp("endBefore", t, !0);
                }.apply(void 0, e)
              )
            );
          } catch (e) {
            throw cv(e, "endBefore()", "Query.endBefore()");
          }
        }),
        (t.prototype.endAt = function () {
          for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          try {
            return new t(
              this.firestore,
              Rp(
                this._delegate,
                function () {
                  for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                  return new Fp("endAt", t, !1);
                }.apply(void 0, e)
              )
            );
          } catch (e) {
            throw cv(e, "endAt()", "Query.endAt()");
          }
        }),
        (t.prototype.isEqual = function (t) {
          return Fd(this._delegate, t._delegate);
        }),
        (t.prototype.get = function (t) {
          var e = this;
          return (
            "cache" === (null == t ? void 0 : t.source)
              ? (function (t) {
                  t = kd(t, Rd);
                  var e = kd(t.firestore, Ud),
                    n = jd(e),
                    r = new Hp(e);
                  return (function (t, e) {
                    var n = this,
                      r = new fc();
                    return (
                      t.asyncQueue.enqueueAndForget(function () {
                        return lt(n, void 0, void 0, function () {
                          var n;
                          return ht(this, function (i) {
                            switch (i.label) {
                              case 0:
                                return (
                                  (n = function (t, e, n) {
                                    return lt(
                                      this,
                                      void 0,
                                      void 0,
                                      function () {
                                        var r, i, o, s, a;
                                        return ht(this, function (u) {
                                          switch (u.label) {
                                            case 0:
                                              return (
                                                u.trys.push([0, 2, , 3]),
                                                [4, ql(t, e, !0)]
                                              );
                                            case 1:
                                              return (
                                                (a = u.sent()),
                                                (r = new ff(e, a.Bn)),
                                                (i = r._o(a.documents)),
                                                (o = r.applyChanges(i, !1)),
                                                n.resolve(o.snapshot),
                                                [3, 3]
                                              );
                                            case 2:
                                              return (
                                                (s = u.sent()),
                                                (a = Xh(
                                                  s,
                                                  "Failed to execute query '" +
                                                    e +
                                                    " against cache"
                                                )),
                                                n.reject(a),
                                                [3, 3]
                                              );
                                            case 3:
                                              return [2];
                                          }
                                        });
                                      }
                                    );
                                  }),
                                  [4, sd(t)]
                                );
                              case 1:
                                return [2, n.apply(void 0, [i.sent(), e, r])];
                            }
                          });
                        });
                      }),
                      r.promise
                    );
                  })(n, t._query).then(function (n) {
                    return new kp(e, r, t, n);
                  });
                })(this._delegate)
              : "server" === (null == t ? void 0 : t.source)
              ? (function (t) {
                  t = kd(t, Rd);
                  var e = kd(t.firestore, Ud),
                    n = jd(e),
                    r = new Hp(e);
                  return hd(n, t._query, { source: "server" }).then(function (
                    n
                  ) {
                    return new kp(e, r, t, n);
                  });
                })(this._delegate)
              : (function (t) {
                  t = kd(t, Rd);
                  var e = kd(t.firestore, Ud),
                    n = jd(e),
                    r = new Hp(e);
                  return (
                    Cp(t._query),
                    hd(n, t._query).then(function (n) {
                      return new kp(e, r, t, n);
                    })
                  );
                })(this._delegate)
          ).then(function (t) {
            return new gv(
              e.firestore,
              new kp(
                e.firestore._delegate,
                e._userDataWriter,
                e._delegate,
                t._snapshot
              )
            );
          });
        }),
        (t.prototype.onSnapshot = function () {
          for (var t = this, e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          var r = lv(e),
            i = hv(e, function (e) {
              return new gv(
                t.firestore,
                new kp(
                  t.firestore._delegate,
                  t._userDataWriter,
                  t._delegate,
                  e._snapshot
                )
              );
            });
          return Wp(this._delegate, r, i);
        }),
        (t.prototype.withConverter = function (e) {
          return new t(
            this.firestore,
            e
              ? this._delegate.withConverter(av.nu(this.firestore, e))
              : this._delegate.withConverter(null)
          );
        }),
        t
      );
    })(),
    vv = (function () {
      function t(t, e) {
        (this._firestore = t), (this._delegate = e);
      }
      return (
        Object.defineProperty(t.prototype, "type", {
          get: function () {
            return this._delegate.type;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "doc", {
          get: function () {
            return new dv(this._firestore, this._delegate.doc);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "oldIndex", {
          get: function () {
            return this._delegate.oldIndex;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "newIndex", {
          get: function () {
            return this._delegate.newIndex;
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      );
    })(),
    gv = (function () {
      function t(t, e) {
        (this._firestore = t), (this._delegate = e);
      }
      return (
        Object.defineProperty(t.prototype, "query", {
          get: function () {
            return new pv(this._firestore, this._delegate.query);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "metadata", {
          get: function () {
            return this._delegate.metadata;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this._delegate.size;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "empty", {
          get: function () {
            return this._delegate.empty;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "docs", {
          get: function () {
            var t = this;
            return this._delegate.docs.map(function (e) {
              return new dv(t._firestore, e);
            });
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.docChanges = function (t) {
          var e = this;
          return this._delegate.docChanges(t).map(function (t) {
            return new vv(e._firestore, t);
          });
        }),
        (t.prototype.forEach = function (t, e) {
          var n = this;
          this._delegate.forEach(function (r) {
            t.call(e, new dv(n._firestore, r));
          });
        }),
        (t.prototype.isEqual = function (t) {
          return Dp(this._delegate, t._delegate);
        }),
        t
      );
    })(),
    yv = (function (t) {
      function e(e, n) {
        var r = this;
        return (
          ((r = t.call(this, e, n) || this).firestore = e), (r._delegate = n), r
        );
      }
      return (
        ut(e, t),
        Object.defineProperty(e.prototype, "id", {
          get: function () {
            return this._delegate.id;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "path", {
          get: function () {
            return this._delegate.path;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "parent", {
          get: function () {
            var t = this._delegate.parent;
            return t ? new uv(this.firestore, t) : null;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.doc = function (t) {
          try {
            return new uv(
              this.firestore,
              void 0 === t ? Pd(this._delegate) : Pd(this._delegate, t)
            );
          } catch (t) {
            throw cv(t, "doc()", "CollectionReference.doc()");
          }
        }),
        (e.prototype.add = function (t) {
          var e = this;
          return (function (t, e) {
            var n = kd(t.firestore, Ud),
              r = Pd(t),
              i = zp(t.converter, e);
            return Yp(n, [
              np(
                ep(t.firestore),
                "addDoc",
                r._key,
                i,
                null !== t.converter,
                {}
              ).toMutation(r._key, Ia.exists(!1)),
            ]).then(function () {
              return r;
            });
          })(this._delegate, t).then(function (t) {
            return new uv(e.firestore, t);
          });
        }),
        (e.prototype.isEqual = function (t) {
          return Md(this._delegate, t._delegate);
        }),
        (e.prototype.withConverter = function (t) {
          return new e(
            this.firestore,
            t
              ? this._delegate.withConverter(av.nu(this.firestore, t))
              : this._delegate.withConverter(null)
          );
        }),
        e
      );
    })(pv);
  function mv(t) {
    return kd(t, xd);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var bv,
    wv = (function () {
      function t() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this._delegate = new ($d.bind.apply($d, pt([void 0], t)))();
      }
      return (
        (t.documentId = function () {
          return new t($o.keyField().canonicalString());
        }),
        (t.prototype.isEqual = function (t) {
          return (
            (t = Nt(t)) instanceof $d &&
            this._delegate._internalPath.isEqual(t._internalPath)
          );
        }),
        t
      );
    })(),
    Ev = (function () {
      function t(t) {
        this._delegate = t;
      }
      return (
        (t.serverTimestamp = function () {
          var e = new op("serverTimestamp");
          return (e._methodName = "FieldValue.serverTimestamp"), new t(e);
        }),
        (t.delete = function () {
          var e = new rp("deleteField");
          return (e._methodName = "FieldValue.delete"), new t(e);
        }),
        (t.arrayUnion = function () {
          for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          var r = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            return new sp("arrayUnion", t);
          }.apply(void 0, e);
          return (r._methodName = "FieldValue.arrayUnion"), new t(r);
        }),
        (t.arrayRemove = function () {
          for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          var r = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            return new ap("arrayRemove", t);
          }.apply(void 0, e);
          return (r._methodName = "FieldValue.arrayRemove"), new t(r);
        }),
        (t.increment = function (e) {
          var n = (function (t) {
            return new up("increment", t);
          })(e);
          return (n._methodName = "FieldValue.increment"), new t(n);
        }),
        (t.prototype.isEqual = function (t) {
          return this._delegate.isEqual(t._delegate);
        }),
        t
      );
    })(),
    Iv = {
      Firestore: rv,
      GeoPoint: Qd,
      Timestamp: Fo,
      Blob: ev,
      Transaction: ov,
      WriteBatch: sv,
      DocumentReference: uv,
      DocumentSnapshot: fv,
      Query: pv,
      QueryDocumentSnapshot: dv,
      QuerySnapshot: gv,
      CollectionReference: yv,
      FieldPath: wv,
      FieldValue: Ev,
      setLogLevel: function (t) {
        var e;
        (e = t), To.setLogLevel(e);
      },
      CACHE_SIZE_UNLIMITED: -1,
    };
  (function (t, e) {
    t.INTERNAL.registerComponent(
      new Dt(
        "firestore",
        function (t) {
          return (function (t, e) {
            return new rv(t, new Ud(t, e), new nv());
          })(
            t.getProvider("app").getImmediate(),
            t.getProvider("auth-internal")
          );
        },
        "PUBLIC"
      ).setServiceProps(Object.assign({}, Iv))
    );
  })((bv = re)),
    bv.registerVersion("@firebase/firestore", "2.3.9");
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var Tv = {
      OK: "ok",
      CANCELLED: "cancelled",
      UNKNOWN: "unknown",
      INVALID_ARGUMENT: "invalid-argument",
      DEADLINE_EXCEEDED: "deadline-exceeded",
      NOT_FOUND: "not-found",
      ALREADY_EXISTS: "already-exists",
      PERMISSION_DENIED: "permission-denied",
      UNAUTHENTICATED: "unauthenticated",
      RESOURCE_EXHAUSTED: "resource-exhausted",
      FAILED_PRECONDITION: "failed-precondition",
      ABORTED: "aborted",
      OUT_OF_RANGE: "out-of-range",
      UNIMPLEMENTED: "unimplemented",
      INTERNAL: "internal",
      UNAVAILABLE: "unavailable",
      DATA_LOSS: "data-loss",
    },
    _v = (function (t) {
      function e(n, r, i) {
        var o = t.call(this, r) || this;
        return (
          Object.setPrototypeOf(o, e.prototype),
          (o.code = n),
          (o.details = i),
          o
        );
      }
      return ut(e, t), e;
    })(Error);
  var Sv = (function () {
    function t(t, e) {
      var n = this;
      (this.auth = null),
        (this.messaging = null),
        (this.auth = t.getImmediate({ optional: !0 })),
        (this.messaging = e.getImmediate({ optional: !0 })),
        this.auth ||
          t.get().then(
            function (t) {
              return (n.auth = t);
            },
            function () {}
          ),
        this.messaging ||
          e.get().then(
            function (t) {
              return (n.messaging = t);
            },
            function () {}
          );
    }
    return (
      (t.prototype.getAuthToken = function () {
        return lt(this, void 0, void 0, function () {
          var t;
          return ht(this, function (e) {
            switch (e.label) {
              case 0:
                if (!this.auth) return [2, void 0];
                e.label = 1;
              case 1:
                return e.trys.push([1, 3, , 4]), [4, this.auth.getToken()];
              case 2:
                return (t = e.sent()) ? [2, t.accessToken] : [2, void 0];
              case 3:
                return e.sent(), [2, void 0];
              case 4:
                return [2];
            }
          });
        });
      }),
      (t.prototype.getInstanceIdToken = function () {
        return lt(this, void 0, void 0, function () {
          return ht(this, function (t) {
            switch (t.label) {
              case 0:
                if (
                  !this.messaging ||
                  !("Notification" in self) ||
                  "granted" !== Notification.permission
                )
                  return [2, void 0];
                t.label = 1;
              case 1:
                return t.trys.push([1, 3, , 4]), [4, this.messaging.getToken()];
              case 2:
                return [2, t.sent()];
              case 3:
                return t.sent(), [2, void 0];
              case 4:
                return [2];
            }
          });
        });
      }),
      (t.prototype.getContext = function () {
        return lt(this, void 0, void 0, function () {
          var t, e;
          return ht(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, this.getAuthToken()];
              case 1:
                return (t = n.sent()), [4, this.getInstanceIdToken()];
              case 2:
                return (
                  (e = n.sent()), [2, { authToken: t, instanceIdToken: e }]
                );
            }
          });
        });
      }),
      t
    );
  })();
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Av(t, e) {
    var n = {};
    for (var r in t) t.hasOwnProperty(r) && (n[r] = e(t[r]));
    return n;
  }
  var kv = (function () {
    function t() {}
    return (
      (t.prototype.encode = function (t) {
        var e = this;
        if (null == t) return null;
        if (
          (t instanceof Number && (t = t.valueOf()),
          "number" == typeof t && isFinite(t))
        )
          return t;
        if (!0 === t || !1 === t) return t;
        if ("[object String]" === Object.prototype.toString.call(t)) return t;
        if (t instanceof Date) return t.toISOString();
        if (Array.isArray(t))
          return t.map(function (t) {
            return e.encode(t);
          });
        if ("function" == typeof t || "object" == typeof t)
          return Av(t, function (t) {
            return e.encode(t);
          });
        throw new Error("Data cannot be encoded in JSON: " + t);
      }),
      (t.prototype.decode = function (t) {
        var e = this;
        if (null == t) return t;
        if (t["@type"])
          switch (t["@type"]) {
            case "type.googleapis.com/google.protobuf.Int64Value":
            case "type.googleapis.com/google.protobuf.UInt64Value":
              var n = Number(t.value);
              if (isNaN(n))
                throw new Error("Data cannot be decoded from JSON: " + t);
              return n;
            default:
              throw new Error("Data cannot be decoded from JSON: " + t);
          }
        return Array.isArray(t)
          ? t.map(function (t) {
              return e.decode(t);
            })
          : "function" == typeof t || "object" == typeof t
          ? Av(t, function (t) {
              return e.decode(t);
            })
          : t;
      }),
      t
    );
  })();
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Nv = (function () {
    function t(t, e, n, r, i, o) {
      var s = this;
      void 0 === i && (i = "us-central1"),
        (this.app_ = t),
        (this.appCheckProvider = r),
        (this.fetchImpl = o),
        (this.serializer = new kv()),
        (this.emulatorOrigin = null),
        (this.INTERNAL = {
          delete: function () {
            return Promise.resolve(s.deleteService());
          },
        }),
        (this.contextProvider = new Sv(e, n)),
        (this.cancelAllRequests = new Promise(function (t) {
          s.deleteService = function () {
            return t();
          };
        }));
      try {
        var a = new URL(i);
        (this.customDomain = a.origin), (this.region = "us-central1");
      } catch (t) {
        (this.customDomain = null), (this.region = i);
      }
    }
    return (
      Object.defineProperty(t.prototype, "app", {
        get: function () {
          return this.app_;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype._url = function (t) {
        var e = this.app_.options.projectId;
        return null !== this.emulatorOrigin
          ? this.emulatorOrigin + "/" + e + "/" + this.region + "/" + t
          : null !== this.customDomain
          ? this.customDomain + "/" + t
          : "https://" + this.region + "-" + e + ".cloudfunctions.net/" + t;
      }),
      (t.prototype.useEmulator = function (t, e) {
        this.emulatorOrigin = "http://" + t + ":" + e;
      }),
      (t.prototype.useFunctionsEmulator = function (t) {
        this.emulatorOrigin = t;
      }),
      (t.prototype.httpsCallable = function (t, e) {
        var n = this;
        return function (r) {
          return n.call(t, r, e || {});
        };
      }),
      (t.prototype.postJSON = function (t, e, n) {
        return lt(this, void 0, void 0, function () {
          var r, i, o;
          return ht(this, function (s) {
            switch (s.label) {
              case 0:
                return (
                  (n["Content-Type"] = "application/json"),
                  [4, this.getAppCheckToken()]
                );
              case 1:
                null !== (r = s.sent()) && (n["X-Firebase-AppCheck"] = r),
                  (s.label = 2);
              case 2:
                return (
                  s.trys.push([2, 4, , 5]),
                  [
                    4,
                    this.fetchImpl(t, {
                      method: "POST",
                      body: JSON.stringify(e),
                      headers: n,
                    }),
                  ]
                );
              case 3:
                return (i = s.sent()), [3, 5];
              case 4:
                return s.sent(), [2, { status: 0, json: null }];
              case 5:
                (o = null), (s.label = 6);
              case 6:
                return s.trys.push([6, 8, , 9]), [4, i.json()];
              case 7:
                return (o = s.sent()), [3, 9];
              case 8:
                return s.sent(), [3, 9];
              case 9:
                return [2, { status: i.status, json: o }];
            }
          });
        });
      }),
      (t.prototype.getAppCheckToken = function () {
        return lt(this, void 0, void 0, function () {
          var t;
          return ht(this, function (e) {
            switch (e.label) {
              case 0:
                return (t = this.appCheckProvider.getImmediate({
                  optional: !0,
                }))
                  ? [4, t.getToken()]
                  : [3, 2];
              case 1:
                return [2, e.sent().token];
              case 2:
                return [2, null];
            }
          });
        });
      }),
      (t.prototype.call = function (t, e, n) {
        return lt(this, void 0, void 0, function () {
          var r, i, o, s, a, u, c, l, h, f, d;
          return ht(this, function (p) {
            switch (p.label) {
              case 0:
                return (
                  (r = this._url(t)),
                  (e = this.serializer.encode(e)),
                  (i = { data: e }),
                  (o = {}),
                  [4, this.contextProvider.getContext()]
                );
              case 1:
                return (
                  (s = p.sent()).authToken &&
                    (o.Authorization = "Bearer " + s.authToken),
                  s.instanceIdToken &&
                    (o["Firebase-Instance-ID-Token"] = s.instanceIdToken),
                  (a = n.timeout || 7e4),
                  (u = (function (t) {
                    var e,
                      n = new Promise(function (n, r) {
                        e = setTimeout(function () {
                          r(new _v("deadline-exceeded", "deadline-exceeded"));
                        }, t);
                      });
                    return { timer: e, promise: n };
                  })(a)),
                  (c = u.timer),
                  (l = u.promise),
                  [
                    4,
                    Promise.race([
                      Dv(c, this.postJSON(r, i, o)),
                      l,
                      Dv(c, this.cancelAllRequests),
                    ]),
                  ]
                );
              case 2:
                if (!(h = p.sent()))
                  throw new _v(
                    "cancelled",
                    "Firebase Functions instance was deleted."
                  );
                if (
                  (f = (function (t, e, n) {
                    var r = (function (t) {
                        if (t >= 200 && t < 300) return "ok";
                        switch (t) {
                          case 0:
                            return "internal";
                          case 400:
                            return "invalid-argument";
                          case 401:
                            return "unauthenticated";
                          case 403:
                            return "permission-denied";
                          case 404:
                            return "not-found";
                          case 409:
                            return "aborted";
                          case 429:
                            return "resource-exhausted";
                          case 499:
                            return "cancelled";
                          case 500:
                            return "internal";
                          case 501:
                            return "unimplemented";
                          case 503:
                            return "unavailable";
                          case 504:
                            return "deadline-exceeded";
                        }
                        return "unknown";
                      })(t),
                      i = r,
                      o = void 0;
                    try {
                      var s = e && e.error;
                      if (s) {
                        var a = s.status;
                        if ("string" == typeof a) {
                          if (!Tv[a]) return new _v("internal", "internal");
                          (r = Tv[a]), (i = a);
                        }
                        var u = s.message;
                        "string" == typeof u && (i = u),
                          void 0 !== (o = s.details) && (o = n.decode(o));
                      }
                    } catch (t) {}
                    return "ok" === r ? null : new _v(r, i, o);
                  })(h.status, h.json, this.serializer))
                )
                  throw f;
                if (!h.json)
                  throw new _v(
                    "internal",
                    "Response is not valid JSON object."
                  );
                if (
                  (void 0 === (d = h.json.data) && (d = h.json.result),
                  void 0 === d)
                )
                  throw new _v("internal", "Response is missing data field.");
                return [2, { data: this.serializer.decode(d) }];
            }
          });
        });
      }),
      t
    );
  })();
  function Dv(t, e) {
    return lt(this, void 0, void 0, function () {
      var n;
      return ht(this, function (r) {
        switch (r.label) {
          case 0:
            return [4, e];
          case 1:
            return (n = r.sent()), clearTimeout(t), [2, n];
        }
      });
    });
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  !(function (t, e) {
    var n = { Functions: Nv };
    t.INTERNAL.registerComponent(
      new Dt(
        "functions",
        function (t, n) {
          var r = n.instanceIdentifier,
            i = t.getProvider("app").getImmediate(),
            o = t.getProvider("auth-internal"),
            s = t.getProvider("app-check-internal"),
            a = t.getProvider("messaging");
          return new Nv(i, o, a, s, r, e);
        },
        "PUBLIC"
      )
        .setServiceProps(n)
        .setMultipleInstances(!0)
    );
  })(re, fetch.bind(self)),
    re.registerVersion("@firebase/functions", "0.6.13");
  re.initializeApp({
    apiKey: "AIzaSyAq59lK80pPZj_-DmD8swIckq2TYTt8Meo",
    authDomain: "anime-corner-rankings.firebaseapp.com",
    projectId: "anime-corner-rankings",
    storageBucket: "anime-corner-rankings.appspot.com",
    messagingSenderId: "1056575402361",
    appId: "1:1056575402361:web:0fd9790f5ef43a94897fa8",
    measurementId: "G-264NJGB06X",
  });
  const Cv = re.firestore(),
    xv = re.functions();
  function Rv(e) {
    let n, r;
    return {
      c() {
        (n = g("div")), (r = m(e[0])), I(n, "class", "svelte-w1ujin");
      },
      m(t, e) {
        d(t, n, e), f(n, r);
      },
      p(t, [e]) {
        1 & e && T(r, t[0]);
      },
      i: t,
      o: t,
      d(t) {
        t && p(n);
      },
    };
  }
  function Ov(t, e, n) {
    let { rank: r } = e;
    return (
      (t.$$set = (t) => {
        "rank" in t && n(0, (r = t.rank));
      }),
      [r]
    );
  }
  class Lv extends rt {
    constructor(t) {
      super(), nt(this, t, Ov, Rv, s, { rank: 0 });
    }
  }
  function Pv(e) {
    let n, r, i;
    return {
      c() {
        (n = g("div")),
          (r = g("div")),
          (i = m(e[1])),
          I(r, "class", "title svelte-ps336j"),
          I(n, "class", "banner svelte-ps336j"),
          _(
            n,
            "background-image",
            "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(" +
              e[0] +
              ")"
          );
      },
      m(t, e) {
        d(t, n, e), f(n, r), f(r, i);
      },
      p(t, [e]) {
        2 & e && T(i, t[1]),
          1 & e &&
            _(
              n,
              "background-image",
              "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(" +
                t[0] +
                ")"
            );
      },
      i: t,
      o: t,
      d(t) {
        t && p(n);
      },
    };
  }
  function Mv(t, e, n) {
    let { banner: r } = e,
      { title: i } = e;
    return (
      (t.$$set = (t) => {
        "banner" in t && n(0, (r = t.banner)),
          "title" in t && n(1, (i = t.title));
      }),
      [r, i]
    );
  }
  class Fv extends rt {
    constructor(t) {
      super(), nt(this, t, Mv, Pv, s, { banner: 0, title: 1 });
    }
  }
  function Vv(t) {
    let e, n, r, i;
    return {
      c() {
        (e = y("svg")),
          (n = y("path")),
          (r = b()),
          (i = m(t[4])),
          I(n, "d", "M24 22h-24l12-20z"),
          I(e, "class", "arrow-gain svelte-63vq6l"),
          I(e, "xmlns", "http://www.w3.org/2000/svg"),
          I(e, "width", "16"),
          I(e, "height", "16"),
          I(e, "viewBox", "0 0 24 24");
      },
      m(t, o) {
        d(t, e, o), f(e, n), d(t, r, o), d(t, i, o);
      },
      p(t, e) {
        16 & e && T(i, t[4]);
      },
      d(t) {
        t && p(e), t && p(r), t && p(i);
      },
    };
  }
  function qv(t) {
    let e, n, r, i;
    return {
      c() {
        (e = y("svg")),
          (n = y("path")),
          (r = b()),
          (i = m(t[4])),
          I(n, "d", "M0 9h24v6h-24z"),
          I(e, "class", "arrow-neutral svelte-63vq6l"),
          I(e, "xmlns", "http://www.w3.org/2000/svg"),
          I(e, "width", "16"),
          I(e, "height", "16"),
          I(e, "viewBox", "0 0 24 24");
      },
      m(t, o) {
        d(t, e, o), f(e, n), d(t, r, o), d(t, i, o);
      },
      p(t, e) {
        16 & e && T(i, t[4]);
      },
      d(t) {
        t && p(e), t && p(r), t && p(i);
      },
    };
  }
  function Uv(t) {
    let e,
      n,
      r,
      i,
      o = t[4].toString().replace("-", "") + "";
    return {
      c() {
        (e = y("svg")),
          (n = y("path")),
          (r = b()),
          (i = m(o)),
          I(n, "d", "M12 21l-12-18h24z"),
          I(e, "class", "arrow-drop svelte-63vq6l"),
          I(e, "xmlns", "http://www.w3.org/2000/svg"),
          I(e, "width", "16"),
          I(e, "height", "16"),
          I(e, "viewBox", "0 0 24 24");
      },
      m(t, o) {
        d(t, e, o), f(e, n), d(t, r, o), d(t, i, o);
      },
      p(t, e) {
        16 & e && o !== (o = t[4].toString().replace("-", "") + "") && T(i, o);
      },
      d(t) {
        t && p(e), t && p(r), t && p(i);
      },
    };
  }
  function jv(t) {
    let e, n, r;
    return {
      c() {
        (e = g("div")),
          (n = m("From Rank ")),
          (r = m(t[1])),
          I(e, "class", "label svelte-63vq6l"),
          k(e, "gain", t[4] > 0),
          k(e, "drop", t[4] < 0);
      },
      m(t, i) {
        d(t, e, i), f(e, n), f(e, r);
      },
      p(t, n) {
        2 & n && T(r, t[1]),
          16 & n && k(e, "gain", t[4] > 0),
          16 & n && k(e, "drop", t[4] < 0);
      },
      d(t) {
        t && p(e);
      },
    };
  }
  function Bv(t) {
    let e;
    return {
      c() {
        (e = g("div")),
          (e.textContent = "Same Rank"),
          I(e, "class", "label svelte-63vq6l"),
          k(e, "neutral", t[1] == t[0]);
      },
      m(t, n) {
        d(t, e, n);
      },
      p(t, n) {
        3 & n && k(e, "neutral", t[1] == t[0]);
      },
      d(t) {
        t && p(e);
      },
    };
  }
  function zv(t) {
    let e;
    return {
      c() {
        (e = g("div")),
          (e.textContent = "New Entry"),
          I(e, "class", "label svelte-63vq6l"),
          k(e, "neutral", null == t[1]);
      },
      m(t, n) {
        d(t, e, n);
      },
      p(t, n) {
        2 & n && k(e, "neutral", null == t[1]);
      },
      d(t) {
        t && p(e);
      },
    };
  }
  function Kv(t) {
    let e;
    return {
      c() {
        (e = g("div")),
          (e.textContent = "New Entry"),
          I(e, "class", "label border-br svelte-63vq6l"),
          k(e, "neutral", 0 == t[5]),
          k(e, "no-border-br", t[3]);
      },
      m(t, n) {
        d(t, e, n);
      },
      p(t, n) {
        32 & n && k(e, "neutral", 0 == t[5]),
          8 & n && k(e, "no-border-br", t[3]);
      },
      d(t) {
        t && p(e);
      },
    };
  }
  function $v(t) {
    let e, n, r;
    return {
      c() {
        (e = g("div")),
          (n = m(t[5])),
          (r = m("% Drop")),
          I(e, "class", "label border-br svelte-63vq6l"),
          k(e, "drop", t[5] < 0),
          k(e, "no-border-br", t[3]);
      },
      m(t, i) {
        d(t, e, i), f(e, n), f(e, r);
      },
      p(t, r) {
        32 & r && T(n, t[5]),
          32 & r && k(e, "drop", t[5] < 0),
          8 & r && k(e, "no-border-br", t[3]);
      },
      d(t) {
        t && p(e);
      },
    };
  }
  function Gv(t) {
    let e, n, r, i;
    return {
      c() {
        (e = g("div")),
          (n = m("+")),
          (r = m(t[5])),
          (i = m("% Gain")),
          I(e, "class", "label border-br svelte-63vq6l"),
          k(e, "gain", t[5] > 0),
          k(e, "no-border-br", t[3]);
      },
      m(t, o) {
        d(t, e, o), f(e, n), f(e, r), f(e, i);
      },
      p(t, n) {
        32 & n && T(r, t[5]),
          32 & n && k(e, "gain", t[5] > 0),
          8 & n && k(e, "no-border-br", t[3]);
      },
      d(t) {
        t && p(e);
      },
    };
  }
  function Hv(e) {
    let n, r, i, o, s, a, u, c, l, h;
    function v(t, e) {
      return t[4] < 0 ? Uv : 0 === t[4] ? qv : Vv;
    }
    let y = v(e),
      w = y(e);
    function E(t, e) {
      return null == t[1] ? zv : t[1] == t[0] ? Bv : jv;
    }
    let _ = E(e),
      S = _(e);
    function A(t, e) {
      return t[5] > 0 ? Gv : t[5] < 0 ? $v : Kv;
    }
    let k = A(e),
      N = k(e);
    return {
      c() {
        (n = g("div")),
          (r = g("div")),
          (i = g("div")),
          w.c(),
          (o = b()),
          S.c(),
          (s = b()),
          (a = g("div")),
          (u = g("div")),
          (c = m(e[2])),
          (l = m("%")),
          (h = b()),
          N.c(),
          I(i, "class", "figure svelte-63vq6l"),
          I(r, "class", "sub-container svelte-63vq6l"),
          I(u, "class", "figure border-br svelte-63vq6l"),
          I(a, "class", "sub-container border-br svelte-63vq6l"),
          I(n, "class", "container border-tr border-br svelte-63vq6l");
      },
      m(t, e) {
        d(t, n, e),
          f(n, r),
          f(r, i),
          w.m(i, null),
          f(r, o),
          S.m(r, null),
          f(n, s),
          f(n, a),
          f(a, u),
          f(u, c),
          f(u, l),
          f(a, h),
          N.m(a, null);
      },
      p(t, [e]) {
        y === (y = v(t)) && w
          ? w.p(t, e)
          : (w.d(1), (w = y(t)), w && (w.c(), w.m(i, null))),
          _ === (_ = E(t)) && S
            ? S.p(t, e)
            : (S.d(1), (S = _(t)), S && (S.c(), S.m(r, null))),
          4 & e && T(c, t[2]),
          k === (k = A(t)) && N
            ? N.p(t, e)
            : (N.d(1), (N = k(t)), N && (N.c(), N.m(a, null)));
      },
      i: t,
      o: t,
      d(t) {
        t && p(n), w.d(), S.d(), N.d();
      },
    };
  }
  function Qv(t, e, n) {
    let r,
      i,
      { rank: o } = e,
      { previousRank: s } = e,
      { votes: a } = e,
      { previousVotes: u } = e,
      { isActive: c } = e;
    return (
      (function (t) {
        C().$$.after_update.push(t);
      })(() => {
        n(
          4,
          (r = (function (t, e) {
            return null == e ? 0 : t < e ? e - t : e == t ? 0 : e - t;
          })(o, s))
        ),
          n(
            5,
            (i = (function (t, e) {
              if (null == e) return 0;
              return (t - e).toFixed(2);
            })(a, u))
          );
      }),
      (t.$$set = (t) => {
        "rank" in t && n(0, (o = t.rank)),
          "previousRank" in t && n(1, (s = t.previousRank)),
          "votes" in t && n(2, (a = t.votes)),
          "previousVotes" in t && n(6, (u = t.previousVotes)),
          "isActive" in t && n(3, (c = t.isActive));
      }),
      [o, s, a, c, r, i, u]
    );
  }
  class Wv extends rt {
    constructor(t) {
      super(),
        nt(this, t, Qv, Hv, s, {
          rank: 0,
          previousRank: 1,
          votes: 2,
          previousVotes: 6,
          isActive: 3,
        });
    }
  }
  function Yv(t) {
    let e,
      n = localStorage.getItem(`${t}`);
    return (
      n &&
        ((n = JSON.parse(n)),
        (e = parseInt(Date.now() / 1e3) - n.cachetime > 86400)),
      { cachedData: n, expired: e }
    );
  }
  function Xv(t, e) {
    const n = { data: e, cachetime: parseInt(Date.now() / 1e3) };
    localStorage.setItem(`${t}`, JSON.stringify(n));
  }
  function Jv(t, e, n) {
    const r = t.slice();
    return (r[13] = e[n]), r;
  }
  function Zv(t, e, n) {
    const r = t.slice();
    return (r[9] = e[n]), r;
  }
  function tg(t) {
    let e,
      n,
      r,
      i,
      o,
      s,
      a,
      u,
      c,
      l,
      h,
      y,
      w,
      E = t[9],
      _ = [];
    for (let e = 0; e < E.length; e += 1) _[e] = eg(Zv(t, E, e));
    const S = [rg, ng],
      A = [];
    function k(t, e) {
      return 0 == t[8].length ? 0 : 1;
    }
    return (
      (c = k(t)),
      (l = A[c] = S[c](t)),
      {
        c() {
          (e = g("div")),
            (n = g("div")),
            (r = g("h2")),
            (i = m(t[2])),
            (o = b()),
            (s = g("div"));
          for (let t = 0; t < _.length; t += 1) _[t].c();
          (a = b()),
            (u = g("div")),
            l.c(),
            (h = b()),
            (y = new N()),
            I(r, "class", "title svelte-7u2qz9"),
            I(s, "class", "pills svelte-7u2qz9"),
            I(u, "class", "links svelte-7u2qz9"),
            (y.a = null),
            I(e, "class", "card-content svelte-7u2qz9");
        },
        m(l, p) {
          d(l, e, p), f(e, n), f(n, r), f(r, i), f(e, o), f(e, s);
          for (let t = 0; t < _.length; t += 1) _[t].m(s, null);
          f(e, a), f(e, u), A[c].m(u, null), f(e, h), y.m(t[7], e), (w = !0);
        },
        p(t, e) {
          if (((!w || 4 & e) && T(i, t[2]), 512 & e)) {
            let n;
            for (E = t[9], n = 0; n < E.length; n += 1) {
              const r = Zv(t, E, n);
              _[n] ? _[n].p(r, e) : ((_[n] = eg(r)), _[n].c(), _[n].m(s, null));
            }
            for (; n < _.length; n += 1) _[n].d(1);
            _.length = E.length;
          }
          let n = c;
          (c = k(t)),
            c === n
              ? A[c].p(t, e)
              : (K(),
                H(A[n], 1, 1, () => {
                  A[n] = null;
                }),
                $(),
                (l = A[c]),
                l ? l.p(t, e) : ((l = A[c] = S[c](t)), l.c()),
                G(l, 1),
                l.m(u, null)),
            (!w || 128 & e) && y.p(t[7]);
        },
        i(t) {
          w || (G(l), (w = !0));
        },
        o(t) {
          H(l), (w = !1);
        },
        d(t) {
          t && p(e), v(_, t), A[c].d();
        },
      }
    );
  }
  function eg(t) {
    let e,
      n,
      r = t[9] + "";
    return {
      c() {
        (e = g("div")), (n = m(r)), I(e, "class", "pill svelte-7u2qz9");
      },
      m(t, r) {
        d(t, e, r), f(e, n);
      },
      p(t, e) {
        512 & e && r !== (r = t[9] + "") && T(n, r);
      },
      d(t) {
        t && p(e);
      },
    };
  }
  function ng(t) {
    let e,
      n,
      r,
      i = t[8],
      o = [];
    for (let e = 0; e < i.length; e += 1) o[e] = fg(Jv(t, i, e));
    const s = (t) =>
      H(o[t], 1, 1, () => {
        o[t] = null;
      });
    return {
      c() {
        e = m("Watch on:\n          ");
        for (let t = 0; t < o.length; t += 1) o[t].c();
        n = w();
      },
      m(t, i) {
        d(t, e, i);
        for (let e = 0; e < o.length; e += 1) o[e].m(t, i);
        d(t, n, i), (r = !0);
      },
      p(t, e) {
        if (3328 & e) {
          let r;
          for (i = t[8], r = 0; r < i.length; r += 1) {
            const s = Jv(t, i, r);
            o[r]
              ? (o[r].p(s, e), G(o[r], 1))
              : ((o[r] = fg(s)), o[r].c(), G(o[r], 1), o[r].m(n.parentNode, n));
          }
          for (K(), r = i.length; r < o.length; r += 1) s(r);
          $();
        }
      },
      i(t) {
        if (!r) {
          for (let t = 0; t < i.length; t += 1) G(o[t]);
          r = !0;
        }
      },
      o(t) {
        o = o.filter(Boolean);
        for (let t = 0; t < o.length; t += 1) H(o[t]);
        r = !1;
      },
      d(t) {
        t && p(e), v(o, t), t && p(n);
      },
    };
  }
  function rg(e) {
    let n;
    return {
      c() {
        n = m("Could not find on Crunchyroll or Funimation 😢");
      },
      m(t, e) {
        d(t, n, e);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && p(n);
      },
    };
  }
  function ig(t) {
    let e,
      n,
      r = {
        ctx: t,
        current: null,
        token: null,
        hasCatch: !1,
        pending: ug,
        then: ag,
        catch: sg,
        value: 16,
        blocks: [, , ,],
      };
    return (
      Q(t[11](), r),
      {
        c() {
          (e = w()), r.block.c();
        },
        m(t, i) {
          d(t, e, i),
            r.block.m(t, (r.anchor = i)),
            (r.mount = () => e.parentNode),
            (r.anchor = e),
            (n = !0);
        },
        p(e, n) {
          W(r, (t = e), n);
        },
        i(t) {
          n || (G(r.block), (n = !0));
        },
        o(t) {
          for (let t = 0; t < 3; t += 1) {
            H(r.blocks[t]);
          }
          n = !1;
        },
        d(t) {
          t && p(e), r.block.d(t), (r.token = null), (r = null);
        },
      }
    );
  }
  function og(t) {
    let e,
      n,
      r = {
        ctx: t,
        current: null,
        token: null,
        hasCatch: !1,
        pending: hg,
        then: lg,
        catch: cg,
        value: 16,
        blocks: [, , ,],
      };
    return (
      Q(t[10](), r),
      {
        c() {
          (e = w()), r.block.c();
        },
        m(t, i) {
          d(t, e, i),
            r.block.m(t, (r.anchor = i)),
            (r.mount = () => e.parentNode),
            (r.anchor = e),
            (n = !0);
        },
        p(e, n) {
          W(r, (t = e), n);
        },
        i(t) {
          n || (G(r.block), (n = !0));
        },
        o(t) {
          for (let t = 0; t < 3; t += 1) {
            H(r.blocks[t]);
          }
          n = !1;
        },
        d(t) {
          t && p(e), r.block.d(t), (r.token = null), (r = null);
        },
      }
    );
  }
  function sg(e) {
    return { c: t, m: t, p: t, i: t, o: t, d: t };
  }
  function ag(e) {
    let n, r, i, o, s;
    return {
      c() {
        (n = g("a")),
          (r = g("img")),
          (s = b()),
          c(r.src, (i = e[16])) || I(r, "src", i),
          I(r, "alt", ""),
          I(r, "class", "funimation svelte-7u2qz9"),
          I(n, "href", (o = e[13].url)),
          I(n, "class", "link svelte-7u2qz9"),
          I(n, "target", "_blank");
      },
      m(t, e) {
        d(t, n, e), f(n, r), d(t, s, e);
      },
      p(t, e) {
        256 & e && o !== (o = t[13].url) && I(n, "href", o);
      },
      i: t,
      o: t,
      d(t) {
        t && p(n), t && p(s);
      },
    };
  }
  function ug(e) {
    let n, r, i;
    return (
      (n = new st({ props: { size: "32", unit: "px", color: "#65b893" } })),
      {
        c() {
          J(n.$$.fragment), (r = b());
        },
        m(t, e) {
          Z(n, t, e), d(t, r, e), (i = !0);
        },
        p: t,
        i(t) {
          i || (G(n.$$.fragment, t), (i = !0));
        },
        o(t) {
          H(n.$$.fragment, t), (i = !1);
        },
        d(t) {
          tt(n, t), t && p(r);
        },
      }
    );
  }
  function cg(e) {
    return { c: t, m: t, p: t, i: t, o: t, d: t };
  }
  function lg(e) {
    let n, r, i, o, s;
    return {
      c() {
        (n = g("a")),
          (r = g("img")),
          (s = b()),
          c(r.src, (i = e[16])) || I(r, "src", i),
          I(r, "alt", ""),
          I(r, "class", "crunchyroll svelte-7u2qz9"),
          I(n, "href", (o = e[13].url)),
          I(n, "class", "link svelte-7u2qz9"),
          I(n, "target", "_blank");
      },
      m(t, e) {
        d(t, n, e), f(n, r), d(t, s, e);
      },
      p(t, e) {
        256 & e && o !== (o = t[13].url) && I(n, "href", o);
      },
      i: t,
      o: t,
      d(t) {
        t && p(n), t && p(s);
      },
    };
  }
  function hg(e) {
    let n, r, i;
    return (
      (n = new st({ props: { size: "32", unit: "px", color: "#65b893" } })),
      {
        c() {
          J(n.$$.fragment), (r = b());
        },
        m(t, e) {
          Z(n, t, e), d(t, r, e), (i = !0);
        },
        p: t,
        i(t) {
          i || (G(n.$$.fragment, t), (i = !0));
        },
        o(t) {
          H(n.$$.fragment, t), (i = !1);
        },
        d(t) {
          tt(n, t), t && p(r);
        },
      }
    );
  }
  function fg(t) {
    let e, n, r, i;
    const o = [og, ig],
      s = [];
    function a(t, e) {
      return "Crunchyroll" == t[13].site
        ? 0
        : "Funimation" == t[13].site
        ? 1
        : -1;
    }
    return (
      ~(e = a(t)) && (n = s[e] = o[e](t)),
      {
        c() {
          n && n.c(), (r = w());
        },
        m(t, n) {
          ~e && s[e].m(t, n), d(t, r, n), (i = !0);
        },
        p(t, i) {
          let u = e;
          (e = a(t)),
            e === u
              ? ~e && s[e].p(t, i)
              : (n &&
                  (K(),
                  H(s[u], 1, 1, () => {
                    s[u] = null;
                  }),
                  $()),
                ~e
                  ? ((n = s[e]),
                    n ? n.p(t, i) : ((n = s[e] = o[e](t)), n.c()),
                    G(n, 1),
                    n.m(r.parentNode, r))
                  : (n = null));
        },
        i(t) {
          i || (G(n), (i = !0));
        },
        o(t) {
          H(n), (i = !1);
        },
        d(t) {
          ~e && s[e].d(t), t && p(r);
        },
      }
    );
  }
  function dg(t) {
    let e, n, r, o, s, a, u, c, l, h, v;
    (r = new Lv({ props: { rank: t[1] } })),
      (s = new Fv({ props: { banner: t[4], title: t[2] } })),
      (u = new Wv({
        props: {
          rank: t[1],
          previousRank: t[5],
          votes: t[3],
          previousVotes: t[6],
          isActive: t[0],
        },
      }));
    let y = t[0] && tg(t);
    return {
      c() {
        (e = g("div")),
          (n = g("div")),
          J(r.$$.fragment),
          (o = b()),
          J(s.$$.fragment),
          (a = b()),
          J(u.$$.fragment),
          (c = b()),
          y && y.c(),
          I(n, "class", "card svelte-7u2qz9"),
          I(n, "tabindex", "0"),
          I(e, "class", "wrapper svelte-7u2qz9");
      },
      m(i, p) {
        d(i, e, p),
          f(e, n),
          Z(r, n, null),
          f(n, o),
          Z(s, n, null),
          f(n, a),
          Z(u, n, null),
          f(e, c),
          y && y.m(e, null),
          (l = !0),
          h ||
            ((v = [E(n, "click", t[12]), E(n, "keypress", t[12])]), (h = !0));
      },
      p(t, [n]) {
        const i = {};
        2 & n && (i.rank = t[1]), r.$set(i);
        const o = {};
        16 & n && (o.banner = t[4]), 4 & n && (o.title = t[2]), s.$set(o);
        const a = {};
        2 & n && (a.rank = t[1]),
          32 & n && (a.previousRank = t[5]),
          8 & n && (a.votes = t[3]),
          64 & n && (a.previousVotes = t[6]),
          1 & n && (a.isActive = t[0]),
          u.$set(a),
          t[0]
            ? y
              ? (y.p(t, n), 1 & n && G(y, 1))
              : ((y = tg(t)), y.c(), G(y, 1), y.m(e, null))
            : y &&
              (K(),
              H(y, 1, 1, () => {
                y = null;
              }),
              $());
      },
      i(t) {
        l ||
          (G(r.$$.fragment, t),
          G(s.$$.fragment, t),
          G(u.$$.fragment, t),
          G(y),
          (l = !0));
      },
      o(t) {
        H(r.$$.fragment, t),
          H(s.$$.fragment, t),
          H(u.$$.fragment, t),
          H(y),
          (l = !1);
      },
      d(t) {
        t && p(e), tt(r), tt(s), tt(u), y && y.d(), (h = !1), i(v);
      },
    };
  }
  function pg(t, e, n) {
    let { rank: r } = e,
      { title: i } = e,
      { votes: o } = e,
      { banner: s } = e,
      { previousRank: a } = e,
      { previousVotes: u } = e,
      { description: c } = e,
      { genres: l } = e,
      { externalLinks: h } = e,
      { isActive: f } = e;
    return (
      (t.$$set = (t) => {
        "rank" in t && n(1, (r = t.rank)),
          "title" in t && n(2, (i = t.title)),
          "votes" in t && n(3, (o = t.votes)),
          "banner" in t && n(4, (s = t.banner)),
          "previousRank" in t && n(5, (a = t.previousRank)),
          "previousVotes" in t && n(6, (u = t.previousVotes)),
          "description" in t && n(7, (c = t.description)),
          "genres" in t && n(9, (l = t.genres)),
          "externalLinks" in t && n(8, (h = t.externalLinks)),
          "isActive" in t && n(0, (f = t.isActive));
      }),
      [
        f,
        r,
        i,
        o,
        s,
        a,
        u,
        c,
        h,
        l,
        async () => {
          const t = "crunchyroll",
            e = Yv(t);
          let n;
          return (
            e.cachedData && !e.expired
              ? (n = e.cachedData.data)
              : ((n = await Cv.collection("logos")
                  .doc("crunchyroll")
                  .get()
                  .then((t) => t.data().url)),
                Xv(t, n)),
            n
          );
        },
        async () => {
          const t = "funimation",
            e = Yv(t);
          let n;
          return (
            e.cachedData && !e.expired
              ? (n = e.cachedData.data)
              : ((n = await Cv.collection("logos")
                  .doc("funimation")
                  .get()
                  .then((t) => t.data().url)),
                Xv(t, n)),
            n
          );
        },
        function () {
          n(0, (f = !f));
        },
      ]
    );
  }
  class vg extends rt {
    constructor(t) {
      super(),
        nt(this, t, pg, dg, s, {
          rank: 1,
          title: 2,
          votes: 3,
          banner: 4,
          previousRank: 5,
          previousVotes: 6,
          description: 7,
          genres: 9,
          externalLinks: 8,
          isActive: 0,
        });
    }
  }
  const gg = [];
  function yg(e, n = t) {
    let r;
    const i = new Set();
    function o(t) {
      if (s(e, t) && ((e = t), r)) {
        const t = !gg.length;
        for (const t of i) t[1](), gg.push(t, e);
        if (t) {
          for (let t = 0; t < gg.length; t += 2) gg[t][0](gg[t + 1]);
          gg.length = 0;
        }
      }
    }
    return {
      set: o,
      update: function (t) {
        o(t(e));
      },
      subscribe: function (s, a = t) {
        const u = [s, a];
        return (
          i.add(u),
          1 === i.size && (r = n(o) || t),
          s(e),
          () => {
            i.delete(u), 0 === i.size && (r(), (r = null));
          }
        );
      },
    };
  }
  const mg = yg("2021"),
    bg = yg("Summer"),
    wg = yg("Week-07"),
    Eg = yg(1),
    Ig = yg(!1),
    Tg = yg([
      {
        question: "What is Anime Corner Rankings?",
        answer:
          "This site tracks the weekly rankings released by Anime Corner, an online community that provides news, highlights and articles on the anime industry. In particular the site displays their list in an interactive leaderboard that can expand to show you more information about a show if it catches your interest.",
      },
      {
        question: "Where does the data come from?",
        answer:
          "The poll data is collected by Anime Corner and published on their <a href='https://animecorner.me/category/anime-corner/rankings/anime-of-the-week/' target='_blank'>website</a>. If you're curious about how the data is collected and calculated you can learn more about it <a href='https://animecorner.me/polls/' target='_blank'>here</a>.<br /><br />Data about each anime is provided by <a href='https://anilist.co/' target='_blank'>Anilist</a> & <a href='https://kitsu.io/' target='_blank'>Kitsu</a>.",
      },
      {
        question: "How often are the rankings updated?",
        answer:
          "The rankings are updated every Friday at approximately 13:00pm UTC.",
      },
      {
        question: "How can I vote?",
        answer:
          "You can cast your vote over at <a href='https://polls.animecorner.me/' target='_blank'>polls.animecorner.me</a>",
      },
      {
        question: "Are there similar rankings out there?",
        answer:
          "Yes this site was actually inspired by some of these sites here:<br /><ul><li><a href='https://animekarmalist.com/' target='_blank'>animekarmalist.com</a></li><li><a href='https://animekarmawatch.com/' target='_blank'>animekarmawatch.com</a></li><li><a href='https://animetrics.co/' target='_blank'>animetrics.co</a></li><li><a href='https://anitrendz.net/' target='_blank'>anitrendz.net</a></li></ul>",
      },
      {
        question: "How can I contact you?",
        answer:
          "If you have any have questions, feedback or suggestions about the site, please feel free and create an issue on the project repository or even better make a PR yourself!",
      },
    ]);
  function _g(t) {
    let e;
    return {
      c() {
        (e = g("div")), I(e, "class", "panel svelte-pwglis");
      },
      m(n, r) {
        d(n, e, r), (e.innerHTML = t[3]);
      },
      p(t, n) {
        8 & n && (e.innerHTML = t[3]);
      },
      d(t) {
        t && p(e);
      },
    };
  }
  function Sg(e) {
    let n,
      r,
      o,
      s,
      a,
      u,
      c,
      l = (e[1] || e[0]) && _g(e);
    return {
      c() {
        (n = g("div")),
          (r = g("h3")),
          (o = m(e[2])),
          (s = b()),
          l && l.c(),
          (a = w()),
          I(r, "class", "svelte-pwglis"),
          I(n, "class", "accordion svelte-pwglis"),
          I(n, "tabindex", "0"),
          k(n, "active", e[1]);
      },
      m(t, i) {
        d(t, n, i),
          f(n, r),
          f(r, o),
          d(t, s, i),
          l && l.m(t, i),
          d(t, a, i),
          u || ((c = [E(n, "click", e[4]), E(n, "keypress", e[4])]), (u = !0));
      },
      p(t, [e]) {
        4 & e && T(o, t[2]),
          2 & e && k(n, "active", t[1]),
          t[1] || t[0]
            ? l
              ? l.p(t, e)
              : ((l = _g(t)), l.c(), l.m(a.parentNode, a))
            : l && (l.d(1), (l = null));
      },
      i: t,
      o: t,
      d(t) {
        t && p(n), t && p(s), l && l.d(t), t && p(a), (u = !1), i(c);
      },
    };
  }
  function Ag(t, e, n) {
    let { question: r } = e,
      { answer: i } = e,
      { showAll: o } = e,
      { showDropdown: s } = e;
    return (
      (t.$$set = (t) => {
        "question" in t && n(2, (r = t.question)),
          "answer" in t && n(3, (i = t.answer)),
          "showAll" in t && n(0, (o = t.showAll)),
          "showDropdown" in t && n(1, (s = t.showDropdown));
      }),
      [
        o,
        s,
        r,
        i,
        function () {
          o ? (n(0, (o = !1)), n(1, (s = !1))) : n(1, (s = !s));
        },
      ]
    );
  }
  class kg extends rt {
    constructor(t) {
      super(),
        nt(this, t, Ag, Sg, s, {
          question: 2,
          answer: 3,
          showAll: 0,
          showDropdown: 1,
        });
    }
  }
  function Ng(t, e, n) {
    const r = t.slice();
    return (r[12] = e[n]), r;
  }
  function Dg(e) {
    let n,
      r,
      s,
      a,
      u,
      c,
      l,
      h,
      y,
      w,
      T,
      _,
      S,
      A,
      N,
      D,
      C,
      x,
      R,
      O,
      L,
      P,
      M,
      F,
      V,
      q,
      U,
      j,
      B = e[3],
      z = [];
    for (let t = 0; t < B.length; t += 1) z[t] = Cg(Ng(e, B, t));
    const Q = (t) =>
      H(z[t], 1, 1, () => {
        z[t] = null;
      });
    return {
      c() {
        (n = g("div")),
          (r = g("div")),
          (s = b()),
          (a = g("div")),
          (u = g("div")),
          (c = g("button")),
          (c.innerHTML =
            '<svg id="svg-close" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#fff" preserveAspectRatio="xMidYMid meet" class="svelte-19m7535"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg>'),
          (l = b()),
          (h = g("div")),
          (y = g("div")),
          (y.innerHTML = '<h1 class="svelte-19m7535">About</h1>'),
          (w = b()),
          (T = g("h2")),
          (T.textContent = "Legend"),
          (_ = b()),
          (S = g("ul")),
          (S.innerHTML =
            '<li><span id="green" class="svelte-19m7535">⮅</span> Rank Progression</li> \n          <li>% Vote Percentage</li>'),
          (A = b()),
          (N = g("h2")),
          (N.textContent = "FAQ"),
          (D = b()),
          (C = g("div")),
          (x = g("button")),
          (R = m("Expand All")),
          (O = m("\n          |\n          ")),
          (L = g("button")),
          (P = m("Collapse All")),
          (F = b());
        for (let t = 0; t < z.length; t += 1) z[t].c();
        I(r, "class", "backdrop svelte-19m7535"),
          I(u, "class", "close svelte-19m7535"),
          I(y, "class", "title svelte-19m7535"),
          I(T, "class", "svelte-19m7535"),
          I(N, "class", "svelte-19m7535"),
          I(x, "id", "expand"),
          (x.disabled = e[0]),
          I(x, "class", "svelte-19m7535"),
          k(x, "active", !e[0]),
          k(x, "disabled", e[0]),
          I(L, "id", "collapse"),
          (L.disabled = M = !e[0]),
          I(L, "class", "svelte-19m7535"),
          k(L, "active", e[0]),
          k(L, "disabled", !e[0]),
          I(C, "class", "expand-toggles"),
          I(h, "class", "content svelte-19m7535"),
          I(a, "class", "content-wrapper svelte-19m7535"),
          I(n, "class", "modal svelte-19m7535"),
          I(n, "tabindex", "0");
      },
      m(i, p) {
        d(i, n, p),
          f(n, r),
          f(n, s),
          f(n, a),
          f(a, u),
          f(u, c),
          f(a, l),
          f(a, h),
          f(h, y),
          f(h, w),
          f(h, T),
          f(h, _),
          f(h, S),
          f(h, A),
          f(h, N),
          f(h, D),
          f(h, C),
          f(C, x),
          f(x, R),
          f(C, O),
          f(C, L),
          f(L, P),
          f(h, F);
        for (let t = 0; t < z.length; t += 1) z[t].m(h, null);
        var v;
        (q = !0),
          U ||
            ((j = [
              E(c, "click", e[6]),
              E(x, "click", e[7]),
              E(L, "click", e[8]),
              ((v = V = e[9].call(null, n)), v && o(v.destroy) ? v.destroy : t),
            ]),
            (U = !0));
      },
      p(t, e) {
        if (
          ((!q || 1 & e) && (x.disabled = t[0]),
          1 & e && k(x, "active", !t[0]),
          1 & e && k(x, "disabled", t[0]),
          (!q || (1 & e && M !== (M = !t[0]))) && (L.disabled = M),
          1 & e && k(L, "active", t[0]),
          1 & e && k(L, "disabled", !t[0]),
          11 & e)
        ) {
          let n;
          for (B = t[3], n = 0; n < B.length; n += 1) {
            const r = Ng(t, B, n);
            z[n]
              ? (z[n].p(r, e), G(z[n], 1))
              : ((z[n] = Cg(r)), z[n].c(), G(z[n], 1), z[n].m(h, null));
          }
          for (K(), n = B.length; n < z.length; n += 1) Q(n);
          $();
        }
      },
      i(t) {
        if (!q) {
          for (let t = 0; t < B.length; t += 1) G(z[t]);
          q = !0;
        }
      },
      o(t) {
        z = z.filter(Boolean);
        for (let t = 0; t < z.length; t += 1) H(z[t]);
        q = !1;
      },
      d(t) {
        t && p(n), v(z, t), (U = !1), i(j);
      },
    };
  }
  function Cg(t) {
    let n, r;
    const i = [t[12], { showAll: t[0] }, { showDropdown: t[1] }];
    let o = {};
    for (let t = 0; t < i.length; t += 1) o = e(o, i[t]);
    return (
      (n = new kg({ props: o })),
      {
        c() {
          J(n.$$.fragment);
        },
        m(t, e) {
          Z(n, t, e), (r = !0);
        },
        p(t, e) {
          const r =
            11 & e
              ? Y(i, [
                  8 & e && X(t[12]),
                  1 & e && { showAll: t[0] },
                  2 & e && { showDropdown: t[1] },
                ])
              : {};
          n.$set(r);
        },
        i(t) {
          r || (G(n.$$.fragment, t), (r = !0));
        },
        o(t) {
          H(n.$$.fragment, t), (r = !1);
        },
        d(t) {
          tt(n, t);
        },
      }
    );
  }
  function xg(t) {
    let e,
      n,
      r,
      i,
      o,
      s,
      a,
      u = t[2] && Dg(t);
    return {
      c() {
        (e = g("div")),
          (n = g("button")),
          (n.innerHTML =
            '<svg id="svg-info" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="svelte-19m7535"><path d="M24 17.981h-13l-7 5.02v-5.02h-4v-16.981h24v16.981zm-11-9.98h-2v6h2v-6zm-1-1.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25z"></path></svg>'),
          (r = b()),
          u && u.c(),
          (i = w()),
          I(n, "class", "about svelte-19m7535");
      },
      m(c, l) {
        d(c, e, l),
          f(e, n),
          d(c, r, l),
          u && u.m(c, l),
          d(c, i, l),
          (o = !0),
          s || ((a = E(n, "click", t[5])), (s = !0));
      },
      p(t, [e]) {
        t[2]
          ? u
            ? (u.p(t, e), 4 & e && G(u, 1))
            : ((u = Dg(t)), u.c(), G(u, 1), u.m(i.parentNode, i))
          : u &&
            (K(),
            H(u, 1, 1, () => {
              u = null;
            }),
            $());
      },
      i(t) {
        o || (G(u), (o = !0));
      },
      o(t) {
        H(u), (o = !1);
      },
      d(t) {
        t && p(e), t && p(r), u && u.d(t), t && p(i), (s = !1), a();
      },
    };
  }
  function Rg(t) {
    t.target.focus();
  }
  function Og(t, e, n) {
    let r, i;
    l(t, Tg, (t) => n(3, (i = t)));
    const o = (function (t) {
        const e = yg(t),
          { set: n } = e;
        return { isOpen: e, open: () => n(!0), close: () => n(!1) };
      })(!1),
      { isOpen: s, open: a, close: u } = o;
    l(t, s, (t) => n(2, (r = t)));
    let c = !1,
      h = !1;
    function f(t) {
      t.stopPropagation(), "Escape" === t.key && u();
    }
    return [
      c,
      h,
      r,
      i,
      s,
      a,
      u,
      function () {
        n(0, (c = !0)), n(1, (h = !0));
      },
      function () {
        n(0, (c = !1)), n(1, (h = !1));
      },
      function (t) {
        const e = [];
        if ("hidden" !== document.body.style.overflow) {
          const t = document.body.style.overflow;
          (document.body.style.overflow = "hidden"),
            e.push(() => {
              document.body.style.overflow = t;
            });
        }
        return (
          t.addEventListener("keydown", f),
          t.addEventListener("transitionend", Rg),
          t.focus(),
          e.push(() => {
            t.removeEventListener("keydown", f),
              t.removeEventListener("transitionend", Rg);
          }),
          { destroy: () => e.forEach((t) => t()) }
        );
      },
    ];
  }
  class Lg extends rt {
    constructor(t) {
      super(), nt(this, t, Og, xg, s, {});
    }
  }
  function Pg(t, e, n) {
    const r = t.slice();
    return (r[36] = e[n]), r;
  }
  function Mg(t, e, n) {
    const r = t.slice();
    return (r[39] = e[n]), r;
  }
  function Fg(t, e, n) {
    const r = t.slice();
    return (r[42] = e[n]), r;
  }
  function Vg(t) {
    let e,
      n,
      r,
      o = t[0],
      s = [];
    for (let e = 0; e < o.length; e += 1) s[e] = Ug(Fg(t, o, e));
    return {
      c() {
        e = g("select");
        for (let t = 0; t < s.length; t += 1) s[t].c();
        void 0 === t[7] && F(() => t[18].call(e));
      },
      m(i, o) {
        d(i, e, o);
        for (let t = 0; t < s.length; t += 1) s[t].m(e, null);
        S(e, t[7]),
          n || ((r = [E(e, "change", t[18]), E(e, "change", t[14])]), (n = !0));
      },
      p(t, n) {
        if (1 & n[0]) {
          let r;
          for (o = t[0], r = 0; r < o.length; r += 1) {
            const i = Fg(t, o, r);
            s[r] ? s[r].p(i, n) : ((s[r] = Ug(i)), s[r].c(), s[r].m(e, null));
          }
          for (; r < s.length; r += 1) s[r].d(1);
          s.length = o.length;
        }
        129 & n[0] && S(e, t[7]);
      },
      d(t) {
        t && p(e), v(s, t), (n = !1), i(r);
      },
    };
  }
  function qg(e) {
    let n, r;
    return {
      c() {
        (n = g("select")),
          (r = g("option")),
          (r.textContent = "Loading..."),
          (r.__value = ""),
          (r.value = r.__value);
      },
      m(t, e) {
        d(t, n, e), f(n, r);
      },
      p: t,
      d(t) {
        t && p(n);
      },
    };
  }
  function Ug(t) {
    let e,
      n,
      r,
      i = t[42] + "";
    return {
      c() {
        (e = g("option")),
          (n = m(i)),
          I(e, "class", "dropdown-item svelte-17mnt76"),
          (e.__value = r = t[42]),
          (e.value = e.__value);
      },
      m(t, r) {
        d(t, e, r), f(e, n);
      },
      p(t, o) {
        1 & o[0] && i !== (i = t[42] + "") && T(n, i),
          1 & o[0] &&
            r !== (r = t[42]) &&
            ((e.__value = r), (e.value = e.__value));
      },
      d(t) {
        t && p(e);
      },
    };
  }
  function jg(t) {
    let e,
      n,
      r,
      o = t[1],
      s = [];
    for (let e = 0; e < o.length; e += 1) s[e] = zg(Mg(t, o, e));
    return {
      c() {
        e = g("select");
        for (let t = 0; t < s.length; t += 1) s[t].c();
        void 0 === t[4] && F(() => t[19].call(e));
      },
      m(i, o) {
        d(i, e, o);
        for (let t = 0; t < s.length; t += 1) s[t].m(e, null);
        S(e, t[4]),
          n || ((r = [E(e, "change", t[19]), E(e, "change", t[15])]), (n = !0));
      },
      p(t, n) {
        if (2 & n[0]) {
          let r;
          for (o = t[1], r = 0; r < o.length; r += 1) {
            const i = Mg(t, o, r);
            s[r] ? s[r].p(i, n) : ((s[r] = zg(i)), s[r].c(), s[r].m(e, null));
          }
          for (; r < s.length; r += 1) s[r].d(1);
          s.length = o.length;
        }
        18 & n[0] && S(e, t[4]);
      },
      d(t) {
        t && p(e), v(s, t), (n = !1), i(r);
      },
    };
  }
  function Bg(e) {
    let n, r;
    return {
      c() {
        (n = g("select")),
          (r = g("option")),
          (r.textContent = "Loading..."),
          (r.__value = ""),
          (r.value = r.__value);
      },
      m(t, e) {
        d(t, n, e), f(n, r);
      },
      p: t,
      d(t) {
        t && p(n);
      },
    };
  }
  function zg(t) {
    let e,
      n,
      r,
      i,
      o = parseInt(t[39].split("-")[1]) + "";
    return {
      c() {
        (e = g("option")),
          (n = m("Week ")),
          (r = m(o)),
          I(e, "class", "dropdown-item svelte-17mnt76"),
          (e.__value = i = t[39]),
          (e.value = e.__value);
      },
      m(t, i) {
        d(t, e, i), f(e, n), f(e, r);
      },
      p(t, n) {
        2 & n[0] && o !== (o = parseInt(t[39].split("-")[1]) + "") && T(r, o),
          2 & n[0] &&
            i !== (i = t[39]) &&
            ((e.__value = i), (e.value = e.__value));
      },
      d(t) {
        t && p(e);
      },
    };
  }
  function Kg(t) {
    let e,
      n,
      r,
      i,
      o,
      s,
      a,
      u,
      c = t[2],
      l = [];
    for (let e = 0; e < c.length; e += 1) l[e] = Gg(Pg(t, c, e));
    const h = (t) =>
        H(l[t], 1, 1, () => {
          l[t] = null;
        }),
      y = [Qg, Hg],
      m = [];
    function w(t, e) {
      return t[9] ? 0 : 1;
    }
    return (
      (i = w(t)),
      (o = m[i] = y[i](t)),
      {
        c() {
          for (let t = 0; t < l.length; t += 1) l[t].c();
          (e = b()),
            (n = g("div")),
            (r = g("button")),
            o.c(),
            I(r, "id", "show-more"),
            I(r, "class", "svelte-17mnt76"),
            I(n, "class", "show-more svelte-17mnt76");
        },
        m(o, c) {
          for (let t = 0; t < l.length; t += 1) l[t].m(o, c);
          d(o, e, c),
            d(o, n, c),
            f(n, r),
            m[i].m(r, null),
            (s = !0),
            a || ((u = E(r, "click", t[13])), (a = !0));
        },
        p(t, n) {
          if (260 & n[0]) {
            let r;
            for (c = t[2], r = 0; r < c.length; r += 1) {
              const i = Pg(t, c, r);
              l[r]
                ? (l[r].p(i, n), G(l[r], 1))
                : ((l[r] = Gg(i)),
                  l[r].c(),
                  G(l[r], 1),
                  l[r].m(e.parentNode, e));
            }
            for (K(), r = c.length; r < l.length; r += 1) h(r);
            $();
          }
          let s = i;
          (i = w(t)),
            i !== s &&
              (K(),
              H(m[s], 1, 1, () => {
                m[s] = null;
              }),
              $(),
              (o = m[i]),
              o || ((o = m[i] = y[i](t)), o.c()),
              G(o, 1),
              o.m(r, null));
        },
        i(t) {
          if (!s) {
            for (let t = 0; t < c.length; t += 1) G(l[t]);
            G(o), (s = !0);
          }
        },
        o(t) {
          l = l.filter(Boolean);
          for (let t = 0; t < l.length; t += 1) H(l[t]);
          H(o), (s = !1);
        },
        d(t) {
          v(l, t), t && p(e), t && p(n), m[i].d(), (a = !1), u();
        },
      }
    );
  }
  function $g(e) {
    let n, r, i;
    return (
      (r = new st({ props: { size: "64", unit: "px", color: "#65b893" } })),
      {
        c() {
          (n = g("div")),
            J(r.$$.fragment),
            I(n, "class", "loading svelte-17mnt76");
        },
        m(t, e) {
          d(t, n, e), Z(r, n, null), (i = !0);
        },
        p: t,
        i(t) {
          i || (G(r.$$.fragment, t), (i = !0));
        },
        o(t) {
          H(r.$$.fragment, t), (i = !1);
        },
        d(t) {
          t && p(n), tt(r);
        },
      }
    );
  }
  function Gg(t) {
    let n, r;
    const i = [t[36], { isActive: t[8] }];
    let o = {};
    for (let t = 0; t < i.length; t += 1) o = e(o, i[t]);
    return (
      (n = new vg({ props: o })),
      {
        c() {
          J(n.$$.fragment);
        },
        m(t, e) {
          Z(n, t, e), (r = !0);
        },
        p(t, e) {
          const r =
            260 & e[0]
              ? Y(i, [4 & e[0] && X(t[36]), 256 & e[0] && { isActive: t[8] }])
              : {};
          n.$set(r);
        },
        i(t) {
          r || (G(n.$$.fragment, t), (r = !0));
        },
        o(t) {
          H(n.$$.fragment, t), (r = !1);
        },
        d(t) {
          tt(n, t);
        },
      }
    );
  }
  function Hg(e) {
    let n;
    return {
      c() {
        n = m("Show more rankings");
      },
      m(t, e) {
        d(t, n, e);
      },
      i: t,
      o: t,
      d(t) {
        t && p(n);
      },
    };
  }
  function Qg(t) {
    let e, n;
    return (
      (e = new st({ props: { size: "32", unit: "px", color: "#65b893" } })),
      {
        c() {
          J(e.$$.fragment);
        },
        m(t, r) {
          Z(e, t, r), (n = !0);
        },
        i(t) {
          n || (G(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          H(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          tt(e, t);
        },
      }
    );
  }
  function Wg(t) {
    let e, n, r, o, s, a, u, c, l, h, v, m, w, T, _, S, A, N, D;
    function C(t, e) {
      return 0 == t[0] ? qg : Vg;
    }
    let x = C(t),
      R = x(t);
    function O(t, e) {
      return 0 == t[1].length || t[3] ? Bg : jg;
    }
    let L = O(t),
      P = L(t);
    m = new Lg({});
    const M = [$g, Kg],
      F = [];
    function V(t, e) {
      return 0 == t[2].length ? 0 : 1;
    }
    return (
      (_ = V(t)),
      (S = F[_] = M[_](t)),
      {
        c() {
          (e = g("div")),
            (n = g("button")),
            (r = y("svg")),
            (o = y("path")),
            (s = b()),
            R.c(),
            (a = b()),
            P.c(),
            (u = b()),
            (c = g("button")),
            (l = y("svg")),
            (h = y("path")),
            (v = b()),
            J(m.$$.fragment),
            (w = b()),
            (T = g("div")),
            S.c(),
            I(
              o,
              "d",
              "M24 20.205L21.005 23.185L9.873 12L21.005 0.813972L24 3.79497L15.833 12L24 20.205V20.205ZM5.96 12L14.127 3.79497L11.132 0.814974L0 12L11.132 23.186L14.127 20.206L5.96 12V12Z"
            ),
            I(r, "xmlns", "http://www.w3.org/2000/svg"),
            I(r, "width", "16"),
            I(r, "height", "16"),
            I(r, "viewBox", "0 0 24 24"),
            I(r, "class", "svelte-17mnt76"),
            k(r, "active", !t[5]),
            k(r, "disabled", t[5]),
            I(n, "class", "arrow svelte-17mnt76"),
            I(n, "id", "prev-btn"),
            I(
              h,
              "d",
              "M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"
            ),
            I(l, "xmlns", "http://www.w3.org/2000/svg"),
            I(l, "width", "16"),
            I(l, "height", "16"),
            I(l, "viewBox", "0 0 24 24"),
            I(l, "class", "svelte-17mnt76"),
            k(l, "active", !t[6]),
            k(l, "disabled", t[6]),
            I(c, "class", "arrow svelte-17mnt76"),
            I(c, "id", "next-btn"),
            I(e, "class", "filters svelte-17mnt76"),
            I(T, "class", "rankings svelte-17mnt76");
        },
        m(i, p) {
          d(i, e, p),
            f(e, n),
            f(n, r),
            f(r, o),
            f(e, s),
            R.m(e, null),
            f(e, a),
            P.m(e, null),
            f(e, u),
            f(e, c),
            f(c, l),
            f(l, h),
            f(e, v),
            Z(m, e, null),
            d(i, w, p),
            d(i, T, p),
            F[_].m(T, null),
            (A = !0),
            N || ((D = [E(n, "click", t[16]), E(c, "click", t[17])]), (N = !0));
        },
        p(t, n) {
          32 & n[0] && k(r, "active", !t[5]),
            32 & n[0] && k(r, "disabled", t[5]),
            x === (x = C(t)) && R
              ? R.p(t, n)
              : (R.d(1), (R = x(t)), R && (R.c(), R.m(e, a))),
            L === (L = O(t)) && P
              ? P.p(t, n)
              : (P.d(1), (P = L(t)), P && (P.c(), P.m(e, u))),
            64 & n[0] && k(l, "active", !t[6]),
            64 & n[0] && k(l, "disabled", t[6]);
          let i = _;
          (_ = V(t)),
            _ === i
              ? F[_].p(t, n)
              : (K(),
                H(F[i], 1, 1, () => {
                  F[i] = null;
                }),
                $(),
                (S = F[_]),
                S ? S.p(t, n) : ((S = F[_] = M[_](t)), S.c()),
                G(S, 1),
                S.m(T, null));
        },
        i(t) {
          A || (G(m.$$.fragment, t), G(S), (A = !0));
        },
        o(t) {
          H(m.$$.fragment, t), H(S), (A = !1);
        },
        d(t) {
          t && p(e),
            R.d(),
            P.d(),
            tt(m),
            t && p(w),
            t && p(T),
            F[_].d(),
            (N = !1),
            i(D);
        },
      }
    );
  }
  function Yg(t, e, n) {
    let r, i, o, s, a, u, c, f;
    l(t, wg, (t) => n(4, (r = t))),
      l(t, bg, (t) => n(7, (s = t))),
      l(t, mg, (t) => n(21, (a = t))),
      l(t, Eg, (t) => n(22, (u = t))),
      l(t, Ig, (t) => n(8, (c = t)));
    let d = [],
      p = [],
      v = [],
      g = !1;
    const y = (function (t) {
        const e = yg(t),
          { set: n } = e;
        return {
          next: e,
          enableNext: () => {
            (document.getElementById("next-btn").disabled = !1), n(!1);
          },
          disableNext: () => {
            (document.getElementById("next-btn").disabled = !0), n(!0);
          },
        };
      })(!1),
      m = (function (t) {
        const e = yg(t),
          { set: n } = e;
        return {
          prev: e,
          enablePrev: () => {
            (document.getElementById("prev-btn").disabled = !1), n(!1);
          },
          disablePrev: () => {
            (document.getElementById("prev-btn").disabled = !0), n(!0);
          },
        };
      })(!1),
      b = (function (t) {
        const e = yg(t),
          { set: n } = e;
        return { loading: e, fetching: () => n(!0), fetched: () => n(!1) };
      })(!1),
      { next: w, enableNext: E, disableNext: I } = y;
    l(t, w, (t) => n(6, (o = t)));
    const { prev: T, enablePrev: _, disablePrev: S } = m;
    l(t, T, (t) => n(5, (i = t)));
    const { loading: k, fetching: N, fetched: D } = b;
    l(t, k, (t) => n(9, (f = t)));
    let x = Cv.collection(a)
      .doc(s)
      .collection(r)
      .orderBy("rank", "asc")
      .limit(10);
    !(function (t) {
      C().$$.on_mount.push(t);
    })(async () => {
      S(),
        I(),
        n(2, (v = await R())),
        n(0, (d = await O())),
        n(1, (p = await L())),
        _(),
        I();
    });
    const R = async () => {
        let t = `${s}-${r}-page-${u}`,
          e = Yv(t);
        if (e.cachedData && !e.expired)
          return (
            (document.getElementById("prev-btn").disabled = !1),
            (document.getElementById("next-btn").disabled = !1),
            e.cachedData.data
          );
        {
          let e = await x.get().then((t) => t.docs.map((t) => t.data()));
          return await M(e), Xv(t, e), e;
        }
      },
      O = async () => {
        let t = "Seasons",
          e = Yv(t);
        if (e.cachedData && !e.expired) return e.cachedData.data;
        {
          let e = Cv.collection(a).orderBy("order", "asc");
          return (
            await e.get().then((t) => {
              t.forEach((t) => {
                n(0, (d = [...d, t.id]));
              });
            }),
            Xv(t, d),
            d
          );
        }
      },
      L = async () => {
        S(), I();
        let t = `${s}-Weeks`,
          e = Yv(t);
        if (e.cachedData && !e.expired)
          return (
            n(1, (p.length = 0), p), n(1, (p = e.cachedData.data)), _(), E(), p
          );
        {
          n(1, (p.length = 0), p);
          const e = xv.httpsCallable("fetchSubCollections");
          return (
            await e({ year: a, season: s }).then((t) => {
              n(1, (p = t.data));
            }),
            Xv(t, p),
            _(),
            E(),
            p
          );
        }
      },
      P = async () => {
        S(), I();
        let t = `${s}-${r}-page-1`,
          e = Yv(t);
        if (e.cachedData && !e.expired)
          n(2, (v.length = 0), v), n(2, (v = e.cachedData.data));
        else {
          let e = [];
          n(2, (v.length = 0), v),
            (x = Cv.collection(a)
              .doc(s)
              .collection(r)
              .orderBy("rank", "asc")
              .limit(10));
          let i = await x.get().then((t) => t.docs.map((t) => t.data()));
          await M(i);
          for (let t = 0; t < i.length; t++)
            (e = {
              rank: i[t].rank,
              title: i[t].title,
              votes: i[t].votes,
              banner: i[t].banner,
              previousRank: i[t].previousRank,
              previousVotes: i[t].previousVotes,
              description: i[t].description,
              genres: i[t].genres,
              externalLinks: i[t].externalLinks,
            }),
              n(2, (v = [...v, e]));
          Xv(t, i);
        }
        "Week-01" == r ? (S(), E()) : "Week-12" == r ? (_(), I()) : (_(), E());
      },
      M = async (t) => {
        let e;
        for (let n = 0; n < t.length; n++)
          (e = await Cv.collection("banners")
            .doc(t[n].title)
            .get()
            .then((t) => t.data().banner)),
            (t[n].banner = e);
      };
    return [
      d,
      p,
      v,
      g,
      r,
      i,
      o,
      s,
      c,
      f,
      w,
      T,
      k,
      async () => {
        let t;
        N(), h(Eg, (u += 1), u);
        let e = `${s}-${r}-page-${u}`,
          i = Yv(e);
        if (i.cachedData && !i.expired) {
          let e = i.cachedData.data;
          for (let r = 0; r < e.length; r++)
            (t = {
              rank: e[r].rank,
              title: e[r].title,
              votes: e[r].votes,
              banner: e[r].banner,
              previousRank: e[r].previousRank,
              previousVotes: e[r].previousVotes,
              description: e[r].description,
              genres: e[r].genres,
              externalLinks: e[r].externalLinks,
            }),
              n(2, (v = [...v, t])),
              e.length < 10 &&
                (document.getElementById("show-more").disabled = !0),
              D();
        } else
          await x.get().then((i) => {
            let o = i.docs[i.docs.length - 1];
            (x = Cv.collection(a)
              .doc(s)
              .collection(r)
              .orderBy("rank", "asc")
              .startAfter(o)
              .limit(10)),
              x.get().then(async (r) => {
                let i = r.docs.map((t) => t.data());
                await M(i);
                for (let e = 0; e < i.length; e++)
                  (t = {
                    rank: i[e].rank,
                    title: i[e].title,
                    votes: i[e].votes,
                    banner: i[e].banner,
                    previousRank: i[e].previousRank,
                    previousVotes: i[e].previousVotes,
                    description: i[e].description,
                    genres: i[e].genres,
                    externalLinks: i[e].externalLinks,
                  }),
                    n(2, (v = [...v, t]));
                Xv(e, i),
                  r.size < 10 &&
                    (document.getElementById("show-more").disabled = !0),
                  D();
              });
          });
      },
      async () => {
        n(3, (g = !0)),
          h(wg, (r = "Week-01"), r),
          await P(),
          await L(),
          n(3, (g = !1)),
          S();
      },
      P,
      function () {
        let t = p.indexOf(r);
        o && E(),
          1 == t
            ? (h(wg, (r = p[t - 1]), r), P(), S())
            : (h(wg, (r = p[t - 1]), r), P()),
          (document.getElementById("show-more").disabled = !1);
      },
      function () {
        let t = p.indexOf(r);
        i && _(),
          t + 1 == p.length - 1
            ? (h(wg, (r = p[t + 1]), r), P(), I())
            : (h(wg, (r = p[t + 1]), r), P()),
          (document.getElementById("show-more").disabled = !1);
      },
      function () {
        (s = A(this)), bg.set(s), n(0, d);
      },
      function () {
        (r = A(this)), wg.set(r), n(1, p);
      },
    ];
  }
  class Xg extends rt {
    constructor(t) {
      super(), nt(this, t, Yg, Wg, s, {}, null, [-1, -1]);
    }
  }
  function Jg(e) {
    let n;
    return {
      c() {
        (n = g("footer")),
          (n.innerHTML =
            '<div class="footer svelte-7v7sya"><div class="vote svelte-7v7sya">Vote for next week on <a href="https://polls.animecorner.me/" target="_blank">polls.animecorner.me</a></div> \n\n    <div class="follow svelte-7v7sya">Follow Anime Corner on\n      <div><a class="icon svelte-7v7sya" href="https://www.facebook.com/AnimeCorner.Official" target="_blank"><svg class="svg-icon svelte-7v7sya" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"></path></svg></a> \n\n        <a class="icon svelte-7v7sya" href="https://twitter.com/animecorner_ac" target="_blank"><svg class="svg-icon svelte-7v7sya" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> \n\n        <a class="icon svelte-7v7sya" href="https://www.instagram.com/animecorner_ac/" target="_blank"><svg class="svg-icon svelte-7v7sya" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg></a> \n\n        <a class="icon svelte-7v7sya" href="https://discord.gg/RcXTHqByGP" target="_blank"><svg class="svg-icon svelte-7v7sya" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"></path></svg></a></div></div></div>'),
          I(n, "class", "svelte-7v7sya");
      },
      m(t, e) {
        d(t, n, e);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && p(n);
      },
    };
  }
  class Zg extends rt {
    constructor(t) {
      super(), nt(this, t, null, Jg, s, {});
    }
  }
  function ty(e) {
    let n, r, i, o, s, a, u, c, l;
    return (
      (a = new Xg({})),
      (c = new Zg({})),
      {
        c() {
          (n = g("main")),
            (r = g("h1")),
            (r.innerHTML =
              '<a href="https://animecorner.me/" target="_blank" class="svelte-1f5xnqd">animecorner.me rankings</a>'),
            (i = b()),
            (o = g("p")),
            (o.textContent =
              "A web representation of anime corner's anime of the week."),
            (s = b()),
            J(a.$$.fragment),
            (u = b()),
            J(c.$$.fragment),
            I(r, "class", "svelte-1f5xnqd"),
            I(n, "class", "svelte-1f5xnqd");
        },
        m(t, e) {
          d(t, n, e),
            f(n, r),
            f(n, i),
            f(n, o),
            f(n, s),
            Z(a, n, null),
            d(t, u, e),
            Z(c, t, e),
            (l = !0);
        },
        p: t,
        i(t) {
          l || (G(a.$$.fragment, t), G(c.$$.fragment, t), (l = !0));
        },
        o(t) {
          H(a.$$.fragment, t), H(c.$$.fragment, t), (l = !1);
        },
        d(t) {
          t && p(n), tt(a), t && p(u), tt(c, t);
        },
      }
    );
  }
  return new (class extends rt {
    constructor(t) {
      super(), nt(this, t, null, ty, s, {});
    }
  })({ target: document.body });
})();
//# sourceMappingURL=bundle.js.map
