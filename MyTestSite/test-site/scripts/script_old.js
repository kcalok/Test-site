const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'images/logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)
function myfunction(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
	   var d = JSON.parse(xhttp.responseText);
       d.forEach(people => {
	   
	   const d1 = document.createElement('div')
	   d1.setAttribute('id', '101')
	   const h3 = document.createElement('h3')
	   h3.textContent = people.name
	   d1.appendChild(h3)
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
	
	const a = document .createElement('a')
	var text = 'ViewMore...'
	
	a.setAttribute('id','details')
	a.setAttribute('title', `${text}`)
	a.textContent = `${text}`
	p.appendChild(a)
	
	

document.getElementById('details').addEventListener('click', myfunction);	
	 	 
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}



request.send()






