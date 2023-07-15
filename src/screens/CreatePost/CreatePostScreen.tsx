import React, {MutableRefObject, useEffect, useRef} from 'react';
import {ScrollView, View} from 'react-native';
import {observer} from 'mobx-react';
import {Formik, FormikHelpers, FormikProps} from 'formik';
import * as yup from 'yup';
import Title from '../../components/Title/Title';
import PriceInput from '../../components/PriceInput/PriceInput';
import {useStore} from '../../stores/createStore';
import Photos from './components/Photos';
import s from './styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import MainInputField from '../../components/MainInputField/MainInputField';
import {IProductModel} from '../../stores/Products/ProductModel';
import screens from '../../navigation/screens';
import {CreatePostStackNavigatorParamList} from '../../navigation/CreatePostNavigator/types';

const initialValues: Partial<IProductModel> = {
  title: '',
  description: '',
  images: [],
  price: '',
};

// const validationSchema = yup.object({
//   title: yup.string().required('Title is required'),
//   description: yup
//     .string()
//     .min(20, 'Description must contain 20-100 characters.')
//     .max(100, 'Description must contain 20-100 characters.'),
//   price: yup.number().integer(),
//   images: yup.array(),
// });

const CreatePostScreen = () => {
  const store = useStore();
  const navigation =
    useNavigation<
      NavigationProp<CreatePostStackNavigatorParamList, 'CreatePost'>
    >();
  const formRef = useRef<FormikProps<Partial<IProductModel>>>(null);

  function onSubmit(
    values: Partial<IProductModel>,
    actions: FormikHelpers<Partial<IProductModel>>,
  ) {
    store.products.ownStore.createProduct.run(values);
    navigation.goBack();
    actions.resetForm();
  }
  useEffect(() => {
    navigation.setParams({onSubmit: () => formRef.current?.handleSubmit()});
  }, []);

  return (
    <ScrollView style={s.container}>
      <View style={s.contentContainer}>
        <Formik
          innerRef={formRef}
          initialValues={initialValues}
          onSubmit={onSubmit}
          // validationSchema={validationSchema}
        >
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <View style={s.keyInpormationContaine}>
                <Title title="Key information" />
                <MainInputField placeholder="Title" name="title" />
                <Title title="Description" />
                <MainInputField
                  placeholder="Description"
                  style={s.descriptionInput}
                  multiline={true}
                  name="description"
                />
              </View>
              <Photos />
              <PriceInput />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default observer(CreatePostScreen);
