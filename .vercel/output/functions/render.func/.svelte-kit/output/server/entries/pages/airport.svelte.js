import { c as create_ssr_component, a as add_attribute, e as escape, b as each, v as validate_component } from "../../_app/immutable/chunks/index-511472e1.js";
import moment from "moment";
const Flight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { flight } = $$props;
  if ($$props.flight === void 0 && $$bindings.flight && flight !== void 0)
    $$bindings.flight(flight);
  return `<div class="${"p-4 m-2 bg-slate-100 border-gray-400 border rounded-md"}"><div><div class="${"flex-row flex justify-between "}"><div><strong${add_attribute(
    "class",
    flight.Status === "Cancelled" ? "text-red-500" : "text-green-500",
    0
  )}>Flight Number:
				${escape(flight.Flightnumber)}</strong>
                <p>${escape(flight.Airline)}</p></div>
            <div class="${"text-4xl"}">${flight.Status.toLowerCase().includes("land") ? `\u{1F6EC}` : `${flight.Status.toLowerCase().includes("cancel") ? `\u{1F6A8}` : `\u23F1`}`}</div></div>
		<div><strong>From:</strong>
			${escape(flight.From)}</div>
		<div><strong>Scheduled:</strong>
			${escape(flight.Scheduled)}</div>
		<strong>Status:</strong>
		${escape(flight.Status)}</div></div>`;
});
async function load({ fetch }) {
  const res = await fetch("/api/flights");
  return { props: { flights: await res.json() } };
}
const Airport = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { flights } = $$props;
  const today = moment().format("DD-MM-YY");
  let landed = true;
  let cancelled = true;
  let scheduled = true;
  if ($$props.flights === void 0 && $$bindings.flights && flights !== void 0)
    $$bindings.flights(flights);
  return `<div class="${"md:w-2/4"}"><section><div class="${"inner-container"}"><h2 class="${"text-2xl font-bold my-4"}">Airport Arrivals for ${escape(today)} \u2708\uFE0F</h2>

			
			<ul class="${"items-center w-full text-sm font-medium text-gray-900 bg-slate-500 rounded-md border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"}"><li class="${"w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"}"><div class="${"flex items-center pl-3"}"><input id="${"landed"}" type="${"checkbox"}" value="${""}" name="${"landed"}" class="${"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"}"${add_attribute("checked", landed, 1)}>
						<label for="${"landed"}" class="${"py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"}">Landed</label></div></li>
				<li class="${"w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"}"><div class="${"flex items-center pl-3"}"><input id="${"react-checkbox-list"}" type="${"checkbox"}" value="${""}" name="${"scheduled"}" class="${"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"}"${add_attribute("checked", scheduled, 1)}>
						<label for="${"react-checkbox-list"}" class="${"py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"}">Scheduled</label></div></li>

				<li class="${"w-full dark:border-gray-600"}"><div class="${"flex items-center pl-3"}"><input name="${"cancelled"}" id="${"angular-checkbox-list"}" type="${"checkbox"}" value="${""}" class="${"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"}"${add_attribute("checked", cancelled, 1)}>
						<label for="${"angular-checkbox-list"}" class="${"py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"}">Cancelled</label></div></li></ul>
            
			${each(flights, (flight) => {
    return `${moment(flight.Date).format("DD-MM-YY") == today ? `${`${`${`${validate_component(Flight, "Flight").$$render($$result, { flight }, {}, {})}`}`}`}` : ``}`;
  })}</div></section></div>`;
});
export {
  Airport as default,
  load
};
