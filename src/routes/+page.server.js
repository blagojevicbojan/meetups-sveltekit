export function load({fetch}) {
    return fetch('https://svelte-course-f0c66-default-rtdb.firebaseio.com/meetups.json')
    .then(res => {
        if (!res.ok) {
            throw new Error('Fetching meetups failed, please try again later!');
        }
        return res.json();
    })
    .then(data => {
        const fetchedMeetups = [];
        for (const key in data) {
            fetchedMeetups.push({
            ...data[key],
            id: key
            });
        }
        fetchedMeetups.reverse();
        return {
            props: {fetchedMeetups}
        };
        /*
        setTimeout(() => {
            isLoading = false;
            meetups.seetupMeetup(loadedMeetups.reverse());
        }, 1000);
        */
    })
    .catch(err => {
        isLoading = false;
        console.log(err);
        error(500, 'Could not fetch meetups!');
    });
    
}