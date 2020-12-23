/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import SafeAreaViewHeader from 'react-native-safe-area-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Animated} from 'react-native';
import api_key from '../../config/api_key';
import Icon from 'react-native-vector-icons/Feather';
import IconStar from 'react-native-vector-icons/FontAwesome';
import IconFilm from 'react-native-vector-icons/Fontisto';
import {
  Container,
  InputSearch,
  Title,
  ContainerGradient,
  ExploreContainer,
  ExploreItem,
  ExploreTitle,
  CollectionContainer,
  CollectionImage,
  CollectionItem,
  SearchContent,
} from './styles';

interface PropsCollection {
  id: number;
  original_title: string;
  poster_path: string;
}

const Search: React.FC = () => {
  const [collection, setCollection] = useState<PropsCollection[]>([]);

  const api_url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key.API_KEY}&sort_by=popularity.desc&page=15`;

  useEffect(() => {
    const getCollection = async () => {
      const {results} = await fetch(api_url).then((data) => data.json());
      setCollection(results);
    };
    getCollection();
  }, [api_url]);

  const scrollY = useRef(new Animated.Value(0)).current;

  const HEADER_HEIGHT = 120;

  const inset = useSafeAreaInsets();

  const Height = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [HEADER_HEIGHT, inset.top + 45],
    extrapolate: 'clamp',
  });

  return (
    <ContainerGradient colors={['#2c3145', '#1a1c29']}>
      <Container>
        <SafeAreaViewHeader forceInset={{top: 'always'}}>
          <Animated.View
            style={{
              height: Height,
              justifyContent: 'flex-end',
              paddingBottom: 10,
            }}>
            <SearchContent>
              <Icon name="search" size={25} />
              <InputSearch
                placeholder="Search"
                placeholderTextColor="#17191f"
              />
            </SearchContent>
          </Animated.View>
        </SafeAreaViewHeader>

        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={{flex: 1, padding: 5}}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {contentOffset: {y: scrollY}},
              },
            ],
            {useNativeDriver: false},
          )}>
          <Title>Explore</Title>

          <ExploreContainer>
            <ExploreItem>
              <IconStar name="star" size={25} color="#fff" />
              <ExploreTitle>Originals</ExploreTitle>
            </ExploreItem>

            <ExploreItem>
              <IconFilm name="film" size={25} color="#fff" />
              <ExploreTitle>Movies</ExploreTitle>
            </ExploreItem>

            <ExploreItem>
              <Icon name="tv" size={25} color="#fff" />
              <ExploreTitle>Series</ExploreTitle>
            </ExploreItem>
          </ExploreContainer>

          <CollectionContainer>
            {collection.map((collection) => (
              <CollectionItem key={collection.id}>
                <CollectionImage
                  source={{
                    uri: `https://image.tmdb.org/t/p/w440_and_h660_face${collection.poster_path}`,
                  }}
                  resizeMode="contain"
                />
              </CollectionItem>
            ))}
          </CollectionContainer>
        </ScrollView>
      </Container>
    </ContainerGradient>
  );
};

export default Search;
