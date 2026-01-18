# CoachNE Mobile App - Development Roadmap

## 📋 Proje Özeti

CoachNE, öğrenciler için AI destekli öğrenme platformudur. Bu mobil uygulama, mevcut backend ve web frontend'e entegre olacak şekilde **Expo + React Native + NativeWind + GluestackUI** ile geliştirilecektir.

---

## 🎯 Platform Amacı

**CoachNE**, öğrencilerin verimli çalışmasını sağlamak için:

- 🍅 **Pomodoro Timer** - Odaklanma yönetimi
- 🤖 **AI Chat** - Soru-Cevap asistanı
- 📸 **Fotoğraf Çözümü** - OCR ile soru çözme
- 📊 **Sınav Takibi** - Performans analizi
- 📚 **Çalışma Planları** - AI destekli planlama
- 🏆 **Rozet Sistemi** - Gamification
- 👨‍👩‍👧‍👦 **Veli Takibi** - Ebeveyn gözetimi

---

## 🛠️ Tech Stack

| Kategori | Teknoloji |
|----------|-----------|
| **Framework** | Expo 54+ |
| **Language** | TypeScript |
| **Navigation** | Expo Router |
| **Styling** | NativeWind 4.x (Tailwind CSS) |
| **UI Library** | GluestackUI |
| **State** | Zustand |
| **HTTP** | Axios |
| **Auth** | Expo Auth Session (Google OAuth) |
| **Storage** | Expo SecureStore |
| **Notifications** | Expo Notifications |
| **Camera/Media** | Expo Image Picker / Expo Camera |

---

## 📊 Backend API Endpoints

### Authentication (`/api/auth`)
```
POST   /api/auth/login          → Google OAuth başlat
GET    /api/auth/callback       → OAuth callback
POST   /api/auth/google         → Google token exchange
GET    /api/auth/me             → Kullanıcı bilgisi
POST   /api/auth/refresh        → Token yenile
POST   /api/auth/logout         → Çıkış
```

### Pomodoro (`/api/pomodoro`)
```
GET    /api/pomodoro/settings           → Ayarları getir
POST   /api/pomodoro/settings           → Ayarları güncelle
POST   /api/pomodoro/session/start      → Oturum başlat
POST   /api/pomodoro/session/:id/complete → Oturumu tamamla
GET    /api/pomodoro/session/active     → Aktif oturum
GET    /api/pomodoro/stats/daily        → Günlük istatistik
```

### AI Chat (`/api/ai`)
```
POST   /api/ai/chat                     → Mesaj gönder
GET    /api/ai/sessions                 → Oturum listesi
GET    /api/ai/sessions/:id/history     → Mesaj geçmişi
```

### Solutions (`/api/solutions`)
```
POST   /api/solutions/solve             → Fotoğraf çöz
GET    /api/solutions/history           → Çözüm geçmişi
```

### Exams (`/api/exams`)
```
POST   /api/exams/results               → Sonuç gönder
GET    /api/exams/results               → Sonuçları getir
GET    /api/exams/analysis              → Performans analizi
```

### Study Plans (`/api/study-plans`)
```
POST   /api/study-plans/generate        → Plan oluştur
GET    /api/study-plans                 → Planları getir
```

### Notifications (`/api/notifications`)
```
POST   /api/notifications/register      → Token kaydet
POST   /api/notifications/unregister    → Token sil
```

### Badges (`/api/badges`)
```
GET    /api/badges                      → Tüm rozetler
GET    /api/badges/me                   → Kazanılan rozetler
```

---

## 🏗️ Proje Yapısı

