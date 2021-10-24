// loades answer likes and like button
window.addEventListener("DOMContentLoaded", event => {
    // const likeNumHtml = document.querySelectorAll('.like_count');
    const likeHeart = document.querySelectorAll('.fa-heart');
    const likeField = document.querySelectorAll('.like_field')

    // fetches likes from database and appends score, sets heart to full if answer was
    //      liked by user
    likeField.forEach(async (element) => {
        const answerId = element.id.slice(8);
        const res = await fetch(`/answers/${answerId}/likes`, {
            method: 'GET'
        });
        const elementLikes = await res.json();

        const likeCount = document.querySelector(`#count_${answerId}`);

        const faHeart = document.querySelector(`#heart_${answerId}`);
        if (faHeart) {
            likeCount.innerText = elementLikes.likes.length;
            if (elementLikes.likeStatus.length) {
                faHeart.classList.remove('far');
                faHeart.classList.add('fas');
            };
        };
    });

    // adds click listener to each heart icon for liking answers
    likeHeart.forEach((element) => {
        const answerId = element.id.slice(6);
        const likeCount = document.querySelector(`#count_${answerId}`);
        // console.log();
        element.addEventListener('click', async (event) => {
            // const res = await fetch(`/answers/${answerId}/likes/auth`, {
            //     method: 'GET',
            // });
            // const likeAuth = await res.json();
            // console.log(likeAuth);
            // if (likeAuth.message === 'Success') {
                // console.log(event.target.classList.contains('far'));
            if (event.target.classList.contains('far')) {
                //add a like to the database
                const addLike = await fetch(`/answers/${answerId}/likes`, {
                    method: 'POST',
                });
                const result = await addLike.json();
                if (result.message === 'Success') {
                    // increment like count on page
                    likeCount.innerText = parseInt(likeCount.innerText, 10) + 1;
                    event.target.classList.remove('far');
                    event.target.classList.add('fas');
                    console.log('liked');
                };
            } else if(event.target.classList.contains('fas')) {
                //delete like from database
                const deleteLike = await fetch(`/answers/${answerId}/likes`, {
                    method: 'DELETE',
                });
                const result = await deleteLike.json();
                if (result.message === 'Success') {
                    // decrement like count on page
                    likeCount.innerText = parseInt(likeCount.innerText, 10) - 1;
                    event.target.classList.remove('fas');
                    event.target.classList.add('far');
                    console.log('unliked');

                }
            };
        // } else if (likeAuth.message = 'Failure') {

        // }
        });
    });
});
