let storyFlags = {};
// --- 劇情資料庫 ---
const GAME_DATA = {
  quizConfig: {
    music: "music.mp3",
    bg: "images/dakuanyuan.png",
  },
  quiz: [
    {
      question: "春日午後，你最想做什麼？",
      options: [
        { text: "整理書房，研讀詩書典籍", category: "B" },
        { text: "在花園裡讀詩，偶爾對花落淚", category: "A" },
        { text: "獨自去寺廟靜坐，遠離塵囂", category: "D" },
        { text: "拉著朋友在湖邊打水漂、說笑話", category: "C" },
      ],
    },
    {
      question: "有人誤會了你，你會怎麼做？",
      options: [
        { text: "沉默不語，覺得解釋也沒有意義", category: "D" },
        { text: "心裡非常難受，忍不住哭泣，卻說不出口", category: "A" },
        { text: "溫和地解釋清楚，不讓對方難堪", category: "B" },
        { text: "直接開口問清楚，笑著化解", category: "C" },
      ],
    },
    {
      question: "你覺得感情最重要的是什麼？",
      options: [
        { text: "心靈契合，能讀懂彼此的感受", category: "A" },
        { text: "輕鬆自在，在一起時總是笑聲不斷", category: "C" },
        { text: "彼此尊重，共同守護一個家", category: "B" },
        { text: "純粹乾淨，不染俗世", category: "D" },
      ],
    },
    {
      question: "你加入了學校的詩社，你的角色是？",
      options: [
        { text: "默默把所有細節都安排好", category: "B" },
        { text: "第一個舉手，笑說「我來出題！」", category: "C" },
        { text: "寫出最動人的詩，卻總帶著憂愁", category: "A" },
        { text: "坐在角落旁觀，偶爾說一句讓人驚艷的話", category: "D" },
      ],
    },
    {
      question: "你的房間最可能是什麼樣子？",
      options: [
        { text: "衣服隨意放，牆上貼著塗鴉和笑話", category: "C" },
        { text: "到處是書和花瓣，窗邊有一盆將謝的菊", category: "A" },
        { text: "素淨清冷，只有一爐香和幾本佛經", category: "D" },
        { text: "整齊乾淨，有一套精緻的茶具", category: "B" },
      ],
    },
    {
      question: "面對喜歡的人，你通常是？",
      options: [
        { text: "從不主動，緣分到了自然會來", category: "D" },
        { text: "照顧他的生活，用行動代替言語", category: "B" },
        { text: "在意他的每個眼神，多想一句話也睡不著", category: "A" },
        { text: "直接說出來，反正說錯了還可以笑著圓回去", category: "C" },
      ],
    },
  ],
  stories: {
    //---林黛玉---
    daiyu: {
      name: "林黛玉",
      music: "music.mp3",
      pre: {
        text: "前導",
        bg: "images/hsiaohsiangguan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "你是賈寶玉\n你將和林黛玉互動",
            img: "daiyu.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "start",
            effect: 0,
          },
        ],
      },
      start: {
        text: "識金鎖與金麒麟",
        bg: "images/hangwuyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "一日你來至梨香院，寶釵提議瞧瞧他的玉，口內念道：「莫失莫忘，仙壽恒昌。」\n鶯兒嘻嘻笑道：「我聽這兩句話，倒象和姑娘的項圈上的兩句話是一對兒。」此時你該如何回應？",
            img: "daiyu.png",
          },
        ],
        options: [
          {
            text: "原來姐姐那項圈上也有八個字，我也賞鑒賞鑒。",
            next: "scene1A",
            effect: -3,
          },
          {
            text: "原來如此。寶姐姐今日做什麼呢？",
            next: "scene1B",
            effect: 3,
            flag: "daiyuEvent1FirstB",
          },
        ],
      },
      scene1A: {
        bg: "images/hangwuyuan.png",
        img: "daiyu.png",
        text: "選Ａ",
        lines: [
          {
            speaker: "旁白",
            text: "寳釵被他纏不過將那瓔珞摘將出來。你說道：「姐姐這八個字倒與我的是一對兒。」\n話猶未了，黛玉進來，笑道：「哎喲！我來的不巧了。早知他來，我就不來了。」",
            img: "daiyu.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "scene1_1",
            effect: 0,
          },
        ],
      },
      scene1B: {
        text: "選Ｂ",
        bg: "images/hangwuyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "黛玉來了見你和寶釵在一塊，沒說什麼只打聲招呼，後薛姨媽留他們喝茶。",
            img: "daiyu.png",
          },
        ],
        // img: "daiyu.png",
        options: [
          {
            text: "繼續",
            next: "scene1_1",
            effect: 0,
          },
        ],
      },
      scene1_1: {
        text: "繼續",
        bg: "images/hangwuyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "數年後\n張道士送禮，寶玉看見有個赤金麒麟，便拿起來揣在懷裡，惟有黛玉瞅著他點頭兒。\n寶玉瞅著黛玉訕笑，道：「這個東西有趣兒，到家裡穿上個穗子你帶，好不好？」\n黛玉將頭一扭道：「我不稀罕！」」",
            img: "daiyu.png",
          },
        ],
        // img: "daiyu.png",
        options: [
          {
            text: "你笑道：「你既不稀罕，我可就拿著了。」說著，又揣起來。",
            next: "scene2",
            effect: -2,
          },
          {
            text: "你笑道：「你既不稀罕，我也不拿罷。」說著便放回去。",
            next: "scene2",
            effect: 2,
            flag: "daiyuEvent1SecondB",
          },
        ],
      },
      scene2: {
        text: "轉贈香串和蓑衣",
        bg: "images/hsiaohsiangguan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "一日你想到北靜王所贈蕶苓香串，此時你會",
            img: "daiyu.png",
          },
        ],
        // img: "daiyu.png",
        options: [
          {
            text: "將北靜王所贈蕶苓香串，珍重取出來，轉送黛玉。",
            next: "scene2A",
            effect: -2,
          },
          {
            text: "他人送的東西還是不要轉贈罷。",
            next: "scene2B_1",
            effect: 0,
            flag: "daiyuEvent2FirstB",
          },
        ],
      },
      scene2A: {
        text: "選Ａ",
        bg: "images/hsiaohsiangguan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "黛玉說：「什麼臭男人拿過的，我不要這東西！」\n遂擲還不取。你只得收回，暫且無話。",
            img: "daiyu.png",
          },
        ],
        img: "daiyu.png",
        options: [
          {
            text: "繼續",
            next: "scene3",
            effect: 0,
          },
        ],
      },
      scene2B_1: {
        text: "選B",
        bg: "images/hsiaohsiangguan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "數年後一日雨夜，你身上披著蓑衣來找黛玉，道：「這三樣都是北靜王送的。」",
            img: "daiyu.png",
          },
        ],
        img: "daiyu.png",
        options: [
          {
            text: "你又道：「你喜歡這個，我也弄一套來送你。」",
            next: "scene2B_1A",
            effect: 0,
          },
          {
            text: "心想上次轉贈北靜王的東西被拒絕，這次就別提了。",
            next: "scene3",
            effect: 0,
            flag: "daiyuEvent2SecondB",
          },
        ],
      },
      scene2B_1A: {
        text: "選A",
        lines: [
          {
            speaker: "旁白",
            text: "黛玉笑道：「我不要他。戴上那個，成了畫兒上畫的和戲上扮的那漁婆兒了。」羞的臉飛紅。",
            img: "daiyu.png",
          },
        ],
        img: "daiyu.png",
        options: [
          {
            text: "繼續",
            next: "scene3",
            effect: 0,
          },
        ],
      },
      scene3: {
        text: "數次爭吵",
        bg: "images/dakuanyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "一日黛玉誤會你把她做荷包弄丟了，生氣回房將前日你囑咐他沒做完的香袋兒鉸了。你曾見過這香袋十分精巧，無故剪了會是什麼反應",
            img: "daiyu.png",
          },
        ],
        img: "daiyu.png",
        options: [
          {
            text: "卻也可氣。",
            next: "scene3A",
            effect: -3,
          },
          {
            text: "妹妹在氣頭上就不計較罷",
            next: "scene3B",
            effect: 3,
          },
        ],
      },
      scene3A: {
        text: "選Ａ",
        bg: "images/dakuanyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "一陣吵架後二人和好。",
            img: "daiyu.png",
          },
        ],
        img: "daiyu.png",
        options: [
          {
            text: "繼續",
            next: "scene3_1",
            effect: 0,
          },
        ],
      },
      scene3B: {
        text: "選B",
        bg: "images/dakuanyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "你道：「好妹妹，我不曾把你的東西給人。」又道：「明日另替我做個香袋兒罷！」\n黛玉拭淚笑道：「做個比原來更好的。」",
            img: "daiyu.png",
          },
        ],
        img: "daiyu.png",
        options: [
          {
            text: "繼續",
            next: "scene3_1",
            effect: 0,
          },
        ],
      },
      scene3_1: {
        text: "繼續",
        bg: "images/dakuanyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "數年後\n寶釵生日眾人看戲，鳳姐笑道一個孩子扮上活像一個人，湘雲道像林姐姐的模樣兒。眾人留神細看，都笑說果然像！",
            img: "daiyu.png",
          },
        ],
        img: "daiyu.png",
        options: [
          {
            text: "忙把湘雲瞅了一眼，使個眼色",
            next: "scene3_1A",
            effect: -3,
          },
          {
            text: "道：「長得不像罷，你們笑什麼呢？」",
            next: "scene3_1B",
            effect: 3,
          },
        ],
      },
      scene3_1A: {
        text: "選A",
        bg: "images/dakuanyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "和湘雲吵架後你沒趣，只得又來找黛玉。\n黛玉冷笑道：「我原是給你們取笑兒的？拿著我比戲子？」\n你道：「為什麼惱我呢？」\n黛玉道：「你不比不笑，比人家比了笑了的還利害呢！」\n你不分辯，自己轉身回房。後三人和解，仍復如舊。",
            img: "daiyu.png",
          },
        ],
        img: "daiyu.png",
        options: [
          {
            text: "繼續",
            next: "scene4",
            effect: 0,
          },
        ],
      },
      scene3_1B: {
        text: "選B",
        bg: "images/dakuanyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "一片寂靜後鳳姐出來打圓場，眾人沒事皆散了。",
            img: "daiyu.png",
          },
        ],
        img: "daiyu.png",
        options: [
          {
            text: "繼續",
            next: "scene4",
            effect: 0,
          },
        ],
      },
      scene4: {
        text: "元妃省親贈禮",
        bg: "images/dakuanyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "元妃省親遊大觀園，把匾額「紅香綠玉」改作「怡紅快綠」。",
            img: "daiyu.png",
          },
        ],
        img: "daiyu.png",
        options: [
          {
            text: "心裡不服",
            next: "scene4A",
            effect: 0,
          },
          {
            text: "反對姐姐的想法",
            next: "scene4B",
            effect: 0,
            increment: { daiyuEvent4BCount: 1 },
          },
        ],
      },
      scene4A: {
        text: "選A",
        bg: "images/dakuanyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "你心裡不快但怕被罵而不反抗",
            img: "daiyu.png",
          },
        ],
        img: "daiyu.png",
        options: [
          {
            text: "繼續",
            next: "scene4_1",
            effect: 0,
          },
        ],
      },
      scene4B: {
        text: "選B",
        bg: "images/dakuanyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "你道:「依我想，『紅香綠玉』方兩全其美。」賈政當眾痛罵他一頓，懇請元妃息怒。",
            img: "daiyu.png",
          },
        ],
        img: "daiyu.png",
        options: [
          {
            text: "繼續",
            next: "scene4_1",
            effect: 0,
          },
        ],
      },
      scene4_1: {
        text: "繼續",
        bg: "images/dakuanyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "此時你正作詩，起稿內有「綠玉春猶卷」。寶釵推他道：「你這會子偏又用『綠玉』二字，豈不是和貴人分馳了？」你道：",
            img: "daiyu.png",
          },
        ],
        img: "daiyu.png",
        options: [
          {
            text: "「我這會子總想不起什麼典故出處來！",
            next: "scene4_1A",
            effect: 0,
          },
          {
            text: "「只是作詩罷，姐姐不會在意的。」",
            next: "scene4_1B",
            effect: 0,
            increment: { daiyuEvent4BCount: 1 },
          },
        ],
      },
      scene4_1A: {
        text: "選A",
        bg: "images/dakuanyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "寶釵笑道：「你只把『綠『玉』字改作『蠟』字就是了。」",
            img: "daiyu.png",
          },
        ],
        img: "daiyu.png",
        options: [
          {
            text: "繼續",
            next: "scene4_2",
            effect: 0,
          },
        ],
      },
      scene4_1B: {
        text: "選B",
        bg: "images/dakuanyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "你堅持用「綠玉」二字，元妃並無異議。",
            img: "daiyu.png",
          },
        ],
        img: "daiyu.png",
        options: [
          {
            text: "繼續",
            next: "scene4_2",
            effect: 0,
          },
        ],
      },
      scene4_2: {
        text: "繼續",
        bg: "images/dakuanyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "數日後元妃賞了端午兒的節禮，你和寶釵的一樣，黛玉同三姐妹的較少，你聽了，笑道：「怎麼林姑娘的倒不和我的一樣？」\n襲人道拿出來都寫著籤子不會錯。",
            img: "daiyu.png",
          },
        ],
        img: "daiyu.png",
        options: [
          {
            text: "叫了紫鵑來，「你們姑娘那裡去，就說這是我得的，愛什麼便留下。」",
            next: "scene4_2A",
            effect: -2,
          },
          {
            text: "堅持不收",
            next: "scene4_2B",
            effect: 2,
            increment: { daiyuEvent4BCount: 1 },
          },
        ],
      },
      scene4_2A: {
        text: "選A",
        bg: "images/dakuanyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "你往賈母那裡請安去，只見黛玉來了，趕上去笑道：「你怎麼不揀我的東西？」\n黛玉說道：「比不得什麼金哪玉的，不過是個草木人兒罷了。」\n你說道：「除了別人說什麼金什麼玉，我心裡沒有這個想頭。」\n黛玉聽聞與你吵起來，後兩人見寶釵來便走開了。",
            img: "daiyu.png",
          },
        ],
        img: "daiyu.png",
        options: [
          {
            text: "繼續",
            next: "scene5",
            effect: 0,
          },
        ],
      },
      scene4_2B: {
        text: "選B",
        bg: "images/dakuanyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "你道：「既然和妹妹的不一樣，那我就不要了。」\n黛玉聽聞笑道：「有什麼好不收下的？」",
            img: "daiyu.png",
          },
        ],
        img: "daiyu.png",
        options: [
          {
            text: "繼續",
            next: "scene5",
            effect: 0,
          },
        ],
      },
      scene5: {
        text: "寶黛定情",
        bg: "images/yihungyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "一日黛玉走來正聽見湘雲說經濟一事，你又說：「林妹妹要說這話，我也和他生分了！」黛玉想你縱為我的知己，奈我薄命何！\n這裡你忽見黛玉似乎有拭淚之狀，便忙趕著上來，抬起手來替他拭淚。你瞅了半天，方說道：「你放心！」\n黛玉聽了，怔了半天，說道：「我有什麼不放心的？」\n你點頭嘆道：「好妹妹！你真不明白這話，不但我素日白用了心，且連你素日待我的心也都辜負了。你皆因總是不放心的原故，才弄了一身的病了。但凡寬慰些，這病也不得一日重似一日了！」\n黛玉細細思之，竟比自己肺腑中掏出來的還覺懇切。兩個人怔了半天，黛玉只眼中淚直流下來，回身便走。",
            img: "daiyu.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "scene5_result",
          },
        ],
      },
      scene5_result: {
        isEnding: true,
        decide: function () {
          const event2AllB =
            storyFlags.daiyuEvent2FirstB && storyFlags.daiyuEvent2SecondB;
          const event4EnoughB = (storyFlags.daiyuEvent4BCount || 0) >= 2;
          if (event2AllB && event4EnoughB) {
            storyFlags.daiyuEvent5Confess = true;
            return "scene5_confess";
          }
          storyFlags.daiyuEvent5Miss = true;
          return "scene5_miss";
        },
      },
      scene5_miss: {
        bg: "images/yihungyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "你",
            text: "你忙上前拉住道：「好妹妹，且略站住，我說一句話再走。」\n黛玉一面拭淚，一面將手推開，竟去了。你望著只管發起呆來。見襲人和他說話，並未看出是誰。\n襲人想他方才之言必是因黛玉而起，如此看來，倒怕將來難免不才之事。",
            img: "daiyu.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "scene6_start",
            effect: 0,
          },
        ],
      },
      scene5_confess: {
        bg: "images/yihungyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "你",
            text: "你忙上前拉住，只道：「好妹妹！我的這個心，從來也不敢說；今日膽大說出來，就是死了也是甘心的！我為你，也弄了一身的病，又不敢告訴人，只好捱著。等你的病好了，只怕我的病才得好呢。－－睡裡夢裡也忘不了你！」\n黛玉聽聞回頭，兩人怔了半天，動也不動，後襲人見狀不對叫紫鵑來帶黛玉離開。",
            img: "daiyu.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "scene6_start",
            effect: 0,
          },
        ],
      },
      scene6_start: {
        bg: "images/yihungyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "黛玉聽聞回頭，兩人怔了半天，動也不動，後襲人見狀不對叫紫鵑來帶黛玉離開。\n不久你惦記黛玉，你會怎麼做？",
            img: "daiyu.png",
          },
        ],
        options: [
          {
            text: "喚晴雯去看黛玉",
            next: "scene6_A",
            effect: 2,
            flag: "daiyuEvent6A",
          },
          {
            text: "喚襲人去看黛玉",
            next: "scene6_B",
            effect: -1,
          },
        ],
      },
      scene6_A: {
        bg: "images/yihungyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "你拿了兩條舊絹子撂與晴雯送過去。這黛玉體貼出絹子的意思來，便向那兩塊舊帕上寫三首詩表達對你的感情。",
            img: "daiyu.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "scene7",
            effect: 0,
          },
        ],
      },
      scene6_B: {
        bg: "images/yihungyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "襲人進了屋子，見黛玉在睡覺便離去，走後便將這事上報王夫人。",
            img: "daiyu.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "scene7",
            effect: 0,
          },
        ],
      },
      scene7: {
        bg: "images/yihungyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "一日黛玉和湘雲來至怡紅院中，見靜悄悄的，黛玉來至窗外，往裡一看，只見你隨便睡著在床上，寶釵坐在身旁做針線。\n黛玉見了這個景況，招手兒叫湘雲。湘雲見他這般，只當有什麼新聞，忙也來看。才要笑，忽然想起黛玉口裡不讓人，怕他取笑，便忙拉走他。這裡寶釵只剛做了兩三個花瓣，忽見你在夢中喊罵，說：「和尚道士的話如何信得？什麼『金玉姻緣』！我偏說『木石姻緣』！」",
            img: "daiyu.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "scene7_result",
            effect: 0,
          },
        ],
      },
      scene7_result: {
        isEnding: true,
        decide: function () {
          const event1AllB =
            storyFlags.daiyuEvent1FirstB && storyFlags.daiyuEvent1SecondB;
          const canHear =
            storyFlags.daiyuEvent5Confess &&
            event1AllB &&
            storyFlags.daiyuEvent6A;
          if (canHear) {
            storyFlags.daiyuEvent7Heard = true;
            return "scene7_heard";
          }
          storyFlags.daiyuEvent7Missed = true;
          return "scene7_missed";
        },
      },
      scene7_heard: {
        bg: "images/yihungyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "黛玉剛要被拉走時在窗外聽見了，雖不解「木石姻緣」為何，卻也留心了。",
            img: "daiyu.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "final_check",
          },
        ],
      },
      scene7_missed: {
        bg: "images/yihungyuan.png",
        img: "daiyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "湘雲拉著黛玉走了，那幾個字便隨風散去，黛玉什麼都沒聽見。",
            img: "daiyu.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "final_check",
          },
        ],
      },
      final_check: {
        isEnding: true,
        decide: function () {
          if (favorability <= 0) return "ending_bad1";
          if (storyFlags.daiyuEvent7Heard && favorability >= 12)
            return "ending_true";
          if (storyFlags.daiyuEvent5Confess && !storyFlags.daiyuEvent7Heard)
            return "ending_another";
          if (storyFlags.daiyuEvent5Miss) return "ending_bad2";
          return "ending_bad1";
        },
      },
      ending_bad1: {
        bg: "images/johnbian.png",
        img: "daiyucry.png",
        lines: [
          {
            speaker: "結局",
            text: "你的結局：冷月葬花魂\n賈母等人開始商量你的終身大事，此事趙姨娘認為你若被迫與寶釵成婚，他將離家出走，而賈環出人頭地之日將臨，遂以重金賄賂榮府藥房管事的賈菖、賈菱二賊，於黛玉的藥方中加減些令其反復的藥材，致其病常年纏綿於病恙之間。\n襲人則認為若你和黛玉成婚，他便做不成姨娘，遂夜訪王夫人，道：你成婚，唯一有權的便是您的長女元妃娘娘，此時，唯一有資格入宮請求貴妃下旨賜婚於你、寶釵的便是您了，屆時難道眾人抗旨忤逆不成？一語驚醒夢中人，次日一早，王夫人便整裝入宮。午後，宮中太監前來宣諭元妃禦旨。\n年邁的賈母聞此噩耗，驚、怒、氣、痛交迫之下，不久，撒手人寰。賈母病逝後，黛玉自感日漸孤危，又因中賈菖、賈菱所下之毒，於在那年的中秋之夜，淚盡後沈湖，半日尋不著玉體，眾人皆道林姑娘生得仙子一般，如今飛回天上罷。",
            img: "daiyucry.png",
          },
        ],
        options: [{ text: "重新遊戲", next: "restart" }],
      },
      ending_bad2: {
        bg: "images/dakuanyuan.png",
        img: "daiyusick.png",
        lines: [
          {
            speaker: "結局",
            text: "你的結局：黛玉嫁北靜王\n太上皇知當今皇帝欲抄賈家，為保下往日重臣林如海之女，給他一個交代，便下旨將黛玉指婚與北靜王。\n北靜王曾藉你之口得知這名女子的才華，愛慕她的才華，故在不知道你和黛玉的感情的狀況下，也就欣然答應。\n你聽聞，自是到北靜王府大鬧，恐負違逆之罪，拖累賈府。黛玉為救你不得不嫁，後於大婚前夕淚盡而逝。",
            img: "daiyusick.png",
          },
        ],
        options: [
          {
            text: "重新遊戲",
            next: "restart",
          },
        ],
      },
      ending_another: {
        bg: "images/hsiaohsiangguan.png",
        img: "daiyucry.png",
        lines: [
          {
            speaker: "結局",
            text: "你的結局：但得長相思，便是長相見\n你數次反抗命運，終讓眾人同意他和黛玉訂婚，然你因北靜王之事被迫離開賈府一會。黛玉日日夜夜的思念你，盼著你歸來的一日，最終淚盡而逝，沒能等到你回家。\n\n數年後\n你回來，聽聞黛玉已逝，便出家做和尚，費餘生替她守墓。你日夜想著二人離別前夕所做的約定：「但得長相思，便是長相見」，本是為重逢所立之約定，怎料這相思真的無盡，那相見真的無緣。\n一日，一僧一道至你跟前，你見其心知自己命數已盡，隨之離去。",
            img: "daiyucry.png",
          },
        ],
        options: [
          {
            text: "重新遊戲",
            next: "restart",
          },
        ],
      },
      ending_true: {
        bg: "images/chinfangchia.PNG",
        img: "daiyuhaha.png",
        lines: [
          {
            speaker: "結局",
            text: "你的結局：兩人殉情歸天，再續木石前盟\n黛玉聽聞賈母等人正商量你的終身大事，突然想起前日子聽到你喊「木石姻緣」之事，心想既是與金玉姻緣對立，那木石姻緣自是指她和你，思索半日仍沒主意，問你去。\n今兒你悶悶不樂，在葬花塚拾花解悶，黛玉見你獨自一人，笑道：「你在做什麼呢？」\n你回頭見是黛玉，笑道：「葬花罷，好妹妹有什麼事嗎？」\n黛玉道：「你可知『木石姻緣』為何？」\n你聽聞，忽覺心頭一緊，眼前一片模糊，耳中傳來神瑛侍者、絳珠仙子、青梗峰、還淚等詞，頭痛的在地上打滾，停下後一動也不動。黛玉見狀哇的一聲，氣咽不上，昏倒在你身旁。\n不久後黛玉清醒，只見你在一旁守著她，周遭逕是不曾見過之物，卻覺得一切是如此自然，好似這便是他們的棲身之所。\n你：「你可知此為何處？」\n黛玉：「雖未曾見過，卻十分熟悉，此處與木石姻緣有干？」\n你點頭，一邊細說他在黛玉昏迷時所憶起之事，黛玉聽聞後便欣然接受了，她心知你所述方為二人前世，不曾懷疑。\n你：「好妹妹，今兒我們的身體因魂魄出竅命在旦夕，有二方法，一是強行脫離此處，重回大觀園，二是與我留於此處，待一僧一道攜回警幻仙子案前，一了前世風流公案。」\n黛玉：「你去哪，我同你一起去。你好便是我好。」\n你笑道：「如今回去也只得一金玉良緣之命，倒不如留在此處罷。」\n此時紫鵑欲找黛玉而尋到此處，只見你同黛玉攜手，倒臥在花塚旁，皆沒了呼吸，急忙報賈母，眾人趕到此處時只見桃花突然盛開，接著全數飄落於二人身上，賈母命人將兩人抬出來，撥開花瓣後哪裡有他們的身體。\n賈母一夜痛失兩個玉兒，當夜翻轉數個更次，方睡時只見你同黛玉從外走來，仍是往日行景，進來向賈母道：「老太太好生過罷。我們原是天上來的，今兒只是回去罷，我們就此別過了！」\n兩人於警幻仙子案前消號後，重回神瑛侍者和絳珠仙子的身份，逍遙自在，再續木石前盟。",
            img: "daiyuhaha.png",
          },
        ],
        options: [
          {
            text: "重新遊戲",
            next: "restart",
          },
        ],
      },
    },
    //---襲人---
    xiren: {
      name: "襲人",
      music: "music.mp3",
      pre: {
        text: "前導",
        bg: "images/yihungyuan.png",
        img: "xiren.png",
        lines: [
          {
            speaker: "旁白",
            text: "你是賈寶玉\n你將和襲人互動",
            img: "xiren.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "start",
            effect: 0,
          },
        ],
      },
      start: {
        text: "你纔合上眼，便恍惚的睡去。\n自太虛幻境醒來後，襲人起身替你解懷整衣，無意間發現你的秘密，遂與你同領警幻所訊雲雨之事。",
        bg: "images/yihungyuan.png",
        img: "xiren.png",
        options: [
          {
            text: "好姐姐，今日之事只有我倆知曉，萬萬不能告訴別人。",
            next: "scene2",
            infatuation: 2,
            advise: 0,
          },
          {
            text: "你含羞央告道：「我視你與其他姐妹不同，以後我都聽你的便是。」",
            next: "scene2",
            infatuation: 0,
            advise: 2,
          },
        ],
      },
      scene2: {
        text: "某日，襲人向你提到：「如今我們家要來贖我，正是該叫去的，我去了，仍舊又有好的來，不是沒了我就使不得的。」\n聽完她說的一席話，你心裏越發急了，淚痕滿面地說道：",
        bg: "images/yihungyuan.png",
        img: "xirenworry.png",
        options: [
          {
            text: "「你要是走了，我便出家當和尚去。」說完，你緊緊拉著她的衣襟。",
            next: "scene3",
            infatuation: 3,
            advise: 0,
          },
          {
            text: "姐姐，你要什麼我都可以給你，只要你留下。",
            next: "scene3",
            infatuation: 1,
            advise: 1,
          },
        ],
      },
      scene3: {
        text: "這時，襲人接著說道：「我說出三件事來，你依了，那我便不走。其一，不許你毀僧謗道。第二，不許你信口胡說。第三，不許你再吃人嘴上胭脂。」聽完這番規勸，你說道：",
        bg: "images/yihungyuan.png",
        img: "xirensmile.png",
        options: [
          {
            text: "只要你肯留下，我什麼都答應你。",
            next: "scene4",
            infatuation: 0,
            advise: 3,
          },
          {
            text: "別的都行，唯獨這胭脂…我少吃些就是了。",
            next: "scene4",
            infatuation: 1,
            advise: -2,
          },
        ],
      },
      scene4: {
        text: "這日，姐妹們聚在怡紅院閒聊，襲人私下對湘雲和寶釵稱讚你，轉頭，卻正經地向你說道：「你也該常常會會這些為官作臣的，也好將來應酬事務。」說完，便憂心忡忡地看著你。此時你說到:",
        bg: "images/yihungyuan.png",
        img: "xirenveryworry.png",
        options: [
          {
            text: "我知道你是為我好，擇日我便試著去見見那些人罷了。",
            next: "scene5",
            infatuation: 0,
            advise: 2,
          },
          {
            text: "姐姐什麼都好。就這點最像寶釵，總愛說些混帳話。",
            next: "scene5",
            infatuation: 0,
            advise: -2,
          },
        ],
      },
      scene5: {
        text: "端陽佳節，你心中悶悶不樂，忽見晴雯不小心跌折了扇子，你便發了脾氣，在一旁的襲人連连忙趕了過來勸架，你卻將怒氣發在她身上",
        bg: "images/yihungyuan.png",
        img: "xirencry.png",
        options: [
          {
            text: "看著襲人委屈落淚，你立刻上前抱住她並說道：「是我不好，一時沖昏了頭。」",
            next: "scene6",
            infatuation: 2,
            advise: 0,
          },
          {
            text: "你強撐面子並說道：「妳們一個個都仗著我寵，就越發沒規規了。」",
            next: "scene6",
            infatuation: -2,
            advise: 0,
          },
        ],
      },
      scene6: {
        text: "一日，你被老爺訓斥一番，被打得皮開肉綻，襲人含淚坐在你床邊經心服侍，整夜不敢闔眼。當你醒後，看到襲人在身旁，你虛弱地說：",
        bg: "images/yihungyuan.png",
        img: "xirencry.png",
        options: [
          {
            text: "姐姐辛苦了，快來我床邊歇息一會兒。",
            next: "scene7",
            infatuation: 2,
            advise: 0,
          },
          {
            text: "太太那裡，你都回話了嗎？",
            next: "scene7",
            infatuation: 0,
            advise: 2,
          },
        ],
      },
      scene7: {
        text: "壽怡紅群芳開夜宴，襲人抽到了桃花籤，題詞寫著：「竹外桃花三兩枝。」你看到這籤，打趣地說道：",
        bg: "images/dakuanyuan.png",
        img: "xiren.png",
        options: [
          {
            text: "姐姐就是這園裡的春色，有妳在，這大觀園才像個家。",
            next: "scene8",
            infatuation: 2,
            advise: 0,
          },
          {
            text: "願這桃花常開，姐姐也能一直陪在我身旁",
            next: "scene8",
            infatuation: 1,
            advise: 1,
          },
        ],
      },
      scene8: {
        text: "賈府敗落，襲人被迫外嫁蔣玉菡。臨走前的寒夜，她紅著眼眶，最後一次為你整理那件猩紅大氅。你走上前……",
        bg: "images/dakuanyuan.png",
        img: "xirencry.png",
        options: [
          {
            text: "輕輕地握住她冰冷的手，哽煙地說道：「好姐姐，這園子散了，以後再也沒人像你這般照顧我了。」",
            next: "final_check",
            infatuation: 1,
            advise: 0,
          },
          {
            text: "由她把扣子扣好，嘆道：「你白白跟了我這麼不長進的一個人，往後，快去過安穩的日子吧。」",
            next: "final_check",
            infatuation: 0,
            advise: 1,
          },
        ],
      },
      final_check: {
        isEnding: true,
        ending1: {
          title: "你的結局：桃紅柳綠",
          condition: "infatuation >= 6 && advise >= 5",
          text: "你為她收起對禮教的叛逆，她為你交付一生深情。相守民間，你們做了一對踏實恩愛的平民夫妻，歲月安穩。",
        },
        ending2: {
          title: "你的結局：綠葉成蔭",
          condition: "infatuation < 6 && advise >= 5",
          text: "你聽從了她的規勸，潛心苦讀重振家業。縱使少了年少輕狂的愛情，她亦成了你後半生最安穩的賢內助。",
        },
        ending3: {
          title: "你的結局：桃花移根",
          condition: "infatuation >= 6 && advise < 5",
          text: "你依賴她的溫柔，卻始終不入仕途。最終你割斷紅塵出家為僧，她只能哭乾眼淚，無奈地改嫁他人。",
        },
        ending4: {
          title: "你的結局：落紅成陣",
          condition: "infatuation < 6 && advise < 5",
          text: "你嫌她規訓繁求，她怨你虛度光陰。漫長的爭吵與消磨耗盡了僅存的溫存，落紅成陣，兩人終至分道揚鑣。",
        },
      },
    },
    //---寶釵---
    baocha: {
      name: "薛寶釵",
      music: "music.mp3",
      pre: {
        text: "前導",
        bg: "images/hangwuyuan.png",
        img: "baocha.png",
        lines: [
          {
            speaker: "旁白",
            text: "你是賈寶玉\n你將和薛寶釵互動",
            img: "baocha.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "start",
            effect: 0,
          },
        ],
      },
      start: {
        text: "寶釵解開衣服的排扣，從大紅襖兒上取下瓔珞，你看著那璀璨的金鎖。",
        bg: "images/hangwuyuan.png",
        img: "baochasmile.png",
        options: [
          {
            text: "姐姐這鎖上的字，倒與我的玉是一對兒。",
            next: "scene2",
            jinYu: 2,
            lengXiang: 0,
          },
          {
            text: "什麼金鎖與玉，我只聞到姐姐身上的冷香味，真好聞。",
            next: "scene2",
            jinYu: 0,
            lengXiang: 2,
          },
        ],
      },
      scene2: {
        text: "你忽然聞到一陣幽香，這並非衣服上的熏香，竟像是從骨子裡散出來的。此時，黛玉走進房，見你們挨得近，冷笑道：「我的奇香有什麼好的，不如寶姐姐那冷香配著你那暖香。」",
        bg: "images/hangwuyuan.png",
        img: "baochaserious.png",
        options: [
          {
            text: "你不理會黛玉的調侃，好奇地問寶姐姐：「這香氣實在奇特，姐姐是吃了什麼藥？教我也長長見識。」",
            next: "scene3",
            jinYu: 0,
            lengXiang: 2,
          },
          {
            text: "你尷尬地推了一步，對黛玉賠笑，又對寶姐姐說道：「姐姐服這藥，是為了壓制體內的熱毒，黛玉妹妹是心疼你，你別見怪。」",
            next: "scene3",
            jinYu: 1,
            lengXiang: 1,
          },
        ],
      },
      scene3: {
        text: "寶釵向你解釋《寄生草》的楚辭，念到：「赤條條，來去無牽掛。」聽完這楚辭，你說道：",
        bg: "images/yihungyuan.png",
        img: "baocha.png",
        options: [
          {
            text: "姐姐才華洋溢，飽讀詩書，實在是無書不知啊。",
            next: "scene4",
            jinYu: 0,
            lengXiang: 2,
          },
          {
            text: "姐姐既看透了這詞的核心，又為何要我讀經世之書、考取功名？",
            next: "scene4",
            jinYu: -2,
            lengXiang: 0,
          },
        ],
      },
      scene4: {
        text: "寶釵褪下左腕上的香串子，你在一旁看著那雪白的肐膊，空氣彷彿停止在一瞬間。",
        bg: "images/hangwuyuan.png",
        img: "baocha.png",
        options: [
          {
            text: "目不轉睛地盯著寶姐姐，悄悄說道：「若是長在林姑娘身上，說不定還能摸一摸。」",
            next: "scene5",
            jinYu: 0,
            lengXiang: 1,
          },
          {
            text: "移開視線，臉不自覺地泛紅，忽然想起金鎖一事。",
            next: "scene5",
            jinYu: 1,
            lengXiang: 1,
          },
        ],
      },
      scene5: {
        text: "寶釵語帶嚴肅地勸你與做官之人結為朋友，你接著說道：",
        bg: "images/yihungyuan.png",
        img: "baochaserious.png",
        options: [
          {
            text: "既然是姐姐說的，我以後多留心便是了。",
            next: "scene6",
            jinYu: 2,
            lengXiang: 0,
          },
          {
            text: "姐姐請別的屋裡坐坐罷。說完便提起腳來就走了。",
            next: "scene6",
            jinYu: -2,
            lengXiang: -1,
          },
        ],
      },
      scene6: {
        text: "你挨老爺一頓打後，寶釵托著一丸藥，眼眶微紅並說道：「別說老太太心疼，就是我們看著，心裏也…。」",
        bg: "images/yihungyuan.png",
        img: "baochacry.png",
        options: [
          {
            text: "忍著痛，感動地說道：「今日姐姐為我落淚，我這頓挨打也無足歎惜了。」",
            next: "scene7",
            jinYu: 0,
            lengXiang: 3,
          },
          {
            text: "感嘆地說道：「是我害姐姐擔心了，以後我會謹守規範的。」",
            next: "scene7",
            jinYu: 2,
            lengXiang: 0,
          },
        ],
      },
      scene7: {
        text: "寶釵在你的床旁邊繡鴛鴦，忽然間，你在夢中喊罵：「什麼『金玉姻緣！』我偏說『木石前盟！』」",
        bg: "images/yihungyuan.png",
        img: "baochaserious.png",
        options: [
          {
            text: "醒後見她神色黯然，你假裝夢話為胡言亂語，溫柔地安撫她。",
            next: "scene8",
            jinYu: 0,
            lengXiang: 2,
          },
          {
            text: "默然對視，向寶姐姐坦承：「我的心意，想必姐姐你也聽到了。」",
            next: "scene8",
            jinYu: -3,
            lengXiang: 0,
          },
        ],
      },
      scene8: {
        text: "大婚當天，你揭開蓋頭，紅燭搖曳，你發現新娘是寶釵。",
        bg: "images/hangwuyuan.png",
        img: "baocha.png",
        options: [
          {
            text: "既然金玉姻緣的命運是如此，往後餘生，我便真心相待。",
            next: "final_check",
            jinYu: 3,
            lengXiang: 1,
          },
          {
            text: "絕望地看着她的雙眼，結巴地說道：「你為何要配合他們來騙我？」",
            next: "final_check",
            jinYu: -3,
            lengXiang: -1,
          },
        ],
      },
      final_check: {
        isEnding: true,
        ending1: {
          title: "你的結局：雪裡冷梅",
          condition: "jinYu >= 5 && lengXiang >= 10",
          text: "熬過冰雪，柴米油鹽皆是真情。你背負期望進京趕考，她在家中深閨靜待，在平凡歲月中守候到了一室暖意與歸人。",
        },
        ending2: {
          title: "你的結局：舉案齊眉",
          condition: "jinYu >= 5 && lengXiang < 10",
          text: "你們相敬如賓，並肩重振家業。此生雖無熾熱的愛情，卻有著如磐石般的相濡以沫。",
        },
        ending3: {
          title: "你的結局：金簪雪埋",
          condition: "jinYu < 5 && lengXiang >= 10",
          text: "你深愛她的靈魂，卻不願受禮教束縛。大雪落盡之時你轉身離去，留下她獨守回憶的荒涼，金簪終被雪埋。",
        },
        ending4: {
          title: "你的結局：落紅成陣",
          condition: "jinYu < 5 && lengXiang < 10",
          text: "你對她無情，這場錯位的婚姻成了牢籠。你決定流浪天涯，兩人一生都被這座名為「金玉」的牢籠遍體鱗傷。",
        },
      },
    },
    //---湘雲---
    xiangyun: {
      name: "史湘雲",
      music: "music.mp3",
      pre: {
        text: "前導",
        bg: "images/dakuanyuan.png",
        img: "xianyun.png",
        lines: [
          {
            speaker: "旁白",
            text: "你是賈寶玉\n你將和史湘雲互動",
            img: "xianyun.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "start",
            effect: 0,
          },
        ],
      },
      start: {
        text: "你在清虛觀打醮，看中了一隻金麒麟，心裏想著：「正好與湘雲那只湊成一對。」",
        bg: "images/goodmiau.png",
        img: "xianyun.png",
        options: [
          {
            text: "這東西既然與你的成雙，想必我們之間必有著無法切斷的緣分",
            next: "scene2",
            kylin: 2,
            mingshi: 0,
          },
          {
            text: "這小玩意兒怪有趣的，正好配著你這爽朗的的性子",
            next: "scene2",
            kylin: 0,
            mingshi: 2,
          },
        ],
      },
      scene2: {
        text: "你看著湘雲穿著你的袍子，扮作小子樣兒，在大觀園裡大搖大擺地走著。",
        bg: "images/dakuanyuan.png",
        img: "xianyunhaha.png",
        options: [
          {
            text: "拍手叫好，說道：「雲妹妹這般打扮，真像個俊俏的小後生！」",
            next: "scene3",
            kylin: 0,
            mingshi: 2,
          },
          {
            text: "牽著雲妹妹的手說道：「等會兒讓老太太說教一番，快換下來吧，」",
            next: "scene3",
            kylin: 1,
            mingshi: 0,
          },
        ],
      },
      scene3: {
        text: "某日，湘雲說話咬了舌，把「二哥哥」叫成「愛哥哥」，緊接著眾人譁然大笑。",
        bg: "images/dakuanyuan.png",
        img: "xianyunhaha.png",
        options: [
          {
            text: "你故意調侃了她：「既然叫了愛哥哥，這輩子就都這麼叫吧。」",
            next: "scene4",
            kylin: 2,
            mingshi: 0,
          },
          {
            text: "你替妹妹解圍，說道：「這叫口齒伶俐，你們懂什麼呀。」",
            next: "scene4",
            kylin: 0,
            mingshi: 1,
          },
        ],
      },
      scene4: {
        text: "某日下了大雪，湘雲提議到蘆雪亭烤鹿肉吃，說完便自個兒往亭子走去。",
        bg: "images/lusnowan.PNG",
        img: "xianyunhehe.png",
        options: [
          {
            text: "你聽著湘雲說道：「這才叫大快朵頤，什麼大家閨秀的禮教，我才不管！」",
            next: "scene5",
            kylin: 0,
            mingshi: 2,
          },
          {
            text: "你看著湘雲的姿態說道：「這樣吃肉不免有損儀態，雲妹妹還是學學寶姐姐的端莊吧。」",
            next: "scene5",
            kylin: -2,
            mingshi: 0,
          },
        ],
      },
      scene5: {
        text: "湘雲不敵酒意，獨自躺在芍藥花叢裡的石凳上睡著了，落花滿身。你看到這場景，接著你…",
        bg: "images/shouyaotsung.png",
        img: "xianyunsleep.png",
        options: [
          {
            text: "不忍將她吵醒，靜靜地坐在一旁賞花，守著她直到她醒來。",
            next: "scene6",
            kylin: 0,
            mingshi: 2,
          },
          {
            text: "趕緊叫醒她，並說道：「在石凳上睡覺，別人要是看到了不免有失你的身分啊。」",
            next: "scene6",
            kylin: -2,
            mingshi: -2,
          },
        ],
      },
      scene6: {
        text: "中秋之夜，湘雲與你在水邊聯詩，她吟出「寒塘渡鶴影」。",
        bg: "images/johnbian.png",
        img: "xiangyuncry.png",
        options: [
          {
            text: "你思索了一番，接出下一段淒美的詩句，與她談論人生的悲滄。",
            next: "scene7",
            kylin: 0,
            mingshi: 2,
          },
          {
            text: "輕輕地握著她的手，說道：「有我在呢，雲妹妹別擔憂了。」",
            next: "scene7",
            kylin: 2,
            mingshi: 0,
          },
        ],
      },
      scene7: {
        text: "聽聞湘雲的悲慘身世，看著她那泛著淚光的雙眼，你說道：",
        bg: "images/yihungyuan.png",
        img: "xiangyuncry.png",
        options: [
          {
            text: "若叔嬸欺負了你，只管告訴我，我願進我的一份力，成為你的靠山。",
            next: "scene8",
            kylin: 3,
            mingshi: 0,
          },
          {
            text: "我的能力似乎無法給你些什麼，你就多忍著點吧。」",
            next: "scene8",
            kylin: 0,
            mingshi: -2,
          },
        ],
      },
      scene8: {
        text: "賈府衰敗，湘雲被迫出嫁，多年後，你與她在江邊重逢，你看著她眼底蓄滿的淚水，迎著江風，你上前一步，開口的第一句話是：",
        bg: "images/johnbian.png",
        img: "xiangyuncry.png",
        options: [
          {
            text: "雲妹妹，這麒麟使我們再次相遇，命運兜兜轉轉，終究沒能把我們分開。",
            next: "final_check",
            kylin: 0,
            mingshi: 1,
          },
          {
            text: "雲妹妹，這世道把我們折磨成這樣，但妳眼裡的傲骨，卻是一點都沒變。",
            next: "final_check",
            kylin: 1,
            mingshi: 0,
          },
        ],
      },
      final_check: {
        isEnding: true,
        ending1: {
          title: "你的結局：白首雙星",
          condition: "kylin >= 5 && mingshi >= 6",
          text: "你懂她的自由，她知你的深情。你們決定拋卻紅塵桎梏，帶著金麒麟私奔天涯，縱使餘生清貧，也換得琴瑟和鳴的自由。",
        },
        ending2: {
          title: "你的結局：豪傑闊大",
          condition: "kylin < 5 && mingshi >= 6",
          text: "點到為止的愛意，化作攜手江湖的俠骨。江畔痛快一盞濁酒，作別兒女情長，自此成為不離不棄的靈魂知己。",
        },
        ending3: {
          title: "你的結局：雲散高唐",
          condition: "kylin >= 5 && mingshi < 6",
          text: "你的怯懦向命運低了頭，終是負了她的傲骨。風雨江天，她孤單地坐上婚船遠嫁，此後雲散高唐，遺憾終生。",
        },
        ending4: {
          title: "你的結局：渡鶴驚寒",
          condition: "kylin < 5 && mingshi < 6",
          text: "你困於庸俗的世俗教條，推開了她最後的寄託。寒塘重逢，她對你的平庸徹底絕望，拂袖轉身，再不回頭。",
        },
      },
    },
    //---晴雯---
    qingwen: {
      name: "晴雯",
      music: "music.mp3",
      pre: {
        text: "前導",
        bg: "images/yihungyuan.png",
        img: "qingwen.png",
        lines: [
          {
            speaker: "旁白",
            text: "你是賈寶玉\n你將和晴雯互動",
            img: "qingwen.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "start",
            effect: 0,
          },
        ],
      },
      start: {
        text: "事件一：貼字",
        bg: "images/dakuanyuan.png",
        img: "qingwen.png",
        lines: [
          {
            speaker: "旁白",
            text: "今兒你吃早飯，有一碟子豆腐皮兒的包子，想著晴雯愛吃。",
            // img: "qingwen.png"
          },
        ],
        options: [
          {
            text: "和珍大奶奶要了說晚上吃",
            next: "scene1_after",
            effect: 1,
          },
          {
            text: "不留",
            next: "scene1_after",
            effect: 0,
          },
        ],
      },
      scene1_after: {
        text: "貼字",
        bg: "images/dakuanyuan.png",
        img: "qingwenhehe.png",
        lines: [
          {
            speaker: "旁白",
            text: "在薛姨媽那吃酒後回房，只見筆墨在案。",
            img: "qingwen.png",
          },
          {
            speaker: "晴雯",
            text: "晴雯笑道：「好啊，叫我研了墨，早起高興，只寫了三個字，扔下筆就走了，哄我等了這一天。快來給我寫完了這些墨才算呢！」",
            img: "qingwen.png",
          },
          {
            speaker: "你",
            text: "你笑道：「我寫的那三個字在那裡呢？」",
            img: "qingwen.png",
          },
          {
            speaker: "晴雯",
            text: "晴雯笑道：「這個人可醉了。你頭裡過那府裡去，囑咐我貼在門斗兒上的。我恐怕別人貼壞了，親自爬高上梯，貼了半天，這會子還凍的手僵著呢！」此時你會",
            img: "qingwen.png",
          },
        ],
        options: [
          {
            text: "你笑道：「我忘了你手冷，我替你握著。」便伸手拉著晴雯的手。",
            next: "scene2",
            effect: 1,
          },
          {
            text: "沒反應",
            next: "scene2",
            effect: 0,
          },
        ],
      },
      scene2: {
        text: "事件二：撕扇子作千金一笑",
        bg: "images/yihongyuan.png",
        img: "qingwenangry.png",
        lines: [
          {
            speaker: "旁白",
            text: "你因金釧兒之事心中悶悶不樂，回至房中，長吁短嘆。偏偏晴雯上來換衣裳，不防又把扇子失了手，掉在地下，將骨子跌折。你道：「蠢才，蠢才！將來怎麼樣？明日你自己當家立業，難道也是這麼顧前不顧後的？」，二人大吵一架。",
            img: "qingwenveryangry.png",
          },
          {
            speaker: "旁白",
            text: "二人氣消後，你笑道：「洗洗手給我拿果子來吃罷。」晴雯笑道：「可是說的，我一個蠢才，連扇子還跌折了，那裡還配打發吃果子呢？倘或再砸了盤子，更了不得了！」",
            img: "qingwenangry.png",
          },
          {
            speaker: "你",
            text: "你笑道：「你愛砸就砸。這些東西原不過是借人所用，你愛這樣，我愛那樣，各自性情。比如那扇子，原是搧的，你要撕著頑兒也可以使得，只是別生氣時拿他出氣；就如杯盤，原是盛東西的，你歡喜聽那一聲響，就故意砸了，也是使得的，只別在氣頭兒上拿他出氣。－－這就是愛物了。」",
            // img: "qingwenangry.png"
          },
          {
            speaker: "晴雯",
            text: "晴雯聽了，笑道：「既這麼說，你就拿扇子來我撕。我最喜歡聽撕的聲兒。」",
            img: "qingwenhehe.png",
          },
          {
            speaker: "旁白",
            text: "你聽了，便笑著遞給他。晴雯果然接過來，嗤的一聲，撕了兩半；接著又聽嗤，嗤幾聲。此時你會",
            img: "qingwenangry.png",
          },
        ],
        options: [
          {
            text: "在旁笑著說：「撕的好。再撕響些。」",
            next: "scene2A",
            effect: 4,
          },
          {
            text: "看著她沒什麼反應",
            next: "scene2B",
            effect: -4,
          },
        ],
      },
      scene2A: {
        bg: "images/yihongyuan.png",
        img: "qingwen.png",
        lines: [
          {
            speaker: "旁白",
            text: "正說著，只見麝月走過來，你趕上來，一把將她手裡的扇子也奪了遞給晴雯。晴雯接了，也撕作幾半子，二人都大笑起來。麝月道：「這是怎麼說？拿我的東西開心兒？」把扇子搬出來，讓他盡力撕不好嗎？」",
            img: "qingwenhehe.png",
          },
          {
            speaker: "旁白",
            text: "晴雯笑著，便倚在床上，說道：「我也乏了，明兒再撕罷。」",
            img: "qingwen.png",
          },
          {
            speaker: "你",
            text: "你笑道：「古人云：『千金難買一笑』，幾把扇子，能值幾何？」",
            img: "qingwen.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "scene3_start",
          },
        ],
      },
      scene2B: {
        bg: "images/yihongyuan.png",
        img: "qingwenangry.png",
        lines: [
          {
            speaker: "旁白",
            text: "你叫襲人喚人來收拾。",
            img: "qingwen.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "scene3_start",
          },
        ],
      },
      scene3_start: {
        text: "事件三：勇晴雯病補孔雀裘",
        bg: "images/yihongyuan.png",
        img: "qingwendie.png",
        lines: [
          {
            speaker: "旁白",
            text: "一夜，晴雯欲裝鬼嚇麝月，結果著涼感冒。你吃完飯，惦記著晴雯等事。",
            img: "qingwen.png",
          },
        ],
        options: [
          {
            text: "先回房",
            next: "scene3A",
            effect: 1,
          },
          {
            text: "心想其他丫頭會處理",
            next: "scene3_after",
            effect: 0,
          },
        ],
      },
      scene3A: {
        bg: "images/yihongyuan.png",
        img: "qingwendie.png",
        lines: [
          {
            speaker: "旁白",
            text: "你命麝月取鼻菸來給他聞些，痛打幾個嚏噴，就通快了。麝月果真去取了遞給你。你便揭開盒蓋，你道：「聞些，走了氣就不好了。」",
            img: "qingwen.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "scene3_after",
          },
        ],
      },
      scene3_after: {
        bg: "images/yihongyuan.png",
        img: "qingwen.png",
        lines: [
          {
            speaker: "旁白",
            text: "賈母喜歡的褂子燒了一塊，用包袱包了送出去，但織補匠、能幹裁縫、繡匠並做女工的都不敢攬。",
            img: "qingwen.png",
          },
          {
            speaker: "你",
            text: "你道：「明兒是正日子，老太太、太太說了，還叫穿過這個去呢！偏頭一日就燒了，豈不掃興！」",
            // img: "qingwen.png"
          },
          {
            speaker: "晴雯",
            text: "晴雯聽了半日，忍不住翻身說道：「拿來我瞧瞧罷沒那福氣穿就罷了！這會子又著急！」晴雯道：「這是孔雀金線的。如今咱們也拿孔雀金線，就像界線似的界密了，只怕還可混的過去。我掙命罷了！」",
            img: "qingwen.png",
          },
          {
            speaker: "你",
            text: "你忙道：「這如何使得？才好了些，如何做得活？」晴雯道：「不用你蠍蠍螫螫的，我自知道。」",
            // img: "qingwen.png"
          },
          {
            speaker: "旁白",
            text: "晴雯坐起挽了一挽頭髮，披了衣裳，只覺頭重身輕，滿眼金星亂迸，實實掌不住。待不做，又怕你著急，少不得狠命咬牙捱著，便命麝月只幫著拈線。晴雯織補不上三五針，便得伏在枕上歇一會。此時你會",
            img: "qingwen.png",
          },
        ],
        options: [
          {
            text: "在旁一時又問吃些滾水不吃，一時又命歇一歇，一時又拿一件灰鼠斗篷替他披在背上，一時又拿個枕頭給他靠著。",
            next: "scene4",
            effect: 3,
          },
          {
            text: "心想幫忙會被唸，索性看著便是。",
            next: "scene4",
            effect: -3,
          },
        ],
      },
      scene4: {
        text: "事件四：抄檢大觀園",
        bg: "images/yihongyuan.png",
        img: "qingwenanger.png",
        lines: [
          {
            speaker: "旁白",
            text: "王善保家的向王夫人讒言晴雯與你行不才之事，王夫人回報賈母欲攆晴雯出去，隔日你一聞得王夫人進來親查，便料道晴雯也保不住了。此時你會",
            img: "qingwen.png",
          },
        ],
        options: [
          {
            text: "早飛也似的趕了去怡紅院",
            next: "scene4A",
            flag: "qingwenEvent4A",
          },
          {
            text: "急忙去找賈母求情",
            next: "scene4B",
            flag: "qingwenEvent4B",
          },
        ],
      },
      scene4A: {
        bg: "images/yihongyuan.png",
        img: "qingwen.png",
        lines: [
          {
            speaker: "旁白",
            text: "你及到了怡紅院，只見一群人在那裡。王夫人在屋裡坐著，一臉怒色，見你也不理。晴雯四五日水米不曾沾牙，如今現打炕上拉下來，蓬頭垢面的，兩個女人攙架起來去了。",
            img: "qingwen.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "final_check",
          },
        ],
      },
      scene4B: {
        bg: "images/jiamuroom.png",
        img: "qingwen.png",
        lines: [
          {
            speaker: "旁白",
            text: "你急忙跪到賈母跟前，細說晴雯補裘之事，又道賈母的針線活全由晴雯負責，欲求賈母保住晴雯。你又欲磕頭撞地，賈母見狀急哭了，趕緊扶你起來。",
            img: "qingwen.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "final_check",
          },
        ],
      },
      final_check: {
        isEnding: true,
        decide: function () {
          if (storyFlags.qingwenEvent4A) {
            return favorability >= 9 ? "ending_true" : "ending_bad2";
          }
          if (storyFlags.qingwenEvent4B) {
            return favorability >= 7 ? "ending_another" : "ending_bad1";
          }
          return favorability >= 9 ? "ending_true" : "ending_bad2";
        },
      },
      ending_bad1: {
        bg: "images/chingwenpius.PNG",
        img: "qingwenveryangry.png",
        lines: [
          {
            speaker: "結局",
            text: "你的結局：配與鄉民",
            img: "qingwenveryangry.png",
          },
          {
            speaker: "旁白",
            text: "賈母見你拼命，十分的捨不得，忙喚人叫王夫人帶晴雯回來，待她養好病再商量去留。數日後晴雯漸漸好起來，王夫人賞他家配人去。然晴雯自幼嬌生慣養的，何嘗受過一日委屈？遂於一日自縊。",
            img: "qingwenveryangry.png",
          },
        ],
        options: [
          {
            text: "重玩遊戲",
            next: "restart",
          },
        ],
      },
      ending_bad2: {
        bg: "images/chingwenpius.PNG",
        img: "qingwendie.png",
        lines: [
          {
            speaker: "結局",
            text: "你的結局：抱憾病逝",
            img: "qingwendie.png",
          },
          {
            speaker: "旁白",
            text: "晴雯一時被攆出來，住在他姑舅哥哥家，那媳婦那裡有心腸照管，只剩下晴雯一人在外間屋內爬著。將死之際，晴雯哭喊著「我不甘心」，嚥下最後一口氣時也沒能盼到你的到來，就此別過人間。",
            img: "qingwendie.png",
          },
        ],
        options: [
          {
            text: "重玩遊戲",
            next: "restart",
          },
        ],
      },
      ending_another: {
        bg: "images/yihongyuan.png",
        img: "qingwen.png",
        lines: [
          {
            speaker: "結局",
            text: "你得結局：江南繡娘",
            img: "qingwen.png",
          },
          {
            speaker: "旁白",
            text: "賈母見你拼命，十分的捨不得，忙喚人叫王夫人帶晴雯回來，待她養好病再商量去留。數日後晴雯漸漸好起來，賈母感念過去種種付出，介紹一繡匠與她，命晴雯跟著他做活，條件是你不許再去見她。晴雯告別賈府當日，你被軟禁於怡紅院中，沒能見此生最後一面。數年後，江南謠傳有一可補萬物的繡娘，忽於十七歲時重病身亡，人人都道此乃紅顏薄命，天妒英才啊！",
            img: "qingwen.png",
          },
        ],
        options: [
          {
            text: "重玩遊戲",
            next: "restart",
          },
        ],
      },
      ending_true: {
        bg: "images/yihongyuan.png",
        img: "qingwendie.png",
        lines: [
          {
            speaker: "結局",
            text: "你的結局：痴公子杜撰芙蓉誄",
            img: "qingwendie.png",
          },
          {
            speaker: "旁白",
            text: "你央一個老婆子帶他到晴雯家去。晴雯朦朧睡了，忽聞有人喚她，一見是你，一把死攥住他的手，哽咽了半日，方說道：「我只道不得見你了！」接著便嗽個不住。你看著，眼中淚直流下來，連自己的身子都不知為何物了",
            img: "qingwendie.png",
          },
          {
            speaker: "你",
            text: "你問道：「你有什麼說的？趁著沒人告訴我。」",
            img: "qingwendie.png",
          },
          {
            speaker: "晴雯",
            text: "晴雯嗚咽道：「有什麼可說的！不過是挨一刻是一刻，挨一日是一日！我已知橫豎不過三五日的光景，我就好回去了。只是一件，我死也不甘心。我雖生得比別人好些，並沒有私情勾引你，怎麼一口死咬定了我是個狐狸精！我今兒既擔了虛名，況且沒了遠限，不是我說一句後悔的話：早知如此，我當日－－」",
            img: "qingwendie.png",
          },
          {
            speaker: "旁白",
            text: "說到這裡，氣往上咽，便說不出來，兩手已經冰涼。你一隻手攥著他的手，一隻手輕輕的給他搥打著。又不敢大聲的叫，真真萬箭攢心。兩三句話時，晴雯才哭出來。你拉著他的手，只覺瘦如枯柴，腕上猶戴著四個銀鐲，因哭道：「除下來，等好了再戴上去罷。」又說：「這一病好了，又傷好些。」",
            img: "qingwendie.png",
          },
          {
            speaker: "旁白",
            text: "晴雯拭淚，把那手用力拳回，擱在口邊，狠命一咬，只聽咯吱一聲，把兩根蔥管一般的指甲齊根咬下，拉了你的手，將指甲擱在他手裡。又在被窩內，將貼身穿著的一件舊紅絞小襖兒脫下，遞給你。你見他這般，已經會意，連忙解開外衣，將自己的襖兒褪下來蓋在他身上，卻把這件穿上。剛繫腰時，只見晴雯睜眼道：「你扶起我來坐坐。」你只得扶他，好容易欠起半身，晴雯伸手把你的襖兒往自己身上拉。你連忙給他披上，拖著肐膊，然後將他的指甲裝在荷包裡。",
            img: "qingwendie.png",
          },
          {
            speaker: "晴雯",
            text: "晴雯哭道：「你去罷！這裡腌臢，你那裡受得！你的身子要緊。今日這一來，我就死了，也不枉擔了虛名！」",
            img: "qingwendie.png",
          },
          {
            speaker: "旁白",
            text: "你回去後，當晚翻轉了一個更次，至五更方睡去時，只見晴雯從外走來，仍是往日行景，進來向你道：「你們好生過罷。我從此就別過了！」說畢，翻身就走。你忙叫時，又將襲人叫醒。襲人還只當他慣了口亂叫，卻見你哭了，說道：「晴雯死了！」",
            img: "qingwendie.png",
          },
          {
            speaker: "旁白",
            text: "襲人打發人去瞧，那人回來說：「晴雯姐姐直著脖子叫了一夜，今日早起就閉了眼住了口，世事不知，只有倒氣的分兒了。」你忙道：「一夜叫的是誰？」小丫頭道：「一夜叫的是娘。」你拭淚道：「還叫誰？」小丫頭說：「沒有聽見叫別人了。」你道：「你胡塗。想必沒有聽真。」小ㄚ頭又道：「他笑道：『你們不知道，我不是死。如今天上少了一個花神，玉皇爺叫我去管花兒。你只可告訴你一人，除他之外，不可洩了天機。』就告訴我說，他就是專管芙蓉花的。」",
            img: "qingwendie.png",
          },
          {
            speaker: "旁白",
            text: "你一心悽楚，回至園中，猛見池上芙蓉，想起小丫鬟說晴雯做了芙蓉之神，不覺又喜歡起來，乃看著芙蓉嗟嘆了一會。因用晴雯素日所喜之冰鮫縠一幅，楷字寫成，名曰《芙蓉女兒誄》，－－前序後歌－－又備了晴雯素喜的四樣吃食。於是黃昏人靜之時，命那小丫頭捧至芙蓉前，先行禮畢，將那誄文即掛於芙蓉枝上，乃泣涕唸。",
            img: "qingwendie.png",
          },
        ],
        options: [
          {
            text: "重玩遊戲",
            next: "restart",
          },
        ],
      },
    },
    //---妙玉---
    miaoyu: {
      name: "妙玉",
      music: "music.mp3",
      pre: {
        text: "前導",
        bg: "images/lungtsuian.png",
        img: "miaoyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "你是賈寶玉\n你將和妙玉互動",
            img: "miaoyu.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "start",
            effect: 0,
          },
        ],
      },
      // 事件一：品茶
      start: {
        text: "賈你品茶櫳翠庵",
        bg: "images/lungtsuian.png",
        img: "miaoyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "賈母等人帶了劉姥姥至櫳翠庵來，只見妙玉親自捧了小茶盤，裡面放一個成窯五彩小蓋鍾，捧與賈母。賈母吃了半盞，笑著遞與劉姥姥，眾人後笑了起來。那妙玉便把寶釵黛玉的衣襟一拉，二人隨他出去。你便輕輕走進來，笑道：「你們吃己茶呢。」妙玉剛要去取杯，只見道婆收了上面茶盞來，忙命：「將那成窯的茶杯別收了，擱在外頭去罷。」你會意，知為劉姥姥吃了，他嫌腌臢，不要了。又見妙玉另拿出兩隻杯奇珍古玩之杯與黛玉和寶釵，仍將前番自己常日吃茶的那隻綠玉斗來斟與你。",
            img: "miaoyu.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "tea_event_actual",
          },
        ],
      },
      tea_event_actual: {
        text: "喝茶",
        bg: "images/lungtsuian.png",
        img: "miaoyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "你笑道：「常言『世法平等』。他兩個就用那樣古玩奇珍，我就是個俗器了。」妙玉道：「這是俗器？不是我說狂話：只怕你家裡未必找的出這麼一個俗器來呢。」此時你回答道：",
            img: "miaoyuhappy.png",
          },
        ],
        options: [
          {
            text: "俗語說，『隨鄉入鄉』，到了你這裡，自然把這金珠玉寶一概貶為俗器了。",
            next: "tea_choice_a",
            effect: 3,
          },
          {
            text: "我倒看不出這杯有何奇特之處。",
            next: "tea_choice_b",
            effect: -3,
          },
        ],
      },
      tea_choice_a: {
        text: "喝茶",
        bg: "images/lungtsuian.png",
        img: "miaoyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "妙玉聽如此說，十分歡喜，遂又尋出一隻九曲十環出來",
            img: "miaoyu.png",
          },
          {
            speaker: "妙玉",
            text: "妙玉笑道：「就剩了這一個。你可吃的了這一海？」你喜的忙道：「吃的了。」妙玉笑道：「你雖吃的了，也沒這些茶你糟蹋！豈不聞『一杯為品，二杯即是解渴的蠢物，三杯便是飲驢了？』你吃這一海，更成什麼？」",
            img: "miaoyu.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "cup_choice",
          },
        ],
      },
      tea_choice_b: {
        text: "喝茶",
        bg: "images/lungtsuian.png",
        img: "miaoyu.png",
        lines: [
          {
            speaker: "妙玉",
            text: "妙玉道：「剩一海你可吃？」你喜的忙道：「吃的了。」妙玉：「不能給你吃，誰讓你道我的綠玉斗為俗器呢？」",
            img: "miaoyu.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "cup_choice",
          },
        ],
      },
      cup_choice: {
        text: "喝茶",
        bg: "images/lungtsuian.png",
        img: "miaoyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "吃茶後你想到劉姥姥用過的茶杯丟了可惜，你對妙玉說：",
            img: "miaoyu.png",
          },
        ],
        options: [
          {
            text: "那茶杯雖然腌臢了，白撩了豈不可惜？依我說，不如就給了那貧婆子罷，他賣了也可以度日。你說使得麼？",
            next: "cup_eventA",
            effect: 3,
            flag: "cupA",
          },
          {
            text: "那茶杯雖然腌臢了，白撩了豈不可惜？依我說，不如就給我罷",
            next: "cup_eventB",
            effect: 0,
          },
        ],
      },
      cup_eventA: {
        text: "茶杯",
        bg: "images/lungtsuian.png",
        img: "miaoyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "妙玉點頭說道：「這也罷了。幸而那杯子是我沒吃過的；若是我吃過的，我就砸碎了也不能給他。」你道：「自然如此，只交給我就是了。」",
            img: "miaoyu.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "plum_event",
          },
        ],
      },
      cup_eventB: {
        text: "茶杯",
        bg: "images/lungtsuian.png",
        img: "miaoyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "妙玉搖頭道：「那茶杯腌臢了，留著不妥。」你道：「他若再訪拿這茶杯給他用就是，省得再丟茶杯。」離去時時你叫幾個小幺兒來，河裡打幾桶水來洗地。",
            img: "miaoyu.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "plum_event",
          },
        ],
      },
      // 事件二：乞梅
      plum_event: {
        text: "仿妙玉乞紅梅",
        bg: "images/lungtsuian.png",
        img: "miaoyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "一日眾人於蘆雪庭聯即景詩，你落第，李紈道：「我才看見櫳翠庵的紅梅有趣，我要折一枝插在瓶裡，可厭妙玉為人，我不理他。如今罰你取一枝來，插著玩兒。」你也樂為，答應著就要走。",
            img: "miaoyu.png",
          },
        ],
        options: [
          {
            text: "你步至櫳翠庵門前喚人向妙玉傳達來意",
            next: "plum_a",
            effect: 1,
          },
          {
            text: "你步至櫳翠庵門前直接進入",
            next: "plum_b",
            effect: 0,
          },
        ],
      },
      plum_a: {
        text: "問梅",
        bg: "images/lungtsuian.png",
        img: "miaoyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "小兒傳達師傅問為何要梅？你如何回答",
            img: "miaoyu.png",
          },
        ],
        options: [
          {
            text: "如實交代",
            next: "plum_resultA",
            effect: 0,
          },
          {
            text: "今早看見十數枝紅梅，如胭脂一般，映著雪色，分外顯的精神，好不有趣。",
            next: "plum_resultB",
            effect: 2,
          },
        ],
      },
      plum_resultA: {
        text: "問梅",
        bg: "images/lungtsuian.png",
        img: "miaoyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "小幺兒拿著紅梅出來，不見妙玉。",
            img: "miaoyu.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "birthday_event",
            effect: 0,
          },
        ],
      },
      plum_resultB: {
        text: "問梅",
        bg: "images/lungtsuian.png",
        img: "miaoyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "妙玉請你進門，梅下談話一番，妙玉親自摘下精心挑選的梅花贈與你，你看著一舉一動，不覺呆了，離去時回望數次。",
            img: "miaoyu.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "birthday_event",
            effect: 0,
          },
        ],
      },
      plum_b: {
        text: "妙玉應門",
        bg: "images/lungtsuian.png",
        img: "miaoyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "妙玉道：「你來此有何事？」你如何回答",
            img: "miaoyu.png",
          },
        ],
        options: [
          {
            text: "如實交代",
            next: "plum_b_A",
            effect: 0,
          },
          {
            text: "今早看見十數枝紅梅，如胭脂一般，映著雪色，分外顯的精神，好不有趣。",
            next: "plum_b_B",
            effect: 2,
          },
        ],
      },
      plum_b_A: {
        text: "妙玉應門",
        bg: "images/lungtsuian.png",
        img: "miaoyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "妙玉道：「罰你來，你就真的來呢？」你道：「我自是樂為」，妙玉聽聞，喚小幺兒取一支與你。",
            img: "miaoyu.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "birthday_event",
            effect: 0,
          },
        ],
      },
      plum_b_B: {
        text: "妙玉應門",
        bg: "images/lungtsuian.png",
        img: "miaoyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "妙玉：「你還識相呢？」，遂挑一支，喚小幺兒摘了拿來，親自贈與你。",
            img: "miaoyu.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "birthday_event",
            effect: 0,
          },
        ],
      },
      // 事件三：生日賀帖
      birthday_event: {
        bg: "images/dakuanyuan.png",
        img: "miaoyu.png",
        text: "生日",
        lines: [
          {
            speaker: "旁白",
            text: "你生日收到一張粉紅箋紙，上面寫著：「檻外人妙玉恭肅遙叩芳辰。」忙命：「快拿紙來。」看他下著「檻外人」三字，自己竟不知回帖上回個什麼字樣才相敵，只管提筆出神，半天仍沒主意，問黛玉去。想罷，袖了帖兒逕來尋黛玉。剛過了沁芳亭，忽見岫煙顫顫巍巍的迎面走來。你忙問：「姐姐那裡去？」岫煙笑道：「我找妙玉說話。」",
            img: "miaoyu.png",
          },
          {
            speaker: "旁白",
            text: "你喜得笑道：「我正因他的一件事為難，要請教別人去，如今遇見姐姐，真是天緣湊合，求姐姐指教！」說著，便將拜帖取給岫煙看。岫煙笑道：「他這脾氣竟不能改，竟是生成這等放誕詭僻了。從來沒見拜帖上下別號的。這可是俗語說的，『僧不僧，俗不俗，女不女，男不男』，成個什麼理數！」你聽說後說",
            img: "miaoyu.png",
          },
        ],
        options: [
          {
            text: "姐姐不知道。他原不在這些人之中，他原是世人意外之人，因取了我是個些微有知識的，方給我這帖子。我因不知回什麼字樣才好，竟沒了主意，正要去問林妹妹，可巧遇見了姐姐！",
            next: "birthday_replyA",
            effect: 4,
          },
          {
            text: "我沒什麼知識，不解他為何送此帖。",
            next: "birthday_replyB",
            effect: -4,
          },
        ],
      },
      birthday_replyA: {
        text: "回帖",
        bg: "images/dakuanyuan.png",
        img: "miaoyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "岫煙聽了你這話，且只管用眼上下細細打量了半日，方笑道：「怪道俗語說的，『聞名不如見面』，又怪不的妙玉竟下這帖子給你，又怪不的上年竟給你那些梅花。既連他這樣，少不得我告訴你原故。他常說古人中自漢、晉、五代、唐、宋以來皆無好詩，只有兩句好，說道：『縱有千年鐵門坎，終須一個土饅頭。』所以他自稱『檻外之人』。又常贊文是莊子的好，故又或稱為『畸人』。他若帖子上是自稱『畸人』的，你就還他個『世人』。『畸人』者，他自稱是畸零之人；你謙自己乃世人擾擾之人，他便喜了。如今他自稱『檻外之人』，是自謂蹈於鐵檻之外了，故你如今只下『檻內人』，便合了他的心了。」你聽了，如醍醐灌頂，回房寫了帖子，上面只寫「檻內人你薰沐謹拜」幾字，親自拿了到櫳翠庵，只隔門縫兒投進去，便回來了。",
            img: "miaoyu.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "final_check",
          },
        ],
      },
      birthday_replyB: {
        text: "回帖",
        bg: "images/dakuanyuan.png",
        img: "miaoyu.png",
        lines: [
          {
            speaker: "旁白",
            text: "岫烟沒說話便離去，而你去問黛玉，妙玉收到後察覺是黛玉給的建議。",
            img: "miaoyu.png",
          },
        ],
        options: [
          {
            text: "繼續",
            next: "final_check",
          },
        ],
      },
      final_check: {
        isEnding: true,
        // text: "（命運判定中...）",
        // lines: [
        //   {
        //     speaker: "旁白",
        //     text: "（命運判定中...）",
        //     // img: "miaoyu_end1.png",
        //   },
        // ],
        decide: () => {
          if (storyFlags.cupA) {
            return favorability >= 7 ? "ending_2" : "ending_1";
          } else {
            return favorability >= 8 ? "ending_3" : "ending_1";
          }
        },
      },
      ending_1: {
        text: "結局一",
        bg: "images/chingwenplus.PNG",
        lines: [
          {
            speaker: "旁白",
            text: "你的結局：入紅塵俗世\n賈府被抄家後，無人維護櫳翠庵，日子日漸蕭條，妙玉為生活被迫再次面對骯髒醜陋的俗世，且你也自顧不暇，二人此後再無交集。",
          },
        ],
        options: [
          {
            text: "重新遊戲",
            next: "restart",
          },
        ],
      },
      ending_2: {
        text: "結局二",
        bg: "images/johnbian.png",
        lines: [
          {
            speaker: "旁白",
            text: "你的結局：為救你從順親王\n前些年劉姥姥賣掉的茶杯乃珍稀之物，非常人所能擁有，忠順親王尋到源頭，見賈府竟窩藏罪家之女。此時你因北靜王陷牢獄之災，此事又再添一罪，所負之刑恐不保其命，妙玉聽聞此事，忙攜平日收於暗處之財，趕往瓜州渡口，自願把己身獻忠順親王，後換得你自由。",
          },
        ],
        options: [
          {
            text: "重新遊戲",
            next: "restart",
          },
        ],
      },
      ending_3: {
        text: "結局三",
        bg: "images/goodmiau.png",
        lines: [
          {
            speaker: "旁白",
            text: "你的結局：與君訣別\n賈府被抄家前夕，妙玉感悟大觀園一時的繁榮終是一場空；與你，此生唯一的知己，也終是無果。欲行之日，二人怔了一會，未曾說話。我知道你的心，你知道我的心。\n此後妙玉了斷對俗世的情，至深山古廟修行，數年後，你同一僧一道遠走天涯之時，妙玉坐化而終",
          },
        ],
        options: [
          {
            text: "重新遊戲",
            next: "restart",
          },
        ],
      },
    },
  },
};

