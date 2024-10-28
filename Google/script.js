
var input = document.getElementById('inpt');

async function startConverting() {

  if ('webkitSpeechRecognition' in window) {
    var speechRecognizer = new webkitSpeechRecognition();
    speechRecognizer.continuous = true;
    speechRecognizer.interimResults = true;
    speechRecognizer.lang = 'en-US';
    speechRecognizer.start();

    var finalTranscripts = '';

    speechRecognizer.onresult = function (event) {
      var interimTranscripts = '';
      for (var i = event.resultIndex; i < event.results.length; i++) {
        var transcript = event.results[i][0].transcript;
        transcript.replace("\n", "<br>");
        if (event.results[i].isFinal) {
          finalTranscripts += transcript;
        } else {
          interimTranscripts += transcript;
        }
      }
      input.value = finalTranscripts + interimTranscripts;
      window.location.href = `https://www.google.com/search?q=${input.value}`
    };
    speechRecognizer.onerror = function (event) {

    };
  } else {
    console.log('Your browser is not supported. Please download Google chrome or Update your Google chrome!!');
  }
}
function googleTranslateElementInit() {
  new google.translate.TranslateElement({ pageLanguage: 'en' }, 'language');
}

document.getElementById('search1').addEventListener('click', () => {
  window.location.href = `https://www.google.com/search?q=${input.value}`
});

/**
 * This script adds a "Ashish kumar" badge to your repl when seen in full-browser view
 */

(function replitBadge(theme = 'dark', position = 'bottom-left') {
  // Suppress badge in ReplView
  if (window.location.hostname.split('.')[1] === 'id') {
    return;
  }

  // define positions
  // helps reduce polluting css classes
  const offset = '1.5rem';
  const validPositions = {
    'top-left': { top: offset, left: offset },
    'top-right': { top: offset, right: offset },
    'bottom-left': { bottom: offset, left: offset },
    'bottom-right': { bottom: offset, right: offset },
  };

  // ensure positions are valid
  if (!validPositions.hasOwnProperty(position)) {
    console.warn(
      `${position} is not a valid position, defaulting to bottom-left`,
    );
    position = 'bottom-left';
  }

  // create link & styles
  const badgeAnchor = document.createElement('a');
  Object.assign(badgeAnchor, {
    target: '_blank',
    href: '/__repl?utm_medium=webview_badge',
  });

  // create badge image & styles
  const badgeImage = document.createElement('img');
  // badgeImage.src = `https://signature.freefire-name.com/img.php?f=10&t=Ashish%20Kumar?theme=${theme}`;
  badgeImage.src = `https://signature.freefire-name.com/img.php?f=10&t=Ashish%20Kumar`;
  badgeImage.id = 'replitBadge';
  Object.assign(badgeImage.style, validPositions[position]);

  // inject styles
  document.head.insertAdjacentHTML(
    'beforeend',
    `
        <style>
          #replitBadge {
            position: fixed;
            cursor: pointer;
            z-index: 100;
            transition: transform 100ms ease-in-out;
            height: 45px;
            width: 152px;
          }
  
          #replitBadge:hover {
            transform: scale(1.05);
          }
        </style>
      `,
  );

  // append badge to page
  badgeAnchor.appendChild(badgeImage);
  document.body.appendChild(badgeAnchor);
})(
  document.currentScript.getAttribute('theme'),
  document.currentScript.getAttribute('position'),
);

const setting_id = document.querySelector('#setting_up');
const body = document.querySelector('body');
const apps_box = document.querySelector('.apps_box');

function sett() {
  setting_id.classList.toggle('setting_up');
}

function mode() {
  body.classList.toggle('bodychange');
}

function apps() {
  apps_box.classList.toggle('setting_up');
}