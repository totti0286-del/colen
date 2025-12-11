// ============================================================
// VERCEL FUNCTION - EMAIL PHONG THỦY 2026
// DÙNG ẢNH THẬT TỪ VERCEL PUBLIC FOLDER
// ============================================================
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { name, email, phone, year, purpose, budget } = req.body;
    if (!name || !email || !year) {
      return res.status(400).json({ error: 'Thiếu thông tin bắt buộc: name, email, year' });
    }

    // ============ TÍNH MỆNH CHÍNH XÁC THEO NẠP ÂM 60 NĂM ============
    function tinhMenhChinhXac(namSinh) {
      const bangNapAm = {
        24: 'Kim', 84: 'Kim', 25: 'Kim', 85: 'Kim',
        26: 'Hỏa', 86: 'Hỏa', 27: 'Hỏa', 87: 'Hỏa', // 1987 = Hỏa ✅
        28: 'Mộc', 88: 'Mộc', 29: 'Mộc', 89: 'Mộc',
        30: 'Thổ', 90: 'Thổ', 31: 'Thổ', 91: 'Thổ',
        32: 'Kim', 92: 'Kim', 33: 'Kim', 93: 'Kim',
        34: 'Hỏa', 94: 'Hỏa', 35: 'Hỏa', 95: 'Hỏa',
        36: 'Thủy', 96: 'Thủy', 37: 'Thủy', 97: 'Thủy',
        38: 'Thổ', 98: 'Thổ', 39: 'Thổ', 99: 'Thổ',
        40: 'Kim', 0: 'Kim', 41: 'Kim', 1: 'Kim',
        42: 'Mộc', 2: 'Mộc', 43: 'Mộc', 3: 'Mộc',
        44: 'Thủy', 4: 'Thủy', 45: 'Thủy', 5: 'Thủy',
        46: 'Thổ', 6: 'Thổ', 47: 'Thổ', 7: 'Thổ',
        48: 'Hỏa', 8: 'Hỏa', 49: 'Hỏa', 9: 'Hỏa',
        50: 'Mộc', 10: 'Mộc', 51: 'Mộc', 11: 'Mộc',
        52: 'Thủy', 12: 'Thủy', 53: 'Thủy', 13: 'Thủy',
        54: 'Kim', 14: 'Kim', 55: 'Kim', 15: 'Kim',
        56: 'Hỏa', 16: 'Hỏa', 57: 'Hỏa', 17: 'Hỏa',
        58: 'Mộc', 18: 'Mộc', 59: 'Mộc', 19: 'Mộc',
        60: 'Thổ', 20: 'Thổ', 61: 'Thổ', 21: 'Thổ',
        62: 'Kim', 22: 'Kim', 63: 'Kim', 23: 'Kim',
        64: 'Hỏa', 65: 'Hỏa'
      };
      return bangNapAm[namSinh % 100] || 'Kim';
    }

    const menh = tinhMenhChinhXac(year);
    const tuoi = 2026 - year;
    
    const menhData = {
      Kim: { 
        linhVat: 'Kỳ Lân – Mã Vàng', 
        huong: 'Tây – Tây Bắc', 
        mau: 'Trắng – Vàng – Bạc',
        dacDiem: 'Cương nghị, quyết đoán, tài lộc dồi dào'
      },
      Mộc: { 
        linhVat: 'Rồng – Ngựa Phi', 
        huong: 'Đông – Đông Nam', 
        mau: 'Xanh lá – Xanh lam',
        dacDiem: 'Sinh trưởng, phát triển, sáng tạo'
      },
      Thủy: { 
        linhVat: 'Long Mã – Ngựa Đen', 
        huong: 'Bắc', 
        mau: 'Đen – Xanh navy',
        dacDiem: 'Linh hoạt, thông minh, trí tuệ'
      },
      Hỏa: { 
        linhVat: 'Phượng Hoàng – Ngựa Đỏ', 
        huong: 'Nam', 
        mau: 'Đỏ – Cam – Vàng đồng',
        dacDiem: 'Nhiệt huyết, năng động, thành công rực rỡ'
      },
      Thổ: { 
        linhVat: 'Song Mã – Kỳ Lân', 
        huong: 'Trung tâm – Tây Nam', 
        mau: 'Nâu – Vàng',
        dacDiem: 'Ôn hòa, vững chắc, tài vận ổn định'
      }
    };
    const info = menhData[menh];

    // ============ GỢI Ý SẢN PHẨM + ẢNH THẬT TỪ VERCEL ============
    let sp;
    const budgetNum = parseInt(budget) || 0;
    
    // Lấy base URL từ request header (tự động detect domain Vercel)
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers.host;
    const baseUrl = `${protocol}://${host}`;
    
    if (budgetNum < 2000000) {
      sp = { 
        name: 'Phi Mã Đại Việt', 
        price: '1.990.000đ',
        moTa: 'Set rượu cao cấp, phù hợp mọi mệnh',
        // ẢNH THẬT TỪ VERCEL PUBLIC FOLDER
        img: `${baseUrl}/products/Phi-Mã-Đại-Việt.jpg`
      };
    } else if (budgetNum >= 2000000 && budgetNum < 3000000) {
      sp = { 
        name: 'Linh Mã Hoàng Kim', 
        price: '2.990.000đ',
        moTa: 'Rượu cao cấp mạ vàng 24K, sang trọng đẳng cấp',
        img: `${baseUrl}/products/Linh-Mã-Hoàng-Kim.jpg`
      };
    } else if (budgetNum >= 3000000 && budgetNum < 3500000) {
      sp = { 
        name: 'Ngựa Thần Pegasus', 
        price: '3.490.000đ',
        moTa: 'Rượu thần tượng Pegasus, mang lại thành công vượt trội',
        img: `${baseUrl}/products/Ngựa-Thần-Pegasus.jpg`
      };
    } else {
      sp = { 
        name: 'Song Mã Song Hỷ', 
        price: '3.890.000đ',
        moTa: 'Bộ đôi rượu VIP, biểu tượng thịnh vượng kép',
        img: `${baseUrl}/products/Song-Mã-Song-Hỷ.jpg`
      };
    }

    // ============ EMAIL HTML PROFESSIONAL ============
    const html = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bản Phong Thủy 2026</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    .header {
      background: linear-gradient(135deg, #B71C1C, #D32F2F);
      color: white;
      padding: 40px 30px;
      text-align: center;
    }
    .header h1 {
      margin: 0 0 10px 0;
      font-size: 28px;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
    .header p {
      margin: 0;
      font-size: 16px;
      opacity: 0.95;
    }
    .content { padding: 30px; }
    .greeting {
      color: #B71C1C;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 15px;
    }
    .intro {
      line-height: 1.8;
      color: #333;
      margin-bottom: 20px;
    }
    .section {
      background: linear-gradient(135deg, #FFF8E1, #FFECB3);
      padding: 25px;
      margin: 25px 0;
      border-radius: 10px;
      border-left: 6px solid #B71C1C;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .section h3 {
      color: #B71C1C;
      margin: 0 0 15px 0;
      font-size: 22px;
    }
    .section p {
      margin: 12px 0;
      line-height: 1.8;
      font-size: 15px;
      color: #333;
    }
    .highlight {
      background: linear-gradient(135deg, #FFD700, #FFA500);
      color: #1a1a1a;
      padding: 3px 8px;
      border-radius: 5px;
      font-weight: bold;
    }
    .product {
      text-align: center;
      padding: 30px 20px;
      background: linear-gradient(135deg, #f9f9f9, #e8e8e8);
      margin: 30px 0;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    }
    .product h3 {
      color: #B71C1C;
      margin: 0 0 20px 0;
      font-size: 24px;
    }
    .product img {
      width: 100%;
      max-width: 400px;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 8px 16px rgba(0,0,0,0.2);
      border: 3px solid #D4AF37;
      display: block;
      margin: 0 auto 20px;
    }
    .product h2 {
      color: #B71C1C;
      margin: 15px 0;
      font-size: 24px;
    }
    .price {
      color: #D4AF37;
      font-size: 28px;
      font-weight: bold;
      margin: 10px 0;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    }
    .desc {
      color: #666;
      font-size: 14px;
      margin: 10px 0;
      line-height: 1.6;
    }
    .match {
      color: #B71C1C;
      font-weight: bold;
      margin-top: 15px;
    }
    .cta-wrapper {
      text-align: center;
      margin: 30px 0;
    }
    .cta {
      display: inline-block;
      padding: 18px 45px;
      background: linear-gradient(135deg, #0068FF, #0084FF);
      color: white;
      text-decoration: none;
      border-radius: 50px;
      font-size: 16px;
      font-weight: bold;
      box-shadow: 0 8px 20px rgba(0,104,255,0.4);
    }
    .benefits {
      background: linear-gradient(135deg, #E8F5E9, #C8E6C9);
      padding: 25px;
      margin: 25px 0;
      border-radius: 10px;
      border-left: 6px solid #2E7D32;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .benefits h3 {
      color: #2E7D32;
      margin: 0 0 15px 0;
      font-size: 22px;
    }
    .benefits p {
      margin: 10px 0;
      line-height: 1.8;
      color: #1B5E20;
    }
    .footer {
      background: #1a1a1a;
      color: white;
      padding: 30px;
      text-align: center;
    }
    .footer p {
      margin: 8px 0;
      font-size: 14px;
    }
    .footer strong {
      color: #D4AF37;
      font-size: 18px;
    }
    @media only screen and (max-width: 600px) {
      .header h1 { font-size: 24px; }
      .section, .product, .benefits { padding: 20px; }
      .cta { padding: 15px 35px; font-size: 15px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎁 BẢN PHONG THỦY 2026</h1>
      <p>Dành riêng cho <strong>${name}</strong> (Tuổi ${tuoi})</p>
    </div>
    
    <div class="content">
      <p class="greeting">Kính chào ${name},</p>
      <p class="intro">Cảm ơn anh/chị đã quan tâm đến <strong style="color:#B71C1C">Rượu Linh Vật VIP</strong> – bộ sưu tập rượu phong thủy cao cấp dành riêng cho năm Ất Tỵ 2026.</p>
      
      <div class="section">
        <h3>🔮 Thông Tin Mệnh Của ${name}</h3>
        <p><strong>🌟 Mệnh:</strong> <span class="highlight">${menh}</span></p>
        <p><strong>🐎 Linh vật phù hợp:</strong> ${info.linhVat}</p>
        <p><strong>🧭 Hướng trưng bày:</strong> ${info.huong}</p>
        <p><strong>🎨 Màu may mắn:</strong> ${info.mau}</p>
        <p><strong>✨ Đặc điểm:</strong> ${info.dacDiem}</p>
      </div>
      
      <div class="product">
        <h3>🎁 SẢN PHẨM GỢI Ý CHO ANH/CHỊ</h3>
        <img src="${sp.img}" alt="${sp.name}" loading="lazy">
        <h2>${sp.name}</h2>
        <p class="price">${sp.price}</p>
        <p class="desc">${sp.moTa}</p>
        <p class="match">✅ Phù hợp hoàn hảo với mệnh <span class="highlight">${menh}</span></p>
      </div>
      
      <div class="cta-wrapper">
        <a href="https://zalo.me/0986111079" class="cta">💬 Nhắn Zalo Tư Vấn Chi Tiết</a>
      </div>
      
      <div class="benefits">
        <h3>💎 Ưu Đãi Đặc Biệt 2026</h3>
        <p>✅ <strong>Miễn phí</strong> khắc tên lên chai rượu</p>
        <p>✅ <strong>Tặng kèm</strong> tài liệu phong thủy chi tiết</p>
        <p>✅ <strong>Bảo hành</strong> chất lượng trọn đời</p>
        <p>✅ <strong>Giao hàng</strong> miễn phí toàn quốc (đơn từ 2 triệu)</p>
      </div>
    </div>
    
    <div class="footer">
      <p><strong>RƯỢU LINH VẬT VIP</strong></p>
      <p>🏆 Rượu Phong Thủy Cao Cấp #1 Việt Nam</p>
      <p>📞 Hotline/Zalo: <strong>0986.111.079</strong></p>
      <p>📧 Email: <strong>sales.ruoulinhvatvip@gmail.com</strong></p>
      <p style="margin-top:20px; opacity:0.7">© 2026 Rượu Linh Vật VIP. All rights reserved.</p>
    </div>
  </div>
</body>
</html>`;

    // ============ GỬI EMAIL QUA BREVO API ============
    const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: { 
          name: 'Rượu Linh Vật VIP', 
          email: process.env.EMAIL_FROM || 'sales.ruoulinhvatvip@gmail.com' 
        },
        to: [{ email, name }],
        subject: `🎁 Bản Phong Thủy 2026 - ${name} (Tuổi ${tuoi}) - Mệnh ${menh}`,
        htmlContent: html
      })
    });

    if (!brevoRes.ok) {
      const err = await brevoRes.text();
      console.error('Brevo API Error:', err);
      throw new Error(`Brevo API error: ${err}`);
    }

    // ============ RESPONSE THÀNH CÔNG ============
    return res.status(200).json({ 
      success: true, 
      message: 'Email đã gửi thành công', 
      data: { 
        menh, 
        sanPham: sp.name,
        tuoi,
        imageUrl: sp.img
      } 
    });

  } catch (error) {
    console.error('❌ Send Email Error:', error);
    return res.status(500).json({ 
      error: 'Gửi email thất bại', 
      details: error.message 
    });
  }
};
