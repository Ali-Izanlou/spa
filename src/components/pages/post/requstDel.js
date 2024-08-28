
const requestDel = (id) => {
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    })
        .then(() => {
            alert("پست مورد نظر حذف شد.")
            window.history.back()
        })
        .catch(() => alert("حذف با خطا مواجه شد."))

    

}

export default requestDel