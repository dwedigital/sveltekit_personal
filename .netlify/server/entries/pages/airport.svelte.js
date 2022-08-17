var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
	for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
	if ((from && typeof from === 'object') || typeof from === 'function') {
		for (let key of __getOwnPropNames(from))
			if (!__hasOwnProp.call(to, key) && key !== except)
				__defProp(to, key, {
					get: () => from[key],
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (
	(target = mod != null ? __create(__getProtoOf(mod)) : {}),
	__copyProps(
		isNodeMode || !mod || !mod.__esModule
			? __defProp(target, 'default', { value: mod, enumerable: true })
			: target,
		mod
	)
);
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
	default: () => Airport,
	load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_511472e1 = require('../../_app/immutable/chunks/index-511472e1.js');
var import_moment = __toESM(require('moment'));
const Flight = (0, import_index_511472e1.c)(($$result, $$props, $$bindings, slots) => {
	let { flight } = $$props;
	if ($$props.flight === void 0 && $$bindings.flight && flight !== void 0)
		$$bindings.flight(flight);
	return `<div class="${'p-4 m-2 bg-slate-100 border-gray-400 border rounded-md'}"><div><div class="${'flex-row flex justify-between '}"><div><strong${(0,
	import_index_511472e1.a)(
		'class',
		flight.Status === 'Cancelled' ? 'text-red-500' : 'text-green-500',
		0
	)}>Flight Number:
				${(0, import_index_511472e1.e)(flight.Flightnumber)}</strong>
                <p>${(0, import_index_511472e1.e)(flight.Airline)}</p></div>
            <div class="${'text-4xl'}">${
		flight.Status.toLowerCase().includes('land')
			? `\u{1F6EC}`
			: `${flight.Status.toLowerCase().includes('cancel') ? `\u{1F6A8}` : `\u23F1`}`
	}</div></div>
		<div><strong>From:</strong>
			${(0, import_index_511472e1.e)(flight.From)}</div>
		<div><strong>Scheduled:</strong>
			${(0, import_index_511472e1.e)(flight.Scheduled)}</div>
		<strong>Status:</strong>
		${(0, import_index_511472e1.e)(flight.Status)}</div></div>`;
});
async function load({ fetch }) {
	const res = await fetch('/api/flights');
	return { props: { flights: await res.json() } };
}
const Airport = (0, import_index_511472e1.c)(($$result, $$props, $$bindings, slots) => {
	let { flights } = $$props;
	const today = (0, import_moment.default)().format('DD-MM-YY');
	let landed = true;
	let cancelled = true;
	let scheduled = true;
	if ($$props.flights === void 0 && $$bindings.flights && flights !== void 0)
		$$bindings.flights(flights);
	return `<div class="${'md:w-2/4'}"><section><div class="${'inner-container'}"><h2 class="${'text-2xl font-bold my-4'}">Airport Arrivals for ${(0,
	import_index_511472e1.e)(today)} \u2708\uFE0F</h2>

			
			<ul class="${'items-center w-full text-sm font-medium text-gray-900 bg-slate-500 rounded-md border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white'}"><li class="${'w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600'}"><div class="${'flex items-center pl-3'}"><input id="${'landed'}" type="${'checkbox'}" value="${''}" name="${'landed'}" class="${'w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'}"${(0,
	import_index_511472e1.a)('checked', landed, 1)}>
						<label for="${'landed'}" class="${'py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'}">Landed</label></div></li>
				<li class="${'w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600'}"><div class="${'flex items-center pl-3'}"><input id="${'react-checkbox-list'}" type="${'checkbox'}" value="${''}" name="${'scheduled'}" class="${'w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'}"${(0,
	import_index_511472e1.a)('checked', scheduled, 1)}>
						<label for="${'react-checkbox-list'}" class="${'py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'}">Scheduled</label></div></li>

				<li class="${'w-full dark:border-gray-600'}"><div class="${'flex items-center pl-3'}"><input name="${'cancelled'}" id="${'angular-checkbox-list'}" type="${'checkbox'}" value="${''}" class="${'w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'}"${(0,
	import_index_511472e1.a)('checked', cancelled, 1)}>
						<label for="${'angular-checkbox-list'}" class="${'py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'}">Cancelled</label></div></li></ul>
            
			${(0, import_index_511472e1.b)(flights, (flight) => {
				return `${
					(0, import_moment.default)(flight.Date).format('DD-MM-YY') == today
						? `${`${`${`${(0, import_index_511472e1.v)(Flight, 'Flight').$$render(
								$$result,
								{ flight },
								{},
								{}
						  )}`}`}`}`
						: ``
				}`;
			})}</div></section></div>`;
});
