import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import "./index.scss";
import Taro from "@tarojs/taro";
import { createQuery } from "react-query-kit";
import { useQuery } from "@tanstack/react-query";

export const useSingleImg = createQuery({
  primaryKey: "getSingleImg",
  queryFn: () =>
    Taro.request({ url: "https://api.waifu.pics/sfw/waifu", method: "GET" }),
  onSuccess(data) {
    console.log("test");
  },
});

// export const useSingleImg = () =>
//   useQuery({
//     queryKey: ["getSingleImg"],
//     queryFn: () =>
//       Taro.request({ url: "https://api.waifu.pics/sfw/waifu", method: "GET" }),
//     onSuccess(data) {
//       console.log("test");
//     },
//   });

export default function Index() {
  useSingleImg();
  return (
    <View className="index">
      <Text>Hello world!</Text>
    </View>
  );
}
