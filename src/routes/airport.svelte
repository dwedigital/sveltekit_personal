<script context="module">
	export async function load({ fetch }) {
		const res = await fetch("/api/flights");
		return { props: { flights: await res.json()} };
	}
</script>

<script>
	import Flight from '../components/flight.svelte';
	import moment from 'moment';
	export let flights;
	const today = moment().format('DD-MM-YY');
	let landed = true;
    let cancelled = true;
    let scheduled = true;

</script>

<div class="md:w-2/4">
	<section>
		<div class="inner-container">
			<h2 class="text-2xl font-bold my-4">Airport Arrivals for {today} ✈️</h2>

			
			<ul
				class="items-center w-full text-sm font-medium text-gray-900 bg-slate-500 rounded-md border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
			>
				<li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
					<div class="flex items-center pl-3">
						<input
							bind:checked={landed}
    
							id="landed"
							type="checkbox"
							value=""
							name="landed"
							class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
						/>
						<label
							for="landed"
							class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
							>Landed</label
						>
					</div>
				</li>
				<li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
					<div class="flex items-center pl-3">
						<input
                            bind:checked={scheduled}
							id="react-checkbox-list"
							type="checkbox"
							value=""
                            name="scheduled"
							class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
						/>
						<label
							for="react-checkbox-list"
							class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
							>Scheduled</label
						>
					</div>
				</li>

				<li class="w-full dark:border-gray-600">
					<div class="flex items-center pl-3">
						<input
                            bind:checked={cancelled}
                            name = "cancelled"
							id="angular-checkbox-list"
							type="checkbox"
							value=""
							class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
						/>
						<label
							for="angular-checkbox-list"
							class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
							>Cancelled</label
						>
					</div>
				</li>
			</ul>
            
			{#each flights as flight}
				{#if moment(flight.Date).format('DD-MM-YY') == today}
					{#if !landed && flight.Status.toLowerCase().includes('land')}
						<span />
					{:else if !scheduled && (flight.Status.toLowerCase().includes('scheduled') || flight.Status.toLowerCase().includes('estimated'))}
                        <span />
                    {:else if !cancelled && flight.Status.toLowerCase().includes('cancel')}
                        <span />
                    {:else}
						<Flight {flight} />
					{/if}
				{/if}
			{/each}
		</div>
	</section>
</div>
