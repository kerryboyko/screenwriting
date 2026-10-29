
#!/usr/bin/env bash
set -euo pipefail

# Usage:
# ./copy-movie-posters.sh /path/to/movies /path/to/jekyll/assets/images/posters

SOURCE="${1:?Please provide the movie directory}"
DEST="${2:?Please provide the destination directory}"

if [[ ! -d "$SOURCE" ]]; then
    echo "Source directory does not exist: $SOURCE" >&2
    exit 1
fi

mkdir -p "$DEST"

count=0
skipped=0

while IFS= read -r -d '' poster; do
    # Get the directory containing folder.jpg
    movie_dir="$(dirname "$poster")"
    movie_name="$(basename "$movie_dir")"

    # Convert movie name into a URL-friendly filename
    filename="$(
        printf '%s' "$movie_name" |
        iconv -f UTF-8 -t ASCII//TRANSLIT |
        tr '[:upper:]' '[:lower:]' |
        sed -E 's/[^a-z0-9]+/-/g; s/^-+//; s/-+$//'
    )"

    target="$DEST/$filename.jpg"

    # Don't overwrite existing posters
    if [[ -e "$target" ]]; then
        echo "SKIP: $movie_name"
        ((skipped+=1))
        continue
    fi

    cp -- "$poster" "$target"
    echo "COPIED: $movie_name -> $filename.jpg"
    ((count+=1))

done < <(find "$SOURCE" -type f -iname 'folder.jpg' -print0)

echo
echo "Finished!"
echo "Copied: $count"
echo "Skipped: $skipped"
