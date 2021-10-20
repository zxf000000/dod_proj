(function () {
    var T = document && document.currentScript && document.currentScript.src;
    (window.webpackJsonpruntime = window.webpackJsonpruntime || []).push([[20], {
        "3Csl": function (E, g, u) {
            "use strict";
            u.r(g), u.d(g, "collectExtraDataByMetric", function () {
                return L
            });
            var p = u("8OQS"), f = u.n(p);
            const h = .05, C = ["name", "delta"], v = t => {
                var e, o, n, l;
                if (!t) return "unknownElement";
                if (!t.closest) return (t == null ? void 0 : t.nodeName) === "#text" ? v(t.parentElement) : t.nodeName;
                const s = t == null || (e = t.closest("[data-widget-type]")) === null || e === void 0 || (o = e.dataset) === null || o === void 0 ? void 0 : o.widgetType;
                if (s) return s;
                const i = t == null || (n = t.closest("[data-element-type]")) === null || n === void 0 || (l = n.dataset) === null || l === void 0 ? void 0 : l.elementType;
                if (i) return i;
                const d = {
                    dmRespCol: "column",
                    dmRespRow: "row",
                    dmFooterContainer: "footer",
                    dmHeaderContainer: "header",
                    dmInner: "page background",
                    bgGallerySlide: "row image slider",
                    videobgframe: "video bg"
                };
                for (const [r, a] of Object.entries(d)) {
                    var c;
                    if (t != null && (c = t.classList) !== null && c !== void 0 && c.contains(r)) return a
                }
                return "unknown"
            }, y = ({entries: t = []}) => {
                const e = [], o = [];
                return t.forEach(({sources: n, value: l}) => {
                    if (l > h) {
                        const s = n.map(({node: i} = {}) => {
                            var d, c;
                            o.push(v(i));
                            const r = (i == null || (d = i.nodeName) === null || d === void 0 ? void 0 : d.toLowerCase()) || (i == null ? void 0 : i.nodeType) || "unknownNode",
                                a = i != null && (c = i.className) !== null && c !== void 0 && c.length ? "." + Array.from(i.classList.values()).join(".") : "";
                            return `${r}${a}`
                        });
                        s != null && s.length && e.push(s.join(","))
                    }
                }), {clsSelectors: e, clsCustomType: o}
            }, I = t => {
                const o = /(-)(\d{1,4})(w.*)$/gm.exec(t);
                return o ? Number(o[2]) : null
            }, w = (t, e, o) => {
                const n = I(e);
                return n ? {
                    isBackgroundImg: o,
                    lcpImgIntrinsicWidth: n,
                    lcpImgRenderedWidth: t,
                    lcpImgWidthDelta: n ? n > t ? n - t : 0 : -1,
                    lcpImgSrc: e
                } : {}
            }, N = t => {
                const e = t == null ? void 0 : t.naturalHeight;
                let o = t == null ? void 0 : t.clientHeight;
                return o === 0 && (o = t.parentElement.clientHeight), {
                    lcpImgIntrinsicHeight: e,
                    lcpImgRenderedHeight: o,
                    lcpImgHeightDelta: e ? e > o ? e - o : 0 : -1
                }
            }, S = ({lcpImgWidthDelta: t = 0, lcpImgHeightDelta: e = 0}) => t + e, H = ({entries: t = []}, e) => {
                var o;
                const {url: n, element: l} = (t == null ? void 0 : t.pop()) || {},
                    s = (l == null ? void 0 : l.className) || "unknown",
                    i = (l == null || (o = l.tagName) === null || o === void 0 ? void 0 : o.toLowerCase()) || "",
                    d = v(l), c = i === "img";
                let r = {lcpSelector: s, lcpElementType: i, lcpCustomType: d};
                const a = (l == null ? void 0 : l.clientWidth) || e, m = !c && i !== "video";
                return a && n && (r = Object.assign({}, r, w(a, n, m))), !m && n && c && (r = Object.assign({}, r, N(l))), Object.assign({}, r, {lcpTotalImageDelta: S(r)})
            }, L = (t, {viewportWidth: e}) => {
                let {name: o} = t, n = f()(t, C);
                return o === "LCP" ? H(n, e) : o === "CLS" ? y(n) : {}
            }
        }
    }])
})();
