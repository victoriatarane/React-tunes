'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      */
    return queryInterface.bulkInsert('Songs', [
      {
        title: "Rockabye",
        songUrl: "https://res.cloudinary.com/dq8hlvb3e/video/upload/v1630118609/01._Clean_Bandit_-_Rockabye_feat._Sean_Paul_Anne-Marie_Jack_Wins_Remix_ell2kb.mp3",
        artistId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Gecko",
        songUrl: "https://res.cloudinary.com/dq8hlvb3e/video/upload/v1630118610/02._Oliver_Heldens_-_Gecko_Overdrive_DJ_S.K.T_Remix_feat._Becky_Hill_xe9lme.mp3",
        artistId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Sorry",
        songUrl: "https://res.cloudinary.com/dq8hlvb3e/video/upload/v1630118611/03._Joel_Corry_-_Sorry_r2pbxi.mp3",
        artistId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "They Don't Know",
        songUrl: "https://res.cloudinary.com/dq8hlvb3e/video/upload/v1630118614/04._Disciples_-_They_Don_t_Know_bp4spq.mp3",
        artistId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Dirty Talk",
        songUrl: "https://www.dropbox.com/s/udlbdlwoqmt71c2/05.%20Wynter%20Gordon%20-%20Dirty%20Talk.mp3?dl=0",
        artistId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Euphoria",
        songUrl: "https://www.dropbox.com/s/scp2wo6iytahw18/06.%20Loreen%20-%20Euphoria%20%28WAWA%20Remix%29.mp3?dl=0",
        artistId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Right Here",
        songUrl: "https://www.dropbox.com/s/a16qjolv653hagt/07.%20Rudimental%20-%20Right%20Here%20%28Andy%20C%20Remix%29.mp3?dl=0",
        artistId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "WTF",
        songUrl: "https://www.dropbox.com/s/fzoudqiq3yz524k/08.%20Missy%20Elliott%20-%20WTF%20%28Where%20They%20From%29%20%5Bfeat.%20Pharrell%20Williams%5D%20%5BChris%20Lake%20Remix%5D.mp3?dl=0",
        artistId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Prayer in C",
        songUrl: "https://www.dropbox.com/s/yih30txobcksqbz/09.%20Lilly%20Wood%20%26%20The%20Prick%20-%20Prayer%20in%20C%20%28Robin%20Schulz%20Radio%20Edit%29%20%28feat.%20Robin%20Schulz%29.mp3?dl=0",
        artistId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Sunlight",
        songUrl: "https://www.dropbox.com/s/x66lh8x50xey972/10.%20The%20Magician%20-%20Sunlight%20%28feat.%20Years%20and%20Years%29%20%5BBlonde%20Remix%5D.mp3?dl=0",
        artistId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "I Like That",
        songUrl: "https://www.dropbox.com/s/jm6dhjkitnkrjxp/11.%20Janelle%20Mon%C3%A1e%20-%20I%20Like%20That%20%28Fabich%20Remix%29.mp3?dl=0",
        artistId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Heatwave",
        songUrl: "https://www.dropbox.com/s/aliijgeh837xtr1/12.%20Wiley%20-%20Heatwave%20%28feat.%20Ms.%20D%29%20%5BRadio%20Edit%5D.mp3?dl=0",
        artistId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Euphoric Dreams",
        songUrl: "https://www.dropbox.com/s/xex5fixmmkhjkdf/13.%20Krystal%20Klear%20-%20Euphoric%20Dreams.mp3?dl=0",
        artistId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Runaway",
        songUrl: "https://www.dropbox.com/s/pcyqndmvz172da2/14.%20Galantis%20-%20Runaway%20%28U%20%26%20I%29.mp3?dl=0",
        artistId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Professional Widow",
        songUrl: "https://www.dropbox.com/s/u4n9vfa9duekx5y/15.%20Tori%20Amos%20-%20Professional%20Widow%20%28Armand%27s%20Star%20Trunk%20Funk%20Mix%29.mp3?dl=0",
        artistId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Bom Bom",
        songUrl: "https://www.dropbox.com/s/cmefcqul84f2puk/16.%20Sam%20and%20the%20Womp%20-%20Bom%20Bom%20%28Radio%20Edit%29.mp3?dl=0",
        artistId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Heartbeat Loud",
        songUrl: "https://www.dropbox.com/s/08bct4480r1wuko/17.%20Andy%20C%20-%20Heartbeat%20Loud%20%28feat.%20Fiora%29.mp3?dl=0",
        artistId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Jubel",
        songUrl: "https://www.dropbox.com/s/gkv4f8lajw0ihyl/18.%20Klingande%20-%20Jubel%20%28Radio%20Edit%29.mp3?dl=0",
        artistId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Wrong or Right",
        songUrl: "https://www.dropbox.com/s/2j943lcf7hk6zga/19.%20Kwabs%20-%20Wrong%20or%20Right%20%28Ben%20Pearce%20Remix%29.mp3?dl=0",
        artistId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Pumpun Blood",
        songUrl: "https://www.dropbox.com/s/7os3ltpkabtbgxk/20.%20NONONO%20-%20Pumpin%20Blood%20%28The%20Shapeshifters%20Remix%20Radio%20Edit%29.mp3?dl=0",
        artistId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Ey Yo",
        songUrl: "https://www.dropbox.com/s/esy21q2yvzd3yi2/21.%20KANT%20-%20Ey%20Yo%20%28Grades%20Remix%29.mp3?dl=0",
        artistId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Higher Ground",
        songUrl: "https://www.dropbox.com/s/rusgoj5ih3fd1is/22.%20Blonde%20-%20Higher%20Ground%20%28feat.%20Charli%20Taft%29%20%5BGrant%20Nelson%20Remix%5D.mp3?dl=0",
        artistId: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "When The Night Is Over",
        songUrl: "https://www.dropbox.com/s/19dg2fesqe1gjao/23.%20The%20Magician%20-%20When%20the%20Night%20Is%20Over%20%28feat.%20Newtimers%29%20%5BGrades%20Remix%5D.mp3?dl=0",
        artistId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Sing That Song",
        songUrl: "https://www.dropbox.com/s/yz226m86wgf6qz9/24.%20TIEKS%20-%20Sing%20That%20Song%20%28feat.%20Celeste%29%20%5BAll%20About%20She%20Remix%5D.mp3?dl=0",
        artistId: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      // {
      //   title: "No Rest for the Wicked",
      //   songUrl: "https://www.dropbox.com/s/jgnfeyeh3z3zx1g/25.%20Lykke%20Li%20-%20No%20Rest%20for%20the%20Wicked%20%28Robin%20Schulz%20Remix%20Edit%29.mp3?dl=0",
      //   artistId: 24,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      {
        title: "Mozart's House",
        songUrl: "https://www.dropbox.com/s/jgnfeyeh3z3zx1g/25.%20Lykke%20Li%20-%20No%20Rest%20for%20the%20Wicked%20%28Robin%20Schulz%20Remix%20Edit%29.mp3?dl=0",
        artistId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Please Don't Say You Love Me",
        songUrl: "https://www.dropbox.com/s/mmk6p4ey7zhm4ko/27.%20Gabrielle%20Aplin%20-%20Please%20Don%27t%20Say%20You%20Love%20Me%20%28Cyril%20Hahn%20Remix%20Edit%29.mp3?dl=0",
        artistId: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Harder, Better, Faster, Stronger",
        songUrl: "https://www.dropbox.com/s/qo8tw2oyseoslnf/28.%20Daft%20Punk%20-%20Harder%2C%20Better%2C%20Faster%2C%20Stronger.mp3?dl=0",
        artistId: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Into the Blue",
        songUrl: "https://www.dropbox.com/s/2k8slnfog7sepsg/29.%20Kylie%20Minogue%20-%20Into%20the%20Blue%20%28S-Man%20Deep%20Blue%20Remix%29.mp3?dl=0",
        artistId: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "What Is Love",
        songUrl: "https://www.dropbox.com/s/qkr5qtu8c5isk32/30.%20En%20Vogue%20-%20What%20Is%20Love%20%28Extended%20Club%20Remix%29.mp3?dl=0",
        artistId: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Higher",
        songUrl: "https://www.dropbox.com/s/qdy9ax3w81ktwbb/31.%20All%20About%20She%20-%20Higher%20%28Free%29%20%5BSteve%20Smart%20%26%20Westfunk%20Remix%5D.mp3?dl=0",
        artistId: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Come On Now",
        songUrl: "https://www.dropbox.com/s/ah0nqifv17jacg4/32.%20Tube%20%26%20Berger%20-%20Come%20on%20Now%20%28Set%20It%20Off%29%20%5BRadio%20Edit%5D%20%28feat.%20Juliet%20Sikora%29.mp3?dl=0",
        artistId: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Breathe Slow",
        songUrl: "https://www.dropbox.com/s/d8nl1tmaj4jt7m8/33.%20Alesha%20Dixon%20-%20Breathe%20Slow%20%28Ali%20Payami%20Edit%29.mp3?dl=0",
        artistId: 31,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Rock Steady",
        songUrl: "https://www.dropbox.com/s/7rmietz3fcpdfre/34.%20All%20Saints%20-%20Rock%20Steady%20%28Calvin%20Harris%20Remix%29.mp3?dl=0",
        artistId: 32,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Trampoline",
        songUrl: "https://www.dropbox.com/s/eokpjsiab1o2wyd/35.%20Tinie%20Tempah%20-%20Trampoline%20%28feat.%202%20Chainz%29%20%5BShift%20K3Y%20Remix%5D.mp3?dl=0",
        artistId: 33,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CThe Rhythm of the Night",
        songUrl: "https://www.dropbox.com/s/1msxqnqe4oufaqk/36.%20Corona%20-%20The%20Rhythm%20of%20the%20Night.mp3?dl=0",
        artistId: 34,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "There's Nothing I Won't Do",
        songUrl: "https://www.dropbox.com/s/lupht6zei4umgko/37.%20JX%20-%20There%27s%20Nothing%20I%20Won%27t%20Do.mp3?dl=0",
        artistId: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Not Over Yet",
        songUrl: "https://www.dropbox.com/s/jx7oub0zxwew4fe/38.%20Grace%20-%20Not%20over%20Yet%20%28Perfecto%20Edit%29.mp3?dl=0",
        artistId: 36,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Salsoul Nugget",
        songUrl: "https://www.dropbox.com/s/mp4o1hyftnjo0i7/39.%20M%26S%20-%20Salsoul%20Nugget%20%28If%20U%20Wanna%29%20%5BM%26S%20Presents...The%20Girl%20Next%20Door%5D%20%20%28feat.%20The%20girl%20next%20door%29.mp3?dl=0",
        artistId: 37,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Daft Punk Is Playing At My House",
        songUrl: "https://www.dropbox.com/s/vpcb347t3rar2ze/40.%20LCD%20Soundsystem%20-%20Daft%20Punk%20Is%20Playing%20at%20My%20House%20%28Soulwax%20Shibuya%20Mix%29.mp3?dl=0",
        artistId: 38,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Feel It",
        songUrl: "https://www.dropbox.com/s/72bfyltd0hdmi4v/41.%20The%20Tamperer%20-%20Feel%20It%20%28feat.%20Maya%29.mp3?dl=0",
        artistId: 39,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Reach Up",
        songUrl: "https://www.dropbox.com/s/n2he9kf2rb21tz4/42.%20Perfecto%20Allstarz%20-%20Reach%20Up%20%28Papa%27s%20Got%20a%20Brand%20New%20Pig%20Bag%29%20%5BRadio%20Edit%5D.mp3?dl=0",
        artistId: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Hard To Beat",
        songUrl: "https://www.dropbox.com/s/q90fwsv076dego6/43.%20Hard-Fi%20-%20Hard%20to%20Beat%20%28Axwell%20Mix%29%20%5BRadio%20Edit%5D.mp3?dl=0",
        artistId: 41,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Watercolour",
        songUrl: "https://www.dropbox.com/s/coj4suulq10dpvf/44.%20Pendulum%20-%20Watercolour%20%28Radio%20Edit%29.mp3?dl=0",
        artistId: 42,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Wearing My Rolex",
        songUrl: "https://www.dropbox.com/s/uyzifat6njfkqmz/45.%20Wiley%20-%20Wearing%20My%20Rolex%20%28Radio%20Edit%29.mp3?dl=0",
        artistId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Rhythm Is a Mystery",
        songUrl: "https://www.dropbox.com/s/z87j9np9octuv0b/46.%20K-Klass%20-%20Rhythm%20Is%20a%20Mystery%20%28Remix%29.mp3?dl=0",
        artistId: 43,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      */
    return queryInterface.bulkDelete('Songs', null, {});

  }
};
