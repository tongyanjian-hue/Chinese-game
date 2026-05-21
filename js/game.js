// --- 劇情 ---

const GAME_DATA = {
  quizConfig: {
    music: "music.mp3",
    bg: "xiaoxiang.png",
  },
  quiz: [
    {
      question: "春日午後，你最想做什麼？",
      options: [
        { text: "在花園裡讀詩，偶爾對花落淚", category: "A" },
        { text: "整理書房，研讀詩書典籍", category: "B" },
        { text: "拉著朋友在湖邊打水漂、說笑話", category: "C" },
        { text: "獨自去寺廟靜坐，遠離塵囂", category: "D" },
      ],
    },
    {
      question: "有人誤會了你，你會怎麼做？",
      options: [
        { text: "心裡非常難受，忍不住哭泣，卻說不出口", category: "A" },
        { text: "溫和地解釋清楚，不讓對方難堪", category: "B" },
        { text: "直接開口問清楚，笑著化解", category: "C" },
        { text: "沉默不語，覺得解釋也沒有意義", category: "D" },
      ],
    },
    {
      question: "你覺得感情最重要的是什麼？",
      options: [
        { text: "心靈契合，能讀懂彼此的感受", category: "A" },
        { text: "彼此尊重，共同守護一個家", category: "B" },
        { text: "輕鬆自在，在一起時總是笑聲不斷", category: "C" },
        { text: "純粹乾淨，不染俗世", category: "D" },
      ],
    },
    {
      question: "你加入了學校的詩社，你的角色是？",
      options: [
        { text: "寫出最動人的詩，卻總帶著憂愁", category: "A" },
        { text: "默默把所有細節都安排好", category: "B" },
        { text: "第一個舉手，笑說「我來出題！」", category: "C" },
        { text: "坐在角落旁觀，偶爾說一句讓人驚艷的話", category: "D" },
      ],
    },
    {
      question: "你的房間最可能是什麼樣子？",
      options: [
        { text: "到處是書和花瓣，窗邊有一盆將謝的菊", category: "A" },
        { text: "整齊乾淨，有一套精緻的茶具", category: "B" },
        { text: "衣服隨意放，牆上貼著塗鴉和笑話", category: "C" },
        { text: "素淨清冷，只有一爐香和幾本佛經", category: "D" },
      ],
    },
    {
      question: "面對喜歡的人，你通常是？",
      options: [
        { text: "在意他的每個眼神，多想一句話也睡不著", category: "A" },
        { text: "照顧他的生活，用行動代替言語", category: "B" },
        { text: "直接說出來，反正說錯了還可以笑著圓回去", category: "C" },
        { text: "從不主動，緣分到了自然會來", category: "D" },
      ],
    },
  ],
  stories: {
    //---林黛玉---
    daiyu: {
      name: "林黛玉",
      music: "music.mp3",
      start: {
        text: "【瀟湘館】黛玉正低頭葬花，見你來了，冷笑一聲：『你這會子來做什麼？不去找你的寶姐姐？』",
        bg: "xiaoxiang.png",
        img: "test.png",
        options: [
          {
            text: "賠笑解釋：『心裡只記掛著妹妹，才剛從老太太那過來。』",
            next: "scene2",
            effect: 2,
          }, // 大加分
          {
            text: "有些惱了：『你總是這般多心，倒叫人沒趣。』",
            next: "scene2",
            effect: -1,
          }, // 扣分
        ],
      },
      scene2: {
        text: "黛玉臉色稍緩，幽幽地說：『你說心裡記掛著我，那這塊舊手帕你可還留著？』",
        img: "test.png",
        options: [
          { text: "立刻從懷中掏出，視若珍寶", next: "final_check", effect: 2 },
          {
            text: "一時語塞，支支吾吾地找藉口",
            next: "final_check",
            effect: -2,
          },
        ],
      },
      // 結局判定點
      final_check: {
        isEnding: true,
        text: "（正在結算好感度...）",
        options: [], // 這裡不需要選項，程式會自動跳轉
      },
      happy_end: {
        text: "結局：【木石前盟】你用真心化解了她的疑慮，兩人在大觀園中許下終身。遊戲結束。",
        img: "test.png",
        options: [{ text: "重玩遊戲", next: "restart" }],
      },
      sad_end: {
        text: "結局：【終身誤】你的猶豫讓她傷透了心，最終她焚稿斷癡情，魂歸離恨天。遊戲結束。",
        img: "test.png",
        options: [{ text: "重玩遊戲", next: "restart" }],
      },
    },
    //---襲人---
    xiren: {
      name: "襲人",
      music: "music.mp3",
      start: {
        text: "【襲人】襲人正低頭整理衣物，見你來了，冷笑一聲：『你這會子來做什麼？不去找你的寶姐姐？』",
        bg: "xiaoxiang.png",
        img: "test.png",
        options: [
          {
            text: "賠笑解釋：『心裡只記掛著妹妹，才剛從老太太那過來。』",
            next: "scene2",
            effect: 2,
          }, // 大加分
          {
            text: "有些惱了：『你總是這般多心，倒叫人沒趣。』",
            next: "scene2",
            effect: -1,
          }, // 扣分
        ],
      },
      scene2: {
        text: "襲人臉色稍緩，幽幽地說：『你說心裡記掛著我，那這塊舊手帕你可還留著？』",
        img: "test.png",
        options: [
          { text: "立刻從懷中掏出，視若珍寶", next: "final_check", effect: 2 },
          {
            text: "一時語塞，支支吾吾地找藉口",
            next: "final_check",
            effect: -2,
          },
        ],
      },
      // 結局判定點
      final_check: {
        isEnding: true,
        text: "（正在結算好感度...）",
        options: [], // 這裡不需要選項，程式會自動跳轉
      },
      happy_end: {
        text: "結局：【木石前盟】你用真心化解了她的疑慮，兩人在大觀園中許下終身。遊戲結束。",
        img: "test.png",
        options: [{ text: "重玩遊戲", next: "restart" }],
      },
      sad_end: {
        text: "結局：【終身誤】你的猶豫讓她傷透了心，最終她焚稿斷癡情，魂歸離恨天。遊戲結束。",
        img: "test.png",
        options: [{ text: "重玩遊戲", next: "restart" }],
      },
    },
    //---寶釵---
    baocha: {
      name: "薛寶釵",
      music: "music.mp3",
      dialogBoxBg: "baocha_dialog.png",
      start: {
        text: "寶釵解開衣服的排扣，從大紅襖兒上取下瓔珞，你看著那璀璨的金鎖。",
        bg: "xiaoxiang.png",
        img: "test.png",
        options: [
          {
            text: "姐姐這鎖上的字，倒與我的玉是一對兒。",
            next: "scene2",
            effect: { jinYu: 2 },
          },
          {
            text: "什麼金鎖與玉，我只聞到姐姐身上的冷香味，真好聞。",
            next: "scene2",
            effect: { lengXiang: 2 },
          },
        ],
      },
      scene2: {
        text: "你忽然聞到一陣幽香，這並非衣服上的熏香，竟像是從骨子裡散出來的。此時，黛玉走進房，見你們挨得近，冷笑道：「我的奇香有什麼好的，不如寶姐姐那冷香配著你那暖香。」",
        img: "test.png",
        options: [
          {
            text: "你不理會黛玉的調侃，好奇地問寶姐姐：「這香氣實在奇特，姐姐是吃了什麼藥？教我也長長見識。」",
            next: "scene3",
            effect: { lengXiang: 2 },
          },
          {
            text: "你尷尬地推了一步，對黛玉賠笑，又對寶姐姐說道：「姐姐服這藥，是為了壓制體內的熱毒，黛玉妹妹是心疼你，你別見怪。」",
            next: "scene3",
            effect: { jinYu: 1, lengXiang: 1 },
          },
        ],
      },
      scene3: {
        text: "寶釵向你解釋《寄生草》的楚辭，念到：「赤條條，來去無牽掛。」聽完這楚辭，你說道",
        options: [
          {
            text: "姐姐才華洋溢，飽讀詩書，實在是無書不知啊。",
            next: "scene4",
            effect: { lengXiang: 2 },
          },
          {
            text: "姐姐既看透了這詞的核心，又為何要我讀經世之書？考取功名？",
            next: "scene4",
            effect: { jinYu: -2 },
          },
        ],
      },
      scene4: {
        text: "寶釵褪下左腕上的香串子，你在一旁看著那雪白的肐膊，空氣彷彿停止在一瞬間。",
        img: "test.png",
        options: [
          {
            text: "目不轉睛地盯著寶姐姐，悄悄說道：「若是長在林姑娘身上，說不定還能摸一摸。」",
            next: "scene5",
            effect: { lengXiang: 1 },
          },
          {
            text: "移開視線，臉不自覺地泛紅，忽然想起金鎖一事。",
            next: "scene5",
            effect: { lengXiang: 1, jinYu: 1 },
          },
        ],
      },
      scene5: {
        text: "寶釵語帶嚴肅地勸你與做官之人結為朋友，你接著說道：",
        options: [
          {
            text: "既然是姐姐說的，我以後多留心便是了。",
            next: "scene6",
            effect: { jinYu: 2 },
          },
          {
            text: "姐姐請別的屋裡坐坐罷。說完便提起腳來就走了。",
            next: "scene6",
            effect: { jinYu: -2, lengXiang: -1 },
          },
        ],
      },
      scene6: {
        text: "你挨老爺一頓打後，寶釵托著一丸藥，眼匡微紅並說道：「別說老太太心疼，就是我們看著，心裏也…。」",
        img: "test.png",
        options: [
          {
            text: "忍著痛，感動地說道：「今日姐姐為我落淚，我這頓挨打也無足歎惜了。」",
            next: "scene7",
            effect: { lengXiang: 3 },
          },
          {
            text: "感嘆地說道：「是我害姐姐擔心了，以後我會謹守規範的。」",
            next: "scene7",
            effect: { jinYu: 2 },
          },
        ],
      },
      scene7: {
        text: "寶釵在你的床旁邊繡鴛鴦，忽然間，你在夢中喊罵：「什麼『金玉姻緣！』我偏說『木石前盟！』",
        options: [
          {
            text: "醒後見她神色黯然，你假裝夢話為胡言亂語，溫柔地安覆她。",
            next: "scene8",
            effect: { lengXiang: 2 },
          },
          {
            text: "默然對視，向寶姐姐坦承：「我的心意，想必姐姐你也聽到了。」",
            next: "scene8",
            effect: { jinYu: -3 },
          },
        ],
      },
      scene8: {
        text: "大婚當天，你揭開蓋頭，紅燭搖曳，你發現新娘是寶釵。",
        bg: "xiaoyang.png",
        img: "test.png",
        options: [
          {
            text: "既然金玉姻緣的命運是如此，往後餘生，我便真心相待。",
            next: "final_check",
            effect: { jinYu: 3, lengXiang: 1 },
          },
          {
            text: "絕望地看着她的雙眼，結巴地說道：「你為何要配合他們來騙我？」",
            next: "final_check",
            effect: { jinYu: -3, lengXiang: -1 },
          },
        ],
      },
      final_check: { isEnding: true, text: "（命運判定中...）" },
      happy_end: {
        // 配合通用的結局判定
        text: "結局：【雪裡冷梅】\n熬過冰雪，柴米油鹽皆是真情。你背負期望進京趕考，她在家中深閨靜待，在平凡歲歲中守候到了一室暖意與歸人。",
        img: "test.png",
        options: [{ text: "重玩", next: "restart" }],
      },
      sad_end: {
        // 配合通用的結局判定
        text: "結局：【金簪雪埋】\n你對她無情，這場錯位的婚姻成了牢籠。大雪落盡之時你轉身離去，留下她獨守回憶的荒涼，金簪終被雪埋。",
        img: "test.png",
        options: [{ text: "重玩", next: "restart" }],
      },
    },
    //---湘雲---
    xiangyun: {
      name: "湘雲",
      music: "music.mp3",
      start: {
        text: "【湘雲】湘雲笑嘻嘻地走過來：『二哥哥，你可想我了？聽說你天天往寶姐姐那兒去？』",
        bg: "xiaoxiang.png",
        img: "test.png",
        options: [
          {
            text: "大笑回答：『哪裡的話，偏是雲妹妹最會編排我。』",
            next: "scene2",
            effect: 2,
          },
          {
            text: "一本正經：『別胡說，給人聽見不好。』",
            next: "scene2",
            effect: -1,
          },
        ],
      },
      scene2: {
        text: "湘雲拿出她的金麒麟，在你眼前晃了晃：『你可還記得這個？』",
        img: "test.png",
        options: [
          {
            text: "高興地說：『自然記得，我這也有一隻呢。』",
            next: "final_check",
            effect: 2,
          },
          {
            text: "冷淡地說：『小孩子玩意，早忘了。』",
            next: "final_check",
            effect: -2,
          },
        ],
      },
      final_check: {
        isEnding: true,
        text: "（正在結算好感度...）",
        options: [],
      },
      happy_end: {
        text: "結局：【因麒麟伏白首雙星】大觀園散盡，你與湘雲在落魄中重逢，相濡以沫，白頭偕老。遊戲結束。",
        img: "test.png",
        options: [{ text: "重玩遊戲", next: "restart" }],
      },
      sad_end: {
        text: "結局：【湘江水逝】雲散高唐，水涸湘江。湘雲最終遠嫁他鄉，與你天各一方。遊戲結束。",
        img: "test.png",
        options: [{ text: "重玩遊戲", next: "restart" }],
      },
    },
    //---晴雯---
    qingwen: {
      name: "晴雯",
      music: "music.mp3",
      start: {
        text: "【怡紅院】晴雯正坐在榻上嗑瓜子，見你進來，冷哼一聲：『二爺可回來了，今兒又是哪位姑娘留你喝茶了？』",
        bg: "xiaoxiang.png",
        img: "test.png",
        options: [
          {
            text: "走過去搶她的瓜子笑著哄她：『好妹妹，只疼你一個還不夠？』",
            next: "scene2",
            effect: 2,
          },
          {
            text: "沉下臉：『做丫頭的，倒管起主子來了。』",
            next: "scene2",
            effect: -1,
          },
        ],
      },
      scene2: {
        text: "晴雯一不小心把扇子跌在地上跌折了骨子，冷笑道：『嫌我笨，就把我打發了去！』",
        img: "test.png",
        options: [
          {
            text: "笑說：『一把握子值什麼，你喜歡撕，拿一包來五撕著玩。』並遞扇子給她",
            next: "final_check",
            effect: 2,
          },
          {
            text: "大發雷霆：『當真目中無人，叫王夫人來打發你！』",
            next: "final_check",
            effect: -2,
          },
        ],
      },
      final_check: {
        isEnding: true,
        text: "（正在結算好感度...）",
        options: [],
      },
      happy_end: {
        text: "結局：【芙蓉女兒誄】你用包容呵護了她的高傲，她成為了你心中最美的芙蓉仙子。遊戲結束。",
        img: "test.png",
        options: [{ text: "重玩遊戲", next: "restart" }],
      },
      sad_end: {
        text: "結局：【霽月難逢】晴雯病重被逐，最終抱恨夭亡。你只能看著枯萎的芙蓉花痛哭。遊戲結束。",
        img: "test.png",
        options: [{ text: "重玩遊戲", next: "restart" }],
      },
    },
    //---妙玉---
    miaoyu: {
      name: "妙玉",
      music: "music.mp3",
      start: {
        text: "【品茶】你與黛玉、寶釵在櫳翠庵品茶。妙玉竟拿出她平日私用的「綠玉斗」斟茶給你...",
        bg: "xiaoxiang.png",
        img: "test.png",
        options: [
          {
            text: "笑道：『這真真是一件俗器。』",
            next: "tea_response",
            effect: 3,
          },
          {
            text: "木然接過：『看不出有什麼特別。』",
            next: "tea_response",
            effect: -3,
          },
        ],
      },
      tea_response: {
        text: "妙玉冷笑：『這若是俗器，賈府未必找得出第二件。』喝完茶後，你想到劉姥姥用過的茶杯被棄在一旁...",
        options: [
          {
            text: "建議妙玉：『給劉姥姥拿去賣錢度日吧。』",
            next: "qimei_choice",
            effect: 2,
          },
          {
            text: "對妙玉說：『那杯子留著很髒，不如給我保管。』",
            next: "qimei_choice",
            effect: -1,
          },
        ],
      },
      qimei_choice: {
        text: "【乞梅】冬日紅梅傲雪，你想向妙玉乞紅梅。你要如何進入？",
        bg: "xiaoxiang.png",
        options: [
          { text: "叫人向妙玉傳達來意", next: "qimei_ask", effect: 1 },
          { text: "直接走進櫳翠庵", next: "final_check", effect: 0 }, // 簡化流程至終點
        ],
      },
      qimei_ask: {
        text: "小尼傳話問為何要梅？",
        options: [
          { text: "如實交代", next: "final_check", effect: 0 },
          { text: "說欣賞這番美景", next: "final_check", effect: 2 },
        ],
      },
      final_check: {
        isEnding: true,
        text: "（命運交織的時刻...）",
        options: [],
      },
      happy_end: {
        text: "結局：【與君訣別】你是她紅塵中唯一的知己，雖然為世俗不容，但心靈相通。遊戲結束。",
        img: "test.png",
        options: [{ text: "重玩", next: "restart" }],
      },
      sad_end: {
        text: "結局：【入紅塵俗世】抄家後兩人斷了交集，妙玉終究淪落風塵，不知所終。遊戲結束。",
        img: "test.png",
        options: [{ text: "重玩", next: "restart" }],
      },
    },
  },
};

