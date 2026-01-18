import { View, Text } from 'react-native'
import { Button } from '@gluestack-ui/themed'

export default function SolveScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background p-4">
      <Text className="text-6xl mb-4">📸</Text>
      <Text className="text-xl font-semibold text-text-primary mb-2">Soruyu Çek</Text>
      <Text className="text-text-secondary mb-8 text-center">
        Soruyu çekebilir veya galeriden seçebilirsin
      </Text>
      <View className="w-full gap-4">
        <Button size="lg" className="bg-primary rounded-xl">
          <Text className="text-white font-semibold">📷 Kamera</Text>
        </Button>
        <Button size="lg" className="bg-secondary rounded-xl">
          <Text className="text-white font-semibold">🖼️ Galeri Seç</Text>
        </Button>
      </View>
    </View>
  )
}
