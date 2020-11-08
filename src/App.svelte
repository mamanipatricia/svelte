<script>
  import Nested from "./components/Nested.svelte";
  import Button from "./components/Button.svelte";
  import UpdatingData from "./components/UpdatingData.svelte";
  import PersonalInformation from "./components/PersonalInformation.svelte";
  import Login from "./components/Login.svelte";
  import Loop from "./components/Beer/Loop.svelte";

  let name = "world!!!!!!";
  let src = "https://catalog.redhat.com/img/svg/logo.svg";
  let text = "this is a text, look at <strong> this </strong>";

  const info = {
    name: "Patricia",
    profession: "Computer Science",
    age: 26,
    website: "patriciamq.xyz",
    github: "mamanipatricia",
    series: [
      "got",
      "devs",
      "dead note",
      "TBBT",
      "suits",
      "OUAT",
      "The walking Dead",
    ],
  };
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
<Nested answer={11111122222} />
<Nested />

<p>
  {@html text}
</p>

<Button />
<UpdatingData />

<PersonalInformation {...info} />
<Login />
<Loop />
