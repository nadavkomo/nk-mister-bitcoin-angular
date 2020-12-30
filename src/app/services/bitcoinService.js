import axios from 'axios';
import { storageService } from './storageService';

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getTradeVolume,
    getUsdValue
}

async function getRate(coins) {
    try {
        const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
        storageService.store('BTC_VALUE', res.data)
        return res.data;
    } catch (err) {
        console.error('ERROR!', err)
        return storageService.load('BTC_VALUE')
    }
}

const marketPrice1 = {
    "status": "ok",
    "name": "Market Price (USD)",
    "unit": "USD",
    "period": "day",
    "description": "Average USD market price across major bitcoin exchanges.",
    "values": [{
        "x": 1595203200,
        "y": 9214.66
    },
    {
        "x": 1595289600,
        "y": 9163.87
    },
    {
        "x": 1595376000,
        "y": 9392.66
    },
    {
        "x": 1595462400,
        "y": 9537.4
    },
    {
        "x": 1595548800,
        "y": 9613.11
    },
    {
        "x": 1595635200,
        "y": 9551.28
    },
    {
        "x": 1595721600,
        "y": 9707.5
    },
    {
        "x": 1595808000,
        "y": 9938.83
    },
    {
        "x": 1595894400,
        "y": 11042.4
    },
    {
        "x": 1595980800,
        "y": 10934.94
    },
    {
        "x": 1596067200,
        "y": 11102.67
    },
    {
        "x": 1596153600,
        "y": 11114.93
    },
    {
        "x": 1596240000,
        "y": 11343.88
    },
    {
        "x": 1596326400,
        "y": 11823.69
    },
    {
        "x": 1596412800,
        "y": 11077.77
    },
    {
        "x": 1596499200,
        "y": 11242.57
    },
    {
        "x": 1596585600,
        "y": 11194.25
    },
    {
        "x": 1596672000,
        "y": 11750.28
    },
    {
        "x": 1596758400,
        "y": 11772.94
    },
    {
        "x": 1596844800,
        "y": 11605.6
    },
    {
        "x": 1596931200,
        "y": 11767.6
    },
    {
        "x": 1597017600,
        "y": 11684.06
    },
    {
        "x": 1597104000,
        "y": 11893.03
    },
    {
        "x": 1597190400,
        "y": 11392.43
    },
    {
        "x": 1597276800,
        "y": 11573.11
    },
    {
        "x": 1597363200,
        "y": 11777.43
    },
    {
        "x": 1597449600,
        "y": 11774.38
    },
    {
        "x": 1597536000,
        "y": 11873.98
    },
    {
        "x": 1597622400,
        "y": 11914.01
    },
    {
        "x": 1597708800,
        "y": 12293.72
    },
    {
        "x": 1597795200,
        "y": 11969.53
    },
    {
        "x": 1597881600,
        "y": 11734
    },
    {
        "x": 1597968000,
        "y": 11865.82
    },
    {
        "x": 1598054400,
        "y": 11522.8
    },
    {
        "x": 1598140800,
        "y": 11683.44
    },
    {
        "x": 1598227200,
        "y": 11653.02
    },
    {
        "x": 1598313600,
        "y": 11763.93
    },
    {
        "x": 1598400000,
        "y": 11337.4
    },
    {
        "x": 1598486400,
        "y": 11467.37
    },
    {
        "x": 1598572800,
        "y": 11302.01
    },
    {
        "x": 1598659200,
        "y": 11534.75
    },
    {
        "x": 1598745600,
        "y": 11481.64
    },
    {
        "x": 1598832000,
        "y": 11707.78
    },
    {
        "x": 1598918400,
        "y": 11659.57
    },
    {
        "x": 1599004800,
        "y": 11923.25
    },
    {
        "x": 1599091200,
        "y": 11397.44
    },
    {
        "x": 1599177600,
        "y": 10187.51
    },
    {
        "x": 1599264000,
        "y": 10467.89
    },
    {
        "x": 1599350400,
        "y": 10159.62
    },
    {
        "x": 1599436800,
        "y": 10254.93
    },
    {
        "x": 1599523200,
        "y": 10367.74
    },
    {
        "x": 1599609600,
        "y": 10121.52
    },
    {
        "x": 1599696000,
        "y": 10227.83
    },
    {
        "x": 1599782400,
        "y": 10352.66
    },
    {
        "x": 1599868800,
        "y": 10395.44
    },
    {
        "x": 1599955200,
        "y": 10446.44
    },
    {
        "x": 1600041600,
        "y": 10330.77
    },
    {
        "x": 1600128000,
        "y": 10674.64
    },
    {
        "x": 1600214400,
        "y": 10785.62
    },
    {
        "x": 1600300800,
        "y": 10948.43
    },
    {
        "x": 1600387200,
        "y": 10943.89
    },
    {
        "x": 1600473600,
        "y": 10931.79
    },
    {
        "x": 1600560000,
        "y": 11081.43
    },
    {
        "x": 1600646400,
        "y": 10919.65
    },
    {
        "x": 1600732800,
        "y": 10430.46
    },
    {
        "x": 1600819200,
        "y": 10532.22
    },
    {
        "x": 1600905600,
        "y": 10234.48
    },
    {
        "x": 1600992000,
        "y": 10732.43
    },
    {
        "x": 1601078400,
        "y": 10692.84
    },
    {
        "x": 1601164800,
        "y": 10732.4
    },
    {
        "x": 1601251200,
        "y": 10774.24
    },
    {
        "x": 1601337600,
        "y": 10692.33
    },
    {
        "x": 1601424000,
        "y": 10840.8
    },
    {
        "x": 1601510400,
        "y": 10777.92
    },
    {
        "x": 1601596800,
        "y": 10619.24
    },
    {
        "x": 1601683200,
        "y": 10575.06
    },
    {
        "x": 1601769600,
        "y": 10551.77
    },
    {
        "x": 1601856000,
        "y": 10673.46
    },
    {
        "x": 1601942400,
        "y": 10788.56
    },
    {
        "x": 1602028800,
        "y": 10603.74
    },
    {
        "x": 1602115200,
        "y": 10670.8
    },
    {
        "x": 1602201600,
        "y": 10923.3
    },
    {
        "x": 1602288000,
        "y": 11063.19
    },
    {
        "x": 1602374400,
        "y": 11302.67
    },
    {
        "x": 1602460800,
        "y": 11376.61
    },
    {
        "x": 1602547200,
        "y": 11540.04
    },
    {
        "x": 1602633600,
        "y": 11428.24
    },
    {
        "x": 1602720000,
        "y": 11431.32
    },
    {
        "x": 1602806400,
        "y": 11503.73
    },
    {
        "x": 1602892800,
        "y": 11327.57
    },
    {
        "x": 1602979200,
        "y": 11366.51
    },
    {
        "x": 1603065600,
        "y": 11508.2
    },
    {
        "x": 1603152000,
        "y": 11758.16
    },
    {
        "x": 1603238400,
        "y": 11925.46
    },
    {
        "x": 1603324800,
        "y": 12831.56
    },
    {
        "x": 1603411200,
        "y": 12990.25
    },
    {
        "x": 1603497600,
        "y": 12944.52
    },
    {
        "x": 1603584000,
        "y": 13128.46
    },
    {
        "x": 1603670400,
        "y": 13036.77
    },
    {
        "x": 1603756800,
        "y": 13076.37
    },
    {
        "x": 1603843200,
        "y": 13651.47
    },
    {
        "x": 1603929600,
        "y": 13289
    },
    {
        "x": 1604016000,
        "y": 13458.66
    },
    {
        "x": 1604102400,
        "y": 13564.72
    },
    {
        "x": 1604188800,
        "y": 13810.32
    },
    {
        "x": 1604275200,
        "y": 13758.88
    },
    {
        "x": 1604361600,
        "y": 13575.17
    },
    {
        "x": 1604448000,
        "y": 14023.31
    },
    {
        "x": 1604534400,
        "y": 14155.59
    },
    {
        "x": 1604620800,
        "y": 15591.39
    },
    {
        "x": 1604707200,
        "y": 15595.77
    },
    {
        "x": 1604793600,
        "y": 14839.84
    },
    {
        "x": 1604880000,
        "y": 15490.6
    },
    {
        "x": 1604966400,
        "y": 15328.53
    },
    {
        "x": 1605052800,
        "y": 15317.04
    },
    {
        "x": 1605139200,
        "y": 15708.65
    },
    {
        "x": 1605225600,
        "y": 16295.57
    },
    {
        "x": 1605312000,
        "y": 16339.33
    },
    {
        "x": 1605398400,
        "y": 16091.07
    },
    {
        "x": 1605484800,
        "y": 15968.16
    },
    {
        "x": 1605571200,
        "y": 16725.15
    },
    {
        "x": 1605657600,
        "y": 17679.72
    },
    {
        "x": 1605744000,
        "y": 17798.45
    },
    {
        "x": 1605830400,
        "y": 17820.57
    },
    {
        "x": 1605916800,
        "y": 18687.45
    },
    {
        "x": 1606003200,
        "y": 18699.75
    },
    {
        "x": 1606089600,
        "y": 18422.28
    },
    {
        "x": 1606176000,
        "y": 18398.91
    },
    {
        "x": 1606262400,
        "y": 19172.52
    },
    {
        "x": 1606348800,
        "y": 18739.8
    },
    {
        "x": 1606435200,
        "y": 17151.44
    },
    {
        "x": 1606521600,
        "y": 17138.87
    },
    {
        "x": 1606608000,
        "y": 17732.42
    },
    {
        "x": 1606694400,
        "y": 18191.6
    },
    {
        "x": 1606780800,
        "y": 19709.73
    },
    {
        "x": 1606867200,
        "y": 18792.52
    },
    {
        "x": 1606953600,
        "y": 19226.97
    },
    {
        "x": 1607040000,
        "y": 19454.54
    },
    {
        "x": 1607126400,
        "y": 18670.49
    },
    {
        "x": 1607212800,
        "y": 19155.06
    },
    {
        "x": 1607299200,
        "y": 19377.66
    },
    {
        "x": 1607385600,
        "y": 19181.41
    },
    {
        "x": 1607472000,
        "y": 18318.87
    },
    {
        "x": 1607558400,
        "y": 18554.15
    },
    {
        "x": 1607644800,
        "y": 18247.76
    },
    {
        "x": 1607731200,
        "y": 18029.36
    },
    {
        "x": 1607817600,
        "y": 18803.44
    },
    {
        "x": 1607904000,
        "y": 19164.48
    },
    {
        "x": 1607990400,
        "y": 19276.59
    },
    {
        "x": 1608076800,
        "y": 19439.75
    },
    {
        "x": 1608163200,
        "y": 21379.48
    }
    ]
}
// https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true
async function getMarketPrice() {
    var marketPrice;
    try {
        // const res = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
        // marketPrice = res.data;
        // storageService.store('marketPrice', marketPrice)
    } catch (err) {
        // console.error('ERROR!', err)
        // marketPrice = storageService.load('marketPrice')
    } finally {
        for (const key in marketPrice1) {
            if (key === 'values') {
                var values = []
                values = marketPrice1[key].map(value => {
                    return value.y
                })
            }
        }
        return { values: marketPrice1.values, name: marketPrice1.name, desc: marketPrice1.description };
    }

}


