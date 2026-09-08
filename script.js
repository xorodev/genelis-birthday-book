'use strict';

var BIRTH_DAY = 7;
var BIRTH_MONTH = 9;
var BIRTH_YEAR = 2006;

var PAGES = [
  {
    kind: 'Página 01',
    title: 'Un libro pequeño, hecho para usted',
    paragraphs: [
      'A veces la distancia nos hace buscar formas especiales de decir lo que sentimos, porque un simple mensaje no alcanza para todo lo bonito que va naciendo al ir conociéndola.',
      'Por eso quise crearle este pequeño rincón: para reunir en palabras la ilusión que me da descubrir la persona increíble que es usted y desearle un cumpleaños inolvidable.'
    ]
  },
  {
    kind: 'Página 02',
    title: 'Su nombre',
    poem: 'Poco a poco su nombre se volvió mi palabra favorita,\ntres sílabas que leo al platicar y me cambian el día por completo.\n\nGenelis: no necesita más adornos,\nle basta con sonar en mi mente para traerme tranquilidad,\ny desde que la voy conociendo,\nsu nombre siempre me saca una sonrisa.'
  },
  {
    kind: 'Página 03',
    title: 'Su presencia',
    poem: 'Cada foto suya o detalle que voy descubriendo de usted\ntiene una gracia especial que no se puede imitar.\n\nMe gusta imaginar el viento de México acompañando su caminar,\ncon esa sencillez y elegancia tan suyas,\ndemostrando que no hace falta estar cerca\npara notar lo linda que es en todo sentido.'
  },
  {
    kind: 'Página 04',
    title: 'Sus ojos',
    poem: 'En cada mirada que deja ver en sus fotos,\nsus ojos guardan una sinceridad que enamora.\n\nTienen esa luz serena y transparente\nque demuestra lo lindo que es su corazón.\n\nSi el horizonte tuviera que elegir un reflejo\ndel cual sentirse orgulloso,\nsin duda elegiría la claridad de su mirada.'
  },
  {
    kind: 'Página 05',
    title: 'Su sonrisa',
    paragraphs: [
      'Aunque aún no he tenido la fortuna de ver una foto suya sonriendo de verdad, me da mucha ilusión imaginar la luz que debe transmitir su rostro cuando algo le alegra el alma.',
      'Saber que a veces, al leer un mensaje bonito, se le dibuja una pequeña sonrisa al otro lado de la pantalla, es de las cosas que más feliz me hacen en el día.'
    ]
  },
  {
    kind: 'Página 06',
    title: 'Sus manos',
    poem: 'Aunque la distancia no me permita ver de cerca su día a día,\nsé que sus manos son el reflejo de lo que usted es:\ndedicadas, creativas y cuidadosas con todo lo que le importa.\n\nAdmiro mucho la dedicación con la que construye sus metas,\ny me llena de orgullo ver lo capaz y talentosa que es.'
  },
  {
    kind: 'Página 07',
    title: 'Su voz',
    paragraphs: [
      'Aunque aún no he tenido la dicha de escuchar el tono de su voz, me basta con leer la serenidad y amabilidad de sus mensajes. Estoy seguro de que la calma que transmite al escribir refleja exactamente la paz que lleva dentro.'
    ]
  },
  {
    kind: 'Página 08',
    title: 'Lo distinta que es',
    poem: 'Mientras más platico con usted, más me doy cuenta de que no hay nadie igual.\nSi hubiera un molde para hacer personas como usted,\nel mundo estaría lleno de su luz.\n\nPero no lo hay.\nExiste una sola Genelis,\ny qué fortuna tan bonita la mía haber coincidido con usted en esta vida.'
  },
  {
    kind: 'Página 09',
    title: 'Su manera de pensar',
    paragraphs: [
      'Me fascina la forma en que ve las cosas: la inteligencia con la que se expresa, cómo analiza cada tema y la madurez que demuestra en nuestras conversaciones.',
      'Cada día que hablamos me doy cuenta de que detrás de su linda presencia hay una mente brillante que me da más ganas de seguir conociendo.'
    ]
  },
  {
    kind: 'Página 10',
    title: 'Su risa',
    poem: 'Saber que le robo una pequeña risa al otro lado de la pantalla\nes de mis momentos favoritos.\n\nMe gusta imaginar la alegría sincera\nque se le dibuja en el rostro,\ny saber que, a pesar de los kilómetros,\npuedo sacarle un detalle bonito en su día.'
  },
  {
    kind: 'Página 11',
    title: 'Su forma de tratar a los demás',
    paragraphs: [
      'A medida que la voy conociendo, noto la calidez y el respeto con el que se expresa de los demás. Posee una gentileza genuina y unos valores admirables.',
      'Esa belleza interior, la de un alma noble y educada, es la que más me cautiva de usted.'
    ]
  },
  {
    kind: 'Página 12',
    title: 'Lo que voy descubriendo en usted',
    poem: 'No veo solo a una mujer hermosa en sus fotos,\nveo a alguien maravillosa y completa:\ncon metas grandes, con una ternura única,\ncon dudas que la hacen real y certezas que admiro.\n\nIr descubriendo cada faceta suya, de a poco y a la distancia,\nes el viaje más bonito en el que me he embarcado.'
  },
  {
    kind: 'Página 13',
    title: 'El valor de ir despacio',
    poem: 'Conocerla poco a poco ha sido un camino hermoso,\nsin prisa, valorando cada detalle y cada mensaje que me comparte.\n\nDisfruto mucho este ritmo tranquilo con el que nos vamos conociendo,\nporque las cosas más auténticas y valiosas de la vida\nsiempre se construyen con paciencia y respeto.'
  },
  {
    kind: 'Página 14',
    title: 'Gracias por esta coincidencia',
    paragraphs: [
      'A veces me pongo a pensar en lo increíble que es habernos encontrado a pesar de los kilómetros, entre tantas personas y lugares.',
      'Simplemente me alegra la vida que usted exista y que el destino me haya dado la oportunidad de ir conociéndola.'
    ]
  },
  {
    kind: 'Página 15',
    title: 'Lo que le deseo',
    poem: 'En este nuevo año de vida le deseo mañanas llenas de paz,\nnoches tranquilas para soñar sin preocupaciones,\ngente a su alrededor que sepa valorar el tesoro que es usted,\ny todo el tiempo del mundo\npara alcanzar cada meta que su corazón se proponga.'
  },
  {
    kind: 'Página 16',
    title: 'Más allá de lo hermosa que es',
    paragraphs: [
      'Que usted es sumamente bonita salta a la vista desde el primer segundo. Pero lo que de verdad enamora es descubrir su sencillez, su sentido del humor y la sinceridad que demuestra en cada mensaje.'
    ]
  },
  {
    kind: 'Página 17',
    title: 'Usted, en pocas palabras',
    poem: 'Usted es de esas personas que no necesitan hacer ruido para hacerse notar,\nque destacan por su elegancia, su bondad y su luz propia.\n\nSi tuviera que resumir lo que siento al ir conociéndola,\ndiría que es alguien que vale la pena cuidar, admirar y querer despacio.'
  },
  {
    kind: 'Página 18',
    title: 'La ilusión de lo que viene',
    paragraphs: [
      'Me emociona pensar en los días que vienen y en todas las conversaciones que aún nos faltan por compartir.',
      'Cada momento a la distancia es un paso bonito que me hace valorar cada vez más la oportunidad de coincidir con usted.'
    ]
  },
  {
    kind: 'Página 19',
    title: 'Antes de la última página',
    paragraphs: [
      'Podría seguir escribiendo páginas sobre lo bonito que es ir conociéndola, pero lo mejor es que apenas vamos comenzando y tenemos mucho tiempo por delante.',
      'Así que aquí llegamos a la página final de este pequeño detalle, la más sincera de todas.'
    ]
  },
  {
    kind: 'Página 20',
    title: '¡Feliz cumpleaños, Genelis!',
    paragraphs: [
      'Gracias por darme el espacio de formar parte de sus días y por leer estas palabras. No quiero apresurar nada ni poner ninguna presión sobre usted; solo quería que en un día tan importante supiera lo mucho que significa para mí.',
      'Feliz cumpleaños, Genelis. Que estos veinte años sean el inicio de una etapa mágica, llena de alegrías y de momentos felices.'
    ],
    signature: 'W. Rodríguez.'
  }
];

