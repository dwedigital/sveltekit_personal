<script context="module">
	export async function load({fetch}) {
		const response = await fetch(
			'https://europe-west2-vibrant-grammar-254613.cloudfunctions.net/flights'
		);
		const flights = await response.json();
		return { props: { flights } };
	}
</script>

<script>
	export let flights;
</script>

<div class="px-16">
	<section>
		<div class="inner-container">
			<h2 class="text-2xl font-bold my-4">Airport Arrivals 🛬</h2>
            {#each flights as flight}
            {#if flight.display}
            <div class="{flight.Status ==='Cancelled'?'text-red-500':'text-green-500'}">
            <strong>Flight Number:</strong> {flight.Flightnumber}
            <strong>From:</strong> {flight.From}
            <strong>Scheduled:</strong> {flight.Scheduled}
            <strong>Status:</strong> {flight.Status}
            </div>
            {/if}
                {/each}
		</div>
	</section>
</div>