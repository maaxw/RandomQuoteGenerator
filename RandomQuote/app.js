var quotes = [
  'I love you the more in that I believe you had liked me for my own sake and for nothing else. - John Keats',
 'You cannot shake hands with a clenched fist.Indira Gandhi',
 'There is no charm equal to tenderness of heart. - Jane Austen',
 'Learning never exhausts the mind. - Leonardo da Vinci',
 'The only journey is the one within. - Rainer Maria Rilke',
 'Think in the morning. Act in the noon. Eat in the evening. Sleep in the night. - William Blake'
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

console.log(randomNumber);
