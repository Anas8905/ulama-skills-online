import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    let mailOptions = {};

    // Email Configurations based on the presence of pp/uc
    if (body.pp || body.uc) {
      const { name, birthDate, idCard, phone, whatsapp, email, education, district, pp, na, uc } = body;

      mailOptions = {
        from: process.env.SMTP_USER, // Sender email
        to: process.env.RECEIVER_EMAIL, // Receiver email (configure in .env)
        subject: "جمیعت میں شامل ہونے کے لیے فارم",
        html: `
          <h2 style="color: #333;">📜 ممبرشپ فارم کی تفصیلات</h2>
          <p><strong>نام:</strong> ${name}</p>
          <p><strong>تاریخ پیدائش:</strong> ${birthDate}</p>
          <p><strong>شناختی کارڈ نمبر:</strong> ${idCard}</p>
          <p><strong>فون نمبر:</strong> ${phone}</p>
          <p><strong>واٹس ایپ نمبر:</strong> ${whatsapp}</p>
          <p><strong>ای میل:</strong> ${email}</p>
          <p><strong>تعلیمی قابلیت:</strong> ${education}</p>
          <p><strong>ضلع:</strong> ${district}</p>
          <p><strong>پی پی:</strong> ${pp}</p>
          <p><strong>این اے:</strong> ${na}</p>
          <p><strong>یوسی:</strong> ${uc}</p>
          <hr>
          <p style="color: green;"><strong>🔹 شکریہ!</strong></p>
        `,
      };
    } else {
      const { name, fatherName, age, gender, contact, address, education, studentCourse, trainerCourse } = body;

      mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.RECEIVER_EMAIL,
        subject: "نئے کورس کی رجسٹریشن",
        html: `
          <h2 style="color: #333;">📚 نئے کورس کی رجسٹریشن کی تفصیلات</h2>
          <p><strong>نام:</strong> ${name}</p>
          <p><strong>والد کا نام:</strong> ${fatherName}</p>
          <p><strong>عمر:</strong> ${age} سال</p>
          <p><strong>جنس:</strong> ${gender}</p>
          <p><strong>رابطہ نمبر:</strong> ${contact}</p>
          <p><strong>پتہ:</strong> ${address}</p>
          <p><strong>تعلیمی قابلیت:</strong> ${education}</p>
          
          ${studentCourse ? `<p><strong>📖 بطور طالب علم سیکھنے کے لیے:</strong> ${studentCourse}</p>` : ''}
          ${trainerCourse ? `<p><strong>🎓 بطور ٹرینر سکھانے کے لیے:</strong> ${trainerCourse}</p>` : ''}
          
          <hr>
          <p style="color: green;"><strong>🔹 شکریہ!</strong></p>
        `,
      };
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Email Error:", error);
    return new Response(JSON.stringify({ success: false, message: "Email sending failed", error: error.message }), { status: 500 });
  }
}
