import urllib.request
import os
import shutil
from PIL import Image, ImageDraw

def download_and_save(url, dest, quality=92):
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
    req = urllib.request.Request(url, headers=headers)
    tmp_path = dest + ".tmp"
    with urllib.request.urlopen(req, timeout=15) as resp:
        with open(tmp_path, "wb") as f:
            f.write(resp.read())
    im = Image.open(tmp_path)
    im.save(dest, "WEBP", quality=quality)
    if os.path.exists(tmp_path):
        os.remove(tmp_path)
    print(f"Saved {dest} ({im.size})")

# 1. Careers: Hero Nurse & CTA Banner
shutil.copy("public/images/careers/hero-career-nurse.webp", "public/images/careers/hero-nurse.webp")
print("Replaced public/images/careers/hero-nurse.webp with clean hero-career-nurse.webp")

shutil.copy("public/images/values/leaves-bg.webp", "public/images/careers/cta-banner-bg.webp")
print("Replaced public/images/careers/cta-banner-bg.webp with clean leaves-bg.webp")

# 2. Nursing: Commitment & FAQ & CTA hands
download_and_save(
    "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&auto=format&fit=crop&q=85",
    "public/images/nursing/commitment-nurse.webp"
)
download_and_save(
    "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=1200&auto=format&fit=crop&q=85",
    "public/images/nursing/faq-nurse.webp"
)
download_and_save(
    "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1400&auto=format&fit=crop&q=85",
    "public/images/nursing/cta-hands-bg.webp"
)
download_and_save(
    "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1400&auto=format&fit=crop&q=85",
    "public/images/nursing/cta-hands.webp"
)
download_and_save(
    "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1400&auto=format&fit=crop&q=85",
    "public/images/nursing/cta-banner-full.webp"
)

# 3. Beratung: CTA Desk & CTA Banner
download_and_save(
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1400&auto=format&fit=crop&q=85",
    "public/images/beratung/cta-desk.webp"
)
download_and_save(
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1400&auto=format&fit=crop&q=85",
    "public/images/beratung/cta-banner-full.webp"
)

# 4. Diagnostik: Scanner suite, scan review, patient, consultation
download_and_save(
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1400&auto=format&fit=crop&q=85",
    "public/images/diagnostik/scanner-suite.webp"
)
download_and_save(
    "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1200&auto=format&fit=crop&q=85",
    "public/images/diagnostik/scan-review.webp"
)
download_and_save(
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1000&auto=format&fit=crop&q=85",
    "public/images/diagnostik/patient-anna.webp"
)
download_and_save(
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=85",
    "public/images/diagnostik/consultation.webp"
)

# 5. News: Hero Doctor Clean (crisp, high-res female doctor portrait without clipboard cut)
download_and_save(
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1600&auto=format&fit=crop&q=85",
    "public/images/news/hero-doctor-clean.webp"
)

# 6. Contact: Maps Preview (clean crisp high-res map)
download_and_save(
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1000&auto=format&fit=crop&q=85",
    "public/images/contact/maps-preview.webp"
)

# 7. Delete old unused cut-out artifacts
old_files_to_delete = [
    "public/images/news/doctor-only.webp",
    "public/images/news/hero-doctor.webp",
    "public/images/international/hero-team.webp",
    "public/images/nursing/stamp-cta.webp",
    "public/images/nursing/stamp-hero.webp",
]

for old_f in old_files_to_delete:
    if os.path.exists(old_f):
        os.remove(old_f)
        print(f"Deleted old unused cut-out file: {old_f}")

print("All remaining cutouts have been replaced and old files deleted!")
