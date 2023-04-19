<script>
  import { goto } from '$app/navigation';
</script>

<style>
  header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 4rem;
    background: #cf0056;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.26);
  }

  h1 {
    color: white;
    font-family: "Roboto Slab", serif;
    margin: 0;
    cursor: pointer;
  }
</style>

<header>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <h1 on:click={() => goto('/') }>MeetUs</h1>
</header>
