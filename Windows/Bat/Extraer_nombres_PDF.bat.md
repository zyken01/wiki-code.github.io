@echo off
setlocal enabledelayedexpansion

rem Obtiene la ruta de la carpeta donde se encuentra este archivo bat
set "ruta=%~dp0"

rem Especifica el nombre del archivo de salida en la misma carpeta que el bat
set "archivo_salida=%ruta%nombres_pdf.txt"

rem Elimina el archivo de salida si ya existe
if exist "%archivo_salida%" del "%archivo_salida%"

rem Itera sobre cada archivo PDF en la carpeta y subcarpetas y escribe su nombre en el archivo de salida
for /r "%ruta%" %%f in (*.pdf) do (
    echo %%~nxf >> "%archivo_salida%"
)

echo "Proceso completado. Los nombres de los archivos PDF se han guardado en %archivo_salida%."

pause
