# ImagiCharm-kodgenerator – specifikation

## Vad vi bygger

En enkel webbapp där Ida kan beskriva vad hon vill visa på sin ImagiCharm och få tillbaka färdig Python-kod att klistra in i imagi-appen.

## Teknisk lösning

Statisk HTML-sida (en fil, ingen backend) hostad på GitHub Pages eller liknande. Sidan anropar Anthropic API direkt från webbläsaren. API-nyckeln skrivs in vid första besöket och sparas i localStorage – den finns aldrig i källkoden.

Sidan görs till en PWA (Progressive Web App) så Ida kan lägga till den på hemskärmen på sin Android-surfplatta och det känns som en riktig app.

## Flöde

1. Första besöket: sidan ber om Anthropic API-nyckel och sparar den i localStorage
2. Ida skriver en beskrivning på svenska, t.ex. "ett regnbågshjärta som blinkar"
3. Sidan skickar beskrivningen till Claude med en systemprompt som innehåller imagilib-referensen
4. Claude returnerar ren Python-kod
5. Koden visas med syntax highlighting och en "Kopiera"-knapp
6. Ida klistrar in koden i imagi-appen på telefonen/surfplattan

## Vad som inte ingår (just nu)

Ingen animationspreview i webbappen – imagi-appen har sin egen preview och det är dit koden ska ändå. Kan läggas till senare.

## Systemprompt till Claude

Systempromptens uppgift:

- Förklara att ImagiCharm är en 8x8 LED-display
- Förklara att koden körs i imagi-appen, renderas på telefonen och skickas som bildrutor till charmen via Bluetooth – koden exekveras alltså inte på enheten
- Inkludera hela innehållet i `imagilib_reference.md` som referens
- Instruera Claude att alltid returnera komplett, körbar Python-kod utan förklaringar runt om
- Instruera Claude att anpassa komplexiteten efter att målgruppen är ett barn (Ida)
- Påminn om att scrollande text bör avslutas med flera mellanslag

## Gränssnitt

Enkelt och tydligt, anpassat för barn:

- Stort textfält med placeholder-text på svenska, t.ex. "Beskriv vad du vill se på din charm..."
- En tydlig "Generera"-knapp
- Kodblocket visas nedanför med syntax highlighting
- "Kopiera kod"-knapp direkt under kodblocket
- Laddningsindikator medan API-anropet pågår
- Felmeddelande om något går snett (ogiltig nyckel, nätverksfel etc.)
- En diskret länk/knapp för att byta API-nyckel

## Filer

- `index.html` – hela appen i en enda fil (HTML + CSS + JS inline)
- `manifest.json` – PWA-manifest
- `icon.png` – appikon (enkel 8x8-inspirerad pixel art)

## Tekniska detaljer

- Anropar `claude-haiku-4-5-20251001` (snabb och billig, räcker för kodgenerering)
- Ingen extern JS-dependency om möjligt – ren vanilla JS
- Syntax highlighting via ett lättviktigt bibliotek (t.ex. highlight.js från CDN) är ok
- Responsiv layout som fungerar på surfplatta i stående läge
