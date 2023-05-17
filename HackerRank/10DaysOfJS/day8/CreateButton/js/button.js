const btn = document.querySelector('button#btn');
btn.addEventListener('click', (e) => {
    const count = Number(e.currentTarget.innerText) + 1;
    e.currentTarget.innerText = count;  
});