<script>
  let numberOfFriends = 0;

  function incrementFriends() {
    numberOfFriends += 1;
  }

  function deleteFriends() {
    numberOfFriends = 0;
  }

  function cheat() {
    setInterval(()=> numberOfFriends += 1, 500);
  }
</script> 

<h2>Fictive friends: {numberOfFriends}</h2>
<button on:click={incrementFriends}>Add Friend</button>
<button on:click={deleteFriends}>Bye Bye Friends</button>
<button on:click={cheat}>Cheat</button>