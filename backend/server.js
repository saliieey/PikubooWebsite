const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS setup
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
  'http://localhost:3000'
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Check if the origin matches any allowed origin, is local, is a wildcard, or is a Vercel preview site
    const isAllowed = 
      allowedOrigins.includes('*') || 
      allowedOrigins.indexOf(origin) !== -1 || 
      allowedOrigins.indexOf(origin + '/') !== -1 || 
      origin.includes('localhost') || 
      origin.includes('vercel.app'); // Automatically allow all Vercel preview links for the client

    if (isAllowed) {
      return callback(null, true);
    }
    
    return callback(new Error('The CORS policy for this site does not allow access from the specified Origin.'), false);
  }
}));

app.use(express.json());

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', message: 'Pikuboo enquiry backend is running.' });
});

// Contact enquiry form route
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, inquiryType, company, country, message, website_url } = req.body;

  // Honeypot spam bot check
  if (website_url) {
    console.log(`Spam bot submission blocked successfully via honeypot field from email: ${email}`);
    return res.status(200).json({ 
      success: true, 
      message: 'Your inquiry has been successfully sent. Thank you!' 
    });
  }

  // Basic validation
  if (!name || !email || !inquiryType || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Name, email, inquiry type, and message are required fields.' 
    });
  }

  try {
    // SMTP Configuration
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER || 'connect@pikuboo.com';
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'connect@pikuboo.com';

    if (!smtpHost || !smtpPass) {
      console.error('SMTP configuration missing: SMTP_HOST or SMTP_PASS is not defined.');
      return res.status(500).json({
        success: false,
        message: 'Email service configuration error. Please contact the administrator.'
      });
    }

    // Determine secure connection based on port
    const isSecure = smtpPort === 465;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: isSecure, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass
      },
      tls: {
        // Do not fail on invalid certs (helpful for GoDaddy security certificate verification)
        rejectUnauthorized: false
      }
    });

    // Formatting nice readable titles for inquiry types
    const inquiryTypeLabels = {
      wholesale: 'Wholesale / Bulk Order',
      distributor: 'Distributor Inquiry',
      support: 'Customer Support',
      other: 'Other Inquiry'
    };
    const resolvedInquiryType = inquiryTypeLabels[inquiryType] || inquiryType;

    // Create HTML body
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #fafafa;">
        <h2 style="color: #a2cf8d; border-bottom: 2px solid #a2cf8d; padding-bottom: 10px; margin-top: 0;">New Pikuboo Website Inquiry</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px 0; font-weight: bold; width: 150px; border-bottom: 1px solid #eeeeee;">Full Name:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #eeeeee;">Email Address:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #eeeeee;">Phone Number:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">${phone || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #eeeeee;">Inquiry Type:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #4A4A4A;">${resolvedInquiryType}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #eeeeee;">Company Name:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">${company || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #eeeeee;">Country/Region:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">${country || 'N/A'}</td>
          </tr>
        </table>
        
        <div style="margin-top: 30px; padding: 15px; border-left: 4px solid #a2cf8d; background-color: #ffffff; border-radius: 4px; box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);">
          <h3 style="margin-top: 0; color: #333333; font-size: 16px;">Message:</h3>
          <p style="white-space: pre-wrap; line-height: 1.6; color: #555555; margin-bottom: 0;">${message}</p>
        </div>
        
        <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #999999; border-top: 1px solid #eeeeee; padding-top: 15px;">
          This message was sent from the Pikuboo Website Contact Form.
        </div>
      </div>
    `;

    // Create plain text fallback
    const emailText = `
      New Pikuboo Website Inquiry
      
      Full Name: ${name}
      Email Address: ${email}
      Phone Number: ${phone || 'N/A'}
      Inquiry Type: ${resolvedInquiryType}
      Company Name: ${company || 'N/A'}
      Country/Region: ${country || 'N/A'}
      
      Message:
      ${message}
      
      --
      This message was sent from the Pikuboo Website Contact Form.
    `;

    // Mail Options
    const mailOptions = {
      from: `Pikuboo Website <${smtpUser}>`, // Must be the same SMTP user or authorized alias
      to: recipientEmail,
      replyTo: email, // Direct replies will go to the user
      subject: `[Inquiry] ${resolvedInquiryType} from ${name}`,
      text: emailText,
      html: emailHtml
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log(`Email successfully sent from ${name} (${email}) to ${recipientEmail}`);

    res.status(200).json({ 
      success: true, 
      message: 'Your inquiry has been successfully sent. Thank you!' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send your inquiry. Please try again later.' 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
