export class Cryptocurrency {
    id: string;
    symbol: string;
    name: string;
    nameId: string;
    rank: number;
    priceUsd: number;
    percentChange24h: number;
    percentChange1h: number;
    percentChange7d: number;
    priceBtc: number;
    marketCapUsd: number;
    volume24: number;
    volume24a: number;
    circulating: string;
    totalSupply: string;
    maxSupply: string;
  
    constructor(data: CryptoData) {
      this.id = data.id;
      this.symbol = data.symbol;
      this.name = data.name;
      this.nameId = data.nameid;
      this.rank = data.rank;
      this.priceUsd = parseFloat(data.price_usd);
      this.percentChange24h = parseFloat(data.percent_change_24h);
      this.percentChange1h = parseFloat(data.percent_change_1h);
      this.percentChange7d = parseFloat(data.percent_change_7d);
      this.priceBtc = parseFloat(data.price_btc);
      this.marketCapUsd = parseFloat(data.market_cap_usd);
      this.volume24 = data.volume24;
      this.volume24a = data.volume24a;
      this.circulating = data.csupply;
      this.totalSupply = data.tsupply;
      this.maxSupply = data.msupply;
    }
  
    get formattedPrice(): string {
      return `${this.priceUsd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
  
    get formattedMarketCap(): string {
      return `${this.marketCapUsd.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
    }
  
    get isPriceUp24h(): boolean {
      return this.percentChange24h > 0;
    }
  }