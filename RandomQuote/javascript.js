var quotes = [
  'I love you the more in that I believe you had liked me for my own sake and for nothing else. John Keats',
 'You cannot shake hands with a clenched fist. Indira Gandhi',
 'There is no charm equal to tenderness of heart. Jane Austen',
 'Learning never exhausts the mind. Leonardo da Vinci',
 'The only journey is the one within. Rainer Maria Rilke',
 'Think in the morning. Act in the noon. Eat in the evening. Sleep in the night. William Blake',
'The supreme art of war is to subdue the enemy without fighting. Sun Tzu',
'Honesty is the first chapter in the book of wisdom. Thomas Jefferson',
'I have not failed. I\'ve just found 10\,000 ways that won\'t work. Thomas A. Edison',
'A leader is one who knows the way, goes the way, and shows the way. John C. Maxwell',
 'In fiction, when you paint yourself into a corner, you can write a pair of suction cups onto the bottoms of your shoes and walk up the wall and out the skylight and see the sun breaking through the clouds. In nonfiction, you don\'t have that luxury. Tom Robbins',
];

function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

/* Copy to clipboard JS */
