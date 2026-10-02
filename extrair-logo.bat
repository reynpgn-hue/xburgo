@echo off
cd /d "%~dp0"
if "%~1"=="" (
  echo Arraste o arquivo HTML da logo para cima deste arquivo .bat
  pause
  exit /b
)
node extrair-logo.js "%~1"
pause
