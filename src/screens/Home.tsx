import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, FlatList, HStack, VStack, Text, Spacer, Spinner, Center } from 'native-base';
import { getDissertation } from '../services/Student';
import moment from 'moment';

const Home: React.FC = (props: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dissertation, setDissertation] = useState([]);
  
  const getDissertationByStudent = async()=> {
    setIsLoading(true);
    const response = await getDissertation();
    setDissertation(response);
    setIsLoading(false);
  }
  
  useEffect(()=> {
    getDissertationByStudent();
  }, []);


  return (
    <Box flex={1} p={4} bgColor="white">
  
      {
        isLoading ?
          <Center flex={1}>
            <Spinner/>
            <Text mt={2}>Carregando redações...</Text>
          </Center>
        :
        <>
          <Text fontSize="lg" bold>Lista de redações</Text>
          <FlatList
            mt={4}
            mb={8}
            data={dissertation}
            renderItem={({ item }) => {
              const data = moment(item.created_at, 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY');
              return (
                <Box
                  mt={2}
                  mb={2}
                >
                  <TouchableOpacity onPress={() => props.navigation.navigate('Dissertation', {dissertationId: item.id})}>
                    <HStack justifyContent="space-between">
                      <VStack>
                        <Text
                          color="coolGray.800"
                          bold
                        >
                          Número
                        </Text>
                        <Text
                          color="coolGray.600"
                        >
                          {item.numero}
                        </Text>
                      </VStack>
                      <Spacer />
                      <Text
                        fontSize="xs"
                        color="coolGray.800"
                        alignSelf="flex-start"
                      >
                        {data}
                      </Text>
                    </HStack>
                  </TouchableOpacity>
                </Box>
              )
            }}
          />
        </>
      }
    </Box>
  );
}

export default Home;

