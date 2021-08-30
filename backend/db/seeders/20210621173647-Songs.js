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
        songUrl: "https://res.cloudinary.com/dq8hlvb3e/video/upload/v1630118618/05._Wynter_Gordon_-_Dirty_Talk_xdbccl.mp3",
        artistId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Euphoria",
        songUrl: "https://res.cloudinary.com/dq8hlvb3e/video/upload/v1630118623/06._Loreen_-_Euphoria_WAWA_Remix_wtjjmy.mp3",
        artistId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Right Here",
        songUrl: "https://res.cloudinary.com/dq8hlvb3e/video/upload/v1630118633/07._Rudimental_-_Right_Here_Andy_C_Remix_xklzsh.mp3",
        artistId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "WTF",
        songUrl: "https://res.cloudinary.com/dq8hlvb3e/video/upload/v1630118647/08._Missy_Elliott_-_WTF_Where_They_From_feat._Pharrell_Williams_Chris_Lake_Remix_q2qoiy.mp3",
        artistId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Prayer in C",
        songUrl: "https://res.cloudinary.com/dq8hlvb3e/video/upload/v1630118661/09._Lilly_Wood_The_Prick_-_Prayer_in_C_Robin_Schulz_Radio_Edit_feat._Robin_Schulz_wefhbg.mp3",
        artistId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Sunlight",
        songUrl: "https://res.cloudinary.com/dq8hlvb3e/video/upload/v1630118675/10._The_Magician_-_Sunlight_feat._Years_and_Years_Blonde_Remix_byfsue.mp3",
        artistId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "I Like That",
        songUrl: "https://res.cloudinary.com/dq8hlvb3e/video/upload/v1630118691/11._Janelle_Mon%C3%A1e_-_I_Like_That_Fabich_Remix_e8xwaq.mp3",
        artistId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Heatwave",
        songUrl: "https://res.cloudinary.com/dq8hlvb3e/video/upload/v1630118709/12._Wiley_-_Heatwave_feat._Ms._D_Radio_Edit_gaxbls.mp3",
        artistId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Euphoric Dreams",
        songUrl: "https://res.cloudinary.com/dq8hlvb3e/video/upload/v1630118730/13._Krystal_Klear_-_Euphoric_Dreams_ileg6b.mp3",
        artistId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Runaway",
        songUrl: "https://res.cloudinary.com/dq8hlvb3e/video/upload/v1630118748/14._Galantis_-_Runaway_U_I_gnbha4.mp3",
        artistId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Professional Widow",
        songUrl: "https://res.cloudinary.com/dq8hlvb3e/video/upload/v1630118764/15._Tori_Amos_-_Professional_Widow_Armand_s_Star_Trunk_Funk_Mix_qshhmv.mp3",
        artistId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Bom Bom",
        songUrl: "https://res.cloudinary.com/dq8hlvb3e/video/upload/v1630118789/16._Sam_and_the_Womp_-_Bom_Bom_Radio_Edit_ygzgqv.mp3",
        artistId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Heartbeat Loud",
        songUrl: "https://res.cloudinary.com/dq8hlvb3e/video/upload/v1630118818/17._Andy_C_-_Heartbeat_Loud_feat._Fiora_nhzs20.mp3",
        artistId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Jubel",
        songUrl: "https://res.cloudinary.com/dq8hlvb3e/video/upload/v1630118852/18._Klingande_-_Jubel_Radio_Edit_xgeftj.mp3",
        artistId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Wrong or Right",
        songUrl: "https://res.cloudinary.com/dq8hlvb3e/video/upload/v1630118886/19._Kwabs_-_Wrong_or_Right_Ben_Pearce_Remix_wa6vak.mp3",
        artistId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Pumpun Blood",
        songUrl: "https://res.cloudinary.com/dq8hlvb3e/video/upload/v1630118924/20._NONONO_-_Pumpin_Blood_The_Shapeshifters_Remix_Radio_Edit_bwr23f.mp3",
        artistId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Ey Yo",
        songUrl: "https://res.cloudinary.com/dq8hlvb3e/video/upload/v1630118963/21._KANT_-_Ey_Yo_Grades_Remix_jcqgjm.mp3",
        artistId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Higher Ground",
        songUrl: "https://res.cloudinary.com/dq8hlvb3e/video/upload/v1630119005/22._Blonde_-_Higher_Ground_feat._Charli_Taft_Grant_Nelson_Remix_axxrb4.mp3",
        artistId: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "When The Night Is Over",
        songUrl: "https://res.cloudinary.com/dq8hlvb3e/video/upload/v1630119049/23._The_Magician_-_When_the_Night_Is_Over_feat._Newtimers_Grades_Remix_opqjim.mp3",
        artistId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Sing That Song",
        songUrl: "https://res.cloudinary.com/dq8hlvb3e/video/upload/v1630120087/24._TIEKS_-_Sing_That_Song_feat._Celeste_All_About_She_Remix_ya2ztt.mp3",
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
      // {
      //   title: "Mozart's House",
      //   songUrl: "https://www.dropbox.com/s/jgnfeyeh3z3zx1g/25.%20Lykke%20Li%20-%20No%20Rest%20for%20the%20Wicked%20%28Robin%20Schulz%20Remix%20Edit%29.mp3?dl=0",
      //   artistId: 1,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   title: "Please Don't Say You Love Me",
      //   songUrl: "https://www.dropbox.com/s/mmk6p4ey7zhm4ko/27.%20Gabrielle%20Aplin%20-%20Please%20Don%27t%20Say%20You%20Love%20Me%20%28Cyril%20Hahn%20Remix%20Edit%29.mp3?dl=0",
      //   artistId: 25,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   title: "Harder, Better, Faster, Stronger",
      //   songUrl: "https://www.dropbox.com/s/qo8tw2oyseoslnf/28.%20Daft%20Punk%20-%20Harder%2C%20Better%2C%20Faster%2C%20Stronger.mp3?dl=0",
      //   artistId: 26,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   title: "Into the Blue",
      //   songUrl: "https://www.dropbox.com/s/2k8slnfog7sepsg/29.%20Kylie%20Minogue%20-%20Into%20the%20Blue%20%28S-Man%20Deep%20Blue%20Remix%29.mp3?dl=0",
      //   artistId: 27,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   title: "What Is Love",
      //   songUrl: "https://www.dropbox.com/s/qkr5qtu8c5isk32/30.%20En%20Vogue%20-%20What%20Is%20Love%20%28Extended%20Club%20Remix%29.mp3?dl=0",
      //   artistId: 28,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   title: "Higher",
      //   songUrl: "https://www.dropbox.com/s/qdy9ax3w81ktwbb/31.%20All%20About%20She%20-%20Higher%20%28Free%29%20%5BSteve%20Smart%20%26%20Westfunk%20Remix%5D.mp3?dl=0",
      //   artistId: 29,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   title: "Come On Now",
      //   songUrl: "https://www.dropbox.com/s/ah0nqifv17jacg4/32.%20Tube%20%26%20Berger%20-%20Come%20on%20Now%20%28Set%20It%20Off%29%20%5BRadio%20Edit%5D%20%28feat.%20Juliet%20Sikora%29.mp3?dl=0",
      //   artistId: 30,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   title: "Breathe Slow",
      //   songUrl: "https://www.dropbox.com/s/d8nl1tmaj4jt7m8/33.%20Alesha%20Dixon%20-%20Breathe%20Slow%20%28Ali%20Payami%20Edit%29.mp3?dl=0",
      //   artistId: 31,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   title: "Rock Steady",
      //   songUrl: "https://www.dropbox.com/s/7rmietz3fcpdfre/34.%20All%20Saints%20-%20Rock%20Steady%20%28Calvin%20Harris%20Remix%29.mp3?dl=0",
      //   artistId: 32,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   title: "Trampoline",
      //   songUrl: "https://www.dropbox.com/s/eokpjsiab1o2wyd/35.%20Tinie%20Tempah%20-%20Trampoline%20%28feat.%202%20Chainz%29%20%5BShift%20K3Y%20Remix%5D.mp3?dl=0",
      //   artistId: 33,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   title: "CThe Rhythm of the Night",
      //   songUrl: "https://www.dropbox.com/s/1msxqnqe4oufaqk/36.%20Corona%20-%20The%20Rhythm%20of%20the%20Night.mp3?dl=0",
      //   artistId: 34,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   title: "There's Nothing I Won't Do",
      //   songUrl: "https://www.dropbox.com/s/lupht6zei4umgko/37.%20JX%20-%20There%27s%20Nothing%20I%20Won%27t%20Do.mp3?dl=0",
      //   artistId: 35,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   title: "Not Over Yet",
      //   songUrl: "https://www.dropbox.com/s/jx7oub0zxwew4fe/38.%20Grace%20-%20Not%20over%20Yet%20%28Perfecto%20Edit%29.mp3?dl=0",
      //   artistId: 36,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   title: "Salsoul Nugget",
      //   songUrl: "https://www.dropbox.com/s/mp4o1hyftnjo0i7/39.%20M%26S%20-%20Salsoul%20Nugget%20%28If%20U%20Wanna%29%20%5BM%26S%20Presents...The%20Girl%20Next%20Door%5D%20%20%28feat.%20The%20girl%20next%20door%29.mp3?dl=0",
      //   artistId: 37,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   title: "Daft Punk Is Playing At My House",
      //   songUrl: "https://www.dropbox.com/s/vpcb347t3rar2ze/40.%20LCD%20Soundsystem%20-%20Daft%20Punk%20Is%20Playing%20at%20My%20House%20%28Soulwax%20Shibuya%20Mix%29.mp3?dl=0",
      //   artistId: 38,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   title: "Feel It",
      //   songUrl: "https://www.dropbox.com/s/72bfyltd0hdmi4v/41.%20The%20Tamperer%20-%20Feel%20It%20%28feat.%20Maya%29.mp3?dl=0",
      //   artistId: 39,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   title: "Reach Up",
      //   songUrl: "https://www.dropbox.com/s/n2he9kf2rb21tz4/42.%20Perfecto%20Allstarz%20-%20Reach%20Up%20%28Papa%27s%20Got%20a%20Brand%20New%20Pig%20Bag%29%20%5BRadio%20Edit%5D.mp3?dl=0",
      //   artistId: 40,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   title: "Hard To Beat",
      //   songUrl: "https://www.dropbox.com/s/q90fwsv076dego6/43.%20Hard-Fi%20-%20Hard%20to%20Beat%20%28Axwell%20Mix%29%20%5BRadio%20Edit%5D.mp3?dl=0",
      //   artistId: 41,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   title: "Watercolour",
      //   songUrl: "https://www.dropbox.com/s/coj4suulq10dpvf/44.%20Pendulum%20-%20Watercolour%20%28Radio%20Edit%29.mp3?dl=0",
      //   artistId: 42,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   title: "Wearing My Rolex",
      //   songUrl: "https://www.dropbox.com/s/uyzifat6njfkqmz/45.%20Wiley%20-%20Wearing%20My%20Rolex%20%28Radio%20Edit%29.mp3?dl=0",
      //   artistId: 12,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   title: "Rhythm Is a Mystery",
      //   songUrl: "https://www.dropbox.com/s/z87j9np9octuv0b/46.%20K-Klass%20-%20Rhythm%20Is%20a%20Mystery%20%28Remix%29.mp3?dl=0",
      //   artistId: 43,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },

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
