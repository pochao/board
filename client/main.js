var API_URI = 'https://boards-api.now.sh/board';
var boardElement = document.getElementById('board');
var form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  var formData = new FormData(form);
  var name = formData.get('name');
  var content = formData.get('content');

  var board = {
    name,
    content
  }

  fetch(API_URI, {
    method: 'POST',
    body: JSON.stringify(board),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => {
    if (res.ok) {
      form.reset();
      listAllBoards();
    }
  })
  .catch(err => console.log(err));
});

listAllBoards();

function listAllBoards() {
  boardElement.innerHTML = '';

  fetch(API_URI)
  .then(res => res.json())
  .then(boards => {
    boards.forEach(board => {
      var div = document.createElement('div');

      var bName = document.createElement('h3');
      bName.textContent = board.name;

      var bContent = document.createElement('p');
      bContent.textContent = board.content;

      div.appendChild(bName);
      div.appendChild(bContent);
      boardElement.appendChild(div);
    });
  }).catch(err => console.log(err));
}

