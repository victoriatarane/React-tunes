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
        songUrl: "https://www.dropbox.com/home/React-tunes%20songs?preview=01.+Clean+Bandit+-+Rockabye+(feat.+Sean+Paul+%26+Anne-Marie)+%5BJack+Wins+Remix%5D.mp3",
        artistId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Gecko",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052382/02._Oliver_Heldens_-_Gecko_Overdrive_DJ_S.K.T_Remix_feat._Becky_Hill_hkrnex.mp3",
        artistId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Sorry",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052349/03._Joel_Corry_-_Sorry_vkdnpf.mp3",
        artistId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "They Don't Know",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052473/04._Disciples_-_They_Don_t_Know_avlkmh.mp3",
        artistId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Dirty Talk",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052360/05._Wynter_Gordon_-_Dirty_Talk_uh4hhn.mp3",
        artistId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Euphoria",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052352/06._Loreen_-_Euphoria_WAWA_Remix_ipczeq.mp3",
        artistId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Right Here",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052434/07._Rudimental_-_Right_Here_Andy_C_Remix_ljqo1u.mp3",
        artistId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "WTF",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052432/08._Missy_Elliott_-_WTF_Where_They_From_feat._Pharrell_Williams_Chris_Lake_Remix_izig3l.mp3",
        artistId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Prayer in C",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052505/09._Lilly_Wood_The_Prick_-_Prayer_in_C_Robin_Schulz_Radio_Edit_feat._Robin_Schulz_tufesd.mp3",
        artistId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Sunlight",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052479/10._The_Magician_-_Sunlight_feat._Years_and_Years_Blonde_Remix_b9gszh.mp3",
        artistId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "I Like That",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052490/11._Janelle_Mon%C3%A1e_-_I_Like_That_Fabich_Remix_lwrokr.mp3",
        artistId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Heatwave",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052486/12._Wiley_-_Heatwave_feat._Ms._D_Radio_Edit_ci08gh.mp3",
        artistId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Euphoric Dreams",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052495/13._Krystal_Klear_-_Euphoric_Dreams_b1irae.mp3",
        artistId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Runaway",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052619/14._Galantis_-_Runaway_U_I_euieyn.mp3",
        artistId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Professional Widow",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052567/15._Tori_Amos_-_Professional_Widow_Armand_s_Star_Trunk_Funk_Mix_jiqlyp.mp3",
        artistId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Bom Bom",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052537/16._Sam_and_the_Womp_-_Bom_Bom_Radio_Edit_rxpbko.mp3",
        artistId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Heartbeat Loud",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052568/17._Andy_C_-_Heartbeat_Loud_feat._Fiora_hmukib.mp3",
        artistId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Jubel",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052547/18._Klingande_-_Jubel_Radio_Edit_uv4jlg.mp3",
        artistId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Wrong or Right",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052724/19._Kwabs_-_Wrong_or_Right_Ben_Pearce_Remix_m0t2sf.mp3",
        artistId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Pumpun Blood",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052616/20._NONONO_-_Pumpin_Blood_The_Shapeshifters_Remix_Radio_Edit_uhmxbr.mp3",
        artistId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Ey Yo",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052671/21._KANT_-_Ey_Yo_Grades_Remix_w5u5sj.mp3",
        artistId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Higher Ground",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052708/22._Blonde_-_Higher_Ground_feat._Charli_Taft_Grant_Nelson_Remix_wbw3ci.mp3",
        artistId: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "When The Night Is Over",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052682/23._The_Magician_-_When_the_Night_Is_Over_feat._Newtimers_Grades_Remix_keu7fk.mp3",
        artistId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Sing That Song",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052710/24._TIEKS_-_Sing_That_Song_feat._Celeste_All_About_She_Remix_sbxat2.mp3",
        artistId: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        title: "No Rest for the Wicked",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052746/25._Lykke_Li_-_No_Rest_for_the_Wicked_Robin_Schulz_Remix_Edit_ft6igi.mp3",
        artistId: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Mozart's House",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052751/26._Clean_Bandit_-_Mozart_s_House_XXXY_Remix_zz0351.mp3",
        artistId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Please Don't Say You Love Me",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052752/27._Gabrielle_Aplin_-_Please_Don_t_Say_You_Love_Me_Cyril_Hahn_Remix_Edit_xvcxvm.mp3",
        artistId: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Harder, Better, Faster, Stronger",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052800/28._Daft_Punk_-_Harder_Better_Faster_Stronger_tfeajo.mp3",
        artistId: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Into the Blue",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052876/29._Kylie_Minogue_-_Into_the_Blue_S-Man_Deep_Blue_Remix_p6das4.mp3",
        artistId: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "What Is Love",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052930/30._En_Vogue_-_What_Is_Love_Extended_Club_Remix_aflwje.mp3",
        artistId: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Higher",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052995/31._All_About_She_-_Higher_Free_Steve_Smart_Westfunk_Remix_qwqfnh.mp3",
        artistId: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Come On Now",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052820/32._Tube_Berger_-_Come_on_Now_Set_It_Off_Radio_Edit_feat._Juliet_Sikora_a0v6ex.mp3",
        artistId: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Breathe Slow",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052837/33._Alesha_Dixon_-_Breathe_Slow_Ali_Payami_Edit_ppx27l.mp3",
        artistId: 31,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Rock Steady",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052863/34._All_Saints_-_Rock_Steady_Calvin_Harris_Remix_edivt5.mp3",
        artistId: 32,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Trampoline",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052910/35._Tinie_Tempah_-_Trampoline_feat._2_Chainz_Shift_K3Y_Remix_kpvmiv.mp3",
        artistId: 33,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "CThe Rhythm of the Night",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052919/36._Corona_-_The_Rhythm_of_the_Night_x0tuql.mp3",
        artistId: 34,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "There's Nothing I Won't Do",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052967/37._JX_-_There_s_Nothing_I_Won_t_Do_zhkhwx.mp3",
        artistId: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Not Over Yet",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052958/38._Grace_-_Not_over_Yet_Perfecto_Edit_hkxvs6.mp3",
        artistId: 36,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Salsoul Nugget",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622052981/39._M_S_-_Salsoul_Nugget_If_U_Wanna_M_S_Presents...The_Girl_Next_Door_feat._The_girl_next_door_ntxfmh.mp3",
        artistId: 37,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Daft Punk Is Playing At My House",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622053073/40._LCD_Soundsystem_-_Daft_Punk_Is_Playing_at_My_House_Soulwax_Shibuya_Mix_yeto64.mp3",
        artistId: 38,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Feel It",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622053040/41._The_Tamperer_-_Feel_It_feat._Maya_irsckr.mp3",
        artistId: 39,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Reach Up",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622053048/42._Perfecto_Allstarz_-_Reach_Up_Papa_s_Got_a_Brand_New_Pig_Bag_Radio_Edit_acpzdb.mp3",
        artistId: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Hard To Beat",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622053059/43._Hard-Fi_-_Hard_to_Beat_Axwell_Mix_Radio_Edit_pm9is1.mp3",
        artistId: 41,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Watercolour",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622053044/44._Pendulum_-_Watercolour_Radio_Edit_qez0ui.mp3",
        artistId: 42,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Wearing My Rolex",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622053105/45._Wiley_-_Wearing_My_Rolex_Radio_Edit_arcwt4.mp3",
        artistId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Rhythm Is a Mystery",
        songUrl: "https://res.cloudinary.com/dbpbcyobo/video/upload/v1622053292/46._K-Klass_-_Rhythm_Is_a_Mystery_Remix_jaokd8.mp3",
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
