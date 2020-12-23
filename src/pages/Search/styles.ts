import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const ContainerGradient = styled(LinearGradient)`
  flex: 1;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 10px;
`;

export const SearchContent = styled.View`
  background-color: #fff;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`;

export const InputSearch = styled.TextInput`
  flex: 1;
  margin-left: 5px;
`;

export const Title = styled.Text`
  margin-top: 30px;
  font-size: 30px;
  color: #f8f9fb;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const ExploreContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const ExploreItem = styled.View`
  align-items: center;
  justify-content: center;
  background-color: rgba(23, 25, 37, 0.7);
  width: 30%;
  height: 100px;
  border-radius: 5px;
`;

export const ExploreTitle = styled.Text`
  color: #acaeb2;
  font-size: 15px;
  margin-top: 5px;
`;

export const CollectionContainer = styled.View`
  margin-top: 20px;
  width: 100%;
  padding-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const CollectionItem = styled.View`
  width: 50%;
  height: 270px;
  margin: 5px 0;
`;

export const CollectionImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;
