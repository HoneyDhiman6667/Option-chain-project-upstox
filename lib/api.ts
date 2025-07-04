import type { OptionsChainData, SymbolInfo } from "@/types/options"

// Your Upstox API configuration
const UPSTOX_API_KEY = "3d4640a0-6cd4-4021-a22b-0cdfe08ef8c5"
const UPSTOX_ACCESS_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJrZXlfaWQiOiJza192MS4wIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiIzM0M2QUwiLCJqdGkiOiI2ODY3NzgxZDE4NzU5ZDY1ZGJhMjIwMjIiLCJpc011bHRpQ2xpZW50IjpmYWxzZSwiaXNQbHVzUGxhbiI6dHJ1ZSwiaWF0IjoxNzUxNjExNDIxLCJpc3MiOiJ1ZGFwaS1nYXRld2F5LXNlcnZpY2UiLCJleHAiOjE3NTE2NjY0MDB9.qR9Auy6USu2VdFD5HJTjGEco6cI_Y7TieQeSBH4OZeg"
const BASE_URL = "https://api.upstox.com/v2"

// FNO Symbols list with proper lot sizes and instrument keys
export const getFNOSymbols = (): SymbolInfo[] => [
  { symbol: "NIFTY", name: "Nifty 50", instrument_key: "NSE_INDEX|Nifty 50", lot_size: 25 },
  { symbol: "BANKNIFTY", name: "Bank Nifty", instrument_key: "NSE_INDEX|Nifty Bank", lot_size: 15 },
  { symbol: "FINNIFTY", name: "Fin Nifty", instrument_key: "NSE_INDEX|Nifty Financial Services", lot_size: 25 },
  { symbol: "MIDCPNIFTY", name: "Nifty Midcap Select", instrument_key: "NSE_INDEX|Nifty Midcap Select", lot_size: 50 },
  { symbol: "AARTIIND", name: "Aarti Industries", instrument_key: "NSE_EQ|AARTIIND", lot_size: 1000 },
  { symbol: "ABB", name: "ABB India", instrument_key: "NSE_EQ|ABB", lot_size: 250 },
  { symbol: "ABBOTINDIA", name: "Abbott India", instrument_key: "NSE_EQ|ABBOTINDIA", lot_size: 125 },
  { symbol: "ABCAPITAL", name: "Aditya Birla Capital", instrument_key: "NSE_EQ|ABCAPITAL", lot_size: 2000 },
  { symbol: "ABFRL", name: "Aditya Birla Fashion", instrument_key: "NSE_EQ|ABFRL", lot_size: 1250 },
  { symbol: "ACC", name: "ACC Limited", instrument_key: "NSE_EQ|ACC", lot_size: 250 },
  { symbol: "ADANIENT", name: "Adani Enterprises", instrument_key: "NSE_EQ|ADANIENT", lot_size: 250 },
  { symbol: "ADANIPORTS", name: "Adani Ports", instrument_key: "NSE_EQ|ADANIPORTS", lot_size: 1000 },
  { symbol: "ALKEM", name: "Alkem Laboratories", instrument_key: "NSE_EQ|ALKEM", lot_size: 250 },
  { symbol: "AMBUJACEM", name: "Ambuja Cements", instrument_key: "NSE_EQ|AMBUJACEM", lot_size: 1000 },
  { symbol: "APOLLOHOSP", name: "Apollo Hospitals", instrument_key: "NSE_EQ|APOLLOHOSP", lot_size: 125 },
  { symbol: "APOLLOTYRE", name: "Apollo Tyres", instrument_key: "NSE_EQ|APOLLOTYRE", lot_size: 1000 },
  { symbol: "ASHOKLEY", name: "Ashok Leyland", instrument_key: "NSE_EQ|ASHOKLEY", lot_size: 2500 },
  { symbol: "ASIANPAINT", name: "Asian Paints", instrument_key: "NSE_EQ|ASIANPAINT", lot_size: 250 },
  { symbol: "ASTRAL", name: "Astral Limited", instrument_key: "NSE_EQ|ASTRAL", lot_size: 250 },
  { symbol: "ATUL", name: "Atul Limited", instrument_key: "NSE_EQ|ATUL", lot_size: 125 },
  { symbol: "AUBANK", name: "AU Small Finance Bank", instrument_key: "NSE_EQ|AUBANK", lot_size: 1000 },
  { symbol: "AUROPHARMA", name: "Aurobindo Pharma", instrument_key: "NSE_EQ|AUROPHARMA", lot_size: 500 },
  { symbol: "AXISBANK", name: "Axis Bank", instrument_key: "NSE_EQ|AXISBANK", lot_size: 1000 },
  { symbol: "BAJAJ-AUTO", name: "Bajaj Auto", instrument_key: "NSE_EQ|BAJAJ-AUTO", lot_size: 125 },
  { symbol: "BAJAJFINSV", name: "Bajaj Finserv", instrument_key: "NSE_EQ|BAJAJFINSV", lot_size: 125 },
  { symbol: "BAJFINANCE", name: "Bajaj Finance", instrument_key: "NSE_EQ|BAJFINANCE", lot_size: 125 },
  { symbol: "BALKRISIND", name: "Balkrishna Industries", instrument_key: "NSE_EQ|BALKRISIND", lot_size: 250 },
  { symbol: "BALRAMCHIN", name: "Balrampur Chini", instrument_key: "NSE_EQ|BALRAMCHIN", lot_size: 1000 },
  { symbol: "BANDHANBNK", name: "Bandhan Bank", instrument_key: "NSE_EQ|BANDHANBNK", lot_size: 2500 },
  { symbol: "BANKBARODA", name: "Bank of Baroda", instrument_key: "NSE_EQ|BANKBARODA", lot_size: 2500 },
  { symbol: "BATAINDIA", name: "Bata India", instrument_key: "NSE_EQ|BATAINDIA", lot_size: 500 },
  { symbol: "BEL", name: "Bharat Electronics", instrument_key: "NSE_EQ|BEL", lot_size: 2000 },
  { symbol: "BERGEPAINT", name: "Berger Paints", instrument_key: "NSE_EQ|BERGEPAINT", lot_size: 1000 },
  { symbol: "BHARATFORG", name: "Bharat Forge", instrument_key: "NSE_EQ|BHARATFORG", lot_size: 500 },
  { symbol: "BHARTIARTL", name: "Bharti Airtel", instrument_key: "NSE_EQ|BHARTIARTL", lot_size: 1000 },
  { symbol: "BHEL", name: "BHEL", instrument_key: "NSE_EQ|BHEL", lot_size: 5000 },
  { symbol: "BIOCON", name: "Biocon Limited", instrument_key: "NSE_EQ|BIOCON", lot_size: 1250 },
  { symbol: "BOSCHLTD", name: "Bosch Limited", instrument_key: "NSE_EQ|BOSCHLTD", lot_size: 125 },
  { symbol: "BPCL", name: "BPCL", instrument_key: "NSE_EQ|BPCL", lot_size: 1000 },
  { symbol: "BRITANNIA", name: "Britannia Industries", instrument_key: "NSE_EQ|BRITANNIA", lot_size: 250 },
  { symbol: "BSOFT", name: "Birlasoft Limited", instrument_key: "NSE_EQ|BSOFT", lot_size: 1000 },
  { symbol: "CANBK", name: "Canara Bank", instrument_key: "NSE_EQ|CANBK", lot_size: 5000 },
  { symbol: "CANFINHOME", name: "Can Fin Homes", instrument_key: "NSE_EQ|CANFINHOME", lot_size: 500 },
  { symbol: "CHAMBLFERT", name: "Chambal Fertilizers", instrument_key: "NSE_EQ|CHAMBLFERT", lot_size: 1000 },
  { symbol: "CHOLAFIN", name: "Cholamandalam Finance", instrument_key: "NSE_EQ|CHOLAFIN", lot_size: 500 },
  { symbol: "CIPLA", name: "Cipla Limited", instrument_key: "NSE_EQ|CIPLA", lot_size: 500 },
  { symbol: "COALINDIA", name: "Coal India", instrument_key: "NSE_EQ|COALINDIA", lot_size: 2000 },
  { symbol: "COFORGE", name: "Coforge Limited", instrument_key: "NSE_EQ|COFORGE", lot_size: 125 },
  { symbol: "COLPAL", name: "Colgate Palmolive", instrument_key: "NSE_EQ|COLPAL", lot_size: 250 },
  { symbol: "CONCOR", name: "CONCOR", instrument_key: "NSE_EQ|CONCOR", lot_size: 1000 },
  { symbol: "COROMANDEL", name: "Coromandel International", instrument_key: "NSE_EQ|COROMANDEL", lot_size: 500 },
  { symbol: "CROMPTON", name: "Crompton Greaves", instrument_key: "NSE_EQ|CROMPTON", lot_size: 1000 },
  { symbol: "CUB", name: "City Union Bank", instrument_key: "NSE_EQ|CUB", lot_size: 2500 },
  { symbol: "CUMMINSIND", name: "Cummins India", instrument_key: "NSE_EQ|CUMMINSIND", lot_size: 250 },
  { symbol: "DABUR", name: "Dabur India", instrument_key: "NSE_EQ|DABUR", lot_size: 1000 },
  { symbol: "DALBHARAT", name: "Dalmia Bharat", instrument_key: "NSE_EQ|DALBHARAT", lot_size: 250 },
  { symbol: "DEEPAKNTR", name: "Deepak Nitrite", instrument_key: "NSE_EQ|DEEPAKNTR", lot_size: 250 },
  { symbol: "DIVISLAB", name: "Divi's Laboratories", instrument_key: "NSE_EQ|DIVISLAB", lot_size: 125 },
  { symbol: "DIXON", name: "Dixon Technologies", instrument_key: "NSE_EQ|DIXON", lot_size: 125 },
  { symbol: "DLF", name: "DLF Limited", instrument_key: "NSE_EQ|DLF", lot_size: 1000 },
  { symbol: "DRREDDY", name: "Dr Reddy's Labs", instrument_key: "NSE_EQ|DRREDDY", lot_size: 125 },
  { symbol: "EICHERMOT", name: "Eicher Motors", instrument_key: "NSE_EQ|EICHERMOT", lot_size: 250 },
  { symbol: "ESCORTS", name: "Escorts Limited", instrument_key: "NSE_EQ|ESCORTS", lot_size: 250 },
  { symbol: "EXIDEIND", name: "Exide Industries", instrument_key: "NSE_EQ|EXIDEIND", lot_size: 1000 },
  { symbol: "FEDERALBNK", name: "Federal Bank", instrument_key: "NSE_EQ|FEDERALBNK", lot_size: 5000 },
  { symbol: "GAIL", name: "GAIL India", instrument_key: "NSE_EQ|GAIL", lot_size: 2500 },
  { symbol: "GLENMARK", name: "Glenmark Pharma", instrument_key: "NSE_EQ|GLENMARK", lot_size: 500 },
  { symbol: "GMRINFRA", name: "GMR Infrastructure", instrument_key: "NSE_EQ|GMRINFRA", lot_size: 10000 },
  { symbol: "GNFC", name: "GNFC Limited", instrument_key: "NSE_EQ|GNFC", lot_size: 500 },
  { symbol: "GODREJCP", name: "Godrej Consumer", instrument_key: "NSE_EQ|GODREJCP", lot_size: 500 },
  { symbol: "GODREJPROP", name: "Godrej Properties", instrument_key: "NSE_EQ|GODREJPROP", lot_size: 250 },
  { symbol: "GRANULES", name: "Granules India", instrument_key: "NSE_EQ|GRANULES", lot_size: 1000 },
  { symbol: "GRASIM", name: "Grasim Industries", instrument_key: "NSE_EQ|GRASIM", lot_size: 500 },
  { symbol: "GUJGASLTD", name: "Gujarat Gas", instrument_key: "NSE_EQ|GUJGASLTD", lot_size: 1000 },
  { symbol: "HAL", name: "Hindustan Aeronautics", instrument_key: "NSE_EQ|HAL", lot_size: 125 },
  { symbol: "HAVELLS", name: "Havells India", instrument_key: "NSE_EQ|HAVELLS", lot_size: 500 },
  { symbol: "HCLTECH", name: "HCL Technologies", instrument_key: "NSE_EQ|HCLTECH", lot_size: 500 },
  { symbol: "HDFCAMC", name: "HDFC AMC", instrument_key: "NSE_EQ|HDFCAMC", lot_size: 250 },
  { symbol: "HDFCBANK", name: "HDFC Bank", instrument_key: "NSE_EQ|HDFCBANK", lot_size: 500 },
  { symbol: "HDFCLIFE", name: "HDFC Life", instrument_key: "NSE_EQ|HDFCLIFE", lot_size: 1000 },
  { symbol: "HEROMOTOCO", name: "Hero MotoCorp", instrument_key: "NSE_EQ|HEROMOTOCO", lot_size: 250 },
  { symbol: "HINDALCO", name: "Hindalco Industries", instrument_key: "NSE_EQ|HINDALCO", lot_size: 1000 },
  { symbol: "HINDCOPPER", name: "Hindustan Copper", instrument_key: "NSE_EQ|HINDCOPPER", lot_size: 2500 },
  { symbol: "HINDPETRO", name: "Hindustan Petroleum", instrument_key: "NSE_EQ|HINDPETRO", lot_size: 1000 },
  { symbol: "HINDUNILVR", name: "Hindustan Unilever", instrument_key: "NSE_EQ|HINDUNILVR", lot_size: 250 },
  { symbol: "ICICIBANK", name: "ICICI Bank", instrument_key: "NSE_EQ|ICICIBANK", lot_size: 500 },
  { symbol: "ICICIGI", name: "ICICI General Insurance", instrument_key: "NSE_EQ|ICICIGI", lot_size: 500 },
  { symbol: "ICICIPRULI", name: "ICICI Prudential Life", instrument_key: "NSE_EQ|ICICIPRULI", lot_size: 1000 },
  { symbol: "IDEA", name: "Vodafone Idea", instrument_key: "NSE_EQ|IDEA", lot_size: 10000 },
  { symbol: "IDFC", name: "IDFC Limited", instrument_key: "NSE_EQ|IDFC", lot_size: 5000 },
  { symbol: "IDFCFIRSTB", name: "IDFC First Bank", instrument_key: "NSE_EQ|IDFCFIRSTB", lot_size: 2500 },
  { symbol: "IEX", name: "Indian Energy Exchange", instrument_key: "NSE_EQ|IEX", lot_size: 2500 },
  { symbol: "IGL", name: "Indraprastha Gas", instrument_key: "NSE_EQ|IGL", lot_size: 1000 },
  { symbol: "INDHOTEL", name: "Indian Hotels", instrument_key: "NSE_EQ|INDHOTEL", lot_size: 1000 },
  { symbol: "INDIACEM", name: "India Cements", instrument_key: "NSE_EQ|INDIACEM", lot_size: 2500 },
  { symbol: "INDIAMART", name: "IndiaMART", instrument_key: "NSE_EQ|INDIAMART", lot_size: 125 },
  { symbol: "INDIGO", name: "InterGlobe Aviation", instrument_key: "NSE_EQ|INDIGO", lot_size: 125 },
  { symbol: "INDUSINDBK", name: "IndusInd Bank", instrument_key: "NSE_EQ|INDUSINDBK", lot_size: 500 },
  { symbol: "INDUSTOWER", name: "Indus Towers", instrument_key: "NSE_EQ|INDUSTOWER", lot_size: 2500 },
  { symbol: "INFY", name: "Infosys Limited", instrument_key: "NSE_EQ|INFY", lot_size: 500 },
  { symbol: "IOC", name: "Indian Oil Corp", instrument_key: "NSE_EQ|IOC", lot_size: 5000 },
  { symbol: "IPCALAB", name: "IPCA Laboratories", instrument_key: "NSE_EQ|IPCALAB", lot_size: 500 },
  { symbol: "ITC", name: "ITC Limited", instrument_key: "NSE_EQ|ITC", lot_size: 1600 },
  { symbol: "JINDALSTEL", name: "Jindal Steel & Power", instrument_key: "NSE_EQ|JINDALSTEL", lot_size: 1000 },
  { symbol: "JKCEMENT", name: "JK Cement", instrument_key: "NSE_EQ|JKCEMENT", lot_size: 125 },
  { symbol: "JSWSTEEL", name: "JSW Steel", instrument_key: "NSE_EQ|JSWSTEEL", lot_size: 1000 },
  { symbol: "JUBLFOOD", name: "Jubilant FoodWorks", instrument_key: "NSE_EQ|JUBLFOOD", lot_size: 1000 },
  { symbol: "KOTAKBANK", name: "Kotak Mahindra Bank", instrument_key: "NSE_EQ|KOTAKBANK", lot_size: 400 },
  { symbol: "LALPATHLAB", name: "Dr Lal PathLabs", instrument_key: "NSE_EQ|LALPATHLAB", lot_size: 125 },
  { symbol: "LAURUSLABS", name: "Laurus Labs", instrument_key: "NSE_EQ|LAURUSLABS", lot_size: 1000 },
  { symbol: "LICHSGFIN", name: "LIC Housing Finance", instrument_key: "NSE_EQ|LICHSGFIN", lot_size: 1000 },
  { symbol: "LT", name: "Larsen & Toubro", instrument_key: "NSE_EQ|LT", lot_size: 250 },
  { symbol: "LTIM", name: "LTIMindtree", instrument_key: "NSE_EQ|LTIM", lot_size: 125 },
  { symbol: "LTTS", name: "L&T Technology Services", instrument_key: "NSE_EQ|LTTS", lot_size: 125 },
  { symbol: "LUPIN", name: "Lupin Limited", instrument_key: "NSE_EQ|LUPIN", lot_size: 500 },
  { symbol: "M&M", name: "Mahindra & Mahindra", instrument_key: "NSE_EQ|M&M", lot_size: 500 },
  { symbol: "M&MFIN", name: "M&M Financial Services", instrument_key: "NSE_EQ|M&MFIN", lot_size: 2500 },
  { symbol: "MANAPPURAM", name: "Manappuram Finance", instrument_key: "NSE_EQ|MANAPPURAM", lot_size: 2500 },
  { symbol: "MANKIND", name: "Mankind Pharma", instrument_key: "NSE_EQ|MANKIND", lot_size: 250 },
  { symbol: "MARICO", name: "Marico Limited", instrument_key: "NSE_EQ|MARICO", lot_size: 1000 },
  { symbol: "MARUTI", name: "Maruti Suzuki", instrument_key: "NSE_EQ|MARUTI", lot_size: 100 },
  { symbol: "MAXHEALTH", name: "Max Healthcare", instrument_key: "NSE_EQ|MAXHEALTH", lot_size: 1000 },
  { symbol: "MCX", name: "Multi Commodity Exchange", instrument_key: "NSE_EQ|MCX", lot_size: 250 },
  { symbol: "METROPOLIS", name: "Metropolis Healthcare", instrument_key: "NSE_EQ|METROPOLIS", lot_size: 500 },
  { symbol: "MFSL", name: "Max Financial Services", instrument_key: "NSE_EQ|MFSL", lot_size: 500 },
  { symbol: "MGL", name: "Mahanagar Gas", instrument_key: "NSE_EQ|MGL", lot_size: 500 },
  { symbol: "MOTHERSON", name: "Motherson Sumi", instrument_key: "NSE_EQ|MOTHERSON", lot_size: 5000 },
  { symbol: "MPHASIS", name: "MPhasis Limited", instrument_key: "NSE_EQ|MPHASIS", lot_size: 250 },
  { symbol: "MRF", name: "MRF Limited", instrument_key: "NSE_EQ|MRF", lot_size: 10 },
  { symbol: "MUTHOOTFIN", name: "Muthoot Finance", instrument_key: "NSE_EQ|MUTHOOTFIN", lot_size: 500 },
  { symbol: "NATIONALUM", name: "National Aluminium", instrument_key: "NSE_EQ|NATIONALUM", lot_size: 5000 },
  { symbol: "NAUKRI", name: "Info Edge India", instrument_key: "NSE_EQ|NAUKRI", lot_size: 125 },
  { symbol: "NAVINFLUOR", name: "Navin Fluorine", instrument_key: "NSE_EQ|NAVINFLUOR", lot_size: 125 },
  { symbol: "NBCC", name: "NBCC India", instrument_key: "NSE_EQ|NBCC", lot_size: 5000 },
  { symbol: "NESTLEIND", name: "Nestle India", instrument_key: "NSE_EQ|NESTLEIND", lot_size: 50 },
  { symbol: "NMDC", name: "NMDC Limited", instrument_key: "NSE_EQ|NMDC", lot_size: 2500 },
  { symbol: "NTPC", name: "NTPC Limited", instrument_key: "NSE_EQ|NTPC", lot_size: 2000 },
  { symbol: "NYKAA", name: "FSN E-Commerce", instrument_key: "NSE_EQ|NYKAA", lot_size: 2500 },
  { symbol: "OBEROIRLTY", name: "Oberoi Realty", instrument_key: "NSE_EQ|OBEROIRLTY", lot_size: 250 },
  { symbol: "OFSS", name: "Oracle Financial Services", instrument_key: "NSE_EQ|OFSS", lot_size: 125 },
  { symbol: "ONGC", name: "ONGC", instrument_key: "NSE_EQ|ONGC", lot_size: 2500 },
  { symbol: "PAGEIND", name: "Page Industries", instrument_key: "NSE_EQ|PAGEIND", lot_size: 25 },
  { symbol: "PEL", name: "Piramal Enterprises", instrument_key: "NSE_EQ|PEL", lot_size: 250 },
  { symbol: "PERSISTENT", name: "Persistent Systems", instrument_key: "NSE_EQ|PERSISTENT", lot_size: 125 },
  { symbol: "PETRONET", name: "Petronet LNG", instrument_key: "NSE_EQ|PETRONET", lot_size: 2000 },
  { symbol: "PFC", name: "Power Finance Corp", instrument_key: "NSE_EQ|PFC", lot_size: 1000 },
  { symbol: "PIDILITIND", name: "Pidilite Industries", instrument_key: "NSE_EQ|PIDILITIND", lot_size: 250 },
  { symbol: "PIIND", name: "PI Industries", instrument_key: "NSE_EQ|PIIND", lot_size: 125 },
  { symbol: "PNB", name: "Punjab National Bank", instrument_key: "NSE_EQ|PNB", lot_size: 5000 },
  { symbol: "POLYCAB", name: "Polycab India", instrument_key: "NSE_EQ|POLYCAB", lot_size: 125 },
  { symbol: "POWERGRID", name: "Power Grid Corp", instrument_key: "NSE_EQ|POWERGRID", lot_size: 2000 },
  { symbol: "PVRINOX", name: "PVR INOX", instrument_key: "NSE_EQ|PVRINOX", lot_size: 250 },
  { symbol: "RAMCOCEM", name: "Ramco Cements", instrument_key: "NSE_EQ|RAMCOCEM", lot_size: 500 },
  { symbol: "RBLBANK", name: "RBL Bank", instrument_key: "NSE_EQ|RBLBANK", lot_size: 2500 },
  { symbol: "RECLTD", name: "REC Limited", instrument_key: "NSE_EQ|RECLTD", lot_size: 1000 },
  { symbol: "RELIANCE", name: "Reliance Industries", instrument_key: "NSE_EQ|RELIANCE", lot_size: 250 },
  { symbol: "SAIL", name: "SAIL", instrument_key: "NSE_EQ|SAIL", lot_size: 5000 },
  { symbol: "SBICARD", name: "SBI Cards", instrument_key: "NSE_EQ|SBICARD", lot_size: 500 },
  { symbol: "SBILIFE", name: "SBI Life Insurance", instrument_key: "NSE_EQ|SBILIFE", lot_size: 500 },
  { symbol: "SBIN", name: "State Bank of India", instrument_key: "NSE_EQ|SBIN", lot_size: 1000 },
  { symbol: "SHREECEM", name: "Shree Cement", instrument_key: "NSE_EQ|SHREECEM", lot_size: 50 },
  { symbol: "SIEMENS", name: "Siemens Limited", instrument_key: "NSE_EQ|SIEMENS", lot_size: 125 },
  { symbol: "SRF", name: "SRF Limited", instrument_key: "NSE_EQ|SRF", lot_size: 250 },
  { symbol: "SUNPHARMA", name: "Sun Pharmaceutical", instrument_key: "NSE_EQ|SUNPHARMA", lot_size: 500 },
  { symbol: "SUNTV", name: "Sun TV Network", instrument_key: "NSE_EQ|SUNTV", lot_size: 1000 },
  { symbol: "SYNGENE", name: "Syngene International", instrument_key: "NSE_EQ|SYNGENE", lot_size: 500 },
  { symbol: "TATACHEM", name: "Tata Chemicals", instrument_key: "NSE_EQ|TATACHEM", lot_size: 500 },
  { symbol: "TATACOMM", name: "Tata Communications", instrument_key: "NSE_EQ|TATACOMM", lot_size: 250 },
  { symbol: "TATACONSUM", name: "Tata Consumer Products", instrument_key: "NSE_EQ|TATACONSUM", lot_size: 500 },
  { symbol: "TATAMOTORS", name: "Tata Motors", instrument_key: "NSE_EQ|TATAMOTORS", lot_size: 1000 },
  { symbol: "TATAPOWER", name: "Tata Power", instrument_key: "NSE_EQ|TATAPOWER", lot_size: 2000 },
  { symbol: "TATASTEEL", name: "Tata Steel", instrument_key: "NSE_EQ|TATASTEEL", lot_size: 500 },
  { symbol: "TCS", name: "Tata Consultancy Services", instrument_key: "NSE_EQ|TCS", lot_size: 150 },
  { symbol: "TECHM", name: "Tech Mahindra", instrument_key: "NSE_EQ|TECHM", lot_size: 500 },
  { symbol: "TITAN", name: "Titan Company", instrument_key: "NSE_EQ|TITAN", lot_size: 250 },
  { symbol: "TORNTPHARM", name: "Torrent Pharmaceuticals", instrument_key: "NSE_EQ|TORNTPHARM", lot_size: 250 },
  { symbol: "TRENT", name: "Trent Limited", instrument_key: "NSE_EQ|TRENT", lot_size: 125 },
  { symbol: "TVSMOTOR", name: "TVS Motor Company", instrument_key: "NSE_EQ|TVSMOTOR", lot_size: 500 },
  { symbol: "UBL", name: "United Breweries", instrument_key: "NSE_EQ|UBL", lot_size: 500 },
  { symbol: "ULTRACEMCO", name: "UltraTech Cement", instrument_key: "NSE_EQ|ULTRACEMCO", lot_size: 100 },
  { symbol: "UPL", name: "UPL Limited", instrument_key: "NSE_EQ|UPL", lot_size: 1000 },
  { symbol: "VEDL", name: "Vedanta Limited", instrument_key: "NSE_EQ|VEDL", lot_size: 2000 },
  { symbol: "VOLTAS", name: "Voltas Limited", instrument_key: "NSE_EQ|VOLTAS", lot_size: 500 },
  { symbol: "WIPRO", name: "Wipro Limited", instrument_key: "NSE_EQ|WIPRO", lot_size: 1200 },
  { symbol: "ZEEL", name: "Zee Entertainment", instrument_key: "NSE_EQ|ZEEL", lot_size: 2000 },
  { symbol: "ZYDUSLIFE", name: "Zydus Lifesciences", instrument_key: "NSE_EQ|ZYDUSLIFE", lot_size: 500 },
]

