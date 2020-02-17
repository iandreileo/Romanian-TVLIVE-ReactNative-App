import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { SectionGrid, FlatGrid } from 'react-native-super-grid';
import Live from './Video';
class Menu extends React.Component {
  render() {
    const items = [
      { name: 'TVR1', code: '#1abc9c', link: 'http://89.136.209.26:1935/liveedge/TVR1.stream/playlist.m3u8', uri: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0012/3060/brand.gif?itok=NUDdiwVs'},
      { name: 'PROTV NEWS', code: '#3498db', link: 'https://vid.hls.protv.ro/protvnews/protvnews.m3u8?1', uri: 'https://vignette.wikia.nocookie.net/logopedia/images/1/14/Pro_TV_News_logo_2012.jpg/'  },
      { name: 'REALITATEA', code: '#34495e', link: 'https://livestream.realitatea.net/livestream/liverealitatea.stream/playlist.m3u8', uri: 'https://upload.wikimedia.org/wikipedia/ro/6/6a/Logo_realitatea_plus_44754200.jpg'  },
      { name: 'B1TV', code: '#27ae60', link: 'http://stream.adunity.com/b1/b1.m3u8', uri: 'https://www.cotidianul.ro/wp-content/uploads/2018/01/08/1305802151b1tv-1000x600.jpg'  },
      { name: 'DIGI24', code: '#8e44ad', link: 'http://edge76.rcs-rds.ro/digi24edge/smil:digi24.smil/playlist.m3u8', uri: 'https://www.madeinrosiamontana.ro/wp-content/uploads/2017/08/digi24.ro-logo.png'  },
      { name: 'AntenaStars', code: '#95a5a6', link: 'http://stream1.antenaplay.ro/live/smil:AntenaMonden.smil/playlist.m3u8', uri: 'https://www.cancan.ro/wp-content/uploads/2020/01/unnamed.jpg'  },
      { name: 'TVR2', code: '#bdc3c7', link: 'http://89.136.209.26:1935/liveedge/TVR2.stream/playlist.m3u8', uri: 'https://www.tvrplus.ro/logos/tvr-2.jpg'  },
      { name: 'UTV', code: '#f1c40f', link: 'http://edge76.rcs-rds.ro/utvedge/utvlivehls/index.m3u8', uri: 'https://upload.wikimedia.org/wikipedia/ro/0/03/U-TV-HD.png'  },
      { name: 'KISSTV', code: '#e74c3c', link: 'http://46.20.136.59/live3/_definst_/kiss/playlist.m3u8', uri: 'http://3.bp.blogspot.com/-UowRH70TOfg/TYM7qR4MoDI/AAAAAAAAAAU/6pFyQlauml0/s320/sigla-kiss.jpg'  },
      { name: 'MOOZDANCE', code: '#bdc3c7', link: 'http://telekomtv-ro.akamaized.net/shls/LIVE$MoozDanceHD/14.m3u8/Level(545259)?start=LIVE&end=END', uri: 'https://pl.scdn.co/images/pl/default/278774ab57db66efcaf795b1ed00113b06f91e64'  },
      { name: 'DiasporaTV', code: '#d35400', link: 'http://diasporamedia.go.ro:1935/diasporatv/live/playlist.m3u8', uri: 'http://www.tvdiaspora.ro/uploads/custom-logo.png'  },

    
      
    ];
    return (

            <SectionGrid
            itemDimension={120}
            // staticDimension={300}
            // fixed
            // spacing={20}
            sections={[
              {
                title: 'Canale frecvente',
                data: items.slice(0, 7),
                backgroundColor: '#86d1f6'
              },
              {
                title: 'Muzica',
                data: items.slice(7, 10),
                backgroundColor: '#86d1f6'
              },
              {
                title: 'Altele',
                data: items.slice(10, 13),
                backgroundColor: '#86d1f6'
              },

            ]}
            style={styles.gridView}
            renderItem={({ item, section, index }) => (
                <TouchableOpacity onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    this.props.navigation.navigate('Live', {
                      link: item.link
                    });
                  }
                }>
                    <View 
        style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Image
          style={{width: 80, height: 70, borderRadius: 15,}}
          source={{uri: item.uri}}
        />
        <Text style={styles.itemName}>{item.name} </Text>
        {/* <Text style={styles.itemCode}>{item.code}</Text> */}
        </View>
                </TouchableOpacity>
            )}
            renderSectionHeader={({ section }) => (
              <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
          />



    );
  
  }
   
}
 
const styles = StyleSheet.create({
    gridView: {
        marginTop: 0,
        flex: 1,
      },
      itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
      },
      itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
      },
      itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
      },
      sectionHeader: {
        flex: 1,
        fontSize: 15,
        fontWeight: '600',
        alignItems: 'center',
        backgroundColor: '#636e72',
        color: 'white',
        padding: 10,
      },
});
 

export default Menu;