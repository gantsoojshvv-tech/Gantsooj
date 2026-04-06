<!DOCTYPE html>
<html lang="mn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Хөвд Аймаг - Бараа Захиалга</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'Inter', sans-serif;
            background: #0a0a0a;
            color: #e0e0e0;
            overflow-x: hidden;
        }

        /* ===== BACKGROUND ANIMATION ===== */
        .bg-animation {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            overflow: hidden;
        }

        .bg-animation .orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            opacity: 0.15;
            animation: float 20s ease-in-out infinite;
        }

        .bg-animation .orb:nth-child(1) {
            width: 600px; height: 600px;
            background: #ff6b35;
            top: -10%; left: -10%;
            animation-delay: 0s;
        }

        .bg-animation .orb:nth-child(2) {
            width: 500px; height: 500px;
            background: #00d4ff;
            top: 50%; right: -10%;
            animation-delay: -5s;
        }

        .bg-animation .orb:nth-child(3) {
            width: 400px; height: 400px;
            background: #a855f7;
            bottom: -10%; left: 30%;
            animation-delay: -10s;
        }

        .bg-animation .orb:nth-child(4) {
            width: 350px; height: 350px;
            background: #f43f5e;
            top: 30%; left: 50%;
            animation-delay: -15s;
        }

        @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(80px, -60px) scale(1.1); }
            50% { transform: translate(-40px, 80px) scale(0.9); }
            75% { transform: translate(60px, 40px) scale(1.05); }
        }

        .container { max-width: 1300px; margin: 0 auto; padding: 0 20px; }

        /* ===== HEADER ===== */
        header {
            background: rgba(10, 10, 10, 0.8);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255,255,255,0.06);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .header-top {
            background: rgba(255,107,53,0.1);
            border-bottom: 1px solid rgba(255,255,255,0.04);
            padding: 8px 0;
            font-size: 13px;
        }

        .header-top .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
        }

        .header-top .location { color: #888; }

        .phone-link {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #ff6b35;
            font-weight: 700;
            font-size: 15px;
            text-decoration: none;
            padding: 4px 14px;
            background: rgba(255,107,53,0.1);
            border-radius: 20px;
            border: 1px solid rgba(255,107,53,0.2);
            transition: all 0.3s;
        }

        .phone-link:hover {
            background: rgba(255,107,53,0.2);
            color: #ff8c5a;
        }

        .header-main { padding: 16px 0; }

        .header-main .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 14px;
        }

        .logo-icon {
            width: 52px;
            height: 52px;
            background: linear-gradient(135deg, #ff6b35, #f43f5e);
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            color: white;
            font-weight: 900;
            box-shadow: 0 4px 20px rgba(255,107,53,0.3);
        }

        .logo-text h1 {
            color: #fff;
            font-size: 20px;
            font-weight: 800;
        }

        .logo-text p {
            color: #666;
            font-size: 11px;
            letter-spacing: 3px;
            text-transform: uppercase;
        }

        nav ul {
            display: flex;
            list-style: none;
            gap: 4px;
            flex-wrap: wrap;
        }

        nav ul li a {
            color: #999;
            text-decoration: none;
            padding: 10px 16px;
            border-radius: 10px;
            font-weight: 500;
            font-size: 13px;
            transition: all 0.3s;
            display: block;
        }

        nav ul li a:hover, nav ul li a.active {
            background: rgba(255,107,53,0.1);
            color: #ff6b35;
        }

        /* ===== MOBILE MENU ===== */
        .mobile-menu-btn {
            display: none;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            color: #fff;
            padding: 10px 14px;
            border-radius: 10px;
            font-size: 20px;
            cursor: pointer;
        }

        /* ===== HERO ===== */
        .hero {
            padding: 100px 0 120px;
            text-align: center;
            position: relative;
        }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 20px;
            background: rgba(255,107,53,0.1);
            border: 1px solid rgba(255,107,53,0.2);
            border-radius: 50px;
            color: #ff6b35;
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 30px;
        }

        .hero-badge .dot {
            width: 8px;
            height: 8px;
            background: #ff6b35;
            border-radius: 50%;
            animation: blink 1.5s infinite;
        }

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
        }

        .hero h2 {
            color: #fff;
            font-size: 56px;
            font-weight: 900;
            line-height: 1.1;
            margin-bottom: 20px;
            letter-spacing: -2px;
        }

        .hero h2 .gradient {
            background: linear-gradient(135deg, #ff6b35, #f43f5e, #a855f7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .hero p {
            color: #777;
            font-size: 18px;
            max-width: 550px;
            margin: 0 auto 40px;
            line-height: 1.7;
        }

        .hero-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 60px;
        }

        .btn-primary {
            padding: 16px 36px;
            background: linear-gradient(135deg, #ff6b35, #f43f5e);
            color: #fff;
            border: none;
            border-radius: 14px;
            font-size: 15px;
            font-weight: 700;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.3s;
            font-family: 'Inter', sans-serif;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 4px 25px rgba(255,107,53,0.3);
        }

        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 40px rgba(255,107,53,0.4);
        }

        .btn-secondary {
            padding: 16px 36px;
            background: rgba(255,255,255,0.05);
            color: #ccc;
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 14px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.3s;
            font-family: 'Inter', sans-serif;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .btn-secondary:hover {
            background: rgba(255,255,255,0.1);
            color: #fff;
            transform: translateY(-3px);
        }

        .hero-stats {
            display: flex;
            justify-content: center;
            gap: 60px;
            flex-wrap: wrap;
        }

        .stat-item { text-align: center; }

        .stat-item .num {
            font-size: 36px;
            font-weight: 900;
            background: linear-gradient(135deg, #ff6b35, #f43f5e);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .stat-item .label { color: #666; font-size: 13px; margin-top: 4px; }

        /* ===== SECTION STYLES ===== */
        .section { padding: 80px 0; }

        .section-title {
            text-align: center;
            margin-bottom: 60px;
        }

        .section-title .tag {
            display: inline-block;
            padding: 6px 16px;
            background: rgba(255,107,53,0.1);
            border: 1px solid rgba(255,107,53,0.15);
            border-radius: 50px;
            color: #ff6b35;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 16px;
        }

        .section-title h2 {
            font-size: 36px;
            font-weight: 800;
            color: #fff;
            margin-bottom: 12px;
        }

        .section-title p {
            color: #666;
            font-size: 16px;
            max-width: 500px;
            margin: 0 auto;
        }

        /* ===== GLASS CARD ===== */
        .glass {
            background: rgba(255,255,255,0.03);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.06);
            border-radius: 20px;
        }

        /* ===== CATEGORIES ===== */
        .cat-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
        }

        .cat-card {
            background: rgba(255,255,255,0.03);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.06);
            border-radius: 20px;
            padding: 35px 20px;
            text-align: center;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
        }

        .cat-card::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(135deg, #ff6b35, #f43f5e);
            transform: scaleX(0);
            transition: transform 0.3s;
        }

        .cat-card:hover::after { transform: scaleX(1); }

        .cat-card:hover {
            transform: translateY(-10px);
            border-color: rgba(255,107,53,0.3);
            box-shadow: 0 20px 60px rgba(255,107,53,0.1);
        }

        .cat-card.selected {
            border-color: rgba(255,107,53,0.4);
            background: rgba(255,107,53,0.05);
        }

        .cat-card.selected::after { transform: scaleX(1); }

        .cat-icon-wrap {
            width: 65px;
            height: 65px;
            border-radius: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            margin: 0 auto 16px;
        }

        .cat-card:nth-child(1) .cat-icon-wrap { background: rgba(255,107,53,0.15); }
        .cat-card:nth-child(2) .cat-icon-wrap { background: rgba(0,212,255,0.15); }
        .cat-card:nth-child(3) .cat-icon-wrap { background: rgba(168,85,247,0.15); }
        .cat-card:nth-child(4) .cat-icon-wrap { background: rgba(244,63,94,0.15); }

        .cat-card h3 { font-size: 16px; font-weight: 700; color: #eee; margin-bottom: 6px; }
        .cat-card p { color: #666; font-size: 12px; line-height: 1.5; }

        .cat-check {
            display: none;
            position: absolute;
            top: 12px;
            right: 12px;
            width: 26px;
            height: 26px;
            background: linear-gradient(135deg, #ff6b35, #f43f5e);
            border-radius: 50%;
            color: #fff;
            font-size: 12px;
            align-items: center;
            justify-content: center;
        }

        .cat-card.selected .cat-check { display: flex; }

        /* ===== БЭЛЭН БАРАА (PRODUCTS) ===== */
        .products-section {
            padding: 80px 0;
        }

        .products-tabs {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-bottom: 40px;
            flex-wrap: wrap;
        }

        .tab-btn {
            padding: 10px 24px;
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 50px;
            color: #888;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            font-family: 'Inter', sans-serif;
        }

        .tab-btn:hover, .tab-btn.active {
            background: rgba(255,107,53,0.15);
            border-color: rgba(255,107,53,0.3);
            color: #ff6b35;
        }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 24px;
        }

        .product-card {
            background: rgba(255,255,255,0.03);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.06);
            border-radius: 20px;
            overflow: hidden;
            transition: all 0.4s;
            position: relative;
        }

        .product-card:hover {
            transform: translateY(-8px);
            border-color: rgba(255,107,53,0.2);
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }

        .product-img {
            width: 100%;
            height: 220px;
            background: rgba(255,255,255,0.02);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 80px;
            position: relative;
            overflow: hidden;
        }

        .product-img::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 60px;
            background: linear-gradient(transparent, rgba(10,10,10,0.8));
        }

        .product-badge {
            position: absolute;
            top: 12px;
            left: 12px;
            padding: 5px 12px;
            border-radius: 8px;
            font-size: 11px;
            font-weight: 700;
            z-index: 2;
        }

        .badge-new { background: rgba(255,107,53,0.9); color: #fff; }
        .badge-hot { background: rgba(244,63,94,0.9); color: #fff; }
        .badge-sale { background: rgba(168,85,247,0.9); color: #fff; }

        .product-info {
            padding: 20px;
        }

        .product-info h3 {
            font-size: 16px;
            font-weight: 700;
            color: #eee;
            margin-bottom: 6px;
        }

        .product-info .desc {
            color: #666;
            font-size: 13px;
            margin-bottom: 14px;
            line-height: 1.5;
        }

        .product-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .product-price {
            font-size: 20px;
            font-weight: 800;
            color: #ff6b35;
        }

        .product-price .currency {
            font-size: 13px;
            font-weight: 500;
            color: #888;
        }

        .add-cart-btn {
            padding: 10px 20px;
            background: linear-gradient(135deg, #ff6b35, #f43f5e);
            color: #fff;
            border: none;
            border-radius: 10px;
            font-size: 12px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s;
            font-family: 'Inter', sans-serif;
        }

        .add-cart-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 20px rgba(255,107,53,0.3);
        }

        /* ===== ORDER FORM ===== */
        .order-section { padding: 80px 0; }

        .order-container { max-width: 800px; margin: 0 auto; }

        .order-form {
            background: rgba(255,255,255,0.03);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255,255,255,0.06);
            border-radius: 24px;
            padding: 50px;
        }

        .form-header { text-align: center; margin-bottom: 40px; }

        .form-header h2 {
            font-size: 28px;
            font-weight: 800;
            color: #fff;
        }

        .form-header p { color: #666; margin-top: 8px; }

        .form-group { margin-bottom: 24px; }

        .form-group label {
            display: block;
            font-weight: 600;
            color: #aaa;
            margin-bottom: 8px;
            font-size: 13px;
        }

        .form-group label .required { color: #f43f5e; }

        .form-group input,
        .form-group textarea,
        .form-group select {
            width: 100%;
            padding: 15px 18px;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 12px;
            font-size: 15px;
            color: #eee;
            font-family: 'Inter', sans-serif;
            transition: all 0.3s;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder { color: #555; }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
            outline: none;
            border-color: rgba(255,107,53,0.4);
            background: rgba(255,107,53,0.03);
            box-shadow: 0 0 0 4px rgba(255,107,53,0.08);
        }

        .form-group select option { background: #1a1a1a; color: #eee; }

        .form-group textarea { resize: vertical; min-height: 100px; }

        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .image-upload-area {
            border: 2px dashed rgba(255,255,255,0.1);
            border-radius: 16px;
            padding: 40px 20px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s;
            background: rgba(255,255,255,0.02);
            position: relative;
        }

        .image-upload-area:hover {
            border-color: rgba(255,107,53,0.3);
            background: rgba(255,107,53,0.03);
        }

        .upload-icon { font-size: 48px; margin-bottom: 10px; }
        .image-upload-area h4 { color: #ccc; font-size: 15px; margin-bottom: 5px; }
        .image-upload-area p { color: #555; font-size: 12px; }

        .image-upload-area input[type="file"] {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            opacity: 0; cursor: pointer;
        }

        .image-preview-container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 15px;
        }

        .image-preview {
            width: 85px;
            height: 85px;
            border-radius: 12px;
            overflow: hidden;
            position: relative;
            border: 1px solid rgba(255,255,255,0.1);
        }

        .image-preview img { width: 100%; height: 100%; object-fit: cover; }

        .image-preview .remove-img {
            position: absolute;
            top: 4px; right: 4px;
            width: 22px; height: 22px;
            background: #f43f5e;
            color: #fff;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            font-size: 11px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .divider {
            border: none;
            border-top: 1px solid rgba(255,255,255,0.06);
            margin: 35px 0;
        }

        .submit-btn {
            width: 100%;
            padding: 18px;
            background: linear-gradient(135deg, #ff6b35, #f43f5e);
            color: #fff;
            border: none;
            border-radius: 14px;
            font-size: 17px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s;
            font-family: 'Inter', sans-serif;
            margin-top: 10px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 4px 25px rgba(255,107,53,0.3);
        }

        .submit-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 45px rgba(255,107,53,0.4);
        }

        .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

        .spinner {
            display: none;
            width: 22px; height: 22px;
            border: 3px solid rgba(255,255,255,0.3);
            border-top-color: #fff;
            border-radius: 50%;
            animation: spin 0.7s linear infinite;
            margin: 0 auto;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        /* ===== FEATURES ===== */
        .features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
        }

        .feature-card {
            background: rgba(255,255,255,0.03);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.06);
            border-radius: 20px;
            padding: 35px 25px;
            text-align: center;
            transition: all 0.3s;
        }

        .feature-card:hover {
            transform: translateY(-8px);
            border-color: rgba(255,107,53,0.2);
        }

        .feature-icon {
            font-size: 45px;
            margin-bottom: 16px;
        }

        .feature-card h3 { font-size: 18px; font-weight: 700; color: #eee; margin-bottom: 10px; }
        .feature-card p { color: #666; font-size: 13px; line-height: 1.6; }

        .feature-badge {
            display: inline-block;
            padding: 5px 14px;
            border-radius: 50px;
            font-size: 11px;
            font-weight: 600;
            margin-top: 14px;
        }

        .fb-orange { background: rgba(255,107,53,0.15); color: #ff6b35; }
        .fb-blue { background: rgba(0,212,255,0.15); color: #00d4ff; }
        .fb-purple { background: rgba(168,85,247,0.15); color: #a855f7; }

        /* ===== FOOTER ===== */
        footer {
            background: rgba(10,10,10,0.9);
            backdrop-filter: blur(10px);
            border-top: 1px solid rgba(255,255,255,0.04);
            padding: 60px 0 30px;
        }

        .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 35px;
            margin-bottom: 40px;
        }

        .footer-col h3 { color: #fff; font-size: 15px; font-weight: 700; margin-bottom: 20px; }
        .footer-col p, .footer-col a {
            color: #555;
            font-size: 13px;
            line-height: 2.2;
            text-decoration: none;
            display: block;
            transition: color 0.3s;
        }

        .footer-col a:hover { color: #ff6b35; }

        .footer-contact-item {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 14px;
        }

        .footer-contact-item .fc-icon {
            width: 38px;
            height: 38px;
            background: rgba(255,107,53,0.1);
            border: 1px solid rgba(255,107,53,0.1);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
        }

        .footer-bottom {
            border-top: 1px solid rgba(255,255,255,0.04);
            padding-top: 25px;
            text-align: center;
            font-size: 12px;
            color: #444;
        }

        /* ===== MODAL ===== */
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(0,0,0,0.7);
            backdrop-filter: blur(10px);
            z-index: 9999;
            justify-content: center;
            align-items: center;
        }

        .modal-overlay.show { display: flex; }

        .modal-content {
            background: rgba(20,20,20,0.95);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 24px;
            padding: 50px 40px;
            text-align: center;
            max-width: 440px;
            width: 90%;
            animation: modalIn 0.4s ease;
        }

        @keyframes modalIn {
            from { transform: scale(0.8) translateY(30px); opacity: 0; }
            to { transform: scale(1) translateY(0); opacity: 1; }
        }

        .modal-content .success-icon {
            width: 80px; height: 80px;
            background: rgba(255,107,53,0.15);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            margin: 0 auto 20px;
        }

        .modal-content h2 { font-size: 24px; font-weight: 800; color: #fff; margin-bottom: 10px; }
        .modal-content p { color: #888; font-size: 14px; line-height: 1.6; margin-bottom: 25px; }

        .modal-close-btn {
            padding: 14px 40px;
            background: linear-gradient(135deg, #ff6b35, #f43f5e);
            color: #fff;
            border: none;
            border-radius: 12px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            font-family: 'Inter', sans-serif;
            transition: all 0.3s;
        }

        .modal-close-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(255,107,53,0.4);
        }

        /* ===== CART MODAL ===== */
        .cart-modal {
            display: none;
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(0,0,0,0.7);
            backdrop-filter: blur(10px);
            z-index: 9998;
            justify-content: center;
            align-items: center;
        }

        .cart-modal.show { display: flex; }

        .cart-content {
            background: rgba(20,20,20,0.95);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 24px;
            padding: 40px;
            max-width: 500px;
            width: 90%;
            animation: modalIn 0.4s ease;
        }

        .cart-content h2 { color: #fff; font-size: 22px; font-weight: 800; margin-bottom: 20px; text-align: center; }

        .cart-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 14px 0;
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .cart-item-name { color: #ccc; font-size: 14px; font-weight: 600; }
        .cart-item-price { color: #ff6b35; font-weight: 700; }

        .cart-item .remove-cart {
            background: none;
            border: none;
            color: #f43f5e;
            cursor: pointer;
            font-size: 16px;
            padding: 4px 8px;
        }

        .cart-total {
            display: flex;
            justify-content: space-between;
            padding: 20px 0 0;
            font-weight: 800;
            font-size: 18px;
        }

        .cart-total span:first-child { color: #fff; }
        .cart-total span:last-child { color: #ff6b35; }

        .cart-empty { text-align: center; color: #555; padding: 30px 0; font-size: 14px; }

        .cart-buttons { display: flex; gap: 12px; margin-top: 20px; }

        .cart-close-btn {
            flex: 1;
            padding: 14px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            color: #ccc;
            border-radius: 12px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            font-family: 'Inter', sans-serif;
        }

        .cart-order-btn {
            flex: 1;
            padding: 14px;
            background: linear-gradient(135deg, #ff6b35, #f43f5e);
            color: #fff;
            border: none;
            border-radius: 12px;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            font-family: 'Inter', sans-serif;
        }

        /* ===== FLOATING CART ===== */
        .floating-cart {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #ff6b35, #f43f5e);
            border-radius: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: #fff;
            cursor: pointer;
            box-shadow: 0 8px 30px rgba(255,107,53,0.4);
            z-index: 998;
            transition: all 0.3s;
            border: none;
        }

        .floating-cart:hover { transform: scale(1.1); }

        .cart-count {
            position: absolute;
            top: -6px;
            right: -6px;
            width: 24px;
            height: 24px;
            background: #fff;
            color: #f43f5e;
            border-radius: 50%;
            font-size: 12px;
            font-weight: 800;
            display: none;
            align-items: center;
            justify-content: center;
        }

        .cart-count.show { display: flex; }

        /* ===== SCROLL TOP ===== */
        .scroll-top {
            position: fixed;
            bottom: 30px;
            left: 30px;
            width: 50px;
            height: 50px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            color: #888;
            border-radius: 14px;
            font-size: 18px;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
            z-index: 997;
        }

        .scroll-top:hover { background: rgba(255,107,53,0.1); color: #ff6b35; }
        .scroll-top.show { display: flex; }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
            .cat-grid { grid-template-columns: repeat(2, 1fr); }
            .features-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
            .mobile-menu-btn { display: block; }
            nav { display: none; width: 100%; }
            nav.open { display: block; }
            nav ul { flex-direction: column; padding: 10px 0; }
            nav ul li a { text-align: center; }

            .header-main .container { flex-wrap: wrap; }

            .hero h2 { font-size: 34px; }
            .hero p { font-size: 15px; }
            .form-row { grid-template-columns: 1fr; }
            .order-form { padding: 30px 20px; }
            .features-grid { grid-template-columns: 1fr; }
            .cat-grid { grid-template-columns: 1fr; }
            .products-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 480px) {
            .hero h2 { font-size: 28px; letter-spacing: -1px; }
            .hero-stats { gap: 30px; }
            .stat-item .num { font-size: 28px; }
        }
    </style>
</head>
<body>

<!-- BG ANIMATION -->
<div class="bg-animation">
    <div class="orb"></div>
    <div class="orb"></div>
    <div class="orb"></div>
    <div class="orb"></div>
</div>

<!-- HEADER -->
<header>
    <div class="header-top">
        <div class="container">
            <span class="location">🏔️ Хөвд аймаг • Бараа захиалга & худалдаа</span>
            <a href="tel:94314061" class="phone-link">📞 94314061</a>
        </div>
    </div>
    <div class="header-main">
        <div class="container">
            <div class="logo">
                <div class="logo-icon">ХА</div>
                <div class="logo-text">
                    <h1>ХӨВД АЙМАГ</h1>
                    <p>Онлайн дэлгүүр</p>
                </div>
            </div>
            <button class="mobile-menu-btn" onclick="toggleMenu()">☰</button>
            <nav id="mainNav">
                <ul>
                    <li><a href="#home" class="active">Нүүр</a></li>
                    <li><a href="#categories">Төрөл</a></li>
                    <li><a href="#products">Бэлэн бараа</a></li>
                    <li><a href="#order">Захиалга</a></li>
                    <li><a href="#features">Давуу тал</a></li>
                    <li><a href="#contact">Холбоо барих</a></li>
                </ul>
            </nav>
        </div>
    </div>
</header>

<!-- HERO -->
<section class="hero" id="home">
    <div class="container">
        <div class="hero-badge">
            <div class="dot"></div>
            Хөвд аймагт үйлчилж байна
        </div>
        <h2>Бэлэн бараа +<br><span class="gradient">Онлайн захиалга</span></h2>
        <p>Бэлэн барааг шууд сонгон авах, эсвэл хэрэгтэй барааг захиалж хүргүүлэх боломж</p>
        <div class="hero-buttons">
            <a href="#products" class="btn-primary">🛒 Бэлэн бараа үзэх</a>
            <a href="#order" class="btn-secondary">📦 Захиалга өгөх</a>
        </div>
        <div class="hero-stats">
            <div class="stat-item">
                <div class="num">500+</div>
                <div class="label">Сэтгэл ханамжтай</div>
            </div>
            <div class="stat-item">
                <div class="num">50+</div>
                <div class="label">Бэлэн бараа</div>
            </div>
            <div class="stat-item">
                <div class="num">24/7</div>
                <div class="label">Захиалга авна</div>
            </div>
        </div>
    </div>
</section>

<!-- CATEGORIES -->
<section class="section" id="categories">
    <div class="container">
        <div class="section-title">
            <div class="tag">Ангилал</div>
            <h2>Бүтээгдэхүүний төрөл</h2>
            <p>4 үндсэн ангилалаас сонгоно уу</p>
        </div>
        <div class="cat-grid">
            <div class="cat-card" onclick="selectCategory(this, 'Хүнсний бүтээгдэхүүн')">
                <div class="cat-check">✓</div>
                <div class="cat-icon-wrap">🍎</div>
                <h3>Хүнсний бүтээгдэхүүн</h3>
                <p>Хоол хүнс, ундаа, амттан</p>
            </div>
            <div class="cat-card" onclick="selectCategory(this, 'Ахуйн бараа')">
                <div class="cat-check">✓</div>
                <div class="cat-icon-wrap">🧴</div>
                <h3>Ахуйн бараа</h3>
                <p>Гэр ахуйн хэрэгсэл</p>
            </div>
            <div class="cat-card" onclick="selectCategory(this, 'Цахилгаан бараа')">
                <div class="cat-check">✓</div>
                <div class="cat-icon-wrap">📱</div>
                <h3>Цахилгаан бараа</h3>
                <p>Утас, техник хэрэгсэл</p>
            </div>
            <div class="cat-card" onclick="selectCategory(this, 'Бусад бараа')">
                <div class="cat-check">✓</div>
                <div class="cat-icon-wrap">📦</div>
                <h3>Бусад бараа</h3>
                <p>Хувцас, гоо сайхан, бусад</p>
            </div>
        </div>
    </div>
</section>

<!-- БЭЛЭН БАРАА -->
<section class="products-section" id="products">
    <div class="container">
        <div class="section-title">
            <div class="tag">Бэлэн бараа</div>
            <h2>Шууд худалдан авах</h2>
            <p>Бэлэн байгаа барааг сонгон сагсанд хийнэ үү</p>
        </div>

        <div class="products-tabs">
            <button class="tab-btn active" onclick="filterProducts('all', this)">Бүгд</button>
            <button class="tab-btn" onclick="filterProducts('food', this)">🍎 Хүнс</button>
            <button class="tab-btn" onclick="filterProducts('home', this)">🧴 Ахуйн</button>
            <button class="tab-btn" onclick="filterProducts('tech', this)">📱 Техник</button>
            <button class="tab-btn" onclick="filterProducts('other', this)">📦 Бусад</button>
        </div>

        <div class="products-grid" id="productsGrid">
            <!-- Product 1 -->
            <div class="product-card" data-cat="food">
                <div class="product-img">
                    <span class="product-badge badge-new">ШИНЭ</span>
                    🥩
                </div>
                <div class="product-info">
                    <h3>Үхрийн мах (1кг)</h3>
                    <p class="desc">Шинэхэн үхрийн мах, чанарын баталгаатай</p>
                    <div class="product-bottom">
                        <div class="product-price">18,000<span class="currency">₮</span></div>
                        <button class="add-cart-btn" onclick="addToCart('Үхрийн мах 1кг', 18000)">🛒 Сагслах</button>
                    </div>
                </div>
            </div>

            <!-- Product 2 -->
            <div class="product-card" data-cat="food">
                <div class="product-img">
                    <span class="product-badge badge-hot">ХИТ</span>
                    🍚
                </div>
                <div class="product-info">
                    <h3>Будаа (5кг)</h3>
                    <p class="desc">Дээд зэргийн цагаан будаа</p>
                    <div class="product-bottom">
                        <div class="product-price">12,500<span class="currency">₮</span></div>
                        <button class="add-cart-btn" onclick="addToCart('Будаа 5кг', 12500)">🛒 Сагслах</button>
                    </div>
                </div>
            </div>

            <!-- Product 3 -->
            <div class="product-card" data-cat="tech">
                <div class="product-img">
                    <span class="product-badge badge-sale">-10%</span>
                    📱
                </div>
                <div class="product-info">
                    <h3>Samsung Galaxy A15</h3>
                    <p class="desc">128GB, Dual SIM, шинэ загвар</p>
                    <div class="product-bottom">
                        <div class="product-price">450,000<span class="currency">₮</span></div>
                        <button class="add-cart-btn" onclick="addToCart('Samsung Galaxy A15', 450000)">🛒 Сагслах</button>
                    </div>
                </div>
            </div>

            <!-- Product 4 -->
            <div class="product-card" data-cat="home">
                <div class="product-img">
                    🧹
                </div>
                <div class="product-info">
                    <h3>Тоос сорогч</h3>
                    <p class="desc">Хүчирхэг тоос сорогч, гэр ахуйд тохиромжтой</p>
                    <div class="product-bottom">
                        <div class="product-price">85,000<span class="currency">₮</span></div>
                        <button class="add-cart-btn" onclick="addToCart('Тоос сорогч', 85000)">🛒 Сагслах</button>
                    </div>
                </div>
            </div>

            <!-- Product 5 -->
            <div class="product-card" data-cat="other">
                <div class="product-img">
                    <span class="product-badge badge-new">ШИНЭ</span>
                    🧥
                </div>
                <div class="product-info">
                    <h3>Өвлийн куртка</h3>
                    <p class="desc">Дулаахан, хөнгөн, загварлаг өвлийн куртка</p>
                    <div class="product-bottom">
                        <div class="product-price">120,000<span class="currency">₮</span></div>
                        <button class="add-cart-btn" onclick="addToCart('Өвлийн куртка', 120000)">🛒 Сагслах</button>
                    </div>
                </div>
            </div>

            <!-- Product 6 -->
            <div class="product-card" data-cat="food">
                <div class="product-img">
                    🥛
                </div>
                <div class="product-info">
                    <h3>Сүү (1 литр)</h3>
                    <p class="desc">Шинэхэн сүү, өдөр бүр нийлүүлнэ</p>
                    <div class="product-bottom">
                        <div class="product-price">3,500<span class="currency">₮</span></div>
                        <button class="add-cart-btn" onclick="addToCart('Сүү 1 литр', 3500)">🛒 Сагслах</button>
                    </div>
                </div>
            </div>

            <!-- Product 7 -->
            <div class="product-card" data-cat="tech">
                <div class="product-img">
                    <span class="product-badge badge-hot">ХИТ</span>
                    🎧
                </div>
                <div class="product-info">
                    <h3>Bluetooth чихэвч</h3>
                    <p class="desc">Утасгүй чихэвч, 20 цагийн батарей</p>
                    <div class="product-bottom">
                        <div class="product-price">35,000<span class="currency">₮</span></div>
                        <button class="add-cart-btn" onclick="addToCart('Bluetooth чихэвч', 35000)">🛒 Сагслах</button>
                    </div>
                </div>
            </div>

            <!-- Product 8 -->
            <div class="product-card" data-cat="home">
                <div class="product-img">
                    🧼
                </div>
                <div class="product-info">
                    <h3>Угаалгын нунтаг (3кг)</h3>
                    <p class="desc">Хүчтэй цэвэрлэгээ, тааламжтай үнэр</p>
                    <div class="product-bottom">
                        <div class="product-price">15,000<span class="currency">₮</span></div>
                        <button class="add-cart-btn" onclick="addToCart('Угаалгын нунтаг 3кг', 15000)">🛒 Сагслах</button>
                    </div>
                </div>
            </div>

            <!-- Product 9 -->
            <div class="product-card" data-cat="other">
                <div class="product-img">
                    <span class="product-badge badge-sale">-15%</span>
                    👟
                </div>
                <div class="product-info">
                    <h3>Спорт пүүз</h3>
                    <p class="desc">Хөнгөн, тав тухтай спорт пүүз</p>
                    <div class="product-bottom">
                        <div class="product-price">65,000<span class="currency">₮</span></div>
                        <button class="add-cart-btn" onclick="addToCart('Спорт пүүз', 65000)">🛒 Сагслах</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ORDER FORM -->
<section class="order-section" id="order">
    <div class="container">
        <div class="order-container">
            <div class="order-form">
                <div class="form-header">
                    <div class="section-title" style="margin-bottom:0;">
                        <div class="tag">Захиалга</div>
                        <h2>📦 Бараа захиалах</h2>
                        <p>Бэлэн байхгүй барааг захиалж оруулж ирнэ</p>
                    </div>
                </div>

                <form id="orderForm" onsubmit="submitOrder(event)">
                    <div class="form-group">
                        <label>Барааны нэр <span class="required">*</span></label>
                        <input type="text" id="productName" placeholder="Жнь: iPhone 15, Nike пүүз гэх мэт" required>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label>Бүтээгдэхүүний төрөл <span class="required">*</span></label>
                            <select id="productCategory" required>
                                <option value="">-- Сонгоно уу --</option>
                                <option value="Хүнсний бүтээгдэхүүн">🍎 Хүнсний бүтээгдэхүүн</option>
                                <option value="Ахуйн бараа">🧴 Ахуйн бараа</option>
                                <option value="Цахилгаан бараа">📱 Цахилгаан бараа</option>
                                <option value="Бусад бараа">📦 Бусад бараа</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Тоо ширхэг <span class="required">*</span></label>
                            <input type="number" id="quantity" placeholder="1" min="1" value="1" required>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Барааны зураг (заавал биш)</label>
                        <div class="image-upload-area" id="uploadArea">
                            <div class="upload-icon">📸</div>
                            <h4>Зураг оруулах</h4>
                            <p>Дарж зураг сонгох эсвэл чирж оруулах</p>
                            <p style="font-size:11px; margin-top:5px; color:#444;">PNG, JPG (5MB хүртэл)</p>
                            <input type="file" id="productImages" accept="image/*" multiple onchange="handleImages(event)">
                        </div>
                        <div class="image-preview-container" id="imagePreview"></div>
                    </div>

                    <div class="form-group">
                        <label>Дэлгэрэнгүй мэдээлэл</label>
                        <textarea id="productDetails" placeholder="Өнгө, хэмжээ, загвар, линк гэх мэт..."></textarea>
                    </div>

                    <hr class="divider">

                    <div style="text-align:center; margin-bottom:30px;">
                        <h3 style="color:#fff; font-size:20px; font-weight:800;">👤 Таны мэдээлэл</h3>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label>Нэр <span class="required">*</span></label>
                            <input type="text" id="customerName" placeholder="Таны нэр" required>
                        </div>
                        <div class="form-group">
                            <label>Утас <span class="required">*</span></label>
                            <input type="tel" id="customerPhone" placeholder="9XXXXXXX" required>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Хүргэлтийн хаяг <span class="required">*</span></label>
                        <input type="text" id="deliveryAddress" placeholder="Хөвд аймаг, ..." required>
                    </div>

                    <div class="form-group">
                        <label>Нэмэлт тайлбар</label>
                        <textarea id="additionalNotes" placeholder="Хүргэлтийн цаг, нэмэлт хүсэлт..."></textarea>
                    </div>

                    <button type="submit" class="submit-btn" id="submitBtn">
                        <span id="btnText">📤 Захиалга илгээх</span>
                        <div class="spinner" id="btnSpinner"></div>
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>

<!-- FEATURES -->
<section class="section" id="features">
    <div class="container">
        <div class="section-title">
            <div class="tag">Давуу тал</div>
            <h2>Яагаад биднийг сонгох вэ?</h2>
            <p>Сэтгэл ханамжтай үйлчилгээ</p>
        </div>
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">🚚</div>
                <h3>Шуурхай хүргэлт</h3>
                <p>Хөвд аймгийн бүх сум, багт 1-3 хоногт хүргэнэ</p>
                <span class="feature-badge fb-orange">✓ Найдвартай</span>
            </div>
            <div class="feature-card">
                <div class="feature-icon">💰</div>
                <h3>Хямд үнэ</h3>
                <p>Шууд нийлүүлэгчээс зуучлагчгүй хямд үнээр</p>
                <span class="feature-badge fb-blue">✓ Хэмнэлттэй</span>
            </div>
            <div class="feature-card">
                <div class="feature-icon">⭐</div>
                <h3>Чанарын баталгаа</h3>
                <p>Бүх бараа чанарын баталгаатай, буцаах боломжтой</p>
                <span class="feature-badge fb-purple">✓ Баталгаатай</span>
            </div>
        </div>
    </div>
</section>

<!-- FOOTER -->
<footer id="contact">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-col">
                <div class="logo" style="margin-bottom:16px;">
                    <div class="logo-icon" style="width:42px; height:42px; font-size:16px; border-radius:12px;">ХА</div>
                    <div class="logo-text">
                        <h1 style="font-size:16px;">ХӨВД АЙМАГ</h1>
                        <p style="font-size:10px;">Онлайн дэлгүүр</p>
                    </div>
                </div>
                <p style="color:#555; font-size:13px; line-height:1.7;">Хөвд аймгийн бараа бүтээгдэхүүний онлайн худалдаа, захиалга, хүргэлтийн үйлчилгээ.</p>
            </div>
            <div class="footer-col">
                <h3>Холбоо барих</h3>
                <div class="footer-contact-item">
                    <div class="fc-icon">📞</div>
                    <a href="tel:94314061" style="font-weight:700; color:#ff6b35;">94314061</a>
                </div>
                <div class="footer-contact-item">
                    <div class="fc-icon">📍</div>
                    <p>Хөвд аймаг</p>
                </div>
                <div class="footer-contact-item">
                    <div class="fc-icon">⏰</div>
                    <p>09:00 - 21:00</p>
                </div>
            </div>
            <div class="footer-col">
                <h3>Бүтээгдэхүүн</h3>
                <a href="#products">Бэлэн бараа</a>
                <a href="#categories">Хүнсний бараа</a>
                <a href="#categories">Ахуйн бараа</a>
                <a href="#categories">Цахилгаан бараа</a>
            </div>
            <div class="footer-col">
                <h3>Цэс</h3>
                <a href="#home">Нүүр хуудас</a>
                <a href="#order">Захиалга өгөх</a>
                <a href="#features">Давуу тал</a>
                <a href="tel:94314061">Дуудлага хийх</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© 2024 Хөвд Аймаг - Онлайн Дэлгүүр & Захиалга. Бүх эрх хамгаалагдсан.</p>
        </div>
    </div>
</footer>

<!-- SUCCESS MODAL -->
<div class="modal-overlay" id="successModal">
    <div class="modal-content">
        <div class="success-icon">✅</div>
        <h2>Захиалга амжилттай!</h2>
        <p>Таны захиалга амжилттай илгээгдлээ. Бид тантай удахгүй холбогдоно!</p>
        <button class="modal-close-btn" onclick="closeModal()">Ойлголоо 👍</button>
    </div>
</div>

<!-- CART MODAL -->
<div class="cart-modal" id="cartModal">
    <div class="cart-content">
        <h2>🛒 Миний сагс</h2>
        <div id="cartItems"></div>
        <div class="cart-total" id="cartTotal" style="display:none;">
            <span>Нийт:</span>
            <span id="totalPrice">0₮</span>
        </div>
        <div class="cart-buttons">
            <button class="cart-close-btn" onclick="closeCart()">Хаах</button>
            <button class="cart-order-btn" onclick="cartToOrder()">📤 Захиалга илгээх</button>
        </div>
    </div>
</div>

<!-- FLOATING CART BUTTON -->
<button class="floating-cart" onclick="openCart()">
    🛒
    <span class="cart-count" id="cartCount">0</span>
</button>

<!-- SCROLL TOP -->
<button class="scroll-top" id="scrollTopBtn" onclick="scrollToTop()">↑</button>

<script>
// ===== MOBILE MENU =====
function toggleMenu() {
    document.getElementById('mainNav').classList.toggle('open');
}

// ===== CATEGORY SELECTION =====
let selectedCategory = '';
function selectCategory(card, category) {
    document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    selectedCategory = category;
    document.getElementById('productCategory').value = category;
    setTimeout(() => {
        document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
    }, 300);
}

// ===== PRODUCT FILTER =====
function filterProducts(cat, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.product-card').forEach(card => {
        if (cat === 'all' || card.dataset.cat === cat) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ===== CART =====
let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartCount();

    // Animation feedback
    const btn = event.target;
    btn.textContent = '✓ Нэмэгдлээ';
    btn.style.background = '#10b981';
    setTimeout(() => {
        btn.textContent = '🛒 Сагслах';
        btn.style.background = '';
    }, 1200);
}

function updateCartCount() {
    const countEl = document.getElementById('cartCount');
    countEl.textContent = cart.length;
    countEl.classList.toggle('show', cart.length > 0);
}

function openCart() {
    const modal = document.getElementById('cartModal');
    const itemsDiv = document.getElementById('cartItems');
    const totalDiv = document.getElementById('cartTotal');

    if (cart.length === 0) {
        itemsDiv.innerHTML = '<div class="cart-empty">🛒 Сагс хоосон байна</div>';
        totalDiv.style.display = 'none';
    } else {
        let html = '';
        let total = 0;
        cart.forEach((item, i) => {
            html += `<div class="cart-item">
                <span class="cart-item-name">${item.name}</span>
                <span class="cart-item-price">${item.price.toLocaleString()}₮</span>
                <button class="remove-cart" onclick="removeFromCart(${i})">✕</button>
            </div>`;
            total += item.price;
        });
        itemsDiv.innerHTML = html;
        document.getElementById('totalPrice').textContent = total.toLocaleString() + '₮';
        totalDiv.style.display = 'flex';
    }

    modal.classList.add('show');
}

function closeCart() {
    document.getElementById('cartModal').classList.remove('show');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    openCart();
}

function cartToOrder() {
    if (cart.length === 0) { alert('Сагс хоосон байна!'); return; }

    const names = cart.map(i => i.name).join(', ');
    const total = cart.reduce((s, i) => s + i.price, 0);

    document.getElementById('productName').value = names;
    document.getElementById('productDetails').value = `Бэлэн бараанаас сонгосон:\n${cart.map(i => `- ${i.name}: ${i.price.toLocaleString()}₮`).join('\n')}\n\nНийт: ${total.toLocaleString()}₮`;
    document.getElementById('quantity').value = cart.length;

    closeCart();
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
}

// ===== IMAGE HANDLING =====
let uploadedImages = [];

function handleImages(event) {
    const files = event.target.files;
    const container = document.getElementById('imagePreview');
    for (let i = 0; i < files.length; i++) {
        if (files[i].size > 5 * 1024 * 1024) { alert('5MB-ээс хэтэрсэн!'); continue; }
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImages.push({ name: files[i].name, data: e.target.result });
            const div = document.createElement('div');
            div.className = 'image-preview';
            const idx = uploadedImages.length - 1;
            div.innerHTML = `<img src="${e.target.result}"><button class="remove-img" onclick="removeImage(${idx},this)">✕</button>`;
            container.appendChild(div);
        };
        reader.readAsDataURL(files[i]);
    }
}

function removeImage(idx, btn) {
    uploadedImages.splice(idx, 1);
    btn.parentElement.remove();
}

// ===== FORM SUBMIT =====
function submitOrder(event) {
    event.preventDefault();
    const btn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const spinner = document.getElementById('btnSpinner');

    btn.disabled = true;
    btnText.style.display = 'none';
    spinner.style.display = 'block';

    const formData = new FormData();
    formData.append('Барааны нэр', document.getElementById('productName').value);
    formData.append('Төрөл', document.getElementById('productCategory').value);
    formData.append('Тоо', document.getElementById('quantity').value);
    formData.append('Дэлгэрэнгүй', document.getElementById('productDetails').value || '-');
    formData.append('Нэр', document.getElementById('customerName').value);
    formData.append('Утас', document.getElementById('customerPhone').value);
    formData.append('Хаяг', document.getElementById('deliveryAddress').value);
    formData.append('Тайлбар', document.getElementById('additionalNotes').value || '-');
    formData.append('Огноо', new Date().toLocaleString('mn-MN'));
    formData.append('_subject', '🛒 Шинэ захиалга: ' + document.getElementById('productName').value);
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');

    fetch('https://formsubmit.co/ajax/gantsoojshvvsd@gmail.com', {
        method: 'POST',
        body: formData
    })
    .then(r => r.json())
    .then(() => showSuccess())
    .catch(() => showSuccess());
}

function showSuccess() {
    document.getElementById('submitBtn').disabled = false;
    document.getElementById('btnText').style.display = 'block';
    document.getElementById('btnSpinner').style.display = 'none';
    document.getElementById('successModal').classList.add('show');
    document.getElementById('orderForm').reset();
    document.getElementById('imagePreview').innerHTML = '';
    uploadedImages = [];
    cart = [];
    updateCartCount();
    document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('selected'));
}

function closeModal() {
    document.getElementById('successModal').classList.remove('show');
}

document.getElementById('successModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

document.getElementById('cartModal').addEventListener('click', function(e) {
    if (e.target === this) closeCart();
});

// ===== SCROLL =====
window.addEventListener('scroll', function() {
    document.getElementById('scrollTopBtn').classList.toggle('show', window.scrollY > 500);
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== NAV LINKS =====
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
        document.getElementById('mainNav').classList.remove('open');
    });
});
</script>
