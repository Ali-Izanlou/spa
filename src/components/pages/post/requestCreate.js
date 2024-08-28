const requestCreate = (e, title, body) => {

    e.preventDefault()

    console.log(e.target);
    // console.log(body);

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(() => {
            alert('پست ایجاد شد.')
            
        })
        .catch(() => alert('ایجاد پست با خطا مواجه شد.'));

}

export default requestCreate