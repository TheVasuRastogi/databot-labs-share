const nodemailer = require('nodemailer');

// Create transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASSWORD.replace(/\s+/g, '') // Remove spaces from app password
    }
});

// Email templates
const emailTemplates = {
    newPreOrder: (preOrderData) => ({
        subject: '🤖 New Pre-order Received - DataBot Labs',
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: #6366f1; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
                    .content { background: #f9fafb; padding: 20px; border-radius: 0 0 5px 5px; }
                    .section { margin-bottom: 20px; }
                    .label { font-weight: bold; color: #4f46e5; }
                    .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 0.9em; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2>🤖 New Pre-order Received</h2>
                    </div>
                    <div class="content">
                        <div class="section">
                            <h3>👤 Customer Information</h3>
                            <p><span class="label">Name:</span> ${preOrderData.name}</p>
                            <p><span class="label">Email:</span> ${preOrderData.email}</p>
                            <p><span class="label">Phone:</span> ${preOrderData.phone}</p>
                            ${preOrderData.company ? `<p><span class="label">Company:</span> ${preOrderData.company}</p>` : ''}
                        </div>
                        
                        <div class="section">
                            <h3>📦 Order Details</h3>
                            <p><span class="label">Product:</span> ${preOrderData.productName}</p>
                            <p><span class="label">Quantity:</span> ${preOrderData.quantity}</p>
                            <p><span class="label">Expected Delivery:</span> ${new Date(preOrderData.expectedDelivery).toLocaleDateString()}</p>
                            ${preOrderData.message ? `
                            <div class="section">
                                <h3>💬 Customer Message</h3>
                                <p>${preOrderData.message}</p>
                            </div>` : ''}
                        </div>
                        
                        <div class="footer">
                            <p>Submitted on ${new Date().toLocaleString()}</p>
                            <p>DataBot Labs - Robotics Innovation</p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `
    })
};

// Send email function
const sendEmail = async (template, data) => {
    try {
        console.log('Attempting to send email with template:', template);
        console.log('Email configuration:', {
            adminEmail: process.env.ADMIN_EMAIL,
            hasPassword: !!process.env.ADMIN_EMAIL_PASSWORD
        });

        const emailContent = emailTemplates[template](data);
        
        const mailOptions = {
            from: process.env.ADMIN_EMAIL,
            to: process.env.ADMIN_EMAIL, // Send only to admin
            subject: emailContent.subject,
            html: emailContent.html
        };

        console.log('Sending email with options:', {
            from: mailOptions.from,
            to: mailOptions.to,
            subject: mailOptions.subject
        });

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);
        return true;
    } catch (error) {
        console.error('Email sending failed. Full error:', error);
        console.error('Error details:', {
            code: error.code,
            command: error.command,
            response: error.response
        });
        return false;
    }
};

module.exports = {
    sendEmail
};