// --- 遊戲邏輯 ---

let currentStep = 0;
let scores = { A: 0, B: 0, C: 0, D: 0 };
let userChoices = [];
let favorability = 0; // 新增好感度變數

function initGame() {
  currentStep = 0;
  scores = { A: 0, B: 0, C: 0, D: 0 };
  userChoices = [];
  favorability = 0; // 重置好感度

  // 【核心修正】初始化只處理畫面與背景，不強制 play() 音樂以免被瀏覽器擋掉
  changeBackground(GAME_DATA.quizConfig.bg);

  // 預先設定音源，但不呼叫 play()
  const audio = document.getElementById("bg-music");
  if (audio) {
    audio.src = `sound/${GAME_DATA.quizConfig.music}`;
  }

  renderQuiz();
}

function changeMusic(fileName) {
  const audio = document.getElementById("bg-music");
  if (!audio) return;
  audio.src = `sound/${fileName}`;
  // 加上 catch 防止非使用者觸發時報錯而中斷 JS
  audio
    .play()
    .catch((e) => console.log("音樂播放被瀏覽器阻擋，等待玩家點擊：", e));
}

function changeBackground(fileName) {
  document.body.style.backgroundImage = `url('images/${fileName}')`;
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
      // 在玩家點擊任何按鈕時，嘗試播放音樂（這時已經有了使用者互動，瀏覽器會允許）
      const audio = document.getElementById("bg-music");
      if (audio && audio.paused) {
        audio.play().catch((e) => console.log(e));
      }

      scores[opt.category]++;
      userChoices[currentStep] = opt.category;
      currentStep++;
      if (currentStep < GAME_DATA.quiz.length) renderQuiz();
      else determineRole();
    };
    optionsDiv.appendChild(btn);
  });
}

