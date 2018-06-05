! function () {
    "use strict";

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function createCommonjsModule(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    for (var rngBrowser = createCommonjsModule(function (e) {
            var t = "undefined" != typeof crypto && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && msCrypto.getRandomValues.bind(msCrypto);
            if (t) {
                var n = new Uint8Array(16);
                e.exports = function () {
                    return t(n), n
                }
            } else {
                var o = new Array(16);
                e.exports = function () {
                    for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), o[t] = e >>> ((3 & t) << 3) & 255;
                    return o
                }
            }
        }), byteToHex = [], i = 0; i < 256; ++i) byteToHex[i] = (i + 256).toString(16).substr(1);

    function bytesToUuid(e, t) {
        var n = t || 0,
            o = byteToHex;
        return o[e[n++]] + o[e[n++]] + o[e[n++]] + o[e[n++]] + "-" + o[e[n++]] + o[e[n++]] + "-" + o[e[n++]] + o[e[n++]] + "-" + o[e[n++]] + o[e[n++]] + "-" + o[e[n++]] + o[e[n++]] + o[e[n++]] + o[e[n++]] + o[e[n++]] + o[e[n++]]
    }
    var bytesToUuid_1 = bytesToUuid;

    function v4(e, t, n) {
        var o = t && n || 0;
        "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
        var a = (e = e || {}).random || (e.rng || rngBrowser)();
        if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
            for (var r = 0; r < 16; ++r) t[o + r] = a[r];
        return t || bytesToUuid_1(a)
    }
    var v4_1 = v4,
        config = {
            "ringostatProjectHash": "288f88b4f61f278d0a09e66b7829662a57662063",
            "uaId": "UA-8068675-6",
            "xpaths": [{
                "xPath": "\/\/a[.\/span[contains(.,'(044) 501-41-52')]]",
                "onlyForRegion": "",
                "mask": "<span style=\"font-size: 12pt;\" class=\"\">(###) ###-##-##<\/span>",
                "checkOnClient": "1",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "3",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/a[.\/span[contains(.,'(067) 516-84-67')]]",
                "onlyForRegion": "",
                "mask": "<span style=\"font-size: 12pt;\" class=\"\">(###) ###-##-##<\/span>",
                "checkOnClient": "1",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "4",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/a[1][.\/span[text()='(044) 501-41-50']]",
                "onlyForRegion": "",
                "mask": "<span style=\"font-size: 12pt;\">(###) ###-##-##<\/span>",
                "checkOnClient": "1",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "5",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/a[.\/span[text()='(067) 516-84-68']]",
                "onlyForRegion": "",
                "mask": "<span style=\"font-size: 12pt;\">(###) ###-##-##<\/span>",
                "checkOnClient": "1",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "6",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/a[1][.\/span[contains(.,'(044) 581-59-06')]]",
                "onlyForRegion": "",
                "mask": "<span style=\"font-size: 12pt;\">(###) ###-##-##<\/span>",
                "checkOnClient": "1",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "7",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/a[2][.\/span[contains(.,'(067) 516-84-69')]]",
                "onlyForRegion": "",
                "mask": "<span style=\"font-size: 12pt;\">(###) ###-##-##<\/span>",
                "checkOnClient": "1",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "8",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/a[1][.\/span[contains(.,'(044) 501-37-00')]]",
                "onlyForRegion": "",
                "mask": "<span style=\"font-size: 12pt;\">(###) ###-##-##<\/span>",
                "checkOnClient": "1",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "9",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/a[.\/span[contains(.,'(067) 516-84-70')]]",
                "onlyForRegion": "",
                "mask": "<span style=\"font-size: 12pt;\">(###) ###-##-##<\/span>",
                "checkOnClient": "1",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "10",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/b\/span[contains(.,'(044) 501-41-50')] | \/\/b\/span[contains(.,'(044) 501-41-51')]",
                "onlyForRegion": "",
                "mask": "(###) ###-##-##",
                "checkOnClient": "1",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "5",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/div\/b[contains(.,'501-3-701')] | \/\/div\/b[contains(.,'501-3-700')]",
                "onlyForRegion": "",
                "mask": "(###) ###-##-##",
                "checkOnClient": "1",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "9",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/table[@id='contact_table']\/tbody\/tr[2]\/td[2]",
                "onlyForRegion": "",
                "mask": "(###) ###-##-##",
                "checkOnClient": "1",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "3",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/table[@id='contact_table']\/tbody\/tr[2]\/td[3]",
                "onlyForRegion": "",
                "mask": "(###) ###-##-##",
                "checkOnClient": "1",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "4",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/table[@id='contact_table']\/tbody\/tr[3]\/td[2]",
                "onlyForRegion": "",
                "mask": "(###) ###-##-##",
                "checkOnClient": "1",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "5",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/td[contains(.,'(044) 501-41-51')]",
                "onlyForRegion": "",
                "mask": "(###) ###-##-##",
                "checkOnClient": "1",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "6",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/table[@id='contact_table']\/tbody\/tr[@class='pink']\/td[2]",
                "onlyForRegion": "",
                "mask": "(###) ###-##-##",
                "checkOnClient": "1",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "9",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/table[@id='contact_table']\/tbody\/tr[@class='pink']\/td[3]",
                "onlyForRegion": "",
                "mask": "(###) ###-##-##",
                "checkOnClient": "1",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "10",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/table[@id='contact_table']\/tbody\/tr[5]\/td[2]",
                "onlyForRegion": "",
                "mask": "(###) ###-##-##",
                "checkOnClient": "1",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "7",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/table[@id='contact_table']\/tbody\/tr[5]\/td[3]",
                "onlyForRegion": "",
                "mask": "(###) ###-##-##",
                "checkOnClient": "1",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "8",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/div[@class='vcard']\/div[contains(.,'+380 (44) 501-41-52')]",
                "onlyForRegion": "",
                "mask": "<span class=\"#\"><\/span>",
                "checkOnClient": "1",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "3",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/a[.\/span[text()='(044) 581-59-00']]",
                "onlyForRegion": "",
                "mask": "<span style=\"font-size: 12pt;\">(###) ###-##-##<\/span>",
                "checkOnClient": "1",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "11",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/a[.\/span[text()='(067) 516-84-71']]",
                "onlyForRegion": "",
                "mask": "<span style=\"font-size: 12pt;\">(###) ###-##-##<\/span>",
                "checkOnClient": "1",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "12",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/td[contains(.,'(044) 581-59-00')]",
                "onlyForRegion": "",
                "mask": "(###) ###-##-##",
                "checkOnClient": "1",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "11",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/td[contains(.,'(044) 581-59-01')]",
                "onlyForRegion": "",
                "mask": "(###) ###-##-##",
                "checkOnClient": "1",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "12",
                "callMeHTML": ""
            }, {
                "xPath": "\/\/div[.\/span[@class='tel']\/i[@class='value']]",
                "onlyForRegion": "",
                "mask": "(###) ###-##-##",
                "checkOnClient": "1",
                "callMeAll": "0",
                "reservedNumbersPercent": "0",
                "callMeMobile": "0",
                "geoGroup": "3",
                "callMeHTML": ""
            }],
            "isAdvanced": 1,
            "userSettings": {
                "observeDOM": true,
                "browserGeolocation": false
            },
            "substitutionStatus": 1,
            "crossDomainTracking": 0,
            "trackedEntities": []
        },
        urls = {
            changedNumber: "https://analytics.ringostat.net/changed_number/",
            collect: "https://analytics.ringostat.net/collect/",
            ping: "https://analytics.ringostat.net/ping/",
            backend: "https://app.ringostat.com/",
            api: "https://api.ringostat.com/",
            analytics: "https://analytics.ringostat.net/",
            substitution: "https://substitution.ringostat.net/"
        },
        createFunction = function (e, t) {
            return "string" == typeof e && 0 === e.indexOf("function") ? new Function("return ".concat(e))() : t
        };
    config.urls = urls, config.userSettings = config.userSettings || {}, config.isAdvanced = config.isAdvanced || !1, config.phoneNumber = config.phoneNumber || null, config.roistatTracking = config.userSettings.roistatTracking || !1, config.sessionLength = config.userSettings.sessionLength || 300, config.sessionLengthMS = 1e3 * config.sessionLength, config.observeDOM = config.userSettings.observeDOM || !1, config.trackedEntities = config.trackedEntities || {}, config.browserGeolocation = void 0 === config.userSettings.browserGeolocation || config.userSettings.browserGeolocation, config.changedNumberCallback = createFunction(config.userSettings.callback, function () {}), config.substitutionEnabled = createFunction(config.userSettings.initChangeNumber, function () {
        return !0
    })(), Array.prototype.forEach || (Array.prototype.forEach = function (e) {
        var t, n;
        if (null == this) throw new TypeError("this is null or not defined");
        var o = Object(this),
            a = o.length >>> 0;
        if ("function" != typeof e) throw new TypeError(e + " is not a function");
        for (arguments.length > 1 && (t = arguments[1]), n = 0; n < a;) {
            var r;
            n in o && (r = o[n], e.call(t, r, n, o)), n++
        }
    }), String.prototype.includes || (String.prototype.includes = function (e, t) {
        return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
    }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function (e, t) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var n = Object(this),
                o = n.length >>> 0;
            if (0 === o) return !1;
            var a, r, i = 0 | t,
                c = Math.max(i >= 0 ? i : o - Math.abs(i), 0);
            for (; c < o;) {
                if ((a = n[c]) === (r = e) || "number" == typeof a && "number" == typeof r && isNaN(a) && isNaN(r)) return !0;
                c++
            }
            return !1
        }
    }), window.MutationObserver = window.MutationObserver || function (e) {
        function t(e) {
            this.i = [], this.m = e
        }

        function n(t) {
            var n, o = {
                type: null,
                target: null,
                addedNodes: [],
                removedNodes: [],
                previousSibling: null,
                nextSibling: null,
                attributeName: null,
                attributeNamespace: null,
                oldValue: null
            };
            for (n in t) o[n] !== e && t[n] !== e && (o[n] = t[n]);
            return o
        }

        function o(t, o) {
            var c = r(t, o);
            return function (l) {
                var u, d = l.length;
                o.a && 3 === t.nodeType && t.nodeValue !== c.a && l.push(new n({
                    type: "characterData",
                    target: t,
                    oldValue: c.a
                })), o.b && c.b && a(l, t, c.b, o.f), (o.c || o.g) && (u = function (t, o, r, c) {
                    function l(e, o, r, i, s) {
                        var l, d, g, f = e.length - 1;
                        for (s = -~((f - s) / 2); g = e.pop();) l = r[g.j], d = i[g.l], c.c && s && Math.abs(g.j - g.l) >= f && (t.push(n({
                            type: "childList",
                            target: o,
                            addedNodes: [l],
                            removedNodes: [l],
                            nextSibling: l.nextSibling,
                            previousSibling: l.previousSibling
                        })), s--), c.b && d.b && a(t, l, d.b, c.f), c.a && 3 === l.nodeType && l.nodeValue !== d.a && t.push(n({
                            type: "characterData",
                            target: l,
                            oldValue: d.a
                        })), c.g && u(l, d)
                    }

                    function u(o, r) {
                        for (var g, f, p, m, h, b = o.childNodes, v = r.c, y = b.length, k = v ? v.length : 0, _ = 0, w = 0, C = 0; w < y || C < k;) m = b[w], h = (p = v[C]) && p.node, m === h ? (c.b && p.b && a(t, m, p.b, c.f), c.a && p.a !== e && m.nodeValue !== p.a && t.push(n({
                            type: "characterData",
                            target: m,
                            oldValue: p.a
                        })), f && l(f, o, b, v, _), c.g && (m.childNodes.length || p.c && p.c.length) && u(m, p), w++, C++) : (d = !0, g || (g = {}, f = []), m && (g[p = i(m)] || (g[p] = !0, -1 === (p = s(v, m, C, "node")) ? c.c && (t.push(n({
                            type: "childList",
                            target: o,
                            addedNodes: [m],
                            nextSibling: m.nextSibling,
                            previousSibling: m.previousSibling
                        })), _++) : f.push({
                            j: w,
                            l: p
                        })), w++), h && h !== b[w] && (g[p = i(h)] || (g[p] = !0, -1 === (p = s(b, h, w)) ? c.c && (t.push(n({
                            type: "childList",
                            target: r.node,
                            removedNodes: [h],
                            nextSibling: v[C + 1],
                            previousSibling: v[C - 1]
                        })), _--) : f.push({
                            j: p,
                            l: C
                        })), C++));
                        f && l(f, o, b, v, _)
                    }
                    var d;
                    return u(o, r), d
                }(l, t, c, o)), (u || l.length !== d) && (c = r(t, o))
            }
        }

        function a(t, o, a, r) {
            for (var i, c, s = {}, l = o.attributes, d = l.length; d--;) c = (i = l[d]).name, r && r[c] === e || (u(o, i) !== a[c] && t.push(n({
                type: "attributes",
                target: o,
                attributeName: c,
                oldValue: a[c],
                attributeNamespace: i.namespaceURI
            })), s[c] = !0);
            for (c in a) s[c] || t.push(n({
                target: o,
                type: "attributes",
                attributeName: c,
                oldValue: a[c]
            }))
        }

        function r(e, t) {
            var n = !0;
            return function e(o) {
                var a = {
                    node: o
                };
                return !t.a || 3 !== o.nodeType && 8 !== o.nodeType ? (t.b && n && 1 === o.nodeType && (a.b = c(o.attributes, function (e, n) {
                    return t.f && !t.f[n.name] || (e[n.name] = u(o, n)), e
                })), n && (t.c || t.a || t.b && t.g) && (a.c = function (e, t) {
                    for (var n = [], o = 0; o < e.length; o++) n[o] = t(e[o], o, e);
                    return n
                }(o.childNodes, e)), n = t.g) : a.a = o.nodeValue, a
            }(e)
        }

        function i(e) {
            try {
                return e.id || (e.mo_id = e.mo_id || d++)
            } catch (t) {
                try {
                    return e.nodeValue
                } catch (e) {
                    return d++
                }
            }
        }

        function c(e, t) {
            for (var n = {}, o = 0; o < e.length; o++) n = t(n, e[o], o, e);
            return n
        }

        function s(e, t, n, o) {
            for (; n < e.length; n++)
                if ((o ? e[n][o] : e[n]) === t) return n;
            return -1
        }
        t._period = 30, t.prototype = {
            observe: function (e, n) {
                for (var a = {
                        b: !!(n.attributes || n.attributeFilter || n.attributeOldValue),
                        c: !!n.childList,
                        g: !!n.subtree,
                        a: !(!n.characterData && !n.characterDataOldValue)
                    }, r = this.i, i = 0; i < r.length; i++) r[i].s === e && r.splice(i, 1);
                n.attributeFilter && (a.f = c(n.attributeFilter, function (e, t) {
                    return e[t] = !0, e
                })), r.push({
                    s: e,
                    o: o(e, a)
                }), this.h || function (e) {
                    ! function n() {
                        var o = e.takeRecords();
                        o.length && e.m(o, e), e.h = setTimeout(n, t._period)
                    }()
                }(this)
            },
            takeRecords: function () {
                for (var e = [], t = this.i, n = 0; n < t.length; n++) t[n].o(e);
                return e
            },
            disconnect: function () {
                this.i = [], clearTimeout(this.h), this.h = null
            }
        };
        var l = document.createElement("i");
        l.style.top = 0;
        var u = (l = "null" != l.attributes.style.value) ? function (e, t) {
                return t.value
            } : function (e, t) {
                return "style" !== t.name ? t.value : e.style.cssText
            },
            d = 1;
        return t
    }(void 0);
    var LEVEL_PAGEVIEW = "pageview",
        LEVEL_SESSION = "session";

    function isNil(e) {
        return null == e
    }
    var isNil_1 = isNil,
        callMeCode = function (e, t, n, o) {
            for (var a = e.length; a--;) ! function (r) {
                var i = e[a];
                i.innerHTML = t, i.firstChild.addEventListener("click", function (e) {
                    o(n, function (e, t) {
                        i.innerHTML = e, "A" == i.nodeName && i.setAttribute("href", "tel:" + t), /iphone|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase()) && (location.href = "tel:" + t)
                    })
                })
            }()
        },
        log = function (e) {
            "#debug_ringostat_script" === window.location.hash && console.log(e)
        },
        computeAdditionalValue = function computeAdditionalValue(content, type) {
            try {
                return "simple" === type ? window[content] : eval(content)
            } catch (e) {
                log(e)
            }
        },
        getAdditionalData = function (e, t) {
            var n = {};
            if (void 0 !== window.ringostat_additional_data && t === LEVEL_SESSION) {
                if ("string" == typeof window.ringostat_additional_data) try {
                    n = JSON.parse(window.ringostat_additional_data)
                } catch (e) {
                    log(e)
                } else "[object Object]" === Object.prototype.toString.call(window.ringostat_additional_data) && (n = window.ringostat_additional_data);
                n.ringostatOldData = 1
            }
            return Object.keys(e).forEach(function (o) {
                var a = e[o],
                    r = a.level,
                    i = a.type,
                    c = a.value;
                if (t === r) {
                    var s = computeAdditionalValue(c, i);
                    !1 === isNil_1(s) && (n[o] = s)
                }
            }), Object.keys(n).length > 0 ? JSON.stringify(n) : null
        },
        computeCollectParams = function (e, t) {
            var n = t.clientId,
                o = t.cookie,
                a = t.hitId,
                r = t.firstRequest,
                i = t.geoLocation,
                c = t.pageViewId,
                s = t.trackingId;
            return ["hid=" + a, "vid=" + c, "r_ad=" + encodeURIComponent(getAdditionalData(e.trackedEntities, LEVEL_SESSION)), "r_ce=" + encodeURIComponent(o), "r_cl=" + encodeURIComponent(n), "r_cu=" + encodeURIComponent(window.location.href), "r_d=" + encodeURIComponent(Date.now()), "r_h=" + encodeURIComponent(e.ringostatProjectHash), "r_pd=" + encodeURIComponent(getAdditionalData(e.trackedEntities, LEVEL_PAGEVIEW)), "r_re=" + encodeURIComponent(document.referrer), "r_ur=" + r, "r_ua=" + encodeURIComponent(s), "r_us=" + encodeURIComponent(window.navigator.userAgent), i.accuracy && "&r_a=" + encodeURIComponent(i.accuracy), i.city && "r_ci=" + encodeURIComponent(i.city), i.country && "r_cy=" + encodeURIComponent(i.country), i.latitude && "r_la=" + encodeURIComponent(i.latitude), i.longitude && "r_lo=" + encodeURIComponent(i.longitude)].filter(Boolean).join("&")
        },
        computePingParams = function (e, t) {
            var n = t.clientId,
                o = t.pageViewId;
            return ["hid=" + o, "vid=" + o, "r_ad=" + encodeURIComponent(getAdditionalData(e.trackedEntities, LEVEL_SESSION)), "r_cl=" + encodeURIComponent(n), "r_pd=" + encodeURIComponent(getAdditionalData(e.trackedEntities, LEVEL_PAGEVIEW)), "r_h=" + encodeURIComponent(e.ringostatProjectHash)].join("&")
        };

    function computePayload(e, t, n) {
        return t.length <= 2e3 || n.forceGet ? {
            method: "GET",
            type: "text/plain",
            url: e + "?" + t,
            query: void 0
        } : {
            method: "POST",
            type: "application/x-www-form-urlencoded",
            url: e,
            query: t
        }
    }
    var utils = {
            sendPayload: function (e, t, n) {
                (n = void 0 === n ? {} : n).onError = n.onError || function () {}, n.onSuccess = n.onSuccess || function () {};
                var o = computePayload(e, t, n),
                    a = new("onload" in new XMLHttpRequest ? XMLHttpRequest : XDomainRequest);
                a.open(o.method, o.url, !0), a.setRequestHeader("Content-Type", o.type), a.onload = n.onSuccess, a.onerror = n.onError, a.send(o.query)
            },
            addEvents: function (e, t, n) {
                for (var o = t.length; o--;) e.addEventListener(t[o], n, !1)
            }
        },
        gaObjectName = config.userSettings.GoogleAnalyticsObject ? config.userSettings.GoogleAnalyticsObject : window.GoogleAnalyticsObject;
    window[gaObjectName] || (window[gaObjectName] = function () {
        window[gaObjectName].q = window[gaObjectName].q || [], window[gaObjectName].q.push(arguments)
    });
    var firstRequest = !0,
        pageViewId = v4_1(),
        needsRegenerate = !1,
        ringostatCookie = {
            cookieDomain: config.userSettings.cookieDomain || "",
            createCookie: function (e, t, n, o) {
                document.cookie = e + "=" + encodeURIComponent(JSON.stringify(t)) + "; expires=" + new Date((new Date).getTime() + 1e3 * n).toUTCString() + "; path=/" + (o ? "; domain=" + o : "")
            },
            readCookie: function (e, t) {
                var n = document.cookie.match(new RegExp("(^|;)\\s*" + e + "\\s*=\\s*([^;]+)"));
                return n = n ? decodeURIComponent(n.pop()) : null, t ? JSON.parse(n) : n
            },
            eraseCookie: function (e, t) {
                ringostatCookie.createCookie(e, "", -1, t)
            },
            refreshCookie: function (e, t, n) {
                ringostatCookie.createCookie(e, ringostatCookie.readCookie(e, !0), t, n)
            }
        };
    ringostatCookie.CookieTLD = function () {
            for (var e, t = document.cookie, n = document.location.hostname.split("."), o = n.length; o--;)
                if (e = "." + n.slice(o).join("."), ringostatCookie.createCookie("CookieTLD", e, 30, e), t !== document.cookie) return ringostatCookie.eraseCookie("CookieTLD", e), e
        }(),
        function (e, t) {
            e.callbackSettings = e.userSettings.callbackSettings || {};
            var n = {
                    isMobile: /iphone|ipod|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase()),
                    sendPost: function (e, t, o, a) {
                        var r = new("onload" in new XMLHttpRequest ? XMLHttpRequest : XDomainRequest);
                        r.open("POST", e, !0), r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), r.onload = o, r.onerror = a, r.send(n.objectToQueryString(t))
                    },
                    addEvents: function (e, t, n) {
                        for (var o = t.length; o--;) e.addEventListener(t[o], n, !1)
                    },
                    maskString: function (e, t) {
                        for (var n = t.toString().split(""), o = e.toString().split(""), a = n.length; a--;) - 1 !== o.lastIndexOf("#") && (o[o.lastIndexOf("#")] = n[+a]);
                        return o.join("").replace(/#/g, "")
                    },
                    getLocale: function () {
                        return (document.documentElement.lang ? document.documentElement.lang : navigator ? navigator.language || navigator.userLanguage : "ru").split("-")[0]
                    },
                    deepExtend: function (e, t) {
                        for (var o in t) t.hasOwnProperty(o) && (e || (e = {}), e[o] && "object" === _typeof(t[o]) ? n.deepExtend(e[o], t[o]) : e[o] = t[o]);
                        return e
                    },
                    objectToQueryString: function (e) {
                        function t(e, n, o) {
                            var a, r, i, c;
                            if (c = /\[\]$/, n instanceof Array)
                                for (r = 0, i = n.length; r < i; r++) c.test(e) ? o(e, n[r]) : t(e + "[" + ("object" === _typeof(n[r]) ? r : "") + "]", n[r], o);
                            else if ("object" == _typeof(n))
                                for (a in n) t(e + "[" + a + "]", n[a], o);
                            else o(e, n)
                        }
                        var n, o, a, r, i;
                        if (o = [], i = /%20/g, a = function (e, t) {
                                t = "function" == typeof t ? t() : null == t ? "" : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                            }, e instanceof Array)
                            for (r in e) a(r, e[r]);
                        else
                            for (n in e) t(n, e[n], a);
                        return o.join("&").replace(i, "+")
                    },
                    fadeIn: function (e) {
                        e.style.opacity = 0, e.style.display = "block",
                            function t() {
                                var n = parseFloat(e.style.opacity);
                                (n += .1) > 1 || (e.style.opacity = n, requestAnimationFrame(t))
                            }()
                    },
                    fadeOut: function (e, t) {
                        var n = 1,
                            o = setInterval(function () {
                                (n -= 10 / 300) <= 0 && (clearInterval(o), n = 0, e.style.display = "none", e.style.visibility = "hidden", "function" == typeof t && t()), e.style.opacity = n, e.style.filter = "alpha(opacity=" + 100 * n + ")"
                            }, 10)
                    },
                    addClass: function (e, t) {
                        e.className += " " + t
                    },
                    removeClass: function (e, t) {
                        e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")
                    },
                    parseUrl: function (e) {
                        var t = document.createElement("a");
                        return t.href = e, t
                    },
                    throttle: function (e, t) {
                        var n, o, a = !1;
                        return function r() {
                            if (a) return n = arguments, void(o = this);
                            e.apply(this, arguments), a = !0, setTimeout(function () {
                                a = !1, n && (r.apply(o, n), n = o = null)
                            }, t)
                        }
                    }
                },
                o = {
                    currentUrl: window.location.href,
                    referrer: document.referrer,
                    referrerHost: n.parseUrl(document.referrer).hostname,
                    currentHost: n.parseUrl(window.location.href).host
                },
                a = {
                    callback: null,
                    interval: null,
                    achieveTime: 0,
                    guid: function () {
                        function e() {
                            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                        }
                        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
                    }(),
                    isLocalStorageNameSupported: function () {
                        var e = window.sessionStorage;
                        try {
                            return e.setItem("test", "1"), e.removeItem("test"), !0
                        } catch (e) {
                            return !1
                        }
                    },
                    init: function (e, t) {
                        a.callback = t, a.achieveTime = e;
                        var r = {
                                guid: "",
                                achiev: 0
                            },
                            i = a.readFromStorage();
                        if (i && i.achiev) {
                            if (-1 === i.achiev) {
                                if (!o.isLanding) return;
                                i.achiev = 0
                            }
                            r.achiev = i.achiev
                        }
                        a.writeToStorage(r);
                        n.addEvents(document, ["mousedown", "mouseup", "mousemove", "touchstart", "touchmove", "touchend", "keydown", "keyup"], n.throttle(a.eventFired, 500)), null === a.interval && (a.interval = setInterval(function () {
                            (i = a.readFromStorage()) && i.guid === a.guid && (i.achiev >= a.achieveTime || -1 === i.achiev ? (clearInterval(a.interval), a.writeToStorage({
                                guid: "",
                                achiev: -1
                            }), a.callback()) : a.writeToStorage({
                                guid: "",
                                achiev: i.achiev + 10
                            }))
                        }, 1e4))
                    },
                    eventFired: function () {
                        var e = a.readFromStorage();
                        e && (e.guid = a.guid, a.writeToStorage(e))
                    },
                    writeToStorage: function (e) {
                        var n = {
                            value: e,
                            expires_at: (new Date).getTime() + 18e5
                        };
                        a.isLocalStorageNameSupported() ? localStorage.setItem("rngst_action", JSON.stringify(n)) : t.createCookie("rngst_action", JSON.stringify(n))
                    },
                    readFromStorage: function () {
                        if (a.isLocalStorageNameSupported()) var e = JSON.parse(localStorage.getItem("rngst_action"));
                        else t.readCookie("rngst_action", !0);
                        if (null !== e) {
                            if (!(null !== e.expires_at && e.expires_at < (new Date).getTime())) return e.value;
                            localStorage.removeItem("rngst_action")
                        }
                        return null
                    }
                },
                r = {
                    old_data: null,
                    language: n.getLocale(),
                    formType: null,
                    form: null,
                    button: null,
                    icon: null,
                    overlay: null,
                    formStatus: "hidden",
                    buttonStatus: "hidden",
                    iframeDocument: null,
                    setCallbackSettings: function (t) {
                        e.callbackSettings = n.deepExtend({
                            CallbackOffOnPage: !1,
                            autoFormOffOnPage: !1,
                            CallbackOff: !1,
                            autoFormOff: !1,
                            delay: 0
                        }, t), r.check()
                    },
                    hideButton: function () {
                        var e = document.getElementsByClassName("rngst_phone_button")[0];
                        e && document.body.removeChild(e)
                    },
                    stopTimer: function () {
                        a.callback = function () {}, a.writeToStorage({
                            achiev: -1
                        })
                    },
                    freezeTimer: function () {
                        clearTimeout(a.interval)
                    },
                    check: function () {
                        return e.callbackSettings.CallbackOff ? (r.hideButton(), r.stopTimer(), void t.createCookie("rngst_callback", {
                            callbackNumber: !1
                        }, 1800, t.cookieDomain)) : e.callbackSettings.CallbackOffOnPage ? (r.hideButton(), void r.freezeTimer()) : void(t.readCookie("rngst_callback", !1) ? (r.old_data = t.readCookie("rngst_callback", !0), r.old_data.callbackNumber ? r.init() : log("No callback number")) : n.sendPost(e.urls.substitution + "api/checkCallback/", {
                            "data[current_url]": o.currentUrl,
                            "data[referrer]": o.referrer,
                            "data[ua_id]": o.uaId,
                            "data[utmz]": t.readCookie("rngst2", !1) && t.readCookie("rngst2", !0).utmz || ""
                        }, function () {
                            r.old_data = JSON.parse(this.responseText), t.createCookie("rngst_callback", r.old_data, 1800, t.cookieDomain), r.old_data.callbackNumber ? r.init() : log("No callback number"), log("checkCallback  Success : " + this.status + " - " + this.statusText)
                        }, function () {
                            log("checkCallback  Error : " + this.status + " - " + this.statusText)
                        }))
                    },
                    init: function () {
                        if (!r.old_data.is_working_time) return t.eraseCookie("rngst_callback", t.cookieDomain), void log("Out of working hours");
                        if (e.callbackSettings.delay && (r.old_data.avg_time_to_call = +r.old_data.avg_time_to_call + e.callbackSettings.delay, t.createCookie("rngst_callback", r.old_data, 1800, t.cookieDomain)), r.old_data.language = r.language, 0 === document.getElementsByClassName("rngst_phone_button").length) {
                            var i = document.getElementsByTagName("head")[0],
                                c = document.createElement("link");
                            c.rel = "stylesheet", c.type = "text/css", c.href = e.urls.substitution + "api/getCallbackButtonCSS/?ua_id=" + o.uaId, i.appendChild(c), document.body.insertAdjacentHTML("beforeend", '<div class="rngst_phone_button"><div class="rngst_phone_icon"></div><div class="rngst_phone_circle"></div><div class="rngst_phone_circle2"></div><div class="rngst_phone_fill"></div><div class="rngst_phone_body"></div></div>'), r.button = document.getElementsByClassName("rngst_phone_button")[0], r.icon = document.getElementsByClassName("rngst_phone_icon")[0], n.addEvents(r.icon, ["mousedown", "click"], function (e) {
                                ("click" === e.type || "mousedown" === e.type && !e.isTrusted) && (r.old_data.form_type = "forced", r.button.style.display = "none", r.stopTimer(), r.callbackForm())
                            }), n.addEvents(r.button, ["mousedown", "mouseup", "touchstart", "touchend", "keydown", "keyup", "click", "contextmenu", "dblclick"], function (e) {
                                e.stopPropagation()
                            })
                        }
                        e.callbackSettings.autoFormOffOnPage ? r.freezeTimer() : e.callbackSettings.autoFormOffOnPage ? r.stopTimer() : (a.init(r.old_data.avg_time_to_call, function () {
                            r.old_data.form_type = "default", r.button.style.display = "none", r.callbackForm()
                        }), e.callbackSettings.autoFormOff && r.stopTimer())
                    },
                    callbackForm: function () {
                        n.sendPost(e.urls.substitution + "api/getCallbackForm/", {
                            "data[ua_id]": o.uaId,
                            "data[form_type]": r.old_data.form_type,
                            "data[language]": r.old_data.language
                        }, function () {
                            var t = document.createElement("iframe"),
                                o = document.createElement("div"),
                                a = n.isMobile ? "allowDropdown: false," : "";
                            t.src = "", t.title = "title", t.setAttribute("name", "name"), t.setAttribute("id", "id"), t.setAttribute("frameborder", "no"), (t.frameElement || t).style.cssText = "width: 100%; height: 100%; border: 0; display: block;", o.style.cssText = "width: 100%; height: 100%; position: fixed; top: 0; left: 0; z-index: 9999999;", o.setAttribute("id", "wrapper_id"), o.appendChild(t);
                            var i = document.body.lastChild;
                            i.parentNode.insertBefore(o, i.nextSibling), r.iframeDocument = t.contentWindow.document, r.iframeDocument.write(this.responseText), r.iframeDocument.close();
                            var c = this.responseText.match(new RegExp('<span class="hide" id="rngst_form_design">(.*)</span>'))[1],
                                s = document.createElement("link");
                            s.rel = "stylesheet", s.type = "text/css", -1 === ["choko", "dark", "light", "milk", "kyivstar"].indexOf(c) ? s.href = e.urls.backend + "callback/css/callback.css" : s.href = e.urls.backend + "callback/css/callback_" + c + ".css?v.15012018";
                            var l = document.createElement("link");
                            l.id = "intlLink", l.rel = "stylesheet", l.type = "text/css", l.href = e.urls.backend + "static/js/vendors/phone_input/v12/css/intlTelInput.css";
                            var u = document.createElement("script");
                            u.type = "text/javascript", u.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js", u.async = !1;
                            var d = document.createElement("script");
                            d.type = "text/javascript", d.src = e.urls.backend + "static/js/vendors/phone_input/v12/js/intlTelInput.min.js", d.async = !1;
                            var g = document.createElement("script");

                            function f() {
                                n.fadeOut(r.overlay), n.fadeOut(r.form, function () {
                                    o.parentNode.removeChild(o), r.button.style.display = "block"
                                }), r.callbackLog(0)
                            }
                            g.type = "text/javascript", g.text = '$("#rngst_phone_input").intlTelInput({    utilsScript: "' + e.urls.backend + 'static/js/vendors/phone_input/v12/js/utils.js",    defaultCountry: "auto",    initialCountry: "auto",    autoPlaceholder: true,' + a + '    nationalMode: true,    autoHideDialCode: false,    preferredCountries: ["ua", "ru"],    geoIpLookup: function(callback) {    $.get("' + e.urls.api + 'ipinfo", function() {}, "json").always(function(resp) {        var countryCode = (resp && resp.country) ? resp.country : "";        callback(countryCode);         changePlaceholder();    });}});$(window).trigger("load");$("#rngst_phone_input").keydown(function() {    $(".rngst_error_text").addClass("hide");});$("#rngst_phone_input").on("keyup", function (e) {        changePlaceholder();});$("#rngst_send_callback").on("keypress click touchstart", function (e) {        e.preventDefault();        if (!(e.type === "keypress" && e.which !== 13)) {            if ($.trim($("#rngst_phone_input").val())) {                if ($("#rngst_phone_input").intlTelInput("isValidNumber") && $("#rngst_phone_input").val().search(/[a-zA-Zа-яА-Я]/) === -1) {                    var message = {                        num_to_call: $("#rngst_phone_input").intlTelInput("getNumber"),                       messageType: "transmitNumToCall"                    };                    parent.postMessage(message, "*");                } else {                    $(".rngst_error_text").removeClass("hide");                }            }        }    });function changePlaceholder(){var countryData = $("#rngst_phone_input").intlTelInput("getSelectedCountryData").iso2;if("ua" === countryData){$("#rngst_phone_input").attr("placeholder","067 123 4567");}}$("#rngst_phone_input").on("countrychange", function(e, countryData) {changePlaceholder();});', g.async = !1, r.iframeDocument.head.appendChild(s), r.overlay = r.iframeDocument.body.firstElementChild, r.form = r.iframeDocument.body.lastElementChild, r.overlay.style.display = "none", r.form.style.display = "none", s.onload = function () {
                                r.overlay.style.display = "block", r.form.style.display = "block", r.form.style.top = "20%", n.fadeIn(r.overlay), n.fadeIn(r.form), r.callbackLog(1), r.iframeDocument.head.appendChild(l), r.iframeDocument.head.appendChild(u), u.onload = function () {
                                    r.iframeDocument.head.appendChild(d)
                                }, d.onload = function () {
                                    r.iframeDocument.head.appendChild(g)
                                }
                            }, n.addEvents(r.iframeDocument.getElementById("rngst_close"), ["mousedown", "touchstart", "keydown"], f), n.addEvents(r.iframeDocument.getElementById("rngst_overlay"), ["mousedown", "touchstart", "keydown"], f), n.addEvents(window, ["message"], r.initiateCall), log("getCallbackForm  Success : " + this.status + " - " + this.statusText)
                        }, function () {
                            log("getCallbackForm  Error : " + this.status + " - " + this.statusText)
                        })
                    },
                    callbackLog: function (t) {
                        n.sendPost(e.urls.analytics + "callback_form/v1", {
                            "data[ua_id]": o.uaId,
                            "data[client_id]": o.clientId,
                            "data[avg_time_to_call]": r.old_data.avg_time_to_call,
                            "data[flag]": t,
                            "data[hid]": v4_1(),
                            "data[vid]": pageViewId
                        }, function () {
                            log("callbackLog  Success : " + this.status + " - " + this.statusText)
                        }, function () {
                            log("callbackLog  Error : " + this.status + " - " + this.statusText)
                        })
                    },
                    initiateCall: function (a) {
                        var i = a.data;
                        if ("transmitNumToCall" === i.messageType) {
                            i.num_to_call = i.num_to_call.replace(/^(380|\+380)0/, "$1"), i.num_to_call = i.num_to_call.replace(/^(7|\+7)8/, "$1"), n.sendPost(e.urls.substitution + "api/initiateCallback/", {
                                "data[num_to_call]": i.num_to_call,
                                "data[ua_id]": o.uaId,
                                "data[client_id]": o.clientId,
                                "data[utmz]": t.readCookie("rngst2", !1) && t.readCookie("rngst2", !0).utmz || "",
                                "data[avg_time_to_call]": r.old_data.avg_time_to_call,
                                "data[page_url]": o.currentUrl
                            }, function () {
                                log("initiateCallback  Success : " + this.status + " - " + this.statusText)
                            }, function () {
                                log("initiateCallback  Error : " + this.status + " - " + this.statusText)
                            }), r.form.removeChild(r.iframeDocument.getElementById("rngst_callback_form")), n.addClass(r.iframeDocument.getElementsByClassName("rngst_before_text")[0], "hide"), n.removeClass(r.iframeDocument.getElementsByClassName("rngst_counter_text")[0], "hide");
                            var c = 30,
                                s = window.setInterval(function () {
                                    r.iframeDocument.getElementById("rngst_timer").innerHTML = c.toFixed(2), c <= 0 && (r.iframeDocument.getElementById("rngst_timer").innerHTML = "", n.addClass(r.iframeDocument.getElementsByClassName("rngst_counter_text")[0], "hide"), n.removeClass(r.iframeDocument.getElementsByClassName("rngst_after_text")[0], "hide"), clearInterval(s)), c -= .01
                                }, 10);
                            n.addEvents(r.iframeDocument.getElementById("rngst_close"), ["mousedown", "touchstart", "keydown"], function () {
                                clearInterval(s)
                            }), n.addEvents(r.iframeDocument.getElementById("rngst_overlay"), ["mousedown", "touchstart", "keydown"], function () {
                                clearInterval(s)
                            })
                        }
                    }
                },
                i = {
                    cookieLifeTime: 300,
                    crossDomain: !1,
                    linkedDomains: [""],
                    numbers: {},
                    callbackFunction: function () {
                        log("default callbackFunction")
                    },
                    subDomain: !1,
                    callbackSettings: {
                        CallbackOffOnPage: !1,
                        autoFormOffOnPage: !1,
                        CallbackOff: !1,
                        autoFormOff: !1,
                        delay: 0
                    },
                    roistatTracking: !1,
                    callbackFunctionBehavior: !1
                },
                c = JSON.parse(JSON.stringify(i));
            e = n.deepExtend(c, e), log("config :"), log(e), window[gaObjectName](function () {
                o.uaId = e.uaId || window[gaObjectName].getAll()[0].get("trackingId"), o.clientId = window[gaObjectName].getAll()[0].get("clientId"), r.check()
            }), window.ringostatAPI = {}, window.ringostatAPI.setCallbackSettings = function (e) {
                r.setCallbackSettings(e)
            }
        }(config, ringostatCookie);
    var substitutionRngst = function (e, t, n) {
            var o = "",
                a = "",
                r = Date.now(),
                i = {},
                c = [],
                s = function (e) {
                    return e && /^\d+$/.test(e)
                },
                l = function (e) {
                    return e && "callMe" === e
                },
                u = function (e) {
                    return e && "checkOnClient" === e
                },
                d = function () {};
            d.prototype.notify = function () {
                console.error("Observer.notify() must be implemented")
            };
            var g = function () {};
            (g.prototype = Object.create(d.prototype)).constructor = g, g.prototype.notify = function (t) {
                var n = !1;
                if (t)
                    for (var o in t)
                        if (t.hasOwnProperty(o) && s(o)) {
                            n = !0;
                            break
                        }
                e.changedNumberCallback({
                    cnr: n
                })
            };
            var f = new function () {
                    var e = [];
                    return {
                        subscribeObserver: function (t, n) {
                            e[t] || (e[t] = []), e[t].push(n)
                        },
                        unsubscribeObserver: function (t, n) {
                            if (e[t]) {
                                var o = e[t].indexOf(n);
                                o > -1 && e[t].splice(o, 1)
                            }
                        },
                        notifyAllObservers: function (t, n) {
                            if (e[t])
                                for (var o = 0; o < e[t].length; o++) e[t][o].notify(n)
                        }
                    }
                },
                p = new g;
            f.subscribeObserver("numbers.beforeSetWithoutObserve", p);
            var m = function (n) {
                    var o = encodeURIComponent(window.location.href),
                        r = "";
                    return r += "r_h=" + encodeURIComponent(e.ringostatProjectHash), r += "&r_cl=" + encodeURIComponent(a), r += "&r_cu=" + o, r += "&r_re=" + encodeURIComponent(document.referrer), r += "&r_ce=" + encodeURIComponent(t.readCookie("rngst2", !1)), r += "&r_ur=" + firstRequest, r += "&r_us=" + encodeURIComponent(window.navigator.userAgent), r += "&r_fs=null", r += "&r_fn=" + (n ? "forceNumber" : null), r += "&dt=" + encodeURIComponent(document.title), r += "&hid=" + pageViewId, r += "&vid=" + pageViewId, i.latitude && (r += "&r_la=" + encodeURIComponent(i.latitude)), i.longitude && (r += "&r_lo=" + encodeURIComponent(i.longitude)), i.accuracy && (r += "&r_a=" + encodeURIComponent(i.accuracy)), i.city && (r += "&r_ci=" + encodeURIComponent(i.city)), i.country && (r += "&r_cy=" + encodeURIComponent(i.country)), firstRequest = !1, r
                },
                h = "",
                b = function (r, c, s) {
                    (s = "object" === _typeof(s) ? s : {}).recollect = s.recollect || !1;
                    var l = "pageview" === r;
                    l && (needsRegenerate && !1 === s.recollect && (pageViewId = v4_1()), needsRegenerate = !0);
                    var u = !1 === l ? v4_1() : pageViewId;
                    l && (h = c);
                    var d = computeCollectParams(e, {
                        cookie: t.readCookie("rngst2", !1),
                        clientId: a,
                        firstRequest: firstRequest,
                        hitId: u,
                        geoLocation: i,
                        pageViewId: pageViewId,
                        trackingId: o
                    });
                    firstRequest = !1, n.sendPayload(e.urls.collect, c + "&" + d)
                },
                v = function () {
                    var e = JSON.parse(this.responseText);
                    e.showBtnInsteadNumber && (t.eraseCookie("rngst1", t.cookieDomain), T()), e.event && k(e.event), e.recollect && b("pageview", h, {
                        recollect: !0
                    })
                },
                y = function () {
                    Date.now() - r < 15e3 && (n.sendPayload(e.urls.ping, computePingParams(e, {
                        clientId: a,
                        pageViewId: pageViewId
                    }), {
                        forceGet: !0,
                        onSuccess: v
                    }), e.substitutionEnabled && t.refreshCookie("rngst1", e.sessionLength, t.cookieDomain))
                },
                k = function (e) {
                    if (!e || !window.ringostatApi) return !1;
                    window.ringostatApi(e)
                },
                _ = function (o, a) {
                    function r() {
                        c.checkOnClient && c.checkOnClient.includes(o) && (c.checkOnClient.splice(c.checkOnClient.indexOf(o), 1), 0 === c.checkOnClient.length && delete c.checkOnClient), c.callMe && c.callMe.includes(o) && (c.callMe.splice(c.callMe.indexOf(o), 1), 0 === c.callMe.length && delete c.callMe)
                    }
                    var i = m(!0) + "&r_x=" + o;
                    n.sendPayload(e.urls.changedNumber, i, {
                        onError: function (e) {
                            log(e)
                        },
                        onSuccess: function () {
                            var n = JSON.parse(this.responseText),
                                i = Object.keys(n)[0];
                            for (var s in c) c[s].includes(o) && (i in c || (c[i] = [o]), c[i].includes(o) ? r() : (r(), c[i].push(o)));
                            t.createCookie("rngst1", c, e.sessionLength, t.cookieDomain), "function" == typeof a && a(I(e.xpaths[o].mask.replace("<t>", i), i), i)
                        }
                    })
                },
                w = function (t) {
                    var n, o, a;
                    for (var r in "observeDOM" !== t && f.notifyAllObservers("numbers.beforeSetWithoutObserve", c), c) {
                        var i, s, l, u, d, g = "",
                            p = 0,
                            m = 1,
                            h = 1,
                            b = 1,
                            v = "",
                            y = "",
                            k = "",
                            _ = "",
                            w = "";
                        if (c.hasOwnProperty(r) && (a = r, o = e.phoneNumber, log("Number: " + a + " for phoneNumber[" + o + "]"), o && a)) {
                            for (; 10 != p;) g = (i = o[o.length - m]) + g, isNaN(i) || " " == i || p++, o.length == m && (p = 10), m++;
                            u = g.replace(/(\D)/g, "(\\D*?)").replace("(\\D*?)(\\D*?)", "(\\D*?)"), s = new RegExp(u, "gi"), l = g.replace(/\d/g, "Y"), d = g.replace(/(\D)/g, "(\\D*?)").replace("(\\D*?)(\\D*?)", "(\\D*?)").split(")");
                            try {
                                v = new RegExp(d[0] + ")", "gi")
                            } catch (e) {
                                v = new RegExp(d[0], "gi")
                            }
                            d.slice(1).forEach(function (e) {
                                y = y + e + ")"
                            }), y = new RegExp(y.substring(0, y.length - 1), "gi"), m = 0;
                            for (var S = a.substr(a.length - 10), O = 0, I = l.length; O < I; O++) "Y" == l[O] ? (k += S.toString()[m], h > 1 && (w += S.toString()[m]), m++) : "Y" == l[O - 1] && (k = k + "$" + h, 1 == h && (_ = k), h > 1 && (w = w + "$" + b, b++), h++);
                            document.querySelectorAll("*:not(body)").forEach(function (e) {
                                void 0 !== e.innerText && e.innerText.match(v) && (e.normalize(), C(e).forEach(function (e) {
                                    void 0 !== e.nodeValue && "none" !== e && e.nodeValue.match(s) ? (e.nodeValue = e.nodeValue.replace(s, k), e.parentNode.hasAttribute("href") && (e.parentNode.href = "tel:+" + a)) : void 0 !== e.nodeValue && e.nodeValue.match(v) && e.parentNode.nextSibling && e.parentNode.nextSibling.nodeValue && e.parentNode.nextSibling.nodeValue.match(y) && (e.nodeValue = e.nodeValue.replace(v, _), e.parentNode.nextSibling.nodeValue = e.parentNode.nextSibling.nodeValue.replace(y, w), e.parentNode.parentNode.hasAttribute("href") && (e.parentNode.parentNode.href = "tel:+" + a))
                                }))
                            }), n = !0
                        }
                    }
                    e.callbackFunctionBehavior && !n || "function" == typeof e.userSettings.callbackFunction && e.userSettings.callbackFunction()
                };

            function C(e) {
                for (var t, n = [], o = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null, !1); t = o.nextNode();) n.push(t);
                return n
            }
            var S, O, I = function (e, t) {
                    if (-1 === e.indexOf("#")) return t;
                    for (var n = t.toString().split(""), o = e.toString().split(""), a = n.length; a--;) - 1 !== o.lastIndexOf("#") && (o[o.lastIndexOf("#")] = n[+a]);
                    return o.join("").replace(/#/g, "")
                },
                N = function (t) {
                    var n, o, a, r, i = function (e) {
                        for (var t, n = [], o = 0, a = document.evaluate(e.xPath, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null); null != (t = a.snapshotItem(o++));) n.push(t);
                        return n
                    };
                    for (var d in "observeDOM" !== t && f.notifyAllObservers("numbers.beforeSetWithoutObserve", c), c)
                        if (c.hasOwnProperty(d))
                            for (var g in r = d, c[d])
                                if (c[d].hasOwnProperty(g) && (o = c[d][g], a = e.xpaths[o], log("Number: " + r + " for Xpath[" + o + "]"), log(a), a && r)) {
                                    var p = i(a);
                                    if (s(r))
                                        for (var m in p) p.hasOwnProperty(m) && (p[m].innerHTML = g, p[m].innerHTML = I(a.mask.replace("<t>", r), r), p[m].hasAttribute("href") && (p[m].href = "tel:+" + r));
                                    if (l(r) && "" !== a.callMeHTML) {
                                        var h = p,
                                            b = h.length;
                                        for (callMeCode(p, a.callMeHTML, o, _); b--;) "A" == h[b].nodeName && h[b].removeAttribute("href")
                                    }
                                    u(r) && "1" === a.checkOnClient && p.length > 0 && function () {
                                        var e = p,
                                            t = e.length;
                                        _(o, function (n, o) {
                                            for (f.notifyAllObservers("numbers.beforeSetWithoutObserve", c); t--;) e[t].innerHTML = n, e[t].hasAttribute("href") && (e[t].href = "tel:+" + o)
                                        })
                                    }(), n = !0
                                }
                    e.callbackFunctionBehavior && !n || "function" == typeof e.userSettings.callbackFunction && e.userSettings.callbackFunction()
                },
                T = function () {
                    var o;
                    if (0 !== e.substitutionStatus) {
                        if (!1 !== e.substitutionEnabled) return t.readCookie("rngst1", !1) ? (c = t.readCookie("rngst1", !0), t.refreshCookie("rngst1", e.sessionLength, t.cookieDomain), e.isAdvanced ? N() : w(), void(e.observeDOM && E.getInstance())) : (o = function () {
                            var n = JSON.parse(this.responseText);
                            n && "inactiveProject" === n.msg && console.log("Ringostat: Inactive project");
                            var o = c = n && n.numbers ? n.numbers : null,
                                a = {
                                    utmz: n && n.utmz ? n.utmz : null
                                };
                            t.createCookie("rngst1", o, e.sessionLength, t.cookieDomain), t.readCookie("rngst2", !1) || t.createCookie("rngst2", a, 31536e3, t.cookieDomain), log("getChangedNumber Success : " + this.status + " - " + this.statusText), e.isAdvanced ? N() : w(), e.observeDOM && E.getInstance()
                        }, void n.sendPayload(e.urls.changedNumber, m(), {
                            onError: function (t) {
                                log(t), e.changedNumberCallback({
                                    cnr: !1
                                })
                            },
                            onSuccess: o
                        }));
                        log("RINGOSTAT: Substitution is disabled by initChangeNumber() on changeNumbers()")
                    } else console.log("RINGOSTAT: Insertion status is OFF")
                },
                E = function () {
                    var t;
                    return {
                        getInstance: function () {
                            var n, o, a, r;
                            return t || (n = null, o = null, a = {
                                attributes: !0,
                                childList: !0,
                                subtree: !0
                            }, (r = new MutationObserver(function (t) {
                                var r = this;
                                r.disconnect(), clearTimeout(n), clearTimeout(o), n = setTimeout(function () {
                                    e.isAdvanced ? N("observeDOM") : w("observeDOM"), log("MutationObserver complete after 100 ms")
                                }, 100), o = setTimeout(function () {
                                    e.isAdvanced ? N("observeDOM") : w("observeDOM"), r.observe(document.body, a), log("MutationObserver complete after 5000 ms")
                                }, 5e3)
                            })).observe(document.body, a), t = {
                                disconnect: function () {
                                    r.disconnect()
                                }
                            }), t
                        }
                    }
                }();
            S = function () {
                if (r = Date.now(), n.addEvents(document, ["mousedown", "mouseup", "mousemove", "onscroll", "touchstart", "touchmove", "touchend", "keydown", "keyup"], function () {
                        var t = Date.now();
                        t - r > e.sessionLengthMS && T(), r = t
                    }), setInterval(y, 15e3), e.crossDomainTracking && function (e) {
                        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                        var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
                        return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
                    }("_ga").length > 0 && (log('Found GET parameter "_ga". Remove rngst1 & rngst2 cookies'), t.eraseCookie("rngst1", t.cookieDomain), t.eraseCookie("rngst2", t.cookieDomain)), !1 !== e.substitutionEnabled) {
                    var o, a = e.disableChangingNumber;
                    !0 !== navigator.cookieEnabled || a && t.readCookie(a, !1) || (t.readCookie("rngst1", !1) || (o = function () {
                        t.eraseCookie("rngst1", t.cookieDomain), T()
                    }, navigator.geolocation && e.browserGeolocation && navigator.geolocation.getCurrentPosition(function (e) {
                        i.latitude = e.coords.latitude, i.longitude = e.coords.longitude, i.accuracy = e.coords.accuracy;
                        var t = "language=en&latlng=" + e.coords.latitude + "," + e.coords.longitude;
                        n.sendPayload("//maps.googleapis.com/maps/api/geocode/json", t, {
                            forceGet: !0,
                            onSuccess: function () {
                                var e = JSON.parse(this.responseText);
                                if ("OK" === e.status)
                                    for (var t = e.results[0].address_components, n = 0; n < t.length; ++n) "country" == t[n].types[0] && (i.country = t[n].long_name), "locality" == t[n].types[0] && (i.city = t[n].long_name);
                                o()
                            }
                        })
                    }, function () {})), T())
                } else log("RINGOSTAT: Substitution is disabled by initChangeNumber() on initGaPlugin()")
            }, (O = function () {
                if (void 0 !== window[gaObjectName] && "function" == typeof window[gaObjectName].getAll) {
                    var e = window[gaObjectName].getAll();
                    if (!1 !== Array.isArray(e) && 0 !== e.length)
                        for (var t = e.length, n = 0; n < t; n++) {
                            var o = e[n];
                            if (o.get("ringostatTracker")) return o
                        }
                }
            }()) ? (function (e) {
                a = e.get("clientId"), o = e.get("trackingId"), S()
            }(O), log("Ringostat is connected through CustomTask")) : (window[gaObjectName]("provide", "ringostat", function (e) {
                var t = e.get("sendHitTask");
                a = e.get("clientId"), o = e.get("trackingId"), S(), e.set("sendHitTask", function (e) {
                    t(e),
                        function (e) {
                            b(e.get("hitType"), e.get("hitPayload"))
                        }(e)
                })
            }), log("Ringostat is connected as a plugin")), window.ringostatAnalytics = {
                sendPayload: b
            }
        },
        eventManager;
    if (void 0 === document.evaluate) {
        var intlScriptwicked = document.createElement("script"),
            parent = document.getElementsByTagName("script")[0];
        intlScriptwicked.type = "text/javascript", intlScriptwicked.src = config.urls.backend + "static/js/vendors/wgxpath.install.js", intlScriptwicked.async = !0, parent.parentNode.insertBefore(intlScriptwicked, parent), document.onreadystatechange = function () {
            "complete" === document.readyState && (wgxpath.install(), substitutionRngst(config, ringostatCookie, utils))
        }
    } else substitutionRngst(config, ringostatCookie, utils);
    eventManager = {
        event: function () {}
    }, window.ringostatApi = function (e) {
        "function" == typeof eventManager[e.name] && eventManager[e.name](e.options)
    }
}();