// --- 遊戲邏輯 ---
let currentStep = 0;
let scores = { A: 0, B: 0, C: 0, D: 0 };
let userChoices = [];
let favorability = 0;

// 各角色線專用分數
let roleScores = {}; // e.g. { infatuation: 0, advise: 0 }
let cupChoice = ""; // 妙玉線茶杯選擇

const ROLE_SCORE_FIELDS = [
  "infatuation",
  "advise",
  "jinYu",
  "lengXiang",
  "kylin",
  "mingshi",
];

function createEmptyRoleScores() {
  return ROLE_SCORE_FIELDS.reduce((acc, field) => {
    acc[field] = 0;
    return acc;
  }, {});
}

function resolveImagePath(imgSrc) {
  if (!imgSrc || imgSrc === "null") return null;
  return imgSrc.startsWith("images/") ||
    imgSrc.startsWith("http") ||
    imgSrc.startsWith("./")
    ? imgSrc
    : `images/${imgSrc}`;
}

function applyOptionEffects(opt) {
  if (!opt) return;

  // 黛玉／晴雯：effect 可直接是數字
  if (typeof opt.effect === "number") {
    favorability += opt.effect;
  }

  // 妙玉：effect 也可能是 { favor: 數字 }
  if (opt.effect && typeof opt.effect === "object") {
    favorability += opt.effect.favor || 0;
  }

  // 妙玉舊格式：favor 直接寫在選項上
  if (typeof opt.favor === "number") {
    favorability += opt.favor;
  }

  // 襲人／寶釵／湘雲等角色專用分數
  for (const field of ROLE_SCORE_FIELDS) {
    if (typeof opt[field] === "number") {
      roleScores[field] = (roleScores[field] || 0) + opt[field];
    }
  }

  // 妙玉茶杯選擇
  if (opt.cupChoice) cupChoice = opt.cupChoice;

  // 劇情 flag：可用 flag: "xxx" 或 flagValue: { key: value }
  if (opt.flag) storyFlags[opt.flag] = true;
  if (opt.flagValue && typeof opt.flagValue === "object") {
    Object.assign(storyFlags, opt.flagValue);
  }

  // 劇情計數：例如 increment: { daiyuEvent4B: 1 }
  if (opt.increment && typeof opt.increment === "object") {
    for (const [key, value] of Object.entries(opt.increment)) {
      storyFlags[key] = (storyFlags[key] || 0) + value;
    }
  }
}

