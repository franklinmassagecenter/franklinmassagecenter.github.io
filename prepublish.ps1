$ErrorActionPreference = "Stop"

Set-Location $PSScriptRoot

# Get the hash of therapists.js content
$therapistsContent = Get-Content "therapists.js" -Raw
$hash = (Get-FileHash -InputStream ([System.IO.MemoryStream]::new([System.Text.Encoding]::UTF8.GetBytes($therapistsContent))) -Algorithm SHA256).Hash
$shortHash = $hash.Substring(0, 8).ToLower()

# Find current versioned file (could be numbered or hashed)
$currentFile = Get-ChildItem -Filter "therapists.min*" | Where-Object { $_.Name -ne "therapists.min.js" } | Select-Object -First 1
$File = if ($currentFile) { $currentFile.Name } else { "therapists.min.js" }
$NewFile = "therapists.min.$shortHash.js"

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

# Remove old versioned files (keep only the new one)
Get-ChildItem -Filter "therapists.min*" | Where-Object { 
    $_.Name -ne $NewFile -and $_.Name -ne "therapists.js" 
} | Remove-Item