# Pikuboo Website Enquiry Backend

This is a simple Node.js & Express server built to securely handle contact enquiries from the Pikuboo website and forward them to `connect@pikuboo.com` using GoDaddy/Microsoft 365 SMTP.

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` and fill in your SMTP credentials:
```bash
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=connect@pikuboo.com
SMTP_PASS=your_email_password
```

### 3. Run Locally
To run the server in development mode:
```bash
npm run dev
```

The backend will start running on `http://localhost:5000`.

---

## Deployment to Render.com

1. Create a new repository on GitHub and upload the `backend` folder (or push the entire project repository to GitHub).
2. Go to [Render Dashboard](https://dashboard.render.com/) and click **New > Web Service**.
3. Connect your GitHub repository.
4. Set the following settings:
   - **Name:** `pikuboo-backend`
   - **Runtime:** `Node`
   - **Root Directory:** `backend` (if you pushed the whole repository with frontend)
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Go to the **Environment** tab on Render and add the following environment variables:
   - `SMTP_HOST` = (e.g. `smtp.office365.com` or `smtpout.secureserver.net`)
   - `SMTP_PORT` = `587` (or `465`)
   - `SMTP_USER` = `connect@pikuboo.com`
   - `SMTP_PASS` = (the GoDaddy email password or app password)
   - `RECIPIENT_EMAIL` = `connect@pikuboo.com`
   - `FRONTEND_URL` = (the URL of your live frontend website, e.g. `https://pikuboo.com`)
6. Click **Deploy Web Service**. Render will build and deploy the backend.
7. Copy the provided Render URL (e.g. `https://pikuboo-backend.onrender.com`).
8. Add this URL as `VITE_API_URL` to your frontend's environment configuration.
