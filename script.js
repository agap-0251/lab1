let btn = document.getElementById("btn");
btn.onclick = () => {
    let name = document.getElementById("name");
    return alert(`Welcome , ${name.value}!`);
}