var MONTHS = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

document.addEventListener('DOMContentLoaded', function () {
  setupTheme();
  setupVault();
});

function setupTheme() {
  var toggle = document.getElementById('themeToggle');
  var metaTheme = document.querySelector('meta[name="theme-color"]');

  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function reflect(theme) {
    var isDark = theme === 'dark';
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    if (metaTheme) metaTheme.setAttribute('content', isDark ? '#1c1320' : '#faf4ec');
  }

  reflect(currentTheme());

  toggle.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    reflect(next);
    try { localStorage.setItem('genelis-theme', next); } catch (e) { }
  });
}

function setupVault() {
  var daySelect = document.getElementById('day');
  var monthSelect = document.getElementById('month');
  var yearSelect = document.getElementById('year');
  var form = document.getElementById('vaultForm');
  var card = document.querySelector('.vault-card');
  var errorEl = document.getElementById('vaultError');

  fillSelect(daySelect, 'Día', range(1, 31));
  fillSelect(monthSelect, 'Mes', MONTHS.map(function (name, i) { return { value: i + 1, label: name }; }));
  var thisYear = new Date().getFullYear();
  fillSelect(yearSelect, 'Año', range(thisYear - 60, thisYear).reverse());

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var d = parseInt(daySelect.value, 10);
    var m = parseInt(monthSelect.value, 10);
    var y = parseInt(yearSelect.value, 10);

    if (!d || !m || !y) {
      showError('¡Por favor ingrese una fecha válida!');
      return;
    }

    if (d === BIRTH_DAY && m === BIRTH_MONTH && y === BIRTH_YEAR) {
      unlockGift();
    } else {
      showError('Fecha incorrecta… inténtelo nuevamente.');
      card.classList.remove('shake');
      void card.offsetWidth;
      card.classList.add('shake');
    }
  });

  function showError(message) {
    errorEl.textContent = message;
  }

  function unlockGift() {
    var vaultScreen = document.getElementById('vaultScreen');
    var celebrationScreen = document.getElementById('celebrationScreen');

    vaultScreen.remove();

    celebrationScreen.hidden = false;
    var title = celebrationScreen.querySelector('.celebration-title');
    title.setAttribute('tabindex', '-1');
    requestAnimationFrame(function () { title.focus(); });

    var startBtn = document.getElementById('startBook');
    startBtn.addEventListener('click', function () {
      celebrationScreen.remove();
      openBook();
    }, { once: true });
  }
}

