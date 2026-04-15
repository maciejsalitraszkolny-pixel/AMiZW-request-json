# Zadanie – React + API

## 1. Przygotowanie projektu

Najpierw zróbcie **fork** mojego repozytorium na swoje konto GitHub:

`https://github.com/YamiNoKam44/AMiZW-request-json`

Czyli:

* wchodzicie w link,
* klikacie **Fork**,
* tworzy się kopia repozytorium na waszym koncie.

---

## 2. Sklonowanie repozytorium

Utwórzcie sobie folder na komputerze, wejdźcie do niego i otwórzcie tam terminal / cmd.

Następnie wykonajcie:

```bash
git clone LINK_DO_WASZEGO_FORKA
```

Przykład:

```bash
git clone https://github.com/twoj-login/AMiZW-request-json.git
```

Potem wejdźcie do folderu projektu:

```bash
cd AMiZW-react-character-form
```

---

## 3. Instalacja i uruchomienie

W terminalu wpiszcie:

```bash
npm install
npm run dev
```

Po uruchomieniu otwórzcie adres podany w terminalu, najczęściej:

```bash
http://localhost:5173
```

---

## 4. Co trzeba zrobić?

Macie przygotowany projekt startowy.

Waszym zadaniem jest uzupełnić komponent odpowiedzialny za:

* pobieranie danych z API,
* parsowanie danych,
* zapisanie ich do stanu,
* wyświetlenie postów,
* obsługę ładowania,
* obsługę błędów.

---

## 5. Ocenianie

### Ocena 3

* działa pobieranie danych z API
* dane są sparsowane
* posty wyświetlają się na stronie
* użyto `map()`
* każdy element ma `key`

### Ocena 4

* wszystko z oceny 3
* działa `loading`
* działa obsługa błędu
* jest sprawdzenie poprawności odpowiedzi
* działa przycisk ponownego pobrania danych
* wyświetla się tylko 10 postów

### Ocena 5

* wszystko z oceny 4
* dodatkowo przynajmniej jedno własne rozszerzenie, np.:

    * wyszukiwarka po tytule,
    * zmiana limitu postów,
    * sortowanie,
    * osobny komponent `PostCard`,
    * możliwość ukrywania / rozwijania treści posta

---

## 6. Co oddajecie?

Oddajecie:

* link do swojego repozytorium GitHub,
* gotowy kod w branchu / repo,
* działający projekt.

---

## 7. Uwaga

Jeśli komuś nie działa `npm install` albo `npm run dev`, najpierw sprawdźcie:

* czy jesteście w dobrym folderze projektu,
* czy macie zainstalowany Node.js,
* czy repo zostało poprawnie sklonowane.
