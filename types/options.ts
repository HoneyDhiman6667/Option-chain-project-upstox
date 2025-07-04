export interface OptionGreeks {
  vega: number
  theta: number
  gamma: number
  delta: number
  iv: number
  pop: number
}

export interface MarketData {
  ltp: number
  volume: number
  oi: number
  close_price: number
  bid_price: number
  bid_qty: number
  ask_price: number
  ask_qty: number
  prev_oi: number
}

export interface OptionData {
  instrument_key: string
  market_data: MarketData
  option_greeks: OptionGreeks
}

export interface OptionsChainData {
  expiry: string
  pcr: number
  strike_price: number
  underlying_key: string
  underlying_spot_price: number
  call_options: OptionData
  put_options: OptionData
}

export interface ApiResponse {
  status: string
  data: OptionsChainData[]
}

export interface SymbolInfo {
  symbol: string
  name: string
  instrument_key: string
  lot_size: number // Add lot size for each symbol
}
