import { Image } from 'react-native';
import { Box } from "@/components/ui/box"
import { Center } from "@/components/ui/center"
import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"
import { VStack } from "@/components/ui/vstack"
import {  ArrowRightIcon } from "@/components/ui/icon"
import { Button, ButtonText, ButtonIcon  } from "@/components/ui/button"


export default function HomeScreen() {
  return (
    <Center className="flex-1 justify-center items-center">
      <Box className="p-5 max-w-96 border border-background-300 rounded-lg">
        <VStack className="pb-4" space="xs">
          <Heading className="leading-[30px]">Welcome To Rubics Vault</Heading>
          <Text className="text-sm">
            Rubic Cube Solver.
          </Text>
        </VStack>
        <VStack space="xl" className="py-2">
          <Image
            source={require("@/assets/images/rubiks-cube.gif")}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
        </VStack>
        <VStack space="lg" className="pt-4">
          <Button variant="solid" className="mt-2">
            <ButtonText>START</ButtonText>
            <ButtonIcon as={ArrowRightIcon} className="ml-2" />
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