function initGame() {
  currentStep = 0;
  scores = { A: 0, B: 0, C: 0, D: 0 };
  userChoices = [];
  favorability = 0;
  roleScores = createEmptyRoleScores();
  cupChoice = "";
  dialogLines = [];
  dialogIndex = 0;
  currentRole = "";
  currentNodeKey = "";
  storyFlags = {};

  changeBackground(GAME_DATA.quizConfig.bg);

  const audio = document.getElementById("bg-music");
  if (audio) {
    audio.src = `sound/${GAME_DATA.quizConfig.music}`;
  }

  // 隱藏立繪
  const imgEl = document.getElementById("character-img");
  if (imgEl) imgEl.style.display = "none";

  renderQuiz();
}

function changeMusic(fileName) {
  const audio = document.getElementById("bg-music");
  if (!audio) return;
  const path = fileName.startsWith("sound/") ? fileName : `sound/${fileName}`;
  if (audio.src.endsWith(path.split("/").pop()) && !audio.paused) return; // 同首曲不重播
  audio.src = path;
  audio.currentTime = 0;
  audio.play().catch((e) => console.log("音樂等待用戶互動後播放"));
}

function changeBackground(fileName) {
  // Support both bare filenames and paths that already include a folder
  const path =
    fileName.startsWith("images/") || fileName.startsWith("http")
      ? fileName
      : `1s/${fileName}`;
  document.body.style.backgroundImage = `url('${path}')`;
}

