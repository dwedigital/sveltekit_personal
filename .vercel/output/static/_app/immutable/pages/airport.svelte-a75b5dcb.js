import {
	S as Ur,
	i as Ar,
	s as Hr,
	l as p,
	u as G,
	a as B,
	m as D,
	p as T,
	v as j,
	h as k,
	c as q,
	q as S,
	b as ve,
	J as f,
	w as _t,
	n as _e,
	O as Jt,
	f as Re,
	d as or,
	t as tt,
	P as Rs,
	Q as Fs,
	e as Pt,
	g as ur,
	x as Ls,
	y as Es,
	z as Is,
	C as Cs
} from '../chunks/index-15bb7596.js';
function Us(e) {
	let t;
	return {
		c() {
			t = G('\u23F1');
		},
		l(r) {
			t = j(r, '\u23F1');
		},
		m(r, s) {
			ve(r, t, s);
		},
		d(r) {
			r && k(t);
		}
	};
}
function As(e) {
	let t;
	return {
		c() {
			t = G('\u{1F6A8}');
		},
		l(r) {
			t = j(r, '\u{1F6A8}');
		},
		m(r, s) {
			ve(r, t, s);
		},
		d(r) {
			r && k(t);
		}
	};
}
function Hs(e) {
	let t;
	return {
		c() {
			t = G('\u{1F6EC}');
		},
		l(r) {
			t = j(r, '\u{1F6EC}');
		},
		m(r, s) {
			ve(r, t, s);
		},
		d(r) {
			r && k(t);
		}
	};
}
function Vs(e) {
	let t,
		r,
		s,
		a,
		n,
		i,
		o = e[0].Flightnumber + '',
		_,
		h,
		b,
		m,
		g = e[0].Airline + '',
		ee,
		ie,
		le,
		Ce,
		oe,
		te,
		I,
		De,
		ue,
		Ge,
		Me = e[0].From + '',
		de,
		re,
		C,
		Ye,
		fe,
		je,
		be = e[0].Scheduled + '',
		Oe,
		ze,
		Ue,
		he,
		N,
		$e = e[0].Status + '',
		O;
	function U(L, E) {
		return (
			E & 1 && (Ce = null),
			E & 1 && (oe = null),
			Ce == null && (Ce = !!L[0].Status.toLowerCase().includes('land')),
			Ce ? Hs : (oe == null && (oe = !!L[0].Status.toLowerCase().includes('cancel')), oe ? As : Us)
		);
	}
	let P = U(e, -1),
		H = P(e);
	return {
		c() {
			(t = p('div')),
				(r = p('div')),
				(s = p('div')),
				(a = p('div')),
				(n = p('strong')),
				(i = G(`Flight Number:
				`)),
				(_ = G(o)),
				(b = B()),
				(m = p('p')),
				(ee = G(g)),
				(ie = B()),
				(le = p('div')),
				H.c(),
				(te = B()),
				(I = p('div')),
				(De = p('strong')),
				(ue = G('From:')),
				(Ge = B()),
				(de = G(Me)),
				(re = B()),
				(C = p('div')),
				(Ye = p('strong')),
				(fe = G('Scheduled:')),
				(je = B()),
				(Oe = G(be)),
				(ze = B()),
				(Ue = p('strong')),
				(he = G('Status:')),
				(N = B()),
				(O = G($e)),
				this.h();
		},
		l(L) {
			t = D(L, 'DIV', { class: !0 });
			var E = T(t);
			r = D(E, 'DIV', {});
			var Q = T(r);
			s = D(Q, 'DIV', { class: !0 });
			var Te = T(s);
			a = D(Te, 'DIV', {});
			var Ze = T(a);
			n = D(Ze, 'STRONG', { class: !0 });
			var st = T(n);
			(i = j(
				st,
				`Flight Number:
				`
			)),
				(_ = j(st, o)),
				st.forEach(k),
				(b = q(Ze)),
				(m = D(Ze, 'P', {}));
			var Be = T(m);
			(ee = j(Be, g)),
				Be.forEach(k),
				Ze.forEach(k),
				(ie = q(Te)),
				(le = D(Te, 'DIV', { class: !0 }));
			var ct = T(le);
			H.l(ct), ct.forEach(k), Te.forEach(k), (te = q(Q)), (I = D(Q, 'DIV', {}));
			var qe = T(I);
			De = D(qe, 'STRONG', {});
			var Je = T(De);
			(ue = j(Je, 'From:')),
				Je.forEach(k),
				(Ge = q(qe)),
				(de = j(qe, Me)),
				qe.forEach(k),
				(re = q(Q)),
				(C = D(Q, 'DIV', {}));
			var Qe = T(C);
			Ye = D(Qe, 'STRONG', {});
			var at = T(Ye);
			(fe = j(at, 'Scheduled:')),
				at.forEach(k),
				(je = q(Qe)),
				(Oe = j(Qe, be)),
				Qe.forEach(k),
				(ze = q(Q)),
				(Ue = D(Q, 'STRONG', {}));
			var Nr = T(Ue);
			(he = j(Nr, 'Status:')),
				Nr.forEach(k),
				(N = q(Q)),
				(O = j(Q, $e)),
				Q.forEach(k),
				E.forEach(k),
				this.h();
		},
		h() {
			S(n, 'class', (h = e[0].Status === 'Cancelled' ? 'text-red-500' : 'text-green-500')),
				S(le, 'class', 'text-4xl'),
				S(s, 'class', 'flex-row flex justify-between '),
				S(t, 'class', 'p-4 m-2 bg-slate-100 border-gray-400 border rounded-md');
		},
		m(L, E) {
			ve(L, t, E),
				f(t, r),
				f(r, s),
				f(s, a),
				f(a, n),
				f(n, i),
				f(n, _),
				f(a, b),
				f(a, m),
				f(m, ee),
				f(s, ie),
				f(s, le),
				H.m(le, null),
				f(r, te),
				f(r, I),
				f(I, De),
				f(De, ue),
				f(I, Ge),
				f(I, de),
				f(r, re),
				f(r, C),
				f(C, Ye),
				f(Ye, fe),
				f(C, je),
				f(C, Oe),
				f(r, ze),
				f(r, Ue),
				f(Ue, he),
				f(r, N),
				f(r, O);
		},
		p(L, [E]) {
			E & 1 && o !== (o = L[0].Flightnumber + '') && _t(_, o),
				E & 1 &&
					h !== (h = L[0].Status === 'Cancelled' ? 'text-red-500' : 'text-green-500') &&
					S(n, 'class', h),
				E & 1 && g !== (g = L[0].Airline + '') && _t(ee, g),
				P !== (P = U(L, E)) && (H.d(1), (H = P(L)), H && (H.c(), H.m(le, null))),
				E & 1 && Me !== (Me = L[0].From + '') && _t(de, Me),
				E & 1 && be !== (be = L[0].Scheduled + '') && _t(Oe, be),
				E & 1 && $e !== ($e = L[0].Status + '') && _t(O, $e);
		},
		i: _e,
		o: _e,
		d(L) {
			L && k(t), H.d();
		}
	};
}
function Gs(e, t, r) {
	let { flight: s } = t;
	return (
		(e.$$set = (a) => {
			'flight' in a && r(0, (s = a.flight));
		}),
		[s]
	);
}
class js extends Ur {
	constructor(t) {
		super(), Ar(this, t, Gs, Vs, Hr, { flight: 0 });
	}
} //! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Vr;
function u() {
	return Vr.apply(null, arguments);
}
function zs(e) {
	Vr = e;
}
function me(e) {
	return e instanceof Array || Object.prototype.toString.call(e) === '[object Array]';
}
function et(e) {
	return e != null && Object.prototype.toString.call(e) === '[object Object]';
}
function M(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t);
}
function dr(e) {
	if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(e).length === 0;
	var t;
	for (t in e) if (M(e, t)) return !1;
	return !0;
}
function J(e) {
	return e === void 0;
}
function Le(e) {
	return typeof e == 'number' || Object.prototype.toString.call(e) === '[object Number]';
}
function pt(e) {
	return e instanceof Date || Object.prototype.toString.call(e) === '[object Date]';
}
function Gr(e, t) {
	var r = [],
		s,
		a = e.length;
	for (s = 0; s < a; ++s) r.push(t(e[s], s));
	return r;
}
function Ae(e, t) {
	for (var r in t) M(t, r) && (e[r] = t[r]);
	return (
		M(t, 'toString') && (e.toString = t.toString), M(t, 'valueOf') && (e.valueOf = t.valueOf), e
	);
}
function Se(e, t, r, s) {
	return cs(e, t, r, s, !0).utc();
}
function $s() {
	return {
		empty: !1,
		unusedTokens: [],
		unusedInput: [],
		overflow: -2,
		charsLeftOver: 0,
		nullInput: !1,
		invalidEra: null,
		invalidMonth: null,
		invalidFormat: !1,
		userInvalidated: !1,
		iso: !1,
		parsedDateParts: [],
		era: null,
		meridiem: null,
		rfc2822: !1,
		weekdayMismatch: !1
	};
}
function y(e) {
	return e._pf == null && (e._pf = $s()), e._pf;
}
var tr;
Array.prototype.some
	? (tr = Array.prototype.some)
	: (tr = function (e) {
			var t = Object(this),
				r = t.length >>> 0,
				s;
			for (s = 0; s < r; s++) if (s in t && e.call(this, t[s], s, t)) return !0;
			return !1;
	  });
function fr(e) {
	if (e._isValid == null) {
		var t = y(e),
			r = tr.call(t.parsedDateParts, function (a) {
				return a != null;
			}),
			s =
				!isNaN(e._d.getTime()) &&
				t.overflow < 0 &&
				!t.empty &&
				!t.invalidEra &&
				!t.invalidMonth &&
				!t.invalidWeekday &&
				!t.weekdayMismatch &&
				!t.nullInput &&
				!t.invalidFormat &&
				!t.userInvalidated &&
				(!t.meridiem || (t.meridiem && r));
		if (
			(e._strict &&
				(s = s && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0),
			Object.isFrozen == null || !Object.isFrozen(e))
		)
			e._isValid = s;
		else return s;
	}
	return e._isValid;
}
function Ct(e) {
	var t = Se(NaN);
	return e != null ? Ae(y(t), e) : (y(t).userInvalidated = !0), t;
}
var Pr = (u.momentProperties = []),
	Qt = !1;
