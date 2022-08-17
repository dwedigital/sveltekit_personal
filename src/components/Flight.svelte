<script>
	export let flight;


</script>

<div class="p-4 m-2 bg-slate-100 border-gray-400 border rounded-md">
	<div>
		<div class="flex-row flex justify-between ">
			<div >
				<strong class={flight.Status === 'Cancelled' ? 'text-red-500' : 'text-green-500'}>Flight Number:
				{flight.Flightnumber}</strong>
                <p>{flight.Airline}</p>
			</div>
            <div class="text-4xl">
			{#if flight.Status.toLowerCase().includes('land')}
				🛬
            {:else if flight.Status.toLowerCase().includes('cancel')}
                🚨
            {:else}
                ⏱
            {/if}
			
        </div>
		</div>
		<div>
			<strong>From:</strong>
			{flight.From}
		</div>
		<div>
			<strong>Scheduled:</strong>
			{flight.Scheduled}
		</div>
		<strong>Status:</strong>
		{flight.Status}
	</div>
</div>
