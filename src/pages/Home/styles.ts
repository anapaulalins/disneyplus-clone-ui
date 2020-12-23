import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const ContainerGradient = styled(LinearGradient)`
  flex: 1;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 10px;
`;

export const Header = styled.View`
  margin-top: 10px;
  align-items: center;
  height: 80px;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

export const SwiperContainerImage = styled.View`
  align-items: center;
`;

export const ImageSwiper = styled.Image`
  width: 99%;
  height: 220px;
  border-radius: 5px;
`;

export const Companies = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
  justify-content: space-around;
`;
export const CompaniesItem = styled(LinearGradient)`
  width: 65px;
  height: 60px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: #303b56;
`;

export const CompaniesImage = styled.Image`
  max-width: 60px;
  max-height: 60px;
`;

export const Carousel = styled.View`
  padding-bottom: 20px;
`;

export const CarouselContainer = styled.View`
  margin-top: 15px;
`;

export const TitleCorousel = styled.Text`
  font-size: 15px;
  color: #c8c8ca;
  margin-left: 5px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Loading = styled.ActivityIndicator`
  margin-top: 30px;
`;
