import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

import * as ss from 'simple-statistics';
const _ = require('lodash');
import { formatJSONResponse } from './lib/apiGateway';
import { result } from 'lodash';
import { readFile } from 'fs/promises';

const redis = require('redis');
const { promisify } = require("util");
const client = redis.createClient({ host: 'users-001.2qoi21.0001.use1.cache.amazonaws.com'});
client.on("error", function (error) {
    console.error(error);
});

//hashes
const hset = promisify(client.hset).bind(client);
const hvals = promisify(client.hvals).bind(client);


export const handler = async (event: {key: string, value: string}, _context) => {
    try {
        console.log(toRedis);
        _.forEach(toRedis, async (elem, i) => {
            const email = elem[0];
            const pw = elem[1];
            const youtube = elem[2];
            const twitch = elem[3];
            await hset(`user:${i}`, "email", email, "password", pw, "youtube", youtube, "twitch", twitch);
        });
        const result = await hvals('user:0');
        return {
            statusCode: 200,
            result
        }
    } catch (err){
        return {
            error: err
        };
    }
}

const toRedis = [[ 'KathygGriggsd76@gmail.com', '1HFDeI8WQ00p', 'zw6d-qxmh-y6y8-a369-1qr9', 'live_715631108_DzcnCIHXFhl6QdEhXmZYZubJuwXZWd' ],   

[ 'cyrusyajaira5115@gmail.com', 'qQg0YefoWLSo', 'zqwm-g19f-rx8a-514z-3ym6', 'live_715949676_iHk43eEycCh12IfTN2MxvkYAQhR2cU' ],  

[ 'BrendaxLewiss69@gmail.com', 'Nl0792aFPkHr', 'zmvs-kvpg-ttfc-6v9k-ah27', 'live_714920984_g9WfY2jlzlvcGFNsl1q6XYbhO8dR3K' ],   

[ 'KathleenaHowardq56@gmail.com', 'RUzVo1aCbtI8', 'zh94-vm3s-pfvj-6sju-1pt5', 'live_715627603_YkByZFWKd8oJTKexVikohk0GsgdQ6K' ],

[ 'BlanchhLiptaki34@gmail.com', 'usN2KwqgWYRJ', 'zajh-ua3w-htc0-09kb-95fy', 'live_715342469_nK9OYdERv58ikwn0nK6Q9Gy14dG4ZV' ],  

[ 'LindacFeasterx46@gmail.com', '5gvbYe4j6sXA', 'z60u-7d0a-057z-2v93-f536', 'live_715640592_SGlDnOW9XCyTQJ2HM8YSldHCiGbdC7' ],

[ 'earleenmeek6272@gmail.com', 'uHxMrNRYXk4N', 'ywg5-9sse-kg9z-tr7d-23ss', 'live_715992400_daWRedmWaarVvNMZXg4640QDNfHEMS' ],

[ 'eunanapier2940@gmail.com', '7DbwUlaPOZcM', 'ycch-p5vr-680f-xqxm-e3jq', 'live_715940693_KvRuYUrKLtVs5z4rtcqM9NSXRuCbRY' ],

[ 'elainenowlin7655@gmail.com', '2L9tyQEPTyuR', 'yc5g-vdr3-as5c-8cwy-2tuy', 'live_715927595_8Y6h7rB2SLmOul3HTHiI3QeJJRzDNs' ],

[ 'thaofloretta7288@gmail.com', 'mGd2QWvsiiuA', 'yaxb-0vky-fvkc-f90m-fucd', 'live_715992826_iolkysDYAuNvq3zFQccXHq5Fqdoc2e' ],

[ 'jerricabarba1877@gmail.com', 'MfjKko1sfbbP', 'y41z-jkbw-pumv-5ajb-74xp', 'live_715933868_R1Q0i1tfZ4Y4LHqhbUIXARbGWKtBwM' ],

[ 'LauradCaseyz29@gmail.com', 'UsOqrKNVsg8u', 'y0b3-3021-4e8x-evf9-2fjx', 'live_715367419_Fh4JWGSY7ek0I1m8Yne3vchTfZeK8m' ],

[ 'JanebVillalvazoa62@gmail.com', '03iloL98BRv6', 'xxpj-y58b-64th-2r60-2b0e', 'live_714917145_JSWyefIEolhgkYxcSmSO71QMhasfxt' ],

[ 'NoemisHolmesl68@gmail.com', 'fwxSgjwqpZP1', 'xwdx-qmf7-q5qu-wjjc-cxqh', 'live_715372795_JfodqF9LXq3AbFoSGRC1GnTAVjs0rq' ],

[ 'ElsierAyalaw17@gmail.com', 'KZkf4Tau28T8', 'xvrg-62pt-h2qt-g6bu-45ja', 'live_715338143_wyRyIrJQEMz2xstUJcNQm5c4FTke4S' ],

[ 'PatriciafLango93@gmail.com', 'rPVrMd1HWu4A', 'xm8u-6m43-hke8-8fb1-d5md', 'live_715630012_xxjgClb6WzxnEb5zLd8X08nK2jKBjJ' ],

[ 'BarbaraaChangm61@gmail.com', 'awDaDNSxlcKB', 'x3t5-badv-4663-6m9s-fp0z', 'live_715058534_clRka4XFQN3k2OlUeXrubYmotgm7Wr' ],

[ 'garfieldellis3099@gmail.com', 'wXrhAe7w1ghe', 'x02g-eb9y-aqxc-b5su-4ra0', 'live_715930312_IA7MzbESfo6H6UVcnJIRyCtuSDgzcz' ],

[ 'sasharichter6352@gmail.com', '45ysoODptBuE', 'wtc0-mzbb-e3hu-z545-5cjd', 'live_717670407_jyohDOVej9UaY7bL91EzI4G6eEBJQl' ],

[ 'russkarina2823@gmail.com', 'jDSQEmkhoE93', 'wsge-xw0k-y9z2-7c96-bmxc', 'live_717673068_j8gLT4hUeZYAoi2oJ98q1zZEIzQNqD' ],

[ 'PattidFavelay54@gmail.com', 'LqrbFcxzEr97', 'wpvr-0te0-zw8t-bj6m-fvcp', 'live_715366521_jaDIJjbfZjXjqm7BhoGYwSwwIBayLE' ],

[ 'jw890538@gmail.com', 'cfrvgt&&%%6655', 'wmwr-2czf-6qmh-sqvv-76aj', 'live_714354846_DfmATwyCEGqD1ETj3e93UXxGw6ylxb' ],

[ 'jaymietrinidad2153@gmail.com', '7uxkUGBTjczk', 'wk90-t55h-7656-szve-3qqv', 'live_715991068_11JDhNQGVVJvL0m4Hcre06IeZaGya3' ],

[ 'AngelabGrinerc50@gmail.com', 'e0dtlZbo2Mad', 'wam4-6b5b-9hpw-fyry-efvq', 'live_714924018_vGG7tgZ9SM24I8ZUd2JDwHJnj4kjEk' ],

[ 'quintonangla2679@gmail.com', 'EZf3Kuq2m1XE', 'w6ed-q0e9-bzmd-udsp-73z2', 'live_715978891_nuXkTegXt7KsACrZ9NS582oJQULlIR' ],

[ 'sirenaserna0674@gmail.com', 'NWnggCz5nOGE', 'w6dz-au0a-6m5j-ypk6-5s69', 'live_716005379_VEYaDebwOAEEeOBs6Etabh7lQHEmm9' ],

[ 'VirginiauKnorrh37@gmail.com', 'BKRYnCjkSVWm', 'w1w3-m0jj-yzu9-bxyc-210p', 'live_715634815_0QFkXX20RoEscnrDrOtRsZIZnkDAug' ],

[ 'FeliciatBaileyt99@gmail.com', 'obEZiOhzpKGg', 'vuuh-djc8-xcdx-m2vz-eb4p', 'live_715353286_2iLsyJswhMjaLuWZzIzx0MOcUoaoie' ],

[ 'MelissaaDentonk58@gmail.com', 'flmDsz4tD2Qi', 'vs1h-vrsk-tj2s-sgf4-8jq8', 'live_714934563_Hfo1wGofUrjwW1wvqXI7XlkHzlAxRM' ],

[ 'JilloKimj88@gmail.com', 'm6bZymSSlcnU', 'v10s-0hh8-09d7-xasv-b20z', 'live_715634056_bL04k5NTU6FyrtYyJTh02Q9KCyr6ES' ],

[ 'salomerich2703@gmail.com', 'gGYfrhGPm5RT', 'uzhr-m8za-9cu7-337q-9e4b', 'live_715944863_Z2K8DcD5OYQCzuktSKHbEDzvAFq1Y5' ],

[ 'natachamarianna0754@gmail.com', 'Et5u1o9ME0q5', 'uy49-m6ub-epb7-6uym-br6k', 'live_715952229_UomU2suIv8KV4dRi95AB06LndfHcom' ],

[ 'terryguinn7599@gmail.com', 'VhDSBHvrVy64', 'uuza-rs9g-fpxq-4a8p-evd5', 'live_715959182_n8N3nqMiaAEoVce5qhRYcKD0Indb31' ],

[ 'imeldacelinda3340@gmail.com', '9sDsb8up8kVL', 'uqc9-kcaa-maj8-0vc8-418c', 'live_715938702_dFQhcRr3uKfIWmzEV7x1xEcaDnErMK' ],

[ 'CaseywGagnonc92@gmail.com', 'II35W0Q1hgru', 'uk4a-ema3-t5d5-k2xx-0s8m', 'live_714933715_Fvb6t3khTsIY86x2MrNbZBVlCLFevq' ],

[ 'MichellelSteinhoffr53@gmail.com', 'AEN1MkdbOhUY', 'ujcu-j0hx-w1ef-4dse-9za6', 'live_714927045_7jdTrIRALzY8JcIzlamiyQoauzeHrr' ],

[ 'NancyhPeeblesl10@gmail.com', 'pF0vNWNj719E', 'u4eq-taam-4w3s-k6f1-cf30', 'live_715371078_tCrUXsLlYUTXtQhclnWs9dmvWFnsZD' ],

[ 'christygoff8555@gmail.com', 'evBDkIVJuSJp', 'tyhq-q8d5-zq0p-6tvk-2wa2', 'live_715943057_MXBAR8GHyfxE06lsjdf0QZw5oMJveD' ],

[ 'ShannoncFernandezq18@gmail.com', 'flS4Ks6AWxE6', 'txhq-6u9c-tj9u-jqfq-2rj6', 'live_714948915_LyIkGrtBCnA0jZJAL4uLYarwqvDD6Z' ],

[ 'VirginiagGrantk71@gmail.com', '7Cru0j9ZBB3P', 'tsqp-qvqu-m395-py6z-9ht5', 'live_714919365_TLaguq6AStOKnDrwVh2zRs1Lc3Biag' ],

[ 'sagedorthey9478@gmail.com', 'NZXABSiky2rA', 'tdw3-rmba-9yt2-am6b-dqts', 'live_717688636_zILIDGXOSv6liak8emFfcycJxOcOxy' ],

[ 'clarisjeffery8339@gmail.com', 'AoaI6wNzRPD4', 'tbys-5czt-rc5d-bw59-5j8k', 'live_715991434_fZ1Qetiq5yRfXvddEG7WUJx0ltb63G' ],

[ 'loanshaffer6225@gmail.com', 'yATqq6hhCkVq', 't39s-01qd-eaak-bed4-fh4u', 'live_715991977_vIeQDsyAHhNLN1N8qs42Gb02UWRWSY' ],

[ 'carydario0010@gmail.com', 'SQ228HIuVO02', 't030-u1dy-v8aw-fkhs-8cs8', 'live_715926234_KUC3eV4D1daBkJkeTBWxddZcWDFs5m' ],

[ 'AnitaaReidf86@gmail.com', 'eLrokcekbt1N', 'suzz-vr65-p5xb-2pqu-88wh', 'live_715638902_5OJvqrefJDCFkciVyKVeIyXkIjIu0Y' ],

[ 'rositabenton2058@gmail.com', 'CvrEHEC9hHtn', 'stbd-gg5d-5wfp-dqq0-0v3j', 'live_717671751_AbB2T7g9YU598YT6ShLGNJGQXitE7K' ],

[ 'DevontRobersonh65@gmail.com', 'xVZ0AACTciia', 'ss3s-p8qh-2xue-jrwy-565f', 'live_715369654_LzLsrBz3zXLjiNN5KxITwOVAUiKGJX' ],

[ 'DorishCondert64@gmail.com', 'uciDUCx6eqKW', 'rjbw-bc2g-7dyb-4pea-drfd', 'live_715346290_N6Xl1lXbVIHZnt1ylCenCZor0Xhtjm' ],

[ 'loanprincess0816@gmail.com', '2nKy4oplbmXx', 'r7j1-e9mr-puyx-67q0-e1r7', 'live_715932383_Wz4al9ljQzjw4C9ZJObwmnAllWZbV7' ],

[ 'AlmamBeltrani60@gmail.com', 'CdJWJbUdjKie', 'r0ge-hez4-qs30-m76p-1952', 'live_715344555_dZieSnuG2qmZ7Mn8GcntGz9TaijA8R' ],

[ 'gloriadixon47@gmail.com', 'vgtyhb**&&7766', 'r00h-e55x-82df-e4zj-7rfh', 'live_714371819_l3mrhaQaIJ4Omy0ei3BFxeRhZeeYoF' ],

[ 'romonathomas0000@gmail.com', 'QCTr9PJseZFm', 'qrm9-ugh9-tzv2-8ksd-edfr', 'live_715947577_6uxuGSSO76Xfz6XCU6jhCDQXuEJYIt' ],

[ 'IrenesWoodx55@gmail.com', 'HXcAOTIla1nW', 'qmpd-dzjv-ez3v-6ffg-aw44', 'live_715338673_XrMmURZwyWFsnXeLJ5uDX8WC06VLEH' ],

[ 'darleendetra1938@gmail.com', 'Z8OJgfFYqCax', 'psf0-cxrh-8tv7-9vvz-309w', 'live_715957423_mN2q2ykaq5tmk95xDHXq46aKcFGv5F' ],

[ 'amadaquincy6488@gmail.com', 'Hkxs6lRYp486', 'pe12-hedr-g8zh-fy6x-f340', 'live_715949178_lcLqnNE6qqOHYlOO3fafjrO5F7wySD' ],

[ 'sylvietorri0245@gmail.com', 'Khf6Cg8mvqoa', 'p06j-pf2k-2my3-8edd-bkkr', 'live_715955604_QwWDRyS4rZHoMUMemEUBbQ9gBiUINW' ],

[ 'DeborahfAtkinsona33@gmail.com', '56BoEHUlarqk', 'mpjh-90ba-ev6t-9wzc-780w', 'live_715367987_mm4JSCvV0YbalcblbNayV4b2ikJyQv' ],

[ 'JessicaxChandlerx32@gmail.com', 'Ndu8j8I1b10b', 'mf3z-2qhz-8tmy-1dqq-b79a', 'live_715347315_9UEjHeoZtGnKhiUcRhL2v3zVhSi0Im' ],

[ 'MonicafPartinp36@gmail.com', '8oi4EHPUmjtS', 'mb1j-yzfd-e1qh-6dts-2b5w', 'live_715637410_DERGH1wg18828UbvM5bVlAJ7FcbWq0' ],

[ 'TeresatRivasq82@gmail.com', 'HehxgPT4mziq', 'm8fd-5v24-3duf-0pxp-01va', 'live_715366926_JtTnOK7b9igxVHBja1vd7lxFykfjqi' ],

[ 'PaulanAllredq25@gmail.com', '16dI8e6LDxin', 'kzg5-v7qa-1dgq-mezp-4bzp', 'live_715628665_dclWtY6BEZR3A3ry6yiVyCx029tTyq' ],

[ 'DarleneaDunlapl25@gmail.com', 'pCkkk4djzYaU', 'kzg5-v7qa-1dgq-mezp-4bzp', 'live_715626082_9NjekNWGjY21yU5XL34uSAgLh50Qle' ],

[ 'AnnfPruittx41@gmail.com', 'sGEY6Pn4IRAh', 'k02d-qbvt-cab0-zru1-ammb', 'live_715371439_UHbHBH469MULaX7eh8dx473RDr2RqE' ],

[ 'CarmensJacobsz93@gmail.com', 'vR4tIOeNbXLW', 'jp9s-258u-01aj-qe9h-23xh', 'live_715339370_lZqHUGjk7gky2nGFNnIzKNze7YgYJk' ],

[ 'shandibrinkman5953@gmail.com', '2ehlACYv6qvf', 'j64c-kdcr-mf63-apkr-5btj', 'live_715931698_Gv67Z8Ghq7JJCmGvFmTjj7lJA9Hye0' ],

[ 'jalisadaniele9224@gmail.com', 'PJtTCLkntfs9', 'hujg-z12r-5652-q5bw-cqbp', 'live_715936248_KgG5Veu3cJarMLV1zDhZegCeslm7WN' ],

[ 'RosannenBillingsg79@gmail.com', 'A0C83vM8kYSk', 'hkx8-1mqg-hbj3-kcrd-7wk5', 'live_714922533_1fqdFBzxKJ8Nbh3U1QBtyEbv0370yO' ],

[ 'kspencere6@gmail.com', 'njuyhb**%%5566', 'hk1g-18d0-05s4-gsu0-cttb', 'live_714352850_3Hsq7y1Vh1CG5LTShkosoM8RoMH10j' ],

[ 'LanaaWilliamsw62@gmail.com', 'gNGSAhikmfy9', 'hfk0-yfcs-j7yq-2dc9-fsqe', 'live_715635422_BZe8A4NYwTjx8kYOjenkx8raE4zBdr' ],

[ 'ElizabetheShirleyf25@gmail.com', 'kpGT4vZT8DAt', 'havc-1vh4-w6k1-e6pq-0rpf', 'live_715639245_hjUJLcgqBXIv0DFN9E7aBBd93gJEoK' ],

[ 'katiekinney2446@gmail.com', 'P8b7Zxfpdvfc', 'gv6y-x98v-ruv7-67wt-3fzt', 'live_715952506_3JJaAyJYMwNo40SWuVojN27AavD5EH' ],

[ 'JoangReedd32@gmail.com', 'NjxFbXy8J5KA', 'gp34-puz6-reqq-b5zx-0tx6', 'live_715373101_42y7KJSyBXdFmVUsZXTN1Qn988GcAK' ],

[ 'johnnygatlin1801@gmail.com', 'dlo6bdXezM7U', 'ghwt-kc2u-8y71-7k7w-6qxe', 'live_715934728_lfwE7cCROaWeE01D3IGXtg7JO01ohA' ],

[ 'lsmrrsns@gmail.com', 'xderfc&&%%6655', 'gh28-jjvd-99jg-fkb7-5vwu', 'live_714349324_B644SCTga735uB0EqViTuy6wVSee4Y' ],

[ 'sharaisaac9077@gmail.com', 'WjFQ252OtjxF', 'fpds-2hd9-6cj9-5cc0-1t9z', 'live_716008055_mLctWTsadQ2LoX4DUgFMI87ggL5MLB' ],

[ 'DebraxWebberi69@gmail.com', 'eEYJOUEBiOpC', 'ffs8-9vys-2y2v-egqt-crv3', 'live_715368446_Qx2LCCidECD4s6Etak7e6krlFDYKqm' ],

[ 'sharondacleta6059@gmail.com', '0ahXnITdFrRT', 'ff4f-4j0p-cx9h-c79p-5hs6', 'live_715953832_VMfIUX1Zy9VbfIufX69eQ8rYUM4ncK' ],

[ 'SavannahgRussellv82@gmail.com', '2CXwSX9lUbqS', 'femv-rc2p-0gj0-804a-10y8', 'live_715331297_VSfbTzx10F9rjQNv1RbLSxv1CzBM4A' ],

[ 'ardenbrooks5291@gmail.com', 'Q3QW3ILpFomu', 'fb2j-px07-23q4-776y-1ct7', 'live_715929300_tQGCMa2cmRs9uRSj61Euw6btlxTWyn' ],

[ 'lissabroughton8863@gmail.com', 'B9n6460B9bsX', 'f9k6-3h1g-xbd8-6j3t-95e7', 'live_715958322_WaxGoQ1M0bwjFNTz4qZeuyKDgQuMfE' ],

[ 'JeanettejRiceg33@gmail.com', 'i7U8g0ToxLoq', 'f7r6-vxsm-v9ph-sz13-2afa', 'live_715341812_XDQl2TvOS6mcEwavZO5Iw4XGbCYcby' ],

[ 'guillerminaplatt4727@gmail.com', 'X9bPPvO1iLD1', 'f6bq-suqv-gu96-svqx-dubw', 'live_715930909_kVrrCfHrqqWh2wgT2CgbqZZgOBeW6W' ],

[ 'cletasoraya0434@gmail.com', 'IABmeOG18Vrl', 'f5c7-xybm-geuy-4ca0-7918', 'live_717673642_6A9WLHgBcJyUg4SVQMFysgERub6qes' ],

[ 'kathernfaviola0864@gmail.com', 'xDbgGmodmgwa', 'f28r-byr5-fj3h-79pc-0v5z', 'live_716004287_8GJO73M3DMh3KhwIUenMokyKXAdMlk' ],

[ 'shakiramosier2036@gmail.com', '3pkIJMZPTRBP', 'f1wy-10sc-31cj-spgt-2xax', 'live_715940030_m2GnSA04z8NZfFRDiBk8V6J93NOnkM' ],

[ 'deeannsusann5618@gmail.com', 'UBP1fZRwaC2I', 'f0dw-6kra-h0xq-5seh-d1gm', 'live_715937708_gb6YBrkN4Koa6rYz4Nn41fDhceR2RG' ],

[ 'jerrodwiggins3047@gmail.com', 'lyHiPFg0xQrO', 'f07x-qzwy-f46e-kxw7-6vkj', 'live_715954416_8zN9FIik3YKDf2mTnwluH1QReErAqh' ],

[ 'MildrednBrownw14@gmail.com', 'hqU4sikVGV16', 'evte-8mbq-wd2h-21va-4d7p', 'live_715640274_9wh62winHKUFUkE6BWxZe8oJ9tGnOR' ],

[ 'AnnqYaegerf47@gmail.com', '8yR2BIcErGp2', 'es8r-d6dp-gwzf-awv1-6ea9', 'live_715354118_8aNZUjvkzBjhd1bnMwNmXWbzgyAyFc' ],

[ 'oscargroutch31397@gmail.com', '!fakefriend41002', 'es8r-d6dp-gwzf-awv1-6ea9', 'live_713739025_HxJHEUj0G4ZcxSoQk3wzLzV5XTtDO4' ],

[ 'LelakWilmotha31@gmail.com', '4of5soF8HHJa', 'egy1-x5rr-wg43-r9fj-9uzt', 'live_715633688_16hlrOlHGBfy1K5GOZo2vJVMFozqcZ' ],

[ 'WendyhRogersk15@gmail.com', 'rK2wB0lOAvBQ', 'e9fs-td85-faj6-52ch-5d9h', 'live_714937669_OirSVqH0dYqbY5LnL3fxf79aKNutXb' ],

[ 'erlindamarian9980@gmail.com', 'AqOO7pbtJVhG', 'dyjh-yj0f-63r1-e0vg-747t', 'live_716007499_hMoIjOzgKVMGjEn74Oz81GotfcHw4y' ],

[ 'JoanbHuntery82@gmail.com', 'XO1RvPTdAvNb', 'dxpt-r64m-a7he-9gyp-17y3', 'live_714932080_DMhxZM9BwzfoLddg8zAzLYQzwDJNf2' ],

[ 'autumnguffey0175@gmail.com', 'JSnHs35Tmquz', 'ds5v-74yc-jgek-d46c-39hk', 'live_716008576_81GB9bjwM6qfQQiWLwBmuAkaIlbQBe' ],

[ 'domingosharika0059@gmail.com', 'CWKnScstPbRd', 'dpkr-jvq0-h1zg-eqb6-evkj', 'live_716004787_yX1VTyDNfsReUk4KVFn5yv025fnUvu' ],

[ 'NancyoPritchardw76@gmail.com', '0JBSKAXfBrrJ', 'd9a9-rxd0-zsp0-hh7y-7w0x', 'live_715334282_cBcWOWYwBOSbm8JaviyInVvwlnJEJE' ],

[ 'SandraoGavinb68@gmail.com', 'fl5ykCW3b5JO', 'd733-asmj-aumt-wms5-7jpm', 'live_715345474_ayyrfxviJcwOt1JHv74qsGfmLD1jgd' ],

[ 'ModestaeEricksoni87@gmail.com', '7w5cwkWfDupn', 'd1t1-4jbx-6grg-g8dh-6wz9', 'live_714940115_NhU8byO24DojsDd6VDZBHX6lhWlBYI' ],

[ 'EllenaFletcherr76@gmail.com', 'lLPgp53JxUDY', 'ckef-4f6y-dwye-xcgg-b7wj', 'live_714943004_auoTEvnYFb9C74r1xL9lCl5DzRkbfT' ],

[ 'roxanaaugusta6136@gmail.com', 'lJxFxtxeZbbi', 'ch8m-tjfs-gxvs-g0av-0a9d', 'live_715943636_z9mSfkErgs568Dxw3cttZVj3XZLG02' ],

[ 'frankiealisa8204@gmail.com', 'qstxcbnLwEMU', 'cdck-jsb9-86zv-esw1-56jz', 'live_715979391_CuKB0lhjQOEkW2c8Tco63TnKSiZJG3' ],

[ 'lailaaliza9022@gmail.com', 'ZDZWGcFcml3e', 'cdb4-xa33-sjj4-fc9p-c6ja', 'live_715933193_jGW7ROrWAnOq14rAm3EnfnHzRFIYHE' ],

[ 'MargiedLeey55@gmail.com', 'y7JhlrYZeU2O', 'c45t-myh0-04c7-cfqg-73sx', 'live_714917973_QES0eQxRLmBk1oBsR7qOsin7UomQ3T' ],

[ 'jacksonbiles3124@gmail.com', '!fakefriend41002', 'c45t-myh0-04c7-cfqg-73sx', 'live_713748096_52miF3znZnRyHmv27SyeuBd1nL2sxe' ],

[ 'cherylfields989@gmail.com', 'cfrvgt**%%7766', 'c2cs-9s41-rfph-cped-8345', 'live_714371098_BmukXIc5Yo64igiNoWfi6bXJCLrK2G' ],

[ 'KellybWoodsx64@gmail.com', 'saYN8Xm3rbUi', 'bvxu-ad5t-3acw-wqe0-0ycp', 'live_715641704_jHdtoHnXnLBDFjZYD1F2egnrezl7de' ],

[ 'DenisemWinderj45@gmail.com', 'n8e2ehjBrmRv', 'bvt6-fej2-x0hd-3w36-5hrb', 'live_715372119_bUBzmqdXWjm8WZqoueMH87MO9N716Q' ],

[ 'PaulinebRogerse45@gmail.com', 'PaHZolvHDkGP', 'bsjp-y9v7-1x4j-5vaf-fb24', 'live_714949754_b4o7HWEGqgfRhw2yyoW6OvEZixKhsc' ],

[ 'JacquelinenChamblessb25@gmail.com', 'wqdTyjSWJAtc', 'bsjp-y9v7-1x4j-5vaf-fb24', 'live_714939284_SLMYQuO05mxRd2idOWrjOfYSDN7niq' ],

[ 'samuelmargy3263@gmail.com', 'JBbY4QSDZi9W', 'bdpg-943r-z5k4-p715-4ysw', 'live_715948099_zYROrckrzbIKDSRmXLSswyIZrSfgXO' ],

[ 'JoannerNiemanl63@gmail.com', 'NfPOtgWKWbGt', 'bcqk-29xm-zgta-fruv-88hb', 'live_715331923_jZyCLlCKSgGfqFBvLUY9gFtDubjcn6' ],

[ 'sheltonlaney0003@gmail.com', 'sSJLQTWgIZtr', 'b73j-se5u-atgv-wf9f-9m3u', 'live_715959907_JCK6nDTi2zJ870FUd9HhYzlGrF6inZ' ],

[ 'shirleyclark374@gmail.com', 'cfrvgt##%%5544', 'azug-46hy-dmdy-da57-9z96', 'live_714353920_dlAdFbjhmTxgcKktDjjRltmuJrLn6y' ],

[ 'staciasavannah4971@gmail.com', 'Fl3829ygHt9v', 'axg7-68f9-vy1t-5tv5-1svp', 'live_715951487_RSVgiTQzXbHF9mxZ5JzQmuBv83FIAF' ],

[ 'DoriskHallo99@gmail.com', '5TlVDEpjpTAA', 'aw5u-876g-rqaq-ekt9-bax3', 'live_714943745_J4t9NRXZfiFAeHHTxbcNhK488D9Xoo' ],

[ 'ShellymShrever86@gmail.com', 'vxbaZGb2OKA5', 'ak0f-3qkf-6g3e-10f7-1czk', 'live_715635741_qcugCkUYCLl7EQRTAkJTXwXNhqvoEh' ],

[ 'MarilyneMartinezv54@gmail.com', 'T4pxJfllxomB', 'ajrs-tmab-d3th-09t7-bc6m', 'live_714920067_b55T1H8eX2LBO05dU31MC9fWHQW3Dq' ],

[ 'LauraqDavisr93@gmail.com', 'R8vT9AiMTijx', 'ajgr-tmeh-150y-m0tx-6ewp', 'live_714926274_94ir7zkT2rdu3f7zG3w39eIIz9zgRV' ],

[ 'hortenciamaes7966@gmail.com', '7XrzBgoRTGjZ', 'aczg-qgkp-zbyc-8f4p-dssf', 'live_715926890_kjCgeaRQA3mr5yWJZjU79C9ELvbz9e' ],

[ 'TuyetwKerrt33@gmail.com', 'HaU9HL8spll7', 'aa1k-6p21-gxsc-qkvd-abju', 'live_715370545_kwkwrMO2RN19uzRhvB1o9z7w8mjSbE' ],

[ 'annlawson287@gmail.com', 'cfrtgv**&&543', 'a3xy-cdq0-83uw-r2hs-98cg', 'live_714350856_ZbaVMJdRvrGV2SFh4hyj21Dry1BjL2' ],

[ 'rochellverena3654@gmail.com', 'yLUBpTu20XvG', 'a328-qswz-7p5t-mjmq-0395', 'live_715953134_yllzfOREVGHEAL1BB3gTFEk2ITJYsk' ],

[ 'GerrihRegalados98@gmail.com', '5tIanafhzbAW', '9t8t-6pu2-80cu-s6uw-4e5a', 'live_715629024_SC5r6CfomfBWuEbMsgh4MOYXx4JLdZ' ],

[ 'sommergraff4072@gmail.com', '1xZ6MbWLbqSE', '9sqp-zv52-wg83-fyf4-7wae', 'live_715939353_E25O18E14KgBB7qZ9bTQEDw09OHAJ9' ],

[ 'DorothyuBakerl68@gmail.com', 'd1tgx7ho0uNt', '97tf-hrmb-qjsa-jgbk-f2kx', 'live_715636760_BkyIGTj5AxytAum1cVFzr6UbnDVSZ1' ],

[ 'MarthafEggera22@gmail.com', 'A7KSmBX1c44g', '94z0-kv1y-sb1b-mjmd-bdta', 'live_715340407_rJILxvBfKZKJzMGmWjJNLmf0fe5nVR' ],

[ 'GladystQuinonesq34@gmail.com', 'Xi0fpYEZcRuX', '93d4-jgx1-04tk-7brt-cq66', 'live_715342961_onDTV9iUQKrTdBaoEKCmkcOiEu5RGj' ],

[ 'WenonapTaylora30@gmail.com', '8CGQNT4eIzgH', '8s77-kcfc-ucvy-vc4d-5042', 'live_715637936_OQfX1osC7o8m7QYRGNXFVo0NJwT9L4' ],

[ 'CynthiabKirbyj98@gmail.com', '2ryhe5XRWcAZ', '8qk7-4zkq-jydp-2huy-2817', 'live_715337064_lqYa05rAxWtQFZ6My3Nj5wObjGOfX4' ],

[ 'georgianntrista7343@gmail.com', 'uVYiZMGGEgb6', '8j2y-16h1-f6js-p403-40p9', 'live_717674446_UwQliVZGvQzrhdYeZhrd8f9a37jaV6' ],

[ 'sharitamellie5500@gmail.com', 'rTwFJUbI6hfX', '8gfq-8gzx-pjzw-qz55-fr66', 'live_715946047_jFrMR8eHJix2DWaD5ANETZF0VIfdZX' ],

[ 'AmberaBohannann92@gmail.com', 'ceYBhWhyf8HC', '8byw-0jk0-xb0v-57r5-4azq', 'live_715345839_kTtgujwyWY7k4B0XNMHlxcYHS60Br0' ],

[ 'DyannLittlei92@gmail.com', '3bTwU86k16wt', '8av1-kurt-40d9-sb8s-bm9p', 'live_715343967_OSkAwflBbiZXojCzD38iocQ6SleNfL' ],

[ 'sashaalexa7330@gmail.com', 'DxreBtwcd1z7', '854c-yygc-s3dq-apva-dxb0', 'live_715945558_kSbQ2drO7Rr8sdr2wuMbxVScBSFvju' ],

[ 'malcolmkassandra4150@gmail.com', 'pvdWyU60l5uL', '7was-8yue-1aw2-trt1-9bw1', 'live_715936968_enBaX2C0CGt2YxZhBTrwhynOfXXGKs' ],

[ 'IonakMillikenb80@gmail.com', 'i4gMcAvHsajM', '7was-8yue-1aw2-trt1-9bw1', 'live_714928108_12QTemwxdc4re3IxbmgbrBMe2IwKjU' ],

[ 'CarolynoDealy25@gmail.com', 'NC51Sb8I1bGA', '7s5p-t6m0-5432-s8pz-00vj', 'live_715370329_c80AxERdj7LGijOFRXnYT0HVn7TkE1' ],

[ 'DonnadMyersr53@gmail.com', 'VpKAlkiv0xih', '7fge-859q-vfhh-565r-4h5h', 'live_715631981_WVJD7FHu5rO6FkkuH6mxLnzLcugEEk' ],

[ 'janinawolf2908@gmail.com', '8I5M9G7ulc0J', '7ehu-w9kp-f73s-whqf-fx3c', 'live_715958847_t4C8TK7b426bUeH6zhbmYxI2hhG9DW' ],

[ 'quincymeggan6979@gmail.com', 'LJWoJXSNmlS3', '7dxf-1f9t-qpxh-e9th-dcud', 'live_715950704_vifz6tGMOjGxCoqRlXI1h8b4eYjcYH' ],

[ 'MarthaiBergstromc99@gmail.com', 'F3nWNEFKwsAJ', '7a0h-r5c9-xv4z-wy5z-1v0z', 'live_715351516_SW5elilxLc1FoMbX3ltrfRwKU4JWRR' ],

[ 'olympiacherie4482@gmail.com', '3FszBtUfT3ps', '75mx-1pcc-pkcv-tkd4-2ssr', 'live_715944210_ev7oDbHqcH5vTbej2sqb9Cv2CbSciA' ],

[ 'EmilyeLayv52@gmail.com', 'QgLGCT4rgUFi', '7563-j8e4-rq5q-vr5s-bfum', 'live_715636370_9uJIZvVk2unUvyw8btx7Z40VkEv7zI' ],

[ 'RosemaryhDowellp11@gmail.com', 'qzGKsZ9sqdH0', '74zj-8xvc-ccpx-hf0j-f8v8', 'live_714929739_zmDU5RjTh7olWeJGLYA0xQZegdRjkx' ],

[ 'VirginiacCrawfordu87@gmail.com', 'vKztWQ5cFbNF', '6tsr-jzjk-j71x-etp2-5qwf', 'live_715347875_sWQAiRC3BoTD5NDQvs96jnR5z9M6GB' ],

[ 'joleencaryl7748@gmail.com', '5XAHc5HjHdg4', '6svz-9vcv-cqxv-029r-7615', 'live_716006950_QRXE6Iibvy315wngAICEqesHKLcZ9r' ],

[ 'CarolpJudgeb43@gmail.com', 'IZHjRvfQ7gjx', '6rde-kwc2-ak7w-z6jt-af3h', 'live_714894096_MaJIcN5BEASZW35qD0ru5GiWmIx4W3' ],

[ 'AnnacLathamm47@gmail.com', 'TpVSzNi2NjtC', '6pah-dcum-98er-7c9z-a5wp', 'live_715375562_tSC1XWOq4EWxx4L9WG6RyJUE0uaqED' ],

[ 'BettyjFlorezk49@gmail.com', 'DMreOKFOWPJl', '6myj-t3d5-sk86-bcsx-4603', 'live_715369160_wYIkoFnoFv3q9s40yfXTDFsaT6DfK4' ],

[ 'chereekyung1203@gmail.com', 'bUavVTKuT79W', '6ex6-d4g6-427p-b2hg-ddsy', 'live_717672157_AeKc7gDLfAxwTV5bs1cwbYuubmoIlo' ],

[ 'LesliehBarnesp70@gmail.com', 'c7zE6XuqxnDB', '68uf-txk7-yypj-2aam-4mc9', 'live_714930509_uRbIGsi9ZdxXeujmkGVzruq4TqgJne' ],

[ 'terrencehamilton4511@gmail.com', 'tMfy58qkT5bu', '5zsf-jjuy-18gf-e182-dgfw', 'live_717675109_jcsmgShTGQvxYVZ1zsANDn9vCuN9ke' ],

[ 'ErikarHairstonx83@gmail.com', 'YYqogHHr11TV', '5zfy-pkvu-exda-hesk-13f2', 'live_714938283_TOcs5esgIcghdRwFVAfbXnXnB3FI8f' ],

[ 'FrancesmMcLeodj20@gmail.com', 'HOTJq7UQWjT6', '5ft0-4qc7-aryd-swpc-0z1u', 'live_714928807_Ub15FcsIteCHacaOWzC9CyB6E2BUcd' ],

[ 'JoycemYoungp34@gmail.com', 'VZ2jg7Ij3FJR', '5a82-3rf6-grp4-6dsu-7sq3', 'live_715343549_EXavZBu0y4bvvXvsmLIV0QfgTFwJAz' ],

[ 'JeannerFitzg82@gmail.com', 's8R2fbF9kXtW', '55xt-u5yf-dhtw-hcub-fyxk', 'live_714941174_VzHOouIefmaOO6Qz4adXTk3KWcK2EA' ],

[ 'larainemadden4512@gmail.com', 'Mt8fsRokadJJ', '4t1r-w63p-x0cg-hsb2-8aak', 'live_715957943_2OGLXksersmQrFUanHx6ngO48NSsti' ],

[ 'skyelauralee5906@gmail.com', 'DeSblk06wKe0', '3u52-3weg-w31d-s9h5-018j', 'live_717689908_o1lAjxbD8XDZoHU4tgoUiL342UGkb4' ],

[ 'marlonmckay5645@gmail.com', '2epwov7OC6v8', '3swh-5whs-hxug-dbxw-27sk', 'live_715928556_msFhaD1gi5hgbvxwCo5YdymHz4CWCm' ],

[ 'MargaretaSorensenk58@gmail.com', 'ja86n7wQ6TbK', '3ss0-efep-5ff8-aw3h-0c09', 'live_715624658_3q17oDFdDwTlnejeFGOXzwVyr1M3BO' ],

[ 'nichollematney6518@gmail.com', 'r03mWq8CTIjj', '3e0a-sry1-efay-rbva-ccya', 'live_715946799_sGfb6R4gtAdqutaADFLeXfUQMAWdfC' ],

[ 'BrendabWilbern57@gmail.com', 'SNLT2HsiX9Sh', '3bqe-d1e7-x5b1-9jrt-d7wt', 'live_715333504_YAt1FNUHJbfdMa1KTsJtzTvORaUWD3' ],

[ 'KatietMorganb71@gmail.com', 'Maw8VESO4ELO', '36rz-0x7x-jp24-aaw6-382p', 'live_715345123_cjmVHiNf6BwvCJWtCB5AYFaLv1cK5b' ],

[ 'EileenbMendozaf79@gmail.com', 'lnadNiaC81Or', '31es-gbdp-72fd-59fz-dzf0', 'live_715641221_kSl5Fj90smL1AHNF0yzLyvqUY33gFT' ],

[ 'judithrobertson429@gmail.com', 'cfrtgv&&%%6655', '2va8-hrsc-ewyd-dvh2-5qr8', 'live_714356254_8whqywWdZBfOds7jegVC9nb0MclTUV' ],

[ 'BettytShaverz72@gmail.com', 'jL8yygszwPpp', '2fw7-4gxy-f73m-ats2-a3gb', 'live_715346759_TJ8rzJnn9xERyt3M0xOt1jRF1xuhXx' ],

[ 'samarawilhelmina4659@gmail.com', 'VcYzAC1u9ER1', '2fga-c57d-cm47-fk7f-243b', 'live_717690413_A1aiDqWijzeLsW36WKrMJg5ogaffAO' ],

[ 'alexamiesha2964@gmail.com', 'KbaHOZtJQwUX', '28jx-srhd-t676-b6wb-91j5', 'live_717667961_BwCCeSGiwNSwJzc7NSZwjss5KY5S0R' ],

[ 'florriehare0361@gmail.com', 'eelOLjobDCHZ', '2473-92s3-f2v3-f5t0-a8hr', 'live_715956065_AoZlduHy2xsdhwwfcxE8WnxgBu03l8' ],

[ 'juliaaustin795@gmail.com', 'cfrtgv**&&7766', '1ybv-wxv8-jj27-wyb9-5d2q', 'live_714351860_VCwIQD8McsC9k0Bx0I4Et9nRLNGQ5W' ],

[ 'vernellgaynell1630@gmail.com', 'v2QXPsIvTnoV', '1rwm-0dk2-3z3c-6gjx-fmzu', 'live_717669607_OokIjxXFxdQkVJl2MQeF27djXNc8sx' ],

[ 'VictoriadMurphyx84@gmail.com', 'FZ3rJQNdRuqR', '1d0t-ubym-26dc-zmf4-6a7y', 'live_715625062_cbi5EbQIVfe9E5uLRLLd9x7O2fUfhR' ],

[ 'bobbiarchie4047@gmail.com', 'yfPfyoEy1PFP', '1ack-k20m-cfy6-2j17-15x8', 'live_717675991_Jms94MBBs7tD3KjBwR7s7myx73I7hV' ],

[ 'WandaaGreenh38@gmail.com', 'X5IoHpnrub7T', '13r9-7d6u-4quu-kbhv-c1d6', 'live_715332716_wBgcSflRDFWWBj2TY9iIfYZMNDsU69' ],

[ 'VictoriazWilliamsg26@gmail.com', 'dY2vq42dK5BL', '0ysr-2daz-qhra-6qqe-0tzd', 'live_714915929_STJiT1djgYEfBiVofJGNjzls2ddIcQ' ],

[ 'CeceliagVogtv73@gmail.com', 'pvmIZwweQ8J7', '0w6z-egka-rptp-uwqw-8svx', 'live_714916608_xMmvMamF3efSd4QzVMobUNgyAR5qYS' ],

[ 'hangestell2195@gmail.com', '2cREg2UgehDa', '0u2y-kcjr-zy8w-6epx-f9kb', 'live_715954747_FGn3QMdGyZ5hj9B0BsNzKDXs53J7lb' ],

[ 'shemikawatts5516@gmail.com', 'ZqANuSJYKDl1', '0hdk-78mw-c49v-aq0w-c1k8', 'live_716009334_jwc7y7OKzQ0s8yYY7TI2X4nYbwbx7I' ],

[ 'jeannecharity8643@gmail.com', 'H4PuoMaahkxf', '0fpa-w1t8-rzg4-2xmk-bss5', 'live_717661273_ImWGZ8zfn8axUfIaxtQBjJC2VrFZBk' ],

[ 'shielacordie2516@gmail.com', 'HLNkNfzmOdT5', '0aj8-cw1a-d2hh-13cp-9r66', 'live_717662700_8SIAeBCSZ7OHeXr2DO84dZy4tgWbxS' ],

[ 'tijuanamclaurin6617@gmail.com', 'O7NLYAH8PaGV', '09gp-9fy2-pd83-z0xh-5ajt', 'live_717676753_RXMkCXsUFsyqmWqY4bdlWQjMkjcmEn' ],

[ 'vickymilner5532@gmail.com', 'ZE6xOWMSW0Oc', '07jx-ps3k-fzd4-h59t-eq0a', 'live_717664337_FeaDBsgIZr5CQUb06Q1JT4KJjNBcJK' ],

[ 'audreymelany4641@gmail.com', 'EfU5a3P67ujA', '021y-zgup-2966-c7k6-ce9c', 'live_717668739_M2IXRKJe0aQg3xI9hCvQvgzWwBhVNj' ],

[ 'danicamarquitta7097@gmail.com', '7ILzoePqTBvS', '01s1-hjgq-8g9q-5cdb-96sq', 'live_717667048_bqvx8EMKaCY9Toz3VADoM0xfo9f2Nj' ],

[ 'porshapack8912@gmail.com', 'XVwRM0Kihxp3', 'sq04-7pgk-6fey-vusq-9zkp', 'live_717691060_isyRYhziV1wxe3azXdlFXmXo5F6cDI' ],

[ 'dannameza8496@gmail.com', 'V0VhVYaJsNLd', 'u78v-sz6z-484r-uqj7-4yhv', 'live_717695536_BuheIt0ZmimofdX3Ms4Nl2IHKBIJ7R' ],

[ 'nildakenny6038@gmail.com', 'ouLTT614DjmW', '631r-jspy-p6b7-7ruw-6xdf', 'live_717695859_sumjk5o4uhS8xOHOZFq09eOz5iuqqn' ],

[ 'annamarieboudreau5356@gmail.com', 'Y6dWLEKf9GcQ', 't52v-wbq5-2y7y-1guc-a97c', 'live_717696662_XOUs9o9IAsaagzSznDL33Abnkc3eiE' ],

[ 'lorenmatney8967@gmail.com', '9VOCknHWnsOq', 'z5kz-za32-gc2g-we0c-0854', 'live_717697234_B0jGrITa3aDYicqMLbAUjzTs7KlhVJ' ],

[ 'pageflavia1356@gmail.com', 'MUQfhEkJeUnK', 'g44k-k9gg-yk9m-t9xr-fy4b', 'live_717697898_2EmLCratMnQk1cRIQKs29cx69TFreo' ],

[ 'faustinonewton2068@gmail.com', 'DKVSYFRCRXK1', 'kq8u-rbk5-y5yd-2d0e-cb94', 'live_717698727_GdjBIfcMa5sZFIq8YR1xlBaFwtJW2l' ],

[ 'shandahopper3039@gmail.com', 'LhoyYPCybylj', 'hexq-2xf4-dwuf-0cy5-fwvu', 'live_718020816_SMdFRfEccvRY2LMmyIEY9uegaol9VF' ],

[ 'fredericfoote4890@gmail.com', 'FoQZGwQed7pA', 'rq64-xed2-qpt3-rupt-1f30', 'live_718021150_gUKOoNxo4D0OdFdqNxtRl2aRj04FgS' ],

[ 'shemekapendergrass3755@gmail.com', 'B7Y7ygHeMea9', '2bmh-024d-ub37-m4mg-d0mw', 'live_718021445_mwxeRafG7zCF5Nx3lY5yrsY374XF6u' ],

[ 'allyngainey0274@gmail.com', 'tJ3VezDuymcQ', 'w936-1u79-9upc-dqqb-5u3c', 'live_718021849_59we34Z7o2jicY7XhDIDY2rIufJUD4' ],

[ 'birdiepitre0615@gmail.com', 'Vy2jCm2WeQ8g', '7y0h-e6h0-b4e1-beme-00vg', 'live_718022274_CSEUcUjx7GtEZB9DBdjQY9V5atdqag' ],

[ 'raymonddelana5416@gmail.com', 'kQ2B8e9FIIm1', 'k93u-vg7v-xtz2-xeu6-b0g5', 'live_718022567_NTSCfFDF0M6KLs2BvJtcn22rbJbBAH' ],

[ 'kinstl209209hoary@gmail.com', '8jkamVQjNsXp', '51yy-w2kg-9cr8-ypgj-1f4e', 'live_718022957_Xl3iQjhcKVjEkT17z6l8Trcv3krtc3' ],];