```
frontend-mobile/
├── app/                          # Expo Router (file-based routing)
│   ├── _layout.tsx               # Root layout
│   ├── index.tsx                 # Login screen
│   ├── (auth)/                   # Protected routes group
│   │   ├── _layout.tsx           # Auth layout (auth check)
│   │   ├── dashboard.tsx         # Ana dashboard
│   │   ├── pomodoro.tsx          # Timer ekranı
│   │   ├── chat.tsx              # AI chat
│   │   ├── solve.tsx             # Fotoğraf çözüm
│   │   ├── exams.tsx             # Sınav takibi
│   │   ├── study-plans.tsx       # Çalışma planları
│   │   ├── badges.tsx            # Rozetler
│   │   └── settings.tsx          # Ayarlar
│   └── +html.tsx                 # HTML head config
│
├── src/
│   ├── application/              # Business logic
│   │   ├── usecases/            # Use case hooks
│   │   └── services/            # Business services
│   │
│   ├── core/                    # Core entities
│   │   ├── entities/            # Domain entities
│   │   └── interfaces/          # TypeScript interfaces
│   │
│   ├── config/                  # Configuration
│   │   └── env.ts               # Environment variables
│   │
│   ├── infrastructure/          # External integrations
│   │   ├── api/
│   │   │   ├── apiClient.ts    # Axios instance
│   │   │   ├── authApi.ts      # Auth endpoints
│   │   │   ├── pomodoroApi.ts  # Pomodoro endpoints
│   │   │   ├── aiApi.ts        # AI endpoints
│   │   │   └── ...
│   │   └── storage/
│   │       └── secureStorage.ts # Expo SecureStore wrapper
│   │
│   ├── presentation/            # UI layer
│   │   ├── components/          # Reusable components
│   │   │   ├── common/         # Button, Input, etc.
│   │   │   ├── pomodoro/       # Timer components
│   │   │   ├── chat/           # Chat components
│   │   │   └── ...
│   │   └── hooks/              # Custom hooks
│   │
│   ├── stores/                  # State management
│   │   ├── authStore.ts        # Auth state
│   │   ├── pomodoroStore.ts    # Timer state
│   │   └── ...
│   │
│   └── types/                   # TypeScript types
│       └── index.ts
│
├── assets/                      # Images, fonts, etc.
├── .env                         # Environment variables
├── app.json                     # Expo config
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── babel.config.js
```

---

## 📱 Ekran Listesi

### 1. Authentication
- **Login** (`/`) - Google OAuth ile giriş
- **OAuth Callback** - Backend token exchange

### 2. Main Navigation (Tab Navigation)
| Tab | Icon | Screen |
|-----|------|--------|
| 🏠 | Home | Dashboard |
| 🍅 | Timer | Pomodoro |
| 💬 | Chat | AI Chat |
| 📸 | Camera | Photo Solve |
| 👤 | Profile | Settings/Profile |

### 3. Screens Detail

#### Dashboard (`/(auth)/dashboard`)
```
┌─────────────────────────┐
│  👋 Merhaba, [İsim]     │
│                         │
│  📊 Bugün               │
│  ┌───────────────────┐  │
│  │ 2sa 15dk focus   │  │
│  │ 4 session        │  │
│  └───────────────────┘  │
│                         │
│  🎯 Hızlı Erişim        │
│  ┌───┐ ┌───┐ ┌───┐     │
│  │🍅│ │💬│ │📸│        │
│  └───┘ └───┘ └───┘     │
└─────────────────────────┘
```

#### Pomodoro Timer (`/(auth)/pomodoro`)
```
┌─────────────────────────┐
│       ◯ 23:45          │
│      Focus Time         │
│                         │
│    [⏸️ PAUSE] [⏹️ STOP] │
│                         │
│  Session 3/4            │
│  ████░░░░░░░░░         │
└─────────────────────────┘
```

#### AI Chat (`/(auth)/chat`)
```
┌─────────────────────────┐
│  💬 AI Asistan         │
│  ───────────────────    │
│  👤 Bu soruyu çöz...    │
│  🤖 Tabii, şöyle...    │
│  ───────────────────    │
│                         │
│  [Mesaj yaz...]  [📎]  │
└─────────────────────────┘
```

#### Photo Solve (`/(auth)/solve`)
```
┌─────────────────────────┐
│                         │
│     📸 Soruyu Çek       │
│    veya galeriden seç   │
│                         │
│     [    Kamera    ]    │
│     [  Galeri seç ]     │
│                         │
└─────────────────────────┘
```

#### Exams (`/(auth)/exams`)
```
┌─────────────────────────┐
│  📊 Sınav Sonuçları    │
│  ───────────────────    │
│  Matematik     85%      │
│  Fizik        78%      │
│  Kimya        92%      │
│                         │
│  [+ Sonuç Ekle]        │
└─────────────────────────┘
```

#### Study Plans (`/(auth)/study-plans`)
```
┌─────────────────────────┐
│  📚 Çalışma Planım     │
│  ───────────────────    │
│  🔥 Haftalık Plan       │
│  • Matematik - 2sa     │
│  • Fizik - 1.5sa       │
│                         │
│  [AI Plan Oluştur]     │
└─────────────────────────┘
```

#### Badges (`/(auth)/badges`)
```
┌─────────────────────────┐
│  🏆 Rozetlerim         │
│  ───────────────────    │
│  🥇 🥈 🥉              │
│  🎯 ⭐ 🔥              │
│  ··· ···               │
└─────────────────────────┘
```

---