// Function to get available expiry dates for a symbol
export async function getExpiryDates(symbol: string): Promise<string[]> {
  try {
    const symbolInfo = getFNOSymbols().find((s) => s.symbol === symbol)
    if (!symbolInfo) {
      throw new Error(`Symbol ${symbol} not found`)
    }

    console.log(`Fetching expiry dates for ${symbol}`)

    const response = await fetch(
      `${BASE_URL}/option/contract?instrument_key=${encodeURIComponent(symbolInfo.instrument_key)}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${UPSTOX_ACCESS_TOKEN}`,
          "Api-Version": "2.0",
        },
      },
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`Expiry API Error: ${response.status} - ${errorText}`)
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    console.log("Expiry API Response:", data)

    if (data.status !== "success" || !data.data) {
      throw new Error("Invalid expiry API response format")
    }

    // Extract unique expiry dates and sort them
    const expiries = [...new Set(data.data.map((item: any) => item.expiry))].sort()
    console.log(`Found ${expiries.length} expiry dates:`, expiries)

    return expiries
  } catch (error) {
    console.error("Error fetching expiry dates:", error)
    // Return fallback expiry dates
    return getLiveExpiryDates()
  }
}

// Function to filter strikes around ATM (±5 strikes)
const filterATMStrikes = (data: OptionsChainData[], lotSize: number): OptionsChainData[] => {
  if (data.length === 0) return data

  // Get spot price from first data point
  const spotPrice = data[0].underlying_spot_price

  // Sort strikes by strike price
  const sortedStrikes = data.sort((a, b) => a.strike_price - b.strike_price)

  // Find ATM strike (closest to spot price)
  let atmIndex = 0
  let minDiff = Math.abs(sortedStrikes[0].strike_price - spotPrice)

  for (let i = 1; i < sortedStrikes.length; i++) {
    const diff = Math.abs(sortedStrikes[i].strike_price - spotPrice)
    if (diff < minDiff) {
      minDiff = diff
      atmIndex = i
    }
  }

  // Get ±5 strikes around ATM
  const startIndex = Math.max(0, atmIndex - 5)
  const endIndex = Math.min(sortedStrikes.length - 1, atmIndex + 5)

  const filteredData = []
  for (let i = startIndex; i <= endIndex; i++) {
    filteredData.push(sortedStrikes[i])
  }

  console.log(`Filtered to ${filteredData.length} strikes around ATM (${sortedStrikes[atmIndex].strike_price})`)
  return filteredData
}

