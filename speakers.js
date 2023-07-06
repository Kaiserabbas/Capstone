/* eslint prefer-arrow-callback: 0 */
/* eslint func-names: ["error", "never"] */

/* eslint-disable no-unused-vars */
// Javascript Object
const speakers = [
  {
    cardImage: './assests/qaisar.png',
    name: 'Qaisar Abbas',
    role: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    details: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006.',
  },
  {
    cardImage: './assests/SohYeong.png',
    name: 'SohYeong Noh',
    role: 'Director of Art Centre Nabi and a board member of CC Korea',
    details: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    cardImage: './assests/Lila.png',
    name: 'Lila tretikov',
    role: 'Executive Director of the Wikimedia Foundation',
    details: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.      ',
  },
  {
    cardImage: './assests/Kilnam.png',
    name: 'Kilnam Chon',
    role: 'Director of Entrepreneurial Legal Studies at Harvard Law Schoo',
    details: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    cardImage: './assests/Julia.png',
    name: 'Julia Leda',
    role: 'President of Young Pirates of Europe',
    details: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    cardImage: './assests/Ryan.png',
    name: 'Ryan Merkley',
    role: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    details: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
];

// speaker container creation and setting attributes
const speakerContainer = document.createElement('section');
speakerContainer.setAttribute('id', 'speakers');
speakerContainer.setAttribute('class', 'speakers');

// Inserting speaker container in document body
const parent = document.body;
parent.insertBefore(speakerContainer, parent.children[3]);

const featuredSpeakers = document.createElement('h1');
featuredSpeakers.setAttribute('class', 'speaker-h1');
featuredSpeakers.innerText = 'Featured Speakers';
speakerContainer.appendChild(featuredSpeakers);

const speakerHr = document.createElement('hr');
speakerHr.setAttribute('class', 'about-hr');
speakerContainer.appendChild(speakerHr);

const speakerSmallContainer = document.createElement('div');
speakerSmallContainer.setAttribute('class', 'speaker-small-container');
speakerContainer.appendChild(speakerSmallContainer);

// speaker cards creation and setting attributes
speakers.forEach(speaker => {
  const mainSpeaker = document.createElement('div');
  mainSpeaker.setAttribute('class', 'speaker');
  speakerSmallContainer.appendChild(mainSpeaker);

  const speakerImage = document.createElement('div');
  speakerImage.setAttribute('class', 'speaker-image');
  mainSpeaker.appendChild(speakerImage);

  const speakerImg = document.createElement('img');
  speakerImg.setAttribute('class', 'speaker-img');
  speakerImg.src = speaker.cardImage;
  speakerImage.appendChild(speakerImg);

  const speakerSubContainer = document.createElement('div');
  speakerSubContainer.setAttribute('class', 'sub-speaker');
  mainSpeaker.appendChild(speakerSubContainer);

  const speakerh2 = document.createElement('h2');
  speakerh2.setAttribute('class', 'speaker-h2');
  speakerh2.innerText = speaker.name;
  speakerSubContainer.appendChild(speakerh2);

  const speakerp1 = document.createElement('p');
  speakerp1.setAttribute('class', 'speaker-p-1');
  speakerp1.innerText = speaker.role;
  speakerSubContainer.appendChild(speakerp1);

  const speakerHr2 = document.createElement('hr');
  speakerHr2.setAttribute('class', 'speaker-hr-2');
  speakerHr2.innerText = speaker.role;
  speakerSubContainer.appendChild(speakerHr2);

  const speakerp2 = document.createElement('div');
  speakerp2.setAttribute('class', 'speaker-p-2');
  speakerp2.innerText = speaker.details;
  speakerSubContainer.appendChild(speakerp2);
});

document.addEventListener('DOMContentLoaded', function () {
  const thirdChild = document.querySelector('.speaker-small-container').children[2];
  thirdChild.classList.add('folded');
  const fourthChild = document.querySelector('.speaker-small-container').children[3];
  fourthChild.classList.add('folded');
  const fifthChild = document.querySelector('.speaker-small-container').children[4];
  fifthChild.classList.add('folded');
  const sixthChild = document.querySelector('.speaker-small-container').children[5];
  sixthChild.classList.add('folded');
});

const foldedButton = document.createElement('button');
foldedButton.setAttribute('class', 'more-button');
foldedButton.innerText = 'More';
speakerSmallContainer.insertBefore(foldedButton, speakerSmallContainer.children[6]);

const chevron = document.createElement('i');
chevron.setAttribute('class', 'fa-solid fa-chevron-down');
foldedButton.appendChild(chevron);

document.addEventListener('DOMContentLoaded', function () {
  const moreButton = document.querySelector('.more-button');
  moreButton.addEventListener('click', function () {
    const foldedCards = document.querySelectorAll('.speaker.folded');
    foldedCards.forEach(function (card) {
      card.style.display = card.style.display === 'flex' ? 'none' : 'flex';
    });
  });
  moreButton.addEventListener('click', function () {
    chevron.classList.toggle('fa-chevron-up');
    chevron.classList.toggle('fa-chevron-down');
  });
});

/* eslint-disable no-unused-vars */
