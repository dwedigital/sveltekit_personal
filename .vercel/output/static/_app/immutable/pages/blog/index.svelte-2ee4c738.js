import {
	S as P,
	i as k,
	s as y,
	l as u,
	m as _,
	p as h,
	h as f,
	b as p,
	n as m,
	P as S,
	u as v,
	a as T,
	v as b,
	c as j,
	J as g,
	w
} from '../../chunks/index-15bb7596.js';
function x(i, l, s) {
	const t = i.slice();
	return (t[2] = l[s]), t;
}
function E(i) {
	let l,
		s = i[2].attributes.Title + '',
		t,
		e,
		n,
		a = i[2].attributes.content + '',
		r;
	return {
		c() {
			(l = u('p')), (t = v(s)), (e = T()), (n = u('p')), (r = v(a));
		},
		l(o) {
			l = _(o, 'P', {});
			var c = h(l);
			(t = b(c, s)), c.forEach(f), (e = j(o)), (n = _(o, 'P', {}));
			var d = h(n);
			(r = b(d, a)), d.forEach(f);
		},
		m(o, c) {
			p(o, l, c), g(l, t), p(o, e, c), p(o, n, c), g(n, r);
		},
		p(o, c) {
			c & 1 && s !== (s = o[2].attributes.Title + '') && w(t, s),
				c & 1 && a !== (a = o[2].attributes.content + '') && w(r, a);
		},
		d(o) {
			o && f(l), o && f(e), o && f(n);
		}
	};
}
function q(i) {
	let l,
		s = i[0].data,
		t = [];
	for (let e = 0; e < s.length; e += 1) t[e] = E(x(i, s, e));
	return {
		c() {
			l = u('div');
			for (let e = 0; e < t.length; e += 1) t[e].c();
		},
		l(e) {
			l = _(e, 'DIV', {});
			var n = h(l);
			for (let a = 0; a < t.length; a += 1) t[a].l(n);
			n.forEach(f);
		},
		m(e, n) {
			p(e, l, n);
			for (let a = 0; a < t.length; a += 1) t[a].m(l, null);
		},
		p(e, [n]) {
			if (n & 1) {
				s = e[0].data;
				let a;
				for (a = 0; a < s.length; a += 1) {
					const r = x(e, s, a);
					t[a] ? t[a].p(r, n) : ((t[a] = E(r)), t[a].c(), t[a].m(l, null));
				}
				for (; a < t.length; a += 1) t[a].d(1);
				t.length = s.length;
			}
		},
		i: m,
		o: m,
		d(e) {
			e && f(l), S(t, e);
		}
	};
}
async function D({ fetch: i }) {
	return { props: { posts: await (await i('/api/blog')).json() } };
}
function B(i, l, s) {
	let { posts: t } = l;
	return (
		console.log(t),
		(i.$$set = (e) => {
			'posts' in e && s(0, (t = e.posts));
		}),
		[t]
	);
}
class I extends P {
	constructor(l) {
		super(), k(this, l, B, q, y, { posts: 0 });
	}
}
export { I as default, D as load };
