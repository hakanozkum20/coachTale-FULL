import { View, Text, ScrollView } from 'react-native'
import { Avatar, Button } from '@gluestack-ui/themed'

export default function SettingsScreen() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-4">
        <View className="items-center mb-6">
          <Avatar size="xl" className="mb-3 bg-primary">
            <AvatarFallbackText>ÖS</AvatarFallbackText>
          </Avatar>
          <Text className="text-xl font-bold text-text-primary">Öğrenci</Text>
          <Text className="text-text-secondary">student@example.com</Text>
        </View>

        <View className="bg-surface rounded-xl overflow-hidden mb-4">
          <View className="p-4 border-b border-border">
            <Text className="text-text-primary">📊 Sınav Sonuçları</Text>
          </View>
          <View className="p-4 border-b border-border">
            <Text className="text-text-primary">📚 Çalışma Planları</Text>
          </View>
          <View className="p-4 border-b border-border">
            <Text className="text-text-primary">🏆 Rozetler</Text>
          </View>
          <View className="p-4">
            <Text className="text-text-primary">⚙️ Ayarlar</Text>
          </View>
        </View>

        <Button size="lg" className="bg-danger rounded-xl">
          <Text className="text-white font-semibold">Çıkış Yap</Text>
        </Button>
      </View>
    </ScrollView>
  )
}
