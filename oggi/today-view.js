(function(){
  "use strict";

  function byId(id){ return document.getElementById(id); }
  function setText(id, value){
    var el = byId(id);
    if(el) el.textContent = value == null || value === "" ? "—" : value;
  }
  function setOptionalText(id, value){
    var el = byId(id);
    if(!el) return;
    if(value == null || value === "") {
      el.textContent = "";
      el.style.display = "none";
      return;
    }
    el.textContent = value;
    el.style.display = "";
  }
  function fillChips(id, items, emptyText){
    var el = byId(id);
    if(!el) return;
    el.innerHTML = "";
    if(!items || !items.length){
      var chip = document.createElement("span");
      chip.className = "todayFoodChip";
      chip.textContent = emptyText || "Sezione pronta";
      el.appendChild(chip);
      return;
    }
    items.forEach(function(item){
      var chip = document.createElement("span");
      chip.className = "todayFoodChip";
      chip.textContent = item;
      el.appendChild(chip);
    });
  }
  function getRelativeLabel(offset){
    if(offset === 0) return "Oggi";
    if(offset === -1) return "Ieri";
    if(offset === 1) return "Domani";
    if(offset < 0) return Math.abs(offset) + " giorni fa";
    return "Tra " + offset + " giorni";
  }

  function formatItalianDate(dateString){
    if(!dateString) return "";
    var match = String(dateString).match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if(!match) return String(dateString);
    var months = [
      "gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
      "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"
    ];
    var year = Number(match[1]);
    var monthIndex = Number(match[2]) - 1;
    var day = Number(match[3]);
    if(monthIndex < 0 || monthIndex > 11 || !day) return String(dateString);
    return day + " " + months[monthIndex] + " " + year;
  }

  function getBirthLabel(person){
    if(!person) return "";
    if(person.birthDisplay) return String(person.birthDisplay);
    if(person.birthDate) return formatItalianDate(person.birthDate);
    if(person.birthYear) return String(person.birthYear);
    if(person.years){
      var match = String(person.years).match(/(\d{4})/);
      if(match) return match[1];
    }
    return "";
  }

  function getPersonHeadline(person){
    if(!person || (!person.name && !person.birthDate && !person.birthYear && !person.years)) return "—";
    var name = person.name || "—";
    var birthLabel = getBirthLabel(person);
    return birthLabel ? name + " · " + birthLabel : name;
  }

  window.renderTodayView = function(date, options){
    var d = date || new Date();
    var opts = options || {};
    var utils = window.AGENDA_TODAY_UTILS;
    if(!utils) return;
    var editorial = utils.getEditorial(d);
    var person = editorial.person || {};
    var history = editorial.history || {};
    var quote = editorial.quote || {};

    setText("todayHeroKicker", getRelativeLabel(Number(opts.offset) || 0));
    setText("todayHeroDate", utils.formatFullDate(d));
    setText("todayHeroSubline", editorial.heroSubline || "SDAC · cinema, memoria, visione");

    setText("todayPersonHeadline", getPersonHeadline(person));
    setText("todayPersonNote", person.note);

    setText("todayHistoryTitle", history.title);
    setOptionalText("todayHistorySubtitle", history.subtitle || (history.year ? String(history.year) : ""));
    setText("todayHistoryText", history.text);

    setText("todayQuoteText", quote.text);
    setText("todayQuoteAuthor", quote.author);
    setOptionalText("todayQuoteNote", quote.note);
  };
})();
