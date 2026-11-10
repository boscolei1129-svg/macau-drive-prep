$ErrorActionPreference = 'Stop'
Push-Location $PSScriptRoot
try {
    if (git status --porcelain) { throw 'Commit your changes before deploying.' }
    git fetch origin
    if ($LASTEXITCODE -ne 0) { throw 'Unable to fetch the repository.' }
    $appTree = git rev-parse 'HEAD:dist'
    if ($LASTEXITCODE -ne 0) { throw 'No committed dist/ directory found.' }
    $parent = git rev-parse --verify refs/remotes/origin/gh-pages 2>$null
    if ($LASTEXITCODE -eq 0) {
        $publishCommit = git commit-tree $appTree -p $parent -m 'Publish Macau Drive on GitHub Pages'
    } else {
        $publishCommit = git commit-tree $appTree -m 'Publish Macau Drive on GitHub Pages'
    }
    if ($LASTEXITCODE -ne 0) { throw 'Unable to create the Pages commit.' }
    git push origin "${publishCommit}:refs/heads/gh-pages"
    if ($LASTEXITCODE -ne 0) { throw 'Pages push failed. Fetch and retry.' }
    Write-Output 'Published source: https://boscolei1129-svg.github.io/macau-drive-prep/'
    Write-Output 'GitHub Pages will deploy this branch automatically.'
} finally {
    Pop-Location
}
