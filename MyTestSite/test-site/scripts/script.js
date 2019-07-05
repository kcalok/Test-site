const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'images/logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)


function createModal()
{
const d1 = document.createElement('div');
d1.setAttribute('class', 'modal');
d1.setAttribute('id', 'myModal');

const d2 = document.createElement('div');
d2.setAttribute('class', 'modal-content');

    const span = document.createElement('span')
	span.setAttribute('class', 'close')
	span.textContent = 'x'
	d2.appendChild(span)
	d1.appendChild(d2);
document.getElementById('root').append(d1);
}	
	
function myfunction(){
createModal();

//Show the modal
// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
modal.style.display = "block";
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    
	if (this.readyState == 4 && this.status == 200) {
	
       // Typical action to be performed when the document is ready:
	   var d = JSON.parse(xhttp.responseText);
	    modal.style.display = "block";
       d.forEach(people => {
	  const h3 = document.createElement('p')
	   h3.textContent = people.name
	   document.querySelector('.modal-content').appendChild(h3)
	   })
    }
};
xhttp.open("GET", "https://ghibliapi.herokuapp.com/people/", true);
xhttp.send();


}

var request = new XMLHttpRequest()
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = movie.title
	const p = document.createElement('p')
      movie.description = movie.description.substring(0, 300)
      p.textContent = `${movie.description}...`
	  container.appendChild(card)
      card.appendChild(h1)
	  card.appendChild(p)
	  
		const h3 = document.createElement('h3')
		h3.textContent = movie.director
		p.appendChild(h3)
	
	const a = document.createElement('button')
	var text = 'ViewMore...'
	a.setAttribute('class','myBtn')
	a.setAttribute('text', `${text}`)
	a.textContent = `${text}`
	p.appendChild(a)
	
	
 	 
    });
var btns = document.getElementsByClassName('myBtn');

for (var i = 0 ;i < btns.length ; i++)
{
    btns[i].addEventListener('click', myfunction)
}
	
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}



request.send()






