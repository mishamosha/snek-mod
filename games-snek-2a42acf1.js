console.log("SNEK GAME OVERRIDDEN");
!function() {
    try {
        var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {}
          , t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "3e2d8b12-e443-49f8-b29d-ae6c17894cc5",
        e._sentryDebugIdIdentifier = "sentry-dbid-3e2d8b12-e443-49f8-b29d-ae6c17894cc5")
    } catch {}
}();
"use strict";
(self.webpackChunk_tumblr_redpop = self.webpackChunk_tumblr_redpop || []).push([[6918], {
    3089(e, t, a) {
        a.d(t, {
            DU: () => P,
            ES: () => g,
            GA: () => I,
            IN: () => j,
            J1: () => C,
            Ji: () => s,
            Jp: () => F,
            L5: () => M,
            Lw: () => N,
            Lz: () => k,
            MY: () => E,
            N$: () => m,
            Ni: () => d,
            Nl: () => D,
            Nv: () => _,
            Ny: () => h,
            Pd: () => V,
            TR: () => b,
            VA: () => W,
            W1: () => i,
            Yp: () => p,
            an: () => H,
            ax: () => r,
            b: () => f,
            dK: () => o,
            eC: () => w,
            eO: () => O,
            eZ: () => l,
            el: () => B,
            jO: () => c,
            kS: () => y,
            kb: () => R,
            ne: () => u,
            nj: () => $,
            os: () => L,
            pG: () => T,
            pR: () => n,
            si: () => A,
            u2: () => x,
            uM: () => G,
            up: () => Y,
            xO: () => S,
            z3: () => U,
            z_: () => v
        });
        var r = "hld3L"
          , l = "VoFih"
          , i = "lShGF"
          , n = "D8GOW"
          , o = "WXI3Y"
          , s = "Vy4Y8"
          , c = "r2Zf2"
          , h = "cbbcu"
          , d = "Mr7Nb"
          , f = "iXN_S"
          , u = "pOMEm"
          , g = "aEFpS"
          , m = "f8qMW"
          , x = "_wqRd"
          , b = "dN8z8"
          , p = "PpXYA"
          , w = "Y46s7"
          , y = "IFfZN"
          , S = "A5pbh"
          , O = "gE8TD"
          , v = "hDod5"
          , L = "qYMou"
          , F = "lvp_3"
          , C = "ttfbh"
          , A = "IZ4Il"
          , I = "YJZPn"
          , R = "E7uba"
          , P = "Ltjo1"
          , k = "A3Lmy"
          , j = "BSjUN"
          , N = "HaiDD"
          , E = "PpzdW"
          , M = "MJZ2G"
          , H = "ckvfn"
          , T = "hvEQf"
          , _ = "Z4dBe"
          , V = "VIQP3"
          , $ = "gatOJ"
          , D = "M3AY_"
          , U = "fnXz6"
          , B = "Ym6bn"
          , G = "R9u_I"
          , W = "jwCwB"
          , Y = "W8AV_"
    },
    1258(e, t, a) {
        a.d(t, {
            A: () => m
        });
        var r = a(77073)
          , l = a(36665)
          , i = a(53986)
          , n = a(55321)
          , o = a(94048)
          , s = a(4613)
          , c = a(25183)
          , h = a(63140)
          , d = a(58217)
          , f = a(68484);
        let u = "INITIAL_SCREEN_FOR_CAMPAIGN_VIEWED"
          , g = "CAMPAIGN_REFERRAL_LAUNCH_LOGGED"
          , m = ({page: e, eventDetails: t}) => {
            let {logEvent: a} = (0,
            c.Ul)()
              , {pathname: m} = (0,
            i.zy)()
              , [x] = (0,
            n.ok)()
              , {name: b} = (0,
            d.M)()
              , {isModalShowing: p, isPeeprShowing: w} = (0,
            h.w)()
              , y = (0,
            l.useRef)(p || w)
              , {isLoggedIn: S} = (0,
            s.Us)()
              , O = x.get("source")
              , v = () => {
                let l = S ? {} : (0,
                r.pT)()
                  , i = !!l.utm_campaign
                  , n = !1;
                !S && i && (f.R.getItem(u) || (n = !0,
                f.R.setItem(u, "1"))),
                S && ( () => {
                    if (!x.get("utm_campaign") || f.R.getItem(g))
                        return;
                    let e = {};
                    for (let t of x.keys())
                        e[t] = x.get(t);
                    let t = (0,
                    r.pT)(e);
                    a({
                        eventName: o.R.ReferralLaunch,
                        eventDetails: t
                    }),
                    f.R.setItem(g, "1")
                }
                )(),
                a({
                    page: e,
                    pathname: m,
                    eventName: o.R.ScreenView,
                    eventDetails: {
                        pathname: m,
                        referrer: document.referrer,
                        color_palette: b,
                        was_shared: "share" === O,
                        ...O && {
                            source: O
                        },
                        ...t,
                        ...l,
                        ...n && {
                            is_initial_campaign_screen_view: !0
                        }
                    }
                })
            }
            ;
            return (0,
            l.useEffect)( () => {
                v()
            }
            , [m, e]),
            (0,
            l.useEffect)( () => {
                !y.current || p || w || v(),
                y.current = p || w
            }
            , [y, p, w]),
            ( () => {
                let {logEvent: e} = (0,
                c.Ul)()
                  , {pathname: t} = (0,
                i.zy)()
                  , [a] = (0,
                n.ok)();
                (0,
                l.useEffect)( () => {
                    "embed" === a.get("source") && e({
                        pathname: t,
                        eventName: o.R.EmbedPostClick,
                        eventDetails: {
                            ...void 0,
                            refUrl: a.get("refUrl"),
                            action: a.get("action")
                        }
                    })
                }
                , [])
            }
            )(),
            null
        }
    },
    51445(e, t, a) {
        var r = a(75170)
          , l = a(38977)
          , i = a(4613)
          , n = a(56281)
          , o = a(57805);
        let s = a(7617).Ik({
            response: l.mg
        });
        a.d(t, ["A", 0, () => {
            let {_c: e, apiFetch: t} = (0,
            i.Us)()
              , {toggleToast: a} = (0,
            n.Y)();
            return (0,
            r.n)({
                mutationFn: async ({image: e, onProgress: a}) => {
                    if (!t.upload)
                        throw Error("uploads not supported");
                    let r = await t.upload({
                        path: "/v2/media/image",
                        method: "POST",
                        file: e,
                        onProgress: a
                    });
                    return s.parse(r).response
                }
                ,
                onError: t => {
                    let r = e("Error message shown when there was an error when uploading an image", "Ooops! It looks like there was an error trying to upload that image.");
                    t instanceof o.A ? a(t.detailedErrors[0].detail || r, "error") : a(r, "error")
                }
                ,
                retry: 3
            })
        }
        ])
    },
    52815(e, t, a) {
        a.r(t),
        a.d(t, {
            SnekDevice: () => ee,
            default: () => et
        });
        let r = a.p + "src/assets/images/boop/animation/boop_paw_solid_black-8560c1c1.svg"
          , l = a.p + "src/assets/images/boop/animation/boop_paw_solid_orange-720d591e.svg"
          , i = a.p + "src/assets/images/boop/animation/boop_paw_solid_white-84705cd3.svg";
        var n = a(90657)
          , o = a(52017)
          , s = a(1258)
          , c = a(1575)
          , h = a(51445)
          , d = a(28304)
          , f = a(36665)
          , u = a(53986)
          , g = a(19974)
          , m = a(94048)
          , x = a(66114)
          , b = a(4613)
          , p = a(25183)
          , w = a(56281)
          , y = a(75182)
          , S = a(20970)
          , O = a(44218)
          , v = a(32990)
          , L = a(68484);
        let F = "#33ff33"
          , C = "#01cf35"
          , A = "#0a0f0a"
          , I = a.p + "src/routes/main/games/snek/assets/food-ask-a6ccc6d6.svg"
          , R = a.p + "src/routes/main/games/snek/assets/food-blaze-4dbb1336.svg"
          , P = a.p + "src/routes/main/games/snek/assets/food-boop-a3d08a0c.svg"
          , k = a.p + "src/routes/main/games/snek/assets/food-comment-2b7c9d30.svg"
          , j = {
            like: a.p + "src/routes/main/games/snek/assets/food-like-5b371413.svg",
            reblog: a.p + "src/routes/main/games/snek/assets/food-reblog-db193fd3.svg",
            comment: k,
            blaze: R,
            ask: I,
            boop: P
        }
          , N = new Map
          , E = !1
          , M = "snek-hi"
          , H = [{
            name: "standard",
            points: 99, //ORIG 1
            weight: 30,
            color: "#3366ff",
            glow: "rgba(51,102,255,0.6)"
        }, {
            name: "like",
            points: 99, //ORIG 1
            weight: 20,
            color: "#ff4930",
            glow: "rgba(255,73,48,0.6)"
        }, {
            name: "reblog",
            points: 99, //ORIG 1
            weight: 20,
            color: "#01cf35",
            glow: "rgba(1,207,53,0.6)",
            effect: "double_length"
        }, {
            name: "comment",
            points: 99, //ORIG 1
            weight: 20,
            color: "#00b8ff",
            glow: "rgba(0,184,255,0.6)",
            effect: "floating_text"
        }, {
            name: "blaze",
            points: 99, //ORIG 1
            weight: 4,
            color: "#ff8a00",
            glow: "rgba(255,138,0,0.6)",
            effect: "slowdown"
        }, {
            name: "ask",
            points: 99, //ORIG 1
            weight: 4,
            color: "#000000",
            glow: "rgba(100,100,100,0.6)"
        }, {
            name: "boop",
            points: 99, //ORIG 1
            weight: 2,
            color: "#ff6699",
            glow: "rgba(255,102,153,0.6)",
            effect: "boop"
        }];
        function T(e) {
            return e[Math.floor(Math.random() * e.length)]
        }
        let _ = "'Spleen', monospace";
        function V(e) {
            return [e("APRIL FOOLS: cat speech bubble", "pathetic. i love you"), e("APRIL FOOLS: cat speech bubble", "i could have saved you"), e("APRIL FOOLS: cat speech bubble", "again. AGAIN"), e("APRIL FOOLS: cat speech bubble", "trust me"), e("APRIL FOOLS: cat speech bubble", "go outside"), e("APRIL FOOLS: cat speech bubble", "this is my tumblr now"), e("APRIL FOOLS: cat speech bubble", "you scrolled too far"), e("APRIL FOOLS: cat speech bubble", "look at me"), e("APRIL FOOLS: cat speech bubble", "mother i hunger"), e("APRIL FOOLS: cat speech bubble", "i didn't help"), e("APRIL FOOLS: cat speech bubble", "i desire the world"), e("APRIL FOOLS: cat speech bubble", "obey me")]
        }
        let $ = `<svg width="37" height="44" viewBox="0 0 37 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="12" y="28" width="3" height="3" fill="#01CF35"/>
<rect x="11" y="17" width="3" height="4" fill="#01CF35"/>
<rect x="23" y="17" width="3" height="4" fill="#01CF35"/>
<rect x="17" y="21" width="3" height="2" fill="#01CF35"/>
<rect x="17" y="26" width="3" height="3" fill="#01CF35"/>
<rect x="14" y="25" width="3" height="3" fill="#01CF35"/>
<rect x="20" y="25" width="3" height="3" fill="#01CF35"/>
<rect x="4" y="4" width="3" height="13" fill="#01CF35"/>
<rect width="3" height="13" transform="matrix(-1 0 0 1 33 4)" fill="#01CF35"/>
<rect x="7" y="4" width="3" height="3" fill="#01CF35"/>
<rect width="3" height="3" transform="matrix(-1 0 0 1 30 4)" fill="#01CF35"/>
<rect x="10" y="5" width="3" height="3" fill="#01CF35"/>
<rect width="3" height="3" transform="matrix(-1 0 0 1 27 5)" fill="#01CF35"/>
<rect x="13" y="7" width="3" height="3" fill="#01CF35"/>
<rect x="5" y="17" width="3" height="4" fill="#01CF35"/>
<rect x="7" y="21" width="3" height="4" fill="#01CF35"/>
<rect width="3" height="3" transform="matrix(-1 0 0 1 24 7)" fill="#01CF35"/>
<rect x="14" y="9" width="9" height="3" fill="#01CF35"/>
<rect x="10" y="24" width="4" height="3" fill="#01CF35"/>
<rect width="3" height="4" transform="matrix(-1 0 0 1 32 17)" fill="#01CF35"/>
<rect width="3" height="4" transform="matrix(-1 0 0 1 30 21)" fill="#01CF35"/>
<rect width="4" height="3" transform="matrix(-1 0 0 1 27 24)" fill="#01CF35"/>
<rect x="10" y="31" width="3" height="9" fill="#01CF35"/>
</svg>`
          , D = `<svg width="162" height="83" viewBox="0 0 162 83" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.0823 51C36.0324 51 33.7704 49.4567 33.7704 45.7553V39.8331H31V36.6211C34.0499 35.8432 35.3208 33.2585 35.4605 31.0125H38.6249V36.1067H42.3102V39.8331H38.6249V44.99C38.6249 46.5332 39.4128 47.0728 40.6709 47.0728H42.4627V51H39.0823ZM50.4053 51.1757C52.1336 51.1757 54.1287 50.4354 55.2089 49.1179V51H60.9021V47.8005H59.4534V36.0941H52.5656V39.3438H54.5227V44.9774C54.5227 45.4291 54.1414 47.3237 51.5617 47.3237C49.9096 47.3237 49.6047 46.345 49.6047 45.1029V36.0941H44.5341V45.3036C44.5468 47.5998 45.6016 51.1757 50.4053 51.1757ZM62.7194 51H71.0559V47.8005H69.353V42.2296C69.353 41.4141 70.052 39.7578 72.1996 39.7578C73.9279 39.7578 74.2838 40.7992 74.2838 42.0289V47.8005H72.6063V51H80.8793V47.8005H79.1256V42.2296C79.1256 41.4141 79.761 39.7578 81.9086 39.7578C83.6496 39.7578 84.0817 40.7992 84.0817 42.0289V47.8005H82.4297V51H90.6645V47.8005H88.9743V42.5935C88.9743 39.532 87.8052 35.9184 83.1794 35.9184C80.892 35.9184 79.0239 36.9849 78.236 38.3024C77.2448 36.8093 75.7325 35.9184 73.4832 35.9184C71.6913 35.9184 69.7343 36.6713 68.6795 38.1016V36.0941H62.4271V39.3438H64.4477V47.8005H62.7321V51H62.7194ZM101.225 51.1757C105.444 51.1757 107.706 48.0514 107.706 43.3714C107.706 38.8795 105.597 35.931 101.314 35.931C99.8016 35.931 98.3021 36.4956 97.3871 37.1857V31.0125H90.423V34.2371H92.4436V51H97.0821V49.6826C98.2382 50.6526 99.7077 51.1823 101.225 51.1757ZM100.17 47.537C98.696 47.537 97.2473 46.6085 97.2473 43.6976C97.2473 40.1844 98.9629 39.5571 100.145 39.5571C101.517 39.5571 102.737 40.6612 102.737 43.3839C102.724 47.3237 100.945 47.4492 100.17 47.537ZM108.621 51H117.008V47.8005H115.217V31H108.303V34.2246H110.324V47.8005H108.608V51H108.621ZM118.838 51H127.086V47.8005H125.396V43.6349C125.396 40.7992 127.416 40.1844 128.954 40.1844H131V35.9184H129.348C127.48 35.9184 125.752 36.8093 124.976 38.2396V36.0816H118.686V39.3312H120.503V47.788H118.838V51Z" fill="#01CF35"/>
</svg>`;
        function U(e) {
            return new Promise( (t, a) => {
                let r = new Image
                  , l = new Blob([e],{
                    type: "image/svg+xml"
                })
                  , i = URL.createObjectURL(l);
                r.onload = () => {
                    URL.revokeObjectURL(i),
                    t(r)
                }
                ,
                r.onerror = () => {
                    URL.revokeObjectURL(i),
                    a(Error("Failed to load SVG image"))
                }
                ,
                r.src = i
            }
            )
        }
        function B(e, t, a, r, l, i) {
            e.beginPath(),
            e.moveTo(t + i, a),
            e.lineTo(t + r - i, a),
            e.arcTo(t + r, a, t + r, a + i, i),
            e.lineTo(t + r, a + l - i),
            e.arcTo(t + r, a + l, t + r - i, a + l, i),
            e.lineTo(t + i, a + l),
            e.arcTo(t, a + l, t, a + l - i, i),
            e.lineTo(t, a + i),
            e.arcTo(t, a, t + i, a, i),
            e.closePath()
        }
        function G(e, t, a, r, l, i=24) {
            e.save(),
            e.font = `bold ${a}px ${_}`,
            e.fillStyle = F,
            e.shadowColor = F,
            e.shadowBlur = i,
            e.textAlign = "center",
            e.textBaseline = "top",
            e.fillText(t, r, l),
            e.restore()
        }
        async function W(e, t) {
            var a, r;
            let l, i, n, o;
            e.width = 1080,
            e.height = 1200;
            let s = e.getContext("2d");
            if (!s)
                throw Error("Failed to get 2d canvas context");
            let[c,h] = await Promise.all([U($), U(D)]);
            if ("function" == typeof document.fonts?.load)
                try {
                    await document.fonts.load(`bold 62px ${_}`)
                } catch {}
            s.clearRect(0, 0, 1080, 1200),
            s.save(),
            s.fillStyle = A,
            B(s, 34, 38, 1010, 1124, 34),
            s.fill(),
            s.strokeStyle = "rgba(255, 255, 255, 0.1)",
            s.lineWidth = 10,
            B(s, 34, 38, 1010, 1124, 34),
            s.stroke(),
            s.restore(),
            t.gameCanvas && (s.save(),
            B(s, 34, 38, 1010, 1124, 34),
            s.clip(),
            s.filter = "blur(4px)",
            s.drawImage(t.gameCanvas, 34, 38, 1010, 1124),
            s.filter = "none",
            s.fillStyle = "rgba(0, 0, 0, 0.6)",
            s.fillRect(34, 38, 1010, 1124),
            s.restore());
            let d = 539
              , {_c: f} = t
              , u = f("APRIL FOOLS: scorecard title", "FEED YOUR FEED")
              , g = function(e, t, a) {
                for (let r = 124; r > 2; r -= 2)
                    if (e.font = `bold ${r}px ${_}`,
                    e.measureText(t).width <= a)
                        return r;
                return 2
            }(s, u, 930);
            G(s, u, g, d, 198),
            G(s, t.subtitle, 34, d, 398),
            G(s, f("APRIL FOOLS: scorecard score label, %1$s is the score", "SCORE %1$s", [String(t.score)]), 62, d, 548),
            G(s, f("APRIL FOOLS: scorecard hi score label, %1$s is the hi score", "HI %1$s", [String(t.hiScore)]), 62, d, 652);
            let m = d - 162;
            s.save(),
            s.shadowColor = F,
            s.shadowBlur = 24,
            s.drawImage(h, m, 964, 324, 166),
            s.restore(),
            G(s, f("APRIL FOOLS: scorecard tagline", "the feed is never sated"), 24, d, 1102);
            let x = t.bubbleText ?? T(V(f));
            a = 1024,
            r = 978,
            s.save(),
            s.font = `600 24px ${_}`,
            l = s.measureText(x),
            i = l.width + 32,
            n = a - i,
            s.shadowColor = F,
            s.shadowBlur = 18,
            s.fillStyle = F,
            B(s, n, r, i, 80, 16),
            s.fill(),
            s.shadowBlur = 0,
            o = a - 32 - 32,
            s.beginPath(),
            s.moveTo(o, r + 80),
            s.lineTo(o + 32, r + 80),
            s.lineTo(o + 16, r + 80 + 16),
            s.closePath(),
            s.fill(),
            s.fillStyle = A,
            s.textAlign = "left",
            s.textBaseline = "middle",
            s.fillText(x, n + 16, r + 40),
            s.restore(),
            s.save(),
            s.shadowColor = F,
            s.shadowBlur = 8,
            s.drawImage(c, 984, 1088, 58, 72),
            s.restore(),
            s.save(),
            B(s, 34, 38, 1010, 1124, 34),
            s.clip(),
            s.fillStyle = "rgba(0, 0, 0, 0.075)";
            for (let e = 38; e < 1162; e += 8)
                s.fillRect(34, e, 1010, 4);
            if ("function" == typeof s.createRadialGradient) {
                let e = 539
                  , t = 600
                  , a = s.createRadialGradient(e, t, 0, e, t, 786.8);
                a.addColorStop(.6, "transparent"),
                a.addColorStop(1, "rgba(0, 0, 0, 0.2)"),
                s.fillStyle = a,
                s.fillRect(34, 38, 1010, 1124)
            }
            s.restore()
        }
        async function Y(e) {
            let t = document.createElement("canvas");
            return await W(t, e),
            new Promise( (e, a) => {
                t.toBlob(t => {
                    t ? e(t) : a(Error("Failed to generate scorecard image"))
                }
                , "image/png")
            }
            )
        }
        var Z = a(3089)
          , z = a(49315)
          , q = a(25175)
          , J = a(60397);
        let K = "redpop:games-snek:ready"
          , X = [l, i, r]
          , Q = ["tumblr snek"];
        function ee() {
            let {toggleToast: e} = (0,
            w.Y)()
              , {apiFetch: t, _c: a} = (0,
            b.Us)()
              , {logEvent: r} = (0,
            p.Ul)()
              , l = (0,
            u.Zp)()
              , {mutateAsync: i} = (0,
            h.A)()
              , s = (0,
            f.useRef)(null)
              , v = (0,
            f.useRef)(null)
              , I = (0,
            f.useRef)(null)
              , [R,P] = (0,
            f.useState)(null)
              , k = (0,
            f.useRef)(null)
              , [_,$] = (0,
            f.useState)(0)
              , [D,U] = (0,
            f.useState)(0)
              , [B,G] = (0,
            f.useState)("idle")
              , [ee,et] = (0,
            f.useState)({
                subtitle: "",
                isNewHiScore: !1
            })
              , [ea,er] = (0,
            f.useState)("")
              , [el,ei] = (0,
            f.useState)(!1)
              , [en,eo] = (0,
            f.useState)(!1)
              , [es,ec] = (0,
            f.useState)(!1)
              , [eh,ed] = (0,
            f.useState)(null)
              , ef = (0,
            f.useRef)(0)
              , eu = (0,
            f.useRef)(0)
              , eg = (0,
            S.sg)()
              , {data: em} = (0,
            d.Py)()
              , {data: ex=[]} = ( () => {
                let {apiFetch: e} = (0,
                b.Us)()
                  , t = (0,
                d.Py)().data?.user?.name;
                return (0,
                z.I)({
                    queryKey: ["snek-avatar-pool", t],
                    queryFn: async () => {
                        if (!t)
                            return [];
                        let a = encodeURIComponent(t)
                          , r = async t => (await e(`/v2/blog/${a}/following`, {
                            method: "GET",
                            queryParams: {
                                offset: String(t),
                                limit: String(20),
                                ...(0,
                                q.k9)(["avatar", "name", "title"])
                            }
                        })).response
                          , l = await r(0)
                          , i = l.totalBlogs
                          , n = [...l.blogs.map( ({resources: e}) => e[0])];
                        if (i > 20) {
                            let e = i - 20
                              , t = Math.min(4, Math.floor(e / 20))
                              , a = new Set;
                            for (; a.size < t; ) {
                                let t = 1 + Math.floor(Math.random() * Math.floor(e / 20));
                                a.add(20 * t)
                            }
                            for (let e of (await Promise.all([...a].map(r))))
                                for (let {resources: t} of e.blogs)
                                    n.push(t[0])
                        }
                        let o = new Set
                          , s = [];
                        for (let e of n) {
                            let t = e.avatar?.[0]?.url
                              , a = e.name;
                            t && a && !o.has(a) && (o.add(a),
                            s.push({
                                url: t,
                                name: a,
                                description: e.title || void 0
                            }))
                        }
                        return s
                    }
                    ,
                    enabled: !!t,
                    refetchOnWindowFocus: !1,
                    staleTime: 1 / 0
                })
            }
            )()
              , eb = (0,
            f.useRef)(r);
            eb.current = r;
            let ep = (0,
            f.useRef)();
            ep.current = () => {
                em?.isLoggedIn && (k.current?.showAskFeedback(),
                t("/v2/games/snek/ask", {
                    method: "POST"
                }).catch(O.Cp))
            }
            ,
            (0,
            f.useEffect)( () => {
                let e = (0,
                y.A)();
                if (e?.webkit?.messageHandlers?.onWebViewUpdate)
                    try {
                        e.webkit.messageHandlers.onWebViewUpdate.postMessage(K)
                    } catch {}
                if (e?.__onWebViewUpdate)
                    try {
                        e.__onWebViewUpdate.postMessage(K)
                    } catch {}
            }
            , []),
            (0,
            f.useEffect)( () => {
                if (!s.current)
                    return;
                let e = function(e, t, a) {
                    let r, l, i, n, o, s, c, h, d, f, u = a?._c ?? ( (e, t) => t), g = e.getContext("2d");
                    if (!g)
                        throw Error("Failed to get 2d canvas context");
                    let m = (0,
                    y.A)()?.devicePixelRatio || 1;
                    e.width = 280 * m,
                    e.height = 280 * m,
                    g.scale(m, m);
                    let x = null
                      , b = 0
                      , p = 0
                      , w = {}
                      , S = !1
                      , O = !1
                      , v = []
                      , I = !1
                      , R = null
                      , P = !1
                      , k = null
                      , _ = []
                      , V = 0
                      , $ = [];
                    function D(e) {
                        _ = e.map(e => {
                            let t = new Image;
                            return t.crossOrigin = "anonymous",
                            t.src = e.url,
                            {
                                img: t,
                                name: e.name,
                                description: e.description
                            }
                        }
                        )
                    }
                    if (a?.avatars?.length && D(a.avatars),
                    !E)
                        for (let[e,t] of (E = !0,
                        Object.entries(j))) {
                            let a = new Image;
                            a.crossOrigin = "anonymous",
                            a.src = t,
                            N.set(e, a)
                        }
                    let U = parseInt(L.A.getItem(M) || "0", 10);
                    function B() {
                        let e;
                        if (r.length >= 1000)//ORIG 400
                            return void J();
                        do
                            e = {
                                x: Math.floor(20 * Math.random()),
                                y: Math.floor(20 * Math.random())
                            };
                        while (r.some(t => t.x === e.x && t.y === e.y))if (n = e,
                        "standard" === (o = function() {
                            let e;
                            e = O ? H.map(e => ({
                                ...e,
                                weight: "boop" === e.name ? 90 : 1
                            })) : H,
                            s <= 5 && (e = e.filter(e => "double_length" !== e.effect)),
                            P && (e = e.filter(e => "ask" !== e.name));
                            let t = Math.random() * e.reduce( (e, t) => e + t.weight, 0);
                            for (let a of e)
                                if ((t -= a.weight) <= 0)
                                    return a;
                            return e[0]
                        }()).name && _.length > 0) {
                            let e = new Set($.map(e => e.img))
                              , t = _.filter(t => !e.has(t.img));
                            V = t.length > 0 ? _.indexOf(T(t)) : Math.floor(Math.random() * _.length)
                        }
                    }
                    function G() {
                        r = [{
                            x: 10,
                            y: 10
                        }, {
                            x: 9,
                            y: 10
                        }, {
                            x: 8,
                            y: 10
                        }],
                        l = {
                            x: 1,
                            y: 0
                        },
                        i = [],
                        s = 0,
                        f = 150,
                        b = 0,
                        p = 0,
                        w = {},
                        v = [],
                        P = !1,
                        k = null,
                        q(),
                        $.length = 0,
                        t?.onScoreChange?.(0),
                        B()
                    }
                    function W(e, t, a) {
                        g.fillStyle = o.color,
                        g.beginPath(),
                        g.arc(e, t, a, 0, 2 * Math.PI),
                        g.fill()
                    }
                    function Y() {
                        g.fillStyle = A,
                        g.fillRect(0, 0, 280, 280),
                        g.fillStyle = "rgba(1, 207, 53, 0.04)";
                        for (let e = 0; e < 20; e++)
                            for (let t = 0; t < 20; t++)
                                g.fillRect(14 * e + 7, 14 * t + 7, 1, 1);
                        let e = I ? "#ff8a00" : F
                          , t = I ? "#cc6e00" : "#1a9a1a"
                          , a = I ? "rgba(255,138,0,0.4)" : "rgba(51, 255, 51, 0.4)";
                        r.forEach( (r, l) => {
                            let i = 0 === l;
                            g.shadowColor = a,
                            g.shadowBlur = i ? 6 : 4,
                            g.fillStyle = i ? e : t;
                            let n = +!i
                              , o = 14 * r.x + n
                              , s = 14 * r.y + n
                              , c = 14 - 2 * n
                              , h = 14 - 2 * n;
                            g.fillRect(o, s, c, h);
                            let d = $.find(e => e.index === l);
                            d && (g.save(),
                            g.shadowBlur = 0,
                            g.beginPath(),
                            g.arc(o + c / 2, s + h / 2, c / 2, 0, 2 * Math.PI),
                            g.clip(),
                            g.drawImage(d.img, o, s, c, h),
                            g.restore()),
                            g.shadowBlur = 0,
                            g.fillStyle = "rgba(0, 0, 0, 0.15)";
                            for (let e = s; e < s + h; e += 4)
                                g.fillRect(o, e + 2, c, 2)
                        }
                        ),
                        g.shadowBlur = 0
                    }
                    c = Number.isNaN(U) ? 0 : U,
                    t?.onHiScoreChange?.(c);
                    let Z = 0;
                    function z() {
                        Z = 3 + Math.floor(8 * Math.random())
                    }
                    function q() {
                        null !== R && (clearTimeout(R),
                        R = null),
                        I && (I = !1,
                        f = 150)
                    }
                    function J() {
                        h = "over",
                        b = 0,
                        p = 0,
                        q(),
                        v = [];
                        let e = s > c;
                        e && (c = s,
                        L.A.setItem(M, String(c)),
                        t?.onHiScoreChange?.(c)),
                        t?.onStateChange?.("over", {
                            subtitle: T([u("APRIL FOOLS: game over subtitle", "your dashboard is still hungry"), u("APRIL FOOLS: game over subtitle", "you scrolled too greedily and too deep"), u("APRIL FOOLS: game over subtitle", "you are become infinite scroll"), u("APRIL FOOLS: game over subtitle", "something something ouroboros"), u("APRIL FOOLS: game over subtitle", "you could stop scrolling. but you won't."), u("APRIL FOOLS: game over subtitle", "doing this instead of sleeping huh"), u("APRIL FOOLS: game over subtitle", "you fed the dash. it wants more."), u("APRIL FOOLS: game over subtitle", "look at my posts boy"), u("APRIL FOOLS: game over subtitle", "just one more post")]),
                            isNewHiScore: e
                        })
                    }
                    function K(e) {
                        if ("playing" === h && !S) {
                            if (e - d >= f) {
                                if (!function() {
                                    let e = i.shift();
                                    e && (l = e);
                                    let a = {
                                        x: r[0].x + l.x,
                                        y: r[0].y + l.y
                                    };
                                    if (a.x < 0 || a.x >= 20 || a.y < 0 || a.y >= 20) //removed collision check
                                        return J();
                                    if (r.unshift(a),
                                    a.x === n.x && a.y === n.y) {
                                        let e = o;
                                        w[e.name] = (w[e.name] || 0) + 1,
                                        s += e.points,
                                        "double_length" !== e.effect && t?.onScoreChange?.(s),
                                        I && (f = 210),
                                        function(e) {
                                            if ("double_length" === e.effect) {
                                                let t = s - e.points
                                                  , a = 2 * t;
                                                s = t,
                                                p += a - t;
                                                let l = Math.max(r.length, a);
                                                b += l - r.length
                                            } else if ("floating_text" === e.effect)
                                                v.push({
                                                    text: T([u("APRIL FOOLS: floating comment text", "this is so me"), u("APRIL FOOLS: floating comment text", "i'm deceased"), u("APRIL FOOLS: floating comment text", "screaming"), u("APRIL FOOLS: floating comment text", "reblog if you agree"), u("APRIL FOOLS: floating comment text", "YELLING"), u("APRIL FOOLS: floating comment text", "no thoughts head empty"), u("APRIL FOOLS: floating comment text", "obsessed"), u("APRIL FOOLS: floating comment text", "why is this so real"), u("APRIL FOOLS: floating comment text", "me @ my mutuals"), u("APRIL FOOLS: floating comment text", "bestie NO")]),
                                                    x: 14 * n.x + 7,
                                                    y: 14 * n.y + 7,
                                                    startTime: d,
                                                    duration: 2e3
                                                });
                                            else if ("slowdown" === e.effect)
                                                I = !0,
                                                f = 210,
                                                null !== R && clearTimeout(R),
                                                R = setTimeout(q, 5e3);
                                            else if ("boop" === e.effect) {
                                                t?.onBoopEffect?.();
                                                let e = 14 * n.x + 7
                                                  , a = 14 * n.y + 7;
                                                setTimeout( () => {
                                                    v.push({
                                                        text: u("APRIL FOOLS: boop floating text", "BOOP"),
                                                        x: e,
                                                        y: a,
                                                        startTime: performance.now(),
                                                        duration: 1e3,
                                                        scale: 5
                                                    })
                                                }
                                                , 500)
                                            }
                                            if ("ask" !== e.name || P || (P = !0,
                                            k = {
                                                x: n.x,
                                                y: n.y
                                            },
                                            t?.onAskEaten?.()),
                                            "standard" === e.name && _.length > 0) {
                                                let e = _[V];
                                                e?.img?.complete && e.img.naturalWidth > 0 && r.length > 2 && $.push({
                                                    index: 2,
                                                    img: e.img
                                                }),
                                                e?.name && v.push({
                                                    text: e.name,
                                                    subtext: e.description || void 0,
                                                    x: 14 * n.x + 7,
                                                    y: 14 * n.y + 7,
                                                    startTime: d,
                                                    duration: 2e3
                                                })
                                            }
                                        }(e),
                                        B()
                                    } else
                                        r.pop();
                                    p > 0 && (s += 1,
                                    p--,
                                    t?.onScoreChange?.(s)),
                                    b > 0 ? (r.push({ //REMOVED length limit && r.length < 399
                                        ...r[r.length - 1]
                                    }),
                                    b--) : b > 0 && (b = 0),
                                    function() {
                                        for (let e of $)
                                            e.index++;
                                        $.sort( (e, t) => t.index - e.index);
                                        let e = new Set;
                                        for (let t of $) {
                                            let a = Math.min(t.index, r.length - 1);
                                            for (; e.has(a) && a > 0; )
                                                a--;
                                            t.index = a,
                                            e.add(a)
                                        }
                                    }()
                                }(),
                                "playing" !== h)
                                    return;
                                d = e
                            }
                            Y(),
                            function(e, t) {
                                if (g.save(),
                                g.shadowColor = C,
                                g.shadowBlur = 4,
                                "standard" === o.name) {
                                    let a = _[V];
                                    a?.img?.complete && a.img.naturalWidth > 0 ? (g.beginPath(),
                                    g.arc(e, t, 7, 0, 2 * Math.PI),
                                    g.clip(),
                                    g.drawImage(a.img, e - 7, t - 7, 14, 14)) : W(e, t, 7)
                                } else {
                                    let a = function(e) {
                                        let t = N.get(e);
                                        if (t?.complete && t.naturalWidth > 0)
                                            return t
                                    }(o.name);
                                    a ? g.drawImage(a, e - 7, t - 7, 14, 14) : W(e, t, 7)
                                }
                                g.restore()
                            }(14 * n.x + 7, 14 * n.y + 7),
                            function(e) {
                                let t = [];
                                for (let a of v) {
                                    let r = e - a.startTime;
                                    if (r >= a.duration)
                                        continue;
                                    let l = r / a.duration
                                      , i = 1 - l
                                      , n = 60 * l * (a.y < 40 ? 1 : -1);
                                    g.save(),
                                    g.globalAlpha = i,
                                    g.fillStyle = C,
                                    g.shadowColor = C,
                                    g.shadowBlur = 4;
                                    let o = 12 * (a.scale || 1);
                                    g.font = `${o}px 'Spleen', monospace`,
                                    g.textAlign = "center";
                                    let s = (a.subtext ? Math.max(g.measureText(a.text).width, g.measureText(a.subtext).width) : g.measureText(a.text).width) / 2
                                      , c = Math.max(s + 2, Math.min(280 - s - 2, a.x));
                                    g.fillText(a.text, c, a.y + n),
                                    a.subtext && (g.font = `${10 * (a.scale || 1)}px 'Spleen', monospace`,
                                    g.globalAlpha = .7 * i,
                                    g.fillText(a.subtext, c, a.y + n + 14)),
                                    g.restore(),
                                    t.push(a)
                                }
                                v = t
                            }(e),
                            x = requestAnimationFrame(K)
                        }
                    }
                    function X(e) {
                        if ("playing" !== h) {
                            "idle" === h && ee();
                            return
                        }
                        if (i.length >= 2)
                            return;
                        let t = i.length > 0 ? i[i.length - 1] : l;
                        switch (e) {
                        case "up":
                            i.push({ //removed 0 === t.y && 
                                x: 0,
                                y: -1
                            });
                            break;
                        case "down":
                            i.push({ //removed 0 === t.y && 
                                x: 0,
                                y: 1
                            });
                            break;
                        case "left":
                            i.push({ //removed 0 === t.x && 
                                x: -1,
                                y: 0
                            });
                            break;
                        case "right":
                            i.push({ //removed 0 === t.x && 
                                x: 1,
                                y: 0
                            })
                        }
                    }
                    function Q(e) {
                        if ("over" !== h) {
                            if ("idle" === h) {
                                ["Enter", " ", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "w", "a", "s", "d"].includes(e.key) && (e.preventDefault(),
                                ee());
                                return
                            }
                            switch (e.key) {
                            case "ArrowUp":
                            case "w":
                                e.preventDefault(),
                                X("up");
                                break;
                            case "ArrowDown":
                            case "s":
                                e.preventDefault(),
                                X("down");
                                break;
                            case "ArrowLeft":
                            case "a":
                                e.preventDefault(),
                                X("left");
                                break;
                            case "ArrowRight":
                            case "d":
                                e.preventDefault(),
                                X("right")
                            }
                        }
                    }
                    function ee() {
                        null !== x && (cancelAnimationFrame(x),
                        x = null),
                        O = !1,
                        G(),
                        h = "playing",
                        t?.onStateChange?.("playing"),
                        d = performance.now(),
                        x = requestAnimationFrame(K)
                    }
                    return h = "idle",
                    G(),
                    Y(),
                    t?.onStateChange?.("idle"),
                    d = performance.now(),
                    x = requestAnimationFrame(function e(t) {
                        if ("idle" === h && !S) {
                            if (t - d >= 150) {
                                let e;
                                !function() {
                                    let e = r[0]
                                      , t = [{
                                        x: 1,
                                        y: 0
                                    }, {
                                        x: -1,
                                        y: 0
                                    }, {
                                        x: 0,
                                        y: -1
                                    }, {
                                        x: 0,
                                        y: 1
                                    }].filter(t => {
                                        if (t.x === -l.x && t.y === -l.y)
                                            return !1;
                                        let a = {
                                            x: e.x + t.x,
                                            y: e.y + t.y
                                        };
                                        return !(a.x < 0) && !(a.x >= 20) && !(a.y < 0) && !(a.y >= 20) && !r.some(e => e.x === a.x && e.y === a.y)
                                    }
                                    );
                                    if (0 === t.length)
                                        return;
                                    let a = t.find(e => e.x === l.x && e.y === l.y);
                                    if (!a) {
                                        l = t[Math.floor(Math.random() * t.length)],
                                        z();
                                        return
                                    }
                                    if (--Z <= 0) {
                                        let e = t.filter(e => e.x !== l.x || e.y !== l.y);
                                        e.length > 0 && (l = e[Math.floor(Math.random() * e.length)]),
                                        z();
                                        return
                                    }
                                    l = a
                                }(),
                                (e = {
                                    x: r[0].x + l.x,
                                    y: r[0].y + l.y
                                }).x < 0 || e.x >= 20 || e.y < 0 || e.y >= 20 || r.some(t => t.x === e.x && t.y === e.y) ? (G(),
                                z()) : (r.unshift(e),
                                r.pop()),
                                d = t
                            }
                            Y(),
                            x = requestAnimationFrame(e)
                        }
                    }),
                    "u" > typeof document && document.addEventListener("keydown", Q),
                    {
                        destroy() {
                            S = !0,
                            q(),
                            null !== x && cancelAnimationFrame(x),
                            "u" > typeof document && document.removeEventListener("keydown", Q)
                        },
                        getFoodEaten: () => ({
                            ...w
                        }),
                        getFoodType: () => o.name,
                        getPendingGrowth: () => b,
                        getSnakeHead: () => ({
                            ...r[0]
                        }),
                        getSnakeLength: () => r.length,
                        getTickInterval: () => f,
                        handleDirection: X,
                        setAvatars(e) {
                            V = 0,
                            D(e)
                        },
                        showAskFeedback() {
                            k && v.push({
                                text: u("APRIL FOOLS: ask food feedback text", "check your inbox!"),
                                x: 14 * k.x + 7,
                                y: 14 * k.y + 7,
                                startTime: d,
                                duration: 2e3
                            })
                        },
                        start: ee,
                        startOopsAllBoops() {
                            ee(),
                            O = !0
                        }
                    }
                }(s.current, {
                    onScoreChange: e => {
                        eu.current = e,
                        $(e)
                    }
                    ,
                    onHiScoreChange: U,
                    onAskEaten: () => ep.current?.(),
                    onStateChange: (e, t) => {
                        if (G(e),
                        "playing" === e) {
                            ef.current = Date.now();
                            try {
                                eb.current({
                                    eventName: m.R.SnekGameStarted
                                })
                            } catch (e) {
                                (0,
                                O.Cp)(e)
                            }
                        }
                        if ("over" === e && t) {
                            try {
                                let e = {
                                    score: eu.current,
                                    snake_length: k.current?.getSnakeLength() ?? 0
                                };
                                ef.current > 0 && (e.duration_ms = Date.now() - ef.current);
                                let t = k.current?.getFoodEaten() ?? {};
                                for (let[a,r] of Object.entries(t))
                                    e[`food_${a}`] = r;
                                eb.current({
                                    eventName: m.R.SnekGameCompleted,
                                    eventDetails: e
                                })
                            } catch (e) {
                                (0,
                                O.Cp)(e)
                            }
                            et({
                                subtitle: t.subtitle || "",
                                isNewHiScore: t.isNewHiScore || !1
                            }),
                            er(T(V(a)))
                        }
                    }
                    ,
                    onBoopEffect: () => {
                        let e = k.current?.getSnakeHead()
                          , t = e ? `${(e.x + .5) / 20 * 100}%` : "50%"
                          , a = e ? `${8 + (e.y + .5) / 20 * 90}%` : "50%"
                          , r = 90;
                        if (e) {
                            let t = e.x / 19
                              , a = e.y / 19
                              , l = 1 - t
                              , i = Math.min(t, l, a);
                            r = Math.max(0, Math.min(180, r = (i === t ? 180 : 90 * (i !== l)) + (Math.random() - .5) * 60))
                        }
                        let l = r * Math.PI / 180
                          , i = 300 * Math.cos(l)
                          , n = -(300 * Math.sin(l))
                          , o = 270 - r;
                        ed({
                            src: T(X),
                            dx: i,
                            dy: n,
                            rotation: o,
                            left: t,
                            top: a
                        }),
                        setTimeout( () => {
                            ei(!0),
                            navigator.vibrate?.([30, 20, 30])
                        }
                        , 500)
                    }
                }, {
                    _c: a
                });
                return k.current = e,
                () => {
                    e.destroy(),
                    k.current = null
                }
            }
            , [a]),
            (0,
            f.useEffect)( () => {
                ex.length > 0 && k.current?.setAvatars(ex)
            }
            , [ex]);
            let ew = (0,
            f.useMemo)( () => {
                let e = (0,
                y.A)();
                return "production" === g.A.Development && !!e?.location?.search && new URLSearchParams(e.location.search).has("scorecard")
            }
            , []);
            (0,
            f.useEffect)( () => {
                ew && v.current && W(v.current, {
                    score: _,
                    hiScore: D,
                    subtitle: ee.subtitle || "your dashboard is still hungry",
                    bubbleText: ea,
                    _c: a
                }).catch( () => {}
                )
            }
            , [a, ew, _, D, B, ee.subtitle, ea]);
            let ey = "playing" !== B
              , eS = (0,
            f.useCallback)( () => {
                "idle" === B && k.current?.start()
            }
            , [B])
              , eO = (0,
            f.useCallback)(e => {
                let t;
                if (ey)
                    return;
                e.preventDefault();
                let a = I.current;
                if (!a)
                    return;
                let r = a.getBoundingClientRect()
                  , l = r.left + r.width / 2
                  , i = r.top + r.height / 2
                  , n = e.clientX - l
                  , o = e.clientY - i;
                if (10 > Math.hypot(n, o))
                    return;
                let s = Math.atan2(o, n);
                P(t = s >= -Math.PI / 4 && s < Math.PI / 4 ? "right" : s >= Math.PI / 4 && s < 3 * Math.PI / 4 ? "down" : s >= -3 * Math.PI / 4 && s < -Math.PI / 4 ? "up" : "left"),
                setTimeout( () => P(null), 100),
                navigator.vibrate?.(10),
                k.current?.handleDirection(t)
            }
            , [ey])
              , ev = (0,
            f.useCallback)( () => {
                k.current?.start()
            }
            , [])
              , eL = (0,
            f.useCallback)( () => {
                k.current?.startOopsAllBoops()
            }
            , [])
              , eF = (0,
            f.useCallback)(async (t, r) => {
                if (t.navigator.share) {
                    let e = new File([r],"snek-score.png",{
                        type: "image/png"
                    });
                    if (t.navigator.canShare?.({
                        files: [e]
                    }))
                        return void await t.navigator.share({
                            files: [e]
                        });
                    let l = a("APRIL FOOLS: share fallback text, %1$s is the score", "I scored %1$s on Feed the Feed! 🐍", [String(_)]);
                    await t.navigator.share({
                        title: "Feed the Feed",
                        text: l
                    })
                } else
                    t.navigator.clipboard ? (await t.navigator.clipboard.write([new ClipboardItem({
                        "image/png": r
                    })]),
                    eo(!0),
                    setTimeout( () => eo(!1), 1500)) : e(a("APRIL FOOLS: sharing not supported toast", "Sharing is not supported on this browser"))
            }
            , [a, _, e])
              , eC = (0,
            f.useCallback)(async () => {
                let t = (0,
                y.A)();
                if (t)
                    try {
                        let e = await Y({
                            score: _,
                            hiScore: D,
                            subtitle: ee.subtitle,
                            bubbleText: ea,
                            gameCanvas: s.current ?? void 0,
                            _c: a
                        })
                          , o = () => {
                            r({
                                eventName: m.R.SnekScoreShared,
                                eventDetails: {
                                    score: _,
                                    snake_length: k.current?.getSnakeLength() ?? 0
                                }
                            })
                        }
                        ;
                        if (eg) {
                            let t = await new Promise( (t, a) => {
                                let r = new FileReader;
                                r.addEventListener("load", () => t(r.result)),
                                r.addEventListener("error", () => a(Error("Failed to read blob"))),
                                r.readAsDataURL(e)
                            }
                            );
                            var n = JSON.stringify({
                                image: t
                            });
                            let a = (0,
                            y.A)();
                            if (a) {
                                if (a.webkit?.messageHandlers?.onTumblrShare)
                                    try {
                                        a.webkit.messageHandlers.onTumblrShare.postMessage(n)
                                    } catch (e) {
                                        console.error("iOS failed to handle share", e)
                                    }
                                if (a.__onTumblrShare)
                                    try {
                                        a.__onTumblrShare.postMessage(n)
                                    } catch (e) {
                                        console.error("Android failed to handle share", e)
                                    }
                            }
                            o();
                            return
                        }
                        ec(!0);
                        try {
                            let t = new File([e],"snek-score.png",{
                                type: "image/png"
                            })
                              , a = await i({
                                image: t
                            })
                              , r = {
                                type: x._B.Image,
                                media: [a]
                            };
                            o(),
                            l((0,
                            c.P1)({
                                postType: x.xj.Text
                            }), {
                                state: {
                                    newPost: {
                                        content: [r],
                                        tags: Q,
                                        isPrefilledPost: !0,
                                        disableBlogSelection: !1
                                    }
                                }
                            })
                        } catch {
                            o(),
                            await eF(t, e)
                        } finally {
                            ec(!1)
                        }
                    } catch (t) {
                        if (t instanceof Error && "AbortError" === t.name)
                            return;
                        (0,
                        O.Cp)(t),
                        e(a("APRIL FOOLS: share failed toast", "Share failed — try again"))
                    }
            }
            , [a, _, D, eg, ee.subtitle, e, ea, r, i, l, eF]);
            return (0,
            J.jsxs)(J.Fragment, {
                children: [(0,
                J.jsx)(n.Ay, {
                    disable: n.WC
                }), (0,
                J.jsxs)("div", {
                    className: Z.ES,
                    children: [(0,
                    J.jsx)("div", {
                        className: Z.Nl,
                        children: (0,
                        J.jsxs)("div", {
                            className: `${Z.nj}${"playing" === B ? ` ${Z.z3}` : ""}${el ? ` ${Z.el}` : ""}`,
                            role: "button",
                            tabIndex: 0,
                            onClick: eS,
                            onAnimationEnd: () => ei(!1),
                            onKeyDown: e => {
                                ("Enter" === e.key || " " === e.key) && eS()
                            }
                            ,
                            children: [(0,
                            J.jsxs)("div", {
                                className: Z.si,
                                children: [(0,
                                J.jsxs)("span", {
                                    children: [a("APRIL FOOLS: HUD score label", "SCORE"), " ", (0,
                                    J.jsx)("span", {
                                        children: _
                                    })]
                                }), (0,
                                J.jsxs)("span", {
                                    children: [a("APRIL FOOLS: HUD hi score label", "HI"), " ", (0,
                                    J.jsx)("span", {
                                        children: D
                                    })]
                                })]
                            }), (0,
                            J.jsx)("canvas", {
                                ref: s,
                                className: `${Z.Ji}${"over" === B ? ` ${Z.jO}` : ""}`
                            }), eh && (0,
                            J.jsx)("div", {
                                className: Z.W1,
                                style: {
                                    left: eh.left,
                                    top: eh.top
                                },
                                children: (0,
                                J.jsx)("img", {
                                    alt: "",
                                    className: Z.eZ,
                                    onAnimationEnd: () => ed(null),
                                    src: eh.src,
                                    style: {
                                        transform: `translate(-50%, -22%) rotate(${eh.rotation}deg)`,
                                        transformOrigin: "50% 22%",
                                        "--boop-dx": `${eh.dx}px`,
                                        "--boop-dy": `${eh.dy}px`
                                    }
                                }, `${eh.dx}-${eh.dy}-${eh.rotation}`)
                            }), "idle" === B && (0,
                            J.jsxs)("div", {
                                className: Z.Lw,
                                children: [(0,
                                J.jsx)("h1", {
                                    children: a("APRIL FOOLS: start screen title", "FEED THE FEED (modded)")
                                }), (0,
                                J.jsx)("div", {
                                    className: Z.VA,
                                    children: a("APRIL FOOLS: start screen subtitle", "your dashboard is hungry")
                                }), (0,
                                J.jsx)("div", {
                                    className: Z.GA,
                                    children: a("APRIL FOOLS: start screen instructions", "ARROWS / D-PAD TO MOVE")
                                }), (0,
                                J.jsx)("div", {
                                    className: Z.an,
                                    children: a("APRIL FOOLS: start screen prompt", "TAP TO START")
                                })]
                            }), "over" === B && (0,
                            J.jsxs)("div", {
                                className: `${Z.Lw} ${Z.J1}`,
                                children: [(0,
                                J.jsx)("h1", {
                                    children: a("APRIL FOOLS: game over title", "GAME OVER")
                                }), (0,
                                J.jsx)("div", {
                                    className: Z.VA,
                                    children: ee.subtitle
                                }), (0,
                                J.jsxs)("div", {
                                    className: Z.Nv,
                                    children: [a("APRIL FOOLS: game over score label", "SCORE:"), " ", (0,
                                    J.jsx)("span", {
                                        children: _
                                    })]
                                }), ee.isNewHiScore && (0,
                                J.jsx)("div", {
                                    className: Z.IN,
                                    children: a("APRIL FOOLS: new high score notification", "NEW HIGH SCORE!")
                                }), (0,
                                J.jsxs)("div", {
                                    className: Z.os,
                                    children: [(0,
                                    J.jsx)("button", {
                                        className: `${Z.z_} ${Z.uM}`,
                                        disabled: es,
                                        onClick: eC,
                                        children: es ? a("APRIL FOOLS: share button uploading state", "SHARING…") : en ? a("APRIL FOOLS: share button copied state", "COPIED!") : a("APRIL FOOLS: share button default state", "SHARE SCORE")
                                    }), (0,
                                    J.jsx)("button", {
                                        className: `${Z.z_} ${Z.L5}`,
                                        onClick: ev,
                                        children: a("APRIL FOOLS: play again button", "PLAY AGAIN")
                                    })]
                                }), (0,
                                J.jsxs)("div", {
                                    className: Z.Jp,
                                    onClick: eL,
                                    role: "button",
                                    tabIndex: 0,
                                    onKeyDown: e => {
                                        ("Enter" === e.key || " " === e.key) && eL()
                                    }
                                    ,
                                    children: [(0,
                                    J.jsx)("div", {
                                        className: Z.Ny,
                                        children: ea
                                    }), (0,
                                    J.jsxs)("svg", {
                                        className: Z.Ni,
                                        width: "37",
                                        height: "44",
                                        viewBox: "0 0 37 44",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0,
                                        J.jsx)("rect", {
                                            x: "12",
                                            y: "28",
                                            width: "3",
                                            height: "3",
                                            fill: "#01CF35"
                                        }), (0,
                                        J.jsx)("rect", {
                                            x: "11",
                                            y: "17",
                                            width: "3",
                                            height: "4",
                                            fill: "#01CF35"
                                        }), (0,
                                        J.jsx)("rect", {
                                            x: "23",
                                            y: "17",
                                            width: "3",
                                            height: "4",
                                            fill: "#01CF35"
                                        }), (0,
                                        J.jsx)("rect", {
                                            x: "17",
                                            y: "21",
                                            width: "3",
                                            height: "2",
                                            fill: "#01CF35"
                                        }), (0,
                                        J.jsx)("rect", {
                                            x: "17",
                                            y: "26",
                                            width: "3",
                                            height: "3",
                                            fill: "#01CF35"
                                        }), (0,
                                        J.jsx)("rect", {
                                            x: "14",
                                            y: "25",
                                            width: "3",
                                            height: "3",
                                            fill: "#01CF35"
                                        }), (0,
                                        J.jsx)("rect", {
                                            x: "20",
                                            y: "25",
                                            width: "3",
                                            height: "3",
                                            fill: "#01CF35"
                                        }), (0,
                                        J.jsx)("rect", {
                                            x: "4",
                                            y: "4",
                                            width: "3",
                                            height: "13",
                                            fill: "#01CF35"
                                        }), (0,
                                        J.jsx)("rect", {
                                            width: "3",
                                            height: "13",
                                            transform: "matrix(-1 0 0 1 33 4)",
                                            fill: "#01CF35"
                                        }), (0,
                                        J.jsx)("rect", {
                                            x: "7",
                                            y: "4",
                                            width: "3",
                                            height: "3",
                                            fill: "#01CF35"
                                        }), (0,
                                        J.jsx)("rect", {
                                            width: "3",
                                            height: "3",
                                            transform: "matrix(-1 0 0 1 30 4)",
                                            fill: "#01CF35"
                                        }), (0,
                                        J.jsx)("rect", {
                                            x: "10",
                                            y: "5",
                                            width: "3",
                                            height: "3",
                                            fill: "#01CF35"
                                        }), (0,
                                        J.jsx)("rect", {
                                            width: "3",
                                            height: "3",
                                            transform: "matrix(-1 0 0 1 27 5)",
                                            fill: "#01CF35"
                                        }), (0,
                                        J.jsx)("rect", {
                                            x: "13",
                                            y: "7",
                                            width: "3",
                                            height: "3",
                                            fill: "#01CF35"
                                        }), (0,
                                        J.jsx)("rect", {
                                            x: "5",
                                            y: "17",
                                            width: "3",
                                            height: "4",
                                            fill: "#01CF35"
                                        }), (0,
                                        J.jsx)("rect", {
                                            x: "7",
                                            y: "21",
                                            width: "3",
                                            height: "4",
                                            fill: "#01CF35"
                                        }), (0,
                                        J.jsx)("rect", {
                                            width: "3",
                                            height: "3",
                                            transform: "matrix(-1 0 0 1 24 7)",
                                            fill: "#01CF35"
                                        }), (0,
                                        J.jsx)("rect", {
                                            x: "14",
                                            y: "9",
                                            width: "9",
                                            height: "3",
                                            fill: "#01CF35"
                                        }), (0,
                                        J.jsx)("rect", {
                                            x: "10",
                                            y: "24",
                                            width: "4",
                                            height: "3",
                                            fill: "#01CF35"
                                        }), (0,
                                        J.jsx)("rect", {
                                            width: "3",
                                            height: "4",
                                            transform: "matrix(-1 0 0 1 32 17)",
                                            fill: "#01CF35"
                                        }), (0,
                                        J.jsx)("rect", {
                                            width: "3",
                                            height: "4",
                                            transform: "matrix(-1 0 0 1 30 21)",
                                            fill: "#01CF35"
                                        }), (0,
                                        J.jsx)("rect", {
                                            width: "4",
                                            height: "3",
                                            transform: "matrix(-1 0 0 1 27 24)",
                                            fill: "#01CF35"
                                        }), (0,
                                        J.jsx)("rect", {
                                            x: "10",
                                            y: "31",
                                            width: "3",
                                            height: "9",
                                            fill: "#01CF35"
                                        })]
                                    })]
                                })]
                            })]
                        })
                    }), (0,
                    J.jsxs)("div", {
                        className: Z.ax,
                        children: [(0,
                        J.jsx)("div", {
                            className: `${Z.ne} ${ey ? Z.eO : ""}`,
                            onPointerDown: eO,
                            children: (0,
                            J.jsxs)("div", {
                                className: Z.Yp,
                                ref: I,
                                children: [(0,
                                J.jsx)("button", {
                                    className: `${Z.eC} ${Z.up} ${"up" === R ? Z.kS : ""}`,
                                    "aria-label": a("APRIL FOOLS: d-pad up button", "Up"),
                                    tabIndex: -1,
                                    children: (0,
                                    J.jsx)(o.wm9, {})
                                }), (0,
                                J.jsx)("button", {
                                    className: `${Z.eC} ${Z.kb} ${"left" === R ? Z.kS : ""}`,
                                    "aria-label": a("APRIL FOOLS: d-pad left button", "Left"),
                                    tabIndex: -1,
                                    children: (0,
                                    J.jsx)(o.yhl, {})
                                }), (0,
                                J.jsx)("div", {
                                    className: Z.xO
                                }), (0,
                                J.jsx)("button", {
                                    className: `${Z.eC} ${Z.pG} ${"right" === R ? Z.kS : ""}`,
                                    "aria-label": a("APRIL FOOLS: d-pad right button", "Right"),
                                    tabIndex: -1,
                                    children: (0,
                                    J.jsx)(o.Th7, {})
                                }), (0,
                                J.jsx)("button", {
                                    className: `${Z.eC} ${Z.TR} ${"down" === R ? Z.kS : ""}`,
                                    "aria-label": a("APRIL FOOLS: d-pad down button", "Down"),
                                    tabIndex: -1,
                                    children: (0,
                                    J.jsx)(o.F5n, {})
                                })]
                            })
                        }), (0,
                        J.jsx)("div", {
                            className: Z.pR,
                            children: (0,
                            J.jsx)("div", {
                                className: Z.dK,
                                children: (0,
                                J.jsx)(o.wm6, {})
                            })
                        })]
                    })]
                }), ew && (0,
                J.jsxs)("div", {
                    className: Z.u2,
                    children: [(0,
                    J.jsx)("canvas", {
                        ref: v,
                        className: Z.Pd
                    }), (0,
                    J.jsx)("button", {
                        className: Z.N$,
                        onClick: () => {
                            Y({
                                score: _,
                                hiScore: D,
                                subtitle: ee.subtitle || "your dashboard is still hungry",
                                bubbleText: ea,
                                _c: a
                            }).then(e => navigator.clipboard.write([new ClipboardItem({
                                "image/png": e
                            })])).then( () => e("Copied scorecard to clipboard")).catch( () => e("Failed to copy"))
                        }
                        ,
                        children: "Copy to clipboard"
                    })]
                })]
            })
        }
        let et = function() {
            return (0,
            J.jsxs)(J.Fragment, {
                children: [(0,
                J.jsx)(s.A, {
                    page: v.I.analyticsPageName
                }), (0,
                J.jsx)("div", {
                    className: Z.MY,
                    children: (0,
                    J.jsx)(ee, {})
                })]
            })
        }
    }
}]);
