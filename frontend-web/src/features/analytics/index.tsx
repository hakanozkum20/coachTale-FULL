import { useState } from 'react'
import { useAuthStore } from '@/stores/auth-store'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { BarChart3, TrendingUp, Target, Plus } from 'lucide-react'

type ExamType = 'TYT' | 'AYT' | 'YDS'
type ExamCategory = 'DENEME' | 'TEST'
type SubjectType = 'MATEMATIK' | 'FIZIK' | 'KIMYA' | 'BIYOLOJI' | 'TURKCE' | 'TARIH' | 'COGRAFYA' | 'FELSEFE' | 'DIN' | 'INGILIZCE'

interface ExamEntry {
  id: string
  name: string
  date: string
  type: ExamType
  category: ExamCategory
  subject?: SubjectType
  topic?: string
  duration?: number
  totalQuestions?: number
  correct: number
  incorrect: number
  blank: number
  net: number
}

// Deneme sınavları bilgileri
const EXAM_INFO = {
  TYT: {
    name: 'Temel Yeterlilik Testi',
    totalQuestions: 90,
    duration: 120, // dakika
    description: 'Lise müfredatından 9. sınıf geometri dışında tüm konuları kapsar'
  },
  AYT: {
    name: 'Alan Yeterlilik Testi',
    totalQuestions: 80,
    duration: 180, // dakika
    description: 'Alan derslerinden (Matematik, Fen, Sosyal) sorular içerir'
  },
  YDS: {
    name: 'Yabancı Dil Sınavı',
    totalQuestions: 80,
    duration: 180, // dakika
    description: 'İngilizce dil bilgisi ve okuma anlama'
  }
}

