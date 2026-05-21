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
        // img: "daiyu_angry.png",
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
        // img: "daiyu_sad.png",
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
        // img: "daiyu_happy.png",
        options: [{ text: "重玩遊戲", next: "restart" }],
      },
      sad_end: {
        text: "結局：【終身誤】你的猶豫讓她傷透了心，最終她焚稿斷癡情，魂歸離恨天。遊戲結束。",
        img: "daiyu_dead.png",
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
        // img: "xiren_angry.png",
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
        // img: "xiren_sad.png",
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
        // img: "xiren_happy.png",
        options: [{ text: "重玩遊戲", next: "restart" }],
      },
      sad_end: {
        text: "結局：【終身誤】你的猶豫讓她傷透了心，最終她焚稿斷癡情，魂歸離恨天。遊戲結束。",
        // img: "xiren_dead.png",
        options: [{ text: "重玩遊戲", next: "restart" }],
      },
    },
    //---寶釵---
    baocha: {
      name: "薛寶釵",
      music: "baocha_theme.mp3",
      dialogBoxBg: "dialog_baocha.png",
      start: {
        text: "寶釵解開衣服的排扣，從大紅襖兒上取下瓔珞，你看著那璀璨的金鎖。",
        bg: "xiaoxiang.png",
        // img: "baocha_normal.png",
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
        // img: "baocha_daiyu.png",
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
        // img: "baocha_arm.png",
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
        img: "baocha_cry.png",
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
            text: "醒後見她神色黯然，你假裝夢話為胡言亂語，溫柔地安撫她。",
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
        bg: "wedding_night.jpg",
        // img: "baocha_bride.png",
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
      ending_1: {
        text: "結局：【雪裡冷梅】\n熬過冰雪，柴米油鹽皆是真情。你背負期望進京趕考，她在家中深閨靜待，在平凡歲月中守候到了一室暖意與歸人。",
        // img: "baocha_end1.png",
        options: [{ text: "重玩", next: "restart" }],
      },
      ending_2: {
        text: "結局：【舉案齊眉】\n你們相敬如賓，並肩重振家業。此生雖無熾熱的愛情，卻有著如磐石般的相濡以沫。",
        // img: "baocha_end2.png",
        options: [{ text: "重玩", next: "restart" }],
      },
      ending_3: {
        text: "結局：【金簪雪埋】\n你深愛她的靈魂，卻不願受禮教束縛。大雪落盡之時你轉身離去，留下她獨守回憶的荒涼，金簪終被雪埋。",
        // img: "baocha_end3.png",
        options: [{ text: "重玩", next: "restart" }],
      },
      ending_4: {
        text: "結局：【荒塚孤飛】\n你對她無情，這場錯位的婚姻成了牢籠。你決定流浪天涯，兩人一生都被這座名為「金玉」的牢籠遍體鱗傷。",
        // img: "baocha_end4.png",
        options: [{ text: "重玩", next: "restart" }],
      },
    },
    //---湘雲---
    xiangyun: {
      name: "湘雲",
      music: "xiangyun.mp3",
      start: {
        text: "【湘雲】湘雲正低頭整理衣物，見你來了，冷笑一聲：『你這會子來做什麼？不去找你的寶姐姐？』",
        bg: "xiaoxiang.png",
        // img: "xiangyun_angry.png",
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
        text: "湘雲臉色稍緩，幽幽地說：『你說心裡記掛著我，那這塊舊手帕你可還留著？』",
        // img: "xiangyun_sad.png",
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
        // img: "xiangyun_happy.png",
        options: [{ text: "重玩遊戲", next: "restart" }],
      },
      sad_end: {
        text: "結局：【終身誤】你的猶豫讓她傷透了心，最終她焚稿斷癡情，魂歸離恨天。遊戲結束。",
        // img: "xiangyun_dead.png",
        options: [{ text: "重玩遊戲", next: "restart" }],
      },
    },
    //---晴雯---
    qingwen: {
      name: "晴雯",
      music: "qingwen.mp3",
      start: {
        text: "【晴雯】晴雯正低頭整理衣物，見你來了，冷笑一聲：『你這會子來做什麼？不去找你的寶姐姐？』",
        bg: "qingwen_bg.jpg",
        // img: "qingwen_angry.png",
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
        text: "晴雯臉色稍緩，幽幽地說：『你說心裡記掛著我，那這塊舊手帕你可還留著？』",
        // img: "qingwen_sad.png",
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
        // img: "qingwen_happy.png",
        options: [{ text: "重玩遊戲", next: "restart" }],
      },
      sad_end: {
        text: "結局：【終身誤】你的猶豫讓她傷透了心，最終她焚稿斷癡情，魂歸離恨天。遊戲結束。",
        // img: "qingwen_dead.png",
        options: [{ text: "重玩遊戲", next: "restart" }],
      },
    },
    //---妙玉---
    miaoyu: {
      name: "妙玉",
      music: "miaoyu.mp3",
      // --- 事件一：品茶 ---
      start: {
        text: "【品茶】你與黛玉、寶釵在櫳翠庵品茶。妙玉竟拿出她平日私用的「綠玉斗」斟茶給你...",
        bg: "longcui_interior.jpg",
        // img: "miaoyu_tea.png",
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
            cupChoice: "A",
          },
          {
            text: "對妙玉說：『那杯子留著很髒，不如給我保管。』",
            next: "qimei_choice",
            cupChoice: "B",
          },
        ],
      },
      // --- 事件二：乞梅 ---
      qimei_choice: {
        text: "【乞梅】冬日紅梅傲雪，你想向妙玉乞紅梅。你要如何進入？",
        bg: "longcui_snow.jpg",
        options: [
          { text: "叫人向妙玉傳達來意", next: "qimei_ask", effect: 1 },
          { text: "直接走進櫳翠庵", next: "qimei_direct", effect: 0 },
        ],
      },
      qimei_ask: {
        text: "小尼傳話問為何要梅？",
        options: [
          { text: "如實交代", next: "qimei_result_A", effect: 0 },
          { text: "說欣賞這番美景", next: "qimei_result_B", effect: 2 },
        ],
      },

      // --- 結局判定點 ---
      final_check: {
        isEnding: true,
        text: "（命運交織的時刻...）",
        options: [],
      },
      bad_end: {
        text: "結局：【入紅塵俗世】抄家後兩人斷了交集。",
        // img: "miaoyu_sad.png",
        options: [{ text: "重玩", next: "restart" }],
      },
      another_end: {
        text: "結局：【為救寶玉從順親王】妙玉用自由換了你的自由。",
        // img: "miaoyu_sacrifice.png",
        options: [{ text: "重玩", next: "restart" }],
      },
      true_end: {
        text: "結局：【與君訣別】你是她唯一的知己，可惜時代終無果。",
        // img: "miaoyu_true.png",
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
  let cupChoice = ""; // 妙玉專用旗標

  // 播放測驗音樂與背景
  changeMusic(GAME_DATA.quizConfig.music);
  changeBackground(GAME_DATA.quizConfig.bg);
  renderQuiz();
}

