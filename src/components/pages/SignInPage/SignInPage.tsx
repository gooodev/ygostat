import { useAuth } from '@/hooks';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
/** @pakcage */
export type SignInPageProps = {};

type FormState = {
  email: string;
  password: string;
};

/** @pakcage */
export default function SignInPage(_props: SignInPageProps) {
  // const location = useLocation();
  const navigate = useNavigate();
  const { login, loginWithGoogle } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();
  // const onClickLogin = async () => {
  //   const { state } = location;
  //   const redirectUrl = isLocationState(state) ? state.prevUrl : window.location.href;
  //   await login(redirectUrl);
  // };
  const onClickBack = () => {
    // Back 2 location because you could have been redirected from location on which you need to be autheinticated.
    navigate(-2);
  };

  const onSubmit = async ({ email, password }: FormState) => {
    await login(email, password);
    navigate('/', { replace: true });
  };

  const handleClickGoogleLogin = async () => {
    await loginWithGoogle();
    console.log('HOME!');
    navigate('/', { replace: true });
  };

  return (
    <VStack height="100vh" width="100vw" justify="center" gap={12}>
      <Text fontSize="3xl">ログインが必要です</Text>
      <VStack spacing={4} width={200} as="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormControl isInvalid={errors.email != null} isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" {...register('email', { required: true })}></Input>
          <FormErrorMessage>Emailを入力してください。</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password != null} isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" {...register('password', { required: true })}></Input>
          <FormErrorMessage>Passwordを入力してください。</FormErrorMessage>
        </FormControl>
        <Button w="100%" type="submit">
          Login
        </Button>
        <Button w="100%" onClick={handleClickGoogleLogin}>
          GoogleLogin
        </Button>
        <Button w="100%" onClick={onClickBack}>
          戻る
        </Button>
      </VStack>
    </VStack>
  );
}
