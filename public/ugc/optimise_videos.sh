# Define input and output directories
input_dir="unconverted-videos"
output_dir="converted-videos"

# Loop through all files in the input directory
for file in "$input_dir"/*; do
  if [[ -f "$file" ]]; then
    # Get the filename without the directory path
    filename=$(basename "$file")

    # Define the output file path
    output_file="$output_dir/$filename"

    # Convert the video using ffmpeg with moderate crf value for slight quality reduction
    ffmpeg -i "$file" -c:v libx264 -crf 28 -pix_fmt yuv420p -movflags +faststart "$output_file"

    # Print a message indicating the conversion is complete
    echo "Converted $file to $output_file"
  fi
done

echo "Compression completed. All videos are saved in the 'converted-videos' directory."