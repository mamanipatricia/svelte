<script>
  let user = { loggedIn: false };

  function toggle() {
    user.loggedIn = !user.loggedIn;
  }
</script>

{JSON.stringify(user)}

{#if user.loggedIn}<button on:click={toggle}>Log out</button>{/if}

{#if !user.loggedIn}<button on:click={toggle}>Log in</button>{/if}
