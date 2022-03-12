$ErrorActionPreference = "Stop"

Get-ChildItem -Filter "*.html" -File -Path $PSScriptRoot | ForEach-Object {
    $base = $_.BaseName

    if ($base -eq "index") {
        return;
    }

    New-Item -ItemType Directory -Force -Path "$($PSScriptRoot)\$base"
    Copy-Item $_.FullName -Destination "$($PSScriptRoot)\$base\index.html" -Force
}