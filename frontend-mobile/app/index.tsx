import { View, Text } from 'react-native'
import { Button } from '@gluestack-ui/themed'

export default function LoginScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-3xl font-bold text-primary mb-4">CoachNE</Text>
      <Text className="text-text-secondary mb-8">Öğrenciler için AI destekli öğrenme platformu</Text>
      <Button
        size="lg"
        className="bg-primary rounded-xl"
        onPress={() => console.log('Google login')}
      >
        <Text className="text-white font-semibold">Google ile Giriş</Text>
      </Button>
    </View>
  )
}