function renderQuiz() {
  const q = GAME_DATA.quiz[currentStep];
  document.getElementById("story-text").innerText =
    `【前測 ${currentStep + 1}/6】\n${q.question}`;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.innerText = opt.text;
    btn.onclick = () => {
      // 確保點擊時有聲音
      const audio = document.getElementById("bg-music");
      if (audio && audio.paused) {
        audio.play().catch((e) => console.log(e));
      }

      scores[opt.category]++;
      userChoices[currentStep] = opt.category;
      currentStep++;

      if (currentStep < GAME_DATA.quiz.length) {
        renderQuiz();
      } else {
        determineRole();
      }
    };
    optionsDiv.appendChild(btn);
  });
}

function determineRole() {
  const maxScore = Math.max(scores.A, scores.B, scores.C, scores.D);

  let winner = "";
  if (scores.A === maxScore) winner = "A";
  else if (scores.D === maxScore) winner = "D";
  else if (scores.B === maxScore) winner = "B";
  else winner = "C";

  let finalRole = "";
  if (winner === "A") {
    finalRole = "daiyu";
  } else if (winner === "D") {
    finalRole = "miaoyu";
  } else if (winner === "B") {
    // 第六題索引為 5
    finalRole = userChoices[5] === "B" ? "xiren" : "baocha";
  } else if (winner === "C") {
    // 第二題索引為 1
    finalRole = userChoices[1] === "C" ? "xiangyun" : "qingwen";
  }

  if (!GAME_DATA.stories[finalRole]) {
    finalRole = "daiyu";
  }

  changeMusic(GAME_DATA.stories[finalRole].music);
  renderStory(finalRole, "pre");
}

