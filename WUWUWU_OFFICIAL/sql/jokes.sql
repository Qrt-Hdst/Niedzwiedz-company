-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 26 Lip 2019, 07:59
-- Wersja serwera: 10.3.16-MariaDB
-- Wersja PHP: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `rac`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `jokes`
--

CREATE TABLE `jokes` (
  `id` int(11) NOT NULL,
  `Tytul` text COLLATE utf8_polish_ci NOT NULL,
  `Narodowosc` text COLLATE utf8_polish_ci NOT NULL,
  `Tresc` text COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `jokes`
--

INSERT INTO `jokes` (`id`, `Tytul`, `Narodowosc`, `Tresc`) VALUES
(1, 'Handlarz koni', 'Żydowska', 'Pewien chełmski mędrzec pojechał na koński targ, aby kupić sobie konia. Handlarz końmi zachwalał jedno ze swoich zwerząt:\r\n-To wspaniała sztuka, szybki jak wiatr. Pomyśl, wsiądziesz na niego w Chełmie o trzeciej nad ranem, a już o szóstej będziesz w Lublinie!\r\nChełmianin skrzywił się:\r\n-To nie dla mnie - powiedział - Co ja będę u licha robił w Lubinie o tak wczesnej porze?'),
(2, 'Lamencin', 'Żydowska', 'Aron i Mosze jadą pociągiem do Berdyczowa. Zapada noc. Pociąg zatrzymuje się na jakiejś stacji.\r\nAron:\r\n- Mosze, ty się popatrz, co to za stacja?\r\nMosze patrzy za okno:\r\n- Lamencin.\r\n- A to jeszcze mamy czas.\r\nPociąg rusza, po pewnym czasie staje.\r\n- Mosze, ty się popatrz, co to za stacja?\r\n- Lamencin.\r\n- A to jeszcze mamy czas.\r\nPociąg znów rusza, znów staje.\r\n- Mosze, ty sie popatrz, co to za stacja?\r\n- Lamencin.\r\n- Jak to, znowu Lamencin?\r\nAron odsuwa Moszego, wychyla się przez okno.\r\n- Ty durniu, ty jeden! To nie Lamencin, to \"Dla mężczyzn\"!'),
(3, 'Rabin i ksiądz', 'Żydowska', 'W pewnym mieście obok siebie znajdowały się Synagoga Żydowska i kościół. W sobotę idzie Rabin do Synagogi patrzy a tu ksiądz myje mu samochód, no to się rabin ucieszył ale i zastanowił. Następnego dnia czyli w niedziele idzie ksiądz na msze patrzy a tu mu rabin odcina rurę wydechowa w samochodzie.\r\n- Rabin co ty robisz z moim samochodem - krzyczy ksiądz.\r\nNa to rabin odpowiada;\r\n- Ty mi wczoraj ochrzciłeś samochód to ja ci dzisiaj twój obrzezam.'),
(4, 'Niebieski atrament', 'Żydowska', 'Dawno temu rosyjski Żyd odwiedził swoją rodzinę w Izraelu. Przed powrotem do do Krainy Sierpa i Młota umówił się z nimi, że listy pisane przez niego niebieskim atramentem będą oznaczały, że wszystko w porządku, a te pisane zielonym oznaczać będą, że ma problemy lecz boi się o nich pisać.\r\nPierwszy list przychodzi do Izraela już po paru tygodniach i jest napisany ... niebieskim atramentem. Pierwsze zdanie brzmi:\r\n\"- Żyje się tu wspaniale, niczego nam nie brakuje i wszystko można kupić. No może za wyjątkiem zielonego atramentu...\"'),
(5, '3 centy', 'Żydowska', 'Pewien stary żydowski żebrak siedzi na ulicy ze swoim garnuszkiem i zaczepia przechodzącego obok mężczyznę:\r\n- Może ma pan dla mnie 3 centy na kawę...\r\n- A gdzie kupisz kawę za 3 centy ? - pyta mężczyzna\r\n- W hurcie, ma sie rozumieć.');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `jokes`
--
ALTER TABLE `jokes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `jokes`
--
ALTER TABLE `jokes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
