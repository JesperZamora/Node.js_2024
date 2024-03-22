<script>
  let numberOfFriends = 0;
  let cheatInterval;
  let message = "Dude, you got no friend!";

  function incrementFriends() {
    numberOfFriends += 1;
    systemMessage();
  }

  function deleteFriends() {
    numberOfFriends = 0;
  }

  function cheat() {
    cheatInterval = setInterval(() => {
      numberOfFriends += 1;
      systemMessage();
    }, 100);
  }

  function stopCheat() {
    clearInterval(cheatInterval);
  }

  function systemMessage() {
    switch (numberOfFriends) {
      case 10:
        message = "Wuaw, you got friends now!";
        break;

      case 50:
        message = "Wtf, you are getting popular!";
        break;
      default:
        break;
    }
  }
</script>

<h2>Fictive friends: {numberOfFriends}</h2>
<h2>{message}</h2>
<button on:click={incrementFriends}>Add Friend</button>
<button on:click={deleteFriends}>Bye Bye Friends</button>
<button on:click={cheat}>Cheat</button>
<button on:click={stopCheat}>Stop Cheat</button>
