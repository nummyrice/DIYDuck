const button = document.getElementById('questionButton')
button.addEventListener('click', async (e) => {
    const modal = document.getElementById('questionModal')
    modal.style.display='block';
})


const cancelButton = document.getElementById('cancelButton')
cancelButton.addEventListener('click', async(e)=>{
    const modal = document.getElementById('questionModal')
    modal.style.display='none';
})
