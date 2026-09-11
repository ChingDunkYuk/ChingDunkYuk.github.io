"""Bake a corner watermark into photos before they ship to the site.

Workflow:
  1. drop original photos into src/assets/photos/original/
     (gitignored — originals never leave your machine)
  2. run this script:  python scripts/watermark.py
  3. it writes watermarked copies (same stem, .jpg) into
     src/assets/photos/ — import those in src/data/photos.ts

Re-running is safe: copies are always regenerated from the
originals, so the mark is never applied twice.

Run locally only (the GitHub Actions build never calls this);
no dependencies beyond Pillow:  pip install pillow
"""
import argparse
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
SRC_DIR = ROOT / "src" / "assets" / "photos" / "original"
DST_DIR = ROOT / "src" / "assets" / "photos"
DEFAULT_TEXT = "\u00a9 by klaus"  # © by klaus

# site ink colour (#e8e5da), applied semi-transparent
INK = (232, 229, 218, 200)
# soft dark outline so the mark reads on light areas too
OUTLINE = (10, 10, 8, 130)

FONT_CANDIDATES = [
    r"C:\Windows\Fonts\consola.ttf",   # Consolas (mono)
    r"C:\Windows\Fonts\lucon.ttf",     # Lucida Console
    r"C:\Windows\Fonts\arial.ttf",
]


def load_font(size: int) -> ImageFont.FreeTypeFont:
    for path in FONT_CANDIDATES:
        if Path(path).is_file():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default(size=size)


def watermark(src: Path, text: str) -> Path:
    img = Image.open(src).convert("RGB")
    w, h = img.size
    draw = ImageDraw.Draw(img, "RGBA")

    font_size = max(24, w // 34)
    stroke = max(1, font_size // 18)
    font = load_font(font_size)

    bbox = draw.textbbox((0, 0), text, font=font, stroke_width=stroke)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    margin = round(w * 0.02)
    x = w - tw - margin - bbox[0]
    y = h - th - margin - bbox[1]

    draw.text(
        (x, y), text, font=font,
        fill=INK, stroke_width=stroke, stroke_fill=OUTLINE,
    )

    out = DST_DIR / (src.stem + ".jpg")
    img.save(out, "JPEG", quality=90)
    return out


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--text", default=DEFAULT_TEXT, help="watermark text")
    args = ap.parse_args()

    if not SRC_DIR.is_dir():
        print(f"missing folder: {SRC_DIR}")
        return 1

    originals = [
        p for p in sorted(SRC_DIR.iterdir())
        if p.is_file() and p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"}
    ]
    if not originals:
        print("no originals found in src/assets/photos/original/")
        return 0

    for src in originals:
        out = watermark(src, args.text)
        print(f"watermarked: {out.relative_to(ROOT)}  (from original/{src.name})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
