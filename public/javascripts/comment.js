
const commentButtons = document.querySelectorAll(".show_comment_button");
commentButtons.forEach((element) => {
    //console.log(element)
    element.addEventListener('click', async(e)=>{
        //console.log(e)
        const id = element.id.split('-')[1]

       // console.log(id)
        const commentsdiv = document.getElementById(`comment_for_answer-${id}`)
        if (commentsdiv.style["display"] === "block") {
            commentsdiv.style["display"] = "none";
        } else {
            commentsdiv.style["display"] = "block";
        }
     })
})



const addComments = document.querySelectorAll('.comment-creation-button')
addComments.forEach((element) => {
    element.addEventListener('click', async (e) => {
        const id = e.target.id.split('-')[1]
        const modal = document.getElementById(`commentModal-${id}`)
        modal.style.display='block';
    })
})

const cancelComments = document.querySelectorAll('.comment_cancelButton')
cancelComments.forEach((element) => {
    element.addEventListener('click', async (e) => {
        const id = e.target.id.split('-')[1]
        const modal = document.getElementById(`commentModal-${id}`)
        modal.style.display='none';
    })
})

// const cancelComments = document.getElementById('comment_cancelButton')
// cancelComments.addEventListener('click', async(e)=>{
//     const modal = document.getElementById('commentModal')
//     modal.style.display='none';
// })


// const deleteComment = document.querySelectorAll('.comment_delete')

// for (let i = 0; i < deleteComment.length; i++) {
//     const deleteButton = deleteComment[i];
//     deleteButton.addEventListener('click', async (e) => {
//         // e.preventDefault();
//         console.log(e)
//         const commentId = e.target.id.split('-')[1]
//         const res = await fetch(`/comments/${commentId}`, {
//             method: 'DELETE'
//         })

//         const data = await res.json()
//         if (data.message === "Success") {
//             const container = document.querySelector('.commentDiv')
//             container.remove()
//         }
//     })
// }
