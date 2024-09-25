let ul = document.getElementById('redesSociales');
let h1 = document.getElementById('userName');
let p = document.getElementById('description');
let links = document.getElementById('links');

var bolder1 = `<span itemprop="name"><strong>Ailen Grimaldi</strong></span>`;
var bolder2 = `<span itemprop="name"><strong>abogada y programadora</strong></span>`;

document.fonts.ready.then(() => {
    document.body.classList.remove('hidden');
})

let user = {
    redesSociales: [
        {
            icon: './assets/linkedin.png',
            link: 'https://www.linkedin.com/in/ailenrociogrimaldi/',
            alt: 'linkedin',
            itemprop: 'sameAs'
        },
        {
            icon: './assets/github.png',
            link: 'https://github.com/ail3ngrimaldi',
            alt: 'github'
        },
        {
            icon: './assets/twitter.png',
            link: 'https://twitter.com/cuasiboga',
            alt: 'twitter'
        },
        {
            icon: './assets/email.png',
            link: 'mailto:ailenrgrimaldi@gmail.com?subject=Mail from ',
            alt: 'email',
            itemprop: 'email'
        }
    ],
    name: '@ailenrg',
    description: 'Hola! Mi nombre es ' + bolder1 + ', soy ' + bolder2 + ', en constante crecimiento y aprendizaje. Links de interés:',
}

h1.innerHTML = user.name;
p.innerHTML = user.description;

let red = '';

function redes() {
    for (let i = 0; i < user.redesSociales.length; i++) {
        red = `<li><a href=${user.redesSociales[i].link}>
        <img src=${user.redesSociales[i].icon} alt=${user.redesSociales[i].alt} />
        </a></li>`;
        ul.innerHTML += red;
    }
}

redes();

document.addEventListener('DOMContentLoaded', function () {
    window.amplitude.track('view:linktree');

    function handleCtaClick(event) {
        event.preventDefault();
        let redirectUrl = new URL('https://waitlist.virto.network/');
        redirectUrl.searchParams.set('b', 'b-one');

        if (event.currentTarget.classList.contains('track-superior-cta')) {
            window.amplitude.track('linktree:click-superior-cta');
        } else if (event.currentTarget.classList.contains('track-inferior-cta')) {
            window.amplitude.track('linktree:click-inferior-cta');
        }

        window.open(redirectUrl.toString(), '_blank');
    }

    // Añadir event listeners a los CTA
    let ctas = document.querySelectorAll('.track-superior-cta, .track-inferior-cta');
    ctas.forEach((cta) => {
        cta.addEventListener('click', handleCtaClick);
    });

    let telegram = document.getElementById("telegram");
    telegram.addEventListener('click', (event) => {
        event.preventDefault();
        let redirectUrl = new URL('https://t.me/+573107887042');
        const newWindow = window.open(redirectUrl, '_blank');
        amplitude.track('linktree:click-telegram');
        setTimeout(function() {
            newWindow.location = redirectUrl.toString();
        }, 200);
    });

    let whatsapp = document.getElementById("whatsapp");
    whatsapp.addEventListener('click', (event) => {
        event.preventDefault();
        let redirectUrl = new URL('https://api.whatsapp.com/send?phone=573107887042');
        const newWindow = window.open(redirectUrl, '_blank');
        amplitude.track('linktree:click-whatsapp');
        setTimeout(function() {
            newWindow.location = redirectUrl.toString();
        }, 200);
    });
});
