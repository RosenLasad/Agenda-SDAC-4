(function(){
  "use strict";

  if(!window.AGENDA_TODAY_DATA) window.AGENDA_TODAY_DATA = { byDay: {} };
  if(!window.AGENDA_TODAY_DATA.byDay) window.AGENDA_TODAY_DATA.byDay = {};

  Object.assign(window.AGENDA_TODAY_DATA.byDay, {
    "05-01": {
        "person": {
            "name": "Wes Anderson",
            "birthDate": "1969-05-01",
            "note": "Regista americano dallo stile immediatamente riconoscibile: simmetrie, colori controllati e un tono sospeso tra ironia e malinconia."
        },
        "history": {
            "title": "Kinemacolor",
            "subtitle": "1908 · innovazione tecnica",
            "text": "Nel 1908 Kinemacolor, il primo processo colore cinematografico davvero praticabile sul piano commerciale, viene mostrato alla stampa a Londra: un momento tecnico fondamentale nella lunga corsa del cinema verso il colore."
        },
        "quote": {
            "author": "Jean-Luc Godard",
            "text": "Tutto ciò di cui hai bisogno per fare un film è una ragazza e una pistola.",
            "note": ""
        },
        "heroSubline": "Le prime dieci pagine decidono il destino del film"
    },
    "05-02": {
        "person": {
            "name": "Satyajit Ray",
            "birthDate": "1921-05-02",
            "note": "Maestro assoluto del cinema indiano e mondiale, autore della Trilogia di Apu e di un cinema umanissimo, elegante e profondo."
        },
        "history": {
            "title": "FILM - Iron Man",
            "subtitle": "2008 · uscita USA",
            "text": "Nel 2008 esce negli USA Iron Man: non è solo un blockbuster riuscito, è il film che inaugura ufficialmente il Marvel Cinematic Universe."
        },
        "quote": {
            "author": "Charlie Kaufman",
            "text": "Non cercare di dare al pubblico ciò che vuole. Dai al pubblico ciò che sei tu.",
            "note": ""
        },
        "heroSubline": "Non mettere mai i tuoi soldi in un film"
    },
    "05-03": {
        "person": {
            "name": "Joseph Kosinski",
            "birthDate": "1974-05-03",
            "note": "Regista americano specializzato in grande spettacolo visivo, noto per Tron: Legacy, Top Gun: Maverick e un cinema molto attento alla potenza dell’immagine."
        },
        "history": {
            "title": "FILM - Spider-Man",
            "subtitle": "2002 · uscita USA",
            "text": "Nel 2002 esce negli USA Spider-Man di Sam Raimi, uno dei titoli che hanno ridefinito il moderno cinecomic e il concetto stesso di “summer movie”."
        },
        "quote": {
            "author": "Louis B. Mayer",
            "text": "Senza stelle, i film sono solo strisce di celluloide.",
            "note": ""
        },
        "heroSubline": "Non cercare di essere interessante, cerca di essere onesto"
    },
    "05-04": {
        "person": {
            "name": "Jang Hoon",
            "birthDate": "1975-05-04",
            "note": "Regista sudcoreano noto per Rough Cut, Secret Reunion e A Taxi Driver: un autore capace di unire energia narrativa e forte impatto storico-emotivo."
        },
        "history": {
            "title": "FILM - The Mummy Returns",
            "subtitle": "2001 · uscita USA",
            "text": "Nel 2001 esce The Mummy Returns: un buon esempio del blockbuster avventuroso-fantastico dei primi Duemila, tra spettacolo, effetti digitali e grande intrattenimento."
        },
        "quote": {
            "author": "Michael Kahn",
            "text": "Le scene funzionano meglio con tre inquadrature di reazione: non di più, non di meno.",
            "note": ""
        },
        "heroSubline": "La macchina da presa deve stare dove l'occhio dello spettatore vorrebbe essere"
    },
    "05-05": {
        "person": {
            "name": "Morgan Pehme",
            "birthDate": "1978-05-05",
            "note": "Regista documentarista americano, noto soprattutto per il documentario politico Get Me Roger Stone e per uno sguardo diretto sui meccanismi del potere."
        },
        "history": {
            "title": "FILM - Mission: Impossible III",
            "subtitle": "2006 · uscita USA",
            "text": "Nel 2006 arriva Mission: Impossible III, film importante perché dà alla saga un’accelerazione più moderna, più nervosa e più da franchise contemporaneo."
        },
        "quote": {
            "author": "Sven Nykvist",
            "text": "L'ombra è importante quanto la luce. È l'ombra che dà forma e profondità al viso umano.",
            "note": ""
        },
        "heroSubline": "Se non riesci a riassumerlo in una riga, non sai di cosa stai parlando"
    },
    "05-06": {
        "person": {
            "name": "Max Ophuls",
            "birthDate": "1902-05-06",
            "note": "Grandissimo regista europeo, celebre per l’eleganza dei movimenti di macchina e per melodrammi raffinati come Lettera da una sconosciuta e Lola Montès."
        },
        "history": {
            "title": "FILM - Captain America: Civil War",
            "subtitle": "2016 · uscita USA",
            "text": "Nel 2016 esce negli USA Captain America: Civil War, uno dei punti più alti del Marvel Cinematic Universe per ampiezza corale e conflitto tra personaggi."
        },
        "quote": {
            "author": "Hans Zimmer",
            "text": "Il silenzio è la nota più potente che un compositore cinematografico possa usare.",
            "note": ""
        },
        "heroSubline": "Se segui solo il denaro, farai brutti film; se segui le buone storie, il denaro arriverà"
    },
    "05-07": {
        "person": {
            "name": "Amy Heckerling",
            "birthDate": "1954-05-07",
            "note": "Regista americana che ha segnato la commedia generazionale con film come Fast Times at Ridgemont High e Clueless."
        },
        "history": {
            "title": "FILM - The Mummy",
            "subtitle": "1999 · uscita USA",
            "text": "Nel 1999 esce The Mummy di Stephen Sommers: un film che rimette in circolo il gusto dell’avventura classica con ritmo da blockbuster anni Novanta."
        },
        "quote": {
            "author": "François Truffaut",
            "text": "I film sono più armoniosi della vita. Non ci sono ingorghi nei film, né tempi morti.",
            "note": ""
        },
        "heroSubline": "Il corpo non mente mai: se sei teso fisicamente, il personaggio risulterà finto"
    },
    "05-08": {
        "person": {
            "name": "Roberto Rossellini",
            "birthDate": "1906-05-08",
            "note": "Uno dei padri del neorealismo italiano, autore di Roma città aperta e Paisà: figura centrale per capire la rinascita morale e stilistica del cinema italiano."
        },
        "history": {
            "title": "Nasce la Famous Players Film Company",
            "subtitle": "1912 · industria del cinema",
            "text": "Nel 1912 Adolph Zukor fonda la Famous Players Film Company, nucleo da cui nascerà poi la Paramount: una data importante nella storia industriale del cinema."
        },
        "quote": {
            "author": "Paddy Chayefsky",
            "text": "L'unica ragione per cui scrivo è per scoprire cosa sto pensando.",
            "note": ""
        },
        "heroSubline": "Il grandangolo avvicina i corpi ma allontana i cuori; il teleobiettivo fa il contrario"
    },
    "05-09": {
        "person": {
            "name": "James L. Brooks",
            "birthDate": "1940-05-09",
            "note": "Regista, sceneggiatore e produttore americano, autore di Voglia di tenerezza e Qualcosa è cambiato, capace di unire ironia, malinconia e precisione psicologica."
        },
        "history": {
            "title": "Moulin Rouge! apre Cannes",
            "subtitle": "2001 · Festival di Cannes",
            "text": "Nel 2001 Moulin Rouge! apre il Festival di Cannes: un ottimo esempio di musical reinventato, eccesso visivo e cinema che osa."
        },
        "quote": {
            "author": "Louis B. Mayer",
            "text": "Noi vendiamo sogni, non spazzatura. Finché la gente vorrà sognare, noi faremo affari.",
            "note": ""
        },
        "heroSubline": "Scrivi la storia che pagaresti per vedere al cinema"
    },
    "05-10": {
        "person": {
            "name": "Ettore Scola",
            "birthDate": "1931-05-10",
            "note": "Tra i più grandi registi italiani del Novecento, autore di capolavori come C’eravamo tanto amati e Una giornata particolare."
        },
        "history": {
            "title": "Marty vince la prima Palma d’Oro",
            "subtitle": "1955 · Festival di Cannes",
            "text": "Si chiude il Festival di Cannes 1955 e Marty diventa il primo film a vincere la Palma d’Oro: uno dei momenti simbolici più forti della storia del festival."
        },
        "quote": {
            "author": "Dede Allen (Quel pomeriggio di un giorno di cani)",
            "text": "Il montaggio consiste nel trovare il battito cardiaco della scena e farlo pulsare sullo schermo.",
            "note": ""
        },
        "heroSubline": "Un budget basso ti dà libertà creativa; un budget alto ti dà solo ansia"
    },
    "05-11": {
        "person": {
            "name": "Marco Ferreri",
            "birthDate": "1928-05-11",
            "note": "Regista italiano provocatorio e corrosivo, tra i più originali del cinema europeo, autore di La grande abbuffata e Dillinger è morto."
        },
        "history": {
            "title": "FILM - A Knight’s Tale",
            "subtitle": "2001 · uscita USA",
            "text": "Nel 2001 esce negli USA A Knight’s Tale: titolo curioso e utile per parlare di anacronismo creativo, colonna sonora pop e riscrittura moderna del Medioevo."
        },
        "quote": {
            "author": "Gordon Willis",
            "text": "Non devi aver paura dell'oscurità. L'oscurità è un colore e va usata esattamente come il bianco.",
            "note": ""
        },
        "heroSubline": "Trova la somiglianza in ciò che è diverso da te"
    },
    "05-12": {
        "person": {
            "name": "Maya Deren",
            "birthDate": "1917-05-12",
            "note": "Pioniera del cinema sperimentale americano, fondamentale per il rapporto tra cinema, sogno, danza e immaginazione visiva."
        },
        "history": {
            "title": "FILM - Poseidon",
            "subtitle": "2006 · uscita USA",
            "text": "Nel 2006 esce Poseidon: non un capolavoro, ma un buon esempio di disaster movie digitale dei Duemila e del tentativo di rilanciare un genere classico."
        },
        "quote": {
            "author": "Nino Rota",
            "text": "La musica di un film non deve essere una decorazione, ma deve far parte dell'azione.",
            "note": ""
        },
        "heroSubline": "Non muovere mai la macchina da presa se non c'è un motivo drammatico o psicologico"
    },
    "05-13": {
        "person": {
            "name": "Joe Johnston",
            "birthDate": "1950-05-13",
            "note": "Regista americano molto legato al cinema d’avventura e d’immaginazione, noto per Jumanji, October Sky e Captain America: The First Avenger."
        },
        "history": {
            "title": "Up apre Cannes",
            "subtitle": "2009 · Festival di Cannes",
            "text": "Nel 2009 Cannes si apre con Up: è la prima volta che un film d’animazione apre il festival, e il fatto da solo vale una scheda."
        },
        "quote": {
            "author": "Orson Welles",
            "text": "Un nastro cinematografico ha un solo difetto: vi si può registrare solo ciò che gli occhi vedono.",
            "note": ""
        },
        "heroSubline": "La struttura è l'ossatura, i dialoghi sono solo il vestito."
    },
    "05-14": {
        "person": {
            "name": "George Lucas",
            "birthDate": "1944-05-14",
            "note": "Creatore di Star Wars e figura decisiva del cinema moderno, capace di cambiare per sempre il rapporto tra racconto, tecnologia e immaginario popolare."
        },
        "history": {
            "title": "La pazza gioia a Cannes",
            "subtitle": "2016 · Quinzaine des Réalisateurs",
            "text": "Nel 2016 La pazza gioia viene presentato alla Quinzaine di Cannes: un ottimo momento italiano del mese, perfetto per ricordare Paolo Virzì dentro un contesto internazionale."
        },
        "quote": {
            "author": "Dalton Trumbo",
            "text": "La scrittura è una professione solitaria e spietata. Richiede tutto quello che hai e non promette nulla.",
            "note": ""
        },
        "heroSubline": "Spendi i soldi sullo schermo, non negli uffici della produzione"
    },
    "05-15": {
        "person": {
            "name": "Lee Jang-ho",
            "birthDate": "1945-05-15",
            "note": "Regista sudcoreano importante per il rinnovamento del cinema del suo paese, noto per uno sguardo critico e moderno sulla società coreana."
        },
        "history": {
            "title": "FILM - Lethal Weapon 3",
            "subtitle": "1992 · uscita USA",
            "text": "Nel 1992 esce Lethal Weapon 3: una data utile per ricordare il grande action americano anni Novanta e il consolidamento del buddy movie poliziesco."
        },
        "quote": {
            "author": "David O. Selznick",
            "text": "L'unica cosa che conta in un film è quello che arriva sullo schermo.",
            "note": ""
        },
        "heroSubline": "Recitare significa vivere pienamente in circostanze immaginarie"
    },
    "05-16": {
        "person": {
            "name": "Mario Monicelli",
            "birthDate": "1915-05-16",
            "note": "Maestro della commedia all’italiana, autore di I soliti ignoti, La grande guerra e Amici miei: uno dei registi più importanti del nostro cinema."
        },
        "history": {
            "title": "Prima cerimonia degli Oscar",
            "subtitle": "1929 · Academy Awards",
            "text": "Nel 1929 si tiene la prima cerimonia degli Oscar al Hollywood Roosevelt Hotel: uno dei grandi passaggi fondativi del cinema come sistema di premi e consacrazione."
        },
        "quote": {
            "author": "Anne V. Coates (Lawrence d'Arabia)",
            "text": "Il montaggio è come la scultura. Togli tutto il marmo in eccesso per rivelare la statua che c'è dentro.",
            "note": ""
        },
        "heroSubline": "La simmetria perfetta appartiene a Dio e a Kubrick; tutti gli altri rischiano la noia"
    },
    "05-17": {
        "person": {
            "name": "Jehane Noujaim",
            "birthDate": "1974-05-17",
            "note": "Regista documentarista americana, nota per Control Room e The Square, capace di raccontare la politica contemporanea con tensione e lucidità."
        },
        "history": {
            "title": "The Da Vinci Code apre Cannes",
            "subtitle": "2006 · Festival di Cannes",
            "text": "Nel 2006 The Da Vinci Code apre il Festival di Cannes: un buon esempio di blockbuster globale che entra in un contesto tradizionalmente più autoriale."
        },
        "quote": {
            "author": "Gordon Willis",
            "text": "Un'inquadratura deve essere semplice, diretta e non deve mai urlare: 'Guardatemi, sono un'opera d'arte!'.",
            "note": ""
        },
        "heroSubline": "La prima bozza serve solo a dimostrare a te stesso che la storia esiste"
    },
    "05-18": {
        "person": {
            "name": "Frank Capra",
            "birthDate": "1897-05-18",
            "note": "Regista nato in Sicilia e diventato simbolo del grande cinema americano classico, autore di La vita è meravigliosa, Accadde una notte e Mr. Smith va a Washington."
        },
        "history": {
            "title": "FILM - Shrek",
            "subtitle": "2001 · uscita USA",
            "text": "Nel 2001 esce Shrek negli Stati Uniti: film chiave perché ribalta la fiaba classica, spinge forte l’ironia metacinematografica e cambia l’animazione mainstream."
        },
        "quote": {
            "author": "Nino Rota",
            "text": "Lavorare con Fellini non era fare musica per un film, ma entrare direttamente dentro un suo sogno.",
            "note": ""
        },
        "heroSubline": "Il film più costoso da produrre è quello che nessuno va a vedere"
    },
    "05-19": {
        "person": {
            "name": "Ali Hamroyev",
            "birthDate": "1937-05-19",
            "note": "Regista uzbeko di forte rilievo storico, autore di numerosi film e documentari che hanno dato visibilità internazionale al cinema dell’Asia centrale."
        },
        "history": {
            "title": "FILM - Il Codice Da Vinci",
            "subtitle": "2006 · uscita USA",
            "text": "Nel 2006 The Da Vinci Code arriva nelle sale USA, diventando subito un caso commerciale e mediatico mondiale."
        },
        "quote": {
            "author": "David Lynch",
            "text": "Le idee sono come i pesci. Se vuoi prendere i pesci piccoli, puoi rimanere nell'acqua bassa.",
            "note": ""
        },
        "heroSubline": "L'emozione non si insegue, arriva come conseguenza di un'azione"
    },
    "05-20": {
        "person": {
            "name": "Daniel Ribeiro",
            "birthDate": "1982-05-20",
            "note": "Regista brasiliano noto per Hoje Eu Quero Voltar Sozinho (The Way He Looks), film sensibile e limpido sul desiderio, la crescita e l’identità."
        },
        "history": {
            "title": "La dolce vita vince la Palma d’Oro",
            "subtitle": "1960 · Festival di Cannes",
            "text": "Il 20 maggio 1960 il film La dolce vita di Federico Fellini vince la Palma d’Oro a Cannes."
        },
        "quote": {
            "author": "Ben Hecht",
            "text": "I film non vengono scritti. Vengono riscritti nelle stanze fumose degli hotel dai produttori.",
            "note": ""
        },
        "heroSubline": "L'altezza della macchina da presa stabilisce il rapporto di potere tra i personaggi"
    },
    "05-21": {
        "person": {
            "name": "Anatole Litvak",
            "birthDate": "1902-05-21",
            "note": "Regista ucraino naturalizzato americano, attivo tra Europa e Hollywood, autore di film intensi e internazionali come Anastasia e The Snake Pit."
        },
        "history": {
            "title": "FILM - L'Impero colpisce ancora",
            "subtitle": "1980 · uscita USA",
            "text": "Nel 1980 esce negli USA L'Impero colpisce ancora: giornata fortissima per parlare di sequel che supera l’originale e allarga l’idea di saga cinematografica."
        },
        "quote": {
            "author": "David O. Selznick",
            "text": "In questo settore, per avere successo devi essere pronto a farti odiare da tutti i tuoi migliori amici.",
            "note": ""
        },
        "heroSubline": "Se il secondo atto si trascina, il problema è quasi sempre nel primo"
    },
    "05-22": {
        "person": {
            "name": "Hideaki Anno",
            "birthDate": "1960-05-22",
            "note": "Autore giapponese fondamentale tra animazione e cinema, celebre per Neon Genesis Evangelion e per una regia visionaria, inquieta e personalissima."
        },
        "history": {
            "title": "FILM - Mission: Impossible",
            "subtitle": "1996 · uscita USA",
            "text": "Nel 1996 esce Mission: Impossible, primo film della saga: perfetto per un pannello su franchise, star power di Tom Cruise e trasformazione dell’action-spy movie."
        },
        "quote": {
            "author": "Sally Menke (Pulp Fiction)",
            "text": "Il mio compito principale è proteggere la performance degli attori e amplificare la visione del regista.",
            "note": ""
        },
        "heroSubline": "La paura al cinema costa pochissimo da produrre, ma ripaga moltissimo"
    },
    "05-23": {
        "person": {
            "name": "Padmarajan",
            "birthDate": "1945-05-23",
            "note": "Grande regista e sceneggiatore indiano, figura chiave del cinema malayalam, amato per la delicatezza narrativa e la profondità emotiva dei suoi film."
        },
        "history": {
            "title": "Pulp Fiction vince la Palma d’Oro",
            "subtitle": "1994 · Festival di Cannes",
            "text": "Nel 1994 Pulp Fiction vince la Palma d’Oro: data fondamentale per raccontare l’esplosione del cinema indipendente americano negli anni Novanta."
        },
        "quote": {
            "author": "Emmanuel Lubezki",
            "text": "La luce naturale ha una vibrazione e una verità che nessuna lampada elettrica potrà mai replicare.",
            "note": ""
        },
        "heroSubline": "Se piangi tu sul set, il pubblico non piangerà; se trattieni il pianto, il pubblico si commuoverà"
    },
    "05-24": {
        "person": {
            "name": "Mike De Leon",
            "birthDate": "1947-05-24",
            "note": "Regista filippino tra i più importanti del suo paese, autore di un cinema visivamente rigoroso e spesso critico verso le tensioni sociali e politiche."
        },
        "history": {
            "title": "The White Ribbon vince la Palma d’Oro",
            "subtitle": "2009 · Festival di Cannes",
            "text": "Nel 2009 si chiude Cannes e The White Ribbon di Michael Haneke conquista la Palma d’Oro: ottimo momento per dare al calendario un tono più autoriale e internazionale."
        },
        "quote": {
            "author": "Bernard Herrmann",
            "text": "La musica è il collante invisibile che tiene insieme un film.",
            "note": ""
        },
        "heroSubline": "Un'inquadratura sporca a volte racconta molta più vita di una perfetta e patinata"
    },
    "05-25": {
        "person": {
            "name": "Euthana Mukdasanit",
            "birthDate": "1952-05-25",
            "note": "Regista thailandese di grande rilievo culturale, noto per film impegnati e per aver contribuito alla crescita del cinema d’autore del suo paese."
        },
        "history": {
            "title": "FILM - Star Wars",
            "subtitle": "1977 · uscita USA",
            "text": "Nel 1977 esce Star Wars: una delle date più iconiche della storia del cinema popolare, degli effetti speciali moderni e del merchandising cinematografico."
        },
        "quote": {
            "author": "Werner Herzog",
            "text": "Il cinema non è l'arte degli accademici, ma degli analfabeti.",
            "note": ""
        },
        "heroSubline": "Un incidente scatenante in ritardo produce un pubblico addormentato"
    },
    "05-26": {
        "person": {
            "name": "Tarsem Singh",
            "birthDate": "1961-05-26",
            "note": "Regista indo-americano celebre per un cinema visivo e barocco, riconoscibile in film come The Fall, The Cell e Immortals."
        },
        "history": {
            "title": "X-Men: The Last Stand",
            "subtitle": "2006 · uscita USA",
            "text": "Nel 2006 esce negli USA X-Men: The Last Stand: non il capitolo più amato della saga, ma utile per raccontare il peso dei cinecomic nel maggio hollywoodiano degli anni Duemila."
        },
        "quote": {
            "author": "Robert Towne",
            "text": "La prima bozza è solo per tirare fuori la storia. Dalla seconda in poi si inizia a fare sul serio.",
            "note": ""
        },
        "heroSubline": "Meglio sforare il budget per un'inquadratura fantastica che risparmiare su una scena mediocre"
    },
    "05-27": {
        "person": {
            "name": "Giuseppe Tornatore",
            "birthDate": "1956-05-27",
            "note": "Regista italiano premio Oscar, autore di Nuovo Cinema Paradiso: un nome perfetto per celebrare la memoria, la cinefilia e il potere emotivo del racconto."
        },
        "history": {
            "title": "Pan’s Labyrinth debutta a Cannes",
            "subtitle": "2006 · Festival di Cannes",
            "text": "Nel 2006 Pan’s Labyrinth debutta a Cannes: un momento perfetto per parlare di fantasy d’autore, guerra, fiaba nera e immaginario visivo di Guillermo del Toro."
        },
        "quote": {
            "author": "Walt Disney",
            "text": "Non facciamo film per fare soldi. Facciamo soldi per fare più film.",
            "note": ""
        },
        "heroSubline": "Non giudicare mai il tuo personaggio: devi essere il suo avvocato difensore"
    },
    "05-28": {
        "person": {
            "name": "Bruce McDonald",
            "birthDate": "1959-05-28",
            "note": "Regista canadese indipendente, figura di culto del cinema del suo paese, noto per Roadkill, Hard Core Logo e Pontypool."
        },
        "history": {
            "title": "Taxi Driver vince la Palma d’Oro",
            "subtitle": "1976 · Festival di Cannes",
            "text": "Si chiude Cannes 1976 e Taxi Driver vince la Palma d’Oro: uno dei grandi incroci tra festival, cinema americano e nascita di un autore come Scorsese in dimensione mondiale."
        },
        "quote": {
            "author": "Hank Corwin (The Tree of Life)",
            "text": "Voglio che i miei tagli creino una collisione emotiva nella mente dello spettatore.",
            "note": ""
        },
        "heroSubline": "Fai in modo che lo spettatore si dimentichi che c'è un obiettivo tra lui e la scena"
    },
    "05-29": {
        "person": {
            "name": "Josef von Sternberg",
            "birthDate": "1894-05-29",
            "note": "Regista austro-americano tra i grandi classici del cinema mondiale, celebre per l’eleganza formale e per i film realizzati con Marlene Dietrich."
        },
        "history": {
            "title": "FILM - Up",
            "subtitle": "2009 · uscita USA",
            "text": "Nel 2009 Up esce negli USA: un ottimo giorno Pixar, perfetto per parlare di animazione capace di aprirsi con forza anche a un pubblico adulto."
        },
        "quote": {
            "author": "Emmanuel Lubezki",
            "text": "Nel cinema digitale non cerchiamo di imitare la pellicola, ma di trovare un nuovo linguaggio visivo.",
            "note": ""
        },
        "heroSubline": "La coincidenza serve per mettere i personaggi nei guai, mai per tirarli fuori"
    },
    "05-30": {
        "person": {
            "name": "Agnès Varda",
            "birthDate": "1928-05-30",
            "note": "Tra le figure più importanti della Nouvelle Vague, regista e fotografa di straordinaria libertà creativa, autrice di Cléo dalle 5 alle 7 e Senza tetto né legge."
        },
        "history": {
            "title": "FILM - Alla ricerca di Nemo",
            "subtitle": "2003 · uscita USA",
            "text": "Nel 2003 esce Alla ricerca di Nemo: una data molto forte per l’animazione, perché il film diventa uno dei simboli assoluti del periodo d’oro Pixar."
        },
        "quote": {
            "author": "Bernard Herrmann",
            "text": "Hitchcock fa film per il 60% con la macchina da presa e per il 40% con la mia musica.",
            "note": ""
        },
        "heroSubline": "In questo business, l'ottimismo senza un piano finanziario solido porta dritti al fallimento"
    },
    "05-31": {
        "person": {
            "name": "Rainer Werner Fassbinder",
            "birthDate": "1945-05-31",
            "note": "Regista tedesco fondamentale del Nuovo cinema tedesco, autore instancabile e radicale, capace di unire melodramma, critica sociale e grande rigore stilistico."
        },
        "history": {
            "title": "FILM - Harry Potter e il prigioniero di Azkaban",
            "subtitle": "2004 · uscita UK",
            "text": "Nel 2004 Harry Potter e il prigioniero di Azkaban arriva nel Regno Unito: è il capitolo che dà alla saga una svolta più autoriale, più scura e più cinematograficamente matura."
        },
        "quote": {
            "author": "Abbas Kiarostami",
            "text": "Un buon film è quello che ti porti a casa e ti fa riflettere il giorno dopo.",
            "note": ""
        },
        "heroSubline": "L'unica cosa che un attore non può fingere è la presenza"
    }
});
})();
