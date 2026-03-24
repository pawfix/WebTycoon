@echo off

cd /d %~dp0

start "Vite" cmd /k bun vite
start "Sass" cmd /k bun sass .\src\style\index.scss .\src\style\index.css --watch

pause