import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  DoctorHome: undefined;
  NewDO: undefined;
  MyDO: undefined;
  Form: undefined;
  Continue: undefined;
};

export type HomePageProps = NativeStackScreenProps<
  RootStackParamList, 
  "Home"
>;

export type LoginPageProps = NativeStackScreenProps<
  RootStackParamList,
  "Login"
>;

export type DoctorHomePageProps = NativeStackScreenProps<
  RootStackParamList,
  "DoctorHome"
>;

export type NewDOPageProps = NativeStackScreenProps<
  RootStackParamList,
  "NewDO"
>;

export type FormPageProps = NativeStackScreenProps<
  RootStackParamList,
  "Form"
>;

export type ContinuePageProps = NativeStackScreenProps<
  RootStackParamList,
  "Continue"
>;

export type RootTabParamList = {
  DoctorHomePage: undefined;
  MyEDO: undefined;
  Pending: undefined;
  Account: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
