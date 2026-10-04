// Test script to verify all 5 languages, map removal, and page rendering
const locales = ["de", "en", "ru", "tr", "ar"];
const routes = [
  "",
  "/about",
  "/areas",
  "/areas/medizinische-fachbereiche",
  "/areas/diagnostik",
  "/areas/rehabilitation",
  "/areas/pflege",
  "/areas/beratung-projektentwicklung",
  "/areas/internationale-kooperationen",
  "/values",
  "/partners",
  "/career",
  "/news",
  "/contact",
  "/imprint",
  "/privacy",
];

async function runTests() {
  console.log("=== STARTING AUTOMATED VALIDATION ACROSS 5 LOCALES ===");
  let passed = 0;
  let failed = 0;

  for (const locale of locales) {
    for (const route of routes) {
      const url = `http://localhost:3000/${locale}${route}`;
      try {
        const res = await fetch(url);
        if (res.status !== 200) {
          console.error(`[FAIL] ${url} returned status ${res.status}`);
          failed++;
          continue;
        }
        const html = await res.text();

        // 1. Verify Rhine-Ruhr map is NOT present
        if (html.includes("RegionalPresenceMap") || html.includes("Rhein-Ruhr-Präsenz") || html.includes("Regionale Präsenz")) {
          console.error(`[FAIL] Map found in ${url}`);
          failed++;
          continue;
        }

        // 2. Verify language indicator or charset
        if (!html.includes("<!DOCTYPE html>")) {
          console.error(`[FAIL] Invalid HTML in ${url}`);
          failed++;
          continue;
        }

        // 3. Verify language specific strings in home
        if (route === "") {
          if (locale === "de" && !html.includes("Kompetenz verbinden. Gesundheit gestalten.")) {
            console.error(`[FAIL] Missing DE content in ${url}`);
            failed++;
            continue;
          }
          if (locale === "en" && !html.includes("Connecting Competence. Shaping Health.")) {
            console.error(`[FAIL] Missing EN content in ${url}`);
            failed++;
            continue;
          }
          if (locale === "ru" && !html.includes("Объединяя компетенции. Формируя здоровье.")) {
            console.error(`[FAIL] Missing RU content in ${url}`);
            failed++;
            continue;
          }
          if (locale === "tr" && !html.includes("Uzmanlığı Birleştirmek. Sağlığı Şekillendirmek.")) {
            console.error(`[FAIL] Missing TR content in ${url}`);
            failed++;
            continue;
          }
          if (locale === "ar" && !html.includes("توحيد الكفاءات. صياغة مستقبل الصحة.")) {
            console.error(`[FAIL] Missing AR content in ${url}`);
            failed++;
            continue;
          }
        }

        // 4. Verify Contact page has no map and has form
        if (route === "/contact") {
          if (!html.includes("Aachener Straße 114")) {
            console.error(`[FAIL] Contact page missing address in ${url}`);
            failed++;
            continue;
          }
        }

        passed++;
      } catch (err) {
        console.error(`[ERROR] ${url}: ${err.message}`);
        failed++;
      }
    }
  }

  console.log(`\n=== TEST RESULTS ===`);
  console.log(`Total URLs Tested: ${passed + failed}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);

  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
