
# Loop through all the webp images
for file in *.webp; do
  # Re-encode the file with 25% quality
  magick "$file" -quality 25 "$file"
done

echo "Quality reduction completed. All images are now at 25% quality."
