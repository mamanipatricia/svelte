<script>
  export let name;
  export let profession;
  export let age;
  export let website;
  export let github;
  export let series;
  $: listSeries = `<table border=1><thead><tr><th>#</th><th>name</th></tr></thead>
  <tbody>
    ${series
      .map((serie, index) => {
        return `<tr><td>${index + 1}</td><td>${serie}</td> </tr>`;
      })
      .join("")}
  </tbody>
  </table>`;
</script>

<p>
  She is
  <code>{name}</code>, is a
  {profession}
  in google. He is
  <strong>{age}</strong>
  and you can reach him in
  <code>{website}</code>
  and also in
  <code>{github}</code>. The series i watched

  {@html listSeries}
</p>