function determineRole() {
  const maxScore = Math.max(scores.A, scores.B, scores.C, scores.D);

  let winner = "";
  if (scores.A === maxScore) {
    winner = "A";
  } else if (scores.D === maxScore) {
    winner = "D";
  } else if (scores.B === maxScore) {
    winner = "B";
  } else {
    winner = "C";
  }

  let finalRole = "";
  if (winner === "A") {
    finalRole = "daiyu";
  } else if (winner === "D") {
    finalRole = "miaoyu";
  } else if (winner === "B") {
    finalRole = userChoices[5] === "B" ? "xiren" : "baocha";
  } else if (winner === "C") {
    finalRole = userChoices[1] === "C" ? "xiangyun" : "qingwen";
  }

  if (!GAME_DATA.stories[finalRole]) {
    finalRole = "daiyu";
  }
  changeMusic(GAME_DATA.stories[finalRole].music);
  renderStory(finalRole, "start");
}

function renderStory(role, nodeKey) {
  if (nodeKey === "restart") {
    initGame();
    return;
  }

  if (nodeKey === "start") favorability = 0;

  const node = GAME_DATA.stories[role][nodeKey];

  // --- 結局判定邏輯 ---
  if (node.isEnding) {
    // 統一好感度判定：大於等於 2 分走 happy_end，否則走 sad_end
    const nextNode = favorability >= 2 ? "happy_end" : "sad_end";
    setTimeout(() => renderStory(role, nextNode), 1000);
    return;
  }

  // 更新畫面
  if (node.bg) changeBackground(node.bg);
  const imgEl = document.getElementById("character-img");
  if (node.img) {
    imgEl.src = `images/${node.img}`;
    imgEl.style.display = "block";
  } else {
    imgEl.style.display = "none";
  }

  document.getElementById("story-text").innerText = node.text;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  if (node.options && node.options.length > 0) {
    node.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.innerText = opt.text;
      btn.onclick = () => {
        // 處理好感度累加 (支援數字或薛寶釵物件計分制的相容)
        if (typeof opt.effect === "number") {
          favorability += opt.effect;
        } else if (opt.effect && typeof opt.effect === "object") {
          // 薛寶釵專用的特殊屬性（轉為通用好感度）
          let val = (opt.effect.jinYu || 0) + (opt.effect.lengXiang || 0);
          favorability += val;
        }
        renderStory(role, opt.next);
      };
      optionsDiv.appendChild(btn);
    });
  }
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
