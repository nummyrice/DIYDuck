const deleteAnswer = document.querySelector('.answer_delete')

deleteAnswer.addEventListener('click', async (e) => {
        const answerId = e.target.id.split('-')[1]
        console.log(answerId)
        const res = await fetch(`/answer/${answerId}`, {
            method: 'DELETE'
        })

         const data = await res.json()
        if (data.message === "Success") {
            const container = document.getElementById(`answer_body-${answerId}`)
            const button1 = document.getElementById(`answer-edit-button-${answerId}`)
            const button2 = document.getElementById(`answer-delete-button-${answerId}`)
            button1.remove()
            button2.remove()
            container.remove()
        }
        })

const editAnswer = document.getElementById('edit_answer_submitButton')
editAnswer.addEventListener('click', async (e) => {
    const modal = document.getElementById(`editAnswerModal`)
    modal.style.display='block';
})

const cancelEditAnswer= document.getElementById('edit_answer_cancelButton')
cancelEditAnswer.addEventListener('click', async (e) => {
    const modal = document.getElementById(`edit_answer_submitButton`)
    modal.style.display='none';
})
