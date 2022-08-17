<script>
    import "../app.css";
  </script>

<nav class="bg-white m-0 px-8">
	<div class="nav-container">
        <a href="/" class="nav-logo" title="Back to Homepage">Dave Edwards</a>
		<div class="nav-links">
			<a class="link" href="/">Home</a>
            <a class="link" href="/airport">Airport</a>
			<a class="link" href="/about">About</a>
		</div>
	</div>
</nav>

<main class="flex justify-center">
	<div class="container flex justify-center w-full my-10"><slot /></div>
</main>

<footer>DWE Digital</footer>

<style>

</style>