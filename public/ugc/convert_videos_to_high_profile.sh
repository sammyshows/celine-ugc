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

    # Convert the video using ffmpeg
    ffmpeg -i "$file" -c:v libx264 -profile:v high -level 3.1 -pix_fmt yuv420p -colorspace bt709 -c:a aac -b:a 128k "$output_file"

    # Print a message indicating the conversion is complete
    echo "Converted $file to $output_file"
  fi
done
