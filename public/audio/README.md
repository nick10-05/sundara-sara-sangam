# Audio Files for Slokas

This folder contains human-recorded audio files for the Sanskrit slokas.

## File Naming Convention

Audio files should be named according to the sloka ID:

- `sloka-11.mp3` - for Sloka 11
- `sloka-12.mp3` - for Sloka 12
- `sloka-13.mp3` - for Sloka 13
- ... and so on

## Supported Formats

The following audio formats are supported (in order of preference):

- `.mp3` (recommended)
- `.wav`
- `.ogg`
- `.m4a`

## How to Add Audio Files

1. Record or obtain human-voice audio files for each sloka
2. Name them according to the pattern: `sloka-{id}.mp3`
   - For example: `sloka-11.mp3`, `sloka-12.mp3`, etc.
3. Place them in this `public/audio/` folder
4. The audio player will automatically detect and load them

## Example

If you have audio for Sloka 11 (id: 11), place it as:

```
public/audio/sloka-11.mp3
```

The application will automatically find and play this file when users view Sloka 11.