## 🗺️ Geliştirme Yol Haritası

### Phase 1: Foundation (Week 1-2)
- [ ] Proje kurulumu (Expo, NativeWind, GluestackUI)
- [ ] TypeScript yapılandırması
- [ ] Environment config
- [ ] API Client (Axios)
- [ ] Auth Store (Zustand)
- [ ] SecureStore wrapper
- [ ] Routing yapısı (Expo Router)

### Phase 2: Authentication (Week 2)
- [ ] Google OAuth entegrasyonu
- [ ] Login ekranı
- [ ] Token management
- [ ] Auth context/provider
- [ ] Protected routes

### Phase 3: Core Features (Week 3-4)
- [ ] Dashboard ekranı
- [ ] Bottom navigation
- [ ] Pomodoro Timer (core)
- [ ] Settings ekranı
- [ ] Profile management

### Phase 4: AI Features (Week 5-6)
- [ ] AI Chat ekranı
- [ ] Chat history
- [ ] Message components
- [ ] Photo capture
- [ ] OCR solution screen

### Phase 5: Analytics (Week 7)
- [ ] Exams tracking
- [ ] Results analysis
- [ ] Statistics charts
- [ ] Performance history

### Phase 6: Advanced Features (Week 8-9)
- [ ] Study Plans
- [ ] AI plan generation
- [ ] Badge system
- [ ] Achievements

### Phase 7: Polish (Week 10)
- [ ] Push notifications
- [ ] Offline support
- [ ] Error handling
- [ ] Loading states
- [ ] Testing
- [ ] Deployment

---

## 🎨 UI/UX Prensipleri

### NativeWind (Tailwind) Renk Paleti
```javascript
colors: {
  primary: '#6366f1',     // Indigo 500
  secondary: '#8b5cf6',   // Violet 500
  success: '#10b981',     // Emerald 500
  warning: '#f59e0b',     // Amber 500
  danger: '#ef4444',      // Red 500
  background: '#f8fafc',  // Slate 50
  surface: '#ffffff',     // White
  text: {
    primary: '#1e293b',   // Slate 800
    secondary: '#64748b', // Slate 500
  }
}
```

### GluestackUI Komponentleri
```typescript
import {
  Button,
  Input,
  Card,
  Avatar,
  Badge,
  Toast,
  AlertDialog,
  Progress,
  // ... daha fazla
} from '@gluestack-ui/themed';
```

### Design Patterns
- **Card-based layouts** - İçerik gruplama
- **Circular progress** - Timer ve istatistikler
- **Bottom sheets** - Detay görünümleri
- **Pull to refresh** - List yenileme
- **Skeleton loading** - Yükleme durumları

---

## 🔐 Güvenlik

### Token Management
```typescript
// Access Token: 30 gün
// Refresh Token: 30 gün
// Storage: Expo SecureStore
```

### Environment Variables
```env
EXPO_PUBLIC_API_URL=http://localhost:3000
EXPO_PUBLIC_GOOGLE_CLIENT_ID=xxx
```

---

## 📦 Kurulum Adımları

```bash
# 1. Expo kurulumu
npx create-expo-app@latest frontend-mobile

# 2. Bağımlılıklar
npm install expo-router expo-auth-session expo-secure-store
npm install nativewind tailwindcss
npm install @gluestack-ui/themed @gluestack-ui/config
npm install zustand axios
npm install expo-image-picker expo-camera

# 3. NativeWind kurulumu
# tailwind.config.js ve babel.config.js yapılandırma

# 4. GluestackUI kurulumu
# npx gluestack-ui-cli init

# 5. Başlatma
npx expo start
```

---

## 🚀 Deployment

| Platform | Komut |
|----------|-------|
| **Development Build** | `npx expo run:android` / `npx expo run:ios` |
| **EAS Build** | `eas build --platform all` |
| **TestFlight** | EAS Build → iOS |
| **Play Store** | EAS Build → Android |

---

## 📝 Notlar

### Web'den Alınacak Componentler
- Card layouts
- Form components
- Data display patterns
- Color scheme
- Typography scale

### Mobile-Specific Features
- Bottom tab navigation
- Swipe gestures (chat)
- Camera integration
- Push notifications
- Haptic feedback
- Offline timer mode

---

## 🔗 Faydalı Linkler

- **Expo Docs**: https://docs.expo.dev/
- **NativeWind**: https://www.nativewind.dev/
- **GluestackUI**: https://gluestack.io/
- **Expo Router**: https://docs.expo.dev/router/introduction/

---

*Son güncelleme: 2026-01-17*
