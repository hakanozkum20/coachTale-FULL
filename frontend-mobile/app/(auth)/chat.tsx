import { View, Text, ScrollView, TextInput } from 'react-native'
import { Button } from '@gluestack-ui/themed'

export default function ChatScreen() {
  return (
    <View className="flex-1 bg-background">
      <View className="p-4 bg-surface border-b border-border">
        <Text className="text-lg font-semibold text-text-primary">💬 AI Asistan</Text>
      </View>
      <ScrollView className="flex-1 p-4">
        <View className="mb-4 flex-row justify-end">
          <View className="bg-primary rounded-xl p-3 max-w-[80%]">
            <Text className="text-white">Bu soruyu nasıl çözebilirim?</Text>
          </View>
        </View>
        <View className="mb-4">
          <View className="bg-surface rounded-xl p-3 max-w-[80%]">
            <Text className="text-text-primary">Tabii! Bu soruyu çözmek için önce verilenlere bakalım...</Text>
          </View>
        </View>
      </ScrollView>
      <View className="p-4 bg-surface border-t border-border">
        <TextInput
          className="bg-background border border-border rounded-xl p-3 mb-2 text-text-primary"
          placeholder="Mesaj yaz..."
          placeholderTextColor="#64748b"
        />
        <Button size="md" className="bg-primary rounded-xl">
          <Text className="text-white font-semibold">Gönder</Text>
        </Button>
      </View>
    </View>
  )
}
