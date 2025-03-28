function bos(){
    window.location = '/kirish.html'
}
function savat(){
    window.location = '/savatcha.html'
}

function sotish(){
    const name = document.querySelector("#inp").value;
    const info = document.querySelector("#inp1").value;
    const sale = document.querySelector("#inp2").value;
    const num = document.querySelector("#inp3").value;
    const son = document.querySelector("#inp4").value;

    if(!name || !info|| !sale || !num || !son){
        alert("Iltimos barcha kataklarni toldiring ❌");
    }else {
        const formData = []
        formData.push(name)
        formData.push(info)
        formData.push(sale)
        formData.push(num)
        formData.push(son)
        console.log(formData);

        localStorage.setItem("for", `${formData}`)
        console.log(localStorage.getItem('for'));
    }
}

function kirish(){
    const inname = document.querySelector("#inp").value;
    const name1 = document.querySelector("#inp1").value;
    const email = document.querySelector("#inp2").value;
    const pass = document.querySelector("#inp3").value;
    const pasword = document.querySelector("#inp4").value;

    if(!inname || !name1 || !email || !pass || !pasword){
        alert("Iltimos barcha kataklarni toldiring ❌");
    } else if(!email.includes("@") || !email.includes(".")){
        alert("email malumoti noto'g'ri ❌");
    } else if(pass.length < 8){
        alert("parol 8 ta belgidan kam bo'lmasin ❌");
    } else if(pass !== pasword){    
        alert("paro'llar mos kelmadi ❌");
    } else {
        const formData = []
        formData.push(inname)
        formData.push(name1)
        formData.push(email)
        formData.push(pass)
        formData.push(pasword)
        console.log(formData);

        localStorage.setItem("file", `${formData}`)
        console.log(localStorage.getItem('file'));
    }
}