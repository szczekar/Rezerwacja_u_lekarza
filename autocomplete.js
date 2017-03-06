// w tablicach data przechowujemy specjalizacje i miasta
var dataSpec = [
  "chirurg",
  "dermatolog",
  "stomatolog",
  "urolog",
  "ginekolog",
  "laryngolog"
];

var dataMiasto = [
  "Warszawa",
  "Rybnik",
  "Bydgoszcz",
  "Gliwice",
  "Lublin",
  "Katowice"
];

// jesli DOM jest zaladowany to mozna wykonac funkcje autocomplete (jquery) dla pola input specjalizacja
$(document).ready(
  function() {
    $("#specjalizacja").autocomplete({
    source: dataSpec,
    autoFocus: true,
    minLength: 0,
    });
   }
);

// wyswietlenie wszystkich specjalizacji po kliknieciu na input specjalizacja
$(function() {
  $('#specjalizacja').click(function(){
    $(this).autocomplete("search", "");
    });
});

// jesli DOM jest zaladowany to mozna wykonac funkcje autocomplete (jquery) dla pola input miasto
$(document).ready(
  function() {
    $("#miasto").autocomplete({
      source: dataMiasto,
      autoFocus: true,
      minLength: 0,
    });
  }
);

// wyswietlenie wszystkich specjalizacji po kliknieciu na pole input miasto
$(function() {
  $('#miasto').click(function() {
    $(this).autocomplete("search", "");
    });
});

