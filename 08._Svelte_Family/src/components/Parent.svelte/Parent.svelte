<script>
  import Child from "../Child/Child.svelte";
  export let parentName;
  export let myChildren;
  
  import { fridgeMessages } from "../../stores/fridgeMessageStore";

  function handleShowLove(childName) {
    console.log(`${parentName} is loved by ${childName} very much.`);
  }

  /* assignment: Create a loot box / treasure chest full of items (emoji)
    each parant has a treasure chest and the children can take one item at a time remember to follow the conventions of handle* and on*
  */
  export let treasureChest=["🔱", "🏅", "⭐️", "🔑", "🏆", "👑", "🌟"];
  
  function handleTreasureChest() {
    console.log(treasureChest.pop());
    treasureChest = treasureChest;
  }

  function wipeFridge() {
    fridgeMessages.set([{message: "dasdasd"}]);
  }
</script>

<h1>{parentName}</h1>
{#each treasureChest as treasure}
  {treasure + " "}
{/each}

<button on:click={wipeFridge}>Wipe Fridge</button>

<!-- assignment pass each set og children to each parent -->
{#each myChildren as child}
  <Child {child} onShowLove={handleShowLove} onShowTreasure={handleTreasureChest} />
{/each}


