(this.webpackJsonpcomacow = this.webpackJsonpcomacow || []).push([
  [0],
  {
    140: function(e, t) {},
    154: function(e, t, a) {
      e.exports = a(264);
    },
    159: function(e, t, a) {},
    264: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = {};
      a.r(n),
        a.d(n, "login", function() {
          return g;
        });
      var r = a(0),
        o = a.n(r),
        i = a(13),
        c = a.n(i),
        l = (a(159), a(3)),
        s = a(26),
        u = a(18),
        m = a(32),
        d = a(33),
        p = a(36),
        h = a(27);
      function g() {
        return { type: "LOGIN", payload: !0 };
      }
      var b = a(11),
        f = a(313),
        v = a(312),
        E = a(319),
        O = a(307),
        j = a(318),
        y = a(309),
        w = a(305),
        k = a(314),
        _ = a(303),
        C = a(306),
        S = a(311),
        W = a(136),
        x = a.n(W),
        I = a(142),
        N = a(6),
        A = a(304);
      function L() {
        return o.a.createElement(
          "div",
          null,
          o.a.createElement(
            I.a,
            { variant: "body2", color: "textSecondary", align: "center" },
            "Copyright \xa9 ",
            o.a.createElement(
              _.a,
              { color: "inherit", href: "http://www.ciat.cgiar.org/" },
              "COMACOW - "
            ),
            new Date().getFullYear()
          ),
          o.a.createElement(
            I.a,
            { variant: "body2", color: "textSecondary", align: "center" },
            "Built with ",
            o.a.createElement(
              _.a,
              { color: "inherit", href: "https://material-ui.com/" },
              "Material-UI."
            )
          )
        );
      }
      var M = function(e) {
          var t = e.label,
            a = e.input,
            n = e.meta,
            r = n.touched,
            i = n.invalid,
            c = n.error,
            s = Object(l.a)(e, ["label", "input", "meta"]);
          return o.a.createElement(
            y.a,
            Object.assign(
              { label: t, placeholder: t, error: r && i, helperText: r && c },
              a,
              s
            )
          );
        },
        R = function(e) {
          var t = e.input,
            a = e.label;
          return o.a.createElement(
            "div",
            null,
            o.a.createElement(w.a, {
              control: o.a.createElement(k.a, {
                checked: !!t.value,
                onChange: t.onChange
              }),
              label: a
            })
          );
        },
        D = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(m.a)(this, Object(d.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(p.a)(t, e),
            Object(u.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.handleSubmit,
                    a = e.classes;
                  return o.a.createElement(
                    C.a,
                    { container: !0, component: "main", className: a.root },
                    o.a.createElement(j.a, null),
                    o.a.createElement(C.a, {
                      item: !0,
                      xs: !1,
                      sm: 4,
                      md: 7,
                      className: a.image
                    }),
                    o.a.createElement(
                      C.a,
                      {
                        item: !0,
                        xs: 12,
                        sm: 8,
                        md: 5,
                        component: A.a,
                        elevation: 6,
                        square: !0
                      },
                      o.a.createElement(S.a, { className: a.logos }),
                      o.a.createElement(
                        "div",
                        { className: a.paper },
                        o.a.createElement(
                          E.a,
                          { className: a.avatar },
                          o.a.createElement(x.a, null)
                        ),
                        o.a.createElement(
                          I.a,
                          { component: "h1", variant: "h5" },
                          "Sign in"
                        ),
                        o.a.createElement(
                          "form",
                          { onSubmit: t, className: a.form, noValidate: !0 },
                          o.a.createElement(f.a, {
                            component: M,
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
                            component: M,
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
                            component: R,
                            label: "Remember me",
                            color: "primary"
                          }),
                          o.a.createElement(
                            O.a,
                            {
                              type: "submit",
                              fullWidth: !0,
                              variant: "contained",
                              color: "primary",
                              className: a.submit
                            },
                            "Sign In"
                          ),
                          o.a.createElement(
                            C.a,
                            { container: !0 },
                            o.a.createElement(
                              C.a,
                              { item: !0, xs: !0 },
                              o.a.createElement(
                                _.a,
                                { href: "#", variant: "body2" },
                                "Forgot password?"
                              )
                            ),
                            o.a.createElement(
                              C.a,
                              { item: !0 },
                              o.a.createElement(
                                _.a,
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
            t
          );
        })(r.Component),
        P = Object(v.a)({ form: "login" })(
          Object(N.a)(function(e) {
            return {
              root: { height: "100vh" },
              image: {
                backgroundImage: "url(https://source.unsplash.com/random)",
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
          })(D)
        ),
        T = a(317),
        U = a(308),
        q = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(m.a)(this, Object(d.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(p.a)(t, e),
            Object(u.a)(t, [
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
                      o.a.createElement(U.a, {
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
            t
          );
        })(r.Component),
        B = a(320),
        F = (function(e) {
          function t(e) {
            var a;
            return (
              Object(s.a)(this, t),
              ((a = Object(m.a)(
                this,
                Object(d.a)(t).call(this, e)
              )).login = function(e) {
                var t = a.props,
                  n = t.history;
                t.auth_actions.login(), n.push("/");
              }),
              (a.state = { remember: !1, user: "guest", id: 0 }),
              a
            );
          }
          return (
            Object(p.a)(t, e),
            Object(u.a)(t, [
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
                    t = e.is_authenticated,
                    a = e.history,
                    n = e.is_loading,
                    r = e.user;
                  e.id;
                  return (
                    console.log("state", this.state),
                    t &&
                      (this.state.remember
                        ? (localStorage.setItem("user", r),
                          sessionStorage.setItem("user", r))
                        : sessionStorage.setItem("user", r),
                      console.log("did push"),
                      a.push("/")),
                    o.a.createElement(
                      "div",
                      null,
                      o.a.createElement(P, { onSubmit: this.login }),
                      o.a.createElement(q, { open: n })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        V = Object(h.b)(
          function(e, t) {
            return {
              is_authenticated: e.auth_reducer.is_authenticated,
              is_loading: e.auth_reducer.is_loading,
              user: e.auth_reducer.user
            };
          },
          function(e) {
            return { auth_actions: Object(b.b)(n, e) };
          }
        )(
          Object(N.a)(function(e) {
            return {};
          })(Object(B.a)(F))
        ),
        G = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(m.a)(this, Object(d.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(p.a)(t, e),
            Object(u.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  console.log("did mount MainPage");
                }
              },
              {
                key: "render",
                value: function() {
                  return o.a.createElement("h1", null, "Welcome 2 COMACOW");
                }
              }
            ]),
            t
          );
        })(r.Component),
        J = Object(h.b)()(Object(B.a)(G)),
        z = a(47),
        Y = a(139),
        $ = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(m.a)(this, Object(d.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(p.a)(t, e),
            Object(u.a)(t, [
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
                    Y.a,
                    null,
                    o.a.createElement(
                      z.d,
                      null,
                      o.a.createElement(z.b, { path: "/login", component: V }),
                      o.a.createElement(
                        function(t) {
                          var a = t.component,
                            n = Object(l.a)(t, ["component"]);
                          return o.a.createElement(
                            z.b,
                            Object.assign({}, n, {
                              render: function(t) {
                                return e.props.is_authenticated
                                  ? o.a.createElement(a, t)
                                  : o.a.createElement(z.a, {
                                      to: {
                                        pathname: "/login",
                                        state: { from: t.location }
                                      }
                                    });
                              }
                            })
                          );
                        },
                        { exact: !0, path: "/", component: J }
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        H = Object(h.b)(
          function(e, t) {
            return { is_authenticated: e.auth_reducer.is_authenticated };
          },
          function(e) {
            return { actions: Object(b.b)(n, e) };
          }
        )($),
        K = a(81),
        Q = { is_authenticated: !1, is_loading: !1, user: "" },
        X = a(140),
        Z = a.n(X),
        ee = a(316),
        te = Object(b.c)({
          auth_reducer: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Q,
              t = arguments.length > 1 ? arguments[1] : void 0;
            console.log(t);
            var a = t.type,
              n = t.payload;
            if ("LOGIN" === a)
              return Object(K.a)({}, e, {
                is_loading: !1,
                is_authenticated: !0
              });
            if ("IS_ACTIVE" === a) {
              var r = n.id,
                o = n.user;
              return (
                console.log("is active", n),
                r && o
                  ? Object(K.a)({}, e, {
                      is_loading: !1,
                      is_authenticated: !0,
                      user: o,
                      id: r
                    })
                  : Object(K.a)({}, e, { is_loading: !1, is_authenticated: !1 })
              );
            }
            return e;
          },
          drawer_reducer: Z.a,
          form: ee.a
        }),
        ae = a(141),
        ne = Object(b.a)(ae.a),
        re = Object(b.d)(te, ne),
        oe = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function ie(e, t) {
        navigator.serviceWorker
          .register(e)
          .then(function(e) {
            e.onupdatefound = function() {
              var a = e.installing;
              null != a &&
                (a.onstatechange = function() {
                  "installed" === a.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          "New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."
                        ),
                        t && t.onUpdate && t.onUpdate(e))
                      : (console.log("Content is cached for offline use."),
                        t && t.onSuccess && t.onSuccess(e)));
                });
            };
          })
          .catch(function(e) {
            console.error("Error during service worker registration:", e);
          });
      }
      c.a.render(
        o.a.createElement(h.a, { store: re }, o.a.createElement(H, null)),
        document.getElementById("root")
      ),
        (function(e) {
          if ("serviceWorker" in navigator) {
            if (
              new URL("", window.location.href).origin !==
              window.location.origin
            )
              return;
            window.addEventListener("load", function() {
              var t = "".concat("", "/service-worker.js");
              oe
                ? (!(function(e, t) {
                    fetch(e, { headers: { "Service-Worker": "script" } })
                      .then(function(a) {
                        var n = a.headers.get("content-type");
                        404 === a.status ||
                        (null != n && -1 === n.indexOf("javascript"))
                          ? navigator.serviceWorker.ready.then(function(e) {
                              e.unregister().then(function() {
                                window.location.reload();
                              });
                            })
                          : ie(e, t);
                      })
                      .catch(function() {
                        console.log(
                          "No internet connection found. App is running in offline mode."
                        );
                      });
                  })(t, e),
                  navigator.serviceWorker.ready.then(function() {
                    console.log(
                      "This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA"
                    );
                  }))
                : ie(t, e);
            });
          }
        })();
    }
  },
  [[154, 1, 2]]
]);
//# sourceMappingURL=main.db241405.chunk.js.map