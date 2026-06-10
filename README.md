# ImagiCharm Kodmagi

En liten webbapp där du beskriver vad du vill visa på din [ImagiCharm](https://imagilabs.com/) (en 8×8 LED-display) och får färdig Python-kod att klistra in i imagi-appen.

## Så funkar det

1. Skriv en beskrivning på svenska, t.ex. *"ett regnbågshjärta som blinkar"*.
2. Appen skickar beskrivningen till Claude tillsammans med en referens för `imagilib`.
3. Du får tillbaka körbar Python-kod – kopiera och klistra in i imagi-appen.

Koden körs inte på charmen själv. Den körs i imagi-appen på telefonen/plattan, som renderar bilden och skickar färdiga bildrutor till charmen via Bluetooth.

## API-nyckel

Appen anropar Anthropic API direkt från webbläsaren. Första gången frågar den efter en API-nyckel som sparas i `localStorage` på enheten – den finns aldrig i källkoden och skickas ingen annanstans.

## Filer

- `index.html` – hela appen (HTML + CSS + JS i en fil)
- `imagilib_reference.md` – biblioteksreferens som skickas med i varje anrop
- `manifest.json` + `sw.js` – gör appen installerbar som PWA
- `icon-*.png` – appikon

## Köra lokalt

Servera mappen över http (inte `file://`):

```sh
python3 -m http.server
```

Öppna sedan `http://localhost:8000`.
