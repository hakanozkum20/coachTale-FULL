import { View, Text } from 'react-native'
import { Button } from '@gluestack-ui/themed'

export default function PomodoroScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background p-4">
      <Text className="text-6xl font-bold text-primary mb-4">23:45</Text>
      <Text className="text-text-secondary mb-8">Focus Time</Text>
      <View className="flex-row gap-4">
        <Button size="lg" className="bg-warning flex-1 rounded-xl">
          <Text className="text-white font-semibold">⏸️ PAUSE</Text>
        </Button>
        <Button size="lg" className="bg-danger flex-1 rounded-xl">
          <Text className="text-white font-semibold">⏹️ STOP</Text>
        </Button>
      </View>
      <View className="mt-8 w-full">
        <Text className="text-text-primary mb-2">Session 3/4</Text>
        <View className="h-2 bg-surface rounded-full overflow-hidden">
          <View className="h-full bg-primary w-3/4" />
        </View>
      </View>
    </View>
  )
}
