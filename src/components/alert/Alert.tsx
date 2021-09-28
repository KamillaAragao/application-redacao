import React from 'react';
import { VStack, Alert, HStack, Text, IconButton, CloseIcon } from 'native-base';
import IAlert from '../../interfaces/components/Alert';

const Index: React.FC<IAlert> = (props) => {
  return (
    <Alert w="90%" status={props.type}>
      <VStack space={2} flexShrink={1} w="100%">
        <HStack flexShrink={1} space={2} justifyContent="space-between">
          <HStack space={2} flexShrink={1}>
            <Alert.Icon mt="1" />
            <Text fontSize="md" color="coolGray.800">
              {props.message}
            </Text>
          </HStack>
          <IconButton
            variant="unstyled"
            icon={<CloseIcon size="3" color="coolGray.600" />}
            onPress={()=>props.onClose()}
          />
        </HStack>
      </VStack>
    </Alert>
  );
}

export default Index;