function fillSelect(select, placeholder, items) {
  var fragment = document.createDocumentFragment();

  var empty = document.createElement('option');
  empty.value = '';
  empty.textContent = placeholder;
  empty.disabled = true;
  empty.selected = true;
  fragment.appendChild(empty);

  items.forEach(function (item) {
    var option = document.createElement('option');
    if (typeof item === 'object') {
      option.value = item.value;
      option.textContent = item.label;
    } else {
      option.value = item;
      option.textContent = item;
    }
    fragment.appendChild(option);
  });

  select.appendChild(fragment);
}

function range(start, end) {
  var out = [];
  for (var i = start; i <= end; i++) out.push(i);
  return out;
}

function openBook() {
  var bookScreen = document.getElementById('bookScreen');
  var pageContainer = document.getElementById('pageContainer');
  var prevBtn = document.getElementById('prevBtn');
  var nextBtn = document.getElementById('nextBtn');
  var dotsContainer = document.getElementById('pageDots');

  bookScreen.hidden = false;

  var current = 0;
  buildDots();
  renderPage(current);
  pageContainer.focus();

  prevBtn.addEventListener('click', function () { goTo(current - 1); });
  nextBtn.addEventListener('click', function () { goTo(current + 1); });

  dotsContainer.addEventListener('click', function (event) {
    var dot = event.target.closest('[data-index]');
    if (!dot) return;
    goTo(parseInt(dot.getAttribute('data-index'), 10));
  });

  document.addEventListener('keydown', function (event) {
    if (bookScreen.hidden) return;
    if (event.key === 'ArrowRight') goTo(current + 1);
    if (event.key === 'ArrowLeft') goTo(current - 1);
  });

  var touchStartX = null;
  pageContainer.addEventListener('touchstart', function (event) {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });

  pageContainer.addEventListener('touchend', function (event) {
    if (touchStartX === null) return;
    var deltaX = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(deltaX) > 45) {
      goTo(deltaX < 0 ? current + 1 : current - 1);
    }
    touchStartX = null;
  }, { passive: true });

  function goTo(index) {
    if (index < 0 || index >= PAGES.length || index === current) return;
    current = index;
    renderPage(current);
  }

  function renderPage(index) {
    var page = PAGES[index];
    var fragment = document.createDocumentFragment();

    var label = document.createElement('p');
    label.className = 'page-label';
    label.textContent = page.kind;
    fragment.appendChild(label);

    var title = document.createElement('h2');
    title.className = 'page-title';
    title.textContent = page.title;
    fragment.appendChild(title);

    if (page.poem) {
      var poemEl = document.createElement('p');
      poemEl.className = 'page-body is-poem';
      poemEl.textContent = page.poem;
      fragment.appendChild(poemEl);
    } else {
      page.paragraphs.forEach(function (text) {
        var p = document.createElement('p');
        p.className = 'page-body';
        p.textContent = text;
        fragment.appendChild(p);
      });
    }

    if (page.signature) {
      var sig = document.createElement('p');
      sig.className = 'page-signature';
      sig.textContent = '— ' + page.signature;
      fragment.appendChild(sig);
    }

    if (index === PAGES.length - 1) {
      var restartBtn = document.createElement('button');
      restartBtn.type = 'button';
      restartBtn.className = 'btn-secondary';
      restartBtn.textContent = '¡Volver al principio!';
      restartBtn.addEventListener('click', function () { goTo(0); });
      fragment.appendChild(restartBtn);
    }

    pageContainer.textContent = '';
    pageContainer.appendChild(fragment);

    pageContainer.classList.remove('turning');
    void pageContainer.offsetWidth;
    pageContainer.classList.add('turning');

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === PAGES.length - 1;
    updateDots(index);
  }

  function buildDots() {
    var fragment = document.createDocumentFragment();
    PAGES.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'dot';
      dot.setAttribute('data-index', String(i));
      dot.setAttribute('aria-label', 'Ir a la página ' + (i + 1) + ' de ' + PAGES.length);
      fragment.appendChild(dot);
    });
    dotsContainer.appendChild(fragment);
  }

  function updateDots(index) {
    var dots = dotsContainer.children;
    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.toggle('active', i === index);
    }
  }
}