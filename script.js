function myfun(){
    let element=document.querySelector('.sidebar');
    element.style.scrollBehavior="smooth";
    element.scrollLeft += 350;
}
    
function myfunction(){
    let element=document.querySelector('.sidebar');
    element.style.scrollBehavior="smooth";
    element.scrollLeft -= 350;
    
}
 const scrool=document.querySelector(".sidebar");

 scrool.addEventListener("wheel",(e)=>{
     e.preventDefault();
     if(1<2){
         scrool.style.scrollBehavior="smooth";
         scrool.scrollLeft+= e.deltaY;
     }else{
         scrool.scrollLeft-= e.deltaY;
     }
 })
 
 const form = document.getElementById('form');
 const result = document.getElementById('result');
 
 form.addEventListener('submit', function(e) {
   e.preventDefault();
   const formData = new FormData(form);
   const object = Object.fromEntries(formData);
   const json = JSON.stringify(object);
   result.innerHTML = "Please wait..."
 
     fetch('https://api.web3forms.com/submit', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
             },
             body: json
         })
         .then(async (response) => {
             let json = await response.json();
             if (response.status == 200) {
                 alert("Form submitted successfully") ;
             } else {
                 console.log(response);
                 result.innerHTML = "Done";
             }
         })
         .catch(error => {
             console.log(error);
             result.innerHTML= alert("Something went wrong!");
         })
          .then(function() {
             form.reset();
             setTimeout(() => {
                 result.style.display = "none";
             }, 3000);
         });
 });