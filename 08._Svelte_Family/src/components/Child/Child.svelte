<script>
  export let child;
  export let onShowLove;
  export let onShowTreasure;
  let fridgeMessageValue = "";

  import { fridgeMessages } from "../../stores/fridgeMessageStore";

  function sumbitFridgeMessage() {
    const newFridgeMessage = {
      creator: child.name,
      message: fridgeMessageValue
    }
    //fridgeMessages.set([...$fridgeMessages, newFridgeMessage]);

    // $frigeMessages = fridgeMessageStore 
    fridgeMessages.update((fridgeMessagesStore) => {
      fridgeMessagesStore.push(newFridgeMessage);
      return fridgeMessagesStore;
    })
    fridgeMessageValue = "";
  }

</script>
<div
  class:is-girl={child.isGirl}
  class:is-boy={!child.isGirl}
  class={child.familySheep || "not-a-sheep"}
>
  <h2>{child.name}</h2>
  <label for="frideMassageInput">Write a Fridge Message</label>
  <input type="text" name="frideMassageInput" id="" placeholder="Fridge Message" bind:value={fridgeMessageValue}>
  <button on:click={sumbitFridgeMessage}>Write Fridge Message</button>
  <br>
  <br>
  <button on:click={() => onShowLove(child.name)}>Show Love 💗</button>
  <button on:click={onShowTreasure}>Take treasure</button>
</div>

<style>
  .is-girl {
    background-color: blue;
  }

  .is-boy {
    background-color: pink;
  }

  .not-a-sheep {
    border: 0.5em solid goldenrod;
    border-radius: 20px;
    padding: 10px;
  }

  .black-sheep {
    border: solid 10px black;
    color: black;
    border-radius: 20px;
    padding: 10px;
    margin-bottom: 20px;
  }

  .grey-sheep {
    border: solid 10px grey;
    color: grey;
    border-radius: 20px;
    padding: 10px;
    margin-bottom: 20px;
  }
  
</style>