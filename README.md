# Varma Investments Website

A professional investment firm website for Varma Investments, offering expert guidance in share market investments, mutual funds, and bonds.

## Features

- **Professional Homepage**: Hero section with compelling branding and clear call-to-action
- **Service Sections**: Detailed descriptions for share market, mutual funds, and bond investments
- **Client Testimonials**: Social proof with ratings and feedback from satisfied clients
- **WhatsApp Integration**: Direct consultation booking through WhatsApp (9403034505)
- **Contact Information**: Complete address, email, phone, and embedded Google Maps
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Easy Content Management**: JSON-based system for non-technical updates

## Content Management

All website content is managed through the `public/content.json` file. This allows non-technical users to easily update:

- Firm information (name, contact details, address)
- Hero section text and CTAs
- Services descriptions and features
- Testimonials
- Process steps
- Contact information

### How to Update Content

1. Open `public/content.json` in any text editor
2. Locate the section you want to update
3. Modify the text, keeping the same structure
4. Save the file
5. Refresh your browser to see changes

**Example - Updating a Service:**
```json
{
  "id": "share-market",
  "title": "Share Market Investments",
  "description": "Your new description here",
  "icon": "TrendingUp",
  "features": [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]
}
```

**Example - Adding a Testimonial:**
```json
{
  "id": 7,
  "name": "Customer Name",
  "location": "City",
  "rating": 5,
  "text": "Their testimonial text here",
  "date": "2024-10"
}
```

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **UI Components**: Shadcn UI
- **Routing**: Wouter
- **Icons**: Lucide React
- **Backend**: Express.js (minimal, serving static content)
- **Content Storage**: JSON files

## Running the Application

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at the URL provided by Replit.

## Contact

**Varma Investments**
- Location: Shop number 5, Radhakrishna Vikhe Patil Complex, Chitali Road Rahata, Dist- Ahilyanagar, 423107
- Phone: +91 9403034505
- Email: varmainvestment2008@gmail.com
- WhatsApp: https://wa.me/919403034505

## Disclaimer

Investments are subject to market risks. Please read all scheme-related documents carefully before investing.
