
function showData(){

    let inputName = document.getElementById("name").value
    let inputEmail = document.getElementById("email").value
    let inputPhone = document.getElementById("phone").value
    let inputSubject = document.getElementById("subject").value
    let inputMessage = document.getElementById("message").value

//validasi

if (inputName == ""){
    return alert("Input Your Name")
}

if (inputEmail == ""){
    return alert("Input Your Email")
}

if (inputPhone == ""){
    return alert("Input Your Phone")
}

if (inputSubject == ""){
    return alert("Input Your Subuject")
}

if (inputMessage == ""){
    return alert("Input Your Message")
}

    //DOM creat
let emailReceiver ='farhan.mungis@gmail.com'

let a = document.createElement("a")
a.href =`mailto:${emailReceiver}?subject=${inputSubject}&body=Hello my name is ${inputName}, ${inputSubject}, ${inputMessage}, this my phone number : ${inputPhone}`

a.click()


const dataObject = {
    inputName,
    inputEmail,
    inputPhone,
    inputSubject,
    inputMessage
}
console.table(dataObject)
}