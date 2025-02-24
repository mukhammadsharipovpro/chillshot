import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import ChillShotHeader from '../components/ChillShotHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
      </View>

      <Text style={styles.matchTime}>{time}</Text>

      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <ChillShotHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('NBA', '02.04 22:30', 'Boston Celtics \n' + 'Chicago Bulls')}
        {renderBroadcast('EuroLeague', '04.04 20:00', 'Real Madrid \n' + 'Anadolu Efes')}
        {renderBroadcast('NCAA', '06.04 19:00', 'Duke Blue Devils \n' + 'North Carolina Tar Heels')}
        {renderBroadcast('WNBA', '04.04 21:15', 'Las Vegas Aces \n' + 'New York Liberty')}
        {renderBroadcast('Basketball', '10.04 18:45', 'AEK Athens \n' + 'Telekom Baskets Bonn')}
        {renderBroadcast('Liga ACB', '12.04 17:30', 'Barcelona \n' + 'Valencia')}
        {renderBroadcast('VTB United', '14.04 16:00', 'Khimki \n' + 'UNICS Kazan')}
        {renderBroadcast('NBL', '16.04 15:00', 'Perth Wildcats \n' + 'Sydney Kings')}
        {renderBroadcast('PBA', '18.04 14:30', 'San Miguel Beermen \n' + 'TNT Tropang Giga')}
        {renderBroadcast('Chinese CBA', '20.04 13:00', 'Guangdong Southern Tigers \n' + 'Liaoning Flying Leopards')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    borderColor: COLORS.main,
    borderWidth: 2,
    paddingLeft: 20,
  },
  league: {
    fontSize: 20,
    fontFamily: FONTS.black,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.main,
    width: '60%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.black,
    marginTop: 5,
    marginLeft: 5,
    opacity: 0.7,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    margin: 20,
    textAlign: 'center',
  },
});
