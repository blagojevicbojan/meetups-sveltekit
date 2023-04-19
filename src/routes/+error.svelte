<script>
    import Button from "../UI/Button.svelte";
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
</script>

<style>
    main {
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-size: 5rem;
        margin-bottom: 0;
    }

    h4 {
        font-size: 1.25rem;
    }
</style>

<main>
    <h1>{$page.status} {$page.error.message}</h1>
    <h4>We're sorry, we couldn't find the page you requested.</h4>
    <Button type="button" on:click={() => goto('/') }>Home Page</Button>
</main>

