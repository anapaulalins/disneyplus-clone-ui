/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useRef} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import api_key from '../../config/api_key';
import CarouselContainerItem from '../../components/Carousel';
import {Animated, Dimensions, Image, View} from 'react-native';
import {
  Container,
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
  {id: '0', path: null},
  {id: '1', path: violetta},
  {id: '2', path: ladyTramp},
  {id: '3', path: frozen},
  {id: '4', path: null},
];

const api_url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key.API_KEY}&sort_by=popularity.desc&page=2`;

const Home: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const scrollX = useRef(new Animated.Value(0)).current;
  const {width} = Dimensions.get('screen');

  const SIZE_ITEM = width * 0.85;

  useEffect(() => {
    const getMovies = async () => {
      const {results} = await fetch(api_url).then((data) => data.json());
      setMovies(results);
      setLoading(false);
    };
    getMovies();
  }, [loading]);

  return (
    <>
      <ContainerGradient colors={['#2c3145', '#1a1c29']}>
        <Container>
          <Header>
            <Logo source={logo} />
          </Header>
          <ScrollView style={{flex: 1}}>
            <Animated.FlatList
              showsHorizontalScrollIndicator={false}
              data={carouselArray}
              keyExtractor={(item) => item.id}
              horizontal
              contentContainerStyle={{alignItems: 'center'}}
              snapToInterval={SIZE_ITEM}
              decelerationRate="normal"
              bounces={false}
              getItemLayout={(item, index) => ({
                length: SIZE_ITEM,
                offset: SIZE_ITEM,
                index,
              })}
              initialScrollIndex={3}
              onScroll={Animated.event(
                [
                  {
                    nativeEvent: {contentOffset: {x: scrollX}},
                  },
                ],
                {useNativeDriver: false},
              )}
              scrollEventThrottle={16}
              renderItem={({item, index}) => {
                if (!item.path) {
                  return (
                    <View
                      style={{
                        width: (width - SIZE_ITEM) / 2,
                      }}
                    />
                  );
                }

                const scale = scrollX.interpolate({
                  inputRange: [
                    (index - 2) * SIZE_ITEM,
                    (index - 1) * SIZE_ITEM,
                    index * SIZE_ITEM,
                  ],
                  outputRange: [0.9, 1, 0.9],
                  extrapolate: 'clamp',
                });

                return (
                  <View
                    style={{
                      width: SIZE_ITEM,
                      height: 250,
                    }}>
                    <Animated.View
                      style={{
                        marginHorizontal: 0,
                        alignItems: 'center',
                        transform: [{scale}],
                      }}>
                      <Image
                        source={item.path}
                        style={{
                          width: '100%',
                          borderRadius: 5,
                          height: '100%',
                        }}
                      />
                    </Animated.View>
                  </View>
                );
              }}
            />
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
    </>
  );
};

export default Home;
