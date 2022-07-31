$ErrorActionPreference = "Stop"

Set-Location $PSScriptRoot

Get-ChildItem -Filter "*.html" -File -Path $PSScriptRoot | ForEach-Object {
    $base = $_.BaseName

    if ($base -eq "index") {
        return;
    }

    New-Item -ItemType Directory -Force -Path "$($PSScriptRoot)\$base"
    Copy-Item $_.FullName -Destination (Join-Path $PSScriptRoot -ChildPath "$base\index.html") -Force
}

npx uglify-js therapists.js -o therapists.min.js