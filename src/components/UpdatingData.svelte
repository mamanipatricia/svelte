<script>
  let numbers = [1, 2, 3, 4];
  $: total = numbers.reduce((totalSum, number) => totalSum + number, 0);
  function addNumber() {
    //   first way - with an assignment
    /*   numbers.push(numbers.length + 1);
    numbers = numbers */

    // second way - spread operator
    numbers = [...numbers, numbers.length + 1];
  }
</script>

<!-- <p>{@html numbers.join(" <br> ")}</p> -->
<p>{numbers.join(' + ')} = {total}</p>
<button on:click={addNumber}>Add Number</button>
