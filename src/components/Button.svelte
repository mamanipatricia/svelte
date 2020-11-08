<script>
  let count = 0;
  // ***** reactive declaration *****
  $: doubled = count * 2;

  function handleClick() {
    count += 1;
  }

  // ***** reactive statements *****
  $: console.log(`the count is ${count}`);
  //   You can easily group statements together with a block:
  $: {
    console.group("---------block statement--------");
    console.log(`the count is ${count}`);
    console.log(`I SAID THE COUNT IS ${count}`);
    console.groupEnd();
  }
  // You can even put the $: in front of things like if blocks:
  $: if (count >= 10) {
    alert(`count is dangerously high`);
    count = 9;
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

<!-- else if blocks -->
{#if count > 7}
  <p>{count} is greater than 7</p>
{:else if 5 > count}
  <p>{count} is less than 5</p>
{:else}
  <p>{count} is between 5 and 7</p>
{/if}
