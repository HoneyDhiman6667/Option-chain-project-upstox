import type { OptionsChainData, SymbolInfo } from "@/types/options"

// Your Upstox API configuration
const UPSTOX_API_KEY = "3d4640a0-6cd4-4021-a22b-0cdfe08ef8c5"
const UPSTOX_ACCESS_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJrZXlfaWQiOiJza192MS4wIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiIzM0M2QUwiLCJqdGkiOiI2ODczNjZjMGVlMWJjMDEzMDE0M2NlYjgiLCJpc011bHRpQ2xpZW50IjpmYWxzZSwiaXNQbHVzUGxhbiI6dHJ1ZSwiaWF0IjoxNzUyMzkzNDA4LCJpc3MiOiJ1ZGFwaS1nYXRld2F5LXNlcnZpY2UiLCJleHAiOjE3NTI0NDQwMDB9.IcIgP4Xt0H66CMNposCMe28L97mCCu9geJB9aYCPucs";
const BASE_URL = "https://api.upstox.com/v2"

// FNO Symbols list with proper lot sizes and instrument keys
export const getFNOSymbols = (): SymbolInfo[] => [
  { symbol: "NIFTY", name: "Nifty 50", instrument_key: "NSE_INDEX|Nifty 50", lot_size: 25 },
  { symbol: "BANKNIFTY", name: "Bank Nifty", instrument_key: "NSE_INDEX|Nifty Bank", lot_size: 15 },
  { symbol: "FINNIFTY", name: "Fin Nifty", instrument_key: "NSE_INDEX|Nifty Financial Services", lot_size: 25 },
  { symbol: "MIDCPNIFTY", name: "Nifty Midcap Select", instrument_key: "NSE_INDEX|Nifty Midcap Select", lot_size: 50 },
  { symbol: "360ONE", name: "360 ONE WAM LIMITED", instrument_key: "NSE_EQ|INE466L01038", lot_size: 500 },
  { symbol: "AARTIIND", name: "AARTI INDUSTRIES LTD", instrument_key: "NSE_EQ|INE769A01020", lot_size: 1325 },
  { symbol: "ABB", name: "ABB INDIA LIMITED", instrument_key: "NSE_EQ|INE117A01022", lot_size: 125 },
  { symbol: "ABCAPITAL", name: "ADITYA BIRLA CAPITAL LTD.", instrument_key: "NSE_EQ|INE674K01013", lot_size: 3100 },
  { symbol: "ABFRL", name: "ADITYA BIRLA FASHION & RT", instrument_key: "NSE_EQ|INE647O01011", lot_size: 2600 },
  { symbol: "ACC", name: "ACC LIMITED", instrument_key: "NSE_EQ|INE012A01025", lot_size: 300 },
  { symbol: "ADANIENSOL", name: "ADANI ENERGY SOLUTION LTD", instrument_key: "NSE_EQ|INE931S01010", lot_size: 675 },
  { symbol: "ADANIENT", name: "ADANI ENTERPRISES LIMITED", instrument_key: "NSE_EQ|INE423A01024", lot_size: 300 },
  { symbol: "ADANIGREEN", name: "ADANI GREEN ENERGY LTD", instrument_key: "NSE_EQ|INE364U01010", lot_size: 600 },
  { symbol: "ADANIPORTS", name: "ADANI PORT & SEZ LTD", instrument_key: "NSE_EQ|INE742F01042", lot_size: 475 },
  { symbol: "ALKEM", name: "ALKEM LABORATORIES LTD.", instrument_key: "NSE_EQ|INE540L01014", lot_size: 125 },
  { symbol: "AMBER", name: "AMBER ENTERPRISES (I) LTD", instrument_key: "NSE_EQ|INE371P01015", lot_size: 100 },
  { symbol: "AMBUJACEM", name: "AMBUJA CEMENTS LTD", instrument_key: "NSE_EQ|INE079A01024", lot_size: 1050 },
  { symbol: "ANGELONE", name: "ANGEL ONE LIMITED", instrument_key: "NSE_EQ|INE732I01013", lot_size: 250 },
  { symbol: "APLAPOLLO", name: "APL APOLLO TUBES LTD", instrument_key: "NSE_EQ|INE702C01027", lot_size: 350 },
  { symbol: "APOLLOHOSP", name: "APOLLO HOSPITALS ENTER. L", instrument_key: "NSE_EQ|INE437A01024", lot_size: 125 },
  { symbol: "ASHOKLEY", name: "ASHOK LEYLAND LTD", instrument_key: "NSE_EQ|INE208A01029", lot_size: 2500 },
  { symbol: "ASIANPAINT", name: "ASIAN PAINTS LIMITED", instrument_key: "NSE_EQ|INE021A01026", lot_size: 250 },
  { symbol: "ASTRAL", name: "ASTRAL LIMITED", instrument_key: "NSE_EQ|INE006I01046", lot_size: 425 },
  { symbol: "ATGL", name: "ADANI TOTAL GAS LIMITED", instrument_key: "NSE_EQ|INE399L01023", lot_size: 875 },
  { symbol: "AUBANK", name: "AU SMALL FINANCE BANK LTD", instrument_key: "NSE_EQ|INE949L01017", lot_size: 1000 },
  { symbol: "AUROPHARMA", name: "AUROBINDO PHARMA LTD", instrument_key: "NSE_EQ|INE406A01037", lot_size: 550 },
  { symbol: "AXISBANK", name: "AXIS BANK LIMITED", instrument_key: "NSE_EQ|INE238A01034", lot_size: 625 },
  { symbol: "BAJAJ-AUTO", name: "BAJAJ AUTO LIMITED", instrument_key: "NSE_EQ|INE917I01010", lot_size: 75 },
  { symbol: "BAJAJFINSV", name: "BAJAJ FINSERV LTD.", instrument_key: "NSE_EQ|INE918I01026", lot_size: 500 },
  { symbol: "BAJFINANCE", name: "BAJAJ FINANCE LIMITED", instrument_key: "NSE_EQ|INE296A01032", lot_size: 750 },
  { symbol: "BALKRISIND", name: "BALKRISHNA IND. LTD", instrument_key: "NSE_EQ|INE787D01026", lot_size: 300 },
  { symbol: "BANDHANBNK", name: "BANDHAN BANK LIMITED", instrument_key: "NSE_EQ|INE545U01014", lot_size: 3600 },
  { symbol: "BANKBARODA", name: "BANK OF BARODA", instrument_key: "NSE_EQ|INE028A01039", lot_size: 2925 },
  { symbol: "BANKINDIA", name: "BANK OF INDIA", instrument_key: "NSE_EQ|INE084A01016", lot_size: 5200 },
  { symbol: "BDL", name: "BHARAT DYNAMICS LIMITED", instrument_key: "NSE_EQ|INE171Z01026", lot_size: 325 },
  { symbol: "BEL", name: "BHARAT ELECTRONICS LTD", instrument_key: "NSE_EQ|INE263A01024", lot_size: 2850 },
  { symbol: "BHARATFORG", name: "BHARAT FORGE LTD", instrument_key: "NSE_EQ|INE465A01025", lot_size: 500 },
  { symbol: "BHARTIARTL", name: "BHARTI AIRTEL LIMITED", instrument_key: "NSE_EQ|INE397D01024", lot_size: 475 },
  { symbol: "BHEL", name: "BHEL", instrument_key: "NSE_EQ|INE257A01026", lot_size: 2625 },
  { symbol: "BIOCON", name: "BIOCON LIMITED.", instrument_key: "NSE_EQ|INE376G01013", lot_size: 2500 },
  { symbol: "BLUESTARCO", name: "BLUE STAR LIMITED", instrument_key: "NSE_EQ|INE472A01039", lot_size: 325 },
  { symbol: "BOSCHLTD", name: "BOSCH LIMITED", instrument_key: "NSE_EQ|INE323A01026", lot_size: 25 },
  { symbol: "BPCL", name: "BHARAT PETROLEUM CORP LT", instrument_key: "NSE_EQ|INE029A01011", lot_size: 1975 },
  { symbol: "BRITANNIA", name: "BRITANNIA INDUSTRIES LTD", instrument_key: "NSE_EQ|INE216A01030", lot_size: 125 },
  { symbol: "BSE", name: "BSE LIMITED", instrument_key: "NSE_EQ|INE118H01025", lot_size: 375 },
  { symbol: "BSOFT", name: "BIRLASOFT LIMITED", instrument_key: "NSE_EQ|INE836A01035", lot_size: 1300 },
  { symbol: "CAMS", name: "COMPUTER AGE MNGT SER LTD", instrument_key: "NSE_EQ|INE596I01012", lot_size: 150 },
  { symbol: "CANBK", name: "CANARA BANK", instrument_key: "NSE_EQ|INE476A01022", lot_size: 6750 },
  { symbol: "CDSL", name: "CENTRAL DEPO SER (I) LTD", instrument_key: "NSE_EQ|INE736A01011", lot_size: 475 },
  { symbol: "CESC", name: "CESC LTD", instrument_key: "NSE_EQ|INE486A01021", lot_size: 3625 },
  { symbol: "CGPOWER", name: "CG POWER AND IND SOL LTD", instrument_key: "NSE_EQ|INE067A01029", lot_size: 850 },
  { symbol: "CHAMBLFERT", name: "CHAMBAL FERTILIZERS LTD", instrument_key: "NSE_EQ|INE085A01013", lot_size: 950 },
  { symbol: "CHOLAFIN", name: "CHOLAMANDALAM IN & FIN CO", instrument_key: "NSE_EQ|INE121A01024", lot_size: 625 },
  { symbol: "CIPLA", name: "CIPLA LTD", instrument_key: "NSE_EQ|INE121A08PJ0", lot_size: 375 },
  { symbol: "COALINDIA", name: "COAL INDIA LTD", instrument_key: "NSE_EQ|INE059A01026", lot_size: 1350 },
  { symbol: "COFORGE", name: "COFORGE LIMITED", instrument_key: "NSE_EQ|INE522F01014", lot_size: 375 },
  { symbol: "COLPAL", name: "COLGATE PALMOLIVE LTD.", instrument_key: "NSE_EQ|INE591G01025", lot_size: 225 },
  { symbol: "CROMPTON", name: "CROMPT GREA CON ELEC LTD", instrument_key: "NSE_EQ|INE259A01022", lot_size: 1800 },
  { symbol: "CUMMINSIND", name: "CUMMINS INDIA LTD", instrument_key: "NSE_EQ|INE299U01018", lot_size: 200 },
  { symbol: "CYIENT", name: "CYIENT LIMITED", instrument_key: "NSE_EQ|INE298A01020", lot_size: 425 },
  { symbol: "DABUR", name: "DABUR INDIA LTD", instrument_key: "NSE_EQ|INE136B01020", lot_size: 1250 },
  { symbol: "DALBHARAT", name: "DALMIA BHARAT LIMITED", instrument_key: "NSE_EQ|INE00R701025", lot_size: 325 },
  { symbol: "DELHIVERY", name: "DELHIVERY LIMITED", instrument_key: "NSE_EQ|INE148O01028", lot_size: 2075 },
  { symbol: "DIVISLAB", name: "DIVI S LABORATORIES LTD", instrument_key: "NSE_EQ|INE361B01024", lot_size: 100 },
  { symbol: "DIXON", name: "DIXON TECHNO (INDIA) LTD", instrument_key: "NSE_EQ|INE935N01020", lot_size: 50 },
  { symbol: "DLF", name: "DLF LIMITED", instrument_key: "NSE_EQ|INE271C01023", lot_size: 825 },
  { symbol: "DMART", name: "AVENUE SUPERMARTS LIMITED", instrument_key: "NSE_EQ|INE192R01011", lot_size: 150 },
  { symbol: "DRREDDY", name: "DR. REDDY S LABORATORIES", instrument_key: "NSE_EQ|INE089A01031", lot_size: 625 },
  { symbol: "EICHERMOT", name: "EICHER MOTORS LTD", instrument_key: "NSE_EQ|INE066A01021", lot_size: 175 },
  { symbol: "EXIDEIND", name: "EXIDE INDUSTRIES LTD", instrument_key: "NSE_EQ|INE302A01020", lot_size: 1800 },
  { symbol: "FEDERALBNK", name: "FEDERAL BANK LTD", instrument_key: "NSE_EQ|INE171A01029", lot_size: 5000 },
  { symbol: "FORTIS", name: "FORTIS HEALTHCARE LTD", instrument_key: "NSE_EQ|INE061F01013", lot_size: 775 },
  { symbol: "GAIL", name: "GAIL (INDIA) LTD", instrument_key: "NSE_EQ|INE129A01019", lot_size: 3150 },
  { symbol: "GLENMARK", name: "GLENMARK PHARMACEUTICALS", instrument_key: "NSE_EQ|INE935A01035", lot_size: 375 },
  { symbol: "GMRAIRPORT", name: "GMR AIRPORTS LIMITED", instrument_key: "NSE_EQ|INE776C01039", lot_size: 6975 },
  { symbol: "GODREJCP", name: "GODREJ CONSUMER PRODUCTS", instrument_key: "NSE_EQ|INE102D01028", lot_size: 500 },
  { symbol: "GODREJPROP", name: "GODREJ PROPERTIES LTD", instrument_key: "NSE_EQ|INE484J01027", lot_size: 275 },
  { symbol: "GRANULES", name: "GRANULES INDIA LIMITED", instrument_key: "NSE_EQ|INE101D01020", lot_size: 1075 },
  { symbol: "GRASIM", name: "GRASIM INDUSTRIES LTD", instrument_key: "NSE_EQ|INE047A01021", lot_size: 250 },
  { symbol: "HAL", name: "HINDUSTAN AERONAUTICS LTD", instrument_key: "NSE_EQ|INE066F01020", lot_size: 150 },
  { symbol: "HAVELLS", name: "HAVELLS INDIA LIMITED", instrument_key: "NSE_EQ|INE176B01034", lot_size: 500 },
  { symbol: "HCLTECH", name: "HCL TECHNOLOGIES LTD", instrument_key: "NSE_EQ|INE860A01027", lot_size: 350 },
  { symbol: "HDFCAMC", name: "HDFC AMC LIMITED", instrument_key: "NSE_EQ|INE127D01025", lot_size: 150 },
  { symbol: "HDFCBANK", name: "HDFC BANK LTD", instrument_key: "NSE_EQ|INE040A01034", lot_size: 550 },
  { symbol: "HDFCLIFE", name: "HDFC LIFE INS CO LTD", instrument_key: "NSE_EQ|INE795G01014", lot_size: 1100 },
  { symbol: "HEROMOTOCO", name: "HERO MOTOCORP LIMITED", instrument_key: "NSE_EQ|INE158A01026", lot_size: 150 },
  { symbol: "HFCL", name: "HFCL LIMITED", instrument_key: "NSE_EQ|INE548A01028", lot_size: 6450 },
  { symbol: "HINDALCO", name: "HINDALCO INDUSTRIES LTD", instrument_key: "NSE_EQ|INE038A01020", lot_size: 1400 },
  { symbol: "HINDCOPPER", name: "HINDUSTAN COPPER LTD", instrument_key: "NSE_EQ|INE531E01026", lot_size: 2650 },
  { symbol: "HINDPETRO", name: "HINDUSTAN PETROLEUM CORP", instrument_key: "NSE_EQ|INE094A01015", lot_size: 2025 },
  { symbol: "HINDUNILVR", name: "HINDUSTAN UNILEVER LTD.", instrument_key: "NSE_EQ|INE030A01027", lot_size: 300 },
  { symbol: "HINDZINC", name: "HINDUSTAN ZINC LIMITED", instrument_key: "NSE_EQ|INE267A01025", lot_size: 1225 },
  { symbol: "HUDCO", name: "HSG & URBAN DEV CORPN LTD", instrument_key: "NSE_EQ|INE031A01017", lot_size: 2775 },
  { symbol: "ICICIBANK", name: "ICICI BANK LTD.", instrument_key: "NSE_EQ|INE090A01021", lot_size: 700 },
  { symbol: "ICICIGI", name: "ICICI LOMBARD GIC LIMITED", instrument_key: "NSE_EQ|INE765G01017", lot_size: 325 },
  { symbol: "ICICIPRULI", name: "ICICI PRU LIFE INS CO LTD", instrument_key: "NSE_EQ|INE726G01019", lot_size: 925 },
  { symbol: "IDBI", name: "IDBI BANK LIMITED", instrument_key: "NSE_EQ|INE008A01015", lot_size: 9275 },
  { symbol: "IDEA", name: "VODAFONE IDEA LIMITED", instrument_key: "NSE_EQ|INE669E01016", lot_size: 71475 },
  { symbol: "IEX", name: "INDIAN ENERGY EXC LTD", instrument_key: "NSE_EQ|INE022Q01020", lot_size: 3750 },
  { symbol: "IGL", name: "INDRAPRASTHA GAS LTD", instrument_key: "NSE_EQ|INE203G01027", lot_size: 2750 },
  { symbol: "IIFL", name: "IIFL FINANCE LIMITED", instrument_key: "NSE_EQ|INE530B01024", lot_size: 1650 },
  { symbol: "INDHOTEL", name: "THE INDIAN HOTELS CO. LTD", instrument_key: "NSE_EQ|INE053A01029", lot_size: 1000 },
  { symbol: "INDIANB", name: "INDIAN BANK", instrument_key: "NSE_EQ|INE562A01011", lot_size: 1000 },
  { symbol: "INDIGO", name: "INTERGLOBE AVIATION LTD", instrument_key: "NSE_EQ|INE646L01027", lot_size: 150 },
  { symbol: "INDUSINDBK", name: "INDUSIND BANK LIMITED", instrument_key: "NSE_EQ|INE095A01012", lot_size: 700 },
  { symbol: "INDUSTOWER", name: "INDUS TOWERS LIMITED", instrument_key: "NSE_EQ|INE121J01017", lot_size: 1700 },
  { symbol: "INFY", name: "INFOSYS LIMITED", instrument_key: "NSE_EQ|INE009A01021", lot_size: 400 },
  { symbol: "INOXWIND", name: "INOX WIND LIMITED", instrument_key: "NSE_EQ|INE066P01011", lot_size: 3225 },
  { symbol: "IOC", name: "INDIAN OIL CORP LTD", instrument_key: "NSE_EQ|INE242A01010", lot_size: 4875 },
  { symbol: "IRB", name: "IRB INFRA DEV LTD.", instrument_key: "NSE_EQ|INE821I01022", lot_size: 11675 },
  { symbol: "IRCTC", name: "INDIAN RAIL TOUR CORP LTD", instrument_key: "NSE_EQ|INE335Y01020", lot_size: 875 },
  { symbol: "IREDA", name: "INDIAN RENEWABLE ENERGY", instrument_key: "NSE_EQ|INE202E01016", lot_size: 3450 },
  { symbol: "IRFC", name: "INDIAN RAILWAY FIN CORP L", instrument_key: "NSE_EQ|INE053F01010", lot_size: 4250 },
  { symbol: "ITC", name: "ITC LTD", instrument_key: "NSE_EQ|INE154A01025", lot_size: 1600 },
  { symbol: "JINDALSTEL", name: "JINDAL STEEL & POWER LTD", instrument_key: "NSE_EQ|INE749A01030", lot_size: 625 },
  { symbol: "JIOFIN", name: "JIO FIN SERVICES LTD", instrument_key: "NSE_EQ|INE758E01017", lot_size: 2350 },
  { symbol: "JSL", name: "JINDAL STAINLESS LIMITED", instrument_key: "NSE_EQ|INE220G01021", lot_size: 850 },
  { symbol: "JSWENERGY", name: "JSW ENERGY LIMITED", instrument_key: "NSE_EQ|INE121E01018", lot_size: 1000 },
  { symbol: "JSWSTEEL", name: "JSW STEEL LIMITED", instrument_key: "NSE_EQ|INE019A01038", lot_size: 675 },
  { symbol: "JUBLFOOD", name: "JUBILANT FOODWORKS LTD", instrument_key: "NSE_EQ|INE797F01020", lot_size: 1250 },
  { symbol: "KALYANKJIL", name: "KALYAN JEWELLERS IND LTD", instrument_key: "NSE_EQ|INE303R01014", lot_size: 1175 },
  { symbol: "KAYNES", name: "KAYNES TECHNOLOGY IND LTD", instrument_key: "NSE_EQ|INE918Z01012", lot_size: 100 },
  { symbol: "KEI", name: "KEI INDUSTRIES LTD.", instrument_key: "NSE_EQ|INE878B01027", lot_size: 175 },
  { symbol: "KFINTECH", name: "KFIN TECHNOLOGIES LIMITED", instrument_key: "NSE_EQ|INE138Y01010", lot_size: 450 },
  { symbol: "KOTAKBANK", name: "KOTAK MAHINDRA BANK LTD", instrument_key: "NSE_EQ|INE237A01028", lot_size: 400 },
  { symbol: "KPITTECH", name: "KPIT TECHNOLOGIES LIMITED", instrument_key: "NSE_EQ|INE04I401011", lot_size: 400 },
  { symbol: "LICHSGFIN", name: "LIC HOUSING FINANCE LTD", instrument_key: "NSE_EQ|INE115A01026", lot_size: 1000 },
  { symbol: "LICI", name: "LIFE INSURA CORP OF INDIA", instrument_key: "NSE_EQ|INE0J1Y01017", lot_size: 700 },
  { symbol: "LODHA", name: "MACROTECH DEVELOPERS LTD", instrument_key: "NSE_EQ|INE670K01029", lot_size: 450 },
  { symbol: "LT", name: "LARSEN & TOUBRO LTD.", instrument_key: "NSE_EQ|INE018A01030", lot_size: 175 },
  { symbol: "LTF", name: "L&T FINANCE LIMITED", instrument_key: "NSE_EQ|INE498L01015", lot_size: 4462 },
  { symbol: "LTIM", name: "LTIMINDTREE LIMITED", instrument_key: "NSE_EQ|INE214T01019", lot_size: 150 },
  { symbol: "LUPIN", name: "LUPIN LIMITED", instrument_key: "NSE_EQ|INE326A01037", lot_size: 425 },
  { symbol: "M&M", name: "MAHINDRA & MAHINDRA LTD", instrument_key: "NSE_EQ|INE101A01026", lot_size: 200 },
  { symbol: "M&MFIN", name: "M&M FIN. SERVICES LTD", instrument_key: "NSE_EQ|INE774D01024", lot_size: 2056 },
  { symbol: "MANAPPURAM", name: "MANAPPURAM FINANCE LTD", instrument_key: "NSE_EQ|INE522D01027", lot_size: 3000 },
  { symbol: "MANKIND", name: "MANKIND PHARMA LIMITED", instrument_key: "NSE_EQ|INE634S01028", lot_size: 225 },
  { symbol: "MARICO", name: "MARICO LIMITED", instrument_key: "NSE_EQ|INE196A01026", lot_size: 1200 },
  { symbol: "MARUTI", name: "MARUTI SUZUKI INDIA LTD.", instrument_key: "NSE_EQ|INE585B01010", lot_size: 50 },
  { symbol: "MAXHEALTH", name: "MAX HEALTHCARE INS LTD", instrument_key: "NSE_EQ|INE027H01010", lot_size: 525 },
  { symbol: "MAZDOCK", name: "MAZAGON DOCK SHIPBUIL LTD", instrument_key: "NSE_EQ|INE249Z01020", lot_size: 175 },
  { symbol: "MCX", name: "MULTI COMMODITY EXCHANGE", instrument_key: "NSE_EQ|INE745G01035", lot_size: 125 },
  { symbol: "MFSL", name: "MAX FINANCIAL SERV LTD", instrument_key: "NSE_EQ|INE180A01020", lot_size: 800 },
  { symbol: "MGL", name: "MAHANAGAR GAS LTD.", instrument_key: "NSE_EQ|INE002S01010", lot_size: 400 },
  { symbol: "MOTHERSON", name: "SAMVRDHNA MTHRSN INTL LTD", instrument_key: "NSE_EQ|INE775A01035", lot_size: 4100 },
  { symbol: "MPHASIS", name: "MPHASIS LIMITED", instrument_key: "NSE_EQ|INE356A01018", lot_size: 275 },
  { symbol: "MUTHOOTFIN", name: "MUTHOOT FINANCE LIMITED", instrument_key: "NSE_EQ|INE414G01012", lot_size: 275 },
  { symbol: "NATIONALUM", name: "NATIONAL ALUMINIUM CO LTD", instrument_key: "NSE_EQ|INE139A01034", lot_size: 3750 },
  { symbol: "NAUKRI", name: "INFO EDGE (I) LTD", instrument_key: "NSE_EQ|INE663F01032", lot_size: 375 },
  { symbol: "NBCC", name: "NBCC (INDIA) LIMITED", instrument_key: "NSE_EQ|INE095N01031", lot_size: 6500 },
  { symbol: "NCC", name: "NCC LIMITED", instrument_key: "NSE_EQ|INE868B01028", lot_size: 2700 },
  { symbol: "NESTLEIND", name: "NESTLE INDIA LIMITED", instrument_key: "NSE_EQ|INE239A01024", lot_size: 250 },
  { symbol: "NHPC", name: "NHPC LTD", instrument_key: "NSE_EQ|INE848E01016", lot_size: 6400 },
  { symbol: "NMDC", name: "NMDC LTD.", instrument_key: "NSE_EQ|INE584A01023", lot_size: 13500 },
  { symbol: "NTPC", name: "NTPC LTD", instrument_key: "NSE_EQ|INE733E01010", lot_size: 1500 },
  { symbol: "NYKAA", name: "FSN E COMMERCE VENTURES", instrument_key: "NSE_EQ|INE388Y01029", lot_size: 3125 },
  { symbol: "OBEROIRLTY", name: "OBEROI REALTY LIMITED", instrument_key: "NSE_EQ|INE093I01010", lot_size: 350 },
  { symbol: "OFSS", name: "ORACLE FIN SERV SOFT LTD.", instrument_key: "NSE_EQ|INE881D01027", lot_size: 75 },
  { symbol: "OIL", name: "OIL INDIA LTD", instrument_key: "NSE_EQ|INE274J01014", lot_size: 1400 },
  { symbol: "ONGC", name: "OIL AND NATURAL GAS CORP.", instrument_key: "NSE_EQ|INE213A01029", lot_size: 2250 },
  { symbol: "PAGEIND", name: "PAGE INDUSTRIES LTD", instrument_key: "NSE_EQ|INE761H01022", lot_size: 15 },
  { symbol: "PATANJALI", name: "PATANJALI FOODS LIMITED", instrument_key: "NSE_EQ|INE619A01035", lot_size: 300 },
  { symbol: "PAYTM", name: "ONE 97 COMMUNICATIONS LTD", instrument_key: "NSE_EQ|INE982J01020", lot_size: 725 },
  { symbol: "PEL", name: "PIRAMAL ENTERPRISES LTD", instrument_key: "NSE_EQ|INE140A01024", lot_size: 750 },
  { symbol: "PERSISTENT", name: "PERSISTENT SYSTEMS LTD", instrument_key: "NSE_EQ|INE262H01021", lot_size: 100 },
  { symbol: "PETRONET", name: "PETRONET LNG LIMITED", instrument_key: "NSE_EQ|INE347G01014", lot_size: 1800 },
  { symbol: "PFC", name: "POWER FIN CORP LTD.", instrument_key: "NSE_EQ|INE134E01011", lot_size: 1300 },
  { symbol: "PGEL", name: "PG ELECTROPLAST LTD", instrument_key: "NSE_EQ|INE457L01029", lot_size: 700 },
  { symbol: "PHOENIXLTD", name: "THE PHOENIX MILLS LTD", instrument_key: "NSE_EQ|INE211B01039", lot_size: 350 },
  { symbol: "PIDILITIND", name: "PIDILITE INDUSTRIES LTD", instrument_key: "NSE_EQ|INE318A01026", lot_size: 250 },
  { symbol: "PIIND", name: "PI INDUSTRIES LTD", instrument_key: "NSE_EQ|INE603J01030", lot_size: 175 },
  { symbol: "PNB", name: "PUNJAB NATIONAL BANK", instrument_key: "NSE_EQ|INE160A01022", lot_size: 8000 },
  { symbol: "PNBHOUSING", name: "PNB HOUSING FIN LTD.", instrument_key: "NSE_EQ|INE572E01012", lot_size: 650 },
  { symbol: "POLICYBZR", name: "PB FINTECH LIMITED", instrument_key: "NSE_EQ|INE417T01026", lot_size: 350 },
  { symbol: "POLYCAB", name: "POLYCAB INDIA LIMITED", instrument_key: "NSE_EQ|INE455K01017", lot_size: 125 },
  { symbol: "POONAWALLA", name: "POONAWALLA FINCORP LTD", instrument_key: "NSE_EQ|INE511C01022", lot_size: 1700 },
  { symbol: "POWERGRID", name: "POWER GRID CORP. LTD.", instrument_key: "NSE_EQ|INE752E01010", lot_size: 1900 },
  { symbol: "PPLPHARMA", name: "PIRAMAL PHARMA LIMITED", instrument_key: "NSE_EQ|INE0DK501011", lot_size: 2500 },
  { symbol: "PRESTIGE", name: "PRESTIGE ESTATE LTD", instrument_key: "NSE_EQ|INE811K01011", lot_size: 450 },
  { symbol: "RBLBANK", name: "RBL BANK LIMITED", instrument_key: "NSE_EQ|INE976G01028", lot_size: 3175 },
  { symbol: "RECLTD", name: "REC LIMITED", instrument_key: "NSE_EQ|INE020B01018", lot_size: 1275 },
  { symbol: "RELIANCE", name: "RELIANCE INDUSTRIES LTD", instrument_key: "NSE_EQ|INE002A01018", lot_size: 500 },
  { symbol: "RVNL", name: "RAIL VIKAS NIGAM LIMITED", instrument_key: "NSE_EQ|INE415G01027", lot_size: 1375 },
  { symbol: "SAIL", name: "STEEL AUTHORITY OF INDIA", instrument_key: "NSE_EQ|INE114A01011", lot_size: 4700 },
  { symbol: "SBICARD", name: "SBI CARDS & PAY SER LTD", instrument_key: "NSE_EQ|INE018E01016", lot_size: 800 },
  { symbol: "SBILIFE", name: "SBI LIFE INSURANCE CO LTD", instrument_key: "NSE_EQ|INE123W01016", lot_size: 375 },
  { symbol: "SBIN", name: "STATE BANK OF INDIA", instrument_key: "NSE_EQ|INE062A01020", lot_size: 750 },
  { symbol: "SHREECEM", name: "SHREE CEMENT LIMITED", instrument_key: "NSE_EQ|INE070A01015", lot_size: 25 },
  { symbol: "SHRIRAMFIN", name: "SHRIRAM FINANCE LIMITED", instrument_key: "NSE_EQ|INE721A01047", lot_size: 825 },
  { symbol: "SIEMENS", name: "SIEMENS LTD", instrument_key: "NSE_EQ|INE003A01024", lot_size: 125 },
  { symbol: "SJVN", name: "SJVN LTD", instrument_key: "NSE_EQ|INE002L01015", lot_size: 5875 },
  { symbol: "SOLARINDS", name: "SOLAR INDUSTRIES (I) LTD", instrument_key: "NSE_EQ|INE343H01029", lot_size: 75 },
  { symbol: "SONACOMS", name: "SONA BLW PRECISION FRGS L", instrument_key: "NSE_EQ|INE073K01018", lot_size: 1050 },
  { symbol: "SRF", name: "SRF LTD", instrument_key: "NSE_EQ|INE647A01010", lot_size: 200 },
  { symbol: "SUNPHARMA", name: "SUN PHARMACEUTICAL IND L", instrument_key: "NSE_EQ|INE044A01036", lot_size: 350 },
  { symbol: "SUPREMEIND", name: "SUPREME INDUSTRIES LTD", instrument_key: "NSE_EQ|INE195A01028", lot_size: 175 },
  { symbol: "SYNGENE", name: "SYNGENE INTERNATIONAL LTD", instrument_key: "NSE_EQ|INE398R01022", lot_size: 1000 },
  { symbol: "TATACHEM", name: "TATA CHEMICALS LTD", instrument_key: "NSE_EQ|INE092A01019", lot_size: 650 },
  { symbol: "TATACOMM", name: "TATA COMMUNICATIONS LTD", instrument_key: "NSE_EQ|INE151A01013", lot_size: 350 },
  { symbol: "TATACONSUM", name: "TATA CONSUMER PRODUCT LTD", instrument_key: "NSE_EQ|INE192A01025", lot_size: 550 },
  { symbol: "TATAELXSI", name: "TATA ELXSI LIMITED", instrument_key: "NSE_EQ|INE670A01012", lot_size: 100 },
  { symbol: "TATAMOTORS", name: "TATA MOTORS LIMITED", instrument_key: "NSE_EQ|INE155A01022", lot_size: 800 },
  { symbol: "TATAPOWER", name: "TATA POWER CO LTD", instrument_key: "NSE_EQ|INE245A01021", lot_size: 1450 },
  { symbol: "TATASTEEL", name: "TATA STEEL LIMITED", instrument_key: "NSE_EQ|INE081A01020", lot_size: 5500 },
  { symbol: "TATATECH", name: "TATA TECHNOLOGIES LIMITED", instrument_key: "NSE_EQ|INE142M01025", lot_size: 800 },
  { symbol: "TCS", name: "TATA CONSULTANCY SERV LT", instrument_key: "NSE_EQ|INE467B01029", lot_size: 175 },
  { symbol: "TECHM", name: "TECH MAHINDRA LIMITED", instrument_key: "NSE_EQ|INE669C01036", lot_size: 600 },
  { symbol: "TIINDIA", name: "TUBE INVEST OF INDIA LTD", instrument_key: "NSE_EQ|INE974X01010", lot_size: 200 },
  { symbol: "TITAGARH", name: "TITAGARH RAIL SYSTEMS LTD", instrument_key: "NSE_EQ|INE615H01020", lot_size: 725 },
  { symbol: "TITAN", name: "TITAN COMPANY LIMITED", instrument_key: "NSE_EQ|INE280A01028", lot_size: 175 },
  { symbol: "TORNTPHARM", name: "TORRENT PHARMACEUTICALS L", instrument_key: "NSE_EQ|INE685A01028", lot_size: 250 },
  { symbol: "TORNTPOWER", name: "TORRENT POWER LTD", instrument_key: "NSE_EQ|INE813H01021", lot_size: 375 },
  { symbol: "TRENT", name: "TRENT LTD", instrument_key: "NSE_EQ|INE849A01020", lot_size: 100 },
  { symbol: "TVSMOTOR", name: "TVS MOTOR COMPANY LTD", instrument_key: "NSE_EQ|INE494B01023", lot_size: 350 },
  { symbol: "ULTRACEMCO", name: "ULTRATECH CEMENT LIMITED", instrument_key: "NSE_EQ|INE481G01011", lot_size: 50 },
  { symbol: "UNIONBANK", name: "UNION BANK OF INDIA", instrument_key: "NSE_EQ|INE692A01016", lot_size: 4425 },
  { symbol: "UNITDSPR", name: "UNITED SPIRITS LIMITED", instrument_key: "NSE_EQ|INE854D01024", lot_size: 400 },
  { symbol: "UNOMINDA", name: "UNO MINDA LIMITED", instrument_key: "NSE_EQ|INE405E01023", lot_size: 550 },
  { symbol: "UPL", name: "UPL LIMITED", instrument_key: "NSE_EQ|INE628A01036", lot_size: 1355 },
  { symbol: "VBL", name: "VARUN BEVERAGES LIMITED", instrument_key: "NSE_EQ|INE200M01039", lot_size: 1025 },
  { symbol: "VEDL", name: "VEDANTA LIMITED", instrument_key: "NSE_EQ|INE205A01025", lot_size: 1150 },
  { symbol: "VOLTAS", name: "VOLTAS LTD", instrument_key: "NSE_EQ|INE226A01021", lot_size: 375 },
  { symbol: "WIPRO", name: "WIPRO LTD", instrument_key: "NSE_EQ|INE075A01022", lot_size: 3000 },
  { symbol: "YESBANK", name: "YES BANK LIMITED", instrument_key: "NSE_EQ|INE528G01035", lot_size: 31100 },
  { symbol: "ZYDUSLIFE", name: "ZYDUS LIFESCIENCES LTD", instrument_key: "NSE_EQ|INE010B01027", lot_size: 900 }
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
