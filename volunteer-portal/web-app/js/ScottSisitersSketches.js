/**
 * Scott Sisters Lookup function for displaying a painting number
 *
 * Created by IntelliJ IDEA.
 * User: nick
 * Date: 28/10/11
 * Time: 12:36 PM
 * To change this template use File | Settings | File Templates.
 */

var sketchesMap = {
    3: "ams563_400a.jpg",
    4: "ams563_310.jpg",
    5: "ams563_310.jpg",
    6: "ams563_142a.jpg",
    10: "ams563_317.jpg",
    11: "ams563_040a.jpg",
    11: "ams563_317.jpg",
    12: "ams563_158.jpg",
    38: "ams563_044.jpg",
    39: "ams563_044.jpg",
    40: "ams563_044.jpg",
    43: "ams563_285.jpg",
    45: "ams563_162a.jpg",
    55: "ams563_044.jpg",
    56: "ams563_075.jpg",
    57: "ams563_075.jpg",
    58: "ams563_075.jpg",
    59: "ams563_075.jpg",
    66: "ams563_153.jpg",
    69: "ams563_307.jpg",
    70: "ams563_307.jpg",
    71: "ams563_307.jpg",
    72: "ams563_320a.jpg",
    73: "ams563_320a.jpg",
    74: "ams563_320a.jpg",
    75: "ams563_305.jpg",
    76: "ams563_305.jpg",
    77: "ams563_305.jpg",
    80: "ams563_279.jpg",
    81: "ams563_279.jpg",
    82: "ams563_279.jpg",
    83: "ams563_045.jpg",
    84: "ams563_045.jpg",
    85: "ams563_045.jpg",
    86 : "ams563_045.jpg",
    89: "ams563_279.jpg",
    90: "ams563_304a.jpg",
    91: "ams563_304a.jpg",
    92: "ams563_304a.jpg",
    93: "ams563_304a.jpg",
    94: "ams563_292.jpg",
    95: "ams563_292.jpg",
    96: "ams563_292.jpg",
    102: "ams563_174.jpg",
    103: "ams563_174.jpg",
    110: "ams563_319.jpg",
    111: "ams563_319.jpg",
    112: "ams563_319.jpg",
    113: "ams563_348.jpg",
    114: "ams563_348.jpg",
    115: "ams563_350.jpg",
    116: "ams563_350.jpg",
    117: "ams563_408.jpg",
    118: "ams563_408.jpg",
    119: "ams563_408.jpg",
    120: "ams563_324.jpg",
    121: "ams563_324.jpg",
    122: "ams563_324.jpg",
    123: "ams563_324.jpg",
    138: "ams563_354.jpg",
    139: "ams563_354.jpg",
    140: "ams563_325a.jpg",
    141: "ams563_325a.jpg",
    142: "ams563_325a.jpg",
    143: "ams563_325a.jpg",
    144: "ams563_325a.jpg",
    145: "ams563_325a.jpg",
    152: "ams563_318.jpg",
    153: "ams563_318.jpg",
    154: "ams563_318.jpg",
    187: "ams563_278.jpg",
    188: "ams563_278.jpg",
    189: "ams563_278.jpg",
    190: "ams563_278.jpg",
    191: "ams563_278.jpg",
    192: "ams563_278.jpg",
    193: "ams563_278.jpg",
    212: "ams563_280.jpg",
    213: "ams563_280.jpg",
    253: "ams563_323a.jpg",
    254: "ams563_323a.jpg",
    255: "ams563_323a.jpg",
    257: "ams563_066.jpg",
    258: "ams563_066.jpg",
    260: "ams563_066.jpg",
    261: "ams563_066.jpg",
    262: "ams563_066.jpg",
    269: "ams563_196.jpg",
    270: "ams563_196.jpg",
    271: "ams563_196.jpg",
    272: "ams563_196.jpg",
    276: "ams563_321.jpg",
    277: "ams563_321.jpg",
    278: "ams563_321.jpg",
    283: "ams563_054.jpg",
    284: "ams563_054.jpg",
    285: "ams563_054.jpg",
    286: "ams563_178.jpg",
    287: "ams563_178.jpg",
    288: "ams563_178.jpg",
    297: "ams563_274.jpg",
    298: "ams563_274.jpg",
    299: "ams563_274.jpg",
    300: "ams563_274.jpg",
    304: "ams563_342.jpg",
    305: "ams563_342.jpg",
    306: "ams563_342.jpg",
    307: "ams563_342.jpg",
    308: "ams563_055.jpg",
    309: "ams563_055.jpg",
    310: "ams563_055.jpg",
    326: "ams563_077a.jpg",
    328: "ams563_303a.jpg",
    334: "ams563_202.jpg",
    335: "ams563_182a.jpg",
    340: "ams563_322a.jpg",
    343: "ams563_291a.jpg",
    348: "ams563_189a.jpg",
    351: "ams563_002a.jpg",
    351: "ams563_030.jpg",
    356: "ams563_070a.jpg",
    359: "ams563_057a.jpg",
    368: "ams563_181a.jpg",
    371: "ams563_069a.jpg",
    374: "ams563_138a.jpg",
    377: "ams563_353a.jpg",
    379: "ams563_337a.jpg",
    381: "ams563_025a.jpg",
    385: "ams563_029a.jpg",
    386: "ams563_083a.jpg",
    388: "ams563_047a.jpg",
    389: "ams563_205a.jpg",
    391: "ams563_033a.jpg",
    394: "ams563_183a.jpg",
    398: "ams563_053a.jpg",
    401: "ams563_082a.jpg",
    407: "ams563_046a.jpg",
    408: "ams563_037a.jpg",
    410: "ams563_081a.jpg",
    411: "ams563_067a.jpg",
    412: "ams563_073_1a.jpg",
    416: "ams563_343a.jpg",
    417: "ams563_143a.jpg",
    419: "ams563_180a.jpg",
    422: "ams563_051a.jpg",
    425: "ams563_050a.jpg",
    427: "ams563_341a.jpg",
    436: "ams563_332a.jpg",
    437: "ams563_043a.jpg",
    439: "ams563_039a.jpg",
    442: "ams563_192a.jpg",
    444: "ams563_195a.jpg",
    446: "ams563_193a.jpg",
    449: "ams563_188a.jpg",
    451: "ams563_199a.jpg",
    453: "ams563_175a.jpg",
    454: "ams563_026a.jpg",
    456: "ams563_035a.jpg",
    457: "ams563_032a.jpg",
    458: "ams563_004a.jpg",
    460: "ams563_028a.jpg",
    464: "ams563_049a.jpg",
    467: "ams563_058a.jpg",
    468: "ams563_190a.jpg",
    469: "ams563_338a.jpg",
    470: "ams563_048a.jpg",
    471: "ams563_267a.jpg",
    479: "ams563_204a.jpg",
    482: "ams563_056a.jpg",
    483: "ams563_184a.jpg",
    484: "ams563_197a.jpg",
    485: "ams563_042a.jpg",
    486: "ams563_074a.jpg",
    487: "ams563_071a.jpg",
    488: "ams563_191a.jpg",
    489: "ams563_052a.jpg",
    493: "ams563_061a.jpg",
    495: "ams563_312a.jpg",
    497: "ams563_141a.jpg",
    498: "ams563_313a.jpg",
    502: "ams563_198a.jpg",
    504: "ams563_326a.jpg",
    505: "ams563_314a.jpg",
    507: "ams563_315a.jpg",
    508: "ams563_186a.jpg",
    511: "ams563_041a.jpg",
    512: "ams563_179a.jpg",
    515: "ams563_027a.jpg",
    516: "ams563_062a.jpg",
    518: "ams563_344a.jpg",
    522: "ams563_201a.jpg",
    562: "ams563_076a.jpg",
    602: "ams563_203a.jpg"
};

var prefixUri = "http://volunteer.ala.org.au/uploads/scottSisters/Sketches/";

function getSketchUri(sketchNumber) {
    var sketchUri = null;
    var intRegex = /^\d+$/;

    if (intRegex.test(sketchNumber) && sketchesMap[sketchNumber]) {
        sketchUri = prefixUri + sketchesMap[sketchNumber]
    }

    return sketchUri;
}