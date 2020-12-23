import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const ContainerGradient = styled(LinearGradient)`
  flex: 1;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 15px;
`;

export const CarouselProfile = styled.View`
  margin-top: 60px;
  width: 100%;
`;

export const ProfileItem = styled.View`
  align-items: center;
  margin-right: 20px;
`;

export const ProfileImage = styled.Image`
  width: 90px;
  height: 90px;
  border-width: 2px;
  border-color: #e2e2e6;
  border-radius: 45px;
`;

export const ProfileTitle = styled.Text`
  font-size: 20px;
  color: #f9f9fb;
  font-weight: bold;
  letter-spacing: 1px;
  margin-top: 3px;
`;

export const AddProfileContent = styled.View``;

export const AddProfileButton = styled.TouchableOpacity``;

export const AddProfileItem = styled.View`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  background-color: rgba(160, 161, 165, 0.5);
  align-items: center;
  justify-content: center;
`;

export const AddProfileTitle = styled.Text`
  font-size: 15px;
  color: #b1b3ba;
  font-weight: bold;
  letter-spacing: 1px;
  margin-top: 10px;
`;

export const UpdateProfileContent = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 40px;
`;

export const UpdateProfileButton = styled.TouchableOpacity`
  background-color: #3f4249;
  align-items: center;
  width: 170px;
  padding: 13px;
  border-radius: 4px;
`;

export const UpdateProfileButtonText = styled.Text`
  text-transform: uppercase;
  color: #eae9ec;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const ProfileConfig = styled.View`
  width: 100%;
  margin-top: 30px;
`;

export const ProfileConfigItem = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #3b3c46;
`;

export const ProfileConfigButton = styled.TouchableOpacity`
  padding: 15px;
`;

export const ProfileConfigTitle = styled.Text`
  font-size: 16px;
  color: #eeeef0;
  font-weight: bold;
`;
