let arrayObject = []

function addBlog(event){
    event.preventDefault()

    //Variable menampung data 
    let title = document.getElementById('input-blog-title').value
    let startDate = document.getElementById('star-date').value
    let endDate = document.getElementById('end-date').value
    let content = document.getElementById('input-blog-content').value
   
    // let inputSkill = Array.from(document.querySelectorAll('input[type=checkbox]:checked')) // Get emlement atau selector
    // .map((item) => item.value) // Iterasi value checkbox menggunakan .map yang memimiliki arrow function sebagai parameter.

    let image = document.getElementById("input-blog-image")// manampung data
    image = URL.createObjectURL(image.files[0])//method convert value to img , 

    //variable menampung data checkbox
    let skilNode = document.getElementById("node-js").checked
    let skilReact = document.getElementById("react-js").checked
    let skilJava = document.getElementById("java-1").checked
    let skilPython = document.getElementById("python-1").checked

    console.log(startDate);
    console.log(endDate);

    // Kondisi untuk mengecek checkbox di ceklis atau tidak
    if (skilNode){
        skilNode = document.getElementById("node-js").value
    } else{
        skilNode = ""
    }
    
    if (skilReact){
        skilReact = document.getElementById("react-js").value
    }else{
        skilReact = ""
    }

    if (skilJava){
        skilJava = document.getElementById("java-1").value
    }else{
        skilJava = ""
    }

    if (skilPython){
        skilPython = document.getElementById("python-1").value
    }else{
        skilPython =""
    }

    // object untuk menampung semua value 
    let blog ={
        title,
        startDate,
        endDate,
        content,
        image,
        skilNode,
        skilReact,
        skilJava,
        skilPython,
        postedAt : new Date()
    }

    //method untuk menambahkan object kedalam array 
    arrayObject.push(blog)

    console.table(arrayObject)

    
    
   rendeBlog(); 
}

function rendeBlog(){
    let lengthData = arrayObject.length

    let blogContainer = document.getElementById("contents")

    blogContainer.innerHTML= fristBlogContent()

    // durationMonth(start,end)

    for(let i = 0; i < lengthData; i++){
        blogContainer.innerHTML +=`
        <div class="blog-list-item">
          <div class="blog-image">
            <img src="${arrayObject[i].image}" alt="" />
          </div>
          <div class="blog-content">
            <h1>
              <a href="blog-detail.html" target="_blank">${arrayObject[i].title}</a>
            </h1>
            <div class="detail-blog-content">
              Duration : ${durationMonth(arrayObject[i].startDate, arrayObject[i].endDate)} Bulan
            </div>
            <p>
            ${arrayObject[i].content}  
            </p>
            <div class="icon-checkbox">
              <p style="font-size: 25px;"><i class="${arrayObject[i].skilNode}"></i>     <i class="${arrayObject[i].skilReact}"></i>     <i class="${arrayObject[i].skilJava}"></i>     <i class="${arrayObject[i].skilPython}"></i></p>
            </div>
            <div class="btn-group">
                <button class="btn-edit">Edit</button>
                <button class="btn-post">Delet</button>
              </div>
          </div>
        </div>`
    }

}

function fristBlogContent(){
    return`
    <div class="blog-list-item">
          <div class="blog-image">
            <img src="assets/blog1.png" alt="" />
          </div>
          <div class="blog-content">
            <h1>
              <a href="blog-detail.html" target="_blank">Dumbways Mobile App - 2022</a>
            </h1>
            <div class="detail-blog-content">
              Duration : 3 Bulan
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ducimus pariatur, odio consequatur placeat molestiae reiciendis ab dicta incidunt labore deserunt et minus alias illo quis architecto facere animi nesciunt.
            </p>
            <div class="icon-checkbox">
              <p style="font-size: 25px;"><i class="fab fa-google-play"></i>     <i class="fab fa-app-store-ios"></i>     <i class="fab fa-js-square"></i>     <i class="fab fa-css3-alt"></i></p>
            </div>
            <div class="btn-group">
                <button class="btn-edit">Edit</button>
                <button class="btn-post">Delet</button>
              </div>
          </div>
        </div>`
}

function durationMonth(start,end){
  dateStart = new Date(start)
  dateEnd = new Date (end)

  
    const total_months = (dateEnd.getFullYear()- dateStart.getFullYear())*12 + (dateEnd.getMonth() - dateStart.getMonth())
    return total_months
}


