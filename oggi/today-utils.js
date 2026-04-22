(function(){
  "use strict";

  function pad2(n){ return String(n).padStart(2, "0"); }
  function formatMMDD(date){ return pad2(date.getMonth() + 1) + "-" + pad2(date.getDate()); }
  function dayOfYear(date){
    var start = new Date(date.getFullYear(), 0, 0, 12, 0, 0, 0);
    return Math.floor((date - start) / 86400000);
  }
  function formatFullDate(date){
    var text = new Intl.DateTimeFormat("it-IT", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(date);
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  function pickByDay(date, items){
    if(!items || !items.length) return null;
    var idx = dayOfYear(date) % items.length;
    return items[idx];
  }
  function monthTheme(date){
    var month = date.getMonth() + 1;
    if(month === 4) return "SDAC · aprile di cinema e memoria";
    if(month === 5) return "SDAC · maggio, set e racconti";
    return null;
  }

  function buildFallbackPerson(date, data){
    var person = pickByDay(date, data.personFallbacks);
    return person || {
      name: "Autore del giorno",
      role: "cinema da esplorare",
      country: "Mondo",
      years: "—",
      work: "Sezione pronta",
      note: "Questa giornata è pronta per essere arricchita con nuovi riferimenti di cinema e audiovisivo."
    };
  }

  function getEditorial(date){
    var data = window.AGENDA_TODAY_DATA || {};
    var key = formatMMDD(date);
    var dayData = (data.byDay && data.byDay[key]) || {};

    return {
      key: key,
      person: dayData.person || buildFallbackPerson(date, data),
      history: dayData.history || pickByDay(date, data.historyFallbacks) || { year: "", title: "Storia del cinema", text: "Sezione pronta per nuove tappe del cinema." },
      film: dayData.film || pickByDay(date, data.filmFallbacks) || { title: "Film da rivedere", subtitle: "Sezione pronta", text: "Qui possiamo suggerire un film da recuperare.", why: "Perfetto per trasformare la pagina Oggi in un piccolo cine-taccuino quotidiano." },
      craft: dayData.craft || pickByDay(date, data.craftFallbacks) || { chips: ["Regia", "Cinema"], note: "Sezione pronta per un consiglio pratico quotidiano." },
      quote: dayData.quote || pickByDay(date, data.quoteFallbacks) || { text: "Ogni giorno può essere una piccola lezione di cinema.", author: "SDAC Agenda", note: "" },
      heroSubline: dayData.heroSubline || monthTheme(date) || pickByDay(date, data.heroFallbacks) || "SDAC · cinema, memoria, visione"
    };
  }

  window.AGENDA_TODAY_UTILS = {
    formatMMDD: formatMMDD,
    formatFullDate: formatFullDate,
    getEditorial: getEditorial
  };
})();
