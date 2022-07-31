$ErrorActionPreference = "Stop"

Set-Location $PSScriptRoot

(Get-ChildItem -Filter "therapists.min*").FullName -match "therapists.min.(?<Version>\d+).js"
$Version = [int]$Matches.Version
$File = "therapists.min.$($Version).js"
$NewFile = "therapists.min.$($Version + 1).js"

Get-ChildItem -Filter "*.html" -Recurse | ForEach-Object {
    (Get-Content $_ -Raw).Replace($File, $NewFile) | Set-Content -NoNewLine $_ 
}

Get-ChildItem -Filter "*.html" -File -Path $PSScriptRoot | ForEach-Object {
    $base = $_.BaseName

    if ($base -eq "index") {
        return;
    }

    New-Item -ItemType Directory -Force -Path "$($PSScriptRoot)\$base"
    Copy-Item $_.FullName -Destination (Join-Path $PSScriptRoot -ChildPath "$base\index.html") -Force
}

npx uglify-js therapists.js -o $NewFile

Remove-Item $File