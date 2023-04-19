export function load({fetch, params}) {
    const meetupId = params.id;
    return fetch(`https://svelte-course-f0c66-default-rtdb.firebaseio.com/meetups/${meetupId}.json`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Fetching meetups failed, please try again later!');
            }
            return res.json();
        })
        .then(meetupData => {
            const loadedMeetup = { ...meetupData, id: meetupId };
            return {
                props: { loadedMeetup }
            }
        })
        .catch(err => error(404, 'Could not fetch meetup!'))
    }