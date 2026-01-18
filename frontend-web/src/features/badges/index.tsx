import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/presentation/hooks';
import { useAllBadges, useUserBadges, useBadgeProgress } from '@/presentation/hooks';
import { Trophy, Lock, Award } from 'lucide-react';

export function BadgesPage() {
  const { user } = useAuth();
  const { data: allBadges, isLoading: isLoadingAll } = useAllBadges();
  const { data: userBadges, isLoading: isLoadingUser } = useUserBadges(user?.id || '');
  const { data: badgeProgress, isLoading: isLoadingProgress } = useBadgeProgress(user?.id || '');

  if (!user) return null;

  const earnedBadgeIds = new Set(userBadges?.map((ub) => ub.badgeId) || []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Rozetler</h1>
          <p className="text-muted-foreground">
            Kazanılan rozetler: {userBadges?.length || 0} / {allBadges?.length || 0}
          </p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Toplam Rozet</CardDescription>
            <CardTitle className="text-2xl">{allBadges?.length || 0}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Kazanılan</CardDescription>
            <CardTitle className="text-2xl text-green-600">{userBadges?.length || 0}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>İlerleme</CardDescription>
            <CardTitle className="text-2xl">
              {allBadges && allBadges.length > 0
                ? (((userBadges?.length || 0) / allBadges.length) * 100).toFixed(0)
                : 0}
              %
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Badges Grid */}
      {isLoadingAll || isLoadingUser || isLoadingProgress ? (
        <div className="text-center py-12 text-muted-foreground">Yükleniyor...</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {badgeProgress?.map(({ badge, earned, earnedAt }) => (
            <BadgeCard key={badge.id} badge={badge} earned={earned} earnedAt={earnedAt} />
          ))}
        </div>
      )}
    </div>
  );
}

function BadgeCard({ badge, earned, earnedAt }: { badge: any; earned: boolean; earnedAt?: Date }) {
  return (
    <Card className={earned ? 'border-yellow-200 bg-yellow-50/50' : ''}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className={`p-3 rounded-full ${earned ? 'bg-yellow-100' : 'bg-muted'}`}>
            {earned ? (
              <Trophy className="h-6 w-6 text-yellow-600" />
            ) : (
              <Lock className="h-6 w-6 text-muted-foreground" />
            )}
          </div>
          {earned && (
            <div className="flex items-center text-xs text-yellow-700 font-medium">
              <Award className="h-3 w-3 mr-1" />
              Kazanıldı
            </div>
          )}
        </div>
        <CardTitle className="text-lg mt-2">{badge.name}</CardTitle>
        <CardDescription>{badge.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">
          <div className="font-medium mb-1">Gereksinim:</div>
          <div>{badge.requirement}</div>
        </div>
        {earnedAt && (
          <div className="text-xs text-muted-foreground mt-4">
            Kazanma tarihi: {new Date(earnedAt).toLocaleDateString('tr-TR')}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
