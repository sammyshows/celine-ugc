

# Loop through all the image files
for file in unconverted-images/*.{jpeg,jpg,JPG,png,heic,HEIC}; do
  # Check if the file exists (in case no matching files are found)
  [ -e "$file" ] || continue
  
  # Get the file name without the extension
  filename=$(basename "$file" | cut -d. -f1)
  
  # Convert the file to webp format using magick
  magick "$file" "converted-images/${filename}.webp"
done

echo "Conversion completed. All images are saved in the 'converted-images' directory."