// --- 對話框模式狀態 ---
let dialogLines = []; // 目前節點的對話行陣列
let dialogIndex = 0; // 目前顯示到第幾行
let currentRole = ""; // 目前角色
let currentNodeKey = ""; // 目前節點
let _typewriterTimer = null; // 打字機計時器 ID

function buildDialogLines(node) {
  if (node.lines && node.lines.length > 0) {
    return node.lines; // 直接使用自訂對話行
  }
  // 相容舊格式：把 node.text 包成單行
  return [{ speaker: "", text: node.text, img: node.img || null }];
}

function renderDialogLine() {
  const line = dialogLines[dialogIndex] || { speaker: "", text: "", img: null };
  const isLast = dialogIndex === dialogLines.length - 1;

  // 更新立繪
  const imgEl = document.getElementById("character-img");
  if (imgEl) {
    const resolvedImg = resolveImagePath(line.img);
    if (resolvedImg) {
      imgEl.src = resolvedImg;
      imgEl.style.display = "block";
      imgEl.style.height = "750px";
      imgEl.style.width = "auto";
      imgEl.style.maxHeight = "none";

      const boxEl = document.getElementById("character-box");
      if (boxEl) {
        boxEl.style.height = "750px";
        boxEl.style.left = "89%";
        boxEl.style.transform = "translateX(-50%)";
      }
    } else {
      imgEl.style.display = "none";
    }
  }

  // 更新說話者名字
  const speakerEl = document.getElementById("dialog-speaker");
  if (speakerEl) {
    speakerEl.innerText = line.speaker || "";
    speakerEl.style.display = line.speaker ? "block" : "none";
  }

  // 更新對話文字（打字機效果）
  const textEl = document.getElementById("story-text");
  if (textEl) typewriterEffect(textEl, line.text || "");

  // 更新按鈕區
  const optionsDiv = document.getElementById("options");
  if (!optionsDiv) return;
  optionsDiv.innerHTML = "";

  if (!isLast) {
    const nextBtn = document.createElement("button");
    nextBtn.innerText = "繼續";
    nextBtn.className = "btn-next";
    nextBtn.onclick = () => {
      cancelTypewriter();
      dialogIndex++;
      renderDialogLine();
    };
    optionsDiv.appendChild(nextBtn);
    return;
  }

  const node = GAME_DATA.stories[currentRole][currentNodeKey];
  if (!node) return;

  // 只有一個空白選項時，自動跳下一節點
  if (
    node.options &&
    node.options.length === 1 &&
    node.options[0].text === ""
  ) {
    const opt = node.options[0];
    applyOptionEffects(opt);
    setTimeout(() => renderStory(currentRole, opt.next), 800);
    return;
  }

  // 多結局節點（有 title，沒有 options）—— 注入重玩按鈕
  if (node._injectedRestart) {
    const btn = document.createElement("button");
    btn.innerText = "重玩遊戲";
    btn.onclick = () => renderStory(currentRole, "restart");
    optionsDiv.appendChild(btn);
    return;
  }

  if (node.options && node.options.length > 0) {
    node.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.innerText = opt.text;
      btn.onclick = () => {
        applyOptionEffects(opt);
        renderStory(currentRole, opt.next);
      };
      optionsDiv.appendChild(btn);
    });
  }
}

