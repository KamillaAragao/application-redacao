import React, { useState, useEffect } from 'react';
import { Box, Center, Spinner, Text, HStack, VStack, Image, ScrollView, Spacer  } from 'native-base';
import { getDissertationById } from '../services/Student';
import ImageView from "react-native-image-viewing";
import moment from 'moment';
import { TouchableOpacity } from 'react-native';

const Dissertation: React.FC = (props: any)=> {
  const [isLoading, setIsLoading] = useState(true);
  const [dissertationData, setDissertationData] = useState<any>({});
  const [previewVisible, setPreviewVisible] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const getDissertation = async()=> {
    setIsLoading(true);
    const response = await getDissertationById(props.route.params.dissertationId);
    response.urls.map((v: any) => {
      v.uri = v.url;
    });    
    setDissertationData(response);
    setIsLoading(false);
  }

  const openPreview = (index: number)=> {
    setImageIndex(index);
    setPreviewVisible(true);
  }
  
  useEffect(()=> {
    getDissertation();
  }, []);

  return (
    <Box flex={1} bgColor="white">
      
      {
        isLoading ?
          <Center flex={1}>
            <Spinner/>
            <Text mt={2}>Carregando redação...</Text>
          </Center>
        :
          <>
            <Center mt={4}>
              <HStack space={5} alignItems="center">
                  <VStack>
                    <Text bold>Aluno</Text>
                    <Text>{ dissertationData.aluno.nome_completo }</Text>
                  </VStack>

                  <VStack>
                    <Text bold>Número</Text>
                    <Text>{ dissertationData.numero}</Text>
                  </VStack>

                  <VStack>
                    <Text bold>Data</Text>
                    <Text>{ moment(dissertationData.created_at).format('DD/MM/YYYY HH:mm')}</Text>
                  </VStack>
              </HStack>
            </Center>
            <ScrollView w="100%">
              <Center mt={4}>
              {
                dissertationData.urls.map((v: any, index: number) => (
                  <TouchableOpacity onPress={()=>openPreview(index)}>
                    <Image
                      source={{uri: v.uri}}
                      alt={`imagem-${index}`}
                      w={200}
                      h={200}
                      mt={3}
                    />
                  </TouchableOpacity>
                ))
              }
              </Center>
            </ScrollView>
            <ImageView
              images={dissertationData.urls}
              imageIndex={imageIndex}
              visible={previewVisible}
              onRequestClose={() => setPreviewVisible(false)}
              FooterComponent={({ imageIndex }) => (
                <Center mb={4}>
                  <Text color="black">{`${imageIndex + 1} / ${dissertationData.urls.length}`}</Text>
                </Center>
              )}
            />
          </>
      }
    </Box>
  )
}

export default Dissertation;