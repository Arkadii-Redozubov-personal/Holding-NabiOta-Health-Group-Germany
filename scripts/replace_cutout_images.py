import urllib.request
import os
from PIL import Image

brain_dir = "/Users/arkady/.gemini/antigravity-ide/brain/c5d3761b-c8df-484a-a700-a62b75fd6960"

# 1. Process from local AI generated artifacts
local_replacements = {
    "public/images/beratung/project-mvz.webp": f"{brain_dir}/service_mvz_1790711467114.jpg",
    "public/images/beratung/project-reha.webp": f"{brain_dir}/service_therapy_1790711525424.jpg",
    "public/images/beratung/project-pflege.webp": f"{brain_dir}/area_pflege_1790711390241.jpg",
    "public/images/beratung/project-building.webp": f"{brain_dir}/hero_medical_campus_1790711236980.jpg",
    "public/images/beratung/consulting-meeting.webp": f"{brain_dir}/area_consulting_1790711412585.jpg",
    "public/images/beratung/avatar-weber.webp": f"{brain_dir}/doc_michael_weber_1790986980277.jpg",
    "public/images/beratung/avatar-keller.webp": f"{brain_dir}/doc_anna_keller_1790986966379.jpg",
    "public/images/beratung/avatar-berger.webp": f"{brain_dir}/thomas_becker_1790945902560.jpg",
    "public/images/international/avatar-keller.webp": f"{brain_dir}/doc_anna_keller_1790986966379.jpg",
    "public/images/international/avatar-santos.webp": f"{brain_dir}/doc_sarah_hoffmann_1790986994347.jpg",
    "public/images/nursing/avatar-linda.webp": f"{brain_dir}/doc_anna_keller_1790986966379.jpg",
    "public/images/nursing/avatar-james.webp": f"{brain_dir}/doc_michael_weber_1790986980277.jpg",
    "public/images/nursing/avatar-sarah.webp": f"{brain_dir}/doc_sarah_hoffmann_1790986994347.jpg",
}

for dest, src in local_replacements.items():
    if os.path.exists(src):
        im = Image.open(src)
        im.save(dest, "WEBP", quality=92)
        base_src = os.path.basename(src)
        print(f"Replaced {dest} with AI generated {base_src} ({im.size})")

# 2. Process high-res professional medical photos from verified CDN
url_replacements = {
    # International
    "public/images/international/project-africa.webp": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1000&auto=format&fit=crop&q=85",
    "public/images/international/project-asia.webp": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000&auto=format&fit=crop&q=85",
    "public/images/international/project-europe.webp": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1000&auto=format&fit=crop&q=85",
    "public/images/international/project-latam.webp": "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1000&auto=format&fit=crop&q=85",
    "public/images/international/impact-humanitarian.webp": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1400&auto=format&fit=crop&q=85",
    "public/images/international/avatar-amina.webp": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=85",
    # News
    "public/images/news/featured-or.webp": "https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&auto=format&fit=crop&q=85",
    "public/images/news/cancer-research.webp": "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&auto=format&fit=crop&q=85",
    "public/images/news/summit.webp": "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&auto=format&fit=crop&q=85",
    "public/images/news/partnerships.webp": "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&auto=format&fit=crop&q=85",
    "public/images/news/patient-safety.webp": "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=1200&auto=format&fit=crop&q=85",
    "public/images/news/campus-hiring.webp": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&auto=format&fit=crop&q=85",
    "public/images/news/health-forum.webp": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&auto=format&fit=crop&q=85",
    # Nursing
    "public/images/nursing/stage-newborn.webp": "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&auto=format&fit=crop&q=85",
    "public/images/nursing/stage-postsurgical.webp": "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&auto=format&fit=crop&q=85",
    "public/images/nursing/stage-rehab.webp": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&auto=format&fit=crop&q=85",
    "public/images/nursing/stage-senior.webp": "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&auto=format&fit=crop&q=85",
    "public/images/nursing/hero-nurse.webp": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&auto=format&fit=crop&q=85",
    "public/images/nursing/why-choose-nurse.webp": "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1000&auto=format&fit=crop&q=85",
    # Diagnostik
    "public/images/diagnostik/modality-ct.webp": "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1000&auto=format&fit=crop&q=85",
    "public/images/diagnostik/modality-mrt.webp": "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1000&auto=format&fit=crop&q=85",
    "public/images/diagnostik/modality-roentgen.webp": "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1000&auto=format&fit=crop&q=85",
    "public/images/diagnostik/modality-ultraschall.webp": "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=1000&auto=format&fit=crop&q=85",
    "public/images/diagnostik/modality-labor.webp": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1000&auto=format&fit=crop&q=85",
    "public/images/diagnostik/modality-kardio.webp": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1000&auto=format&fit=crop&q=85",
    # Contact
    "public/images/contact/clinic-banner.webp": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=85",
    "public/images/contact/clinic-reception.webp": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&auto=format&fit=crop&q=85",
    # Careers
    "public/images/careers/kultur-team-doctors.webp": "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&auto=format&fit=crop&q=85",
    "public/images/careers/kultur-team.webp": "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&auto=format&fit=crop&q=85",
}

headers = {"User-Agent": "Mozilla/5.0"}
for dest, url in url_replacements.items():
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            tmp_path = dest + ".tmp"
            with open(tmp_path, "wb") as f:
                f.write(data)
            im = Image.open(tmp_path)
            im.save(dest, "WEBP", quality=92)
            os.remove(tmp_path)
            print(f"Downloaded and converted {dest}: ({im.size})")
    except Exception as e:
        print(f"Failed {dest}: {e}")

print("All image replacements completed!")
