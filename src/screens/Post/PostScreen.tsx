import React, { useState } from "react";
import { observer } from "mobx-react";
import { View, Share, Text, ScrollView, Linking } from "react-native";
import { useRoute } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import Touchable from "../../components/Touchable/Touchable";
import { useStore } from "../../stores/createStore";
import SellerInfo from "../../components/SellerInfo/SellerInfo";
import HeaderPost from "../../components/HeaderPost/HeaderPost";
import DotsCarousel from "../../components/DotsCarousel/DotsCarousel";
import ImagesCarousel from "../../components/ImagesCarousel/ImagesCarousel";
import CallAndMessageButtons from "../../components/CallAndMessageButtons/CallAndMessageButtons";
import s from "./styles";
import { TAB_BAR_HEIGHT_SIZE } from "../../styles/dimensions";

const PostScreen = () => {
  const [allDescriptionVisible, setAllDescriptionVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const route = useRoute();
  const store = useStore();

  const product = route.params.product;

  const isOwnerPost = store.viewer.userId === product.ownerId;

  const timeCreatedAt = `${new Date(+product.createdAt).getHours()}:${new Date(
    +product.createdAt
  ).getMinutes()}`;

  async function onShare() {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  function openCall(phoneNumber) {
    if (phoneNumber) {
      Linking.openURL(`tel:${phoneNumber}`);
    } else {
      Toast.show({
        type: "success",
        text1: "User don't have phone number ",
      });
    }
  }

  return (
    <View style={s.container}>
      <HeaderPost
        product={product}
        isOwnerPost={isOwnerPost}
        onShare={onShare}
      />
      <ScrollView style={[s.contentContainer]}>
        <View>
          <ImagesCarousel list={product.photos} setIndex={setIndex} />
          <DotsCarousel list={product.photos} index={index} />
          <LinearGradient
            colors={["transparent", "rgba(0, 0, 0, 0.2)", "rgba(0,0,0,0.6)"]}
            style={s.titleAndPriceContainer}
          >
            <View>
              <Text style={s.title}>{product.title}</Text>
              <Text style={s.timeAndLocation}>
                {timeCreatedAt}
                {`   `}
                <MaterialIcons name="location-on" size={18} color="gray" />
                {product.location}
              </Text>
            </View>
            <Text style={s.price}>{`$${product.price}`}</Text>
          </LinearGradient>
        </View>
        <View style={s.descriptionContainer}>
          <View>
            <Text style={s.descrioption}>
              {allDescriptionVisible
                ? product.description
                : product.description.slice(0, 145)}
            </Text>
            <Touchable
              isOpacity
              onPress={() => setAllDescriptionVisible(!allDescriptionVisible)}
            >
              {product.description.length > 145 && (
                <Text style={s.readMore}>
                  {allDescriptionVisible ? "Hide more..." : "Read more..."}
                </Text>
              )}
            </Touchable>
          </View>
          <View style={s.horizontalLine} />
          <SellerInfo product={product} />
        </View>
      </ScrollView>
      <Toast position="bottom" bottomOffset={TAB_BAR_HEIGHT_SIZE * 2} />
      {!isOwnerPost && (
        <CallAndMessageButtons product={product} openCall={openCall} />
      )}
    </View>
  );
};
export default observer(PostScreen);