function cancelTypewriter() {
  if (_typewriterTimer !== null) {
    clearTimeout(_typewriterTimer);
    _typewriterTimer = null;
  }
}

function typewriterEffect(el, text) {
  cancelTypewriter();
  el.innerText = "";
  let i = 0;
  const speed = 28; // 毫秒/字
  function tick() {
    if (i < text.length) {
      el.innerText += text[i];
      i++;
      _typewriterTimer = setTimeout(tick, speed);
    } else {
      _typewriterTimer = null;
    }
  }
  tick();
}

function renderInlineEnding(role, ending) {
  const story = GAME_DATA.stories[role];
  story.__inline_ending__ = {
    lines: [
      {
        speaker: "✦ 結局",
        text: `【${ending.title || "結局"}】`,
        img: ending.img || null,
      },
      { speaker: "旁白", text: ending.text || "", img: ending.img || null },
    ],
    options: [{ text: "重玩遊戲", next: "restart" }],
  };
  renderStory(role, "__inline_ending__");
}

function renderStory(role, nodeKey) {
  if (nodeKey === "restart") {
    initGame();
    return;
  }

  if (nodeKey === "start") {
    favorability = 0;
    roleScores = createEmptyRoleScores();
    cupChoice = "";
    storyFlags = {};
  }

  const story = GAME_DATA.stories[role];
  const node = story && story[nodeKey];
  if (!node) {
    console.error("找不到劇情節點: role=" + role + ", nodeKey=" + nodeKey);
    return;
  }

  // ── 結局判定 ─────────────────────────────────────────────────
  if (node.isEnding) {
    let nextNode;

    if (typeof node.decide === "function") {
      // 黛玉／晴雯／妙玉：自訂 decide()，回傳同角色底下的節點 key
      nextNode = node.decide();
      setTimeout(function () {
        renderStory(role, nextNode);
      }, 400);
      return;
    }

    if (node.ending1) {
      // 多結局格式（襲人／寶釵／湘雲）：ending1~4 是包在 final_check 裡的物件，不能當作節點 key 跳轉
      let selectedEnding = node.ending4;
      for (const key of ["ending1", "ending2", "ending3", "ending4"]) {
        const e = node[key];
        if (!e || !e.condition) continue;
        try {
          const names = Object.keys(roleScores);
          const values = Object.values(roleScores);
          const passed = Function(
            ...names,
            `return (${e.condition});`,
          )(...values);
          if (passed) {
            selectedEnding = e;
            break;
          }
        } catch (err) {
          console.warn("結局條件判定失敗：", key, e.condition, err);
        }
      }
      setTimeout(function () {
        renderInlineEnding(role, selectedEnding);
      }, 400);
      return;
    }

    // 保底：若之後有簡單模式 ending，可用好感度分流
    nextNode = favorability >= 2 ? "happy_end" : "sad_end";
    setTimeout(function () {
      renderStory(role, nextNode);
    }, 400);
    return;
  }

  // ── 多結局子節點（ending1~4，有 title 沒有 options）──────────
  if (node.title && !node.options) {
    if (node.bg) changeBackground(node.bg);
    currentRole = role;
    currentNodeKey = nodeKey;
    dialogLines = [
      { speaker: "✦ 結局", text: node.title, img: node.img || null },
      { speaker: "旁白", text: node.text, img: node.img || null },
    ];
    dialogIndex = 0;
    node._injectedRestart = true;
    renderDialogLine();
    return;
  }

  // ── 一般節點 ─────────────────────────────────────────────────
  if (node.bg) changeBackground(node.bg);
  currentRole = role;
  currentNodeKey = nodeKey;
  dialogLines = buildDialogLines(node);
  dialogIndex = 0;
  renderDialogLine();
}

// 首次點擊事件監聽
document.addEventListener(
  "click",
  () => {
    const audio = document.getElementById("bg-music");
    if (audio && audio.paused && currentStep === 0) {
      audio.play().catch((e) => console.log(e));
    }
  },
  { once: true },
);

// 網頁載入完成後啟動遊戲
window.onload = () => {
  initGame();
};
