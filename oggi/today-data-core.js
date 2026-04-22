(function(){
  "use strict";

  window.AGENDA_TODAY_DATA = {
    byDay: {},

    personFallbacks: [
      { name: "Agnès Varda", role: "regista e fotografa", country: "Francia", years: "1928–2019", work: "Senza tetto né legge", note: "Un cinema libero, curioso e profondamente umano: perfetto per ricordare quanto lo sguardo conti più del budget." },
      { name: "Vittorio Storaro", role: "direttore della fotografia", country: "Italia", years: "1940–", work: "Apocalypse Now", note: "Quando pensi alla luce come drammaturgia, Storaro è sempre un ottimo punto di partenza." },
      { name: "Maya Deren", role: "regista sperimentale", country: "Ucraina / USA", years: "1917–1961", work: "Meshes of the Afternoon", note: "Ricorda che anche un film breve e povero di mezzi può diventare linguaggio puro." },
      { name: "Sergio Leone", role: "regista", country: "Italia", years: "1929–1989", work: "C'era una volta il West", note: "Leone è una scuola perfetta per capire il peso del tempo, dell'attesa e del dettaglio." }
    ],

    historyFallbacks: [
      { year: 1895, title: "Il cinematografo dei Lumière entra nella storia.", text: "Le prime proiezioni pubbliche trasformano un'invenzione tecnica in una forma di spettacolo e memoria condivisa." },
      { year: 1902, title: "Georges Méliès mostra che il cinema può inventare mondi.", text: "Con il trucco, il montaggio e la fantasia, il film smette di limitarsi a registrare il reale e comincia a costruirlo." },
      { year: 1927, title: "Il sonoro cambia per sempre il linguaggio cinematografico.", text: "L'arrivo del parlato non sostituisce l'immagine: la costringe invece a ripensare ritmo, recitazione e montaggio." },
      { year: 1948, title: "Il neorealismo rende il quotidiano materia epica.", text: "Con corpi, strade e volti veri, il cinema ritrova una forza morale che influenzerà autori in tutto il mondo." },
      { year: 1954, title: "Il cinema giapponese diventa riferimento globale.", text: "Regia, composizione e gestione del tempo mostrano a Hollywood e all'Europa una via diversa per raccontare l'azione." },
      { year: 1960, title: "Il moderno entra definitivamente nel cinema d'autore.", text: "Soggettività, crisi interiore e forma diventano racconto: da qui in poi il film non deve più spiegare tutto." },
      { year: 1968, title: "La fantascienza dimostra di poter essere anche filosofia visiva.", text: "Effetti, ellissi e immagini simboliche alzano l'asticella di ciò che il grande pubblico può accettare e amare." },
      { year: 1977, title: "Il blockbuster contemporaneo trova una nuova grammatica.", text: "Avventura, marketing, immaginario seriale e ritmo spettacolare ridisegnano l'industria globale." },
      { year: 1982, title: "Il cinema fantastico scopre l'ambiguità del futuro.", text: "Da questo punto in poi la fantascienza non è solo meraviglia: può essere malinconia, memoria e dubbio morale." },
      { year: 1999, title: "L'era digitale cambia il modo di pensare spazio e montaggio.", text: "Effetti invisibili, post-produzione e immagini ibride ridefiniscono il confine tra ripresa e costruzione." }
    ],

    filmFallbacks: [
      { title: "8½", subtitle: "Federico Fellini · 1963", text: "Un film da rivedere quando vuoi capire come una crisi creativa possa diventare forma, ritmo e invenzione pura.", why: "Utile per chi scrive, dirige o monta: mostra come il caos interiore possa trasformarsi in struttura." },
      { title: "La finestra sul cortile", subtitle: "Alfred Hitchcock · 1954", text: "Una lezione perfetta sul punto di vista: quasi tutto passa da uno spazio solo, eppure il mondo sembra immenso.", why: "Ti ricorda che regia e sguardo valgono spesso più di cento location." },
      { title: "Nuovo Cinema Paradiso", subtitle: "Giuseppe Tornatore · 1988", text: "Quando vuoi ricordare perché il cinema resta anche memoria sentimentale e comunitaria.", why: "Perfetto per SDAC: mette insieme formazione, passione e destino di chi guarda e di chi fa film." },
      { title: "Persona", subtitle: "Ingmar Bergman · 1966", text: "Un film esigente, ma ideale per capire quanto il volto umano possa bastare a reggere tutto il racconto.", why: "Da rivedere quando vuoi lavorare su sottrazione, silenzio e tensione psicologica." },
      { title: "Il padrino", subtitle: "Francis Ford Coppola · 1972", text: "Regia, direzione attori, luce e montaggio trovano un equilibrio quasi irreale.", why: "Ogni revisione aiuta a capire come si costruisce autorevolezza scena dopo scena." },
      { title: "In the Mood for Love", subtitle: "Wong Kar-wai · 2000", text: "Un esempio sublime di come atmosfera, musica e ellissi possano raccontare il non detto.", why: "Utile per chi vuole studiare il valore drammatico di tempi morti, ripetizioni e dettagli." },
      { title: "Ladri di biciclette", subtitle: "Vittorio De Sica · 1948", text: "Cinema essenziale, diretto, emotivo: una lezione che non smette di parlare ai filmmaker.", why: "Fa bene rivederlo quando vuoi capire come rendere universale una storia minima." },
      { title: "Apocalypse Now", subtitle: "Francis Ford Coppola · 1979", text: "Visione totalizzante: un film che insegna quanto il set possa essere rischio, ossessione e conquista.", why: "Perfetto se vuoi ragionare su suono, fotografia e senso della discesa nell'incubo." },
      { title: "La conversazione", subtitle: "Francis Ford Coppola · 1974", text: "Un thriller costruito sul suono e sul fuori campo, ancora modernissimo.", why: "Ottimo per chi vuole capire che il sound design può essere il vero motore narrativo." },
      { title: "Ran", subtitle: "Akira Kurosawa · 1985", text: "Colore, movimento e geometria dello spazio diventano tragedia visiva.", why: "Da recuperare quando vuoi vedere come il caos possa essere organizzato con precisione assoluta." }
    ],

    craftFallbacks: [
      { chips: ["Messa in scena", "Blocking", "Geografia"], note: "Una scena funziona meglio quando chi guarda capisce subito dove sono i corpi, cosa vogliono e come cambia la distanza tra loro." },
      { chips: ["Montaggio", "Ritmo", "Respiro"], note: "Tagliare non significa solo accorciare: significa scegliere dove far respirare lo spettatore e dove togliergli terreno." },
      { chips: ["Fotografia", "Contrasto", "Fonte luce"], note: "Prima ancora dell'estetica, chiediti sempre da dove arriva la luce e cosa racconta del personaggio." },
      { chips: ["Sceneggiatura", "Conflitto", "Obiettivo"], note: "Ogni scena dovrebbe avere almeno una forza che spinge avanti e una che resiste." },
      { chips: ["Suono", "Fuori campo", "Ambiente"], note: "Il fuori campo sonoro può allargare il mondo del film più di qualsiasi carrello." },
      { chips: ["Recitazione", "Ascolto", "Sottotesto"], note: "Gli attori diventano più veri quando sanno cosa pensano mentre tacciono, non solo quando parlano." },
      { chips: ["Produzione", "Tempo", "Priorità"], note: "Organizzare bene non toglie creatività: la protegge, perché ti permette di usarla dove serve davvero." },
      { chips: ["Inquadratura", "Lente", "Distanza"], note: "Cambiare focale non cambia solo l'immagine: cambia il modo in cui lo spettatore percepisce relazione e spazio." }
    ],

    quoteFallbacks: [
      { text: "Il cinema è anche ciò che accade tra un'inquadratura e l'altra.", author: "parafrasi da Sergej Eisenstein", note: "Una buona idea da tenere a mente quando lavori sul montaggio." },
      { text: "Per molti autori la macchina da presa non registra soltanto: pensa.", author: "parafrasi da Alexandre Astruc", note: "Perfetta per ricordare che la regia è scrittura, non semplice esecuzione." },
      { text: "L'immagine deve conservare un margine di mistero.", author: "parafrasi da Andrej Tarkovskij", note: "Non spiegare tutto: lascia che una parte del film continui a vivere nello spettatore." },
      { text: "Quando una scena funziona, spesso è perché il dettaglio è stato preso sul serio.", author: "parafrasi da Stanley Kubrick", note: "Un promemoria utile per non trattare mai nulla come riempitivo." },
      { text: "Ogni film deve trovare il proprio ritmo interiore.", author: "parafrasi da Federico Fellini", note: "Non tutti i racconti respirano allo stesso modo: ascolta il materiale." },
      { text: "La regia è anche scelta morale dello sguardo.", author: "parafrasi da Agnès Varda", note: "Ciò che mostri e come lo mostri dice sempre qualcosa di te." }
    ],

    heroFallbacks: [
      "SDAC · cinema, memoria, visione",
      "SDAC · regia, montaggio, fotografia",
      "SDAC · una giornata da guardare meglio",
      "SDAC · film, tecnica e immaginazione"
    ]
  };
})();
