-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 30 Agu 2025 pada 14.38
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kiddos_auth`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `full_name` varchar(100) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `avatar` varchar(255) DEFAULT NULL,
  `reset_token` varchar(255) DEFAULT NULL,
  `reset_expires` datetime DEFAULT NULL,
  `exp` int(11) DEFAULT 0,
  `progress` text DEFAULT NULL,
  `awards` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password_hash`, `full_name`, `created_at`, `avatar`, `reset_token`, `reset_expires`, `exp`, `progress`, `awards`) VALUES
(5, 'zxlyn_16', 'rexnabagus@gmail.com', '$2y$10$ftJs7V7cKXcM7JSBhSNx0.xVlHXklbvfLxJ7G6yUl8BXDhMo.5E2.', 'Hardana', '2025-08-28 04:49:23', '/uploads/avatars/avatar_5_fe2b86ec0824df85.png', NULL, NULL, 100, NULL, NULL),
(8, 'jalili', 'kripjali@gmail.com', '$2y$10$g9z5G.R53mQbmCbxF..MT.bMSrFFou9asm.ssT5blRUIT0NW.P4FK', 'adititin', '2025-08-28 12:24:31', '/uploads/avatars/avatar_8_4a3b1c01f45c26d6.png', NULL, NULL, 1700, NULL, NULL),
(9, 'adi', 'anjalidaftar@gmail.com', '$2y$10$0y7EkIlGY/8kwwfUV2oFvuxRqSl22XVbpD4ZrlJ3kqqvMv30h1yAq', 'adi', '2025-08-29 07:19:21', '/uploads/avatars/avatar_9_101790d89baecb42.png', NULL, NULL, 4400, '{\"idx\":1,\"answers\":[[\"Motion (Gerakan)\"],null,null,null,null,null,null,null,null,null],\"done\":[true,false,false,false,false,false,false,false,false,false]}', '[\"scratch_level2_q_1\"]'),
(10, 'guru', 'sdfsdf@gmail.com', '$2y$10$6sc8leKhANPDmGVJQTqMee1sQ5Ydxqxqr1CksjqhkkHpQTuJMQ1VG', 'guru', '2025-08-29 23:04:55', NULL, NULL, NULL, 100, '{\"idx\":0,\"answers\":[[\"Motion (Gerakan)\"],null,null,null,null,null,null,null,null,null],\"done\":[false,false,false,false,false,false,false,false,false,false]}', NULL),
(11, 'anjali', 'anjalisaputra@gmail.com', '$2y$10$j8QkcxNMuTwhrvRqiRJNeeZHUaWEtsdx8c1c51qm9fjNls.0Rd8pe', 'anjali', '2025-08-30 12:57:55', '/uploads/avatars/avatar_11_6655eef7ad41f09c.png', NULL, NULL, 3950, '{\"idx\":0,\"answers\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"done\":[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],\"html\":{\"idx\":3,\"answers\":[[\"<h1>\",\"<\\/h1>\"],[\"<p>\",\"<\\/p>\"],[\"<em>\",\"<\\/em>\"],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"done\":[true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]}}', '[\"scratch_level2_q_1\",\"scratch_level2_q_2\",\"scratch_level2_q_3\",\"scratch_level2_q_4\",\"scratch_level2_q_5\",\"scratch_level2_q_6\",\"scratch_level2_q_7\",\"scratch_level2_q_8\",\"scratch_level2_q_9\",\"scratch_level2_q_10\",\"scratch_level2_q_11\",\"scratch_level2_q_12\",\"scratch_level2_q_13\",\"scratch_level2_q_14\",\"scratch_level2_q_15\",\"scratch_level2_q_16\",\"scratch_level2_q_17\",\"scratch_level2_q_18\",\"scratch_level2_q_19\",\"scratch_level2_q_20\",\"scratch_level2_q_21\",\"scratch_level2_q_22\",\"scratch_level2_q_23\",\"scratch_level2_q_24\",\"scratch_level2_q_25\",\"scratch_level2_q_26\",\"scratch_level2_q_27\",\"scratch_level2_q_28\",\"scratch_level2_q_29\",\"scratch_level2_q_30\",\"html_q0\",\"html_q1\",\"html_q2\"]'),
(12, 'karyawan', 'jali@gmail.com', '$2y$10$5jJYwB7Lo4Lvw/S0QD.RAOB4nVFU2pwMMUrRYEKTyX9KgXWZeA8pW', 'karyawan', '2025-08-30 13:05:54', NULL, NULL, NULL, 850, '{\"idx\":3,\"answers\":[[\"#include\"],[\"int\"],[\"input\"],null,null,null,null,null],\"done\":[true,true,true,false,false,false,false,false]}', '[\"scratch_level2_q_1\",\"scratch_level2_q_2\",\"scratch_level2_q_3\"]'),
(13, 'asdas', 'asda@gmail.com', '$2y$10$Wetu2YdqlcTpHQfpYkmECO0sVlIyPASSxk/B5DGHfhlTpU/tT9ToS', 'asdas', '2025-08-30 16:55:46', NULL, NULL, NULL, 100, '{\"idx\":2,\"answers\":[[\"<h1>\",\"<\\/h1>\"],[\"<p>\",\"<\\/p>\"],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"done\":[true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]}', '[\"scratch_level2_q_1\",\"scratch_level2_q_2\"]'),
(15, 'ada', 'ada@gmail.com', '$2y$10$A7UHuVosQ5u1X6.omCJvHOEPG.7QZRXTUQvsgZs5dIuqjwMCbdqaG', 'ada', '2025-08-30 17:19:48', NULL, NULL, NULL, 305, '{\"idx\":1,\"answers\":[[\"Motion (Gerakan)\"],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"done\":[true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],\"scratch\":{\"idx\":0,\"answers\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"done\":[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]},\"html\":{\"idx\":1,\"answers\":[[\"<h1>\",\"<\\/h1>\"],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"done\":[true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]},\"default\":{\"idx\":0,\"answers\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"done\":[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]},\"css\":{\"answers\":[[\"p\"],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"done\":[true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],\"idx\":1},\"js\":{\"idx\":0,\"answers\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"done\":[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]},\"py\":{\"idx\":0,\"answers\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"done\":[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]},\"cpp\":{\"idx\":1,\"answers\":[[\"#include\"],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"done\":[true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]}}', '[\"scratch_level2_q_1\",\"html_level2_q_1\",\"html_level2_q_2\",\"css_q0\",\"js_q0\",\"py_q0\",\"cpp_q0\"]'),
(16, 'siswa', 'ssss@gmail.com', '$2y$10$us6DycU0WUpCiPVYvOdDjel668w02A6fFPuHT0pQksJUX7V8LVkxW', 'siswa', '2025-08-30 17:25:57', NULL, NULL, NULL, 50, '{\"scratch\":{\"idx\":1,\"answers\":[[\"Motion (Gerakan)\"],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"done\":[true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]}}', '[\"scratch_level2_q_1\"]'),
(17, '1111', 'QWQWE@gmail.com', '$2y$10$B9cWgLR.VWT7vvQAB7JLYemnFxxZYdzY8jOOw2ILBfoYfCAyO6WQu', '1111', '2025-08-30 19:10:49', NULL, NULL, NULL, 100, '{\"html\":{\"idx\":2,\"answers\":[[\"<h1>\",\"<\\/h1>\"],[\"<p>\",\"<\\/p>\"],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"done\":[true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]}}', '[\"html_q0\",\"html_q1\"]');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
