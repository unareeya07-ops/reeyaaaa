# Stockroom

Store inventory app: style lookup (colour / size / qty), SOH Excel upload, sold entry and barcode scan with the phone camera.

## Get the APK (no installs needed on your computer)
1. Create a new repository on GitHub and upload all files of this folder (keep the `.github` folder).
2. Open the **Actions** tab, then **Build Android APK**, then **Run workflow** (it also runs on every push).
3. After about 5 minutes open the finished run and download **Stockroom-APK** from Artifacts.
4. Unzip it, send `app-debug.apk` to your phone and install it (allow "install unknown apps").

## Using it
- **Upload** tab: pick your SOH Excel/CSV, check the column mapping (Style, Colour, Size, Qty, optional Barcode and Name), tap Update stock.
- **Lookup** tab: search or tap the scan button to scan a barcode.
- **Sold** tab: scan or search, choose colour and size, tap Add sold. Undo is in the list below.
- The first scan asks for camera permission.

Scanning matches the barcode column of your file, or the style code if there is no barcode column.
Data stays on the phone.
