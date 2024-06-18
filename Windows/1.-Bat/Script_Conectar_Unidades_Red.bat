@echo off

REM Funcion para desmontar una unidad de red si esta conectada
setlocal enabledelayedexpansion

REM Mostrar mensaje inicial
echo =========================================
echo Verificando y desmontando unidades de red si están ocupadas...
echo =========================================

REM Iterar sobre las unidades definidas
set "unidades=Z Y X"
for %%u in (%unidades%) do (
    set "unidad=%%u:"
    
    REM Verificar si la unidad está conectada
    net use !unidad! >nul 2>&1
    if !errorlevel! equ 0 (
        echo La unidad !unidad! está conectada. Intentando desmontar...
        net use !unidad! /delete /yes >nul 2>&1
        if !errorlevel! equ 0 (
            echo La unidad !unidad! se desmonto correctamente.
        ) else (
            echo Error: No se pudo desmontar la unidad !unidad!.
        )
    ) else (
        echo La unidad !unidad! no esta conectada.
    )

    echo ----------------------------------------
)

pause
CLS

REM Conexion a la primera unidad de red
echo =========================================
echo Conectando a la primera unidad de red...
echo =========================================
set "user1=.\sg"
set "pass1=CV@2022!"
set "carpeta_compartida1=\\MX16656\Documents"

net use Z: %carpeta_compartida1% %pass1% /user:%user1%

if %errorlevel% neq 0 (
    echo [Error!]: No se pudo conectar a la primera unidad de red.
) else (
    echo Conexion exitosa.
)

REM Conexion a la segunda unidad de red
echo =========================================
echo Conectando a la segunda unidad de red...
echo =========================================
set "user2=tfca"
set "pass2=Tr1F3dC0n4rb."
set "carpeta_compartida2=\\10.2.147.110\dev"

net use Y: %carpeta_compartida2% %pass2% /user:%user2%

if %errorlevel% neq 0 (
    echo [Error!]: No se pudo conectar a la segunda unidad de red.
) else (
    echo Conexion exitosa.
)

echo =========================================
echo Conectando a la tercera unidad de red...
echo =========================================
set "user3=pedronm"
set "pass3=Nequiz23#"

REM Nombre del equipo y carpeta compartida para la tercera unidad de red
set "carpeta_compartida3=\\132.248.127.8\%user3%$"

REM Conexion a la tercera unidad de red
net use X: "%carpeta_compartida3%" "%pass3%" /user:"%user3%"

if %errorlevel% neq 0 (
    echo Error: No se pudo conectar a la tercera unidad de red.
    echo Por favor, verifica las credenciales.
) else (
    REM Conexion exitosa a la red.
    echo Bienvenido %user3%
)

timeout /t 5 >nul