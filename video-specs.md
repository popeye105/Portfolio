# Web-Compatible Video Specifications

## Required Settings for Portfolio Background Video:

### Format & Codec:
- **Container**: MP4
- **Video Codec**: H.264 (not H.265/HEVC)
- **Audio**: Remove audio track (not needed for background)

### Quality Settings:
- **Resolution**: 1920x1080 (or smaller like 1280x720)
- **Frame Rate**: 30fps (or 24fps)
- **Bitrate**: 1-3 Mbps (much lower than your current file)
- **Target Size**: Under 5MB (yours is 19.8MB)

### Web Optimization:
- **Progressive Download**: Enable
- **Fast Start**: Move metadata to beginning
- **Keyframe Interval**: Every 2-3 seconds

## FFmpeg Command to Fix Your Video:

```bash
ffmpeg -i PBackground.mp4 -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p -crf 28 -maxrate 2M -bufsize 4M -vf "scale=1280:720" -movflags +faststart -an -t 10 PBackground_optimized.mp4
```

## What this command does:
- `-c:v libx264`: Use H.264 codec
- `-profile:v baseline`: Maximum compatibility
- `-crf 28`: Good quality/size balance
- `-maxrate 2M`: Limit bitrate to 2Mbps  
- `-vf "scale=1280:720"`: Resize to 720p
- `-movflags +faststart`: Web optimization
- `-an`: Remove audio
- `-t 10`: Limit to 10 seconds (loop will repeat)

## Alternative: Use Online Converter
- Upload to: handbrake.fr or cloudconvert.com
- Set: H.264, 720p, 2Mbps, remove audio
