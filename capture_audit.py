from playwright.sync_api import sync_playwright

URL = "https://www.soscartegrise31.fr"
OUTPUT_DIR = "/Users/velance/Desktop/Projets-Claude/Soscartegrise/screenshots"

viewports = [
    {"name": "desktop", "width": 1920, "height": 1080},
    {"name": "laptop", "width": 1366, "height": 768},
    {"name": "mobile", "width": 375, "height": 812},
]

with sync_playwright() as p:
    browser = p.chromium.launch()
    for vp in viewports:
        page = browser.new_page(viewport={"width": vp["width"], "height": vp["height"]})
        page.goto(URL, wait_until="networkidle", timeout=30000)
        # above-the-fold (viewport crop)
        page.screenshot(
            path=f"{OUTPUT_DIR}/{vp['name']}_atf.png",
            full_page=False,
            clip={"x": 0, "y": 0, "width": vp["width"], "height": vp["height"]},
        )
        # full-page
        page.screenshot(
            path=f"{OUTPUT_DIR}/{vp['name']}_full.png",
            full_page=True,
        )
        print(f"Captured {vp['name']}")
        page.close()
    browser.close()

print("All screenshots captured.")
