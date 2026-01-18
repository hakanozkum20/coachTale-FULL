import { View, Text, ScrollView } from 'react-native'
import { Card } from '@gluestack-ui/themed'

export default function DashboardScreen() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-4">
        <View className="mb-6">
          <Text className="text-2xl font-bold text-primary mb-1">👋 Merhaba!</Text>
          <Text className="text-text-secondary">Bugün harika geçireceksin.</Text>
        </View>

        <Card className="mb-6 p-4 bg-surface rounded-xl">
          <Text className="text-lg font-semibold text-text-primary mb-4">📊 Bugün</Text>
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-3xl font-bold text-primary">2sa 15dk</Text>
              <Text className="text-text-secondary">Focus time</Text>
            </View>
            <View>
              <Text className="text-3xl font-bold text-secondary">4</Text>
              <Text className="text-text-secondary">Session</Text>
            </View>
          </View>
        </Card>

        <View>
          <Text className="text-lg font-semibold text-text-primary mb-4">🎯 Hızlı Erişim</Text>
          <View className="flex-row gap-4">
            <View className="flex-1 bg-surface rounded-xl p-4 items-center">
              <Text className="text-4xl mb-2">🍅</Text>
              <Text className="text-text-primary text-sm">Timer</Text>
            </View>
            <View className="flex-1 bg-surface rounded-xl p-4 items-center">
              <Text className="text-4xl mb-2">💬</Text>
              <Text className="text-text-primary text-sm">Chat</Text>
            </View>
            <View className="flex-1 bg-surface rounded-xl p-4 items-center">
              <Text className="text-4xl mb-2">📸</Text>
              <Text className="text-text-primary text-sm">Camera</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
