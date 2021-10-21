const allCommentsdiv = document.querySelectorAll(".commentsDiv");
allCommentsdiv.forEach((element,i) => {
    element.setAttribute("id",`commentsDive-${i}`);
})

const commentButtons = document.querySelectorAll(".collapsible");
commentButtons.forEach((element,i) => {
    const commentsdiv = document.getElementById(`commentsDive-${i}`)
    element.addEventListener('click', async(e)=>{
        if (commentsdiv.style.display === "block") {
            commentsdiv.style.display = "none";
        } else {
            commentsdiv.style.display = "block";
        }
    })
})



const addComments = document.getElementById('comment-creation-button')
addComments.addEventListener('click', async (e) => {

    const modal = document.getElementById('commentModal')
    modal.style.display='block';

})


const cancelComments = document.getElementById('comment_cancelButton')
cancelComments.addEventListener('click', async(e)=>{
    const modal = document.getElementById('commentModal')
    modal.style.display='none';
})


const deleteComment = document.querySelectorAll('.comment_delete')

for (let i = 0; i < deleteComment.length; i++) {
    const deleteButton = deleteComment[i];
    deleteButton.addEventListener('click', async (e) => {
        // e.preventDefault();
        console.log(e)
        const commentId = e.target.id.split('-')[1]
        const res = await fetch(`/comments/${commentId}`, {
            method: 'DELETE'
        })

        const data = await res.json()
        if (data.message === "Success") {
            const container = document.querySelector('.commentDiv')
            container.remove()
        }
    })
}
