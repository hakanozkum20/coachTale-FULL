import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/presentation/hooks';
import { useSolutions } from '@/presentation/hooks';
import { Camera, Upload, Trash2, Loader2 } from 'lucide-react';

export function SolutionsPage() {
  const { user } = useAuth();
  const { data: solutions, isLoading } = useSolutions();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!user) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Fotoğraflı Çözüm</h1>
          <p className="text-muted-foreground">Upload question photos to get AI solutions</p>
        </div>
        <label htmlFor="photo-upload">
          <Button asChild>
            <span>
              <Camera className="h-4 w-4 mr-2" />
              Fotoğraf Yükle
            </span>
          </Button>
          <input
            id="photo-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                handleImageUpload(file);
              }
            }}
          />
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          <div className="col-span-full flex justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : solutions && solutions.length > 0 ? (
          solutions.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} userId={user.id} />
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-muted-foreground">
            Henüz çözüm yok. İlk sorunu yüklemek için yukarıdaki butonu kullan.
          </div>
        )}
      </div>
    </div>
  );

  async function handleImageUpload(file: File) {
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = reader.result as string;
      setSelectedImage(base64);
    };
    reader.readAsDataURL(file);
  }
}

function SolutionCard({ solution, userId }: { solution: any; userId: string }) {
  const { deleteSolution, isDeleting } = useSolutions();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg truncate">{solution.lesson || 'Genel'}</CardTitle>
        <CardDescription>
          {solution.topic || 'Belirtilmemiş'} • {new Date(solution.createdAt).toLocaleDateString('tr-TR')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src={solution.imageUrl}
          alt="Question"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        {solution.solution && (
          <div className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {solution.solution}
          </div>
        )}
        <Button
          variant="destructive"
          size="sm"
          onClick={() => deleteSolution(solution.id)}
          disabled={isDeleting}
          className="w-full"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Sil
        </Button>
      </CardContent>
    </Card>
  );
}