function changeMusic(fileName) {
  const audio = document.getElementById("bg-music");
  audio.src = `sound/${fileName}`;
  audio.play().catch((e) => console.log("等待使用者互動後播放"));
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
  // 1. 先找出最高分是多少
  const maxScore = Math.max(scores.A, scores.B, scores.C, scores.D);

  // 2. 按照 A > D > B > C 的優先順序判定贏家
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

  // 3. 根據贏家類別與隱藏邏輯決定最終角色
  let finalRole = "";
  if (winner === "A") {
    finalRole = "daiyu";
  } else if (winner === "D") {
    finalRole = "miaoyu";
  } else if (winner === "B") {
    // 第六題(索引5) 沒選B -> 寶釵；選B -> 襲人
    finalRole = userChoices[5] === "B" ? "xiren" : "baocha";
  } else if (winner === "C") {
    // 第二題(索引1) 選C -> 湘雲；未選C -> 晴雯
    finalRole = userChoices[1] === "C" ? "xiangyun" : "qingwen";
  }

  // 4. 執行切換音樂與進入劇情
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

  // 進入角色劇情時，如果是第一步，重置好感度
  if (nodeKey === "start") favorability = 0;

  const node = GAME_DATA.stories[role][nodeKey];

  // --- 結局判定邏輯 ---
  if (node.isEnding) {
    // 如果好感度大於等於 2 分，走好結局，否則走壞結局
    const nextNode = favorability >= 2 ? "happy_end" : "sad_end";
    setTimeout(() => renderStory(role, nextNode), 1000); // 延遲一秒顯示結局，增加氣氛
    return;
  }

  // 更新畫面 (背景、立繪、文字)
  if (node.bg) changeBackground(node.bg);
  const imgEl = document.getElementById("character-img");
  if (node.img) {
    imgEl.src = `images/${node.img}`;
    imgEl.style.display = "block";
  }

  document.getElementById("story-text").innerText = node.text;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  // 建立選項按鈕
  node.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.innerText = opt.text;
    btn.onclick = () => {
      // 如果這個選項有設定效果，就加減好感度
      if (typeof opt.effect === "number") {
        favorability += opt.effect;
      }
      renderStory(role, opt.next);
    };
    optionsDiv.appendChild(btn);
  });
}

// 啟動點擊監聽，第一次點擊時播放背景音樂
document.addEventListener(
  "click",
  () => {
    const audio = document.getElementById("bg-music");
    if (audio.paused && currentStep === 0) audio.play();
  },
  { once: true },
);

initGame();