function hr(e, t) {
	var r,
		s,
		a,
		n = Pr.length;
	if (
		(J(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
		J(t._i) || (e._i = t._i),
		J(t._f) || (e._f = t._f),
		J(t._l) || (e._l = t._l),
		J(t._strict) || (e._strict = t._strict),
		J(t._tzm) || (e._tzm = t._tzm),
		J(t._isUTC) || (e._isUTC = t._isUTC),
		J(t._offset) || (e._offset = t._offset),
		J(t._pf) || (e._pf = y(t)),
		J(t._locale) || (e._locale = t._locale),
		n > 0)
	)
		for (r = 0; r < n; r++) (s = Pr[r]), (a = t[s]), J(a) || (e[s] = a);
	return e;
}
function Dt(e) {
	hr(this, e),
		(this._d = new Date(e._d != null ? e._d.getTime() : NaN)),
		this.isValid() || (this._d = new Date(NaN)),
		Qt === !1 && ((Qt = !0), u.updateOffset(this), (Qt = !1));
}
function ye(e) {
	return e instanceof Dt || (e != null && e._isAMomentObject != null);
}
function jr(e) {
	u.suppressDeprecationWarnings === !1 &&
		typeof console < 'u' &&
		console.warn &&
		console.warn('Deprecation warning: ' + e);
}
function ae(e, t) {
	var r = !0;
	return Ae(function () {
		if ((u.deprecationHandler != null && u.deprecationHandler(null, e), r)) {
			var s = [],
				a,
				n,
				i,
				o = arguments.length;
			for (n = 0; n < o; n++) {
				if (((a = ''), typeof arguments[n] == 'object')) {
					a +=
						`
[` +
						n +
						'] ';
					for (i in arguments[0]) M(arguments[0], i) && (a += i + ': ' + arguments[0][i] + ', ');
					a = a.slice(0, -2);
				} else a = arguments[n];
				s.push(a);
			}
			jr(
				e +
					`
Arguments: ` +
					Array.prototype.slice.call(s).join('') +
					`
` +
					new Error().stack
			),
				(r = !1);
		}
		return t.apply(this, arguments);
	}, t);
}
var Wr = {};
function zr(e, t) {
	u.deprecationHandler != null && u.deprecationHandler(e, t), Wr[e] || (jr(t), (Wr[e] = !0));
}
u.suppressDeprecationWarnings = !1;
u.deprecationHandler = null;
function pe(e) {
	return (
		(typeof Function < 'u' && e instanceof Function) ||
		Object.prototype.toString.call(e) === '[object Function]'
	);
}
function Zs(e) {
	var t, r;
	for (r in e) M(e, r) && ((t = e[r]), pe(t) ? (this[r] = t) : (this['_' + r] = t));
	(this._config = e),
		(this._dayOfMonthOrdinalParseLenient = new RegExp(
			(this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source
		));
}
function rr(e, t) {
	var r = Ae({}, e),
		s;
	for (s in t)
		M(t, s) &&
			(et(e[s]) && et(t[s])
				? ((r[s] = {}), Ae(r[s], e[s]), Ae(r[s], t[s]))
				: t[s] != null
				? (r[s] = t[s])
				: delete r[s]);
	for (s in e) M(e, s) && !M(t, s) && et(e[s]) && (r[s] = Ae({}, r[s]));
	return r;
}
function cr(e) {
	e != null && this.set(e);
}
var sr;
Object.keys
	? (sr = Object.keys)
	: (sr = function (e) {
			var t,
				r = [];
			for (t in e) M(e, t) && r.push(t);
			return r;
	  });
var Bs = {
	sameDay: '[Today at] LT',
	nextDay: '[Tomorrow at] LT',
	nextWeek: 'dddd [at] LT',
	lastDay: '[Yesterday at] LT',
	lastWeek: '[Last] dddd [at] LT',
	sameElse: 'L'
};
function qs(e, t, r) {
	var s = this._calendar[e] || this._calendar.sameElse;
	return pe(s) ? s.call(t, r) : s;
}
function we(e, t, r) {
	var s = '' + Math.abs(e),
		a = t - s.length,
		n = e >= 0;
	return (n ? (r ? '+' : '') : '-') + Math.pow(10, Math.max(0, a)).toString().substr(1) + s;
}
var _r =
		/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
	bt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
	Xt = {},
	ot = {};
function c(e, t, r, s) {
	var a = s;
	typeof s == 'string' &&
		(a = function () {
			return this[s]();
		}),
		e && (ot[e] = a),
		t &&
			(ot[t[0]] = function () {
				return we(a.apply(this, arguments), t[1], t[2]);
			}),
		r &&
			(ot[r] = function () {
				return this.localeData().ordinal(a.apply(this, arguments), e);
			});
}
function Js(e) {
	return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, '') : e.replace(/\\/g, '');
}
function Qs(e) {
	var t = e.match(_r),
		r,
		s;
	for (r = 0, s = t.length; r < s; r++) ot[t[r]] ? (t[r] = ot[t[r]]) : (t[r] = Js(t[r]));
	return function (a) {
		var n = '',
			i;
		for (i = 0; i < s; i++) n += pe(t[i]) ? t[i].call(a, e) : t[i];
		return n;
	};
}
function Tt(e, t) {
	return e.isValid()
		? ((t = $r(t, e.localeData())), (Xt[t] = Xt[t] || Qs(t)), Xt[t](e))
		: e.localeData().invalidDate();
}
function $r(e, t) {
	var r = 5;
	function s(a) {
		return t.longDateFormat(a) || a;
	}
	for (bt.lastIndex = 0; r >= 0 && bt.test(e); )
		(e = e.replace(bt, s)), (bt.lastIndex = 0), (r -= 1);
	return e;
}
var Xs = {
	LTS: 'h:mm:ss A',
	LT: 'h:mm A',
	L: 'MM/DD/YYYY',
	LL: 'MMMM D, YYYY',
	LLL: 'MMMM D, YYYY h:mm A',
	LLLL: 'dddd, MMMM D, YYYY h:mm A'
};
function Ks(e) {
	var t = this._longDateFormat[e],
		r = this._longDateFormat[e.toUpperCase()];
	return t || !r
		? t
		: ((this._longDateFormat[e] = r
				.match(_r)
				.map(function (s) {
					return s === 'MMMM' || s === 'MM' || s === 'DD' || s === 'dddd' ? s.slice(1) : s;
				})
				.join('')),
		  this._longDateFormat[e]);
}
var ea = 'Invalid date';
function ta() {
	return this._invalidDate;
}
var ra = '%d',
	sa = /\d{1,2}/;
function aa(e) {
	return this._ordinal.replace('%d', e);
}
var na = {
	future: 'in %s',
	past: '%s ago',
	s: 'a few seconds',
	ss: '%d seconds',
	m: 'a minute',
	mm: '%d minutes',
	h: 'an hour',
	hh: '%d hours',
	d: 'a day',
	dd: '%d days',
	w: 'a week',
	ww: '%d weeks',
	M: 'a month',
	MM: '%d months',
	y: 'a year',
	yy: '%d years'
};
function ia(e, t, r, s) {
	var a = this._relativeTime[r];
	return pe(a) ? a(e, t, r, s) : a.replace(/%d/i, e);
}
function la(e, t) {
	var r = this._relativeTime[e > 0 ? 'future' : 'past'];
	return pe(r) ? r(t) : r.replace(/%s/i, t);
}
var gt = {};
function $(e, t) {
	var r = e.toLowerCase();
	gt[r] = gt[r + 's'] = gt[t] = e;
}
function ne(e) {
	return typeof e == 'string' ? gt[e] || gt[e.toLowerCase()] : void 0;
}
function mr(e) {
	var t = {},
		r,
		s;
	for (s in e) M(e, s) && ((r = ne(s)), r && (t[r] = e[s]));
	return t;
}
var Zr = {};
function Z(e, t) {
	Zr[e] = t;
}
function oa(e) {
	var t = [],
		r;
	for (r in e) M(e, r) && t.push({ unit: r, priority: Zr[r] });
	return (
		t.sort(function (s, a) {
			return s.priority - a.priority;
		}),
		t
	);
}
function Ut(e) {
	return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0;
}
function se(e) {
	return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function w(e) {
	var t = +e,
		r = 0;
	return t !== 0 && isFinite(t) && (r = se(t)), r;
}
function ft(e, t) {
	return function (r) {
		return r != null ? (Br(this, e, r), u.updateOffset(this, t), this) : Wt(this, e);
	};
}
function Wt(e, t) {
	return e.isValid() ? e._d['get' + (e._isUTC ? 'UTC' : '') + t]() : NaN;
}
function Br(e, t, r) {
	e.isValid() &&
		!isNaN(r) &&
		(t === 'FullYear' && Ut(e.year()) && e.month() === 1 && e.date() === 29
			? ((r = w(r)), e._d['set' + (e._isUTC ? 'UTC' : '') + t](r, e.month(), zt(r, e.month())))
			: e._d['set' + (e._isUTC ? 'UTC' : '') + t](r));
}
function ua(e) {
	return (e = ne(e)), pe(this[e]) ? this[e]() : this;
}
function da(e, t) {
	if (typeof e == 'object') {
		e = mr(e);
		var r = oa(e),
			s,
			a = r.length;
		for (s = 0; s < a; s++) this[r[s].unit](e[r[s].unit]);
	} else if (((e = ne(e)), pe(this[e]))) return this[e](t);
	return this;
}
var qr = /\d/,
	K = /\d\d/,
	Jr = /\d{3}/,
	yr = /\d{4}/,
	At = /[+-]?\d{6}/,
	R = /\d\d?/,
	Qr = /\d\d\d\d?/,
	Xr = /\d\d\d\d\d\d?/,
	Ht = /\d{1,3}/,
	gr = /\d{1,4}/,
	Vt = /[+-]?\d{1,6}/,
	ht = /\d+/,
	Gt = /[+-]?\d+/,
	fa = /Z|[+-]\d\d:?\d\d/gi,
	jt = /Z|[+-]\d\d(?::?\d\d)?/gi,
	ha = /[+-]?\d+(\.\d{1,3})?/,
	Mt =
		/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
	Rt;
Rt = {};
function d(e, t, r) {
	Rt[e] = pe(t)
		? t
		: function (s, a) {
				return s && r ? r : t;
		  };
}
function ca(e, t) {
	return M(Rt, e) ? Rt[e](t._strict, t._locale) : new RegExp(_a(e));
}
function _a(e) {
	return X(
		e.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, r, s, a, n) {
			return r || s || a || n;
		})
	);
}
function X(e) {
	return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
var ar = {};
function x(e, t) {
	var r,
		s = t,
		a;
	for (
		typeof e == 'string' && (e = [e]),
			Le(t) &&
				(s = function (n, i) {
					i[t] = w(n);
				}),
			a = e.length,
			r = 0;
		r < a;
		r++
	)
		ar[e[r]] = s;
}
function Yt(e, t) {
	x(e, function (r, s, a, n) {
		(a._w = a._w || {}), t(r, a._w, a, n);
	});
}
function ma(e, t, r) {
	t != null && M(ar, e) && ar[e](t, r._a, r, e);
}
var z = 0,
	Pe = 1,
	ke = 2,
	V = 3,
	ce = 4,
	We = 5,
	Ke = 6,
	ya = 7,
	ga = 8;
function ka(e, t) {
	return ((e % t) + t) % t;
}
var A;
Array.prototype.indexOf
	? (A = Array.prototype.indexOf)
	: (A = function (e) {
			var t;
			for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
			return -1;
	  });
function zt(e, t) {
	if (isNaN(e) || isNaN(t)) return NaN;
	var r = ka(t, 12);
	return (e += (t - r) / 12), r === 1 ? (Ut(e) ? 29 : 28) : 31 - ((r % 7) % 2);
}
c('M', ['MM', 2], 'Mo', function () {
	return this.month() + 1;
});
c('MMM', 0, 0, function (e) {
	return this.localeData().monthsShort(this, e);
});
c('MMMM', 0, 0, function (e) {
	return this.localeData().months(this, e);
});
$('month', 'M');
Z('month', 8);
d('M', R);
d('MM', R, K);
d('MMM', function (e, t) {
	return t.monthsShortRegex(e);
});
d('MMMM', function (e, t) {
	return t.monthsRegex(e);
});
x(['M', 'MM'], function (e, t) {
	t[Pe] = w(e) - 1;
});
x(['MMM', 'MMMM'], function (e, t, r, s) {
	var a = r._locale.monthsParse(e, s, r._strict);
	a != null ? (t[Pe] = a) : (y(r).invalidMonth = e);
});
var wa =
		'January_February_March_April_May_June_July_August_September_October_November_December'.split(
			'_'
		),
	Kr = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	es = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
	va = Mt,
	Sa = Mt;
function pa(e, t) {
	return e
		? me(this._months)
			? this._months[e.month()]
			: this._months[(this._months.isFormat || es).test(t) ? 'format' : 'standalone'][e.month()]
		: me(this._months)
		? this._months
		: this._months.standalone;
}
function Da(e, t) {
	return e
		? me(this._monthsShort)
			? this._monthsShort[e.month()]
			: this._monthsShort[es.test(t) ? 'format' : 'standalone'][e.month()]
		: me(this._monthsShort)
		? this._monthsShort
		: this._monthsShort.standalone;
}
function Ma(e, t, r) {
	var s,
		a,
		n,
		i = e.toLocaleLowerCase();
	if (!this._monthsParse)
		for (
			this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0;
			s < 12;
			++s
		)
			(n = Se([2e3, s])),
				(this._shortMonthsParse[s] = this.monthsShort(n, '').toLocaleLowerCase()),
				(this._longMonthsParse[s] = this.months(n, '').toLocaleLowerCase());
	return r
		? t === 'MMM'
			? ((a = A.call(this._shortMonthsParse, i)), a !== -1 ? a : null)
			: ((a = A.call(this._longMonthsParse, i)), a !== -1 ? a : null)
		: t === 'MMM'
		? ((a = A.call(this._shortMonthsParse, i)),
		  a !== -1 ? a : ((a = A.call(this._longMonthsParse, i)), a !== -1 ? a : null))
		: ((a = A.call(this._longMonthsParse, i)),
		  a !== -1 ? a : ((a = A.call(this._shortMonthsParse, i)), a !== -1 ? a : null));
}
function Ya(e, t, r) {
	var s, a, n;
	if (this._monthsParseExact) return Ma.call(this, e, t, r);
	for (
		this._monthsParse ||
			((this._monthsParse = []), (this._longMonthsParse = []), (this._shortMonthsParse = [])),
			s = 0;
		s < 12;
		s++
	) {
		if (
			((a = Se([2e3, s])),
			r &&
				!this._longMonthsParse[s] &&
				((this._longMonthsParse[s] = new RegExp(
					'^' + this.months(a, '').replace('.', '') + '$',
					'i'
				)),
				(this._shortMonthsParse[s] = new RegExp(
					'^' + this.monthsShort(a, '').replace('.', '') + '$',
					'i'
				))),
			!r &&
				!this._monthsParse[s] &&
				((n = '^' + this.months(a, '') + '|^' + this.monthsShort(a, '')),
				(this._monthsParse[s] = new RegExp(n.replace('.', ''), 'i'))),
			r && t === 'MMMM' && this._longMonthsParse[s].test(e))
		)
			return s;
		if (r && t === 'MMM' && this._shortMonthsParse[s].test(e)) return s;
		if (!r && this._monthsParse[s].test(e)) return s;
	}
}
function ts(e, t) {
	var r;
	if (!e.isValid()) return e;
	if (typeof t == 'string') {
		if (/^\d+$/.test(t)) t = w(t);
		else if (((t = e.localeData().monthsParse(t)), !Le(t))) return e;
	}
	return (
		(r = Math.min(e.date(), zt(e.year(), t))),
		e._d['set' + (e._isUTC ? 'UTC' : '') + 'Month'](t, r),
		e
	);
}
function rs(e) {
	return e != null ? (ts(this, e), u.updateOffset(this, !0), this) : Wt(this, 'Month');
}
function ba() {
	return zt(this.year(), this.month());
}
function Oa(e) {
	return this._monthsParseExact
		? (M(this, '_monthsRegex') || ss.call(this),
		  e ? this._monthsShortStrictRegex : this._monthsShortRegex)
		: (M(this, '_monthsShortRegex') || (this._monthsShortRegex = va),
		  this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Ta(e) {
	return this._monthsParseExact
		? (M(this, '_monthsRegex') || ss.call(this), e ? this._monthsStrictRegex : this._monthsRegex)
		: (M(this, '_monthsRegex') || (this._monthsRegex = Sa),
		  this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function ss() {
	function e(i, o) {
		return o.length - i.length;
	}
	var t = [],
		r = [],
		s = [],
		a,
		n;
	for (a = 0; a < 12; a++)
		(n = Se([2e3, a])),
			t.push(this.monthsShort(n, '')),
			r.push(this.months(n, '')),
			s.push(this.months(n, '')),
			s.push(this.monthsShort(n, ''));
	for (t.sort(e), r.sort(e), s.sort(e), a = 0; a < 12; a++) (t[a] = X(t[a])), (r[a] = X(r[a]));
	for (a = 0; a < 24; a++) s[a] = X(s[a]);
	(this._monthsRegex = new RegExp('^(' + s.join('|') + ')', 'i')),
		(this._monthsShortRegex = this._monthsRegex),
		(this._monthsStrictRegex = new RegExp('^(' + r.join('|') + ')', 'i')),
		(this._monthsShortStrictRegex = new RegExp('^(' + t.join('|') + ')', 'i'));
}
c('Y', 0, 0, function () {
	var e = this.year();
	return e <= 9999 ? we(e, 4) : '+' + e;
});
c(0, ['YY', 2], 0, function () {
	return this.year() % 100;
});
c(0, ['YYYY', 4], 0, 'year');
c(0, ['YYYYY', 5], 0, 'year');
c(0, ['YYYYYY', 6, !0], 0, 'year');
$('year', 'y');
Z('year', 1);
d('Y', Gt);
d('YY', R, K);
d('YYYY', gr, yr);
d('YYYYY', Vt, At);
d('YYYYYY', Vt, At);
x(['YYYYY', 'YYYYYY'], z);
x('YYYY', function (e, t) {
	t[z] = e.length === 2 ? u.parseTwoDigitYear(e) : w(e);
});
x('YY', function (e, t) {
	t[z] = u.parseTwoDigitYear(e);
});
x('Y', function (e, t) {
	t[z] = parseInt(e, 10);
});
function kt(e) {
	return Ut(e) ? 366 : 365;
}
u.parseTwoDigitYear = function (e) {
	return w(e) + (w(e) > 68 ? 1900 : 2e3);
};
var as = ft('FullYear', !0);
function xa() {
	return Ut(this.year());
}
function Na(e, t, r, s, a, n, i) {
	var o;
	return (
		e < 100 && e >= 0
			? ((o = new Date(e + 400, t, r, s, a, n, i)), isFinite(o.getFullYear()) && o.setFullYear(e))
			: (o = new Date(e, t, r, s, a, n, i)),
		o
	);
}
function wt(e) {
	var t, r;
	return (
		e < 100 && e >= 0
			? ((r = Array.prototype.slice.call(arguments)),
			  (r[0] = e + 400),
			  (t = new Date(Date.UTC.apply(null, r))),
			  isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
			: (t = new Date(Date.UTC.apply(null, arguments))),
		t
	);
}
function Ft(e, t, r) {
	var s = 7 + t - r,
		a = (7 + wt(e, 0, s).getUTCDay() - t) % 7;
	return -a + s - 1;
}
function ns(e, t, r, s, a) {
	var n = (7 + r - s) % 7,
		i = Ft(e, s, a),
		o = 1 + 7 * (t - 1) + n + i,
		_,
		h;
	return (
		o <= 0
			? ((_ = e - 1), (h = kt(_) + o))
			: o > kt(e)
			? ((_ = e + 1), (h = o - kt(e)))
			: ((_ = e), (h = o)),
		{ year: _, dayOfYear: h }
	);
}
function vt(e, t, r) {
	var s = Ft(e.year(), t, r),
		a = Math.floor((e.dayOfYear() - s - 1) / 7) + 1,
		n,
		i;
	return (
		a < 1
			? ((i = e.year() - 1), (n = a + Fe(i, t, r)))
			: a > Fe(e.year(), t, r)
			? ((n = a - Fe(e.year(), t, r)), (i = e.year() + 1))
			: ((i = e.year()), (n = a)),
		{ week: n, year: i }
	);
}
function Fe(e, t, r) {
	var s = Ft(e, t, r),
		a = Ft(e + 1, t, r);
	return (kt(e) - s + a) / 7;
}
c('w', ['ww', 2], 'wo', 'week');
c('W', ['WW', 2], 'Wo', 'isoWeek');
$('week', 'w');
$('isoWeek', 'W');
Z('week', 5);
Z('isoWeek', 5);
d('w', R);
d('ww', R, K);
d('W', R);
d('WW', R, K);
Yt(['w', 'ww', 'W', 'WW'], function (e, t, r, s) {
	t[s.substr(0, 1)] = w(e);
});
function Pa(e) {
	return vt(e, this._week.dow, this._week.doy).week;
}
var Wa = { dow: 0, doy: 6 };
function Ra() {
	return this._week.dow;
}
function Fa() {
	return this._week.doy;
}
function La(e) {
	var t = this.localeData().week(this);
	return e == null ? t : this.add((e - t) * 7, 'd');
}
function Ea(e) {
	var t = vt(this, 1, 4).week;
	return e == null ? t : this.add((e - t) * 7, 'd');
}
c('d', 0, 'do', 'day');
c('dd', 0, 0, function (e) {
	return this.localeData().weekdaysMin(this, e);
});
c('ddd', 0, 0, function (e) {
	return this.localeData().weekdaysShort(this, e);
});
c('dddd', 0, 0, function (e) {
	return this.localeData().weekdays(this, e);
});
c('e', 0, 0, 'weekday');
c('E', 0, 0, 'isoWeekday');
$('day', 'd');
$('weekday', 'e');
$('isoWeekday', 'E');
Z('day', 11);
Z('weekday', 11);
Z('isoWeekday', 11);
d('d', R);
d('e', R);
d('E', R);
d('dd', function (e, t) {
	return t.weekdaysMinRegex(e);
});
d('ddd', function (e, t) {
	return t.weekdaysShortRegex(e);
});
d('dddd', function (e, t) {
	return t.weekdaysRegex(e);
});
Yt(['dd', 'ddd', 'dddd'], function (e, t, r, s) {
	var a = r._locale.weekdaysParse(e, s, r._strict);
	a != null ? (t.d = a) : (y(r).invalidWeekday = e);
});
Yt(['d', 'e', 'E'], function (e, t, r, s) {
	t[s] = w(e);
});
function Ia(e, t) {
	return typeof e != 'string'
		? e
		: isNaN(e)
		? ((e = t.weekdaysParse(e)), typeof e == 'number' ? e : null)
		: parseInt(e, 10);
}
function Ca(e, t) {
	return typeof e == 'string' ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function kr(e, t) {
	return e.slice(t, 7).concat(e.slice(0, t));
}
var Ua = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	is = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	Aa = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	Ha = Mt,
	Va = Mt,
	Ga = Mt;
function ja(e, t) {
	var r = me(this._weekdays)
		? this._weekdays
		: this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? 'format' : 'standalone'];
	return e === !0 ? kr(r, this._week.dow) : e ? r[e.day()] : r;
}
function za(e) {
	return e === !0
		? kr(this._weekdaysShort, this._week.dow)
		: e
		? this._weekdaysShort[e.day()]
		: this._weekdaysShort;
}
function $a(e) {
	return e === !0
		? kr(this._weekdaysMin, this._week.dow)
		: e
		? this._weekdaysMin[e.day()]
		: this._weekdaysMin;
}
function Za(e, t, r) {
	var s,
		a,
		n,
		i = e.toLocaleLowerCase();
	if (!this._weekdaysParse)
		for (
			this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0;
			s < 7;
			++s
		)
			(n = Se([2e3, 1]).day(s)),
				(this._minWeekdaysParse[s] = this.weekdaysMin(n, '').toLocaleLowerCase()),
				(this._shortWeekdaysParse[s] = this.weekdaysShort(n, '').toLocaleLowerCase()),
				(this._weekdaysParse[s] = this.weekdays(n, '').toLocaleLowerCase());
	return r
		? t === 'dddd'
			? ((a = A.call(this._weekdaysParse, i)), a !== -1 ? a : null)
			: t === 'ddd'
			? ((a = A.call(this._shortWeekdaysParse, i)), a !== -1 ? a : null)
			: ((a = A.call(this._minWeekdaysParse, i)), a !== -1 ? a : null)
		: t === 'dddd'
		? ((a = A.call(this._weekdaysParse, i)),
		  a !== -1 || ((a = A.call(this._shortWeekdaysParse, i)), a !== -1)
				? a
				: ((a = A.call(this._minWeekdaysParse, i)), a !== -1 ? a : null))
		: t === 'ddd'
		? ((a = A.call(this._shortWeekdaysParse, i)),
		  a !== -1 || ((a = A.call(this._weekdaysParse, i)), a !== -1)
				? a
				: ((a = A.call(this._minWeekdaysParse, i)), a !== -1 ? a : null))
		: ((a = A.call(this._minWeekdaysParse, i)),
		  a !== -1 || ((a = A.call(this._weekdaysParse, i)), a !== -1)
				? a
				: ((a = A.call(this._shortWeekdaysParse, i)), a !== -1 ? a : null));
}
function Ba(e, t, r) {
	var s, a, n;
	if (this._weekdaysParseExact) return Za.call(this, e, t, r);
	for (
		this._weekdaysParse ||
			((this._weekdaysParse = []),
			(this._minWeekdaysParse = []),
			(this._shortWeekdaysParse = []),
			(this._fullWeekdaysParse = [])),
			s = 0;
		s < 7;
		s++
	) {
		if (
			((a = Se([2e3, 1]).day(s)),
			r &&
				!this._fullWeekdaysParse[s] &&
				((this._fullWeekdaysParse[s] = new RegExp(
					'^' + this.weekdays(a, '').replace('.', '\\.?') + '$',
					'i'
				)),
				(this._shortWeekdaysParse[s] = new RegExp(
					'^' + this.weekdaysShort(a, '').replace('.', '\\.?') + '$',
					'i'
				)),
				(this._minWeekdaysParse[s] = new RegExp(
					'^' + this.weekdaysMin(a, '').replace('.', '\\.?') + '$',
					'i'
				))),
			this._weekdaysParse[s] ||
				((n =
					'^' +
					this.weekdays(a, '') +
					'|^' +
					this.weekdaysShort(a, '') +
					'|^' +
					this.weekdaysMin(a, '')),
				(this._weekdaysParse[s] = new RegExp(n.replace('.', ''), 'i'))),
			r && t === 'dddd' && this._fullWeekdaysParse[s].test(e))
		)
			return s;
		if (r && t === 'ddd' && this._shortWeekdaysParse[s].test(e)) return s;
		if (r && t === 'dd' && this._minWeekdaysParse[s].test(e)) return s;
		if (!r && this._weekdaysParse[s].test(e)) return s;
	}
}
function qa(e) {
	if (!this.isValid()) return e != null ? this : NaN;
	var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
	return e != null ? ((e = Ia(e, this.localeData())), this.add(e - t, 'd')) : t;
}
function Ja(e) {
	if (!this.isValid()) return e != null ? this : NaN;
	var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
	return e == null ? t : this.add(e - t, 'd');
}
function Qa(e) {
	if (!this.isValid()) return e != null ? this : NaN;
	if (e != null) {
		var t = Ca(e, this.localeData());
		return this.day(this.day() % 7 ? t : t - 7);
	} else return this.day() || 7;
}
function Xa(e) {
	return this._weekdaysParseExact
		? (M(this, '_weekdaysRegex') || wr.call(this),
		  e ? this._weekdaysStrictRegex : this._weekdaysRegex)
		: (M(this, '_weekdaysRegex') || (this._weekdaysRegex = Ha),
		  this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Ka(e) {
	return this._weekdaysParseExact
		? (M(this, '_weekdaysRegex') || wr.call(this),
		  e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
		: (M(this, '_weekdaysShortRegex') || (this._weekdaysShortRegex = Va),
		  this._weekdaysShortStrictRegex && e
				? this._weekdaysShortStrictRegex
				: this._weekdaysShortRegex);
}
function en(e) {
	return this._weekdaysParseExact
		? (M(this, '_weekdaysRegex') || wr.call(this),
		  e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
		: (M(this, '_weekdaysMinRegex') || (this._weekdaysMinRegex = Ga),
		  this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function wr() {
	function e(b, m) {
		return m.length - b.length;
	}
	var t = [],
		r = [],
		s = [],
		a = [],
		n,
		i,
		o,
		_,
		h;
	for (n = 0; n < 7; n++)
		(i = Se([2e3, 1]).day(n)),
			(o = X(this.weekdaysMin(i, ''))),
			(_ = X(this.weekdaysShort(i, ''))),
			(h = X(this.weekdays(i, ''))),
			t.push(o),
			r.push(_),
			s.push(h),
			a.push(o),
			a.push(_),
			a.push(h);
	t.sort(e),
		r.sort(e),
		s.sort(e),
		a.sort(e),
		(this._weekdaysRegex = new RegExp('^(' + a.join('|') + ')', 'i')),
		(this._weekdaysShortRegex = this._weekdaysRegex),
		(this._weekdaysMinRegex = this._weekdaysRegex),
		(this._weekdaysStrictRegex = new RegExp('^(' + s.join('|') + ')', 'i')),
		(this._weekdaysShortStrictRegex = new RegExp('^(' + r.join('|') + ')', 'i')),
		(this._weekdaysMinStrictRegex = new RegExp('^(' + t.join('|') + ')', 'i'));
}
function vr() {
	return this.hours() % 12 || 12;
}
function tn() {
	return this.hours() || 24;
}
c('H', ['HH', 2], 0, 'hour');
c('h', ['hh', 2], 0, vr);
c('k', ['kk', 2], 0, tn);
c('hmm', 0, 0, function () {
	return '' + vr.apply(this) + we(this.minutes(), 2);
});
c('hmmss', 0, 0, function () {
	return '' + vr.apply(this) + we(this.minutes(), 2) + we(this.seconds(), 2);
});
c('Hmm', 0, 0, function () {
	return '' + this.hours() + we(this.minutes(), 2);
});
c('Hmmss', 0, 0, function () {
	return '' + this.hours() + we(this.minutes(), 2) + we(this.seconds(), 2);
});
function ls(e, t) {
	c(e, 0, 0, function () {
		return this.localeData().meridiem(this.hours(), this.minutes(), t);
	});
}
ls('a', !0);
ls('A', !1);
$('hour', 'h');
Z('hour', 13);
function os(e, t) {
	return t._meridiemParse;
}
d('a', os);
d('A', os);
d('H', R);
d('h', R);
d('k', R);
d('HH', R, K);
d('hh', R, K);
d('kk', R, K);
d('hmm', Qr);
d('hmmss', Xr);
d('Hmm', Qr);
d('Hmmss', Xr);
x(['H', 'HH'], V);
x(['k', 'kk'], function (e, t, r) {
	var s = w(e);
	t[V] = s === 24 ? 0 : s;
});
x(['a', 'A'], function (e, t, r) {
	(r._isPm = r._locale.isPM(e)), (r._meridiem = e);
});
x(['h', 'hh'], function (e, t, r) {
	(t[V] = w(e)), (y(r).bigHour = !0);
});
x('hmm', function (e, t, r) {
	var s = e.length - 2;
	(t[V] = w(e.substr(0, s))), (t[ce] = w(e.substr(s))), (y(r).bigHour = !0);
});
x('hmmss', function (e, t, r) {
	var s = e.length - 4,
		a = e.length - 2;
	(t[V] = w(e.substr(0, s))),
		(t[ce] = w(e.substr(s, 2))),
		(t[We] = w(e.substr(a))),
		(y(r).bigHour = !0);
});
x('Hmm', function (e, t, r) {
	var s = e.length - 2;
	(t[V] = w(e.substr(0, s))), (t[ce] = w(e.substr(s)));
});
x('Hmmss', function (e, t, r) {
	var s = e.length - 4,
		a = e.length - 2;
	(t[V] = w(e.substr(0, s))), (t[ce] = w(e.substr(s, 2))), (t[We] = w(e.substr(a)));
});
function rn(e) {
	return (e + '').toLowerCase().charAt(0) === 'p';
}
var sn = /[ap]\.?m?\.?/i,
	an = ft('Hours', !0);
function nn(e, t, r) {
	return e > 11 ? (r ? 'pm' : 'PM') : r ? 'am' : 'AM';
}
var us = {
		calendar: Bs,
		longDateFormat: Xs,
		invalidDate: ea,
		ordinal: ra,
		dayOfMonthOrdinalParse: sa,
		relativeTime: na,
		months: wa,
		monthsShort: Kr,
		week: Wa,
		weekdays: Ua,
		weekdaysMin: Aa,
		weekdaysShort: is,
		meridiemParse: sn
	},
	F = {},
	mt = {},
	St;
function ln(e, t) {
	var r,
		s = Math.min(e.length, t.length);
	for (r = 0; r < s; r += 1) if (e[r] !== t[r]) return r;
	return s;
}
function Rr(e) {
	return e && e.toLowerCase().replace('_', '-');
}
function on(e) {
	for (var t = 0, r, s, a, n; t < e.length; ) {
		for (
			n = Rr(e[t]).split('-'), r = n.length, s = Rr(e[t + 1]), s = s ? s.split('-') : null;
			r > 0;

		) {
			if (((a = $t(n.slice(0, r).join('-'))), a)) return a;
			if (s && s.length >= r && ln(n, s) >= r - 1) break;
			r--;
		}
		t++;
	}
	return St;
}
function un(e) {
	return e.match('^[^/\\\\]*$') != null;
}
function $t(e) {
	var t = null,
		r;
	if (F[e] === void 0 && typeof module < 'u' && module && module.exports && un(e))
		try {
			(t = St._abbr), (r = require), r('./locale/' + e), Ve(t);
		} catch {
			F[e] = null;
		}
	return F[e];
}
function Ve(e, t) {
	var r;
	return (
		e &&
			(J(t) ? (r = Ee(e)) : (r = Sr(e, t)),
			r
				? (St = r)
				: typeof console < 'u' &&
				  console.warn &&
				  console.warn('Locale ' + e + ' not found. Did you forget to load it?')),
		St._abbr
	);
}
function Sr(e, t) {
	if (t !== null) {
		var r,
			s = us;
		if (((t.abbr = e), F[e] != null))
			zr(
				'defineLocaleOverride',
				'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
			),
				(s = F[e]._config);
		else if (t.parentLocale != null)
			if (F[t.parentLocale] != null) s = F[t.parentLocale]._config;
			else if (((r = $t(t.parentLocale)), r != null)) s = r._config;
			else
				return (
					mt[t.parentLocale] || (mt[t.parentLocale] = []),
					mt[t.parentLocale].push({ name: e, config: t }),
					null
				);
		return (
			(F[e] = new cr(rr(s, t))),
			mt[e] &&
				mt[e].forEach(function (a) {
					Sr(a.name, a.config);
				}),
			Ve(e),
			F[e]
		);
	} else return delete F[e], null;
}
function dn(e, t) {
	if (t != null) {
		var r,
			s,
			a = us;
		F[e] != null && F[e].parentLocale != null
			? F[e].set(rr(F[e]._config, t))
			: ((s = $t(e)),
			  s != null && (a = s._config),
			  (t = rr(a, t)),
			  s == null && (t.abbr = e),
			  (r = new cr(t)),
			  (r.parentLocale = F[e]),
			  (F[e] = r)),
			Ve(e);
	} else
		F[e] != null &&
			(F[e].parentLocale != null
				? ((F[e] = F[e].parentLocale), e === Ve() && Ve(e))
				: F[e] != null && delete F[e]);
	return F[e];
}
function Ee(e) {
	var t;
	if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)) return St;
	if (!me(e)) {
		if (((t = $t(e)), t)) return t;
		e = [e];
	}
	return on(e);
}
function fn() {
	return sr(F);
}
function pr(e) {
	var t,
		r = e._a;
	return (
		r &&
			y(e).overflow === -2 &&
			((t =
				r[Pe] < 0 || r[Pe] > 11
					? Pe
					: r[ke] < 1 || r[ke] > zt(r[z], r[Pe])
					? ke
					: r[V] < 0 || r[V] > 24 || (r[V] === 24 && (r[ce] !== 0 || r[We] !== 0 || r[Ke] !== 0))
					? V
					: r[ce] < 0 || r[ce] > 59
					? ce
					: r[We] < 0 || r[We] > 59
					? We
					: r[Ke] < 0 || r[Ke] > 999
					? Ke
					: -1),
			y(e)._overflowDayOfYear && (t < z || t > ke) && (t = ke),
			y(e)._overflowWeeks && t === -1 && (t = ya),
			y(e)._overflowWeekday && t === -1 && (t = ga),
			(y(e).overflow = t)),
		e
	);
}
var hn =
		/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
	cn =
		/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
	_n = /Z|[+-]\d\d(?::?\d\d)?/,
	Ot = [
		['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
		['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
		['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
		['GGGG-[W]WW', /\d{4}-W\d\d/, !1],
		['YYYY-DDD', /\d{4}-\d{3}/],
		['YYYY-MM', /\d{4}-\d\d/, !1],
		['YYYYYYMMDD', /[+-]\d{10}/],
		['YYYYMMDD', /\d{8}/],
		['GGGG[W]WWE', /\d{4}W\d{3}/],
		['GGGG[W]WW', /\d{4}W\d{2}/, !1],
		['YYYYDDD', /\d{7}/],
		['YYYYMM', /\d{6}/, !1],
		['YYYY', /\d{4}/, !1]
	],
	Kt = [
		['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
		['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
		['HH:mm:ss', /\d\d:\d\d:\d\d/],
		['HH:mm', /\d\d:\d\d/],
		['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
		['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
		['HHmmss', /\d\d\d\d\d\d/],
		['HHmm', /\d\d\d\d/],
		['HH', /\d\d/]
	],
	mn = /^\/?Date\((-?\d+)/i,
	yn =
		/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
	gn = {
		UT: 0,
		GMT: 0,
		EDT: -4 * 60,
		EST: -5 * 60,
		CDT: -5 * 60,
		CST: -6 * 60,
		MDT: -6 * 60,
		MST: -7 * 60,
		PDT: -7 * 60,
		PST: -8 * 60
	};
function ds(e) {
	var t,
		r,
		s = e._i,
		a = hn.exec(s) || cn.exec(s),
		n,
		i,
		o,
		_,
		h = Ot.length,
		b = Kt.length;
	if (a) {
		for (y(e).iso = !0, t = 0, r = h; t < r; t++)
			if (Ot[t][1].exec(a[1])) {
				(i = Ot[t][0]), (n = Ot[t][2] !== !1);
				break;
			}
		if (i == null) {
			e._isValid = !1;
			return;
		}
		if (a[3]) {
			for (t = 0, r = b; t < r; t++)
				if (Kt[t][1].exec(a[3])) {
					o = (a[2] || ' ') + Kt[t][0];
					break;
				}
			if (o == null) {
				e._isValid = !1;
				return;
			}
		}
		if (!n && o != null) {
			e._isValid = !1;
			return;
		}
		if (a[4])
			if (_n.exec(a[4])) _ = 'Z';
			else {
				e._isValid = !1;
				return;
			}
		(e._f = i + (o || '') + (_ || '')), Mr(e);
	} else e._isValid = !1;
}
function kn(e, t, r, s, a, n) {
	var i = [wn(e), Kr.indexOf(t), parseInt(r, 10), parseInt(s, 10), parseInt(a, 10)];
	return n && i.push(parseInt(n, 10)), i;
}
function wn(e) {
	var t = parseInt(e, 10);
	return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function vn(e) {
	return e
		.replace(/\([^()]*\)|[\n\t]/g, ' ')
		.replace(/(\s\s+)/g, ' ')
		.replace(/^\s\s*/, '')
		.replace(/\s\s*$/, '');
}
function Sn(e, t, r) {
	if (e) {
		var s = is.indexOf(e),
			a = new Date(t[0], t[1], t[2]).getDay();
		if (s !== a) return (y(r).weekdayMismatch = !0), (r._isValid = !1), !1;
	}
	return !0;
}
function pn(e, t, r) {
	if (e) return gn[e];
	if (t) return 0;
	var s = parseInt(r, 10),
		a = s % 100,
		n = (s - a) / 100;
	return n * 60 + a;
}
function fs(e) {
	var t = yn.exec(vn(e._i)),
		r;
	if (t) {
		if (((r = kn(t[4], t[3], t[2], t[5], t[6], t[7])), !Sn(t[1], r, e))) return;
		(e._a = r),
			(e._tzm = pn(t[8], t[9], t[10])),
			(e._d = wt.apply(null, e._a)),
			e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
			(y(e).rfc2822 = !0);
	} else e._isValid = !1;
}
function Dn(e) {
	var t = mn.exec(e._i);
	if (t !== null) {
		e._d = new Date(+t[1]);
		return;
	}
	if ((ds(e), e._isValid === !1)) delete e._isValid;
	else return;
	if ((fs(e), e._isValid === !1)) delete e._isValid;
	else return;
	e._strict ? (e._isValid = !1) : u.createFromInputFallback(e);
}
u.createFromInputFallback = ae(
	'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
	function (e) {
		e._d = new Date(e._i + (e._useUTC ? ' UTC' : ''));
	}
);
function it(e, t, r) {
	return e != null ? e : t != null ? t : r;
}
function Mn(e) {
	var t = new Date(u.now());
	return e._useUTC
		? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
		: [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Dr(e) {
	var t,
		r,
		s = [],
		a,
		n,
		i;
	if (!e._d) {
		for (
			a = Mn(e),
				e._w && e._a[ke] == null && e._a[Pe] == null && Yn(e),
				e._dayOfYear != null &&
					((i = it(e._a[z], a[z])),
					(e._dayOfYear > kt(i) || e._dayOfYear === 0) && (y(e)._overflowDayOfYear = !0),
					(r = wt(i, 0, e._dayOfYear)),
					(e._a[Pe] = r.getUTCMonth()),
					(e._a[ke] = r.getUTCDate())),
				t = 0;
			t < 3 && e._a[t] == null;
			++t
		)
			e._a[t] = s[t] = a[t];
		for (; t < 7; t++) e._a[t] = s[t] = e._a[t] == null ? (t === 2 ? 1 : 0) : e._a[t];
		e._a[V] === 24 &&
			e._a[ce] === 0 &&
			e._a[We] === 0 &&
			e._a[Ke] === 0 &&
			((e._nextDay = !0), (e._a[V] = 0)),
			(e._d = (e._useUTC ? wt : Na).apply(null, s)),
			(n = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
			e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
			e._nextDay && (e._a[V] = 24),
			e._w && typeof e._w.d < 'u' && e._w.d !== n && (y(e).weekdayMismatch = !0);
	}
}
function Yn(e) {
	var t, r, s, a, n, i, o, _, h;
	(t = e._w),
		t.GG != null || t.W != null || t.E != null
			? ((n = 1),
			  (i = 4),
			  (r = it(t.GG, e._a[z], vt(W(), 1, 4).year)),
			  (s = it(t.W, 1)),
			  (a = it(t.E, 1)),
			  (a < 1 || a > 7) && (_ = !0))
			: ((n = e._locale._week.dow),
			  (i = e._locale._week.doy),
			  (h = vt(W(), n, i)),
			  (r = it(t.gg, e._a[z], h.year)),
			  (s = it(t.w, h.week)),
			  t.d != null
					? ((a = t.d), (a < 0 || a > 6) && (_ = !0))
					: t.e != null
					? ((a = t.e + n), (t.e < 0 || t.e > 6) && (_ = !0))
					: (a = n)),
		s < 1 || s > Fe(r, n, i)
			? (y(e)._overflowWeeks = !0)
			: _ != null
			? (y(e)._overflowWeekday = !0)
			: ((o = ns(r, s, a, n, i)), (e._a[z] = o.year), (e._dayOfYear = o.dayOfYear));
}
u.ISO_8601 = function () {};
u.RFC_2822 = function () {};
function Mr(e) {
	if (e._f === u.ISO_8601) {
		ds(e);
		return;
	}
	if (e._f === u.RFC_2822) {
		fs(e);
		return;
	}
	(e._a = []), (y(e).empty = !0);
	var t = '' + e._i,
		r,
		s,
		a,
		n,
		i,
		o = t.length,
		_ = 0,
		h,
		b;
	for (a = $r(e._f, e._locale).match(_r) || [], b = a.length, r = 0; r < b; r++)
		(n = a[r]),
			(s = (t.match(ca(n, e)) || [])[0]),
			s &&
				((i = t.substr(0, t.indexOf(s))),
				i.length > 0 && y(e).unusedInput.push(i),
				(t = t.slice(t.indexOf(s) + s.length)),
				(_ += s.length)),
			ot[n]
				? (s ? (y(e).empty = !1) : y(e).unusedTokens.push(n), ma(n, s, e))
				: e._strict && !s && y(e).unusedTokens.push(n);
	(y(e).charsLeftOver = o - _),
		t.length > 0 && y(e).unusedInput.push(t),
		e._a[V] <= 12 && y(e).bigHour === !0 && e._a[V] > 0 && (y(e).bigHour = void 0),
		(y(e).parsedDateParts = e._a.slice(0)),
		(y(e).meridiem = e._meridiem),
		(e._a[V] = bn(e._locale, e._a[V], e._meridiem)),
		(h = y(e).era),
		h !== null && (e._a[z] = e._locale.erasConvertYear(h, e._a[z])),
		Dr(e),
		pr(e);
}
function bn(e, t, r) {
	var s;
	return r == null
		? t
		: e.meridiemHour != null
		? e.meridiemHour(t, r)
		: (e.isPM != null && ((s = e.isPM(r)), s && t < 12 && (t += 12), !s && t === 12 && (t = 0)), t);
}
function On(e) {
	var t,
		r,
		s,
		a,
		n,
		i,
		o = !1,
		_ = e._f.length;
	if (_ === 0) {
		(y(e).invalidFormat = !0), (e._d = new Date(NaN));
		return;
	}
	for (a = 0; a < _; a++)
		(n = 0),
			(i = !1),
			(t = hr({}, e)),
			e._useUTC != null && (t._useUTC = e._useUTC),
			(t._f = e._f[a]),
			Mr(t),
			fr(t) && (i = !0),
			(n += y(t).charsLeftOver),
			(n += y(t).unusedTokens.length * 10),
			(y(t).score = n),
			o
				? n < s && ((s = n), (r = t))
				: (s == null || n < s || i) && ((s = n), (r = t), i && (o = !0));
	Ae(e, r || t);
}
function Tn(e) {
	if (!e._d) {
		var t = mr(e._i),
			r = t.day === void 0 ? t.date : t.day;
		(e._a = Gr([t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond], function (s) {
			return s && parseInt(s, 10);
		})),
			Dr(e);
	}
}
function xn(e) {
	var t = new Dt(pr(hs(e)));
	return t._nextDay && (t.add(1, 'd'), (t._nextDay = void 0)), t;
}
function hs(e) {
	var t = e._i,
		r = e._f;
	return (
		(e._locale = e._locale || Ee(e._l)),
		t === null || (r === void 0 && t === '')
			? Ct({ nullInput: !0 })
			: (typeof t == 'string' && (e._i = t = e._locale.preparse(t)),
			  ye(t)
					? new Dt(pr(t))
					: (pt(t) ? (e._d = t) : me(r) ? On(e) : r ? Mr(e) : Nn(e), fr(e) || (e._d = null), e))
	);
}
function Nn(e) {
	var t = e._i;
	J(t)
		? (e._d = new Date(u.now()))
		: pt(t)
		? (e._d = new Date(t.valueOf()))
		: typeof t == 'string'
		? Dn(e)
		: me(t)
		? ((e._a = Gr(t.slice(0), function (r) {
				return parseInt(r, 10);
		  })),
		  Dr(e))
		: et(t)
		? Tn(e)
		: Le(t)
		? (e._d = new Date(t))
		: u.createFromInputFallback(e);
}
function cs(e, t, r, s, a) {
	var n = {};
	return (
		(t === !0 || t === !1) && ((s = t), (t = void 0)),
		(r === !0 || r === !1) && ((s = r), (r = void 0)),
		((et(e) && dr(e)) || (me(e) && e.length === 0)) && (e = void 0),
		(n._isAMomentObject = !0),
		(n._useUTC = n._isUTC = a),
		(n._l = r),
		(n._i = e),
		(n._f = t),
		(n._strict = s),
		xn(n)
	);
}
function W(e, t, r, s) {
	return cs(e, t, r, s, !1);
}
var Pn = ae(
		'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
		function () {
			var e = W.apply(null, arguments);
			return this.isValid() && e.isValid() ? (e < this ? this : e) : Ct();
		}
	),
	Wn = ae(
		'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
		function () {
			var e = W.apply(null, arguments);
			return this.isValid() && e.isValid() ? (e > this ? this : e) : Ct();
		}
	);
function _s(e, t) {
	var r, s;
	if ((t.length === 1 && me(t[0]) && (t = t[0]), !t.length)) return W();
	for (r = t[0], s = 1; s < t.length; ++s) (!t[s].isValid() || t[s][e](r)) && (r = t[s]);
	return r;
}
function Rn() {
	var e = [].slice.call(arguments, 0);
	return _s('isBefore', e);
}
function Fn() {
	var e = [].slice.call(arguments, 0);
	return _s('isAfter', e);
}
var Ln = function () {
		return Date.now ? Date.now() : +new Date();
	},
	yt = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];
function En(e) {
	var t,
		r = !1,
		s,
		a = yt.length;
	for (t in e) if (M(e, t) && !(A.call(yt, t) !== -1 && (e[t] == null || !isNaN(e[t])))) return !1;
	for (s = 0; s < a; ++s)
		if (e[yt[s]]) {
			if (r) return !1;
			parseFloat(e[yt[s]]) !== w(e[yt[s]]) && (r = !0);
		}
	return !0;
}
function In() {
	return this._isValid;
}
function Cn() {
	return ge(NaN);
}
function Zt(e) {
	var t = mr(e),
		r = t.year || 0,
		s = t.quarter || 0,
		a = t.month || 0,
		n = t.week || t.isoWeek || 0,
		i = t.day || 0,
		o = t.hour || 0,
		_ = t.minute || 0,
		h = t.second || 0,
		b = t.millisecond || 0;
	(this._isValid = En(t)),
		(this._milliseconds = +b + h * 1e3 + _ * 6e4 + o * 1e3 * 60 * 60),
		(this._days = +i + n * 7),
		(this._months = +a + s * 3 + r * 12),
		(this._data = {}),
		(this._locale = Ee()),
		this._bubble();
}
function xt(e) {
	return e instanceof Zt;
}
function nr(e) {
	return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Un(e, t, r) {
	var s = Math.min(e.length, t.length),
		a = Math.abs(e.length - t.length),
		n = 0,
		i;
	for (i = 0; i < s; i++) ((r && e[i] !== t[i]) || (!r && w(e[i]) !== w(t[i]))) && n++;
	return n + a;
}
function ms(e, t) {
	c(e, 0, 0, function () {
		var r = this.utcOffset(),
			s = '+';
		return r < 0 && ((r = -r), (s = '-')), s + we(~~(r / 60), 2) + t + we(~~r % 60, 2);
	});
}
ms('Z', ':');
ms('ZZ', '');
d('Z', jt);
d('ZZ', jt);
x(['Z', 'ZZ'], function (e, t, r) {
	(r._useUTC = !0), (r._tzm = Yr(jt, e));
});
var An = /([\+\-]|\d\d)/gi;
function Yr(e, t) {
	var r = (t || '').match(e),
		s,
		a,
		n;
	return r === null
		? null
		: ((s = r[r.length - 1] || []),
		  (a = (s + '').match(An) || ['-', 0, 0]),
		  (n = +(a[1] * 60) + w(a[2])),
		  n === 0 ? 0 : a[0] === '+' ? n : -n);
}
function br(e, t) {
	var r, s;
	return t._isUTC
		? ((r = t.clone()),
		  (s = (ye(e) || pt(e) ? e.valueOf() : W(e).valueOf()) - r.valueOf()),
		  r._d.setTime(r._d.valueOf() + s),
		  u.updateOffset(r, !1),
		  r)
		: W(e).local();
}
function ir(e) {
	return -Math.round(e._d.getTimezoneOffset());
}
u.updateOffset = function () {};
function Hn(e, t, r) {
	var s = this._offset || 0,
		a;
	if (!this.isValid()) return e != null ? this : NaN;
	if (e != null) {
		if (typeof e == 'string') {
			if (((e = Yr(jt, e)), e === null)) return this;
		} else Math.abs(e) < 16 && !r && (e = e * 60);
		return (
			!this._isUTC && t && (a = ir(this)),
			(this._offset = e),
			(this._isUTC = !0),
			a != null && this.add(a, 'm'),
			s !== e &&
				(!t || this._changeInProgress
					? ks(this, ge(e - s, 'm'), 1, !1)
					: this._changeInProgress ||
					  ((this._changeInProgress = !0),
					  u.updateOffset(this, !0),
					  (this._changeInProgress = null))),
			this
		);
	} else return this._isUTC ? s : ir(this);
}
function Vn(e, t) {
	return e != null
		? (typeof e != 'string' && (e = -e), this.utcOffset(e, t), this)
		: -this.utcOffset();
}
function Gn(e) {
	return this.utcOffset(0, e);
}
function jn(e) {
	return (
		this._isUTC && (this.utcOffset(0, e), (this._isUTC = !1), e && this.subtract(ir(this), 'm')),
		this
	);
}
function zn() {
	if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
	else if (typeof this._i == 'string') {
		var e = Yr(fa, this._i);
		e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
	}
	return this;
}
function $n(e) {
	return this.isValid() ? ((e = e ? W(e).utcOffset() : 0), (this.utcOffset() - e) % 60 === 0) : !1;
}
function Zn() {
	return (
		this.utcOffset() > this.clone().month(0).utcOffset() ||
		this.utcOffset() > this.clone().month(5).utcOffset()
	);
}
function Bn() {
	if (!J(this._isDSTShifted)) return this._isDSTShifted;
	var e = {},
		t;
	return (
		hr(e, this),
		(e = hs(e)),
		e._a
			? ((t = e._isUTC ? Se(e._a) : W(e._a)),
			  (this._isDSTShifted = this.isValid() && Un(e._a, t.toArray()) > 0))
			: (this._isDSTShifted = !1),
		this._isDSTShifted
	);
}
function qn() {
	return this.isValid() ? !this._isUTC : !1;
}
function Jn() {
	return this.isValid() ? this._isUTC : !1;
}
function ys() {
	return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Qn = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
	Xn =
		/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function ge(e, t) {
	var r = e,
		s = null,
		a,
		n,
		i;
	return (
		xt(e)
			? (r = { ms: e._milliseconds, d: e._days, M: e._months })
			: Le(e) || !isNaN(+e)
			? ((r = {}), t ? (r[t] = +e) : (r.milliseconds = +e))
			: (s = Qn.exec(e))
			? ((a = s[1] === '-' ? -1 : 1),
			  (r = {
					y: 0,
					d: w(s[ke]) * a,
					h: w(s[V]) * a,
					m: w(s[ce]) * a,
					s: w(s[We]) * a,
					ms: w(nr(s[Ke] * 1e3)) * a
			  }))
			: (s = Xn.exec(e))
			? ((a = s[1] === '-' ? -1 : 1),
			  (r = {
					y: Xe(s[2], a),
					M: Xe(s[3], a),
					w: Xe(s[4], a),
					d: Xe(s[5], a),
					h: Xe(s[6], a),
					m: Xe(s[7], a),
					s: Xe(s[8], a)
			  }))
			: r == null
			? (r = {})
			: typeof r == 'object' &&
			  ('from' in r || 'to' in r) &&
			  ((i = Kn(W(r.from), W(r.to))), (r = {}), (r.ms = i.milliseconds), (r.M = i.months)),
		(n = new Zt(r)),
		xt(e) && M(e, '_locale') && (n._locale = e._locale),
		xt(e) && M(e, '_isValid') && (n._isValid = e._isValid),
		n
	);
}
ge.fn = Zt.prototype;
ge.invalid = Cn;
function Xe(e, t) {
	var r = e && parseFloat(e.replace(',', '.'));
	return (isNaN(r) ? 0 : r) * t;
}
function Fr(e, t) {
	var r = {};
	return (
		(r.months = t.month() - e.month() + (t.year() - e.year()) * 12),
		e.clone().add(r.months, 'M').isAfter(t) && --r.months,
		(r.milliseconds = +t - +e.clone().add(r.months, 'M')),
		r
	);
}
function Kn(e, t) {
	var r;
	return e.isValid() && t.isValid()
		? ((t = br(t, e)),
		  e.isBefore(t)
				? (r = Fr(e, t))
				: ((r = Fr(t, e)), (r.milliseconds = -r.milliseconds), (r.months = -r.months)),
		  r)
		: { milliseconds: 0, months: 0 };
}
function gs(e, t) {
	return function (r, s) {
		var a, n;
		return (
			s !== null &&
				!isNaN(+s) &&
				(zr(
					t,
					'moment().' +
						t +
						'(period, number) is deprecated. Please use moment().' +
						t +
						'(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
				),
				(n = r),
				(r = s),
				(s = n)),
			(a = ge(r, s)),
			ks(this, a, e),
			this
		);
	};
}
function ks(e, t, r, s) {
	var a = t._milliseconds,
		n = nr(t._days),
		i = nr(t._months);
	!e.isValid() ||
		((s = s == null ? !0 : s),
		i && ts(e, Wt(e, 'Month') + i * r),
		n && Br(e, 'Date', Wt(e, 'Date') + n * r),
		a && e._d.setTime(e._d.valueOf() + a * r),
		s && u.updateOffset(e, n || i));
}
var ei = gs(1, 'add'),
	ti = gs(-1, 'subtract');
function ws(e) {
	return typeof e == 'string' || e instanceof String;
}
function ri(e) {
	return ye(e) || pt(e) || ws(e) || Le(e) || ai(e) || si(e) || e === null || e === void 0;
}
function si(e) {
	var t = et(e) && !dr(e),
		r = !1,
		s = [
			'years',
			'year',
			'y',
			'months',
			'month',
			'M',
			'days',
			'day',
			'd',
			'dates',
			'date',
			'D',
			'hours',
			'hour',
			'h',
			'minutes',
			'minute',
			'm',
			'seconds',
			'second',
			's',
			'milliseconds',
			'millisecond',
			'ms'
		],
		a,
		n,
		i = s.length;
	for (a = 0; a < i; a += 1) (n = s[a]), (r = r || M(e, n));
	return t && r;
}
function ai(e) {
	var t = me(e),
		r = !1;
	return (
		t &&
			(r =
				e.filter(function (s) {
					return !Le(s) && ws(e);
				}).length === 0),
		t && r
	);
}
function ni(e) {
	var t = et(e) && !dr(e),
		r = !1,
		s = ['sameDay', 'nextDay', 'lastDay', 'nextWeek', 'lastWeek', 'sameElse'],
		a,
		n;
	for (a = 0; a < s.length; a += 1) (n = s[a]), (r = r || M(e, n));
	return t && r;
}
function ii(e, t) {
	var r = e.diff(t, 'days', !0);
	return r < -6
		? 'sameElse'
		: r < -1
		? 'lastWeek'
		: r < 0
		? 'lastDay'
		: r < 1
		? 'sameDay'
		: r < 2
		? 'nextDay'
		: r < 7
		? 'nextWeek'
		: 'sameElse';
}
function li(e, t) {
	arguments.length === 1 &&
		(arguments[0]
			? ri(arguments[0])
				? ((e = arguments[0]), (t = void 0))
				: ni(arguments[0]) && ((t = arguments[0]), (e = void 0))
			: ((e = void 0), (t = void 0)));
	var r = e || W(),
		s = br(r, this).startOf('day'),
		a = u.calendarFormat(this, s) || 'sameElse',
		n = t && (pe(t[a]) ? t[a].call(this, r) : t[a]);
	return this.format(n || this.localeData().calendar(a, this, W(r)));
}
function oi() {
	return new Dt(this);
}
function ui(e, t) {
	var r = ye(e) ? e : W(e);
	return this.isValid() && r.isValid()
		? ((t = ne(t) || 'millisecond'),
		  t === 'millisecond'
				? this.valueOf() > r.valueOf()
				: r.valueOf() < this.clone().startOf(t).valueOf())
		: !1;
}
function di(e, t) {
	var r = ye(e) ? e : W(e);
	return this.isValid() && r.isValid()
		? ((t = ne(t) || 'millisecond'),
		  t === 'millisecond'
				? this.valueOf() < r.valueOf()
				: this.clone().endOf(t).valueOf() < r.valueOf())
		: !1;
}
function fi(e, t, r, s) {
	var a = ye(e) ? e : W(e),
		n = ye(t) ? t : W(t);
	return this.isValid() && a.isValid() && n.isValid()
		? ((s = s || '()'),
		  (s[0] === '(' ? this.isAfter(a, r) : !this.isBefore(a, r)) &&
				(s[1] === ')' ? this.isBefore(n, r) : !this.isAfter(n, r)))
		: !1;
}
function hi(e, t) {
	var r = ye(e) ? e : W(e),
		s;
	return this.isValid() && r.isValid()
		? ((t = ne(t) || 'millisecond'),
		  t === 'millisecond'
				? this.valueOf() === r.valueOf()
				: ((s = r.valueOf()),
				  this.clone().startOf(t).valueOf() <= s && s <= this.clone().endOf(t).valueOf()))
		: !1;
}
function ci(e, t) {
	return this.isSame(e, t) || this.isAfter(e, t);
}
function _i(e, t) {
	return this.isSame(e, t) || this.isBefore(e, t);
}
function mi(e, t, r) {
	var s, a, n;
	if (!this.isValid()) return NaN;
	if (((s = br(e, this)), !s.isValid())) return NaN;
	switch (((a = (s.utcOffset() - this.utcOffset()) * 6e4), (t = ne(t)), t)) {
		case 'year':
			n = Nt(this, s) / 12;
			break;
		case 'month':
			n = Nt(this, s);
			break;
		case 'quarter':
			n = Nt(this, s) / 3;
			break;
		case 'second':
			n = (this - s) / 1e3;
			break;
		case 'minute':
			n = (this - s) / 6e4;
			break;
		case 'hour':
			n = (this - s) / 36e5;
			break;
		case 'day':
			n = (this - s - a) / 864e5;
			break;
		case 'week':
			n = (this - s - a) / 6048e5;
			break;
		default:
			n = this - s;
	}
	return r ? n : se(n);
}
function Nt(e, t) {
	if (e.date() < t.date()) return -Nt(t, e);
	var r = (t.year() - e.year()) * 12 + (t.month() - e.month()),
		s = e.clone().add(r, 'months'),
		a,
		n;
	return (
		t - s < 0
			? ((a = e.clone().add(r - 1, 'months')), (n = (t - s) / (s - a)))
			: ((a = e.clone().add(r + 1, 'months')), (n = (t - s) / (a - s))),
		-(r + n) || 0
	);
}
u.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
u.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
function yi() {
	return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}
function gi(e) {
	if (!this.isValid()) return null;
	var t = e !== !0,
		r = t ? this.clone().utc() : this;
	return r.year() < 0 || r.year() > 9999
		? Tt(r, t ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ')
		: pe(Date.prototype.toISOString)
		? t
			? this.toDate().toISOString()
			: new Date(this.valueOf() + this.utcOffset() * 60 * 1e3)
					.toISOString()
					.replace('Z', Tt(r, 'Z'))
		: Tt(r, t ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
}
function ki() {
	if (!this.isValid()) return 'moment.invalid(/* ' + this._i + ' */)';
	var e = 'moment',
		t = '',
		r,
		s,
		a,
		n;
	return (
		this.isLocal() || ((e = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone'), (t = 'Z')),
		(r = '[' + e + '("]'),
		(s = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY'),
		(a = '-MM-DD[T]HH:mm:ss.SSS'),
		(n = t + '[")]'),
		this.format(r + s + a + n)
	);
}
function wi(e) {
	e || (e = this.isUtc() ? u.defaultFormatUtc : u.defaultFormat);
	var t = Tt(this, e);
	return this.localeData().postformat(t);
}
function vi(e, t) {
	return this.isValid() && ((ye(e) && e.isValid()) || W(e).isValid())
		? ge({ to: this, from: e }).locale(this.locale()).humanize(!t)
		: this.localeData().invalidDate();
}
function Si(e) {
	return this.from(W(), e);
}
function pi(e, t) {
	return this.isValid() && ((ye(e) && e.isValid()) || W(e).isValid())
		? ge({ from: this, to: e }).locale(this.locale()).humanize(!t)
		: this.localeData().invalidDate();
}
function Di(e) {
	return this.to(W(), e);
}
function vs(e) {
	var t;
	return e === void 0 ? this._locale._abbr : ((t = Ee(e)), t != null && (this._locale = t), this);
}
var Ss = ae(
	'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
	function (e) {
		return e === void 0 ? this.localeData() : this.locale(e);
	}
);
function ps() {
	return this._locale;
}
var Lt = 1e3,
	ut = 60 * Lt,
	Et = 60 * ut,
	Ds = (365 * 400 + 97) * 24 * Et;
function dt(e, t) {
	return ((e % t) + t) % t;
}
function Ms(e, t, r) {
	return e < 100 && e >= 0 ? new Date(e + 400, t, r) - Ds : new Date(e, t, r).valueOf();
}
function Ys(e, t, r) {
	return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - Ds : Date.UTC(e, t, r);
}
function Mi(e) {
	var t, r;
	if (((e = ne(e)), e === void 0 || e === 'millisecond' || !this.isValid())) return this;
	switch (((r = this._isUTC ? Ys : Ms), e)) {
		case 'year':
			t = r(this.year(), 0, 1);
			break;
		case 'quarter':
			t = r(this.year(), this.month() - (this.month() % 3), 1);
			break;
		case 'month':
			t = r(this.year(), this.month(), 1);
			break;
		case 'week':
			t = r(this.year(), this.month(), this.date() - this.weekday());
			break;
		case 'isoWeek':
			t = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
			break;
		case 'day':
		case 'date':
			t = r(this.year(), this.month(), this.date());
			break;
		case 'hour':
			(t = this._d.valueOf()), (t -= dt(t + (this._isUTC ? 0 : this.utcOffset() * ut), Et));
			break;
		case 'minute':
			(t = this._d.valueOf()), (t -= dt(t, ut));
			break;
		case 'second':
			(t = this._d.valueOf()), (t -= dt(t, Lt));
			break;
	}
	return this._d.setTime(t), u.updateOffset(this, !0), this;
}
function Yi(e) {
	var t, r;
	if (((e = ne(e)), e === void 0 || e === 'millisecond' || !this.isValid())) return this;
	switch (((r = this._isUTC ? Ys : Ms), e)) {
		case 'year':
			t = r(this.year() + 1, 0, 1) - 1;
			break;
		case 'quarter':
			t = r(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
			break;
		case 'month':
			t = r(this.year(), this.month() + 1, 1) - 1;
			break;
		case 'week':
			t = r(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
			break;
		case 'isoWeek':
			t = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
			break;
		case 'day':
		case 'date':
			t = r(this.year(), this.month(), this.date() + 1) - 1;
			break;
		case 'hour':
			(t = this._d.valueOf()),
				(t += Et - dt(t + (this._isUTC ? 0 : this.utcOffset() * ut), Et) - 1);
			break;
		case 'minute':
			(t = this._d.valueOf()), (t += ut - dt(t, ut) - 1);
			break;
		case 'second':
			(t = this._d.valueOf()), (t += Lt - dt(t, Lt) - 1);
			break;
	}
	return this._d.setTime(t), u.updateOffset(this, !0), this;
}
function bi() {
	return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Oi() {
	return Math.floor(this.valueOf() / 1e3);
}
function Ti() {
	return new Date(this.valueOf());
}
function xi() {
	var e = this;
	return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()];
}
function Ni() {
	var e = this;
	return {
		years: e.year(),
		months: e.month(),
		date: e.date(),
		hours: e.hours(),
		minutes: e.minutes(),
		seconds: e.seconds(),
		milliseconds: e.milliseconds()
	};
}
function Pi() {
	return this.isValid() ? this.toISOString() : null;
}
function Wi() {
	return fr(this);
}
function Ri() {
	return Ae({}, y(this));
}
function Fi() {
	return y(this).overflow;
}
function Li() {
	return {
		input: this._i,
		format: this._f,
		locale: this._locale,
		isUTC: this._isUTC,
		strict: this._strict
	};
}
c('N', 0, 0, 'eraAbbr');
c('NN', 0, 0, 'eraAbbr');
c('NNN', 0, 0, 'eraAbbr');
c('NNNN', 0, 0, 'eraName');
c('NNNNN', 0, 0, 'eraNarrow');
c('y', ['y', 1], 'yo', 'eraYear');
c('y', ['yy', 2], 0, 'eraYear');
c('y', ['yyy', 3], 0, 'eraYear');
c('y', ['yyyy', 4], 0, 'eraYear');
d('N', Or);
d('NN', Or);
d('NNN', Or);
d('NNNN', $i);
d('NNNNN', Zi);
x(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (e, t, r, s) {
	var a = r._locale.erasParse(e, s, r._strict);
	a ? (y(r).era = a) : (y(r).invalidEra = e);
});
d('y', ht);
d('yy', ht);
d('yyy', ht);
d('yyyy', ht);
d('yo', Bi);
x(['y', 'yy', 'yyy', 'yyyy'], z);
x(['yo'], function (e, t, r, s) {
	var a;
	r._locale._eraYearOrdinalRegex && (a = e.match(r._locale._eraYearOrdinalRegex)),
		r._locale.eraYearOrdinalParse
			? (t[z] = r._locale.eraYearOrdinalParse(e, a))
			: (t[z] = parseInt(e, 10));
});
function Ei(e, t) {
	var r,
		s,
		a,
		n = this._eras || Ee('en')._eras;
	for (r = 0, s = n.length; r < s; ++r) {
		switch (typeof n[r].since) {
			case 'string':
				(a = u(n[r].since).startOf('day')), (n[r].since = a.valueOf());
				break;
		}
		switch (typeof n[r].until) {
			case 'undefined':
				n[r].until = 1 / 0;
				break;
			case 'string':
				(a = u(n[r].until).startOf('day').valueOf()), (n[r].until = a.valueOf());
				break;
		}
	}
	return n;
}
function Ii(e, t, r) {
	var s,
		a,
		n = this.eras(),
		i,
		o,
		_;
	for (e = e.toUpperCase(), s = 0, a = n.length; s < a; ++s)
		if (
			((i = n[s].name.toUpperCase()),
			(o = n[s].abbr.toUpperCase()),
			(_ = n[s].narrow.toUpperCase()),
			r)
		)
			switch (t) {
				case 'N':
				case 'NN':
				case 'NNN':
					if (o === e) return n[s];
					break;
				case 'NNNN':
					if (i === e) return n[s];
					break;
				case 'NNNNN':
					if (_ === e) return n[s];
					break;
			}
		else if ([i, o, _].indexOf(e) >= 0) return n[s];
}
function Ci(e, t) {
	var r = e.since <= e.until ? 1 : -1;
	return t === void 0 ? u(e.since).year() : u(e.since).year() + (t - e.offset) * r;
}
function Ui() {
	var e,
		t,
		r,
		s = this.localeData().eras();
	for (e = 0, t = s.length; e < t; ++e)
		if (
			((r = this.clone().startOf('day').valueOf()),
			(s[e].since <= r && r <= s[e].until) || (s[e].until <= r && r <= s[e].since))
		)
			return s[e].name;
	return '';
}
function Ai() {
	var e,
		t,
		r,
		s = this.localeData().eras();
	for (e = 0, t = s.length; e < t; ++e)
		if (
			((r = this.clone().startOf('day').valueOf()),
			(s[e].since <= r && r <= s[e].until) || (s[e].until <= r && r <= s[e].since))
		)
			return s[e].narrow;
	return '';
}
function Hi() {
	var e,
		t,
		r,
		s = this.localeData().eras();
	for (e = 0, t = s.length; e < t; ++e)
		if (
			((r = this.clone().startOf('day').valueOf()),
			(s[e].since <= r && r <= s[e].until) || (s[e].until <= r && r <= s[e].since))
		)
			return s[e].abbr;
	return '';
}
function Vi() {
	var e,
		t,
		r,
		s,
		a = this.localeData().eras();
	for (e = 0, t = a.length; e < t; ++e)
		if (
			((r = a[e].since <= a[e].until ? 1 : -1),
			(s = this.clone().startOf('day').valueOf()),
			(a[e].since <= s && s <= a[e].until) || (a[e].until <= s && s <= a[e].since))
		)
			return (this.year() - u(a[e].since).year()) * r + a[e].offset;
	return this.year();
}
function Gi(e) {
	return M(this, '_erasNameRegex') || Tr.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function ji(e) {
	return M(this, '_erasAbbrRegex') || Tr.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function zi(e) {
	return M(this, '_erasNarrowRegex') || Tr.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Or(e, t) {
	return t.erasAbbrRegex(e);
}
function $i(e, t) {
	return t.erasNameRegex(e);
}
function Zi(e, t) {
	return t.erasNarrowRegex(e);
}
function Bi(e, t) {
	return t._eraYearOrdinalRegex || ht;
}
function Tr() {
	var e = [],
		t = [],
		r = [],
		s = [],
		a,
		n,
		i = this.eras();
	for (a = 0, n = i.length; a < n; ++a)
		t.push(X(i[a].name)),
			e.push(X(i[a].abbr)),
			r.push(X(i[a].narrow)),
			s.push(X(i[a].name)),
			s.push(X(i[a].abbr)),
			s.push(X(i[a].narrow));
	(this._erasRegex = new RegExp('^(' + s.join('|') + ')', 'i')),
		(this._erasNameRegex = new RegExp('^(' + t.join('|') + ')', 'i')),
		(this._erasAbbrRegex = new RegExp('^(' + e.join('|') + ')', 'i')),
		(this._erasNarrowRegex = new RegExp('^(' + r.join('|') + ')', 'i'));
}
c(0, ['gg', 2], 0, function () {
	return this.weekYear() % 100;
});
c(0, ['GG', 2], 0, function () {
	return this.isoWeekYear() % 100;
});
function Bt(e, t) {
	c(0, [e, e.length], 0, t);
}
Bt('gggg', 'weekYear');
Bt('ggggg', 'weekYear');
Bt('GGGG', 'isoWeekYear');
Bt('GGGGG', 'isoWeekYear');
$('weekYear', 'gg');
$('isoWeekYear', 'GG');
Z('weekYear', 1);
Z('isoWeekYear', 1);
d('G', Gt);
d('g', Gt);
d('GG', R, K);
d('gg', R, K);
d('GGGG', gr, yr);
d('gggg', gr, yr);
d('GGGGG', Vt, At);
d('ggggg', Vt, At);
Yt(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (e, t, r, s) {
	t[s.substr(0, 2)] = w(e);
});
Yt(['gg', 'GG'], function (e, t, r, s) {
	t[s] = u.parseTwoDigitYear(e);
});
function qi(e) {
	return bs.call(
		this,
		e,
		this.week(),
		this.weekday(),
		this.localeData()._week.dow,
		this.localeData()._week.doy
	);
}
function Ji(e) {
	return bs.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
}
function Qi() {
	return Fe(this.year(), 1, 4);
}
function Xi() {
	return Fe(this.isoWeekYear(), 1, 4);
}
function Ki() {
	var e = this.localeData()._week;
	return Fe(this.year(), e.dow, e.doy);
}
function el() {
	var e = this.localeData()._week;
	return Fe(this.weekYear(), e.dow, e.doy);
}
function bs(e, t, r, s, a) {
	var n;
	return e == null
		? vt(this, s, a).year
		: ((n = Fe(e, s, a)), t > n && (t = n), tl.call(this, e, t, r, s, a));
}
function tl(e, t, r, s, a) {
	var n = ns(e, t, r, s, a),
		i = wt(n.year, 0, n.dayOfYear);
	return (
		this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this
	);
}
c('Q', 0, 'Qo', 'quarter');
$('quarter', 'Q');
Z('quarter', 7);
d('Q', qr);
x('Q', function (e, t) {
	t[Pe] = (w(e) - 1) * 3;
});
function rl(e) {
	return e == null
		? Math.ceil((this.month() + 1) / 3)
		: this.month((e - 1) * 3 + (this.month() % 3));
}
c('D', ['DD', 2], 'Do', 'date');
$('date', 'D');
Z('date', 9);
d('D', R);
d('DD', R, K);
d('Do', function (e, t) {
	return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
x(['D', 'DD'], ke);
x('Do', function (e, t) {
	t[ke] = w(e.match(R)[0]);
});
var Os = ft('Date', !0);
c('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');
$('dayOfYear', 'DDD');
Z('dayOfYear', 4);
d('DDD', Ht);
d('DDDD', Jr);
x(['DDD', 'DDDD'], function (e, t, r) {
	r._dayOfYear = w(e);
});
function sl(e) {
	var t = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
	return e == null ? t : this.add(e - t, 'd');
}
c('m', ['mm', 2], 0, 'minute');
$('minute', 'm');
Z('minute', 14);
d('m', R);
d('mm', R, K);
x(['m', 'mm'], ce);
var al = ft('Minutes', !1);
c('s', ['ss', 2], 0, 'second');
$('second', 's');
Z('second', 15);
d('s', R);
d('ss', R, K);
x(['s', 'ss'], We);
var nl = ft('Seconds', !1);
c('S', 0, 0, function () {
	return ~~(this.millisecond() / 100);
});
c(0, ['SS', 2], 0, function () {
	return ~~(this.millisecond() / 10);
});
c(0, ['SSS', 3], 0, 'millisecond');
c(0, ['SSSS', 4], 0, function () {
	return this.millisecond() * 10;
});
c(0, ['SSSSS', 5], 0, function () {
	return this.millisecond() * 100;
});
c(0, ['SSSSSS', 6], 0, function () {
	return this.millisecond() * 1e3;
});
c(0, ['SSSSSSS', 7], 0, function () {
	return this.millisecond() * 1e4;
});
c(0, ['SSSSSSSS', 8], 0, function () {
	return this.millisecond() * 1e5;
});
c(0, ['SSSSSSSSS', 9], 0, function () {
	return this.millisecond() * 1e6;
});
$('millisecond', 'ms');
Z('millisecond', 16);
d('S', Ht, qr);
d('SS', Ht, K);
d('SSS', Ht, Jr);
var He, Ts;
for (He = 'SSSS'; He.length <= 9; He += 'S') d(He, ht);
function il(e, t) {
	t[Ke] = w(('0.' + e) * 1e3);
}
for (He = 'S'; He.length <= 9; He += 'S') x(He, il);
Ts = ft('Milliseconds', !1);
c('z', 0, 0, 'zoneAbbr');
c('zz', 0, 0, 'zoneName');
function ll() {
	return this._isUTC ? 'UTC' : '';
}
function ol() {
	return this._isUTC ? 'Coordinated Universal Time' : '';
}
var l = Dt.prototype;
l.add = ei;
l.calendar = li;
l.clone = oi;
l.diff = mi;
l.endOf = Yi;
l.format = wi;
l.from = vi;
l.fromNow = Si;
l.to = pi;
l.toNow = Di;
l.get = ua;
l.invalidAt = Fi;
l.isAfter = ui;
l.isBefore = di;
l.isBetween = fi;
l.isSame = hi;
l.isSameOrAfter = ci;
l.isSameOrBefore = _i;
l.isValid = Wi;
l.lang = Ss;
l.locale = vs;
l.localeData = ps;
l.max = Wn;
l.min = Pn;
l.parsingFlags = Ri;
l.set = da;
l.startOf = Mi;
l.subtract = ti;
l.toArray = xi;
l.toObject = Ni;
l.toDate = Ti;
l.toISOString = gi;
l.inspect = ki;
typeof Symbol < 'u' &&
	Symbol.for != null &&
	(l[Symbol.for('nodejs.util.inspect.custom')] = function () {
		return 'Moment<' + this.format() + '>';
	});
l.toJSON = Pi;
l.toString = yi;
l.unix = Oi;
l.valueOf = bi;
l.creationData = Li;
l.eraName = Ui;
l.eraNarrow = Ai;
l.eraAbbr = Hi;
l.eraYear = Vi;
l.year = as;
l.isLeapYear = xa;
l.weekYear = qi;
l.isoWeekYear = Ji;
l.quarter = l.quarters = rl;
l.month = rs;
l.daysInMonth = ba;
l.week = l.weeks = La;
l.isoWeek = l.isoWeeks = Ea;
l.weeksInYear = Ki;
l.weeksInWeekYear = el;
l.isoWeeksInYear = Qi;
l.isoWeeksInISOWeekYear = Xi;
l.date = Os;
l.day = l.days = qa;
l.weekday = Ja;
l.isoWeekday = Qa;
l.dayOfYear = sl;
l.hour = l.hours = an;
l.minute = l.minutes = al;
l.second = l.seconds = nl;
l.millisecond = l.milliseconds = Ts;
l.utcOffset = Hn;
l.utc = Gn;
l.local = jn;
l.parseZone = zn;
l.hasAlignedHourOffset = $n;
l.isDST = Zn;
l.isLocal = qn;
l.isUtcOffset = Jn;
l.isUtc = ys;
l.isUTC = ys;
l.zoneAbbr = ll;
l.zoneName = ol;
l.dates = ae('dates accessor is deprecated. Use date instead.', Os);
l.months = ae('months accessor is deprecated. Use month instead', rs);
l.years = ae('years accessor is deprecated. Use year instead', as);
l.zone = ae(
	'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
	Vn
);
l.isDSTShifted = ae(
	'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
	Bn
);
function ul(e) {
	return W(e * 1e3);
}
function dl() {
	return W.apply(null, arguments).parseZone();
}
function xs(e) {
	return e;
}
var Y = cr.prototype;
Y.calendar = qs;
Y.longDateFormat = Ks;
Y.invalidDate = ta;
Y.ordinal = aa;
Y.preparse = xs;
Y.postformat = xs;
Y.relativeTime = ia;
Y.pastFuture = la;
Y.set = Zs;
Y.eras = Ei;
Y.erasParse = Ii;
Y.erasConvertYear = Ci;
Y.erasAbbrRegex = ji;
Y.erasNameRegex = Gi;
Y.erasNarrowRegex = zi;
Y.months = pa;
Y.monthsShort = Da;
Y.monthsParse = Ya;
Y.monthsRegex = Ta;
Y.monthsShortRegex = Oa;
Y.week = Pa;
Y.firstDayOfYear = Fa;
Y.firstDayOfWeek = Ra;
Y.weekdays = ja;
Y.weekdaysMin = $a;
Y.weekdaysShort = za;
Y.weekdaysParse = Ba;
Y.weekdaysRegex = Xa;
Y.weekdaysShortRegex = Ka;
Y.weekdaysMinRegex = en;
Y.isPM = rn;
Y.meridiem = nn;
function It(e, t, r, s) {
	var a = Ee(),
		n = Se().set(s, t);
	return a[r](n, e);
}
function Ns(e, t, r) {
	if ((Le(e) && ((t = e), (e = void 0)), (e = e || ''), t != null)) return It(e, t, r, 'month');
	var s,
		a = [];
	for (s = 0; s < 12; s++) a[s] = It(e, s, r, 'month');
	return a;
}
function xr(e, t, r, s) {
	typeof e == 'boolean'
		? (Le(t) && ((r = t), (t = void 0)), (t = t || ''))
		: ((t = e), (r = t), (e = !1), Le(t) && ((r = t), (t = void 0)), (t = t || ''));
	var a = Ee(),
		n = e ? a._week.dow : 0,
		i,
		o = [];
	if (r != null) return It(t, (r + n) % 7, s, 'day');
	for (i = 0; i < 7; i++) o[i] = It(t, (i + n) % 7, s, 'day');
	return o;
}
function fl(e, t) {
	return Ns(e, t, 'months');
}
function hl(e, t) {
	return Ns(e, t, 'monthsShort');
}
function cl(e, t, r) {
	return xr(e, t, r, 'weekdays');
}
function _l(e, t, r) {
	return xr(e, t, r, 'weekdaysShort');
}
function ml(e, t, r) {
	return xr(e, t, r, 'weekdaysMin');
}
Ve('en', {
	eras: [
		{ since: '0001-01-01', until: 1 / 0, offset: 1, name: 'Anno Domini', narrow: 'AD', abbr: 'AD' },
		{
			since: '0000-12-31',
			until: -1 / 0,
			offset: 1,
			name: 'Before Christ',
			narrow: 'BC',
			abbr: 'BC'
		}
	],
	dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
	ordinal: function (e) {
		var t = e % 10,
			r = w((e % 100) / 10) === 1 ? 'th' : t === 1 ? 'st' : t === 2 ? 'nd' : t === 3 ? 'rd' : 'th';
		return e + r;
	}
});
u.lang = ae('moment.lang is deprecated. Use moment.locale instead.', Ve);
u.langData = ae('moment.langData is deprecated. Use moment.localeData instead.', Ee);
var xe = Math.abs;
function yl() {
	var e = this._data;
	return (
		(this._milliseconds = xe(this._milliseconds)),
		(this._days = xe(this._days)),
		(this._months = xe(this._months)),
		(e.milliseconds = xe(e.milliseconds)),
		(e.seconds = xe(e.seconds)),
		(e.minutes = xe(e.minutes)),
		(e.hours = xe(e.hours)),
		(e.months = xe(e.months)),
		(e.years = xe(e.years)),
		this
	);
}
function Ps(e, t, r, s) {
	var a = ge(t, r);
	return (
		(e._milliseconds += s * a._milliseconds),
		(e._days += s * a._days),
		(e._months += s * a._months),
		e._bubble()
	);
}
function gl(e, t) {
	return Ps(this, e, t, 1);
}
function kl(e, t) {
	return Ps(this, e, t, -1);
}
function Lr(e) {
	return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function wl() {
	var e = this._milliseconds,
		t = this._days,
		r = this._months,
		s = this._data,
		a,
		n,
		i,
		o,
		_;
	return (
		(e >= 0 && t >= 0 && r >= 0) ||
			(e <= 0 && t <= 0 && r <= 0) ||
			((e += Lr(lr(r) + t) * 864e5), (t = 0), (r = 0)),
		(s.milliseconds = e % 1e3),
		(a = se(e / 1e3)),
		(s.seconds = a % 60),
		(n = se(a / 60)),
		(s.minutes = n % 60),
		(i = se(n / 60)),
		(s.hours = i % 24),
		(t += se(i / 24)),
		(_ = se(Ws(t))),
		(r += _),
		(t -= Lr(lr(_))),
		(o = se(r / 12)),
		(r %= 12),
		(s.days = t),
		(s.months = r),
		(s.years = o),
		this
	);
}
function Ws(e) {
	return (e * 4800) / 146097;
}
function lr(e) {
	return (e * 146097) / 4800;
}
function vl(e) {
	if (!this.isValid()) return NaN;
	var t,
		r,
		s = this._milliseconds;
	if (((e = ne(e)), e === 'month' || e === 'quarter' || e === 'year'))
		switch (((t = this._days + s / 864e5), (r = this._months + Ws(t)), e)) {
			case 'month':
				return r;
			case 'quarter':
				return r / 3;
			case 'year':
				return r / 12;
		}
	else
		switch (((t = this._days + Math.round(lr(this._months))), e)) {
			case 'week':
				return t / 7 + s / 6048e5;
			case 'day':
				return t + s / 864e5;
			case 'hour':
				return t * 24 + s / 36e5;
			case 'minute':
				return t * 1440 + s / 6e4;
			case 'second':
				return t * 86400 + s / 1e3;
			case 'millisecond':
				return Math.floor(t * 864e5) + s;
			default:
				throw new Error('Unknown unit ' + e);
		}
}
function Sl() {
	return this.isValid()
		? this._milliseconds +
				this._days * 864e5 +
				(this._months % 12) * 2592e6 +
				w(this._months / 12) * 31536e6
		: NaN;
}
function Ie(e) {
	return function () {
		return this.as(e);
	};
}
var pl = Ie('ms'),
	Dl = Ie('s'),
	Ml = Ie('m'),
	Yl = Ie('h'),
	bl = Ie('d'),
	Ol = Ie('w'),
	Tl = Ie('M'),
	xl = Ie('Q'),
	Nl = Ie('y');
function Pl() {
	return ge(this);
}
function Wl(e) {
	return (e = ne(e)), this.isValid() ? this[e + 's']() : NaN;
}
function rt(e) {
	return function () {
		return this.isValid() ? this._data[e] : NaN;
	};
}
var Rl = rt('milliseconds'),
	Fl = rt('seconds'),
	Ll = rt('minutes'),
	El = rt('hours'),
	Il = rt('days'),
	Cl = rt('months'),
	Ul = rt('years');
function Al() {
	return se(this.days() / 7);
}
var Ne = Math.round,
	lt = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
function Hl(e, t, r, s, a) {
	return a.relativeTime(t || 1, !!r, e, s);
}
function Vl(e, t, r, s) {
	var a = ge(e).abs(),
		n = Ne(a.as('s')),
		i = Ne(a.as('m')),
		o = Ne(a.as('h')),
		_ = Ne(a.as('d')),
		h = Ne(a.as('M')),
		b = Ne(a.as('w')),
		m = Ne(a.as('y')),
		g =
			(n <= r.ss && ['s', n]) ||
			(n < r.s && ['ss', n]) ||
			(i <= 1 && ['m']) ||
			(i < r.m && ['mm', i]) ||
			(o <= 1 && ['h']) ||
			(o < r.h && ['hh', o]) ||
			(_ <= 1 && ['d']) ||
			(_ < r.d && ['dd', _]);
	return (
		r.w != null && (g = g || (b <= 1 && ['w']) || (b < r.w && ['ww', b])),
		(g = g || (h <= 1 && ['M']) || (h < r.M && ['MM', h]) || (m <= 1 && ['y']) || ['yy', m]),
		(g[2] = t),
		(g[3] = +e > 0),
		(g[4] = s),
		Hl.apply(null, g)
	);
}
function Gl(e) {
	return e === void 0 ? Ne : typeof e == 'function' ? ((Ne = e), !0) : !1;
}
function jl(e, t) {
	return lt[e] === void 0
		? !1
		: t === void 0
		? lt[e]
		: ((lt[e] = t), e === 's' && (lt.ss = t - 1), !0);
}
function zl(e, t) {
	if (!this.isValid()) return this.localeData().invalidDate();
	var r = !1,
		s = lt,
		a,
		n;
	return (
		typeof e == 'object' && ((t = e), (e = !1)),
		typeof e == 'boolean' && (r = e),
		typeof t == 'object' &&
			((s = Object.assign({}, lt, t)), t.s != null && t.ss == null && (s.ss = t.s - 1)),
		(a = this.localeData()),
		(n = Vl(this, !r, s, a)),
		r && (n = a.pastFuture(+this, n)),
		a.postformat(n)
	);
}
var er = Math.abs;
function nt(e) {
	return (e > 0) - (e < 0) || +e;
}
function qt() {
	if (!this.isValid()) return this.localeData().invalidDate();
	var e = er(this._milliseconds) / 1e3,
		t = er(this._days),
		r = er(this._months),
		s,
		a,
		n,
		i,
		o = this.asSeconds(),
		_,
		h,
		b,
		m;
	return o
		? ((s = se(e / 60)),
		  (a = se(s / 60)),
		  (e %= 60),
		  (s %= 60),
		  (n = se(r / 12)),
		  (r %= 12),
		  (i = e ? e.toFixed(3).replace(/\.?0+$/, '') : ''),
		  (_ = o < 0 ? '-' : ''),
		  (h = nt(this._months) !== nt(o) ? '-' : ''),
		  (b = nt(this._days) !== nt(o) ? '-' : ''),
		  (m = nt(this._milliseconds) !== nt(o) ? '-' : ''),
		  _ +
				'P' +
				(n ? h + n + 'Y' : '') +
				(r ? h + r + 'M' : '') +
				(t ? b + t + 'D' : '') +
				(a || s || e ? 'T' : '') +
				(a ? m + a + 'H' : '') +
				(s ? m + s + 'M' : '') +
				(e ? m + i + 'S' : ''))
		: 'P0D';
}
var v = Zt.prototype;
v.isValid = In;
v.abs = yl;
v.add = gl;
v.subtract = kl;
v.as = vl;
v.asMilliseconds = pl;
v.asSeconds = Dl;
v.asMinutes = Ml;
v.asHours = Yl;
v.asDays = bl;
v.asWeeks = Ol;
v.asMonths = Tl;
v.asQuarters = xl;
v.asYears = Nl;
v.valueOf = Sl;
v._bubble = wl;
v.clone = Pl;
v.get = Wl;
v.milliseconds = Rl;
v.seconds = Fl;
v.minutes = Ll;
v.hours = El;
v.days = Il;
v.weeks = Al;
v.months = Cl;
v.years = Ul;
v.humanize = zl;
v.toISOString = qt;
v.toString = qt;
v.toJSON = qt;
v.locale = vs;
v.localeData = ps;
v.toIsoString = ae(
	'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
	qt
);
v.lang = Ss;
c('X', 0, 0, 'unix');
c('x', 0, 0, 'valueOf');
d('x', Gt);
d('X', ha);
x('X', function (e, t, r) {
	r._d = new Date(parseFloat(e) * 1e3);
});
x('x', function (e, t, r) {
	r._d = new Date(w(e));
}); //! moment.js
u.version = '2.29.4';
zs(W);
u.fn = l;
u.min = Rn;
u.max = Fn;
u.now = Ln;
u.utc = Se;
u.unix = ul;
u.months = fl;
u.isDate = pt;
u.locale = Ve;
u.invalid = Ct;
u.duration = ge;
u.isMoment = ye;
u.weekdays = cl;
u.parseZone = dl;
u.localeData = Ee;
u.isDuration = xt;
u.monthsShort = hl;
u.weekdaysMin = ml;
u.defineLocale = Sr;
u.updateLocale = dn;
u.locales = fn;
u.weekdaysShort = _l;
u.normalizeUnits = ne;
u.relativeTimeRounding = Gl;
u.relativeTimeThreshold = jl;
u.calendarFormat = ii;
u.prototype = l;
u.HTML5_FMT = {
	DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
	DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
	DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
	DATE: 'YYYY-MM-DD',
	TIME: 'HH:mm',
	TIME_SECONDS: 'HH:mm:ss',
	TIME_MS: 'HH:mm:ss.SSS',
	WEEK: 'GGGG-[W]WW',
	MONTH: 'YYYY-MM'
};
function Er(e, t, r) {
	const s = e.slice();
	return (s[8] = t[r]), s;
}
function Ir(e) {
	let t, r, s, a, n, i, o;
	const _ = [ql, Bl, Zl, $l],
		h = [];
	function b(m, g) {
		return (
			g & 3 && (t = null),
			g & 9 && (r = null),
			g & 5 && (s = null),
			t == null && (t = !!(!m[1] && m[8].Status.toLowerCase().includes('land'))),
			t
				? 0
				: (r == null &&
						(r = !!(
							!m[3] &&
							(m[8].Status.toLowerCase().includes('scheduled') ||
								m[8].Status.toLowerCase().includes('estimated'))
						)),
				  r
						? 1
						: (s == null && (s = !!(!m[2] && m[8].Status.toLowerCase().includes('cancel'))),
						  s ? 2 : 3))
		);
	}
	return (
		(a = b(e, -1)),
		(n = h[a] = _[a](e)),
		{
			c() {
				n.c(), (i = Pt());
			},
			l(m) {
				n.l(m), (i = Pt());
			},
			m(m, g) {
				h[a].m(m, g), ve(m, i, g), (o = !0);
			},
			p(m, g) {
				let ee = a;
				(a = b(m, g)),
					a === ee
						? h[a].p(m, g)
						: (ur(),
						  tt(h[ee], 1, 1, () => {
								h[ee] = null;
						  }),
						  or(),
						  (n = h[a]),
						  n ? n.p(m, g) : ((n = h[a] = _[a](m)), n.c()),
						  Re(n, 1),
						  n.m(i.parentNode, i));
			},
			i(m) {
				o || (Re(n), (o = !0));
			},
			o(m) {
				tt(n), (o = !1);
			},
			d(m) {
				h[a].d(m), m && k(i);
			}
		}
	);
}
function $l(e) {
	let t, r;
	return (
		(t = new js({ props: { flight: e[8] } })),
		{
			c() {
				Ls(t.$$.fragment);
			},
			l(s) {
				Es(t.$$.fragment, s);
			},
			m(s, a) {
				Is(t, s, a), (r = !0);
			},
			p(s, a) {
				const n = {};
				a & 1 && (n.flight = s[8]), t.$set(n);
			},
			i(s) {
				r || (Re(t.$$.fragment, s), (r = !0));
			},
			o(s) {
				tt(t.$$.fragment, s), (r = !1);
			},
			d(s) {
				Cs(t, s);
			}
		}
	);
}
function Zl(e) {
	let t;
	return {
		c() {
			t = p('span');
		},
		l(r) {
			(t = D(r, 'SPAN', {})), T(t).forEach(k);
		},
		m(r, s) {
			ve(r, t, s);
		},
		p: _e,
		i: _e,
		o: _e,
		d(r) {
			r && k(t);
		}
	};
}
function Bl(e) {
	let t;
	return {
		c() {
			t = p('span');
		},
		l(r) {
			(t = D(r, 'SPAN', {})), T(t).forEach(k);
		},
		m(r, s) {
			ve(r, t, s);
		},
		p: _e,
		i: _e,
		o: _e,
		d(r) {
			r && k(t);
		}
	};
}
function ql(e) {
	let t;
	return {
		c() {
			t = p('span');
		},
		l(r) {
			(t = D(r, 'SPAN', {})), T(t).forEach(k);
		},
		m(r, s) {
			ve(r, t, s);
		},
		p: _e,
		i: _e,
		o: _e,
		d(r) {
			r && k(t);
		}
	};
}
function Cr(e) {
	let t = u(e[8].Date).format('DD-MM-YY') == e[4],
		r,
		s,
		a = t && Ir(e);
	return {
		c() {
			a && a.c(), (r = Pt());
		},
		l(n) {
			a && a.l(n), (r = Pt());
		},
		m(n, i) {
			a && a.m(n, i), ve(n, r, i), (s = !0);
		},
		p(n, i) {
			i & 1 && (t = u(n[8].Date).format('DD-MM-YY') == n[4]),
				t
					? a
						? (a.p(n, i), i & 1 && Re(a, 1))
						: ((a = Ir(n)), a.c(), Re(a, 1), a.m(r.parentNode, r))
					: a &&
					  (ur(),
					  tt(a, 1, 1, () => {
							a = null;
					  }),
					  or());
		},
		i(n) {
			s || (Re(a), (s = !0));
		},
		o(n) {
			tt(a), (s = !1);
		},
		d(n) {
			a && a.d(n), n && k(r);
		}
	};
}
function Jl(e) {
	let t,
		r,
		s,
		a,
		n,
		i,
		o,
		_,
		h,
		b,
		m,
		g,
		ee,
		ie,
		le,
		Ce,
		oe,
		te,
		I,
		De,
		ue,
		Ge,
		Me,
		de,
		re,
		C,
		Ye,
		fe,
		je,
		be,
		Oe,
		ze,
		Ue,
		he = e[0],
		N = [];
	for (let O = 0; O < he.length; O += 1) N[O] = Cr(Er(e, he, O));
	const $e = (O) =>
		tt(N[O], 1, 1, () => {
			N[O] = null;
		});
	return {
		c() {
			(t = p('div')),
				(r = p('section')),
				(s = p('div')),
				(a = p('h2')),
				(n = G('Airport Arrivals for ')),
				(i = G(e[4])),
				(o = G(' \u2708\uFE0F')),
				(_ = B()),
				(h = p('ul')),
				(b = p('li')),
				(m = p('div')),
				(g = p('input')),
				(ee = B()),
				(ie = p('label')),
				(le = G('Landed')),
				(Ce = B()),
				(oe = p('li')),
				(te = p('div')),
				(I = p('input')),
				(De = B()),
				(ue = p('label')),
				(Ge = G('Scheduled')),
				(Me = B()),
				(de = p('li')),
				(re = p('div')),
				(C = p('input')),
				(Ye = B()),
				(fe = p('label')),
				(je = G('Cancelled')),
				(be = B());
			for (let O = 0; O < N.length; O += 1) N[O].c();
			this.h();
		},
		l(O) {
			t = D(O, 'DIV', { class: !0 });
			var U = T(t);
			r = D(U, 'SECTION', {});
			var P = T(r);
			s = D(P, 'DIV', { class: !0 });
			var H = T(s);
			a = D(H, 'H2', { class: !0 });
			var L = T(a);
			(n = j(L, 'Airport Arrivals for ')),
				(i = j(L, e[4])),
				(o = j(L, ' \u2708\uFE0F')),
				L.forEach(k),
				(_ = q(H)),
				(h = D(H, 'UL', { class: !0 }));
			var E = T(h);
			b = D(E, 'LI', { class: !0 });
			var Q = T(b);
			m = D(Q, 'DIV', { class: !0 });
			var Te = T(m);
			(g = D(Te, 'INPUT', { id: !0, type: !0, name: !0, class: !0 })),
				(ee = q(Te)),
				(ie = D(Te, 'LABEL', { for: !0, class: !0 }));
			var Ze = T(ie);
			(le = j(Ze, 'Landed')),
				Ze.forEach(k),
				Te.forEach(k),
				Q.forEach(k),
				(Ce = q(E)),
				(oe = D(E, 'LI', { class: !0 }));
			var st = T(oe);
			te = D(st, 'DIV', { class: !0 });
			var Be = T(te);
			(I = D(Be, 'INPUT', { id: !0, type: !0, name: !0, class: !0 })),
				(De = q(Be)),
				(ue = D(Be, 'LABEL', { for: !0, class: !0 }));
			var ct = T(ue);
			(Ge = j(ct, 'Scheduled')),
				ct.forEach(k),
				Be.forEach(k),
				st.forEach(k),
				(Me = q(E)),
				(de = D(E, 'LI', { class: !0 }));
			var qe = T(de);
			re = D(qe, 'DIV', { class: !0 });
			var Je = T(re);
			(C = D(Je, 'INPUT', { name: !0, id: !0, type: !0, class: !0 })),
				(Ye = q(Je)),
				(fe = D(Je, 'LABEL', { for: !0, class: !0 }));
			var Qe = T(fe);
			(je = j(Qe, 'Cancelled')),
				Qe.forEach(k),
				Je.forEach(k),
				qe.forEach(k),
				E.forEach(k),
				(be = q(H));
			for (let at = 0; at < N.length; at += 1) N[at].l(H);
			H.forEach(k), P.forEach(k), U.forEach(k), this.h();
		},
		h() {
			S(a, 'class', 'text-2xl font-bold my-4'),
				S(g, 'id', 'landed'),
				S(g, 'type', 'checkbox'),
				(g.__value = ''),
				(g.value = g.__value),
				S(g, 'name', 'landed'),
				S(
					g,
					'class',
					'w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
				),
				S(ie, 'for', 'landed'),
				S(ie, 'class', 'py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'),
				S(m, 'class', 'flex items-center pl-3'),
				S(
					b,
					'class',
					'w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600'
				),
				S(I, 'id', 'react-checkbox-list'),
				S(I, 'type', 'checkbox'),
				(I.__value = ''),
				(I.value = I.__value),
				S(I, 'name', 'scheduled'),
				S(
					I,
					'class',
					'w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
				),
				S(ue, 'for', 'react-checkbox-list'),
				S(ue, 'class', 'py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'),
				S(te, 'class', 'flex items-center pl-3'),
				S(
					oe,
					'class',
					'w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600'
				),
				S(C, 'name', 'cancelled'),
				S(C, 'id', 'angular-checkbox-list'),
				S(C, 'type', 'checkbox'),
				(C.__value = ''),
				(C.value = C.__value),
				S(
					C,
					'class',
					'w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
				),
				S(fe, 'for', 'angular-checkbox-list'),
				S(fe, 'class', 'py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'),
				S(re, 'class', 'flex items-center pl-3'),
				S(de, 'class', 'w-full dark:border-gray-600'),
				S(
					h,
					'class',
					'items-center w-full text-sm font-medium text-gray-900 bg-slate-500 rounded-md border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white'
				),
				S(s, 'class', 'inner-container'),
				S(t, 'class', 'md:w-2/4');
		},
		m(O, U) {
			ve(O, t, U),
				f(t, r),
				f(r, s),
				f(s, a),
				f(a, n),
				f(a, i),
				f(a, o),
				f(s, _),
				f(s, h),
				f(h, b),
				f(b, m),
				f(m, g),
				(g.checked = e[1]),
				f(m, ee),
				f(m, ie),
				f(ie, le),
				f(h, Ce),
				f(h, oe),
				f(oe, te),
				f(te, I),
				(I.checked = e[3]),
				f(te, De),
				f(te, ue),
				f(ue, Ge),
				f(h, Me),
				f(h, de),
				f(de, re),
				f(re, C),
				(C.checked = e[2]),
				f(re, Ye),
				f(re, fe),
				f(fe, je),
				f(s, be);
			for (let P = 0; P < N.length; P += 1) N[P].m(s, null);
			(Oe = !0),
				ze ||
					((Ue = [Jt(g, 'change', e[5]), Jt(I, 'change', e[6]), Jt(C, 'change', e[7])]), (ze = !0));
		},
		p(O, [U]) {
			if (
				(U & 2 && (g.checked = O[1]),
				U & 8 && (I.checked = O[3]),
				U & 4 && (C.checked = O[2]),
				U & 31)
			) {
				he = O[0];
				let P;
				for (P = 0; P < he.length; P += 1) {
					const H = Er(O, he, P);
					N[P]
						? (N[P].p(H, U), Re(N[P], 1))
						: ((N[P] = Cr(H)), N[P].c(), Re(N[P], 1), N[P].m(s, null));
				}
				for (ur(), P = he.length; P < N.length; P += 1) $e(P);
				or();
			}
		},
		i(O) {
			if (!Oe) {
				for (let U = 0; U < he.length; U += 1) Re(N[U]);
				Oe = !0;
			}
		},
		o(O) {
			N = N.filter(Boolean);
			for (let U = 0; U < N.length; U += 1) tt(N[U]);
			Oe = !1;
		},
		d(O) {
			O && k(t), Rs(N, O), (ze = !1), Fs(Ue);
		}
	};
}
async function Kl({ fetch: e }) {
	return { props: { flights: await (await e('/api/flights')).json() } };
}
function Ql(e, t, r) {
	let { flights: s } = t;
	const a = u().format('DD-MM-YY');
	let n = !0,
		i = !0,
		o = !0;
	function _() {
		(n = this.checked), r(1, n);
	}
	function h() {
		(o = this.checked), r(3, o);
	}
	function b() {
		(i = this.checked), r(2, i);
	}
	return (
		(e.$$set = (m) => {
			'flights' in m && r(0, (s = m.flights));
		}),
		[s, n, i, o, a, _, h, b]
	);
}
class eo extends Ur {
	constructor(t) {
		super(), Ar(this, t, Ql, Jl, Hr, { flights: 0 });
	}
}
export { eo as default, Kl as load };
