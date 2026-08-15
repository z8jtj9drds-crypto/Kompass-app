# Kompass — Installationsanleitung

Diese 6 Dateien ergeben zusammen deine eigenständige App:
`index.html`, `app.jsx`, `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`

Damit dein Handy sie als App installieren kann, müssen sie unter einer echten
`https://`-Adresse erreichbar sein (aus Sicherheitsgründen erlauben Handys
Installation nur über HTTPS, nicht von einer lokalen Datei). Der einfachste
kostenlose Weg dafür ist **GitHub Pages**.

---

## Schritt 1: Kostenloses GitHub-Konto (falls noch nicht vorhanden)

Auf github.com registrieren — dauert 2 Minuten.

## Schritt 2: Neues Repository anlegen

1. Auf github.com oben rechts auf **+** → **New repository**
2. Name z. B. `kompass-app` eingeben
3. Auf **Public** stellen (wichtig, sonst funktioniert GitHub Pages nicht kostenlos)
4. **Create repository** klicken

## Schritt 3: Dateien hochladen

1. Im neuen Repository auf **Add file** → **Upload files** klicken
2. Alle 6 Dateien (`index.html`, `app.jsx`, `manifest.json`, `sw.js`,
   `icon-192.png`, `icon-512.png`) per Drag & Drop reinziehen
3. Unten auf **Commit changes** klicken

## Schritt 4: GitHub Pages aktivieren

1. Im Repository auf **Settings** (oben in der Menüleiste)
2. Links auf **Pages**
3. Unter "Branch" **main** auswählen, Ordner **/ (root)** lassen
4. **Save** klicken
5. Kurz warten (~1 Minute), dann erscheint oben eine grüne Meldung mit
   deiner Adresse, z. B.:
   `https://deinname.github.io/kompass-app/`

## Schritt 5: Auf dem Handy installieren

**iPhone (Safari):**
1. Die Adresse aus Schritt 4 in Safari öffnen (muss Safari sein, nicht Chrome)
2. Teilen-Symbol (Quadrat mit Pfeil nach oben) antippen
3. **Zum Home-Bildschirm** auswählen
4. **Hinzufügen** bestätigen

**Android (Chrome):**
1. Die Adresse in Chrome öffnen
2. Chrome zeigt meist automatisch unten einen Hinweis **"App installieren"** —
   antippen
3. Falls nicht: Drei-Punkte-Menü oben rechts → **App installieren**

Danach hast du ein Icon auf dem Homescreen, das ohne Browser-Leiste öffnet.

---

## Deine Daten auf ein neues Handy mitnehmen

1. In der App oben rechts auf das Zahnrad-Symbol (⚙️) tippen
2. **Daten exportieren** — lädt eine Sicherungsdatei herunter
3. Diese Datei aufs neue Handy übertragen (AirDrop, E-Mail an dich selbst,
   Cloud-Speicher wie iCloud/Google Drive — was dir am leichtesten fällt)
4. Auf dem neuen Handy: App installieren (siehe oben), dann Zahnrad → 
   **Datei auswählen & importieren** → die Sicherungsdatei auswählen

Deine Daten liegen sonst **nur lokal auf dem jeweiligen Gerät** — ohne
diesen Export/Import-Schritt sieht ein neues Handy leere Daten, weil nichts
automatisch zwischen Geräten synchronisiert wird.

---

## Änderungen später vornehmen

Wenn du später etwas an der App ändern lässt: die aktualisierte `app.jsx`
(und ggf. andere Dateien) im selben GitHub-Repository hochladen und die alte
Version überschreiben (**Add file** → **Upload files**, GitHub fragt automatisch,
ob die bestehende Datei ersetzt werden soll). Die Adresse bleibt gleich,
dein Homescreen-Icon zeigt automatisch die neue Version beim nächsten Öffnen.
