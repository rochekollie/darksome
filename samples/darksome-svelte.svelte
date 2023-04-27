<script>
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>


<div>
  <h1>Svelte Counter App</h1>
  <p>Count: {count}</p>
  <button on:click={handleClick}>Click me!</button>
</div>
