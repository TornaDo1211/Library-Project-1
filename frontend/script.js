// function to get all books from the API
async function getGame() {
    try {
        const response = await axios.get('http://127.0.0.1:5000/games');
        const booksList = document.getElementById('game-list');
        booksList.innerHTML = ''; // Clear existing list

        response.data.books.forEach(game => {
            booksList.innerHTML += `
                <div class="book-card">
                    <h3>${game.title}</h3>
                    <p>Genre: ${game.genre}</p>
                    <p>Price: ${game.price}</p>
                    <p>Quantity: ${game.quantity}</p>
                </div>
            `;
        });
    } catch (error) {
        console.error('Error fetching games:', error);
        alert('Failed to load games');
    }
}

async function addGame(){
    const title = document.getElementById('game-title').value;
    const genre = document.getElementById('game-genre').value;
    const price = document.getElementById('game-price').value;
    const quantity = document.getElementById('game-quantity').value;

    try {
        await axios.post('http://127.0.0.1:5000/games', {
            title: title,
            genre: genre,
            price: price,
            quantity: quantity
        });

        document.getElementById('game-title').value = '';
        document.getElementById('game-genre').value = '';
        document.getElementById('game-price').value = '';
        document.getElementById('game-quantity').value = '';

        getGame();

        alert('Game added successfully!');
    } catch (error){
        console.error('Error adding game:', error);
        alert('Failed to add game');
    }
}

document.addEventListener('DOMContentLoaded', getGame);

// function to add a new book to the database
// async function addBook() {
//     const title = document.getElementById('book-title').value;
//     const author = document.getElementById('book-author').value;
//     const year_published = document.getElementById('book-year-published').value;
//     const types = document.getElementById('book-type').value;

//     try {
//         await axios.post('http://127.0.0.1:5000/books', {
//             title: title,
//             author: author,
//             year_published: year_published,
//             types: types
//         });
        
//         // Clear form fields
//         document.getElementById('book-title').value = '';
//         document.getElementById('book-author').value = '';
//         document.getElementById('book-year-published').value = '';
//         document.getElementById('book-type').value = '';

//         // Refresh the books list
//         getBooks();
        
//         alert('Book added successfully!');
//     } catch (error) {
//         console.error('Error adding book:', error);
//         alert('Failed to add book');
//     }
// }

// // Load all books when page loads
// document.addEventListener('DOMContentLoaded', getBooks);