import React, { useState } from 'react';
import { Button, Box, Input, FormControl, Center, VStack, Image, useToast } from 'native-base';
import { authentication } from '../services/Auth';

const Login: React.FC = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const toast = useToast();

  const setEmail = (value: string) => setForm(prev=>({...prev, email: value}));

  const setPassword = (value: string) => setForm(prev=>({...prev, password: value}));

  const onLogin = async() => {
    setIsLoading(true);

    try { 
      const response = await authentication(form);
      if(response){
        props.navigation.replace('Home');
      }
      
    }catch(e){ 
      toast.show({
        title: "Atenção",
        description: "Email ou senha inválido!",
        placement: "top",
        status: "error"
      });
    }
    
    setIsLoading(false);
  };

  return (
    <Box flex={1} bgColor="white">
      <Center flex={1}>
        <Image
          source={require('../assets/img/logo.png')}
          resizeMode="center"
          alt="Logo_Splash"
        />
        <VStack alignItems="center" w="70%">
          <FormControl.Label w="100%">Email</FormControl.Label>
          <Input w="100%" onChangeText={setEmail}/>

          <FormControl.Label w="100%" mt="4">Senha</FormControl.Label>
          <Input w="100%" type="password" onChangeText={setPassword}/>

          <Button w="100%" mt="10" onPress={onLogin} isLoading={isLoading}>
            Entrar
          </Button>
        </VStack>
      </Center>
    </Box>
  )
}

export default Login;