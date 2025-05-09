import { StyleSheet } from 'react-native';

const StylesComponents = {
  CryptoDetail: StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      alignItems: 'center',
      paddingVertical: 24,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    symbol: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    name: {
      fontSize: 16,
      color: '#666',
      marginBottom: 8,
    },
    priceContainer: {
      alignItems: 'center',
      marginBottom: 4,
    },
    priceLabel: {
      fontSize: 14,
      color: '#666',
      marginBottom: 2,
    },
    price: {
      fontSize: 28,
      fontWeight: 'bold',
    },
    change: {
      fontSize: 16,
    },
    positive: {
      color: '#4CAF50',
    },
    negative: {
      color: '#F44336',
    },
    section: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 12,
    },
    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 8,
    },
    infoLabel: {
      fontSize: 16,
      color: '#666',
    },
    infoValue: {
      fontSize: 16,
      fontWeight: '500',
    },
  }),
  CryptoItem: StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
      backgroundColor: '#fff',
    },
    leftContainer: {
      flex: 1,
    },
    rightContainer: {
      alignItems: 'flex-end',
      marginRight: 10,
    },
    symbol: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    name: {
      color: '#666',
      marginTop: 4,
    },
    price: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    change: {
      marginTop: 4,
    },
    positive: {
      color: '#4CAF50',
    },
    negative: {
      color: '#F44336',
    },
    indicatorContainer: {
      paddingLeft: 8,
    },
  }),
  CryptoList: StyleSheet.create({
    centerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    errorText: {
      fontSize: 16,
      color: '#F44336',
      textAlign: 'center',
      marginBottom: 8,
    },
    retryText: {
      fontSize: 16,
      color: '#2196F3',
      textAlign: 'center',
    },
    noResultsText: {
      fontSize: 16,
      color: '#666',
      textAlign: 'center',
    },
  }),
  ExchangeRate: StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 12,
      backgroundColor: '#f8f8f8',
      borderRadius: 8,
      marginBottom: 8,
    },
    currencyInfo: {
      flex: 1,
    },
    symbol: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    name: {
      fontSize: 14,
      color: '#666',
    },
    rateContainer: {
      alignItems: 'flex-end',
    },
    rateLabel: {
      fontSize: 12,
      color: '#666',
    },
    rateValue: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  }),
  FilterOptions: StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
      backgroundColor: '#f8f8f8',
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    filterButton: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 4,
      backgroundColor: '#e0e0e0',
    },
    filterText: {
      fontWeight: '500',
    },
  }),
  SearchBar: StyleSheet.create({
    container: {
      marginHorizontal: 16,
      marginVertical: 10,
    },
    input: {
      backgroundColor: '#f5f5f5',
      padding: 12,
      borderRadius: 8,
      fontSize: 16,
    }
  }),
  TopCurrencies: StyleSheet.create({
    container: {
      marginVertical: 8,
      paddingTop: 8,
      paddingBottom: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
      paddingHorizontal: 16,
    },
    scrollContent: {
      paddingLeft: 16,
      paddingRight: 8,
    },
    card: {
      width: 160,
      marginRight: 8,
      borderRadius: 8,
      backgroundColor: '#f8f8f8',
      borderWidth: 1,
      borderColor: '#e0e0e0',
      overflow: 'hidden',
    },
    exchangeRate: {
      height: 80,
      borderBottomWidth: 1,
      borderBottomColor: '#e9e9e9',
      borderRadius: 0,
      backgroundColor: 'transparent',
    },
    indicatorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 6,
      backgroundColor: '#f0f0f0',
    },
    indicatorText: {
      fontSize: 12,
      color: '#666',
      marginLeft: 4,
    }
  })
};


export default StylesComponents;