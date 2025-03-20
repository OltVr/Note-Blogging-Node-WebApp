// window.onload = function () {
//     fetch('/api/notes')
//       .then(response => response.json())
//       .then(notes => {
//         const notesList = document.getElementById('notesList');
//         notes.forEach(note => {
//           const li = document.createElement('li');
//           li.textContent = note.title;
//           const content = document.createElement('p');
//           content.textContent = note.content;
//           li.appendChild(content);
//           notesList.appendChild(li);
//         });
//       })
//       .catch(error => console.log('Error:', error));
//   };
  

// document.getElementById('noteForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission behavior

//     // Get the form data
//     const title = document.getElementById('title').value;
//     const content = document.getElementById('content').value;

//     // Create a new note object
//     const newNote = {
//         title: title,
//         content: content
//     };

//     // Send the POST request to create the new note
//     fetch('/api/notes', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newNote)
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();  // Parse JSON if response is OK
//     })
//     .then(data => {
//         console.log(data);  // Check what data is returned from the backend
//         const notesList = document.getElementById('notesList');
//         const li = document.createElement('li');
//         const content = document.createElement('p');

//         li.textContent = data.newNote.title;
//         content.textContent = data.newNote.content;

//         li.appendChild(content);
//         notesList.appendChild(li);

//         // Clear form after submission
//         document.getElementById('title').value = '';
//         document.getElementById('content').value = '';
//     })
//     .catch(error => {
//         console.error('Error:', error);  // Catch any network or server errors
//     });
// });

window.onload = function () {
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = '<p>Sorry, the note service is down for now.</p>';
};

document.getElementById('noteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    alert('Sorry, the note service is down for now.');
});