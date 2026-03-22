@echo off

cd /d %~dp0

start "Vite" cmd /k bun vite
start "Sass" cmd /k sass .\src\data\index.scss .\src\data\index.css --watch

pause