# imagilib – referens för ImagiCharm (8x8 LED-display)

ImagiCharm är en bärbar 8x8 pixeldisplay som programmeras i Python via imagi-appen. Modulen `imagilib` är alltid förimporterad. Utöver den finns `random`, `math` och `datetime` tillgängliga via vanlig import.

**Viktigt att förstå:** ImagiCharm kör ingen kod. Koden körs i imagi-appen på telefonen, som renderar resultatet till en sekvens av bildrutor och skickar dem till charmen via Bluetooth. Charmen är alltså en ren display – den lagrar och visar en färdig animation. Det är därför `Animation` + `add_frame()` är det centrala mönstret för animationer, och varför `scrolling_text` inte kan kombineras med `Animation` (de är två olika sätt att producera bildsekvensen).

## Koordinatsystem

Matrisen `m` är 8×8 pixlar. Index: `m[rad][kolumn]`, båda 0–7.

- `m[0][0]` = övre vänstra hörnet
- `m[7][7]` = nedre högra hörnet
- rad ökar nedåt, kolumn ökar åt höger

---

## Fördefinierade variabler

### Pixelmatris

```python
m        # 8x8-matris, tilldela färg per pixel
m[0][0] = on          # tänd pixel
m[7][0] = R           # röd pixel
m[3][3] = (128, 0, 255)  # anpassad färg
```

### Färger

```python
R = (255, 0, 0)       # röd
G = (0, 255, 0)       # grön
B = (0, 0, 255)       # blå
A = (0, 255, 255)     # aqua (cyan)
Y = (255, 255, 0)     # gul
O = (255, 165, 0)     # orange
M = (255, 0, 255)     # magenta
P = (148, 0, 211)     # lila (mörk violett)
W = (255, 255, 255)   # vit
K = (0, 0, 0)         # svart
on = (255, 255, 255)  # tänd (= vit)
off = (0, 0, 0)       # släckt (= svart)
```

Anpassad färg skrivs som en RGB-tupel: `(r, g, b)` där varje värde är 0–255.

### Blinkeffekt

```python
blink_rate = 0    # ingen blinkning (standard)
blink_rate = 1    # blinkar 1 gång per sekund
blink_rate = 2.5  # stöder decimaler, max 3
```

### Utomhusläge (ljusstyrka)

```python
outdoor_mode = False   # normal ljusstyrka (standard)
outdoor_mode = True    # starkare LEDs utomhus
```

---

## Funktioner i imagilib

### `character(char, char_color=on, back_color=0)`

Ritar ett tecken (8x8 pixlar) på matrisen.

- `char` – ett tecken som sträng, t.ex. `"A"` eller `'3'`
- `char_color` – teckenfärg, standard `on` (vit)
- `back_color` – bakgrundsfärg, standard `0` (transparent, bevarar bakgrund)

```python
character("A")                     # vit bokstav, transparent bakgrund
character("A", M)                  # magenta bokstav
character("A", M, B)               # magenta bokstav, blå bakgrund
character("A", back_color=B)       # vit bokstav, blå bakgrund
```

Sätt gradient-bakgrund manuellt och lägg sedan tecken ovanpå:
```python
for i in range(8):
    for j in range(8):
        m[i][j] = (0, 255 - 25 * i, 25 * j)
character("B", K)  # svart bokstav ovanpå gradient
```

### `scrolling_text(text, text_color=on, back_color=off, duration=80, loop_count=0)`

Animerar text som rullar från höger till vänster.

- `text` – sträng, 1–40 tecken
- `text_color` – standard vit
- `back_color` – standard svart
- `duration` – ms per bildruta, 25–16 777 215, standard 80 (lägre = snabbare)
- `loop_count` – antal upprepningar, 0 = loopar för alltid, max 65 535

```python
scrolling_text("hello world")
scrolling_text("hello world", O)                          # orange text
scrolling_text("hello world", O, B)                       # orange på blå
scrolling_text("hello world", K, A, 120)                  # långsammare
scrolling_text("I am " + str(14) + " years old.")         # blanda text och tal
```

**OBS:** `scrolling_text` kan inte kombineras med andra animationer.

**Tips:** Avsluta textsträngen med några mellanslag, annars sitter slutet och början direkt ihop när texten loopar. Två till tre mellanslag brukar se bäst ut:

