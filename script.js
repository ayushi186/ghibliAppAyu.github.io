const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src = 'logo.png';
const container = document.createElement('div')
container.setAttribute('class', 'container');
app.appendChild(logo);
app.appendChild(container);

async function getMovieData() {
    const res = await fetch(`https://ghibliapi.herokuapp.com/films`);
    const data = await res.json();
    console.log(data);
    return data;
  }
  
function display(data) {
    // Begin accessing JSON data here
      data.forEach((movie) => {
          const card = document.createElement('div');
          card.setAttribute('class', 'card');
   // Create an h1 and set the text content to the film's title
         const h1 = document.createElement('h1')
         h1.textContent = movie.title
         const p = document.createElement('p')
         movie.description = movie.description.substring(0, 300) // Limit to 300 chars
         p.textContent = `${movie.description}...` // End with an ellipses
       
         // Append the cards to the container element
         container.appendChild(card)
       
         // Each card will contain an h1 and a p
         card.appendChild(h1)
         card.appendChild(p)
        
    
  });
}

  window.onload = async function(){
    data = await getMovieData();
    display(data);
  }