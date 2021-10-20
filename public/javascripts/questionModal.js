const button = document.getElementById('questionButton')
button.addEventListener('click', async (e) => {

    const modal = document.getElementById('questionModal')
    modal.style.display='block';

    const res = await fetch('/categories', {
        method: 'GET'
    })

    const categories = await res.json()

    console.log(categories)


    const categorySelector = document.getElementById('categorySelector')
    categories.forEach(element => {
        const option = document.createElement("option");
        categorySelector.appendChild(option)
        option.setAttribute("value",`${element.id}`)
        option.innerText = `${element.name}`
    });

})


const cancelButton = document.getElementById('cancelButton')
cancelButton.addEventListener('click', async(e)=>{
    const modal = document.getElementById('questionModal')
    modal.style.display='none';
})
