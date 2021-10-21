const search = document.getElementById('searchBar')
let questions = []

search.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const res = await fetch('/questions', {
        method: 'GET'
    })
    const questions = await res.json()
    const filteredSearch = questions.filter((question) => {
        return {
            Question.name.
        }
    })
})
