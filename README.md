# InvoiceCraft — Simple Invoice Maker

A responsive invoice generator made with HTML, CSS, and vanilla JavaScript.

## Features
- Business, client, email, invoice number, and date fields
- Add and remove line items
- Quantity × rate calculations
- Tax percentage and live totals
- USD, INR, EUR, GBP, and CAD currency options
- Live invoice preview
- Print or save as PDF through the browser
- Browser-only processing; no account or backend

## Run locally
Open the folder in VS Code and run `index.html` using the **Live Server** extension. JavaScript ES modules are used, so do not open the file directly with a `file://` URL.

## Files
- `index.html` — invoice editor and preview
- `style.css` — responsive and print styling
- `invoice.js` — currency formatting and calculations
- `items.js` — line-item helpers
- `app.js` — app events and live preview

## Save as PDF
Click **Print / Save as PDF** and select **Save as PDF** in the browser print dialog. You can disable browser headers and footers in print settings for a cleaner result.

## Privacy
Invoice details stay in the current browser page and are not sent to a server.
