<script>
  let count = 0;
  // reactive declaration
  $: doubled = count * 2;

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>
  Clicked
  {count}
  {count === 1 ? 'time' : 'times'}
</button>
<br />
<br />
<p>{count} doubled is {doubled}</p>
<p style="color: red">{count} doubled is {count * 2}</p>
