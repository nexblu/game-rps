# Tugas Framework Python Kelompok 4
This is a rock paper scissors game based on a website, this game was created based on group assignments on campus

## Framework
1. FastAPI (As Backend)
2. ReactJS (As Frontend)
3. Bootstrap (As Frontend)

## Anggota Kelompok
1. ANDANA FARRAS PRAMUDITA (50423159)
2. MUHAMMAD RAFI FADILLAH (50423976)
3. NI MADE MAS VIKA AMANDA (51423099)
4. SAMUEL MARTOGI SIHITE (51423357)

## Cara Mecoba Game Ini
1. Pastikan Sudah Terintall Docker Di Desktop Anda
2. Lalu Clone Repository Dockernya
3. Untuk Bagian FrontEnd Silahkan Clone Dengan Menggunakan Command Ini
```bash
docker pull nexblu/frontend-game-rps:24.01
```
4. Lalu Untuk Bagian BackEnd Silahkan Clone Dengan Menggunakan Command Ini
```bash
docker pull nexblu/backend-game-rps:24.01
```
5. Lalu Jalankan Untuk Bagian BackEnd Silahkan Ketik 
```bash
sudo docker run -d -p 8000:8000 nexblu/backend-game-rps:24.01
```
6. Lalu Jalankan Untuk Bagian FrontEnd Silahkan Ketik 
```bash
sudo docker run -d -p 3000:3000 nexblu/frontend-game-rps:24.01
```
7. Lalu Buka localhost:8000 dan localhost:3000
