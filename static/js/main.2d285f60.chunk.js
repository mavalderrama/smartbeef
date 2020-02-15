(this.webpackJsonpcomacow = this.webpackJsonpcomacow || []).push([
  [0],
  {
    149: function(e, a, t) {
      e.exports = t.p + "static/media/calf.eb43f701.jpg";
    },
    150: function(e, a, t) {
      e.exports = t.p + "static/media/cattle.a685e335.jpg";
    },
    153: function(e, a) {},
    167: function(e, a, t) {
      e.exports = t(276);
    },
    172: function(e, a, t) {},
    276: function(e, a, t) {
      "use strict";
      t.r(a);
      var n = {};
      t.r(n),
        t.d(n, "login", function() {
          return h;
        });
      var r = t(0),
        o = t.n(r),
        i = t(13),
        c = t.n(i),
        l = (t(172), t(2)),
        s = t(20),
        u = t(16),
        m = t(28),
        d = t(29),
        p = t(31),
        b = t(21);
      function h() {
        return { type: "LOGIN", payload: !0 };
      }
      var g = t(10),
        f = t(337),
        E = t(336),
        v = t(342),
        j = t(324),
        O = t(343),
        y = t(333),
        w = t(321),
        _ = t(339),
        k = t(320),
        x = t(323),
        S = t(335),
        C = t(144),
        N = t.n(C),
        W = t(60),
        I = t(5),
        A = t(277);
      function L() {
        return o.a.createElement(
          "div",
          null,
          o.a.createElement(
            W.a,
            { variant: "body2", color: "textSecondary", align: "center" },
            "Copyright \xa9 ",
            o.a.createElement(
              k.a,
              { color: "inherit", href: "http://www.ciat.cgiar.org/" },
              "COMACOW - "
            ),
            new Date().getFullYear()
          ),
          o.a.createElement(
            W.a,
            { variant: "body2", color: "textSecondary", align: "center" },
            "Built with ",
            o.a.createElement(
              k.a,
              { color: "inherit", href: "https://material-ui.com/" },
              "Material-UI."
            )
          )
        );
      }
      var R = function(e) {
          var a = e.label,
            t = e.input,
            n = e.meta,
            r = n.touched,
            i = n.invalid,
            c = n.error,
            s = Object(l.a)(e, ["label", "input", "meta"]);
          return o.a.createElement(
            y.a,
            Object.assign(
              { label: a, placeholder: a, error: r && i, helperText: r && c },
              t,
              s
            )
          );
        },
        M = function(e) {
          var a = e.input,
            t = e.label;
          return o.a.createElement(
            "div",
            null,
            o.a.createElement(w.a, {
              control: o.a.createElement(_.a, {
                checked: !!a.value,
                onChange: a.onChange
              }),
              label: t
            })
          );
        },
        P = (function(e) {
          function a() {
            return (
              Object(s.a)(this, a),
              Object(m.a)(this, Object(d.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(p.a)(a, e),
            Object(u.a)(a, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    a = e.handleSubmit,
                    t = e.classes;
                  return o.a.createElement(
                    x.a,
                    { container: !0, component: "main", className: t.root },
                    o.a.createElement(O.a, null),
                    o.a.createElement(x.a, {
                      item: !0,
                      xs: !1,
                      sm: 4,
                      md: 7,
                      className: t.image
                    }),
                    o.a.createElement(
                      x.a,
                      {
                        item: !0,
                        xs: 12,
                        sm: 8,
                        md: 5,
                        component: A.a,
                        elevation: 6,
                        square: !0
                      },
                      o.a.createElement(
                        "div",
                        { className: t.paper },
                        o.a.createElement(
                          v.a,
                          { className: t.avatar },
                          o.a.createElement(N.a, null)
                        ),
                        o.a.createElement(
                          W.a,
                          { component: "h1", variant: "h5" },
                          "Sign in"
                        ),
                        o.a.createElement(
                          "form",
                          { onSubmit: a, className: t.form, noValidate: !0 },
                          o.a.createElement(f.a, {
                            component: R,
                            type: "email",
                            variant: "outlined",
                            margin: "normal",
                            required: !0,
                            fullWidth: !0,
                            id: "email",
                            label: "Email Address",
                            name: "email",
                            autoComplete: "email",
                            autoFocus: !0
                          }),
                          o.a.createElement(f.a, {
                            component: R,
                            type: "password",
                            variant: "outlined",
                            margin: "normal",
                            required: !0,
                            fullWidth: !0,
                            name: "password",
                            label: "Password",
                            id: "password",
                            autoComplete: "current-password"
                          }),
                          o.a.createElement(f.a, {
                            name: "remember",
                            component: M,
                            label: "Remember me",
                            color: "primary"
                          }),
                          o.a.createElement(
                            j.a,
                            {
                              type: "submit",
                              fullWidth: !0,
                              variant: "contained",
                              color: "primary",
                              className: t.submit
                            },
                            "Sign In"
                          ),
                          o.a.createElement(
                            x.a,
                            { container: !0 },
                            o.a.createElement(
                              x.a,
                              { item: !0, xs: !0 },
                              o.a.createElement(
                                k.a,
                                { href: "#", variant: "body2" },
                                "Forgot password?"
                              )
                            ),
                            o.a.createElement(
                              x.a,
                              { item: !0 },
                              o.a.createElement(
                                k.a,
                                { href: "#", variant: "body2" },
                                "Don't have an account? Sign Up"
                              )
                            )
                          ),
                          o.a.createElement(
                            S.a,
                            { mt: 5 },
                            o.a.createElement(L, null)
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            a
          );
        })(r.Component),
        D = Object(E.a)({ form: "login" })(
          Object(I.a)(function(e) {
            return {
              root: { height: "100vh" },
              image: {
                backgroundImage:
                  "url(https://dkpo4ygqb6rh6.cloudfront.net/COWSIGNALS_COM/imageresized/4023/8248646f7e35630b2bb4bf597c22b73a/2560_1440_75_fixedjpg/cowsignals_2560px.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
              },
              logos: {
                margin: e.spacing(4, 0),
                marginLeft: "20%",
                display: "flex",
                "vertical-align": "top"
              },
              paper: {
                margin: e.spacing(4, 4),
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              },
              avatar: {
                margin: e.spacing(1),
                backgroundColor: e.palette.secondary.main
              },
              form: { width: "100%", marginTop: e.spacing(1) },
              submit: { margin: e.spacing(3, 0, 2) }
            };
          })(P)
        ),
        T = t(341),
        F = t(325),
        U = (function(e) {
          function a() {
            return (
              Object(s.a)(this, a),
              Object(m.a)(this, Object(d.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(p.a)(a, e),
            Object(u.a)(a, [
              {
                key: "render",
                value: function() {
                  var e = this.props.open;
                  return o.a.createElement(
                    T.a,
                    { open: e },
                    o.a.createElement(
                      A.a,
                      null,
                      o.a.createElement(F.a, {
                        style: {
                          display: "block",
                          marginLeft: "auto",
                          marginRight: "auto"
                        }
                      }),
                      o.a.createElement(y.a, {
                        disabled: !0,
                        id: "standard-disabled",
                        defaultValue: "Loading...",
                        style: { marginLeft: "auto", marginRight: "auto" }
                      })
                    )
                  );
                }
              }
            ]),
            a
          );
        })(r.Component),
        q = t(344),
        B = (function(e) {
          function a(e) {
            var t;
            return (
              Object(s.a)(this, a),
              ((t = Object(m.a)(
                this,
                Object(d.a)(a).call(this, e)
              )).login = function(e) {
                var a = t.props,
                  n = a.history;
                a.auth_actions.login(), n.push("/");
              }),
              (t.state = { remember: !1, user: "guest", id: 0 }),
              t
            );
          }
          return (
            Object(p.a)(a, e),
            Object(u.a)(a, [
              {
                key: "componentDidMount",
                value: function() {
                  console.log("did mount login");
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    a = e.is_authenticated,
                    t = e.history,
                    n = e.is_loading,
                    r = e.user;
                  return (
                    console.log("state", this.state),
                    a &&
                      (this.state.remember
                        ? (localStorage.setItem("user", r),
                          sessionStorage.setItem("user", r))
                        : sessionStorage.setItem("user", r),
                      console.log("did push"),
                      t.push("/")),
                    o.a.createElement(
                      "div",
                      null,
                      o.a.createElement(D, { onSubmit: this.login }),
                      o.a.createElement(U, { open: n })
                    )
                  );
                }
              }
            ]),
            a
          );
        })(r.Component),
        G = Object(b.b)(
          function(e, a) {
            return {
              is_authenticated: e.auth_reducer.is_authenticated,
              is_loading: e.auth_reducer.is_loading,
              user: e.auth_reducer.user
            };
          },
          function(e) {
            return { auth_actions: Object(g.b)(n, e) };
          }
        )(
          Object(I.a)(function(e) {
            return {};
          })(Object(q.a)(B))
        ),
        V = t(326),
        z = t(327),
        H = t(146),
        J = t.n(H),
        Y = t(68),
        $ = t.n(Y),
        K = t(147),
        Q = t.n(K),
        X = t(148),
        Z = t.n(X),
        ee = (function(e) {
          function a() {
            return (
              Object(s.a)(this, a),
              Object(m.a)(this, Object(d.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(p.a)(a, e),
            Object(u.a)(a, [
              {
                key: "componentDidMount",
                value: function() {
                  console.log("Page Wrapper Mounted");
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props.classes;
                  return o.a.createElement(
                    o.a.Fragment,
                    null,
                    this.props.children,
                    o.a.createElement(
                      V.a,
                      { showLabels: !0, className: e.root },
                      o.a.createElement(z.a, {
                        label: "Recents",
                        icon: o.a.createElement(J.a, null)
                      }),
                      o.a.createElement(z.a, {
                        label: "Favorites",
                        icon: o.a.createElement($.a, null)
                      }),
                      o.a.createElement(z.a, {
                        label: "Nearby",
                        icon: o.a.createElement(Q.a, null)
                      }),
                      o.a.createElement(z.a, {
                        label: "Post",
                        icon: o.a.createElement(Z.a, null)
                      })
                    )
                  );
                }
              }
            ]),
            a
          );
        })(r.Component),
        ae = Object(b.b)(
          function(e, a) {
            return {};
          },
          function(e) {
            return {};
          }
        )(
          Object(I.a)(function(e) {
            return {
              root: { flex: 1, justifyContent: "flex-end", paddingTop: "98%" }
            };
          })(Object(q.a)(ee))
        ),
        te = t(328),
        ne = t(329),
        re = t(322),
        oe = t(107),
        ie = t.n(oe),
        ce = t(330),
        le = t(331),
        se = t(332),
        ue = t(108),
        me = t.n(ue),
        de = t(149),
        pe = t.n(de),
        be = t(150),
        he = t.n(be),
        ge = (function(e) {
          function a() {
            return (
              Object(s.a)(this, a),
              Object(m.a)(this, Object(d.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(p.a)(a, e),
            Object(u.a)(a, [
              {
                key: "componentDidMount",
                value: function() {
                  console.log("did mount MainPage");
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props.classes;
                  return o.a.createElement(
                    ae,
                    null,
                    o.a.createElement(
                      x.a,
                      { container: !0, className: e.root, spacing: 2 },
                      o.a.createElement(
                        x.a,
                        { item: !0, xs: 6, xl: 3 },
                        o.a.createElement(
                          te.a,
                          { className: e.root },
                          o.a.createElement(ne.a, {
                            avatar: o.a.createElement(
                              v.a,
                              { "aria-label": "recipe", className: e.avatar },
                              "R"
                            ),
                            action: o.a.createElement(
                              re.a,
                              { "aria-label": "settings" },
                              o.a.createElement(ie.a, null)
                            ),
                            title: "Sell"
                          }),
                          o.a.createElement(ce.a, {
                            className: e.media,
                            image: he.a,
                            title: "Calf selling"
                          }),
                          o.a.createElement(
                            le.a,
                            null,
                            o.a.createElement(
                              W.a,
                              {
                                variant: "body2",
                                color: "textSecondary",
                                component: "p"
                              },
                              "test..."
                            )
                          ),
                          o.a.createElement(
                            se.a,
                            { disableSpacing: !0 },
                            o.a.createElement(
                              re.a,
                              { "aria-label": "add to favorites" },
                              o.a.createElement($.a, null)
                            ),
                            o.a.createElement(
                              re.a,
                              { "aria-label": "share" },
                              o.a.createElement(me.a, null)
                            )
                          )
                        )
                      ),
                      o.a.createElement(
                        x.a,
                        { item: !0, xs: 6, xl: 3 },
                        o.a.createElement(
                          te.a,
                          { className: e.root },
                          o.a.createElement(ne.a, {
                            avatar: o.a.createElement(
                              v.a,
                              { "aria-label": "recipe", className: e.avatar },
                              "R"
                            ),
                            action: o.a.createElement(
                              re.a,
                              { "aria-label": "settings" },
                              o.a.createElement(ie.a, null)
                            ),
                            title: "Buy"
                          }),
                          o.a.createElement(ce.a, {
                            className: e.media,
                            image: pe.a,
                            title: "Paella dish"
                          }),
                          o.a.createElement(
                            le.a,
                            null,
                            o.a.createElement(
                              W.a,
                              {
                                variant: "body2",
                                color: "textSecondary",
                                component: "p"
                              },
                              "test2..."
                            )
                          ),
                          o.a.createElement(
                            se.a,
                            { disableSpacing: !0 },
                            o.a.createElement(
                              re.a,
                              { "aria-label": "add to favorites" },
                              o.a.createElement($.a, null)
                            ),
                            o.a.createElement(
                              re.a,
                              { "aria-label": "share" },
                              o.a.createElement(me.a, null)
                            )
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            a
          );
        })(r.Component),
        fe = Object(b.b)(
          function(e, a) {
            return {
              is_authenticated: e.auth_reducer.is_authenticated,
              is_loading: e.auth_reducer.is_loading,
              user: e.auth_reducer.user
            };
          },
          function(e) {
            return { actions: Object(g.b)(n, e) };
          }
        )(
          Object(I.a)(function(e) {
            return {
              root: { maxHeight: 400, minHeight: 300 },
              media: { height: 0, paddingTop: "90%" }
            };
          })(Object(q.a)(ge))
        ),
        Ee = t(48),
        ve = t(152),
        je = (function(e) {
          function a() {
            return (
              Object(s.a)(this, a),
              Object(m.a)(this, Object(d.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(p.a)(a, e),
            Object(u.a)(a, [
              {
                key: "componentDidMount",
                value: function() {
                  console.log("App did mount");
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this;
                  return o.a.createElement(
                    ve.a,
                    null,
                    o.a.createElement(
                      Ee.d,
                      null,
                      o.a.createElement(Ee.b, { path: "/login", component: G }),
                      o.a.createElement(
                        function(a) {
                          var t = a.component,
                            n = Object(l.a)(a, ["component"]);
                          return o.a.createElement(
                            Ee.b,
                            Object.assign({}, n, {
                              render: function(a) {
                                return e.props.is_authenticated
                                  ? o.a.createElement(t, a)
                                  : o.a.createElement(Ee.a, {
                                      to: {
                                        pathname: "/login",
                                        state: { from: a.location }
                                      }
                                    });
                              }
                            })
                          );
                        },
                        { exact: !0, path: "/", component: fe }
                      )
                    )
                  );
                }
              }
            ]),
            a
          );
        })(r.Component),
        Oe = Object(b.b)(
          function(e, a) {
            return { is_authenticated: e.auth_reducer.is_authenticated };
          },
          function(e) {
            return { actions: Object(g.b)(n, e) };
          }
        )(je),
        ye = t(87),
        we = { is_authenticated: !1, is_loading: !1, user: "" },
        _e = t(153),
        ke = t.n(_e),
        xe = t(340),
        Se = Object(g.c)({
          auth_reducer: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : we,
              a = arguments.length > 1 ? arguments[1] : void 0;
            console.log(a);
            var t = a.type,
              n = a.payload;
            if ("LOGIN" === t)
              return Object(ye.a)({}, e, {
                is_loading: !1,
                is_authenticated: !0
              });
            if ("IS_ACTIVE" === t) {
              var r = n.id,
                o = n.user;
              return (
                console.log("is active", n),
                r && o
                  ? Object(ye.a)({}, e, {
                      is_loading: !1,
                      is_authenticated: !0,
                      user: o,
                      id: r
                    })
                  : Object(ye.a)({}, e, {
                      is_loading: !1,
                      is_authenticated: !1
                    })
              );
            }
            return e;
          },
          drawer_reducer: ke.a,
          form: xe.a
        }),
        Ce = t(154),
        Ne = Object(g.a)(Ce.a),
        We = Object(g.d)(Se, Ne),
        Ie = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function Ae(e, a) {
        navigator.serviceWorker
          .register(e)
          .then(function(e) {
            e.onupdatefound = function() {
              var t = e.installing;
              null != t &&
                (t.onstatechange = function() {
                  "installed" === t.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          "New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."
                        ),
                        a && a.onUpdate && a.onUpdate(e))
                      : (console.log("Content is cached for offline use."),
                        a && a.onSuccess && a.onSuccess(e)));
                });
            };
          })
          .catch(function(e) {
            console.error("Error during service worker registration:", e);
          });
      }
      c.a.render(
        o.a.createElement(b.a, { store: We }, o.a.createElement(Oe, null)),
        document.getElementById("root")
      ),
        (function(e) {
          if ("serviceWorker" in navigator) {
            if (
              new URL("/comacow", window.location.href).origin !==
              window.location.origin
            )
              return;
            window.addEventListener("load", function() {
              var a = "".concat("/comacow", "/service-worker.js");
              Ie
                ? (!(function(e, a) {
                    fetch(e, { headers: { "Service-Worker": "script" } })
                      .then(function(t) {
                        var n = t.headers.get("content-type");
                        404 === t.status ||
                        (null != n && -1 === n.indexOf("javascript"))
                          ? navigator.serviceWorker.ready.then(function(e) {
                              e.unregister().then(function() {
                                window.location.reload();
                              });
                            })
                          : Ae(e, a);
                      })
                      .catch(function() {
                        console.log(
                          "No internet connection found. App is running in offline mode."
                        );
                      });
                  })(a, e),
                  navigator.serviceWorker.ready.then(function() {
                    console.log(
                      "This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA"
                    );
                  }))
                : Ae(a, e);
            });
          }
        })();
    }
  },
  [[167, 1, 2]]
]);
//# sourceMappingURL=main.2d285f60.chunk.js.map
