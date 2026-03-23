@echo off

cd /d %~dp0

start "Vite" cmd /k ..\..\..\JetBrains\bun\bun.exe vite
start "Sass" cmd /k ..\..\..\JetBrains\bun\bun.exe sass .\src\style\index.scss .\src\style\index.css --watch

pause