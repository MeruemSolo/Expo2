import React from 'react';
import { FlatList, RefreshControl, View, StyleSheet } from 'react-native';
import LanguageItem from './components/LanguageItem';

const languages = [
  {
    id: '1',
    name: 'JavaScript',
    experience: '3 года опыта',
    logo: 'https://miladfathy.gallerycdn.vsassets.io/extensions/miladfathy/js-snippet/0.0.3/1620337479564/Microsoft.VisualStudio.Services.Icons.Default',
  },
  {
    id: '2',
    name: 'Python',
    experience: '2 года опыта',
    logo: 'https://avatars.mds.yandex.net/i?id=2151e41c7a7e7c3af6508806bdfffdf94f30a198-9181372-images-thumbs&n=13',
  },
];

const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={languages}
        renderItem={({ item }) => (
          <LanguageItem name={item.name} experience={item.experience} logo={item.logo} />
        )}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default App;