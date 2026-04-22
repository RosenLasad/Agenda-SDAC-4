(function(){
  "use strict";

  if(!window.AGENDA_TODAY_DATA) window.AGENDA_TODAY_DATA = { byDay: {} };
  if(!window.AGENDA_TODAY_DATA.byDay) window.AGENDA_TODAY_DATA.byDay = {};

  Object.assign(window.AGENDA_TODAY_DATA.byDay, {
    "04-01": {
          "person": {
                "name": "Barry Sonnenfeld",
                "birthDate": "1953-04-01",
                "note": "Regista americano capace di unire comicità visiva, eleganza tecnica e immaginario pop; da La famiglia Addams a Men in Black ha mostrato come il cinema commerciale possa avere personalità."
          },
          "history": {
                "title": "FILM - Miles Ahead",
                "subtitle": "2016 · 10 anni",
                "text": "Film anniversario del giorno."
          },
          "quote": {
                "author": "Stanley Kubrick",
                "text": "Un film è, o dovrebbe essere, più simile alla musica che alla narrativa.",
                "note": ""
          },
          "heroSubline": "Non esistono piccoli ruoli, esistono solo piccoli attori."
    },
    "04-02": {
          "person": {
                "name": "David Frankel",
                "birthDate": "1959-04-02",
                "note": "Regista americano solido e versatile, abile nel racconto brillante e nel cinema di larga diffusione; è un buon nome per parlare di regia invisibile ma efficacissima."
          },
          "history": {
                "title": "FILM - 2001: Odissea nello spazio",
                "subtitle": "1968 · 58 anni",
                "text": "Film anniversario del giorno."
          },
          "quote": {
                "author": "Nora Ephron",
                "text": "Tutto ciò che ti capita nella vita è materiale per scrivere. Anche il peggior fallimento.",
                "note": ""
          },
          "heroSubline": "Il cinema è la vita con le parti noiose tagliate"
    },
    "04-03": {
          "person": {
                "name": "Lino Brocka",
                "birthDate": "1939-04-03",
                "note": "Grande autore del cinema filippino, noto per un cinema politico e umano, intenso e diretto; è una figura fondamentale per ricordare che il grande cinema non nasce solo nei paesi più centrali."
          },
          "history": {
                "title": "FILM - L’Universale",
                "subtitle": "2016 · 10 anni",
                "text": "Film italiano ambientato intorno a uno storico cinema di quartiere fiorentino, con forte sapore cinefilo."
          },
          "quote": {
                "author": "Samuel Goldwyn",
                "text": "Un'intesa verbale non vale nemmeno la carta su cui è scritta.",
                "note": ""
          },
          "heroSubline": "Show, don't tell"
    },
    "04-04": {
          "person": {
                "name": "Andrei Tarkovsky",
                "birthDate": "1932-04-04",
                "note": "Uno dei maestri assoluti della storia del cinema: spiritualità, tempo, memoria e immagine poetica trovano nei suoi film una forma unica e inconfondibile."
          },
          "history": {
                "title": "Nasce la Warner Bros",
                "subtitle": "1923 · 103 anni",
                "text": "Il 4 aprile 1923 nasce ufficialmente Warner Bros."
          },
          "quote": {
                "author": "Walter Murch (Apocalypse Now)",
                "text": "Se devi sacrificare qualcosa, non rinunciare mai all'emozione a favore della storia. Non rinunciare alla storia per il ritmo.",
                "note": ""
          },
          "heroSubline": "Se non rischi, non fai cinema"
    },
    "04-05": {
          "person": {
                "name": "Roger Corman",
                "birthDate": "1926-04-05",
                "note": "Figura centrale del cinema indipendente americano, maestro di invenzione produttiva e scopritore di talenti; dimostra quanto la regia conti anche nei contesti a basso budget."
          },
          "history": {
                "title": "FILM - The Scarlet Hour",
                "subtitle": "1956 · 70 anni",
                "text": "Noir criminale di Michael Curtiz: amanti, manipolazione e un colpo di gioielli che va storto."
          },
          "quote": {
                "author": "Vittorio Storaro",
                "text": "La cinematografia è scrivere con la luce. Noi usiamo la luce per rivelare l'anima dei personaggi.",
                "note": ""
          },
          "heroSubline": "Non recitare, sii."
    },
    "04-06": {
          "person": {
                "name": "Barry Levinson",
                "birthDate": "1942-04-06",
                "note": "Regista americano premio Oscar, capace di passare dal dramma alla commedia con grande naturalezza; esempio di classicismo narrativo efficace e limpido."
          },
          "history": {
                "title": "FILM - Blow",
                "subtitle": "2001 · uscita USA · 25 anni",
                "text": "Film noir su un uomo evaso da un istituto psichiatrico che cerca di provare di non essere un assassino."
          },
          "quote": {
                "author": "Ennio Morricone",
                "text": "La musica al cinema deve dare un senso di profondità e di sguardi che le immagini non possono rivelare.",
                "note": ""
          },
          "heroSubline": "La fotografia è verità, e il cinema è verità 24 volte al secondo"
    },
    "04-07": {
          "person": {
                "name": "Francis Ford Coppola",
                "birthDate": "1939-04-07",
                "note": "Uno dei giganti del New Hollywood, autore di opere decisive come Il padrino e Apocalypse Now; perfetto per rappresentare la regia come visione totale del film."
          },
          "history": {
                "title": "FILM - The Thing from Another World",
                "subtitle": "1951 · 75 anni",
                "text": "Classico della fantascienza horror: scienziati e militari affrontano un organismo alieno in un avamposto artico."
          },
          "quote": {
                "author": "Federico Fellini",
                "text": "Parlare di cinema è come parlare di sogni.",
                "note": ""
          },
          "heroSubline": "Se compare una pistola nel primo atto, deve sparare nel terzo"
    },
    "04-08": {
          "person": {
                "name": "Frédéric Back",
                "birthDate": "1924-04-08",
                "note": "Maestro franco-canadese dell’animazione d’autore, poetico e raffinatissimo; ideale per ricordare che la regia esiste anche nel cinema animato più alto."
          },
          "history": {
                "title": "FILM - The Great Ziegfeld",
                "subtitle": "1936 · 90 anni",
                "text": "Grande musical biografico su Florenz Ziegfeld, monumentale e spettacolare."
          },
          "quote": {
                "author": "Aaron Sorkin",
                "text": "Le buone sceneggiature non si scrivono, si riscrivono continuamente.",
                "note": ""
          },
          "heroSubline": "I film non si finiscono, si abbandonano."
    },
    "04-09": {
          "person": {
                "name": "David Gordon Green",
                "birthDate": "1975-04-09",
                "note": "Regista americano capace di muoversi tra cinema indipendente, commedia e horror; interessante per il modo in cui attraversa registri molto diversi senza perdere identità."
          },
          "history": {
                "title": "FILM - Tutti gli uomini del presidente",
                "subtitle": "1976 · 50 anni",
                "text": "Thriller sul caso Watergate. Con Dustin Hoffman e Robert Redford."
          },
          "quote": {
                "author": "Samuel Goldwyn",
                "text": "Non voglio intorno a me persone che dicono sempre di sì. Voglio che tutti mi dicano la verità, anche se questo costa loro il posto.",
                "note": ""
          },
          "heroSubline": "L'attore deve rubare la scena, ma con rispetto."
    },
    "04-10": {
          "person": {
                "name": "Gregory Nava",
                "birthDate": "1949-04-10",
                "note": "Regista americano attento alle identità culturali, alle radici e alle storie di confine; il suo cinema unisce dimensione personale e respiro storico."
          },
          "history": {
                "title": "FILM - A Message to Garcia",
                "subtitle": "1936 · 90 anni",
                "text": "Film d’avventura-spionaggio ispirato all’episodio storico che precede la guerra ispano-americana."
          },
          "quote": {
                "author": "Walter Murch",
                "text": "Il montaggio è l'unica arte che è unicamente cinematografica. Tutte le altre arti derivano da pittura, letteratura, teatro o musica.",
                "note": ""
          },
          "heroSubline": "Il montaggio è la terza e ultima riscrittura di un film."
    },
    "04-11": {
          "person": {
                "name": "Liz Garbus",
                "birthDate": "1970-04-11",
                "note": "Tra le documentariste americane più autorevoli, ha mostrato quanto il documentario possa avere forza narrativa, precisione politica e qualità cinematografica."
          },
          "history": {
                "title": "FILM - Backlash",
                "subtitle": "1956 · 70 anni",
                "text": "Western di John Sturges con Richard Widmark: vendetta, mistero e frontiera."
          },
          "quote": {
                "author": "Vittorio Storaro",
                "text": "L'oscurità non è l'assenza di luce, ma la presenza del mistero.",
                "note": ""
          },
          "heroSubline": "Nessuno a Hollywood sa niente"
    },
    "04-12": {
          "person": {
                "name": "Walter Salles",
                "birthDate": "1956-04-12",
                "note": "Uno dei grandi nomi del cinema brasiliano contemporaneo, autore sensibile al viaggio, alla memoria e alla trasformazione interiore dei personaggi."
          },
          "history": {
                "title": "FILM - The Man in the Gray Flannel Suit",
                "subtitle": "1956 · 70 anni",
                "text": "Dramma con Gregory Peck su lavoro, famiglia, trauma di guerra e conformismo nell’America del dopoguerra."
          },
          "quote": {
                "author": "Ennio Morricone",
                "text": "Al cinema la musica non deve spiegare ciò che si vede, ma ciò che non si vede.",
                "note": ""
          },
          "heroSubline": "Il cinema si fa con il cuore, ma si paga con la cassa."
    },
    "04-13": {
          "person": {
                "name": "Charles Burnett",
                "birthDate": "1944-04-13",
                "note": "Autore chiave del cinema indipendente americano, profondo e umanissimo; i suoi film hanno dato voce a comunità e sguardi troppo spesso esclusi dal racconto dominante."
          },
          "history": {
                "title": "FILM - Tribute to a Bad Man",
                "subtitle": "1956 · 70 anni",
                "text": "Western di Robert Wise su un rancher duro e violento, divorato dalla propria idea di giustizia."
          },
          "quote": {
                "author": "Martin Scorsese",
                "text": "Le immagini non sono solo figure sullo schermo. Sono la nostra vita.",
                "note": ""
          },
          "heroSubline": "I bambini e gli animali rubano sempre la scena."
    },
    "04-14": {
          "person": {
                "name": "James Gray",
                "birthDate": "1969-04-14",
                "note": "Regista americano di forte impronta autoriale, elegante e rigoroso; il suo cinema lavora sulle famiglie, sulle colpe e sui desideri con una classicità moderna molto rara."
          },
          "history": {
                "title": "FILM - Holidays",
                "subtitle": "2016 · 10 anni",
                "text": "Antologia horror composta da episodi legati alle festività: scelta curiosa e moderna, utile per variare il tono del mese."
          },
          "quote": {
                "author": "William Goldman",
                "text": "Nessuno a Hollywood sa niente. Nessuno sa con certezza cosa funzionerà e cosa no.",
                "note": ""
          },
          "heroSubline": "Il casting è l'80% del lavoro di un regista."
    },
    "04-15": {
          "person": {
                "name": "Santiago Loza",
                "birthDate": "1971-04-15",
                "note": "Regista argentino di cinema d’autore, sensibile ai margini, alle fragilità e alle relazioni umane; una scelta utile per dare spazio a un cinema meno ovvio ma molto ricco."
          },
          "history": {
                "title": "FILM - The Jungle Book",
                "subtitle": "2016 · 10 anni",
                "text": "Versione di Jon Favreau: uno dei titoli più forti del mese."
          },
          "quote": {
                "author": "Samuel Goldwyn",
                "text": "Ho superato un sacco di problemi nella mia vita, e la maggior parte di essi non è mai successa.",
                "note": ""
          },
          "heroSubline": "Le buone sceneggiature non si scrivono, si riscrivono"
    },
    "04-16": {
          "person": {
                "name": "Margreth Olin",
                "birthDate": "1970-04-16",
                "note": "Regista norvegese nota soprattutto per il documentario, capace di guardare gli esclusi con grande forza morale e attenzione formale."
          },
          "history": {
                "title": "FILM - Whirlwind",
                "subtitle": "1951 · 75 anni",
                "text": "Western con Gene Autry, costruito attorno a un intreccio criminale e d’azione nel West."
          },
          "quote": {
                "author": "Thelma Schoonmaker (The Departed)",
                "text": "Il buon montaggio non deve farsi notare. Deve guidare lo spettatore senza che lui se ne renda conto.",
                "note": ""
          },
          "heroSubline": "Meglio un brutto stacco che una brutta emozione."
    },
    "04-17": {
          "person": {
                "name": "Sergio Sollima",
                "birthDate": "1921-04-17",
                "note": "Regista italiano centrale nello spaghetti western e nel cinema di genere degli anni Sessanta e Settanta; nome importante per valorizzare l’inventiva della regia italiana."
          },
          "history": {
                "title": "FILM - Circle of Danger",
                "subtitle": "1951 · 75 anni",
                "text": "Mystery-thriller di Jacques Tourneur: un americano va in Gran Bretagna a indagare sulla morte del fratello durante la guerra."
          },
          "quote": {
                "author": "Roger Deakins",
                "text": "Se la fotografia di un film è bellissima ma distrae dalla storia, allora non è una buona fotografia.",
                "note": ""
          },
          "heroSubline": "La macchina da presa vede anche quello che stai pensando."
    },
    "04-18": {
          "person": {
                "name": "Rithy Panh",
                "birthDate": "1964-04-18",
                "note": "Regista cambogiano di enorme rilievo civile, autore di film fondamentali sulla memoria storica e sul trauma; un esempio di cinema come testimonianza e ricostruzione."
          },
          "history": {
                "title": "Gli Oscar a colori",
                "subtitle": "1966 · 60 anni",
                "text": "Il 18 aprile 1966 gli Oscar vengono trasmessi per la prima volta a colori."
          },
          "quote": {
                "author": "John Williams",
                "text": "La musica ha la capacità di colpire direttamente il nostro cuore senza passare attraverso l'intelletto.",
                "note": ""
          },
          "heroSubline": "Il silenzio è la musica più forte che puoi usare."
    },
    "04-19": {
          "person": {
                "name": "Michael Dowse",
                "birthDate": "1973-04-19",
                "note": "Regista canadese energico e dinamico, interessante per il ritmo e per la capacità di tenere insieme ironia, musica e racconto popolare."
          },
          "history": {
                "title": "FILM - Raton Pass",
                "subtitle": "1951 · 75 anni",
                "text": "Western ambientato nel New Mexico ottocentesco, tra terre contese, allevatori e conflitti di frontiera."
          },
          "quote": {
                "author": "Akira Kurosawa",
                "text": "Essere un regista significa essere un creatore di mondi.",
                "note": ""
          },
          "heroSubline": "Se non hai una storia, non hai nulla"
    },
    "04-20": {
          "person": {
                "name": "James Wong",
                "birthDate": "1959-04-20",
                "note": "Regista hongkonghese-americano noto per il cinema di genere; utile per rappresentare la regia come costruzione di tensione, meccanismo narrativo e spettacolo."
          },
          "history": {
                "title": "FILM - The Painted Hills",
                "subtitle": "1951 · 75 anni",
                "text": "Western con Lassie: un collie cerca vendetta dopo l’uccisione del padrone."
          },
          "quote": {
                "author": "William Goldman",
                "text": "La sceneggiatura non è altro che struttura. Ed è la cosa più difficile da imparare.",
                "note": ""
          },
          "heroSubline": "Porta a casa l'inquadratura e poi spera nel montaggio."
    },
    "04-21": {
          "person": {
                "name": "Nelo Risi",
                "birthDate": "1920-04-21",
                "note": "Regista italiano colto e appartato, vicino a un cinema letterario e riflessivo; una figura preziosa per allargare l’idea di regia oltre i nomi più ovvi."
          },
          "history": {
                "title": "FILM - My Forbidden Past",
                "subtitle": "1951 · 75 anni",
                "text": "Melodramma storico con Ava Gardner e Robert Mitchum, ambientato in una New Orleans di passioni e intrighi."
          },
          "quote": {
                "author": "Irving Thalberg",
                "text": "Il pubblico non sa mai cosa vuole finché non glielo dai.",
                "note": ""
          },
          "heroSubline": "Meno fai, più arrivi allo spettatore"
    },
    "04-22": {
          "person": {
                "name": "John Waters",
                "birthDate": "1946-04-22",
                "note": "Autore cult del cinema americano, provocatorio e indipendente; perfetto per raccontare la regia come gesto libero, scandaloso e assolutamente personale."
          },
          "history": {
                "title": "FILM - A Hologram for the King",
                "subtitle": "2016 · 10 anni",
                "text": "Commedia drammatica con Tom Hanks: un venditore americano cerca di rilanciarsi in Arabia Saudita."
          },
          "quote": {
                "author": "Thelma Schoonmaker",
                "text": "Ricevere del girato che è stato filmato pensando già al montaggio finale è una vera benedizione.",
                "note": ""
          },
          "heroSubline": "Se un'inquadratura urla 'guardami!', allora è sbagliata."
    },
    "04-23": {
          "person": {
                "name": "Michael Moore",
                "birthDate": "1954-04-23",
                "note": "Documentarista tra i più noti e incisivi del cinema contemporaneo; ha reso il documentario politico accessibile, polemico e capace di grande impatto pubblico."
          },
          "history": {
                "title": "Il 23 aprile 1896 debutta in sala il Vitascope a New York",
                "subtitle": "Memoria del cinema",
                "text": "Un momento significativo della storia del cinema ricordato in questa data."
          },
          "quote": {
                "author": "Roger Deakins",
                "text": "Non c'è niente di peggio di un film in cui si percepisce lo sforzo del direttore della fotografia per farsi notare.",
                "note": ""
          },
          "heroSubline": "Uccidi i tuoi idoli"
    },
    "04-24": {
          "person": {
                "name": "Steven Lisberger",
                "birthDate": "1951-04-24",
                "note": "Regista americano ricordato soprattutto per Tron, film decisivo nell’immaginario tecnologico del cinema moderno; scelta ottima per parlare di innovazione visiva."
          },
          "history": {
                "title": "FILM - Jubal",
                "subtitle": "1956 · 70 anni",
                "text": "Western adulto con Glenn Ford, spesso descritto come una specie di “Otello nel West”."
          },
          "quote": {
                "author": "John Williams",
                "text": "Il mio lavoro è dare un'identità emotiva ed eroica a personaggi che altrimenti vedremmo solo muoversi sullo schermo.",
                "note": ""
          },
          "heroSubline": "Se non rischi i tuoi soldi, non stai facendo cinema"
    },
    "04-25": {
          "person": {
                "name": "Paul Mazursky",
                "birthDate": "1930-04-25",
                "note": "Regista americano importante per la commedia drammatica moderna, capace di raccontare con intelligenza e ironia i cambiamenti della società contemporanea."
          },
          "history": {
                "title": "FILM - Five",
                "subtitle": "1951 · 75 anni",
                "text": "Fantascienza post-atomica indipendente: cinque sopravvissuti dopo un olocausto nucleare."
          },
          "quote": {
                "author": "Andrej Tarkovskij",
                "text": "Il cinema è scolpire il tempo.",
                "note": ""
          },
          "heroSubline": "L'attore deve essere come un bicchiere d'acqua: pronto ad assumere qualsiasi forma"
    },
    "04-26": {
          "person": {
                "name": "Dominic Sena",
                "birthDate": "1949-04-26",
                "note": "Regista americano legato a thriller e action di forte impatto visivo; nome utile per rappresentare una regia energica, ritmica e spettacolare."
          },
          "history": {
                "title": "FILM - The Creature Walks Among Us",
                "subtitle": "1956 · 70 anni",
                "text": "Terzo capitolo della trilogia del Gill-man: scienza, mostro classico e atmosfera da Universal anni ’50."
          },
          "quote": {
                "author": "Charlie Kaufman",
                "text": "Scrivere è un viaggio nell'ignoto. Se sai già dove stai andando, probabilmente stai scrivendo qualcosa di noioso.",
                "note": ""
          },
          "heroSubline": "L'inquadratura non è solo ciò che mostri, ma ciò che decidi di escludere"
    },
    "04-27": {
          "person": {
                "name": "Fabio Mollo",
                "birthDate": "1980-04-27",
                "note": "Regista italiano contemporaneo attento ai sentimenti, all’identità e alle relazioni; una presenza italiana giovane e credibile da valorizzare nel mese."
          },
          "history": {
                "title": "FILM - The First Legion",
                "subtitle": "1951 · 75 anni",
                "text": "Dramma di Douglas Sirk ambientato nel mondo gesuita, con un impianto serio e insolito."
          },
          "quote": {
                "author": "Irving Thalberg",
                "text": "Scrittori e registri sono i veri creatori. Il lavoro del produttore è solo proteggerli da loro stessi e dallo studio.",
                "note": ""
          },
          "heroSubline": "Entra tardi, esci presto"
    },
    "04-28": {
          "person": {
                "name": "Zal Batmanglij",
                "birthDate": "1981-04-28",
                "note": "Regista americano di area indipendente, legato a storie inquiethe e identitarie; interessante per uno sguardo contemporaneo e poco convenzionale."
          },
          "history": {
                "title": "FILM - RV",
                "subtitle": "2006 · 20 anni",
                "text": "Road comedy con Robin Williams: una vacanza in camper che diventa una piccola guerra familiare su ruote."
          },
          "quote": {
                "author": "Michael Kahn (Schindler's List)",
                "text": "Non montare basandoti sulla conoscenza tecnica, monta basandoti sulla sensazione. Tutto si riduce all'intuizione e al sentimento.",
                "note": ""
          },
          "heroSubline": "Nessuno a Hollywood sa cosa funzionerà"
    },
    "04-29": {
          "person": {
                "name": "Andrew Bujalski",
                "birthDate": "1977-04-29",
                "note": "Regista americano associato al mumblecore, importante per un cinema indipendente fatto di dialoghi, osservazione e apparente semplicità."
          },
          "history": {
                "title": "FILM - Keanu",
                "subtitle": "2016 · 10 anni",
                "text": "Film anniversario del giorno."
          },
          "quote": {
                "author": "Sven Nykvist",
                "text": "Ho passato gran parte della mia vita a cercare la luce più semplice e naturale possibile.",
                "note": ""
          },
          "heroSubline": "La recitazione non è un'esibizione, è una confessione"
    },
    "04-30": {
          "person": {
                "name": "Lars von Trier",
                "birthDate": "1956-04-30",
                "note": "Uno dei registi europei più influenti e divisivi degli ultimi decenni; autore radicale, innovatore e impossibile da ignorare quando si parla di regia contemporanea."
          },
          "history": {
                "title": "Il 30 aprile 1912 nasce la Universal Film Manufacturing Company",
                "subtitle": "Memoria del cinema",
                "text": "Un momento significativo della storia del cinema ricordato in questa data."
          },
          "quote": {
                "author": "Hans Zimmer",
                "text": "Se un regista mi dice di fare della bella musica, io ho già fallito. Devo fare musica che serva al film.",
                "note": ""
          },
          "heroSubline": "Se un'inquadratura è troppo bella, probabilmente sta distraendo dalla storia"
    }
  });
})();
