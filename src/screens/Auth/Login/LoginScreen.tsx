import React from 'react';
import {
  CommonActions,
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {View, KeyboardAvoidingView} from 'react-native';
import {Formik} from 'formik';
import {observer} from 'mobx-react';
import * as yup from 'yup';
import Input from '../../../components/Input/Input';
import AuthFooter from '../../../components/AuthFooter/AuthFooter';
import {useStore} from '../../../stores/createStore';
import screens from '../../../navigation/screens';
import s from './styles';
import {AuthStackNavigatorParamList} from '../../../navigation/AuthNavigator/types';

type onSubmitParamsProps = {
  email: string;
  password: string;
};

const validationSchema = yup.object({
  email: yup.string().required('Email is required').email(),
  password: yup
    .string()
    .min(6, 'Password must contain 6-20 characters.')
    .max(20, 'Password must contain 6-20 characters.')
    .required('Password is required'),
});

const LoginScreen = () => {
  const store = useStore();
  const route = useRoute<RouteProp<AuthStackNavigatorParamList, 'Login'>>();
  const navigation =
    useNavigation<NavigationProp<AuthStackNavigatorParamList, 'Login'>>();

  const resetAction = route.params.resetAction;

  async function onSubmit({email, password}: onSubmitParamsProps) {
    await store.auth.login.run({email, password});
    if (!!route.params.resetAction) {
      resetAction?.();
    }
    navigation.getParent()?.dispatch(state => {
      const routes = state.routes.filter(r => r.name !== screens.Auth);

      return CommonActions.reset({
        ...state,
        routes,
        index: routes.length - 1,
      });
    });
  }

  function navigateToRegister() {
    navigation.navigate(screens.Register, {
      resetAction,
    });
  }

  return (
    <KeyboardAvoidingView style={s.container}>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          touched,
          values,
        }) => (
          <>
            <View style={s.formContainer}>
              <Input
                value={values.email}
                handleChange={handleChange}
                label="email"
                name="email"
                errors={errors}
                touched={touched}
              />
              <Input
                value={values.password}
                handleChange={handleChange}
                label="password"
                name="password"
                secureTextEntry
                errors={errors}
                touched={touched}
              />
            </View>
            <AuthFooter
              onPress={navigateToRegister}
              onSubmit={handleSubmit}
              buttonLabel="Login"
            />
          </>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default observer(LoginScreen);
