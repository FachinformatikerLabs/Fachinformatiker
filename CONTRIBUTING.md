# Leitfaden für Beiträge

Hallo! Wir freuen uns, dass du daran interessiert bist, zu Fachinformatiker beizutragen. Bitte nimm dir einen Moment Zeit, um den folgenden Leitfaden zu lesen, bevor du deinen Beitrag einreichst.

Sieh dir auch https://github.com/nyxb/contribute an.

Für Hinweise zur Beitragserstellung, siehe das[Beitrags-README.](#Beiträge).

### Online

Du kannst [StackBlitz Codeflow](https://stackblitz.com/codeflow) verwenden, um Bugs zu beheben oder Funktionen zu implementieren. Du wirst auch eine Codeflow-Schaltfläche auf Pull Requests sehen, um sie ohne lokale Einrichtung zu überprüfen. Sobald das Fachinformatiker-Repo in Codeflow geklont wurde, startet der Entwicklungs-Server automatisch und gibt die URL aus, um die App zu öffnen. Du solltest unten rechts eine Aufforderung erhalten, sie im Editor oder in einem anderen Tab zu öffnen. Um mehr zu erfahren, schau dir die [Codeflow-Dokumentation](https://developer.stackblitz.com/codeflow/what-is-codeflow) an.

[![Öffnen in Codeflow](https://developer.stackblitz.com/img/open_in_codeflow.svg)](https://pr.new/elk-zone/elk)

### Lokale Einrichtung

Zum Entwickeln und Testen des Fachinformatiker-Pakets:

1. Forke das Elk-Repository zu deinem eigenen GitHub-Konto und klone es dann auf dein lokales Gerät.

2. Stelle sicher, dass du die neueste Node.js-Version (16.x) verwendest.
Wenn du [nvm](https://github.com/nvm-sh/nvm) hast, kannst du `nvm i` ausführen, um die benötigte Version zu installieren.

3. Der Paketmanager, der zum Installieren und Verlinken von Abhängigkeiten verwendet wird, muss [pnpm](https://pnpm.io/) v7 sein. Um es zu verwenden, musst du zuerst [Corepack](https://github.com/nodejs/corepack) aktivieren, indem du `corepack enable` ausführst. (Hinweis: Unter Linux in einer Standard-Node-16+-Umgebung solltest du den Anweisungen zur Installation über Node's `corepack` folgen, anstatt den `curl`-Befehl zu verwenden)

4. Checke einen Branch aus, auf dem du arbeiten und deine Änderungen committen kannst:
```shell
git checkout -b my-new-branch
```

1. Führe `pnpm i` im Stammverzeichnis von Fachinformatiker aus

2. Führe `pnpm dev` im Stammverzeichnis von Fachinformatiker aus, um den Entwicklungs-Server zu starten.

Wir empfehlen die Installation von [nyxi](https://github.com/nyxb/nyxi/blob/main/docs/commands.md#nyxi), das den richtigen Paketmanager in jedem deiner Projekte verwenden wird. Wenn `nyxi` installiert ist, kannst du stattdessen Folgendes ausführen:

```
nyxi
nyxr dev
```

### Testen

#### ⚠️ Achtung: Die Testsuite ist derzeit nicht vollständig.

Fachinformatiker verwendet [Vitest](https://vitest.dev). Du kannst die Test-Suite mit folgendem Befehl ausführen:

```
nyxr test
``` 
# Beiträge

Wir verwenden [Docus](https://docus.dev/) als Website-Generator und stellen sie über [Vercel](https://vercel.com) bereit.

## Schnellstart

### Voraussetzungen

- GitHub-Konto
- Git auf deinem Rechner installiert
- Node >16.x installiert
  - Mit `node -v` kannst du sehen, welche Version du installiert hast.
  - Mit `nvm install node` kannst du auf die neueste Version upgraden.
  - Siehe die [nvm-Dokumentation](https://github.com/nvm-sh/nvm#installing-and-updating) für Informationen zur Installation von `nvm`.
- [pnpm](https://pnpm.io/installation) installiert
- im besten fall [nyxi](https://github.com/nyxb/nyxi/blob/main/docs/commands.md#nyxi) installiert

### Installation und Vorschau

1. [Fachinformatiker GitHub-Projekt](https://github.com/nyxb/Fachinformatiker/fork) in dein eigenes Konto
2. Klone dein Fork auf deinen lokalen Rechner
3. Wechsle im Terminal in das Verzeichnis, in das du geklont hast, mit `cd`
4. Gib `cd Fachinformatiker` ein, um in den Ordner `Fachinformatiker` zu wechseln
5. Führe `pnpm i` oder `nyxi` aus
   Hinweis: Führe dies im Ordner `docs` des Projekts aus.
6. Führe `npm run dev` oder `nyxr dev` aus, um eine Vorschau zu starten
7. Besuche `localhost:3000/`, um eine Live-Vorschau der Dokumentation zu sehen

### Beiträge leisten

Wenn du bereit bist, deine Arbeit an das Haupt-Repo von Fachinformatiker zurückzusenden, erstelle einen PR.

1. Wenn es schon eine Weile her ist, synchronisiere dein Fork mit dem Upstream-Repo auf GitHub.
2. Arbeite in einem Branch auf deinem Fork
   Mit `git checkout -b ZweigNameZuVerwenden` kannst du einen Arbeitsbranch erstellen, der sich von `main` unterscheidet.
3. Arbeite in deinem bevorzugten Editor
4. Commite Änderungen oft und schreibe aussagekräftige Commit-Messages
5. Pushe die Änderungen von deinem lokalen Rechner auf dein Fork auf GitHub
6. Gehe zu deinem Fork des Fachinformatiker-Projekts in deinem GitHub-Konto
7. Wähle den Tab **Pull Request**
8. Wähle **New Pull Request**
9. Bestätige die Repo/Branches zum Vergleich
   - Das Basis-Repo sollte **nyxb/Fachinformatiker** sein
   - Der Basis-Branch sollte **main** sein
   - Das Head-Repository sollte dein Fork sein
   - Der Vergleichsbranch sollte der Arbeitsbranch sein, den du einreichen möchtest
   Wenn du nicht vier Dropdowns siehst, stelle sicher, dass du über Forks vergleichst.
10. Füge eine Beschreibung der Änderungen hinzu, die dein Antrag macht
11. Wähle **Add Pull Request**

Andere Teammitglieder werden deinen PR überprüfen und Kommentare oder Vorschläge über den PR machen.
Du kannst weiterhin zusätzliche Änderungen vornehmen und/oder Feedback umsetzen, indem du weitere Commits im Branch auf deinem Fork machst.
IMMER IN DEINEM FORK/BRANCH ARBEITEN.

## Schreiben

### Tipps

- Dokumente befinden sich im Ordner `/content`
- Schreibe in Standard-Markdown
- Siehe den Docus-Leitfaden [Seiten schreiben](https://docus.dev/introduction/writing-pages)
- Docus bietet zusätzliche [Komponenten](https://docus.dev/api/components), um den Standard-Markdown zu erweitern

Natürlich, hier ist eine mögliche Übersetzung des angegebenen Textes mit angepassten Richtlinien und Ressourcen für den deutschen Kontext:

### Standards

Schreibe in **Hochdeutsch** mit der Rechtschreibung, wie sie im [Duden](https://www.duden.de) zu finden ist.
Übersetzungen und Lokalisierungen werden separat behandelt, wenn Verfügbarkeit oder Notwendigkeit es zulassen.

Verwende [**semantische Zeilenumbrüche**](https://rhodesmill.org/brandon/2012/one-sentence-per-line/) mit nicht mehr als einem Satz pro Zeile.
Um Absätze zu erstellen, verwende eine leere Zeile.

Es gibt derzeit keine festgelegten Hausstilregeln.
Wenn wir welche hinzufügen, werden sie in diesem Dokument zu finden sein.

#### Stilrichtlinien

Befolge die erste Richtlinie, die einen anwendbaren Standard aus der untenstehenden Reihenfolge erwähnt:

1. Als Basisstandard verwende die [Leichte Sprache-Regeln](https://www.leichte-sprache.de) der Bundesregierung.
2. Für Benutzeroberfläche, Geräte und andere technische Hinweise, beziehe dich auf den [**Google Developer Style Guide**](https://developers.google.com/style) (auf Englisch).
3. Als sekundäre Referenz zum Google-Leitfaden, beziehe dich auf den [Microsoft Style Guide](https://docs.microsoft.com/style-guide/welcome/) (auf Englisch), dann auf das [Handbuch für den Duden-Redaktionsstil](https://www.duden.de/redaktionsstil) (als deutsche Alternative).

Wir verwenden den [Duden](https://www.duden.de) als Standardwörterbuch für die Rechtschreibung.

### Bilder

Platziere Bilddateien im Ordner /docs/public/images.
Du kannst Unterordner erstellen, um die Bilder zu organisieren.

Um ein Bild zu einem Dokument hinzuzufügen, verwende Standard-Markdown mit [Alt-Text](https://accessibility.huit.harvard.edu/describe-content-images):

```md
[![Alt-Text](/docs/images/image.svg)](URL.for.hyperlink)
[![StackBlitz-Logo](/docs/images/stackblitz.svg)](https://stackblitz.com/)
```

## Hausstile

Bisher noch keine definiert

