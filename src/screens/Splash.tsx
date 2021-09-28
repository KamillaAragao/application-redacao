import React, {useEffect} from 'react';
import { Box, Center, Image, Spinner} from 'native-base';
import { getJwtToken } from '../services/UserStore';

const Splash: React.FC = (props: any)=> {

  const openLoginScreen = () => {
    setTimeout(async()=> {
      const token = await getJwtToken();
      if(token === null){
        props.navigation.replace('Login');
      } else {
        props.navigation.replace('Home');
      }
    }, 2000);
  }

  useEffect(()=> {
    openLoginScreen();
  }, []);

  return (
    <Box flex={1} bgColor="white">
      <Center flex={1}>
        <Image
          source={require('../assets/img/logo_texto.png')}
          resizeMode="center"
          alt="Logo_Splash"
        />
      </Center>
      <Center mb={8}>
        <Spinner />
      </Center>
    </Box>
  );
}

export default Splash;