const tradeValume1 = {
    "status": "ok",
    "name": "USD Exchange Trade Volume",
    "unit": "Trade Volume (USD)",
    "period": "day",
    "description": "The total USD value of trading volume on major bitcoin exchanges.",
    "values": [{
        "x": 1595203200,
        "y": 32799397.9768
    },
    {
        "x": 1595289600,
        "y": 59994848.8643
    },
    {
        "x": 1595376000,
        "y": 114760459.146
    },
    {
        "x": 1595462400,
        "y": 103269918.086
    },
    {
        "x": 1595548800,
        "y": 168395155.0164
    },
    {
        "x": 1595635200,
        "y": 128787740.2896
    },
    {
        "x": 1595721600,
        "y": 83145125.8
    },
    {
        "x": 1595808000,
        "y": 169823595.5504
    },
    {
        "x": 1595894400,
        "y": 569642411.592
    },
    {
        "x": 1595980800,
        "y": 352662968.6388
    },
    {
        "x": 1596067200,
        "y": 253835681.0886
    },
    {
        "x": 1596153600,
        "y": 201165672.4417
    },
    {
        "x": 1596240000,
        "y": 222815243.1332
    },
    {
        "x": 1596326400,
        "y": 240815458.968
    },
    {
        "x": 1596412800,
        "y": 289592847.786
    },
    {
        "x": 1596499200,
        "y": 159671026.4652
    },
    {
        "x": 1596585600,
        "y": 122455803.7725
    },
    {
        "x": 1596672000,
        "y": 182136390.168
    },
    {
        "x": 1596758400,
        "y": 203809369.9392
    },
    {
        "x": 1596844800,
        "y": 215793133.728
    },
    {
        "x": 1596931200,
        "y": 86008564.668
    },
    {
        "x": 1597017600,
        "y": 59683346.886
    },
    {
        "x": 1597104000,
        "y": 218397180.6838
    },
    {
        "x": 1597190400,
        "y": 249861736.7918
    },
    {
        "x": 1597276800,
        "y": 141688775.6123
    },
    {
        "x": 1597363200,
        "y": 161732026.4091
    },
    {
        "x": 1597449600,
        "y": 131449767.039
    },
    {
        "x": 1597536000,
        "y": 101333020.2792
    },
    {
        "x": 1597622400,
        "y": 63773670.1483
    },
    {
        "x": 1597708800,
        "y": 253521339.7144
    },
    {
        "x": 1597795200,
        "y": 217771115.2187
    },
    {
        "x": 1597881600,
        "y": 208815095.82
    },
    {
        "x": 1597968000,
        "y": 96746302.15519999
    },
    {
        "x": 1598054400,
        "y": 153928936.99199998
    },
    {
        "x": 1598140800,
        "y": 85029155.46000001
    },
    {
        "x": 1598227200,
        "y": 39027595.4028
    },
    {
        "x": 1598313600,
        "y": 75749356.9416
    },
    {
        "x": 1598400000,
        "y": 168869325.88599998
    },
    {
        "x": 1598486400,
        "y": 104337127.35570002
    },
    {
        "x": 1598572800,
        "y": 152064701.8666
    },
    {
        "x": 1598659200,
        "y": 125753228.67
    },
    {
        "x": 1598745600,
        "y": 48056174.58719999
    },
    {
        "x": 1598832000,
        "y": 54121905.8394
    },
    {
        "x": 1598918400,
        "y": 102290923.35409999
    },
    {
        "x": 1599004800,
        "y": 176627448.525
    },
    {
        "x": 1599091200,
        "y": 265432700.672
    },
    {
        "x": 1599177600,
        "y": 361418115.39089996
    },
    {
        "x": 1599264000,
        "y": 310980390.15669996
    },
    {
        "x": 1599350400,
        "y": 222072428.23080003
    },
    {
        "x": 1599436800,
        "y": 89153592.5889
    },
    {
        "x": 1599523200,
        "y": 153205856.4958
    },
    {
        "x": 1599609600,
        "y": 194156867.12160003
    },
    {
        "x": 1599696000,
        "y": 113383268.7008
    },
    {
        "x": 1599782400,
        "y": 147055601.2892
    },
    {
        "x": 1599868800,
        "y": 101653161.4472
    },
    {
        "x": 1599955200,
        "y": 57857607.940000005
    },
    {
        "x": 1600041600,
        "y": 81937985.7165
    },
    {
        "x": 1600128000,
        "y": 143525658.62719998
    },
    {
        "x": 1600214400,
        "y": 135273030.3276
    },
    {
        "x": 1600300800,
        "y": 154480376.5826
    },
    {
        "x": 1600387200,
        "y": 117116914.34619999
    },
    {
        "x": 1600473600,
        "y": 88269394.26240002
    },
    {
        "x": 1600560000,
        "y": 54811966.3947
    },
    {
        "x": 1600646400,
        "y": 69233310.9125
    },
    {
        "x": 1600732800,
        "y": 193630537.917
    },
    {
        "x": 1600819200,
        "y": 99403513.6488
    },
    {
        "x": 1600905600,
        "y": 124490884.2376
    },
    {
        "x": 1600992000,
        "y": 124807106.4971
    },
    {
        "x": 1601078400,
        "y": 129716552.8944
    },
    {
        "x": 1601164800,
        "y": 48519033.92
    },
    {
        "x": 1601251200,
        "y": 50063044.872
    },
    {
        "x": 1601337600,
        "y": 109557462.41880001
    },
    {
        "x": 1601424000,
        "y": 89865245.23200001
    },
    {
        "x": 1601510400,
        "y": 89894642.8896
    },
    {
        "x": 1601596800,
        "y": 183013787.4308
    },
    {
        "x": 1601683200,
        "y": 150343724.50919998
    },
    {
        "x": 1601769600,
        "y": 31477196.1224
    },
    {
        "x": 1601856000,
        "y": 31512003.100199997
    },
    {
        "x": 1601942400,
        "y": 78412225.0504
    },
    {
        "x": 1602028800,
        "y": 103826838.3222
    },
    {
        "x": 1602115200,
        "y": 102699834.10399999
    },
    {
        "x": 1602201600,
        "y": 142856446.66199997
    },
    {
        "x": 1602288000,
        "y": 120551930.57730001
    },
    {
        "x": 1602374400,
        "y": 97927463.147
    },
    {
        "x": 1602460800,
        "y": 60215827.8995
    },
    {
        "x": 1602547200,
        "y": 166313556.27480003
    },
    {
        "x": 1602633600,
        "y": 117568933.25919999
    },
    {
        "x": 1602720000,
        "y": 93932070.9456
    },
    {
        "x": 1602806400,
        "y": 111854678.0582
    },
    {
        "x": 1602892800,
        "y": 109053461.5582
    },
    {
        "x": 1602979200,
        "y": 34142836.4031
    },
    {
        "x": 1603065600,
        "y": 29716243.876
    },
    {
        "x": 1603152000,
        "y": 139587584.348
    },
    {
        "x": 1603238400,
        "y": 167903083.01479998
    },
    {
        "x": 1603324800,
        "y": 486931525.61759996
    },
    {
        "x": 1603411200,
        "y": 234841376.76999998
    },
    {
        "x": 1603497600,
        "y": 151273932.4116
    },
    {
        "x": 1603584000,
        "y": 69928610.9054
    },
    {
        "x": 1603670400,
        "y": 111062981.3517
    },
    {
        "x": 1603756800,
        "y": 176006371.0356
    },
    {
        "x": 1603843200,
        "y": 325461283.4025
    },
    {
        "x": 1603929600,
        "y": 310741338.15
    },
    {
        "x": 1604016000,
        "y": 228409072.2456
    },
    {
        "x": 1604102400,
        "y": 265607933.7288
    },
    {
        "x": 1604188800,
        "y": 194274881.2584
    },
    {
        "x": 1604275200,
        "y": 81876480.6928
    },
    {
        "x": 1604361600,
        "y": 202098850.1063
    },
    {
        "x": 1604448000,
        "y": 213888432.2785
    },
    {
        "x": 1604534400,
        "y": 303936796.2285
    },
    {
        "x": 1604620800,
        "y": 575483038.2308999
    },
    {
        "x": 1604707200,
        "y": 418654253.4993
    },
    {
        "x": 1604793600,
        "y": 320513832.288
    },
    {
        "x": 1604880000,
        "y": 168415197.354
    },
    {
        "x": 1604966400,
        "y": 392305674.1401
    },
    {
        "x": 1605052800,
        "y": 230269180.3512
    },
    {
        "x": 1605139200,
        "y": 298105721.52049994
    },
    {
        "x": 1605225600,
        "y": 478495947.4292
    },
    {
        "x": 1605312000,
        "y": 264263990.3617
    },
    {
        "x": 1605398400,
        "y": 163501040.4486
    },
    {
        "x": 1605484800,
        "y": 97292561.7456
    },
    {
        "x": 1605571200,
        "y": 293272996.4775
    },
    {
        "x": 1605657600,
        "y": 424743957.97920007
    },
    {
        "x": 1605744000,
        "y": 633847834.5785
    },
    {
        "x": 1605830400,
        "y": 358043942.4177
    },
    {
        "x": 1605916800,
        "y": 374130037.1055
    },
    {
        "x": 1606003200,
        "y": 256287553.65
    },
    {
        "x": 1606089600,
        "y": 276025442.5872
    },
    {
        "x": 1606176000,
        "y": 344268444.6285
    },
    {
        "x": 1606262400,
        "y": 523228040.5104
    },
    {
        "x": 1606348800,
        "y": 357330319.00200003
    },
    {
        "x": 1606435200,
        "y": 867494794.0976
    },
    {
        "x": 1606521600,
        "y": 334361872.05259997
    },
    {
        "x": 1606608000,
        "y": 203020072.4978
    },
    {
        "x": 1606694400,
        "y": 192293943.96799996
    },
    {
        "x": 1606780800,
        "y": 570429939.1842
    },
    {
        "x": 1606867200,
        "y": 586228902.896
    },
    {
        "x": 1606953600,
        "y": 311500178.6337
    },
    {
        "x": 1607040000,
        "y": 269817738.8956
    },
    {
        "x": 1607126400,
        "y": 278793731.2368
    },
    {
        "x": 1607212800,
        "y": 114151706.81100002
    },
    {
        "x": 1607299200,
        "y": 119935507.4742
    },
    {
        "x": 1607385600,
        "y": 176619929.6967
    },
    {
        "x": 1607472000,
        "y": 273878281.0107
    },
    {
        "x": 1607558400,
        "y": 377966775.1915
    },
    {
        "x": 1607644800,
        "y": 264270264.55839998
    },
    {
        "x": 1607731200,
        "y": 291983141.38320005
    },
    {
        "x": 1607817600,
        "y": 175018094.7288
    },
    {
        "x": 1607904000,
        "y": 197236995.26399997
    },
    {
        "x": 1607990400,
        "y": 156397143.1788
    },
    {
        "x": 1608076800,
        "y": 288887515.235
    },
    {
        "x": 1608163200,
        "y": 712598806.4956
    }
    ]
}
// https: //api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true
async function getTradeVolume() {
    var tradeValume;
    try {
        // const res = await axios.get(`htps://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true`)
        // tradeValume = res.data;
        // console.log(tradeValume);
        // storageService.store('tradeValume', tradeValume)
    } catch (err) {
        // console.error('ERROR!', err)
        // tradeValume = storageService.load('tradeValume')
    } finally {
        for (const key in tradeValume1) {
            if (key === 'values') {
                var values = []
                values = tradeValume1[key].map(value => {
                    return value.y
                })
            }
        }
        return { values: tradeValume1.values, name: tradeValume1.name, desc: tradeValume1.description };
    }
}

async function getUsdValue(amountBtc) {
    const rate = await getRate(1)
    console.log((amountBtc * (1 / rate )).toFixed(2).toLocaleString());
    return Promise.resolve((amountBtc * (1 / rate)).toFixed(2).toLocaleString())
}

