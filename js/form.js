
let form = document.querySelector(".contact__form form")
form.addEventListener('submit', async function(e){
  e.preventDefault();
  let ak = import.meta.env.VITE_ACCESS_KEY
  let a = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: JSON.stringify({
        access_key: `${ak}`,
        name: `${this.elements[1].value}`,
        email:`${this.elements[2].value}`,
        message: `${this.elements[3].value}`
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });

  let res = await a.json();
  if(res.success){
    this.elements[4].innerHTML = `Message Sent &nbsp;<i class="fa-regular fa-circle-check"></i>`;
  }

  else{
    this.elements[4].innerHTML = `An Error Occurred ! Please Try Again &nbsp; <i class="fa-solid fa-circle-exclamation"></i>`
  }

  form.reset();

  setTimeout(()=>{
    this.elements[4].innerHTML = `Send &nbsp; &nbsp; <i class="fa-solid fa-paper-plane"></i>`
  },2000)


})

