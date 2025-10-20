/*! For license information please see livekit-client.js.LICENSE.txt */
(() => {
  var e = {
      "./node_modules/process/browser.js": (e) => {
        var t,
          i,
          n = (e.exports = {});
        function s() {
          throw new Error("setTimeout has not been defined");
        }
        function r() {
          throw new Error("clearTimeout has not been defined");
        }
        function o(e) {
          if (t === setTimeout) return setTimeout(e, 0);
          if ((t === s || !t) && setTimeout)
            return ((t = setTimeout), setTimeout(e, 0));
          try {
            return t(e, 0);
          } catch (i) {
            try {
              return t.call(null, e, 0);
            } catch (i) {
              return t.call(this, e, 0);
            }
          }
        }
        !(function () {
          try {
            t = "function" == typeof setTimeout ? setTimeout : s;
          } catch (e) {
            t = s;
          }
          try {
            i = "function" == typeof clearTimeout ? clearTimeout : r;
          } catch (e) {
            i = r;
          }
        })();
        var a,
          c = [],
          d = !1,
          l = -1;
        function u() {
          d &&
            a &&
            ((d = !1),
            a.length ? (c = a.concat(c)) : (l = -1),
            c.length && h());
        }
        function h() {
          if (!d) {
            var e = o(u);
            d = !0;
            for (var t = c.length; t; ) {
              for (a = c, c = []; ++l < t; ) a && a[l].run();
              ((l = -1), (t = c.length));
            }
            ((a = null),
              (d = !1),
              (function (e) {
                if (i === clearTimeout) return clearTimeout(e);
                if ((i === r || !i) && clearTimeout)
                  return ((i = clearTimeout), clearTimeout(e));
                try {
                  return i(e);
                } catch (t) {
                  try {
                    return i.call(null, e);
                  } catch (t) {
                    return i.call(this, e);
                  }
                }
              })(e));
          }
        }
        function p(e, t) {
          ((this.fun = e), (this.array = t));
        }
        function m() {}
        ((n.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
          (c.push(new p(e, t)), 1 !== c.length || d || o(h));
        }),
          (p.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (n.title = "browser"),
          (n.browser = !0),
          (n.env = {}),
          (n.argv = []),
          (n.version = ""),
          (n.versions = {}),
          (n.on = m),
          (n.addListener = m),
          (n.once = m),
          (n.off = m),
          (n.removeListener = m),
          (n.removeAllListeners = m),
          (n.emit = m),
          (n.prependListener = m),
          (n.prependOnceListener = m),
          (n.listeners = function (e) {
            return [];
          }),
          (n.binding = function (e) {
            throw new Error("process.binding is not supported");
          }),
          (n.cwd = function () {
            return "/";
          }),
          (n.chdir = function (e) {
            throw new Error("process.chdir is not supported");
          }),
          (n.umask = function () {
            return 0;
          }));
      },
      "./node_modules/livekit-client/dist/livekit-client.esm.mjs": (
        e,
        t,
        i,
      ) => {
        "use strict";
        (i.r(t),
          i.d(t, {
            AudioPresets: () => vr,
            BackupCodecPolicy: () => fr,
            BaseKeyProvider: () => Ms,
            CheckStatus: () => Sc,
            Checker: () => Ec,
            ConnectionCheck: () => Ac,
            ConnectionError: () => qs,
            ConnectionErrorReason: () => Ns,
            ConnectionQuality: () => Ja,
            ConnectionState: () => Qa,
            CriticalTimers: () => or,
            CryptorError: () => Xs,
            CryptorErrorReason: () => Us,
            CryptorEvent: () => gs,
            DataPacket_Kind: () => ht,
            DefaultReconnectPolicy: () => Xi,
            DeviceUnsupportedError: () => Ks,
            DisconnectReason: () => Ye,
            EncryptionEvent: () => ms,
            EngineEvent: () => Bs,
            ExternalE2EEKeyProvider: () => _s,
            KeyHandlerEvent: () => ps,
            KeyProviderEvent: () => hs,
            LivekitError: () => As,
            LocalAudioTrack: () => Ra,
            LocalParticipant: () => bc,
            LocalTrack: () => Pa,
            LocalTrackPublication: () => hc,
            LocalTrackRecorder: () => Ea,
            LocalVideoTrack: () => Ba,
            LogLevel: () => Fi,
            LoggerNames: () => Bi,
            MediaDeviceFailure: () => Ls,
            Mutex: () => a,
            NegotiationError: () => zs,
            Participant: () => vc,
            ParticipantEvent: () => Fs,
            ParticipantKind: () => rt,
            PublishDataError: () => Js,
            PublishTrackError: () => Qs,
            RemoteAudioTrack: () => oc,
            RemoteParticipant: () => yc,
            RemoteTrack: () => rc,
            RemoteTrackPublication: () => kc,
            RemoteVideoTrack: () => ac,
            Room: () => Tc,
            RoomEvent: () => js,
            RpcError: () => ba,
            ScreenSharePresets: () => yr,
            SignalRequestError: () => Ys,
            SubscriptionError: () => Ze,
            Track: () => dr,
            TrackEvent: () => Vs,
            TrackInvalidError: () => Ws,
            TrackPublication: () => uc,
            TrackType: () => Ge,
            UnexpectedConnectionState: () => Hs,
            UnsupportedServer: () => Gs,
            VideoPreset: () => hr,
            VideoPresets: () => br,
            VideoPresets43: () => kr,
            VideoQuality: () => cr,
            attachToElement: () => lr,
            attributes: () => wc,
            compareVersions: () => Kr,
            createAudioAnalyser: () => io,
            createE2EEKey: () => Es,
            createKeyMaterialFromBuffer: () => Cs,
            createKeyMaterialFromString: () => Ts,
            createLocalAudioTrack: () => gc,
            createLocalScreenTracks: () => fc,
            createLocalTracks: () => pc,
            createLocalVideoTrack: () => mc,
            deriveKeys: () => ws,
            detachTrack: () => ur,
            facingModeFromDeviceLabel: () => jc,
            facingModeFromLocalTrack: () => Nc,
            getBrowser: () => er,
            getEmptyAudioStreamTrack: () => eo,
            getEmptyVideoStreamTrack: () => Zr,
            getLogger: () => Gi,
            importKey: () => ys,
            isAudioTrack: () => lo,
            isBackupCodec: () => gr,
            isBrowserSupported: () => xr,
            isE2EESupported: () => fs,
            isInsertableStreamSupported: () => bs,
            isLocalParticipant: () => vo,
            isLocalTrack: () => co,
            isRemoteParticipant: () => bo,
            isRemoteTrack: () => mo,
            isScriptTransformSupported: () => vs,
            isVideoFrame: () => ks,
            isVideoTrack: () => uo,
            needsRbspUnescaping: () => Rs,
            parseRbsp: () => Is,
            protocolVersion: () => rr,
            ratchet: () => Ps,
            setLogExtension: () => zi,
            setLogLevel: () => Hi,
            supportsAV1: () => Rr,
            supportsAdaptiveStream: () => Er,
            supportsDynacast: () => Pr,
            supportsVP9: () => Ir,
            version: () => sr,
            videoCodecs: () => mr,
            writeRbsp: () => xs,
          }));
        var n = i("./node_modules/process/browser.js");
        function s(e, t) {
          return (
            t.forEach(function (t) {
              t &&
                "string" != typeof t &&
                !Array.isArray(t) &&
                Object.keys(t).forEach(function (i) {
                  if ("default" !== i && !(i in e)) {
                    var n = Object.getOwnPropertyDescriptor(t, i);
                    Object.defineProperty(
                      e,
                      i,
                      n.get
                        ? n
                        : {
                            enumerable: !0,
                            get: function () {
                              return t[i];
                            },
                          },
                    );
                  }
                });
            }),
            Object.freeze(e)
          );
        }
        var r = Object.defineProperty,
          o = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? r(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class a {
          constructor() {
            (o(this, "_locking"),
              o(this, "_locks"),
              (this._locking = Promise.resolve()),
              (this._locks = 0));
          }
          isLocked() {
            return this._locks > 0;
          }
          lock() {
            let e;
            this._locks += 1;
            const t = new Promise(
                (t) =>
                  (e = () => {
                    ((this._locks -= 1), t());
                  }),
              ),
              i = this._locking.then(() => e);
            return ((this._locking = this._locking.then(() => t)), i);
          }
        }
        function c(e, t) {
          if (!e) throw new Error(t);
        }
        const d = 34028234663852886e22,
          l = -34028234663852886e22,
          u = 4294967295,
          h = 2147483647,
          p = -2147483648;
        function m(e) {
          if ("number" != typeof e)
            throw new Error("invalid int 32: " + typeof e);
          if (!Number.isInteger(e) || e > h || e < p)
            throw new Error("invalid int 32: " + e);
        }
        function g(e) {
          if ("number" != typeof e)
            throw new Error("invalid uint 32: " + typeof e);
          if (!Number.isInteger(e) || e > u || e < 0)
            throw new Error("invalid uint 32: " + e);
        }
        function f(e) {
          if ("number" != typeof e)
            throw new Error("invalid float 32: " + typeof e);
          if (Number.isFinite(e) && (e > d || e < l))
            throw new Error("invalid float 32: " + e);
        }
        const v = Symbol("@bufbuild/protobuf/enum-type");
        function b(e, t, i, n) {
          e[v] = k(
            t,
            i.map((t) => ({ no: t.no, name: t.name, localName: e[t.no] })),
          );
        }
        function k(e, t, i) {
          const n = Object.create(null),
            s = Object.create(null),
            r = [];
          for (const e of t) {
            const t = y(e);
            (r.push(t), (n[e.name] = t), (s[e.no] = t));
          }
          return {
            typeName: e,
            values: r,
            findName: (e) => n[e],
            findNumber: (e) => s[e],
          };
        }
        function y(e) {
          return "localName" in e
            ? e
            : Object.assign(Object.assign({}, e), { localName: e.name });
        }
        class T {
          equals(e) {
            return this.getType().runtime.util.equals(this.getType(), this, e);
          }
          clone() {
            return this.getType().runtime.util.clone(this);
          }
          fromBinary(e, t) {
            const i = this.getType().runtime.bin,
              n = i.makeReadOptions(t);
            return (
              i.readMessage(this, n.readerFactory(e), e.byteLength, n),
              this
            );
          }
          fromJson(e, t) {
            const i = this.getType(),
              n = i.runtime.json,
              s = n.makeReadOptions(t);
            return (n.readMessage(i, e, s, this), this);
          }
          fromJsonString(e, t) {
            let i;
            try {
              i = JSON.parse(e);
            } catch (e) {
              throw new Error(
                "cannot decode "
                  .concat(this.getType().typeName, " from JSON: ")
                  .concat(e instanceof Error ? e.message : String(e)),
              );
            }
            return this.fromJson(i, t);
          }
          toBinary(e) {
            const t = this.getType().runtime.bin,
              i = t.makeWriteOptions(e),
              n = i.writerFactory();
            return (t.writeMessage(this, n, i), n.finish());
          }
          toJson(e) {
            const t = this.getType().runtime.json,
              i = t.makeWriteOptions(e);
            return t.writeMessage(this, i);
          }
          toJsonString(e) {
            var t;
            const i = this.toJson(e);
            return JSON.stringify(
              i,
              null,
              null !== (t = null == e ? void 0 : e.prettySpaces) && void 0 !== t
                ? t
                : 0,
            );
          }
          toJSON() {
            return this.toJson({ emitDefaultValues: !0 });
          }
          getType() {
            return Object.getPrototypeOf(this).constructor;
          }
        }
        function C() {
          let e = 0,
            t = 0;
          for (let i = 0; i < 28; i += 7) {
            let n = this.buf[this.pos++];
            if (((e |= (127 & n) << i), 0 == (128 & n)))
              return (this.assertBounds(), [e, t]);
          }
          let i = this.buf[this.pos++];
          if (((e |= (15 & i) << 28), (t = (112 & i) >> 4), 0 == (128 & i)))
            return (this.assertBounds(), [e, t]);
          for (let i = 3; i <= 31; i += 7) {
            let n = this.buf[this.pos++];
            if (((t |= (127 & n) << i), 0 == (128 & n)))
              return (this.assertBounds(), [e, t]);
          }
          throw new Error("invalid varint");
        }
        function S(e, t, i) {
          for (let n = 0; n < 28; n += 7) {
            const s = e >>> n,
              r = !(s >>> 7 == 0 && 0 == t),
              o = 255 & (r ? 128 | s : s);
            if ((i.push(o), !r)) return;
          }
          const n = ((e >>> 28) & 15) | ((7 & t) << 4),
            s = !(t >> 3 == 0);
          if ((i.push(255 & (s ? 128 | n : n)), s)) {
            for (let e = 3; e < 31; e += 7) {
              const n = t >>> e,
                s = !(n >>> 7 == 0),
                r = 255 & (s ? 128 | n : n);
              if ((i.push(r), !s)) return;
            }
            i.push((t >>> 31) & 1);
          }
        }
        const w = 4294967296;
        function E(e) {
          const t = "-" === e[0];
          t && (e = e.slice(1));
          const i = 1e6;
          let n = 0,
            s = 0;
          function r(t, r) {
            const o = Number(e.slice(t, r));
            ((s *= i),
              (n = n * i + o),
              n >= w && ((s += (n / w) | 0), (n %= w)));
          }
          return (
            r(-24, -18),
            r(-18, -12),
            r(-12, -6),
            r(-6),
            t ? I(n, s) : R(n, s)
          );
        }
        function P(e, t) {
          if (
            (({ lo: e, hi: t } = (function (e, t) {
              return { lo: e >>> 0, hi: t >>> 0 };
            })(e, t)),
            t <= 2097151)
          )
            return String(w * t + e);
          const i = 16777215 & ((e >>> 24) | (t << 8)),
            n = (t >> 16) & 65535;
          let s = (16777215 & e) + 6777216 * i + 6710656 * n,
            r = i + 8147497 * n,
            o = 2 * n;
          const a = 1e7;
          return (
            s >= a && ((r += Math.floor(s / a)), (s %= a)),
            r >= a && ((o += Math.floor(r / a)), (r %= a)),
            o.toString() + O(r) + O(s)
          );
        }
        function R(e, t) {
          return { lo: 0 | e, hi: 0 | t };
        }
        function I(e, t) {
          return ((t = ~t), e ? (e = 1 + ~e) : (t += 1), R(e, t));
        }
        const O = (e) => {
          const t = String(e);
          return "0000000".slice(t.length) + t;
        };
        function D(e, t) {
          if (e >= 0) {
            for (; e > 127; ) (t.push((127 & e) | 128), (e >>>= 7));
            t.push(e);
          } else {
            for (let i = 0; i < 9; i++) (t.push((127 & e) | 128), (e >>= 7));
            t.push(1);
          }
        }
        function x() {
          let e = this.buf[this.pos++],
            t = 127 & e;
          if (0 == (128 & e)) return (this.assertBounds(), t);
          if (
            ((e = this.buf[this.pos++]), (t |= (127 & e) << 7), 0 == (128 & e))
          )
            return (this.assertBounds(), t);
          if (
            ((e = this.buf[this.pos++]), (t |= (127 & e) << 14), 0 == (128 & e))
          )
            return (this.assertBounds(), t);
          if (
            ((e = this.buf[this.pos++]), (t |= (127 & e) << 21), 0 == (128 & e))
          )
            return (this.assertBounds(), t);
          ((e = this.buf[this.pos++]), (t |= (15 & e) << 28));
          for (let t = 5; 0 != (128 & e) && t < 10; t++)
            e = this.buf[this.pos++];
          if (0 != (128 & e)) throw new Error("invalid varint");
          return (this.assertBounds(), t >>> 0);
        }
        const M = (function () {
          const e = new DataView(new ArrayBuffer(8));
          if (
            "function" == typeof BigInt &&
            "function" == typeof e.getBigInt64 &&
            "function" == typeof e.getBigUint64 &&
            "function" == typeof e.setBigInt64 &&
            "function" == typeof e.setBigUint64 &&
            ("object" != typeof n ||
              "object" != typeof n.env ||
              "1" !== n.env.BUF_BIGINT_DISABLE)
          ) {
            const t = BigInt("-9223372036854775808"),
              i = BigInt("9223372036854775807"),
              n = BigInt("0"),
              s = BigInt("18446744073709551615");
            return {
              zero: BigInt(0),
              supported: !0,
              parse(e) {
                const n = "bigint" == typeof e ? e : BigInt(e);
                if (n > i || n < t)
                  throw new Error("int64 invalid: ".concat(e));
                return n;
              },
              uParse(e) {
                const t = "bigint" == typeof e ? e : BigInt(e);
                if (t > s || t < n)
                  throw new Error("uint64 invalid: ".concat(e));
                return t;
              },
              enc(t) {
                return (
                  e.setBigInt64(0, this.parse(t), !0),
                  { lo: e.getInt32(0, !0), hi: e.getInt32(4, !0) }
                );
              },
              uEnc(t) {
                return (
                  e.setBigInt64(0, this.uParse(t), !0),
                  { lo: e.getInt32(0, !0), hi: e.getInt32(4, !0) }
                );
              },
              dec: (t, i) => (
                e.setInt32(0, t, !0),
                e.setInt32(4, i, !0),
                e.getBigInt64(0, !0)
              ),
              uDec: (t, i) => (
                e.setInt32(0, t, !0),
                e.setInt32(4, i, !0),
                e.getBigUint64(0, !0)
              ),
            };
          }
          const t = (e) => c(/^-?[0-9]+$/.test(e), "int64 invalid: ".concat(e)),
            i = (e) => c(/^[0-9]+$/.test(e), "uint64 invalid: ".concat(e));
          return {
            zero: "0",
            supported: !1,
            parse: (e) => ("string" != typeof e && (e = e.toString()), t(e), e),
            uParse: (e) => (
              "string" != typeof e && (e = e.toString()),
              i(e),
              e
            ),
            enc: (e) => (
              "string" != typeof e && (e = e.toString()),
              t(e),
              E(e)
            ),
            uEnc: (e) => (
              "string" != typeof e && (e = e.toString()),
              i(e),
              E(e)
            ),
            dec: (e, t) =>
              (function (e, t) {
                let i = R(e, t);
                const n = 2147483648 & i.hi;
                n && (i = I(i.lo, i.hi));
                const s = P(i.lo, i.hi);
                return n ? "-" + s : s;
              })(e, t),
            uDec: (e, t) => P(e, t),
          };
        })();
        var _, A, N;
        function L(e, t, i) {
          if (t === i) return !0;
          if (e == _.BYTES) {
            if (!(t instanceof Uint8Array && i instanceof Uint8Array))
              return !1;
            if (t.length !== i.length) return !1;
            for (let e = 0; e < t.length; e++) if (t[e] !== i[e]) return !1;
            return !0;
          }
          switch (e) {
            case _.UINT64:
            case _.FIXED64:
            case _.INT64:
            case _.SFIXED64:
            case _.SINT64:
              return t == i;
          }
          return !1;
        }
        function U(e, t) {
          switch (e) {
            case _.BOOL:
              return !1;
            case _.UINT64:
            case _.FIXED64:
            case _.INT64:
            case _.SFIXED64:
            case _.SINT64:
              return 0 == t ? M.zero : "0";
            case _.DOUBLE:
            case _.FLOAT:
              return 0;
            case _.BYTES:
              return new Uint8Array(0);
            case _.STRING:
              return "";
            default:
              return 0;
          }
        }
        function j(e, t) {
          switch (e) {
            case _.BOOL:
              return !1 === t;
            case _.STRING:
              return "" === t;
            case _.BYTES:
              return t instanceof Uint8Array && !t.byteLength;
            default:
              return 0 == t;
          }
        }
        (!(function (e) {
          ((e[(e.DOUBLE = 1)] = "DOUBLE"),
            (e[(e.FLOAT = 2)] = "FLOAT"),
            (e[(e.INT64 = 3)] = "INT64"),
            (e[(e.UINT64 = 4)] = "UINT64"),
            (e[(e.INT32 = 5)] = "INT32"),
            (e[(e.FIXED64 = 6)] = "FIXED64"),
            (e[(e.FIXED32 = 7)] = "FIXED32"),
            (e[(e.BOOL = 8)] = "BOOL"),
            (e[(e.STRING = 9)] = "STRING"),
            (e[(e.BYTES = 12)] = "BYTES"),
            (e[(e.UINT32 = 13)] = "UINT32"),
            (e[(e.SFIXED32 = 15)] = "SFIXED32"),
            (e[(e.SFIXED64 = 16)] = "SFIXED64"),
            (e[(e.SINT32 = 17)] = "SINT32"),
            (e[(e.SINT64 = 18)] = "SINT64"));
        })(_ || (_ = {})),
          (function (e) {
            ((e[(e.BIGINT = 0)] = "BIGINT"), (e[(e.STRING = 1)] = "STRING"));
          })(A || (A = {})),
          (function (e) {
            ((e[(e.Varint = 0)] = "Varint"),
              (e[(e.Bit64 = 1)] = "Bit64"),
              (e[(e.LengthDelimited = 2)] = "LengthDelimited"),
              (e[(e.StartGroup = 3)] = "StartGroup"),
              (e[(e.EndGroup = 4)] = "EndGroup"),
              (e[(e.Bit32 = 5)] = "Bit32"));
          })(N || (N = {})));
        class F {
          constructor(e) {
            ((this.stack = []),
              (this.textEncoder = null != e ? e : new TextEncoder()),
              (this.chunks = []),
              (this.buf = []));
          }
          finish() {
            this.chunks.push(new Uint8Array(this.buf));
            let e = 0;
            for (let t = 0; t < this.chunks.length; t++)
              e += this.chunks[t].length;
            let t = new Uint8Array(e),
              i = 0;
            for (let e = 0; e < this.chunks.length; e++)
              (t.set(this.chunks[e], i), (i += this.chunks[e].length));
            return ((this.chunks = []), t);
          }
          fork() {
            return (
              this.stack.push({ chunks: this.chunks, buf: this.buf }),
              (this.chunks = []),
              (this.buf = []),
              this
            );
          }
          join() {
            let e = this.finish(),
              t = this.stack.pop();
            if (!t) throw new Error("invalid state, fork stack empty");
            return (
              (this.chunks = t.chunks),
              (this.buf = t.buf),
              this.uint32(e.byteLength),
              this.raw(e)
            );
          }
          tag(e, t) {
            return this.uint32(((e << 3) | t) >>> 0);
          }
          raw(e) {
            return (
              this.buf.length &&
                (this.chunks.push(new Uint8Array(this.buf)), (this.buf = [])),
              this.chunks.push(e),
              this
            );
          }
          uint32(e) {
            for (g(e); e > 127; ) (this.buf.push((127 & e) | 128), (e >>>= 7));
            return (this.buf.push(e), this);
          }
          int32(e) {
            return (m(e), D(e, this.buf), this);
          }
          bool(e) {
            return (this.buf.push(e ? 1 : 0), this);
          }
          bytes(e) {
            return (this.uint32(e.byteLength), this.raw(e));
          }
          string(e) {
            let t = this.textEncoder.encode(e);
            return (this.uint32(t.byteLength), this.raw(t));
          }
          float(e) {
            f(e);
            let t = new Uint8Array(4);
            return (new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t));
          }
          double(e) {
            let t = new Uint8Array(8);
            return (new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t));
          }
          fixed32(e) {
            g(e);
            let t = new Uint8Array(4);
            return (new DataView(t.buffer).setUint32(0, e, !0), this.raw(t));
          }
          sfixed32(e) {
            m(e);
            let t = new Uint8Array(4);
            return (new DataView(t.buffer).setInt32(0, e, !0), this.raw(t));
          }
          sint32(e) {
            return (
              m(e),
              D((e = ((e << 1) ^ (e >> 31)) >>> 0), this.buf),
              this
            );
          }
          sfixed64(e) {
            let t = new Uint8Array(8),
              i = new DataView(t.buffer),
              n = M.enc(e);
            return (
              i.setInt32(0, n.lo, !0),
              i.setInt32(4, n.hi, !0),
              this.raw(t)
            );
          }
          fixed64(e) {
            let t = new Uint8Array(8),
              i = new DataView(t.buffer),
              n = M.uEnc(e);
            return (
              i.setInt32(0, n.lo, !0),
              i.setInt32(4, n.hi, !0),
              this.raw(t)
            );
          }
          int64(e) {
            let t = M.enc(e);
            return (S(t.lo, t.hi, this.buf), this);
          }
          sint64(e) {
            let t = M.enc(e),
              i = t.hi >> 31;
            return (
              S((t.lo << 1) ^ i, ((t.hi << 1) | (t.lo >>> 31)) ^ i, this.buf),
              this
            );
          }
          uint64(e) {
            let t = M.uEnc(e);
            return (S(t.lo, t.hi, this.buf), this);
          }
        }
        class B {
          constructor(e, t) {
            ((this.varint64 = C),
              (this.uint32 = x),
              (this.buf = e),
              (this.len = e.length),
              (this.pos = 0),
              (this.view = new DataView(e.buffer, e.byteOffset, e.byteLength)),
              (this.textDecoder = null != t ? t : new TextDecoder()));
          }
          tag() {
            let e = this.uint32(),
              t = e >>> 3,
              i = 7 & e;
            if (t <= 0 || i < 0 || i > 5)
              throw new Error("illegal tag: field no " + t + " wire type " + i);
            return [t, i];
          }
          skip(e, t) {
            let i = this.pos;
            switch (e) {
              case N.Varint:
                for (; 128 & this.buf[this.pos++]; );
                break;
              case N.Bit64:
                this.pos += 4;
              case N.Bit32:
                this.pos += 4;
                break;
              case N.LengthDelimited:
                let i = this.uint32();
                this.pos += i;
                break;
              case N.StartGroup:
                for (;;) {
                  const [e, i] = this.tag();
                  if (i === N.EndGroup) {
                    if (void 0 !== t && e !== t)
                      throw new Error("invalid end group tag");
                    break;
                  }
                  this.skip(i, e);
                }
                break;
              default:
                throw new Error("cant skip wire type " + e);
            }
            return (this.assertBounds(), this.buf.subarray(i, this.pos));
          }
          assertBounds() {
            if (this.pos > this.len) throw new RangeError("premature EOF");
          }
          int32() {
            return 0 | this.uint32();
          }
          sint32() {
            let e = this.uint32();
            return (e >>> 1) ^ -(1 & e);
          }
          int64() {
            return M.dec(...this.varint64());
          }
          uint64() {
            return M.uDec(...this.varint64());
          }
          sint64() {
            let [e, t] = this.varint64(),
              i = -(1 & e);
            return (
              (e = ((e >>> 1) | ((1 & t) << 31)) ^ i),
              (t = (t >>> 1) ^ i),
              M.dec(e, t)
            );
          }
          bool() {
            let [e, t] = this.varint64();
            return 0 !== e || 0 !== t;
          }
          fixed32() {
            return this.view.getUint32((this.pos += 4) - 4, !0);
          }
          sfixed32() {
            return this.view.getInt32((this.pos += 4) - 4, !0);
          }
          fixed64() {
            return M.uDec(this.sfixed32(), this.sfixed32());
          }
          sfixed64() {
            return M.dec(this.sfixed32(), this.sfixed32());
          }
          float() {
            return this.view.getFloat32((this.pos += 4) - 4, !0);
          }
          double() {
            return this.view.getFloat64((this.pos += 8) - 8, !0);
          }
          bytes() {
            let e = this.uint32(),
              t = this.pos;
            return (
              (this.pos += e),
              this.assertBounds(),
              this.buf.subarray(t, t + e)
            );
          }
          string() {
            return this.textDecoder.decode(this.bytes());
          }
        }
        function V(e) {
          const t = e.field.localName,
            i = Object.create(null);
          return (
            (i[t] = (function (e) {
              const t = e.field;
              if (t.repeated) return [];
              if (void 0 !== t.default) return t.default;
              switch (t.kind) {
                case "enum":
                  return t.T.values[0].no;
                case "scalar":
                  return U(t.T, t.L);
                case "message":
                  const e = t.T,
                    i = new e();
                  return e.fieldWrapper ? e.fieldWrapper.unwrapField(i) : i;
                case "map":
                  throw "map fields are not allowed to be extensions";
              }
            })(e)),
            [i, () => i[t]]
          );
        }
        let q =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
              "",
            ),
          K = [];
        for (let e = 0; e < q.length; e++) K[q[e].charCodeAt(0)] = e;
        ((K["-".charCodeAt(0)] = q.indexOf("+")),
          (K["_".charCodeAt(0)] = q.indexOf("/")));
        const W = {
          dec(e) {
            let t = (3 * e.length) / 4;
            "=" == e[e.length - 2]
              ? (t -= 2)
              : "=" == e[e.length - 1] && (t -= 1);
            let i,
              n = new Uint8Array(t),
              s = 0,
              r = 0,
              o = 0;
            for (let t = 0; t < e.length; t++) {
              if (((i = K[e.charCodeAt(t)]), void 0 === i))
                switch (e[t]) {
                  case "=":
                    r = 0;
                  case "\n":
                  case "\r":
                  case "\t":
                  case " ":
                    continue;
                  default:
                    throw Error("invalid base64 string.");
                }
              switch (r) {
                case 0:
                  ((o = i), (r = 1));
                  break;
                case 1:
                  ((n[s++] = (o << 2) | ((48 & i) >> 4)), (o = i), (r = 2));
                  break;
                case 2:
                  ((n[s++] = ((15 & o) << 4) | ((60 & i) >> 2)),
                    (o = i),
                    (r = 3));
                  break;
                case 3:
                  ((n[s++] = ((3 & o) << 6) | i), (r = 0));
              }
            }
            if (1 == r) throw Error("invalid base64 string.");
            return n.subarray(0, s);
          },
          enc(e) {
            let t,
              i = "",
              n = 0,
              s = 0;
            for (let r = 0; r < e.length; r++)
              switch (((t = e[r]), n)) {
                case 0:
                  ((i += q[t >> 2]), (s = (3 & t) << 4), (n = 1));
                  break;
                case 1:
                  ((i += q[s | (t >> 4)]), (s = (15 & t) << 2), (n = 2));
                  break;
                case 2:
                  ((i += q[s | (t >> 6)]), (i += q[63 & t]), (n = 0));
              }
            return (n && ((i += q[s]), (i += "="), 1 == n && (i += "=")), i);
          },
        };
        function G(e, t, i) {
          J(t, e);
          const n = t.runtime.bin.makeReadOptions(i),
            s = (function (e, t) {
              if (!t.repeated && ("enum" == t.kind || "scalar" == t.kind)) {
                for (let i = e.length - 1; i >= 0; --i)
                  if (e[i].no == t.no) return [e[i]];
                return [];
              }
              return e.filter((e) => e.no === t.no);
            })(e.getType().runtime.bin.listUnknownFields(e), t.field),
            [r, o] = V(t);
          for (const e of s)
            t.runtime.bin.readField(
              r,
              n.readerFactory(e.data),
              t.field,
              e.wireType,
              n,
            );
          return o();
        }
        function H(e, t, i, n) {
          J(t, e);
          const s = t.runtime.bin.makeReadOptions(n),
            r = t.runtime.bin.makeWriteOptions(n);
          if (z(e, t)) {
            const i = e
              .getType()
              .runtime.bin.listUnknownFields(e)
              .filter((e) => e.no != t.field.no);
            e.getType().runtime.bin.discardUnknownFields(e);
            for (const t of i)
              e.getType().runtime.bin.onUnknownField(
                e,
                t.no,
                t.wireType,
                t.data,
              );
          }
          const o = r.writerFactory();
          let a = t.field;
          (a.opt ||
            a.repeated ||
            ("enum" != a.kind && "scalar" != a.kind) ||
            (a = Object.assign(Object.assign({}, t.field), { opt: !0 })),
            t.runtime.bin.writeField(a, i, o, r));
          const c = s.readerFactory(o.finish());
          for (; c.pos < c.len; ) {
            const [t, i] = c.tag(),
              n = c.skip(i, t);
            e.getType().runtime.bin.onUnknownField(e, t, i, n);
          }
        }
        function z(e, t) {
          const i = e.getType();
          return (
            t.extendee.typeName === i.typeName &&
            !!i.runtime.bin.listUnknownFields(e).find((e) => e.no == t.field.no)
          );
        }
        function J(e, t) {
          c(
            e.extendee.typeName == t.getType().typeName,
            "extension "
              .concat(e.typeName, " can only be applied to message ")
              .concat(e.extendee.typeName),
          );
        }
        function Q(e, t) {
          const i = e.localName;
          if (e.repeated) return t[i].length > 0;
          if (e.oneof) return t[e.oneof.localName].case === i;
          switch (e.kind) {
            case "enum":
            case "scalar":
              return e.opt || e.req
                ? void 0 !== t[i]
                : "enum" == e.kind
                  ? t[i] !== e.T.values[0].no
                  : !j(e.T, t[i]);
            case "message":
              return void 0 !== t[i];
            case "map":
              return Object.keys(t[i]).length > 0;
          }
        }
        function Y(e, t) {
          const i = e.localName,
            n = !e.opt && !e.req;
          if (e.repeated) t[i] = [];
          else if (e.oneof) t[e.oneof.localName] = { case: void 0 };
          else
            switch (e.kind) {
              case "map":
                t[i] = {};
                break;
              case "enum":
                t[i] = n ? e.T.values[0].no : void 0;
                break;
              case "scalar":
                t[i] = n ? U(e.T, e.L) : void 0;
                break;
              case "message":
                t[i] = void 0;
            }
        }
        function X(e, t) {
          if (null === e || "object" != typeof e) return !1;
          if (
            !Object.getOwnPropertyNames(T.prototype).every(
              (t) => t in e && "function" == typeof e[t],
            )
          )
            return !1;
          const i = e.getType();
          return (
            null !== i &&
            "function" == typeof i &&
            "typeName" in i &&
            "string" == typeof i.typeName &&
            (void 0 === t || i.typeName == t.typeName)
          );
        }
        function Z(e, t) {
          return X(t) || !e.fieldWrapper ? t : e.fieldWrapper.wrapField(t);
        }
        (_.DOUBLE,
          _.FLOAT,
          _.INT64,
          _.UINT64,
          _.INT32,
          _.UINT32,
          _.BOOL,
          _.STRING,
          _.BYTES);
        const $ = { ignoreUnknownFields: !1 },
          ee = {
            emitDefaultValues: !1,
            enumAsInteger: !1,
            useProtoFieldName: !1,
            prettySpaces: 0,
          };
        const te = Symbol(),
          ie = Symbol();
        function ne(e) {
          if (null === e) return "null";
          switch (typeof e) {
            case "object":
              return Array.isArray(e) ? "array" : "object";
            case "string":
              return e.length > 100
                ? "string"
                : '"'.concat(e.split('"').join('\\"'), '"');
            default:
              return String(e);
          }
        }
        function se(e, t, i, n, s) {
          let r = i.localName;
          if (i.repeated) {
            if ((c("map" != i.kind), null === t)) return;
            if (!Array.isArray(t))
              throw new Error(
                "cannot decode field "
                  .concat(s.typeName, ".")
                  .concat(i.name, " from JSON: ")
                  .concat(ne(t)),
              );
            const o = e[r];
            for (const e of t) {
              if (null === e)
                throw new Error(
                  "cannot decode field "
                    .concat(s.typeName, ".")
                    .concat(i.name, " from JSON: ")
                    .concat(ne(e)),
                );
              switch (i.kind) {
                case "message":
                  o.push(i.T.fromJson(e, n));
                  break;
                case "enum":
                  const t = ae(i.T, e, n.ignoreUnknownFields, !0);
                  t !== ie && o.push(t);
                  break;
                case "scalar":
                  try {
                    o.push(oe(i.T, e, i.L, !0));
                  } catch (t) {
                    let n = "cannot decode field "
                      .concat(s.typeName, ".")
                      .concat(i.name, " from JSON: ")
                      .concat(ne(e));
                    throw (
                      t instanceof Error &&
                        t.message.length > 0 &&
                        (n += ": ".concat(t.message)),
                      new Error(n)
                    );
                  }
              }
            }
          } else if ("map" == i.kind) {
            if (null === t) return;
            if ("object" != typeof t || Array.isArray(t))
              throw new Error(
                "cannot decode field "
                  .concat(s.typeName, ".")
                  .concat(i.name, " from JSON: ")
                  .concat(ne(t)),
              );
            const o = e[r];
            for (const [e, r] of Object.entries(t)) {
              if (null === r)
                throw new Error(
                  "cannot decode field "
                    .concat(s.typeName, ".")
                    .concat(i.name, " from JSON: map value null"),
                );
              let a;
              try {
                a = re(i.K, e);
              } catch (e) {
                let n = "cannot decode map key for field "
                  .concat(s.typeName, ".")
                  .concat(i.name, " from JSON: ")
                  .concat(ne(t));
                throw (
                  e instanceof Error &&
                    e.message.length > 0 &&
                    (n += ": ".concat(e.message)),
                  new Error(n)
                );
              }
              switch (i.V.kind) {
                case "message":
                  o[a] = i.V.T.fromJson(r, n);
                  break;
                case "enum":
                  const e = ae(i.V.T, r, n.ignoreUnknownFields, !0);
                  e !== ie && (o[a] = e);
                  break;
                case "scalar":
                  try {
                    o[a] = oe(i.V.T, r, A.BIGINT, !0);
                  } catch (e) {
                    let n = "cannot decode map value for field "
                      .concat(s.typeName, ".")
                      .concat(i.name, " from JSON: ")
                      .concat(ne(t));
                    throw (
                      e instanceof Error &&
                        e.message.length > 0 &&
                        (n += ": ".concat(e.message)),
                      new Error(n)
                    );
                  }
              }
            }
          } else
            switch (
              (i.oneof &&
                ((e = e[i.oneof.localName] = { case: r }), (r = "value")),
              i.kind)
            ) {
              case "message":
                const o = i.T;
                if (null === t && "google.protobuf.Value" != o.typeName) return;
                let a = e[r];
                X(a)
                  ? a.fromJson(t, n)
                  : ((e[r] = a = o.fromJson(t, n)),
                    o.fieldWrapper &&
                      !i.oneof &&
                      (e[r] = o.fieldWrapper.unwrapField(a)));
                break;
              case "enum":
                const c = ae(i.T, t, n.ignoreUnknownFields, !1);
                switch (c) {
                  case te:
                    Y(i, e);
                    break;
                  case ie:
                    break;
                  default:
                    e[r] = c;
                }
                break;
              case "scalar":
                try {
                  const n = oe(i.T, t, i.L, !1);
                  n === te ? Y(i, e) : (e[r] = n);
                } catch (e) {
                  let n = "cannot decode field "
                    .concat(s.typeName, ".")
                    .concat(i.name, " from JSON: ")
                    .concat(ne(t));
                  throw (
                    e instanceof Error &&
                      e.message.length > 0 &&
                      (n += ": ".concat(e.message)),
                    new Error(n)
                  );
                }
            }
        }
        function re(e, t) {
          if (e === _.BOOL)
            switch (t) {
              case "true":
                t = !0;
                break;
              case "false":
                t = !1;
            }
          return oe(e, t, A.BIGINT, !0).toString();
        }
        function oe(e, t, i, n) {
          if (null === t) return n ? U(e, i) : te;
          switch (e) {
            case _.DOUBLE:
            case _.FLOAT:
              if ("NaN" === t) return Number.NaN;
              if ("Infinity" === t) return Number.POSITIVE_INFINITY;
              if ("-Infinity" === t) return Number.NEGATIVE_INFINITY;
              if ("" === t) break;
              if ("string" == typeof t && t.trim().length !== t.length) break;
              if ("string" != typeof t && "number" != typeof t) break;
              const n = Number(t);
              if (Number.isNaN(n)) break;
              if (!Number.isFinite(n)) break;
              return (e == _.FLOAT && f(n), n);
            case _.INT32:
            case _.FIXED32:
            case _.SFIXED32:
            case _.SINT32:
            case _.UINT32:
              let s;
              if (
                ("number" == typeof t
                  ? (s = t)
                  : "string" == typeof t &&
                    t.length > 0 &&
                    t.trim().length === t.length &&
                    (s = Number(t)),
                void 0 === s)
              )
                break;
              return (e == _.UINT32 || e == _.FIXED32 ? g(s) : m(s), s);
            case _.INT64:
            case _.SFIXED64:
            case _.SINT64:
              if ("number" != typeof t && "string" != typeof t) break;
              const r = M.parse(t);
              return i ? r.toString() : r;
            case _.FIXED64:
            case _.UINT64:
              if ("number" != typeof t && "string" != typeof t) break;
              const o = M.uParse(t);
              return i ? o.toString() : o;
            case _.BOOL:
              if ("boolean" != typeof t) break;
              return t;
            case _.STRING:
              if ("string" != typeof t) break;
              try {
                encodeURIComponent(t);
              } catch (e) {
                throw new Error("invalid UTF8");
              }
              return t;
            case _.BYTES:
              if ("" === t) return new Uint8Array(0);
              if ("string" != typeof t) break;
              return W.dec(t);
          }
          throw new Error();
        }
        function ae(e, t, i, n) {
          if (null === t)
            return "google.protobuf.NullValue" == e.typeName
              ? 0
              : n
                ? e.values[0].no
                : te;
          switch (typeof t) {
            case "number":
              if (Number.isInteger(t)) return t;
              break;
            case "string":
              const n = e.findName(t);
              if (void 0 !== n) return n.no;
              if (i) return ie;
          }
          throw new Error(
            "cannot decode enum "
              .concat(e.typeName, " from JSON: ")
              .concat(ne(t)),
          );
        }
        function ce(e) {
          return !(
            !e.repeated &&
            "map" != e.kind &&
            (e.oneof || "message" == e.kind || e.opt || e.req)
          );
        }
        function de(e, t, i) {
          if ("map" == e.kind) {
            c("object" == typeof t && null != t);
            const n = {},
              s = Object.entries(t);
            switch (e.V.kind) {
              case "scalar":
                for (const [t, i] of s) n[t.toString()] = ue(e.V.T, i);
                break;
              case "message":
                for (const [e, t] of s) n[e.toString()] = t.toJson(i);
                break;
              case "enum":
                const t = e.V.T;
                for (const [e, r] of s)
                  n[e.toString()] = le(t, r, i.enumAsInteger);
            }
            return i.emitDefaultValues || s.length > 0 ? n : void 0;
          }
          if (e.repeated) {
            c(Array.isArray(t));
            const n = [];
            switch (e.kind) {
              case "scalar":
                for (let i = 0; i < t.length; i++) n.push(ue(e.T, t[i]));
                break;
              case "enum":
                for (let s = 0; s < t.length; s++)
                  n.push(le(e.T, t[s], i.enumAsInteger));
                break;
              case "message":
                for (let e = 0; e < t.length; e++) n.push(t[e].toJson(i));
            }
            return i.emitDefaultValues || n.length > 0 ? n : void 0;
          }
          switch (e.kind) {
            case "scalar":
              return ue(e.T, t);
            case "enum":
              return le(e.T, t, i.enumAsInteger);
            case "message":
              return Z(e.T, t).toJson(i);
          }
        }
        function le(e, t, i) {
          var n;
          if (
            (c("number" == typeof t), "google.protobuf.NullValue" == e.typeName)
          )
            return null;
          if (i) return t;
          const s = e.findNumber(t);
          return null !== (n = null == s ? void 0 : s.name) && void 0 !== n
            ? n
            : t;
        }
        function ue(e, t) {
          switch (e) {
            case _.INT32:
            case _.SFIXED32:
            case _.SINT32:
            case _.FIXED32:
            case _.UINT32:
              return (c("number" == typeof t), t);
            case _.FLOAT:
            case _.DOUBLE:
              return (
                c("number" == typeof t),
                Number.isNaN(t)
                  ? "NaN"
                  : t === Number.POSITIVE_INFINITY
                    ? "Infinity"
                    : t === Number.NEGATIVE_INFINITY
                      ? "-Infinity"
                      : t
              );
            case _.STRING:
              return (c("string" == typeof t), t);
            case _.BOOL:
              return (c("boolean" == typeof t), t);
            case _.UINT64:
            case _.FIXED64:
            case _.INT64:
            case _.SFIXED64:
            case _.SINT64:
              return (
                c(
                  "bigint" == typeof t ||
                    "string" == typeof t ||
                    "number" == typeof t,
                ),
                t.toString()
              );
            case _.BYTES:
              return (c(t instanceof Uint8Array), W.enc(t));
          }
        }
        const he = Symbol("@bufbuild/protobuf/unknown-fields"),
          pe = { readUnknownFields: !0, readerFactory: (e) => new B(e) },
          me = { writeUnknownFields: !0, writerFactory: () => new F() };
        function ge(e, t, i, n, s) {
          let { repeated: r, localName: o } = i;
          switch (
            (i.oneof &&
              ((e = e[i.oneof.localName]).case != o && delete e.value,
              (e.case = o),
              (o = "value")),
            i.kind)
          ) {
            case "scalar":
            case "enum":
              const a = "enum" == i.kind ? _.INT32 : i.T;
              let c = be;
              if (("scalar" == i.kind && i.L > 0 && (c = ve), r)) {
                let i = e[o];
                if (n == N.LengthDelimited && a != _.STRING && a != _.BYTES) {
                  let e = t.uint32() + t.pos;
                  for (; t.pos < e; ) i.push(c(t, a));
                } else i.push(c(t, a));
              } else e[o] = c(t, a);
              break;
            case "message":
              const d = i.T;
              r
                ? e[o].push(fe(t, new d(), s, i))
                : X(e[o])
                  ? fe(t, e[o], s, i)
                  : ((e[o] = fe(t, new d(), s, i)),
                    !d.fieldWrapper ||
                      i.oneof ||
                      i.repeated ||
                      (e[o] = d.fieldWrapper.unwrapField(e[o])));
              break;
            case "map":
              let [l, u] = (function (e, t, i) {
                const n = t.uint32(),
                  s = t.pos + n;
                let r, o;
                for (; t.pos < s; ) {
                  const [n] = t.tag();
                  switch (n) {
                    case 1:
                      r = be(t, e.K);
                      break;
                    case 2:
                      switch (e.V.kind) {
                        case "scalar":
                          o = be(t, e.V.T);
                          break;
                        case "enum":
                          o = t.int32();
                          break;
                        case "message":
                          o = fe(t, new e.V.T(), i, void 0);
                      }
                  }
                }
                if (
                  (void 0 === r && (r = U(e.K, A.BIGINT)),
                  "string" != typeof r &&
                    "number" != typeof r &&
                    (r = r.toString()),
                  void 0 === o)
                )
                  switch (e.V.kind) {
                    case "scalar":
                      o = U(e.V.T, A.BIGINT);
                      break;
                    case "enum":
                      o = e.V.T.values[0].no;
                      break;
                    case "message":
                      o = new e.V.T();
                  }
                return [r, o];
              })(i, t, s);
              e[o][l] = u;
          }
        }
        function fe(e, t, i, n) {
          const s = t.getType().runtime.bin,
            r = null == n ? void 0 : n.delimited;
          return (s.readMessage(t, e, r ? n.no : e.uint32(), i, r), t);
        }
        function ve(e, t) {
          const i = be(e, t);
          return "bigint" == typeof i ? i.toString() : i;
        }
        function be(e, t) {
          switch (t) {
            case _.STRING:
              return e.string();
            case _.BOOL:
              return e.bool();
            case _.DOUBLE:
              return e.double();
            case _.FLOAT:
              return e.float();
            case _.INT32:
              return e.int32();
            case _.INT64:
              return e.int64();
            case _.UINT64:
              return e.uint64();
            case _.FIXED64:
              return e.fixed64();
            case _.BYTES:
              return e.bytes();
            case _.FIXED32:
              return e.fixed32();
            case _.SFIXED32:
              return e.sfixed32();
            case _.SFIXED64:
              return e.sfixed64();
            case _.SINT64:
              return e.sint64();
            case _.UINT32:
              return e.uint32();
            case _.SINT32:
              return e.sint32();
          }
        }
        function ke(e, t, i, n) {
          c(void 0 !== t);
          const s = e.repeated;
          switch (e.kind) {
            case "scalar":
            case "enum":
              let r = "enum" == e.kind ? _.INT32 : e.T;
              if (s)
                if ((c(Array.isArray(t)), e.packed))
                  !(function (e, t, i, n) {
                    if (!n.length) return;
                    e.tag(i, N.LengthDelimited).fork();
                    let [, s] = Se(t);
                    for (let t = 0; t < n.length; t++) e[s](n[t]);
                    e.join();
                  })(i, r, e.no, t);
                else for (const n of t) Ce(i, r, e.no, n);
              else Ce(i, r, e.no, t);
              break;
            case "message":
              if (s) {
                c(Array.isArray(t));
                for (const s of t) Te(i, n, e, s);
              } else Te(i, n, e, t);
              break;
            case "map":
              c("object" == typeof t && null != t);
              for (const [s, r] of Object.entries(t)) ye(i, n, e, s, r);
          }
        }
        function ye(e, t, i, n, s) {
          (e.tag(i.no, N.LengthDelimited), e.fork());
          let r = n;
          switch (i.K) {
            case _.INT32:
            case _.FIXED32:
            case _.UINT32:
            case _.SFIXED32:
            case _.SINT32:
              r = Number.parseInt(n);
              break;
            case _.BOOL:
              (c("true" == n || "false" == n), (r = "true" == n));
          }
          switch ((Ce(e, i.K, 1, r), i.V.kind)) {
            case "scalar":
              Ce(e, i.V.T, 2, s);
              break;
            case "enum":
              Ce(e, _.INT32, 2, s);
              break;
            case "message":
              (c(void 0 !== s),
                e.tag(2, N.LengthDelimited).bytes(s.toBinary(t)));
          }
          e.join();
        }
        function Te(e, t, i, n) {
          const s = Z(i.T, n);
          i.delimited
            ? e.tag(i.no, N.StartGroup).raw(s.toBinary(t)).tag(i.no, N.EndGroup)
            : e.tag(i.no, N.LengthDelimited).bytes(s.toBinary(t));
        }
        function Ce(e, t, i, n) {
          c(void 0 !== n);
          let [s, r] = Se(t);
          e.tag(i, s)[r](n);
        }
        function Se(e) {
          let t = N.Varint;
          switch (e) {
            case _.BYTES:
            case _.STRING:
              t = N.LengthDelimited;
              break;
            case _.DOUBLE:
            case _.FIXED64:
            case _.SFIXED64:
              t = N.Bit64;
              break;
            case _.FIXED32:
            case _.SFIXED32:
            case _.FLOAT:
              t = N.Bit32;
          }
          return [t, _[e].toLowerCase()];
        }
        function we(e) {
          if (void 0 === e) return e;
          if (X(e)) return e.clone();
          if (e instanceof Uint8Array) {
            const t = new Uint8Array(e.byteLength);
            return (t.set(e), t);
          }
          return e;
        }
        function Ee(e) {
          return e instanceof Uint8Array ? e : new Uint8Array(e);
        }
        class Pe {
          constructor(e, t) {
            ((this._fields = e), (this._normalizer = t));
          }
          findJsonName(e) {
            if (!this.jsonNames) {
              const e = {};
              for (const t of this.list()) e[t.jsonName] = e[t.name] = t;
              this.jsonNames = e;
            }
            return this.jsonNames[e];
          }
          find(e) {
            if (!this.numbers) {
              const e = {};
              for (const t of this.list()) e[t.no] = t;
              this.numbers = e;
            }
            return this.numbers[e];
          }
          list() {
            return (
              this.all || (this.all = this._normalizer(this._fields)),
              this.all
            );
          }
          byNumber() {
            return (
              this.numbersAsc ||
                (this.numbersAsc = this.list()
                  .concat()
                  .sort((e, t) => e.no - t.no)),
              this.numbersAsc
            );
          }
          byMember() {
            if (!this.members) {
              this.members = [];
              const e = this.members;
              let t;
              for (const i of this.list())
                i.oneof
                  ? i.oneof !== t && ((t = i.oneof), e.push(t))
                  : e.push(i);
            }
            return this.members;
          }
        }
        function Re(e, t) {
          const i = Oe(e);
          return t ? i : Ae(_e(i));
        }
        const Ie = Oe;
        function Oe(e) {
          let t = !1;
          const i = [];
          for (let n = 0; n < e.length; n++) {
            let s = e.charAt(n);
            switch (s) {
              case "_":
                t = !0;
                break;
              case "0":
              case "1":
              case "2":
              case "3":
              case "4":
              case "5":
              case "6":
              case "7":
              case "8":
              case "9":
                (i.push(s), (t = !1));
                break;
              default:
                (t && ((t = !1), (s = s.toUpperCase())), i.push(s));
            }
          }
          return i.join("");
        }
        const De = new Set(["constructor", "toString", "toJSON", "valueOf"]),
          xe = new Set([
            "getType",
            "clone",
            "equals",
            "fromBinary",
            "fromJson",
            "fromJsonString",
            "toBinary",
            "toJson",
            "toJsonString",
            "toObject",
          ]),
          Me = (e) => "".concat(e, "$"),
          _e = (e) => (xe.has(e) ? Me(e) : e),
          Ae = (e) => (De.has(e) ? Me(e) : e);
        class Ne {
          constructor(e) {
            ((this.kind = "oneof"),
              (this.repeated = !1),
              (this.packed = !1),
              (this.opt = !1),
              (this.req = !1),
              (this.default = void 0),
              (this.fields = []),
              (this.name = e),
              (this.localName = Re(e, !1)));
          }
          addField(e) {
            (c(
              e.oneof === this,
              "field ".concat(e.name, " not one of ").concat(this.name),
            ),
              this.fields.push(e));
          }
          findField(e) {
            if (!this._lookup) {
              this._lookup = Object.create(null);
              for (let e = 0; e < this.fields.length; e++)
                this._lookup[this.fields[e].localName] = this.fields[e];
            }
            return this._lookup[e];
          }
        }
        const Le =
          ((Ue = (e) =>
            new Pe(e, (e) =>
              (function (e, t) {
                var i, n, s, r, o, a;
                const c = [];
                let d;
                for (const t of "function" == typeof e ? e() : e) {
                  const e = t;
                  if (
                    ((e.localName = Re(t.name, void 0 !== t.oneof)),
                    (e.jsonName =
                      null !== (i = t.jsonName) && void 0 !== i
                        ? i
                        : Ie(t.name)),
                    (e.repeated =
                      null !== (n = t.repeated) && void 0 !== n && n),
                    "scalar" == t.kind &&
                      (e.L = null !== (s = t.L) && void 0 !== s ? s : A.BIGINT),
                    (e.delimited =
                      null !== (r = t.delimited) && void 0 !== r && r),
                    (e.req = null !== (o = t.req) && void 0 !== o && o),
                    (e.opt = null !== (a = t.opt) && void 0 !== a && a),
                    void 0 === t.packed &&
                      (e.packed =
                        "enum" == t.kind ||
                        ("scalar" == t.kind &&
                          t.T != _.BYTES &&
                          t.T != _.STRING)),
                    void 0 !== t.oneof)
                  ) {
                    const i =
                      "string" == typeof t.oneof ? t.oneof : t.oneof.name;
                    ((d && d.name == i) || (d = new Ne(i)),
                      (e.oneof = d),
                      d.addField(e));
                  }
                  c.push(e);
                }
                return c;
              })(e),
            )),
          (je = (e) => {
            for (const t of e.getType().fields.byMember()) {
              if (t.opt) continue;
              const i = t.localName,
                n = e;
              if (t.repeated) n[i] = [];
              else
                switch (t.kind) {
                  case "oneof":
                    n[i] = { case: void 0 };
                    break;
                  case "enum":
                    n[i] = 0;
                    break;
                  case "map":
                    n[i] = {};
                    break;
                  case "scalar":
                    n[i] = U(t.T, t.L);
                }
            }
          }),
          {
            syntax: "proto3",
            json: {
              makeReadOptions: function (e) {
                return e ? Object.assign(Object.assign({}, $), e) : $;
              },
              makeWriteOptions: function (e) {
                return e ? Object.assign(Object.assign({}, ee), e) : ee;
              },
              readMessage(e, t, i, n) {
                if (null == t || Array.isArray(t) || "object" != typeof t)
                  throw new Error(
                    "cannot decode message "
                      .concat(e.typeName, " from JSON: ")
                      .concat(ne(t)),
                  );
                n = null != n ? n : new e();
                const s = new Map(),
                  r = i.typeRegistry;
                for (const [o, a] of Object.entries(t)) {
                  const t = e.fields.findJsonName(o);
                  if (t) {
                    if (t.oneof) {
                      if (null === a && "scalar" == t.kind) continue;
                      const i = s.get(t.oneof);
                      if (void 0 !== i)
                        throw new Error(
                          "cannot decode message "
                            .concat(
                              e.typeName,
                              ' from JSON: multiple keys for oneof "',
                            )
                            .concat(t.oneof.name, '" present: "')
                            .concat(i, '", "')
                            .concat(o, '"'),
                        );
                      s.set(t.oneof, o);
                    }
                    se(n, a, t, i, e);
                  } else {
                    let t = !1;
                    if (
                      (null == r ? void 0 : r.findExtension) &&
                      o.startsWith("[") &&
                      o.endsWith("]")
                    ) {
                      const s = r.findExtension(o.substring(1, o.length - 1));
                      if (s && s.extendee.typeName == e.typeName) {
                        t = !0;
                        const [e, r] = V(s);
                        (se(e, a, s.field, i, s), H(n, s, r(), i));
                      }
                    }
                    if (!t && !i.ignoreUnknownFields)
                      throw new Error(
                        "cannot decode message "
                          .concat(e.typeName, ' from JSON: key "')
                          .concat(o, '" is unknown'),
                      );
                  }
                }
                return n;
              },
              writeMessage(e, t) {
                const i = e.getType(),
                  n = {};
                let s;
                try {
                  for (s of i.fields.byNumber()) {
                    if (!Q(s, e)) {
                      if (s.req) throw "required field not set";
                      if (!t.emitDefaultValues) continue;
                      if (!ce(s)) continue;
                    }
                    const i = de(
                      s,
                      s.oneof ? e[s.oneof.localName].value : e[s.localName],
                      t,
                    );
                    void 0 !== i &&
                      (n[t.useProtoFieldName ? s.name : s.jsonName] = i);
                  }
                  const r = t.typeRegistry;
                  if (null == r ? void 0 : r.findExtensionFor)
                    for (const s of i.runtime.bin.listUnknownFields(e)) {
                      const o = r.findExtensionFor(i.typeName, s.no);
                      if (o && z(e, o)) {
                        const i = G(e, o, t),
                          s = de(o.field, i, t);
                        void 0 !== s && (n[o.field.jsonName] = s);
                      }
                    }
                } catch (e) {
                  const t = s
                      ? "cannot encode field "
                          .concat(i.typeName, ".")
                          .concat(s.name, " to JSON")
                      : "cannot encode message ".concat(i.typeName, " to JSON"),
                    n = e instanceof Error ? e.message : String(e);
                  throw new Error(t + (n.length > 0 ? ": ".concat(n) : ""));
                }
                return n;
              },
              readScalar: (e, t, i) => oe(e, t, null != i ? i : A.BIGINT, !0),
              writeScalar(e, t, i) {
                if (void 0 !== t) return i || j(e, t) ? ue(e, t) : void 0;
              },
              debug: ne,
            },
            bin: {
              makeReadOptions: function (e) {
                return e ? Object.assign(Object.assign({}, pe), e) : pe;
              },
              makeWriteOptions: function (e) {
                return e ? Object.assign(Object.assign({}, me), e) : me;
              },
              listUnknownFields(e) {
                var t;
                return null !== (t = e[he]) && void 0 !== t ? t : [];
              },
              discardUnknownFields(e) {
                delete e[he];
              },
              writeUnknownFields(e, t) {
                const i = e[he];
                if (i) for (const e of i) t.tag(e.no, e.wireType).raw(e.data);
              },
              onUnknownField(e, t, i, n) {
                const s = e;
                (Array.isArray(s[he]) || (s[he] = []),
                  s[he].push({ no: t, wireType: i, data: n }));
              },
              readMessage(e, t, i, n, s) {
                const r = e.getType(),
                  o = s ? t.len : t.pos + i;
                let a, c;
                for (
                  ;
                  t.pos < o &&
                  (([a, c] = t.tag()), !0 !== s || c != N.EndGroup);

                ) {
                  const i = r.fields.find(a);
                  if (i) ge(e, t, i, c, n);
                  else {
                    const i = t.skip(c, a);
                    n.readUnknownFields && this.onUnknownField(e, a, c, i);
                  }
                }
                if (s && (c != N.EndGroup || a !== i))
                  throw new Error("invalid end group tag");
              },
              readField: ge,
              writeMessage(e, t, i) {
                const n = e.getType();
                for (const s of n.fields.byNumber())
                  if (Q(s, e))
                    ke(
                      s,
                      s.oneof ? e[s.oneof.localName].value : e[s.localName],
                      t,
                      i,
                    );
                  else if (s.req)
                    throw new Error(
                      "cannot encode field "
                        .concat(n.typeName, ".")
                        .concat(s.name, " to binary: required field not set"),
                    );
                return (
                  i.writeUnknownFields && this.writeUnknownFields(e, t),
                  t
                );
              },
              writeField(e, t, i, n) {
                void 0 !== t && ke(e, t, i, n);
              },
            },
            util: Object.assign(
              Object.assign(
                {},
                {
                  setEnumType: b,
                  initPartial(e, t) {
                    if (void 0 === e) return;
                    const i = t.getType();
                    for (const n of i.fields.byMember()) {
                      const i = n.localName,
                        s = t,
                        r = e;
                      if (null != r[i])
                        switch (n.kind) {
                          case "oneof":
                            const e = r[i].case;
                            if (void 0 === e) continue;
                            const t = n.findField(e);
                            let o = r[i].value;
                            (t && "message" == t.kind && !X(o, t.T)
                              ? (o = new t.T(o))
                              : t &&
                                "scalar" === t.kind &&
                                t.T === _.BYTES &&
                                (o = Ee(o)),
                              (s[i] = { case: e, value: o }));
                            break;
                          case "scalar":
                          case "enum":
                            let a = r[i];
                            (n.T === _.BYTES &&
                              (a = n.repeated ? a.map(Ee) : Ee(a)),
                              (s[i] = a));
                            break;
                          case "map":
                            switch (n.V.kind) {
                              case "scalar":
                              case "enum":
                                if (n.V.T === _.BYTES)
                                  for (const [e, t] of Object.entries(r[i]))
                                    s[i][e] = Ee(t);
                                else Object.assign(s[i], r[i]);
                                break;
                              case "message":
                                const e = n.V.T;
                                for (const t of Object.keys(r[i])) {
                                  let n = r[i][t];
                                  (e.fieldWrapper || (n = new e(n)),
                                    (s[i][t] = n));
                                }
                            }
                            break;
                          case "message":
                            const c = n.T;
                            if (n.repeated)
                              s[i] = r[i].map((e) => (X(e, c) ? e : new c(e)));
                            else {
                              const e = r[i];
                              c.fieldWrapper
                                ? "google.protobuf.BytesValue" === c.typeName
                                  ? (s[i] = Ee(e))
                                  : (s[i] = e)
                                : (s[i] = X(e, c) ? e : new c(e));
                            }
                        }
                    }
                  },
                  equals: (e, t, i) =>
                    t === i ||
                    (!(!t || !i) &&
                      e.fields.byMember().every((e) => {
                        const n = t[e.localName],
                          s = i[e.localName];
                        if (e.repeated) {
                          if (n.length !== s.length) return !1;
                          switch (e.kind) {
                            case "message":
                              return n.every((t, i) => e.T.equals(t, s[i]));
                            case "scalar":
                              return n.every((t, i) => L(e.T, t, s[i]));
                            case "enum":
                              return n.every((e, t) => L(_.INT32, e, s[t]));
                          }
                          throw new Error(
                            "repeated cannot contain ".concat(e.kind),
                          );
                        }
                        switch (e.kind) {
                          case "message":
                            let t = n,
                              i = s;
                            return (
                              e.T.fieldWrapper &&
                                (void 0 === t ||
                                  X(t) ||
                                  (t = e.T.fieldWrapper.wrapField(t)),
                                void 0 === i ||
                                  X(i) ||
                                  (i = e.T.fieldWrapper.wrapField(i))),
                              e.T.equals(t, i)
                            );
                          case "enum":
                            return L(_.INT32, n, s);
                          case "scalar":
                            return L(e.T, n, s);
                          case "oneof":
                            if (n.case !== s.case) return !1;
                            const r = e.findField(n.case);
                            if (void 0 === r) return !0;
                            switch (r.kind) {
                              case "message":
                                return r.T.equals(n.value, s.value);
                              case "enum":
                                return L(_.INT32, n.value, s.value);
                              case "scalar":
                                return L(r.T, n.value, s.value);
                            }
                            throw new Error(
                              "oneof cannot contain ".concat(r.kind),
                            );
                          case "map":
                            const o = Object.keys(n).concat(Object.keys(s));
                            switch (e.V.kind) {
                              case "message":
                                const t = e.V.T;
                                return o.every((e) => t.equals(n[e], s[e]));
                              case "enum":
                                return o.every((e) => L(_.INT32, n[e], s[e]));
                              case "scalar":
                                const i = e.V.T;
                                return o.every((e) => L(i, n[e], s[e]));
                            }
                        }
                      })),
                  clone(e) {
                    const t = e.getType(),
                      i = new t(),
                      n = i;
                    for (const i of t.fields.byMember()) {
                      const t = e[i.localName];
                      let s;
                      if (i.repeated) s = t.map(we);
                      else if ("map" == i.kind) {
                        s = n[i.localName];
                        for (const [e, i] of Object.entries(t)) s[e] = we(i);
                      } else
                        s =
                          "oneof" == i.kind
                            ? i.findField(t.case)
                              ? { case: t.case, value: we(t.value) }
                              : { case: void 0 }
                            : we(t);
                      n[i.localName] = s;
                    }
                    for (const i of t.runtime.bin.listUnknownFields(e))
                      t.runtime.bin.onUnknownField(n, i.no, i.wireType, i.data);
                    return i;
                  },
                },
              ),
              { newFieldList: Ue, initFields: je },
            ),
            makeMessageType(e, t, i) {
              return (function (e, t, i, n) {
                var s;
                const r =
                    null !== (s = null == n ? void 0 : n.localName) &&
                    void 0 !== s
                      ? s
                      : t.substring(t.lastIndexOf(".") + 1),
                  o = {
                    [r]: function (t) {
                      (e.util.initFields(this), e.util.initPartial(t, this));
                    },
                  }[r];
                return (
                  Object.setPrototypeOf(o.prototype, new T()),
                  Object.assign(o, {
                    runtime: e,
                    typeName: t,
                    fields: e.util.newFieldList(i),
                    fromBinary: (e, t) => new o().fromBinary(e, t),
                    fromJson: (e, t) => new o().fromJson(e, t),
                    fromJsonString: (e, t) => new o().fromJsonString(e, t),
                    equals: (t, i) => e.util.equals(o, t, i),
                  }),
                  o
                );
              })(this, e, t, i);
            },
            makeEnum: function (e, t, i) {
              const n = {};
              for (const e of t) {
                const t = y(e);
                ((n[t.localName] = t.no), (n[t.no] = t.localName));
              }
              return (b(n, e, t), n);
            },
            makeEnumType: k,
            getEnumType: function (e) {
              const t = e[v];
              return (c(t, "missing enum type on enum object"), t);
            },
            makeExtension(e, t, i) {
              return (function (e, t, i, n) {
                let s;
                return {
                  typeName: t,
                  extendee: i,
                  get field() {
                    if (!s) {
                      const i = "function" == typeof n ? n() : n;
                      ((i.name = t.split(".").pop()),
                        (i.jsonName = "[".concat(t, "]")),
                        (s = e.util.newFieldList([i]).list()[0]));
                    }
                    return s;
                  },
                  runtime: e,
                };
              })(this, e, t, i);
            },
          });
        var Ue, je;
        class Fe extends T {
          constructor(e) {
            (super(),
              (this.seconds = M.zero),
              (this.nanos = 0),
              Le.util.initPartial(e, this));
          }
          fromJson(e, t) {
            if ("string" != typeof e)
              throw new Error(
                "cannot decode google.protobuf.Timestamp from JSON: ".concat(
                  Le.json.debug(e),
                ),
              );
            const i = e.match(
              /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/,
            );
            if (!i)
              throw new Error(
                "cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string",
              );
            const n = Date.parse(
              i[1] +
                "-" +
                i[2] +
                "-" +
                i[3] +
                "T" +
                i[4] +
                ":" +
                i[5] +
                ":" +
                i[6] +
                (i[8] ? i[8] : "Z"),
            );
            if (Number.isNaN(n))
              throw new Error(
                "cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string",
              );
            if (
              n < Date.parse("0001-01-01T00:00:00Z") ||
              n > Date.parse("9999-12-31T23:59:59Z")
            )
              throw new Error(
                "cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive",
              );
            return (
              (this.seconds = M.parse(n / 1e3)),
              (this.nanos = 0),
              i[7] &&
                (this.nanos =
                  parseInt("1" + i[7] + "0".repeat(9 - i[7].length)) - 1e9),
              this
            );
          }
          toJson(e) {
            const t = 1e3 * Number(this.seconds);
            if (
              t < Date.parse("0001-01-01T00:00:00Z") ||
              t > Date.parse("9999-12-31T23:59:59Z")
            )
              throw new Error(
                "cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive",
              );
            if (this.nanos < 0)
              throw new Error(
                "cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative",
              );
            let i = "Z";
            if (this.nanos > 0) {
              const e = (this.nanos + 1e9).toString().substring(1);
              i =
                "000000" === e.substring(3)
                  ? "." + e.substring(0, 3) + "Z"
                  : "000" === e.substring(6)
                    ? "." + e.substring(0, 6) + "Z"
                    : "." + e + "Z";
            }
            return new Date(t).toISOString().replace(".000Z", i);
          }
          toDate() {
            return new Date(
              1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6),
            );
          }
          static now() {
            return Fe.fromDate(new Date());
          }
          static fromDate(e) {
            const t = e.getTime();
            return new Fe({
              seconds: M.parse(Math.floor(t / 1e3)),
              nanos: (t % 1e3) * 1e6,
            });
          }
          static fromBinary(e, t) {
            return new Fe().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new Fe().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new Fe().fromJsonString(e, t);
          }
          static equals(e, t) {
            return Le.util.equals(Fe, e, t);
          }
        }
        ((Fe.runtime = Le),
          (Fe.typeName = "google.protobuf.Timestamp"),
          (Fe.fields = Le.util.newFieldList(() => [
            { no: 1, name: "seconds", kind: "scalar", T: 3 },
            { no: 2, name: "nanos", kind: "scalar", T: 5 },
          ])));
        const Be = Le.makeMessageType("livekit.MetricsBatch", () => [
            { no: 1, name: "timestamp_ms", kind: "scalar", T: 3 },
            { no: 2, name: "normalized_timestamp", kind: "message", T: Fe },
            { no: 3, name: "str_data", kind: "scalar", T: 9, repeated: !0 },
            {
              no: 4,
              name: "time_series",
              kind: "message",
              T: Ve,
              repeated: !0,
            },
            { no: 5, name: "events", kind: "message", T: Ke, repeated: !0 },
          ]),
          Ve = Le.makeMessageType("livekit.TimeSeriesMetric", () => [
            { no: 1, name: "label", kind: "scalar", T: 13 },
            { no: 2, name: "participant_identity", kind: "scalar", T: 13 },
            { no: 3, name: "track_sid", kind: "scalar", T: 13 },
            { no: 4, name: "samples", kind: "message", T: qe, repeated: !0 },
            { no: 5, name: "rid", kind: "scalar", T: 13 },
          ]),
          qe = Le.makeMessageType("livekit.MetricSample", () => [
            { no: 1, name: "timestamp_ms", kind: "scalar", T: 3 },
            { no: 2, name: "normalized_timestamp", kind: "message", T: Fe },
            { no: 3, name: "value", kind: "scalar", T: 2 },
          ]),
          Ke = Le.makeMessageType("livekit.EventMetric", () => [
            { no: 1, name: "label", kind: "scalar", T: 13 },
            { no: 2, name: "participant_identity", kind: "scalar", T: 13 },
            { no: 3, name: "track_sid", kind: "scalar", T: 13 },
            { no: 4, name: "start_timestamp_ms", kind: "scalar", T: 3 },
            { no: 5, name: "end_timestamp_ms", kind: "scalar", T: 3, opt: !0 },
            {
              no: 6,
              name: "normalized_start_timestamp",
              kind: "message",
              T: Fe,
            },
            {
              no: 7,
              name: "normalized_end_timestamp",
              kind: "message",
              T: Fe,
              opt: !0,
            },
            { no: 8, name: "metadata", kind: "scalar", T: 9 },
            { no: 9, name: "rid", kind: "scalar", T: 13 },
          ]),
          We = Le.makeEnum("livekit.BackupCodecPolicy", [
            { no: 0, name: "PREFER_REGRESSION" },
            { no: 1, name: "SIMULCAST" },
            { no: 2, name: "REGRESSION" },
          ]),
          Ge = Le.makeEnum("livekit.TrackType", [
            { no: 0, name: "AUDIO" },
            { no: 1, name: "VIDEO" },
            { no: 2, name: "DATA" },
          ]),
          He = Le.makeEnum("livekit.TrackSource", [
            { no: 0, name: "UNKNOWN" },
            { no: 1, name: "CAMERA" },
            { no: 2, name: "MICROPHONE" },
            { no: 3, name: "SCREEN_SHARE" },
            { no: 4, name: "SCREEN_SHARE_AUDIO" },
          ]),
          ze = Le.makeEnum("livekit.VideoQuality", [
            { no: 0, name: "LOW" },
            { no: 1, name: "MEDIUM" },
            { no: 2, name: "HIGH" },
            { no: 3, name: "OFF" },
          ]),
          Je = Le.makeEnum("livekit.ConnectionQuality", [
            { no: 0, name: "POOR" },
            { no: 1, name: "GOOD" },
            { no: 2, name: "EXCELLENT" },
            { no: 3, name: "LOST" },
          ]),
          Qe = Le.makeEnum("livekit.ClientConfigSetting", [
            { no: 0, name: "UNSET" },
            { no: 1, name: "DISABLED" },
            { no: 2, name: "ENABLED" },
          ]),
          Ye = Le.makeEnum("livekit.DisconnectReason", [
            { no: 0, name: "UNKNOWN_REASON" },
            { no: 1, name: "CLIENT_INITIATED" },
            { no: 2, name: "DUPLICATE_IDENTITY" },
            { no: 3, name: "SERVER_SHUTDOWN" },
            { no: 4, name: "PARTICIPANT_REMOVED" },
            { no: 5, name: "ROOM_DELETED" },
            { no: 6, name: "STATE_MISMATCH" },
            { no: 7, name: "JOIN_FAILURE" },
            { no: 8, name: "MIGRATION" },
            { no: 9, name: "SIGNAL_CLOSE" },
            { no: 10, name: "ROOM_CLOSED" },
            { no: 11, name: "USER_UNAVAILABLE" },
            { no: 12, name: "USER_REJECTED" },
            { no: 13, name: "SIP_TRUNK_FAILURE" },
            { no: 14, name: "CONNECTION_TIMEOUT" },
            { no: 15, name: "MEDIA_FAILURE" },
          ]),
          Xe = Le.makeEnum("livekit.ReconnectReason", [
            { no: 0, name: "RR_UNKNOWN" },
            { no: 1, name: "RR_SIGNAL_DISCONNECTED" },
            { no: 2, name: "RR_PUBLISHER_FAILED" },
            { no: 3, name: "RR_SUBSCRIBER_FAILED" },
            { no: 4, name: "RR_SWITCH_CANDIDATE" },
          ]),
          Ze = Le.makeEnum("livekit.SubscriptionError", [
            { no: 0, name: "SE_UNKNOWN" },
            { no: 1, name: "SE_CODEC_UNSUPPORTED" },
            { no: 2, name: "SE_TRACK_NOTFOUND" },
          ]),
          $e = Le.makeEnum("livekit.AudioTrackFeature", [
            { no: 0, name: "TF_STEREO" },
            { no: 1, name: "TF_NO_DTX" },
            { no: 2, name: "TF_AUTO_GAIN_CONTROL" },
            { no: 3, name: "TF_ECHO_CANCELLATION" },
            { no: 4, name: "TF_NOISE_SUPPRESSION" },
            { no: 5, name: "TF_ENHANCED_NOISE_CANCELLATION" },
            { no: 6, name: "TF_PRECONNECT_BUFFER" },
          ]),
          et = Le.makeMessageType("livekit.Room", () => [
            { no: 1, name: "sid", kind: "scalar", T: 9 },
            { no: 2, name: "name", kind: "scalar", T: 9 },
            { no: 3, name: "empty_timeout", kind: "scalar", T: 13 },
            { no: 14, name: "departure_timeout", kind: "scalar", T: 13 },
            { no: 4, name: "max_participants", kind: "scalar", T: 13 },
            { no: 5, name: "creation_time", kind: "scalar", T: 3 },
            { no: 15, name: "creation_time_ms", kind: "scalar", T: 3 },
            { no: 6, name: "turn_password", kind: "scalar", T: 9 },
            {
              no: 7,
              name: "enabled_codecs",
              kind: "message",
              T: tt,
              repeated: !0,
            },
            { no: 8, name: "metadata", kind: "scalar", T: 9 },
            { no: 9, name: "num_participants", kind: "scalar", T: 13 },
            { no: 11, name: "num_publishers", kind: "scalar", T: 13 },
            { no: 10, name: "active_recording", kind: "scalar", T: 8 },
            { no: 13, name: "version", kind: "message", T: Mt },
          ]),
          tt = Le.makeMessageType("livekit.Codec", () => [
            { no: 1, name: "mime", kind: "scalar", T: 9 },
            { no: 2, name: "fmtp_line", kind: "scalar", T: 9 },
          ]),
          it = Le.makeMessageType("livekit.ParticipantPermission", () => [
            { no: 1, name: "can_subscribe", kind: "scalar", T: 8 },
            { no: 2, name: "can_publish", kind: "scalar", T: 8 },
            { no: 3, name: "can_publish_data", kind: "scalar", T: 8 },
            {
              no: 9,
              name: "can_publish_sources",
              kind: "enum",
              T: Le.getEnumType(He),
              repeated: !0,
            },
            { no: 7, name: "hidden", kind: "scalar", T: 8 },
            { no: 8, name: "recorder", kind: "scalar", T: 8 },
            { no: 10, name: "can_update_metadata", kind: "scalar", T: 8 },
            { no: 11, name: "agent", kind: "scalar", T: 8 },
            { no: 12, name: "can_subscribe_metrics", kind: "scalar", T: 8 },
          ]),
          nt = Le.makeMessageType("livekit.ParticipantInfo", () => [
            { no: 1, name: "sid", kind: "scalar", T: 9 },
            { no: 2, name: "identity", kind: "scalar", T: 9 },
            { no: 3, name: "state", kind: "enum", T: Le.getEnumType(st) },
            { no: 4, name: "tracks", kind: "message", T: dt, repeated: !0 },
            { no: 5, name: "metadata", kind: "scalar", T: 9 },
            { no: 6, name: "joined_at", kind: "scalar", T: 3 },
            { no: 17, name: "joined_at_ms", kind: "scalar", T: 3 },
            { no: 9, name: "name", kind: "scalar", T: 9 },
            { no: 10, name: "version", kind: "scalar", T: 13 },
            { no: 11, name: "permission", kind: "message", T: it },
            { no: 12, name: "region", kind: "scalar", T: 9 },
            { no: 13, name: "is_publisher", kind: "scalar", T: 8 },
            { no: 14, name: "kind", kind: "enum", T: Le.getEnumType(rt) },
            {
              no: 15,
              name: "attributes",
              kind: "map",
              K: 9,
              V: { kind: "scalar", T: 9 },
            },
            {
              no: 16,
              name: "disconnect_reason",
              kind: "enum",
              T: Le.getEnumType(Ye),
            },
            {
              no: 18,
              name: "kind_details",
              kind: "enum",
              T: Le.getEnumType(ot),
              repeated: !0,
            },
          ]),
          st = Le.makeEnum("livekit.ParticipantInfo.State", [
            { no: 0, name: "JOINING" },
            { no: 1, name: "JOINED" },
            { no: 2, name: "ACTIVE" },
            { no: 3, name: "DISCONNECTED" },
          ]),
          rt = Le.makeEnum("livekit.ParticipantInfo.Kind", [
            { no: 0, name: "STANDARD" },
            { no: 1, name: "INGRESS" },
            { no: 2, name: "EGRESS" },
            { no: 3, name: "SIP" },
            { no: 4, name: "AGENT" },
          ]),
          ot = Le.makeEnum("livekit.ParticipantInfo.KindDetail", [
            { no: 0, name: "CLOUD_AGENT" },
            { no: 1, name: "FORWARDED" },
          ]),
          at = Le.makeEnum("livekit.Encryption.Type", [
            { no: 0, name: "NONE" },
            { no: 1, name: "GCM" },
            { no: 2, name: "CUSTOM" },
          ]),
          ct = Le.makeMessageType("livekit.SimulcastCodecInfo", () => [
            { no: 1, name: "mime_type", kind: "scalar", T: 9 },
            { no: 2, name: "mid", kind: "scalar", T: 9 },
            { no: 3, name: "cid", kind: "scalar", T: 9 },
            { no: 4, name: "layers", kind: "message", T: lt, repeated: !0 },
          ]),
          dt = Le.makeMessageType("livekit.TrackInfo", () => [
            { no: 1, name: "sid", kind: "scalar", T: 9 },
            { no: 2, name: "type", kind: "enum", T: Le.getEnumType(Ge) },
            { no: 3, name: "name", kind: "scalar", T: 9 },
            { no: 4, name: "muted", kind: "scalar", T: 8 },
            { no: 5, name: "width", kind: "scalar", T: 13 },
            { no: 6, name: "height", kind: "scalar", T: 13 },
            { no: 7, name: "simulcast", kind: "scalar", T: 8 },
            { no: 8, name: "disable_dtx", kind: "scalar", T: 8 },
            { no: 9, name: "source", kind: "enum", T: Le.getEnumType(He) },
            { no: 10, name: "layers", kind: "message", T: lt, repeated: !0 },
            { no: 11, name: "mime_type", kind: "scalar", T: 9 },
            { no: 12, name: "mid", kind: "scalar", T: 9 },
            { no: 13, name: "codecs", kind: "message", T: ct, repeated: !0 },
            { no: 14, name: "stereo", kind: "scalar", T: 8 },
            { no: 15, name: "disable_red", kind: "scalar", T: 8 },
            { no: 16, name: "encryption", kind: "enum", T: Le.getEnumType(at) },
            { no: 17, name: "stream", kind: "scalar", T: 9 },
            { no: 18, name: "version", kind: "message", T: Mt },
            {
              no: 19,
              name: "audio_features",
              kind: "enum",
              T: Le.getEnumType($e),
              repeated: !0,
            },
            {
              no: 20,
              name: "backup_codec_policy",
              kind: "enum",
              T: Le.getEnumType(We),
            },
          ]),
          lt = Le.makeMessageType("livekit.VideoLayer", () => [
            { no: 1, name: "quality", kind: "enum", T: Le.getEnumType(ze) },
            { no: 2, name: "width", kind: "scalar", T: 13 },
            { no: 3, name: "height", kind: "scalar", T: 13 },
            { no: 4, name: "bitrate", kind: "scalar", T: 13 },
            { no: 5, name: "ssrc", kind: "scalar", T: 13 },
            { no: 6, name: "spatial_layer", kind: "scalar", T: 5 },
            { no: 7, name: "rid", kind: "scalar", T: 9 },
          ]),
          ut = Le.makeMessageType("livekit.DataPacket", () => [
            { no: 1, name: "kind", kind: "enum", T: Le.getEnumType(ht) },
            { no: 4, name: "participant_identity", kind: "scalar", T: 9 },
            {
              no: 5,
              name: "destination_identities",
              kind: "scalar",
              T: 9,
              repeated: !0,
            },
            { no: 2, name: "user", kind: "message", T: gt, oneof: "value" },
            { no: 3, name: "speaker", kind: "message", T: pt, oneof: "value" },
            { no: 6, name: "sip_dtmf", kind: "message", T: ft, oneof: "value" },
            {
              no: 7,
              name: "transcription",
              kind: "message",
              T: vt,
              oneof: "value",
            },
            { no: 8, name: "metrics", kind: "message", T: Be, oneof: "value" },
            {
              no: 9,
              name: "chat_message",
              kind: "message",
              T: kt,
              oneof: "value",
            },
            {
              no: 10,
              name: "rpc_request",
              kind: "message",
              T: yt,
              oneof: "value",
            },
            { no: 11, name: "rpc_ack", kind: "message", T: Tt, oneof: "value" },
            {
              no: 12,
              name: "rpc_response",
              kind: "message",
              T: Ct,
              oneof: "value",
            },
            {
              no: 13,
              name: "stream_header",
              kind: "message",
              T: Lt,
              oneof: "value",
            },
            {
              no: 14,
              name: "stream_chunk",
              kind: "message",
              T: Ut,
              oneof: "value",
            },
            {
              no: 15,
              name: "stream_trailer",
              kind: "message",
              T: jt,
              oneof: "value",
            },
            { no: 16, name: "sequence", kind: "scalar", T: 13 },
            { no: 17, name: "participant_sid", kind: "scalar", T: 9 },
          ]),
          ht = Le.makeEnum("livekit.DataPacket.Kind", [
            { no: 0, name: "RELIABLE" },
            { no: 1, name: "LOSSY" },
          ]),
          pt = Le.makeMessageType("livekit.ActiveSpeakerUpdate", () => [
            { no: 1, name: "speakers", kind: "message", T: mt, repeated: !0 },
          ]),
          mt = Le.makeMessageType("livekit.SpeakerInfo", () => [
            { no: 1, name: "sid", kind: "scalar", T: 9 },
            { no: 2, name: "level", kind: "scalar", T: 2 },
            { no: 3, name: "active", kind: "scalar", T: 8 },
          ]),
          gt = Le.makeMessageType("livekit.UserPacket", () => [
            { no: 1, name: "participant_sid", kind: "scalar", T: 9 },
            { no: 5, name: "participant_identity", kind: "scalar", T: 9 },
            { no: 2, name: "payload", kind: "scalar", T: 12 },
            {
              no: 3,
              name: "destination_sids",
              kind: "scalar",
              T: 9,
              repeated: !0,
            },
            {
              no: 6,
              name: "destination_identities",
              kind: "scalar",
              T: 9,
              repeated: !0,
            },
            { no: 4, name: "topic", kind: "scalar", T: 9, opt: !0 },
            { no: 8, name: "id", kind: "scalar", T: 9, opt: !0 },
            { no: 9, name: "start_time", kind: "scalar", T: 4, opt: !0 },
            { no: 10, name: "end_time", kind: "scalar", T: 4, opt: !0 },
            { no: 11, name: "nonce", kind: "scalar", T: 12 },
          ]),
          ft = Le.makeMessageType("livekit.SipDTMF", () => [
            { no: 3, name: "code", kind: "scalar", T: 13 },
            { no: 4, name: "digit", kind: "scalar", T: 9 },
          ]),
          vt = Le.makeMessageType("livekit.Transcription", () => [
            {
              no: 2,
              name: "transcribed_participant_identity",
              kind: "scalar",
              T: 9,
            },
            { no: 3, name: "track_id", kind: "scalar", T: 9 },
            { no: 4, name: "segments", kind: "message", T: bt, repeated: !0 },
          ]),
          bt = Le.makeMessageType("livekit.TranscriptionSegment", () => [
            { no: 1, name: "id", kind: "scalar", T: 9 },
            { no: 2, name: "text", kind: "scalar", T: 9 },
            { no: 3, name: "start_time", kind: "scalar", T: 4 },
            { no: 4, name: "end_time", kind: "scalar", T: 4 },
            { no: 5, name: "final", kind: "scalar", T: 8 },
            { no: 6, name: "language", kind: "scalar", T: 9 },
          ]),
          kt = Le.makeMessageType("livekit.ChatMessage", () => [
            { no: 1, name: "id", kind: "scalar", T: 9 },
            { no: 2, name: "timestamp", kind: "scalar", T: 3 },
            { no: 3, name: "edit_timestamp", kind: "scalar", T: 3, opt: !0 },
            { no: 4, name: "message", kind: "scalar", T: 9 },
            { no: 5, name: "deleted", kind: "scalar", T: 8 },
            { no: 6, name: "generated", kind: "scalar", T: 8 },
          ]),
          yt = Le.makeMessageType("livekit.RpcRequest", () => [
            { no: 1, name: "id", kind: "scalar", T: 9 },
            { no: 2, name: "method", kind: "scalar", T: 9 },
            { no: 3, name: "payload", kind: "scalar", T: 9 },
            { no: 4, name: "response_timeout_ms", kind: "scalar", T: 13 },
            { no: 5, name: "version", kind: "scalar", T: 13 },
          ]),
          Tt = Le.makeMessageType("livekit.RpcAck", () => [
            { no: 1, name: "request_id", kind: "scalar", T: 9 },
          ]),
          Ct = Le.makeMessageType("livekit.RpcResponse", () => [
            { no: 1, name: "request_id", kind: "scalar", T: 9 },
            { no: 2, name: "payload", kind: "scalar", T: 9, oneof: "value" },
            { no: 3, name: "error", kind: "message", T: St, oneof: "value" },
          ]),
          St = Le.makeMessageType("livekit.RpcError", () => [
            { no: 1, name: "code", kind: "scalar", T: 13 },
            { no: 2, name: "message", kind: "scalar", T: 9 },
            { no: 3, name: "data", kind: "scalar", T: 9 },
          ]),
          wt = Le.makeMessageType("livekit.ParticipantTracks", () => [
            { no: 1, name: "participant_sid", kind: "scalar", T: 9 },
            { no: 2, name: "track_sids", kind: "scalar", T: 9, repeated: !0 },
          ]),
          Et = Le.makeMessageType("livekit.ServerInfo", () => [
            { no: 1, name: "edition", kind: "enum", T: Le.getEnumType(Pt) },
            { no: 2, name: "version", kind: "scalar", T: 9 },
            { no: 3, name: "protocol", kind: "scalar", T: 5 },
            { no: 4, name: "region", kind: "scalar", T: 9 },
            { no: 5, name: "node_id", kind: "scalar", T: 9 },
            { no: 6, name: "debug_info", kind: "scalar", T: 9 },
            { no: 7, name: "agent_protocol", kind: "scalar", T: 5 },
          ]),
          Pt = Le.makeEnum("livekit.ServerInfo.Edition", [
            { no: 0, name: "Standard" },
            { no: 1, name: "Cloud" },
          ]),
          Rt = Le.makeMessageType("livekit.ClientInfo", () => [
            { no: 1, name: "sdk", kind: "enum", T: Le.getEnumType(It) },
            { no: 2, name: "version", kind: "scalar", T: 9 },
            { no: 3, name: "protocol", kind: "scalar", T: 5 },
            { no: 4, name: "os", kind: "scalar", T: 9 },
            { no: 5, name: "os_version", kind: "scalar", T: 9 },
            { no: 6, name: "device_model", kind: "scalar", T: 9 },
            { no: 7, name: "browser", kind: "scalar", T: 9 },
            { no: 8, name: "browser_version", kind: "scalar", T: 9 },
            { no: 9, name: "address", kind: "scalar", T: 9 },
            { no: 10, name: "network", kind: "scalar", T: 9 },
            { no: 11, name: "other_sdks", kind: "scalar", T: 9 },
          ]),
          It = Le.makeEnum("livekit.ClientInfo.SDK", [
            { no: 0, name: "UNKNOWN" },
            { no: 1, name: "JS" },
            { no: 2, name: "SWIFT" },
            { no: 3, name: "ANDROID" },
            { no: 4, name: "FLUTTER" },
            { no: 5, name: "GO" },
            { no: 6, name: "UNITY" },
            { no: 7, name: "REACT_NATIVE" },
            { no: 8, name: "RUST" },
            { no: 9, name: "PYTHON" },
            { no: 10, name: "CPP" },
            { no: 11, name: "UNITY_WEB" },
            { no: 12, name: "NODE" },
            { no: 13, name: "UNREAL" },
            { no: 14, name: "ESP32" },
          ]),
          Ot = Le.makeMessageType("livekit.ClientConfiguration", () => [
            { no: 1, name: "video", kind: "message", T: Dt },
            { no: 2, name: "screen", kind: "message", T: Dt },
            {
              no: 3,
              name: "resume_connection",
              kind: "enum",
              T: Le.getEnumType(Qe),
            },
            { no: 4, name: "disabled_codecs", kind: "message", T: xt },
            { no: 5, name: "force_relay", kind: "enum", T: Le.getEnumType(Qe) },
          ]),
          Dt = Le.makeMessageType("livekit.VideoConfiguration", () => [
            {
              no: 1,
              name: "hardware_encoder",
              kind: "enum",
              T: Le.getEnumType(Qe),
            },
          ]),
          xt = Le.makeMessageType("livekit.DisabledCodecs", () => [
            { no: 1, name: "codecs", kind: "message", T: tt, repeated: !0 },
            { no: 2, name: "publish", kind: "message", T: tt, repeated: !0 },
          ]),
          Mt = Le.makeMessageType("livekit.TimedVersion", () => [
            { no: 1, name: "unix_micro", kind: "scalar", T: 3 },
            { no: 2, name: "ticks", kind: "scalar", T: 5 },
          ]),
          _t = Le.makeEnum("livekit.DataStream.OperationType", [
            { no: 0, name: "CREATE" },
            { no: 1, name: "UPDATE" },
            { no: 2, name: "DELETE" },
            { no: 3, name: "REACTION" },
          ]),
          At = Le.makeMessageType(
            "livekit.DataStream.TextHeader",
            () => [
              {
                no: 1,
                name: "operation_type",
                kind: "enum",
                T: Le.getEnumType(_t),
              },
              { no: 2, name: "version", kind: "scalar", T: 5 },
              { no: 3, name: "reply_to_stream_id", kind: "scalar", T: 9 },
              {
                no: 4,
                name: "attached_stream_ids",
                kind: "scalar",
                T: 9,
                repeated: !0,
              },
              { no: 5, name: "generated", kind: "scalar", T: 8 },
            ],
            { localName: "DataStream_TextHeader" },
          ),
          Nt = Le.makeMessageType(
            "livekit.DataStream.ByteHeader",
            () => [{ no: 1, name: "name", kind: "scalar", T: 9 }],
            { localName: "DataStream_ByteHeader" },
          ),
          Lt = Le.makeMessageType(
            "livekit.DataStream.Header",
            () => [
              { no: 1, name: "stream_id", kind: "scalar", T: 9 },
              { no: 2, name: "timestamp", kind: "scalar", T: 3 },
              { no: 3, name: "topic", kind: "scalar", T: 9 },
              { no: 4, name: "mime_type", kind: "scalar", T: 9 },
              { no: 5, name: "total_length", kind: "scalar", T: 4, opt: !0 },
              {
                no: 7,
                name: "encryption_type",
                kind: "enum",
                T: Le.getEnumType(at),
              },
              {
                no: 8,
                name: "attributes",
                kind: "map",
                K: 9,
                V: { kind: "scalar", T: 9 },
              },
              {
                no: 9,
                name: "text_header",
                kind: "message",
                T: At,
                oneof: "content_header",
              },
              {
                no: 10,
                name: "byte_header",
                kind: "message",
                T: Nt,
                oneof: "content_header",
              },
            ],
            { localName: "DataStream_Header" },
          ),
          Ut = Le.makeMessageType(
            "livekit.DataStream.Chunk",
            () => [
              { no: 1, name: "stream_id", kind: "scalar", T: 9 },
              { no: 2, name: "chunk_index", kind: "scalar", T: 4 },
              { no: 3, name: "content", kind: "scalar", T: 12 },
              { no: 4, name: "version", kind: "scalar", T: 5 },
              { no: 5, name: "iv", kind: "scalar", T: 12, opt: !0 },
            ],
            { localName: "DataStream_Chunk" },
          ),
          jt = Le.makeMessageType(
            "livekit.DataStream.Trailer",
            () => [
              { no: 1, name: "stream_id", kind: "scalar", T: 9 },
              { no: 2, name: "reason", kind: "scalar", T: 9 },
              {
                no: 3,
                name: "attributes",
                kind: "map",
                K: 9,
                V: { kind: "scalar", T: 9 },
              },
            ],
            { localName: "DataStream_Trailer" },
          ),
          Ft = Le.makeEnum("livekit.SignalTarget", [
            { no: 0, name: "PUBLISHER" },
            { no: 1, name: "SUBSCRIBER" },
          ]),
          Bt = Le.makeEnum("livekit.StreamState", [
            { no: 0, name: "ACTIVE" },
            { no: 1, name: "PAUSED" },
          ]),
          Vt = Le.makeEnum("livekit.CandidateProtocol", [
            { no: 0, name: "UDP" },
            { no: 1, name: "TCP" },
            { no: 2, name: "TLS" },
          ]),
          qt = Le.makeMessageType("livekit.SignalRequest", () => [
            { no: 1, name: "offer", kind: "message", T: Zt, oneof: "message" },
            { no: 2, name: "answer", kind: "message", T: Zt, oneof: "message" },
            {
              no: 3,
              name: "trickle",
              kind: "message",
              T: Ht,
              oneof: "message",
            },
            {
              no: 4,
              name: "add_track",
              kind: "message",
              T: Gt,
              oneof: "message",
            },
            { no: 5, name: "mute", kind: "message", T: zt, oneof: "message" },
            {
              no: 6,
              name: "subscription",
              kind: "message",
              T: ei,
              oneof: "message",
            },
            {
              no: 7,
              name: "track_setting",
              kind: "message",
              T: ti,
              oneof: "message",
            },
            { no: 8, name: "leave", kind: "message", T: si, oneof: "message" },
            {
              no: 10,
              name: "update_layers",
              kind: "message",
              T: oi,
              oneof: "message",
            },
            {
              no: 11,
              name: "subscription_permission",
              kind: "message",
              T: ki,
              oneof: "message",
            },
            {
              no: 12,
              name: "sync_state",
              kind: "message",
              T: Ci,
              oneof: "message",
            },
            {
              no: 13,
              name: "simulate",
              kind: "message",
              T: Ei,
              oneof: "message",
            },
            { no: 14, name: "ping", kind: "scalar", T: 3, oneof: "message" },
            {
              no: 15,
              name: "update_metadata",
              kind: "message",
              T: ai,
              oneof: "message",
            },
            {
              no: 16,
              name: "ping_req",
              kind: "message",
              T: Pi,
              oneof: "message",
            },
            {
              no: 17,
              name: "update_audio_track",
              kind: "message",
              T: ii,
              oneof: "message",
            },
            {
              no: 18,
              name: "update_video_track",
              kind: "message",
              T: ni,
              oneof: "message",
            },
          ]),
          Kt = Le.makeMessageType("livekit.SignalResponse", () => [
            { no: 1, name: "join", kind: "message", T: Jt, oneof: "message" },
            { no: 2, name: "answer", kind: "message", T: Zt, oneof: "message" },
            { no: 3, name: "offer", kind: "message", T: Zt, oneof: "message" },
            {
              no: 4,
              name: "trickle",
              kind: "message",
              T: Ht,
              oneof: "message",
            },
            { no: 5, name: "update", kind: "message", T: $t, oneof: "message" },
            {
              no: 6,
              name: "track_published",
              kind: "message",
              T: Yt,
              oneof: "message",
            },
            { no: 8, name: "leave", kind: "message", T: si, oneof: "message" },
            { no: 9, name: "mute", kind: "message", T: zt, oneof: "message" },
            {
              no: 10,
              name: "speakers_changed",
              kind: "message",
              T: di,
              oneof: "message",
            },
            {
              no: 11,
              name: "room_update",
              kind: "message",
              T: li,
              oneof: "message",
            },
            {
              no: 12,
              name: "connection_quality",
              kind: "message",
              T: hi,
              oneof: "message",
            },
            {
              no: 13,
              name: "stream_state_update",
              kind: "message",
              T: mi,
              oneof: "message",
            },
            {
              no: 14,
              name: "subscribed_quality_update",
              kind: "message",
              T: vi,
              oneof: "message",
            },
            {
              no: 15,
              name: "subscription_permission_update",
              kind: "message",
              T: yi,
              oneof: "message",
            },
            {
              no: 16,
              name: "refresh_token",
              kind: "scalar",
              T: 9,
              oneof: "message",
            },
            {
              no: 17,
              name: "track_unpublished",
              kind: "message",
              T: Xt,
              oneof: "message",
            },
            { no: 18, name: "pong", kind: "scalar", T: 3, oneof: "message" },
            {
              no: 19,
              name: "reconnect",
              kind: "message",
              T: Qt,
              oneof: "message",
            },
            {
              no: 20,
              name: "pong_resp",
              kind: "message",
              T: Ri,
              oneof: "message",
            },
            {
              no: 21,
              name: "subscription_response",
              kind: "message",
              T: Di,
              oneof: "message",
            },
            {
              no: 22,
              name: "request_response",
              kind: "message",
              T: xi,
              oneof: "message",
            },
            {
              no: 23,
              name: "track_subscribed",
              kind: "message",
              T: _i,
              oneof: "message",
            },
            {
              no: 24,
              name: "room_moved",
              kind: "message",
              T: Ti,
              oneof: "message",
            },
          ]),
          Wt = Le.makeMessageType("livekit.SimulcastCodec", () => [
            { no: 1, name: "codec", kind: "scalar", T: 9 },
            { no: 2, name: "cid", kind: "scalar", T: 9 },
          ]),
          Gt = Le.makeMessageType("livekit.AddTrackRequest", () => [
            { no: 1, name: "cid", kind: "scalar", T: 9 },
            { no: 2, name: "name", kind: "scalar", T: 9 },
            { no: 3, name: "type", kind: "enum", T: Le.getEnumType(Ge) },
            { no: 4, name: "width", kind: "scalar", T: 13 },
            { no: 5, name: "height", kind: "scalar", T: 13 },
            { no: 6, name: "muted", kind: "scalar", T: 8 },
            { no: 7, name: "disable_dtx", kind: "scalar", T: 8 },
            { no: 8, name: "source", kind: "enum", T: Le.getEnumType(He) },
            { no: 9, name: "layers", kind: "message", T: lt, repeated: !0 },
            {
              no: 10,
              name: "simulcast_codecs",
              kind: "message",
              T: Wt,
              repeated: !0,
            },
            { no: 11, name: "sid", kind: "scalar", T: 9 },
            { no: 12, name: "stereo", kind: "scalar", T: 8 },
            { no: 13, name: "disable_red", kind: "scalar", T: 8 },
            { no: 14, name: "encryption", kind: "enum", T: Le.getEnumType(at) },
            { no: 15, name: "stream", kind: "scalar", T: 9 },
            {
              no: 16,
              name: "backup_codec_policy",
              kind: "enum",
              T: Le.getEnumType(We),
            },
            {
              no: 17,
              name: "audio_features",
              kind: "enum",
              T: Le.getEnumType($e),
              repeated: !0,
            },
          ]),
          Ht = Le.makeMessageType("livekit.TrickleRequest", () => [
            { no: 1, name: "candidateInit", kind: "scalar", T: 9 },
            { no: 2, name: "target", kind: "enum", T: Le.getEnumType(Ft) },
            { no: 3, name: "final", kind: "scalar", T: 8 },
          ]),
          zt = Le.makeMessageType("livekit.MuteTrackRequest", () => [
            { no: 1, name: "sid", kind: "scalar", T: 9 },
            { no: 2, name: "muted", kind: "scalar", T: 8 },
          ]),
          Jt = Le.makeMessageType("livekit.JoinResponse", () => [
            { no: 1, name: "room", kind: "message", T: et },
            { no: 2, name: "participant", kind: "message", T: nt },
            {
              no: 3,
              name: "other_participants",
              kind: "message",
              T: nt,
              repeated: !0,
            },
            { no: 4, name: "server_version", kind: "scalar", T: 9 },
            {
              no: 5,
              name: "ice_servers",
              kind: "message",
              T: ci,
              repeated: !0,
            },
            { no: 6, name: "subscriber_primary", kind: "scalar", T: 8 },
            { no: 7, name: "alternative_url", kind: "scalar", T: 9 },
            { no: 8, name: "client_configuration", kind: "message", T: Ot },
            { no: 9, name: "server_region", kind: "scalar", T: 9 },
            { no: 10, name: "ping_timeout", kind: "scalar", T: 5 },
            { no: 11, name: "ping_interval", kind: "scalar", T: 5 },
            { no: 12, name: "server_info", kind: "message", T: Et },
            { no: 13, name: "sif_trailer", kind: "scalar", T: 12 },
            {
              no: 14,
              name: "enabled_publish_codecs",
              kind: "message",
              T: tt,
              repeated: !0,
            },
            { no: 15, name: "fast_publish", kind: "scalar", T: 8 },
          ]),
          Qt = Le.makeMessageType("livekit.ReconnectResponse", () => [
            {
              no: 1,
              name: "ice_servers",
              kind: "message",
              T: ci,
              repeated: !0,
            },
            { no: 2, name: "client_configuration", kind: "message", T: Ot },
            { no: 3, name: "server_info", kind: "message", T: Et },
            { no: 4, name: "last_message_seq", kind: "scalar", T: 13 },
          ]),
          Yt = Le.makeMessageType("livekit.TrackPublishedResponse", () => [
            { no: 1, name: "cid", kind: "scalar", T: 9 },
            { no: 2, name: "track", kind: "message", T: dt },
          ]),
          Xt = Le.makeMessageType("livekit.TrackUnpublishedResponse", () => [
            { no: 1, name: "track_sid", kind: "scalar", T: 9 },
          ]),
          Zt = Le.makeMessageType("livekit.SessionDescription", () => [
            { no: 1, name: "type", kind: "scalar", T: 9 },
            { no: 2, name: "sdp", kind: "scalar", T: 9 },
            { no: 3, name: "id", kind: "scalar", T: 13 },
          ]),
          $t = Le.makeMessageType("livekit.ParticipantUpdate", () => [
            {
              no: 1,
              name: "participants",
              kind: "message",
              T: nt,
              repeated: !0,
            },
          ]),
          ei = Le.makeMessageType("livekit.UpdateSubscription", () => [
            { no: 1, name: "track_sids", kind: "scalar", T: 9, repeated: !0 },
            { no: 2, name: "subscribe", kind: "scalar", T: 8 },
            {
              no: 3,
              name: "participant_tracks",
              kind: "message",
              T: wt,
              repeated: !0,
            },
          ]),
          ti = Le.makeMessageType("livekit.UpdateTrackSettings", () => [
            { no: 1, name: "track_sids", kind: "scalar", T: 9, repeated: !0 },
            { no: 3, name: "disabled", kind: "scalar", T: 8 },
            { no: 4, name: "quality", kind: "enum", T: Le.getEnumType(ze) },
            { no: 5, name: "width", kind: "scalar", T: 13 },
            { no: 6, name: "height", kind: "scalar", T: 13 },
            { no: 7, name: "fps", kind: "scalar", T: 13 },
            { no: 8, name: "priority", kind: "scalar", T: 13 },
          ]),
          ii = Le.makeMessageType("livekit.UpdateLocalAudioTrack", () => [
            { no: 1, name: "track_sid", kind: "scalar", T: 9 },
            {
              no: 2,
              name: "features",
              kind: "enum",
              T: Le.getEnumType($e),
              repeated: !0,
            },
          ]),
          ni = Le.makeMessageType("livekit.UpdateLocalVideoTrack", () => [
            { no: 1, name: "track_sid", kind: "scalar", T: 9 },
            { no: 2, name: "width", kind: "scalar", T: 13 },
            { no: 3, name: "height", kind: "scalar", T: 13 },
          ]),
          si = Le.makeMessageType("livekit.LeaveRequest", () => [
            { no: 1, name: "can_reconnect", kind: "scalar", T: 8 },
            { no: 2, name: "reason", kind: "enum", T: Le.getEnumType(Ye) },
            { no: 3, name: "action", kind: "enum", T: Le.getEnumType(ri) },
            { no: 4, name: "regions", kind: "message", T: Ii },
          ]),
          ri = Le.makeEnum("livekit.LeaveRequest.Action", [
            { no: 0, name: "DISCONNECT" },
            { no: 1, name: "RESUME" },
            { no: 2, name: "RECONNECT" },
          ]),
          oi = Le.makeMessageType("livekit.UpdateVideoLayers", () => [
            { no: 1, name: "track_sid", kind: "scalar", T: 9 },
            { no: 2, name: "layers", kind: "message", T: lt, repeated: !0 },
          ]),
          ai = Le.makeMessageType("livekit.UpdateParticipantMetadata", () => [
            { no: 1, name: "metadata", kind: "scalar", T: 9 },
            { no: 2, name: "name", kind: "scalar", T: 9 },
            {
              no: 3,
              name: "attributes",
              kind: "map",
              K: 9,
              V: { kind: "scalar", T: 9 },
            },
            { no: 4, name: "request_id", kind: "scalar", T: 13 },
          ]),
          ci = Le.makeMessageType("livekit.ICEServer", () => [
            { no: 1, name: "urls", kind: "scalar", T: 9, repeated: !0 },
            { no: 2, name: "username", kind: "scalar", T: 9 },
            { no: 3, name: "credential", kind: "scalar", T: 9 },
          ]),
          di = Le.makeMessageType("livekit.SpeakersChanged", () => [
            { no: 1, name: "speakers", kind: "message", T: mt, repeated: !0 },
          ]),
          li = Le.makeMessageType("livekit.RoomUpdate", () => [
            { no: 1, name: "room", kind: "message", T: et },
          ]),
          ui = Le.makeMessageType("livekit.ConnectionQualityInfo", () => [
            { no: 1, name: "participant_sid", kind: "scalar", T: 9 },
            { no: 2, name: "quality", kind: "enum", T: Le.getEnumType(Je) },
            { no: 3, name: "score", kind: "scalar", T: 2 },
          ]),
          hi = Le.makeMessageType("livekit.ConnectionQualityUpdate", () => [
            { no: 1, name: "updates", kind: "message", T: ui, repeated: !0 },
          ]),
          pi = Le.makeMessageType("livekit.StreamStateInfo", () => [
            { no: 1, name: "participant_sid", kind: "scalar", T: 9 },
            { no: 2, name: "track_sid", kind: "scalar", T: 9 },
            { no: 3, name: "state", kind: "enum", T: Le.getEnumType(Bt) },
          ]),
          mi = Le.makeMessageType("livekit.StreamStateUpdate", () => [
            {
              no: 1,
              name: "stream_states",
              kind: "message",
              T: pi,
              repeated: !0,
            },
          ]),
          gi = Le.makeMessageType("livekit.SubscribedQuality", () => [
            { no: 1, name: "quality", kind: "enum", T: Le.getEnumType(ze) },
            { no: 2, name: "enabled", kind: "scalar", T: 8 },
          ]),
          fi = Le.makeMessageType("livekit.SubscribedCodec", () => [
            { no: 1, name: "codec", kind: "scalar", T: 9 },
            { no: 2, name: "qualities", kind: "message", T: gi, repeated: !0 },
          ]),
          vi = Le.makeMessageType("livekit.SubscribedQualityUpdate", () => [
            { no: 1, name: "track_sid", kind: "scalar", T: 9 },
            {
              no: 2,
              name: "subscribed_qualities",
              kind: "message",
              T: gi,
              repeated: !0,
            },
            {
              no: 3,
              name: "subscribed_codecs",
              kind: "message",
              T: fi,
              repeated: !0,
            },
          ]),
          bi = Le.makeMessageType("livekit.TrackPermission", () => [
            { no: 1, name: "participant_sid", kind: "scalar", T: 9 },
            { no: 2, name: "all_tracks", kind: "scalar", T: 8 },
            { no: 3, name: "track_sids", kind: "scalar", T: 9, repeated: !0 },
            { no: 4, name: "participant_identity", kind: "scalar", T: 9 },
          ]),
          ki = Le.makeMessageType("livekit.SubscriptionPermission", () => [
            { no: 1, name: "all_participants", kind: "scalar", T: 8 },
            {
              no: 2,
              name: "track_permissions",
              kind: "message",
              T: bi,
              repeated: !0,
            },
          ]),
          yi = Le.makeMessageType(
            "livekit.SubscriptionPermissionUpdate",
            () => [
              { no: 1, name: "participant_sid", kind: "scalar", T: 9 },
              { no: 2, name: "track_sid", kind: "scalar", T: 9 },
              { no: 3, name: "allowed", kind: "scalar", T: 8 },
            ],
          ),
          Ti = Le.makeMessageType("livekit.RoomMovedResponse", () => [
            { no: 1, name: "room", kind: "message", T: et },
            { no: 2, name: "token", kind: "scalar", T: 9 },
            { no: 3, name: "participant", kind: "message", T: nt },
            {
              no: 4,
              name: "other_participants",
              kind: "message",
              T: nt,
              repeated: !0,
            },
          ]),
          Ci = Le.makeMessageType("livekit.SyncState", () => [
            { no: 1, name: "answer", kind: "message", T: Zt },
            { no: 2, name: "subscription", kind: "message", T: ei },
            {
              no: 3,
              name: "publish_tracks",
              kind: "message",
              T: Yt,
              repeated: !0,
            },
            {
              no: 4,
              name: "data_channels",
              kind: "message",
              T: wi,
              repeated: !0,
            },
            { no: 5, name: "offer", kind: "message", T: Zt },
            {
              no: 6,
              name: "track_sids_disabled",
              kind: "scalar",
              T: 9,
              repeated: !0,
            },
            {
              no: 7,
              name: "datachannel_receive_states",
              kind: "message",
              T: Si,
              repeated: !0,
            },
          ]),
          Si = Le.makeMessageType("livekit.DataChannelReceiveState", () => [
            { no: 1, name: "publisher_sid", kind: "scalar", T: 9 },
            { no: 2, name: "last_seq", kind: "scalar", T: 13 },
          ]),
          wi = Le.makeMessageType("livekit.DataChannelInfo", () => [
            { no: 1, name: "label", kind: "scalar", T: 9 },
            { no: 2, name: "id", kind: "scalar", T: 13 },
            { no: 3, name: "target", kind: "enum", T: Le.getEnumType(Ft) },
          ]),
          Ei = Le.makeMessageType("livekit.SimulateScenario", () => [
            {
              no: 1,
              name: "speaker_update",
              kind: "scalar",
              T: 5,
              oneof: "scenario",
            },
            {
              no: 2,
              name: "node_failure",
              kind: "scalar",
              T: 8,
              oneof: "scenario",
            },
            {
              no: 3,
              name: "migration",
              kind: "scalar",
              T: 8,
              oneof: "scenario",
            },
            {
              no: 4,
              name: "server_leave",
              kind: "scalar",
              T: 8,
              oneof: "scenario",
            },
            {
              no: 5,
              name: "switch_candidate_protocol",
              kind: "enum",
              T: Le.getEnumType(Vt),
              oneof: "scenario",
            },
            {
              no: 6,
              name: "subscriber_bandwidth",
              kind: "scalar",
              T: 3,
              oneof: "scenario",
            },
            {
              no: 7,
              name: "disconnect_signal_on_resume",
              kind: "scalar",
              T: 8,
              oneof: "scenario",
            },
            {
              no: 8,
              name: "disconnect_signal_on_resume_no_messages",
              kind: "scalar",
              T: 8,
              oneof: "scenario",
            },
            {
              no: 9,
              name: "leave_request_full_reconnect",
              kind: "scalar",
              T: 8,
              oneof: "scenario",
            },
          ]),
          Pi = Le.makeMessageType("livekit.Ping", () => [
            { no: 1, name: "timestamp", kind: "scalar", T: 3 },
            { no: 2, name: "rtt", kind: "scalar", T: 3 },
          ]),
          Ri = Le.makeMessageType("livekit.Pong", () => [
            { no: 1, name: "last_ping_timestamp", kind: "scalar", T: 3 },
            { no: 2, name: "timestamp", kind: "scalar", T: 3 },
          ]),
          Ii = Le.makeMessageType("livekit.RegionSettings", () => [
            { no: 1, name: "regions", kind: "message", T: Oi, repeated: !0 },
          ]),
          Oi = Le.makeMessageType("livekit.RegionInfo", () => [
            { no: 1, name: "region", kind: "scalar", T: 9 },
            { no: 2, name: "url", kind: "scalar", T: 9 },
            { no: 3, name: "distance", kind: "scalar", T: 3 },
          ]),
          Di = Le.makeMessageType("livekit.SubscriptionResponse", () => [
            { no: 1, name: "track_sid", kind: "scalar", T: 9 },
            { no: 2, name: "err", kind: "enum", T: Le.getEnumType(Ze) },
          ]),
          xi = Le.makeMessageType("livekit.RequestResponse", () => [
            { no: 1, name: "request_id", kind: "scalar", T: 13 },
            { no: 2, name: "reason", kind: "enum", T: Le.getEnumType(Mi) },
            { no: 3, name: "message", kind: "scalar", T: 9 },
          ]),
          Mi = Le.makeEnum("livekit.RequestResponse.Reason", [
            { no: 0, name: "OK" },
            { no: 1, name: "NOT_FOUND" },
            { no: 2, name: "NOT_ALLOWED" },
            { no: 3, name: "LIMIT_EXCEEDED" },
          ]),
          _i = Le.makeMessageType("livekit.TrackSubscribed", () => [
            { no: 1, name: "track_sid", kind: "scalar", T: 9 },
          ]);
        function Ai(e) {
          return e &&
            e.__esModule &&
            Object.prototype.hasOwnProperty.call(e, "default")
            ? e.default
            : e;
        }
        var Ni,
          Li,
          Ui,
          ji,
          Fi,
          Bi,
          Vi = { exports: {} },
          qi =
            (Ni ||
              ((Ni = 1),
              (Ui = Vi.exports),
              (ji = function () {
                var e = function () {},
                  t = "undefined",
                  i =
                    typeof window !== t &&
                    typeof window.navigator !== t &&
                    /Trident\/|MSIE /.test(window.navigator.userAgent),
                  n = ["trace", "debug", "info", "warn", "error"],
                  s = {},
                  r = null;
                function o(e, t) {
                  var i = e[t];
                  if ("function" == typeof i.bind) return i.bind(e);
                  try {
                    return Function.prototype.bind.call(i, e);
                  } catch (t) {
                    return function () {
                      return Function.prototype.apply.apply(i, [e, arguments]);
                    };
                  }
                }
                function a() {
                  (console.log &&
                    (console.log.apply
                      ? console.log.apply(console, arguments)
                      : Function.prototype.apply.apply(console.log, [
                          console,
                          arguments,
                        ])),
                    console.trace && console.trace());
                }
                function c() {
                  for (var i = this.getLevel(), s = 0; s < n.length; s++) {
                    var r = n[s];
                    this[r] = s < i ? e : this.methodFactory(r, i, this.name);
                  }
                  if (
                    ((this.log = this.debug),
                    typeof console === t && i < this.levels.SILENT)
                  )
                    return "No console available for logging";
                }
                function d(e) {
                  return function () {
                    typeof console !== t &&
                      (c.call(this), this[e].apply(this, arguments));
                  };
                }
                function l(n, s, r) {
                  return (
                    (function (n) {
                      return (
                        "debug" === n && (n = "log"),
                        typeof console !== t &&
                          ("trace" === n && i
                            ? a
                            : void 0 !== console[n]
                              ? o(console, n)
                              : void 0 !== console.log
                                ? o(console, "log")
                                : e)
                      );
                    })(n) || d.apply(this, arguments)
                  );
                }
                function u(e, i) {
                  var o,
                    a,
                    d,
                    u = this,
                    h = "loglevel";
                  function p() {
                    var e;
                    if (typeof window !== t && h) {
                      try {
                        e = window.localStorage[h];
                      } catch (e) {}
                      if (typeof e === t)
                        try {
                          var i = window.document.cookie,
                            n = encodeURIComponent(h),
                            s = i.indexOf(n + "=");
                          -1 !== s &&
                            (e = /^([^;]+)/.exec(i.slice(s + n.length + 1))[1]);
                        } catch (e) {}
                      return (void 0 === u.levels[e] && (e = void 0), e);
                    }
                  }
                  function m(e) {
                    var t = e;
                    if (
                      ("string" == typeof t &&
                        void 0 !== u.levels[t.toUpperCase()] &&
                        (t = u.levels[t.toUpperCase()]),
                      "number" == typeof t && t >= 0 && t <= u.levels.SILENT)
                    )
                      return t;
                    throw new TypeError(
                      "log.setLevel() called with invalid level: " + e,
                    );
                  }
                  ("string" == typeof e
                    ? (h += ":" + e)
                    : "symbol" == typeof e && (h = void 0),
                    (u.name = e),
                    (u.levels = {
                      TRACE: 0,
                      DEBUG: 1,
                      INFO: 2,
                      WARN: 3,
                      ERROR: 4,
                      SILENT: 5,
                    }),
                    (u.methodFactory = i || l),
                    (u.getLevel = function () {
                      return null != d ? d : null != a ? a : o;
                    }),
                    (u.setLevel = function (e, i) {
                      return (
                        (d = m(e)),
                        !1 !== i &&
                          (function (e) {
                            var i = (n[e] || "silent").toUpperCase();
                            if (typeof window !== t && h) {
                              try {
                                return void (window.localStorage[h] = i);
                              } catch (e) {}
                              try {
                                window.document.cookie =
                                  encodeURIComponent(h) + "=" + i + ";";
                              } catch (e) {}
                            }
                          })(d),
                        c.call(u)
                      );
                    }),
                    (u.setDefaultLevel = function (e) {
                      ((a = m(e)), p() || u.setLevel(e, !1));
                    }),
                    (u.resetLevel = function () {
                      ((d = null),
                        (function () {
                          if (typeof window !== t && h) {
                            try {
                              window.localStorage.removeItem(h);
                            } catch (e) {}
                            try {
                              window.document.cookie =
                                encodeURIComponent(h) +
                                "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                            } catch (e) {}
                          }
                        })(),
                        c.call(u));
                    }),
                    (u.enableAll = function (e) {
                      u.setLevel(u.levels.TRACE, e);
                    }),
                    (u.disableAll = function (e) {
                      u.setLevel(u.levels.SILENT, e);
                    }),
                    (u.rebuild = function () {
                      if (
                        (r !== u && (o = m(r.getLevel())), c.call(u), r === u)
                      )
                        for (var e in s) s[e].rebuild();
                    }),
                    (o = m(r ? r.getLevel() : "WARN")));
                  var g = p();
                  (null != g && (d = m(g)), c.call(u));
                }
                (r = new u()).getLogger = function (e) {
                  if (
                    ("symbol" != typeof e && "string" != typeof e) ||
                    "" === e
                  )
                    throw new TypeError(
                      "You must supply a name when creating a logger.",
                    );
                  var t = s[e];
                  return (t || (t = s[e] = new u(e, r.methodFactory)), t);
                };
                var h = typeof window !== t ? window.log : void 0;
                return (
                  (r.noConflict = function () {
                    return (
                      typeof window !== t &&
                        window.log === r &&
                        (window.log = h),
                      r
                    );
                  }),
                  (r.getLoggers = function () {
                    return s;
                  }),
                  (r.default = r),
                  r
                );
              }),
              (Li = Vi).exports ? (Li.exports = ji()) : (Ui.log = ji())),
            Vi.exports);
        (!(function (e) {
          ((e[(e.trace = 0)] = "trace"),
            (e[(e.debug = 1)] = "debug"),
            (e[(e.info = 2)] = "info"),
            (e[(e.warn = 3)] = "warn"),
            (e[(e.error = 4)] = "error"),
            (e[(e.silent = 5)] = "silent"));
        })(Fi || (Fi = {})),
          (function (e) {
            ((e.Default = "livekit"),
              (e.Room = "livekit-room"),
              (e.Participant = "livekit-participant"),
              (e.Track = "livekit-track"),
              (e.Publication = "livekit-track-publication"),
              (e.Engine = "livekit-engine"),
              (e.Signal = "livekit-signal"),
              (e.PCManager = "livekit-pc-manager"),
              (e.PCTransport = "livekit-pc-transport"),
              (e.E2EE = "lk-e2ee"));
          })(Bi || (Bi = {})));
        let Ki = qi.getLogger("livekit");
        const Wi = Object.values(Bi).map((e) => qi.getLogger(e));
        function Gi(e) {
          const t = qi.getLogger(e);
          return (t.setDefaultLevel(Ki.getLevel()), t);
        }
        function Hi(e, t) {
          if (t) qi.getLogger(t).setLevel(e);
          else for (const t of Wi) t.setLevel(e);
        }
        function zi(e, t) {
          (t ? [t] : Wi).forEach((t) => {
            const i = t.methodFactory;
            ((t.methodFactory = (t, n, s) => {
              const r = i(t, n, s),
                o = Fi[t],
                a = o >= n && o < Fi.silent;
              return (t, i) => {
                (i ? r(t, i) : r(t), a && e(o, t, i));
              };
            }),
              t.setLevel(t.getLevel()));
          });
        }
        Ki.setDefaultLevel(Fi.info);
        const Ji = qi.getLogger("lk-e2ee"),
          Qi = 7e3,
          Yi = [0, 300, 1200, 2700, 4800, Qi, Qi, Qi, Qi, Qi];
        class Xi {
          constructor(e) {
            this._retryDelays = void 0 !== e ? [...e] : Yi;
          }
          nextRetryDelayInMs(e) {
            if (e.retryCount >= this._retryDelays.length) return null;
            const t = this._retryDelays[e.retryCount];
            return e.retryCount <= 1 ? t : t + 1e3 * Math.random();
          }
        }
        function Zi(e, t, i, n) {
          return new (i || (i = Promise))(function (s, r) {
            function o(e) {
              try {
                c(n.next(e));
              } catch (e) {
                r(e);
              }
            }
            function a(e) {
              try {
                c(n.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? s(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(o, a);
            }
            c((n = n.apply(e, t || [])).next());
          });
        }
        function $i(e) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var t,
            i = e[Symbol.asyncIterator];
          return i
            ? i.call(e)
            : ((e = (function (e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                  i = t && e[t],
                  n = 0;
                if (i) return i.call(e);
                if (e && "number" == typeof e.length)
                  return {
                    next: function () {
                      return (
                        e && n >= e.length && (e = void 0),
                        { value: e && e[n++], done: !e }
                      );
                    },
                  };
                throw new TypeError(
                  t
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined.",
                );
              })(e)),
              (t = {}),
              n("next"),
              n("throw"),
              n("return"),
              (t[Symbol.asyncIterator] = function () {
                return this;
              }),
              t);
          function n(i) {
            t[i] =
              e[i] &&
              function (t) {
                return new Promise(function (n, s) {
                  !(function (e, t, i, n) {
                    Promise.resolve(n).then(function (t) {
                      e({ value: t, done: i });
                    }, t);
                  })(n, s, (t = e[i](t)).done, t.value);
                });
              };
          }
        }
        "function" == typeof SuppressedError && SuppressedError;
        var en,
          tn = { exports: {} },
          nn = (function () {
            if (en) return tn.exports;
            en = 1;
            var e,
              t = "object" == typeof Reflect ? Reflect : null,
              i =
                t && "function" == typeof t.apply
                  ? t.apply
                  : function (e, t, i) {
                      return Function.prototype.apply.call(e, t, i);
                    };
            e =
              t && "function" == typeof t.ownKeys
                ? t.ownKeys
                : Object.getOwnPropertySymbols
                  ? function (e) {
                      return Object.getOwnPropertyNames(e).concat(
                        Object.getOwnPropertySymbols(e),
                      );
                    }
                  : function (e) {
                      return Object.getOwnPropertyNames(e);
                    };
            var n =
              Number.isNaN ||
              function (e) {
                return e != e;
              };
            function s() {
              s.init.call(this);
            }
            ((tn.exports = s),
              (tn.exports.once = function (e, t) {
                return new Promise(function (i, n) {
                  function s(i) {
                    (e.removeListener(t, r), n(i));
                  }
                  function r() {
                    ("function" == typeof e.removeListener &&
                      e.removeListener("error", s),
                      i([].slice.call(arguments)));
                  }
                  (m(e, t, r, { once: !0 }),
                    "error" !== t &&
                      (function (e, t, i) {
                        "function" == typeof e.on &&
                          m(e, "error", t, { once: !0 });
                      })(e, s));
                });
              }),
              (s.EventEmitter = s),
              (s.prototype._events = void 0),
              (s.prototype._eventsCount = 0),
              (s.prototype._maxListeners = void 0));
            var r = 10;
            function o(e) {
              if ("function" != typeof e)
                throw new TypeError(
                  'The "listener" argument must be of type Function. Received type ' +
                    typeof e,
                );
            }
            function a(e) {
              return void 0 === e._maxListeners
                ? s.defaultMaxListeners
                : e._maxListeners;
            }
            function c(e, t, i, n) {
              var s, r, c, d;
              if (
                (o(i),
                void 0 === (r = e._events)
                  ? ((r = e._events = Object.create(null)),
                    (e._eventsCount = 0))
                  : (void 0 !== r.newListener &&
                      (e.emit("newListener", t, i.listener ? i.listener : i),
                      (r = e._events)),
                    (c = r[t])),
                void 0 === c)
              )
                ((c = r[t] = i), ++e._eventsCount);
              else if (
                ("function" == typeof c
                  ? (c = r[t] = n ? [i, c] : [c, i])
                  : n
                    ? c.unshift(i)
                    : c.push(i),
                (s = a(e)) > 0 && c.length > s && !c.warned)
              ) {
                c.warned = !0;
                var l = new Error(
                  "Possible EventEmitter memory leak detected. " +
                    c.length +
                    " " +
                    String(t) +
                    " listeners added. Use emitter.setMaxListeners() to increase limit",
                );
                ((l.name = "MaxListenersExceededWarning"),
                  (l.emitter = e),
                  (l.type = t),
                  (l.count = c.length),
                  (d = l),
                  console && console.warn && console.warn(d));
              }
              return e;
            }
            function d() {
              if (!this.fired)
                return (
                  this.target.removeListener(this.type, this.wrapFn),
                  (this.fired = !0),
                  0 === arguments.length
                    ? this.listener.call(this.target)
                    : this.listener.apply(this.target, arguments)
                );
            }
            function l(e, t, i) {
              var n = {
                  fired: !1,
                  wrapFn: void 0,
                  target: e,
                  type: t,
                  listener: i,
                },
                s = d.bind(n);
              return ((s.listener = i), (n.wrapFn = s), s);
            }
            function u(e, t, i) {
              var n = e._events;
              if (void 0 === n) return [];
              var s = n[t];
              return void 0 === s
                ? []
                : "function" == typeof s
                  ? i
                    ? [s.listener || s]
                    : [s]
                  : i
                    ? (function (e) {
                        for (
                          var t = new Array(e.length), i = 0;
                          i < t.length;
                          ++i
                        )
                          t[i] = e[i].listener || e[i];
                        return t;
                      })(s)
                    : p(s, s.length);
            }
            function h(e) {
              var t = this._events;
              if (void 0 !== t) {
                var i = t[e];
                if ("function" == typeof i) return 1;
                if (void 0 !== i) return i.length;
              }
              return 0;
            }
            function p(e, t) {
              for (var i = new Array(t), n = 0; n < t; ++n) i[n] = e[n];
              return i;
            }
            function m(e, t, i, n) {
              if ("function" == typeof e.on) n.once ? e.once(t, i) : e.on(t, i);
              else {
                if ("function" != typeof e.addEventListener)
                  throw new TypeError(
                    'The "emitter" argument must be of type EventEmitter. Received type ' +
                      typeof e,
                  );
                e.addEventListener(t, function s(r) {
                  (n.once && e.removeEventListener(t, s), i(r));
                });
              }
            }
            return (
              Object.defineProperty(s, "defaultMaxListeners", {
                enumerable: !0,
                get: function () {
                  return r;
                },
                set: function (e) {
                  if ("number" != typeof e || e < 0 || n(e))
                    throw new RangeError(
                      'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                        e +
                        ".",
                    );
                  r = e;
                },
              }),
              (s.init = function () {
                ((void 0 !== this._events &&
                  this._events !== Object.getPrototypeOf(this)._events) ||
                  ((this._events = Object.create(null)),
                  (this._eventsCount = 0)),
                  (this._maxListeners = this._maxListeners || void 0));
              }),
              (s.prototype.setMaxListeners = function (e) {
                if ("number" != typeof e || e < 0 || n(e))
                  throw new RangeError(
                    'The value of "n" is out of range. It must be a non-negative number. Received ' +
                      e +
                      ".",
                  );
                return ((this._maxListeners = e), this);
              }),
              (s.prototype.getMaxListeners = function () {
                return a(this);
              }),
              (s.prototype.emit = function (e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                  t.push(arguments[n]);
                var s = "error" === e,
                  r = this._events;
                if (void 0 !== r) s = s && void 0 === r.error;
                else if (!s) return !1;
                if (s) {
                  var o;
                  if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
                  var a = new Error(
                    "Unhandled error." + (o ? " (" + o.message + ")" : ""),
                  );
                  throw ((a.context = o), a);
                }
                var c = r[e];
                if (void 0 === c) return !1;
                if ("function" == typeof c) i(c, this, t);
                else {
                  var d = c.length,
                    l = p(c, d);
                  for (n = 0; n < d; ++n) i(l[n], this, t);
                }
                return !0;
              }),
              (s.prototype.addListener = function (e, t) {
                return c(this, e, t, !1);
              }),
              (s.prototype.on = s.prototype.addListener),
              (s.prototype.prependListener = function (e, t) {
                return c(this, e, t, !0);
              }),
              (s.prototype.once = function (e, t) {
                return (o(t), this.on(e, l(this, e, t)), this);
              }),
              (s.prototype.prependOnceListener = function (e, t) {
                return (o(t), this.prependListener(e, l(this, e, t)), this);
              }),
              (s.prototype.removeListener = function (e, t) {
                var i, n, s, r, a;
                if ((o(t), void 0 === (n = this._events))) return this;
                if (void 0 === (i = n[e])) return this;
                if (i === t || i.listener === t)
                  0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : (delete n[e],
                      n.removeListener &&
                        this.emit("removeListener", e, i.listener || t));
                else if ("function" != typeof i) {
                  for (s = -1, r = i.length - 1; r >= 0; r--)
                    if (i[r] === t || i[r].listener === t) {
                      ((a = i[r].listener), (s = r));
                      break;
                    }
                  if (s < 0) return this;
                  (0 === s
                    ? i.shift()
                    : (function (e, t) {
                        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                        e.pop();
                      })(i, s),
                    1 === i.length && (n[e] = i[0]),
                    void 0 !== n.removeListener &&
                      this.emit("removeListener", e, a || t));
                }
                return this;
              }),
              (s.prototype.off = s.prototype.removeListener),
              (s.prototype.removeAllListeners = function (e) {
                var t, i, n;
                if (void 0 === (i = this._events)) return this;
                if (void 0 === i.removeListener)
                  return (
                    0 === arguments.length
                      ? ((this._events = Object.create(null)),
                        (this._eventsCount = 0))
                      : void 0 !== i[e] &&
                        (0 == --this._eventsCount
                          ? (this._events = Object.create(null))
                          : delete i[e]),
                    this
                  );
                if (0 === arguments.length) {
                  var s,
                    r = Object.keys(i);
                  for (n = 0; n < r.length; ++n)
                    "removeListener" !== (s = r[n]) &&
                      this.removeAllListeners(s);
                  return (
                    this.removeAllListeners("removeListener"),
                    (this._events = Object.create(null)),
                    (this._eventsCount = 0),
                    this
                  );
                }
                if ("function" == typeof (t = i[e])) this.removeListener(e, t);
                else if (void 0 !== t)
                  for (n = t.length - 1; n >= 0; n--)
                    this.removeListener(e, t[n]);
                return this;
              }),
              (s.prototype.listeners = function (e) {
                return u(this, e, !0);
              }),
              (s.prototype.rawListeners = function (e) {
                return u(this, e, !1);
              }),
              (s.listenerCount = function (e, t) {
                return "function" == typeof e.listenerCount
                  ? e.listenerCount(t)
                  : h.call(e, t);
              }),
              (s.prototype.listenerCount = h),
              (s.prototype.eventNames = function () {
                return this._eventsCount > 0 ? e(this._events) : [];
              }),
              tn.exports
            );
          })();
        let sn = !0,
          rn = !0;
        function on(e, t, i) {
          const n = e.match(t);
          return n && n.length >= i && parseFloat(n[i], 10);
        }
        function an(e, t, i) {
          if (!e.RTCPeerConnection) return;
          const n = e.RTCPeerConnection.prototype,
            s = n.addEventListener;
          n.addEventListener = function (e, n) {
            if (e !== t) return s.apply(this, arguments);
            const r = (e) => {
              const t = i(e);
              t && (n.handleEvent ? n.handleEvent(t) : n(t));
            };
            return (
              (this._eventMap = this._eventMap || {}),
              this._eventMap[t] || (this._eventMap[t] = new Map()),
              this._eventMap[t].set(n, r),
              s.apply(this, [e, r])
            );
          };
          const r = n.removeEventListener;
          ((n.removeEventListener = function (e, i) {
            if (e !== t || !this._eventMap || !this._eventMap[t])
              return r.apply(this, arguments);
            if (!this._eventMap[t].has(i)) return r.apply(this, arguments);
            const n = this._eventMap[t].get(i);
            return (
              this._eventMap[t].delete(i),
              0 === this._eventMap[t].size && delete this._eventMap[t],
              0 === Object.keys(this._eventMap).length && delete this._eventMap,
              r.apply(this, [e, n])
            );
          }),
            Object.defineProperty(n, "on" + t, {
              get() {
                return this["_on" + t];
              },
              set(e) {
                (this["_on" + t] &&
                  (this.removeEventListener(t, this["_on" + t]),
                  delete this["_on" + t]),
                  e && this.addEventListener(t, (this["_on" + t] = e)));
              },
              enumerable: !0,
              configurable: !0,
            }));
        }
        function cn(e) {
          return "boolean" != typeof e
            ? new Error(
                "Argument type: " + typeof e + ". Please use a boolean.",
              )
            : ((sn = e),
              e ? "adapter.js logging disabled" : "adapter.js logging enabled");
        }
        function dn(e) {
          return "boolean" != typeof e
            ? new Error(
                "Argument type: " + typeof e + ". Please use a boolean.",
              )
            : ((rn = !e),
              "adapter.js deprecation warnings " +
                (e ? "disabled" : "enabled"));
        }
        function ln() {
          if ("object" == typeof window) {
            if (sn) return;
            "undefined" != typeof console &&
              "function" == typeof console.log &&
              console.log.apply(console, arguments);
          }
        }
        function un(e, t) {
          rn &&
            console.warn(e + " is deprecated, please use " + t + " instead.");
        }
        function hn(e) {
          return "[object Object]" === Object.prototype.toString.call(e);
        }
        function pn(e) {
          return hn(e)
            ? Object.keys(e).reduce(function (t, i) {
                const n = hn(e[i]),
                  s = n ? pn(e[i]) : e[i],
                  r = n && !Object.keys(s).length;
                return void 0 === s || r ? t : Object.assign(t, { [i]: s });
              }, {})
            : e;
        }
        function mn(e, t, i) {
          t &&
            !i.has(t.id) &&
            (i.set(t.id, t),
            Object.keys(t).forEach((n) => {
              n.endsWith("Id")
                ? mn(e, e.get(t[n]), i)
                : n.endsWith("Ids") &&
                  t[n].forEach((t) => {
                    mn(e, e.get(t), i);
                  });
            }));
        }
        function gn(e, t, i) {
          const n = i ? "outbound-rtp" : "inbound-rtp",
            s = new Map();
          if (null === t) return s;
          const r = [];
          return (
            e.forEach((e) => {
              "track" === e.type && e.trackIdentifier === t.id && r.push(e);
            }),
            r.forEach((t) => {
              e.forEach((i) => {
                i.type === n && i.trackId === t.id && mn(e, i, s);
              });
            }),
            s
          );
        }
        const fn = ln;
        function vn(e, t) {
          const i = e && e.navigator;
          if (!i.mediaDevices) return;
          const n = function (e) {
              if ("object" != typeof e || e.mandatory || e.optional) return e;
              const t = {};
              return (
                Object.keys(e).forEach((i) => {
                  if (
                    "require" === i ||
                    "advanced" === i ||
                    "mediaSource" === i
                  )
                    return;
                  const n = "object" == typeof e[i] ? e[i] : { ideal: e[i] };
                  void 0 !== n.exact &&
                    "number" == typeof n.exact &&
                    (n.min = n.max = n.exact);
                  const s = function (e, t) {
                    return e
                      ? e + t.charAt(0).toUpperCase() + t.slice(1)
                      : "deviceId" === t
                        ? "sourceId"
                        : t;
                  };
                  if (void 0 !== n.ideal) {
                    t.optional = t.optional || [];
                    let e = {};
                    "number" == typeof n.ideal
                      ? ((e[s("min", i)] = n.ideal),
                        t.optional.push(e),
                        (e = {}),
                        (e[s("max", i)] = n.ideal),
                        t.optional.push(e))
                      : ((e[s("", i)] = n.ideal), t.optional.push(e));
                  }
                  void 0 !== n.exact && "number" != typeof n.exact
                    ? ((t.mandatory = t.mandatory || {}),
                      (t.mandatory[s("", i)] = n.exact))
                    : ["min", "max"].forEach((e) => {
                        void 0 !== n[e] &&
                          ((t.mandatory = t.mandatory || {}),
                          (t.mandatory[s(e, i)] = n[e]));
                      });
                }),
                e.advanced &&
                  (t.optional = (t.optional || []).concat(e.advanced)),
                t
              );
            },
            s = function (e, s) {
              if (t.version >= 61) return s(e);
              if (
                (e = JSON.parse(JSON.stringify(e))) &&
                "object" == typeof e.audio
              ) {
                const t = function (e, t, i) {
                  t in e && !(i in e) && ((e[i] = e[t]), delete e[t]);
                };
                (t(
                  (e = JSON.parse(JSON.stringify(e))).audio,
                  "autoGainControl",
                  "googAutoGainControl",
                ),
                  t(e.audio, "noiseSuppression", "googNoiseSuppression"),
                  (e.audio = n(e.audio)));
              }
              if (e && "object" == typeof e.video) {
                let r = e.video.facingMode;
                r = r && ("object" == typeof r ? r : { ideal: r });
                const o = t.version < 66;
                if (
                  r &&
                  ("user" === r.exact ||
                    "environment" === r.exact ||
                    "user" === r.ideal ||
                    "environment" === r.ideal) &&
                  (!i.mediaDevices.getSupportedConstraints ||
                    !i.mediaDevices.getSupportedConstraints().facingMode ||
                    o)
                ) {
                  let t;
                  if (
                    (delete e.video.facingMode,
                    "environment" === r.exact || "environment" === r.ideal
                      ? (t = ["back", "rear"])
                      : ("user" !== r.exact && "user" !== r.ideal) ||
                        (t = ["front"]),
                    t)
                  )
                    return i.mediaDevices.enumerateDevices().then((i) => {
                      let o = (i = i.filter(
                        (e) => "videoinput" === e.kind,
                      )).find((e) =>
                        t.some((t) => e.label.toLowerCase().includes(t)),
                      );
                      return (
                        !o &&
                          i.length &&
                          t.includes("back") &&
                          (o = i[i.length - 1]),
                        o &&
                          (e.video.deviceId = r.exact
                            ? { exact: o.deviceId }
                            : { ideal: o.deviceId }),
                        (e.video = n(e.video)),
                        fn("chrome: " + JSON.stringify(e)),
                        s(e)
                      );
                    });
                }
                e.video = n(e.video);
              }
              return (fn("chrome: " + JSON.stringify(e)), s(e));
            },
            r = function (e) {
              return t.version >= 64
                ? e
                : {
                    name:
                      {
                        PermissionDeniedError: "NotAllowedError",
                        PermissionDismissedError: "NotAllowedError",
                        InvalidStateError: "NotAllowedError",
                        DevicesNotFoundError: "NotFoundError",
                        ConstraintNotSatisfiedError: "OverconstrainedError",
                        TrackStartError: "NotReadableError",
                        MediaDeviceFailedDueToShutdown: "NotAllowedError",
                        MediaDeviceKillSwitchOn: "NotAllowedError",
                        TabCaptureError: "AbortError",
                        ScreenCaptureError: "AbortError",
                        DeviceCaptureError: "AbortError",
                      }[e.name] || e.name,
                    message: e.message,
                    constraint: e.constraint || e.constraintName,
                    toString() {
                      return this.name + (this.message && ": ") + this.message;
                    },
                  };
            };
          if (
            ((i.getUserMedia = function (e, t, n) {
              s(e, (e) => {
                i.webkitGetUserMedia(e, t, (e) => {
                  n && n(r(e));
                });
              });
            }.bind(i)),
            i.mediaDevices.getUserMedia)
          ) {
            const e = i.mediaDevices.getUserMedia.bind(i.mediaDevices);
            i.mediaDevices.getUserMedia = function (t) {
              return s(t, (t) =>
                e(t).then(
                  (e) => {
                    if (
                      (t.audio && !e.getAudioTracks().length) ||
                      (t.video && !e.getVideoTracks().length)
                    )
                      throw (
                        e.getTracks().forEach((e) => {
                          e.stop();
                        }),
                        new DOMException("", "NotFoundError")
                      );
                    return e;
                  },
                  (e) => Promise.reject(r(e)),
                ),
              );
            };
          }
        }
        function bn(e) {
          e.MediaStream = e.MediaStream || e.webkitMediaStream;
        }
        function kn(e) {
          if (
            "object" == typeof e &&
            e.RTCPeerConnection &&
            !("ontrack" in e.RTCPeerConnection.prototype)
          ) {
            Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
              get() {
                return this._ontrack;
              },
              set(e) {
                (this._ontrack &&
                  this.removeEventListener("track", this._ontrack),
                  this.addEventListener("track", (this._ontrack = e)));
              },
              enumerable: !0,
              configurable: !0,
            });
            const t = e.RTCPeerConnection.prototype.setRemoteDescription;
            e.RTCPeerConnection.prototype.setRemoteDescription = function () {
              return (
                this._ontrackpoly ||
                  ((this._ontrackpoly = (t) => {
                    (t.stream.addEventListener("addtrack", (i) => {
                      let n;
                      n = e.RTCPeerConnection.prototype.getReceivers
                        ? this.getReceivers().find(
                            (e) => e.track && e.track.id === i.track.id,
                          )
                        : { track: i.track };
                      const s = new Event("track");
                      ((s.track = i.track),
                        (s.receiver = n),
                        (s.transceiver = { receiver: n }),
                        (s.streams = [t.stream]),
                        this.dispatchEvent(s));
                    }),
                      t.stream.getTracks().forEach((i) => {
                        let n;
                        n = e.RTCPeerConnection.prototype.getReceivers
                          ? this.getReceivers().find(
                              (e) => e.track && e.track.id === i.id,
                            )
                          : { track: i };
                        const s = new Event("track");
                        ((s.track = i),
                          (s.receiver = n),
                          (s.transceiver = { receiver: n }),
                          (s.streams = [t.stream]),
                          this.dispatchEvent(s));
                      }));
                  }),
                  this.addEventListener("addstream", this._ontrackpoly)),
                t.apply(this, arguments)
              );
            };
          } else
            an(
              e,
              "track",
              (e) => (
                e.transceiver ||
                  Object.defineProperty(e, "transceiver", {
                    value: { receiver: e.receiver },
                  }),
                e
              ),
            );
        }
        function yn(e) {
          if (
            "object" == typeof e &&
            e.RTCPeerConnection &&
            !("getSenders" in e.RTCPeerConnection.prototype) &&
            "createDTMFSender" in e.RTCPeerConnection.prototype
          ) {
            const t = function (e, t) {
              return {
                track: t,
                get dtmf() {
                  return (
                    void 0 === this._dtmf &&
                      ("audio" === t.kind
                        ? (this._dtmf = e.createDTMFSender(t))
                        : (this._dtmf = null)),
                    this._dtmf
                  );
                },
                _pc: e,
              };
            };
            if (!e.RTCPeerConnection.prototype.getSenders) {
              e.RTCPeerConnection.prototype.getSenders = function () {
                return (
                  (this._senders = this._senders || []),
                  this._senders.slice()
                );
              };
              const i = e.RTCPeerConnection.prototype.addTrack;
              e.RTCPeerConnection.prototype.addTrack = function (e, n) {
                let s = i.apply(this, arguments);
                return (s || ((s = t(this, e)), this._senders.push(s)), s);
              };
              const n = e.RTCPeerConnection.prototype.removeTrack;
              e.RTCPeerConnection.prototype.removeTrack = function (e) {
                n.apply(this, arguments);
                const t = this._senders.indexOf(e);
                -1 !== t && this._senders.splice(t, 1);
              };
            }
            const i = e.RTCPeerConnection.prototype.addStream;
            e.RTCPeerConnection.prototype.addStream = function (e) {
              ((this._senders = this._senders || []),
                i.apply(this, [e]),
                e.getTracks().forEach((e) => {
                  this._senders.push(t(this, e));
                }));
            };
            const n = e.RTCPeerConnection.prototype.removeStream;
            e.RTCPeerConnection.prototype.removeStream = function (e) {
              ((this._senders = this._senders || []),
                n.apply(this, [e]),
                e.getTracks().forEach((e) => {
                  const t = this._senders.find((t) => t.track === e);
                  t && this._senders.splice(this._senders.indexOf(t), 1);
                }));
            };
          } else if (
            "object" == typeof e &&
            e.RTCPeerConnection &&
            "getSenders" in e.RTCPeerConnection.prototype &&
            "createDTMFSender" in e.RTCPeerConnection.prototype &&
            e.RTCRtpSender &&
            !("dtmf" in e.RTCRtpSender.prototype)
          ) {
            const t = e.RTCPeerConnection.prototype.getSenders;
            ((e.RTCPeerConnection.prototype.getSenders = function () {
              const e = t.apply(this, []);
              return (e.forEach((e) => (e._pc = this)), e);
            }),
              Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
                get() {
                  return (
                    void 0 === this._dtmf &&
                      ("audio" === this.track.kind
                        ? (this._dtmf = this._pc.createDTMFSender(this.track))
                        : (this._dtmf = null)),
                    this._dtmf
                  );
                },
              }));
          }
        }
        function Tn(e) {
          if (
            !(
              "object" == typeof e &&
              e.RTCPeerConnection &&
              e.RTCRtpSender &&
              e.RTCRtpReceiver
            )
          )
            return;
          if (!("getStats" in e.RTCRtpSender.prototype)) {
            const t = e.RTCPeerConnection.prototype.getSenders;
            t &&
              (e.RTCPeerConnection.prototype.getSenders = function () {
                const e = t.apply(this, []);
                return (e.forEach((e) => (e._pc = this)), e);
              });
            const i = e.RTCPeerConnection.prototype.addTrack;
            (i &&
              (e.RTCPeerConnection.prototype.addTrack = function () {
                const e = i.apply(this, arguments);
                return ((e._pc = this), e);
              }),
              (e.RTCRtpSender.prototype.getStats = function () {
                const e = this;
                return this._pc.getStats().then((t) => gn(t, e.track, !0));
              }));
          }
          if (!("getStats" in e.RTCRtpReceiver.prototype)) {
            const t = e.RTCPeerConnection.prototype.getReceivers;
            (t &&
              (e.RTCPeerConnection.prototype.getReceivers = function () {
                const e = t.apply(this, []);
                return (e.forEach((e) => (e._pc = this)), e);
              }),
              an(e, "track", (e) => ((e.receiver._pc = e.srcElement), e)),
              (e.RTCRtpReceiver.prototype.getStats = function () {
                const e = this;
                return this._pc.getStats().then((t) => gn(t, e.track, !1));
              }));
          }
          if (
            !("getStats" in e.RTCRtpSender.prototype) ||
            !("getStats" in e.RTCRtpReceiver.prototype)
          )
            return;
          const t = e.RTCPeerConnection.prototype.getStats;
          e.RTCPeerConnection.prototype.getStats = function () {
            if (
              arguments.length > 0 &&
              arguments[0] instanceof e.MediaStreamTrack
            ) {
              const e = arguments[0];
              let t, i, n;
              return (
                this.getSenders().forEach((i) => {
                  i.track === e && (t ? (n = !0) : (t = i));
                }),
                this.getReceivers().forEach(
                  (t) => (
                    t.track === e && (i ? (n = !0) : (i = t)),
                    t.track === e
                  ),
                ),
                n || (t && i)
                  ? Promise.reject(
                      new DOMException(
                        "There are more than one sender or receiver for the track.",
                        "InvalidAccessError",
                      ),
                    )
                  : t
                    ? t.getStats()
                    : i
                      ? i.getStats()
                      : Promise.reject(
                          new DOMException(
                            "There is no sender or receiver for the track.",
                            "InvalidAccessError",
                          ),
                        )
              );
            }
            return t.apply(this, arguments);
          };
        }
        function Cn(e) {
          e.RTCPeerConnection.prototype.getLocalStreams = function () {
            return (
              (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
              Object.keys(this._shimmedLocalStreams).map(
                (e) => this._shimmedLocalStreams[e][0],
              )
            );
          };
          const t = e.RTCPeerConnection.prototype.addTrack;
          e.RTCPeerConnection.prototype.addTrack = function (e, i) {
            if (!i) return t.apply(this, arguments);
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};
            const n = t.apply(this, arguments);
            return (
              this._shimmedLocalStreams[i.id]
                ? -1 === this._shimmedLocalStreams[i.id].indexOf(n) &&
                  this._shimmedLocalStreams[i.id].push(n)
                : (this._shimmedLocalStreams[i.id] = [i, n]),
              n
            );
          };
          const i = e.RTCPeerConnection.prototype.addStream;
          e.RTCPeerConnection.prototype.addStream = function (e) {
            ((this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
              e.getTracks().forEach((e) => {
                if (this.getSenders().find((t) => t.track === e))
                  throw new DOMException(
                    "Track already exists.",
                    "InvalidAccessError",
                  );
              }));
            const t = this.getSenders();
            i.apply(this, arguments);
            const n = this.getSenders().filter((e) => -1 === t.indexOf(e));
            this._shimmedLocalStreams[e.id] = [e].concat(n);
          };
          const n = e.RTCPeerConnection.prototype.removeStream;
          e.RTCPeerConnection.prototype.removeStream = function (e) {
            return (
              (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
              delete this._shimmedLocalStreams[e.id],
              n.apply(this, arguments)
            );
          };
          const s = e.RTCPeerConnection.prototype.removeTrack;
          e.RTCPeerConnection.prototype.removeTrack = function (e) {
            return (
              (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
              e &&
                Object.keys(this._shimmedLocalStreams).forEach((t) => {
                  const i = this._shimmedLocalStreams[t].indexOf(e);
                  (-1 !== i && this._shimmedLocalStreams[t].splice(i, 1),
                    1 === this._shimmedLocalStreams[t].length &&
                      delete this._shimmedLocalStreams[t]);
                }),
              s.apply(this, arguments)
            );
          };
        }
        function Sn(e, t) {
          if (!e.RTCPeerConnection) return;
          if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65)
            return Cn(e);
          const i = e.RTCPeerConnection.prototype.getLocalStreams;
          e.RTCPeerConnection.prototype.getLocalStreams = function () {
            const e = i.apply(this);
            return (
              (this._reverseStreams = this._reverseStreams || {}),
              e.map((e) => this._reverseStreams[e.id])
            );
          };
          const n = e.RTCPeerConnection.prototype.addStream;
          e.RTCPeerConnection.prototype.addStream = function (t) {
            if (
              ((this._streams = this._streams || {}),
              (this._reverseStreams = this._reverseStreams || {}),
              t.getTracks().forEach((e) => {
                if (this.getSenders().find((t) => t.track === e))
                  throw new DOMException(
                    "Track already exists.",
                    "InvalidAccessError",
                  );
              }),
              !this._reverseStreams[t.id])
            ) {
              const i = new e.MediaStream(t.getTracks());
              ((this._streams[t.id] = i),
                (this._reverseStreams[i.id] = t),
                (t = i));
            }
            n.apply(this, [t]);
          };
          const s = e.RTCPeerConnection.prototype.removeStream;
          function r(e, t) {
            let i = t.sdp;
            return (
              Object.keys(e._reverseStreams || []).forEach((t) => {
                const n = e._reverseStreams[t],
                  s = e._streams[n.id];
                i = i.replace(new RegExp(s.id, "g"), n.id);
              }),
              new RTCSessionDescription({ type: t.type, sdp: i })
            );
          }
          ((e.RTCPeerConnection.prototype.removeStream = function (e) {
            ((this._streams = this._streams || {}),
              (this._reverseStreams = this._reverseStreams || {}),
              s.apply(this, [this._streams[e.id] || e]),
              delete this._reverseStreams[
                this._streams[e.id] ? this._streams[e.id].id : e.id
              ],
              delete this._streams[e.id]);
          }),
            (e.RTCPeerConnection.prototype.addTrack = function (t, i) {
              if ("closed" === this.signalingState)
                throw new DOMException(
                  "The RTCPeerConnection's signalingState is 'closed'.",
                  "InvalidStateError",
                );
              const n = [].slice.call(arguments, 1);
              if (1 !== n.length || !n[0].getTracks().find((e) => e === t))
                throw new DOMException(
                  "The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.",
                  "NotSupportedError",
                );
              if (this.getSenders().find((e) => e.track === t))
                throw new DOMException(
                  "Track already exists.",
                  "InvalidAccessError",
                );
              ((this._streams = this._streams || {}),
                (this._reverseStreams = this._reverseStreams || {}));
              const s = this._streams[i.id];
              if (s)
                (s.addTrack(t),
                  Promise.resolve().then(() => {
                    this.dispatchEvent(new Event("negotiationneeded"));
                  }));
              else {
                const n = new e.MediaStream([t]);
                ((this._streams[i.id] = n),
                  (this._reverseStreams[n.id] = i),
                  this.addStream(n));
              }
              return this.getSenders().find((e) => e.track === t);
            }),
            ["createOffer", "createAnswer"].forEach(function (t) {
              const i = e.RTCPeerConnection.prototype[t],
                n = {
                  [t]() {
                    const e = arguments;
                    return arguments.length && "function" == typeof arguments[0]
                      ? i.apply(this, [
                          (t) => {
                            const i = r(this, t);
                            e[0].apply(null, [i]);
                          },
                          (t) => {
                            e[1] && e[1].apply(null, t);
                          },
                          arguments[2],
                        ])
                      : i.apply(this, arguments).then((e) => r(this, e));
                  },
                };
              e.RTCPeerConnection.prototype[t] = n[t];
            }));
          const o = e.RTCPeerConnection.prototype.setLocalDescription;
          e.RTCPeerConnection.prototype.setLocalDescription = function () {
            return arguments.length && arguments[0].type
              ? ((arguments[0] = (function (e, t) {
                  let i = t.sdp;
                  return (
                    Object.keys(e._reverseStreams || []).forEach((t) => {
                      const n = e._reverseStreams[t],
                        s = e._streams[n.id];
                      i = i.replace(new RegExp(n.id, "g"), s.id);
                    }),
                    new RTCSessionDescription({ type: t.type, sdp: i })
                  );
                })(this, arguments[0])),
                o.apply(this, arguments))
              : o.apply(this, arguments);
          };
          const a = Object.getOwnPropertyDescriptor(
            e.RTCPeerConnection.prototype,
            "localDescription",
          );
          (Object.defineProperty(
            e.RTCPeerConnection.prototype,
            "localDescription",
            {
              get() {
                const e = a.get.apply(this);
                return "" === e.type ? e : r(this, e);
              },
            },
          ),
            (e.RTCPeerConnection.prototype.removeTrack = function (e) {
              if ("closed" === this.signalingState)
                throw new DOMException(
                  "The RTCPeerConnection's signalingState is 'closed'.",
                  "InvalidStateError",
                );
              if (!e._pc)
                throw new DOMException(
                  "Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.",
                  "TypeError",
                );
              if (e._pc !== this)
                throw new DOMException(
                  "Sender was not created by this connection.",
                  "InvalidAccessError",
                );
              let t;
              ((this._streams = this._streams || {}),
                Object.keys(this._streams).forEach((i) => {
                  this._streams[i].getTracks().find((t) => e.track === t) &&
                    (t = this._streams[i]);
                }),
                t &&
                  (1 === t.getTracks().length
                    ? this.removeStream(this._reverseStreams[t.id])
                    : t.removeTrack(e.track),
                  this.dispatchEvent(new Event("negotiationneeded"))));
            }));
        }
        function wn(e, t) {
          (!e.RTCPeerConnection &&
            e.webkitRTCPeerConnection &&
            (e.RTCPeerConnection = e.webkitRTCPeerConnection),
            e.RTCPeerConnection &&
              t.version < 53 &&
              [
                "setLocalDescription",
                "setRemoteDescription",
                "addIceCandidate",
              ].forEach(function (t) {
                const i = e.RTCPeerConnection.prototype[t],
                  n = {
                    [t]() {
                      return (
                        (arguments[0] = new (
                          "addIceCandidate" === t
                            ? e.RTCIceCandidate
                            : e.RTCSessionDescription
                        )(arguments[0])),
                        i.apply(this, arguments)
                      );
                    },
                  };
                e.RTCPeerConnection.prototype[t] = n[t];
              }));
        }
        function En(e, t) {
          an(e, "negotiationneeded", (e) => {
            const i = e.target;
            if (
              !(
                t.version < 72 ||
                (i.getConfiguration &&
                  "plan-b" === i.getConfiguration().sdpSemantics)
              ) ||
              "stable" === i.signalingState
            )
              return e;
          });
        }
        var Pn = Object.freeze({
          __proto__: null,
          fixNegotiationNeeded: En,
          shimAddTrackRemoveTrack: Sn,
          shimAddTrackRemoveTrackWithNative: Cn,
          shimGetSendersWithDtmf: yn,
          shimGetUserMedia: vn,
          shimMediaStream: bn,
          shimOnTrack: kn,
          shimPeerConnection: wn,
          shimSenderReceiverGetStats: Tn,
        });
        function Rn(e, t) {
          const i = e && e.navigator,
            n = e && e.MediaStreamTrack;
          if (
            ((i.getUserMedia = function (e, t, n) {
              (un(
                "navigator.getUserMedia",
                "navigator.mediaDevices.getUserMedia",
              ),
                i.mediaDevices.getUserMedia(e).then(t, n));
            }),
            !(
              t.version > 55 &&
              "autoGainControl" in i.mediaDevices.getSupportedConstraints()
            ))
          ) {
            const e = function (e, t, i) {
                t in e && !(i in e) && ((e[i] = e[t]), delete e[t]);
              },
              t = i.mediaDevices.getUserMedia.bind(i.mediaDevices);
            if (
              ((i.mediaDevices.getUserMedia = function (i) {
                return (
                  "object" == typeof i &&
                    "object" == typeof i.audio &&
                    ((i = JSON.parse(JSON.stringify(i))),
                    e(i.audio, "autoGainControl", "mozAutoGainControl"),
                    e(i.audio, "noiseSuppression", "mozNoiseSuppression")),
                  t(i)
                );
              }),
              n && n.prototype.getSettings)
            ) {
              const t = n.prototype.getSettings;
              n.prototype.getSettings = function () {
                const i = t.apply(this, arguments);
                return (
                  e(i, "mozAutoGainControl", "autoGainControl"),
                  e(i, "mozNoiseSuppression", "noiseSuppression"),
                  i
                );
              };
            }
            if (n && n.prototype.applyConstraints) {
              const t = n.prototype.applyConstraints;
              n.prototype.applyConstraints = function (i) {
                return (
                  "audio" === this.kind &&
                    "object" == typeof i &&
                    ((i = JSON.parse(JSON.stringify(i))),
                    e(i, "autoGainControl", "mozAutoGainControl"),
                    e(i, "noiseSuppression", "mozNoiseSuppression")),
                  t.apply(this, [i])
                );
              };
            }
          }
        }
        function In(e) {
          "object" == typeof e &&
            e.RTCTrackEvent &&
            "receiver" in e.RTCTrackEvent.prototype &&
            !("transceiver" in e.RTCTrackEvent.prototype) &&
            Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
              get() {
                return { receiver: this.receiver };
              },
            });
        }
        function On(e, t) {
          if (
            "object" != typeof e ||
            (!e.RTCPeerConnection && !e.mozRTCPeerConnection)
          )
            return;
          (!e.RTCPeerConnection &&
            e.mozRTCPeerConnection &&
            (e.RTCPeerConnection = e.mozRTCPeerConnection),
            t.version < 53 &&
              [
                "setLocalDescription",
                "setRemoteDescription",
                "addIceCandidate",
              ].forEach(function (t) {
                const i = e.RTCPeerConnection.prototype[t],
                  n = {
                    [t]() {
                      return (
                        (arguments[0] = new (
                          "addIceCandidate" === t
                            ? e.RTCIceCandidate
                            : e.RTCSessionDescription
                        )(arguments[0])),
                        i.apply(this, arguments)
                      );
                    },
                  };
                e.RTCPeerConnection.prototype[t] = n[t];
              }));
          const i = {
              inboundrtp: "inbound-rtp",
              outboundrtp: "outbound-rtp",
              candidatepair: "candidate-pair",
              localcandidate: "local-candidate",
              remotecandidate: "remote-candidate",
            },
            n = e.RTCPeerConnection.prototype.getStats;
          e.RTCPeerConnection.prototype.getStats = function () {
            const [e, s, r] = arguments;
            return n
              .apply(this, [e || null])
              .then((e) => {
                if (t.version < 53 && !s)
                  try {
                    e.forEach((e) => {
                      e.type = i[e.type] || e.type;
                    });
                  } catch (t) {
                    if ("TypeError" !== t.name) throw t;
                    e.forEach((t, n) => {
                      e.set(
                        n,
                        Object.assign({}, t, { type: i[t.type] || t.type }),
                      );
                    });
                  }
                return e;
              })
              .then(s, r);
          };
        }
        function Dn(e) {
          if ("object" != typeof e || !e.RTCPeerConnection || !e.RTCRtpSender)
            return;
          if (e.RTCRtpSender && "getStats" in e.RTCRtpSender.prototype) return;
          const t = e.RTCPeerConnection.prototype.getSenders;
          t &&
            (e.RTCPeerConnection.prototype.getSenders = function () {
              const e = t.apply(this, []);
              return (e.forEach((e) => (e._pc = this)), e);
            });
          const i = e.RTCPeerConnection.prototype.addTrack;
          (i &&
            (e.RTCPeerConnection.prototype.addTrack = function () {
              const e = i.apply(this, arguments);
              return ((e._pc = this), e);
            }),
            (e.RTCRtpSender.prototype.getStats = function () {
              return this.track
                ? this._pc.getStats(this.track)
                : Promise.resolve(new Map());
            }));
        }
        function xn(e) {
          if ("object" != typeof e || !e.RTCPeerConnection || !e.RTCRtpSender)
            return;
          if (e.RTCRtpSender && "getStats" in e.RTCRtpReceiver.prototype)
            return;
          const t = e.RTCPeerConnection.prototype.getReceivers;
          (t &&
            (e.RTCPeerConnection.prototype.getReceivers = function () {
              const e = t.apply(this, []);
              return (e.forEach((e) => (e._pc = this)), e);
            }),
            an(e, "track", (e) => ((e.receiver._pc = e.srcElement), e)),
            (e.RTCRtpReceiver.prototype.getStats = function () {
              return this._pc.getStats(this.track);
            }));
        }
        function Mn(e) {
          e.RTCPeerConnection &&
            !("removeStream" in e.RTCPeerConnection.prototype) &&
            (e.RTCPeerConnection.prototype.removeStream = function (e) {
              (un("removeStream", "removeTrack"),
                this.getSenders().forEach((t) => {
                  t.track &&
                    e.getTracks().includes(t.track) &&
                    this.removeTrack(t);
                }));
            });
        }
        function _n(e) {
          e.DataChannel &&
            !e.RTCDataChannel &&
            (e.RTCDataChannel = e.DataChannel);
        }
        function An(e) {
          if ("object" != typeof e || !e.RTCPeerConnection) return;
          const t = e.RTCPeerConnection.prototype.addTransceiver;
          t &&
            (e.RTCPeerConnection.prototype.addTransceiver = function () {
              this.setParametersPromises = [];
              let e = arguments[1] && arguments[1].sendEncodings;
              (void 0 === e && (e = []), (e = [...e]));
              const i = e.length > 0;
              i &&
                e.forEach((e) => {
                  if ("rid" in e && !/^[a-z0-9]{0,16}$/i.test(e.rid))
                    throw new TypeError("Invalid RID value provided.");
                  if (
                    "scaleResolutionDownBy" in e &&
                    !(parseFloat(e.scaleResolutionDownBy) >= 1)
                  )
                    throw new RangeError(
                      "scale_resolution_down_by must be >= 1.0",
                    );
                  if ("maxFramerate" in e && !(parseFloat(e.maxFramerate) >= 0))
                    throw new RangeError("max_framerate must be >= 0.0");
                });
              const n = t.apply(this, arguments);
              if (i) {
                const { sender: t } = n,
                  i = t.getParameters();
                (!("encodings" in i) ||
                  (1 === i.encodings.length &&
                    0 === Object.keys(i.encodings[0]).length)) &&
                  ((i.encodings = e),
                  (t.sendEncodings = e),
                  this.setParametersPromises.push(
                    t
                      .setParameters(i)
                      .then(() => {
                        delete t.sendEncodings;
                      })
                      .catch(() => {
                        delete t.sendEncodings;
                      }),
                  ));
              }
              return n;
            });
        }
        function Nn(e) {
          if ("object" != typeof e || !e.RTCRtpSender) return;
          const t = e.RTCRtpSender.prototype.getParameters;
          t &&
            (e.RTCRtpSender.prototype.getParameters = function () {
              const e = t.apply(this, arguments);
              return (
                "encodings" in e ||
                  (e.encodings = [].concat(this.sendEncodings || [{}])),
                e
              );
            });
        }
        function Ln(e) {
          if ("object" != typeof e || !e.RTCPeerConnection) return;
          const t = e.RTCPeerConnection.prototype.createOffer;
          e.RTCPeerConnection.prototype.createOffer = function () {
            return this.setParametersPromises &&
              this.setParametersPromises.length
              ? Promise.all(this.setParametersPromises)
                  .then(() => t.apply(this, arguments))
                  .finally(() => {
                    this.setParametersPromises = [];
                  })
              : t.apply(this, arguments);
          };
        }
        function Un(e) {
          if ("object" != typeof e || !e.RTCPeerConnection) return;
          const t = e.RTCPeerConnection.prototype.createAnswer;
          e.RTCPeerConnection.prototype.createAnswer = function () {
            return this.setParametersPromises &&
              this.setParametersPromises.length
              ? Promise.all(this.setParametersPromises)
                  .then(() => t.apply(this, arguments))
                  .finally(() => {
                    this.setParametersPromises = [];
                  })
              : t.apply(this, arguments);
          };
        }
        var jn = Object.freeze({
          __proto__: null,
          shimAddTransceiver: An,
          shimCreateAnswer: Un,
          shimCreateOffer: Ln,
          shimGetDisplayMedia: function (e, t) {
            (e.navigator.mediaDevices &&
              "getDisplayMedia" in e.navigator.mediaDevices) ||
              (e.navigator.mediaDevices &&
                (e.navigator.mediaDevices.getDisplayMedia = function (i) {
                  if (!i || !i.video) {
                    const e = new DOMException(
                      "getDisplayMedia without video constraints is undefined",
                    );
                    return (
                      (e.name = "NotFoundError"),
                      (e.code = 8),
                      Promise.reject(e)
                    );
                  }
                  return (
                    !0 === i.video
                      ? (i.video = { mediaSource: t })
                      : (i.video.mediaSource = t),
                    e.navigator.mediaDevices.getUserMedia(i)
                  );
                }));
          },
          shimGetParameters: Nn,
          shimGetUserMedia: Rn,
          shimOnTrack: In,
          shimPeerConnection: On,
          shimRTCDataChannel: _n,
          shimReceiverGetStats: xn,
          shimRemoveStream: Mn,
          shimSenderGetStats: Dn,
        });
        function Fn(e) {
          if ("object" == typeof e && e.RTCPeerConnection) {
            if (
              ("getLocalStreams" in e.RTCPeerConnection.prototype ||
                (e.RTCPeerConnection.prototype.getLocalStreams = function () {
                  return (
                    this._localStreams || (this._localStreams = []),
                    this._localStreams
                  );
                }),
              !("addStream" in e.RTCPeerConnection.prototype))
            ) {
              const t = e.RTCPeerConnection.prototype.addTrack;
              ((e.RTCPeerConnection.prototype.addStream = function (e) {
                (this._localStreams || (this._localStreams = []),
                  this._localStreams.includes(e) || this._localStreams.push(e),
                  e.getAudioTracks().forEach((i) => t.call(this, i, e)),
                  e.getVideoTracks().forEach((i) => t.call(this, i, e)));
              }),
                (e.RTCPeerConnection.prototype.addTrack = function (e) {
                  for (
                    var i = arguments.length,
                      n = new Array(i > 1 ? i - 1 : 0),
                      s = 1;
                    s < i;
                    s++
                  )
                    n[s - 1] = arguments[s];
                  return (
                    n &&
                      n.forEach((e) => {
                        this._localStreams
                          ? this._localStreams.includes(e) ||
                            this._localStreams.push(e)
                          : (this._localStreams = [e]);
                      }),
                    t.apply(this, arguments)
                  );
                }));
            }
            "removeStream" in e.RTCPeerConnection.prototype ||
              (e.RTCPeerConnection.prototype.removeStream = function (e) {
                this._localStreams || (this._localStreams = []);
                const t = this._localStreams.indexOf(e);
                if (-1 === t) return;
                this._localStreams.splice(t, 1);
                const i = e.getTracks();
                this.getSenders().forEach((e) => {
                  i.includes(e.track) && this.removeTrack(e);
                });
              });
          }
        }
        function Bn(e) {
          if (
            "object" == typeof e &&
            e.RTCPeerConnection &&
            ("getRemoteStreams" in e.RTCPeerConnection.prototype ||
              (e.RTCPeerConnection.prototype.getRemoteStreams = function () {
                return this._remoteStreams ? this._remoteStreams : [];
              }),
            !("onaddstream" in e.RTCPeerConnection.prototype))
          ) {
            Object.defineProperty(
              e.RTCPeerConnection.prototype,
              "onaddstream",
              {
                get() {
                  return this._onaddstream;
                },
                set(e) {
                  (this._onaddstream &&
                    (this.removeEventListener("addstream", this._onaddstream),
                    this.removeEventListener("track", this._onaddstreampoly)),
                    this.addEventListener("addstream", (this._onaddstream = e)),
                    this.addEventListener(
                      "track",
                      (this._onaddstreampoly = (e) => {
                        e.streams.forEach((e) => {
                          if (
                            (this._remoteStreams || (this._remoteStreams = []),
                            this._remoteStreams.includes(e))
                          )
                            return;
                          this._remoteStreams.push(e);
                          const t = new Event("addstream");
                          ((t.stream = e), this.dispatchEvent(t));
                        });
                      }),
                    ));
                },
              },
            );
            const t = e.RTCPeerConnection.prototype.setRemoteDescription;
            e.RTCPeerConnection.prototype.setRemoteDescription = function () {
              const e = this;
              return (
                this._onaddstreampoly ||
                  this.addEventListener(
                    "track",
                    (this._onaddstreampoly = function (t) {
                      t.streams.forEach((t) => {
                        if (
                          (e._remoteStreams || (e._remoteStreams = []),
                          e._remoteStreams.indexOf(t) >= 0)
                        )
                          return;
                        e._remoteStreams.push(t);
                        const i = new Event("addstream");
                        ((i.stream = t), e.dispatchEvent(i));
                      });
                    }),
                  ),
                t.apply(e, arguments)
              );
            };
          }
        }
        function Vn(e) {
          if ("object" != typeof e || !e.RTCPeerConnection) return;
          const t = e.RTCPeerConnection.prototype,
            i = t.createOffer,
            n = t.createAnswer,
            s = t.setLocalDescription,
            r = t.setRemoteDescription,
            o = t.addIceCandidate;
          ((t.createOffer = function (e, t) {
            const n = arguments.length >= 2 ? arguments[2] : arguments[0],
              s = i.apply(this, [n]);
            return t ? (s.then(e, t), Promise.resolve()) : s;
          }),
            (t.createAnswer = function (e, t) {
              const i = arguments.length >= 2 ? arguments[2] : arguments[0],
                s = n.apply(this, [i]);
              return t ? (s.then(e, t), Promise.resolve()) : s;
            }));
          let a = function (e, t, i) {
            const n = s.apply(this, [e]);
            return i ? (n.then(t, i), Promise.resolve()) : n;
          };
          ((t.setLocalDescription = a),
            (a = function (e, t, i) {
              const n = r.apply(this, [e]);
              return i ? (n.then(t, i), Promise.resolve()) : n;
            }),
            (t.setRemoteDescription = a),
            (a = function (e, t, i) {
              const n = o.apply(this, [e]);
              return i ? (n.then(t, i), Promise.resolve()) : n;
            }),
            (t.addIceCandidate = a));
        }
        function qn(e) {
          const t = e && e.navigator;
          if (t.mediaDevices && t.mediaDevices.getUserMedia) {
            const e = t.mediaDevices,
              i = e.getUserMedia.bind(e);
            t.mediaDevices.getUserMedia = (e) => i(Kn(e));
          }
          !t.getUserMedia &&
            t.mediaDevices &&
            t.mediaDevices.getUserMedia &&
            (t.getUserMedia = function (e, i, n) {
              t.mediaDevices.getUserMedia(e).then(i, n);
            }.bind(t));
        }
        function Kn(e) {
          return e && void 0 !== e.video
            ? Object.assign({}, e, { video: pn(e.video) })
            : e;
        }
        function Wn(e) {
          if (!e.RTCPeerConnection) return;
          const t = e.RTCPeerConnection;
          ((e.RTCPeerConnection = function (e, i) {
            if (e && e.iceServers) {
              const t = [];
              for (let i = 0; i < e.iceServers.length; i++) {
                let n = e.iceServers[i];
                void 0 === n.urls && n.url
                  ? (un("RTCIceServer.url", "RTCIceServer.urls"),
                    (n = JSON.parse(JSON.stringify(n))),
                    (n.urls = n.url),
                    delete n.url,
                    t.push(n))
                  : t.push(e.iceServers[i]);
              }
              e.iceServers = t;
            }
            return new t(e, i);
          }),
            (e.RTCPeerConnection.prototype = t.prototype),
            "generateCertificate" in t &&
              Object.defineProperty(
                e.RTCPeerConnection,
                "generateCertificate",
                { get: () => t.generateCertificate },
              ));
        }
        function Gn(e) {
          "object" == typeof e &&
            e.RTCTrackEvent &&
            "receiver" in e.RTCTrackEvent.prototype &&
            !("transceiver" in e.RTCTrackEvent.prototype) &&
            Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
              get() {
                return { receiver: this.receiver };
              },
            });
        }
        function Hn(e) {
          const t = e.RTCPeerConnection.prototype.createOffer;
          e.RTCPeerConnection.prototype.createOffer = function (e) {
            if (e) {
              void 0 !== e.offerToReceiveAudio &&
                (e.offerToReceiveAudio = !!e.offerToReceiveAudio);
              const t = this.getTransceivers().find(
                (e) => "audio" === e.receiver.track.kind,
              );
              (!1 === e.offerToReceiveAudio && t
                ? "sendrecv" === t.direction
                  ? t.setDirection
                    ? t.setDirection("sendonly")
                    : (t.direction = "sendonly")
                  : "recvonly" === t.direction &&
                    (t.setDirection
                      ? t.setDirection("inactive")
                      : (t.direction = "inactive"))
                : !0 !== e.offerToReceiveAudio ||
                  t ||
                  this.addTransceiver("audio", { direction: "recvonly" }),
                void 0 !== e.offerToReceiveVideo &&
                  (e.offerToReceiveVideo = !!e.offerToReceiveVideo));
              const i = this.getTransceivers().find(
                (e) => "video" === e.receiver.track.kind,
              );
              !1 === e.offerToReceiveVideo && i
                ? "sendrecv" === i.direction
                  ? i.setDirection
                    ? i.setDirection("sendonly")
                    : (i.direction = "sendonly")
                  : "recvonly" === i.direction &&
                    (i.setDirection
                      ? i.setDirection("inactive")
                      : (i.direction = "inactive"))
                : !0 !== e.offerToReceiveVideo ||
                  i ||
                  this.addTransceiver("video", { direction: "recvonly" });
            }
            return t.apply(this, arguments);
          };
        }
        function zn(e) {
          "object" != typeof e ||
            e.AudioContext ||
            (e.AudioContext = e.webkitAudioContext);
        }
        var Jn,
          Qn = Object.freeze({
            __proto__: null,
            shimAudioContext: zn,
            shimCallbacksAPI: Vn,
            shimConstraints: Kn,
            shimCreateOfferLegacy: Hn,
            shimGetUserMedia: qn,
            shimLocalStreamsAPI: Fn,
            shimRTCIceServerUrls: Wn,
            shimRemoteStreamsAPI: Bn,
            shimTrackEventTransceiver: Gn,
          }),
          Yn = { exports: {} },
          Xn =
            (Jn ||
              ((Jn = 1),
              (function (e) {
                const t = {
                  generateIdentifier: function () {
                    return Math.random().toString(36).substring(2, 12);
                  },
                };
                ((t.localCName = t.generateIdentifier()),
                  (t.splitLines = function (e) {
                    return e
                      .trim()
                      .split("\n")
                      .map((e) => e.trim());
                  }),
                  (t.splitSections = function (e) {
                    return e
                      .split("\nm=")
                      .map((e, t) => (t > 0 ? "m=" + e : e).trim() + "\r\n");
                  }),
                  (t.getDescription = function (e) {
                    const i = t.splitSections(e);
                    return i && i[0];
                  }),
                  (t.getMediaSections = function (e) {
                    const i = t.splitSections(e);
                    return (i.shift(), i);
                  }),
                  (t.matchPrefix = function (e, i) {
                    return t.splitLines(e).filter((e) => 0 === e.indexOf(i));
                  }),
                  (t.parseCandidate = function (e) {
                    let t;
                    t =
                      0 === e.indexOf("a=candidate:")
                        ? e.substring(12).split(" ")
                        : e.substring(10).split(" ");
                    const i = {
                      foundation: t[0],
                      component: { 1: "rtp", 2: "rtcp" }[t[1]] || t[1],
                      protocol: t[2].toLowerCase(),
                      priority: parseInt(t[3], 10),
                      ip: t[4],
                      address: t[4],
                      port: parseInt(t[5], 10),
                      type: t[7],
                    };
                    for (let e = 8; e < t.length; e += 2)
                      switch (t[e]) {
                        case "raddr":
                          i.relatedAddress = t[e + 1];
                          break;
                        case "rport":
                          i.relatedPort = parseInt(t[e + 1], 10);
                          break;
                        case "tcptype":
                          i.tcpType = t[e + 1];
                          break;
                        case "ufrag":
                          ((i.ufrag = t[e + 1]),
                            (i.usernameFragment = t[e + 1]));
                          break;
                        default:
                          void 0 === i[t[e]] && (i[t[e]] = t[e + 1]);
                      }
                    return i;
                  }),
                  (t.writeCandidate = function (e) {
                    const t = [];
                    t.push(e.foundation);
                    const i = e.component;
                    ("rtp" === i
                      ? t.push(1)
                      : "rtcp" === i
                        ? t.push(2)
                        : t.push(i),
                      t.push(e.protocol.toUpperCase()),
                      t.push(e.priority),
                      t.push(e.address || e.ip),
                      t.push(e.port));
                    const n = e.type;
                    return (
                      t.push("typ"),
                      t.push(n),
                      "host" !== n &&
                        e.relatedAddress &&
                        e.relatedPort &&
                        (t.push("raddr"),
                        t.push(e.relatedAddress),
                        t.push("rport"),
                        t.push(e.relatedPort)),
                      e.tcpType &&
                        "tcp" === e.protocol.toLowerCase() &&
                        (t.push("tcptype"), t.push(e.tcpType)),
                      (e.usernameFragment || e.ufrag) &&
                        (t.push("ufrag"),
                        t.push(e.usernameFragment || e.ufrag)),
                      "candidate:" + t.join(" ")
                    );
                  }),
                  (t.parseIceOptions = function (e) {
                    return e.substring(14).split(" ");
                  }),
                  (t.parseRtpMap = function (e) {
                    let t = e.substring(9).split(" ");
                    const i = { payloadType: parseInt(t.shift(), 10) };
                    return (
                      (t = t[0].split("/")),
                      (i.name = t[0]),
                      (i.clockRate = parseInt(t[1], 10)),
                      (i.channels = 3 === t.length ? parseInt(t[2], 10) : 1),
                      (i.numChannels = i.channels),
                      i
                    );
                  }),
                  (t.writeRtpMap = function (e) {
                    let t = e.payloadType;
                    void 0 !== e.preferredPayloadType &&
                      (t = e.preferredPayloadType);
                    const i = e.channels || e.numChannels || 1;
                    return (
                      "a=rtpmap:" +
                      t +
                      " " +
                      e.name +
                      "/" +
                      e.clockRate +
                      (1 !== i ? "/" + i : "") +
                      "\r\n"
                    );
                  }),
                  (t.parseExtmap = function (e) {
                    const t = e.substring(9).split(" ");
                    return {
                      id: parseInt(t[0], 10),
                      direction:
                        t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
                      uri: t[1],
                      attributes: t.slice(2).join(" "),
                    };
                  }),
                  (t.writeExtmap = function (e) {
                    return (
                      "a=extmap:" +
                      (e.id || e.preferredId) +
                      (e.direction && "sendrecv" !== e.direction
                        ? "/" + e.direction
                        : "") +
                      " " +
                      e.uri +
                      (e.attributes ? " " + e.attributes : "") +
                      "\r\n"
                    );
                  }),
                  (t.parseFmtp = function (e) {
                    const t = {};
                    let i;
                    const n = e.substring(e.indexOf(" ") + 1).split(";");
                    for (let e = 0; e < n.length; e++)
                      ((i = n[e].trim().split("=")), (t[i[0].trim()] = i[1]));
                    return t;
                  }),
                  (t.writeFmtp = function (e) {
                    let t = "",
                      i = e.payloadType;
                    if (
                      (void 0 !== e.preferredPayloadType &&
                        (i = e.preferredPayloadType),
                      e.parameters && Object.keys(e.parameters).length)
                    ) {
                      const n = [];
                      (Object.keys(e.parameters).forEach((t) => {
                        void 0 !== e.parameters[t]
                          ? n.push(t + "=" + e.parameters[t])
                          : n.push(t);
                      }),
                        (t += "a=fmtp:" + i + " " + n.join(";") + "\r\n"));
                    }
                    return t;
                  }),
                  (t.parseRtcpFb = function (e) {
                    const t = e.substring(e.indexOf(" ") + 1).split(" ");
                    return { type: t.shift(), parameter: t.join(" ") };
                  }),
                  (t.writeRtcpFb = function (e) {
                    let t = "",
                      i = e.payloadType;
                    return (
                      void 0 !== e.preferredPayloadType &&
                        (i = e.preferredPayloadType),
                      e.rtcpFeedback &&
                        e.rtcpFeedback.length &&
                        e.rtcpFeedback.forEach((e) => {
                          t +=
                            "a=rtcp-fb:" +
                            i +
                            " " +
                            e.type +
                            (e.parameter && e.parameter.length
                              ? " " + e.parameter
                              : "") +
                            "\r\n";
                        }),
                      t
                    );
                  }),
                  (t.parseSsrcMedia = function (e) {
                    const t = e.indexOf(" "),
                      i = { ssrc: parseInt(e.substring(7, t), 10) },
                      n = e.indexOf(":", t);
                    return (
                      n > -1
                        ? ((i.attribute = e.substring(t + 1, n)),
                          (i.value = e.substring(n + 1)))
                        : (i.attribute = e.substring(t + 1)),
                      i
                    );
                  }),
                  (t.parseSsrcGroup = function (e) {
                    const t = e.substring(13).split(" ");
                    return {
                      semantics: t.shift(),
                      ssrcs: t.map((e) => parseInt(e, 10)),
                    };
                  }),
                  (t.getMid = function (e) {
                    const i = t.matchPrefix(e, "a=mid:")[0];
                    if (i) return i.substring(6);
                  }),
                  (t.parseFingerprint = function (e) {
                    const t = e.substring(14).split(" ");
                    return {
                      algorithm: t[0].toLowerCase(),
                      value: t[1].toUpperCase(),
                    };
                  }),
                  (t.getDtlsParameters = function (e, i) {
                    return {
                      role: "auto",
                      fingerprints: t
                        .matchPrefix(e + i, "a=fingerprint:")
                        .map(t.parseFingerprint),
                    };
                  }),
                  (t.writeDtlsParameters = function (e, t) {
                    let i = "a=setup:" + t + "\r\n";
                    return (
                      e.fingerprints.forEach((e) => {
                        i +=
                          "a=fingerprint:" +
                          e.algorithm +
                          " " +
                          e.value +
                          "\r\n";
                      }),
                      i
                    );
                  }),
                  (t.parseCryptoLine = function (e) {
                    const t = e.substring(9).split(" ");
                    return {
                      tag: parseInt(t[0], 10),
                      cryptoSuite: t[1],
                      keyParams: t[2],
                      sessionParams: t.slice(3),
                    };
                  }),
                  (t.writeCryptoLine = function (e) {
                    return (
                      "a=crypto:" +
                      e.tag +
                      " " +
                      e.cryptoSuite +
                      " " +
                      ("object" == typeof e.keyParams
                        ? t.writeCryptoKeyParams(e.keyParams)
                        : e.keyParams) +
                      (e.sessionParams ? " " + e.sessionParams.join(" ") : "") +
                      "\r\n"
                    );
                  }),
                  (t.parseCryptoKeyParams = function (e) {
                    if (0 !== e.indexOf("inline:")) return null;
                    const t = e.substring(7).split("|");
                    return {
                      keyMethod: "inline",
                      keySalt: t[0],
                      lifeTime: t[1],
                      mkiValue: t[2] ? t[2].split(":")[0] : void 0,
                      mkiLength: t[2] ? t[2].split(":")[1] : void 0,
                    };
                  }),
                  (t.writeCryptoKeyParams = function (e) {
                    return (
                      e.keyMethod +
                      ":" +
                      e.keySalt +
                      (e.lifeTime ? "|" + e.lifeTime : "") +
                      (e.mkiValue && e.mkiLength
                        ? "|" + e.mkiValue + ":" + e.mkiLength
                        : "")
                    );
                  }),
                  (t.getCryptoParameters = function (e, i) {
                    return t
                      .matchPrefix(e + i, "a=crypto:")
                      .map(t.parseCryptoLine);
                  }),
                  (t.getIceParameters = function (e, i) {
                    const n = t.matchPrefix(e + i, "a=ice-ufrag:")[0],
                      s = t.matchPrefix(e + i, "a=ice-pwd:")[0];
                    return n && s
                      ? {
                          usernameFragment: n.substring(12),
                          password: s.substring(10),
                        }
                      : null;
                  }),
                  (t.writeIceParameters = function (e) {
                    let t =
                      "a=ice-ufrag:" +
                      e.usernameFragment +
                      "\r\na=ice-pwd:" +
                      e.password +
                      "\r\n";
                    return (e.iceLite && (t += "a=ice-lite\r\n"), t);
                  }),
                  (t.parseRtpParameters = function (e) {
                    const i = {
                        codecs: [],
                        headerExtensions: [],
                        fecMechanisms: [],
                        rtcp: [],
                      },
                      n = t.splitLines(e)[0].split(" ");
                    i.profile = n[2];
                    for (let s = 3; s < n.length; s++) {
                      const r = n[s],
                        o = t.matchPrefix(e, "a=rtpmap:" + r + " ")[0];
                      if (o) {
                        const n = t.parseRtpMap(o),
                          s = t.matchPrefix(e, "a=fmtp:" + r + " ");
                        switch (
                          ((n.parameters = s.length ? t.parseFmtp(s[0]) : {}),
                          (n.rtcpFeedback = t
                            .matchPrefix(e, "a=rtcp-fb:" + r + " ")
                            .map(t.parseRtcpFb)),
                          i.codecs.push(n),
                          n.name.toUpperCase())
                        ) {
                          case "RED":
                          case "ULPFEC":
                            i.fecMechanisms.push(n.name.toUpperCase());
                        }
                      }
                    }
                    t.matchPrefix(e, "a=extmap:").forEach((e) => {
                      i.headerExtensions.push(t.parseExtmap(e));
                    });
                    const s = t
                      .matchPrefix(e, "a=rtcp-fb:* ")
                      .map(t.parseRtcpFb);
                    return (
                      i.codecs.forEach((e) => {
                        s.forEach((t) => {
                          e.rtcpFeedback.find(
                            (e) =>
                              e.type === t.type && e.parameter === t.parameter,
                          ) || e.rtcpFeedback.push(t);
                        });
                      }),
                      i
                    );
                  }),
                  (t.writeRtpDescription = function (e, i) {
                    let n = "";
                    ((n += "m=" + e + " "),
                      (n += i.codecs.length > 0 ? "9" : "0"),
                      (n += " " + (i.profile || "UDP/TLS/RTP/SAVPF") + " "),
                      (n +=
                        i.codecs
                          .map((e) =>
                            void 0 !== e.preferredPayloadType
                              ? e.preferredPayloadType
                              : e.payloadType,
                          )
                          .join(" ") + "\r\n"),
                      (n += "c=IN IP4 0.0.0.0\r\n"),
                      (n += "a=rtcp:9 IN IP4 0.0.0.0\r\n"),
                      i.codecs.forEach((e) => {
                        ((n += t.writeRtpMap(e)),
                          (n += t.writeFmtp(e)),
                          (n += t.writeRtcpFb(e)));
                      }));
                    let s = 0;
                    return (
                      i.codecs.forEach((e) => {
                        e.maxptime > s && (s = e.maxptime);
                      }),
                      s > 0 && (n += "a=maxptime:" + s + "\r\n"),
                      i.headerExtensions &&
                        i.headerExtensions.forEach((e) => {
                          n += t.writeExtmap(e);
                        }),
                      n
                    );
                  }),
                  (t.parseRtpEncodingParameters = function (e) {
                    const i = [],
                      n = t.parseRtpParameters(e),
                      s = -1 !== n.fecMechanisms.indexOf("RED"),
                      r = -1 !== n.fecMechanisms.indexOf("ULPFEC"),
                      o = t
                        .matchPrefix(e, "a=ssrc:")
                        .map((e) => t.parseSsrcMedia(e))
                        .filter((e) => "cname" === e.attribute),
                      a = o.length > 0 && o[0].ssrc;
                    let c;
                    const d = t.matchPrefix(e, "a=ssrc-group:FID").map((e) =>
                      e
                        .substring(17)
                        .split(" ")
                        .map((e) => parseInt(e, 10)),
                    );
                    (d.length > 0 &&
                      d[0].length > 1 &&
                      d[0][0] === a &&
                      (c = d[0][1]),
                      n.codecs.forEach((e) => {
                        if (
                          "RTX" === e.name.toUpperCase() &&
                          e.parameters.apt
                        ) {
                          let t = {
                            ssrc: a,
                            codecPayloadType: parseInt(e.parameters.apt, 10),
                          };
                          (a && c && (t.rtx = { ssrc: c }),
                            i.push(t),
                            s &&
                              ((t = JSON.parse(JSON.stringify(t))),
                              (t.fec = {
                                ssrc: a,
                                mechanism: r ? "red+ulpfec" : "red",
                              }),
                              i.push(t)));
                        }
                      }),
                      0 === i.length && a && i.push({ ssrc: a }));
                    let l = t.matchPrefix(e, "b=");
                    return (
                      l.length &&
                        ((l =
                          0 === l[0].indexOf("b=TIAS:")
                            ? parseInt(l[0].substring(7), 10)
                            : 0 === l[0].indexOf("b=AS:")
                              ? 1e3 * parseInt(l[0].substring(5), 10) * 0.95 -
                                16e3
                              : void 0),
                        i.forEach((e) => {
                          e.maxBitrate = l;
                        })),
                      i
                    );
                  }),
                  (t.parseRtcpParameters = function (e) {
                    const i = {},
                      n = t
                        .matchPrefix(e, "a=ssrc:")
                        .map((e) => t.parseSsrcMedia(e))
                        .filter((e) => "cname" === e.attribute)[0];
                    n && ((i.cname = n.value), (i.ssrc = n.ssrc));
                    const s = t.matchPrefix(e, "a=rtcp-rsize");
                    ((i.reducedSize = s.length > 0),
                      (i.compound = 0 === s.length));
                    const r = t.matchPrefix(e, "a=rtcp-mux");
                    return ((i.mux = r.length > 0), i);
                  }),
                  (t.writeRtcpParameters = function (e) {
                    let t = "";
                    return (
                      e.reducedSize && (t += "a=rtcp-rsize\r\n"),
                      e.mux && (t += "a=rtcp-mux\r\n"),
                      void 0 !== e.ssrc &&
                        e.cname &&
                        (t +=
                          "a=ssrc:" + e.ssrc + " cname:" + e.cname + "\r\n"),
                      t
                    );
                  }),
                  (t.parseMsid = function (e) {
                    let i;
                    const n = t.matchPrefix(e, "a=msid:");
                    if (1 === n.length)
                      return (
                        (i = n[0].substring(7).split(" ")),
                        { stream: i[0], track: i[1] }
                      );
                    const s = t
                      .matchPrefix(e, "a=ssrc:")
                      .map((e) => t.parseSsrcMedia(e))
                      .filter((e) => "msid" === e.attribute);
                    return s.length > 0
                      ? ((i = s[0].value.split(" ")),
                        { stream: i[0], track: i[1] })
                      : void 0;
                  }),
                  (t.parseSctpDescription = function (e) {
                    const i = t.parseMLine(e),
                      n = t.matchPrefix(e, "a=max-message-size:");
                    let s;
                    (n.length > 0 && (s = parseInt(n[0].substring(19), 10)),
                      isNaN(s) && (s = 65536));
                    const r = t.matchPrefix(e, "a=sctp-port:");
                    if (r.length > 0)
                      return {
                        port: parseInt(r[0].substring(12), 10),
                        protocol: i.fmt,
                        maxMessageSize: s,
                      };
                    const o = t.matchPrefix(e, "a=sctpmap:");
                    if (o.length > 0) {
                      const e = o[0].substring(10).split(" ");
                      return {
                        port: parseInt(e[0], 10),
                        protocol: e[1],
                        maxMessageSize: s,
                      };
                    }
                  }),
                  (t.writeSctpDescription = function (e, t) {
                    let i = [];
                    return (
                      (i =
                        "DTLS/SCTP" !== e.protocol
                          ? [
                              "m=" +
                                e.kind +
                                " 9 " +
                                e.protocol +
                                " " +
                                t.protocol +
                                "\r\n",
                              "c=IN IP4 0.0.0.0\r\n",
                              "a=sctp-port:" + t.port + "\r\n",
                            ]
                          : [
                              "m=" +
                                e.kind +
                                " 9 " +
                                e.protocol +
                                " " +
                                t.port +
                                "\r\n",
                              "c=IN IP4 0.0.0.0\r\n",
                              "a=sctpmap:" +
                                t.port +
                                " " +
                                t.protocol +
                                " 65535\r\n",
                            ]),
                      void 0 !== t.maxMessageSize &&
                        i.push(
                          "a=max-message-size:" + t.maxMessageSize + "\r\n",
                        ),
                      i.join("")
                    );
                  }),
                  (t.generateSessionId = function () {
                    return Math.random().toString().substr(2, 22);
                  }),
                  (t.writeSessionBoilerplate = function (e, i, n) {
                    let s;
                    const r = void 0 !== i ? i : 2;
                    return (
                      (s = e || t.generateSessionId()),
                      "v=0\r\no=" +
                        (n || "thisisadapterortc") +
                        " " +
                        s +
                        " " +
                        r +
                        " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
                    );
                  }),
                  (t.getDirection = function (e, i) {
                    const n = t.splitLines(e);
                    for (let e = 0; e < n.length; e++)
                      switch (n[e]) {
                        case "a=sendrecv":
                        case "a=sendonly":
                        case "a=recvonly":
                        case "a=inactive":
                          return n[e].substring(2);
                      }
                    return i ? t.getDirection(i) : "sendrecv";
                  }),
                  (t.getKind = function (e) {
                    return t.splitLines(e)[0].split(" ")[0].substring(2);
                  }),
                  (t.isRejected = function (e) {
                    return "0" === e.split(" ", 2)[1];
                  }),
                  (t.parseMLine = function (e) {
                    const i = t.splitLines(e)[0].substring(2).split(" ");
                    return {
                      kind: i[0],
                      port: parseInt(i[1], 10),
                      protocol: i[2],
                      fmt: i.slice(3).join(" "),
                    };
                  }),
                  (t.parseOLine = function (e) {
                    const i = t.matchPrefix(e, "o=")[0].substring(2).split(" ");
                    return {
                      username: i[0],
                      sessionId: i[1],
                      sessionVersion: parseInt(i[2], 10),
                      netType: i[3],
                      addressType: i[4],
                      address: i[5],
                    };
                  }),
                  (t.isValidSDP = function (e) {
                    if ("string" != typeof e || 0 === e.length) return !1;
                    const i = t.splitLines(e);
                    for (let e = 0; e < i.length; e++)
                      if (i[e].length < 2 || "=" !== i[e].charAt(1)) return !1;
                    return !0;
                  }),
                  (e.exports = t));
              })(Yn)),
            Yn.exports),
          Zn = Ai(Xn),
          $n = s({ __proto__: null, default: Zn }, [Xn]);
        function es(e) {
          if (
            !e.RTCIceCandidate ||
            (e.RTCIceCandidate && "foundation" in e.RTCIceCandidate.prototype)
          )
            return;
          const t = e.RTCIceCandidate;
          ((e.RTCIceCandidate = function (e) {
            if (
              ("object" == typeof e &&
                e.candidate &&
                0 === e.candidate.indexOf("a=") &&
                ((e = JSON.parse(JSON.stringify(e))).candidate =
                  e.candidate.substring(2)),
              e.candidate && e.candidate.length)
            ) {
              const i = new t(e),
                n = Zn.parseCandidate(e.candidate);
              for (const e in n)
                e in i || Object.defineProperty(i, e, { value: n[e] });
              return (
                (i.toJSON = function () {
                  return {
                    candidate: i.candidate,
                    sdpMid: i.sdpMid,
                    sdpMLineIndex: i.sdpMLineIndex,
                    usernameFragment: i.usernameFragment,
                  };
                }),
                i
              );
            }
            return new t(e);
          }),
            (e.RTCIceCandidate.prototype = t.prototype),
            an(
              e,
              "icecandidate",
              (t) => (
                t.candidate &&
                  Object.defineProperty(t, "candidate", {
                    value: new e.RTCIceCandidate(t.candidate),
                    writable: "false",
                  }),
                t
              ),
            ));
        }
        function ts(e) {
          !e.RTCIceCandidate ||
            (e.RTCIceCandidate &&
              "relayProtocol" in e.RTCIceCandidate.prototype) ||
            an(e, "icecandidate", (e) => {
              if (e.candidate) {
                const t = Zn.parseCandidate(e.candidate.candidate);
                "relay" === t.type &&
                  (e.candidate.relayProtocol = { 0: "tls", 1: "tcp", 2: "udp" }[
                    t.priority >> 24
                  ]);
              }
              return e;
            });
        }
        function is(e, t) {
          if (!e.RTCPeerConnection) return;
          "sctp" in e.RTCPeerConnection.prototype ||
            Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
              get() {
                return void 0 === this._sctp ? null : this._sctp;
              },
            });
          const i = e.RTCPeerConnection.prototype.setRemoteDescription;
          e.RTCPeerConnection.prototype.setRemoteDescription = function () {
            if (
              ((this._sctp = null), "chrome" === t.browser && t.version >= 76)
            ) {
              const { sdpSemantics: e } = this.getConfiguration();
              "plan-b" === e &&
                Object.defineProperty(this, "sctp", {
                  get() {
                    return void 0 === this._sctp ? null : this._sctp;
                  },
                  enumerable: !0,
                  configurable: !0,
                });
            }
            if (
              (function (e) {
                if (!e || !e.sdp) return !1;
                const t = Zn.splitSections(e.sdp);
                return (
                  t.shift(),
                  t.some((e) => {
                    const t = Zn.parseMLine(e);
                    return (
                      t &&
                      "application" === t.kind &&
                      -1 !== t.protocol.indexOf("SCTP")
                    );
                  })
                );
              })(arguments[0])
            ) {
              const e = (function (e) {
                  const t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                  if (null === t || t.length < 2) return -1;
                  const i = parseInt(t[1], 10);
                  return i != i ? -1 : i;
                })(arguments[0]),
                i = (function (e) {
                  let i = 65536;
                  return (
                    "firefox" === t.browser &&
                      (i =
                        t.version < 57
                          ? -1 === e
                            ? 16384
                            : 2147483637
                          : t.version < 60
                            ? 57 === t.version
                              ? 65535
                              : 65536
                            : 2147483637),
                    i
                  );
                })(e),
                n = (function (e, i) {
                  let n = 65536;
                  "firefox" === t.browser && 57 === t.version && (n = 65535);
                  const s = Zn.matchPrefix(e.sdp, "a=max-message-size:");
                  return (
                    s.length > 0
                      ? (n = parseInt(s[0].substring(19), 10))
                      : "firefox" === t.browser && -1 !== i && (n = 2147483637),
                    n
                  );
                })(arguments[0], e);
              let s;
              s =
                0 === i && 0 === n
                  ? Number.POSITIVE_INFINITY
                  : 0 === i || 0 === n
                    ? Math.max(i, n)
                    : Math.min(i, n);
              const r = {};
              (Object.defineProperty(r, "maxMessageSize", { get: () => s }),
                (this._sctp = r));
            }
            return i.apply(this, arguments);
          };
        }
        function ns(e) {
          if (
            !e.RTCPeerConnection ||
            !("createDataChannel" in e.RTCPeerConnection.prototype)
          )
            return;
          function t(e, t) {
            const i = e.send;
            e.send = function () {
              const n = arguments[0],
                s = n.length || n.size || n.byteLength;
              if (
                "open" === e.readyState &&
                t.sctp &&
                s > t.sctp.maxMessageSize
              )
                throw new TypeError(
                  "Message too large (can send a maximum of " +
                    t.sctp.maxMessageSize +
                    " bytes)",
                );
              return i.apply(e, arguments);
            };
          }
          const i = e.RTCPeerConnection.prototype.createDataChannel;
          ((e.RTCPeerConnection.prototype.createDataChannel = function () {
            const e = i.apply(this, arguments);
            return (t(e, this), e);
          }),
            an(e, "datachannel", (e) => (t(e.channel, e.target), e)));
        }
        function ss(e) {
          if (
            !e.RTCPeerConnection ||
            "connectionState" in e.RTCPeerConnection.prototype
          )
            return;
          const t = e.RTCPeerConnection.prototype;
          (Object.defineProperty(t, "connectionState", {
            get() {
              return (
                { completed: "connected", checking: "connecting" }[
                  this.iceConnectionState
                ] || this.iceConnectionState
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
            Object.defineProperty(t, "onconnectionstatechange", {
              get() {
                return this._onconnectionstatechange || null;
              },
              set(e) {
                (this._onconnectionstatechange &&
                  (this.removeEventListener(
                    "connectionstatechange",
                    this._onconnectionstatechange,
                  ),
                  delete this._onconnectionstatechange),
                  e &&
                    this.addEventListener(
                      "connectionstatechange",
                      (this._onconnectionstatechange = e),
                    ));
              },
              enumerable: !0,
              configurable: !0,
            }),
            ["setLocalDescription", "setRemoteDescription"].forEach((e) => {
              const i = t[e];
              t[e] = function () {
                return (
                  this._connectionstatechangepoly ||
                    ((this._connectionstatechangepoly = (e) => {
                      const t = e.target;
                      if (t._lastConnectionState !== t.connectionState) {
                        t._lastConnectionState = t.connectionState;
                        const i = new Event("connectionstatechange", e);
                        t.dispatchEvent(i);
                      }
                      return e;
                    }),
                    this.addEventListener(
                      "iceconnectionstatechange",
                      this._connectionstatechangepoly,
                    )),
                  i.apply(this, arguments)
                );
              };
            }));
        }
        function rs(e, t) {
          if (!e.RTCPeerConnection) return;
          if ("chrome" === t.browser && t.version >= 71) return;
          if ("safari" === t.browser && t._safariVersion >= 13.1) return;
          const i = e.RTCPeerConnection.prototype.setRemoteDescription;
          e.RTCPeerConnection.prototype.setRemoteDescription = function (t) {
            if (t && t.sdp && -1 !== t.sdp.indexOf("\na=extmap-allow-mixed")) {
              const i = t.sdp
                .split("\n")
                .filter((e) => "a=extmap-allow-mixed" !== e.trim())
                .join("\n");
              e.RTCSessionDescription && t instanceof e.RTCSessionDescription
                ? (arguments[0] = new e.RTCSessionDescription({
                    type: t.type,
                    sdp: i,
                  }))
                : (t.sdp = i);
            }
            return i.apply(this, arguments);
          };
        }
        function os(e, t) {
          if (!e.RTCPeerConnection || !e.RTCPeerConnection.prototype) return;
          const i = e.RTCPeerConnection.prototype.addIceCandidate;
          i &&
            0 !== i.length &&
            (e.RTCPeerConnection.prototype.addIceCandidate = function () {
              return arguments[0]
                ? (("chrome" === t.browser && t.version < 78) ||
                    ("firefox" === t.browser && t.version < 68) ||
                    "safari" === t.browser) &&
                  arguments[0] &&
                  "" === arguments[0].candidate
                  ? Promise.resolve()
                  : i.apply(this, arguments)
                : (arguments[1] && arguments[1].apply(null), Promise.resolve());
            });
        }
        function as(e, t) {
          if (!e.RTCPeerConnection || !e.RTCPeerConnection.prototype) return;
          const i = e.RTCPeerConnection.prototype.setLocalDescription;
          i &&
            0 !== i.length &&
            (e.RTCPeerConnection.prototype.setLocalDescription = function () {
              let e = arguments[0] || {};
              if ("object" != typeof e || (e.type && e.sdp))
                return i.apply(this, arguments);
              if (((e = { type: e.type, sdp: e.sdp }), !e.type))
                switch (this.signalingState) {
                  case "stable":
                  case "have-local-offer":
                  case "have-remote-pranswer":
                    e.type = "offer";
                    break;
                  default:
                    e.type = "answer";
                }
              return e.sdp || ("offer" !== e.type && "answer" !== e.type)
                ? i.apply(this, [e])
                : ("offer" === e.type ? this.createOffer : this.createAnswer)
                    .apply(this)
                    .then((e) => i.apply(this, [e]));
            });
        }
        var cs = Object.freeze({
          __proto__: null,
          removeExtmapAllowMixed: rs,
          shimAddIceCandidateNullOrEmpty: os,
          shimConnectionState: ss,
          shimMaxMessageSize: is,
          shimParameterlessSetLocalDescription: as,
          shimRTCIceCandidate: es,
          shimRTCIceCandidateRelayProtocol: ts,
          shimSendThrowTypeError: ns,
        });
        !(function () {
          let { window: e } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { shimChrome: !0, shimFirefox: !0, shimSafari: !0 };
          const i = ln,
            n = (function (e) {
              const t = { browser: null, version: null };
              if (void 0 === e || !e.navigator || !e.navigator.userAgent)
                return ((t.browser = "Not a browser."), t);
              const { navigator: i } = e;
              if (i.userAgentData && i.userAgentData.brands) {
                const e = i.userAgentData.brands.find(
                  (e) => "Chromium" === e.brand,
                );
                if (e)
                  return {
                    browser: "chrome",
                    version: parseInt(e.version, 10),
                  };
              }
              if (i.mozGetUserMedia)
                ((t.browser = "firefox"),
                  (t.version = parseInt(
                    on(i.userAgent, /Firefox\/(\d+)\./, 1),
                  )));
              else if (
                i.webkitGetUserMedia ||
                (!1 === e.isSecureContext && e.webkitRTCPeerConnection)
              )
                ((t.browser = "chrome"),
                  (t.version = parseInt(
                    on(i.userAgent, /Chrom(e|ium)\/(\d+)\./, 2),
                  )));
              else {
                if (
                  !e.RTCPeerConnection ||
                  !i.userAgent.match(/AppleWebKit\/(\d+)\./)
                )
                  return ((t.browser = "Not a supported browser."), t);
                ((t.browser = "safari"),
                  (t.version = parseInt(
                    on(i.userAgent, /AppleWebKit\/(\d+)\./, 1),
                  )),
                  (t.supportsUnifiedPlan =
                    e.RTCRtpTransceiver &&
                    "currentDirection" in e.RTCRtpTransceiver.prototype),
                  (t._safariVersion = on(
                    i.userAgent,
                    /Version\/(\d+(\.?\d+))/,
                    1,
                  )));
              }
              return t;
            })(e),
            s = {
              browserDetails: n,
              commonShim: cs,
              extractVersion: on,
              disableLog: cn,
              disableWarnings: dn,
              sdp: $n,
            };
          switch (n.browser) {
            case "chrome":
              if (!Pn || !wn || !t.shimChrome)
                return (
                  i("Chrome shim is not included in this adapter release."),
                  s
                );
              if (null === n.version)
                return (
                  i("Chrome shim can not determine version, not shimming."),
                  s
                );
              (i("adapter.js shimming chrome."),
                (s.browserShim = Pn),
                os(e, n),
                as(e),
                vn(e, n),
                bn(e),
                wn(e, n),
                kn(e),
                Sn(e, n),
                yn(e),
                Tn(e),
                En(e, n),
                es(e),
                ts(e),
                ss(e),
                is(e, n),
                ns(e),
                rs(e, n));
              break;
            case "firefox":
              if (!jn || !On || !t.shimFirefox)
                return (
                  i("Firefox shim is not included in this adapter release."),
                  s
                );
              (i("adapter.js shimming firefox."),
                (s.browserShim = jn),
                os(e, n),
                as(e),
                Rn(e, n),
                On(e, n),
                In(e),
                Mn(e),
                Dn(e),
                xn(e),
                _n(e),
                An(e),
                Nn(e),
                Ln(e),
                Un(e),
                es(e),
                ss(e),
                is(e, n),
                ns(e));
              break;
            case "safari":
              if (!Qn || !t.shimSafari)
                return (
                  i("Safari shim is not included in this adapter release."),
                  s
                );
              (i("adapter.js shimming safari."),
                (s.browserShim = Qn),
                os(e, n),
                as(e),
                Wn(e),
                Hn(e),
                Vn(e),
                Fn(e),
                Bn(e),
                Gn(e),
                qn(e),
                zn(e),
                es(e),
                ts(e),
                is(e, n),
                ns(e),
                rs(e, n));
              break;
            default:
              i("Unsupported browser!");
          }
        })({ window: "undefined" == typeof window ? void 0 : window });
        const ds = "AES-GCM",
          ls = "lk_e2ee",
          us = {
            sharedKey: !1,
            ratchetSalt: "LKFrameEncryptionKey",
            ratchetWindowSize: 8,
            failureTolerance: 10,
            keyringSize: 16,
          };
        var hs, ps, ms, gs;
        function fs() {
          return bs() || vs();
        }
        function vs() {
          return void 0 !== window.RTCRtpScriptTransform;
        }
        function bs() {
          return (
            void 0 !== window.RTCRtpSender &&
            void 0 !== window.RTCRtpSender.prototype.createEncodedStreams
          );
        }
        function ks(e) {
          return "type" in e;
        }
        function ys(e) {
          return Zi(this, arguments, void 0, function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { name: ds },
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "encrypt";
            return (function* () {
              return crypto.subtle.importKey(
                "raw",
                e,
                t,
                !1,
                "derive" === i
                  ? ["deriveBits", "deriveKey"]
                  : ["encrypt", "decrypt"],
              );
            })();
          });
        }
        function Ts(e) {
          return Zi(this, void 0, void 0, function* () {
            let t = new TextEncoder();
            return yield crypto.subtle.importKey(
              "raw",
              t.encode(e),
              { name: "PBKDF2" },
              !1,
              ["deriveBits", "deriveKey"],
            );
          });
        }
        function Cs(e) {
          return Zi(this, void 0, void 0, function* () {
            return yield crypto.subtle.importKey("raw", e, "HKDF", !1, [
              "deriveBits",
              "deriveKey",
            ]);
          });
        }
        function Ss(e, t) {
          const i = new TextEncoder().encode(t);
          switch (e) {
            case "HKDF":
              return {
                name: "HKDF",
                salt: i,
                hash: "SHA-256",
                info: new ArrayBuffer(128),
              };
            case "PBKDF2":
              return {
                name: "PBKDF2",
                salt: i,
                hash: "SHA-256",
                iterations: 1e5,
              };
            default:
              throw new Error(
                "algorithm ".concat(e, " is currently unsupported"),
              );
          }
        }
        function ws(e, t) {
          return Zi(this, void 0, void 0, function* () {
            const i = Ss(e.algorithm.name, t),
              n = yield crypto.subtle.deriveKey(
                i,
                e,
                { name: ds, length: 128 },
                !1,
                ["encrypt", "decrypt"],
              );
            return { material: e, encryptionKey: n };
          });
        }
        function Es() {
          return window.crypto.getRandomValues(new Uint8Array(32));
        }
        function Ps(e, t) {
          return Zi(this, void 0, void 0, function* () {
            const i = Ss(e.algorithm.name, t);
            return crypto.subtle.deriveBits(i, e, 256);
          });
        }
        function Rs(e) {
          for (var t = 0; t < e.length - 3; t++)
            if (0 == e[t] && 0 == e[t + 1] && 3 == e[t + 2]) return !0;
          return !1;
        }
        function Is(e) {
          const t = [];
          for (var i = e.length, n = 0; n < e.length; )
            i - n >= 3 && !e[n] && !e[n + 1] && 3 == e[n + 2]
              ? (t.push(e[n++]), t.push(e[n++]), n++)
              : t.push(e[n++]);
          return new Uint8Array(t);
        }
        (!(function (e) {
          ((e.SetKey = "setKey"),
            (e.RatchetRequest = "ratchetRequest"),
            (e.KeyRatcheted = "keyRatcheted"));
        })(hs || (hs = {})),
          (function (e) {
            e.KeyRatcheted = "keyRatcheted";
          })(ps || (ps = {})),
          (function (e) {
            ((e.ParticipantEncryptionStatusChanged =
              "participantEncryptionStatusChanged"),
              (e.EncryptionError = "encryptionError"));
          })(ms || (ms = {})),
          (function (e) {
            e.Error = "cryptorError";
          })(gs || (gs = {})));
        const Os = 2,
          Ds = 3;
        function xs(e) {
          const t = [];
          for (var i = 0, n = 0; n < e.length; ++n) {
            var s = e[n];
            (s <= Ds && i >= Os && (t.push(Ds), (i = 0)),
              t.push(s),
              0 == s ? ++i : (i = 0));
          }
          return new Uint8Array(t);
        }
        class Ms extends nn.EventEmitter {
          constructor() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            (super(),
              (this.onKeyRatcheted = (e, t, i) => {
                Ki.debug("key ratcheted event received", {
                  ratchetResult: e,
                  participantId: t,
                  keyIndex: i,
                });
              }),
              (this.keyInfoMap = new Map()),
              (this.options = Object.assign(Object.assign({}, us), e)),
              this.on(hs.KeyRatcheted, this.onKeyRatcheted));
          }
          onSetEncryptionKey(e, t, i) {
            const n = { key: e, participantIdentity: t, keyIndex: i };
            if (!this.options.sharedKey && !t)
              throw new Error(
                "participant identity needs to be passed for encryption key if sharedKey option is false",
              );
            (this.keyInfoMap.set(
              ""
                .concat(null != t ? t : "shared", "-")
                .concat(null != i ? i : 0),
              n,
            ),
              this.emit(hs.SetKey, n));
          }
          getKeys() {
            return Array.from(this.keyInfoMap.values());
          }
          getOptions() {
            return this.options;
          }
          ratchetKey(e, t) {
            this.emit(hs.RatchetRequest, e, t);
          }
        }
        class _s extends Ms {
          constructor() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            super(
              Object.assign(Object.assign({}, e), {
                sharedKey: !0,
                ratchetWindowSize: 0,
                failureTolerance: -1,
              }),
            );
          }
          setKey(e) {
            return Zi(this, void 0, void 0, function* () {
              const t = "string" == typeof e ? yield Ts(e) : yield Cs(e);
              this.onSetEncryptionKey(t);
            });
          }
        }
        class As extends Error {
          constructor(e, t) {
            (super(t || "an error has occured"),
              (this.name = "LiveKitError"),
              (this.code = e));
          }
        }
        var Ns, Ls, Us, js, Fs, Bs, Vs;
        !(function (e) {
          ((e[(e.NotAllowed = 0)] = "NotAllowed"),
            (e[(e.ServerUnreachable = 1)] = "ServerUnreachable"),
            (e[(e.InternalError = 2)] = "InternalError"),
            (e[(e.Cancelled = 3)] = "Cancelled"),
            (e[(e.LeaveRequest = 4)] = "LeaveRequest"),
            (e[(e.Timeout = 5)] = "Timeout"));
        })(Ns || (Ns = {}));
        class qs extends As {
          constructor(e, t, i, n) {
            (super(1, e),
              (this.name = "ConnectionError"),
              (this.status = i),
              (this.reason = t),
              (this.context = n),
              (this.reasonName = Ns[t]));
          }
        }
        class Ks extends As {
          constructor(e) {
            (super(21, null != e ? e : "device is unsupported"),
              (this.name = "DeviceUnsupportedError"));
          }
        }
        class Ws extends As {
          constructor(e) {
            (super(20, null != e ? e : "track is invalid"),
              (this.name = "TrackInvalidError"));
          }
        }
        class Gs extends As {
          constructor(e) {
            (super(10, null != e ? e : "unsupported server"),
              (this.name = "UnsupportedServer"));
          }
        }
        class Hs extends As {
          constructor(e) {
            (super(12, null != e ? e : "unexpected connection state"),
              (this.name = "UnexpectedConnectionState"));
          }
        }
        class zs extends As {
          constructor(e) {
            (super(13, null != e ? e : "unable to negotiate"),
              (this.name = "NegotiationError"));
          }
        }
        class Js extends As {
          constructor(e) {
            (super(14, null != e ? e : "unable to publish data"),
              (this.name = "PublishDataError"));
          }
        }
        class Qs extends As {
          constructor(e, t) {
            (super(15, e),
              (this.name = "PublishTrackError"),
              (this.status = t));
          }
        }
        class Ys extends As {
          constructor(e, t) {
            (super(15, e),
              (this.reason = t),
              (this.reasonName = "string" == typeof t ? t : Mi[t]));
          }
        }
        (!(function (e) {
          ((e.PermissionDenied = "PermissionDenied"),
            (e.NotFound = "NotFound"),
            (e.DeviceInUse = "DeviceInUse"),
            (e.Other = "Other"));
        })(Ls || (Ls = {})),
          (function (e) {
            e.getFailure = function (t) {
              if (t && "name" in t)
                return "NotFoundError" === t.name ||
                  "DevicesNotFoundError" === t.name
                  ? e.NotFound
                  : "NotAllowedError" === t.name ||
                      "PermissionDeniedError" === t.name
                    ? e.PermissionDenied
                    : "NotReadableError" === t.name ||
                        "TrackStartError" === t.name
                      ? e.DeviceInUse
                      : e.Other;
            };
          })(Ls || (Ls = {})),
          (function (e) {
            ((e[(e.InvalidKey = 0)] = "InvalidKey"),
              (e[(e.MissingKey = 1)] = "MissingKey"),
              (e[(e.InternalError = 2)] = "InternalError"));
          })(Us || (Us = {})));
        class Xs extends As {
          constructor(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Us.InternalError,
              i = arguments.length > 2 ? arguments[2] : void 0;
            (super(40, e), (this.reason = t), (this.participantIdentity = i));
          }
        }
        (!(function (e) {
          ((e.Connected = "connected"),
            (e.Reconnecting = "reconnecting"),
            (e.SignalReconnecting = "signalReconnecting"),
            (e.Reconnected = "reconnected"),
            (e.Disconnected = "disconnected"),
            (e.ConnectionStateChanged = "connectionStateChanged"),
            (e.Moved = "moved"),
            (e.MediaDevicesChanged = "mediaDevicesChanged"),
            (e.ParticipantConnected = "participantConnected"),
            (e.ParticipantDisconnected = "participantDisconnected"),
            (e.TrackPublished = "trackPublished"),
            (e.TrackSubscribed = "trackSubscribed"),
            (e.TrackSubscriptionFailed = "trackSubscriptionFailed"),
            (e.TrackUnpublished = "trackUnpublished"),
            (e.TrackUnsubscribed = "trackUnsubscribed"),
            (e.TrackMuted = "trackMuted"),
            (e.TrackUnmuted = "trackUnmuted"),
            (e.LocalTrackPublished = "localTrackPublished"),
            (e.LocalTrackUnpublished = "localTrackUnpublished"),
            (e.LocalAudioSilenceDetected = "localAudioSilenceDetected"),
            (e.ActiveSpeakersChanged = "activeSpeakersChanged"),
            (e.ParticipantMetadataChanged = "participantMetadataChanged"),
            (e.ParticipantNameChanged = "participantNameChanged"),
            (e.ParticipantAttributesChanged = "participantAttributesChanged"),
            (e.ParticipantActive = "participantActive"),
            (e.RoomMetadataChanged = "roomMetadataChanged"),
            (e.DataReceived = "dataReceived"),
            (e.SipDTMFReceived = "sipDTMFReceived"),
            (e.TranscriptionReceived = "transcriptionReceived"),
            (e.ConnectionQualityChanged = "connectionQualityChanged"),
            (e.TrackStreamStateChanged = "trackStreamStateChanged"),
            (e.TrackSubscriptionPermissionChanged =
              "trackSubscriptionPermissionChanged"),
            (e.TrackSubscriptionStatusChanged =
              "trackSubscriptionStatusChanged"),
            (e.AudioPlaybackStatusChanged = "audioPlaybackChanged"),
            (e.VideoPlaybackStatusChanged = "videoPlaybackChanged"),
            (e.MediaDevicesError = "mediaDevicesError"),
            (e.ParticipantPermissionsChanged = "participantPermissionsChanged"),
            (e.SignalConnected = "signalConnected"),
            (e.RecordingStatusChanged = "recordingStatusChanged"),
            (e.ParticipantEncryptionStatusChanged =
              "participantEncryptionStatusChanged"),
            (e.EncryptionError = "encryptionError"),
            (e.DCBufferStatusChanged = "dcBufferStatusChanged"),
            (e.ActiveDeviceChanged = "activeDeviceChanged"),
            (e.ChatMessage = "chatMessage"),
            (e.LocalTrackSubscribed = "localTrackSubscribed"),
            (e.MetricsReceived = "metricsReceived"));
        })(js || (js = {})),
          (function (e) {
            ((e.TrackPublished = "trackPublished"),
              (e.TrackSubscribed = "trackSubscribed"),
              (e.TrackSubscriptionFailed = "trackSubscriptionFailed"),
              (e.TrackUnpublished = "trackUnpublished"),
              (e.TrackUnsubscribed = "trackUnsubscribed"),
              (e.TrackMuted = "trackMuted"),
              (e.TrackUnmuted = "trackUnmuted"),
              (e.LocalTrackPublished = "localTrackPublished"),
              (e.LocalTrackUnpublished = "localTrackUnpublished"),
              (e.LocalTrackCpuConstrained = "localTrackCpuConstrained"),
              (e.LocalSenderCreated = "localSenderCreated"),
              (e.ParticipantMetadataChanged = "participantMetadataChanged"),
              (e.ParticipantNameChanged = "participantNameChanged"),
              (e.DataReceived = "dataReceived"),
              (e.SipDTMFReceived = "sipDTMFReceived"),
              (e.TranscriptionReceived = "transcriptionReceived"),
              (e.IsSpeakingChanged = "isSpeakingChanged"),
              (e.ConnectionQualityChanged = "connectionQualityChanged"),
              (e.TrackStreamStateChanged = "trackStreamStateChanged"),
              (e.TrackSubscriptionPermissionChanged =
                "trackSubscriptionPermissionChanged"),
              (e.TrackSubscriptionStatusChanged =
                "trackSubscriptionStatusChanged"),
              (e.TrackCpuConstrained = "trackCpuConstrained"),
              (e.MediaDevicesError = "mediaDevicesError"),
              (e.AudioStreamAcquired = "audioStreamAcquired"),
              (e.ParticipantPermissionsChanged =
                "participantPermissionsChanged"),
              (e.PCTrackAdded = "pcTrackAdded"),
              (e.AttributesChanged = "attributesChanged"),
              (e.LocalTrackSubscribed = "localTrackSubscribed"),
              (e.ChatMessage = "chatMessage"),
              (e.Active = "active"));
          })(Fs || (Fs = {})),
          (function (e) {
            ((e.TransportsCreated = "transportsCreated"),
              (e.Connected = "connected"),
              (e.Disconnected = "disconnected"),
              (e.Resuming = "resuming"),
              (e.Resumed = "resumed"),
              (e.Restarting = "restarting"),
              (e.Restarted = "restarted"),
              (e.SignalResumed = "signalResumed"),
              (e.SignalRestarted = "signalRestarted"),
              (e.Closing = "closing"),
              (e.MediaTrackAdded = "mediaTrackAdded"),
              (e.ActiveSpeakersUpdate = "activeSpeakersUpdate"),
              (e.DataPacketReceived = "dataPacketReceived"),
              (e.RTPVideoMapUpdate = "rtpVideoMapUpdate"),
              (e.DCBufferStatusChanged = "dcBufferStatusChanged"),
              (e.ParticipantUpdate = "participantUpdate"),
              (e.RoomUpdate = "roomUpdate"),
              (e.SpeakersChanged = "speakersChanged"),
              (e.StreamStateChanged = "streamStateChanged"),
              (e.ConnectionQualityUpdate = "connectionQualityUpdate"),
              (e.SubscriptionError = "subscriptionError"),
              (e.SubscriptionPermissionUpdate = "subscriptionPermissionUpdate"),
              (e.RemoteMute = "remoteMute"),
              (e.SubscribedQualityUpdate = "subscribedQualityUpdate"),
              (e.LocalTrackUnpublished = "localTrackUnpublished"),
              (e.LocalTrackSubscribed = "localTrackSubscribed"),
              (e.Offline = "offline"),
              (e.SignalRequestResponse = "signalRequestResponse"),
              (e.SignalConnected = "signalConnected"),
              (e.RoomMoved = "roomMoved"));
          })(Bs || (Bs = {})),
          (function (e) {
            ((e.Message = "message"),
              (e.Muted = "muted"),
              (e.Unmuted = "unmuted"),
              (e.Restarted = "restarted"),
              (e.Ended = "ended"),
              (e.Subscribed = "subscribed"),
              (e.Unsubscribed = "unsubscribed"),
              (e.CpuConstrained = "cpuConstrained"),
              (e.UpdateSettings = "updateSettings"),
              (e.UpdateSubscription = "updateSubscription"),
              (e.AudioPlaybackStarted = "audioPlaybackStarted"),
              (e.AudioPlaybackFailed = "audioPlaybackFailed"),
              (e.AudioSilenceDetected = "audioSilenceDetected"),
              (e.VisibilityChanged = "visibilityChanged"),
              (e.VideoDimensionsChanged = "videoDimensionsChanged"),
              (e.VideoPlaybackStarted = "videoPlaybackStarted"),
              (e.VideoPlaybackFailed = "videoPlaybackFailed"),
              (e.ElementAttached = "elementAttached"),
              (e.ElementDetached = "elementDetached"),
              (e.UpstreamPaused = "upstreamPaused"),
              (e.UpstreamResumed = "upstreamResumed"),
              (e.SubscriptionPermissionChanged =
                "subscriptionPermissionChanged"),
              (e.SubscriptionStatusChanged = "subscriptionStatusChanged"),
              (e.SubscriptionFailed = "subscriptionFailed"),
              (e.TrackProcessorUpdate = "trackProcessorUpdate"),
              (e.AudioTrackFeatureUpdate = "audioTrackFeatureUpdate"),
              (e.TranscriptionReceived = "transcriptionReceived"),
              (e.TimeSyncUpdate = "timeSyncUpdate"),
              (e.PreConnectBufferFlushed = "preConnectBufferFlushed"));
          })(Vs || (Vs = {})));
        const Zs = /version\/(\d+(\.?_?\d+)+)/i;
        let $s;
        function er(e) {
          let t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (void 0 === e && "undefined" == typeof navigator) return;
          const i = (null != e ? e : navigator.userAgent).toLowerCase();
          if (void 0 === $s || t) {
            const e = tr.find((e) => {
              let { test: t } = e;
              return t.test(i);
            });
            $s = null == e ? void 0 : e.describe(i);
          }
          return $s;
        }
        const tr = [
          {
            test: /firefox|iceweasel|fxios/i,
            describe: (e) => ({
              name: "Firefox",
              version: ir(
                /(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,
                e,
              ),
              os: e.toLowerCase().includes("fxios") ? "iOS" : void 0,
              osVersion: nr(e),
            }),
          },
          {
            test: /chrom|crios|crmo/i,
            describe: (e) => ({
              name: "Chrome",
              version: ir(
                /(?:chrome|chromium|crios|crmo)\/(\d+(\.?_?\d+)+)/i,
                e,
              ),
              os: e.toLowerCase().includes("crios") ? "iOS" : void 0,
              osVersion: nr(e),
            }),
          },
          {
            test: /safari|applewebkit/i,
            describe: (e) => ({
              name: "Safari",
              version: ir(Zs, e),
              os: e.includes("mobile/") ? "iOS" : "macOS",
              osVersion: nr(e),
            }),
          },
        ];
        function ir(e, t) {
          let i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
          const n = t.match(e);
          return (n && n.length >= i && n[i]) || "";
        }
        function nr(e) {
          return e.includes("mac os")
            ? ir(/\(.+?(\d+_\d+(:?_\d+)?)/, e, 1).replace(/_/g, ".")
            : void 0;
        }
        const sr = "2.15.3",
          rr = 16;
        class or {}
        ((or.setTimeout = function () {
          return setTimeout(...arguments);
        }),
          (or.setInterval = function () {
            return setInterval(...arguments);
          }),
          (or.clearTimeout = function () {
            return clearTimeout(...arguments);
          }),
          (or.clearInterval = function () {
            return clearInterval(...arguments);
          }));
        const ar = [];
        var cr;
        !(function (e) {
          ((e[(e.LOW = 0)] = "LOW"),
            (e[(e.MEDIUM = 1)] = "MEDIUM"),
            (e[(e.HIGH = 2)] = "HIGH"));
        })(cr || (cr = {}));
        class dr extends nn.EventEmitter {
          constructor(e, t) {
            let i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            var n;
            (super(),
              (this.attachedElements = []),
              (this.isMuted = !1),
              (this.streamState = dr.StreamState.Active),
              (this.isInBackground = !1),
              (this._currentBitrate = 0),
              (this.log = Ki),
              (this.appVisibilityChangedListener = () => {
                (this.backgroundTimeout && clearTimeout(this.backgroundTimeout),
                  "hidden" === document.visibilityState
                    ? (this.backgroundTimeout = setTimeout(
                        () => this.handleAppVisibilityChanged(),
                        5e3,
                      ))
                    : this.handleAppVisibilityChanged());
              }),
              (this.log = Gi(
                null !== (n = i.loggerName) && void 0 !== n ? n : Bi.Track,
              )),
              (this.loggerContextCb = i.loggerContextCb),
              this.setMaxListeners(100),
              (this.kind = t),
              (this._mediaStreamTrack = e),
              (this._mediaStreamID = e.id),
              (this.source = dr.Source.Unknown));
          }
          get logContext() {
            var e;
            return Object.assign(
              Object.assign(
                {},
                null === (e = this.loggerContextCb) || void 0 === e
                  ? void 0
                  : e.call(this),
              ),
              Oo(this),
            );
          }
          get currentBitrate() {
            return this._currentBitrate;
          }
          get mediaStreamTrack() {
            return this._mediaStreamTrack;
          }
          get mediaStreamID() {
            return this._mediaStreamID;
          }
          attach(e) {
            let t = "audio";
            (this.kind === dr.Kind.Video && (t = "video"),
              0 === this.attachedElements.length &&
                this.kind === dr.Kind.Video &&
                this.addAppVisibilityListener(),
              e ||
                ("audio" === t &&
                  (ar.forEach((t) => {
                    null !== t.parentElement || e || (e = t);
                  }),
                  e && ar.splice(ar.indexOf(e), 1)),
                e || (e = document.createElement(t))),
              this.attachedElements.includes(e) ||
                this.attachedElements.push(e),
              lr(this.mediaStreamTrack, e));
            const i = e.srcObject.getTracks(),
              n = i.some((e) => "audio" === e.kind);
            return (
              e
                .play()
                .then(() => {
                  this.emit(
                    n ? Vs.AudioPlaybackStarted : Vs.VideoPlaybackStarted,
                  );
                })
                .catch((t) => {
                  ("NotAllowedError" === t.name
                    ? this.emit(
                        n ? Vs.AudioPlaybackFailed : Vs.VideoPlaybackFailed,
                        t,
                      )
                    : "AbortError" === t.name
                      ? Ki.debug(
                          "".concat(
                            n ? "audio" : "video",
                            " playback aborted, likely due to new play request",
                          ),
                        )
                      : Ki.warn(
                          "could not playback ".concat(n ? "audio" : "video"),
                          t,
                        ),
                    n &&
                      e &&
                      i.some((e) => "video" === e.kind) &&
                      "NotAllowedError" === t.name &&
                      ((e.muted = !0), e.play().catch(() => {})));
                }),
              this.emit(Vs.ElementAttached, e),
              e
            );
          }
          detach(e) {
            try {
              if (e) {
                ur(this.mediaStreamTrack, e);
                const t = this.attachedElements.indexOf(e);
                return (
                  t >= 0 &&
                    (this.attachedElements.splice(t, 1),
                    this.recycleElement(e),
                    this.emit(Vs.ElementDetached, e)),
                  e
                );
              }
              const t = [];
              return (
                this.attachedElements.forEach((e) => {
                  (ur(this.mediaStreamTrack, e),
                    t.push(e),
                    this.recycleElement(e),
                    this.emit(Vs.ElementDetached, e));
                }),
                (this.attachedElements = []),
                t
              );
            } finally {
              0 === this.attachedElements.length &&
                this.removeAppVisibilityListener();
            }
          }
          stop() {
            (this.stopMonitor(), this._mediaStreamTrack.stop());
          }
          enable() {
            this._mediaStreamTrack.enabled = !0;
          }
          disable() {
            this._mediaStreamTrack.enabled = !1;
          }
          stopMonitor() {
            (this.monitorInterval && clearInterval(this.monitorInterval),
              this.timeSyncHandle && cancelAnimationFrame(this.timeSyncHandle));
          }
          updateLoggerOptions(e) {
            (e.loggerName && (this.log = Gi(e.loggerName)),
              e.loggerContextCb && (this.loggerContextCb = e.loggerContextCb));
          }
          recycleElement(e) {
            if (e instanceof HTMLAudioElement) {
              let t = !0;
              (e.pause(),
                ar.forEach((e) => {
                  e.parentElement || (t = !1);
                }),
                t && ar.push(e));
            }
          }
          handleAppVisibilityChanged() {
            return Zi(this, void 0, void 0, function* () {
              ((this.isInBackground = "hidden" === document.visibilityState),
                this.isInBackground ||
                  this.kind !== dr.Kind.Video ||
                  setTimeout(
                    () =>
                      this.attachedElements.forEach((e) =>
                        e.play().catch(() => {}),
                      ),
                    0,
                  ));
            });
          }
          addAppVisibilityListener() {
            Ur()
              ? ((this.isInBackground = "hidden" === document.visibilityState),
                document.addEventListener(
                  "visibilitychange",
                  this.appVisibilityChangedListener,
                ))
              : (this.isInBackground = !1);
          }
          removeAppVisibilityListener() {
            Ur() &&
              document.removeEventListener(
                "visibilitychange",
                this.appVisibilityChangedListener,
              );
          }
        }
        function lr(e, t) {
          let i, n;
          ((i =
            t.srcObject instanceof MediaStream
              ? t.srcObject
              : new MediaStream()),
            (n = "audio" === e.kind ? i.getAudioTracks() : i.getVideoTracks()),
            n.includes(e) ||
              (n.forEach((e) => {
                i.removeTrack(e);
              }),
              i.addTrack(e)),
            (_r() && t instanceof HTMLVideoElement) || (t.autoplay = !0),
            (t.muted = 0 === i.getAudioTracks().length),
            t instanceof HTMLVideoElement && (t.playsInline = !0),
            t.srcObject !== i &&
              ((t.srcObject = i),
              (_r() || Mr()) &&
                t instanceof HTMLVideoElement &&
                setTimeout(() => {
                  ((t.srcObject = i), t.play().catch(() => {}));
                }, 0)));
        }
        function ur(e, t) {
          if (t.srcObject instanceof MediaStream) {
            const i = t.srcObject;
            (i.removeTrack(e),
              i.getTracks().length > 0
                ? (t.srcObject = i)
                : (t.srcObject = null));
          }
        }
        !(function (e) {
          let t, i, n;
          (!(function (e) {
            ((e.Audio = "audio"), (e.Video = "video"), (e.Unknown = "unknown"));
          })((t = e.Kind || (e.Kind = {}))),
            (function (e) {
              ((e.Camera = "camera"),
                (e.Microphone = "microphone"),
                (e.ScreenShare = "screen_share"),
                (e.ScreenShareAudio = "screen_share_audio"),
                (e.Unknown = "unknown"));
            })((i = e.Source || (e.Source = {}))),
            (function (e) {
              ((e.Active = "active"),
                (e.Paused = "paused"),
                (e.Unknown = "unknown"));
            })((n = e.StreamState || (e.StreamState = {}))),
            (e.kindToProto = function (e) {
              switch (e) {
                case t.Audio:
                  return Ge.AUDIO;
                case t.Video:
                  return Ge.VIDEO;
                default:
                  return Ge.DATA;
              }
            }),
            (e.kindFromProto = function (e) {
              switch (e) {
                case Ge.AUDIO:
                  return t.Audio;
                case Ge.VIDEO:
                  return t.Video;
                default:
                  return t.Unknown;
              }
            }),
            (e.sourceToProto = function (e) {
              switch (e) {
                case i.Camera:
                  return He.CAMERA;
                case i.Microphone:
                  return He.MICROPHONE;
                case i.ScreenShare:
                  return He.SCREEN_SHARE;
                case i.ScreenShareAudio:
                  return He.SCREEN_SHARE_AUDIO;
                default:
                  return He.UNKNOWN;
              }
            }),
            (e.sourceFromProto = function (e) {
              switch (e) {
                case He.CAMERA:
                  return i.Camera;
                case He.MICROPHONE:
                  return i.Microphone;
                case He.SCREEN_SHARE:
                  return i.ScreenShare;
                case He.SCREEN_SHARE_AUDIO:
                  return i.ScreenShareAudio;
                default:
                  return i.Unknown;
              }
            }),
            (e.streamStateFromProto = function (e) {
              switch (e) {
                case Bt.ACTIVE:
                  return n.Active;
                case Bt.PAUSED:
                  return n.Paused;
                default:
                  return n.Unknown;
              }
            }));
        })(dr || (dr = {}));
        class hr {
          constructor(e, t, i, n, s) {
            if ("object" == typeof e)
              ((this.width = e.width),
                (this.height = e.height),
                (this.aspectRatio = e.aspectRatio),
                (this.encoding = {
                  maxBitrate: e.maxBitrate,
                  maxFramerate: e.maxFramerate,
                  priority: e.priority,
                }));
            else {
              if (void 0 === t || void 0 === i)
                throw new TypeError(
                  "Unsupported options: provide at least width, height and maxBitrate",
                );
              ((this.width = e),
                (this.height = t),
                (this.aspectRatio = e / t),
                (this.encoding = {
                  maxBitrate: i,
                  maxFramerate: n,
                  priority: s,
                }));
            }
          }
          get resolution() {
            return {
              width: this.width,
              height: this.height,
              frameRate: this.encoding.maxFramerate,
              aspectRatio: this.aspectRatio,
            };
          }
        }
        const pr = ["vp8", "h264"],
          mr = ["vp8", "h264", "vp9", "av1", "h265"];
        function gr(e) {
          return !!pr.find((t) => t === e);
        }
        var fr, vr;
        (!(function (e) {
          ((e[(e.PREFER_REGRESSION = 0)] = "PREFER_REGRESSION"),
            (e[(e.SIMULCAST = 1)] = "SIMULCAST"),
            (e[(e.REGRESSION = 2)] = "REGRESSION"));
        })(fr || (fr = {})),
          (function (e) {
            ((e.telephone = { maxBitrate: 12e3 }),
              (e.speech = { maxBitrate: 24e3 }),
              (e.music = { maxBitrate: 48e3 }),
              (e.musicStereo = { maxBitrate: 64e3 }),
              (e.musicHighQuality = { maxBitrate: 96e3 }),
              (e.musicHighQualityStereo = { maxBitrate: 128e3 }));
          })(vr || (vr = {})));
        const br = {
            h90: new hr(160, 90, 9e4, 20),
            h180: new hr(320, 180, 16e4, 20),
            h216: new hr(384, 216, 18e4, 20),
            h360: new hr(640, 360, 45e4, 20),
            h540: new hr(960, 540, 8e5, 25),
            h720: new hr(1280, 720, 17e5, 30),
            h1080: new hr(1920, 1080, 3e6, 30),
            h1440: new hr(2560, 1440, 5e6, 30),
            h2160: new hr(3840, 2160, 8e6, 30),
          },
          kr = {
            h120: new hr(160, 120, 7e4, 20),
            h180: new hr(240, 180, 125e3, 20),
            h240: new hr(320, 240, 14e4, 20),
            h360: new hr(480, 360, 33e4, 20),
            h480: new hr(640, 480, 5e5, 20),
            h540: new hr(720, 540, 6e5, 25),
            h720: new hr(960, 720, 13e5, 30),
            h1080: new hr(1440, 1080, 23e5, 30),
            h1440: new hr(1920, 1440, 38e5, 30),
          },
          yr = {
            h360fps3: new hr(640, 360, 2e5, 3, "medium"),
            h360fps15: new hr(640, 360, 4e5, 15, "medium"),
            h720fps5: new hr(1280, 720, 8e5, 5, "medium"),
            h720fps15: new hr(1280, 720, 15e5, 15, "medium"),
            h720fps30: new hr(1280, 720, 2e6, 30, "medium"),
            h1080fps15: new hr(1920, 1080, 25e5, 15, "medium"),
            h1080fps30: new hr(1920, 1080, 5e6, 30, "medium"),
            original: new hr(0, 0, 7e6, 30, "medium"),
          },
          Tr =
            "https://aomediacodec.github.io/av1-rtp-spec/#dependency-descriptor-rtp-header-extension";
        function Cr(e) {
          return Zi(this, void 0, void 0, function* () {
            return new Promise((t) => or.setTimeout(t, e));
          });
        }
        function Sr() {
          return "addTransceiver" in RTCPeerConnection.prototype;
        }
        function wr() {
          return "addTrack" in RTCPeerConnection.prototype;
        }
        function Er() {
          return (
            void 0 !== typeof ResizeObserver &&
            void 0 !== typeof IntersectionObserver
          );
        }
        function Pr() {
          return Sr();
        }
        function Rr() {
          if (!("getCapabilities" in RTCRtpSender)) return !1;
          if (_r()) return !1;
          const e = RTCRtpSender.getCapabilities("video");
          let t = !1;
          if (e)
            for (const i of e.codecs)
              if ("video/AV1" === i.mimeType) {
                t = !0;
                break;
              }
          return t;
        }
        function Ir() {
          if (!("getCapabilities" in RTCRtpSender)) return !1;
          if (Mr()) return !1;
          if (_r()) {
            const e = er();
            if ((null == e ? void 0 : e.version) && Kr(e.version, "16") < 0)
              return !1;
            if (
              "iOS" === (null == e ? void 0 : e.os) &&
              (null == e ? void 0 : e.osVersion) &&
              Kr(e.osVersion, "16") < 0
            )
              return !1;
          }
          const e = RTCRtpSender.getCapabilities("video");
          let t = !1;
          if (e)
            for (const i of e.codecs)
              if ("video/VP9" === i.mimeType) {
                t = !0;
                break;
              }
          return t;
        }
        function Or(e) {
          return "av1" === e || "vp9" === e;
        }
        function Dr(e) {
          return (
            !!document &&
            (e || (e = document.createElement("audio")), "setSinkId" in e)
          );
        }
        function xr() {
          return "undefined" != typeof RTCPeerConnection && (Sr() || wr());
        }
        function Mr() {
          var e;
          return (
            "Firefox" ===
            (null === (e = er()) || void 0 === e ? void 0 : e.name)
          );
        }
        function _r() {
          var e;
          return (
            "Safari" === (null === (e = er()) || void 0 === e ? void 0 : e.name)
          );
        }
        function Ar() {
          const e = er();
          return (
            "Safari" === (null == e ? void 0 : e.name) ||
            "iOS" === (null == e ? void 0 : e.os)
          );
        }
        function Nr() {
          const e = er();
          return (
            ("Safari" === (null == e ? void 0 : e.name) &&
              e.version.startsWith("17.")) ||
            ("iOS" === (null == e ? void 0 : e.os) &&
              !!(null == e ? void 0 : e.osVersion) &&
              Kr(e.osVersion, "17") >= 0)
          );
        }
        function Lr() {
          var e, t;
          return (
            !!Ur() &&
            (null !==
              (t =
                null === (e = navigator.userAgentData) || void 0 === e
                  ? void 0
                  : e.mobile) && void 0 !== t
              ? t
              : /Tablet|iPad|Mobile|Android|BlackBerry/.test(
                  navigator.userAgent,
                ))
          );
        }
        function Ur() {
          return "undefined" != typeof document;
        }
        function jr() {
          return "ReactNative" == navigator.product;
        }
        function Fr(e) {
          return (
            e.hostname.endsWith(".livekit.cloud") ||
            e.hostname.endsWith(".livekit.run")
          );
        }
        function Br() {
          if (global && global.LiveKitReactNativeGlobal)
            return global.LiveKitReactNativeGlobal;
        }
        function Vr() {
          if (!jr()) return;
          let e = Br();
          return e ? e.platform : void 0;
        }
        function qr() {
          if (Ur()) return window.devicePixelRatio;
          if (jr()) {
            let e = Br();
            if (e) return e.devicePixelRatio;
          }
          return 1;
        }
        function Kr(e, t) {
          const i = e.split("."),
            n = t.split("."),
            s = Math.min(i.length, n.length);
          for (let e = 0; e < s; ++e) {
            const t = parseInt(i[e], 10),
              r = parseInt(n[e], 10);
            if (t > r) return 1;
            if (t < r) return -1;
            if (e === s - 1 && t === r) return 0;
          }
          return "" === e && "" !== t
            ? -1
            : "" === t
              ? 1
              : i.length == n.length
                ? 0
                : i.length < n.length
                  ? -1
                  : 1;
        }
        function Wr(e) {
          for (const t of e) t.target.handleResize(t);
        }
        function Gr(e) {
          for (const t of e) t.target.handleVisibilityChanged(t);
        }
        let Hr = null;
        const zr = () => (Hr || (Hr = new ResizeObserver(Wr)), Hr);
        let Jr = null;
        const Qr = () => (
          Jr ||
            (Jr = new IntersectionObserver(Gr, {
              root: null,
              rootMargin: "0px",
            })),
          Jr
        );
        let Yr, Xr;
        function Zr() {
          return (Yr || (Yr = $r()), Yr.clone());
        }
        function $r() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 16,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 16,
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const s = document.createElement("canvas");
          ((s.width = e), (s.height = t));
          const r = s.getContext("2d");
          (null == r || r.fillRect(0, 0, s.width, s.height),
            n &&
              r &&
              (r.beginPath(),
              r.arc(e / 2, t / 2, 50, 0, 2 * Math.PI, !0),
              r.closePath(),
              (r.fillStyle = "grey"),
              r.fill()));
          const o = s.captureStream(),
            [a] = o.getTracks();
          if (!a) throw Error("Could not get empty media stream video track");
          return ((a.enabled = i), a);
        }
        function eo() {
          if (!Xr) {
            const e = new AudioContext(),
              t = e.createOscillator(),
              i = e.createGain();
            i.gain.setValueAtTime(0, 0);
            const n = e.createMediaStreamDestination();
            if (
              (t.connect(i),
              i.connect(n),
              t.start(),
              ([Xr] = n.stream.getAudioTracks()),
              !Xr)
            )
              throw Error("Could not get empty media stream audio track");
            Xr.enabled = !1;
          }
          return Xr.clone();
        }
        class to {
          get isResolved() {
            return this._isResolved;
          }
          constructor(e, t) {
            ((this._isResolved = !1),
              (this.onFinally = t),
              (this.promise = new Promise((t, i) =>
                Zi(this, void 0, void 0, function* () {
                  ((this.resolve = t), (this.reject = i), e && (yield e(t, i)));
                }),
              ).finally(() => {
                var e;
                ((this._isResolved = !0),
                  null === (e = this.onFinally) ||
                    void 0 === e ||
                    e.call(this));
              })));
          }
        }
        function io(e, t) {
          const i = Object.assign(
              {
                cloneTrack: !1,
                fftSize: 2048,
                smoothingTimeConstant: 0.8,
                minDecibels: -100,
                maxDecibels: -80,
              },
              t,
            ),
            n = So();
          if (!n)
            throw new Error("Audio Context not supported on this browser");
          const s = i.cloneTrack
              ? e.mediaStreamTrack.clone()
              : e.mediaStreamTrack,
            r = n.createMediaStreamSource(new MediaStream([s])),
            o = n.createAnalyser();
          ((o.minDecibels = i.minDecibels),
            (o.maxDecibels = i.maxDecibels),
            (o.fftSize = i.fftSize),
            (o.smoothingTimeConstant = i.smoothingTimeConstant),
            r.connect(o));
          const a = new Uint8Array(o.frequencyBinCount);
          return {
            calculateVolume: () => {
              o.getByteFrequencyData(a);
              let e = 0;
              for (const t of a) e += Math.pow(t / 255, 2);
              return Math.sqrt(e / a.length);
            },
            analyser: o,
            cleanup: () =>
              Zi(this, void 0, void 0, function* () {
                (yield n.close(), i.cloneTrack && s.stop());
              }),
          };
        }
        function no(e) {
          if ("string" == typeof e || "number" == typeof e) return e;
          if (Array.isArray(e)) return e[0];
          if (e.exact) return Array.isArray(e.exact) ? e.exact[0] : e.exact;
          if (e.ideal) return Array.isArray(e.ideal) ? e.ideal[0] : e.ideal;
          throw Error("could not unwrap constraint");
        }
        function so(e) {
          return e.startsWith("ws") ? e.replace(/^(ws)/, "http") : e;
        }
        function ro(e) {
          switch (e.reason) {
            case Ns.LeaveRequest:
              return e.context;
            case Ns.Cancelled:
              return Ye.CLIENT_INITIATED;
            case Ns.NotAllowed:
              return Ye.USER_REJECTED;
            case Ns.ServerUnreachable:
              return Ye.JOIN_FAILURE;
            default:
              return Ye.UNKNOWN_REASON;
          }
        }
        function oo(e) {
          return void 0 !== e ? Number(e) : void 0;
        }
        function ao(e) {
          return void 0 !== e ? BigInt(e) : void 0;
        }
        function co(e) {
          return !!e && !(e instanceof MediaStreamTrack) && e.isLocal;
        }
        function lo(e) {
          return !!e && e.kind == dr.Kind.Audio;
        }
        function uo(e) {
          return !!e && e.kind == dr.Kind.Video;
        }
        function ho(e) {
          return co(e) && uo(e);
        }
        function po(e) {
          return co(e) && lo(e);
        }
        function mo(e) {
          return !!e && !e.isLocal;
        }
        function go(e) {
          return !!e && !e.isLocal;
        }
        function fo(e) {
          return mo(e) && uo(e);
        }
        function vo(e) {
          return e.isLocal;
        }
        function bo(e) {
          return !e.isLocal;
        }
        function ko(e, t, i) {
          var n, s, r, o;
          const {
              optionsWithoutProcessor: a,
              audioProcessor: c,
              videoProcessor: d,
            } = Do(null != e ? e : {}),
            l = null == t ? void 0 : t.processor,
            u = null == i ? void 0 : i.processor,
            h = null != a ? a : {};
          return (
            !0 === h.audio && (h.audio = {}),
            !0 === h.video && (h.video = {}),
            h.audio &&
              (yo(h.audio, t),
              (null !== (n = (r = h.audio).deviceId) && void 0 !== n) ||
                (r.deviceId = { ideal: "default" }),
              (c || l) && (h.audio.processor = null != c ? c : l)),
            h.video &&
              (yo(h.video, i),
              (null !== (s = (o = h.video).deviceId) && void 0 !== s) ||
                (o.deviceId = { ideal: "default" }),
              (d || u) && (h.video.processor = null != d ? d : u)),
            h
          );
        }
        function yo(e, t) {
          return (
            Object.keys(t).forEach((i) => {
              void 0 === e[i] && (e[i] = t[i]);
            }),
            e
          );
        }
        function To(e) {
          var t, i, n, s;
          const r = {};
          if (e.video)
            if ("object" == typeof e.video) {
              const i = {},
                s = i,
                o = e.video;
              (Object.keys(o).forEach((e) => {
                "resolution" === e ? yo(s, o.resolution) : (s[e] = o[e]);
              }),
                (r.video = i),
                (null !== (t = (n = r.video).deviceId) && void 0 !== t) ||
                  (n.deviceId = { ideal: "default" }));
            } else r.video = !!e.video && { deviceId: { ideal: "default" } };
          else r.video = !1;
          return (
            e.audio
              ? "object" == typeof e.audio
                ? ((r.audio = e.audio),
                  (null !== (i = (s = r.audio).deviceId) && void 0 !== i) ||
                    (s.deviceId = { ideal: "default" }))
                : (r.audio = { deviceId: { ideal: "default" } })
              : (r.audio = !1),
            r
          );
        }
        function Co(e) {
          return Zi(this, arguments, void 0, function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 200;
            return (function* () {
              const i = So();
              if (i) {
                const n = i.createAnalyser();
                n.fftSize = 2048;
                const s = n.frequencyBinCount,
                  r = new Uint8Array(s);
                (i
                  .createMediaStreamSource(
                    new MediaStream([e.mediaStreamTrack]),
                  )
                  .connect(n),
                  yield Cr(t),
                  n.getByteTimeDomainData(r));
                const o = r.some((e) => 128 !== e && 0 !== e);
                return (i.close(), !o);
              }
              return !1;
            })();
          });
        }
        function So() {
          var e;
          const t =
            "undefined" != typeof window &&
            (window.AudioContext || window.webkitAudioContext);
          if (t) {
            const i = new t({ latencyHint: "interactive" });
            if (
              "suspended" === i.state &&
              "undefined" != typeof window &&
              (null === (e = window.document) || void 0 === e ? void 0 : e.body)
            ) {
              const e = () =>
                Zi(this, void 0, void 0, function* () {
                  var t;
                  try {
                    "suspended" === i.state && (yield i.resume());
                  } catch (e) {
                    console.warn(
                      "Error trying to auto-resume audio context",
                      e,
                    );
                  }
                  null === (t = window.document.body) ||
                    void 0 === t ||
                    t.removeEventListener("click", e);
                });
              window.document.body.addEventListener("click", e);
            }
            return i;
          }
        }
        function wo(e) {
          return "audioinput" === e
            ? dr.Source.Microphone
            : "videoinput" === e
              ? dr.Source.Camera
              : dr.Source.Unknown;
        }
        function Eo(e) {
          return e === dr.Source.Microphone
            ? "audioinput"
            : e === dr.Source.Camera
              ? "videoinput"
              : void 0;
        }
        function Po(e) {
          var t, i;
          let n = null === (t = e.video) || void 0 === t || t;
          return (
            e.resolution &&
              e.resolution.width > 0 &&
              e.resolution.height > 0 &&
              ((n = "boolean" == typeof n ? {} : n),
              (n = _r()
                ? Object.assign(Object.assign({}, n), {
                    width: { max: e.resolution.width },
                    height: { max: e.resolution.height },
                    frameRate: e.resolution.frameRate,
                  })
                : Object.assign(Object.assign({}, n), {
                    width: { ideal: e.resolution.width },
                    height: { ideal: e.resolution.height },
                    frameRate: e.resolution.frameRate,
                  }))),
            {
              audio: null !== (i = e.audio) && void 0 !== i && i,
              video: n,
              controller: e.controller,
              selfBrowserSurface: e.selfBrowserSurface,
              surfaceSwitching: e.surfaceSwitching,
              systemAudio: e.systemAudio,
              preferCurrentTab: e.preferCurrentTab,
            }
          );
        }
        function Ro(e) {
          return e.split("/")[1].toLowerCase();
        }
        function Io(e) {
          const t = [];
          return (
            e.forEach((e) => {
              void 0 !== e.track &&
                t.push(
                  new Yt({ cid: e.track.mediaStreamID, track: e.trackInfo }),
                );
            }),
            t
          );
        }
        function Oo(e) {
          return "mediaStreamTrack" in e
            ? {
                trackID: e.sid,
                source: e.source,
                muted: e.isMuted,
                enabled: e.mediaStreamTrack.enabled,
                kind: e.kind,
                streamID: e.mediaStreamID,
                streamTrackID: e.mediaStreamTrack.id,
              }
            : {
                trackID: e.trackSid,
                enabled: e.isEnabled,
                muted: e.isMuted,
                trackInfo: Object.assign(
                  {
                    mimeType: e.mimeType,
                    name: e.trackName,
                    encrypted: e.isEncrypted,
                    kind: e.kind,
                    source: e.source,
                  },
                  e.track ? Oo(e.track) : {},
                ),
              };
        }
        function Do(e) {
          const t = Object.assign({}, e);
          let i, n;
          return (
            "object" == typeof t.audio &&
              t.audio.processor &&
              ((i = t.audio.processor),
              (t.audio = Object.assign(Object.assign({}, t.audio), {
                processor: void 0,
              }))),
            "object" == typeof t.video &&
              t.video.processor &&
              ((n = t.video.processor),
              (t.video = Object.assign(Object.assign({}, t.video), {
                processor: void 0,
              }))),
            {
              audioProcessor: i,
              videoProcessor: n,
              optionsWithoutProcessor:
                ((s = t),
                void 0 === s
                  ? s
                  : "function" == typeof structuredClone
                    ? "object" == typeof s && null !== s
                      ? structuredClone(Object.assign({}, s))
                      : structuredClone(s)
                    : JSON.parse(JSON.stringify(s))),
            }
          );
          var s;
        }
        function xo(e, t) {
          return e.width * e.height < t.width * t.height;
        }
        class Mo extends nn.EventEmitter {
          constructor(e) {
            (super(),
              (this.onWorkerMessage = (e) => {
                var t, i;
                const { kind: n, data: s } = e.data;
                switch (n) {
                  case "error":
                    (Ki.error(s.error.message),
                      this.emit(ms.EncryptionError, s.error));
                    break;
                  case "initAck":
                    s.enabled &&
                      this.keyProvider.getKeys().forEach((e) => {
                        this.postKey(e);
                      });
                    break;
                  case "enable":
                    if (
                      (s.enabled &&
                        this.keyProvider.getKeys().forEach((e) => {
                          this.postKey(e);
                        }),
                      this.encryptionEnabled !== s.enabled &&
                        s.participantIdentity ===
                          (null === (t = this.room) || void 0 === t
                            ? void 0
                            : t.localParticipant.identity))
                    )
                      (this.emit(
                        ms.ParticipantEncryptionStatusChanged,
                        s.enabled,
                        this.room.localParticipant,
                      ),
                        (this.encryptionEnabled = s.enabled));
                    else if (s.participantIdentity) {
                      const e =
                        null === (i = this.room) || void 0 === i
                          ? void 0
                          : i.getParticipantByIdentity(s.participantIdentity);
                      if (!e)
                        throw TypeError(
                          "couldn't set encryption status, participant not found".concat(
                            s.participantIdentity,
                          ),
                        );
                      this.emit(
                        ms.ParticipantEncryptionStatusChanged,
                        s.enabled,
                        e,
                      );
                    }
                    break;
                  case "ratchetKey":
                    this.keyProvider.emit(
                      hs.KeyRatcheted,
                      s.ratchetResult,
                      s.participantIdentity,
                      s.keyIndex,
                    );
                }
              }),
              (this.onWorkerError = (e) => {
                (Ki.error("e2ee worker encountered an error:", {
                  error: e.error,
                }),
                  this.emit(ms.EncryptionError, e.error));
              }),
              (this.keyProvider = e.keyProvider),
              (this.worker = e.worker),
              (this.encryptionEnabled = !1));
          }
          setup(e) {
            if (!fs())
              throw new Ks(
                "tried to setup end-to-end encryption on an unsupported browser",
              );
            if ((Ki.info("setting up e2ee"), e !== this.room)) {
              ((this.room = e), this.setupEventListeners(e, this.keyProvider));
              const t = {
                kind: "init",
                data: {
                  keyProviderOptions: this.keyProvider.getOptions(),
                  loglevel: Ji.getLevel(),
                },
              };
              this.worker &&
                (Ki.info("initializing worker", { worker: this.worker }),
                (this.worker.onmessage = this.onWorkerMessage),
                (this.worker.onerror = this.onWorkerError),
                this.worker.postMessage(t));
            }
          }
          setParticipantCryptorEnabled(e, t) {
            (Ki.debug("set e2ee to ".concat(e, " for participant ").concat(t)),
              this.postEnable(e, t));
          }
          setSifTrailer(e) {
            e && 0 !== e.length
              ? this.postSifTrailer(e)
              : Ki.warn("ignoring server sent trailer as it's empty");
          }
          setupEngine(e) {
            e.on(Bs.RTPVideoMapUpdate, (e) => {
              this.postRTPMap(e);
            });
          }
          setupEventListeners(e, t) {
            (e.on(js.TrackPublished, (e, t) =>
              this.setParticipantCryptorEnabled(
                e.trackInfo.encryption !== at.NONE,
                t.identity,
              ),
            ),
              e
                .on(js.ConnectionStateChanged, (t) => {
                  t === Qa.Connected &&
                    e.remoteParticipants.forEach((e) => {
                      e.trackPublications.forEach((t) => {
                        this.setParticipantCryptorEnabled(
                          t.trackInfo.encryption !== at.NONE,
                          e.identity,
                        );
                      });
                    });
                })
                .on(js.TrackUnsubscribed, (e, t, i) => {
                  var n;
                  const s = {
                    kind: "removeTransform",
                    data: {
                      participantIdentity: i.identity,
                      trackId: e.mediaStreamID,
                    },
                  };
                  null === (n = this.worker) ||
                    void 0 === n ||
                    n.postMessage(s);
                })
                .on(js.TrackSubscribed, (e, t, i) => {
                  this.setupE2EEReceiver(e, i.identity, t.trackInfo);
                })
                .on(js.SignalConnected, () => {
                  if (!this.room)
                    throw new TypeError(
                      "expected room to be present on signal connect",
                    );
                  (t.getKeys().forEach((e) => {
                    this.postKey(e);
                  }),
                    this.setParticipantCryptorEnabled(
                      this.room.localParticipant.isE2EEEnabled,
                      this.room.localParticipant.identity,
                    ));
                }),
              e.localParticipant.on(Fs.LocalSenderCreated, (e, t) =>
                Zi(this, void 0, void 0, function* () {
                  this.setupE2EESender(t, e);
                }),
              ),
              t
                .on(hs.SetKey, (e) => this.postKey(e))
                .on(hs.RatchetRequest, (e, t) =>
                  this.postRatchetRequest(e, t),
                ));
          }
          postRatchetRequest(e, t) {
            if (!this.worker)
              throw Error("could not ratchet key, worker is missing");
            const i = {
              kind: "ratchetRequest",
              data: { participantIdentity: e, keyIndex: t },
            };
            this.worker.postMessage(i);
          }
          postKey(e) {
            let { key: t, participantIdentity: i, keyIndex: n } = e;
            var s;
            if (!this.worker)
              throw Error("could not set key, worker is missing");
            const r = {
              kind: "setKey",
              data: {
                participantIdentity: i,
                isPublisher:
                  i ===
                  (null === (s = this.room) || void 0 === s
                    ? void 0
                    : s.localParticipant.identity),
                key: t,
                keyIndex: n,
              },
            };
            this.worker.postMessage(r);
          }
          postEnable(e, t) {
            if (!this.worker)
              throw new ReferenceError(
                "failed to enable e2ee, worker is not ready",
              );
            {
              const i = {
                kind: "enable",
                data: { enabled: e, participantIdentity: t },
              };
              this.worker.postMessage(i);
            }
          }
          postRTPMap(e) {
            var t;
            if (!this.worker)
              throw TypeError("could not post rtp map, worker is missing");
            if (
              !(null === (t = this.room) || void 0 === t
                ? void 0
                : t.localParticipant.identity)
            )
              throw TypeError(
                "could not post rtp map, local participant identity is missing",
              );
            const i = {
              kind: "setRTPMap",
              data: {
                map: e,
                participantIdentity: this.room.localParticipant.identity,
              },
            };
            this.worker.postMessage(i);
          }
          postSifTrailer(e) {
            if (!this.worker)
              throw Error("could not post SIF trailer, worker is missing");
            const t = { kind: "setSifTrailer", data: { trailer: e } };
            this.worker.postMessage(t);
          }
          setupE2EEReceiver(e, t, i) {
            if (e.receiver) {
              if (!(null == i ? void 0 : i.mimeType) || "" === i.mimeType)
                throw new TypeError(
                  "MimeType missing from trackInfo, cannot set up E2EE cryptor",
                );
              this.handleReceiver(
                e.receiver,
                e.mediaStreamID,
                t,
                "video" === e.kind ? Ro(i.mimeType) : void 0,
              );
            }
          }
          setupE2EESender(e, t) {
            co(e) && t
              ? this.handleSender(t, e.mediaStreamID, void 0)
              : t || Ki.warn("early return because sender is not ready");
          }
          handleReceiver(e, t, i, n) {
            return Zi(this, void 0, void 0, function* () {
              if (this.worker) {
                if (vs()) {
                  const s = {
                    kind: "decode",
                    participantIdentity: i,
                    trackId: t,
                    codec: n,
                  };
                  e.transform = new RTCRtpScriptTransform(this.worker, s);
                } else {
                  if (ls in e && n) {
                    const e = {
                      kind: "updateCodec",
                      data: { trackId: t, codec: n, participantIdentity: i },
                    };
                    return void this.worker.postMessage(e);
                  }
                  let s = e.writableStream,
                    r = e.readableStream;
                  if (!s || !r) {
                    const t = e.createEncodedStreams();
                    ((e.writableStream = t.writable),
                      (s = t.writable),
                      (e.readableStream = t.readable),
                      (r = t.readable));
                  }
                  const o = {
                    kind: "decode",
                    data: {
                      readableStream: r,
                      writableStream: s,
                      trackId: t,
                      codec: n,
                      participantIdentity: i,
                      isReuse: ls in e,
                    },
                  };
                  this.worker.postMessage(o, [r, s]);
                }
                e[ls] = !0;
              }
            });
          }
          handleSender(e, t, i) {
            var n;
            if (!(ls in e) && this.worker) {
              if (
                !(null === (n = this.room) || void 0 === n
                  ? void 0
                  : n.localParticipant.identity) ||
                "" === this.room.localParticipant.identity
              )
                throw TypeError(
                  "local identity needs to be known in order to set up encrypted sender",
                );
              if (vs()) {
                Ki.info("initialize script transform");
                const n = {
                  kind: "encode",
                  participantIdentity: this.room.localParticipant.identity,
                  trackId: t,
                  codec: i,
                };
                e.transform = new RTCRtpScriptTransform(this.worker, n);
              } else {
                Ki.info("initialize encoded streams");
                const n = e.createEncodedStreams(),
                  s = {
                    kind: "encode",
                    data: {
                      readableStream: n.readable,
                      writableStream: n.writable,
                      codec: i,
                      trackId: t,
                      participantIdentity: this.room.localParticipant.identity,
                      isReuse: !1,
                    },
                  };
                this.worker.postMessage(s, [n.readable, n.writable]);
              }
              e[ls] = !0;
            }
          }
        }
        const _o = "default";
        class Ao {
          constructor() {
            this._previousDevices = [];
          }
          static getInstance() {
            return (
              void 0 === this.instance && (this.instance = new Ao()),
              this.instance
            );
          }
          get previousDevices() {
            return this._previousDevices;
          }
          getDevices(e) {
            return Zi(this, arguments, void 0, function (e) {
              var t = this;
              let i =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              return (function* () {
                var n;
                if (
                  (null === (n = Ao.userMediaPromiseMap) || void 0 === n
                    ? void 0
                    : n.size) > 0
                ) {
                  Ki.debug("awaiting getUserMedia promise");
                  try {
                    e
                      ? yield Ao.userMediaPromiseMap.get(e)
                      : yield Promise.all(Ao.userMediaPromiseMap.values());
                  } catch (e) {
                    Ki.warn("error waiting for media permissons");
                  }
                }
                let s = yield navigator.mediaDevices.enumerateDevices();
                if (
                  i &&
                  (!_r() || !t.hasDeviceInUse(e)) &&
                  (0 === s.filter((t) => t.kind === e).length ||
                    s.some((t) => {
                      const i = "" === t.label,
                        n = !e || t.kind === e;
                      return i && n;
                    }))
                ) {
                  const t = {
                      video: "audioinput" !== e && "audiooutput" !== e,
                      audio: "videoinput" !== e && {
                        deviceId: { ideal: "default" },
                      },
                    },
                    i = yield navigator.mediaDevices.getUserMedia(t);
                  ((s = yield navigator.mediaDevices.enumerateDevices()),
                    i.getTracks().forEach((e) => {
                      e.stop();
                    }));
                }
                return (
                  (t._previousDevices = s),
                  e && (s = s.filter((t) => t.kind === e)),
                  s
                );
              })();
            });
          }
          normalizeDeviceId(e, t, i) {
            return Zi(this, void 0, void 0, function* () {
              if (t !== _o) return t;
              const n = yield this.getDevices(e),
                s = n.find((e) => e.deviceId === _o);
              if (!s)
                return void Ki.warn(
                  "could not reliably determine default device",
                );
              const r = n.find(
                (e) =>
                  e.deviceId !== _o &&
                  e.groupId === (null != i ? i : s.groupId),
              );
              if (r) return null == r ? void 0 : r.deviceId;
              Ki.warn("could not reliably determine default device");
            });
          }
          hasDeviceInUse(e) {
            return e
              ? Ao.userMediaPromiseMap.has(e)
              : Ao.userMediaPromiseMap.size > 0;
          }
        }
        var No;
        ((Ao.mediaDeviceKinds = ["audioinput", "audiooutput", "videoinput"]),
          (Ao.userMediaPromiseMap = new Map()),
          (function (e) {
            ((e[(e.WAITING = 0)] = "WAITING"),
              (e[(e.RUNNING = 1)] = "RUNNING"),
              (e[(e.COMPLETED = 2)] = "COMPLETED"));
          })(No || (No = {})));
        class Lo {
          constructor() {
            ((this.pendingTasks = new Map()),
              (this.taskMutex = new a()),
              (this.nextTaskIndex = 0));
          }
          run(e) {
            return Zi(this, void 0, void 0, function* () {
              const t = {
                id: this.nextTaskIndex++,
                enqueuedAt: Date.now(),
                status: No.WAITING,
              };
              this.pendingTasks.set(t.id, t);
              const i = yield this.taskMutex.lock();
              try {
                return (
                  (t.executedAt = Date.now()),
                  (t.status = No.RUNNING),
                  yield e()
                );
              } finally {
                ((t.status = No.COMPLETED),
                  this.pendingTasks.delete(t.id),
                  i());
              }
            });
          }
          flush() {
            return Zi(this, void 0, void 0, function* () {
              return this.run(() => Zi(this, void 0, void 0, function* () {}));
            });
          }
          snapshot() {
            return Array.from(this.pendingTasks.values());
          }
        }
        function Uo(e, t) {
          return (
            (e.pathname = ""
              .concat(
                (function (e) {
                  return e.endsWith("/") ? e : "".concat(e, "/");
                })(e.pathname),
              )
              .concat(t)),
            e.toString()
          );
        }
        const jo = [
          "syncState",
          "trickle",
          "offer",
          "answer",
          "simulate",
          "leave",
        ];
        var Fo;
        !(function (e) {
          ((e[(e.CONNECTING = 0)] = "CONNECTING"),
            (e[(e.CONNECTED = 1)] = "CONNECTED"),
            (e[(e.RECONNECTING = 2)] = "RECONNECTING"),
            (e[(e.DISCONNECTING = 3)] = "DISCONNECTING"),
            (e[(e.DISCONNECTED = 4)] = "DISCONNECTED"));
        })(Fo || (Fo = {}));
        class Bo {
          get currentState() {
            return this.state;
          }
          get isDisconnected() {
            return (
              this.state === Fo.DISCONNECTING || this.state === Fo.DISCONNECTED
            );
          }
          get isEstablishingConnection() {
            return (
              this.state === Fo.CONNECTING || this.state === Fo.RECONNECTING
            );
          }
          getNextRequestId() {
            return ((this._requestId += 1), this._requestId);
          }
          constructor() {
            let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            var i;
            ((this.rtt = 0),
              (this.state = Fo.DISCONNECTED),
              (this.log = Ki),
              (this._requestId = 0),
              (this.resetCallbacks = () => {
                ((this.onAnswer = void 0),
                  (this.onLeave = void 0),
                  (this.onLocalTrackPublished = void 0),
                  (this.onLocalTrackUnpublished = void 0),
                  (this.onNegotiateRequested = void 0),
                  (this.onOffer = void 0),
                  (this.onRemoteMuteChanged = void 0),
                  (this.onSubscribedQualityUpdate = void 0),
                  (this.onTokenRefresh = void 0),
                  (this.onTrickle = void 0),
                  (this.onClose = void 0));
              }),
              (this.log = Gi(
                null !== (i = t.loggerName) && void 0 !== i ? i : Bi.Signal,
              )),
              (this.loggerContextCb = t.loggerContextCb),
              (this.useJSON = e),
              (this.requestQueue = new Lo()),
              (this.queuedRequests = []),
              (this.closingLock = new a()),
              (this.connectionLock = new a()),
              (this.state = Fo.DISCONNECTED));
          }
          get logContext() {
            var e, t;
            return null !==
              (t =
                null === (e = this.loggerContextCb) || void 0 === e
                  ? void 0
                  : e.call(this)) && void 0 !== t
              ? t
              : {};
          }
          join(e, t, i, n) {
            return Zi(this, void 0, void 0, function* () {
              return (
                (this.state = Fo.CONNECTING),
                (this.options = i),
                yield this.connect(e, t, i, n)
              );
            });
          }
          reconnect(e, t, i, n) {
            return Zi(this, void 0, void 0, function* () {
              if (this.options)
                return (
                  (this.state = Fo.RECONNECTING),
                  this.clearPingInterval(),
                  yield this.connect(
                    e,
                    t,
                    Object.assign(Object.assign({}, this.options), {
                      reconnect: !0,
                      sid: i,
                      reconnectReason: n,
                    }),
                  )
                );
              this.log.warn(
                "attempted to reconnect without signal options being set, ignoring",
                this.logContext,
              );
            });
          }
          connect(e, t, i, n) {
            this.connectOptions = i;
            const s = (function (e, t, i) {
                var n;
                const s = new URLSearchParams();
                return (
                  s.set("access_token", e),
                  i.reconnect &&
                    (s.set("reconnect", "1"), i.sid && s.set("sid", i.sid)),
                  s.set("auto_subscribe", i.autoSubscribe ? "1" : "0"),
                  s.set("sdk", jr() ? "reactnative" : "js"),
                  s.set("version", t.version),
                  s.set("protocol", t.protocol.toString()),
                  t.deviceModel && s.set("device_model", t.deviceModel),
                  t.os && s.set("os", t.os),
                  t.osVersion && s.set("os_version", t.osVersion),
                  t.browser && s.set("browser", t.browser),
                  t.browserVersion &&
                    s.set("browser_version", t.browserVersion),
                  i.adaptiveStream && s.set("adaptive_stream", "1"),
                  i.reconnectReason &&
                    s.set("reconnect_reason", i.reconnectReason.toString()),
                  (null === (n = navigator.connection) || void 0 === n
                    ? void 0
                    : n.type) && s.set("network", navigator.connection.type),
                  s
                );
              })(
                t,
                (function () {
                  var e;
                  const t = new Rt({ sdk: It.JS, protocol: rr, version: sr });
                  return (
                    jr() &&
                      (t.os = null !== (e = Vr()) && void 0 !== e ? e : ""),
                    t
                  );
                })(),
                i,
              ),
              r = (function (e, t) {
                const i = new URL(
                  (function (e) {
                    return e.startsWith("http")
                      ? e.replace(/^(http)/, "ws")
                      : e;
                  })(e),
                );
                return (
                  t.forEach((e, t) => {
                    i.searchParams.set(t, e);
                  }),
                  Uo(i, "rtc")
                );
              })(e, s),
              o = Uo(new URL(so(r)), "validate");
            return new Promise((e, t) =>
              Zi(this, void 0, void 0, function* () {
                const s = yield this.connectionLock.lock();
                try {
                  const s = () =>
                      Zi(this, void 0, void 0, function* () {
                        (this.close(),
                          clearTimeout(a),
                          t(
                            new qs(
                              "room connection has been cancelled (signal)",
                              Ns.Cancelled,
                            ),
                          ));
                      }),
                    a = setTimeout(() => {
                      (this.close(),
                        t(
                          new qs(
                            "room connection has timed out (signal)",
                            Ns.ServerUnreachable,
                          ),
                        ));
                    }, i.websocketTimeout);
                  ((null == n ? void 0 : n.aborted) && s(),
                    null == n || n.addEventListener("abort", s));
                  const c = new URL(r);
                  (c.searchParams.has("access_token") &&
                    c.searchParams.set("access_token", "<redacted>"),
                    this.log.debug(
                      "connecting to ".concat(c),
                      Object.assign(
                        {
                          reconnect: i.reconnect,
                          reconnectReason: i.reconnectReason,
                        },
                        this.logContext,
                      ),
                    ),
                    this.ws && (yield this.close(!1)),
                    (this.ws = new WebSocket(r)),
                    (this.ws.binaryType = "arraybuffer"),
                    (this.ws.onopen = () => {
                      clearTimeout(a);
                    }),
                    (this.ws.onerror = (e) =>
                      Zi(this, void 0, void 0, function* () {
                        if (this.state === Fo.CONNECTED) this.handleWSError(e);
                        else {
                          ((this.state = Fo.DISCONNECTED), clearTimeout(a));
                          try {
                            const i = yield fetch(o);
                            if (i.status.toFixed(0).startsWith("4")) {
                              const e = yield i.text();
                              t(new qs(e, Ns.NotAllowed, i.status));
                            } else
                              t(
                                new qs(
                                  "Encountered unknown websocket error during connection: ".concat(
                                    e.toString(),
                                  ),
                                  Ns.InternalError,
                                  i.status,
                                ),
                              );
                          } catch (e) {
                            t(
                              new qs(
                                e instanceof Error
                                  ? e.message
                                  : "server was not reachable",
                                Ns.ServerUnreachable,
                              ),
                            );
                          }
                        }
                      })),
                    (this.ws.onmessage = (r) =>
                      Zi(this, void 0, void 0, function* () {
                        var o, a, c;
                        let d;
                        if ("string" == typeof r.data) {
                          const e = JSON.parse(r.data);
                          d = Kt.fromJson(e, { ignoreUnknownFields: !0 });
                        } else {
                          if (!(r.data instanceof ArrayBuffer))
                            return void this.log.error(
                              "could not decode websocket message: ".concat(
                                typeof r.data,
                              ),
                              this.logContext,
                            );
                          d = Kt.fromBinary(new Uint8Array(r.data));
                        }
                        if (this.state !== Fo.CONNECTED) {
                          let r = !1;
                          if (
                            ("join" ===
                            (null === (o = d.message) || void 0 === o
                              ? void 0
                              : o.case)
                              ? ((this.state = Fo.CONNECTED),
                                null == n || n.removeEventListener("abort", s),
                                (this.pingTimeoutDuration =
                                  d.message.value.pingTimeout),
                                (this.pingIntervalDuration =
                                  d.message.value.pingInterval),
                                this.pingTimeoutDuration &&
                                  this.pingTimeoutDuration > 0 &&
                                  (this.log.debug(
                                    "ping config",
                                    Object.assign(
                                      Object.assign({}, this.logContext),
                                      {
                                        timeout: this.pingTimeoutDuration,
                                        interval: this.pingIntervalDuration,
                                      },
                                    ),
                                  ),
                                  this.startPingInterval()),
                                e(d.message.value))
                              : this.state === Fo.RECONNECTING &&
                                  "leave" !== d.message.case
                                ? ((this.state = Fo.CONNECTED),
                                  null == n ||
                                    n.removeEventListener("abort", s),
                                  this.startPingInterval(),
                                  "reconnect" ===
                                  (null === (a = d.message) || void 0 === a
                                    ? void 0
                                    : a.case)
                                    ? e(d.message.value)
                                    : (this.log.debug(
                                        "declaring signal reconnected without reconnect response received",
                                        this.logContext,
                                      ),
                                      e(void 0),
                                      (r = !0)))
                                : this.isEstablishingConnection &&
                                    "leave" === d.message.case
                                  ? t(
                                      new qs(
                                        "Received leave request while trying to (re)connect",
                                        Ns.LeaveRequest,
                                        void 0,
                                        d.message.value.reason,
                                      ),
                                    )
                                  : i.reconnect ||
                                    t(
                                      new qs(
                                        "did not receive join response, got ".concat(
                                          null === (c = d.message) ||
                                            void 0 === c
                                            ? void 0
                                            : c.case,
                                          " instead",
                                        ),
                                        Ns.InternalError,
                                      ),
                                    ),
                            !r)
                          )
                            return;
                        }
                        (this.signalLatency && (yield Cr(this.signalLatency)),
                          this.handleSignalResponse(d));
                      })),
                    (this.ws.onclose = (e) => {
                      (this.isEstablishingConnection &&
                        t(
                          new qs(
                            "Websocket got closed during a (re)connection attempt",
                            Ns.InternalError,
                          ),
                        ),
                        this.log.warn(
                          "websocket closed",
                          Object.assign(Object.assign({}, this.logContext), {
                            reason: e.reason,
                            code: e.code,
                            wasClean: e.wasClean,
                            state: this.state,
                          }),
                        ),
                        this.handleOnClose(e.reason));
                    }));
                } finally {
                  s();
                }
              }),
            );
          }
          close() {
            return Zi(this, arguments, void 0, function () {
              var e = this;
              let t =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              return (function* () {
                const i = yield e.closingLock.lock();
                try {
                  if (
                    (e.clearPingInterval(),
                    t && (e.state = Fo.DISCONNECTING),
                    e.ws)
                  ) {
                    ((e.ws.onmessage = null),
                      (e.ws.onopen = null),
                      (e.ws.onclose = null));
                    const t = new Promise((t) => {
                      e.ws
                        ? (e.ws.onclose = () => {
                            t();
                          })
                        : t();
                    });
                    (e.ws.readyState < e.ws.CLOSING &&
                      (e.ws.close(), yield Promise.race([t, Cr(250)])),
                      (e.ws = void 0));
                  }
                } finally {
                  (t && (e.state = Fo.DISCONNECTED), i());
                }
              })();
            });
          }
          sendOffer(e, t) {
            (this.log.debug(
              "sending offer",
              Object.assign(Object.assign({}, this.logContext), {
                offerSdp: e.sdp,
              }),
            ),
              this.sendRequest({ case: "offer", value: qo(e, t) }));
          }
          sendAnswer(e, t) {
            return (
              this.log.debug(
                "sending answer",
                Object.assign(Object.assign({}, this.logContext), {
                  answerSdp: e.sdp,
                }),
              ),
              this.sendRequest({ case: "answer", value: qo(e, t) })
            );
          }
          sendIceCandidate(e, t) {
            return (
              this.log.debug(
                "sending ice candidate",
                Object.assign(Object.assign({}, this.logContext), {
                  candidate: e,
                }),
              ),
              this.sendRequest({
                case: "trickle",
                value: new Ht({ candidateInit: JSON.stringify(e), target: t }),
              })
            );
          }
          sendMuteTrack(e, t) {
            return this.sendRequest({
              case: "mute",
              value: new zt({ sid: e, muted: t }),
            });
          }
          sendAddTrack(e) {
            return this.sendRequest({ case: "addTrack", value: e });
          }
          sendUpdateLocalMetadata(e, t) {
            return Zi(this, arguments, void 0, function (e, t) {
              var i = this;
              let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              return (function* () {
                const s = i.getNextRequestId();
                return (
                  yield i.sendRequest({
                    case: "updateMetadata",
                    value: new ai({
                      requestId: s,
                      metadata: e,
                      name: t,
                      attributes: n,
                    }),
                  }),
                  s
                );
              })();
            });
          }
          sendUpdateTrackSettings(e) {
            this.sendRequest({ case: "trackSetting", value: e });
          }
          sendUpdateSubscription(e) {
            return this.sendRequest({ case: "subscription", value: e });
          }
          sendSyncState(e) {
            return this.sendRequest({ case: "syncState", value: e });
          }
          sendUpdateVideoLayers(e, t) {
            return this.sendRequest({
              case: "updateLayers",
              value: new oi({ trackSid: e, layers: t }),
            });
          }
          sendUpdateSubscriptionPermissions(e, t) {
            return this.sendRequest({
              case: "subscriptionPermission",
              value: new ki({ allParticipants: e, trackPermissions: t }),
            });
          }
          sendSimulateScenario(e) {
            return this.sendRequest({ case: "simulate", value: e });
          }
          sendPing() {
            return Promise.all([
              this.sendRequest({ case: "ping", value: M.parse(Date.now()) }),
              this.sendRequest({
                case: "pingReq",
                value: new Pi({
                  timestamp: M.parse(Date.now()),
                  rtt: M.parse(this.rtt),
                }),
              }),
            ]);
          }
          sendUpdateLocalAudioTrack(e, t) {
            return this.sendRequest({
              case: "updateAudioTrack",
              value: new ii({ trackSid: e, features: t }),
            });
          }
          sendLeave() {
            return this.sendRequest({
              case: "leave",
              value: new si({
                reason: Ye.CLIENT_INITIATED,
                action: ri.DISCONNECT,
              }),
            });
          }
          sendRequest(e) {
            return Zi(this, arguments, void 0, function (e) {
              var t = this;
              let i =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              return (function* () {
                const n =
                  !i &&
                  !(function (e) {
                    const t = jo.indexOf(e.case) >= 0;
                    return (
                      Ki.trace("request allowed to bypass queue:", {
                        canPass: t,
                        req: e,
                      }),
                      t
                    );
                  })(e);
                if (n && t.state === Fo.RECONNECTING)
                  return void t.queuedRequests.push(() =>
                    Zi(t, void 0, void 0, function* () {
                      yield this.sendRequest(e, !0);
                    }),
                  );
                if (
                  (i || (yield t.requestQueue.flush()),
                  t.signalLatency && (yield Cr(t.signalLatency)),
                  !t.ws || t.ws.readyState !== t.ws.OPEN)
                )
                  return void t.log.error(
                    "cannot send signal request before connected, type: ".concat(
                      null == e ? void 0 : e.case,
                    ),
                    t.logContext,
                  );
                const s = new qt({ message: e });
                try {
                  t.useJSON
                    ? t.ws.send(s.toJsonString())
                    : t.ws.send(s.toBinary());
                } catch (e) {
                  t.log.error(
                    "error sending signal message",
                    Object.assign(Object.assign({}, t.logContext), {
                      error: e,
                    }),
                  );
                }
              })();
            });
          }
          handleSignalResponse(e) {
            var t, i;
            const n = e.message;
            if (null == n)
              return void this.log.debug(
                "received unsupported message",
                this.logContext,
              );
            let s = !1;
            if ("answer" === n.case) {
              const e = Vo(n.value);
              this.onAnswer && this.onAnswer(e, n.value.id);
            } else if ("offer" === n.case) {
              const e = Vo(n.value);
              this.onOffer && this.onOffer(e, n.value.id);
            } else if ("trickle" === n.case) {
              const e = JSON.parse(n.value.candidateInit);
              this.onTrickle && this.onTrickle(e, n.value.target);
            } else
              "update" === n.case
                ? this.onParticipantUpdate &&
                  this.onParticipantUpdate(
                    null !== (t = n.value.participants) && void 0 !== t
                      ? t
                      : [],
                  )
                : "trackPublished" === n.case
                  ? this.onLocalTrackPublished &&
                    this.onLocalTrackPublished(n.value)
                  : "speakersChanged" === n.case
                    ? this.onSpeakersChanged &&
                      this.onSpeakersChanged(
                        null !== (i = n.value.speakers) && void 0 !== i
                          ? i
                          : [],
                      )
                    : "leave" === n.case
                      ? this.onLeave && this.onLeave(n.value)
                      : "mute" === n.case
                        ? this.onRemoteMuteChanged &&
                          this.onRemoteMuteChanged(n.value.sid, n.value.muted)
                        : "roomUpdate" === n.case
                          ? this.onRoomUpdate &&
                            n.value.room &&
                            this.onRoomUpdate(n.value.room)
                          : "connectionQuality" === n.case
                            ? this.onConnectionQuality &&
                              this.onConnectionQuality(n.value)
                            : "streamStateUpdate" === n.case
                              ? this.onStreamStateUpdate &&
                                this.onStreamStateUpdate(n.value)
                              : "subscribedQualityUpdate" === n.case
                                ? this.onSubscribedQualityUpdate &&
                                  this.onSubscribedQualityUpdate(n.value)
                                : "subscriptionPermissionUpdate" === n.case
                                  ? this.onSubscriptionPermissionUpdate &&
                                    this.onSubscriptionPermissionUpdate(n.value)
                                  : "refreshToken" === n.case
                                    ? this.onTokenRefresh &&
                                      this.onTokenRefresh(n.value)
                                    : "trackUnpublished" === n.case
                                      ? this.onLocalTrackUnpublished &&
                                        this.onLocalTrackUnpublished(n.value)
                                      : "subscriptionResponse" === n.case
                                        ? this.onSubscriptionError &&
                                          this.onSubscriptionError(n.value)
                                        : "pong" === n.case ||
                                          ("pongResp" === n.case
                                            ? ((this.rtt =
                                                Date.now() -
                                                Number.parseInt(
                                                  n.value.lastPingTimestamp.toString(),
                                                )),
                                              this.resetPingTimeout(),
                                              (s = !0))
                                            : "requestResponse" === n.case
                                              ? this.onRequestResponse &&
                                                this.onRequestResponse(n.value)
                                              : "trackSubscribed" === n.case
                                                ? this.onLocalTrackSubscribed &&
                                                  this.onLocalTrackSubscribed(
                                                    n.value.trackSid,
                                                  )
                                                : "roomMoved" === n.case
                                                  ? (this.onTokenRefresh &&
                                                      this.onTokenRefresh(
                                                        n.value.token,
                                                      ),
                                                    this.onRoomMoved &&
                                                      this.onRoomMoved(n.value))
                                                  : this.log.debug(
                                                      "unsupported message",
                                                      Object.assign(
                                                        Object.assign(
                                                          {},
                                                          this.logContext,
                                                        ),
                                                        { msgCase: n.case },
                                                      ),
                                                    ));
            s || this.resetPingTimeout();
          }
          setReconnected() {
            for (; this.queuedRequests.length > 0; ) {
              const e = this.queuedRequests.shift();
              e && this.requestQueue.run(e);
            }
          }
          handleOnClose(e) {
            return Zi(this, void 0, void 0, function* () {
              if (this.state === Fo.DISCONNECTED) return;
              const t = this.onClose;
              (yield this.close(),
                this.log.debug(
                  "websocket connection closed: ".concat(e),
                  Object.assign(Object.assign({}, this.logContext), {
                    reason: e,
                  }),
                ),
                t && t(e));
            });
          }
          handleWSError(e) {
            this.log.error(
              "websocket error",
              Object.assign(Object.assign({}, this.logContext), { error: e }),
            );
          }
          resetPingTimeout() {
            (this.clearPingTimeout(),
              this.pingTimeoutDuration
                ? (this.pingTimeout = or.setTimeout(() => {
                    (this.log.warn(
                      "ping timeout triggered. last pong received at: ".concat(
                        new Date(
                          Date.now() - 1e3 * this.pingTimeoutDuration,
                        ).toUTCString(),
                      ),
                      this.logContext,
                    ),
                      this.handleOnClose("ping timeout"));
                  }, 1e3 * this.pingTimeoutDuration))
                : this.log.warn(
                    "ping timeout duration not set",
                    this.logContext,
                  ));
          }
          clearPingTimeout() {
            this.pingTimeout && or.clearTimeout(this.pingTimeout);
          }
          startPingInterval() {
            (this.clearPingInterval(),
              this.resetPingTimeout(),
              this.pingIntervalDuration
                ? (this.log.debug("start ping interval", this.logContext),
                  (this.pingInterval = or.setInterval(() => {
                    this.sendPing();
                  }, 1e3 * this.pingIntervalDuration)))
                : this.log.warn(
                    "ping interval duration not set",
                    this.logContext,
                  ));
          }
          clearPingInterval() {
            (this.log.debug("clearing ping interval", this.logContext),
              this.clearPingTimeout(),
              this.pingInterval && or.clearInterval(this.pingInterval));
          }
        }
        function Vo(e) {
          const t = { type: "offer", sdp: e.sdp };
          switch (e.type) {
            case "answer":
            case "offer":
            case "pranswer":
            case "rollback":
              t.type = e.type;
          }
          return t;
        }
        function qo(e, t) {
          return new Zt({ sdp: e.sdp, type: e.type, id: t });
        }
        class Ko {
          constructor() {
            ((this.buffer = []), (this._totalSize = 0));
          }
          push(e) {
            (this.buffer.push(e), (this._totalSize += e.data.byteLength));
          }
          pop() {
            const e = this.buffer.shift();
            return (e && (this._totalSize -= e.data.byteLength), e);
          }
          getAll() {
            return this.buffer.slice();
          }
          popToSequence(e) {
            for (; this.buffer.length > 0 && this.buffer[0].sequence <= e; )
              this.pop();
          }
          alignBufferedAmount(e) {
            for (; this.buffer.length > 0; ) {
              const t = this.buffer[0];
              if (this._totalSize - t.data.byteLength <= e) break;
              this.pop();
            }
          }
          get length() {
            return this.buffer.length;
          }
        }
        class Wo {
          constructor(e) {
            ((this._map = new Map()), (this._lastCleanup = 0), (this.ttl = e));
          }
          set(e, t) {
            const i = Date.now();
            i - this._lastCleanup > this.ttl / 2 && this.cleanup();
            const n = i + this.ttl;
            return (this._map.set(e, { value: t, expiresAt: n }), this);
          }
          get(e) {
            const t = this._map.get(e);
            if (t) {
              if (!(t.expiresAt < Date.now())) return t.value;
              this._map.delete(e);
            }
          }
          has(e) {
            const t = this._map.get(e);
            return !(
              !t ||
              (t.expiresAt < Date.now() && (this._map.delete(e), 1))
            );
          }
          delete(e) {
            return this._map.delete(e);
          }
          clear() {
            this._map.clear();
          }
          cleanup() {
            const e = Date.now();
            for (const [t, i] of this._map.entries())
              i.expiresAt < e && this._map.delete(t);
            this._lastCleanup = e;
          }
          get size() {
            return (this.cleanup(), this._map.size);
          }
          forEach(e) {
            this.cleanup();
            for (const [t, i] of this._map.entries())
              i.expiresAt >= Date.now() && e(i.value, t, this.asValueMap());
          }
          map(e) {
            this.cleanup();
            const t = [],
              i = this.asValueMap();
            for (const [n, s] of i.entries()) t.push(e(s, n, i));
            return t;
          }
          asValueMap() {
            const e = new Map();
            for (const [t, i] of this._map.entries())
              i.expiresAt >= Date.now() && e.set(t, i.value);
            return e;
          }
        }
        var Go,
          Ho,
          zo,
          Jo,
          Qo,
          Yo = {},
          Xo = {},
          Zo = { exports: {} };
        function $o() {
          if (Go) return Zo.exports;
          Go = 1;
          var e = (Zo.exports = {
            v: [{ name: "version", reg: /^(\d*)$/ }],
            o: [
              {
                name: "origin",
                reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
                names: [
                  "username",
                  "sessionId",
                  "sessionVersion",
                  "netType",
                  "ipVer",
                  "address",
                ],
                format: "%s %s %d %s IP%d %s",
              },
            ],
            s: [{ name: "name" }],
            i: [{ name: "description" }],
            u: [{ name: "uri" }],
            e: [{ name: "email" }],
            p: [{ name: "phone" }],
            z: [{ name: "timezones" }],
            r: [{ name: "repeats" }],
            t: [
              {
                name: "timing",
                reg: /^(\d*) (\d*)/,
                names: ["start", "stop"],
                format: "%d %d",
              },
            ],
            c: [
              {
                name: "connection",
                reg: /^IN IP(\d) (\S*)/,
                names: ["version", "ip"],
                format: "IN IP%d %s",
              },
            ],
            b: [
              {
                push: "bandwidth",
                reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
                names: ["type", "limit"],
                format: "%s:%s",
              },
            ],
            m: [
              {
                reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/,
                names: ["type", "port", "protocol", "payloads"],
                format: "%s %d %s %s",
              },
            ],
            a: [
              {
                push: "rtp",
                reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
                names: ["payload", "codec", "rate", "encoding"],
                format: function (e) {
                  return e.encoding
                    ? "rtpmap:%d %s/%s/%s"
                    : e.rate
                      ? "rtpmap:%d %s/%s"
                      : "rtpmap:%d %s";
                },
              },
              {
                push: "fmtp",
                reg: /^fmtp:(\d*) ([\S| ]*)/,
                names: ["payload", "config"],
                format: "fmtp:%d %s",
              },
              { name: "control", reg: /^control:(.*)/, format: "control:%s" },
              {
                name: "rtcp",
                reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
                names: ["port", "netType", "ipVer", "address"],
                format: function (e) {
                  return null != e.address ? "rtcp:%d %s IP%d %s" : "rtcp:%d";
                },
              },
              {
                push: "rtcpFbTrrInt",
                reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
                names: ["payload", "value"],
                format: "rtcp-fb:%s trr-int %d",
              },
              {
                push: "rtcpFb",
                reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
                names: ["payload", "type", "subtype"],
                format: function (e) {
                  return null != e.subtype
                    ? "rtcp-fb:%s %s %s"
                    : "rtcp-fb:%s %s";
                },
              },
              {
                push: "ext",
                reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
                names: ["value", "direction", "encrypt-uri", "uri", "config"],
                format: function (e) {
                  return (
                    "extmap:%d" +
                    (e.direction ? "/%s" : "%v") +
                    (e["encrypt-uri"] ? " %s" : "%v") +
                    " %s" +
                    (e.config ? " %s" : "")
                  );
                },
              },
              { name: "extmapAllowMixed", reg: /^(extmap-allow-mixed)/ },
              {
                push: "crypto",
                reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
                names: ["id", "suite", "config", "sessionConfig"],
                format: function (e) {
                  return null != e.sessionConfig
                    ? "crypto:%d %s %s %s"
                    : "crypto:%d %s %s";
                },
              },
              { name: "setup", reg: /^setup:(\w*)/, format: "setup:%s" },
              {
                name: "connectionType",
                reg: /^connection:(new|existing)/,
                format: "connection:%s",
              },
              { name: "mid", reg: /^mid:([^\s]*)/, format: "mid:%s" },
              { name: "msid", reg: /^msid:(.*)/, format: "msid:%s" },
              {
                name: "ptime",
                reg: /^ptime:(\d*(?:\.\d*)*)/,
                format: "ptime:%d",
              },
              {
                name: "maxptime",
                reg: /^maxptime:(\d*(?:\.\d*)*)/,
                format: "maxptime:%d",
              },
              {
                name: "direction",
                reg: /^(sendrecv|recvonly|sendonly|inactive)/,
              },
              { name: "icelite", reg: /^(ice-lite)/ },
              {
                name: "iceUfrag",
                reg: /^ice-ufrag:(\S*)/,
                format: "ice-ufrag:%s",
              },
              { name: "icePwd", reg: /^ice-pwd:(\S*)/, format: "ice-pwd:%s" },
              {
                name: "fingerprint",
                reg: /^fingerprint:(\S*) (\S*)/,
                names: ["type", "hash"],
                format: "fingerprint:%s %s",
              },
              {
                push: "candidates",
                reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
                names: [
                  "foundation",
                  "component",
                  "transport",
                  "priority",
                  "ip",
                  "port",
                  "type",
                  "raddr",
                  "rport",
                  "tcptype",
                  "generation",
                  "network-id",
                  "network-cost",
                ],
                format: function (e) {
                  var t = "candidate:%s %d %s %d %s %d typ %s";
                  return (
                    (t += null != e.raddr ? " raddr %s rport %d" : "%v%v"),
                    (t += null != e.tcptype ? " tcptype %s" : "%v"),
                    null != e.generation && (t += " generation %d"),
                    (t += null != e["network-id"] ? " network-id %d" : "%v") +
                      (null != e["network-cost"] ? " network-cost %d" : "%v")
                  );
                },
              },
              { name: "endOfCandidates", reg: /^(end-of-candidates)/ },
              {
                name: "remoteCandidates",
                reg: /^remote-candidates:(.*)/,
                format: "remote-candidates:%s",
              },
              {
                name: "iceOptions",
                reg: /^ice-options:(\S*)/,
                format: "ice-options:%s",
              },
              {
                push: "ssrcs",
                reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
                names: ["id", "attribute", "value"],
                format: function (e) {
                  var t = "ssrc:%d";
                  return (
                    null != e.attribute &&
                      ((t += " %s"), null != e.value && (t += ":%s")),
                    t
                  );
                },
              },
              {
                push: "ssrcGroups",
                reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
                names: ["semantics", "ssrcs"],
                format: "ssrc-group:%s %s",
              },
              {
                name: "msidSemantic",
                reg: /^msid-semantic:\s?(\w*) (\S*)/,
                names: ["semantic", "token"],
                format: "msid-semantic: %s %s",
              },
              {
                push: "groups",
                reg: /^group:(\w*) (.*)/,
                names: ["type", "mids"],
                format: "group:%s %s",
              },
              { name: "rtcpMux", reg: /^(rtcp-mux)/ },
              { name: "rtcpRsize", reg: /^(rtcp-rsize)/ },
              {
                name: "sctpmap",
                reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
                names: ["sctpmapNumber", "app", "maxMessageSize"],
                format: function (e) {
                  return null != e.maxMessageSize
                    ? "sctpmap:%s %s %s"
                    : "sctpmap:%s %s";
                },
              },
              {
                name: "xGoogleFlag",
                reg: /^x-google-flag:([^\s]*)/,
                format: "x-google-flag:%s",
              },
              {
                push: "rids",
                reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
                names: ["id", "direction", "params"],
                format: function (e) {
                  return e.params ? "rid:%s %s %s" : "rid:%s %s";
                },
              },
              {
                push: "imageattrs",
                reg: new RegExp(
                  "^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?",
                ),
                names: ["pt", "dir1", "attrs1", "dir2", "attrs2"],
                format: function (e) {
                  return "imageattr:%s %s %s" + (e.dir2 ? " %s %s" : "");
                },
              },
              {
                name: "simulcast",
                reg: new RegExp(
                  "^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$",
                ),
                names: ["dir1", "list1", "dir2", "list2"],
                format: function (e) {
                  return "simulcast:%s %s" + (e.dir2 ? " %s %s" : "");
                },
              },
              {
                name: "simulcast_03",
                reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
                names: ["value"],
                format: "simulcast: %s",
              },
              {
                name: "framerate",
                reg: /^framerate:(\d+(?:$|\.\d+))/,
                format: "framerate:%s",
              },
              {
                name: "sourceFilter",
                reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
                names: [
                  "filterMode",
                  "netType",
                  "addressTypes",
                  "destAddress",
                  "srcList",
                ],
                format: "source-filter: %s %s %s %s %s",
              },
              { name: "bundleOnly", reg: /^(bundle-only)/ },
              { name: "label", reg: /^label:(.+)/, format: "label:%s" },
              {
                name: "sctpPort",
                reg: /^sctp-port:(\d+)$/,
                format: "sctp-port:%s",
              },
              {
                name: "maxMessageSize",
                reg: /^max-message-size:(\d+)$/,
                format: "max-message-size:%s",
              },
              {
                push: "tsRefClocks",
                reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
                names: ["clksrc", "clksrcExt"],
                format: function (e) {
                  return "ts-refclk:%s" + (null != e.clksrcExt ? "=%s" : "");
                },
              },
              {
                name: "mediaClk",
                reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
                names: [
                  "id",
                  "mediaClockName",
                  "mediaClockValue",
                  "rateNumerator",
                  "rateDenominator",
                ],
                format: function (e) {
                  var t = "mediaclk:";
                  return (
                    (t += null != e.id ? "id=%s %s" : "%v%s"),
                    (t += null != e.mediaClockValue ? "=%s" : ""),
                    (t += null != e.rateNumerator ? " rate=%s" : "") +
                      (null != e.rateDenominator ? "/%s" : "")
                  );
                },
              },
              { name: "keywords", reg: /^keywds:(.+)$/, format: "keywds:%s" },
              { name: "content", reg: /^content:(.+)/, format: "content:%s" },
              {
                name: "bfcpFloorCtrl",
                reg: /^floorctrl:(c-only|s-only|c-s)/,
                format: "floorctrl:%s",
              },
              { name: "bfcpConfId", reg: /^confid:(\d+)/, format: "confid:%s" },
              { name: "bfcpUserId", reg: /^userid:(\d+)/, format: "userid:%s" },
              {
                name: "bfcpFloorId",
                reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
                names: ["id", "mStream"],
                format: "floorid:%s mstrm:%s",
              },
              { push: "invalid", names: ["value"] },
            ],
          });
          return (
            Object.keys(e).forEach(function (t) {
              e[t].forEach(function (e) {
                (e.reg || (e.reg = /(.*)/), e.format || (e.format = "%s"));
              });
            }),
            Zo.exports
          );
        }
        function ea() {
          return (
            Ho ||
              ((Ho = 1),
              (function (e) {
                var t = function (e) {
                    return String(Number(e)) === e ? Number(e) : e;
                  },
                  i = function (e, i, n) {
                    var s = e.name && e.names;
                    e.push && !i[e.push]
                      ? (i[e.push] = [])
                      : s && !i[e.name] && (i[e.name] = {});
                    var r = e.push ? {} : s ? i[e.name] : i;
                    (!(function (e, i, n, s) {
                      if (s && !n) i[s] = t(e[1]);
                      else
                        for (var r = 0; r < n.length; r += 1)
                          null != e[r + 1] && (i[n[r]] = t(e[r + 1]));
                    })(n.match(e.reg), r, e.names, e.name),
                      e.push && i[e.push].push(r));
                  },
                  n = $o(),
                  s = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
                e.parse = function (e) {
                  var t = {},
                    r = [],
                    o = t;
                  return (
                    e
                      .split(/(\r\n|\r|\n)/)
                      .filter(s)
                      .forEach(function (e) {
                        var t = e[0],
                          s = e.slice(2);
                        "m" === t &&
                          (r.push({ rtp: [], fmtp: [] }),
                          (o = r[r.length - 1]));
                        for (var a = 0; a < (n[t] || []).length; a += 1) {
                          var c = n[t][a];
                          if (c.reg.test(s)) return i(c, o, s);
                        }
                      }),
                    (t.media = r),
                    t
                  );
                };
                var r = function (e, i) {
                  var n = i.split(/=(.+)/, 2);
                  return (
                    2 === n.length
                      ? (e[n[0]] = t(n[1]))
                      : 1 === n.length && i.length > 1 && (e[n[0]] = void 0),
                    e
                  );
                };
                ((e.parseParams = function (e) {
                  return e.split(/;\s?/).reduce(r, {});
                }),
                  (e.parseFmtpConfig = e.parseParams),
                  (e.parsePayloads = function (e) {
                    return e.toString().split(" ").map(Number);
                  }),
                  (e.parseRemoteCandidates = function (e) {
                    for (
                      var i = [], n = e.split(" ").map(t), s = 0;
                      s < n.length;
                      s += 3
                    )
                      i.push({ component: n[s], ip: n[s + 1], port: n[s + 2] });
                    return i;
                  }),
                  (e.parseImageAttributes = function (e) {
                    return e.split(" ").map(function (e) {
                      return e
                        .substring(1, e.length - 1)
                        .split(",")
                        .reduce(r, {});
                    });
                  }),
                  (e.parseSimulcastStreamList = function (e) {
                    return e.split(";").map(function (e) {
                      return e.split(",").map(function (e) {
                        var i,
                          n = !1;
                        return (
                          "~" !== e[0]
                            ? (i = t(e))
                            : ((i = t(e.substring(1, e.length))), (n = !0)),
                          { scid: i, paused: n }
                        );
                      });
                    });
                  }));
              })(Xo)),
            Xo
          );
        }
        function ta() {
          if (Jo) return zo;
          Jo = 1;
          var e = $o(),
            t = /%[sdv%]/g,
            i = function (e) {
              var i = 1,
                n = arguments,
                s = n.length;
              return e.replace(t, function (e) {
                if (i >= s) return e;
                var t = n[i];
                switch (((i += 1), e)) {
                  case "%%":
                    return "%";
                  case "%s":
                    return String(t);
                  case "%d":
                    return Number(t);
                  case "%v":
                    return "";
                }
              });
            },
            n = function (e, t, n) {
              var s = [
                e +
                  "=" +
                  (t.format instanceof Function
                    ? t.format(t.push ? n : n[t.name])
                    : t.format),
              ];
              if (t.names)
                for (var r = 0; r < t.names.length; r += 1) {
                  var o = t.names[r];
                  t.name ? s.push(n[t.name][o]) : s.push(n[t.names[r]]);
                }
              else s.push(n[t.name]);
              return i.apply(null, s);
            },
            s = [
              "v",
              "o",
              "s",
              "i",
              "u",
              "e",
              "p",
              "c",
              "b",
              "t",
              "r",
              "z",
              "a",
            ],
            r = ["i", "c", "b", "a"];
          return (
            (zo = function (t, i) {
              ((i = i || {}),
                null == t.version && (t.version = 0),
                null == t.name && (t.name = " "),
                t.media.forEach(function (e) {
                  null == e.payloads && (e.payloads = "");
                }));
              var o = i.outerOrder || s,
                a = i.innerOrder || r,
                c = [];
              return (
                o.forEach(function (i) {
                  e[i].forEach(function (e) {
                    e.name in t && null != t[e.name]
                      ? c.push(n(i, e, t))
                      : e.push in t &&
                        null != t[e.push] &&
                        t[e.push].forEach(function (t) {
                          c.push(n(i, e, t));
                        });
                  });
                }),
                t.media.forEach(function (t) {
                  (c.push(n("m", e.m[0], t)),
                    a.forEach(function (i) {
                      e[i].forEach(function (e) {
                        e.name in t && null != t[e.name]
                          ? c.push(n(i, e, t))
                          : e.push in t &&
                            null != t[e.push] &&
                            t[e.push].forEach(function (t) {
                              c.push(n(i, e, t));
                            });
                      });
                    }));
                }),
                c.join("\r\n") + "\r\n"
              );
            }),
            zo
          );
        }
        var ia = (function () {
          if (Qo) return Yo;
          Qo = 1;
          var e = ea(),
            t = ta(),
            i = $o();
          return (
            (Yo.grammar = i),
            (Yo.write = t),
            (Yo.parse = e.parse),
            (Yo.parseParams = e.parseParams),
            (Yo.parseFmtpConfig = e.parseFmtpConfig),
            (Yo.parsePayloads = e.parsePayloads),
            (Yo.parseRemoteCandidates = e.parseRemoteCandidates),
            (Yo.parseImageAttributes = e.parseImageAttributes),
            (Yo.parseSimulcastStreamList = e.parseSimulcastStreamList),
            Yo
          );
        })();
        function na(e, t, i) {
          var n, s, r;
          (void 0 === t && (t = 50), void 0 === i && (i = {}));
          var o = null != (n = i.isImmediate) && n,
            a = null != (s = i.callback) && s,
            c = i.maxWait,
            d = Date.now(),
            l = [];
          function u() {
            if (void 0 !== c) {
              var e = Date.now() - d;
              if (e + t >= c) return c - e;
            }
            return t;
          }
          var h = function () {
            var t = [].slice.call(arguments),
              i = this;
            return new Promise(function (n, s) {
              var c = o && void 0 === r;
              if (
                (void 0 !== r && clearTimeout(r),
                (r = setTimeout(function () {
                  if (((r = void 0), (d = Date.now()), !o)) {
                    var n = e.apply(i, t);
                    (a && a(n),
                      l.forEach(function (e) {
                        return (0, e.resolve)(n);
                      }),
                      (l = []));
                  }
                }, u())),
                c)
              ) {
                var h = e.apply(i, t);
                return (a && a(h), n(h));
              }
              l.push({ resolve: n, reject: s });
            });
          };
          return (
            (h.cancel = function (e) {
              (void 0 !== r && clearTimeout(r),
                l.forEach(function (t) {
                  return (0, t.reject)(e);
                }),
                (l = []));
            }),
            h
          );
        }
        const sa = "negotiationStarted",
          ra = "negotiationComplete",
          oa = "rtpVideoPayloadTypes";
        class aa extends nn.EventEmitter {
          get pc() {
            return (this._pc || (this._pc = this.createPC()), this._pc);
          }
          constructor(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            var i;
            (super(),
              (this.log = Ki),
              (this.ddExtID = 0),
              (this.latestOfferId = 0),
              (this.pendingCandidates = []),
              (this.restartingIce = !1),
              (this.renegotiate = !1),
              (this.trackBitrates = []),
              (this.remoteStereoMids = []),
              (this.remoteNackMids = []),
              (this.negotiate = na(
                (e) =>
                  Zi(this, void 0, void 0, function* () {
                    this.emit(sa);
                    try {
                      yield this.createAndSendOffer();
                    } catch (t) {
                      if (!e) throw t;
                      e(t);
                    }
                  }),
                20,
              )),
              (this.close = () => {
                this._pc &&
                  (this._pc.close(),
                  (this._pc.onconnectionstatechange = null),
                  (this._pc.oniceconnectionstatechange = null),
                  (this._pc.onicegatheringstatechange = null),
                  (this._pc.ondatachannel = null),
                  (this._pc.onnegotiationneeded = null),
                  (this._pc.onsignalingstatechange = null),
                  (this._pc.onicecandidate = null),
                  (this._pc.ondatachannel = null),
                  (this._pc.ontrack = null),
                  (this._pc.onconnectionstatechange = null),
                  (this._pc.oniceconnectionstatechange = null),
                  (this._pc = null));
              }),
              (this.log = Gi(
                null !== (i = t.loggerName) && void 0 !== i
                  ? i
                  : Bi.PCTransport,
              )),
              (this.loggerOptions = t),
              (this.config = e),
              (this._pc = this.createPC()),
              (this.offerLock = new a()));
          }
          createPC() {
            const e = new RTCPeerConnection(this.config);
            return (
              (e.onicecandidate = (e) => {
                var t;
                e.candidate &&
                  (null === (t = this.onIceCandidate) ||
                    void 0 === t ||
                    t.call(this, e.candidate));
              }),
              (e.onicecandidateerror = (e) => {
                var t;
                null === (t = this.onIceCandidateError) ||
                  void 0 === t ||
                  t.call(this, e);
              }),
              (e.oniceconnectionstatechange = () => {
                var t;
                null === (t = this.onIceConnectionStateChange) ||
                  void 0 === t ||
                  t.call(this, e.iceConnectionState);
              }),
              (e.onsignalingstatechange = () => {
                var t;
                null === (t = this.onSignalingStatechange) ||
                  void 0 === t ||
                  t.call(this, e.signalingState);
              }),
              (e.onconnectionstatechange = () => {
                var t;
                null === (t = this.onConnectionStateChange) ||
                  void 0 === t ||
                  t.call(this, e.connectionState);
              }),
              (e.ondatachannel = (e) => {
                var t;
                null === (t = this.onDataChannel) ||
                  void 0 === t ||
                  t.call(this, e);
              }),
              (e.ontrack = (e) => {
                var t;
                null === (t = this.onTrack) || void 0 === t || t.call(this, e);
              }),
              e
            );
          }
          get logContext() {
            var e, t;
            return Object.assign(
              {},
              null === (t = (e = this.loggerOptions).loggerContextCb) ||
                void 0 === t
                ? void 0
                : t.call(e),
            );
          }
          get isICEConnected() {
            return (
              null !== this._pc &&
              ("connected" === this.pc.iceConnectionState ||
                "completed" === this.pc.iceConnectionState)
            );
          }
          addIceCandidate(e) {
            return Zi(this, void 0, void 0, function* () {
              if (this.pc.remoteDescription && !this.restartingIce)
                return this.pc.addIceCandidate(e);
              this.pendingCandidates.push(e);
            });
          }
          setRemoteDescription(e, t) {
            return Zi(this, void 0, void 0, function* () {
              var i;
              if (
                "answer" === e.type &&
                this.latestOfferId > 0 &&
                t > 0 &&
                t !== this.latestOfferId
              )
                return (
                  this.log.warn(
                    "ignoring answer for old offer",
                    Object.assign(Object.assign({}, this.logContext), {
                      offerId: t,
                      latestOfferId: this.latestOfferId,
                    }),
                  ),
                  !1
                );
              let n;
              if ("offer" === e.type) {
                let { stereoMids: t, nackMids: i } = (function (e) {
                  var t;
                  const i = [],
                    n = [],
                    s = ia.parse(null !== (t = e.sdp) && void 0 !== t ? t : "");
                  let r = 0;
                  return (
                    s.media.forEach((e) => {
                      var t;
                      "audio" === e.type &&
                        (e.rtp.some(
                          (e) => "opus" === e.codec && ((r = e.payload), !0),
                        ),
                        (null === (t = e.rtcpFb) || void 0 === t
                          ? void 0
                          : t.some(
                              (e) => e.payload === r && "nack" === e.type,
                            )) && n.push(e.mid),
                        e.fmtp.some(
                          (t) =>
                            t.payload === r &&
                            (t.config.includes("sprop-stereo=1") &&
                              i.push(e.mid),
                            !0),
                        ));
                    }),
                    { stereoMids: i, nackMids: n }
                  );
                })(e);
                ((this.remoteStereoMids = t), (this.remoteNackMids = i));
              } else if ("answer" === e.type) {
                const t = ia.parse(
                  null !== (i = e.sdp) && void 0 !== i ? i : "",
                );
                (t.media.forEach((e) => {
                  "audio" === e.type &&
                    this.trackBitrates.some((t) => {
                      if (!t.transceiver || e.mid != t.transceiver.mid)
                        return !1;
                      let i = 0;
                      if (
                        (e.rtp.some(
                          (e) =>
                            e.codec.toUpperCase() === t.codec.toUpperCase() &&
                            ((i = e.payload), !0),
                        ),
                        0 === i)
                      )
                        return !0;
                      let n = !1;
                      for (const s of e.fmtp)
                        if (s.payload === i) {
                          ((s.config = s.config
                            .split(";")
                            .filter((e) => !e.includes("maxaveragebitrate"))
                            .join(";")),
                            t.maxbr > 0 &&
                              (s.config += ";maxaveragebitrate=".concat(
                                1e3 * t.maxbr,
                              )),
                            (n = !0));
                          break;
                        }
                      return (
                        n ||
                          (t.maxbr > 0 &&
                            e.fmtp.push({
                              payload: i,
                              config: "maxaveragebitrate=".concat(
                                1e3 * t.maxbr,
                              ),
                            })),
                        !0
                      );
                    });
                }),
                  (n = ia.write(t)));
              }
              return (
                yield this.setMungedSDP(e, n, !0),
                this.pendingCandidates.forEach((e) => {
                  this.pc.addIceCandidate(e);
                }),
                (this.pendingCandidates = []),
                (this.restartingIce = !1),
                this.renegotiate
                  ? ((this.renegotiate = !1), yield this.createAndSendOffer())
                  : "answer" === e.type &&
                    (this.emit(ra), e.sdp) &&
                    ia.parse(e.sdp).media.forEach((e) => {
                      "video" === e.type && this.emit(oa, e.rtp);
                    }),
                !0
              );
            });
          }
          createAndSendOffer(e) {
            return Zi(this, void 0, void 0, function* () {
              var t;
              const i = yield this.offerLock.lock();
              try {
                if (void 0 === this.onOffer) return;
                if (
                  ((null == e ? void 0 : e.iceRestart) &&
                    (this.log.debug("restarting ICE", this.logContext),
                    (this.restartingIce = !0)),
                  this._pc && "have-local-offer" === this._pc.signalingState)
                ) {
                  const t = this._pc.remoteDescription;
                  if (!(null == e ? void 0 : e.iceRestart) || !t)
                    return void (this.renegotiate = !0);
                  yield this._pc.setRemoteDescription(t);
                } else if (!this._pc || "closed" === this._pc.signalingState)
                  return void this.log.warn(
                    "could not createOffer with closed peer connection",
                    this.logContext,
                  );
                this.log.debug("starting to negotiate", this.logContext);
                const i = this.latestOfferId + 1;
                this.latestOfferId = i;
                const n = yield this.pc.createOffer(e);
                this.log.debug(
                  "original offer",
                  Object.assign({ sdp: n.sdp }, this.logContext),
                );
                const s = ia.parse(
                  null !== (t = n.sdp) && void 0 !== t ? t : "",
                );
                if (
                  (s.media.forEach((e) => {
                    (da(e),
                      "audio" === e.type
                        ? ca(e, [], [])
                        : "video" === e.type &&
                          this.trackBitrates.some((t) => {
                            if (!e.msid || !t.cid || !e.msid.includes(t.cid))
                              return !1;
                            let i = 0;
                            if (
                              (e.rtp.some(
                                (e) =>
                                  e.codec.toUpperCase() ===
                                    t.codec.toUpperCase() &&
                                  ((i = e.payload), !0),
                              ),
                              0 === i)
                            )
                              return !0;
                            if (
                              (Or(t.codec) &&
                                !_r() &&
                                this.ensureVideoDDExtensionForSVC(e, s),
                              "av1" !== t.codec)
                            )
                              return !0;
                            const n = Math.round(0.7 * t.maxbr);
                            for (const t of e.fmtp)
                              if (t.payload === i) {
                                t.config.includes("x-google-start-bitrate") ||
                                  (t.config +=
                                    ";x-google-start-bitrate=".concat(n));
                                break;
                              }
                            return !0;
                          }));
                  }),
                  this.latestOfferId > i)
                )
                  return void this.log.warn(
                    "latestOfferId mismatch",
                    Object.assign(Object.assign({}, this.logContext), {
                      latestOfferId: this.latestOfferId,
                      offerId: i,
                    }),
                  );
                (yield this.setMungedSDP(n, ia.write(s)),
                  this.onOffer(n, this.latestOfferId));
              } finally {
                i();
              }
            });
          }
          createAndSetAnswer() {
            return Zi(this, void 0, void 0, function* () {
              var e;
              const t = yield this.pc.createAnswer(),
                i = ia.parse(null !== (e = t.sdp) && void 0 !== e ? e : "");
              return (
                i.media.forEach((e) => {
                  (da(e),
                    "audio" === e.type &&
                      ca(e, this.remoteStereoMids, this.remoteNackMids));
                }),
                yield this.setMungedSDP(t, ia.write(i)),
                t
              );
            });
          }
          createDataChannel(e, t) {
            return this.pc.createDataChannel(e, t);
          }
          addTransceiver(e, t) {
            return this.pc.addTransceiver(e, t);
          }
          addTrack(e) {
            if (!this._pc) throw new Hs("PC closed, cannot add track");
            return this._pc.addTrack(e);
          }
          setTrackCodecBitrate(e) {
            this.trackBitrates.push(e);
          }
          setConfiguration(e) {
            var t;
            if (!this._pc) throw new Hs("PC closed, cannot configure");
            return null === (t = this._pc) || void 0 === t
              ? void 0
              : t.setConfiguration(e);
          }
          canRemoveTrack() {
            var e;
            return !!(null === (e = this._pc) || void 0 === e
              ? void 0
              : e.removeTrack);
          }
          removeTrack(e) {
            var t;
            return null === (t = this._pc) || void 0 === t
              ? void 0
              : t.removeTrack(e);
          }
          getConnectionState() {
            var e, t;
            return null !==
              (t =
                null === (e = this._pc) || void 0 === e
                  ? void 0
                  : e.connectionState) && void 0 !== t
              ? t
              : "closed";
          }
          getICEConnectionState() {
            var e, t;
            return null !==
              (t =
                null === (e = this._pc) || void 0 === e
                  ? void 0
                  : e.iceConnectionState) && void 0 !== t
              ? t
              : "closed";
          }
          getSignallingState() {
            var e, t;
            return null !==
              (t =
                null === (e = this._pc) || void 0 === e
                  ? void 0
                  : e.signalingState) && void 0 !== t
              ? t
              : "closed";
          }
          getTransceivers() {
            var e, t;
            return null !==
              (t =
                null === (e = this._pc) || void 0 === e
                  ? void 0
                  : e.getTransceivers()) && void 0 !== t
              ? t
              : [];
          }
          getSenders() {
            var e, t;
            return null !==
              (t =
                null === (e = this._pc) || void 0 === e
                  ? void 0
                  : e.getSenders()) && void 0 !== t
              ? t
              : [];
          }
          getLocalDescription() {
            var e;
            return null === (e = this._pc) || void 0 === e
              ? void 0
              : e.localDescription;
          }
          getRemoteDescription() {
            var e;
            return null === (e = this.pc) || void 0 === e
              ? void 0
              : e.remoteDescription;
          }
          getStats() {
            return this.pc.getStats();
          }
          getConnectedAddress() {
            return Zi(this, void 0, void 0, function* () {
              var e;
              if (!this._pc) return;
              let t = "";
              const i = new Map(),
                n = new Map();
              if (
                ((yield this._pc.getStats()).forEach((e) => {
                  switch (e.type) {
                    case "transport":
                      t = e.selectedCandidatePairId;
                      break;
                    case "candidate-pair":
                      ("" === t && e.selected && (t = e.id), i.set(e.id, e));
                      break;
                    case "remote-candidate":
                      n.set(e.id, "".concat(e.address, ":").concat(e.port));
                  }
                }),
                "" === t)
              )
                return;
              const s =
                null === (e = i.get(t)) || void 0 === e
                  ? void 0
                  : e.remoteCandidateId;
              return void 0 !== s ? n.get(s) : void 0;
            });
          }
          setMungedSDP(e, t, i) {
            return Zi(this, void 0, void 0, function* () {
              if (t) {
                const n = e.sdp;
                e.sdp = t;
                try {
                  return (
                    this.log.debug(
                      "setting munged ".concat(
                        i ? "remote" : "local",
                        " description",
                      ),
                      this.logContext,
                    ),
                    void (i
                      ? yield this.pc.setRemoteDescription(e)
                      : yield this.pc.setLocalDescription(e))
                  );
                } catch (i) {
                  (this.log.warn(
                    "not able to set ".concat(
                      e.type,
                      ", falling back to unmodified sdp",
                    ),
                    Object.assign(Object.assign({}, this.logContext), {
                      error: i,
                      sdp: t,
                    }),
                  ),
                    (e.sdp = n));
                }
              }
              try {
                i
                  ? yield this.pc.setRemoteDescription(e)
                  : yield this.pc.setLocalDescription(e);
              } catch (t) {
                let n = "unknown error";
                t instanceof Error
                  ? (n = t.message)
                  : "string" == typeof t && (n = t);
                const s = { error: n, sdp: e.sdp };
                throw (
                  !i &&
                    this.pc.remoteDescription &&
                    (s.remoteSdp = this.pc.remoteDescription),
                  this.log.error(
                    "unable to set ".concat(e.type),
                    Object.assign(Object.assign({}, this.logContext), {
                      fields: s,
                    }),
                  ),
                  new zs(n)
                );
              }
            });
          }
          ensureVideoDDExtensionForSVC(e, t) {
            var i, n;
            if (
              !(null === (i = e.ext) || void 0 === i
                ? void 0
                : i.some((e) => e.uri === Tr))
            ) {
              if (0 === this.ddExtID) {
                let e = 0;
                (t.media.forEach((t) => {
                  var i;
                  "video" === t.type &&
                    (null === (i = t.ext) ||
                      void 0 === i ||
                      i.forEach((t) => {
                        t.value > e && (e = t.value);
                      }));
                }),
                  (this.ddExtID = e + 1));
              }
              null === (n = e.ext) ||
                void 0 === n ||
                n.push({ value: this.ddExtID, uri: Tr });
            }
          }
        }
        function ca(e, t, i) {
          let n = 0;
          (e.rtp.some((e) => "opus" === e.codec && ((n = e.payload), !0)),
            n > 0 &&
              (e.rtcpFb || (e.rtcpFb = []),
              i.includes(e.mid) &&
                !e.rtcpFb.some((e) => e.payload === n && "nack" === e.type) &&
                e.rtcpFb.push({ payload: n, type: "nack" }),
              t.includes(e.mid) &&
                e.fmtp.some(
                  (e) =>
                    e.payload === n &&
                    (e.config.includes("stereo=1") || (e.config += ";stereo=1"),
                    !0),
                )));
        }
        function da(e) {
          if (e.connection) {
            const t = e.connection.ip.indexOf(":") >= 0;
            ((4 === e.connection.version && t) ||
              (6 === e.connection.version && !t)) &&
              ((e.connection.ip = "0.0.0.0"), (e.connection.version = 4));
          }
        }
        const la = "vp8",
          ua = {
            audioPreset: vr.music,
            dtx: !0,
            red: !0,
            forceStereo: !1,
            simulcast: !0,
            screenShareEncoding: yr.h1080fps15.encoding,
            stopMicTrackOnMute: !1,
            videoCodec: la,
            backupCodec: !0,
            preConnectBuffer: !1,
          },
          ha = {
            deviceId: { ideal: "default" },
            autoGainControl: !0,
            echoCancellation: !0,
            noiseSuppression: !0,
            voiceIsolation: !0,
          },
          pa = {
            deviceId: { ideal: "default" },
            resolution: br.h720.resolution,
          },
          ma = {
            adaptiveStream: !1,
            dynacast: !1,
            stopLocalTrackOnUnpublish: !0,
            reconnectPolicy: new Xi(),
            disconnectOnPageLeave: !0,
            webAudioMix: !1,
          },
          ga = {
            autoSubscribe: !0,
            maxRetries: 1,
            peerConnectionTimeout: 15e3,
            websocketTimeout: 15e3,
          };
        var fa;
        !(function (e) {
          ((e[(e.NEW = 0)] = "NEW"),
            (e[(e.CONNECTING = 1)] = "CONNECTING"),
            (e[(e.CONNECTED = 2)] = "CONNECTED"),
            (e[(e.FAILED = 3)] = "FAILED"),
            (e[(e.CLOSING = 4)] = "CLOSING"),
            (e[(e.CLOSED = 5)] = "CLOSED"));
        })(fa || (fa = {}));
        class va {
          get needsPublisher() {
            return this.isPublisherConnectionRequired;
          }
          get needsSubscriber() {
            return this.isSubscriberConnectionRequired;
          }
          get currentState() {
            return this.state;
          }
          constructor(e, t, i) {
            var n;
            ((this.peerConnectionTimeout = ga.peerConnectionTimeout),
              (this.log = Ki),
              (this.updateState = () => {
                var e;
                const t = this.state,
                  i = this.requiredTransports.map((e) =>
                    e.getConnectionState(),
                  );
                (i.every((e) => "connected" === e)
                  ? (this.state = fa.CONNECTED)
                  : i.some((e) => "failed" === e)
                    ? (this.state = fa.FAILED)
                    : i.some((e) => "connecting" === e)
                      ? (this.state = fa.CONNECTING)
                      : i.every((e) => "closed" === e)
                        ? (this.state = fa.CLOSED)
                        : i.some((e) => "closed" === e)
                          ? (this.state = fa.CLOSING)
                          : i.every((e) => "new" === e) &&
                            (this.state = fa.NEW),
                  t !== this.state &&
                    (this.log.debug(
                      "pc state change: from "
                        .concat(fa[t], " to ")
                        .concat(fa[this.state]),
                      this.logContext,
                    ),
                    null === (e = this.onStateChange) ||
                      void 0 === e ||
                      e.call(
                        this,
                        this.state,
                        this.publisher.getConnectionState(),
                        this.subscriber.getConnectionState(),
                      )));
              }),
              (this.log = Gi(
                null !== (n = i.loggerName) && void 0 !== n ? n : Bi.PCManager,
              )),
              (this.loggerOptions = i),
              (this.isPublisherConnectionRequired = !t),
              (this.isSubscriberConnectionRequired = t),
              (this.publisher = new aa(e, i)),
              (this.subscriber = new aa(e, i)),
              (this.publisher.onConnectionStateChange = this.updateState),
              (this.subscriber.onConnectionStateChange = this.updateState),
              (this.publisher.onIceConnectionStateChange = this.updateState),
              (this.subscriber.onIceConnectionStateChange = this.updateState),
              (this.publisher.onSignalingStatechange = this.updateState),
              (this.subscriber.onSignalingStatechange = this.updateState),
              (this.publisher.onIceCandidate = (e) => {
                var t;
                null === (t = this.onIceCandidate) ||
                  void 0 === t ||
                  t.call(this, e, Ft.PUBLISHER);
              }),
              (this.subscriber.onIceCandidate = (e) => {
                var t;
                null === (t = this.onIceCandidate) ||
                  void 0 === t ||
                  t.call(this, e, Ft.SUBSCRIBER);
              }),
              (this.subscriber.onDataChannel = (e) => {
                var t;
                null === (t = this.onDataChannel) ||
                  void 0 === t ||
                  t.call(this, e);
              }),
              (this.subscriber.onTrack = (e) => {
                var t;
                null === (t = this.onTrack) || void 0 === t || t.call(this, e);
              }),
              (this.publisher.onOffer = (e, t) => {
                var i;
                null === (i = this.onPublisherOffer) ||
                  void 0 === i ||
                  i.call(this, e, t);
              }),
              (this.state = fa.NEW),
              (this.connectionLock = new a()),
              (this.remoteOfferLock = new a()));
          }
          get logContext() {
            var e, t;
            return Object.assign(
              {},
              null === (t = (e = this.loggerOptions).loggerContextCb) ||
                void 0 === t
                ? void 0
                : t.call(e),
            );
          }
          requirePublisher() {
            let e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            ((this.isPublisherConnectionRequired = e), this.updateState());
          }
          requireSubscriber() {
            let e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            ((this.isSubscriberConnectionRequired = e), this.updateState());
          }
          createAndSendPublisherOffer(e) {
            return this.publisher.createAndSendOffer(e);
          }
          setPublisherAnswer(e, t) {
            return this.publisher.setRemoteDescription(e, t);
          }
          removeTrack(e) {
            return this.publisher.removeTrack(e);
          }
          close() {
            return Zi(this, void 0, void 0, function* () {
              if (
                this.publisher &&
                "closed" !== this.publisher.getSignallingState()
              ) {
                const e = this.publisher;
                for (const t of e.getSenders())
                  try {
                    e.canRemoveTrack() && e.removeTrack(t);
                  } catch (e) {
                    this.log.warn(
                      "could not removeTrack",
                      Object.assign(Object.assign({}, this.logContext), {
                        error: e,
                      }),
                    );
                  }
              }
              (yield Promise.all([
                this.publisher.close(),
                this.subscriber.close(),
              ]),
                this.updateState());
            });
          }
          triggerIceRestart() {
            return Zi(this, void 0, void 0, function* () {
              ((this.subscriber.restartingIce = !0),
                this.needsPublisher &&
                  (yield this.createAndSendPublisherOffer({ iceRestart: !0 })));
            });
          }
          addIceCandidate(e, t) {
            return Zi(this, void 0, void 0, function* () {
              t === Ft.PUBLISHER
                ? yield this.publisher.addIceCandidate(e)
                : yield this.subscriber.addIceCandidate(e);
            });
          }
          createSubscriberAnswerFromOffer(e, t) {
            return Zi(this, void 0, void 0, function* () {
              this.log.debug(
                "received server offer",
                Object.assign(Object.assign({}, this.logContext), {
                  RTCSdpType: e.type,
                  sdp: e.sdp,
                  signalingState: this.subscriber
                    .getSignallingState()
                    .toString(),
                }),
              );
              const i = yield this.remoteOfferLock.lock();
              try {
                if (!(yield this.subscriber.setRemoteDescription(e, t))) return;
                return yield this.subscriber.createAndSetAnswer();
              } finally {
                i();
              }
            });
          }
          updateConfiguration(e, t) {
            (this.publisher.setConfiguration(e),
              this.subscriber.setConfiguration(e),
              t && this.triggerIceRestart());
          }
          ensurePCTransportConnection(e, t) {
            return Zi(this, void 0, void 0, function* () {
              var i;
              const n = yield this.connectionLock.lock();
              try {
                (this.isPublisherConnectionRequired &&
                  "connected" !== this.publisher.getConnectionState() &&
                  "connecting" !== this.publisher.getConnectionState() &&
                  (this.log.debug(
                    "negotiation required, start negotiating",
                    this.logContext,
                  ),
                  this.publisher.negotiate()),
                  yield Promise.all(
                    null === (i = this.requiredTransports) || void 0 === i
                      ? void 0
                      : i.map((i) => this.ensureTransportConnected(i, e, t)),
                  ));
              } finally {
                n();
              }
            });
          }
          negotiate(e) {
            return Zi(this, void 0, void 0, function* () {
              return new Promise((t, i) =>
                Zi(this, void 0, void 0, function* () {
                  const n = setTimeout(() => {
                    i("negotiation timed out");
                  }, this.peerConnectionTimeout);
                  (e.signal.addEventListener("abort", () => {
                    (clearTimeout(n), i("negotiation aborted"));
                  }),
                    this.publisher.once(sa, () => {
                      e.signal.aborted ||
                        this.publisher.once(ra, () => {
                          (clearTimeout(n), t());
                        });
                    }),
                    yield this.publisher.negotiate((e) => {
                      (clearTimeout(n), i(e));
                    }));
                }),
              );
            });
          }
          addPublisherTransceiver(e, t) {
            return this.publisher.addTransceiver(e, t);
          }
          addPublisherTrack(e) {
            return this.publisher.addTrack(e);
          }
          createPublisherDataChannel(e, t) {
            return this.publisher.createDataChannel(e, t);
          }
          getConnectedAddress(e) {
            return e === Ft.PUBLISHER || e === Ft.SUBSCRIBER
              ? this.publisher.getConnectedAddress()
              : this.requiredTransports[0].getConnectedAddress();
          }
          get requiredTransports() {
            const e = [];
            return (
              this.isPublisherConnectionRequired && e.push(this.publisher),
              this.isSubscriberConnectionRequired && e.push(this.subscriber),
              e
            );
          }
          ensureTransportConnected(e, t) {
            return Zi(this, arguments, void 0, function (e, t) {
              var i = this;
              let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : this.peerConnectionTimeout;
              return (function* () {
                if ("connected" !== e.getConnectionState())
                  return new Promise((e, s) =>
                    Zi(i, void 0, void 0, function* () {
                      const i = () => {
                        (this.log.warn(
                          "abort transport connection",
                          this.logContext,
                        ),
                          or.clearTimeout(r),
                          s(
                            new qs(
                              "room connection has been cancelled",
                              Ns.Cancelled,
                            ),
                          ));
                      };
                      ((null == t ? void 0 : t.signal.aborted) && i(),
                        null == t || t.signal.addEventListener("abort", i));
                      const r = or.setTimeout(() => {
                        (null == t || t.signal.removeEventListener("abort", i),
                          s(
                            new qs(
                              "could not establish pc connection",
                              Ns.InternalError,
                            ),
                          ));
                      }, n);
                      for (; this.state !== fa.CONNECTED; )
                        if (
                          (yield Cr(50), null == t ? void 0 : t.signal.aborted)
                        )
                          return void s(
                            new qs(
                              "room connection has been cancelled",
                              Ns.Cancelled,
                            ),
                          );
                      (or.clearTimeout(r),
                        null == t || t.signal.removeEventListener("abort", i),
                        e());
                    }),
                  );
              })();
            });
          }
        }
        class ba extends Error {
          constructor(e, t, i) {
            (super(t),
              (this.code = e),
              (this.message = ya(t, ba.MAX_MESSAGE_BYTES)),
              (this.data = i ? ya(i, ba.MAX_DATA_BYTES) : void 0));
          }
          static fromProto(e) {
            return new ba(e.code, e.message, e.data);
          }
          toProto() {
            return new St({
              code: this.code,
              message: this.message,
              data: this.data,
            });
          }
          static builtIn(e, t) {
            return new ba(ba.ErrorCode[e], ba.ErrorMessage[e], t);
          }
        }
        function ka(e) {
          return new TextEncoder().encode(e).length;
        }
        function ya(e, t) {
          if (ka(e) <= t) return e;
          let i = 0,
            n = e.length;
          const s = new TextEncoder();
          for (; i < n; ) {
            const r = Math.floor((i + n + 1) / 2);
            s.encode(e.slice(0, r)).length <= t ? (i = r) : (n = r - 1);
          }
          return e.slice(0, i);
        }
        ((ba.MAX_MESSAGE_BYTES = 256),
          (ba.MAX_DATA_BYTES = 15360),
          (ba.ErrorCode = {
            APPLICATION_ERROR: 1500,
            CONNECTION_TIMEOUT: 1501,
            RESPONSE_TIMEOUT: 1502,
            RECIPIENT_DISCONNECTED: 1503,
            RESPONSE_PAYLOAD_TOO_LARGE: 1504,
            SEND_FAILED: 1505,
            UNSUPPORTED_METHOD: 1400,
            RECIPIENT_NOT_FOUND: 1401,
            REQUEST_PAYLOAD_TOO_LARGE: 1402,
            UNSUPPORTED_SERVER: 1403,
            UNSUPPORTED_VERSION: 1404,
          }),
          (ba.ErrorMessage = {
            APPLICATION_ERROR: "Application error in method handler",
            CONNECTION_TIMEOUT: "Connection timeout",
            RESPONSE_TIMEOUT: "Response timeout",
            RECIPIENT_DISCONNECTED: "Recipient disconnected",
            RESPONSE_PAYLOAD_TOO_LARGE: "Response payload too large",
            SEND_FAILED: "Failed to send",
            UNSUPPORTED_METHOD: "Method not supported at destination",
            RECIPIENT_NOT_FOUND: "Recipient not found",
            REQUEST_PAYLOAD_TOO_LARGE: "Request payload too large",
            UNSUPPORTED_SERVER: "RPC not supported by server",
            UNSUPPORTED_VERSION: "Unsupported RPC version",
          }));
        const Ta = 2e3;
        function Ca(e, t) {
          if (!t) return 0;
          let i, n;
          return (
            "bytesReceived" in e
              ? ((i = e.bytesReceived), (n = t.bytesReceived))
              : "bytesSent" in e && ((i = e.bytesSent), (n = t.bytesSent)),
            void 0 === i ||
            void 0 === n ||
            void 0 === e.timestamp ||
            void 0 === t.timestamp
              ? 0
              : (8 * (i - n) * 1e3) / (e.timestamp - t.timestamp)
          );
        }
        const Sa = "undefined" != typeof MediaRecorder,
          wa = Sa
            ? MediaRecorder
            : class {
                constructor() {
                  throw new Error(
                    "MediaRecorder is not available in this environment",
                  );
                }
              };
        class Ea extends wa {
          constructor(e, t) {
            if (!Sa)
              throw new Error(
                "MediaRecorder is not available in this environment",
              );
            let i, n;
            super(new MediaStream([e.mediaStreamTrack]), t);
            const s = () => {
                (this.removeEventListener("dataavailable", i),
                  this.removeEventListener("stop", s),
                  this.removeEventListener("error", r),
                  null == n || n.close(),
                  (n = void 0));
              },
              r = (e) => {
                (null == n || n.error(e),
                  this.removeEventListener("dataavailable", i),
                  this.removeEventListener("stop", s),
                  this.removeEventListener("error", r),
                  (n = void 0));
              };
            ((this.byteStream = new ReadableStream({
              start: (e) => {
                ((n = e),
                  (i = (t) =>
                    Zi(this, void 0, void 0, function* () {
                      const i = yield t.data.arrayBuffer();
                      void 0 !== n && e.enqueue(new Uint8Array(i));
                    })),
                  this.addEventListener("dataavailable", i));
              },
              cancel: () => {
                s();
              },
            })),
              this.addEventListener("stop", s),
              this.addEventListener("error", r));
          }
        }
        class Pa extends dr {
          get sender() {
            return this._sender;
          }
          set sender(e) {
            this._sender = e;
          }
          get constraints() {
            return this._constraints;
          }
          get hasPreConnectBuffer() {
            return !!this.localTrackRecorder;
          }
          constructor(e, t, i) {
            let n =
              arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            (super(e, t, arguments.length > 4 ? arguments[4] : void 0),
              (this.manuallyStopped = !1),
              (this._isUpstreamPaused = !1),
              (this.handleTrackMuteEvent = () =>
                this.debouncedTrackMuteHandler().catch(() =>
                  this.log.debug(
                    "track mute bounce got cancelled by an unmute event",
                    this.logContext,
                  ),
                )),
              (this.debouncedTrackMuteHandler = na(
                () =>
                  Zi(this, void 0, void 0, function* () {
                    yield this.pauseUpstream();
                  }),
                5e3,
              )),
              (this.handleTrackUnmuteEvent = () =>
                Zi(this, void 0, void 0, function* () {
                  (this.debouncedTrackMuteHandler.cancel("unmute"),
                    yield this.resumeUpstream());
                })),
              (this.handleEnded = () => {
                (this.isInBackground && (this.reacquireTrack = !0),
                  this._mediaStreamTrack.removeEventListener(
                    "mute",
                    this.handleTrackMuteEvent,
                  ),
                  this._mediaStreamTrack.removeEventListener(
                    "unmute",
                    this.handleTrackUnmuteEvent,
                  ),
                  this.emit(Vs.Ended, this));
              }),
              (this.reacquireTrack = !1),
              (this.providedByUser = n),
              (this.muteLock = new a()),
              (this.pauseUpstreamLock = new a()),
              (this.processorLock = new a()),
              (this.restartLock = new a()),
              this.setMediaStreamTrack(e, !0),
              (this._constraints = e.getConstraints()),
              i && (this._constraints = i));
          }
          get id() {
            return this._mediaStreamTrack.id;
          }
          get dimensions() {
            if (this.kind !== dr.Kind.Video) return;
            const { width: e, height: t } =
              this._mediaStreamTrack.getSettings();
            return e && t ? { width: e, height: t } : void 0;
          }
          get isUpstreamPaused() {
            return this._isUpstreamPaused;
          }
          get isUserProvided() {
            return this.providedByUser;
          }
          get mediaStreamTrack() {
            var e, t;
            return null !==
              (t =
                null === (e = this.processor) || void 0 === e
                  ? void 0
                  : e.processedTrack) && void 0 !== t
              ? t
              : this._mediaStreamTrack;
          }
          get isLocal() {
            return !0;
          }
          getSourceTrackSettings() {
            return this._mediaStreamTrack.getSettings();
          }
          setMediaStreamTrack(e, t) {
            return Zi(this, void 0, void 0, function* () {
              var i;
              if (e === this._mediaStreamTrack && !t) return;
              let n;
              if (
                (this._mediaStreamTrack &&
                  (this.attachedElements.forEach((e) => {
                    ur(this._mediaStreamTrack, e);
                  }),
                  this.debouncedTrackMuteHandler.cancel("new-track"),
                  this._mediaStreamTrack.removeEventListener(
                    "ended",
                    this.handleEnded,
                  ),
                  this._mediaStreamTrack.removeEventListener(
                    "mute",
                    this.handleTrackMuteEvent,
                  ),
                  this._mediaStreamTrack.removeEventListener(
                    "unmute",
                    this.handleTrackUnmuteEvent,
                  )),
                (this.mediaStream = new MediaStream([e])),
                e &&
                  (e.addEventListener("ended", this.handleEnded),
                  e.addEventListener("mute", this.handleTrackMuteEvent),
                  e.addEventListener("unmute", this.handleTrackUnmuteEvent),
                  (this._constraints = e.getConstraints())),
                this.processor && e)
              ) {
                const t = yield this.processorLock.lock();
                try {
                  if (
                    (this.log.debug("restarting processor", this.logContext),
                    "unknown" === this.kind)
                  )
                    throw TypeError(
                      "cannot set processor on track of unknown kind",
                    );
                  (this.processorElement &&
                    (lr(e, this.processorElement),
                    (this.processorElement.muted = !0)),
                    yield this.processor.restart({
                      track: e,
                      kind: this.kind,
                      element: this.processorElement,
                    }),
                    (n = this.processor.processedTrack));
                } finally {
                  t();
                }
              }
              (this.sender &&
                "closed" !==
                  (null === (i = this.sender.transport) || void 0 === i
                    ? void 0
                    : i.state) &&
                (yield this.sender.replaceTrack(null != n ? n : e)),
                this.providedByUser ||
                  this._mediaStreamTrack === e ||
                  this._mediaStreamTrack.stop(),
                (this._mediaStreamTrack = e),
                e &&
                  ((this._mediaStreamTrack.enabled = !this.isMuted),
                  yield this.resumeUpstream(),
                  this.attachedElements.forEach((t) => {
                    lr(null != n ? n : e, t);
                  })));
            });
          }
          waitForDimensions() {
            return Zi(this, arguments, void 0, function () {
              var e = this;
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1e3;
              return (function* () {
                var i;
                if (e.kind === dr.Kind.Audio)
                  throw new Error("cannot get dimensions for audio tracks");
                "iOS" ===
                  (null === (i = er()) || void 0 === i ? void 0 : i.os) &&
                  (yield Cr(10));
                const n = Date.now();
                for (; Date.now() - n < t; ) {
                  const t = e.dimensions;
                  if (t) return t;
                  yield Cr(50);
                }
                throw new Ws("unable to get track dimensions after timeout");
              })();
            });
          }
          setDeviceId(e) {
            return Zi(this, void 0, void 0, function* () {
              return (
                (this._constraints.deviceId === e &&
                  this._mediaStreamTrack.getSettings().deviceId === no(e)) ||
                ((this._constraints.deviceId = e),
                !!this.isMuted ||
                  (yield this.restartTrack(),
                  no(e) === this._mediaStreamTrack.getSettings().deviceId))
              );
            });
          }
          getDeviceId() {
            return Zi(this, arguments, void 0, function () {
              var e = this;
              let t =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              return (function* () {
                if (e.source === dr.Source.ScreenShare) return;
                const { deviceId: i, groupId: n } =
                    e._mediaStreamTrack.getSettings(),
                  s = e.kind === dr.Kind.Audio ? "audioinput" : "videoinput";
                return t ? Ao.getInstance().normalizeDeviceId(s, i, n) : i;
              })();
            });
          }
          mute() {
            return Zi(this, void 0, void 0, function* () {
              return (this.setTrackMuted(!0), this);
            });
          }
          unmute() {
            return Zi(this, void 0, void 0, function* () {
              return (this.setTrackMuted(!1), this);
            });
          }
          replaceTrack(e, t) {
            return Zi(this, void 0, void 0, function* () {
              if (!this.sender)
                throw new Ws("unable to replace an unpublished track");
              let i, n;
              return (
                "boolean" == typeof t
                  ? (i = t)
                  : void 0 !== t &&
                    ((i = t.userProvidedTrack), (n = t.stopProcessor)),
                (this.providedByUser = null == i || i),
                this.log.debug("replace MediaStreamTrack", this.logContext),
                yield this.setMediaStreamTrack(e),
                n && this.processor && (yield this.stopProcessor()),
                this
              );
            });
          }
          restart(e) {
            return Zi(this, void 0, void 0, function* () {
              this.manuallyStopped = !1;
              const t = yield this.restartLock.lock();
              try {
                e || (e = this._constraints);
                const { deviceId: t, facingMode: i } = e,
                  n = (function (e, t) {
                    var i = {};
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        t.indexOf(n) < 0 &&
                        (i[n] = e[n]);
                    if (
                      null != e &&
                      "function" == typeof Object.getOwnPropertySymbols
                    ) {
                      var s = 0;
                      for (
                        n = Object.getOwnPropertySymbols(e);
                        s < n.length;
                        s++
                      )
                        t.indexOf(n[s]) < 0 &&
                          Object.prototype.propertyIsEnumerable.call(e, n[s]) &&
                          (i[n[s]] = e[n[s]]);
                    }
                    return i;
                  })(e, ["deviceId", "facingMode"]);
                this.log.debug(
                  "restarting track with constraints",
                  Object.assign(Object.assign({}, this.logContext), {
                    constraints: e,
                  }),
                );
                const s = { audio: !1, video: !1 };
                (this.kind === dr.Kind.Video
                  ? (s.video = (!t && !i) || { deviceId: t, facingMode: i })
                  : (s.audio = !t || { deviceId: t }),
                  this.attachedElements.forEach((e) => {
                    ur(this.mediaStreamTrack, e);
                  }),
                  this._mediaStreamTrack.removeEventListener(
                    "ended",
                    this.handleEnded,
                  ),
                  this._mediaStreamTrack.stop());
                const r = (yield navigator.mediaDevices.getUserMedia(
                  s,
                )).getTracks()[0];
                return (
                  yield r.applyConstraints(n),
                  r.addEventListener("ended", this.handleEnded),
                  this.log.debug(
                    "re-acquired MediaStreamTrack",
                    this.logContext,
                  ),
                  yield this.setMediaStreamTrack(r),
                  (this._constraints = e),
                  this.emit(Vs.Restarted, this),
                  this.manuallyStopped &&
                    (this.log.warn(
                      "track was stopped during a restart, stopping restarted track",
                      this.logContext,
                    ),
                    this.stop()),
                  this
                );
              } finally {
                t();
              }
            });
          }
          setTrackMuted(e) {
            (this.log.debug(
              "setting "
                .concat(this.kind, " track ")
                .concat(e ? "muted" : "unmuted"),
              this.logContext,
            ),
              (this.isMuted === e && this._mediaStreamTrack.enabled !== e) ||
                ((this.isMuted = e),
                (this._mediaStreamTrack.enabled = !e),
                this.emit(e ? Vs.Muted : Vs.Unmuted, this)));
          }
          get needsReAcquisition() {
            return (
              "live" !== this._mediaStreamTrack.readyState ||
              this._mediaStreamTrack.muted ||
              !this._mediaStreamTrack.enabled ||
              this.reacquireTrack
            );
          }
          handleAppVisibilityChanged() {
            const e = Object.create(null, {
              handleAppVisibilityChanged: {
                get: () => super.handleAppVisibilityChanged,
              },
            });
            return Zi(this, void 0, void 0, function* () {
              (yield e.handleAppVisibilityChanged.call(this),
                Lr() &&
                  (this.log.debug(
                    "visibility changed, is in Background: ".concat(
                      this.isInBackground,
                    ),
                    this.logContext,
                  ),
                  this.isInBackground ||
                    !this.needsReAcquisition ||
                    this.isUserProvided ||
                    this.isMuted ||
                    (this.log.debug(
                      "track needs to be reacquired, restarting ".concat(
                        this.source,
                      ),
                      this.logContext,
                    ),
                    yield this.restart(),
                    (this.reacquireTrack = !1))));
            });
          }
          stop() {
            var e;
            ((this.manuallyStopped = !0),
              super.stop(),
              this._mediaStreamTrack.removeEventListener(
                "ended",
                this.handleEnded,
              ),
              this._mediaStreamTrack.removeEventListener(
                "mute",
                this.handleTrackMuteEvent,
              ),
              this._mediaStreamTrack.removeEventListener(
                "unmute",
                this.handleTrackUnmuteEvent,
              ),
              null === (e = this.processor) || void 0 === e || e.destroy(),
              (this.processor = void 0));
          }
          pauseUpstream() {
            return Zi(this, void 0, void 0, function* () {
              var e;
              const t = yield this.pauseUpstreamLock.lock();
              try {
                if (!0 === this._isUpstreamPaused) return;
                if (!this.sender)
                  return void this.log.warn(
                    "unable to pause upstream for an unpublished track",
                    this.logContext,
                  );
                ((this._isUpstreamPaused = !0),
                  this.emit(Vs.UpstreamPaused, this));
                const t = er();
                if (
                  "Safari" === (null == t ? void 0 : t.name) &&
                  Kr(t.version, "12.0") < 0
                )
                  throw new Ks(
                    "pauseUpstream is not supported on Safari < 12.",
                  );
                "closed" !==
                  (null === (e = this.sender.transport) || void 0 === e
                    ? void 0
                    : e.state) && (yield this.sender.replaceTrack(null));
              } finally {
                t();
              }
            });
          }
          resumeUpstream() {
            return Zi(this, void 0, void 0, function* () {
              var e;
              const t = yield this.pauseUpstreamLock.lock();
              try {
                if (!1 === this._isUpstreamPaused) return;
                if (!this.sender)
                  return void this.log.warn(
                    "unable to resume upstream for an unpublished track",
                    this.logContext,
                  );
                ((this._isUpstreamPaused = !1),
                  this.emit(Vs.UpstreamResumed, this),
                  "closed" !==
                    (null === (e = this.sender.transport) || void 0 === e
                      ? void 0
                      : e.state) &&
                    (yield this.sender.replaceTrack(this.mediaStreamTrack)));
              } finally {
                t();
              }
            });
          }
          getRTCStatsReport() {
            return Zi(this, void 0, void 0, function* () {
              var e;
              if (
                null === (e = this.sender) || void 0 === e ? void 0 : e.getStats
              )
                return yield this.sender.getStats();
            });
          }
          setProcessor(e) {
            return Zi(this, arguments, void 0, function (e) {
              var t = this;
              let i =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              return (function* () {
                var n;
                const s = yield t.processorLock.lock();
                try {
                  t.log.debug("setting up processor", t.logContext);
                  const s = document.createElement(t.kind),
                    r = {
                      kind: t.kind,
                      track: t._mediaStreamTrack,
                      element: s,
                      audioContext: t.audioContext,
                    };
                  if (
                    (yield e.init(r),
                    t.log.debug("processor initialized", t.logContext),
                    t.processor && (yield t.stopProcessor()),
                    "unknown" === t.kind)
                  )
                    throw TypeError(
                      "cannot set processor on track of unknown kind",
                    );
                  if (
                    (lr(t._mediaStreamTrack, s),
                    (s.muted = !0),
                    s.play().catch((e) => {
                      e instanceof DOMException && "AbortError" === e.name
                        ? (t.log.warn(
                            "failed to play processor element, retrying",
                            Object.assign(Object.assign({}, t.logContext), {
                              error: e,
                            }),
                          ),
                          setTimeout(() => {
                            s.play().catch((e) => {
                              t.log.error(
                                "failed to play processor element",
                                Object.assign(Object.assign({}, t.logContext), {
                                  err: e,
                                }),
                              );
                            });
                          }, 100))
                        : t.log.error(
                            "failed to play processor element",
                            Object.assign(Object.assign({}, t.logContext), {
                              error: e,
                            }),
                          );
                    }),
                    (t.processor = e),
                    (t.processorElement = s),
                    t.processor.processedTrack)
                  ) {
                    for (const e of t.attachedElements)
                      e !== t.processorElement &&
                        i &&
                        (ur(t._mediaStreamTrack, e),
                        lr(t.processor.processedTrack, e));
                    yield null === (n = t.sender) || void 0 === n
                      ? void 0
                      : n.replaceTrack(t.processor.processedTrack);
                  }
                  t.emit(Vs.TrackProcessorUpdate, t.processor);
                } finally {
                  s();
                }
              })();
            });
          }
          getProcessor() {
            return this.processor;
          }
          stopProcessor() {
            return Zi(this, arguments, void 0, function () {
              var e = this;
              let t =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              return (function* () {
                var i, n;
                e.processor &&
                  (e.log.debug("stopping processor", e.logContext),
                  null === (i = e.processor.processedTrack) ||
                    void 0 === i ||
                    i.stop(),
                  yield e.processor.destroy(),
                  (e.processor = void 0),
                  t ||
                    (null === (n = e.processorElement) ||
                      void 0 === n ||
                      n.remove(),
                    (e.processorElement = void 0)),
                  yield e._mediaStreamTrack.applyConstraints(e._constraints),
                  yield e.setMediaStreamTrack(e._mediaStreamTrack, !0),
                  e.emit(Vs.TrackProcessorUpdate));
              })();
            });
          }
          startPreConnectBuffer() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 100;
            Sa
              ? this.localTrackRecorder
                ? this.log.warn("preconnect buffer already started")
                : ((this.localTrackRecorder = new Ea(this, {
                    mimeType: "audio/webm;codecs=opus",
                  })),
                  this.localTrackRecorder.start(e),
                  (this.autoStopPreConnectBuffer = setTimeout(() => {
                    (this.log.warn(
                      "preconnect buffer timed out, stopping recording automatically",
                      this.logContext,
                    ),
                      this.stopPreConnectBuffer());
                  }, 1e4)))
              : this.log.warn(
                  "MediaRecorder is not available, cannot start preconnect buffer",
                  this.logContext,
                );
          }
          stopPreConnectBuffer() {
            (clearTimeout(this.autoStopPreConnectBuffer),
              this.localTrackRecorder &&
                (this.localTrackRecorder.stop(),
                (this.localTrackRecorder = void 0)));
          }
          getPreConnectBuffer() {
            var e;
            return null === (e = this.localTrackRecorder) || void 0 === e
              ? void 0
              : e.byteStream;
          }
        }
        class Ra extends Pa {
          get enhancedNoiseCancellation() {
            return this.isKrispNoiseFilterEnabled;
          }
          constructor(e, t) {
            let i =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              n = arguments.length > 3 ? arguments[3] : void 0,
              s = arguments.length > 4 ? arguments[4] : void 0;
            (super(e, dr.Kind.Audio, t, i, s),
              (this.stopOnMute = !1),
              (this.isKrispNoiseFilterEnabled = !1),
              (this.monitorSender = () =>
                Zi(this, void 0, void 0, function* () {
                  if (!this.sender) return void (this._currentBitrate = 0);
                  let e;
                  try {
                    e = yield this.getSenderStats();
                  } catch (e) {
                    return void this.log.error(
                      "could not get audio sender stats",
                      Object.assign(Object.assign({}, this.logContext), {
                        error: e,
                      }),
                    );
                  }
                  (e &&
                    this.prevStats &&
                    (this._currentBitrate = Ca(e, this.prevStats)),
                    (this.prevStats = e));
                })),
              (this.handleKrispNoiseFilterEnable = () => {
                ((this.isKrispNoiseFilterEnabled = !0),
                  this.log.debug("Krisp noise filter enabled", this.logContext),
                  this.emit(
                    Vs.AudioTrackFeatureUpdate,
                    this,
                    $e.TF_ENHANCED_NOISE_CANCELLATION,
                    !0,
                  ));
              }),
              (this.handleKrispNoiseFilterDisable = () => {
                ((this.isKrispNoiseFilterEnabled = !1),
                  this.log.debug(
                    "Krisp noise filter disabled",
                    this.logContext,
                  ),
                  this.emit(
                    Vs.AudioTrackFeatureUpdate,
                    this,
                    $e.TF_ENHANCED_NOISE_CANCELLATION,
                    !1,
                  ));
              }),
              (this.audioContext = n),
              this.checkForSilence());
          }
          mute() {
            const e = Object.create(null, { mute: { get: () => super.mute } });
            return Zi(this, void 0, void 0, function* () {
              const t = yield this.muteLock.lock();
              try {
                return this.isMuted
                  ? (this.log.debug("Track already muted", this.logContext),
                    this)
                  : (this.source === dr.Source.Microphone &&
                      this.stopOnMute &&
                      !this.isUserProvided &&
                      (this.log.debug("stopping mic track", this.logContext),
                      this._mediaStreamTrack.stop()),
                    yield e.mute.call(this),
                    this);
              } finally {
                t();
              }
            });
          }
          unmute() {
            const e = Object.create(null, {
              unmute: { get: () => super.unmute },
            });
            return Zi(this, void 0, void 0, function* () {
              const t = yield this.muteLock.lock();
              try {
                if (!this.isMuted)
                  return (
                    this.log.debug("Track already unmuted", this.logContext),
                    this
                  );
                const t =
                  this._constraints.deviceId &&
                  this._mediaStreamTrack.getSettings().deviceId !==
                    no(this._constraints.deviceId);
                return (
                  this.source !== dr.Source.Microphone ||
                    (!this.stopOnMute &&
                      "ended" !== this._mediaStreamTrack.readyState &&
                      !t) ||
                    this.isUserProvided ||
                    (this.log.debug("reacquiring mic track", this.logContext),
                    yield this.restartTrack()),
                  yield e.unmute.call(this),
                  this
                );
              } finally {
                t();
              }
            });
          }
          restartTrack(e) {
            return Zi(this, void 0, void 0, function* () {
              let t;
              if (e) {
                const i = To({ audio: e });
                "boolean" != typeof i.audio && (t = i.audio);
              }
              yield this.restart(t);
            });
          }
          restart(e) {
            const t = Object.create(null, {
              restart: { get: () => super.restart },
            });
            return Zi(this, void 0, void 0, function* () {
              const i = yield t.restart.call(this, e);
              return (this.checkForSilence(), i);
            });
          }
          startMonitor() {
            Ur() &&
              (this.monitorInterval ||
                (this.monitorInterval = setInterval(() => {
                  this.monitorSender();
                }, Ta)));
          }
          setProcessor(e) {
            return Zi(this, void 0, void 0, function* () {
              var t;
              const i = yield this.processorLock.lock();
              try {
                if (!jr() && !this.audioContext)
                  throw Error(
                    "Audio context needs to be set on LocalAudioTrack in order to enable processors",
                  );
                this.processor && (yield this.stopProcessor());
                const i = {
                  kind: this.kind,
                  track: this._mediaStreamTrack,
                  audioContext: this.audioContext,
                };
                (this.log.debug(
                  "setting up audio processor ".concat(e.name),
                  this.logContext,
                ),
                  yield e.init(i),
                  (this.processor = e),
                  this.processor.processedTrack &&
                    (yield null === (t = this.sender) || void 0 === t
                      ? void 0
                      : t.replaceTrack(this.processor.processedTrack),
                    this.processor.processedTrack.addEventListener(
                      "enable-lk-krisp-noise-filter",
                      this.handleKrispNoiseFilterEnable,
                    ),
                    this.processor.processedTrack.addEventListener(
                      "disable-lk-krisp-noise-filter",
                      this.handleKrispNoiseFilterDisable,
                    )),
                  this.emit(Vs.TrackProcessorUpdate, this.processor));
              } finally {
                i();
              }
            });
          }
          setAudioContext(e) {
            this.audioContext = e;
          }
          getSenderStats() {
            return Zi(this, void 0, void 0, function* () {
              var e;
              if (
                !(null === (e = this.sender) || void 0 === e
                  ? void 0
                  : e.getStats)
              )
                return;
              let t;
              return (
                (yield this.sender.getStats()).forEach((e) => {
                  "outbound-rtp" === e.type &&
                    (t = {
                      type: "audio",
                      streamId: e.id,
                      packetsSent: e.packetsSent,
                      packetsLost: e.packetsLost,
                      bytesSent: e.bytesSent,
                      timestamp: e.timestamp,
                      roundTripTime: e.roundTripTime,
                      jitter: e.jitter,
                    });
                }),
                t
              );
            });
          }
          checkForSilence() {
            return Zi(this, void 0, void 0, function* () {
              const e = yield Co(this);
              return (
                e &&
                  (this.isMuted ||
                    this.log.warn(
                      "silence detected on local audio track",
                      this.logContext,
                    ),
                  this.emit(Vs.AudioSilenceDetected)),
                e
              );
            });
          }
        }
        const Ia = Object.values(br),
          Oa = Object.values(kr),
          Da = Object.values(yr),
          xa = [br.h180, br.h360],
          Ma = [kr.h180, kr.h360],
          _a = (e) =>
            [{ scaleResolutionDownBy: 2, fps: e.encoding.maxFramerate }].map(
              (t) => {
                var i, n;
                return new hr(
                  Math.floor(e.width / t.scaleResolutionDownBy),
                  Math.floor(e.height / t.scaleResolutionDownBy),
                  Math.max(
                    15e4,
                    Math.floor(
                      e.encoding.maxBitrate /
                        (Math.pow(t.scaleResolutionDownBy, 2) *
                          ((null !== (i = e.encoding.maxFramerate) &&
                          void 0 !== i
                            ? i
                            : 30) /
                            (null !== (n = t.fps) && void 0 !== n ? n : 30))),
                    ),
                  ),
                  t.fps,
                  e.encoding.priority,
                );
              },
            ),
          Aa = ["q", "h", "f"];
        function Na(e, t, i, n) {
          var s, r;
          let o = null == n ? void 0 : n.videoEncoding;
          e && (o = null == n ? void 0 : n.screenShareEncoding);
          const a = null == n ? void 0 : n.simulcast,
            c = null == n ? void 0 : n.scalabilityMode,
            d = null == n ? void 0 : n.videoCodec;
          if ((!o && !a && !c) || !t || !i) return [{}];
          o ||
            ((o = (function (e, t, i, n) {
              const s = (function (e, t, i) {
                if (e) return Da;
                const n = t > i ? t / i : i / t;
                return Math.abs(n - 16 / 9) < Math.abs(n - 4 / 3) ? Ia : Oa;
              })(e, t, i);
              let { encoding: r } = s[0];
              const o = Math.max(t, i);
              for (let e = 0; e < s.length; e += 1) {
                const t = s[e];
                if (((r = t.encoding), t.width >= o)) break;
              }
              if (n)
                switch (n) {
                  case "av1":
                  case "h265":
                    ((r = Object.assign({}, r)),
                      (r.maxBitrate = 0.7 * r.maxBitrate));
                    break;
                  case "vp9":
                    ((r = Object.assign({}, r)),
                      (r.maxBitrate = 0.85 * r.maxBitrate));
                }
              return r;
            })(e, t, i, d)),
            Ki.debug("using video encoding", o));
          const l = o.maxFramerate,
            u = new hr(t, i, o.maxBitrate, o.maxFramerate, o.priority);
          if (c && Or(d)) {
            const e = new Fa(c),
              t = [];
            if (e.spatial > 3)
              throw new Error("unsupported scalabilityMode: ".concat(c));
            const i = er();
            if (
              Ar() ||
              jr() ||
              ("Chrome" === (null == i ? void 0 : i.name) &&
                Kr(null == i ? void 0 : i.version, "113") < 0)
            ) {
              const n = "h" == e.suffix ? 2 : 3,
                s = (function (e) {
                  return (
                    e || (e = er()),
                    ("Safari" === (null == e ? void 0 : e.name) &&
                      Kr(e.version, "18.3") > 0) ||
                      ("iOS" === (null == e ? void 0 : e.os) &&
                        !!(null == e ? void 0 : e.osVersion) &&
                        Kr(e.osVersion, "18.3") > 0)
                  );
                })(i);
              for (let i = 0; i < e.spatial; i += 1)
                t.push({
                  rid: Aa[2 - i],
                  maxBitrate: o.maxBitrate / Math.pow(n, i),
                  maxFramerate: u.encoding.maxFramerate,
                  scaleResolutionDownBy: s ? Math.pow(2, i) : void 0,
                });
              t[0].scalabilityMode = c;
            } else
              t.push({
                maxBitrate: o.maxBitrate,
                maxFramerate: u.encoding.maxFramerate,
                scalabilityMode: c,
              });
            return (
              u.encoding.priority &&
                ((t[0].priority = u.encoding.priority),
                (t[0].networkPriority = u.encoding.priority)),
              Ki.debug("using svc encoding", { encodings: t }),
              t
            );
          }
          if (!a) return [o];
          let h,
            p = [];
          if (
            ((p = e
              ? null !==
                  (s = ja(null == n ? void 0 : n.screenShareSimulcastLayers)) &&
                void 0 !== s
                ? s
                : La(e, u)
              : null !==
                    (r = ja(null == n ? void 0 : n.videoSimulcastLayers)) &&
                  void 0 !== r
                ? r
                : La(e, u)),
            p.length > 0)
          ) {
            const e = p[0];
            p.length > 1 && ([, h] = p);
            const n = Math.max(t, i);
            if (n >= 960 && h) return Ua(t, i, [e, h, u], l);
            if (n >= 480) return Ua(t, i, [e, u], l);
          }
          return Ua(t, i, [u]);
        }
        function La(e, t) {
          if (e) return _a(t);
          const { width: i, height: n } = t,
            s = i > n ? i / n : n / i;
          return Math.abs(s - 16 / 9) < Math.abs(s - 4 / 3) ? xa : Ma;
        }
        function Ua(e, t, i, n) {
          const s = [];
          if (
            (i.forEach((i, r) => {
              if (r >= Aa.length) return;
              const o = Math.min(e, t),
                a = {
                  rid: Aa[r],
                  scaleResolutionDownBy: Math.max(
                    1,
                    o / Math.min(i.width, i.height),
                  ),
                  maxBitrate: i.encoding.maxBitrate,
                },
                c =
                  n && i.encoding.maxFramerate
                    ? Math.min(n, i.encoding.maxFramerate)
                    : i.encoding.maxFramerate;
              c && (a.maxFramerate = c);
              const d = Mr() || 0 === r;
              (i.encoding.priority &&
                d &&
                ((a.priority = i.encoding.priority),
                (a.networkPriority = i.encoding.priority)),
                s.push(a));
            }),
            jr() && "ios" === Vr())
          ) {
            let e;
            s.forEach((t) => {
              e
                ? t.maxFramerate && t.maxFramerate > e && (e = t.maxFramerate)
                : (e = t.maxFramerate);
            });
            let t = !0;
            s.forEach((i) => {
              var n;
              i.maxFramerate != e &&
                (t &&
                  ((t = !1),
                  Ki.info(
                    "Simulcast on iOS React-Native requires all encodings to share the same framerate.",
                  )),
                Ki.info(
                  'Setting framerate of encoding "'
                    .concat(
                      null !== (n = i.rid) && void 0 !== n ? n : "",
                      '" to ',
                    )
                    .concat(e),
                ),
                (i.maxFramerate = e));
            });
          }
          return s;
        }
        function ja(e) {
          if (e)
            return e.sort((e, t) => {
              const { encoding: i } = e,
                { encoding: n } = t;
              return i.maxBitrate > n.maxBitrate
                ? 1
                : i.maxBitrate < n.maxBitrate
                  ? -1
                  : i.maxBitrate === n.maxBitrate &&
                      i.maxFramerate &&
                      n.maxFramerate
                    ? i.maxFramerate > n.maxFramerate
                      ? 1
                      : -1
                    : 0;
            });
        }
        class Fa {
          constructor(e) {
            const t = e.match(/^L(\d)T(\d)(h|_KEY|_KEY_SHIFT){0,1}$/);
            if (!t) throw new Error("invalid scalability mode");
            if (
              ((this.spatial = parseInt(t[1])),
              (this.temporal = parseInt(t[2])),
              t.length > 3)
            )
              switch (t[3]) {
                case "h":
                case "_KEY":
                case "_KEY_SHIFT":
                  this.suffix = t[3];
              }
          }
          toString() {
            var e;
            return "L"
              .concat(this.spatial, "T")
              .concat(this.temporal)
              .concat(null !== (e = this.suffix) && void 0 !== e ? e : "");
          }
        }
        class Ba extends Pa {
          get sender() {
            return this._sender;
          }
          set sender(e) {
            ((this._sender = e),
              this.degradationPreference &&
                this.setDegradationPreference(this.degradationPreference));
          }
          constructor(e, t) {
            let i =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              n = arguments.length > 3 ? arguments[3] : void 0;
            (super(e, dr.Kind.Video, t, i, n),
              (this.simulcastCodecs = new Map()),
              (this.degradationPreference = "balanced"),
              (this.isCpuConstrained = !1),
              (this.optimizeForPerformance = !1),
              (this.monitorSender = () =>
                Zi(this, void 0, void 0, function* () {
                  if (!this.sender) return void (this._currentBitrate = 0);
                  let e;
                  try {
                    e = yield this.getSenderStats();
                  } catch (e) {
                    return void this.log.error(
                      "could not get video sender stats",
                      Object.assign(Object.assign({}, this.logContext), {
                        error: e,
                      }),
                    );
                  }
                  const t = new Map(e.map((e) => [e.rid, e])),
                    i = e.some((e) => "cpu" === e.qualityLimitationReason);
                  if (
                    (i !== this.isCpuConstrained &&
                      ((this.isCpuConstrained = i),
                      this.isCpuConstrained && this.emit(Vs.CpuConstrained)),
                    this.prevStats)
                  ) {
                    let e = 0;
                    (t.forEach((t, i) => {
                      var n;
                      const s =
                        null === (n = this.prevStats) || void 0 === n
                          ? void 0
                          : n.get(i);
                      e += Ca(t, s);
                    }),
                      (this._currentBitrate = e));
                  }
                  this.prevStats = t;
                })),
              (this.senderLock = new a()));
          }
          get isSimulcast() {
            return !!(
              this.sender && this.sender.getParameters().encodings.length > 1
            );
          }
          startMonitor(e) {
            var t;
            if (((this.signalClient = e), !Ur())) return;
            const i =
              null === (t = this.sender) || void 0 === t
                ? void 0
                : t.getParameters();
            (i && (this.encodings = i.encodings),
              this.monitorInterval ||
                (this.monitorInterval = setInterval(() => {
                  this.monitorSender();
                }, Ta)));
          }
          stop() {
            (this._mediaStreamTrack.getConstraints(),
              this.simulcastCodecs.forEach((e) => {
                e.mediaStreamTrack.stop();
              }),
              super.stop());
          }
          pauseUpstream() {
            const e = Object.create(null, {
              pauseUpstream: { get: () => super.pauseUpstream },
            });
            return Zi(this, void 0, void 0, function* () {
              var t, i, n, s, r;
              yield e.pauseUpstream.call(this);
              try {
                for (
                  var o, a = !0, c = $i(this.simulcastCodecs.values());
                  !(t = (o = yield c.next()).done);
                  a = !0
                ) {
                  ((s = o.value), (a = !1));
                  const e = s;
                  yield null === (r = e.sender) || void 0 === r
                    ? void 0
                    : r.replaceTrack(null);
                }
              } catch (e) {
                i = { error: e };
              } finally {
                try {
                  a || t || !(n = c.return) || (yield n.call(c));
                } finally {
                  if (i) throw i.error;
                }
              }
            });
          }
          resumeUpstream() {
            const e = Object.create(null, {
              resumeUpstream: { get: () => super.resumeUpstream },
            });
            return Zi(this, void 0, void 0, function* () {
              var t, i, n, s, r;
              yield e.resumeUpstream.call(this);
              try {
                for (
                  var o, a = !0, c = $i(this.simulcastCodecs.values());
                  !(t = (o = yield c.next()).done);
                  a = !0
                ) {
                  ((s = o.value), (a = !1));
                  const e = s;
                  yield null === (r = e.sender) || void 0 === r
                    ? void 0
                    : r.replaceTrack(e.mediaStreamTrack);
                }
              } catch (e) {
                i = { error: e };
              } finally {
                try {
                  a || t || !(n = c.return) || (yield n.call(c));
                } finally {
                  if (i) throw i.error;
                }
              }
            });
          }
          mute() {
            const e = Object.create(null, { mute: { get: () => super.mute } });
            return Zi(this, void 0, void 0, function* () {
              const t = yield this.muteLock.lock();
              try {
                return this.isMuted
                  ? (this.log.debug("Track already muted", this.logContext),
                    this)
                  : (this.source !== dr.Source.Camera ||
                      this.isUserProvided ||
                      (this.log.debug("stopping camera track", this.logContext),
                      this._mediaStreamTrack.stop()),
                    yield e.mute.call(this),
                    this);
              } finally {
                t();
              }
            });
          }
          unmute() {
            const e = Object.create(null, {
              unmute: { get: () => super.unmute },
            });
            return Zi(this, void 0, void 0, function* () {
              const t = yield this.muteLock.lock();
              try {
                return this.isMuted
                  ? (this.source !== dr.Source.Camera ||
                      this.isUserProvided ||
                      (this.log.debug(
                        "reacquiring camera track",
                        this.logContext,
                      ),
                      yield this.restartTrack()),
                    yield e.unmute.call(this),
                    this)
                  : (this.log.debug("Track already unmuted", this.logContext),
                    this);
              } finally {
                t();
              }
            });
          }
          setTrackMuted(e) {
            super.setTrackMuted(e);
            for (const t of this.simulcastCodecs.values())
              t.mediaStreamTrack.enabled = !e;
          }
          getSenderStats() {
            return Zi(this, void 0, void 0, function* () {
              var e;
              if (
                !(null === (e = this.sender) || void 0 === e
                  ? void 0
                  : e.getStats)
              )
                return [];
              const t = [],
                i = yield this.sender.getStats();
              return (
                i.forEach((e) => {
                  var n;
                  if ("outbound-rtp" === e.type) {
                    const s = {
                        type: "video",
                        streamId: e.id,
                        frameHeight: e.frameHeight,
                        frameWidth: e.frameWidth,
                        framesPerSecond: e.framesPerSecond,
                        framesSent: e.framesSent,
                        firCount: e.firCount,
                        pliCount: e.pliCount,
                        nackCount: e.nackCount,
                        packetsSent: e.packetsSent,
                        bytesSent: e.bytesSent,
                        qualityLimitationReason: e.qualityLimitationReason,
                        qualityLimitationDurations:
                          e.qualityLimitationDurations,
                        qualityLimitationResolutionChanges:
                          e.qualityLimitationResolutionChanges,
                        rid: null !== (n = e.rid) && void 0 !== n ? n : e.id,
                        retransmittedPacketsSent: e.retransmittedPacketsSent,
                        targetBitrate: e.targetBitrate,
                        timestamp: e.timestamp,
                      },
                      r = i.get(e.remoteId);
                    (r &&
                      ((s.jitter = r.jitter),
                      (s.packetsLost = r.packetsLost),
                      (s.roundTripTime = r.roundTripTime)),
                      t.push(s));
                  }
                }),
                t.sort((e, t) => {
                  var i, n;
                  return (
                    (null !== (i = t.frameWidth) && void 0 !== i ? i : 0) -
                    (null !== (n = e.frameWidth) && void 0 !== n ? n : 0)
                  );
                }),
                t
              );
            });
          }
          setPublishingQuality(e) {
            const t = [];
            for (let i = cr.LOW; i <= cr.HIGH; i += 1)
              t.push(new gi({ quality: i, enabled: i <= e }));
            (this.log.debug(
              "setting publishing quality. max quality ".concat(e),
              this.logContext,
            ),
              this.setPublishingLayers(Or(this.codec), t));
          }
          restartTrack(e) {
            return Zi(this, void 0, void 0, function* () {
              var t, i, n, s, r;
              let o;
              if (e) {
                const t = To({ video: e });
                "boolean" != typeof t.video && (o = t.video);
              }
              (yield this.restart(o), (this.isCpuConstrained = !1));
              try {
                for (
                  var a, c = !0, d = $i(this.simulcastCodecs.values());
                  !(t = (a = yield d.next()).done);
                  c = !0
                ) {
                  ((s = a.value), (c = !1));
                  const e = s;
                  e.sender &&
                    "closed" !==
                      (null === (r = e.sender.transport) || void 0 === r
                        ? void 0
                        : r.state) &&
                    ((e.mediaStreamTrack = this.mediaStreamTrack.clone()),
                    yield e.sender.replaceTrack(e.mediaStreamTrack));
                }
              } catch (e) {
                i = { error: e };
              } finally {
                try {
                  c || t || !(n = d.return) || (yield n.call(d));
                } finally {
                  if (i) throw i.error;
                }
              }
            });
          }
          setProcessor(e) {
            const t = Object.create(null, {
              setProcessor: { get: () => super.setProcessor },
            });
            return Zi(this, arguments, void 0, function (e) {
              var i = this;
              let n =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              return (function* () {
                var s, r, o, a, c, d;
                if (
                  (yield t.setProcessor.call(i, e, n),
                  null === (c = i.processor) || void 0 === c
                    ? void 0
                    : c.processedTrack)
                )
                  try {
                    for (
                      var l, u = !0, h = $i(i.simulcastCodecs.values());
                      !(s = (l = yield h.next()).done);
                      u = !0
                    ) {
                      ((a = l.value), (u = !1));
                      const e = a;
                      yield null === (d = e.sender) || void 0 === d
                        ? void 0
                        : d.replaceTrack(i.processor.processedTrack);
                    }
                  } catch (e) {
                    r = { error: e };
                  } finally {
                    try {
                      u || s || !(o = h.return) || (yield o.call(h));
                    } finally {
                      if (r) throw r.error;
                    }
                  }
              })();
            });
          }
          setDegradationPreference(e) {
            return Zi(this, void 0, void 0, function* () {
              if (((this.degradationPreference = e), this.sender))
                try {
                  this.log.debug(
                    "setting degradationPreference to ".concat(e),
                    this.logContext,
                  );
                  const t = this.sender.getParameters();
                  ((t.degradationPreference = e), this.sender.setParameters(t));
                } catch (e) {
                  this.log.warn(
                    "failed to set degradationPreference",
                    Object.assign({ error: e }, this.logContext),
                  );
                }
            });
          }
          addSimulcastTrack(e, t) {
            if (this.simulcastCodecs.has(e))
              return void this.log.error(
                "".concat(e, " already added, skipping adding simulcast codec"),
                this.logContext,
              );
            const i = {
              codec: e,
              mediaStreamTrack: this.mediaStreamTrack.clone(),
              sender: void 0,
              encodings: t,
            };
            return (this.simulcastCodecs.set(e, i), i);
          }
          setSimulcastTrackSender(e, t) {
            const i = this.simulcastCodecs.get(e);
            i &&
              ((i.sender = t),
              setTimeout(() => {
                this.subscribedCodecs &&
                  this.setPublishingCodecs(this.subscribedCodecs);
              }, 5e3));
          }
          setPublishingCodecs(e) {
            return Zi(this, void 0, void 0, function* () {
              var t, i, n, s, r, o, a;
              if (
                (this.log.debug(
                  "setting publishing codecs",
                  Object.assign(Object.assign({}, this.logContext), {
                    codecs: e,
                    currentCodec: this.codec,
                  }),
                ),
                !this.codec && e.length > 0)
              )
                return (
                  yield this.setPublishingLayers(
                    Or(e[0].codec),
                    e[0].qualities,
                  ),
                  []
                );
              this.subscribedCodecs = e;
              const c = [];
              try {
                for (
                  t = !0, i = $i(e);
                  !(s = (n = yield i.next()).done);
                  t = !0
                ) {
                  ((a = n.value), (t = !1));
                  const e = a;
                  if (this.codec && this.codec !== e.codec) {
                    const t = this.simulcastCodecs.get(e.codec);
                    if (
                      (this.log.debug(
                        "try setPublishingCodec for ".concat(e.codec),
                        Object.assign(Object.assign({}, this.logContext), {
                          simulcastCodecInfo: t,
                        }),
                      ),
                      t && t.sender)
                    )
                      t.encodings &&
                        (this.log.debug(
                          "try setPublishingLayersForSender ".concat(e.codec),
                          this.logContext,
                        ),
                        yield Va(
                          t.sender,
                          t.encodings,
                          e.qualities,
                          this.senderLock,
                          Or(e.codec),
                          this.log,
                          this.logContext,
                        ));
                    else
                      for (const t of e.qualities)
                        if (t.enabled) {
                          c.push(e.codec);
                          break;
                        }
                  } else
                    yield this.setPublishingLayers(Or(e.codec), e.qualities);
                }
              } catch (e) {
                r = { error: e };
              } finally {
                try {
                  t || s || !(o = i.return) || (yield o.call(i));
                } finally {
                  if (r) throw r.error;
                }
              }
              return c;
            });
          }
          setPublishingLayers(e, t) {
            return Zi(this, void 0, void 0, function* () {
              this.optimizeForPerformance
                ? this.log.info(
                    "skipping setPublishingLayers due to optimized publishing performance",
                    Object.assign(Object.assign({}, this.logContext), {
                      qualities: t,
                    }),
                  )
                : (this.log.debug(
                    "setting publishing layers",
                    Object.assign(Object.assign({}, this.logContext), {
                      qualities: t,
                    }),
                  ),
                  this.sender &&
                    this.encodings &&
                    (yield Va(
                      this.sender,
                      this.encodings,
                      t,
                      this.senderLock,
                      e,
                      this.log,
                      this.logContext,
                    )));
            });
          }
          prioritizePerformance() {
            return Zi(this, void 0, void 0, function* () {
              if (!this.sender) throw new Error("sender not found");
              const e = yield this.senderLock.lock();
              try {
                this.optimizeForPerformance = !0;
                const e = this.sender.getParameters();
                ((e.encodings = e.encodings.map((e, t) => {
                  var i;
                  return Object.assign(Object.assign({}, e), {
                    active: 0 === t,
                    scaleResolutionDownBy: Math.max(
                      1,
                      Math.ceil(
                        (null !==
                          (i = this.mediaStreamTrack.getSettings().height) &&
                        void 0 !== i
                          ? i
                          : 360) / 360,
                      ),
                    ),
                    scalabilityMode:
                      0 === t && Or(this.codec) ? "L1T3" : void 0,
                    maxFramerate: 0 === t ? 15 : 0,
                    maxBitrate: 0 === t ? e.maxBitrate : 0,
                  });
                })),
                  this.log.debug(
                    "setting performance optimised encodings",
                    Object.assign(Object.assign({}, this.logContext), {
                      encodings: e.encodings,
                    }),
                  ),
                  (this.encodings = e.encodings),
                  yield this.sender.setParameters(e));
              } catch (e) {
                (this.log.error(
                  "failed to set performance optimised encodings",
                  Object.assign(Object.assign({}, this.logContext), {
                    error: e,
                  }),
                ),
                  (this.optimizeForPerformance = !1));
              } finally {
                e();
              }
            });
          }
          handleAppVisibilityChanged() {
            const e = Object.create(null, {
              handleAppVisibilityChanged: {
                get: () => super.handleAppVisibilityChanged,
              },
            });
            return Zi(this, void 0, void 0, function* () {
              (yield e.handleAppVisibilityChanged.call(this),
                Lr() &&
                  this.isInBackground &&
                  this.source === dr.Source.Camera &&
                  (this._mediaStreamTrack.enabled = !1));
            });
          }
        }
        function Va(e, t, i, n, s, r, o) {
          return Zi(this, void 0, void 0, function* () {
            const a = yield n.lock();
            r.debug(
              "setPublishingLayersForSender",
              Object.assign(Object.assign({}, o), {
                sender: e,
                qualities: i,
                senderEncodings: t,
              }),
            );
            try {
              const n = e.getParameters(),
                { encodings: a } = n;
              if (!a) return;
              if (a.length !== t.length)
                return void r.warn(
                  "cannot set publishing layers, encodings mismatch",
                  Object.assign(Object.assign({}, o), {
                    encodings: a,
                    senderEncodings: t,
                  }),
                );
              let c = !1;
              (s &&
                i.some((e) => e.enabled) &&
                i.forEach((e) => (e.enabled = !0)),
                a.forEach((e, n) => {
                  var s;
                  let a = null !== (s = e.rid) && void 0 !== s ? s : "";
                  "" === a && (a = "q");
                  const d = qa(a),
                    l = i.find((e) => e.quality === d);
                  l &&
                    e.active !== l.enabled &&
                    ((c = !0),
                    (e.active = l.enabled),
                    r.debug(
                      "setting layer "
                        .concat(l.quality, " to ")
                        .concat(e.active ? "enabled" : "disabled"),
                      o,
                    ),
                    Mr() &&
                      (l.enabled
                        ? ((e.scaleResolutionDownBy =
                            t[n].scaleResolutionDownBy),
                          (e.maxBitrate = t[n].maxBitrate),
                          (e.maxFrameRate = t[n].maxFrameRate))
                        : ((e.scaleResolutionDownBy = 4),
                          (e.maxBitrate = 10),
                          (e.maxFrameRate = 2))));
                }),
                c &&
                  ((n.encodings = a),
                  r.debug(
                    "setting encodings",
                    Object.assign(Object.assign({}, o), {
                      encodings: n.encodings,
                    }),
                  ),
                  yield e.setParameters(n)));
            } finally {
              a();
            }
          });
        }
        function qa(e) {
          switch (e) {
            case "f":
            default:
              return cr.HIGH;
            case "h":
              return cr.MEDIUM;
            case "q":
              return cr.LOW;
          }
        }
        function Ka(e, t, i, n) {
          if (!i)
            return [
              new lt({
                quality: cr.HIGH,
                width: e,
                height: t,
                bitrate: 0,
                ssrc: 0,
              }),
            ];
          if (n) {
            const n = i[0].scalabilityMode,
              s = new Fa(n),
              r = [],
              o = "h" == s.suffix ? 1.5 : 2,
              a = "h" == s.suffix ? 2 : 3;
            for (let n = 0; n < s.spatial; n += 1)
              r.push(
                new lt({
                  quality: Math.min(cr.HIGH, s.spatial - 1) - n,
                  width: Math.ceil(e / Math.pow(o, n)),
                  height: Math.ceil(t / Math.pow(o, n)),
                  bitrate: i[0].maxBitrate
                    ? Math.ceil(i[0].maxBitrate / Math.pow(a, n))
                    : 0,
                  ssrc: 0,
                }),
              );
            return r;
          }
          return i.map((i) => {
            var n, s, r;
            const o =
              null !== (n = i.scaleResolutionDownBy) && void 0 !== n ? n : 1;
            let a = qa(null !== (s = i.rid) && void 0 !== s ? s : "");
            return new lt({
              quality: a,
              width: Math.ceil(e / o),
              height: Math.ceil(t / o),
              bitrate: null !== (r = i.maxBitrate) && void 0 !== r ? r : 0,
              ssrc: 0,
            });
          });
        }
        const Wa = "_lossy",
          Ga = "_reliable",
          Ha = "leave-reconnect";
        var za, Ja, Qa;
        !(function (e) {
          ((e[(e.New = 0)] = "New"),
            (e[(e.Connected = 1)] = "Connected"),
            (e[(e.Disconnected = 2)] = "Disconnected"),
            (e[(e.Reconnecting = 3)] = "Reconnecting"),
            (e[(e.Closed = 4)] = "Closed"));
        })(za || (za = {}));
        class Ya extends nn.EventEmitter {
          get isClosed() {
            return this._isClosed;
          }
          get pendingReconnect() {
            return !!this.reconnectTimeout;
          }
          constructor(e) {
            var t;
            (super(),
              (this.options = e),
              (this.rtcConfig = {}),
              (this.peerConnectionTimeout = ga.peerConnectionTimeout),
              (this.fullReconnectOnNext = !1),
              (this.latestRemoteOfferId = 0),
              (this.subscriberPrimary = !1),
              (this.pcState = za.New),
              (this._isClosed = !0),
              (this.pendingTrackResolvers = {}),
              (this.reconnectAttempts = 0),
              (this.reconnectStart = 0),
              (this.attemptingReconnect = !1),
              (this.joinAttempts = 0),
              (this.maxJoinAttempts = 1),
              (this.shouldFailNext = !1),
              (this.log = Ki),
              (this.reliableDataSequence = 1),
              (this.reliableMessageBuffer = new Ko()),
              (this.reliableReceivedState = new Wo(3e4)),
              (this.handleDataChannel = (e) =>
                Zi(this, [e], void 0, function (e) {
                  var t = this;
                  let { channel: i } = e;
                  return (function* () {
                    if (i) {
                      if (i.label === Ga) t.reliableDCSub = i;
                      else {
                        if (i.label !== Wa) return;
                        t.lossyDCSub = i;
                      }
                      (t.log.debug(
                        "on data channel ".concat(i.id, ", ").concat(i.label),
                        t.logContext,
                      ),
                        (i.onmessage = t.handleDataMessage));
                    }
                  })();
                })),
              (this.handleDataMessage = (e) =>
                Zi(this, void 0, void 0, function* () {
                  var t, i;
                  const n = yield this.dataProcessLock.lock();
                  try {
                    let n;
                    if (e.data instanceof ArrayBuffer) n = e.data;
                    else {
                      if (!(e.data instanceof Blob))
                        return void this.log.error(
                          "unsupported data type",
                          Object.assign(Object.assign({}, this.logContext), {
                            data: e.data,
                          }),
                        );
                      n = yield e.data.arrayBuffer();
                    }
                    const s = ut.fromBinary(new Uint8Array(n));
                    if (s.sequence > 0 && "" !== s.participantSid) {
                      const e = this.reliableReceivedState.get(
                        s.participantSid,
                      );
                      if (e && s.sequence <= e) return;
                      this.reliableReceivedState.set(
                        s.participantSid,
                        s.sequence,
                      );
                    }
                    "speaker" ===
                    (null === (t = s.value) || void 0 === t ? void 0 : t.case)
                      ? this.emit(
                          Bs.ActiveSpeakersUpdate,
                          s.value.value.speakers,
                        )
                      : ("user" ===
                          (null === (i = s.value) || void 0 === i
                            ? void 0
                            : i.case) &&
                          (function (e, t) {
                            const i = e.participantIdentity
                              ? e.participantIdentity
                              : t.participantIdentity;
                            ((e.participantIdentity = i),
                              (t.participantIdentity = i));
                            const n =
                              0 !== e.destinationIdentities.length
                                ? e.destinationIdentities
                                : t.destinationIdentities;
                            ((e.destinationIdentities = n),
                              (t.destinationIdentities = n));
                          })(s, s.value.value),
                        this.emit(Bs.DataPacketReceived, s));
                  } finally {
                    n();
                  }
                })),
              (this.handleDataError = (e) => {
                const t =
                  0 === e.currentTarget.maxRetransmits ? "lossy" : "reliable";
                if (e instanceof ErrorEvent && e.error) {
                  const { error: i } = e.error;
                  this.log.error(
                    "DataChannel error on ".concat(t, ": ").concat(e.message),
                    Object.assign(Object.assign({}, this.logContext), {
                      error: i,
                    }),
                  );
                } else
                  this.log.error(
                    "Unknown DataChannel error on ".concat(t),
                    Object.assign(Object.assign({}, this.logContext), {
                      event: e,
                    }),
                  );
              }),
              (this.handleBufferedAmountLow = (e) => {
                const t =
                  0 === e.currentTarget.maxRetransmits ? ht.LOSSY : ht.RELIABLE;
                this.updateAndEmitDCBufferStatus(t);
              }),
              (this.handleDisconnect = (e, t) => {
                if (this._isClosed) return;
                (this.log.warn("".concat(e, " disconnected"), this.logContext),
                  0 === this.reconnectAttempts &&
                    (this.reconnectStart = Date.now()));
                const i = Date.now() - this.reconnectStart;
                let n = this.getNextRetryDelay({
                  elapsedMs: i,
                  retryCount: this.reconnectAttempts,
                });
                null !== n
                  ? (e === Ha && (n = 0),
                    this.log.debug(
                      "reconnecting in ".concat(n, "ms"),
                      this.logContext,
                    ),
                    this.clearReconnectTimeout(),
                    this.token &&
                      this.regionUrlProvider &&
                      this.regionUrlProvider.updateToken(this.token),
                    (this.reconnectTimeout = or.setTimeout(
                      () =>
                        this.attemptReconnect(t).finally(
                          () => (this.reconnectTimeout = void 0),
                        ),
                      n,
                    )))
                  : ((e) => {
                      (this.log.warn(
                        "could not recover connection after "
                          .concat(this.reconnectAttempts, " attempts, ")
                          .concat(e, "ms. giving up"),
                        this.logContext,
                      ),
                        this.emit(Bs.Disconnected),
                        this.close());
                    })(i);
              }),
              (this.waitForRestarted = () =>
                new Promise((e, t) => {
                  this.pcState === za.Connected && e();
                  const i = () => {
                      (this.off(Bs.Disconnected, n), e());
                    },
                    n = () => {
                      (this.off(Bs.Restarted, i), t());
                    };
                  (this.once(Bs.Restarted, i), this.once(Bs.Disconnected, n));
                })),
              (this.updateAndEmitDCBufferStatus = (e) => {
                const t = this.isBufferStatusLow(e);
                void 0 !== t &&
                  t !== this.dcBufferStatus.get(e) &&
                  (this.dcBufferStatus.set(e, t),
                  this.emit(Bs.DCBufferStatusChanged, t, e));
              }),
              (this.isBufferStatusLow = (e) => {
                const t = this.dataChannelForKind(e);
                if (t)
                  return (
                    e === ht.RELIABLE &&
                      this.reliableMessageBuffer.alignBufferedAmount(
                        t.bufferedAmount,
                      ),
                    t.bufferedAmount <= t.bufferedAmountLowThreshold
                  );
              }),
              (this.handleBrowserOnLine = () => {
                this.client.currentState === Fo.RECONNECTING &&
                  (this.clearReconnectTimeout(),
                  this.attemptReconnect(Xe.RR_SIGNAL_DISCONNECTED));
              }),
              (this.log = Gi(
                null !== (t = e.loggerName) && void 0 !== t ? t : Bi.Engine,
              )),
              (this.loggerOptions = {
                loggerName: e.loggerName,
                loggerContextCb: () => this.logContext,
              }),
              (this.client = new Bo(void 0, this.loggerOptions)),
              (this.client.signalLatency = this.options.expSignalLatency),
              (this.reconnectPolicy = this.options.reconnectPolicy),
              this.registerOnLineListener(),
              (this.closingLock = new a()),
              (this.dataProcessLock = new a()),
              (this.dcBufferStatus = new Map([
                [ht.LOSSY, !0],
                [ht.RELIABLE, !0],
              ])),
              (this.client.onParticipantUpdate = (e) =>
                this.emit(Bs.ParticipantUpdate, e)),
              (this.client.onConnectionQuality = (e) =>
                this.emit(Bs.ConnectionQualityUpdate, e)),
              (this.client.onRoomUpdate = (e) => this.emit(Bs.RoomUpdate, e)),
              (this.client.onSubscriptionError = (e) =>
                this.emit(Bs.SubscriptionError, e)),
              (this.client.onSubscriptionPermissionUpdate = (e) =>
                this.emit(Bs.SubscriptionPermissionUpdate, e)),
              (this.client.onSpeakersChanged = (e) =>
                this.emit(Bs.SpeakersChanged, e)),
              (this.client.onStreamStateUpdate = (e) =>
                this.emit(Bs.StreamStateChanged, e)),
              (this.client.onRequestResponse = (e) =>
                this.emit(Bs.SignalRequestResponse, e)));
          }
          get logContext() {
            var e, t, i, n, s, r;
            return {
              room:
                null ===
                  (t =
                    null === (e = this.latestJoinResponse) || void 0 === e
                      ? void 0
                      : e.room) || void 0 === t
                  ? void 0
                  : t.name,
              roomID:
                null ===
                  (n =
                    null === (i = this.latestJoinResponse) || void 0 === i
                      ? void 0
                      : i.room) || void 0 === n
                  ? void 0
                  : n.sid,
              participant:
                null ===
                  (r =
                    null === (s = this.latestJoinResponse) || void 0 === s
                      ? void 0
                      : s.participant) || void 0 === r
                  ? void 0
                  : r.identity,
              pID: this.participantSid,
            };
          }
          join(e, t, i, n) {
            return Zi(this, void 0, void 0, function* () {
              ((this.url = e),
                (this.token = t),
                (this.signalOpts = i),
                (this.maxJoinAttempts = i.maxRetries));
              try {
                ((this.joinAttempts += 1), this.setupSignalClientCallbacks());
                const s = yield this.client.join(e, t, i, n);
                return (
                  (this._isClosed = !1),
                  (this.latestJoinResponse = s),
                  (this.subscriberPrimary = s.subscriberPrimary),
                  this.pcManager || (yield this.configure(s)),
                  (this.subscriberPrimary && !s.fastPublish) ||
                    this.negotiate(),
                  (this.clientConfiguration = s.clientConfiguration),
                  this.emit(Bs.SignalConnected, s),
                  s
                );
              } catch (s) {
                if (
                  s instanceof qs &&
                  s.reason === Ns.ServerUnreachable &&
                  (this.log.warn(
                    "Couldn't connect to server, attempt "
                      .concat(this.joinAttempts, " of ")
                      .concat(this.maxJoinAttempts),
                    this.logContext,
                  ),
                  this.joinAttempts < this.maxJoinAttempts)
                )
                  return this.join(e, t, i, n);
                throw s;
              }
            });
          }
          close() {
            return Zi(this, void 0, void 0, function* () {
              const e = yield this.closingLock.lock();
              if (this.isClosed) e();
              else
                try {
                  ((this._isClosed = !0),
                    (this.joinAttempts = 0),
                    this.emit(Bs.Closing),
                    this.removeAllListeners(),
                    this.deregisterOnLineListener(),
                    this.clearPendingReconnect(),
                    yield this.cleanupPeerConnections(),
                    yield this.cleanupClient());
                } finally {
                  e();
                }
            });
          }
          cleanupPeerConnections() {
            return Zi(this, void 0, void 0, function* () {
              var e;
              (yield null === (e = this.pcManager) || void 0 === e
                ? void 0
                : e.close(),
                (this.pcManager = void 0));
              const t = (e) => {
                e &&
                  (e.close(),
                  (e.onbufferedamountlow = null),
                  (e.onclose = null),
                  (e.onclosing = null),
                  (e.onerror = null),
                  (e.onmessage = null),
                  (e.onopen = null));
              };
              (t(this.lossyDC),
                t(this.lossyDCSub),
                t(this.reliableDC),
                t(this.reliableDCSub),
                (this.lossyDC = void 0),
                (this.lossyDCSub = void 0),
                (this.reliableDC = void 0),
                (this.reliableDCSub = void 0),
                (this.reliableMessageBuffer = new Ko()),
                (this.reliableDataSequence = 1),
                this.reliableReceivedState.clear());
            });
          }
          cleanupClient() {
            return Zi(this, void 0, void 0, function* () {
              (yield this.client.close(), this.client.resetCallbacks());
            });
          }
          addTrack(e) {
            if (this.pendingTrackResolvers[e.cid])
              throw new Ws(
                "a track with the same ID has already been published",
              );
            return new Promise((t, i) => {
              const n = setTimeout(() => {
                (delete this.pendingTrackResolvers[e.cid],
                  i(
                    new qs(
                      "publication of local track timed out, no response from server",
                      Ns.Timeout,
                    ),
                  ));
              }, 1e4);
              ((this.pendingTrackResolvers[e.cid] = {
                resolve: (e) => {
                  (clearTimeout(n), t(e));
                },
                reject: () => {
                  (clearTimeout(n),
                    i(new Error("Cancelled publication by calling unpublish")));
                },
              }),
                this.client.sendAddTrack(e));
            });
          }
          removeTrack(e) {
            if (e.track && this.pendingTrackResolvers[e.track.id]) {
              const { reject: t } = this.pendingTrackResolvers[e.track.id];
              (t && t(), delete this.pendingTrackResolvers[e.track.id]);
            }
            try {
              return (this.pcManager.removeTrack(e), !0);
            } catch (e) {
              this.log.warn(
                "failed to remove track",
                Object.assign(Object.assign({}, this.logContext), { error: e }),
              );
            }
            return !1;
          }
          updateMuteStatus(e, t) {
            this.client.sendMuteTrack(e, t);
          }
          get dataSubscriberReadyState() {
            var e;
            return null === (e = this.reliableDCSub) || void 0 === e
              ? void 0
              : e.readyState;
          }
          getConnectedServerAddress() {
            return Zi(this, void 0, void 0, function* () {
              var e;
              return null === (e = this.pcManager) || void 0 === e
                ? void 0
                : e.getConnectedAddress();
            });
          }
          setRegionUrlProvider(e) {
            this.regionUrlProvider = e;
          }
          configure(e) {
            return Zi(this, void 0, void 0, function* () {
              var t, i;
              if (this.pcManager && this.pcManager.currentState !== fa.NEW)
                return;
              this.participantSid =
                null === (t = e.participant) || void 0 === t ? void 0 : t.sid;
              const n = this.makeRTCConfiguration(e);
              var s;
              ((this.pcManager = new va(
                n,
                e.subscriberPrimary,
                this.loggerOptions,
              )),
                this.emit(
                  Bs.TransportsCreated,
                  this.pcManager.publisher,
                  this.pcManager.subscriber,
                ),
                (this.pcManager.onIceCandidate = (e, t) => {
                  this.client.sendIceCandidate(e, t);
                }),
                (this.pcManager.onPublisherOffer = (e, t) => {
                  this.client.sendOffer(e, t);
                }),
                (this.pcManager.onDataChannel = this.handleDataChannel),
                (this.pcManager.onStateChange = (t, i, n) =>
                  Zi(this, void 0, void 0, function* () {
                    if (
                      (this.log.debug(
                        "primary PC state changed ".concat(t),
                        this.logContext,
                      ),
                      ["closed", "disconnected", "failed"].includes(i) &&
                        (this.publisherConnectionPromise = void 0),
                      t === fa.CONNECTED)
                    ) {
                      const t = this.pcState === za.New;
                      ((this.pcState = za.Connected),
                        t && this.emit(Bs.Connected, e));
                    } else
                      t === fa.FAILED &&
                        this.pcState === za.Connected &&
                        ((this.pcState = za.Disconnected),
                        this.handleDisconnect(
                          "peerconnection failed",
                          "failed" === n
                            ? Xe.RR_SUBSCRIBER_FAILED
                            : Xe.RR_PUBLISHER_FAILED,
                        ));
                    const s =
                        this.client.isDisconnected ||
                        this.client.currentState === Fo.RECONNECTING,
                      r = [fa.FAILED, fa.CLOSING, fa.CLOSED].includes(t);
                    s && r && !this._isClosed && this.emit(Bs.Offline);
                  })),
                (this.pcManager.onTrack = (e) => {
                  this.emit(
                    Bs.MediaTrackAdded,
                    e.track,
                    e.streams[0],
                    e.receiver,
                  );
                }),
                (void 0 !==
                  (s =
                    null === (i = e.serverInfo) || void 0 === i
                      ? void 0
                      : i.protocol) &&
                  s > 13) ||
                  this.createDataChannels());
            });
          }
          setupSignalClientCallbacks() {
            ((this.client.onAnswer = (e, t) =>
              Zi(this, void 0, void 0, function* () {
                this.pcManager &&
                  (this.log.debug(
                    "received server answer",
                    Object.assign(Object.assign({}, this.logContext), {
                      RTCSdpType: e.type,
                    }),
                  ),
                  yield this.pcManager.setPublisherAnswer(e, t));
              })),
              (this.client.onTrickle = (e, t) => {
                this.pcManager &&
                  (this.log.debug(
                    "got ICE candidate from peer",
                    Object.assign(Object.assign({}, this.logContext), {
                      candidate: e,
                      target: t,
                    }),
                  ),
                  this.pcManager.addIceCandidate(e, t));
              }),
              (this.client.onOffer = (e, t) =>
                Zi(this, void 0, void 0, function* () {
                  if (((this.latestRemoteOfferId = t), !this.pcManager)) return;
                  const i =
                    yield this.pcManager.createSubscriberAnswerFromOffer(e, t);
                  i && this.client.sendAnswer(i, t);
                })),
              (this.client.onLocalTrackPublished = (e) => {
                var t;
                if (
                  (this.log.debug(
                    "received trackPublishedResponse",
                    Object.assign(Object.assign({}, this.logContext), {
                      cid: e.cid,
                      track:
                        null === (t = e.track) || void 0 === t ? void 0 : t.sid,
                    }),
                  ),
                  !this.pendingTrackResolvers[e.cid])
                )
                  return void this.log.error(
                    "missing track resolver for ".concat(e.cid),
                    Object.assign(Object.assign({}, this.logContext), {
                      cid: e.cid,
                    }),
                  );
                const { resolve: i } = this.pendingTrackResolvers[e.cid];
                (delete this.pendingTrackResolvers[e.cid], i(e.track));
              }),
              (this.client.onLocalTrackUnpublished = (e) => {
                this.emit(Bs.LocalTrackUnpublished, e);
              }),
              (this.client.onLocalTrackSubscribed = (e) => {
                this.emit(Bs.LocalTrackSubscribed, e);
              }),
              (this.client.onTokenRefresh = (e) => {
                this.token = e;
              }),
              (this.client.onRemoteMuteChanged = (e, t) => {
                this.emit(Bs.RemoteMute, e, t);
              }),
              (this.client.onSubscribedQualityUpdate = (e) => {
                this.emit(Bs.SubscribedQualityUpdate, e);
              }),
              (this.client.onRoomMoved = (e) => {
                var t;
                ((this.participantSid =
                  null === (t = e.participant) || void 0 === t
                    ? void 0
                    : t.sid),
                  this.latestJoinResponse &&
                    (this.latestJoinResponse.room = e.room),
                  this.emit(Bs.RoomMoved, e));
              }),
              (this.client.onClose = () => {
                this.handleDisconnect("signal", Xe.RR_SIGNAL_DISCONNECTED);
              }),
              (this.client.onLeave = (e) => {
                switch (
                  (this.log.debug(
                    "client leave request",
                    Object.assign(Object.assign({}, this.logContext), {
                      reason: null == e ? void 0 : e.reason,
                    }),
                  ),
                  e.regions &&
                    this.regionUrlProvider &&
                    (this.log.debug("updating regions", this.logContext),
                    this.regionUrlProvider.setServerReportedRegions(e.regions)),
                  e.action)
                ) {
                  case ri.DISCONNECT:
                    (this.emit(Bs.Disconnected, null == e ? void 0 : e.reason),
                      this.close());
                    break;
                  case ri.RECONNECT:
                    ((this.fullReconnectOnNext = !0),
                      this.handleDisconnect(Ha));
                    break;
                  case ri.RESUME:
                    this.handleDisconnect(Ha);
                }
              }));
          }
          makeRTCConfiguration(e) {
            var t;
            const i = Object.assign({}, this.rtcConfig);
            if (
              ((null === (t = this.signalOpts) || void 0 === t
                ? void 0
                : t.e2eeEnabled) &&
                (this.log.debug(
                  "E2EE - setting up transports with insertable streams",
                  this.logContext,
                ),
                (i.encodedInsertableStreams = !0)),
              e.iceServers && !i.iceServers)
            ) {
              const t = [];
              (e.iceServers.forEach((e) => {
                const i = { urls: e.urls };
                (e.username && (i.username = e.username),
                  e.credential && (i.credential = e.credential),
                  t.push(i));
              }),
                (i.iceServers = t));
            }
            return (
              e.clientConfiguration &&
                e.clientConfiguration.forceRelay === Qe.ENABLED &&
                (i.iceTransportPolicy = "relay"),
              (i.sdpSemantics = "unified-plan"),
              (i.continualGatheringPolicy = "gather_continually"),
              i
            );
          }
          createDataChannels() {
            this.pcManager &&
              (this.lossyDC &&
                ((this.lossyDC.onmessage = null),
                (this.lossyDC.onerror = null)),
              this.reliableDC &&
                ((this.reliableDC.onmessage = null),
                (this.reliableDC.onerror = null)),
              (this.lossyDC = this.pcManager.createPublisherDataChannel(Wa, {
                ordered: !1,
                maxRetransmits: 0,
              })),
              (this.reliableDC = this.pcManager.createPublisherDataChannel(Ga, {
                ordered: !0,
              })),
              (this.lossyDC.onmessage = this.handleDataMessage),
              (this.reliableDC.onmessage = this.handleDataMessage),
              (this.lossyDC.onerror = this.handleDataError),
              (this.reliableDC.onerror = this.handleDataError),
              (this.lossyDC.bufferedAmountLowThreshold = 65535),
              (this.reliableDC.bufferedAmountLowThreshold = 65535),
              (this.lossyDC.onbufferedamountlow = this.handleBufferedAmountLow),
              (this.reliableDC.onbufferedamountlow =
                this.handleBufferedAmountLow));
          }
          createSender(e, t, i) {
            return Zi(this, void 0, void 0, function* () {
              if (Sr())
                return yield this.createTransceiverRTCRtpSender(e, t, i);
              if (wr())
                return (
                  this.log.warn("using add-track fallback", this.logContext),
                  yield this.createRTCRtpSender(e.mediaStreamTrack)
                );
              throw new Hs("Required webRTC APIs not supported on this device");
            });
          }
          createSimulcastSender(e, t, i, n) {
            return Zi(this, void 0, void 0, function* () {
              if (Sr())
                return this.createSimulcastTransceiverSender(e, t, i, n);
              if (wr())
                return (
                  this.log.debug("using add-track fallback", this.logContext),
                  this.createRTCRtpSender(e.mediaStreamTrack)
                );
              throw new Hs("Cannot stream on this device");
            });
          }
          createTransceiverRTCRtpSender(e, t, i) {
            return Zi(this, void 0, void 0, function* () {
              if (!this.pcManager) throw new Hs("publisher is closed");
              const n = [];
              (e.mediaStream && n.push(e.mediaStream),
                uo(e) && (e.codec = t.videoCodec));
              const s = { direction: "sendonly", streams: n };
              return (
                i && (s.sendEncodings = i),
                (yield this.pcManager.addPublisherTransceiver(
                  e.mediaStreamTrack,
                  s,
                )).sender
              );
            });
          }
          createSimulcastTransceiverSender(e, t, i, n) {
            return Zi(this, void 0, void 0, function* () {
              if (!this.pcManager) throw new Hs("publisher is closed");
              const s = { direction: "sendonly" };
              n && (s.sendEncodings = n);
              const r = yield this.pcManager.addPublisherTransceiver(
                t.mediaStreamTrack,
                s,
              );
              if (i.videoCodec)
                return (
                  e.setSimulcastTrackSender(i.videoCodec, r.sender),
                  r.sender
                );
            });
          }
          createRTCRtpSender(e) {
            return Zi(this, void 0, void 0, function* () {
              if (!this.pcManager) throw new Hs("publisher is closed");
              return this.pcManager.addPublisherTrack(e);
            });
          }
          attemptReconnect(e) {
            return Zi(this, void 0, void 0, function* () {
              var t, i, n;
              if (!this._isClosed)
                if (this.attemptingReconnect)
                  Ki.warn(
                    "already attempting reconnect, returning early",
                    this.logContext,
                  );
                else {
                  ((null === (t = this.clientConfiguration) || void 0 === t
                    ? void 0
                    : t.resumeConnection) !== Qe.DISABLED &&
                    (null !==
                      (n =
                        null === (i = this.pcManager) || void 0 === i
                          ? void 0
                          : i.currentState) && void 0 !== n
                      ? n
                      : fa.NEW) !== fa.NEW) ||
                    (this.fullReconnectOnNext = !0);
                  try {
                    ((this.attemptingReconnect = !0),
                      this.fullReconnectOnNext
                        ? yield this.restartConnection()
                        : yield this.resumeConnection(e),
                      this.clearPendingReconnect(),
                      (this.fullReconnectOnNext = !1));
                  } catch (e) {
                    this.reconnectAttempts += 1;
                    let t = !0;
                    (e instanceof Hs
                      ? (this.log.debug(
                          "received unrecoverable error",
                          Object.assign(Object.assign({}, this.logContext), {
                            error: e,
                          }),
                        ),
                        (t = !1))
                      : e instanceof Xa || (this.fullReconnectOnNext = !0),
                      t
                        ? this.handleDisconnect("reconnect", Xe.RR_UNKNOWN)
                        : (this.log.info(
                            "could not recover connection after "
                              .concat(this.reconnectAttempts, " attempts, ")
                              .concat(
                                Date.now() - this.reconnectStart,
                                "ms. giving up",
                              ),
                            this.logContext,
                          ),
                          this.emit(Bs.Disconnected),
                          yield this.close()));
                  } finally {
                    this.attemptingReconnect = !1;
                  }
                }
            });
          }
          getNextRetryDelay(e) {
            try {
              return this.reconnectPolicy.nextRetryDelayInMs(e);
            } catch (e) {
              this.log.warn(
                "encountered error in reconnect policy",
                Object.assign(Object.assign({}, this.logContext), { error: e }),
              );
            }
            return null;
          }
          restartConnection(e) {
            return Zi(this, void 0, void 0, function* () {
              var t, i, n;
              try {
                if (!this.url || !this.token)
                  throw new Hs("could not reconnect, url or token not saved");
                let i;
                (this.log.info(
                  "reconnecting, attempt: ".concat(this.reconnectAttempts),
                  this.logContext,
                ),
                  this.emit(Bs.Restarting),
                  this.client.isDisconnected || (yield this.client.sendLeave()),
                  yield this.cleanupPeerConnections(),
                  yield this.cleanupClient());
                try {
                  if (!this.signalOpts)
                    throw (
                      this.log.warn(
                        "attempted connection restart, without signal options present",
                        this.logContext,
                      ),
                      new Xa()
                    );
                  i = yield this.join(
                    null != e ? e : this.url,
                    this.token,
                    this.signalOpts,
                  );
                } catch (e) {
                  if (e instanceof qs && e.reason === Ns.NotAllowed)
                    throw new Hs("could not reconnect, token might be expired");
                  throw new Xa();
                }
                if (this.shouldFailNext)
                  throw (
                    (this.shouldFailNext = !1),
                    new Error("simulated failure")
                  );
                if (
                  (this.client.setReconnected(),
                  this.emit(Bs.SignalRestarted, i),
                  yield this.waitForPCReconnected(),
                  this.client.currentState !== Fo.CONNECTED)
                )
                  throw new Xa(
                    "Signal connection got severed during reconnect",
                  );
                (null === (t = this.regionUrlProvider) ||
                  void 0 === t ||
                  t.resetAttempts(),
                  this.emit(Bs.Restarted));
              } catch (e) {
                const t = yield null === (i = this.regionUrlProvider) ||
                void 0 === i
                  ? void 0
                  : i.getNextBestRegionUrl();
                if (t) return void (yield this.restartConnection(t));
                throw (
                  null === (n = this.regionUrlProvider) ||
                    void 0 === n ||
                    n.resetAttempts(),
                  e
                );
              }
            });
          }
          resumeConnection(e) {
            return Zi(this, void 0, void 0, function* () {
              var t;
              if (!this.url || !this.token)
                throw new Hs("could not reconnect, url or token not saved");
              if (!this.pcManager)
                throw new Hs("publisher and subscriber connections unset");
              let i;
              (this.log.info(
                "resuming signal connection, attempt ".concat(
                  this.reconnectAttempts,
                ),
                this.logContext,
              ),
                this.emit(Bs.Resuming));
              try {
                (this.setupSignalClientCallbacks(),
                  (i = yield this.client.reconnect(
                    this.url,
                    this.token,
                    this.participantSid,
                    e,
                  )));
              } catch (e) {
                let t = "";
                if (
                  (e instanceof Error &&
                    ((t = e.message),
                    this.log.error(
                      e.message,
                      Object.assign(Object.assign({}, this.logContext), {
                        error: e,
                      }),
                    )),
                  e instanceof qs && e.reason === Ns.NotAllowed)
                )
                  throw new Hs("could not reconnect, token might be expired");
                if (e instanceof qs && e.reason === Ns.LeaveRequest) throw e;
                throw new Xa(t);
              }
              if ((this.emit(Bs.SignalResumed), i)) {
                const e = this.makeRTCConfiguration(i);
                (this.pcManager.updateConfiguration(e),
                  this.latestJoinResponse &&
                    (this.latestJoinResponse.serverInfo = i.serverInfo));
              } else
                this.log.warn(
                  "Did not receive reconnect response",
                  this.logContext,
                );
              if (this.shouldFailNext)
                throw (
                  (this.shouldFailNext = !1),
                  new Error("simulated failure")
                );
              if (
                (yield this.pcManager.triggerIceRestart(),
                yield this.waitForPCReconnected(),
                this.client.currentState !== Fo.CONNECTED)
              )
                throw new Xa("Signal connection got severed during reconnect");
              (this.client.setReconnected(),
                "open" ===
                  (null === (t = this.reliableDC) || void 0 === t
                    ? void 0
                    : t.readyState) &&
                  null === this.reliableDC.id &&
                  this.createDataChannels(),
                (null == i ? void 0 : i.lastMessageSeq) &&
                  this.resendReliableMessagesForResume(i.lastMessageSeq),
                this.emit(Bs.Resumed));
            });
          }
          waitForPCInitialConnection(e, t) {
            return Zi(this, void 0, void 0, function* () {
              if (!this.pcManager) throw new Hs("PC manager is closed");
              yield this.pcManager.ensurePCTransportConnection(t, e);
            });
          }
          waitForPCReconnected() {
            return Zi(this, void 0, void 0, function* () {
              ((this.pcState = za.Reconnecting),
                this.log.debug(
                  "waiting for peer connection to reconnect",
                  this.logContext,
                ));
              try {
                if ((yield Cr(2e3), !this.pcManager))
                  throw new Hs("PC manager is closed");
                (yield this.pcManager.ensurePCTransportConnection(
                  void 0,
                  this.peerConnectionTimeout,
                ),
                  (this.pcState = za.Connected));
              } catch (e) {
                throw (
                  (this.pcState = za.Disconnected),
                  new qs(
                    "could not establish PC connection, ".concat(e.message),
                    Ns.InternalError,
                  )
                );
              }
            });
          }
          publishRpcResponse(e, t, i, n) {
            return Zi(this, void 0, void 0, function* () {
              const s = new ut({
                destinationIdentities: [e],
                kind: ht.RELIABLE,
                value: {
                  case: "rpcResponse",
                  value: new Ct({
                    requestId: t,
                    value: n
                      ? { case: "error", value: n.toProto() }
                      : { case: "payload", value: null != i ? i : "" },
                  }),
                },
              });
              yield this.sendDataPacket(s, ht.RELIABLE);
            });
          }
          publishRpcAck(e, t) {
            return Zi(this, void 0, void 0, function* () {
              const i = new ut({
                destinationIdentities: [e],
                kind: ht.RELIABLE,
                value: { case: "rpcAck", value: new Tt({ requestId: t }) },
              });
              yield this.sendDataPacket(i, ht.RELIABLE);
            });
          }
          sendDataPacket(e, t) {
            return Zi(this, void 0, void 0, function* () {
              (yield this.ensurePublisherConnected(t),
                t === ht.RELIABLE &&
                  ((e.sequence = this.reliableDataSequence),
                  (this.reliableDataSequence += 1)));
              const i = e.toBinary(),
                n = this.dataChannelForKind(t);
              if (n) {
                if (
                  (t === ht.RELIABLE &&
                    this.reliableMessageBuffer.push({
                      data: i,
                      sequence: e.sequence,
                    }),
                  this.attemptingReconnect)
                )
                  return;
                n.send(i);
              }
              this.updateAndEmitDCBufferStatus(t);
            });
          }
          resendReliableMessagesForResume(e) {
            return Zi(this, void 0, void 0, function* () {
              yield this.ensurePublisherConnected(ht.RELIABLE);
              const t = this.dataChannelForKind(ht.RELIABLE);
              (t &&
                (this.reliableMessageBuffer.popToSequence(e),
                this.reliableMessageBuffer.getAll().forEach((e) => {
                  t.send(e.data);
                })),
                this.updateAndEmitDCBufferStatus(ht.RELIABLE));
            });
          }
          waitForBufferStatusLow(e) {
            return new Promise((t, i) =>
              Zi(this, void 0, void 0, function* () {
                if (this.isBufferStatusLow(e)) t();
                else {
                  const n = () => i("Engine closed");
                  for (this.once(Bs.Closing, n); !this.dcBufferStatus.get(e); )
                    yield Cr(10);
                  (this.off(Bs.Closing, n), t());
                }
              }),
            );
          }
          ensureDataTransportConnected(e) {
            return Zi(this, arguments, void 0, function (e) {
              var t = this;
              let i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.subscriberPrimary;
              return (function* () {
                var n;
                if (!t.pcManager) throw new Hs("PC manager is closed");
                const s = i ? t.pcManager.subscriber : t.pcManager.publisher,
                  r = i ? "Subscriber" : "Publisher";
                if (!s)
                  throw new qs(
                    "".concat(r, " connection not set"),
                    Ns.InternalError,
                  );
                let o = !1;
                (i ||
                  t.dataChannelForKind(e, i) ||
                  (t.createDataChannels(), (o = !0)),
                  o ||
                    i ||
                    t.pcManager.publisher.isICEConnected ||
                    "checking" ===
                      t.pcManager.publisher.getICEConnectionState() ||
                    (o = !0),
                  o && t.negotiate());
                const a = t.dataChannelForKind(e, i);
                if ("open" === (null == a ? void 0 : a.readyState)) return;
                const c = new Date().getTime() + t.peerConnectionTimeout;
                for (; new Date().getTime() < c; ) {
                  if (
                    s.isICEConnected &&
                    "open" ===
                      (null === (n = t.dataChannelForKind(e, i)) || void 0 === n
                        ? void 0
                        : n.readyState)
                  )
                    return;
                  yield Cr(50);
                }
                throw new qs(
                  "could not establish "
                    .concat(r, " connection, state: ")
                    .concat(s.getICEConnectionState()),
                  Ns.InternalError,
                );
              })();
            });
          }
          ensurePublisherConnected(e) {
            return Zi(this, void 0, void 0, function* () {
              (this.publisherConnectionPromise ||
                (this.publisherConnectionPromise =
                  this.ensureDataTransportConnected(e, !1)),
                yield this.publisherConnectionPromise);
            });
          }
          verifyTransport() {
            return (
              !!this.pcManager &&
              this.pcManager.currentState === fa.CONNECTED &&
              !(
                !this.client.ws ||
                this.client.ws.readyState === WebSocket.CLOSED
              )
            );
          }
          negotiate() {
            return Zi(this, void 0, void 0, function* () {
              return new Promise((e, t) =>
                Zi(this, void 0, void 0, function* () {
                  if (!this.pcManager)
                    return void t(new zs("PC manager is closed"));
                  (this.pcManager.requirePublisher(),
                    0 != this.pcManager.publisher.getTransceivers().length ||
                      this.lossyDC ||
                      this.reliableDC ||
                      this.createDataChannels());
                  const i = new AbortController(),
                    n = () => {
                      (i.abort(),
                        this.log.debug(
                          "engine disconnected while negotiation was ongoing",
                          this.logContext,
                        ),
                        e());
                    };
                  (this.isClosed && t("cannot negotiate on closed engine"),
                    this.on(Bs.Closing, n),
                    this.pcManager.publisher.once(oa, (e) => {
                      const t = new Map();
                      (e.forEach((e) => {
                        const i = e.codec.toLowerCase();
                        var n;
                        ((n = i), mr.includes(n) && t.set(e.payload, i));
                      }),
                        this.emit(Bs.RTPVideoMapUpdate, t));
                    }));
                  try {
                    (yield this.pcManager.negotiate(i), e());
                  } catch (e) {
                    (e instanceof zs && (this.fullReconnectOnNext = !0),
                      this.handleDisconnect("negotiation", Xe.RR_UNKNOWN),
                      t(e));
                  } finally {
                    this.off(Bs.Closing, n);
                  }
                }),
              );
            });
          }
          dataChannelForKind(e, t) {
            if (t) {
              if (e === ht.LOSSY) return this.lossyDCSub;
              if (e === ht.RELIABLE) return this.reliableDCSub;
            } else {
              if (e === ht.LOSSY) return this.lossyDC;
              if (e === ht.RELIABLE) return this.reliableDC;
            }
          }
          sendSyncState(e, t) {
            var i, n;
            if (!this.pcManager)
              return void this.log.warn(
                "sync state cannot be sent without peer connection setup",
                this.logContext,
              );
            const s = this.pcManager.subscriber.getLocalDescription(),
              r = this.pcManager.subscriber.getRemoteDescription(),
              o =
                null ===
                  (n =
                    null === (i = this.signalOpts) || void 0 === i
                      ? void 0
                      : i.autoSubscribe) ||
                void 0 === n ||
                n,
              a = new Array(),
              c = new Array();
            (e.forEach((e) => {
              (e.isDesired !== o && a.push(e.trackSid),
                e.isEnabled || c.push(e.trackSid));
            }),
              this.client.sendSyncState(
                new Ci({
                  answer: s ? qo({ sdp: s.sdp, type: s.type }) : void 0,
                  offer: r ? qo({ sdp: r.sdp, type: r.type }) : void 0,
                  subscription: new ei({
                    trackSids: a,
                    subscribe: !o,
                    participantTracks: [],
                  }),
                  publishTracks: Io(t),
                  dataChannels: this.dataChannelsInfo(),
                  trackSidsDisabled: c,
                  datachannelReceiveStates: this.reliableReceivedState.map(
                    (e, t) => new Si({ publisherSid: t, lastSeq: e }),
                  ),
                }),
              ));
          }
          failNext() {
            this.shouldFailNext = !0;
          }
          dataChannelsInfo() {
            const e = [],
              t = (t, i) => {
                void 0 !== (null == t ? void 0 : t.id) &&
                  null !== t.id &&
                  e.push(new wi({ label: t.label, id: t.id, target: i }));
              };
            return (
              t(this.dataChannelForKind(ht.LOSSY), Ft.PUBLISHER),
              t(this.dataChannelForKind(ht.RELIABLE), Ft.PUBLISHER),
              t(this.dataChannelForKind(ht.LOSSY, !0), Ft.SUBSCRIBER),
              t(this.dataChannelForKind(ht.RELIABLE, !0), Ft.SUBSCRIBER),
              e
            );
          }
          clearReconnectTimeout() {
            this.reconnectTimeout && or.clearTimeout(this.reconnectTimeout);
          }
          clearPendingReconnect() {
            (this.clearReconnectTimeout(), (this.reconnectAttempts = 0));
          }
          registerOnLineListener() {
            Ur() && window.addEventListener("online", this.handleBrowserOnLine);
          }
          deregisterOnLineListener() {
            Ur() &&
              window.removeEventListener("online", this.handleBrowserOnLine);
          }
        }
        class Xa extends Error {}
        class Za {
          constructor(e, t) {
            ((this.lastUpdateAt = 0),
              (this.settingsCacheTime = 3e3),
              (this.attemptedRegions = []),
              (this.serverUrl = new URL(e)),
              (this.token = t));
          }
          updateToken(e) {
            this.token = e;
          }
          isCloud() {
            return Fr(this.serverUrl);
          }
          getServerUrl() {
            return this.serverUrl;
          }
          getNextBestRegionUrl(e) {
            return Zi(this, void 0, void 0, function* () {
              if (!this.isCloud())
                throw Error(
                  "region availability is only supported for LiveKit Cloud domains",
                );
              (!this.regionSettings ||
                Date.now() - this.lastUpdateAt > this.settingsCacheTime) &&
                (this.regionSettings = yield this.fetchRegionSettings(e));
              const t = this.regionSettings.regions.filter(
                (e) => !this.attemptedRegions.find((t) => t.url === e.url),
              );
              if (t.length > 0) {
                const e = t[0];
                return (
                  this.attemptedRegions.push(e),
                  Ki.debug("next region: ".concat(e.region)),
                  e.url
                );
              }
              return null;
            });
          }
          resetAttempts() {
            this.attemptedRegions = [];
          }
          fetchRegionSettings(e) {
            return Zi(this, void 0, void 0, function* () {
              const t = yield fetch(
                "".concat(
                  ((i = this.serverUrl),
                  ""
                    .concat(i.protocol.replace("ws", "http"), "//")
                    .concat(i.host, "/settings")),
                  "/regions",
                ),
                {
                  headers: { authorization: "Bearer ".concat(this.token) },
                  signal: e,
                },
              );
              var i;
              if (t.ok) {
                const e = yield t.json();
                return ((this.lastUpdateAt = Date.now()), e);
              }
              throw new qs(
                "Could not fetch region settings: ".concat(t.statusText),
                401 === t.status ? Ns.NotAllowed : Ns.InternalError,
                t.status,
              );
            });
          }
          setServerReportedRegions(e) {
            ((this.regionSettings = e), (this.lastUpdateAt = Date.now()));
          }
        }
        class $a {
          get info() {
            return this._info;
          }
          constructor(e, t, i) {
            ((this.reader = t),
              (this.totalByteSize = i),
              (this._info = e),
              (this.bytesReceived = 0));
          }
        }
        class ec extends $a {
          handleChunkReceived(e) {
            var t;
            this.bytesReceived += e.content.byteLength;
            const i = this.totalByteSize
              ? this.bytesReceived / this.totalByteSize
              : void 0;
            null === (t = this.onProgress) || void 0 === t || t.call(this, i);
          }
          [Symbol.asyncIterator]() {
            const e = this.reader.getReader();
            return {
              next: () =>
                Zi(this, void 0, void 0, function* () {
                  try {
                    const { done: t, value: i } = yield e.read();
                    return t
                      ? { done: !0, value: void 0 }
                      : (this.handleChunkReceived(i),
                        { done: !1, value: i.content });
                  } catch (e) {
                    return { done: !0, value: void 0 };
                  }
                }),
              return() {
                return Zi(this, void 0, void 0, function* () {
                  return (e.releaseLock(), { done: !0, value: void 0 });
                });
              },
            };
          }
          readAll() {
            return Zi(this, void 0, void 0, function* () {
              var e, t, i, n;
              let s = new Set();
              try {
                for (
                  var r, o = !0, a = $i(this);
                  !(e = (r = yield a.next()).done);
                  o = !0
                ) {
                  ((n = r.value), (o = !1));
                  const e = n;
                  s.add(e);
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  o || e || !(i = a.return) || (yield i.call(a));
                } finally {
                  if (t) throw t.error;
                }
              }
              return Array.from(s);
            });
          }
        }
        class tc extends $a {
          constructor(e, t, i) {
            (super(e, t, i), (this.receivedChunks = new Map()));
          }
          handleChunkReceived(e) {
            var t;
            const i = oo(e.chunkIndex),
              n = this.receivedChunks.get(i);
            if (n && n.version > e.version) return;
            (this.receivedChunks.set(i, e),
              (this.bytesReceived += e.content.byteLength));
            const s = this.totalByteSize
              ? this.bytesReceived / this.totalByteSize
              : void 0;
            null === (t = this.onProgress) || void 0 === t || t.call(this, s);
          }
          [Symbol.asyncIterator]() {
            const e = this.reader.getReader(),
              t = new TextDecoder();
            return {
              next: () =>
                Zi(this, void 0, void 0, function* () {
                  try {
                    const { done: i, value: n } = yield e.read();
                    return i
                      ? { done: !0, value: void 0 }
                      : (this.handleChunkReceived(n),
                        { done: !1, value: t.decode(n.content) });
                  } catch (e) {
                    return { done: !0, value: void 0 };
                  }
                }),
              return() {
                return Zi(this, void 0, void 0, function* () {
                  return (e.releaseLock(), { done: !0, value: void 0 });
                });
              },
            };
          }
          readAll() {
            return Zi(this, void 0, void 0, function* () {
              var e, t, i, n;
              let s = "";
              try {
                for (
                  var r, o = !0, a = $i(this);
                  !(e = (r = yield a.next()).done);
                  o = !0
                )
                  ((n = r.value), (o = !1), (s += n));
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  o || e || !(i = a.return) || (yield i.call(a));
                } finally {
                  if (t) throw t.error;
                }
              }
              return s;
            });
          }
        }
        class ic {
          constructor(e, t, i) {
            ((this.writableStream = e),
              (this.defaultWriter = e.getWriter()),
              (this.onClose = i),
              (this.info = t));
          }
          write(e) {
            return this.defaultWriter.write(e);
          }
          close() {
            return Zi(this, void 0, void 0, function* () {
              var e;
              (yield this.defaultWriter.close(),
                this.defaultWriter.releaseLock(),
                null === (e = this.onClose) || void 0 === e || e.call(this));
            });
          }
        }
        class nc extends ic {}
        class sc extends ic {}
        class rc extends dr {
          constructor(e, t, i, n, s) {
            (super(e, i, s), (this.sid = t), (this.receiver = n));
          }
          get isLocal() {
            return !1;
          }
          setMuted(e) {
            this.isMuted !== e &&
              ((this.isMuted = e),
              (this._mediaStreamTrack.enabled = !e),
              this.emit(e ? Vs.Muted : Vs.Unmuted, this));
          }
          setMediaStream(e) {
            this.mediaStream = e;
            const t = (i) => {
              i.track === this._mediaStreamTrack &&
                (e.removeEventListener("removetrack", t),
                this.receiver &&
                  "playoutDelayHint" in this.receiver &&
                  (this.receiver.playoutDelayHint = void 0),
                (this.receiver = void 0),
                (this._currentBitrate = 0),
                this.emit(Vs.Ended, this));
            };
            e.addEventListener("removetrack", t);
          }
          start() {
            (this.startMonitor(), super.enable());
          }
          stop() {
            (this.stopMonitor(), super.disable());
          }
          getRTCStatsReport() {
            return Zi(this, void 0, void 0, function* () {
              var e;
              if (
                null === (e = this.receiver) || void 0 === e
                  ? void 0
                  : e.getStats
              )
                return yield this.receiver.getStats();
            });
          }
          setPlayoutDelay(e) {
            this.receiver
              ? "playoutDelayHint" in this.receiver
                ? (this.receiver.playoutDelayHint = e)
                : this.log.warn("Playout delay not supported in this browser")
              : this.log.warn("Cannot set playout delay, track already ended");
          }
          getPlayoutDelay() {
            if (this.receiver) {
              if ("playoutDelayHint" in this.receiver)
                return this.receiver.playoutDelayHint;
              this.log.warn("Playout delay not supported in this browser");
            } else
              this.log.warn("Cannot get playout delay, track already ended");
            return 0;
          }
          startMonitor() {
            (this.monitorInterval ||
              (this.monitorInterval = setInterval(
                () => this.monitorReceiver(),
                Ta,
              )),
              "undefined" != typeof RTCRtpReceiver &&
                "getSynchronizationSources" in RTCRtpReceiver &&
                this.registerTimeSyncUpdate());
          }
          registerTimeSyncUpdate() {
            const e = () => {
              var t;
              this.timeSyncHandle = requestAnimationFrame(() => e());
              const i =
                null === (t = this.receiver) || void 0 === t
                  ? void 0
                  : t.getSynchronizationSources()[0];
              if (i) {
                const { timestamp: e, rtpTimestamp: t } = i;
                t &&
                  this.rtpTimestamp !== t &&
                  (this.emit(Vs.TimeSyncUpdate, {
                    timestamp: e,
                    rtpTimestamp: t,
                  }),
                  (this.rtpTimestamp = t));
              }
            };
            e();
          }
        }
        class oc extends rc {
          constructor(e, t, i, n, s, r) {
            (super(e, t, dr.Kind.Audio, i, r),
              (this.monitorReceiver = () =>
                Zi(this, void 0, void 0, function* () {
                  if (!this.receiver) return void (this._currentBitrate = 0);
                  const e = yield this.getReceiverStats();
                  (e &&
                    this.prevStats &&
                    this.receiver &&
                    (this._currentBitrate = Ca(e, this.prevStats)),
                    (this.prevStats = e));
                })),
              (this.audioContext = n),
              (this.webAudioPluginNodes = []),
              s && (this.sinkId = s.deviceId));
          }
          setVolume(e) {
            var t;
            for (const i of this.attachedElements)
              this.audioContext
                ? null === (t = this.gainNode) ||
                  void 0 === t ||
                  t.gain.setTargetAtTime(e, 0, 0.1)
                : (i.volume = e);
            (jr() && this._mediaStreamTrack._setVolume(e),
              (this.elementVolume = e));
          }
          getVolume() {
            if (this.elementVolume) return this.elementVolume;
            if (jr()) return 1;
            let e = 0;
            return (
              this.attachedElements.forEach((t) => {
                t.volume > e && (e = t.volume);
              }),
              e
            );
          }
          setSinkId(e) {
            return Zi(this, void 0, void 0, function* () {
              ((this.sinkId = e),
                yield Promise.all(
                  this.attachedElements.map((t) => {
                    if (Dr(t)) return t.setSinkId(e);
                  }),
                ));
            });
          }
          attach(e) {
            const t = 0 === this.attachedElements.length;
            return (
              e ? super.attach(e) : (e = super.attach()),
              this.sinkId &&
                Dr(e) &&
                e.setSinkId(this.sinkId).catch((e) => {
                  this.log.error(
                    "Failed to set sink id on remote audio track",
                    e,
                    this.logContext,
                  );
                }),
              this.audioContext &&
                t &&
                (this.log.debug("using audio context mapping", this.logContext),
                this.connectWebAudio(this.audioContext, e),
                (e.volume = 0),
                (e.muted = !0)),
              this.elementVolume && this.setVolume(this.elementVolume),
              e
            );
          }
          detach(e) {
            let t;
            return (
              e
                ? ((t = super.detach(e)),
                  this.audioContext &&
                    (this.attachedElements.length > 0
                      ? this.connectWebAudio(
                          this.audioContext,
                          this.attachedElements[0],
                        )
                      : this.disconnectWebAudio()))
                : ((t = super.detach()), this.disconnectWebAudio()),
              t
            );
          }
          setAudioContext(e) {
            ((this.audioContext = e),
              e && this.attachedElements.length > 0
                ? this.connectWebAudio(e, this.attachedElements[0])
                : e || this.disconnectWebAudio());
          }
          setWebAudioPlugins(e) {
            ((this.webAudioPluginNodes = e),
              this.attachedElements.length > 0 &&
                this.audioContext &&
                this.connectWebAudio(
                  this.audioContext,
                  this.attachedElements[0],
                ));
          }
          connectWebAudio(e, t) {
            (this.disconnectWebAudio(),
              (this.sourceNode = e.createMediaStreamSource(t.srcObject)));
            let i = this.sourceNode;
            (this.webAudioPluginNodes.forEach((e) => {
              (i.connect(e), (i = e));
            }),
              (this.gainNode = e.createGain()),
              i.connect(this.gainNode),
              this.gainNode.connect(e.destination),
              this.elementVolume &&
                this.gainNode.gain.setTargetAtTime(this.elementVolume, 0, 0.1),
              "running" !== e.state &&
                e
                  .resume()
                  .then(() => {
                    "running" !== e.state &&
                      this.emit(
                        Vs.AudioPlaybackFailed,
                        new Error(
                          "Audio Context couldn't be started automatically",
                        ),
                      );
                  })
                  .catch((e) => {
                    this.emit(Vs.AudioPlaybackFailed, e);
                  }));
          }
          disconnectWebAudio() {
            var e, t;
            (null === (e = this.gainNode) || void 0 === e || e.disconnect(),
              null === (t = this.sourceNode) || void 0 === t || t.disconnect(),
              (this.gainNode = void 0),
              (this.sourceNode = void 0));
          }
          getReceiverStats() {
            return Zi(this, void 0, void 0, function* () {
              if (!this.receiver || !this.receiver.getStats) return;
              let e;
              return (
                (yield this.receiver.getStats()).forEach((t) => {
                  "inbound-rtp" === t.type &&
                    (e = {
                      type: "audio",
                      streamId: t.id,
                      timestamp: t.timestamp,
                      jitter: t.jitter,
                      bytesReceived: t.bytesReceived,
                      concealedSamples: t.concealedSamples,
                      concealmentEvents: t.concealmentEvents,
                      silentConcealedSamples: t.silentConcealedSamples,
                      silentConcealmentEvents: t.silentConcealmentEvents,
                      totalAudioEnergy: t.totalAudioEnergy,
                      totalSamplesDuration: t.totalSamplesDuration,
                    });
                }),
                e
              );
            });
          }
        }
        class ac extends rc {
          constructor(e, t, i, n, s) {
            (super(e, t, dr.Kind.Video, i, s),
              (this.elementInfos = []),
              (this.monitorReceiver = () =>
                Zi(this, void 0, void 0, function* () {
                  if (!this.receiver) return void (this._currentBitrate = 0);
                  const e = yield this.getReceiverStats();
                  (e &&
                    this.prevStats &&
                    this.receiver &&
                    (this._currentBitrate = Ca(e, this.prevStats)),
                    (this.prevStats = e));
                })),
              (this.debouncedHandleResize = na(() => {
                this.updateDimensions();
              }, 100)),
              (this.adaptiveStreamSettings = n));
          }
          get isAdaptiveStream() {
            return void 0 !== this.adaptiveStreamSettings;
          }
          get mediaStreamTrack() {
            return this._mediaStreamTrack;
          }
          setMuted(e) {
            (super.setMuted(e),
              this.attachedElements.forEach((t) => {
                e
                  ? ur(this._mediaStreamTrack, t)
                  : lr(this._mediaStreamTrack, t);
              }));
          }
          attach(e) {
            if (
              (e ? super.attach(e) : (e = super.attach()),
              this.adaptiveStreamSettings &&
                void 0 === this.elementInfos.find((t) => t.element === e))
            ) {
              const t = new cc(e);
              this.observeElementInfo(t);
            }
            return e;
          }
          observeElementInfo(e) {
            this.adaptiveStreamSettings &&
            void 0 === this.elementInfos.find((t) => t === e)
              ? ((e.handleResize = () => {
                  this.debouncedHandleResize();
                }),
                (e.handleVisibilityChanged = () => {
                  this.updateVisibility();
                }),
                this.elementInfos.push(e),
                e.observe(),
                this.debouncedHandleResize(),
                this.updateVisibility())
              : this.log.warn(
                  "visibility resize observer not triggered",
                  this.logContext,
                );
          }
          stopObservingElementInfo(e) {
            if (!this.isAdaptiveStream)
              return void this.log.warn(
                "stopObservingElementInfo ignored",
                this.logContext,
              );
            const t = this.elementInfos.filter((t) => t === e);
            for (const e of t) e.stopObserving();
            ((this.elementInfos = this.elementInfos.filter((t) => t !== e)),
              this.updateVisibility(),
              this.debouncedHandleResize());
          }
          detach(e) {
            let t = [];
            if (e) return (this.stopObservingElement(e), super.detach(e));
            t = super.detach();
            for (const e of t) this.stopObservingElement(e);
            return t;
          }
          getDecoderImplementation() {
            var e;
            return null === (e = this.prevStats) || void 0 === e
              ? void 0
              : e.decoderImplementation;
          }
          getReceiverStats() {
            return Zi(this, void 0, void 0, function* () {
              if (!this.receiver || !this.receiver.getStats) return;
              const e = yield this.receiver.getStats();
              let t,
                i = "",
                n = new Map();
              return (
                e.forEach((e) => {
                  "inbound-rtp" === e.type
                    ? ((i = e.codecId),
                      (t = {
                        type: "video",
                        streamId: e.id,
                        framesDecoded: e.framesDecoded,
                        framesDropped: e.framesDropped,
                        framesReceived: e.framesReceived,
                        packetsReceived: e.packetsReceived,
                        packetsLost: e.packetsLost,
                        frameWidth: e.frameWidth,
                        frameHeight: e.frameHeight,
                        pliCount: e.pliCount,
                        firCount: e.firCount,
                        nackCount: e.nackCount,
                        jitter: e.jitter,
                        timestamp: e.timestamp,
                        bytesReceived: e.bytesReceived,
                        decoderImplementation: e.decoderImplementation,
                      }))
                    : "codec" === e.type && n.set(e.id, e);
                }),
                t && "" !== i && n.get(i) && (t.mimeType = n.get(i).mimeType),
                t
              );
            });
          }
          stopObservingElement(e) {
            const t = this.elementInfos.filter((t) => t.element === e);
            for (const e of t) this.stopObservingElementInfo(e);
          }
          handleAppVisibilityChanged() {
            const e = Object.create(null, {
              handleAppVisibilityChanged: {
                get: () => super.handleAppVisibilityChanged,
              },
            });
            return Zi(this, void 0, void 0, function* () {
              (yield e.handleAppVisibilityChanged.call(this),
                this.isAdaptiveStream && this.updateVisibility());
            });
          }
          updateVisibility() {
            var e, t;
            const i = this.elementInfos.reduce(
                (e, t) => Math.max(e, t.visibilityChangedAt || 0),
                0,
              ),
              n =
                !(
                  null !==
                    (t =
                      null === (e = this.adaptiveStreamSettings) || void 0 === e
                        ? void 0
                        : e.pauseVideoInBackground) &&
                  void 0 !== t &&
                  !t
                ) && this.isInBackground,
              s = this.elementInfos.some((e) => e.pictureInPicture),
              r = (this.elementInfos.some((e) => e.visible) && !n) || s;
            this.lastVisible !== r &&
              (!r && Date.now() - i < 100
                ? or.setTimeout(() => {
                    this.updateVisibility();
                  }, 100)
                : ((this.lastVisible = r),
                  this.emit(Vs.VisibilityChanged, r, this)));
          }
          updateDimensions() {
            var e, t;
            let i = 0,
              n = 0;
            const s = this.getPixelDensity();
            for (const e of this.elementInfos) {
              const t = e.width() * s,
                r = e.height() * s;
              t + r > i + n && ((i = t), (n = r));
            }
            ((null === (e = this.lastDimensions) || void 0 === e
              ? void 0
              : e.width) === i &&
              (null === (t = this.lastDimensions) || void 0 === t
                ? void 0
                : t.height) === n) ||
              ((this.lastDimensions = { width: i, height: n }),
              this.emit(Vs.VideoDimensionsChanged, this.lastDimensions, this));
          }
          getPixelDensity() {
            var e;
            const t =
              null === (e = this.adaptiveStreamSettings) || void 0 === e
                ? void 0
                : e.pixelDensity;
            return "screen" === t ? qr() : t || (qr() > 2 ? 2 : 1);
          }
        }
        class cc {
          get visible() {
            return this.isPiP || this.isIntersecting;
          }
          get pictureInPicture() {
            return this.isPiP;
          }
          constructor(e, t) {
            ((this.onVisibilityChanged = (e) => {
              var t;
              const { target: i, isIntersecting: n } = e;
              i === this.element &&
                ((this.isIntersecting = n),
                (this.isPiP = dc(this.element)),
                (this.visibilityChangedAt = Date.now()),
                null === (t = this.handleVisibilityChanged) ||
                  void 0 === t ||
                  t.call(this));
            }),
              (this.onEnterPiP = () => {
                var e, t, i;
                (null ===
                  (t =
                    null === (e = window.documentPictureInPicture) ||
                    void 0 === e
                      ? void 0
                      : e.window) ||
                  void 0 === t ||
                  t.addEventListener("pagehide", this.onLeavePiP),
                  (this.isPiP = dc(this.element)),
                  null === (i = this.handleVisibilityChanged) ||
                    void 0 === i ||
                    i.call(this));
              }),
              (this.onLeavePiP = () => {
                var e;
                ((this.isPiP = dc(this.element)),
                  null === (e = this.handleVisibilityChanged) ||
                    void 0 === e ||
                    e.call(this));
              }),
              (this.element = e),
              (this.isIntersecting = null != t ? t : lc(e)),
              (this.isPiP = Ur() && dc(e)),
              (this.visibilityChangedAt = 0));
          }
          width() {
            return this.element.clientWidth;
          }
          height() {
            return this.element.clientHeight;
          }
          observe() {
            var e, t, i;
            ((this.isIntersecting = lc(this.element)),
              (this.isPiP = dc(this.element)),
              (this.element.handleResize = () => {
                var e;
                null === (e = this.handleResize) ||
                  void 0 === e ||
                  e.call(this);
              }),
              (this.element.handleVisibilityChanged = this.onVisibilityChanged),
              Qr().observe(this.element),
              zr().observe(this.element),
              this.element.addEventListener(
                "enterpictureinpicture",
                this.onEnterPiP,
              ),
              this.element.addEventListener(
                "leavepictureinpicture",
                this.onLeavePiP,
              ),
              null === (e = window.documentPictureInPicture) ||
                void 0 === e ||
                e.addEventListener("enter", this.onEnterPiP),
              null ===
                (i =
                  null === (t = window.documentPictureInPicture) || void 0 === t
                    ? void 0
                    : t.window) ||
                void 0 === i ||
                i.addEventListener("pagehide", this.onLeavePiP));
          }
          stopObserving() {
            var e, t, i, n, s;
            (null === (e = Qr()) || void 0 === e || e.unobserve(this.element),
              null === (t = zr()) || void 0 === t || t.unobserve(this.element),
              this.element.removeEventListener(
                "enterpictureinpicture",
                this.onEnterPiP,
              ),
              this.element.removeEventListener(
                "leavepictureinpicture",
                this.onLeavePiP,
              ),
              null === (i = window.documentPictureInPicture) ||
                void 0 === i ||
                i.removeEventListener("enter", this.onEnterPiP),
              null ===
                (s =
                  null === (n = window.documentPictureInPicture) || void 0 === n
                    ? void 0
                    : n.window) ||
                void 0 === s ||
                s.removeEventListener("pagehide", this.onLeavePiP));
          }
        }
        function dc(e) {
          var t, i;
          return (
            document.pictureInPictureElement === e ||
            (!!(null === (t = window.documentPictureInPicture) || void 0 === t
              ? void 0
              : t.window) &&
              lc(
                e,
                null === (i = window.documentPictureInPicture) || void 0 === i
                  ? void 0
                  : i.window,
              ))
          );
        }
        function lc(e, t) {
          const i = t || window;
          let n = e.offsetTop,
            s = e.offsetLeft;
          const r = e.offsetWidth,
            o = e.offsetHeight,
            { hidden: a } = e,
            { display: c } = getComputedStyle(e);
          for (; e.offsetParent; )
            ((n += (e = e.offsetParent).offsetTop), (s += e.offsetLeft));
          return (
            n < i.pageYOffset + i.innerHeight &&
            s < i.pageXOffset + i.innerWidth &&
            n + o > i.pageYOffset &&
            s + r > i.pageXOffset &&
            !a &&
            "none" !== c
          );
        }
        class uc extends nn.EventEmitter {
          constructor(e, t, i, n) {
            var s;
            (super(),
              (this.metadataMuted = !1),
              (this.encryption = at.NONE),
              (this.log = Ki),
              (this.handleMuted = () => {
                this.emit(Vs.Muted);
              }),
              (this.handleUnmuted = () => {
                this.emit(Vs.Unmuted);
              }),
              (this.log = Gi(
                null !== (s = null == n ? void 0 : n.loggerName) && void 0 !== s
                  ? s
                  : Bi.Publication,
              )),
              (this.loggerContextCb = this.loggerContextCb),
              this.setMaxListeners(100),
              (this.kind = e),
              (this.trackSid = t),
              (this.trackName = i),
              (this.source = dr.Source.Unknown));
          }
          setTrack(e) {
            (this.track &&
              (this.track.off(Vs.Muted, this.handleMuted),
              this.track.off(Vs.Unmuted, this.handleUnmuted)),
              (this.track = e),
              e &&
                (e.on(Vs.Muted, this.handleMuted),
                e.on(Vs.Unmuted, this.handleUnmuted)));
          }
          get logContext() {
            var e;
            return Object.assign(
              Object.assign(
                {},
                null === (e = this.loggerContextCb) || void 0 === e
                  ? void 0
                  : e.call(this),
              ),
              Oo(this),
            );
          }
          get isMuted() {
            return this.metadataMuted;
          }
          get isEnabled() {
            return !0;
          }
          get isSubscribed() {
            return void 0 !== this.track;
          }
          get isEncrypted() {
            return this.encryption !== at.NONE;
          }
          get audioTrack() {
            if (lo(this.track)) return this.track;
          }
          get videoTrack() {
            if (uo(this.track)) return this.track;
          }
          updateInfo(e) {
            ((this.trackSid = e.sid),
              (this.trackName = e.name),
              (this.source = dr.sourceFromProto(e.source)),
              (this.mimeType = e.mimeType),
              this.kind === dr.Kind.Video &&
                e.width > 0 &&
                ((this.dimensions = { width: e.width, height: e.height }),
                (this.simulcasted = e.simulcast)),
              (this.encryption = e.encryption),
              (this.trackInfo = e),
              this.log.debug(
                "update publication info",
                Object.assign(Object.assign({}, this.logContext), { info: e }),
              ));
          }
        }
        !(function (e) {
          var t, i;
          (((t = e.SubscriptionStatus || (e.SubscriptionStatus = {})).Desired =
            "desired"),
            (t.Subscribed = "subscribed"),
            (t.Unsubscribed = "unsubscribed"),
            ((i = e.PermissionStatus || (e.PermissionStatus = {})).Allowed =
              "allowed"),
            (i.NotAllowed = "not_allowed"));
        })(uc || (uc = {}));
        class hc extends uc {
          get isUpstreamPaused() {
            var e;
            return null === (e = this.track) || void 0 === e
              ? void 0
              : e.isUpstreamPaused;
          }
          constructor(e, t, i, n) {
            (super(e, t.sid, t.name, n),
              (this.track = void 0),
              (this.handleTrackEnded = () => {
                this.emit(Vs.Ended);
              }),
              (this.handleCpuConstrained = () => {
                this.track &&
                  uo(this.track) &&
                  this.emit(Vs.CpuConstrained, this.track);
              }),
              this.updateInfo(t),
              this.setTrack(i));
          }
          setTrack(e) {
            (this.track &&
              (this.track.off(Vs.Ended, this.handleTrackEnded),
              this.track.off(Vs.CpuConstrained, this.handleCpuConstrained)),
              super.setTrack(e),
              e &&
                (e.on(Vs.Ended, this.handleTrackEnded),
                e.on(Vs.CpuConstrained, this.handleCpuConstrained)));
          }
          get isMuted() {
            return this.track ? this.track.isMuted : super.isMuted;
          }
          get audioTrack() {
            return super.audioTrack;
          }
          get videoTrack() {
            return super.videoTrack;
          }
          get isLocal() {
            return !0;
          }
          mute() {
            return Zi(this, void 0, void 0, function* () {
              var e;
              return null === (e = this.track) || void 0 === e
                ? void 0
                : e.mute();
            });
          }
          unmute() {
            return Zi(this, void 0, void 0, function* () {
              var e;
              return null === (e = this.track) || void 0 === e
                ? void 0
                : e.unmute();
            });
          }
          pauseUpstream() {
            return Zi(this, void 0, void 0, function* () {
              var e;
              yield null === (e = this.track) || void 0 === e
                ? void 0
                : e.pauseUpstream();
            });
          }
          resumeUpstream() {
            return Zi(this, void 0, void 0, function* () {
              var e;
              yield null === (e = this.track) || void 0 === e
                ? void 0
                : e.resumeUpstream();
            });
          }
          getTrackFeatures() {
            var e;
            if (lo(this.track)) {
              const t = this.track.getSourceTrackSettings(),
                i = new Set();
              return (
                t.autoGainControl && i.add($e.TF_AUTO_GAIN_CONTROL),
                t.echoCancellation && i.add($e.TF_ECHO_CANCELLATION),
                t.noiseSuppression && i.add($e.TF_NOISE_SUPPRESSION),
                t.channelCount && t.channelCount > 1 && i.add($e.TF_STEREO),
                (null === (e = this.options) || void 0 === e
                  ? void 0
                  : e.dtx) || i.add($e.TF_NO_DTX),
                this.track.enhancedNoiseCancellation &&
                  i.add($e.TF_ENHANCED_NOISE_CANCELLATION),
                Array.from(i.values())
              );
            }
            return [];
          }
        }
        function pc(e, t) {
          return Zi(this, void 0, void 0, function* () {
            null != e || (e = {});
            let i = !1;
            const {
              audioProcessor: n,
              videoProcessor: s,
              optionsWithoutProcessor: r,
            } = Do(e);
            let o = r.audio,
              a = r.video;
            if (
              (n && "object" == typeof r.audio && (r.audio.processor = n),
              s && "object" == typeof r.video && (r.video.processor = s),
              e.audio &&
                "object" == typeof r.audio &&
                "string" == typeof r.audio.deviceId)
            ) {
              const e = r.audio.deviceId;
              ((r.audio.deviceId = { exact: e }),
                (i = !0),
                (o = Object.assign(Object.assign({}, r.audio), {
                  deviceId: { ideal: e },
                })));
            }
            if (
              r.video &&
              "object" == typeof r.video &&
              "string" == typeof r.video.deviceId
            ) {
              const e = r.video.deviceId;
              ((r.video.deviceId = { exact: e }),
                (i = !0),
                (a = Object.assign(Object.assign({}, r.video), {
                  deviceId: { ideal: e },
                })));
            }
            ((!0 === r.audio ||
              ("object" == typeof r.audio && !r.audio.deviceId)) &&
              (r.audio = { deviceId: "default" }),
              !0 === r.video
                ? (r.video = { deviceId: "default" })
                : "object" != typeof r.video ||
                  r.video.deviceId ||
                  (r.video.deviceId = "default"));
            const c = ko(r, ha, pa),
              d = To(c),
              l = navigator.mediaDevices.getUserMedia(d);
            (r.audio &&
              (Ao.userMediaPromiseMap.set("audioinput", l),
              l.catch(() => Ao.userMediaPromiseMap.delete("audioinput"))),
              r.video &&
                (Ao.userMediaPromiseMap.set("videoinput", l),
                l.catch(() => Ao.userMediaPromiseMap.delete("videoinput"))));
            try {
              const e = yield l;
              return yield Promise.all(
                e.getTracks().map((i) =>
                  Zi(this, void 0, void 0, function* () {
                    const r = "audio" === i.kind;
                    let o,
                      a = r ? c.audio : c.video;
                    ("boolean" != typeof a && a) || (a = {});
                    const l = r ? d.audio : d.video;
                    "boolean" != typeof l && (o = l);
                    const u = i.getSettings().deviceId;
                    (null == o ? void 0 : o.deviceId) && no(o.deviceId) !== u
                      ? (o.deviceId = u)
                      : o || (o = { deviceId: u });
                    const h = (function (e, t, i) {
                      switch (e.kind) {
                        case "audio":
                          return new Ra(e, t, !1, void 0, i);
                        case "video":
                          return new Ba(e, t, !1, i);
                        default:
                          throw new Ws(
                            "unsupported track type: ".concat(e.kind),
                          );
                      }
                    })(i, o, t);
                    return (
                      h.kind === dr.Kind.Video
                        ? (h.source = dr.Source.Camera)
                        : h.kind === dr.Kind.Audio &&
                          (h.source = dr.Source.Microphone),
                      (h.mediaStream = e),
                      lo(h) && n
                        ? yield h.setProcessor(n)
                        : uo(h) && s && (yield h.setProcessor(s)),
                      h
                    );
                  }),
                ),
              );
            } catch (n) {
              if (!i) throw n;
              return pc(
                Object.assign(Object.assign({}, e), { audio: o, video: a }),
                t,
              );
            }
          });
        }
        function mc(e) {
          return Zi(this, void 0, void 0, function* () {
            return (yield pc({ audio: !1, video: null == e || e }))[0];
          });
        }
        function gc(e) {
          return Zi(this, void 0, void 0, function* () {
            return (yield pc({ audio: null == e || e, video: !1 }))[0];
          });
        }
        function fc(e) {
          return Zi(this, void 0, void 0, function* () {
            if (
              (void 0 === e && (e = {}),
              void 0 !== e.resolution ||
                Nr() ||
                (e.resolution = yr.h1080fps30.resolution),
              void 0 === navigator.mediaDevices.getDisplayMedia)
            )
              throw new Ks("getDisplayMedia not supported");
            const t = Po(e),
              i = yield navigator.mediaDevices.getDisplayMedia(t),
              n = i.getVideoTracks();
            if (0 === n.length) throw new Ws("no video track found");
            const s = new Ba(n[0], void 0, !1);
            s.source = dr.Source.ScreenShare;
            const r = [s];
            if (i.getAudioTracks().length > 0) {
              const e = new Ra(i.getAudioTracks()[0], void 0, !1);
              ((e.source = dr.Source.ScreenShareAudio), r.push(e));
            }
            return r;
          });
        }
        !(function (e) {
          ((e.Excellent = "excellent"),
            (e.Good = "good"),
            (e.Poor = "poor"),
            (e.Lost = "lost"),
            (e.Unknown = "unknown"));
        })(Ja || (Ja = {}));
        class vc extends nn.EventEmitter {
          get logContext() {
            var e, t;
            return Object.assign(
              {},
              null ===
                (t =
                  null === (e = this.loggerOptions) || void 0 === e
                    ? void 0
                    : e.loggerContextCb) || void 0 === t
                ? void 0
                : t.call(e),
            );
          }
          get isEncrypted() {
            return (
              this.trackPublications.size > 0 &&
              Array.from(this.trackPublications.values()).every(
                (e) => e.isEncrypted,
              )
            );
          }
          get isAgent() {
            var e;
            return (
              (null === (e = this.permissions) || void 0 === e
                ? void 0
                : e.agent) || this.kind === rt.AGENT
            );
          }
          get isActive() {
            var e;
            return (
              (null === (e = this.participantInfo) || void 0 === e
                ? void 0
                : e.state) === st.ACTIVE
            );
          }
          get kind() {
            return this._kind;
          }
          get attributes() {
            return Object.freeze(Object.assign({}, this._attributes));
          }
          constructor(e, t, i, n, s, r) {
            let o =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : rt.STANDARD;
            var a;
            (super(),
              (this.audioLevel = 0),
              (this.isSpeaking = !1),
              (this._connectionQuality = Ja.Unknown),
              (this.log = Ki),
              (this.log = Gi(
                null !== (a = null == r ? void 0 : r.loggerName) && void 0 !== a
                  ? a
                  : Bi.Participant,
              )),
              (this.loggerOptions = r),
              this.setMaxListeners(100),
              (this.sid = e),
              (this.identity = t),
              (this.name = i),
              (this.metadata = n),
              (this.audioTrackPublications = new Map()),
              (this.videoTrackPublications = new Map()),
              (this.trackPublications = new Map()),
              (this._kind = o),
              (this._attributes = null != s ? s : {}));
          }
          getTrackPublications() {
            return Array.from(this.trackPublications.values());
          }
          getTrackPublication(e) {
            for (const [, t] of this.trackPublications)
              if (t.source === e) return t;
          }
          getTrackPublicationByName(e) {
            for (const [, t] of this.trackPublications)
              if (t.trackName === e) return t;
          }
          waitUntilActive() {
            return this.isActive
              ? Promise.resolve()
              : (this.activeFuture ||
                  ((this.activeFuture = new to()),
                  this.once(Fs.Active, () => {
                    var e, t;
                    (null ===
                      (t =
                        null === (e = this.activeFuture) || void 0 === e
                          ? void 0
                          : e.resolve) ||
                      void 0 === t ||
                      t.call(e),
                      (this.activeFuture = void 0));
                  })),
                this.activeFuture.promise);
          }
          get connectionQuality() {
            return this._connectionQuality;
          }
          get isCameraEnabled() {
            var e;
            const t = this.getTrackPublication(dr.Source.Camera);
            return !(
              null === (e = null == t ? void 0 : t.isMuted) ||
              void 0 === e ||
              e
            );
          }
          get isMicrophoneEnabled() {
            var e;
            const t = this.getTrackPublication(dr.Source.Microphone);
            return !(
              null === (e = null == t ? void 0 : t.isMuted) ||
              void 0 === e ||
              e
            );
          }
          get isScreenShareEnabled() {
            return !!this.getTrackPublication(dr.Source.ScreenShare);
          }
          get isLocal() {
            return !1;
          }
          get joinedAt() {
            return this.participantInfo
              ? new Date(
                  1e3 *
                    Number.parseInt(this.participantInfo.joinedAt.toString()),
                )
              : new Date();
          }
          updateInfo(e) {
            var t;
            return !(
              (this.participantInfo &&
                this.participantInfo.sid === e.sid &&
                this.participantInfo.version > e.version) ||
              ((this.identity = e.identity),
              (this.sid = e.sid),
              this._setName(e.name),
              this._setMetadata(e.metadata),
              this._setAttributes(e.attributes),
              e.state === st.ACTIVE &&
                (null === (t = this.participantInfo) || void 0 === t
                  ? void 0
                  : t.state) !== st.ACTIVE &&
                this.emit(Fs.Active),
              e.permission && this.setPermissions(e.permission),
              (this.participantInfo = e),
              0)
            );
          }
          _setMetadata(e) {
            const t = this.metadata !== e,
              i = this.metadata;
            ((this.metadata = e),
              t && this.emit(Fs.ParticipantMetadataChanged, i));
          }
          _setName(e) {
            const t = this.name !== e;
            ((this.name = e), t && this.emit(Fs.ParticipantNameChanged, e));
          }
          _setAttributes(e) {
            const t = (function (e, t) {
              var i;
              (void 0 === e && (e = {}), void 0 === t && (t = {}));
              const n = [...Object.keys(t), ...Object.keys(e)],
                s = {};
              for (const r of n)
                e[r] !== t[r] &&
                  (s[r] = null !== (i = t[r]) && void 0 !== i ? i : "");
              return s;
            })(this.attributes, e);
            ((this._attributes = e),
              Object.keys(t).length > 0 && this.emit(Fs.AttributesChanged, t));
          }
          setPermissions(e) {
            var t, i, n, s, r, o;
            const a = this.permissions,
              c =
                e.canPublish !==
                  (null === (t = this.permissions) || void 0 === t
                    ? void 0
                    : t.canPublish) ||
                e.canSubscribe !==
                  (null === (i = this.permissions) || void 0 === i
                    ? void 0
                    : i.canSubscribe) ||
                e.canPublishData !==
                  (null === (n = this.permissions) || void 0 === n
                    ? void 0
                    : n.canPublishData) ||
                e.hidden !==
                  (null === (s = this.permissions) || void 0 === s
                    ? void 0
                    : s.hidden) ||
                e.recorder !==
                  (null === (r = this.permissions) || void 0 === r
                    ? void 0
                    : r.recorder) ||
                e.canPublishSources.length !==
                  this.permissions.canPublishSources.length ||
                e.canPublishSources.some((e, t) => {
                  var i;
                  return (
                    e !==
                    (null === (i = this.permissions) || void 0 === i
                      ? void 0
                      : i.canPublishSources[t])
                  );
                }) ||
                e.canSubscribeMetrics !==
                  (null === (o = this.permissions) || void 0 === o
                    ? void 0
                    : o.canSubscribeMetrics);
            return (
              (this.permissions = e),
              c && this.emit(Fs.ParticipantPermissionsChanged, a),
              c
            );
          }
          setIsSpeaking(e) {
            e !== this.isSpeaking &&
              ((this.isSpeaking = e),
              e && (this.lastSpokeAt = new Date()),
              this.emit(Fs.IsSpeakingChanged, e));
          }
          setConnectionQuality(e) {
            const t = this._connectionQuality;
            ((this._connectionQuality = (function (e) {
              switch (e) {
                case Je.EXCELLENT:
                  return Ja.Excellent;
                case Je.GOOD:
                  return Ja.Good;
                case Je.POOR:
                  return Ja.Poor;
                case Je.LOST:
                  return Ja.Lost;
                default:
                  return Ja.Unknown;
              }
            })(e)),
              t !== this._connectionQuality &&
                this.emit(
                  Fs.ConnectionQualityChanged,
                  this._connectionQuality,
                ));
          }
          setDisconnected() {
            var e, t;
            this.activeFuture &&
              (null === (t = (e = this.activeFuture).reject) ||
                void 0 === t ||
                t.call(e, new Error("Participant disconnected")),
              (this.activeFuture = void 0));
          }
          setAudioContext(e) {
            ((this.audioContext = e),
              this.audioTrackPublications.forEach(
                (t) => lo(t.track) && t.track.setAudioContext(e),
              ));
          }
          addTrackPublication(e) {
            (e.on(Vs.Muted, () => {
              this.emit(Fs.TrackMuted, e);
            }),
              e.on(Vs.Unmuted, () => {
                this.emit(Fs.TrackUnmuted, e);
              }));
            const t = e;
            switch (
              (t.track && (t.track.sid = e.trackSid),
              this.trackPublications.set(e.trackSid, e),
              e.kind)
            ) {
              case dr.Kind.Audio:
                this.audioTrackPublications.set(e.trackSid, e);
                break;
              case dr.Kind.Video:
                this.videoTrackPublications.set(e.trackSid, e);
            }
          }
        }
        class bc extends vc {
          constructor(e, t, i, n, s) {
            (super(e, t, void 0, void 0, void 0, {
              loggerName: n.loggerName,
              loggerContextCb: () => this.engine.logContext,
            }),
              (this.pendingPublishing = new Set()),
              (this.pendingPublishPromises = new Map()),
              (this.participantTrackPermissions = []),
              (this.allParticipantsAllowedToSubscribe = !0),
              (this.encryptionType = at.NONE),
              (this.enabledPublishVideoCodecs = []),
              (this.pendingAcks = new Map()),
              (this.pendingResponses = new Map()),
              (this.handleReconnecting = () => {
                this.reconnectFuture || (this.reconnectFuture = new to());
              }),
              (this.handleReconnected = () => {
                var e, t;
                (null ===
                  (t =
                    null === (e = this.reconnectFuture) || void 0 === e
                      ? void 0
                      : e.resolve) ||
                  void 0 === t ||
                  t.call(e),
                  (this.reconnectFuture = void 0),
                  this.updateTrackSubscriptionPermissions());
              }),
              (this.handleDisconnected = () => {
                var e, t, i, n, s, r;
                (this.reconnectFuture &&
                  (this.reconnectFuture.promise.catch((e) =>
                    this.log.warn(e.message, this.logContext),
                  ),
                  null ===
                    (t =
                      null === (e = this.reconnectFuture) || void 0 === e
                        ? void 0
                        : e.reject) ||
                    void 0 === t ||
                    t.call(e, "Got disconnected during reconnection attempt"),
                  (this.reconnectFuture = void 0)),
                  this.signalConnectedFuture &&
                    (null === (n = (i = this.signalConnectedFuture).reject) ||
                      void 0 === n ||
                      n.call(i, "Got disconnected without signal connected"),
                    (this.signalConnectedFuture = void 0)),
                  null ===
                    (r =
                      null === (s = this.activeAgentFuture) || void 0 === s
                        ? void 0
                        : s.reject) ||
                    void 0 === r ||
                    r.call(s, "Got disconnected without active agent present"),
                  (this.activeAgentFuture = void 0),
                  (this.firstActiveAgent = void 0));
              }),
              (this.handleSignalConnected = (e) => {
                var t, i;
                (e.participant && this.updateInfo(e.participant),
                  this.signalConnectedFuture ||
                    (this.signalConnectedFuture = new to()),
                  null === (i = (t = this.signalConnectedFuture).resolve) ||
                    void 0 === i ||
                    i.call(t));
              }),
              (this.handleSignalRequestResponse = (e) => {
                const { requestId: t, reason: i, message: n } = e,
                  s = this.pendingSignalRequests.get(t);
                s &&
                  (i !== Mi.OK && s.reject(new Ys(n, i)),
                  this.pendingSignalRequests.delete(t));
              }),
              (this.handleDataPacket = (e) => {
                switch (e.value.case) {
                  case "rpcResponse":
                    let t = e.value.value,
                      i = null,
                      n = null;
                    ("payload" === t.value.case
                      ? (i = t.value.value)
                      : "error" === t.value.case &&
                        (n = ba.fromProto(t.value.value)),
                      this.handleIncomingRpcResponse(t.requestId, i, n));
                    break;
                  case "rpcAck":
                    let s = e.value.value;
                    this.handleIncomingRpcAck(s.requestId);
                }
              }),
              (this.updateTrackSubscriptionPermissions = () => {
                (this.log.debug(
                  "updating track subscription permissions",
                  Object.assign(Object.assign({}, this.logContext), {
                    allParticipantsAllowed:
                      this.allParticipantsAllowedToSubscribe,
                    participantTrackPermissions:
                      this.participantTrackPermissions,
                  }),
                ),
                  this.engine.client.sendUpdateSubscriptionPermissions(
                    this.allParticipantsAllowedToSubscribe,
                    this.participantTrackPermissions.map((e) =>
                      (function (e) {
                        var t, i, n;
                        if (!e.participantSid && !e.participantIdentity)
                          throw new Error(
                            "Invalid track permission, must provide at least one of participantIdentity and participantSid",
                          );
                        return new bi({
                          participantIdentity:
                            null !== (t = e.participantIdentity) && void 0 !== t
                              ? t
                              : "",
                          participantSid:
                            null !== (i = e.participantSid) && void 0 !== i
                              ? i
                              : "",
                          allTracks:
                            null !== (n = e.allowAll) && void 0 !== n && n,
                          trackSids: e.allowedTrackSids || [],
                        });
                      })(e),
                    ),
                  ));
              }),
              (this.onTrackUnmuted = (e) => {
                this.onTrackMuted(e, e.isUpstreamPaused);
              }),
              (this.onTrackMuted = (e, t) => {
                (void 0 === t && (t = !0),
                  e.sid
                    ? this.engine.updateMuteStatus(e.sid, t)
                    : this.log.error(
                        "could not update mute status for unpublished track",
                        Object.assign(
                          Object.assign({}, this.logContext),
                          Oo(e),
                        ),
                      ));
              }),
              (this.onTrackUpstreamPaused = (e) => {
                (this.log.debug(
                  "upstream paused",
                  Object.assign(Object.assign({}, this.logContext), Oo(e)),
                ),
                  this.onTrackMuted(e, !0));
              }),
              (this.onTrackUpstreamResumed = (e) => {
                (this.log.debug(
                  "upstream resumed",
                  Object.assign(Object.assign({}, this.logContext), Oo(e)),
                ),
                  this.onTrackMuted(e, e.isMuted));
              }),
              (this.onTrackFeatureUpdate = (e) => {
                const t = this.audioTrackPublications.get(e.sid);
                t
                  ? this.engine.client.sendUpdateLocalAudioTrack(
                      t.trackSid,
                      t.getTrackFeatures(),
                    )
                  : this.log.warn(
                      "Could not update local audio track settings, missing publication for track ".concat(
                        e.sid,
                      ),
                      this.logContext,
                    );
              }),
              (this.onTrackCpuConstrained = (e, t) => {
                (this.log.debug(
                  "track cpu constrained",
                  Object.assign(Object.assign({}, this.logContext), Oo(t)),
                ),
                  this.emit(Fs.LocalTrackCpuConstrained, e, t));
              }),
              (this.handleSubscribedQualityUpdate = (e) =>
                Zi(this, void 0, void 0, function* () {
                  var t, i, n, s, r;
                  if (
                    !(null === (r = this.roomOptions) || void 0 === r
                      ? void 0
                      : r.dynacast)
                  )
                    return;
                  const o = this.videoTrackPublications.get(e.trackSid);
                  if (!o)
                    return void this.log.warn(
                      "received subscribed quality update for unknown track",
                      Object.assign(Object.assign({}, this.logContext), {
                        trackSid: e.trackSid,
                      }),
                    );
                  if (!o.videoTrack) return;
                  const a = yield o.videoTrack.setPublishingCodecs(
                    e.subscribedCodecs,
                  );
                  try {
                    for (
                      var c, d = !0, l = $i(a);
                      !(t = (c = yield l.next()).done);
                      d = !0
                    ) {
                      ((s = c.value), (d = !1));
                      const e = s;
                      gr(e) &&
                        (this.log.debug(
                          "publish "
                            .concat(e, " for ")
                            .concat(o.videoTrack.sid),
                          Object.assign(
                            Object.assign({}, this.logContext),
                            Oo(o),
                          ),
                        ),
                        yield this.publishAdditionalCodecForTrack(
                          o.videoTrack,
                          e,
                          o.options,
                        ));
                    }
                  } catch (e) {
                    i = { error: e };
                  } finally {
                    try {
                      d || t || !(n = l.return) || (yield n.call(l));
                    } finally {
                      if (i) throw i.error;
                    }
                  }
                })),
              (this.handleLocalTrackUnpublished = (e) => {
                const t = this.trackPublications.get(e.trackSid);
                t
                  ? this.unpublishTrack(t.track)
                  : this.log.warn(
                      "received unpublished event for unknown track",
                      Object.assign(Object.assign({}, this.logContext), {
                        trackSid: e.trackSid,
                      }),
                    );
              }),
              (this.handleTrackEnded = (e) =>
                Zi(this, void 0, void 0, function* () {
                  if (
                    e.source === dr.Source.ScreenShare ||
                    e.source === dr.Source.ScreenShareAudio
                  )
                    (this.log.debug(
                      "unpublishing local track due to TrackEnded",
                      Object.assign(Object.assign({}, this.logContext), Oo(e)),
                    ),
                      this.unpublishTrack(e));
                  else if (e.isUserProvided) yield e.mute();
                  else if (po(e) || ho(e))
                    try {
                      if (Ur())
                        try {
                          const t = yield null === navigator ||
                          void 0 === navigator
                            ? void 0
                            : navigator.permissions.query({
                                name:
                                  e.source === dr.Source.Camera
                                    ? "camera"
                                    : "microphone",
                              });
                          if (t && "denied" === t.state)
                            throw (
                              this.log.warn(
                                "user has revoked access to ".concat(e.source),
                                Object.assign(
                                  Object.assign({}, this.logContext),
                                  Oo(e),
                                ),
                              ),
                              (t.onchange = () => {
                                "denied" !== t.state &&
                                  (e.isMuted || e.restartTrack(),
                                  (t.onchange = null));
                              }),
                              new Error("GetUserMedia Permission denied")
                            );
                        } catch (e) {}
                      e.isMuted ||
                        (this.log.debug(
                          "track ended, attempting to use a different device",
                          Object.assign(
                            Object.assign({}, this.logContext),
                            Oo(e),
                          ),
                        ),
                        po(e)
                          ? yield e.restartTrack({ deviceId: "default" })
                          : yield e.restartTrack());
                    } catch (t) {
                      (this.log.warn(
                        "could not restart track, muting instead",
                        Object.assign(
                          Object.assign({}, this.logContext),
                          Oo(e),
                        ),
                      ),
                        yield e.mute());
                    }
                })),
              (this.audioTrackPublications = new Map()),
              (this.videoTrackPublications = new Map()),
              (this.trackPublications = new Map()),
              (this.engine = i),
              (this.roomOptions = n),
              this.setupEngine(i),
              (this.activeDeviceMap = new Map([
                ["audioinput", "default"],
                ["videoinput", "default"],
                ["audiooutput", "default"],
              ])),
              (this.pendingSignalRequests = new Map()),
              (this.rpcHandlers = s));
          }
          get lastCameraError() {
            return this.cameraError;
          }
          get lastMicrophoneError() {
            return this.microphoneError;
          }
          get isE2EEEnabled() {
            return this.encryptionType !== at.NONE;
          }
          getTrackPublication(e) {
            const t = super.getTrackPublication(e);
            if (t) return t;
          }
          getTrackPublicationByName(e) {
            const t = super.getTrackPublicationByName(e);
            if (t) return t;
          }
          setupEngine(e) {
            var t;
            ((this.engine = e),
              this.engine.on(Bs.RemoteMute, (e, t) => {
                const i = this.trackPublications.get(e);
                i && i.track && (t ? i.mute() : i.unmute());
              }),
              (null === (t = this.signalConnectedFuture) || void 0 === t
                ? void 0
                : t.isResolved) && (this.signalConnectedFuture = void 0),
              this.engine
                .on(Bs.Connected, this.handleReconnected)
                .on(Bs.SignalConnected, this.handleSignalConnected)
                .on(Bs.SignalRestarted, this.handleReconnected)
                .on(Bs.SignalResumed, this.handleReconnected)
                .on(Bs.Restarting, this.handleReconnecting)
                .on(Bs.Resuming, this.handleReconnecting)
                .on(Bs.LocalTrackUnpublished, this.handleLocalTrackUnpublished)
                .on(
                  Bs.SubscribedQualityUpdate,
                  this.handleSubscribedQualityUpdate,
                )
                .on(Bs.Disconnected, this.handleDisconnected)
                .on(Bs.SignalRequestResponse, this.handleSignalRequestResponse)
                .on(Bs.DataPacketReceived, this.handleDataPacket));
          }
          setMetadata(e) {
            return Zi(this, void 0, void 0, function* () {
              yield this.requestMetadataUpdate({ metadata: e });
            });
          }
          setName(e) {
            return Zi(this, void 0, void 0, function* () {
              yield this.requestMetadataUpdate({ name: e });
            });
          }
          setAttributes(e) {
            return Zi(this, void 0, void 0, function* () {
              yield this.requestMetadataUpdate({ attributes: e });
            });
          }
          requestMetadataUpdate(e) {
            return Zi(this, arguments, void 0, function (e) {
              var t = this;
              let { metadata: i, name: n, attributes: s } = e;
              return (function* () {
                return new Promise((e, r) =>
                  Zi(t, void 0, void 0, function* () {
                    var t, o;
                    try {
                      let a = !1;
                      const c =
                          yield this.engine.client.sendUpdateLocalMetadata(
                            null !== (t = null != i ? i : this.metadata) &&
                              void 0 !== t
                              ? t
                              : "",
                            null !== (o = null != n ? n : this.name) &&
                              void 0 !== o
                              ? o
                              : "",
                            s,
                          ),
                        d = performance.now();
                      for (
                        this.pendingSignalRequests.set(c, {
                          resolve: e,
                          reject: (e) => {
                            (r(e), (a = !0));
                          },
                          values: { name: n, metadata: i, attributes: s },
                        });
                        performance.now() - d < 5e3 && !a;

                      ) {
                        if (
                          (!n || this.name === n) &&
                          (!i || this.metadata === i) &&
                          (!s ||
                            Object.entries(s).every((e) => {
                              let [t, i] = e;
                              return (
                                this.attributes[t] === i ||
                                ("" === i && !this.attributes[t])
                              );
                            }))
                        )
                          return (
                            this.pendingSignalRequests.delete(c),
                            void e()
                          );
                        yield Cr(50);
                      }
                      r(
                        new Ys(
                          "Request to update local metadata timed out",
                          "TimeoutError",
                        ),
                      );
                    } catch (e) {
                      e instanceof Error && r(e);
                    }
                  }),
                );
              })();
            });
          }
          setCameraEnabled(e, t, i) {
            return this.setTrackEnabled(dr.Source.Camera, e, t, i);
          }
          setMicrophoneEnabled(e, t, i) {
            return this.setTrackEnabled(dr.Source.Microphone, e, t, i);
          }
          setScreenShareEnabled(e, t, i) {
            return this.setTrackEnabled(dr.Source.ScreenShare, e, t, i);
          }
          setPermissions(e) {
            const t = this.permissions,
              i = super.setPermissions(e);
            return (
              i && t && this.emit(Fs.ParticipantPermissionsChanged, t),
              i
            );
          }
          setE2EEEnabled(e) {
            return Zi(this, void 0, void 0, function* () {
              ((this.encryptionType = e ? at.GCM : at.NONE),
                yield this.republishAllTracks(void 0, !1));
            });
          }
          setTrackEnabled(e, t, i, n) {
            return Zi(this, void 0, void 0, function* () {
              var s, r;
              (this.log.debug(
                "setTrackEnabled",
                Object.assign(Object.assign({}, this.logContext), {
                  source: e,
                  enabled: t,
                }),
              ),
                this.republishPromise && (yield this.republishPromise));
              let o = this.getTrackPublication(e);
              if (t)
                if (o) yield o.unmute();
                else {
                  let t;
                  if (this.pendingPublishing.has(e)) {
                    const t = yield this.waitForPendingPublicationOfSource(e);
                    return (
                      t ||
                        this.log.info(
                          "waiting for pending publication promise timed out",
                          Object.assign(Object.assign({}, this.logContext), {
                            source: e,
                          }),
                        ),
                      yield null == t ? void 0 : t.unmute(),
                      t
                    );
                  }
                  this.pendingPublishing.add(e);
                  try {
                    switch (e) {
                      case dr.Source.Camera:
                        t = yield this.createTracks({
                          video: null === (s = i) || void 0 === s || s,
                        });
                        break;
                      case dr.Source.Microphone:
                        t = yield this.createTracks({
                          audio: null === (r = i) || void 0 === r || r,
                        });
                        break;
                      case dr.Source.ScreenShare:
                        t = yield this.createScreenTracks(Object.assign({}, i));
                        break;
                      default:
                        throw new Ws(e);
                    }
                  } catch (i) {
                    throw (
                      null == t ||
                        t.forEach((e) => {
                          e.stop();
                        }),
                      i instanceof Error &&
                        this.emit(Fs.MediaDevicesError, i, Eo(e)),
                      this.pendingPublishing.delete(e),
                      i
                    );
                  }
                  for (const i of t)
                    e === dr.Source.Microphone &&
                      lo(i) &&
                      (null == n ? void 0 : n.preConnectBuffer) &&
                      (this.log.info(
                        "starting preconnect buffer for microphone",
                        Object.assign({}, this.logContext),
                      ),
                      i.startPreConnectBuffer());
                  try {
                    const e = [];
                    for (const i of t)
                      (this.log.info(
                        "publishing track",
                        Object.assign(
                          Object.assign({}, this.logContext),
                          Oo(i),
                        ),
                      ),
                        e.push(this.publishTrack(i, n)));
                    const i = yield Promise.all(e);
                    [o] = i;
                  } catch (e) {
                    throw (
                      null == t ||
                        t.forEach((e) => {
                          e.stop();
                        }),
                      e
                    );
                  } finally {
                    this.pendingPublishing.delete(e);
                  }
                }
              else if (
                (!(null == o ? void 0 : o.track) &&
                  this.pendingPublishing.has(e) &&
                  ((o = yield this.waitForPendingPublicationOfSource(e)),
                  o ||
                    this.log.info(
                      "waiting for pending publication promise timed out",
                      Object.assign(Object.assign({}, this.logContext), {
                        source: e,
                      }),
                    )),
                o && o.track)
              )
                if (e === dr.Source.ScreenShare) {
                  o = yield this.unpublishTrack(o.track);
                  const e = this.getTrackPublication(
                    dr.Source.ScreenShareAudio,
                  );
                  e && e.track && this.unpublishTrack(e.track);
                } else yield o.mute();
              return o;
            });
          }
          enableCameraAndMicrophone() {
            return Zi(this, void 0, void 0, function* () {
              if (
                !this.pendingPublishing.has(dr.Source.Camera) &&
                !this.pendingPublishing.has(dr.Source.Microphone)
              ) {
                (this.pendingPublishing.add(dr.Source.Camera),
                  this.pendingPublishing.add(dr.Source.Microphone));
                try {
                  const e = yield this.createTracks({ audio: !0, video: !0 });
                  yield Promise.all(e.map((e) => this.publishTrack(e)));
                } finally {
                  (this.pendingPublishing.delete(dr.Source.Camera),
                    this.pendingPublishing.delete(dr.Source.Microphone));
                }
              }
            });
          }
          createTracks(e) {
            return Zi(this, void 0, void 0, function* () {
              var t, i;
              null != e || (e = {});
              const n = ko(
                e,
                null === (t = this.roomOptions) || void 0 === t
                  ? void 0
                  : t.audioCaptureDefaults,
                null === (i = this.roomOptions) || void 0 === i
                  ? void 0
                  : i.videoCaptureDefaults,
              );
              try {
                return (yield pc(n, {
                  loggerName: this.roomOptions.loggerName,
                  loggerContextCb: () => this.logContext,
                })).map(
                  (e) => (
                    lo(e) &&
                      ((this.microphoneError = void 0),
                      e.setAudioContext(this.audioContext),
                      (e.source = dr.Source.Microphone),
                      this.emit(Fs.AudioStreamAcquired)),
                    uo(e) &&
                      ((this.cameraError = void 0),
                      (e.source = dr.Source.Camera)),
                    e
                  ),
                );
              } catch (t) {
                throw (
                  t instanceof Error &&
                    (e.audio && (this.microphoneError = t),
                    e.video && (this.cameraError = t)),
                  t
                );
              }
            });
          }
          createScreenTracks(e) {
            return Zi(this, void 0, void 0, function* () {
              if (
                (void 0 === e && (e = {}),
                void 0 === navigator.mediaDevices.getDisplayMedia)
              )
                throw new Ks("getDisplayMedia not supported");
              void 0 !== e.resolution ||
                Nr() ||
                (e.resolution = yr.h1080fps30.resolution);
              const t = Po(e),
                i = yield navigator.mediaDevices.getDisplayMedia(t),
                n = i.getVideoTracks();
              if (0 === n.length) throw new Ws("no video track found");
              const s = new Ba(n[0], void 0, !1, {
                loggerName: this.roomOptions.loggerName,
                loggerContextCb: () => this.logContext,
              });
              ((s.source = dr.Source.ScreenShare),
                e.contentHint &&
                  (s.mediaStreamTrack.contentHint = e.contentHint));
              const r = [s];
              if (i.getAudioTracks().length > 0) {
                this.emit(Fs.AudioStreamAcquired);
                const e = new Ra(
                  i.getAudioTracks()[0],
                  void 0,
                  !1,
                  this.audioContext,
                  {
                    loggerName: this.roomOptions.loggerName,
                    loggerContextCb: () => this.logContext,
                  },
                );
                ((e.source = dr.Source.ScreenShareAudio), r.push(e));
              }
              return r;
            });
          }
          publishTrack(e, t) {
            return Zi(this, void 0, void 0, function* () {
              return this.publishOrRepublishTrack(e, t);
            });
          }
          publishOrRepublishTrack(e, t) {
            return Zi(this, arguments, void 0, function (e, t) {
              var i = this;
              let n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              return (function* () {
                var s, r, o, a;
                let c, d;
                if (
                  (po(e) && e.setAudioContext(i.audioContext),
                  yield null === (s = i.reconnectFuture) || void 0 === s
                    ? void 0
                    : s.promise,
                  i.republishPromise && !n && (yield i.republishPromise),
                  co(e) &&
                    i.pendingPublishPromises.has(e) &&
                    (yield i.pendingPublishPromises.get(e)),
                  e instanceof MediaStreamTrack)
                )
                  c = e.getConstraints();
                else {
                  let t;
                  switch (((c = e.constraints), e.source)) {
                    case dr.Source.Microphone:
                      t = "audioinput";
                      break;
                    case dr.Source.Camera:
                      t = "videoinput";
                  }
                  t &&
                    i.activeDeviceMap.has(t) &&
                    (c = Object.assign(Object.assign({}, c), {
                      deviceId: i.activeDeviceMap.get(t),
                    }));
                }
                if (e instanceof MediaStreamTrack)
                  switch (e.kind) {
                    case "audio":
                      e = new Ra(e, c, !0, i.audioContext, {
                        loggerName: i.roomOptions.loggerName,
                        loggerContextCb: () => i.logContext,
                      });
                      break;
                    case "video":
                      e = new Ba(e, c, !0, {
                        loggerName: i.roomOptions.loggerName,
                        loggerContextCb: () => i.logContext,
                      });
                      break;
                    default:
                      throw new Ws(
                        "unsupported MediaStreamTrack kind ".concat(e.kind),
                      );
                  }
                else
                  e.updateLoggerOptions({
                    loggerName: i.roomOptions.loggerName,
                    loggerContextCb: () => i.logContext,
                  });
                if (
                  (i.trackPublications.forEach((t) => {
                    t.track && t.track === e && (d = t);
                  }),
                  d)
                )
                  return (
                    i.log.warn(
                      "track has already been published, skipping",
                      Object.assign(Object.assign({}, i.logContext), Oo(d)),
                    ),
                    d
                  );
                const l =
                    ("channelCount" in e.mediaStreamTrack.getSettings() &&
                      2 === e.mediaStreamTrack.getSettings().channelCount) ||
                    2 === e.mediaStreamTrack.getConstraints().channelCount,
                  u =
                    null !== (r = null == t ? void 0 : t.forceStereo) &&
                    void 0 !== r
                      ? r
                      : l;
                u &&
                  (t || (t = {}),
                  void 0 === t.dtx &&
                    i.log.info(
                      "Opus DTX will be disabled for stereo tracks by default. Enable them explicitly to make it work.",
                      Object.assign(Object.assign({}, i.logContext), Oo(e)),
                    ),
                  void 0 === t.red &&
                    i.log.info(
                      "Opus RED will be disabled for stereo tracks by default. Enable them explicitly to make it work.",
                    ),
                  (null !== (o = t.dtx) && void 0 !== o) || (t.dtx = !1),
                  (null !== (a = t.red) && void 0 !== a) || (t.red = !1));
                const h = Object.assign(
                  Object.assign({}, i.roomOptions.publishDefaults),
                  t,
                );
                (!(function () {
                  const e = er(),
                    t = "17.2";
                  if (e)
                    return (
                      ("Safari" !== e.name && "iOS" !== e.os) ||
                      !!(
                        "iOS" === e.os &&
                        e.osVersion &&
                        Kr(t, e.osVersion) >= 0
                      ) ||
                      ("Safari" === e.name && Kr(t, e.version) >= 0)
                    );
                })() &&
                  i.roomOptions.e2ee &&
                  (i.log.info(
                    "End-to-end encryption is set up, simulcast publishing will be disabled on Safari versions and iOS browsers running iOS < v17.2",
                    Object.assign({}, i.logContext),
                  ),
                  (h.simulcast = !1)),
                  h.source && (e.source = h.source));
                const p = new Promise((t, n) =>
                  Zi(i, void 0, void 0, function* () {
                    try {
                      if (this.engine.client.currentState !== Fo.CONNECTED) {
                        this.log.debug(
                          "deferring track publication until signal is connected",
                          Object.assign(Object.assign({}, this.logContext), {
                            track: Oo(e),
                          }),
                        );
                        const i = setTimeout(() => {
                          n(
                            new Qs(
                              "publishing rejected as engine not connected within timeout",
                              408,
                            ),
                          );
                        }, 15e3);
                        (yield this.waitUntilEngineConnected(),
                          clearTimeout(i));
                        const s = yield this.publish(e, h, u);
                        t(s);
                      } else
                        try {
                          const i = yield this.publish(e, h, u);
                          t(i);
                        } catch (e) {
                          n(e);
                        }
                    } catch (e) {
                      n(e);
                    }
                  }),
                );
                i.pendingPublishPromises.set(e, p);
                try {
                  return yield p;
                } catch (e) {
                  throw e;
                } finally {
                  i.pendingPublishPromises.delete(e);
                }
              })();
            });
          }
          waitUntilEngineConnected() {
            return (
              this.signalConnectedFuture ||
                (this.signalConnectedFuture = new to()),
              this.signalConnectedFuture.promise
            );
          }
          hasPermissionsToPublish(e) {
            if (!this.permissions)
              return (
                this.log.warn(
                  "no permissions present for publishing track",
                  Object.assign(Object.assign({}, this.logContext), Oo(e)),
                ),
                !1
              );
            const { canPublish: t, canPublishSources: i } = this.permissions;
            return (
              !(
                !t ||
                (0 !== i.length &&
                  !i
                    .map((e) =>
                      (function (e) {
                        switch (e) {
                          case He.CAMERA:
                            return dr.Source.Camera;
                          case He.MICROPHONE:
                            return dr.Source.Microphone;
                          case He.SCREEN_SHARE:
                            return dr.Source.ScreenShare;
                          case He.SCREEN_SHARE_AUDIO:
                            return dr.Source.ScreenShareAudio;
                          default:
                            return dr.Source.Unknown;
                        }
                      })(e),
                    )
                    .includes(e.source))
              ) ||
              (this.log.warn(
                "insufficient permissions to publish",
                Object.assign(Object.assign({}, this.logContext), Oo(e)),
              ),
              !1)
            );
          }
          publish(e, t, i) {
            return Zi(this, void 0, void 0, function* () {
              var n, s, r, o, a, c, d, l, u, h;
              if (!this.hasPermissionsToPublish(e))
                throw new Qs(
                  "failed to publish track, insufficient permissions",
                  403,
                );
              (Array.from(this.trackPublications.values()).find(
                (t) => co(e) && t.source === e.source,
              ) &&
                e.source !== dr.Source.Unknown &&
                this.log.info(
                  "publishing a second track with the same source: ".concat(
                    e.source,
                  ),
                  Object.assign(Object.assign({}, this.logContext), Oo(e)),
                ),
                t.stopMicTrackOnMute && lo(e) && (e.stopOnMute = !0),
                e.source === dr.Source.ScreenShare &&
                  Mr() &&
                  (t.simulcast = !1),
                "av1" !== t.videoCodec || Rr() || (t.videoCodec = void 0),
                "vp9" !== t.videoCodec || Ir() || (t.videoCodec = void 0),
                void 0 === t.videoCodec && (t.videoCodec = la),
                this.enabledPublishVideoCodecs.length > 0 &&
                  (this.enabledPublishVideoCodecs.some(
                    (e) => t.videoCodec === Ro(e.mime),
                  ) ||
                    (t.videoCodec = Ro(
                      this.enabledPublishVideoCodecs[0].mime,
                    ))));
              const p = t.videoCodec;
              (e.on(Vs.Muted, this.onTrackMuted),
                e.on(Vs.Unmuted, this.onTrackUnmuted),
                e.on(Vs.Ended, this.handleTrackEnded),
                e.on(Vs.UpstreamPaused, this.onTrackUpstreamPaused),
                e.on(Vs.UpstreamResumed, this.onTrackUpstreamResumed),
                e.on(Vs.AudioTrackFeatureUpdate, this.onTrackFeatureUpdate));
              const m = [],
                g = !(null === (n = t.dtx) || void 0 === n || n),
                f = e.getSourceTrackSettings();
              (f.autoGainControl && m.push($e.TF_AUTO_GAIN_CONTROL),
                f.echoCancellation && m.push($e.TF_ECHO_CANCELLATION),
                f.noiseSuppression && m.push($e.TF_NOISE_SUPPRESSION),
                f.channelCount && f.channelCount > 1 && m.push($e.TF_STEREO),
                g && m.push($e.TF_NO_DTX),
                po(e) &&
                  e.hasPreConnectBuffer &&
                  m.push($e.TF_PRECONNECT_BUFFER));
              const v = new Gt({
                cid: e.mediaStreamTrack.id,
                name: t.name,
                type: dr.kindToProto(e.kind),
                muted: e.isMuted,
                source: dr.sourceToProto(e.source),
                disableDtx: g,
                encryption: this.encryptionType,
                stereo: i,
                disableRed:
                  this.isE2EEEnabled ||
                  !(null === (s = t.red) || void 0 === s || s),
                stream: null == t ? void 0 : t.stream,
                backupCodecPolicy: null == t ? void 0 : t.backupCodecPolicy,
                audioFeatures: m,
              });
              let b;
              if (e.kind === dr.Kind.Video) {
                let i = { width: 0, height: 0 };
                try {
                  i = yield e.waitForDimensions();
                } catch (t) {
                  const n =
                    null !==
                      (o =
                        null === (r = this.roomOptions.videoCaptureDefaults) ||
                        void 0 === r
                          ? void 0
                          : r.resolution) && void 0 !== o
                      ? o
                      : br.h720.resolution;
                  ((i = { width: n.width, height: n.height }),
                    this.log.error(
                      "could not determine track dimensions, using defaults",
                      Object.assign(
                        Object.assign(
                          Object.assign({}, this.logContext),
                          Oo(e),
                        ),
                        { dims: i },
                      ),
                    ));
                }
                ((v.width = i.width),
                  (v.height = i.height),
                  ho(e) &&
                    (Or(p) &&
                      (e.source === dr.Source.ScreenShare &&
                        ((t.scalabilityMode = "L1T3"),
                        "contentHint" in e.mediaStreamTrack &&
                          ((e.mediaStreamTrack.contentHint = "motion"),
                          this.log.info(
                            "forcing contentHint to motion for screenshare with SVC codecs",
                            Object.assign(
                              Object.assign({}, this.logContext),
                              Oo(e),
                            ),
                          ))),
                      (t.scalabilityMode =
                        null !== (a = t.scalabilityMode) && void 0 !== a
                          ? a
                          : "L3T3_KEY")),
                    (v.simulcastCodecs = [
                      new Wt({ codec: p, cid: e.mediaStreamTrack.id }),
                    ]),
                    !0 === t.backupCodec && (t.backupCodec = { codec: la }),
                    t.backupCodec &&
                      p !== t.backupCodec.codec &&
                      v.encryption === at.NONE &&
                      (this.roomOptions.dynacast ||
                        (this.roomOptions.dynacast = !0),
                      v.simulcastCodecs.push(
                        new Wt({ codec: t.backupCodec.codec, cid: "" }),
                      ))),
                  (b = Na(
                    e.source === dr.Source.ScreenShare,
                    v.width,
                    v.height,
                    t,
                  )),
                  (v.layers = Ka(v.width, v.height, b, Or(t.videoCodec))));
              } else
                e.kind === dr.Kind.Audio &&
                  (b = [
                    {
                      maxBitrate:
                        null === (c = t.audioPreset) || void 0 === c
                          ? void 0
                          : c.maxBitrate,
                      priority:
                        null !==
                          (l =
                            null === (d = t.audioPreset) || void 0 === d
                              ? void 0
                              : d.priority) && void 0 !== l
                          ? l
                          : "high",
                      networkPriority:
                        null !==
                          (h =
                            null === (u = t.audioPreset) || void 0 === u
                              ? void 0
                              : u.priority) && void 0 !== h
                          ? h
                          : "high",
                    },
                  ]);
              if (!this.engine || this.engine.isClosed)
                throw new Hs("cannot publish track when not connected");
              const k = () =>
                Zi(this, void 0, void 0, function* () {
                  var i, n, s;
                  if (!this.engine.pcManager)
                    throw new Hs("pcManager is not ready");
                  if (
                    ((e.sender = yield this.engine.createSender(e, t, b)),
                    this.emit(Fs.LocalSenderCreated, e.sender, e),
                    ho(e) &&
                      ((null !== (i = t.degradationPreference) &&
                        void 0 !== i) ||
                        (t.degradationPreference = (function (e) {
                          return e.source === dr.Source.ScreenShare ||
                            (e.constraints.height &&
                              no(e.constraints.height) >= 1080)
                            ? "maintain-resolution"
                            : "balanced";
                        })(e)),
                      e.setDegradationPreference(t.degradationPreference)),
                    b)
                  )
                    if (Mr() && e.kind === dr.Kind.Audio) {
                      let t;
                      for (const i of this.engine.pcManager.publisher.getTransceivers())
                        if (i.sender === e.sender) {
                          t = i;
                          break;
                        }
                      t &&
                        this.engine.pcManager.publisher.setTrackCodecBitrate({
                          transceiver: t,
                          codec: "opus",
                          maxbr: (
                            null === (n = b[0]) || void 0 === n
                              ? void 0
                              : n.maxBitrate
                          )
                            ? b[0].maxBitrate / 1e3
                            : 0,
                        });
                    } else
                      e.codec &&
                        Or(e.codec) &&
                        (null === (s = b[0]) || void 0 === s
                          ? void 0
                          : s.maxBitrate) &&
                        this.engine.pcManager.publisher.setTrackCodecBitrate({
                          cid: v.cid,
                          codec: e.codec,
                          maxbr: b[0].maxBitrate / 1e3,
                        });
                  yield this.engine.negotiate();
                });
              let y;
              const T = new Promise((t, i) =>
                Zi(this, void 0, void 0, function* () {
                  var n;
                  try {
                    ((y = yield this.engine.addTrack(v)), t(y));
                  } catch (t) {
                    (e.sender &&
                      (null === (n = this.engine.pcManager) || void 0 === n
                        ? void 0
                        : n.publisher) &&
                      (this.engine.pcManager.publisher.removeTrack(e.sender),
                      yield this.engine.negotiate().catch((t) => {
                        this.log.error(
                          "failed to negotiate after removing track due to failed add track request",
                          Object.assign(
                            Object.assign(
                              Object.assign({}, this.logContext),
                              Oo(e),
                            ),
                            { error: t },
                          ),
                        );
                      })),
                      i(t));
                  }
                }),
              );
              if (this.enabledPublishVideoCodecs.length > 0) {
                const e = yield Promise.all([T, k()]);
                y = e[0];
              } else {
                let i;
                if (
                  ((y = yield T),
                  y.codecs.forEach((e) => {
                    void 0 === i && (i = e.mimeType);
                  }),
                  i && e.kind === dr.Kind.Video)
                ) {
                  const n = Ro(i);
                  n !== p &&
                    (this.log.debug(
                      "falling back to server selected codec",
                      Object.assign(
                        Object.assign(
                          Object.assign({}, this.logContext),
                          Oo(e),
                        ),
                        { codec: n },
                      ),
                    ),
                    (t.videoCodec = n),
                    (b = Na(
                      e.source === dr.Source.ScreenShare,
                      v.width,
                      v.height,
                      t,
                    )));
                }
                yield k();
              }
              const C = new hc(e.kind, y, e, {
                loggerName: this.roomOptions.loggerName,
                loggerContextCb: () => this.logContext,
              });
              if (
                (C.on(Vs.CpuConstrained, (e) =>
                  this.onTrackCpuConstrained(e, C),
                ),
                (C.options = t),
                (e.sid = y.sid),
                this.log.debug(
                  "publishing ".concat(e.kind, " with encodings"),
                  Object.assign(Object.assign({}, this.logContext), {
                    encodings: b,
                    trackInfo: y,
                  }),
                ),
                ho(e)
                  ? e.startMonitor(this.engine.client)
                  : po(e) && e.startMonitor(),
                this.addTrackPublication(C),
                this.emit(Fs.LocalTrackPublished, C),
                po(e) && y.audioFeatures.includes($e.TF_PRECONNECT_BUFFER))
              ) {
                const t = e.getPreConnectBuffer();
                if (
                  (this.on(Fs.LocalTrackSubscribed, (t) => {
                    if (t.trackSid === y.sid) {
                      if (!e.hasPreConnectBuffer)
                        return void this.log.warn(
                          "subscribe event came to late, buffer already closed",
                          this.logContext,
                        );
                      (this.log.debug(
                        "finished recording preconnect buffer",
                        Object.assign(
                          Object.assign({}, this.logContext),
                          Oo(e),
                        ),
                      ),
                        e.stopPreConnectBuffer());
                    }
                  }),
                  t)
                ) {
                  const i = new Promise((i, n) =>
                    Zi(this, void 0, void 0, function* () {
                      var s, r, o, a, c, d;
                      try {
                        this.log.debug(
                          "waiting for agent",
                          Object.assign(
                            Object.assign({}, this.logContext),
                            Oo(e),
                          ),
                        );
                        const p = setTimeout(() => {
                            n(new Error("agent not active within 10 seconds"));
                          }, 1e4),
                          m = yield this.waitUntilActiveAgentPresent();
                        (clearTimeout(p),
                          this.log.debug(
                            "sending preconnect buffer",
                            Object.assign(
                              Object.assign({}, this.logContext),
                              Oo(e),
                            ),
                          ));
                        const g = yield this.streamBytes({
                          name: "preconnect-buffer",
                          mimeType: "audio/opus",
                          topic: "lk.agent.pre-connect-audio-buffer",
                          destinationIdentities: [m.identity],
                          attributes: {
                            trackId: C.trackSid,
                            sampleRate: String(
                              null !== (c = f.sampleRate) && void 0 !== c
                                ? c
                                : "48000",
                            ),
                            channels: String(
                              null !== (d = f.channelCount) && void 0 !== d
                                ? d
                                : "1",
                            ),
                          },
                        });
                        try {
                          for (
                            var l, u = !0, h = $i(t);
                            !(s = (l = yield h.next()).done);
                            u = !0
                          ) {
                            ((a = l.value), (u = !1));
                            const e = a;
                            yield g.write(e);
                          }
                        } catch (e) {
                          r = { error: e };
                        } finally {
                          try {
                            u || s || !(o = h.return) || (yield o.call(h));
                          } finally {
                            if (r) throw r.error;
                          }
                        }
                        (yield g.close(), i());
                      } catch (e) {
                        n(e);
                      }
                    }),
                  );
                  i.then(() => {
                    this.log.debug(
                      "preconnect buffer sent successfully",
                      Object.assign(Object.assign({}, this.logContext), Oo(e)),
                    );
                  }).catch((t) => {
                    this.log.error(
                      "error sending preconnect buffer",
                      Object.assign(
                        Object.assign(
                          Object.assign({}, this.logContext),
                          Oo(e),
                        ),
                        { error: t },
                      ),
                    );
                  });
                }
              }
              return C;
            });
          }
          get isLocal() {
            return !0;
          }
          publishAdditionalCodecForTrack(e, t, i) {
            return Zi(this, void 0, void 0, function* () {
              var n;
              if (this.encryptionType !== at.NONE) return;
              let s;
              if (
                (this.trackPublications.forEach((t) => {
                  t.track && t.track === e && (s = t);
                }),
                !s)
              )
                throw new Ws("track is not published");
              if (!ho(e)) throw new Ws("track is not a video track");
              const r = Object.assign(
                  Object.assign(
                    {},
                    null === (n = this.roomOptions) || void 0 === n
                      ? void 0
                      : n.publishDefaults,
                  ),
                  i,
                ),
                o = (function (e, t, i) {
                  var n, s, r, o;
                  if (
                    !i.backupCodec ||
                    !0 === i.backupCodec ||
                    i.backupCodec.codec === i.videoCodec
                  )
                    return;
                  (t !== i.backupCodec.codec &&
                    Ki.warn(
                      "requested a different codec than specified as backup",
                      { serverRequested: t, backup: i.backupCodec.codec },
                    ),
                    (i.videoCodec = t),
                    (i.videoEncoding = i.backupCodec.encoding));
                  const a = e.mediaStreamTrack.getSettings(),
                    c =
                      null !== (n = a.width) && void 0 !== n
                        ? n
                        : null === (s = e.dimensions) || void 0 === s
                          ? void 0
                          : s.width,
                    d =
                      null !== (r = a.height) && void 0 !== r
                        ? r
                        : null === (o = e.dimensions) || void 0 === o
                          ? void 0
                          : o.height;
                  return (
                    e.source === dr.Source.ScreenShare &&
                      i.simulcast &&
                      (i.simulcast = !1),
                    Na(e.source === dr.Source.ScreenShare, c, d, i)
                  );
                })(e, t, r);
              if (!o)
                return void this.log.info(
                  "backup codec has been disabled, ignoring request to add additional codec for track",
                  Object.assign(Object.assign({}, this.logContext), Oo(e)),
                );
              const a = e.addSimulcastTrack(t, o);
              if (!a) return;
              const c = new Gt({
                cid: a.mediaStreamTrack.id,
                type: dr.kindToProto(e.kind),
                muted: e.isMuted,
                source: dr.sourceToProto(e.source),
                sid: e.sid,
                simulcastCodecs: [
                  { codec: r.videoCodec, cid: a.mediaStreamTrack.id },
                ],
              });
              if (
                ((c.layers = Ka(c.width, c.height, o)),
                !this.engine || this.engine.isClosed)
              )
                throw new Hs("cannot publish track when not connected");
              const d = (yield Promise.all([
                this.engine.addTrack(c),
                (() =>
                  Zi(this, void 0, void 0, function* () {
                    (yield this.engine.createSimulcastSender(e, a, r, o),
                      yield this.engine.negotiate());
                  }))(),
              ]))[0];
              this.log.debug(
                "published ".concat(t, " for track ").concat(e.sid),
                Object.assign(Object.assign({}, this.logContext), {
                  encodings: o,
                  trackInfo: d,
                }),
              );
            });
          }
          unpublishTrack(e, t) {
            return Zi(this, void 0, void 0, function* () {
              var i, n;
              if (co(e)) {
                const t = this.pendingPublishPromises.get(e);
                t &&
                  (this.log.info(
                    "awaiting publish promise before attempting to unpublish",
                    Object.assign(Object.assign({}, this.logContext), Oo(e)),
                  ),
                  yield t);
              }
              const s = this.getPublicationForTrack(e),
                r = s ? Oo(s) : void 0;
              if (
                (this.log.debug(
                  "unpublishing track",
                  Object.assign(Object.assign({}, this.logContext), r),
                ),
                !s || !s.track)
              )
                return void this.log.warn(
                  "track was not unpublished because no publication was found",
                  Object.assign(Object.assign({}, this.logContext), r),
                );
              ((e = s.track).off(Vs.Muted, this.onTrackMuted),
                e.off(Vs.Unmuted, this.onTrackUnmuted),
                e.off(Vs.Ended, this.handleTrackEnded),
                e.off(Vs.UpstreamPaused, this.onTrackUpstreamPaused),
                e.off(Vs.UpstreamResumed, this.onTrackUpstreamResumed),
                e.off(Vs.AudioTrackFeatureUpdate, this.onTrackFeatureUpdate),
                void 0 === t &&
                  (t =
                    null ===
                      (n =
                        null === (i = this.roomOptions) || void 0 === i
                          ? void 0
                          : i.stopLocalTrackOnUnpublish) ||
                    void 0 === n ||
                    n),
                t ? e.stop() : e.stopMonitor());
              let o = !1;
              const a = e.sender;
              if (
                ((e.sender = void 0),
                this.engine.pcManager &&
                  this.engine.pcManager.currentState < fa.FAILED &&
                  a)
              )
                try {
                  for (const e of this.engine.pcManager.publisher.getTransceivers())
                    e.sender === a && ((e.direction = "inactive"), (o = !0));
                  if ((this.engine.removeTrack(a) && (o = !0), ho(e))) {
                    for (const [, t] of e.simulcastCodecs)
                      t.sender &&
                        (this.engine.removeTrack(t.sender) && (o = !0),
                        (t.sender = void 0));
                    e.simulcastCodecs.clear();
                  }
                } catch (e) {
                  this.log.warn(
                    "failed to unpublish track",
                    Object.assign(
                      Object.assign(Object.assign({}, this.logContext), r),
                      { error: e },
                    ),
                  );
                }
              switch ((this.trackPublications.delete(s.trackSid), s.kind)) {
                case dr.Kind.Audio:
                  this.audioTrackPublications.delete(s.trackSid);
                  break;
                case dr.Kind.Video:
                  this.videoTrackPublications.delete(s.trackSid);
              }
              return (
                this.emit(Fs.LocalTrackUnpublished, s),
                s.setTrack(void 0),
                o && (yield this.engine.negotiate()),
                s
              );
            });
          }
          unpublishTracks(e) {
            return Zi(this, void 0, void 0, function* () {
              return (yield Promise.all(
                e.map((e) => this.unpublishTrack(e)),
              )).filter((e) => !!e);
            });
          }
          republishAllTracks(e) {
            return Zi(this, arguments, void 0, function (e) {
              var t = this;
              let i =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              return (function* () {
                (t.republishPromise && (yield t.republishPromise),
                  (t.republishPromise = new Promise((n, s) =>
                    Zi(t, void 0, void 0, function* () {
                      try {
                        const t = [];
                        (this.trackPublications.forEach((i) => {
                          i.track &&
                            (e &&
                              (i.options = Object.assign(
                                Object.assign({}, i.options),
                                e,
                              )),
                            t.push(i));
                        }),
                          yield Promise.all(
                            t.map((e) =>
                              Zi(this, void 0, void 0, function* () {
                                const t = e.track;
                                (yield this.unpublishTrack(t, !1),
                                  !i ||
                                    t.isMuted ||
                                    t.source === dr.Source.ScreenShare ||
                                    t.source === dr.Source.ScreenShareAudio ||
                                    (!po(t) && !ho(t)) ||
                                    t.isUserProvided ||
                                    (this.log.debug(
                                      "restarting existing track",
                                      Object.assign(
                                        Object.assign({}, this.logContext),
                                        { track: e.trackSid },
                                      ),
                                    ),
                                    yield t.restartTrack()),
                                  yield this.publishOrRepublishTrack(
                                    t,
                                    e.options,
                                    !0,
                                  ));
                              }),
                            ),
                          ),
                          n());
                      } catch (e) {
                        s(e);
                      } finally {
                        this.republishPromise = void 0;
                      }
                    }),
                  )),
                  yield t.republishPromise);
              })();
            });
          }
          publishData(e) {
            return Zi(this, arguments, void 0, function (e) {
              var t = this;
              let i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return (function* () {
                const n = i.reliable ? ht.RELIABLE : ht.LOSSY,
                  s = i.destinationIdentities,
                  r = i.topic,
                  o = new ut({
                    kind: n,
                    value: {
                      case: "user",
                      value: new gt({
                        participantIdentity: t.identity,
                        payload: e,
                        destinationIdentities: s,
                        topic: r,
                      }),
                    },
                  });
                yield t.engine.sendDataPacket(o, n);
              })();
            });
          }
          publishDtmf(e, t) {
            return Zi(this, void 0, void 0, function* () {
              const i = new ut({
                kind: ht.RELIABLE,
                value: {
                  case: "sipDtmf",
                  value: new ft({ code: e, digit: t }),
                },
              });
              yield this.engine.sendDataPacket(i, ht.RELIABLE);
            });
          }
          sendChatMessage(e, t) {
            return Zi(this, void 0, void 0, function* () {
              const i = {
                  id: crypto.randomUUID(),
                  message: e,
                  timestamp: Date.now(),
                  attachedFiles: null == t ? void 0 : t.attachments,
                },
                n = new ut({
                  value: {
                    case: "chatMessage",
                    value: new kt(
                      Object.assign(Object.assign({}, i), {
                        timestamp: M.parse(i.timestamp),
                      }),
                    ),
                  },
                });
              return (
                yield this.engine.sendDataPacket(n, ht.RELIABLE),
                this.emit(Fs.ChatMessage, i),
                i
              );
            });
          }
          editChatMessage(e, t) {
            return Zi(this, void 0, void 0, function* () {
              const i = Object.assign(Object.assign({}, t), {
                  message: e,
                  editTimestamp: Date.now(),
                }),
                n = new ut({
                  value: {
                    case: "chatMessage",
                    value: new kt(
                      Object.assign(Object.assign({}, i), {
                        timestamp: M.parse(i.timestamp),
                        editTimestamp: M.parse(i.editTimestamp),
                      }),
                    ),
                  },
                });
              return (
                yield this.engine.sendDataPacket(n, ht.RELIABLE),
                this.emit(Fs.ChatMessage, i),
                i
              );
            });
          }
          sendText(e, t) {
            return Zi(this, void 0, void 0, function* () {
              var i;
              const n = crypto.randomUUID(),
                s = new TextEncoder().encode(e).byteLength,
                r =
                  null === (i = null == t ? void 0 : t.attachments) ||
                  void 0 === i
                    ? void 0
                    : i.map(() => crypto.randomUUID()),
                o = new Array(r ? r.length + 1 : 1).fill(0),
                a = (e, i) => {
                  var n;
                  o[i] = e;
                  const s = o.reduce((e, t) => e + t, 0);
                  null === (n = null == t ? void 0 : t.onProgress) ||
                    void 0 === n ||
                    n.call(t, s);
                },
                c = yield this.streamText({
                  streamId: n,
                  totalSize: s,
                  destinationIdentities:
                    null == t ? void 0 : t.destinationIdentities,
                  topic: null == t ? void 0 : t.topic,
                  attachedStreamIds: r,
                  attributes: null == t ? void 0 : t.attributes,
                });
              return (
                yield c.write(e),
                a(1, 0),
                yield c.close(),
                (null == t ? void 0 : t.attachments) &&
                  r &&
                  (yield Promise.all(
                    t.attachments.map((e, i) =>
                      Zi(this, void 0, void 0, function* () {
                        return this._sendFile(r[i], e, {
                          topic: t.topic,
                          mimeType: e.type,
                          onProgress: (e) => {
                            a(e, i + 1);
                          },
                        });
                      }),
                    ),
                  )),
                c.info
              );
            });
          }
          streamText(e) {
            return Zi(this, void 0, void 0, function* () {
              var t, i;
              const n =
                  null !== (t = null == e ? void 0 : e.streamId) && void 0 !== t
                    ? t
                    : crypto.randomUUID(),
                s = {
                  id: n,
                  mimeType: "text/plain",
                  timestamp: Date.now(),
                  topic:
                    null !== (i = null == e ? void 0 : e.topic) && void 0 !== i
                      ? i
                      : "",
                  size: null == e ? void 0 : e.totalSize,
                  attributes: null == e ? void 0 : e.attributes,
                },
                r = new Lt({
                  streamId: n,
                  mimeType: s.mimeType,
                  topic: s.topic,
                  timestamp: ao(s.timestamp),
                  totalLength: ao(null == e ? void 0 : e.totalSize),
                  attributes: s.attributes,
                  contentHeader: {
                    case: "textHeader",
                    value: new At({
                      version: null == e ? void 0 : e.version,
                      attachedStreamIds:
                        null == e ? void 0 : e.attachedStreamIds,
                      replyToStreamId: null == e ? void 0 : e.replyToStreamId,
                      operationType:
                        "update" === (null == e ? void 0 : e.type)
                          ? _t.UPDATE
                          : _t.CREATE,
                    }),
                  },
                }),
                o = null == e ? void 0 : e.destinationIdentities,
                a = new ut({
                  destinationIdentities: o,
                  value: { case: "streamHeader", value: r },
                });
              yield this.engine.sendDataPacket(a, ht.RELIABLE);
              let c = 0;
              const d = this,
                l = new WritableStream({
                  write(e) {
                    return Zi(this, void 0, void 0, function* () {
                      for (const t of (function (e, t) {
                        const i = [];
                        let n = new TextEncoder().encode(e);
                        for (; n.length > 15e3; ) {
                          let e = 15e3;
                          for (; e > 0; ) {
                            const t = n[e];
                            if (void 0 !== t && 128 != (192 & t)) break;
                            e--;
                          }
                          (i.push(n.slice(0, e)), (n = n.slice(e)));
                        }
                        return (n.length > 0 && i.push(n), i);
                      })(e)) {
                        yield d.engine.waitForBufferStatusLow(ht.RELIABLE);
                        const e = new Ut({
                            content: t,
                            streamId: n,
                            chunkIndex: ao(c),
                          }),
                          i = new ut({
                            destinationIdentities: o,
                            value: { case: "streamChunk", value: e },
                          });
                        (yield d.engine.sendDataPacket(i, ht.RELIABLE),
                          (c += 1));
                      }
                    });
                  },
                  close() {
                    return Zi(this, void 0, void 0, function* () {
                      const e = new jt({ streamId: n }),
                        t = new ut({
                          destinationIdentities: o,
                          value: { case: "streamTrailer", value: e },
                        });
                      yield d.engine.sendDataPacket(t, ht.RELIABLE);
                    });
                  },
                  abort(e) {
                    console.log("Sink error:", e);
                  },
                });
              let u = () =>
                Zi(this, void 0, void 0, function* () {
                  yield h.close();
                });
              d.engine.once(Bs.Closing, u);
              const h = new nc(l, s, () => this.engine.off(Bs.Closing, u));
              return h;
            });
          }
          sendFile(e, t) {
            return Zi(this, void 0, void 0, function* () {
              const i = crypto.randomUUID();
              return (yield this._sendFile(i, e, t), { id: i });
            });
          }
          _sendFile(e, t, i) {
            return Zi(this, void 0, void 0, function* () {
              var n;
              const s = yield this.streamBytes({
                  streamId: e,
                  totalSize: t.size,
                  name: t.name,
                  mimeType:
                    null !== (n = null == i ? void 0 : i.mimeType) &&
                    void 0 !== n
                      ? n
                      : t.type,
                  topic: null == i ? void 0 : i.topic,
                  destinationIdentities:
                    null == i ? void 0 : i.destinationIdentities,
                }),
                r = t.stream().getReader();
              for (;;) {
                const { done: e, value: t } = yield r.read();
                if (e) break;
                yield s.write(t);
              }
              return (yield s.close(), s.info);
            });
          }
          streamBytes(e) {
            return Zi(this, void 0, void 0, function* () {
              var t, i, n, s, r;
              const o =
                  null !== (t = null == e ? void 0 : e.streamId) && void 0 !== t
                    ? t
                    : crypto.randomUUID(),
                c = null == e ? void 0 : e.destinationIdentities,
                d = {
                  id: o,
                  mimeType:
                    null !== (i = null == e ? void 0 : e.mimeType) &&
                    void 0 !== i
                      ? i
                      : "application/octet-stream",
                  topic:
                    null !== (n = null == e ? void 0 : e.topic) && void 0 !== n
                      ? n
                      : "",
                  timestamp: Date.now(),
                  attributes: null == e ? void 0 : e.attributes,
                  size: null == e ? void 0 : e.totalSize,
                  name:
                    null !== (s = null == e ? void 0 : e.name) && void 0 !== s
                      ? s
                      : "unknown",
                },
                l = new Lt({
                  totalLength: ao(
                    null !== (r = d.size) && void 0 !== r ? r : 0,
                  ),
                  mimeType: d.mimeType,
                  streamId: o,
                  topic: d.topic,
                  timestamp: ao(Date.now()),
                  attributes: d.attributes,
                  contentHeader: {
                    case: "byteHeader",
                    value: new Nt({ name: d.name }),
                  },
                }),
                u = new ut({
                  destinationIdentities: c,
                  value: { case: "streamHeader", value: l },
                });
              yield this.engine.sendDataPacket(u, ht.RELIABLE);
              let h = 0;
              const p = new a(),
                m = this.engine,
                g = this.log,
                f = new WritableStream({
                  write(e) {
                    return Zi(this, void 0, void 0, function* () {
                      const t = yield p.lock();
                      let i = 0;
                      try {
                        for (; i < e.byteLength; ) {
                          const t = e.slice(i, i + 15e3);
                          yield m.waitForBufferStatusLow(ht.RELIABLE);
                          const n = new ut({
                            destinationIdentities: c,
                            value: {
                              case: "streamChunk",
                              value: new Ut({
                                content: t,
                                streamId: o,
                                chunkIndex: ao(h),
                              }),
                            },
                          });
                          (yield m.sendDataPacket(n, ht.RELIABLE),
                            (h += 1),
                            (i += t.byteLength));
                        }
                      } finally {
                        t();
                      }
                    });
                  },
                  close() {
                    return Zi(this, void 0, void 0, function* () {
                      const e = new jt({ streamId: o }),
                        t = new ut({
                          destinationIdentities: c,
                          value: { case: "streamTrailer", value: e },
                        });
                      yield m.sendDataPacket(t, ht.RELIABLE);
                    });
                  },
                  abort(e) {
                    g.error("Sink error:", e);
                  },
                });
              return new sc(f, d);
            });
          }
          performRpc(e) {
            return Zi(this, arguments, void 0, function (e) {
              var t = this;
              let {
                destinationIdentity: i,
                method: n,
                payload: s,
                responseTimeout: r = 1e4,
              } = e;
              return (function* () {
                return new Promise((e, o) =>
                  Zi(t, void 0, void 0, function* () {
                    var t, a, c, d;
                    if (ka(s) > 15360)
                      return void o(ba.builtIn("REQUEST_PAYLOAD_TOO_LARGE"));
                    if (
                      (null ===
                        (a =
                          null === (t = this.engine.latestJoinResponse) ||
                          void 0 === t
                            ? void 0
                            : t.serverInfo) || void 0 === a
                        ? void 0
                        : a.version) &&
                      Kr(
                        null ===
                          (d =
                            null === (c = this.engine.latestJoinResponse) ||
                            void 0 === c
                              ? void 0
                              : c.serverInfo) || void 0 === d
                          ? void 0
                          : d.version,
                        "1.8.0",
                      ) < 0
                    )
                      return void o(ba.builtIn("UNSUPPORTED_SERVER"));
                    const l = crypto.randomUUID();
                    yield this.publishRpcRequest(i, l, n, s, r - 2e3);
                    const u = setTimeout(() => {
                      (this.pendingAcks.delete(l),
                        o(ba.builtIn("CONNECTION_TIMEOUT")),
                        this.pendingResponses.delete(l),
                        clearTimeout(h));
                    }, 2e3);
                    this.pendingAcks.set(l, {
                      resolve: () => {
                        clearTimeout(u);
                      },
                      participantIdentity: i,
                    });
                    const h = setTimeout(() => {
                      (this.pendingResponses.delete(l),
                        o(ba.builtIn("RESPONSE_TIMEOUT")));
                    }, r);
                    this.pendingResponses.set(l, {
                      resolve: (t, i) => {
                        (clearTimeout(h),
                          this.pendingAcks.has(l) &&
                            (console.warn(
                              "RPC response received before ack",
                              l,
                            ),
                            this.pendingAcks.delete(l),
                            clearTimeout(u)),
                          i ? o(i) : e(null != t ? t : ""));
                      },
                      participantIdentity: i,
                    });
                  }),
                );
              })();
            });
          }
          registerRpcMethod(e, t) {
            (this.rpcHandlers.has(e) &&
              this.log.warn(
                "you're overriding the RPC handler for method ".concat(
                  e,
                  ", in the future this will throw an error",
                ),
              ),
              this.rpcHandlers.set(e, t));
          }
          unregisterRpcMethod(e) {
            this.rpcHandlers.delete(e);
          }
          setTrackSubscriptionPermissions(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [];
            ((this.participantTrackPermissions = t),
              (this.allParticipantsAllowedToSubscribe = e),
              this.engine.client.isDisconnected ||
                this.updateTrackSubscriptionPermissions());
          }
          handleIncomingRpcAck(e) {
            const t = this.pendingAcks.get(e);
            t
              ? (t.resolve(), this.pendingAcks.delete(e))
              : console.error("Ack received for unexpected RPC request", e);
          }
          handleIncomingRpcResponse(e, t, i) {
            const n = this.pendingResponses.get(e);
            n
              ? (n.resolve(t, i), this.pendingResponses.delete(e))
              : console.error(
                  "Response received for unexpected RPC request",
                  e,
                );
          }
          publishRpcRequest(e, t, i, n, s) {
            return Zi(this, void 0, void 0, function* () {
              const r = new ut({
                destinationIdentities: [e],
                kind: ht.RELIABLE,
                value: {
                  case: "rpcRequest",
                  value: new yt({
                    id: t,
                    method: i,
                    payload: n,
                    responseTimeoutMs: s,
                    version: 1,
                  }),
                },
              });
              yield this.engine.sendDataPacket(r, ht.RELIABLE);
            });
          }
          handleParticipantDisconnected(e) {
            for (const [t, { participantIdentity: i }] of this.pendingAcks)
              i === e && this.pendingAcks.delete(t);
            for (const [t, { participantIdentity: i, resolve: n }] of this
              .pendingResponses)
              i === e &&
                (n(null, ba.builtIn("RECIPIENT_DISCONNECTED")),
                this.pendingResponses.delete(t));
          }
          setEnabledPublishCodecs(e) {
            this.enabledPublishVideoCodecs = e.filter(
              (e) => "video" === e.mime.split("/")[0].toLowerCase(),
            );
          }
          updateInfo(e) {
            return (
              !!super.updateInfo(e) &&
              (e.tracks.forEach((e) => {
                var t, i;
                const n = this.trackPublications.get(e.sid);
                if (n) {
                  const s =
                    n.isMuted ||
                    (null !==
                      (i =
                        null === (t = n.track) || void 0 === t
                          ? void 0
                          : t.isUpstreamPaused) &&
                      void 0 !== i &&
                      i);
                  s !== e.muted &&
                    (this.log.debug(
                      "updating server mute state after reconcile",
                      Object.assign(
                        Object.assign(
                          Object.assign({}, this.logContext),
                          Oo(n),
                        ),
                        { mutedOnServer: s },
                      ),
                    ),
                    this.engine.client.sendMuteTrack(e.sid, s));
                }
              }),
              !0)
            );
          }
          setActiveAgent(e) {
            var t, i, n, s;
            ((this.firstActiveAgent = e),
              e && !this.firstActiveAgent && (this.firstActiveAgent = e),
              e
                ? null ===
                    (i =
                      null === (t = this.activeAgentFuture) || void 0 === t
                        ? void 0
                        : t.resolve) ||
                  void 0 === i ||
                  i.call(t, e)
                : null ===
                    (s =
                      null === (n = this.activeAgentFuture) || void 0 === n
                        ? void 0
                        : n.reject) ||
                  void 0 === s ||
                  s.call(n, "Agent disconnected"),
              (this.activeAgentFuture = void 0));
          }
          waitUntilActiveAgentPresent() {
            return this.firstActiveAgent
              ? Promise.resolve(this.firstActiveAgent)
              : (this.activeAgentFuture || (this.activeAgentFuture = new to()),
                this.activeAgentFuture.promise);
          }
          getPublicationForTrack(e) {
            let t;
            return (
              this.trackPublications.forEach((i) => {
                const n = i.track;
                n &&
                  (e instanceof MediaStreamTrack
                    ? (po(n) || ho(n)) && n.mediaStreamTrack === e && (t = i)
                    : e === n && (t = i));
              }),
              t
            );
          }
          waitForPendingPublicationOfSource(e) {
            return Zi(this, void 0, void 0, function* () {
              const t = Date.now();
              for (; Date.now() < t + 1e4; ) {
                const t = Array.from(
                  this.pendingPublishPromises.entries(),
                ).find((t) => {
                  let [i] = t;
                  return i.source === e;
                });
                if (t) return t[1];
                yield Cr(20);
              }
            });
          }
        }
        class kc extends uc {
          constructor(e, t, i, n) {
            (super(e, t.sid, t.name, n),
              (this.track = void 0),
              (this.allowed = !0),
              (this.requestedDisabled = void 0),
              (this.visible = !0),
              (this.handleEnded = (e) => {
                (this.setTrack(void 0), this.emit(Vs.Ended, e));
              }),
              (this.handleVisibilityChange = (e) => {
                (this.log.debug(
                  "adaptivestream video visibility "
                    .concat(this.trackSid, ", visible=")
                    .concat(e),
                  this.logContext,
                ),
                  (this.visible = e),
                  this.emitTrackUpdate());
              }),
              (this.handleVideoDimensionsChange = (e) => {
                (this.log.debug(
                  "adaptivestream video dimensions "
                    .concat(e.width, "x")
                    .concat(e.height),
                  this.logContext,
                ),
                  (this.videoDimensionsAdaptiveStream = e),
                  this.emitTrackUpdate());
              }),
              (this.subscribed = i),
              this.updateInfo(t));
          }
          setSubscribed(e) {
            const t = this.subscriptionStatus,
              i = this.permissionStatus;
            ((this.subscribed = e), e && (this.allowed = !0));
            const n = new ei({
              trackSids: [this.trackSid],
              subscribe: this.subscribed,
              participantTracks: [
                new wt({ participantSid: "", trackSids: [this.trackSid] }),
              ],
            });
            (this.emit(Vs.UpdateSubscription, n),
              this.emitSubscriptionUpdateIfChanged(t),
              this.emitPermissionUpdateIfChanged(i));
          }
          get subscriptionStatus() {
            return !1 === this.subscribed
              ? uc.SubscriptionStatus.Unsubscribed
              : super.isSubscribed
                ? uc.SubscriptionStatus.Subscribed
                : uc.SubscriptionStatus.Desired;
          }
          get permissionStatus() {
            return this.allowed
              ? uc.PermissionStatus.Allowed
              : uc.PermissionStatus.NotAllowed;
          }
          get isSubscribed() {
            return !1 !== this.subscribed && super.isSubscribed;
          }
          get isDesired() {
            return !1 !== this.subscribed;
          }
          get isEnabled() {
            return void 0 !== this.requestedDisabled
              ? !this.requestedDisabled
              : !this.isAdaptiveStream || this.visible;
          }
          get isLocal() {
            return !1;
          }
          setEnabled(e) {
            this.isManualOperationAllowed() &&
              this.requestedDisabled !== !e &&
              ((this.requestedDisabled = !e), this.emitTrackUpdate());
          }
          setVideoQuality(e) {
            this.isManualOperationAllowed() &&
              this.requestedMaxQuality !== e &&
              ((this.requestedMaxQuality = e),
              (this.requestedVideoDimensions = void 0),
              this.emitTrackUpdate());
          }
          setVideoDimensions(e) {
            var t, i;
            this.isManualOperationAllowed() &&
              (((null === (t = this.requestedVideoDimensions) || void 0 === t
                ? void 0
                : t.width) === e.width &&
                (null === (i = this.requestedVideoDimensions) || void 0 === i
                  ? void 0
                  : i.height) === e.height) ||
                (fo(this.track) && (this.requestedVideoDimensions = e),
                (this.requestedMaxQuality = void 0),
                this.emitTrackUpdate()));
          }
          setVideoFPS(e) {
            this.isManualOperationAllowed() &&
              fo(this.track) &&
              this.fps !== e &&
              ((this.fps = e), this.emitTrackUpdate());
          }
          get videoQuality() {
            var e;
            return null !== (e = this.requestedMaxQuality) && void 0 !== e
              ? e
              : cr.HIGH;
          }
          setTrack(e) {
            const t = this.subscriptionStatus,
              i = this.permissionStatus,
              n = this.track;
            n !== e &&
              (n &&
                (n.off(
                  Vs.VideoDimensionsChanged,
                  this.handleVideoDimensionsChange,
                ),
                n.off(Vs.VisibilityChanged, this.handleVisibilityChange),
                n.off(Vs.Ended, this.handleEnded),
                n.detach(),
                n.stopMonitor(),
                this.emit(Vs.Unsubscribed, n)),
              super.setTrack(e),
              e &&
                ((e.sid = this.trackSid),
                e.on(
                  Vs.VideoDimensionsChanged,
                  this.handleVideoDimensionsChange,
                ),
                e.on(Vs.VisibilityChanged, this.handleVisibilityChange),
                e.on(Vs.Ended, this.handleEnded),
                this.emit(Vs.Subscribed, e)),
              this.emitPermissionUpdateIfChanged(i),
              this.emitSubscriptionUpdateIfChanged(t));
          }
          setAllowed(e) {
            const t = this.subscriptionStatus,
              i = this.permissionStatus;
            ((this.allowed = e),
              this.emitPermissionUpdateIfChanged(i),
              this.emitSubscriptionUpdateIfChanged(t));
          }
          setSubscriptionError(e) {
            this.emit(Vs.SubscriptionFailed, e);
          }
          updateInfo(e) {
            super.updateInfo(e);
            const t = this.metadataMuted;
            ((this.metadataMuted = e.muted),
              this.track
                ? this.track.setMuted(e.muted)
                : t !== e.muted && this.emit(e.muted ? Vs.Muted : Vs.Unmuted));
          }
          emitSubscriptionUpdateIfChanged(e) {
            const t = this.subscriptionStatus;
            e !== t && this.emit(Vs.SubscriptionStatusChanged, t, e);
          }
          emitPermissionUpdateIfChanged(e) {
            this.permissionStatus !== e &&
              this.emit(
                Vs.SubscriptionPermissionChanged,
                this.permissionStatus,
                e,
              );
          }
          isManualOperationAllowed() {
            return (
              !!this.isDesired ||
              (this.log.warn(
                "cannot update track settings when not subscribed",
                this.logContext,
              ),
              !1)
            );
          }
          get isAdaptiveStream() {
            return fo(this.track) && this.track.isAdaptiveStream;
          }
          emitTrackUpdate() {
            const e = new ti({
              trackSids: [this.trackSid],
              disabled: !this.isEnabled,
              fps: this.fps,
            });
            if (this.kind === dr.Kind.Video) {
              let s = this.requestedVideoDimensions;
              if (void 0 !== this.videoDimensionsAdaptiveStream)
                if (s)
                  xo(this.videoDimensionsAdaptiveStream, s) &&
                    (this.log.debug(
                      "using adaptive stream dimensions instead of requested",
                      Object.assign(
                        Object.assign({}, this.logContext),
                        this.videoDimensionsAdaptiveStream,
                      ),
                    ),
                    (s = this.videoDimensionsAdaptiveStream));
                else if (
                  void 0 !== this.requestedMaxQuality &&
                  this.trackInfo
                ) {
                  const e =
                    ((t = this.trackInfo),
                    (i = this.requestedMaxQuality),
                    null === (n = t.layers) || void 0 === n
                      ? void 0
                      : n.find((e) => e.quality === i));
                  e &&
                    xo(this.videoDimensionsAdaptiveStream, e) &&
                    (this.log.debug(
                      "using adaptive stream dimensions instead of max quality layer",
                      Object.assign(
                        Object.assign({}, this.logContext),
                        this.videoDimensionsAdaptiveStream,
                      ),
                    ),
                    (s = this.videoDimensionsAdaptiveStream));
                } else
                  (this.log.debug(
                    "using adaptive stream dimensions",
                    Object.assign(
                      Object.assign({}, this.logContext),
                      this.videoDimensionsAdaptiveStream,
                    ),
                  ),
                    (s = this.videoDimensionsAdaptiveStream));
              s
                ? ((e.width = Math.ceil(s.width)),
                  (e.height = Math.ceil(s.height)))
                : void 0 !== this.requestedMaxQuality
                  ? (this.log.debug(
                      "using requested max quality",
                      Object.assign(Object.assign({}, this.logContext), {
                        quality: this.requestedMaxQuality,
                      }),
                    ),
                    (e.quality = this.requestedMaxQuality))
                  : (this.log.debug(
                      "using default quality",
                      Object.assign(Object.assign({}, this.logContext), {
                        quality: cr.HIGH,
                      }),
                    ),
                    (e.quality = cr.HIGH));
            }
            var t, i, n;
            this.emit(Vs.UpdateSettings, e);
          }
        }
        class yc extends vc {
          static fromParticipantInfo(e, t, i) {
            return new yc(
              e,
              t.sid,
              t.identity,
              t.name,
              t.metadata,
              t.attributes,
              i,
              t.kind,
            );
          }
          get logContext() {
            return Object.assign(Object.assign({}, super.logContext), {
              rpID: this.sid,
              remoteParticipant: this.identity,
            });
          }
          constructor(e, t, i, n, s, r, o) {
            (super(
              t,
              i || "",
              n,
              s,
              r,
              o,
              arguments.length > 7 && void 0 !== arguments[7]
                ? arguments[7]
                : rt.STANDARD,
            ),
              (this.signalClient = e),
              (this.trackPublications = new Map()),
              (this.audioTrackPublications = new Map()),
              (this.videoTrackPublications = new Map()),
              (this.volumeMap = new Map()));
          }
          addTrackPublication(e) {
            (super.addTrackPublication(e),
              e.on(Vs.UpdateSettings, (t) => {
                (this.log.debug(
                  "send update settings",
                  Object.assign(
                    Object.assign(Object.assign({}, this.logContext), Oo(e)),
                    { settings: t },
                  ),
                ),
                  this.signalClient.sendUpdateTrackSettings(t));
              }),
              e.on(Vs.UpdateSubscription, (e) => {
                (e.participantTracks.forEach((e) => {
                  e.participantSid = this.sid;
                }),
                  this.signalClient.sendUpdateSubscription(e));
              }),
              e.on(Vs.SubscriptionPermissionChanged, (t) => {
                this.emit(Fs.TrackSubscriptionPermissionChanged, e, t);
              }),
              e.on(Vs.SubscriptionStatusChanged, (t) => {
                this.emit(Fs.TrackSubscriptionStatusChanged, e, t);
              }),
              e.on(Vs.Subscribed, (t) => {
                this.emit(Fs.TrackSubscribed, t, e);
              }),
              e.on(Vs.Unsubscribed, (t) => {
                this.emit(Fs.TrackUnsubscribed, t, e);
              }),
              e.on(Vs.SubscriptionFailed, (t) => {
                this.emit(Fs.TrackSubscriptionFailed, e.trackSid, t);
              }));
          }
          getTrackPublication(e) {
            const t = super.getTrackPublication(e);
            if (t) return t;
          }
          getTrackPublicationByName(e) {
            const t = super.getTrackPublicationByName(e);
            if (t) return t;
          }
          setVolume(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : dr.Source.Microphone;
            this.volumeMap.set(t, e);
            const i = this.getTrackPublication(t);
            i && i.track && i.track.setVolume(e);
          }
          getVolume() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : dr.Source.Microphone;
            const t = this.getTrackPublication(e);
            return t && t.track ? t.track.getVolume() : this.volumeMap.get(e);
          }
          addSubscribedMediaTrack(e, t, i, n, s, r) {
            let o,
              a = this.getTrackPublicationBySid(t);
            return (
              a ||
                t.startsWith("TR") ||
                this.trackPublications.forEach((t) => {
                  a || e.kind !== t.kind.toString() || (a = t);
                }),
              a
                ? "ended" === e.readyState
                  ? (this.log.error(
                      "unable to subscribe because MediaStreamTrack is ended. Do not call MediaStreamTrack.stop()",
                      Object.assign(Object.assign({}, this.logContext), Oo(a)),
                    ),
                    void this.emit(Fs.TrackSubscriptionFailed, t))
                  : ((o =
                      "video" === e.kind
                        ? new ac(e, t, n, s)
                        : new oc(e, t, n, this.audioContext, this.audioOutput)),
                    (o.source = a.source),
                    (o.isMuted = a.isMuted),
                    o.setMediaStream(i),
                    o.start(),
                    a.setTrack(o),
                    this.volumeMap.has(a.source) &&
                      mo(o) &&
                      lo(o) &&
                      o.setVolume(this.volumeMap.get(a.source)),
                    a)
                : 0 === r
                  ? (this.log.error(
                      "could not find published track",
                      Object.assign(Object.assign({}, this.logContext), {
                        trackSid: t,
                      }),
                    ),
                    void this.emit(Fs.TrackSubscriptionFailed, t))
                  : (void 0 === r && (r = 20),
                    void setTimeout(() => {
                      this.addSubscribedMediaTrack(e, t, i, n, s, r - 1);
                    }, 150))
            );
          }
          get hasMetadata() {
            return !!this.participantInfo;
          }
          getTrackPublicationBySid(e) {
            return this.trackPublications.get(e);
          }
          updateInfo(e) {
            if (!super.updateInfo(e)) return !1;
            const t = new Map(),
              i = new Map();
            return (
              e.tracks.forEach((e) => {
                var n, s;
                let r = this.getTrackPublicationBySid(e.sid);
                if (r) r.updateInfo(e);
                else {
                  const t = dr.kindFromProto(e.type);
                  if (!t) return;
                  ((r = new kc(
                    t,
                    e,
                    null === (n = this.signalClient.connectOptions) ||
                    void 0 === n
                      ? void 0
                      : n.autoSubscribe,
                    {
                      loggerContextCb: () => this.logContext,
                      loggerName:
                        null === (s = this.loggerOptions) || void 0 === s
                          ? void 0
                          : s.loggerName,
                    },
                  )),
                    r.updateInfo(e),
                    i.set(e.sid, r));
                  const o = Array.from(this.trackPublications.values()).find(
                    (e) => e.source === (null == r ? void 0 : r.source),
                  );
                  (o &&
                    r.source !== dr.Source.Unknown &&
                    this.log.debug(
                      "received a second track publication for "
                        .concat(this.identity, " with the same source: ")
                        .concat(r.source),
                      Object.assign(Object.assign({}, this.logContext), {
                        oldTrack: Oo(o),
                        newTrack: Oo(r),
                      }),
                    ),
                    this.addTrackPublication(r));
                }
                t.set(e.sid, r);
              }),
              this.trackPublications.forEach((e) => {
                t.has(e.trackSid) ||
                  (this.log.trace(
                    "detected removed track on remote participant, unpublishing",
                    Object.assign(Object.assign({}, this.logContext), Oo(e)),
                  ),
                  this.unpublishTrack(e.trackSid, !0));
              }),
              i.forEach((e) => {
                this.emit(Fs.TrackPublished, e);
              }),
              !0
            );
          }
          unpublishTrack(e, t) {
            const i = this.trackPublications.get(e);
            if (!i) return;
            const { track: n } = i;
            switch (
              (n && (n.stop(), i.setTrack(void 0)),
              this.trackPublications.delete(e),
              i.kind)
            ) {
              case dr.Kind.Audio:
                this.audioTrackPublications.delete(e);
                break;
              case dr.Kind.Video:
                this.videoTrackPublications.delete(e);
            }
            t && this.emit(Fs.TrackUnpublished, i);
          }
          setAudioOutput(e) {
            return Zi(this, void 0, void 0, function* () {
              this.audioOutput = e;
              const t = [];
              (this.audioTrackPublications.forEach((i) => {
                var n;
                lo(i.track) &&
                  mo(i.track) &&
                  t.push(
                    i.track.setSinkId(
                      null !== (n = e.deviceId) && void 0 !== n ? n : "default",
                    ),
                  );
              }),
                yield Promise.all(t));
            });
          }
          emit(e) {
            for (
              var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              i[n - 1] = arguments[n];
            return (
              this.log.trace(
                "participant event",
                Object.assign(Object.assign({}, this.logContext), {
                  event: e,
                  args: i,
                }),
              ),
              super.emit(e, ...i)
            );
          }
        }
        !(function (e) {
          ((e.Disconnected = "disconnected"),
            (e.Connecting = "connecting"),
            (e.Connected = "connected"),
            (e.Reconnecting = "reconnecting"),
            (e.SignalReconnecting = "signalReconnecting"));
        })(Qa || (Qa = {}));
        class Tc extends nn.EventEmitter {
          constructor(e) {
            var t, i, n, s;
            if (
              (super(),
              (t = this),
              (this.state = Qa.Disconnected),
              (this.activeSpeakers = []),
              (this.isE2EEEnabled = !1),
              (this.audioEnabled = !0),
              (this.isVideoPlaybackBlocked = !1),
              (this.log = Ki),
              (this.bufferedEvents = []),
              (this.isResuming = !1),
              (this.byteStreamControllers = new Map()),
              (this.textStreamControllers = new Map()),
              (this.byteStreamHandlers = new Map()),
              (this.textStreamHandlers = new Map()),
              (this.rpcHandlers = new Map()),
              (this.connect = (e, t, i) =>
                Zi(this, void 0, void 0, function* () {
                  var n;
                  if (!xr())
                    throw jr()
                      ? Error(
                          "WebRTC isn't detected, have you called registerGlobals?",
                        )
                      : Error(
                          "LiveKit doesn't seem to be supported on this browser. Try to update your browser and make sure no browser extensions are disabling webRTC.",
                        );
                  const s = yield this.disconnectLock.lock();
                  if (this.state === Qa.Connected)
                    return (
                      this.log.info(
                        "already connected to room ".concat(this.name),
                        this.logContext,
                      ),
                      s(),
                      Promise.resolve()
                    );
                  if (this.connectFuture)
                    return (s(), this.connectFuture.promise);
                  (this.setAndEmitConnectionState(Qa.Connecting),
                    (null === (n = this.regionUrlProvider) || void 0 === n
                      ? void 0
                      : n.getServerUrl().toString()) !== e &&
                      ((this.regionUrl = void 0),
                      (this.regionUrlProvider = void 0)),
                    Fr(new URL(e)) &&
                      (void 0 === this.regionUrlProvider
                        ? (this.regionUrlProvider = new Za(e, t))
                        : this.regionUrlProvider.updateToken(t),
                      this.regionUrlProvider
                        .fetchRegionSettings()
                        .then((e) => {
                          var t;
                          null === (t = this.regionUrlProvider) ||
                            void 0 === t ||
                            t.setServerReportedRegions(e);
                        })
                        .catch((e) => {
                          this.log.warn(
                            "could not fetch region settings",
                            Object.assign(Object.assign({}, this.logContext), {
                              error: e,
                            }),
                          );
                        })));
                  const r = (n, o, a) =>
                      Zi(this, void 0, void 0, function* () {
                        var c, d;
                        this.abortController && this.abortController.abort();
                        const l = new AbortController();
                        ((this.abortController = l), null == s || s());
                        try {
                          (yield this.attemptConnection(
                            null != a ? a : e,
                            t,
                            i,
                            l,
                          ),
                            (this.abortController = void 0),
                            n());
                        } catch (e) {
                          if (
                            this.regionUrlProvider &&
                            e instanceof qs &&
                            e.reason !== Ns.Cancelled &&
                            e.reason !== Ns.NotAllowed
                          ) {
                            let t = null;
                            try {
                              t =
                                yield this.regionUrlProvider.getNextBestRegionUrl(
                                  null === (c = this.abortController) ||
                                    void 0 === c
                                    ? void 0
                                    : c.signal,
                                );
                            } catch (e) {
                              if (
                                e instanceof qs &&
                                (401 === e.status || e.reason === Ns.Cancelled)
                              )
                                return (
                                  this.handleDisconnect(
                                    this.options.stopLocalTrackOnUnpublish,
                                  ),
                                  void o(e)
                                );
                            }
                            t &&
                            !(null === (d = this.abortController) ||
                            void 0 === d
                              ? void 0
                              : d.signal.aborted)
                              ? (this.log.info(
                                  "Initial connection failed with ConnectionError: "
                                    .concat(
                                      e.message,
                                      ". Retrying with another region: ",
                                    )
                                    .concat(t),
                                  this.logContext,
                                ),
                                this.recreateEngine(),
                                yield r(n, o, t))
                              : (this.handleDisconnect(
                                  this.options.stopLocalTrackOnUnpublish,
                                  ro(e),
                                ),
                                o(e));
                          } else {
                            let t = Ye.UNKNOWN_REASON;
                            (e instanceof qs && (t = ro(e)),
                              this.handleDisconnect(
                                this.options.stopLocalTrackOnUnpublish,
                                t,
                              ),
                              o(e));
                          }
                        }
                      }),
                    o = this.regionUrl;
                  return (
                    (this.regionUrl = void 0),
                    (this.connectFuture = new to(
                      (e, t) => {
                        r(e, t, o);
                      },
                      () => {
                        this.clearConnectionFutures();
                      },
                    )),
                    this.connectFuture.promise
                  );
                })),
              (this.connectSignal = (e, t, i, n, s, r) =>
                Zi(this, void 0, void 0, function* () {
                  var o, a, c;
                  const d = yield i.join(
                    e,
                    t,
                    {
                      autoSubscribe: n.autoSubscribe,
                      adaptiveStream:
                        "object" == typeof s.adaptiveStream || s.adaptiveStream,
                      maxRetries: n.maxRetries,
                      e2eeEnabled: !!this.e2eeManager,
                      websocketTimeout: n.websocketTimeout,
                    },
                    r.signal,
                  );
                  let l = d.serverInfo;
                  if (
                    (l ||
                      (l = {
                        version: d.serverVersion,
                        region: d.serverRegion,
                      }),
                    (this.serverInfo = l),
                    this.log.debug(
                      "connected to Livekit Server ".concat(
                        Object.entries(l)
                          .map((e) => {
                            let [t, i] = e;
                            return "".concat(t, ": ").concat(i);
                          })
                          .join(", "),
                      ),
                      {
                        room:
                          null === (o = d.room) || void 0 === o
                            ? void 0
                            : o.name,
                        roomSid:
                          null === (a = d.room) || void 0 === a
                            ? void 0
                            : a.sid,
                        identity:
                          null === (c = d.participant) || void 0 === c
                            ? void 0
                            : c.identity,
                      },
                    ),
                    !l.version)
                  )
                    throw new Gs("unknown server version");
                  return (
                    "0.15.1" === l.version &&
                      this.options.dynacast &&
                      (this.log.debug(
                        "disabling dynacast due to server version",
                        this.logContext,
                      ),
                      (s.dynacast = !1)),
                    d
                  );
                })),
              (this.applyJoinResponse = (e) => {
                const t = e.participant;
                if (
                  ((this.localParticipant.sid = t.sid),
                  (this.localParticipant.identity = t.identity),
                  this.localParticipant.setEnabledPublishCodecs(
                    e.enabledPublishCodecs,
                  ),
                  this.options.e2ee && this.e2eeManager)
                )
                  try {
                    this.e2eeManager.setSifTrailer(e.sifTrailer);
                  } catch (e) {
                    this.log.error(
                      e instanceof Error
                        ? e.message
                        : "Could not set SifTrailer",
                      Object.assign(Object.assign({}, this.logContext), {
                        error: e,
                      }),
                    );
                  }
                (this.handleParticipantUpdates([t, ...e.otherParticipants]),
                  e.room && this.handleRoomUpdate(e.room));
              }),
              (this.attemptConnection = (e, t, i, n) =>
                Zi(this, void 0, void 0, function* () {
                  var s, r;
                  (this.state === Qa.Reconnecting ||
                  this.isResuming ||
                  (null === (s = this.engine) || void 0 === s
                    ? void 0
                    : s.pendingReconnect)
                    ? (this.log.info(
                        "Reconnection attempt replaced by new connection attempt",
                        this.logContext,
                      ),
                      this.recreateEngine())
                    : this.maybeCreateEngine(),
                    (null === (r = this.regionUrlProvider) || void 0 === r
                      ? void 0
                      : r.isCloud()) &&
                      this.engine.setRegionUrlProvider(this.regionUrlProvider),
                    this.acquireAudioContext(),
                    (this.connOptions = Object.assign(
                      Object.assign({}, ga),
                      i,
                    )),
                    this.connOptions.rtcConfig &&
                      (this.engine.rtcConfig = this.connOptions.rtcConfig),
                    this.connOptions.peerConnectionTimeout &&
                      (this.engine.peerConnectionTimeout =
                        this.connOptions.peerConnectionTimeout));
                  try {
                    const i = yield this.connectSignal(
                      e,
                      t,
                      this.engine,
                      this.connOptions,
                      this.options,
                      n,
                    );
                    (this.applyJoinResponse(i),
                      this.setupLocalParticipantEvents(),
                      this.emit(js.SignalConnected));
                  } catch (e) {
                    (yield this.engine.close(), this.recreateEngine());
                    const t = new qs(
                      "could not establish signal connection",
                      Ns.ServerUnreachable,
                    );
                    throw (
                      e instanceof Error &&
                        (t.message = ""
                          .concat(t.message, ": ")
                          .concat(e.message)),
                      e instanceof qs &&
                        ((t.reason = e.reason), (t.status = e.status)),
                      this.log.debug(
                        "error trying to establish signal connection",
                        Object.assign(Object.assign({}, this.logContext), {
                          error: e,
                        }),
                      ),
                      t
                    );
                  }
                  if (n.signal.aborted)
                    throw (
                      yield this.engine.close(),
                      this.recreateEngine(),
                      new qs("Connection attempt aborted", Ns.Cancelled)
                    );
                  try {
                    yield this.engine.waitForPCInitialConnection(
                      this.connOptions.peerConnectionTimeout,
                      n,
                    );
                  } catch (e) {
                    throw (yield this.engine.close(), this.recreateEngine(), e);
                  }
                  (Ur() &&
                    this.options.disconnectOnPageLeave &&
                    (window.addEventListener("pagehide", this.onPageLeave),
                    window.addEventListener("beforeunload", this.onPageLeave)),
                    Ur() &&
                      document.addEventListener("freeze", this.onPageLeave),
                    this.setAndEmitConnectionState(Qa.Connected),
                    this.emit(js.Connected),
                    this.registerConnectionReconcile());
                })),
              (this.disconnect = function () {
                for (
                  var e = arguments.length, i = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  i[n] = arguments[n];
                return Zi(t, [...i], void 0, function () {
                  var e = this;
                  let t =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  return (function* () {
                    var i, n, s, r;
                    const o = yield e.disconnectLock.lock();
                    try {
                      if (e.state === Qa.Disconnected)
                        return void e.log.debug(
                          "already disconnected",
                          e.logContext,
                        );
                      (e.log.info(
                        "disconnect from room",
                        Object.assign({}, e.logContext),
                      ),
                        (e.state === Qa.Connecting ||
                          e.state === Qa.Reconnecting ||
                          e.isResuming) &&
                          (e.log.warn("abort connection attempt", e.logContext),
                          null === (i = e.abortController) ||
                            void 0 === i ||
                            i.abort(),
                          null ===
                            (s =
                              null === (n = e.connectFuture) || void 0 === n
                                ? void 0
                                : n.reject) ||
                            void 0 === s ||
                            s.call(
                              n,
                              new qs(
                                "Client initiated disconnect",
                                Ns.Cancelled,
                              ),
                            ),
                          (e.connectFuture = void 0)),
                        (null === (r = e.engine) || void 0 === r
                          ? void 0
                          : r.client.isDisconnected) ||
                          (yield e.engine.client.sendLeave()),
                        e.engine && (yield e.engine.close()),
                        e.handleDisconnect(t, Ye.CLIENT_INITIATED),
                        (e.engine = void 0));
                    } finally {
                      o();
                    }
                  })();
                });
              }),
              (this.onPageLeave = () =>
                Zi(this, void 0, void 0, function* () {
                  (this.log.info(
                    "Page leave detected, disconnecting",
                    this.logContext,
                  ),
                    yield this.disconnect());
                })),
              (this.startAudio = () =>
                Zi(this, void 0, void 0, function* () {
                  const e = [],
                    t = er();
                  if (t && "iOS" === t.os) {
                    const t = "livekit-dummy-audio-el";
                    let i = document.getElementById(t);
                    if (!i) {
                      ((i = document.createElement("audio")),
                        (i.id = t),
                        (i.autoplay = !0),
                        (i.hidden = !0));
                      const e = eo();
                      e.enabled = !0;
                      const n = new MediaStream([e]);
                      ((i.srcObject = n),
                        document.addEventListener("visibilitychange", () => {
                          i &&
                            ((i.srcObject = document.hidden ? null : n),
                            document.hidden ||
                              (this.log.debug(
                                "page visible again, triggering startAudio to resume playback and update playback status",
                                this.logContext,
                              ),
                              this.startAudio()));
                        }),
                        document.body.append(i),
                        this.once(js.Disconnected, () => {
                          (null == i || i.remove(), (i = null));
                        }));
                    }
                    e.push(i);
                  }
                  this.remoteParticipants.forEach((t) => {
                    t.audioTrackPublications.forEach((t) => {
                      t.track &&
                        t.track.attachedElements.forEach((t) => {
                          e.push(t);
                        });
                    });
                  });
                  try {
                    (yield Promise.all([
                      this.acquireAudioContext(),
                      ...e.map((e) => ((e.muted = !1), e.play())),
                    ]),
                      this.handleAudioPlaybackStarted());
                  } catch (e) {
                    throw (this.handleAudioPlaybackFailed(e), e);
                  }
                })),
              (this.startVideo = () =>
                Zi(this, void 0, void 0, function* () {
                  const e = [];
                  for (const t of this.remoteParticipants.values())
                    t.videoTrackPublications.forEach((t) => {
                      var i;
                      null === (i = t.track) ||
                        void 0 === i ||
                        i.attachedElements.forEach((t) => {
                          e.includes(t) || e.push(t);
                        });
                    });
                  yield Promise.all(e.map((e) => e.play()))
                    .then(() => {
                      this.handleVideoPlaybackStarted();
                    })
                    .catch((e) => {
                      "NotAllowedError" === e.name
                        ? this.handleVideoPlaybackFailed()
                        : this.log.warn(
                            "Resuming video playback failed, make sure you call `startVideo` directly in a user gesture handler",
                            this.logContext,
                          );
                    });
                })),
              (this.handleRestarting = () => {
                (this.clearConnectionReconcile(), (this.isResuming = !1));
                for (const e of this.remoteParticipants.values())
                  this.handleParticipantDisconnected(e.identity, e);
                this.setAndEmitConnectionState(Qa.Reconnecting) &&
                  this.emit(js.Reconnecting);
              }),
              (this.handleSignalRestarted = (e) =>
                Zi(this, void 0, void 0, function* () {
                  (this.log.debug(
                    "signal reconnected to server, region ".concat(
                      e.serverRegion,
                    ),
                    Object.assign(Object.assign({}, this.logContext), {
                      region: e.serverRegion,
                    }),
                  ),
                    (this.bufferedEvents = []),
                    this.applyJoinResponse(e));
                  try {
                    yield this.localParticipant.republishAllTracks(void 0, !0);
                  } catch (e) {
                    this.log.error(
                      "error trying to re-publish tracks after reconnection",
                      Object.assign(Object.assign({}, this.logContext), {
                        error: e,
                      }),
                    );
                  }
                  try {
                    (yield this.engine.waitForRestarted(),
                      this.log.debug(
                        "fully reconnected to server",
                        Object.assign(Object.assign({}, this.logContext), {
                          region: e.serverRegion,
                        }),
                      ));
                  } catch (e) {
                    return;
                  }
                  (this.setAndEmitConnectionState(Qa.Connected),
                    this.emit(js.Reconnected),
                    this.registerConnectionReconcile(),
                    this.emitBufferedEvents());
                })),
              (this.handleParticipantUpdates = (e) => {
                e.forEach((e) => {
                  var t;
                  if (e.identity === this.localParticipant.identity)
                    return void this.localParticipant.updateInfo(e);
                  "" === e.identity &&
                    (e.identity =
                      null !== (t = this.sidToIdentity.get(e.sid)) &&
                      void 0 !== t
                        ? t
                        : "");
                  let i = this.remoteParticipants.get(e.identity);
                  e.state === st.DISCONNECTED
                    ? this.handleParticipantDisconnected(e.identity, i)
                    : (i = this.getOrCreateParticipant(e.identity, e));
                });
              }),
              (this.handleActiveSpeakersUpdate = (e) => {
                const t = [],
                  i = {};
                (e.forEach((e) => {
                  if (((i[e.sid] = !0), e.sid === this.localParticipant.sid))
                    ((this.localParticipant.audioLevel = e.level),
                      this.localParticipant.setIsSpeaking(!0),
                      t.push(this.localParticipant));
                  else {
                    const i = this.getRemoteParticipantBySid(e.sid);
                    i &&
                      ((i.audioLevel = e.level),
                      i.setIsSpeaking(!0),
                      t.push(i));
                  }
                }),
                  i[this.localParticipant.sid] ||
                    ((this.localParticipant.audioLevel = 0),
                    this.localParticipant.setIsSpeaking(!1)),
                  this.remoteParticipants.forEach((e) => {
                    i[e.sid] || ((e.audioLevel = 0), e.setIsSpeaking(!1));
                  }),
                  (this.activeSpeakers = t),
                  this.emitWhenConnected(js.ActiveSpeakersChanged, t));
              }),
              (this.handleSpeakersChanged = (e) => {
                const t = new Map();
                (this.activeSpeakers.forEach((e) => {
                  const i = this.remoteParticipants.get(e.identity);
                  (i && i.sid !== e.sid) || t.set(e.sid, e);
                }),
                  e.forEach((e) => {
                    let i = this.getRemoteParticipantBySid(e.sid);
                    (e.sid === this.localParticipant.sid &&
                      (i = this.localParticipant),
                      i &&
                        ((i.audioLevel = e.level),
                        i.setIsSpeaking(e.active),
                        e.active ? t.set(e.sid, i) : t.delete(e.sid)));
                  }));
                const i = Array.from(t.values());
                (i.sort((e, t) => t.audioLevel - e.audioLevel),
                  (this.activeSpeakers = i),
                  this.emitWhenConnected(js.ActiveSpeakersChanged, i));
              }),
              (this.handleStreamStateUpdate = (e) => {
                e.streamStates.forEach((e) => {
                  const t = this.getRemoteParticipantBySid(e.participantSid);
                  if (!t) return;
                  const i = t.getTrackPublicationBySid(e.trackSid);
                  if (!i || !i.track) return;
                  const n = dr.streamStateFromProto(e.state);
                  n !== i.track.streamState &&
                    ((i.track.streamState = n),
                    t.emit(Fs.TrackStreamStateChanged, i, i.track.streamState),
                    this.emitWhenConnected(
                      js.TrackStreamStateChanged,
                      i,
                      i.track.streamState,
                      t,
                    ));
                });
              }),
              (this.handleSubscriptionPermissionUpdate = (e) => {
                const t = this.getRemoteParticipantBySid(e.participantSid);
                if (!t) return;
                const i = t.getTrackPublicationBySid(e.trackSid);
                i && i.setAllowed(e.allowed);
              }),
              (this.handleSubscriptionError = (e) => {
                const t = Array.from(this.remoteParticipants.values()).find(
                  (t) => t.trackPublications.has(e.trackSid),
                );
                if (!t) return;
                const i = t.getTrackPublicationBySid(e.trackSid);
                i && i.setSubscriptionError(e.err);
              }),
              (this.handleDataPacket = (e) => {
                const t = this.remoteParticipants.get(e.participantIdentity);
                if ("user" === e.value.case)
                  this.handleUserPacket(t, e.value.value, e.kind);
                else if ("transcription" === e.value.case)
                  this.handleTranscription(t, e.value.value);
                else if ("sipDtmf" === e.value.case)
                  this.handleSipDtmf(t, e.value.value);
                else if ("chatMessage" === e.value.case)
                  this.handleChatMessage(t, e.value.value);
                else if ("metrics" === e.value.case)
                  this.handleMetrics(e.value.value, t);
                else if ("streamHeader" === e.value.case)
                  this.handleStreamHeader(e.value.value, e.participantIdentity);
                else if ("streamChunk" === e.value.case)
                  this.handleStreamChunk(e.value.value);
                else if ("streamTrailer" === e.value.case)
                  this.handleStreamTrailer(e.value.value);
                else if ("rpcRequest" === e.value.case) {
                  const t = e.value.value;
                  this.handleIncomingRpcRequest(
                    e.participantIdentity,
                    t.id,
                    t.method,
                    t.payload,
                    t.responseTimeoutMs,
                    t.version,
                  );
                }
              }),
              (this.handleUserPacket = (e, t, i) => {
                (this.emit(js.DataReceived, t.payload, e, i, t.topic),
                  null == e || e.emit(Fs.DataReceived, t.payload, i));
              }),
              (this.handleSipDtmf = (e, t) => {
                (this.emit(js.SipDTMFReceived, t, e),
                  null == e || e.emit(Fs.SipDTMFReceived, t));
              }),
              (this.bufferedSegments = new Map()),
              (this.handleTranscription = (e, t) => {
                const i =
                    t.transcribedParticipantIdentity ===
                    this.localParticipant.identity
                      ? this.localParticipant
                      : this.getParticipantByIdentity(
                          t.transcribedParticipantIdentity,
                        ),
                  n = null == i ? void 0 : i.trackPublications.get(t.trackId),
                  s = (function (e, t) {
                    return e.segments.map((e) => {
                      let {
                        id: i,
                        text: n,
                        language: s,
                        startTime: r,
                        endTime: o,
                        final: a,
                      } = e;
                      var c;
                      const d =
                          null !== (c = t.get(i)) && void 0 !== c
                            ? c
                            : Date.now(),
                        l = Date.now();
                      return (
                        a ? t.delete(i) : t.set(i, d),
                        {
                          id: i,
                          text: n,
                          startTime: Number.parseInt(r.toString()),
                          endTime: Number.parseInt(o.toString()),
                          final: a,
                          language: s,
                          firstReceivedTime: d,
                          lastReceivedTime: l,
                        }
                      );
                    });
                  })(t, this.transcriptionReceivedTimes);
                (null == n || n.emit(Vs.TranscriptionReceived, s),
                  null == i || i.emit(Fs.TranscriptionReceived, s, n),
                  this.emit(js.TranscriptionReceived, s, i, n));
              }),
              (this.handleChatMessage = (e, t) => {
                const i = (function (e) {
                  const {
                    id: t,
                    timestamp: i,
                    message: n,
                    editTimestamp: s,
                  } = e;
                  return {
                    id: t,
                    timestamp: Number.parseInt(i.toString()),
                    editTimestamp: s ? Number.parseInt(s.toString()) : void 0,
                    message: n,
                  };
                })(t);
                this.emit(js.ChatMessage, i, e);
              }),
              (this.handleMetrics = (e, t) => {
                this.emit(js.MetricsReceived, e, t);
              }),
              (this.handleAudioPlaybackStarted = () => {
                this.canPlaybackAudio ||
                  ((this.audioEnabled = !0),
                  this.emit(js.AudioPlaybackStatusChanged, !0));
              }),
              (this.handleAudioPlaybackFailed = (e) => {
                (this.log.warn(
                  "could not playback audio",
                  Object.assign(Object.assign({}, this.logContext), {
                    error: e,
                  }),
                ),
                  this.canPlaybackAudio &&
                    ((this.audioEnabled = !1),
                    this.emit(js.AudioPlaybackStatusChanged, !1)));
              }),
              (this.handleVideoPlaybackStarted = () => {
                this.isVideoPlaybackBlocked &&
                  ((this.isVideoPlaybackBlocked = !1),
                  this.emit(js.VideoPlaybackStatusChanged, !0));
              }),
              (this.handleVideoPlaybackFailed = () => {
                this.isVideoPlaybackBlocked ||
                  ((this.isVideoPlaybackBlocked = !0),
                  this.emit(js.VideoPlaybackStatusChanged, !1));
              }),
              (this.handleDeviceChange = () =>
                Zi(this, void 0, void 0, function* () {
                  var e;
                  ("iOS" !==
                    (null === (e = er()) || void 0 === e ? void 0 : e.os) &&
                    (yield this.selectDefaultDevices()),
                    this.emit(js.MediaDevicesChanged));
                })),
              (this.handleRoomUpdate = (e) => {
                const t = this.roomInfo;
                ((this.roomInfo = e),
                  t &&
                    t.metadata !== e.metadata &&
                    this.emitWhenConnected(js.RoomMetadataChanged, e.metadata),
                  (null == t ? void 0 : t.activeRecording) !==
                    e.activeRecording &&
                    this.emitWhenConnected(
                      js.RecordingStatusChanged,
                      e.activeRecording,
                    ));
              }),
              (this.handleConnectionQualityUpdate = (e) => {
                e.updates.forEach((e) => {
                  if (e.participantSid === this.localParticipant.sid)
                    return void this.localParticipant.setConnectionQuality(
                      e.quality,
                    );
                  const t = this.getRemoteParticipantBySid(e.participantSid);
                  t && t.setConnectionQuality(e.quality);
                });
              }),
              (this.onLocalParticipantMetadataChanged = (e) => {
                this.emit(
                  js.ParticipantMetadataChanged,
                  e,
                  this.localParticipant,
                );
              }),
              (this.onLocalParticipantNameChanged = (e) => {
                this.emit(js.ParticipantNameChanged, e, this.localParticipant);
              }),
              (this.onLocalAttributesChanged = (e) => {
                this.emit(
                  js.ParticipantAttributesChanged,
                  e,
                  this.localParticipant,
                );
              }),
              (this.onLocalTrackMuted = (e) => {
                this.emit(js.TrackMuted, e, this.localParticipant);
              }),
              (this.onLocalTrackUnmuted = (e) => {
                this.emit(js.TrackUnmuted, e, this.localParticipant);
              }),
              (this.onTrackProcessorUpdate = (e) => {
                var t;
                null === (t = null == e ? void 0 : e.onPublish) ||
                  void 0 === t ||
                  t.call(e, this);
              }),
              (this.onLocalTrackPublished = (e) =>
                Zi(this, void 0, void 0, function* () {
                  var t, i, n, s, r, o;
                  (null === (t = e.track) ||
                    void 0 === t ||
                    t.on(Vs.TrackProcessorUpdate, this.onTrackProcessorUpdate),
                    null === (i = e.track) ||
                      void 0 === i ||
                      i.on(Vs.Restarted, this.onLocalTrackRestarted),
                    null ===
                      (r =
                        null ===
                          (s =
                            null === (n = e.track) || void 0 === n
                              ? void 0
                              : n.getProcessor()) || void 0 === s
                          ? void 0
                          : s.onPublish) ||
                      void 0 === r ||
                      r.call(s, this),
                    this.emit(js.LocalTrackPublished, e, this.localParticipant),
                    po(e.track) &&
                      (yield e.track.checkForSilence()) &&
                      this.emit(js.LocalAudioSilenceDetected, e));
                  const a = yield null === (o = e.track) || void 0 === o
                      ? void 0
                      : o.getDeviceId(!1),
                    c = Eo(e.source);
                  c &&
                    a &&
                    a !== this.localParticipant.activeDeviceMap.get(c) &&
                    (this.localParticipant.activeDeviceMap.set(c, a),
                    this.emit(js.ActiveDeviceChanged, c, a));
                })),
              (this.onLocalTrackUnpublished = (e) => {
                var t, i;
                (null === (t = e.track) ||
                  void 0 === t ||
                  t.off(Vs.TrackProcessorUpdate, this.onTrackProcessorUpdate),
                  null === (i = e.track) ||
                    void 0 === i ||
                    i.off(Vs.Restarted, this.onLocalTrackRestarted),
                  this.emit(
                    js.LocalTrackUnpublished,
                    e,
                    this.localParticipant,
                  ));
              }),
              (this.onLocalTrackRestarted = (e) =>
                Zi(this, void 0, void 0, function* () {
                  const t = yield e.getDeviceId(!1),
                    i = Eo(e.source);
                  i &&
                    t &&
                    t !== this.localParticipant.activeDeviceMap.get(i) &&
                    (this.log.debug(
                      "local track restarted, setting "
                        .concat(i, " ")
                        .concat(t, " active"),
                      this.logContext,
                    ),
                    this.localParticipant.activeDeviceMap.set(i, t),
                    this.emit(js.ActiveDeviceChanged, i, t));
                })),
              (this.onLocalConnectionQualityChanged = (e) => {
                this.emit(
                  js.ConnectionQualityChanged,
                  e,
                  this.localParticipant,
                );
              }),
              (this.onMediaDevicesError = (e, t) => {
                this.emit(js.MediaDevicesError, e, t);
              }),
              (this.onLocalParticipantPermissionsChanged = (e) => {
                this.emit(
                  js.ParticipantPermissionsChanged,
                  e,
                  this.localParticipant,
                );
              }),
              (this.onLocalChatMessageSent = (e) => {
                this.emit(js.ChatMessage, e, this.localParticipant);
              }),
              this.setMaxListeners(100),
              (this.remoteParticipants = new Map()),
              (this.sidToIdentity = new Map()),
              (this.options = Object.assign(Object.assign({}, ma), e)),
              (this.log = Gi(
                null !== (i = this.options.loggerName) && void 0 !== i
                  ? i
                  : Bi.Room,
              )),
              (this.transcriptionReceivedTimes = new Map()),
              (this.options.audioCaptureDefaults = Object.assign(
                Object.assign({}, ha),
                null == e ? void 0 : e.audioCaptureDefaults,
              )),
              (this.options.videoCaptureDefaults = Object.assign(
                Object.assign({}, pa),
                null == e ? void 0 : e.videoCaptureDefaults,
              )),
              (this.options.publishDefaults = Object.assign(
                Object.assign({}, ua),
                null == e ? void 0 : e.publishDefaults,
              )),
              this.maybeCreateEngine(),
              (this.disconnectLock = new a()),
              (this.localParticipant = new bc(
                "",
                "",
                this.engine,
                this.options,
                this.rpcHandlers,
              )),
              this.options.videoCaptureDefaults.deviceId &&
                this.localParticipant.activeDeviceMap.set(
                  "videoinput",
                  no(this.options.videoCaptureDefaults.deviceId),
                ),
              this.options.audioCaptureDefaults.deviceId &&
                this.localParticipant.activeDeviceMap.set(
                  "audioinput",
                  no(this.options.audioCaptureDefaults.deviceId),
                ),
              (null === (n = this.options.audioOutput) || void 0 === n
                ? void 0
                : n.deviceId) &&
                this.switchActiveDevice(
                  "audiooutput",
                  no(this.options.audioOutput.deviceId),
                ).catch((e) =>
                  this.log.warn(
                    "Could not set audio output: ".concat(e.message),
                    this.logContext,
                  ),
                ),
              this.options.e2ee && this.setupE2EE(),
              Ur())
            ) {
              const e = new AbortController();
              (null === (s = navigator.mediaDevices) ||
                void 0 === s ||
                s.addEventListener("devicechange", this.handleDeviceChange, {
                  signal: e.signal,
                }),
                Tc.cleanupRegistry &&
                  Tc.cleanupRegistry.register(this, () => {
                    e.abort();
                  }));
            }
          }
          registerTextStreamHandler(e, t) {
            if (this.textStreamHandlers.has(e))
              throw new TypeError(
                'A text stream handler for topic "'.concat(
                  e,
                  '" has already been set.',
                ),
              );
            this.textStreamHandlers.set(e, t);
          }
          unregisterTextStreamHandler(e) {
            this.textStreamHandlers.delete(e);
          }
          registerByteStreamHandler(e, t) {
            if (this.byteStreamHandlers.has(e))
              throw new TypeError(
                'A byte stream handler for topic "'.concat(
                  e,
                  '" has already been set.',
                ),
              );
            this.byteStreamHandlers.set(e, t);
          }
          unregisterByteStreamHandler(e) {
            this.byteStreamHandlers.delete(e);
          }
          registerRpcMethod(e, t) {
            if (this.rpcHandlers.has(e))
              throw Error(
                "RPC handler already registered for method ".concat(
                  e,
                  ", unregisterRpcMethod before trying to register again",
                ),
              );
            this.rpcHandlers.set(e, t);
          }
          unregisterRpcMethod(e) {
            this.rpcHandlers.delete(e);
          }
          handleIncomingRpcRequest(e, t, i, n, s, r) {
            return Zi(this, void 0, void 0, function* () {
              if ((yield this.engine.publishRpcAck(e, t), 1 !== r))
                return void (yield this.engine.publishRpcResponse(
                  e,
                  t,
                  null,
                  ba.builtIn("UNSUPPORTED_VERSION"),
                ));
              const o = this.rpcHandlers.get(i);
              if (!o)
                return void (yield this.engine.publishRpcResponse(
                  e,
                  t,
                  null,
                  ba.builtIn("UNSUPPORTED_METHOD"),
                ));
              let a = null,
                c = null;
              try {
                const r = yield o({
                  requestId: t,
                  callerIdentity: e,
                  payload: n,
                  responseTimeout: s,
                });
                ka(r) > 15360
                  ? ((a = ba.builtIn("RESPONSE_PAYLOAD_TOO_LARGE")),
                    console.warn(
                      "RPC Response payload too large for ".concat(i),
                    ))
                  : (c = r);
              } catch (e) {
                e instanceof ba
                  ? (a = e)
                  : (console.warn(
                      "Uncaught error returned by RPC handler for ".concat(
                        i,
                        ". Returning APPLICATION_ERROR instead.",
                      ),
                      e,
                    ),
                    (a = ba.builtIn("APPLICATION_ERROR")));
              }
              yield this.engine.publishRpcResponse(e, t, c, a);
            });
          }
          setE2EEEnabled(e) {
            return Zi(this, void 0, void 0, function* () {
              if (!this.e2eeManager)
                throw Error(
                  "e2ee not configured, please set e2ee settings within the room options",
                );
              (yield Promise.all([this.localParticipant.setE2EEEnabled(e)]),
                "" !== this.localParticipant.identity &&
                  this.e2eeManager.setParticipantCryptorEnabled(
                    e,
                    this.localParticipant.identity,
                  ));
            });
          }
          setupE2EE() {
            var e;
            this.options.e2ee &&
              ("e2eeManager" in this.options.e2ee
                ? (this.e2eeManager = this.options.e2ee.e2eeManager)
                : (this.e2eeManager = new Mo(this.options.e2ee)),
              this.e2eeManager.on(
                ms.ParticipantEncryptionStatusChanged,
                (e, t) => {
                  (vo(t) && (this.isE2EEEnabled = e),
                    this.emit(js.ParticipantEncryptionStatusChanged, e, t));
                },
              ),
              this.e2eeManager.on(ms.EncryptionError, (e) =>
                this.emit(js.EncryptionError, e),
              ),
              null === (e = this.e2eeManager) || void 0 === e || e.setup(this));
          }
          get logContext() {
            var e;
            return {
              room: this.name,
              roomID:
                null === (e = this.roomInfo) || void 0 === e ? void 0 : e.sid,
              participant: this.localParticipant.identity,
              pID: this.localParticipant.sid,
            };
          }
          get isRecording() {
            var e, t;
            return (
              null !==
                (t =
                  null === (e = this.roomInfo) || void 0 === e
                    ? void 0
                    : e.activeRecording) &&
              void 0 !== t &&
              t
            );
          }
          getSid() {
            return Zi(this, void 0, void 0, function* () {
              return this.state === Qa.Disconnected
                ? ""
                : this.roomInfo && "" !== this.roomInfo.sid
                  ? this.roomInfo.sid
                  : new Promise((e, t) => {
                      const i = (t) => {
                        "" !== t.sid &&
                          (this.engine.off(Bs.RoomUpdate, i), e(t.sid));
                      };
                      (this.engine.on(Bs.RoomUpdate, i),
                        this.once(js.Disconnected, () => {
                          (this.engine.off(Bs.RoomUpdate, i),
                            t(
                              "Room disconnected before room server id was available",
                            ));
                        }));
                    });
            });
          }
          get name() {
            var e, t;
            return null !==
              (t =
                null === (e = this.roomInfo) || void 0 === e
                  ? void 0
                  : e.name) && void 0 !== t
              ? t
              : "";
          }
          get metadata() {
            var e;
            return null === (e = this.roomInfo) || void 0 === e
              ? void 0
              : e.metadata;
          }
          get numParticipants() {
            var e, t;
            return null !==
              (t =
                null === (e = this.roomInfo) || void 0 === e
                  ? void 0
                  : e.numParticipants) && void 0 !== t
              ? t
              : 0;
          }
          get numPublishers() {
            var e, t;
            return null !==
              (t =
                null === (e = this.roomInfo) || void 0 === e
                  ? void 0
                  : e.numPublishers) && void 0 !== t
              ? t
              : 0;
          }
          maybeCreateEngine() {
            (this.engine && !this.engine.isClosed) ||
              ((this.engine = new Ya(this.options)),
              this.engine
                .on(Bs.ParticipantUpdate, this.handleParticipantUpdates)
                .on(Bs.RoomUpdate, this.handleRoomUpdate)
                .on(Bs.SpeakersChanged, this.handleSpeakersChanged)
                .on(Bs.StreamStateChanged, this.handleStreamStateUpdate)
                .on(
                  Bs.ConnectionQualityUpdate,
                  this.handleConnectionQualityUpdate,
                )
                .on(Bs.SubscriptionError, this.handleSubscriptionError)
                .on(
                  Bs.SubscriptionPermissionUpdate,
                  this.handleSubscriptionPermissionUpdate,
                )
                .on(Bs.MediaTrackAdded, (e, t, i) => {
                  this.onTrackAdded(e, t, i);
                })
                .on(Bs.Disconnected, (e) => {
                  this.handleDisconnect(
                    this.options.stopLocalTrackOnUnpublish,
                    e,
                  );
                })
                .on(Bs.ActiveSpeakersUpdate, this.handleActiveSpeakersUpdate)
                .on(Bs.DataPacketReceived, this.handleDataPacket)
                .on(Bs.Resuming, () => {
                  (this.clearConnectionReconcile(),
                    (this.isResuming = !0),
                    this.log.info(
                      "Resuming signal connection",
                      this.logContext,
                    ),
                    this.setAndEmitConnectionState(Qa.SignalReconnecting) &&
                      this.emit(js.SignalReconnecting));
                })
                .on(Bs.Resumed, () => {
                  (this.registerConnectionReconcile(),
                    (this.isResuming = !1),
                    this.log.info("Resumed signal connection", this.logContext),
                    this.updateSubscriptions(),
                    this.emitBufferedEvents(),
                    this.setAndEmitConnectionState(Qa.Connected) &&
                      this.emit(js.Reconnected));
                })
                .on(Bs.SignalResumed, () => {
                  ((this.bufferedEvents = []),
                    (this.state === Qa.Reconnecting || this.isResuming) &&
                      this.sendSyncState());
                })
                .on(Bs.Restarting, this.handleRestarting)
                .on(Bs.SignalRestarted, this.handleSignalRestarted)
                .on(Bs.Offline, () => {
                  this.setAndEmitConnectionState(Qa.Reconnecting) &&
                    this.emit(js.Reconnecting);
                })
                .on(Bs.DCBufferStatusChanged, (e, t) => {
                  this.emit(js.DCBufferStatusChanged, e, t);
                })
                .on(Bs.LocalTrackSubscribed, (e) => {
                  const t = this.localParticipant
                    .getTrackPublications()
                    .find((t) => {
                      let { trackSid: i } = t;
                      return i === e;
                    });
                  t
                    ? (this.localParticipant.emit(Fs.LocalTrackSubscribed, t),
                      this.emitWhenConnected(
                        js.LocalTrackSubscribed,
                        t,
                        this.localParticipant,
                      ))
                    : this.log.warn(
                        "could not find local track subscription for subscribed event",
                        this.logContext,
                      );
                })
                .on(Bs.RoomMoved, (e) => {
                  (this.log.debug("room moved", e),
                    e.room && this.handleRoomUpdate(e.room),
                    this.remoteParticipants.forEach((e, t) => {
                      this.handleParticipantDisconnected(t, e);
                    }),
                    this.emit(js.Moved, e.room.name),
                    e.participant
                      ? this.handleParticipantUpdates([
                          e.participant,
                          ...e.otherParticipants,
                        ])
                      : this.handleParticipantUpdates(e.otherParticipants));
                }),
              this.localParticipant &&
                this.localParticipant.setupEngine(this.engine),
              this.e2eeManager && this.e2eeManager.setupEngine(this.engine));
          }
          static getLocalDevices(e) {
            let t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            return Ao.getInstance().getDevices(e, t);
          }
          prepareConnection(e, t) {
            return Zi(this, void 0, void 0, function* () {
              if (this.state === Qa.Disconnected) {
                this.log.debug(
                  "prepareConnection to ".concat(e),
                  this.logContext,
                );
                try {
                  if (Fr(new URL(e)) && t) {
                    this.regionUrlProvider = new Za(e, t);
                    const i =
                      yield this.regionUrlProvider.getNextBestRegionUrl();
                    i &&
                      this.state === Qa.Disconnected &&
                      ((this.regionUrl = i),
                      yield fetch(so(i), { method: "HEAD" }),
                      this.log.debug(
                        "prepared connection to ".concat(i),
                        this.logContext,
                      ));
                  } else yield fetch(so(e), { method: "HEAD" });
                } catch (e) {
                  this.log.warn(
                    "could not prepare connection",
                    Object.assign(Object.assign({}, this.logContext), {
                      error: e,
                    }),
                  );
                }
              }
            });
          }
          getParticipantByIdentity(e) {
            return this.localParticipant.identity === e
              ? this.localParticipant
              : this.remoteParticipants.get(e);
          }
          clearConnectionFutures() {
            this.connectFuture = void 0;
          }
          simulateScenario(e, t) {
            return Zi(this, void 0, void 0, function* () {
              let i,
                n = () => {};
              switch (e) {
                case "signal-reconnect":
                  yield this.engine.client.handleOnClose("simulate disconnect");
                  break;
                case "speaker":
                  i = new Ei({ scenario: { case: "speakerUpdate", value: 3 } });
                  break;
                case "node-failure":
                  i = new Ei({ scenario: { case: "nodeFailure", value: !0 } });
                  break;
                case "server-leave":
                  i = new Ei({ scenario: { case: "serverLeave", value: !0 } });
                  break;
                case "migration":
                  i = new Ei({ scenario: { case: "migration", value: !0 } });
                  break;
                case "resume-reconnect":
                  (this.engine.failNext(),
                    yield this.engine.client.handleOnClose(
                      "simulate resume-disconnect",
                    ));
                  break;
                case "disconnect-signal-on-resume":
                  ((n = () =>
                    Zi(this, void 0, void 0, function* () {
                      yield this.engine.client.handleOnClose(
                        "simulate resume-disconnect",
                      );
                    })),
                    (i = new Ei({
                      scenario: { case: "disconnectSignalOnResume", value: !0 },
                    })));
                  break;
                case "disconnect-signal-on-resume-no-messages":
                  ((n = () =>
                    Zi(this, void 0, void 0, function* () {
                      yield this.engine.client.handleOnClose(
                        "simulate resume-disconnect",
                      );
                    })),
                    (i = new Ei({
                      scenario: {
                        case: "disconnectSignalOnResumeNoMessages",
                        value: !0,
                      },
                    })));
                  break;
                case "full-reconnect":
                  ((this.engine.fullReconnectOnNext = !0),
                    yield this.engine.client.handleOnClose(
                      "simulate full-reconnect",
                    ));
                  break;
                case "force-tcp":
                case "force-tls":
                  ((i = new Ei({
                    scenario: {
                      case: "switchCandidateProtocol",
                      value: "force-tls" === e ? 2 : 1,
                    },
                  })),
                    (n = () =>
                      Zi(this, void 0, void 0, function* () {
                        const e = this.engine.client.onLeave;
                        e &&
                          e(
                            new si({
                              reason: Ye.CLIENT_INITIATED,
                              action: ri.RECONNECT,
                            }),
                          );
                      })));
                  break;
                case "subscriber-bandwidth":
                  if (void 0 === t || "number" != typeof t)
                    throw new Error(
                      "subscriber-bandwidth requires a number as argument",
                    );
                  i = new Ei({
                    scenario: { case: "subscriberBandwidth", value: ao(t) },
                  });
                  break;
                case "leave-full-reconnect":
                  i = new Ei({
                    scenario: { case: "leaveRequestFullReconnect", value: !0 },
                  });
              }
              i &&
                (yield this.engine.client.sendSimulateScenario(i), yield n());
            });
          }
          get canPlaybackAudio() {
            return this.audioEnabled;
          }
          get canPlaybackVideo() {
            return !this.isVideoPlaybackBlocked;
          }
          getActiveDevice(e) {
            return this.localParticipant.activeDeviceMap.get(e);
          }
          switchActiveDevice(e, t) {
            return Zi(this, arguments, void 0, function (e, t) {
              var i = this;
              let n =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2];
              return (function* () {
                var s, r, o, a, c, d, l;
                let u = !0,
                  h = !1;
                const p = n ? { exact: t } : t;
                if ("audioinput" === e) {
                  h = 0 === i.localParticipant.audioTrackPublications.size;
                  const t =
                    null !== (s = i.getActiveDevice(e)) && void 0 !== s
                      ? s
                      : i.options.audioCaptureDefaults.deviceId;
                  i.options.audioCaptureDefaults.deviceId = p;
                  const n = Array.from(
                    i.localParticipant.audioTrackPublications.values(),
                  ).filter((e) => e.source === dr.Source.Microphone);
                  try {
                    u = (yield Promise.all(
                      n.map((e) => {
                        var t;
                        return null === (t = e.audioTrack) || void 0 === t
                          ? void 0
                          : t.setDeviceId(p);
                      }),
                    )).every((e) => !0 === e);
                  } catch (e) {
                    throw ((i.options.audioCaptureDefaults.deviceId = t), e);
                  }
                  const r = n.some((e) => {
                    var t, i;
                    return (
                      null !==
                        (i =
                          null === (t = e.track) || void 0 === t
                            ? void 0
                            : t.isMuted) &&
                      void 0 !== i &&
                      i
                    );
                  });
                  u && r && (h = !0);
                } else if ("videoinput" === e) {
                  h = 0 === i.localParticipant.videoTrackPublications.size;
                  const t =
                    null !== (r = i.getActiveDevice(e)) && void 0 !== r
                      ? r
                      : i.options.videoCaptureDefaults.deviceId;
                  i.options.videoCaptureDefaults.deviceId = p;
                  const n = Array.from(
                    i.localParticipant.videoTrackPublications.values(),
                  ).filter((e) => e.source === dr.Source.Camera);
                  try {
                    u = (yield Promise.all(
                      n.map((e) => {
                        var t;
                        return null === (t = e.videoTrack) || void 0 === t
                          ? void 0
                          : t.setDeviceId(p);
                      }),
                    )).every((e) => !0 === e);
                  } catch (e) {
                    throw ((i.options.videoCaptureDefaults.deviceId = t), e);
                  }
                  const s = n.some((e) => {
                    var t, i;
                    return (
                      null !==
                        (i =
                          null === (t = e.track) || void 0 === t
                            ? void 0
                            : t.isMuted) &&
                      void 0 !== i &&
                      i
                    );
                  });
                  u && s && (h = !0);
                } else if ("audiooutput" === e) {
                  if (
                    ((h = !0),
                    (!Dr() && !i.options.webAudioMix) ||
                      (i.options.webAudioMix &&
                        i.audioContext &&
                        !("setSinkId" in i.audioContext)))
                  )
                    throw new Error(
                      "cannot switch audio output, setSinkId not supported",
                    );
                  (i.options.webAudioMix &&
                    (t =
                      null !==
                        (o = yield Ao.getInstance().normalizeDeviceId(
                          "audiooutput",
                          t,
                        )) && void 0 !== o
                        ? o
                        : ""),
                    (null !== (a = (l = i.options).audioOutput) &&
                      void 0 !== a) ||
                      (l.audioOutput = {}));
                  const n =
                    null !== (c = i.getActiveDevice(e)) && void 0 !== c
                      ? c
                      : i.options.audioOutput.deviceId;
                  i.options.audioOutput.deviceId = t;
                  try {
                    (i.options.webAudioMix &&
                      (null === (d = i.audioContext) ||
                        void 0 === d ||
                        d.setSinkId(t)),
                      yield Promise.all(
                        Array.from(i.remoteParticipants.values()).map((e) =>
                          e.setAudioOutput({ deviceId: t }),
                        ),
                      ));
                  } catch (e) {
                    throw ((i.options.audioOutput.deviceId = n), e);
                  }
                }
                return (
                  h &&
                    (i.localParticipant.activeDeviceMap.set(e, t),
                    i.emit(js.ActiveDeviceChanged, e, t)),
                  u
                );
              })();
            });
          }
          setupLocalParticipantEvents() {
            this.localParticipant
              .on(
                Fs.ParticipantMetadataChanged,
                this.onLocalParticipantMetadataChanged,
              )
              .on(Fs.ParticipantNameChanged, this.onLocalParticipantNameChanged)
              .on(Fs.AttributesChanged, this.onLocalAttributesChanged)
              .on(Fs.TrackMuted, this.onLocalTrackMuted)
              .on(Fs.TrackUnmuted, this.onLocalTrackUnmuted)
              .on(Fs.LocalTrackPublished, this.onLocalTrackPublished)
              .on(Fs.LocalTrackUnpublished, this.onLocalTrackUnpublished)
              .on(
                Fs.ConnectionQualityChanged,
                this.onLocalConnectionQualityChanged,
              )
              .on(Fs.MediaDevicesError, this.onMediaDevicesError)
              .on(Fs.AudioStreamAcquired, this.startAudio)
              .on(Fs.ChatMessage, this.onLocalChatMessageSent)
              .on(
                Fs.ParticipantPermissionsChanged,
                this.onLocalParticipantPermissionsChanged,
              );
          }
          recreateEngine() {
            var e;
            (null === (e = this.engine) || void 0 === e || e.close(),
              (this.engine = void 0),
              (this.isResuming = !1),
              this.remoteParticipants.clear(),
              this.sidToIdentity.clear(),
              (this.bufferedEvents = []),
              this.maybeCreateEngine());
          }
          onTrackAdded(e, t, i) {
            if (
              this.state === Qa.Connecting ||
              this.state === Qa.Reconnecting
            ) {
              const n = () => {
                  (this.onTrackAdded(e, t, i), s());
                },
                s = () => {
                  (this.off(js.Reconnected, n),
                    this.off(js.Connected, n),
                    this.off(js.Disconnected, s));
                };
              return (
                this.once(js.Reconnected, n),
                this.once(js.Connected, n),
                void this.once(js.Disconnected, s)
              );
            }
            if (this.state === Qa.Disconnected)
              return void this.log.warn(
                "skipping incoming track after Room disconnected",
                this.logContext,
              );
            if ("ended" === e.readyState)
              return void this.log.info(
                "skipping incoming track as it already ended",
                this.logContext,
              );
            const n = (function (e) {
                const t = e.split("|");
                return t.length > 1
                  ? [t[0], e.substr(t[0].length + 1)]
                  : [e, ""];
              })(t.id),
              s = n[0];
            let r = n[1],
              o = e.id;
            if (
              (r && r.startsWith("TR") && (o = r),
              s === this.localParticipant.sid)
            )
              return void this.log.warn(
                "tried to create RemoteParticipant for local participant",
                this.logContext,
              );
            const a = Array.from(this.remoteParticipants.values()).find(
              (e) => e.sid === s,
            );
            if (!a)
              return void this.log.error(
                "Tried to add a track for a participant, that's not present. Sid: ".concat(
                  s,
                ),
                this.logContext,
              );
            let c;
            (this.options.adaptiveStream &&
              (c =
                "object" == typeof this.options.adaptiveStream
                  ? this.options.adaptiveStream
                  : {}),
              a.addSubscribedMediaTrack(e, o, t, i, c));
          }
          handleDisconnect() {
            let e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0],
              t = arguments.length > 1 ? arguments[1] : void 0;
            var i;
            if (
              (this.clearConnectionReconcile(),
              (this.isResuming = !1),
              (this.bufferedEvents = []),
              this.transcriptionReceivedTimes.clear(),
              this.state !== Qa.Disconnected)
            ) {
              this.regionUrl = void 0;
              try {
                (this.remoteParticipants.forEach((e) => {
                  e.trackPublications.forEach((t) => {
                    e.unpublishTrack(t.trackSid);
                  });
                }),
                  this.localParticipant.trackPublications.forEach((t) => {
                    var i, n, s;
                    (t.track &&
                      this.localParticipant.unpublishTrack(t.track, e),
                      e
                        ? (null === (i = t.track) || void 0 === i || i.detach(),
                          null === (n = t.track) || void 0 === n || n.stop())
                        : null === (s = t.track) ||
                          void 0 === s ||
                          s.stopMonitor());
                  }),
                  this.localParticipant
                    .off(
                      Fs.ParticipantMetadataChanged,
                      this.onLocalParticipantMetadataChanged,
                    )
                    .off(
                      Fs.ParticipantNameChanged,
                      this.onLocalParticipantNameChanged,
                    )
                    .off(Fs.AttributesChanged, this.onLocalAttributesChanged)
                    .off(Fs.TrackMuted, this.onLocalTrackMuted)
                    .off(Fs.TrackUnmuted, this.onLocalTrackUnmuted)
                    .off(Fs.LocalTrackPublished, this.onLocalTrackPublished)
                    .off(Fs.LocalTrackUnpublished, this.onLocalTrackUnpublished)
                    .off(
                      Fs.ConnectionQualityChanged,
                      this.onLocalConnectionQualityChanged,
                    )
                    .off(Fs.MediaDevicesError, this.onMediaDevicesError)
                    .off(Fs.AudioStreamAcquired, this.startAudio)
                    .off(Fs.ChatMessage, this.onLocalChatMessageSent)
                    .off(
                      Fs.ParticipantPermissionsChanged,
                      this.onLocalParticipantPermissionsChanged,
                    ),
                  this.localParticipant.trackPublications.clear(),
                  this.localParticipant.videoTrackPublications.clear(),
                  this.localParticipant.audioTrackPublications.clear(),
                  this.remoteParticipants.clear(),
                  this.sidToIdentity.clear(),
                  (this.activeSpeakers = []),
                  this.audioContext &&
                    "boolean" == typeof this.options.webAudioMix &&
                    (this.audioContext.close(), (this.audioContext = void 0)),
                  Ur() &&
                    (window.removeEventListener(
                      "beforeunload",
                      this.onPageLeave,
                    ),
                    window.removeEventListener("pagehide", this.onPageLeave),
                    window.removeEventListener("freeze", this.onPageLeave),
                    null === (i = navigator.mediaDevices) ||
                      void 0 === i ||
                      i.removeEventListener(
                        "devicechange",
                        this.handleDeviceChange,
                      )));
              } finally {
                (this.setAndEmitConnectionState(Qa.Disconnected),
                  this.emit(js.Disconnected, t));
              }
            }
          }
          handleParticipantDisconnected(e, t) {
            var i;
            (this.remoteParticipants.delete(e),
              t &&
                (t.trackPublications.forEach((e) => {
                  t.unpublishTrack(e.trackSid, !0);
                }),
                this.emit(js.ParticipantDisconnected, t),
                t.setDisconnected(),
                null === (i = this.localParticipant) ||
                  void 0 === i ||
                  i.handleParticipantDisconnected(t.identity)));
          }
          handleStreamHeader(e, t) {
            return Zi(this, void 0, void 0, function* () {
              var i;
              if ("byteHeader" === e.contentHeader.case) {
                const n = this.byteStreamHandlers.get(e.topic);
                if (!n)
                  return void this.log.debug(
                    "ignoring incoming byte stream due to no handler for topic",
                    e.topic,
                  );
                let s;
                const r = {
                    id: e.streamId,
                    name:
                      null !== (i = e.contentHeader.value.name) && void 0 !== i
                        ? i
                        : "unknown",
                    mimeType: e.mimeType,
                    size: e.totalLength ? Number(e.totalLength) : void 0,
                    topic: e.topic,
                    timestamp: oo(e.timestamp),
                    attributes: e.attributes,
                  },
                  o = new ReadableStream({
                    start: (t) => {
                      ((s = t),
                        this.byteStreamControllers.set(e.streamId, {
                          info: r,
                          controller: s,
                          startTime: Date.now(),
                        }));
                    },
                  });
                n(new ec(r, o, oo(e.totalLength)), { identity: t });
              } else if ("textHeader" === e.contentHeader.case) {
                const i = this.textStreamHandlers.get(e.topic);
                if (!i)
                  return void this.log.debug(
                    "ignoring incoming text stream due to no handler for topic",
                    e.topic,
                  );
                let n;
                const s = {
                    id: e.streamId,
                    mimeType: e.mimeType,
                    size: e.totalLength ? Number(e.totalLength) : void 0,
                    topic: e.topic,
                    timestamp: Number(e.timestamp),
                    attributes: e.attributes,
                  },
                  r = new ReadableStream({
                    start: (t) => {
                      ((n = t),
                        this.textStreamControllers.set(e.streamId, {
                          info: s,
                          controller: n,
                          startTime: Date.now(),
                        }));
                    },
                  });
                i(new tc(s, r, oo(e.totalLength)), { identity: t });
              }
            });
          }
          handleStreamChunk(e) {
            const t = this.byteStreamControllers.get(e.streamId);
            t && e.content.length > 0 && t.controller.enqueue(e);
            const i = this.textStreamControllers.get(e.streamId);
            i && e.content.length > 0 && i.controller.enqueue(e);
          }
          handleStreamTrailer(e) {
            const t = this.textStreamControllers.get(e.streamId);
            t &&
              ((t.info.attributes = Object.assign(
                Object.assign({}, t.info.attributes),
                e.attributes,
              )),
              t.controller.close(),
              this.textStreamControllers.delete(e.streamId));
            const i = this.byteStreamControllers.get(e.streamId);
            i &&
              ((i.info.attributes = Object.assign(
                Object.assign({}, i.info.attributes),
                e.attributes,
              )),
              i.controller.close(),
              this.byteStreamControllers.delete(e.streamId));
          }
          selectDefaultDevices() {
            return Zi(this, void 0, void 0, function* () {
              var e, t, i;
              const n = Ao.getInstance().previousDevices,
                s = yield Ao.getInstance().getDevices(void 0, !1),
                r = er();
              if ("Chrome" === (null == r ? void 0 : r.name) && "iOS" !== r.os)
                for (let e of s) {
                  const t = n.find((t) => t.deviceId === e.deviceId);
                  t &&
                    "" !== t.label &&
                    t.kind === e.kind &&
                    t.label !== e.label &&
                    "default" === this.getActiveDevice(e.kind) &&
                    this.emit(js.ActiveDeviceChanged, e.kind, e.deviceId);
                }
              const o = ["audiooutput", "audioinput", "videoinput"];
              for (let r of o) {
                const o = wo(r),
                  a = this.localParticipant.getTrackPublication(o);
                if (
                  a &&
                  (null === (e = a.track) || void 0 === e
                    ? void 0
                    : e.isUserProvided)
                )
                  continue;
                const c = s.filter((e) => e.kind === r),
                  d = this.getActiveDevice(r);
                d ===
                  (null === (t = n.filter((e) => e.kind === r)[0]) ||
                  void 0 === t
                    ? void 0
                    : t.deviceId) &&
                c.length > 0 &&
                (null === (i = c[0]) || void 0 === i ? void 0 : i.deviceId) !==
                  d
                  ? yield this.switchActiveDevice(r, c[0].deviceId)
                  : ("audioinput" === r && !Ar()) ||
                    "videoinput" === r ||
                    !(c.length > 0) ||
                    c.find((e) => e.deviceId === this.getActiveDevice(r)) ||
                    ("audiooutput" === r && Ar()) ||
                    (yield this.switchActiveDevice(r, c[0].deviceId));
              }
            });
          }
          acquireAudioContext() {
            return Zi(this, void 0, void 0, function* () {
              var e, t;
              if (
                ("boolean" != typeof this.options.webAudioMix &&
                this.options.webAudioMix.audioContext
                  ? (this.audioContext = this.options.webAudioMix.audioContext)
                  : (this.audioContext &&
                      "closed" !== this.audioContext.state) ||
                    (this.audioContext =
                      null !== (e = So()) && void 0 !== e ? e : void 0),
                this.options.webAudioMix &&
                  this.remoteParticipants.forEach((e) =>
                    e.setAudioContext(this.audioContext),
                  ),
                this.localParticipant.setAudioContext(this.audioContext),
                this.audioContext && "suspended" === this.audioContext.state)
              )
                try {
                  yield Promise.race([this.audioContext.resume(), Cr(200)]);
                } catch (e) {
                  this.log.warn(
                    "Could not resume audio context",
                    Object.assign(Object.assign({}, this.logContext), {
                      error: e,
                    }),
                  );
                }
              const i =
                "running" ===
                (null === (t = this.audioContext) || void 0 === t
                  ? void 0
                  : t.state);
              i !== this.canPlaybackAudio &&
                ((this.audioEnabled = i),
                this.emit(js.AudioPlaybackStatusChanged, i));
            });
          }
          createParticipant(e, t) {
            var i;
            let n;
            return (
              (n = t
                ? yc.fromParticipantInfo(this.engine.client, t, {
                    loggerContextCb: () => this.logContext,
                    loggerName: this.options.loggerName,
                  })
                : new yc(this.engine.client, "", e, void 0, void 0, void 0, {
                    loggerContextCb: () => this.logContext,
                    loggerName: this.options.loggerName,
                  })),
              this.options.webAudioMix && n.setAudioContext(this.audioContext),
              (null === (i = this.options.audioOutput) || void 0 === i
                ? void 0
                : i.deviceId) &&
                n
                  .setAudioOutput(this.options.audioOutput)
                  .catch((e) =>
                    this.log.warn(
                      "Could not set audio output: ".concat(e.message),
                      this.logContext,
                    ),
                  ),
              n
            );
          }
          getOrCreateParticipant(e, t) {
            if (this.remoteParticipants.has(e)) {
              const i = this.remoteParticipants.get(e);
              return (
                t &&
                  i.updateInfo(t) &&
                  this.sidToIdentity.set(t.sid, t.identity),
                i
              );
            }
            const i = this.createParticipant(e, t);
            return (
              this.remoteParticipants.set(e, i),
              this.sidToIdentity.set(t.sid, t.identity),
              this.emitWhenConnected(js.ParticipantConnected, i),
              i
                .on(Fs.TrackPublished, (e) => {
                  this.emitWhenConnected(js.TrackPublished, e, i);
                })
                .on(Fs.TrackSubscribed, (e, t) => {
                  (e.kind === dr.Kind.Audio
                    ? (e.on(
                        Vs.AudioPlaybackStarted,
                        this.handleAudioPlaybackStarted,
                      ),
                      e.on(
                        Vs.AudioPlaybackFailed,
                        this.handleAudioPlaybackFailed,
                      ))
                    : e.kind === dr.Kind.Video &&
                      (e.on(
                        Vs.VideoPlaybackFailed,
                        this.handleVideoPlaybackFailed,
                      ),
                      e.on(
                        Vs.VideoPlaybackStarted,
                        this.handleVideoPlaybackStarted,
                      )),
                    this.emit(js.TrackSubscribed, e, t, i));
                })
                .on(Fs.TrackUnpublished, (e) => {
                  this.emit(js.TrackUnpublished, e, i);
                })
                .on(Fs.TrackUnsubscribed, (e, t) => {
                  this.emit(js.TrackUnsubscribed, e, t, i);
                })
                .on(Fs.TrackMuted, (e) => {
                  this.emitWhenConnected(js.TrackMuted, e, i);
                })
                .on(Fs.TrackUnmuted, (e) => {
                  this.emitWhenConnected(js.TrackUnmuted, e, i);
                })
                .on(Fs.ParticipantMetadataChanged, (e) => {
                  this.emitWhenConnected(js.ParticipantMetadataChanged, e, i);
                })
                .on(Fs.ParticipantNameChanged, (e) => {
                  this.emitWhenConnected(js.ParticipantNameChanged, e, i);
                })
                .on(Fs.AttributesChanged, (e) => {
                  this.emitWhenConnected(js.ParticipantAttributesChanged, e, i);
                })
                .on(Fs.ConnectionQualityChanged, (e) => {
                  this.emitWhenConnected(js.ConnectionQualityChanged, e, i);
                })
                .on(Fs.ParticipantPermissionsChanged, (e) => {
                  this.emitWhenConnected(
                    js.ParticipantPermissionsChanged,
                    e,
                    i,
                  );
                })
                .on(Fs.TrackSubscriptionStatusChanged, (e, t) => {
                  this.emitWhenConnected(
                    js.TrackSubscriptionStatusChanged,
                    e,
                    t,
                    i,
                  );
                })
                .on(Fs.TrackSubscriptionFailed, (e, t) => {
                  this.emit(js.TrackSubscriptionFailed, e, i, t);
                })
                .on(Fs.TrackSubscriptionPermissionChanged, (e, t) => {
                  this.emitWhenConnected(
                    js.TrackSubscriptionPermissionChanged,
                    e,
                    t,
                    i,
                  );
                })
                .on(Fs.Active, () => {
                  (this.emitWhenConnected(js.ParticipantActive, i),
                    i.kind === rt.AGENT &&
                      this.localParticipant.setActiveAgent(i));
                }),
              t && i.updateInfo(t),
              i
            );
          }
          sendSyncState() {
            const e = Array.from(this.remoteParticipants.values()).reduce(
                (e, t) => (e.push(...t.getTrackPublications()), e),
                [],
              ),
              t = this.localParticipant.getTrackPublications();
            this.engine.sendSyncState(e, t);
          }
          updateSubscriptions() {
            for (const e of this.remoteParticipants.values())
              for (const t of e.videoTrackPublications.values())
                t.isSubscribed && go(t) && t.emitTrackUpdate();
          }
          getRemoteParticipantBySid(e) {
            const t = this.sidToIdentity.get(e);
            if (t) return this.remoteParticipants.get(t);
          }
          registerConnectionReconcile() {
            this.clearConnectionReconcile();
            let e = 0;
            this.connectionReconcileInterval = or.setInterval(() => {
              this.engine &&
              !this.engine.isClosed &&
              this.engine.verifyTransport()
                ? (e = 0)
                : (e++,
                  this.log.warn(
                    "detected connection state mismatch",
                    Object.assign(Object.assign({}, this.logContext), {
                      numFailures: e,
                      engine: this.engine
                        ? {
                            closed: this.engine.isClosed,
                            transportsConnected: this.engine.verifyTransport(),
                          }
                        : void 0,
                    }),
                  ),
                  e >= 3 &&
                    (this.recreateEngine(),
                    this.handleDisconnect(
                      this.options.stopLocalTrackOnUnpublish,
                      Ye.STATE_MISMATCH,
                    )));
            }, 4e3);
          }
          clearConnectionReconcile() {
            this.connectionReconcileInterval &&
              or.clearInterval(this.connectionReconcileInterval);
          }
          setAndEmitConnectionState(e) {
            return (
              e !== this.state &&
              ((this.state = e),
              this.emit(js.ConnectionStateChanged, this.state),
              !0)
            );
          }
          emitBufferedEvents() {
            (this.bufferedEvents.forEach((e) => {
              let [t, i] = e;
              this.emit(t, ...i);
            }),
              (this.bufferedEvents = []));
          }
          emitWhenConnected(e) {
            for (
              var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              i[n - 1] = arguments[n];
            if (
              this.state === Qa.Reconnecting ||
              this.isResuming ||
              !this.engine ||
              this.engine.pendingReconnect
            )
              this.bufferedEvents.push([e, i]);
            else if (this.state === Qa.Connected) return this.emit(e, ...i);
            return !1;
          }
          simulateParticipants(e) {
            return Zi(this, void 0, void 0, function* () {
              var t, i;
              const n = Object.assign(
                  { audio: !0, video: !0, useRealTracks: !1 },
                  e.publish,
                ),
                s = Object.assign(
                  {
                    count: 9,
                    audio: !1,
                    video: !0,
                    aspectRatios: [1.66, 1.7, 1.3],
                  },
                  e.participants,
                );
              if (
                (this.handleDisconnect(),
                (this.roomInfo = new et({
                  sid: "RM_SIMULATED",
                  name: "simulated-room",
                  emptyTimeout: 0,
                  maxParticipants: 0,
                  creationTime: M.parse(new Date().getTime()),
                  metadata: "",
                  numParticipants: 1,
                  numPublishers: 1,
                  turnPassword: "",
                  enabledCodecs: [],
                  activeRecording: !1,
                })),
                this.localParticipant.updateInfo(
                  new nt({ identity: "simulated-local", name: "local-name" }),
                ),
                this.setupLocalParticipantEvents(),
                this.emit(js.SignalConnected),
                this.emit(js.Connected),
                this.setAndEmitConnectionState(Qa.Connected),
                n.video)
              ) {
                const e = new hc(
                  dr.Kind.Video,
                  new dt({
                    source: He.CAMERA,
                    sid: Math.floor(1e4 * Math.random()).toString(),
                    type: Ge.AUDIO,
                    name: "video-dummy",
                  }),
                  new Ba(
                    n.useRealTracks
                      ? (yield window.navigator.mediaDevices.getUserMedia({
                          video: !0,
                        })).getVideoTracks()[0]
                      : $r(
                          160 *
                            (null !== (t = s.aspectRatios[0]) && void 0 !== t
                              ? t
                              : 1),
                          160,
                          !0,
                          !0,
                        ),
                    void 0,
                    !1,
                    {
                      loggerName: this.options.loggerName,
                      loggerContextCb: () => this.logContext,
                    },
                  ),
                  {
                    loggerName: this.options.loggerName,
                    loggerContextCb: () => this.logContext,
                  },
                );
                (this.localParticipant.addTrackPublication(e),
                  this.localParticipant.emit(Fs.LocalTrackPublished, e));
              }
              if (n.audio) {
                const e = new hc(
                  dr.Kind.Audio,
                  new dt({
                    source: He.MICROPHONE,
                    sid: Math.floor(1e4 * Math.random()).toString(),
                    type: Ge.AUDIO,
                  }),
                  new Ra(
                    n.useRealTracks
                      ? (yield navigator.mediaDevices.getUserMedia({
                          audio: !0,
                        })).getAudioTracks()[0]
                      : eo(),
                    void 0,
                    !1,
                    this.audioContext,
                    {
                      loggerName: this.options.loggerName,
                      loggerContextCb: () => this.logContext,
                    },
                  ),
                  {
                    loggerName: this.options.loggerName,
                    loggerContextCb: () => this.logContext,
                  },
                );
                (this.localParticipant.addTrackPublication(e),
                  this.localParticipant.emit(Fs.LocalTrackPublished, e));
              }
              for (let e = 0; e < s.count - 1; e += 1) {
                let t = new nt({
                  sid: Math.floor(1e4 * Math.random()).toString(),
                  identity: "simulated-".concat(e),
                  state: st.ACTIVE,
                  tracks: [],
                  joinedAt: M.parse(Date.now()),
                });
                const n = this.getOrCreateParticipant(t.identity, t);
                if (s.video) {
                  const r = $r(
                      160 *
                        (null !==
                          (i = s.aspectRatios[e % s.aspectRatios.length]) &&
                        void 0 !== i
                          ? i
                          : 1),
                      160,
                      !1,
                      !0,
                    ),
                    o = new dt({
                      source: He.CAMERA,
                      sid: Math.floor(1e4 * Math.random()).toString(),
                      type: Ge.AUDIO,
                    });
                  (n.addSubscribedMediaTrack(
                    r,
                    o.sid,
                    new MediaStream([r]),
                    new RTCRtpReceiver(),
                  ),
                    (t.tracks = [...t.tracks, o]));
                }
                if (s.audio) {
                  const e = eo(),
                    i = new dt({
                      source: He.MICROPHONE,
                      sid: Math.floor(1e4 * Math.random()).toString(),
                      type: Ge.AUDIO,
                    });
                  (n.addSubscribedMediaTrack(
                    e,
                    i.sid,
                    new MediaStream([e]),
                    new RTCRtpReceiver(),
                  ),
                    (t.tracks = [...t.tracks, i]));
                }
                n.updateInfo(t);
              }
            });
          }
          emit(e) {
            for (
              var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              i[n - 1] = arguments[n];
            if (
              e !== js.ActiveSpeakersChanged &&
              e !== js.TranscriptionReceived
            ) {
              const t = Cc(i).filter((e) => void 0 !== e);
              this.log.debug(
                "room event ".concat(e),
                Object.assign(Object.assign({}, this.logContext), {
                  event: e,
                  args: t,
                }),
              );
            }
            return super.emit(e, ...i);
          }
        }
        function Cc(e) {
          return e.map((e) => {
            if (e)
              return Array.isArray(e)
                ? Cc(e)
                : "object" == typeof e
                  ? "logContext" in e
                    ? e.logContext
                    : void 0
                  : e;
          });
        }
        Tc.cleanupRegistry =
          "undefined" != typeof FinalizationRegistry &&
          new FinalizationRegistry((e) => {
            e();
          });
        var Sc,
          wc = Object.freeze({
            __proto__: null,
            Convert: class {
              static toAgentAttributes(e) {
                return JSON.parse(e);
              }
              static agentAttributesToJson(e) {
                return JSON.stringify(e);
              }
              static toTranscriptionAttributes(e) {
                return JSON.parse(e);
              }
              static transcriptionAttributesToJson(e) {
                return JSON.stringify(e);
              }
            },
          });
        !(function (e) {
          ((e[(e.IDLE = 0)] = "IDLE"),
            (e[(e.RUNNING = 1)] = "RUNNING"),
            (e[(e.SKIPPED = 2)] = "SKIPPED"),
            (e[(e.SUCCESS = 3)] = "SUCCESS"),
            (e[(e.FAILED = 4)] = "FAILED"));
        })(Sc || (Sc = {}));
        class Ec extends nn.EventEmitter {
          constructor(e, t) {
            let i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            (super(),
              (this.status = Sc.IDLE),
              (this.logs = []),
              (this.options = {}),
              (this.url = e),
              (this.token = t),
              (this.name = this.constructor.name),
              (this.room = new Tc(i.roomOptions)),
              (this.connectOptions = i.connectOptions),
              (this.options = i));
          }
          run(e) {
            return Zi(this, void 0, void 0, function* () {
              if (this.status !== Sc.IDLE)
                throw Error("check is running already");
              this.setStatus(Sc.RUNNING);
              try {
                yield this.perform();
              } catch (e) {
                e instanceof Error &&
                  (this.options.errorsAsWarnings
                    ? this.appendWarning(e.message)
                    : this.appendError(e.message));
              }
              return (
                yield this.disconnect(),
                yield new Promise((e) => setTimeout(e, 500)),
                this.status !== Sc.SKIPPED &&
                  this.setStatus(this.isSuccess() ? Sc.SUCCESS : Sc.FAILED),
                e && e(),
                this.getInfo()
              );
            });
          }
          isSuccess() {
            return !this.logs.some((e) => "error" === e.level);
          }
          connect(e) {
            return Zi(this, void 0, void 0, function* () {
              return (
                this.room.state === Qa.Connected ||
                  (e || (e = this.url),
                  yield this.room.connect(e, this.token, this.connectOptions)),
                this.room
              );
            });
          }
          disconnect() {
            return Zi(this, void 0, void 0, function* () {
              this.room &&
                this.room.state !== Qa.Disconnected &&
                (yield this.room.disconnect(),
                yield new Promise((e) => setTimeout(e, 500)));
            });
          }
          skip() {
            this.setStatus(Sc.SKIPPED);
          }
          switchProtocol(e) {
            return Zi(this, void 0, void 0, function* () {
              let t = !1,
                i = !1;
              if (
                (this.room.on(js.Reconnecting, () => {
                  t = !0;
                }),
                this.room.once(js.Reconnected, () => {
                  i = !0;
                }),
                this.room.simulateScenario("force-".concat(e)),
                yield new Promise((e) => setTimeout(e, 1e3)),
                !t)
              )
                return;
              const n = Date.now() + 1e4;
              for (; Date.now() < n; ) {
                if (i) return;
                yield Cr(100);
              }
              throw new Error(
                "Could not reconnect using ".concat(
                  e,
                  " protocol after 10 seconds",
                ),
              );
            });
          }
          appendMessage(e) {
            (this.logs.push({ level: "info", message: e }),
              this.emit("update", this.getInfo()));
          }
          appendWarning(e) {
            (this.logs.push({ level: "warning", message: e }),
              this.emit("update", this.getInfo()));
          }
          appendError(e) {
            (this.logs.push({ level: "error", message: e }),
              this.emit("update", this.getInfo()));
          }
          setStatus(e) {
            ((this.status = e), this.emit("update", this.getInfo()));
          }
          get engine() {
            var e;
            return null === (e = this.room) || void 0 === e ? void 0 : e.engine;
          }
          getInfo() {
            return {
              logs: this.logs,
              name: this.name,
              status: this.status,
              description: this.description,
            };
          }
        }
        class Pc extends Ec {
          get description() {
            return "Cloud regions";
          }
          perform() {
            return Zi(this, void 0, void 0, function* () {
              const e = new Za(this.url, this.token);
              if (!e.isCloud()) return void this.skip();
              const t = [],
                i = new Set();
              for (let n = 0; n < 3; n++) {
                const n = yield e.getNextBestRegionUrl();
                if (!n) break;
                if (i.has(n)) continue;
                i.add(n);
                const s = yield this.checkCloudRegion(n);
                (this.appendMessage(
                  ""
                    .concat(s.region, " RTT: ")
                    .concat(s.rtt, "ms, duration: ")
                    .concat(s.duration, "ms"),
                ),
                  t.push(s));
              }
              t.sort(
                (e, t) =>
                  0.5 * (e.duration - t.duration) + 0.5 * (e.rtt - t.rtt),
              );
              const n = t[0];
              ((this.bestStats = n),
                this.appendMessage("best Cloud region: ".concat(n.region)));
            });
          }
          getInfo() {
            const e = super.getInfo();
            return ((e.data = this.bestStats), e);
          }
          checkCloudRegion(e) {
            return Zi(this, void 0, void 0, function* () {
              var t, i;
              (yield this.connect(e),
                "tcp" === this.options.protocol &&
                  (yield this.switchProtocol("tcp")));
              const n =
                null === (t = this.room.serverInfo) || void 0 === t
                  ? void 0
                  : t.region;
              if (!n) throw new Error("Region not found");
              const s = yield this.room.localParticipant.streamText({
                  topic: "test",
                }),
                r = "A".repeat(1e3),
                o = Date.now();
              for (let e = 0; e < 1e3; e++) yield s.write(r);
              yield s.close();
              const a = Date.now(),
                c = yield null === (i = this.room.engine.pcManager) ||
                void 0 === i
                  ? void 0
                  : i.publisher.getStats(),
                d = { region: n, rtt: 1e4, duration: a - o };
              return (
                null == c ||
                  c.forEach((e) => {
                    "candidate-pair" === e.type &&
                      e.nominated &&
                      (d.rtt = 1e3 * e.currentRoundTripTime);
                  }),
                yield this.disconnect(),
                d
              );
            });
          }
        }
        class Rc extends Ec {
          get description() {
            return "Connection via UDP vs TCP";
          }
          perform() {
            return Zi(this, void 0, void 0, function* () {
              const e = yield this.checkConnectionProtocol("udp"),
                t = yield this.checkConnectionProtocol("tcp");
              ((this.bestStats = e),
                e.qualityLimitationDurations.bandwidth -
                  t.qualityLimitationDurations.bandwidth >
                  0.5 || (e.packetsLost - t.packetsLost) / e.packetsSent > 0.01
                  ? (this.appendMessage("best connection quality via tcp"),
                    (this.bestStats = t))
                  : this.appendMessage("best connection quality via udp"));
              const i = this.bestStats;
              (this.appendMessage(
                "upstream bitrate: ".concat(
                  (i.bitrateTotal / i.count / 1e3 / 1e3).toFixed(2),
                  " mbps",
                ),
              ),
                this.appendMessage(
                  "RTT: ".concat(
                    ((i.rttTotal / i.count) * 1e3).toFixed(2),
                    " ms",
                  ),
                ),
                this.appendMessage(
                  "jitter: ".concat(
                    ((i.jitterTotal / i.count) * 1e3).toFixed(2),
                    " ms",
                  ),
                ),
                i.packetsLost > 0 &&
                  this.appendWarning(
                    "packets lost: ".concat(
                      ((i.packetsLost / i.packetsSent) * 100).toFixed(2),
                      "%",
                    ),
                  ),
                i.qualityLimitationDurations.bandwidth > 1 &&
                  this.appendWarning(
                    "bandwidth limited ".concat(
                      (
                        (i.qualityLimitationDurations.bandwidth / 10) *
                        100
                      ).toFixed(2),
                      "%",
                    ),
                  ),
                i.qualityLimitationDurations.cpu > 0 &&
                  this.appendWarning(
                    "cpu limited ".concat(
                      ((i.qualityLimitationDurations.cpu / 10) * 100).toFixed(
                        2,
                      ),
                      "%",
                    ),
                  ));
            });
          }
          getInfo() {
            const e = super.getInfo();
            return ((e.data = this.bestStats), e);
          }
          checkConnectionProtocol(e) {
            return Zi(this, void 0, void 0, function* () {
              (yield this.connect(),
                "tcp" === e
                  ? yield this.switchProtocol("tcp")
                  : yield this.switchProtocol("udp"));
              const t = document.createElement("canvas");
              ((t.width = 1280), (t.height = 720));
              const i = t.getContext("2d");
              if (!i) throw new Error("Could not get canvas context");
              let n = 0;
              const s = () => {
                ((n = (n + 1) % 360),
                  (i.fillStyle = "hsl(".concat(n, ", 100%, 50%)")),
                  i.fillRect(0, 0, t.width, t.height),
                  requestAnimationFrame(s));
              };
              s();
              const r = t.captureStream(30).getVideoTracks()[0],
                o = (yield this.room.localParticipant.publishTrack(r, {
                  simulcast: !1,
                  degradationPreference: "maintain-resolution",
                  videoEncoding: { maxBitrate: 2e6 },
                })).track,
                a = {
                  protocol: e,
                  packetsLost: 0,
                  packetsSent: 0,
                  qualityLimitationDurations: {},
                  rttTotal: 0,
                  jitterTotal: 0,
                  bitrateTotal: 0,
                  count: 0,
                },
                c = setInterval(
                  () =>
                    Zi(this, void 0, void 0, function* () {
                      const e = yield o.getRTCStatsReport();
                      null == e ||
                        e.forEach((e) => {
                          "outbound-rtp" === e.type
                            ? ((a.packetsSent = e.packetsSent),
                              (a.qualityLimitationDurations =
                                e.qualityLimitationDurations),
                              (a.bitrateTotal += e.targetBitrate),
                              a.count++)
                            : "remote-inbound-rtp" === e.type &&
                              ((a.packetsLost = e.packetsLost),
                              (a.rttTotal += e.roundTripTime),
                              (a.jitterTotal += e.jitter));
                        });
                    }),
                  1e3,
                );
              return (
                yield new Promise((e) => setTimeout(e, 1e4)),
                clearInterval(c),
                r.stop(),
                t.remove(),
                yield this.disconnect(),
                a
              );
            });
          }
        }
        class Ic extends Ec {
          get description() {
            return "Can publish audio";
          }
          perform() {
            return Zi(this, void 0, void 0, function* () {
              var e;
              const t = yield this.connect(),
                i = yield gc();
              if (yield Co(i, 1e3))
                throw new Error("unable to detect audio from microphone");
              (this.appendMessage("detected audio from microphone"),
                t.localParticipant.publishTrack(i),
                yield new Promise((e) => setTimeout(e, 3e3)));
              const n = yield null === (e = i.sender) || void 0 === e
                ? void 0
                : e.getStats();
              if (!n) throw new Error("Could not get RTCStats");
              let s = 0;
              if (
                (n.forEach((e) => {
                  "outbound-rtp" !== e.type ||
                    ("audio" !== e.kind &&
                      (e.kind || "audio" !== e.mediaType)) ||
                    (s = e.packetsSent);
                }),
                0 === s)
              )
                throw new Error("Could not determine packets are sent");
              this.appendMessage("published ".concat(s, " audio packets"));
            });
          }
        }
        class Oc extends Ec {
          get description() {
            return "Can publish video";
          }
          perform() {
            return Zi(this, void 0, void 0, function* () {
              var e;
              const t = yield this.connect(),
                i = yield mc();
              (yield this.checkForVideo(i.mediaStreamTrack),
                t.localParticipant.publishTrack(i),
                yield new Promise((e) => setTimeout(e, 5e3)));
              const n = yield null === (e = i.sender) || void 0 === e
                ? void 0
                : e.getStats();
              if (!n) throw new Error("Could not get RTCStats");
              let s = 0;
              if (
                (n.forEach((e) => {
                  "outbound-rtp" !== e.type ||
                    ("video" !== e.kind &&
                      (e.kind || "video" !== e.mediaType)) ||
                    (s += e.packetsSent);
                }),
                0 === s)
              )
                throw new Error("Could not determine packets are sent");
              this.appendMessage("published ".concat(s, " video packets"));
            });
          }
          checkForVideo(e) {
            return Zi(this, void 0, void 0, function* () {
              const t = new MediaStream();
              t.addTrack(e.clone());
              const i = document.createElement("video");
              ((i.srcObject = t),
                (i.muted = !0),
                yield new Promise((t) => {
                  ((i.onplay = () => {
                    setTimeout(() => {
                      var n, s, r, o;
                      const a = document.createElement("canvas"),
                        c = e.getSettings(),
                        d =
                          null !==
                            (s =
                              null !== (n = c.width) && void 0 !== n
                                ? n
                                : i.videoWidth) && void 0 !== s
                            ? s
                            : 1280,
                        l =
                          null !==
                            (o =
                              null !== (r = c.height) && void 0 !== r
                                ? r
                                : i.videoHeight) && void 0 !== o
                            ? o
                            : 720;
                      ((a.width = d), (a.height = l));
                      const u = a.getContext("2d");
                      u.drawImage(i, 0, 0);
                      const h = u.getImageData(0, 0, a.width, a.height).data;
                      let p = !0;
                      for (let e = 0; e < h.length; e += 4)
                        if (0 !== h[e] || 0 !== h[e + 1] || 0 !== h[e + 2]) {
                          p = !1;
                          break;
                        }
                      (p
                        ? this.appendError(
                            "camera appears to be producing only black frames",
                          )
                        : this.appendMessage("received video frames"),
                        t());
                    }, 1e3);
                  }),
                    i.play());
                }),
                t.getTracks().forEach((e) => e.stop()),
                i.remove());
            });
          }
        }
        class Dc extends Ec {
          get description() {
            return "Resuming connection after interruption";
          }
          perform() {
            return Zi(this, void 0, void 0, function* () {
              var e;
              const t = yield this.connect();
              let i,
                n = !1,
                s = !1;
              const r = new Promise((e) => {
                  (setTimeout(e, 5e3), (i = e));
                }),
                o = () => {
                  n = !0;
                };
              (t
                .on(js.SignalReconnecting, o)
                .on(js.Reconnecting, o)
                .on(js.Reconnected, () => {
                  ((s = !0), i(!0));
                }),
                null === (e = t.engine.client.ws) || void 0 === e || e.close());
              const a = t.engine.client.onClose;
              if ((a && a(""), yield r, !n))
                throw new Error("Did not attempt to reconnect");
              if (!s || t.state !== Qa.Connected)
                throw (
                  this.appendWarning(
                    "reconnection is only possible in Redis-based configurations",
                  ),
                  new Error("Not able to reconnect")
                );
            });
          }
        }
        class xc extends Ec {
          get description() {
            return "Can connect via TURN";
          }
          perform() {
            return Zi(this, void 0, void 0, function* () {
              var e, t;
              const i = new Bo(),
                n = yield i.join(this.url, this.token, {
                  autoSubscribe: !0,
                  maxRetries: 0,
                  e2eeEnabled: !1,
                  websocketTimeout: 15e3,
                });
              let s = !1,
                r = !1,
                o = !1;
              for (let e of n.iceServers)
                for (let t of e.urls)
                  (t.startsWith("turn:")
                    ? ((r = !0), (o = !0))
                    : t.startsWith("turns:") && ((r = !0), (o = !0), (s = !0)),
                    t.startsWith("stun:") && (o = !0));
              (o
                ? r &&
                  !s &&
                  this.appendWarning(
                    "TURN is configured server side, but TURN/TLS is unavailable.",
                  )
                : this.appendWarning(
                    "No STUN servers configured on server side.",
                  ),
                yield i.close(),
                (null ===
                  (t =
                    null === (e = this.connectOptions) || void 0 === e
                      ? void 0
                      : e.rtcConfig) || void 0 === t
                  ? void 0
                  : t.iceServers) || r
                  ? yield this.room.connect(this.url, this.token, {
                      rtcConfig: { iceTransportPolicy: "relay" },
                    })
                  : (this.appendWarning("No TURN servers configured."),
                    this.skip(),
                    yield new Promise((e) => setTimeout(e, 0))));
            });
          }
        }
        class Mc extends Ec {
          get description() {
            return "Establishing WebRTC connection";
          }
          perform() {
            return Zi(this, void 0, void 0, function* () {
              let e = !1,
                t = !1;
              this.room.on(js.SignalConnected, () => {
                const i = this.room.engine.client.onTrickle;
                ((this.room.engine.client.onTrickle = (n, s) => {
                  if (n.candidate) {
                    const i = new RTCIceCandidate(n);
                    let s = ""
                      .concat(i.protocol, " ")
                      .concat(i.address, ":")
                      .concat(i.port, " ")
                      .concat(i.type);
                    (i.address &&
                      ((function (e) {
                        const t = e.split(".");
                        if (4 === t.length) {
                          if ("10" === t[0]) return !0;
                          if ("192" === t[0] && "168" === t[1]) return !0;
                          if ("172" === t[0]) {
                            const e = parseInt(t[1], 10);
                            if (e >= 16 && e <= 31) return !0;
                          }
                        }
                        return !1;
                      })(i.address)
                        ? (s += " (private)")
                        : "tcp" === i.protocol && "passive" === i.tcpType
                          ? ((e = !0), (s += " (passive)"))
                          : "udp" === i.protocol && (t = !0)),
                      this.appendMessage(s));
                  }
                  i && i(n, s);
                }),
                  this.room.engine.pcManager &&
                    (this.room.engine.pcManager.subscriber.onIceCandidateError =
                      (e) => {
                        e instanceof RTCPeerConnectionIceErrorEvent &&
                          this.appendWarning(
                            "error with ICE candidate: "
                              .concat(e.errorCode, " ")
                              .concat(e.errorText, " ")
                              .concat(e.url),
                          );
                      }));
              });
              try {
                (yield this.connect(), Ki.info("now the room is connected"));
              } catch (e) {
                throw (
                  this.appendWarning(
                    "ports need to be open on firewall in order to connect.",
                  ),
                  e
                );
              }
              (e || this.appendWarning("Server is not configured for ICE/TCP"),
                t ||
                  this.appendWarning(
                    "No public IPv4 UDP candidates were found. Your server is likely not configured correctly",
                  ));
            });
          }
        }
        class _c extends Ec {
          get description() {
            return "Connecting to signal connection via WebSocket";
          }
          perform() {
            return Zi(this, void 0, void 0, function* () {
              var e, t, i;
              (this.url.startsWith("ws:") || this.url.startsWith("http:")) &&
                this.appendWarning(
                  "Server is insecure, clients may block connections to it",
                );
              let n = new Bo();
              const s = yield n.join(this.url, this.token, {
                autoSubscribe: !0,
                maxRetries: 0,
                e2eeEnabled: !1,
                websocketTimeout: 15e3,
              });
              (this.appendMessage(
                "Connected to server, version ".concat(s.serverVersion, "."),
              ),
                (null === (e = s.serverInfo) || void 0 === e
                  ? void 0
                  : e.edition) === Pt.Cloud &&
                  (null === (t = s.serverInfo) || void 0 === t
                    ? void 0
                    : t.region) &&
                  this.appendMessage(
                    "LiveKit Cloud: ".concat(
                      null === (i = s.serverInfo) || void 0 === i
                        ? void 0
                        : i.region,
                    ),
                  ),
                yield n.close());
            });
          }
        }
        class Ac extends nn.EventEmitter {
          constructor(e, t) {
            let i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            (super(),
              (this.options = {}),
              (this.checkResults = new Map()),
              (this.url = e),
              (this.token = t),
              (this.options = i));
          }
          getNextCheckId() {
            const e = this.checkResults.size;
            return (
              this.checkResults.set(e, {
                logs: [],
                status: Sc.IDLE,
                name: "",
                description: "",
              }),
              e
            );
          }
          updateCheck(e, t) {
            (this.checkResults.set(e, t), this.emit("checkUpdate", e, t));
          }
          isSuccess() {
            return Array.from(this.checkResults.values()).every(
              (e) => e.status !== Sc.FAILED,
            );
          }
          getResults() {
            return Array.from(this.checkResults.values());
          }
          createAndRunCheck(e) {
            return Zi(this, void 0, void 0, function* () {
              const t = this.getNextCheckId(),
                i = new e(this.url, this.token, this.options),
                n = (e) => {
                  this.updateCheck(t, e);
                };
              i.on("update", n);
              const s = yield i.run();
              return (i.off("update", n), s);
            });
          }
          checkWebsocket() {
            return Zi(this, void 0, void 0, function* () {
              return this.createAndRunCheck(_c);
            });
          }
          checkWebRTC() {
            return Zi(this, void 0, void 0, function* () {
              return this.createAndRunCheck(Mc);
            });
          }
          checkTURN() {
            return Zi(this, void 0, void 0, function* () {
              return this.createAndRunCheck(xc);
            });
          }
          checkReconnect() {
            return Zi(this, void 0, void 0, function* () {
              return this.createAndRunCheck(Dc);
            });
          }
          checkPublishAudio() {
            return Zi(this, void 0, void 0, function* () {
              return this.createAndRunCheck(Ic);
            });
          }
          checkPublishVideo() {
            return Zi(this, void 0, void 0, function* () {
              return this.createAndRunCheck(Oc);
            });
          }
          checkConnectionProtocol() {
            return Zi(this, void 0, void 0, function* () {
              const e = yield this.createAndRunCheck(Rc);
              if (e.data && "protocol" in e.data) {
                const t = e.data;
                this.options.protocol = t.protocol;
              }
              return e;
            });
          }
          checkCloudRegion() {
            return Zi(this, void 0, void 0, function* () {
              return this.createAndRunCheck(Pc);
            });
          }
        }
        function Nc(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          var i;
          const n = co(e) ? e.mediaStreamTrack : e,
            s = n.getSettings();
          let r = {
            facingMode:
              null !== (i = t.defaultFacingMode) && void 0 !== i ? i : "user",
            confidence: "low",
          };
          if ("facingMode" in s) {
            const e = s.facingMode;
            (Ki.trace("rawFacingMode", { rawFacingMode: e }),
              e &&
                "string" == typeof e &&
                (void 0 === (o = e) ||
                  ["user", "environment", "left", "right"].includes(o)) &&
                (r = { facingMode: e, confidence: "high" }));
          }
          var o;
          if (["low", "medium"].includes(r.confidence)) {
            Ki.trace(
              "Try to get facing mode from device label: (".concat(
                n.label,
                ")",
              ),
            );
            const e = jc(n.label);
            void 0 !== e && (r = e);
          }
          return r;
        }
        const Lc = new Map([
            [
              "obs virtual camera",
              { facingMode: "environment", confidence: "medium" },
            ],
          ]),
          Uc = new Map([
            ["iphone", { facingMode: "environment", confidence: "medium" }],
            ["ipad", { facingMode: "environment", confidence: "medium" }],
          ]);
        function jc(e) {
          var t;
          const i = e.trim().toLowerCase();
          if ("" !== i)
            return Lc.has(i)
              ? Lc.get(i)
              : null ===
                    (t = Array.from(Uc.entries()).find((e) => {
                      let [t] = e;
                      return i.includes(t);
                    })) || void 0 === t
                ? void 0
                : t[1];
        }
      },
    },
    t = {};
  function i(n) {
    var s = t[n];
    if (void 0 !== s) return s.exports;
    var r = (t[n] = { exports: {} });
    return (e[n](r, r.exports, i), r.exports);
  }
  ((i.d = (e, t) => {
    for (var n in t)
      i.o(t, n) &&
        !i.o(e, n) &&
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
  }),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (i.r = (e) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }));
  var n = {};
  (() => {
    "use strict";
    i.r(n);
    var e = i("./node_modules/livekit-client/dist/livekit-client.esm.mjs");
    window.livekitClient = e;
  })();
})();
