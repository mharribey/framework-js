-- phpMyAdmin SQL Dump
-- version 4.6.5.1
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:8889
-- Généré le :  Dim 07 Janvier 2018 à 15:18
-- Version du serveur :  5.6.34
-- Version de PHP :  7.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `launchpad`
--

-- --------------------------------------------------------

--
-- Structure de la table `Musician`
--

CREATE TABLE `Musician` (
  `UserID` int(11) NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `Musician`
--

INSERT INTO `Musician` (`UserID`, `Username`, `Password`) VALUES
(1, 'zidane', '33333');

-- --------------------------------------------------------

--
-- Structure de la table `Sound`
--

CREATE TABLE `Sound` (
  `SoundId` int(11) NOT NULL,
  `SoundName` varchar(255) NOT NULL,
  `TimelineID` int(11) DEFAULT NULL,
  `Timecode` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `Sound`
--

INSERT INTO `Sound` (`SoundId`, `SoundName`, `TimelineID`, `Timecode`) VALUES
(1, 'j', 28, '35'),
(2, 'o', 35, '7'),
(3, 'k', 35, '30'),
(4, 'j', 35, '43'),
(5, 'x', 35, '54'),
(6, 'm', 35, '72'),
(7, 'v', 36, '13'),
(8, 'c', 36, '25'),
(9, 'x', 36, '38'),
(10, 'h', 36, '59'),
(11, 'x', 36, '31'),
(12, 'c', 36, '43'),
(13, 'v', 36, '56'),
(14, 'b', 36, '69'),
(15, 'b', 36, '22'),
(16, 'a', 36, '25'),
(17, 's', 36, '29'),
(18, 's', 36, '32'),
(19, 'x', 36, '31'),
(20, 'c', 36, '43'),
(21, 'v', 36, '56'),
(22, 'b', 36, '69'),
(23, 'b', 36, '22'),
(24, 'a', 36, '25'),
(25, 's', 36, '29'),
(26, 's', 36, '32'),
(27, 'x', 36, '18'),
(28, 'c', 36, '30'),
(29, 'v', 36, '43'),
(30, 'b', 36, '55'),
(31, 'v', 37, '22'),
(32, 'b', 37, '37'),
(33, 'c', 37, '54'),
(34, 'x', 38, '24'),
(35, 'h', 38, '37'),
(36, 'l', 38, '50'),
(37, 'k', 38, '64'),
(38, 'j', 38, '74'),
(39, 'v', 38, '85'),
(40, 'b', 38, '95');

-- --------------------------------------------------------

--
-- Structure de la table `Timeline`
--

CREATE TABLE `Timeline` (
  `TimelineID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `TimelineName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `Timeline`
--

INSERT INTO `Timeline` (`TimelineID`, `UserID`, `TimelineName`) VALUES
(5, 1, 'timeline de test'),
(6, 1, 'timeline de test'),
(7, 1, 'timeline de test'),
(8, 1, 'timeline de test'),
(9, 1, 'timeline de test'),
(10, 1, 'timeline de test'),
(11, 1, 'timeline de test'),
(12, 1, 'timeline de test'),
(13, 1, 'timeline de test'),
(14, 1, 'timeline de test'),
(15, 1, 'timeline de test'),
(16, 1, 'timeline de test'),
(17, 1, 'timeline de test'),
(18, 1, 'timeline de test'),
(19, 1, 'timeline de test'),
(20, 1, 'timeline de test'),
(21, 1, 'timeline de test'),
(22, 1, 'timeline de test'),
(23, 1, 'timeline de test'),
(24, 1, 'timeline de test'),
(25, 1, 'timeline de test'),
(26, 1, 'timeline de test'),
(27, 1, 'timeline de test'),
(28, 1, 'timeline de test'),
(29, 1, 'timeline de test'),
(30, 1, 'timeline de test'),
(31, 1, 'timeline de test'),
(32, 1, 'timeline de test'),
(33, 1, 'timeline de test'),
(34, 1, 'timeline de test'),
(35, 1, 'timeline de test'),
(36, 1, 'timeline de test'),
(37, 1, ' bass'),
(38, 1, ' niska - réseaux');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `Musician`
--
ALTER TABLE `Musician`
  ADD PRIMARY KEY (`UserID`),
  ADD UNIQUE KEY `Username` (`Username`);

--
-- Index pour la table `Sound`
--
ALTER TABLE `Sound`
  ADD PRIMARY KEY (`SoundId`),
  ADD KEY `TimelineID` (`TimelineID`);

--
-- Index pour la table `Timeline`
--
ALTER TABLE `Timeline`
  ADD PRIMARY KEY (`TimelineID`),
  ADD KEY `UserID` (`UserID`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `Musician`
--
ALTER TABLE `Musician`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `Sound`
--
ALTER TABLE `Sound`
  MODIFY `SoundId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
--
-- AUTO_INCREMENT pour la table `Timeline`
--
ALTER TABLE `Timeline`
  MODIFY `TimelineID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `Sound`
--
ALTER TABLE `Sound`
  ADD CONSTRAINT `sound_ibfk_1` FOREIGN KEY (`TimelineID`) REFERENCES `Timeline` (`TimelineID`);

--
-- Contraintes pour la table `Timeline`
--
ALTER TABLE `Timeline`
  ADD CONSTRAINT `timeline_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `Musician` (`UserID`);