export function Analytics() {
  const { user } = useAuthStore()
  const [open, setOpen] = useState(false)
  const [exams, setExams] = useState<ExamEntry[]>([
    {
      id: '1',
      name: 'TYT Deneme #12',
      date: '2024-03-15',
      type: 'TYT',
      category: 'DENEME',
      totalQuestions: 90,
      duration: 120,
      correct: 55,
      incorrect: 25,
      blank: 10,
      net: 48.75,
    },
    {
      id: '2',
      name: 'Matematik Türev Testi',
      date: '2024-03-14',
      type: 'AYT',
      category: 'TEST',
      subject: 'MATEMATIK',
      topic: 'Türev',
      totalQuestions: 20,
      duration: 40,
      correct: 15,
      incorrect: 4,
      blank: 1,
      net: 14,
    },
  ])

  const [formData, setFormData] = useState({
    name: '',
    date: new Date().toISOString().split('T')[0],
    type: '' as ExamType | '',
    category: '' as ExamCategory | '',
    subject: '' as SubjectType | '',
    topic: '',
    duration: '',
    totalQuestions: '',
    correct: '',
    incorrect: '',
    blank: '',
  })

  const calculateNet = (correct: number, incorrect: number) => {
    return correct - (incorrect * 0.25)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.type || !formData.category) return

    const correct = parseInt(formData.correct) || 0
    const incorrect = parseInt(formData.incorrect) || 0
    const blank = parseInt(formData.blank) || 0
    const net = calculateNet(correct, incorrect)

    let name = formData.name
    if (!name) {
      if (formData.category === 'DENEME') {
        name = `${formData.type} Deneme`
      } else {
        name = `${formData.subject || formData.type} ${formData.topic || 'Test'}`
      }
    }

    const newExam: ExamEntry = {
      id: Date.now().toString(),
      name,
      date: formData.date,
      type: formData.type,
      category: formData.category,
      subject: formData.subject || undefined,
      topic: formData.topic || undefined,
      duration: formData.duration ? parseInt(formData.duration) : undefined,
      totalQuestions: formData.totalQuestions ? parseInt(formData.totalQuestions) : undefined,
      correct,
      incorrect,
      blank,
      net,
    }

    setExams([newExam, ...exams])
    setOpen(false)
    resetForm()
  }

  const resetForm = () => {
    setFormData({
      name: '',
      date: new Date().toISOString().split('T')[0],
      type: '',
      category: '',
      subject: '',
      topic: '',
      duration: '',
      totalQuestions: '',
      correct: '',
      incorrect: '',
      blank: '',
    })
  }

  const getTypeStats = (type: ExamType) => {
    const typeExams = exams.filter((e) => e.type === type)
    const avgNet =
      typeExams.length > 0
        ? typeExams.reduce((sum, e) => sum + e.net, 0) / typeExams.length
        : 0

    return { count: typeExams.length, avgNet: avgNet.toFixed(2) }
  }

  const tytStats = getTypeStats('TYT')
  const aytStats = getTypeStats('AYT')
  const ydsStats = getTypeStats('YDS')

  return (
    <div className='flex flex-1 flex-col gap-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>Deneme Analizi</h1>
          <p className='text-muted-foreground'>
            Deneme ve test sonuçlarınızı takip edin
          </p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className='mr-2 h-4 w-4' />
              Yeni Ekle
            </Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[500px] max-h-[90vh] overflow-y-auto'>
            <DialogHeader>
              <DialogTitle>Yeni Deneme/Test Ekle</DialogTitle>
              <DialogDescription>
                {formData.category === 'DENEME'
                  ? 'Tüm müfredatı kapsayan sınav sonuçları'
                  : 'Konu testi sonuçları'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className='space-y-4'>
              {/* Sınav Türü ve Kategori */}
              <div className='grid grid-cols-2 gap-4'>
                <div className='grid gap-2'>
                  <Label htmlFor='type'>Sınav Türü *</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value) => {
                      setFormData({
                        ...formData,
                        type: value as ExamType,
                        category: '',
                        subject: '',
                      })
                      // Deneme için otomatik doldur
                      if (value && formData.category === 'DENEME') {
                        const examInfo = EXAM_INFO[value as ExamType]
                        if (examInfo) {
                          setFormData(prev => ({
                            ...prev,
                            type: value as ExamType,
                            totalQuestions: examInfo.totalQuestions.toString(),
                            duration: examInfo.duration.toString(),
                          }))
                        }
                      }
                    }}
                  >
                    <SelectTrigger id='type'>
                      <SelectValue placeholder='Seçin' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='TYT'>
                        <div className='flex flex-col items-start'>
                          <span>TYT</span>
                          <span className='text-xs text-muted-foreground'>
                            90 soru, 120 dakika
                          </span>
                        </div>
                      </SelectItem>
                      <SelectItem value='AYT'>
                        <div className='flex flex-col items-start'>
                          <span>AYT</span>
                          <span className='text-xs text-muted-foreground'>
                            80 soru, 180 dakika
                          </span>
                        </div>
                      </SelectItem>
                      <SelectItem value='YDS'>
                        <div className='flex flex-col items-start'>
                          <span>YDS</span>
                          <span className='text-xs text-muted-foreground'>
                            80 soru, 180 dakika
                          </span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className='grid gap-2'>
                  <Label htmlFor='category'>Kategori *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => {
                      setFormData({ ...formData, category: value as ExamCategory })
                      // Deneme seçilirse otomatik doldur
                      if (value === 'DENEME' && formData.type) {
                        const examInfo = EXAM_INFO[formData.type]
                        if (examInfo) {
                          setFormData(prev => ({
                            ...prev,
                            category: 'DENEME',
                            totalQuestions: examInfo.totalQuestions.toString(),
                            duration: examInfo.duration.toString(),
                          }))
                        }
                      }
                    }}
                  >
                    <SelectTrigger id='category'>
                      <SelectValue placeholder='Seçin' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='DENEME'>
                        <div className='flex flex-col items-start'>
                          <span>Deneme Sınavı</span>
                          <span className='text-xs text-muted-foreground'>
                            Tüm müfredat, gerçek sınav simülasyonu
                          </span>
                        </div>
                      </SelectItem>
                      <SelectItem value='TEST'>
                        <div className='flex flex-col items-start'>
                          <span>Konu Testi</span>
                          <span className='text-xs text-muted-foreground'>
                            Ders ve konuya özel sorular
                          </span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Deneme için sınav bilgisi */}
              {formData.category === 'DENEME' && formData.type && (
                <div className='rounded-lg bg-muted p-3 space-y-1'>
                  <p className='text-sm font-medium'>{EXAM_INFO[formData.type].name}</p>
                  <p className='text-xs text-muted-foreground'>
                    {EXAM_INFO[formData.type].description}
                  </p>
                </div>
              )}

              {/* Test için ders seçimi */}
              {formData.category === 'TEST' && formData.type && (
                <div className='grid gap-2'>
                  <Label htmlFor='subject'>Ders *</Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) => setFormData({ ...formData, subject: value as SubjectType })}
                  >
                    <SelectTrigger id='subject'>
                      <SelectValue placeholder='Ders seçin' />
                    </SelectTrigger>
                    <SelectContent>
                      {formData.type === 'TYT' && (
                        <>
                          <SelectItem value='TURKCE'>Türkçe</SelectItem>
                          <SelectItem value='MATEMATIK'>Matematik</SelectItem>
                          <SelectItem value='FIZIK'>Fizik</SelectItem>
                          <SelectItem value='KIMYA'>Kimya</SelectItem>
                          <SelectItem value='BIYOLOJI'>Biyoloji</SelectItem>
                          <SelectItem value='TARIH'>Tarih</SelectItem>
                          <SelectItem value='COGRAFYA'>Coğrafya</SelectItem>
                          <SelectItem value='DIN'>Din Kültürü</SelectItem>
                        </>
                      )}
                      {formData.type === 'AYT' && (
                        <>
                          <SelectItem value='MATEMATIK'>Matematik</SelectItem>
                          <SelectItem value='FIZIK'>Fizik</SelectItem>
                          <SelectItem value='KIMYA'>Kimya</SelectItem>
                          <SelectItem value='BIYOLOJI'>Biyoloji</SelectItem>
                          <SelectItem value='TARIH'>Tarih</SelectItem>
                          <SelectItem value='COGRAFYA'>Coğrafya</SelectItem>
                          <SelectItem value='FELSEFE'>Felsefe</SelectItem>
                          <SelectItem value='DIN'>Din Kültürü</SelectItem>
                        </>
                      )}
                      {formData.type === 'YDS' && (
                        <SelectItem value='INGILIZCE'>İngilizce</SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Konu (Test için) */}
              {formData.category === 'TEST' && (
                <div className='grid gap-2'>
                  <Label htmlFor='topic'>Konu</Label>
                  <Input
                    id='topic'
                    placeholder='Örn: Türev, Osmanlı Devleti etc.'
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  />
                </div>
              )}

              {/* İsim (Opsiyonel) */}
              <div className='grid gap-2'>
                <Label htmlFor='name'>İsim (Opsiyonel)</Label>
                <Input
                  id='name'
                  placeholder={formData.category === 'DENEME'
                    ? 'Örn: TYT Deneme #12'
                    : 'Örn: Matematik Türev Testi #1'}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              {/* Test için soru sayısı ve süre */}
              {formData.category === 'TEST' && (
                <div className='grid grid-cols-2 gap-4'>
                  <div className='grid gap-2'>
                    <Label htmlFor='totalQuestions'>Soru Sayısı</Label>
                    <Input
                      id='totalQuestions'
                      type='number'
                      min='1'
                      placeholder='20'
                      value={formData.totalQuestions}
                      onChange={(e) => setFormData({ ...formData, totalQuestions: e.target.value })}
                    />
                  </div>
                  <div className='grid gap-2'>
                    <Label htmlFor='duration'>Süre (dakika)</Label>
                    <Input
                      id='duration'
                      type='number'
                      min='1'
                      placeholder='40'
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {/* Tarih */}
              <div className='grid gap-2'>
                <Label htmlFor='date'>Tarih *</Label>
                <Input
                  id='date'
                  type='date'
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>

              {/* Doğru Yanlış Boş */}
              <div className='grid grid-cols-3 gap-4'>
                <div className='grid gap-2'>
                  <Label htmlFor='correct'>Doğru *</Label>
                  <Input
                    id='correct'
                    type='number'
                    min='0'
                    placeholder='0'
                    value={formData.correct}
                    onChange={(e) => setFormData({ ...formData, correct: e.target.value })}
                    required
                  />
                </div>

                <div className='grid gap-2'>
                  <Label htmlFor='incorrect'>Yanlış *</Label>
                  <Input
                    id='incorrect'
                    type='number'
                    min='0'
                    placeholder='0'
                    value={formData.incorrect}
                    onChange={(e) => setFormData({ ...formData, incorrect: e.target.value })}
                    required
                  />
                </div>

                <div className='grid gap-2'>
                  <Label htmlFor='blank'>Boş</Label>
                  <Input
                    id='blank'
                    type='number'
                    min='0'
                    placeholder='0'
                    value={formData.blank}
                    onChange={(e) => setFormData({ ...formData, blank: e.target.value })}
                  />
                </div>
              </div>

              {/* Net hesaplama preview */}
              {formData.correct && formData.incorrect && (
                <div className='rounded-lg bg-muted p-3 text-center'>
                  <p className='text-sm text-muted-foreground'>
                    Net: {calculateNet(parseInt(formData.correct), parseInt(formData.incorrect)).toFixed(2)}
                  </p>
                </div>
              )}

              <div className='flex justify-end gap-2'>
                <Button type='button' variant='outline' onClick={() => setOpen(false)}>
                  İptal
                </Button>
                <Button type='submit'>Kaydet</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats by Exam Type */}
      <div className='grid gap-4 md:grid-cols-3'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>TYT Ortalama Net</CardTitle>
            <BarChart3 className='h-4 w-4 text-blue-500' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{tytStats.avgNet}</div>
            <p className='text-xs text-muted-foreground'>
              {tytStats.count} sınav
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>AYT Ortalama Net</CardTitle>
            <TrendingUp className='h-4 w-4 text-purple-500' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{aytStats.avgNet}</div>
            <p className='text-xs text-muted-foreground'>
              {aytStats.count} sınav
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>YDS Ortalama Net</CardTitle>
            <Target className='h-4 w-4 text-green-500' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{ydsStats.avgNet}</div>
            <p className='text-xs text-muted-foreground'>
              {ydsStats.count} sınav
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Exam List */}
      <Card>
        <CardHeader>
          <CardTitle>Tüm Sonuçlar</CardTitle>
          <CardDescription>
            Deneme ve test sonuçlarınız
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            {exams.map((exam) => (
              <div
                key={exam.id}
                className='flex items-center justify-between rounded-lg border p-4 hover:bg-muted/50 transition-colors'
              >
                <div className='space-y-1 flex-1'>
                  <div className='flex items-center gap-2 flex-wrap'>
                    <span className='font-medium'>{exam.name}</span>
                    <span
                      className={`rounded px-2 py-0.5 text-xs font-medium ${
                        exam.type === 'TYT'
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                          : exam.type === 'AYT'
                          ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                          : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      }`}
                    >
                      {exam.type}
                    </span>
                    <span
                      className={`rounded px-2 py-0.5 text-xs font-medium ${
                        exam.category === 'DENEME'
                          ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                          : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400'
                      }`}
                    >
                      {exam.category}
                    </span>
                    {exam.subject && (
                      <span className='rounded px-2 py-0.5 text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400'>
                        {exam.subject}
                      </span>
                    )}
                  </div>
                  <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                    <span>{exam.date}</span>
                    {exam.category === 'DENEME' && exam.totalQuestions && (
                      <>
                        <span>•</span>
                        <span>{exam.totalQuestions} soru</span>
                        <span>•</span>
                        <span>{exam.duration} dakika</span>
                      </>
                    )}
                    {exam.category === 'TEST' && exam.topic && (
                      <>
                        <span>•</span>
                        <span>{exam.topic}</span>
                        {exam.totalQuestions && (
                          <>
                            <span>•</span>
                            <span>{exam.totalQuestions} soru</span>
                          </>
                        )}
                      </>
                    )}
                  </div>
                  <div className='flex gap-4 text-sm'>
                    <span className='text-green-600 font-medium'>Doğru: {exam.correct}</span>
                    <span className='text-red-600 font-medium'>Yanlış: {exam.incorrect}</span>
                    <span className='text-muted-foreground'>Boş: {exam.blank}</span>
                  </div>
                </div>
                <div className='text-right ml-4'>
                  <p className='text-3xl font-bold'>{exam.net.toFixed(2)}</p>
                  <p className='text-xs text-muted-foreground'>Net</p>
                </div>
              </div>
            ))}
            {exams.length === 0 && (
              <div className='text-center py-8 text-muted-foreground'>
                <p>Henüz sonuç girilmedi. İlk sonucunuzu ekleyin!</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
