const addQuestionButton = document.getElementById('questionButton')
if(addQuestionButton){
    addQuestionButton.addEventListener('click', async (e) => {

        const selectOption = document.getElementById('selectOption')
        if(!selectOption){
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
            option.setAttribute("id","selectOption")
            option.innerText = `${element.name}`
        });

        const modal = document.getElementById('questionModal')
        modal.style.display='block';
    } else {
        const modal = document.getElementById('questionModal')
        modal.style.display='block';
    }
    })
    }

const cancelButton = document.getElementById('cancelButton')
if(cancelButton){
    cancelButton.addEventListener('click', async(e)=>{
        const modal = document.getElementById('questionModal')
        modal.style.display='none';
    })}
    