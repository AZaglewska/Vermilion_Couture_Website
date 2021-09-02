import React from "react";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";
import Line from "../../atoms/Line";
import BackgroundBanner from "../../atoms/BackgroundBanner";
import backgroundImage from "../../assets/images/background/IMG_2464-Edit.jpg";
import {
  PrivacyPolicyContent,
  PrivacyPolicyElements,
  PrivacyPolicyList,
  PrivacyPolicyListMain,
  PrivacyPolicyNested,
} from "./MappedPagesStyles/PrivacyPolicyStyles";

const PrivacyPolicyPL = () => {
  return (
    <PrivacyPolicyContent>
      <BackgroundBanner image={backgroundImage} />
      <PrivacyPolicyElements>
        <Title>Polityka prywatności </Title>
        <Line />
        <Text styleType="biggerText" privacyPolicy>
          Polityka prywatności opisuje zasady przetwarzania przez nas informacji
          na Twój temat, w tym danych osobowych oraz ciasteczek, czyli tzw.
          cookies.
        </Text>
      </PrivacyPolicyElements>
      <PrivacyPolicyList>
        <PrivacyPolicyListMain>
          <p first>Informacje ogólne</p>
          <PrivacyPolicyNested>
            <li>
              Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod
              adresem:{" "}
              <a
                href="https://vermilioncouture.com/"
                target="_blank"
                rel="noreferrer"
              >
                https://vermilioncouture.com/
              </a>
            </li>
            <li>
              Operatorem serwisu oraz Administratorem danych osobowych jest:
              Vermilion Couture Katarzyna Borychowska Chełmska 6/8 m 1 00-725
              Warszawa
            </li>
            <li>
              Adres kontaktowy poczty elektronicznej operatora:
              contact@vermilioncouture.com
            </li>
            <li>
              Operator jest Administratorem Twoich danych osobowych w
              odniesieniu do danych podanych dobrowolnie w Serwisie.
            </li>
            <li>
              Serwis wykorzystuje dane osobowe w następujących celach:
              <ul>
                <li>Obsługa zapytań przez formularz</li>
                <li>Realizacja zamówionych usług</li>
                <li>Prezentacja oferty lub informacji</li>
              </ul>
            </li>
            <li>
              Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i
              ich zachowaniu w następujący sposób:
              <ul>
                <li>
                  Poprzez dobrowolnie wprowadzone w formularzach dane, które
                  zostają wprowadzone do systemów Operatora.
                </li>
                <li>
                  Poprzez zapisywanie w urządzeniach końcowych plików cookie
                  (tzw. „ciasteczka”).
                </li>
              </ul>
            </li>
          </PrivacyPolicyNested>
        </PrivacyPolicyListMain>
        <PrivacyPolicyListMain>
          <p>Wybrane metody ochrony danych stosowane przez Operatora</p>
          <PrivacyPolicyNested>
            <li>
              Istotnym elementem ochrony danych jest regularna aktualizacja
              wszelkiego oprogramowania, wykorzystywanego przez Operatora do
              przetwarzania danych osobowych, co w szczególności oznacza
              regularne aktualizacje komponentów programistycznych.
            </li>
          </PrivacyPolicyNested>
        </PrivacyPolicyListMain>
        <PrivacyPolicyListMain>
          <p>Hosting</p>
          <PrivacyPolicyNested>
            <li>
              Serwis jest hostowany (technicznie utrzymywany) na serwera
              operatora:{" "}
              <a
                href="https://www.aftermarket.pl/"
                target="_blank"
                rel="noreferrer"
              >
                aftermarket.pl Limited
              </a>
            </li>
          </PrivacyPolicyNested>
        </PrivacyPolicyListMain>
        <PrivacyPolicyListMain>
          <p>
            Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych
          </p>
          <PrivacyPolicyNested>
            <li>
              W niektórych sytuacjach Administrator ma prawo przekazywać Twoje
              dane osobowe innym odbiorcom, jeśli będzie to niezbędne do
              wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków
              ciążących na Administratorze. Dotyczy to takich grup odbiorców:
              <ul>
                <li>kurierzy</li>
                <li>operatorzy pocztowi</li>
                <li>banki</li>
                <li>
                  upoważnieni pracownicy i współpracownicy, którzy korzystają z
                  danych w celu realizacji celu działania strony
                </li>
              </ul>
            </li>
            <li>
              Twoje dane osobowe przetwarzane przez Administratora nie dłużej,
              niż jest to konieczne do wykonania związanych z nimi czynności
              określonych osobnymi przepisami (np. o prowadzeniu rachunkowości).
              W odniesieniu do danych marketingowych dane nie będą przetwarzane
              dłużej niż przez 3 lata.
            </li>
            <li>
              Przysługuje Ci prawo żądania od Administratora:
              <ul>
                <li>dostępu do danych osobowych Ciebie dotyczących,</li>
                <li>ich sprostowania,</li>
                <li>usunięcia,</li>
                <li>ograniczenia przetwarzania,</li>
                <li>oraz przenoszenia danych.</li>
              </ul>
            </li>
            <li>
              Przysługuje Ci prawo do złożenia sprzeciwu w zakresie
              przetwarzania wskazanego w pkt 3.3 c) wobec przetwarzania danych
              osobowych w celu wykonania prawnie uzasadnionych interesów
              realizowanych przez Administratora, w tym profilowania, przy czym
              prawo sprzeciwu nie będzie mogło być wykonane w przypadku
              istnienia ważnych prawnie uzasadnionych podstaw do przetwarzania,
              nadrzędnych wobec Ciebie interesów, praw i wolności, w
              szczególności ustalenia, dochodzenia lub obrony roszczeń.
            </li>
            <li>
              Na działania Administratora przysługuje skarga do Prezesa Urzędu
              Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.
            </li>
            <li>
              Podanie danych osobowych jest dobrowolne, lecz niezbędne do
              obsługi Serwisu.
            </li>
            <li>
              W stosunku do Ciebie mogą być podejmowane czynności polegające na
              zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu
              świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia
              przez Administratora marketingu bezpośredniego.
            </li>

            <li>
              Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu
              przepisów o ochronie danych osobowych. Oznacza to, że nie
              przesyłamy ich poza teren Unii Europejskiej.
            </li>
          </PrivacyPolicyNested>
        </PrivacyPolicyListMain>
        <PrivacyPolicyListMain>
          <p>Informacje w formularzach</p>
          <PrivacyPolicyNested>
            <li>
              Serwis zbiera informacje podane dobrowolnie przez użytkownika, w
              tym dane osobowe, o ile zostaną one podane.
            </li>
            <li>
              Serwis może zapisać informacje o parametrach połączenia
              (oznaczenie czasu, adres IP).
            </li>
            <li>
              Serwis, w niektórych wypadkach, może zapisać informację
              ułatwiającą powiązanie danych w formularzu z adresem e-mail
              użytkownika wypełniającego formularz. W takim wypadku adres e-mail
              użytkownika pojawia się wewnątrz adresu url strony zawierającej
              formularz.
            </li>
            <li>
              Dane podane w formularzu są przetwarzane w celu wynikającym z
              funkcji konkretnego formularza, np. w celu dokonania procesu
              obsługi zgłoszenia serwisowego lub kontaktu handlowego,
              rejestracji usług itp. Każdorazowo kontekst i opis formularza w
              czytelny sposób informuje, do czego on służy.
            </li>
          </PrivacyPolicyNested>
        </PrivacyPolicyListMain>
        <PrivacyPolicyListMain>
          <p>Logi Administratora</p>
          <PrivacyPolicyNested>
            <li>
              Informacje zachowaniu użytkowników w serwisie mogą podlegać
              logowaniu. Dane te są wykorzystywane w celu administrowania
              serwisem.
            </li>
          </PrivacyPolicyNested>
        </PrivacyPolicyListMain>
        <PrivacyPolicyListMain>
          <p>Istotne techniki marketingowe</p>
          <PrivacyPolicyNested>
            <li>
              Operator stosuje analizę statystyczną ruchu na stronie, poprzez
              Google Analytics (Google Inc. z siedzibą w USA). Operator nie
              przekazuje do operatora tej usługi danych osobowych, a jedynie
              zanonimizowane informacje. Usługa bazuje na wykorzystaniu
              ciasteczek w urządzeniu końcowym użytkownika. W zakresie
              informacji o preferencjach użytkownika gromadzonych przez sieć
              reklamową Google użytkownik może przeglądać i edytować informacje
              wynikające z plików cookies przy pomocy narzędzia:{" "}
              <a
                href="https://adssettings.google.com/authenticated?hl=pl"
                target="_blank"
                rel="noreferrer"
              >
                https://adssettings.google.com/authenticated?hl=pl
              </a>
            </li>
            <li>
              Operator stosuje techniki remarketingowe, pozwalające na
              dopasowanie przekazów reklamowych do zachowania użytkownika na
              stronie, co może dawać złudzenie, że dane osobowe użytkownika są
              wykorzystywane do jego śledzenia, jednak w praktyce nie dochodzi
              do przekazania żadnych danych osobowych od Operatora do operatorom
              reklam. Technologicznym warunkiem takich działań jest włączona
              obsługa plików cookie.
            </li>
            <li>
              Operator stosuje korzysta z piksela Facebooka. Ta technologia
              powoduje, że serwis Facebook (Facebook Inc. z siedzibą w USA) wie,
              że dana osoba w nim zarejestrowana korzysta z Serwisu. Bazuje w
              tym wypadku na danych, wobec których sam jest administratorem,
              Operator nie przekazuje od siebie żadnych dodatkowych danych
              osobowych serwisowi Facebook. Usługa bazuje na wykorzystaniu
              ciasteczek w urządzeniu końcowym użytkownika.
            </li>
            <li>
              Operator stosuje rozwiązanie badające zachowanie użytkowników
              poprzez tworzenie map ciepła oraz nagrywanie zachowania na
              stronie. Te informacje są anonimizowane zanim zostaną przesłane do
              operatora usługi tak, że nie wie on jakiej osoby fizycznej one
              dotyczą. W szczególności nagrywaniu nie podlegają wpisywane hasła
              oraz inne dane osobowe.
            </li>
            <li>
              Operator stosuje rozwiązanie automatyzujące działanie Serwisu w
              odniesieniu do użytkowników, np. mogące przesłać maila do
              użytkownika po odwiedzeniu konkretnej podstrony, o ile wyraził on
              zgodę na otrzymywanie korespondencji handlowej od Operatora.
            </li>
            <li>
              Operator może stosować profilowanie w rozumieniu przepisów o
              ochronie danych osobowych
            </li>
          </PrivacyPolicyNested>
        </PrivacyPolicyListMain>
        <PrivacyPolicyListMain>
          <p>Informacja o plikach cookies</p>
          <PrivacyPolicyNested>
            <li>Serwis korzysta z plików cookies.</li>
            <li>
              Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w
              szczególności pliki tekstowe, które przechowywane są w urządzeniu
              końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze
              stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę
              strony internetowej, z której pochodzą, czas przechowywania ich na
              urządzeniu końcowym oraz unikalny numer.
            </li>
            <li>
              Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika
              Serwisu pliki cookies oraz uzyskującym do nich dostęp jest
              operator Serwisu.
            </li>
            <li>
              Pliki cookies wykorzystywane są w następujących celach:
              <ul>
                <li>
                  utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki
                  której użytkownik nie musi na każdej podstronie Serwisu
                  ponownie wpisywać loginu i hasła,
                </li>
                <li>
                  realizacji celów określonych powyżej w części "Istotne
                  techniki marketingowe".
                </li>
              </ul>
            </li>
            <li>
              W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików
              cookies: „sesyjne” (session cookies) oraz „stałe” (persistent
              cookies). Cookies „sesyjne” są plikami tymczasowymi, które
              przechowywane są w urządzeniu końcowym Użytkownika do czasu
              wylogowania, opuszczenia strony internetowej lub wyłączenia
              oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies
              przechowywane są w urządzeniu końcowym Użytkownika przez czas
              określony w parametrach plików cookies lub do czasu ich usunięcia
              przez Użytkownika.
            </li>
            <li>
              Oprogramowanie do przeglądania stron internetowych (przeglądarka
              internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików
              cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu
              mogą dokonać zmiany ustawień w tym zakresie. Przeglądarka
              internetowa umożliwia usunięcie plików cookies. Możliwe jest także
              automatyczne blokowanie plików cookies Szczegółowe informacje na
              ten temat zawiera pomoc lub dokumentacja przeglądarki
              internetowej.
            </li>
            <li>
              Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre
              funkcjonalności dostępne na stronach internetowych Serwisu.
            </li>
            <li>
              Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika
              Serwisu wykorzystywane mogą być również przez współpracujące z
              operatorem Serwisu podmioty, w szczególności dotyczy to firm:
              Google (Google Inc. z siedzibą w USA), Facebook (Facebook Inc. z
              siedzibą w USA), Twitter (Twitter Inc. z siedzibą w USA).
            </li>
          </PrivacyPolicyNested>
        </PrivacyPolicyListMain>
        <PrivacyPolicyListMain>
          <p>
            Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?
          </p>
          <PrivacyPolicyNested>
            <li>
              Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić
              ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików
              cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa,
              utrzymania preferencji użytkownika może utrudnić, a w skrajnych
              przypadkach może uniemożliwić korzystanie ze stron www
            </li>
            <li>
              W celu zarządzania ustawienia cookies wybierz z listy poniżej
              przeglądarkę internetową, której używasz i postępuj zgodnie z
              instrukcjami:
              <ul>
                <li>Edge</li>
                <li>Internet Explorer</li>
                <li>Chrome</li>
                <li>Safari</li>
                <li>Firefox</li>
                <li>Opera</li>
                Urządzenia mobilne:
                <li>Android</li>
                <li>Safari (iOS)</li>
                <li>Windows Phone</li>
              </ul>
            </li>
          </PrivacyPolicyNested>
        </PrivacyPolicyListMain>
        <Line />
      </PrivacyPolicyList>
    </PrivacyPolicyContent>
  );
};

export default PrivacyPolicyPL;
