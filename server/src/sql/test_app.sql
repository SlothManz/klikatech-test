-- MariaDB dump 10.19  Distrib 10.9.2-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: test_app
-- ------------------------------------------------------
-- Server version	10.9.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Songs`
--

DROP TABLE IF EXISTS `Songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Songs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `artist` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `genre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Songs`
--

LOCK TABLES `Songs` WRITE;
/*!40000 ALTER TABLE `Songs` DISABLE KEYS */;
INSERT INTO `Songs` VALUES
(1,'arcu et pede. Nunc sed','Aquila Howe','Rock',1964,'2022-09-14 06:02:51','2022-09-14 06:02:51'),
(2,'tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi.','Griffith Bolton','Metal',1970,'2022-09-14 06:05:51','2022-09-14 06:05:51'),
(3,'viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis,','Shellie Atkins','Pop',2007,'2022-09-14 06:06:44','2022-09-14 06:06:44'),
(4,'imperdiet ornare. In faucibus.','Griffith Bolton','Metal',2020,'2022-09-14 06:07:08','2022-09-14 06:07:08'),
(5,'quis diam luctus lobortis. Class aptent taciti','Aquila Howe','Rock',1963,'2022-09-14 06:14:55','2022-09-14 06:14:55'),
(6,'enim mi tempor lorem, eget mollis lectus pede et','Malachi Velazquez','Pop',1988,'2022-09-14 06:15:13','2022-09-14 06:15:13'),
(7,'feugiat. Sed nec metus facilisis lorem','Philip Witt','Rock',1997,'2022-09-14 06:15:34','2022-09-14 06:15:34'),
(8,'mollis non, cursus non, egestas a, dui.','Philip Witt','Rock',1980,'2022-09-14 06:15:55','2022-09-14 06:15:55'),
(9,'nonummy ut, molestie in,','Ronan Cross','Pop',1982,'2022-09-14 06:16:15','2022-09-14 06:16:15'),
(10,'mollis. Duis','Philip Witt','Rock',1970,'2022-09-14 06:33:54','2022-09-14 06:33:54'),
(11,'nonummy ut, molestie in,','Ronan Cross','Pop',1982,'2022-09-15 05:55:20','2022-09-15 05:55:20');
/*!40000 ALTER TABLE `Songs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-15 12:01:17
