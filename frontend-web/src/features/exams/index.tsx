import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/presentation/hooks';
import {
  useExamResults,
  useExamAnalysis,
  type AddExamResultRequest,
} from '@/presentation/hooks';
import { ExamType } from '@/core/entities';
import { Plus, TrendingUp, Target, Trash2 } from 'lucide-react';

export function ExamsPage() {
  const { user } = useAuth();
  const { data: results, isLoading } = useExamResults();
  const { data: analysis } = useExamAnalysis();
  const [showAddForm, setShowAddForm] = useState(false);

  if (!user) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sınav Takibi</h1>
          <p className="text-muted-foreground">Track your exam performance</p>
        </div>
        <Button onClick={() => setShowAddForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Sonuç Ekle
        </Button>
      </div>

      {/* Analysis Cards */}
      {analysis && (
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Ortalama</CardDescription>
              <CardTitle className="text-2xl">{analysis.averageScore.toFixed(2)}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>En İyi Ders</CardDescription>
              <CardTitle className="text-lg">{analysis.bestLesson}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Geliştirilmesi Gereken</CardDescription>
              <CardTitle className="text-lg">{analysis.worstLesson}</CardTitle>
            </CardHeader>
          </Card>
        </div>
      )}

      {/* Results List */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="text-center py-12 text-muted-foreground">Yükleniyor...</div>
        ) : results && results.length > 0 ? (
          results.map((result) => <ExamResultCard key={result.id} result={result} />)
        ) : (
          <Card>
            <CardContent className="text-center py-12 text-muted-foreground">
              Henüz sınav sonucu yok. İlk sonucu eklemek için yukarıdaki butonu kullan.
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

function ExamResultCard({ result }: { result: any }) {
  const { deleteResult, isDeleting } = useExamResults();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{result.getDisplayName()}</CardTitle>
            <CardDescription>
              {result.examType} • {new Date(result.examDate).toLocaleDateString('tr-TR')}
            </CardDescription>
          </div>
          {result.score && (
            <div className="text-right">
              <div className="text-2xl font-bold">{result.score}</div>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Toplam Soru:</span>
            <span className="font-medium">{result.getTotalQuestions()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Doğru:</span>
            <span className="font-medium text-green-600">{result.getTotalCorrect()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Yanlış:</span>
            <span className="font-medium text-red-600">{result.getTotalIncorrect()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Boş:</span>
            <span className="font-medium">{result.getTotalEmpty()}</span>
          </div>
          <div className="flex justify-between text-sm border-t pt-2 mt-2">
            <span className="text-muted-foreground">Net:</span>
            <span className="font-bold">{result.getOverallNet().toFixed(2)}</span>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => deleteResult(result.id)}
          disabled={isDeleting}
          className="mt-4 w-full"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Sil
        </Button>
      </CardContent>
    </Card>
  );
}
