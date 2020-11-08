<script>
  import Nested from "./components/Nested.svelte";
  import Button from "./components/Button.svelte";
  import UpdatingData from "./components/UpdatingData.svelte";

  let name = "world!!!!!!";
  let src = "https://catalog.redhat.com/img/svg/logo.svg";
  let text = "this is a text, look at <strong> this </strong>";
</script>

<style>
  p {
    color: purple;
    font-family: "Arial", cursive;
    font-size: 2em;
  }
</style>

<h1>Hello {name.toUpperCase()}</h1>
<img {src} alt="{name} A red hat" />

<p>This is a paragraph</p>
<Nested />

<p>
  {@html text}
</p>

<Button />
<UpdatingData />
