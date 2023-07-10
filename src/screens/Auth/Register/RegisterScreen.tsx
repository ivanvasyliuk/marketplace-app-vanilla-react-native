import React from 'react';
import {Field, Formik} from 'formik';
import {observer} from 'mobx-react';
import {View} from 'react-native';
import {
  CommonActions,
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import * as yup from 'yup';
import AuthFooter from '../../../components/AuthFooter/AuthFooter';
import Input from '../../../components/Input/Input';
import {useStore} from '../../../stores/createStore';
import screens from '../../../navigation/screens';
import s from './styles';
import {AuthStackNavigatorParamList} from '../../../navigation/AuthNavigator/types';

type onSubmitParamsProps = {
  email: string;
  password: string;
};

const validationSchema = yup.object({
  email: yup.string().email().required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must contain 6-20 characters.')
    .max(20, 'Password must contain 6-20 characters.')
    .required('Password is required'),
  repeatPassword: yup
    .string()
    .required('Passwords don’t match.')
    .oneOf([yup.ref('password')], 'Passwords don’t match.'),
});

const RegisterScreen = () => {
  const store = useStore();
  const route = useRoute<RouteProp<AuthStackNavigatorParamList, 'Register'>>();
  const navigation =
    useNavigation<NavigationProp<AuthStackNavigatorParamList, 'Register'>>();

  const resetAction = route.params.resetAction;

  async function onSubmit({email, password}: onSubmitParamsProps) {
    await store.auth.register.run({email, password});
    if (!!route.params.resetAction) {
      resetAction();
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

  function navigateToLogin() {
    navigation.navigate(screens.Login, {
      resetAction,
    });
  }

  return (
    <View style={s.container}>
      <Formik
        initialValues={{email: '', password: '', repeatPassword: ''}}
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
                name="email"
                label="email"
                errors={errors}
                touched={touched}
              />
              <Input
                value={values.password}
                handleChange={handleChange}
                name="password"
                label="password"
                secureTextEntry
                errors={errors}
                touched={touched}
              />
              <Input
                value={values.repeatPassword}
                handleChange={handleChange}
                name="repeatPassword"
                label="repeat password"
                secureTextEntry
                errors={errors}
                touched={touched}
              />
            </View>
            <AuthFooter
              onPress={navigateToLogin}
              onSubmit={handleSubmit}
              buttonLabel="Register"
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default observer(RegisterScreen);
