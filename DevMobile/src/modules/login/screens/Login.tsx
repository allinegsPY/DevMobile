/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import {ContainerPlugin, TitleLogin} from '../styles/login.style';
import Input from '../../../shared/components/input/Input';
import {useLogin} from '../hooks/useLogin';
import Button from '../../../shared/components/button/Button';
import GlobalButton from '../../../shared/components/globalbutton/GlobalButton';

const Login = () => {
  const {
    email,
    password,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
  } = useLogin();
  return (
    <View>
      <ContainerPlugin>
        <TitleLogin>Login</TitleLogin>
        <Input value={email} margin="10px" onChange={handleOnChangeEmail} />
        <Input value={password} margin="10px" onChange={handleOnChangePassword} />
        <Button title="ENTRAR" margin="10px" onPress={handleOnPress}  />
        <GlobalButton
          title="Clique em mim"
          onPress={handleButtonPress}
          margin={10}
        />
      </ContainerPlugin>
    </View>
  );
};

export default Login;
