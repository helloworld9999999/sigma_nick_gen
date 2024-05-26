document.addEventListener("DOMContentLoaded", function() {
    function generateNickname() {
        const adjs = ['уютненький', 'секси', 'вежливый', 'злой', 'крутой', 'absolute', 'supreme', 'trasher', 'vans', 'senseless', 'fearful','hopeless','bipolar','toxic',
        'bleeding','weak','skibidi', 'blessed', 'солевой', 'белий', 'чёрний', 'tired', 'bloody', 'кэжуал', 'crazy', 'evil', 'sexy', 'broken', 'deleted', 'absolute', 
        'lou viton', 'неуязвимый','свошный', 'жидкий', 'balenciaga', 'борзый', 'wild', 'alone', 'редановский', 'топовый', 'ебейший', 'хайповый', 'cruel', 'unstoppable', 
        'eternal', 'nike', 'сломанный', 'милый', 'fashion', 'anti social club', 'drain', 'ugly', 'dead', 'shining', 'depressed', 'lonely', 'schizophrenic'
        ];
        const nouns = ['гойда', 'сво', 'сигма', 'СВО', 'sigma', 'сiгма', 'сигмочка' , 'ZVO' , 'ZXC', 'SVO', 'пудж', 'чудище', 'мамикс', 'king' , 'god', 'скуф', 'воришка', 
        'миньон', 'LEGO', 'бебра','skuf', 'скуф', 'minion', 'пися', 'попа', 'кака', 'некр', 'обед', 'очки с усами', 'sss ghoul', 'dead inside', 'vamp', 'nickname', 'batman', 
        'rick owens', 'деб', 'loser', 'prince','genius', 'clown', 'zxc demon', 'мёртв внутри', 'zxc beast', 'player', 'churka', 'чурка', 'showmaker', 'sedateev!n', 'заза', 
        'свофорд', 'gondon', 'тугосеря', 'пузожитель', 'убийца','NAGIBATOR', 'Johny', 'старый бог', 'сыночек', 'рикардо', 'мастурбист', 'писюн', 'злюка', 'фiдер', 'madara', 
        'pahan', 'Друд', 'Лоло-пепе', 'мбапе', 'месси', 'lone wolf','MONSTER','topchik', 'krasavchik', 'BaNaN', 'легенда', 'Senpai', 'isagi' , 'Kaneki Ken' , 'танкист', 'ваня', 
        'hakooo', 'чуфэнь', 'хохол', 'Гамадрила', '4покер', 'сларк', 'шкижмеш', 'дружище','otec', 'kartoshka', 'ego', 'egoist','мефчик', 'aquaпузик', 'loh', 'добряк', 'рокстар', 
        'шахматист', 'йупи йо йупи йе', 'Саске', 'бейба', 'камбекич', 'победилдо', 'Joker', 'spider-man', 'Zver', 'podgashem', 'ТуРиСт', 'хуки от бабули', 'водилдо по губам', 
        'KING', 'badboy', 'бустер', 'гойдов', 'боби', 'VeGaS', 'ghoul', 'гуль', 'SaYoNaRa', 'Кержаков', 'додик', 'пельмешка','100gramoВИЧ', 'positiфчик', 'спец по трафке', 
        'нубасик', 'абонент', 'кунг фу падла', 'хобихорсер', 'егор крип', 'похуист', 'не братан', 'hakooпузик', 'дагестанчик','yanechurka', 'ussy', 'sigmaking', 'sigmawarrior',
        'stalin', 'менчик', 'чубрик', 'miracle', 'fame', 'lame', 'ублюдок', 'demon', 'Foxy', 'член', 'Voin', 'огузок', 'крипочек', 'Nastavnik', '4upik', 'RUSSIA'
        ];
        const adds2 = ['(сосал?)', 'гай', 'prime' , 'АУЕ', 'в тильте', 'v zone', 'abuser','0 y.o', '14 y.o', 'allmute', '1000-7', '322',
        'pos 2', 'pos 1', 'pos 6', 'afk', 'ZVO', 'zxc' ,'SVO', '666', '+25', 'hate', 'farm', 'пукнул', 'z', 'Z', 'kz', 'pro', 'xd' ,'play', 'сэр да сэр', 
        'no roll', 'feed', 'анлак', 'мяу', 'под хапкой', 'as a lifestyle', 'anime+dota=luv', '666', 'похрюкай', 'пиво', 'lilpeep in ears', 'проклят','kill me',
        'not main', 'кун', 'pma', 'чсв', 'под хапкой', 'шарю', 'hatemylife' , 'wanna sleep', 'qwe', 'solo', '1x9', '1vs9'
        ];
        const adds1 = ['mode:', 'Mr', 'mr' , 'mc', 'АУЕ', 'в тильте', 'v zone', 'allmute', '1000-7', '322', '666','afk', 'ZVO', 'zxc', 'SVO', 'пт на', '666', 
        'out of lp', '+25', 'hate', 'farm', 'пукнул', 'z', 'Z', 'kz', 'pro', 'xd', 'ебу', 'hatemylife' , 'wanna sleep', 'suckdick', 'qwe', 'numb the pain'];
        const randomElement = (array) => array[Math.floor(Math.random() * array.length)];
        const models = [
            randomElement(nouns) + ' and ' + randomElement(nouns),
            randomElement(adjs) + ' ' + randomElement(nouns),
            randomElement(adjs) + ' ' + randomElement(nouns) + ' ' + randomElement(adds2),
            randomElement(adjs) + ' ' + randomElement(adds2),
            randomElement(nouns) + ' ' + randomElement(adds2),
            randomElement(adds1) + ' ' + randomElement(nouns) + ' ' + randomElement(adds2),
            randomElement(adds1) + ' ' + randomElement(adjs) + ' ' + randomElement(nouns) + ' ' + randomElement(adds2),
            randomElement(nouns) + ' ' + randomElement(adds2) + ' ' + randomElement(adds2),
        ];
        const nick = randomElement(models);
        return nick;
    }
    document.getElementById('nickname').textContent = generateNickname();

    document.querySelector('.action-button').addEventListener('click', function() {
        document.getElementById('nickname').textContent = generateNickname();
    });
});