// Main function to fetch live options chain data for a specific expiry
export async function fetchOptionsChainForExpiry(symbol: string, expiryDate: string): Promise<OptionsChainData[]> {
  try {
    const symbolInfo = getFNOSymbols().find((s) => s.symbol === symbol)
    if (!symbolInfo) {
      throw new Error(`Symbol ${symbol} not found`)
    }

    console.log(`Fetching options chain for ${symbol} expiry: ${expiryDate}`)

    // Use actual Upstox API call with expiry_date parameter
    const response = await fetch(
      `${BASE_URL}/option/chain?instrument_key=${encodeURIComponent(symbolInfo.instrument_key)}&expiry_date=${expiryDate}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${UPSTOX_ACCESS_TOKEN}`,
          "Api-Version": "2.0",
        },
      },
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`Options Chain API Error: ${response.status} - ${errorText}`)
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`)
    }

    const data = await response.json()
    console.log("Options Chain API Response:", data)

    if (data.status !== "success" || !data.data) {
      throw new Error("Invalid options chain API response format")
    }

    // Filter to show only ATM ± 5 strikes
    const filteredData = filterATMStrikes(data.data, symbolInfo.lot_size)
    console.log(`Filtered data: ${filteredData.length} strikes`)

    return filteredData
  } catch (error) {
    console.error("Error fetching options chain for expiry:", error)
    throw error
  }
}

// Updated main function to fetch all expiries
export async function fetchOptionsChain(symbol = "NIFTY"): Promise<OptionsChainData[]> {
  try {
    const symbolInfo = getFNOSymbols().find((s) => s.symbol === symbol)
    if (!symbolInfo) {
      throw new Error(`Symbol ${symbol} not found`)
    }

    console.log(`Fetching complete options chain for ${symbol}`)

    // First, get available expiry dates
    const expiries = await getExpiryDates(symbol)

    if (expiries.length === 0) {
      throw new Error("No expiry dates found")
    }

    // Fetch options data for all expiries (limit to first 4 for performance)
    const allOptionsData: OptionsChainData[] = []
    const limitedExpiries = expiries.slice(0, 4) // Limit to first 4 expiries

    for (const expiry of limitedExpiries) {
      try {
        const expiryData = await fetchOptionsChainForExpiry(symbol, expiry)
        allOptionsData.push(...expiryData)
      } catch (error) {
        console.error(`Error fetching data for expiry ${expiry}:`, error)
        // Continue with other expiries
      }
    }

    if (allOptionsData.length === 0) {
      throw new Error("No options data retrieved for any expiry")
    }

    console.log(
      `Total options data retrieved: ${allOptionsData.length} strikes across ${limitedExpiries.length} expiries`,
    )
    return allOptionsData
  } catch (error) {
    console.error("Error fetching options chain:", error)

    // Fallback to mock data if API fails
    console.log("Falling back to mock data...")
    const symbolInfo = getFNOSymbols().find((s) => s.symbol === symbol)
    if (symbolInfo) {
      const mockData = generateMockOptionsData(symbol, symbolInfo.lot_size)
      return filterATMStrikes(mockData, symbolInfo.lot_size)
    }

    throw error
  }
}

// Fallback mock data generator (only used if API fails)
const generateMockOptionsData = (symbol: string, lotSize: number): OptionsChainData[] => {
  const basePrice = symbol === "NIFTY" ? 22976 : symbol === "BANKNIFTY" ? 48500 : 375
  const strikes = []

  // Generate strikes around the base price
  const strikeInterval = symbol === "NIFTY" ? 50 : symbol === "BANKNIFTY" ? 100 : 10
  const startStrike = Math.floor((basePrice * 0.8) / strikeInterval) * strikeInterval
  const endStrike = Math.ceil((basePrice * 1.2) / strikeInterval) * strikeInterval

  for (let strike = startStrike; strike <= endStrike; strike += strikeInterval) {
    strikes.push(strike)
  }

  // Get current live expiry dates
  const expiries = getLiveExpiryDates()

  const data: OptionsChainData[] = []

  expiries.forEach((expiry) => {
    strikes.forEach((strike) => {
      const isITM = strike < basePrice
      const distance = Math.abs(strike - basePrice)

      // Calculate realistic option prices
      const callLTP = isITM
        ? Math.max(basePrice - strike + Math.random() * 50, 0.05)
        : Math.max(Math.random() * (basePrice * 0.1) * Math.exp(-distance / basePrice), 0.05)

      const putLTP = !isITM
        ? Math.max(strike - basePrice + Math.random() * 50, 0.05)
        : Math.max(Math.random() * (basePrice * 0.1) * Math.exp(-distance / basePrice), 0.05)

      // Generate realistic OI values
      const callOI = Math.floor(Math.random() * 500000) + 50000
      const putOI = Math.floor(Math.random() * 500000) + 50000
      const callPrevOI = callOI + (Math.random() - 0.5) * 100000
      const putPrevOI = putOI + (Math.random() - 0.5) * 100000

      data.push({
        expiry,
        pcr: 0.8 + Math.random() * 0.4,
        strike_price: strike,
        underlying_key: `NSE_EQ|${symbol}`,
        underlying_spot_price: basePrice + (Math.random() - 0.5) * 20,
        call_options: {
          instrument_key: `NSE_FO|${symbol}${strike}CE`,
          market_data: {
            ltp: Number(callLTP.toFixed(2)),
            volume: Math.floor(Math.random() * 100000),
            oi: callOI,
            close_price: Number((callLTP * (0.95 + Math.random() * 0.1)).toFixed(2)),
            bid_price: Number((callLTP * 0.98).toFixed(2)),
            bid_qty: Math.floor(Math.random() * 10000),
            ask_price: Number((callLTP * 1.02).toFixed(2)),
            ask_qty: Math.floor(Math.random() * 10000),
            prev_oi: callPrevOI,
          },
          option_greeks: {
            vega: Number((Math.random() * 20).toFixed(2)),
            theta: Number((-Math.random() * 100).toFixed(2)),
            gamma: Number((Math.random() * 0.01).toFixed(4)),
            delta: Number((isITM ? 0.5 + Math.random() * 0.4 : Math.random() * 0.5).toFixed(3)),
            iv: Number((15 + Math.random() * 30).toFixed(2)),
            pop: Number((Math.random() * 100).toFixed(2)),
          },
        },
        put_options: {
          instrument_key: `NSE_FO|${symbol}${strike}PE`,
          market_data: {
            ltp: Number(putLTP.toFixed(2)),
            volume: Math.floor(Math.random() * 100000),
            oi: putOI,
            close_price: Number((putLTP * (0.95 + Math.random() * 0.1)).toFixed(2)),
            bid_price: Number((putLTP * 0.98).toFixed(2)),
            bid_qty: Math.floor(Math.random() * 10000),
            ask_price: Number((putLTP * 1.02).toFixed(2)),
            ask_qty: Math.floor(Math.random() * 10000),
            prev_oi: putPrevOI,
          },
          option_greeks: {
            vega: Number((Math.random() * 20).toFixed(2)),
            theta: Number((-Math.random() * 100).toFixed(2)),
            gamma: Number((Math.random() * 0.01).toFixed(4)),
            delta: Number((!isITM ? -0.5 - Math.random() * 0.4 : -Math.random() * 0.5).toFixed(3)),
            iv: Number((15 + Math.random() * 30).toFixed(2)),
            pop: Number((Math.random() * 100).toFixed(2)),
          },
        },
      })
    })
  })

  return data
}

// Function to get current live expiry dates (next 8 Thursdays)
const getLiveExpiryDates = (): string[] => {
  const expiries: string[] = []
  const today = new Date()

  // Get next 8 Thursdays (weekly expiries)
  for (let i = 0; i < 8; i++) {
    const nextThursday = new Date(today)
    const daysUntilThursday = (4 - today.getDay() + 7) % 7 || 7 // Thursday is day 4
    nextThursday.setDate(today.getDate() + daysUntilThursday + i * 7)
    expiries.push(nextThursday.toISOString().split("T")[0])
  }

  return expiries
}

// Function to get current spot price for a symbol
export async function getSpotPrice(symbol: string): Promise<number> {
  try {
    const symbolInfo = getFNOSymbols().find((s) => s.symbol === symbol)
    if (!symbolInfo) {
      throw new Error(`Symbol ${symbol} not found`)
    }

    const response = await fetch(
      `${BASE_URL}/market-quote/ltp?instrument_key=${encodeURIComponent(symbolInfo.instrument_key)}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${UPSTOX_ACCESS_TOKEN}`,
          "Api-Version": "2.0",
        },
      },
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.data[symbolInfo.instrument_key]?.last_price || 0
  } catch (error) {
    console.error("Error fetching spot price:", error)
    // Return fallback prices
    const fallbackPrices: Record<string, number> = {
      NIFTY: 22976,
      BANKNIFTY: 48500,
      FINNIFTY: 19500,
    }
    return fallbackPrices[symbol] || 375
  }
}
