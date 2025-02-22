<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RUAYY Clone</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1a1a1a;
            color: #ffd700;
            margin: 0;
            padding: 0;
        }
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(90deg, #000, #222);
            padding: 15px 20px;
            box-shadow: 0 4px 8px rgba(255, 215, 0, 0.2);
        }
        .logo {
            font-size: 28px;
            font-weight: bold;
            color: #ffd700;
        }
        nav ul {
            list-style: none;
            display: flex;
            gap: 20px;
            padding: 0;
        }
        nav ul li {
            display: inline;
        }
        nav ul li a {
            text-decoration: none;
            color: #ffd700;
            font-weight: bold;
            transition: color 0.3s;
        }
        nav ul li a:hover {
            color: #fff;
        }
        .vip-btn {
            background: #ffd700;
            color: #121212;
            padding: 10px 15px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            box-shadow: 0 4px 8px rgba(255, 215, 0, 0.3);
        }
        .banner {
            text-align: center;
            padding: 60px 20px;
            background: url('https://เว็บรวย.com/background.jpg') no-repeat center center/cover;
        }
        .banner h1 {
            font-size: 26px;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        }
        .banner img {
            width: 120px;
            height: auto;
            margin-bottom: 20px;
        }
        .banner .message-box {
            font-size: 18px;
            max-width: 600px;
            margin: 0 auto 20px auto;
            line-height: 1.6;
            background: rgba(0, 0, 0, 0.6);
            padding: 15px;
            border-radius: 10px;
        }
        .btn {
            background-color: #ffd700;
            color: #121212;
            padding: 12px 25px;
            text-decoration: none;
            font-weight: bold;
            border-radius: 8px;
            animation: blink 1s infinite alternate;
            box-shadow: 0 4px 8px rgba(255, 215, 0, 0.3);
        }
        @keyframes blink {
            0% { color: red; }
            100% { color: black; }
        }
        .features {
            display: flex;
            justify-content: center;
            gap: 20px;
            padding: 50px 20px;
        }
        .feature-box {
            background-color: rgba(0, 0, 0, 0.8);
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            font-size: 20px;
            width: 160px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 8px rgba(255, 215, 0, 0.3);
        }
    </style>
</head>
<body>
    <header>
        <div class="logo">RUAYY</div>
        <nav>
            <ul>
                <li><a href="https://lin.ee/JhBG2ri">หน้าแรก</a></li>
                <li><a href="https://lin.ee/JhBG2ri">ผลหวย</a></li>
                <li><a href="https://lin.ee/JhBG2ri">วิธีเล่น</a></li>
                <li><a href="https://lin.ee/JhBG2ri">ติดต่อเรา</a></li>
            </ul>
        </nav>
        <a href="https://lin.ee/JhBG2ri" class="vip-btn">เข้ากลุ่ม VIP</a>
    </header>
    
    <section class="banner">
        <img src="https://img2.pic.in.th/pic/ruay-icon-300.png" alt="RUAYY Logo">
        <h1>เรียนลูกค้าทุกท่าน</h1>
        <div class="message-box">
            <p>เนื่องจากเว็บ RUAYY ได้มีการยกเลิกการให้บริการ เนื่องจากปัญหาภายใน</p>
            <p>ทางเว็บ RUAYY ขอเรียนแจ้งสมาชิกให้สมัครเว็บในเครือของเรา</p>
            <p>เพื่อให้การใช้บริการอย่างต่อเนื่อง ต้องขออภัยมา ณ ที่นี้ด้วย</p>
        </div>
        <a href="https://lin.ee/JhBG2ri" class="btn">สมัครเว็บในเครือ RUNCHOK24</a>
    </section>
    
    <section class="features">
        <div class="feature-box"><a href="https://lin.ee/JhBG2ri" style="color: #ffd700; text-decoration: none;">หวยลาว</a></div>
        <div class="feature-box"><a href="https://lin.ee/JhBG2ri" style="color: #ffd700; text-decoration: none;">หวยฮานอย</a></div>
        <div class="feature-box"><a href="https://lin.ee/JhBG2ri" style="color: #ffd700; text-decoration: none;">หวยหุ้น</a></div>
    </section>
</body>
</html>