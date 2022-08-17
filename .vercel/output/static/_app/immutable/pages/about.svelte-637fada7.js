import {
	S as J,
	i as O,
	s as j,
	a as k,
	l as o,
	u as b,
	N as z,
	h as a,
	c as W,
	m as i,
	p as r,
	v as _,
	q as v,
	b as Y,
	J as e,
	n as q
} from '../chunks/index-15bb7596.js';
function B(H) {
	let c, l, m, t, d, y, E, n, u, I, w, h, x, p, S;
	return {
		c() {
			(c = k()),
				(l = o('div')),
				(m = o('section')),
				(t = o('div')),
				(d = o('h2')),
				(y = b("I'm Dave Edwards \u{1F596}")),
				(E = k()),
				(n = o('div')),
				(u = o('p')),
				(I = b(`Software Engineer and a Technical Writer with a solid     
               background in Computer Science, I'm passionate about making 
               the web accessible for everyone. I design and develop visually compell                ing applications with user-friendly interaction that drive business g                owth and improve user experience. When I'm not solving problems,
               I love to create technical content for engineers and tech 
               startups across the globe.`)),
				(w = k()),
				(h = o('p')),
				(x = b(`Creating magic daily on the internet. You can send me
                an email at `)),
				(p = o('span')),
				(S = b('adeneyeabiodun@gmail.com')),
				this.h();
		},
		l(s) {
			z('[data-svelte="svelte-obu56y"]', document.head).forEach(a),
				(c = W(s)),
				(l = i(s, 'DIV', { class: !0 }));
			var A = r(l);
			m = i(A, 'SECTION', {});
			var N = r(m);
			t = i(N, 'DIV', { class: !0 });
			var f = r(t);
			d = i(f, 'H2', { class: !0 });
			var P = r(d);
			(y = _(P, "I'm Dave Edwards \u{1F596}")),
				P.forEach(a),
				(E = W(f)),
				(n = i(f, 'DIV', { class: !0 }));
			var g = r(n);
			u = i(g, 'P', {});
			var T = r(u);
			(I = _(
				T,
				`Software Engineer and a Technical Writer with a solid     
               background in Computer Science, I'm passionate about making 
               the web accessible for everyone. I design and develop visually compell                ing applications with user-friendly interaction that drive business g                owth and improve user experience. When I'm not solving problems,
               I love to create technical content for engineers and tech 
               startups across the globe.`
			)),
				T.forEach(a),
				(w = W(g)),
				(h = i(g, 'P', {}));
			var D = r(h);
			(x = _(
				D,
				`Creating magic daily on the internet. You can send me
                an email at `
			)),
				(p = i(D, 'SPAN', { class: !0 }));
			var V = r(p);
			(S = _(V, 'adeneyeabiodun@gmail.com')),
				V.forEach(a),
				D.forEach(a),
				g.forEach(a),
				f.forEach(a),
				N.forEach(a),
				A.forEach(a),
				this.h();
		},
		h() {
			(document.title = 'About'),
				v(d, 'class', 'text-6xl font-bold mb-6'),
				v(p, 'class', 'info-text'),
				v(n, 'class', ''),
				v(t, 'class', 'px-20'),
				v(l, 'class', 'main_container');
		},
		m(s, C) {
			Y(s, c, C),
				Y(s, l, C),
				e(l, m),
				e(m, t),
				e(t, d),
				e(d, y),
				e(t, E),
				e(t, n),
				e(n, u),
				e(u, I),
				e(n, w),
				e(n, h),
				e(h, x),
				e(h, p),
				e(p, S);
		},
		p: q,
		i: q,
		o: q,
		d(s) {
			s && a(c), s && a(l);
		}
	};
}
const G = !0;
class K extends J {
	constructor(c) {
		super(), O(this, c, null, B, j, {});
	}
}
export { K as default, G as prerender };
