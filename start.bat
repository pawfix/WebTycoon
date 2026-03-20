@echo off

cd /d %~dp0

start "Vite" cmd /k bun vite
start "Sass" cmd /k sass .\src\index.scss .\src\index.css --watch

pause