```python
scrolling_text("hello world   ")   # tre mellanslag ger lagom andrum
```

### `heart(color)`

Ritar ett hjärta i angiven färg.

```python
heart(R)           # rött hjärta
heart((255, 100, 100))  # anpassad rosa
```

### `background(color)`

Sätter alla 64 pixlar till samma färg.

```python
background(B)           # blå bakgrund
background((30, 30, 30))  # mörkgrå
```

### `clear()`

Släcker alla pixlar (sätter allt till `off`). Ekvivalent med `background(0)`.

```python
clear()
```

---

## Animationer – `Animation`-klassen

```python
a = Animation()
```

Bygg animationen frame för frame:

```python
a = Animation()
colors = [R, O, Y, G, A, B, P, M]
for i in range(8):
    background(colors[i])
    a.add_frame(m)          # lägg till nuvarande m som en bildruta
```

`add_frame(m, duration_ms)` – `duration_ms` är valfri, standard 100 ms.

```python
a.add_frame(m, 200)   # 200 ms för denna bildruta
```

Typiskt mönster för en animation:
```python
a = Animation()
for i in range(8):
    clear()
    # rita något på m...
    a.add_frame(m, 150)
```

**OBS:** En `Animation` kan ha som mest **100 bildrutor** (`add_frame`-anrop). Håll loopar inom den gränsen.

---

## Tillgängliga standardbibliotek

Måste importeras explicit.

### `random`

```python
import random

random.randint(0, 7)          # heltal inklusive båda ändarna (0–7)
random.randrange(0, 8)        # heltal 0–7 (exkluderar 8)
random.randrange(0, 10, 2)    # slumpmässigt jämnt tal 0, 2, 4...8
random.choice([R, G, B])      # slumpmässigt element ur lista
random.shuffle(lista)         # blandas in-place
```

Praktiska exempel:
```python
# Slumpmässig bakgrundsfärg
r = random.randint(0, 255)
g = random.randint(0, 255)
b = random.randint(0, 255)
background((r, g, b))

# Slumpmässig pixel tänd per rad
for i in range(8):
    m[i][random.randint(0, 7)] = on
```

### `math`

```python
import math

math.ceil(5.2)        # → 6 (uppåtrundning)
math.floor(5.8)       # → 5 (nedåtrundning)
math.sqrt(25)         # → 5.0 (kvadratrot)
math.pow(3, 2)        # → 9.0 (potens)
math.factorial(4)     # → 24
math.gcd(24, 56)      # → 8 (största gemensamma delare)
```

### `datetime`

```python
import datetime

datetime.date(2026, 6, 9)                # datum
datetime.time(14, 30, 0)                 # tid
datetime.datetime(2026, 6, 9, 14, 30)    # datum + tid

# Visa aktuellt datum (används för nedräkningar)
today = datetime.date.today()
```

---

## Vanliga mönster

### Loopa över alla pixlar

```python
for i in range(8):
    for j in range(8):
        m[i][j] = R
```

### Diagonal

```python
for i in range(8):
    for j in range(8):
        if i == j:
            m[i][j] = Y
        else:
            m[i][j] = M
```

### Triangel

```python
for i in range(8):
    for j in range(8):
        if i > j:
            m[i][j] = P
        else:
            m[i][j] = A
```

### Gradient

```python
for i in range(8):
    for j in range(8):
        m[i][j] = (0, 255 - 25 * i, 25 * j)
```

### Regnbågsanimation

```python
a = Animation()
colors = [R, O, Y, G, A, B, P, M]
for i in range(len(colors)):
    background(colors[i])
    a.add_frame(m)
```

### Visa ett tal

```python
score = 7
character(str(score), Y)          # visa siffra
scrolling_text(str(score), G)     # rulla siffra
```

---

## Begränsningar att tänka på

- `scrolling_text` kan inte kombineras med `Animation`
- Max 40 tecken i `scrolling_text`
- Max 100 bildrutor i en `Animation`
- Pixelindex är alltid 0–7 (utanför det kraschar koden)
- Använd `//` (heltalsdivision) när index beräknas med division: `m[6//2][0]`
- `math` fungerar inte med komplexa tal
- Färger är alltid `(r, g, b)`-tuplar med värden 0–255

