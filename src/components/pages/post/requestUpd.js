const requestUpd = (e ,id, title , body) => {

    e.preventDefault()

    // console.log(id);
    // console.log(title);
    // console.log(body);
    

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            title,
            body
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(() => alert('پست مورد نظر آپدیت شد.'))
        .catch(() => alert('آپدیت با خطا مواجه شد.'))

}

export default requestUpd