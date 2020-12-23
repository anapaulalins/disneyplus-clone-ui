import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {
  CarouselProfile,
  Container,
  ContainerGradient,
  ProfileImage,
  ProfileItem,
  ProfileTitle,
  UpdateProfileContent,
  UpdateProfileButton,
  UpdateProfileButtonText,
  AddProfileButton,
  AddProfileItem,
  AddProfileContent,
  AddProfileTitle,
  ProfileConfig,
  ProfileConfigButton,
  ProfileConfigTitle,
  ProfileConfigItem,
} from './styles';

import Avatar from '../../assets/little-mermaid.png';
import {ScrollView} from 'react-native-gesture-handler';

const Profile: React.FC = () => {
  return (
    <ContainerGradient colors={['#2d3145', '#1a1c29']}>
      <Container>
        <CarouselProfile>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ProfileItem>
              <ProfileImage source={Avatar} />
              <ProfileTitle>Ariel</ProfileTitle>
            </ProfileItem>

            <AddProfileContent>
              <AddProfileButton>
                <AddProfileItem>
                  <Icon name="plus" size={45} color="#fff" />
                </AddProfileItem>
              </AddProfileButton>
              <AddProfileTitle>Add Profile</AddProfileTitle>
            </AddProfileContent>
          </ScrollView>
        </CarouselProfile>
        <UpdateProfileContent>
          <UpdateProfileButton>
            <UpdateProfileButtonText>edit profiles</UpdateProfileButtonText>
          </UpdateProfileButton>
        </UpdateProfileContent>

        <ProfileConfig>
          <ProfileConfigItem>
            <ProfileConfigButton>
              <ProfileConfigTitle>Watchlist</ProfileConfigTitle>
            </ProfileConfigButton>
          </ProfileConfigItem>

          <ProfileConfigItem>
            <ProfileConfigButton>
              <ProfileConfigTitle>App Settings</ProfileConfigTitle>
            </ProfileConfigButton>
          </ProfileConfigItem>

          <ProfileConfigItem>
            <ProfileConfigButton>
              <ProfileConfigTitle>Account</ProfileConfigTitle>
            </ProfileConfigButton>
          </ProfileConfigItem>

          <ProfileConfigItem>
            <ProfileConfigButton>
              <ProfileConfigTitle>Legal</ProfileConfigTitle>
            </ProfileConfigButton>
          </ProfileConfigItem>

          <ProfileConfigItem>
            <ProfileConfigButton>
              <ProfileConfigTitle>Help</ProfileConfigTitle>
            </ProfileConfigButton>
          </ProfileConfigItem>

          <ProfileConfigItem>
            <ProfileConfigButton>
              <ProfileConfigTitle>Log Out</ProfileConfigTitle>
            </ProfileConfigButton>
          </ProfileConfigItem>
        </ProfileConfig>
      </Container>
    </ContainerGradient>
  );
};

export default Profile;
