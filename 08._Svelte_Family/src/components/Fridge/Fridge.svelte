<script>
  import { fridgeMessages } from "../../stores/fridgeMessageStore";

  //export let fridgeHeight = 40;
</script>

<div class="fridge">
  {#each $fridgeMessages as fridgeMessage}
    <p>{fridgeMessage.creator ?? "Title"}: {fridgeMessage.message}</p>
  {/each}
</div>

<style>
  .fridge {
    background-color: #fff;
    color: #000;
    min-height: 60vh;
    border-radius: 1.5em;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
</style>