# AI Eğitim Koçu - Teknik Tasarım Dokümanı

## 1. Sistem Mimarisi

Sistem, ölçeklenebilir ve modüler bir yapıda, Clean Architecture prensiplerine sadık kalınarak tasarlanmıştır.

### 1.1 Teknoloji Yığını
- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Auth**: JWT (Access + Refresh Token), Google OAuth
- **Frontend (Web)**: React, TypeScript, TailwindCSS
- **Mobile**: React Native (Expo)
- **AI Entegrasyonu**: OpenAI API / Anthropic / Local Models (Adapter Pattern ile)
- **Storage**: AWS S3 veya MinIO (Fotoğraf çözümleri için)

### 1.2 Backend Klasör Yapısı (Clean Architecture)
```
backend/
├── src/
│   ├── config/          # Çevresel değişkenler ve konfigürasyonlar
│   ├── controllers/     # İstekleri karşılayan ve yanıt dönen katman
│   ├── services/        # İş mantığının (Business Logic) bulunduğu katman
│   ├── repositories/    # Veritabanı erişim katmanı (Prisma Client sarmalayıcıları)
│   ├── middlewares/     # Auth, Validasyon, Rate Limit, Error Handling
│   ├── routes/          # API rotaları
│   ├── utils/           # Yardımcı fonksiyonlar (AI entegrasyonu, Helperlar)
│   ├── types/           # Global TypeScript tip tanımları
│   └── app.ts           # Express uygulaması başlatma noktası
```

---

## 2. Veritabanı Şeması (Database Schema)

### Kullanıcılar ve Roller
- **User**: Ana kullanıcı tablosu (Öğrenci, Veli, Admin).
- **Role**: Roller (STUDENT, PARENT, ADMIN).
- **Subscription**: Abonelik bilgileri (Plan tipi, Bitiş tarihi).

### Core Modüller
- **ChatSession**: AI sohbet oturumları.
- **ChatMessage**: Sohbet mesajları.
- **QuestionSolution**: Fotoğraflı soru çözümleri.
- **ExamResult**: Deneme/Test sonuçları (TYT, AYT, YDS).
- **StudyPlan**: AI tarafından oluşturulan çalışma programları.

### Pomodoro & Gamification
- **PomodoroSession**: Tamamlanan odaklanma süreleri.
- **Badge**: Kazanılan rozetler.
- **UserBadge**: Kullanıcıların kazandığı rozetler.
- **Leaderboard**: Aylık/Haftalık sıralama cache tablosu.

---

## 3. API Endpoint Yapısı (Özet)

### Auth
- `POST /api/auth/google` - Google ile giriş/kayıt
- `POST /api/auth/refresh` - Token yenileme
- `POST /api/auth/logout` - Çıkış

### User & Parent
- `GET /api/users/me` - Profil bilgileri
- `POST /api/users/parent-link` - Veli-Öğrenci eşleştirme
- `GET /api/parent/students` - Velisi olunan öğrencilerin takibi

### AI Chat
- `POST /api/chat/start` - Yeni sohbet başlat
- `POST /api/chat/message` - Mesaj gönder (Limit kontrolü dahil)
- `GET /api/chat/history` - Geçmiş sohbetler

### Question Solver
- `POST /api/solver/upload` - Soru fotoğrafı yükle ve çözüm iste

### Exams & Plans
- `POST /api/exams/result` - Deneme sonucu gir
- `GET /api/exams/analytics` - Gelişim analizi
- `POST /api/plans/generate` - AI destekli çalışma programı oluştur

### Pomodoro
- `POST /api/pomodoro/start` - Oturum başlat
- `POST /api/pomodoro/stop` - Oturum bitir (Kaydet)
- `GET /api/pomodoro/stats` - Odaklanma istatistikleri

---

## 4. Güvenlik ve Validasyon
- **Rate Limiting**: Plan bazlı istek sınırlaması (Redis veya Memory tabanlı).
- **Zod**: Tüm gelen verilerin şema kontrolü.
- **Helmet**: HTTP başlık güvenliği.
- **CORS**: Sadece izin verilen domainler.

## 5. Roadmap
- **Faz 1**: Backend kurulumu, DB tasarımı, Auth (Google), Temel CRUD.
- **Faz 2**: AI Chat Entegrasyonu ve Fotoğraf Çözümleme Servisi.
- **Faz 3**: Deneme Analizi ve Çalışma Planı oluşturucu.
- **Faz 4**: Pomodoro, Gamification ve Veli Sistemi.
- **Faz 5**: Frontend (Web) entegrasyonu.
- **Faz 6**: Mobil (Expo) uygulama ve Bildirimler.
