import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/send-quote", async (req, res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "Request body is missing" });
    }

    const {
        product,
        manufacturer,
        name,
        email,
        phone,
        company,
        projectType,
        projectDescription,
        quantity,
        timeline,
        budget,
        measurements,
        additionalRequirements,
    } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true, // true for 465, false for 587
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"ING Construction Materials" <${process.env.EMAIL_USER}>`, // must be your email
            replyTo: email, // client email
            to: process.env.EMAIL_USER,
            subject: `Quote Request for ${product}`,
            html: `
            <div style="font-family: Arial, sans-serif; background-color: #1a2226; color: #e8f1e8; padding: 20px;">
                <div style="max-width: 600px; margin: auto; background-color: #0f1518; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); overflow: hidden;">
                    <div style="background-color: #00ffcc; padding: 15px 20px; text-align: center;">
                        <h2 style="margin: 0; color: #1a2226;">New Quote Request</h2>
                    </div>
                    <div style="padding: 20px; background-color: #0f1518;">
                        <p style="margin: 5px 0;"><strong>Product:</strong> ${product}</p>
                        <p style="margin: 5px 0;"><strong>Manufacturer:</strong> ${manufacturer}</p>
                        <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                        <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
                        <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
                        <p style="margin: 5px 0;"><strong>Company:</strong> ${company}</p>
                        <p style="margin: 5px 0;"><strong>Project Type:</strong> ${projectType}</p>
                        <p style="margin: 5px 0;"><strong>Quantity:</strong> ${quantity}</p>
                        <p style="margin: 5px 0;"><strong>Timeline:</strong> ${timeline}</p>
                        <p style="margin: 5px 0;"><strong>Budget:</strong> ${budget}</p>
                        <p style="margin: 5px 0;"><strong>Measurements:</strong> ${measurements}</p>
                        <p style="margin: 5px 0;"><strong>Project Description:</strong> ${projectDescription}</p>
                        <p style="margin: 5px 0;"><strong>Additional Requirements:</strong> ${additionalRequirements}</p>
                    </div>
                    <div style="background-color: #00ffcc; padding: 10px 20px; text-align: center;">
                        <p style="margin: 0; color: #1a2226;">ING Construction Materials &copy; ${new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
            `,
        });

        await transporter.sendMail({
            from: `"ING Construction Materials" <${process.env.EMAIL_USER}>`,
            to: email, // client email
            subject: `Thank you for your quote request!`,
            html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ING Construction Materials - Quote Request</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1a2226;
            color: #e8f1e8;
            margin: 0;
            padding: 20px;
        }
        .email-container {
            max-width: 600px;
            margin: auto;
            background-color: #0f1518;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            overflow: hidden;
        }
        .header {
            background-color: #00ffcc;
            padding: 20px;
            text-align: center;
        }
        .header h2 {
            margin: 0;
            color: #1a2226;
            font-size: 24px;
            font-weight: bold;
        }
      .content {
    padding: 30px;
    background-color: #0f1518; 
    color: #e8f1e8;
    line-height: 1.6;
}

        .content p {
            margin-bottom: 20px;
            font-size: 16px;
              color: #e8f1e8;
        }
        .cta-button {
            text-align: center;
            margin: 25px 0;
        }
        .cta-button a {
            background-color: #00ffcc;  
            color: #1a2226;
            text-decoration: none;
            padding: 14px 30px;
            border-radius: 5px;
            font-weight: bold;
            display: inline-block;
            transition: background-color 0.3s;
        }
        .cta-button a:hover {
            background-color: #0bf3c5;
        }
        .footer {
            background-color: #00ffcc;
            padding: 15px 20px;
            text-align: center;
        }
        .footer p {
            margin: 0;
            color: #1a2226;
            font-size: 14px;
        }
        .logo {
            text-align: center;
            margin-bottom: 20px;
        }
        .logo-placeholder {
            color: #00ffcc;
            font-weight: bold;
            font-size: 20px;
        }
        .product-highlight {
            background-color: rgba(0, 255, 204, 0.1);
            padding: 15px;
            border-left: 4px solid #00ffcc;
            margin: 20px 0;
            border-radius: 0 4px 4px 0;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h2>Thank You, ${name}!</h2>
        </div>
        
        <div class="content">
            <div class="logo">
                <!-- Replace with actual logo -->
                <div class="logo-placeholder">ING CONSTRUCTION MATERIALS</div>
            </div>
            
            <p>We have received your quote request and appreciate your interest in our products and services.</p>
            
            <div class="product-highlight">
                <strong>Product of Interest:</strong> ${product}
            </div>
            
            <p>Our team at <strong>ING Construction Materials</strong> will review your request and contact you shortly to discuss your project requirements in detail.</p>
            
            <p>In the meantime, you can visit our website to learn more about our complete range of construction materials and services:</p>
            
            <div class="cta-button">
                <a href="https://www.ing-materials.com">Visit Our Website</a>
            </div>
            
            <p>Thank you for considering ING Construction Materials for your project needs. We look forward to the opportunity to work with you.</p>
            
            <p>Best regards,<br>The ING Team</p>
        </div>
        
        <div class="footer">
            <p>ING Construction Materials &copy; ${new Date().getFullYear()}</p>
        </div>
    </div>
</body>
</html> `,
        });

        res.status(200).json({ message: "Emails sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to send emails." });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
