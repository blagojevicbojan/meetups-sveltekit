<script>
    import Button from "../../../UI/Button.svelte";
    import { goto } from '$app/navigation';

    export let data;
    
    const meetup = data.props.loadedMeetup;
</script>

<style>
    main {
        margin-top: 5rem;
    }

    section {
        margin-top: 4rem;
    }

    .image {
        width: 100%;
        height: 25rem;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .image {
        background: #e7e7e7;
    }

    .content {
        text-align: center;
        width: 80%;
        margin: auto;
    }

    h1 {
        font-size: 2rem;
        font-family: 'Roboto Slab', sans-serif;
        margin: 0.5rem 0;
    }

    h2 {
        font-size: 1.25rem;
        color: #6b6b6b;
    }

    p {
        font-size: 1.5rem;
    }
</style>

<svelte:head>
		<title>Meetup Detail</title>
		<meta name="description" content="Svelte demo app" />
	</svelte:head>

<main>
    <section>
        <div class="image">
            <img src="{meetup.imageUrl}" alt="{meetup.title}">
        </div>
        <div class="content">
            <h1>{meetup.title}</h1>
            <h2>{meetup.subtitle} - {meetup.address}</h2>
            <p>{meetup.description}</p>
            <Button href="mailto: {meetup.contactEmail}">Contact</Button>
            <Button type="button" mode="outline" on:click={() => goto('/') }>Close</Button>
        </div>
    </section>
</main>