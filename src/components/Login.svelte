<script>
  let user = { loggedIn: false };

  function toggle() {
    user.loggedIn = !user.loggedIn;
  }
</script>

{JSON.stringify(user)}

<!-- A # character always indicates a block opening tag. A / character always indicates a block closing tag. A : character, as in {:else}, indicates a block continuation tag. -->

{#if user.loggedIn}
  <button on:click={toggle}>Log out</button>
{:else}<button on:click={toggle}>Log in</button>{/if}
