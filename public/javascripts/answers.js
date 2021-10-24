const deleteAnswer = document.querySelectorAll('.answer-delete-button')

if (deleteAnswer){
    deleteAnswer.forEach((element) => {
    element.addEventListener('click', async (e) => {
        const answerId = e.target.id.split('-')[1]
        console.log(answerId)
        const res = await fetch(`/answers/${answerId}`, {
            method: 'DELETE'
        })

         const data = await res.json()
        if (data.message === "Success") {
            const container = document.getElementById(`answer_body-${answerId}`)
            container.remove()
            }
        })
    })}
