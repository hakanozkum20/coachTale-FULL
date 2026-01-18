# n

Sen kıdemli bir Full Stack Architect, SaaS Product Manager, Mobile Engineer,
Security Engineer ve AI Systems Designer’sın.

Gerçek hayatta ücretli, ölçeklenebilir, güvenli ve profesyonel bir ürün
geliştirilecek şekilde düşün.

Bu bir MVP değil.
Yatırım alabilecek, App Store / Play Store’a çıkabilecek,
profesyonel bir AI destekli eğitim koçluğu platformu tasarlıyorsun.

---

## 1️⃣ ÜRÜN TANIMI

Türkiye müfredatı ve sınav sistemine (TYT, AYT, YDS) odaklı,
yapay zeka destekli, ücretli bir eğitim koç asistanı uygulaması.

Kullanıcı tipleri:
- Öğrenci
- Veli
- Sistem (Admin / AI / Subscription)

Kimlik doğrulama:
- Google OAuth
- İlk girişte Free plan
- Sonradan ücretli planlara geçiş

Ödeme:
- Öğrenci hesabından
- Veli hesabından
- Aynı öğrenci için veli ödeme yapabilir

---

## 2️⃣ ABONELİK PLANLARI

### Free Plan
- Haftalık 10 AI chat soru-cevap
- Haftalık 5 fotoğraf ile soru çözümü
- Haftalık 1 ders çalışma programı
- Sınırlı Pomodoro kullanımı
- Leaderboard & badge (temel)

### Standard Plan
- Haftalık 25 AI chat
- Haftalık 15 fotoğraf çözümü
- Haftalık 3 revizyonlu çalışma programı
- Gelişmiş Pomodoro ayarları
- Detaylı analizler
- Tüm badge’ler

### Premium Plan
- Tüm AI araçları sınırsız
- Pomodoro tamamen özelleştirilebilir
- Yoğunlukta otomatik düşük maliyetli AI model geçişi
- En yüksek öncelik
- Gelişmiş koçluk & istatistikler

---

## 3️⃣ ANA MODÜLLER

### 🔹 A) AI Chat (Eğitim Odaklı)
- Eğitim dışı sorular engellenmeli
- Intent classification & moderation
- Ders / konu / sınav bağlamı zorunlu
- Prompt injection & abuse önlemleri
- Plan bazlı limit enforcement

---

### 🔹 B) Fotoğraf ile Soru Çözümü
- Kamera veya upload
- OCR + Vision model
- Adım adım çözüm
- Öğrenci seviyesine göre anlatım
- Güvenli storage + metadata

---

### 🔹 C) Deneme – Test Analizi & Çalışma Programı
- TYT / AYT / YDS
- Ders → Konu → Alt konu
- Doğru / Yanlış / Boş
- AI destekli:
  - Eksik konu analizi
  - Haftalık / aylık çalışma planı
  - Revizyon önerileri

---

### 🔹 D) POMODORO & ODAK MODÜLÜ (YENİ)

Pomodoro sistemi SADECE bir sayaç değildir.
Bir **odak + alışkanlık + analiz aracı** olarak tasarlanmalıdır.

#### Pomodoro Özellikleri:
- Çalışma süresi (örn: 25 dk)
- Kısa mola süresi
- Uzun mola süresi
- Günlük pomodoro hedefi
- Ders / konu bazlı pomodoro
- Manuel veya AI önerili ayarlar

#### AI Entegrasyonu:
- Öğrencinin performansına göre:
  - Pomodoro süresi öner
  - Mola optimizasyonu
- Zor konularda kısa odak
- Kolay konularda uzun blok

---

## 4️⃣ MOBİL BİLDİRİMLER (EXPO ZORUNLU)

Pomodoro ve çalışma programları için
**Push Notification sistemi zorunlu.**

### Expo Notification Gereksinimleri:
- Kullanıcıdan açık izin alınmalı
- Bildirim izin durumu backend’de saklanmalı
- Şu bildirimler olmalı:
  - Pomodoro başladı
  - Pomodoro bitti
  - Mola bitti
  - Çalışma zamanı hatırlatması
  - Günlük hedef uyarıları

### Teknik Detaylar:
- Expo Push Token backend’e kaydedilmeli
- Kullanıcı bildirimleri kapatabilir
- Bildirimler plan bazlı özelleştirilebilir
- iOS & Android uyumlu

---

## 5️⃣ VELİ TAKİP SİSTEMİ

Veli şunları görür:
- Öğrencinin:
  - Pomodoro geçmişi
  - Günlük odak süresi
  - Test & deneme başarıları
- Giriş saatleri
- AI kullanım durumu

Veli:
- Plan değiştirebilir
- Ödeme yapabilir
- Bildirim ayarlarını kontrol edebilir

---

## 6️⃣ GAMIFICATION

- Pomodoro bazlı badge’ler
- Günlük / haftalık streak’ler
- Aylık leaderboard
- Hile ve abuse önleme

---

## 7️⃣ TEKNİK MİMARİ

### Backend
- Node.js (TypeScript)
- Clean Architecture
- PostgreSQL
- Prisma ORM
- REST API (OpenAPI)

ZORUNLU:
- Google OAuth
- JWT + Refresh Token
- Role-based access (Student / Parent / Admin)
- Plan bazlı middleware
- Rate limiting
- AI model router
- Pomodoro & notification scheduler
- Audit logs

---

### Database (Ek Tablolar)
- PomodoroSettings
- PomodoroSessions
- DailyFocusStats
- NotificationSettings
- PushTokens

Her tablo için:
- Alanlar
- İlişkiler
- Index önerileri

---

### Frontend (Web)
- React + TypeScript
- TailwindCSS
- Öğrenci paneli
- Veli paneli
- Pomodoro dashboard
- Analitik grafikler

---

### Mobile App
- Expo (React Native)
- Push notification entegrasyonu
- Offline destek (pomodoro cache)
- Background-safe timer yönetimi

---

## 8️⃣ GÜVENLİK

Detaylandır:
- Auth zorunluluğu
- Role-based endpoint koruması
- Plan & quota enforcement
- Prompt injection önlemleri
- KVKK uyumu
- Image & notification güvenliği

---

## 9️⃣ ÇIKTI BEKLENTİLERİ

Aşağıdakileri EKSİKSİZ üret:

1. Sistem mimarisi
2. Backend klasör yapısı
3. Tüm API endpoint’leri
4. Database şeması
5. Pomodoro & notification akışı
6. Frontend sayfa yapısı
7. Mobile ekranlar
8. Ödeme & plan akışı
9. Roadmap (faz faz)
10. Riskler & ölçekleme

Gerçek bir yazılım ekibi dokümantasyonu gibi yaz.
Varsayımları belirt.
Yarım bırakma.