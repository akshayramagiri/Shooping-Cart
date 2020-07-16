var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');
// var pro= new Product() so by doing this we store 1 product of SCHEMA "Product" in variable pro....but here we have 
//done the same thing in array so that we can use loop.
var products = [
    new Product({
        imagePath: 'https://images.squarespace-cdn.com/content/v1/5679d4afe0327c3145bd3e59/1455130928642-0OKUMZNZBW91LELBIRBN/ke17ZwdGBToddI8pDm48kCsmQ9MBkuXbQ7Mpyfns9Qh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UeweqY7MNAQeVtIw_2iAmOr0BrQLAJa9grgakbYfQTDryCBzxydS2wBsDteKGBdeCA/image-asset.jpeg',
        title: 'Max Payne',
        description: 'Max Payne is a neo-noir third-person shooter video game series developed by Remedy Entertainment and Rockstar Studios. The series is named after its protagonist, Max Payne, a New York City police detective turned vigilante after his family had been murdered by drug dealers',
        price: 2381
    }),
    new Product({
        imagePath: 'https://rukminim1.flixcart.com/image/416/416/code-in-the-box-game/j/g/y/pc-standard-edition-minecraft-original-imaebpxxekvg4hkd.jpeg?q=70',
        title: 'Minecraft',
        description: 'Minecraft is a sandbox video game developed by Mojang Studios. Created by Markus "Notch" Persson in the Java programming language and released as a public alpha for personal computers in 2009, the game was officially released in November 2011, with Jens Bergensten taking over development around then.',
        price: 2000
    }),
    new Product({
        imagePath: 'https://rukminim1.flixcart.com/image/612/612/jd69le80/code-in-the-box-game/d/r/g/pc-grand-theft-auto-v-rockstar-standard-edition-original-imaf249fytvkz9hm.jpeg?q=70',
        title: 'Grand Theft Auto V ROCKSTAR',
        description: 'Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first main entry in the Grand Theft Auto series since 2008',
        price: 599
    }),
    new Product({
        imagePath: 'https://rukminim1.flixcart.com/image/612/612/jfwuz680/code-in-the-box-game/z/s/b/pc-grand-theft-auto-vice-city-catalyst-release-limited-edition-original-imaf49yxwhbfqcvr.jpeg?q=70',
        title: 'Grand Theft Auto Vice City',
        description: 'Grand Theft Auto: Vice City is a 2002 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first entry in the Grand Theft Auto series since 2001',
        price: 280
    }),
    new Product({
        imagePath: 'https://rukminim1.flixcart.com/image/612/612/j9n3ekw0/physical-game/p/s/g/standard-edition-call-of-duty-world-war-ii-full-game-pc-original-imaez8pmrajkubqh.jpeg?q=70',
        title: 'Call Of Duty: WW2',
        description: 'Call of Duty: WWII is a 2017 first-person shooter video game developed by Sledgehammer Games and published by Activision. It was released worldwide on November 3, 2017 for Microsoft Windows, PlayStation 4 and Xbox One.',
        price: 1990
    }),
    new Product({
        imagePath: 'https://rukminim1.flixcart.com/image/612/612/k547l3k0/physical-game/c/t/j/standard-edition-cyberpunk-2077-full-game-pc-original-imafnvatvaw8bytx.jpeg?q=70',
        title: 'Cyberpunk',
        description: 'Cyberpunk 2077 is an upcoming role-playing video game developed and published by CD Projekt. It is scheduled to be released for PlayStation 4, Windows, and Xbox One on 19 November 2020, Stadia by the end of the year, and PlayStation 5 and Xbox Series X in 2021.',
        price: 2499
    }),
    new Product({
        imagePath: 'https://rukminim1.flixcart.com/image/612/612/k70spzk0/physical-game/e/b/n/standard-edition-doom-eternal-full-game-pc-original-imafpcp2wztfkhcw.jpeg?q=70',
        title: 'Doom',
        description: 'Doom is a video game series and media franchise created by John Carmack, John Romero, Adrian Carmack, Kevin Cloud, and Tom Hall. The series focuses on the exploits of an unnamed space marine operating under the auspices of the Union Aerospace Corporation, who fights hordes of demons and the undead. ',
        price: 3999
    }),
    new Product({
        imagePath: 'https://rukminim1.flixcart.com/image/612/612/av-media/games/w/u/m/tomb-raider-original-imadgtmufhrevanf.jpeg?q=70',
        title: 'Tom Raider',
        description: 'Tomb Raider, also known as Lara Croft: Tomb Raider between 2001 and 2007, is a media franchise that originated with an action-adventure video game series created by British gaming company Core Design.',
        price: 430
    }),
    new Product({
        imagePath: 'https://rukminim1.flixcart.com/image/612/612/k0zlsi80/physical-game/d/s/y/standard-edition-iron-man-role-play-pc-original-imafknhmhdjecaxg.jpeg?q=70',
        title: 'Iron-Man',
        description: 'Marvels Iron Man VR is a virtual reality shooter video game developed by American studio Camouflaj and published by Sony Interactive Entertainment for the PlayStation 4s PlayStation VR headset.',
        price: 850
    }),
    new Product({
        imagePath: 'https://rukminim1.flixcart.com/image/612/612/code-in-the-box-game/x/h/v/pc-standard-edition-assassin-s-creed-unity-original-imaegfenhwzyjrcp.jpeg?q=70',
        title: 'Assassin-Creed',
        description: 'Assassins Creed is an action-adventure video game developed by Ubisoft Montreal and published by Ubisoft. It is the first installment in the Assassins Creed series. The game was released for PlayStation 3 and Xbox 360 in November 2007 and was made available on Microsoft Windows in April 2008.',
        price: 549
    }),
    new Product({
        imagePath: 'https://rukminim1.flixcart.com/image/612/612/physical-game/u/6/r/pc-standard-edition-mad-max-original-imae5kr5yzfmq6te.jpeg?q=70',
        title: 'Mad-Max',
        description: 'Mad Max is an action-adventure video game based on the Mad Max franchise. Developed by Avalanche Studios and published by Warner Bros. Interactive Entertainment, it was released for Microsoft Windows, PlayStation 4, and Xbox One in 2015. Feral Interactive published the games macOS and Linux versions. ',
        price: 999
    }),
    new Product({
        imagePath: 'https://rukminim1.flixcart.com/image/612/612/kay9bbk0/physical-game/g/h/t/spider-man-game-the-amazing-spider-man-2-action-fighting-pc-original-imafseghnfuupkzy.jpeg?q=70',
        title: 'Amazing Spider-Man',
        description: 'The Amazing Spider-Man is an open world action-adventure video game, based on the Marvel Comics character Spider-Man, and the 2012 film of the same name. It was developed by Beenox and published by Activision.',
        price: 699
    }),
    new Product({
        imagePath: 'https://rukminim1.flixcart.com/image/612/612/k5zn9u80/code-in-the-box-game/t/h/k/pc-fifa-20-standard-edition-original-imafzjxbuugxvgjc.jpeg?q=70',
        title: 'Fifa',
        description: 'FIFA is a game released annually by Electronic Arts under the EA Sports label. Football video games such as Sensible Soccer, Kick Off and Match Day had been developed since the late 1980s and already competitive in the games market when EA Sports announced a football game as the next addition to their EA Sports label',
        price: 1549
    }),
    new Product({
        imagePath: 'https://rukminim1.flixcart.com/image/612/612/kaijgy80/physical-game/a/t/z/become-human-fortnite-deep-freeze-bundle-epic-games-pc-key-original-imafs2znhgyhmudx.jpeg?q=70',
        title: 'Fortnite',
        description: 'Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine',
        price: 3599
    }),
    new Product({
        imagePath: 'https://rukminim1.flixcart.com/image/612/612/av-media/games/h/t/b/need-for-speed-most-wanted-2012-original-imaduudggnzcdwhy.jpeg?q=70',
        title: 'Need for speed most wanted',
        description: 'Need for Speed is a racing video game franchise published by Electronic Arts and currently developed by Criterion Games, the developers of Burnout. The series centers around illicit street racing and in general tasks players to complete various types of races while evading the local law enforcement in police pursuits. ',
        price: 1099
    })

];
//array of product name is products
var done = 0;
//looping is done over all products but as we know that node is a-synchronous so when we save a particular product 
//in database named shopping ...but till it is getting saved ....till then it may disconnect the sercer so when 
//our counter become equal to the length of items then only disconnect elese never disconnect.
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if(done == products.length)
            exit();
    });
}
function exit() {
    mongoose.disconnect();
}