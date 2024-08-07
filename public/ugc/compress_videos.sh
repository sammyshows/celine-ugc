# Loop through all the video files in the current directory
for file in unconverted-videos/*.{mp4,mkv,mov,MOV,avi}; do
  # Check if the file exists (in case no matching files are found)
  [ -e "$file" ] || continue

  # Get the file name without the extension
  filename=$(basename "$file" | cut -d. -f1)

  # Compress the video and save it in the converted-videos directory
  ffmpeg -i "$file" -vcodec libx264 -crf 28 "converted-videos/${filename}.mp4"
done

echo "Compression completed. All videos are saved in the 'converted-videos' directory."