import React, {useEffect, useState} from 'react';
import Swiper from 'react-native-swiper';
import {ScrollView} from 'react-native-gesture-handler';
import api_key from '../../config/api_key';
import CarouselContainerItem from '../../components/Carousel';

import {
  Container,
  ImageSwiper,
  SwiperContainerImage,
  Header,
  Logo,
  Carousel,
  TitleCorousel,
  CarouselContainer,
  Companies,
  CompaniesImage,
  CompaniesItem,
  Loading,
  ContainerGradient,
} from './styles';

import ladyTramp from '../../assets/lady-tramp.png';
import frozen from '../../assets/frozen.jpg';
import violetta from '../../assets/violetta.jpg';
import logo from '../../assets/disney.png';
import disneyLogo from '../../assets/disneyLogo.png';
import marvel from '../../assets/marvel.png';
import pixarLogo from '../../assets/pixar-logo.png';
import starWarsLogo from '../../assets/StarWars.png';
import nationalLogo from '../../assets/nationalLogo.png';

const carouselArray = [
  {id: 0, path: ladyTramp},
  {id: 1, path: frozen},
  {id: 2, path: violetta},
];

const api_url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key.API_KEY}&sort_by=popularity.desc&page=2`;

const Home: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      const {results} = await fetch(api_url).then((data) => data.json());
      setMovies(results);
      setLoading(false);
    };
    getMovies();
  }, [loading]);

  return (
    <ContainerGradient colors={['#2c3145', '#1a1c29']}>
      <Container>
        <Header>
          <Logo source={logo} />
        </Header>
        <ScrollView style={{flex: 1}}>
          <Swiper
            autoplayTimeout={5}
            dotColor="transparent"
            activeDotColor="transparent"
            autoplay
            style={{height: 220}}>
            {carouselArray.map((image) => (
              <SwiperContainerImage key={image.id}>
                <ImageSwiper source={image.path} />
              </SwiperContainerImage>
            ))}
          </Swiper>

          <Companies>
            <CompaniesItem colors={['#121f54', '#074a9e']}>
              <CompaniesImage source={disneyLogo} resizeMode="contain" />
            </CompaniesItem>
            <CompaniesItem colors={['#121f54', '#074a9e']}>
              <CompaniesImage source={pixarLogo} resizeMode="contain" />
            </CompaniesItem>
            <CompaniesItem colors={['#121f54', '#074a9e']}>
              <CompaniesImage source={marvel} resizeMode="contain" />
            </CompaniesItem>
            <CompaniesItem colors={['#121f54', '#074a9e']}>
              <CompaniesImage source={starWarsLogo} resizeMode="contain" />
            </CompaniesItem>
            <CompaniesItem colors={['#121f54', '#074a9e']}>
              <CompaniesImage source={nationalLogo} resizeMode="contain" />
            </CompaniesItem>
          </Companies>

          <Carousel>
            <CarouselContainer>
              <TitleCorousel>Recommended For You</TitleCorousel>
              {loading && <Loading size="large" color="#22bcbf" />}
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <CarouselContainerItem movies={movies} />
              </ScrollView>
            </CarouselContainer>

            <CarouselContainer>
              <TitleCorousel>New to Disney+</TitleCorousel>
              {loading && <Loading size="large" color="#22bcbf" />}
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <CarouselContainerItem movies={movies} />
              </ScrollView>
            </CarouselContainer>
          </Carousel>
        </ScrollView>
      </Container>
    </ContainerGradient>
  );
};

export default Home;
