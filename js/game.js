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
      start: {
        text: "【瀟湘館】黛玉正低頭葬花，見你來了，冷笑一聲：『你這會子來做什麼？不去找你的寶姐姐？』",
        lines: [
          {
            speaker: "旁白",
            text: "【瀟湘館】黛玉正低頭葬花，見你來了，冷笑一聲：『你這會子來做什麼？不去找你的寶姐姐？』",
            img: "daiyu.png",
          },
        ],
        bg: "images/xiaoxiang.png",
        img: "daiyu.png",
        options: [
          {
            text: "賠笑解釋：『心裡只記掛著妹妹，才剛從老太太那過來。』",
            next: "scene2",
            effect: 2,
          },
          {
            text: "有些惱了：『你總是這般多心，倒叫人沒趣。』",
            next: "scene2",
            effect: -1,
          },
        ],
      },
      scene2: {
        text: "黛玉臉色稍緩，幽幽地說：『你說心裡記掛著我，那這塊舊手帕你可還留著？』",
        lines: [
          {
            speaker: "旁白",
            text: "黛玉臉色稍緩，幽幽地說：『你說心裡記掛著我，那這塊舊手帕你可還留著？』",
            img: "daiyu.png",
          },
        ],
        img: "daiyu.png",
        options: [
          { text: "立刻從懷中掏出，視若珍寶", next: "final_check", effect: 2 },
          {
            text: "一時語塞，支支吾吾地找藉口",
            next: "final_check",
            effect: -2,
          },
        ],
      },
      final_check: { isEnding: true, text: "（正在結算好感度...）" },
      happy_end: {
        text: "結局：【木石前盟】你用真心化解了她的疑慮，兩人在大觀園中許下終身。遊戲結束。",
        lines: [
          {
            speaker: "旁白",
            text: "結局：【木石前盟】你用真心化解了她的疑慮，兩人在大觀園中許下終身。遊戲結束。",
            img: "happy_end.png",
          },
        ],
        img: "happy_end.png",
        options: [{ text: "重玩遊戲", next: "restart" }],
      },
      sad_end: {
        text: "結局：【終身誤】你的猶豫讓她傷透了心，最終她焚稿斷癡情，魂歸離恨天。遊戲結束。",
        lines: [
          {
            speaker: "旁白",
            text: "結局：【終身誤】你的猶豫讓她傷透了心，最終她焚稿斷癡情，魂歸離恨天。遊戲結束。",
            img: "sad_end.png",
          },
        ],
        img: "sad_end.png",
        options: [{ text: "重玩遊戲", next: "restart" }],
      },
    },
    //---襲人---
    xiren: {
      name: "襲人",
      music: "music.mp3",
      start: {
        text: "你纔合上眼，便恍惚的睡去。自太虛幻境醒來後，襲人起身替你解懷整衣，無意間發現你的秘密，遂與你同領警幻所訊雲雨之事。",
        bg: "images/yihongyuan.png",
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
        text: "某日，襲人向你提到：「如今我們家要來贖我，正是該叫去的，我去了，仍舊又有好的來，不是沒了我就使不得的。」，聽完她說的一席話，你心裏越發急了，淚痕滿面地說道：",
        bg: "images/yihongyuan.png",
        img: "xirencry.png",
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
        bg: "images/yihongyuan.png",
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
        bg: "images/yihongyuan.png",
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
        bg: "images/yihongyuan.png",
        img: "xirenworry.png",
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
        text: "一日，寶玉被老爺訓斥一番，被打得皮開肉綻，襲人含淚坐在寶玉床邊經心服侍，整夜不敢闔眼。當你醒後，看到襲人在身旁，你虛弱地說：",
        bg: "images/yihongyuan.png",
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
        bg: "images/yihongyuan.png",
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
        bg: "images/yihongyuan.png",
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
          title: "桃紅柳綠",
          condition: "infatuation >= 6 && advise >= 5",
          text: "你為她收起對禮教的叛逆，她為你交付一生深情。相守民間，你們做了一對踏實恩愛的平民夫妻，歲月安穩。",
        },
        ending2: {
          title: "綠葉成蔭",
          condition: "infatuation < 6 && advise >= 5",
          text: "你聽從了她的規勸，潛心苦讀重振家業。縱使少了年少輕狂的愛情，她亦成了你後半生最安穩的賢內助。",
        },
        ending3: {
          title: "桃花移根",
          condition: "infatuation >= 6 && advise < 5",
          text: "你依賴她的溫柔，卻始終不入仕途。最終你割斷紅塵出家為僧，她只能哭乾眼淚，無奈地改嫁他人。",
        },
        ending4: {
          title: "落紅成陣",
          condition: "infatuation < 6 && advise < 5",
          text: "你嫌她規訓繁求，她怨你虛度光陰。漫長的爭吵與消磨耗盡了僅存的溫存，落紅成陣，兩人終至分道揚鑣。",
        },
      },
    },
    //---寶釵---
    baocha: {
      name: "薛寶釵",
      music: "music.mp3",
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
        bg: "images/hangwuyuan.png",
        img: "baochaserious.png",
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
        bg: "images/hangwuyuan.png",
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
        img: "baochacry.png",
        bg: "images/hangwuyuan.png",
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
        bg: "images/hangwuyuan.png",
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
          title: "雪裡冷梅",
          condition: "jinYu >= 5 && lengXiang >= 10",
          text: "熬過冰雪，柴米油鹽皆是真情。你背負期望進京趕考，她在家中深閨靜待，在平凡歲月中守候到了一室暖意與歸人。",
        },
        ending2: {
          title: "舉案齊眉",
          condition: "jinYu >= 5 && lengXiang < 10",
          text: "你們相敬如賓，並肩重振家業。此生雖無熾熱的愛情，卻有著如磐石般的相濡以沫。",
        },
        ending3: {
          title: "金簪雪埋",
          condition: "jinYu < 5 && lengXiang >= 10",
          text: "你深愛她的靈魂，卻不願受禮教束縛。大雪落盡之時你轉身離去，留下她獨守回憶的荒涼，金簪終被雪埋。",
        },
        ending4: {
          title: "落紅成陣",
          condition: "jinYu < 5 && lengXiang < 10",
          text: "你對她無情，這場錯位的婚姻成了牢籠。你決定流浪天涯，兩人一生都被這座名為「金玉」的牢籠遍體鱗傷。",
        },
      },
    },
    //---湘雲---
    xiangyun: {
      name: "史湘雲",
      music: "music.mp3",
      start: {
        text: "你在清虛觀打醮，看中了一隻金麒麟，心裏想著：「正好與湘雲那只湊成一對。」",
        bg: "images/xiaoxiang.png",
        img: "xiangyun.png",
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
        img: "xiangyun.png",
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
        img: "xiangyun.png",
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
        img: "xiangyun.png",
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
        bg: "images/xiaoxiang.png",
        img: "xiangyun.png",
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
          title: "白首雙星",
          condition: "kylin >= 5 && mingshi >= 6",
          text: "妳懂她的自由，她知妳的深情。你們決定拋卻紅塵桎梏，帶著金麒麟私奔天涯，縱使餘生清貧，也換得琴瑟和鳴的自由。",
        },
        ending2: {
          title: "豪傑闊大",
          condition: "kylin < 5 && mingshi >= 6",
          text: "點到為止的愛意，化作攜手江湖的俠骨。江畔痛快一盞濁酒，作別兒女情長，自此成為不離不棄的靈魂知己。",
        },
        ending3: {
          title: "雲散高唐",
          condition: "kylin >= 5 && mingshi < 6",
          text: "你的怯懦向命運低了頭，終是負了她的傲骨。風雨江天，她孤單地坐上婚船遠嫁，此後雲散高唐，遺憾終生。",
        },
        ending4: {
          title: "渡鶴驚寒",
          condition: "kylin < 5 && mingshi < 6",
          text: "你困於庸俗的世俗教條，推開了她最後的寄託。寒塘重逢，她對你的平庸徹底絕望，拂袖轉身，再不回頭。",
        },
      },
    },
    //---晴雯---
    qingwen: {
      name: "晴雯",
      music: "music.mp3",
      start: {
        text: "【怡紅院】晴雯正坐在榻上嗑瓜子，見你進來，冷哼一聲：『二爺可回來了，今兒又是哪位姑娘留你喝茶了？』",
        lines: [
          {
            speaker: "旁白",
            text: "【怡紅院】晴雯正坐在榻上嗑瓜子，見你進來，冷哼一聲：『二爺可回來了，今兒又是哪位姑娘留你喝茶了？』",
            img: "test.png",
          },
        ],
        bg: "images/xiaoxiang.png",
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
        lines: [
          {
            speaker: "旁白",
            text: "晴雯一不小心把扇子跌在地上跌折了骨子，冷笑道：『嫌我笨，就把我打發了去！』",
            img: "test.png",
          },
        ],
        img: "test.png",
        options: [
          {
            text: "笑說：『妳喜歡撕，拿一包來撕著玩。』並遞扇子給她",
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
      final_check: { isEnding: true, text: "（正在結算好感度...）" },
      happy_end: {
        text: "結局：【芙蓉女兒誄】你用包容呵護了她的高傲，她成為了你心中最美的芙蓉仙子。遊戲結束。",
        lines: [
          {
            speaker: "旁白",
            text: "結局：【芙蓉女兒誄】你用包容呵護了她的高傲，她成為了你心中最美的芙蓉仙子。遊戲結束。",
            img: "test.png",
          },
        ],
        img: "test.png",
        options: [{ text: "重玩遊戲", next: "restart" }],
      },
      sad_end: {
        text: "結局：【霽月難逢】晴雯病重被逐，最終抱恨夭亡。你只能看著枯萎的芙蓉花痛哭。遊戲結束。",
        lines: [
          {
            speaker: "旁白",
            text: "結局：【霽月難逢】晴雯病重被逐，最終抱恨夭亡。你只能看著枯萎的芙蓉花痛哭。遊戲結束。",
            img: "test.png",
          },
        ],
        img: "test.png",
        options: [{ text: "重玩遊戲", next: "restart" }],
      },
    },
    //---妙玉---
    miaoyu: {
      name: "妙玉",
      music: "miaoyu_theme.mp3",
      dialogBoxBg: "dialog_miaoyu.png",
      // 事件一：品茶
      start: {
        text: "賈母等人帶了劉姥姥至櫳翠庵來，只見妙玉親自捧了小茶盤，裡面放一個成窯五彩小蓋鍾，捧與賈母。賈母吃了半盞，笑著遞與劉姥姥，眾人後笑了起來。那妙玉便把寶釵黛玉的衣襟一拉，二人隨他出去。寶玉便輕輕走進來，笑道：「你們吃己茶呢。」妙玉剛要去取杯，只見道婆收了上面茶盞來，忙命：「將那成窯的茶杯別收了，擱在外頭去罷。」寶玉會意，知為劉姥姥吃了，他嫌腌臢，不要了。又見妙玉另拿出兩隻杯奇珍古玩之杯與黛玉和寶釵，仍將前番自己常日吃茶的那隻綠玉斗來斟與寶玉。",
        lines: [
          {
            speaker: "旁白",
            text: "賈母等人帶了劉姥姥至櫳翠庵來，只見妙玉親自捧了小茶盤，裡面放一個成窯五彩小蓋鍾，捧與賈母。賈母吃了半盞，笑著遞與劉姥姥，眾人後笑了起來。那妙玉便把寶釵黛玉的衣襟一拉，二人隨他出去。寶玉便輕輕走進來，笑道：「你們吃己茶呢。」妙玉剛要去取杯，只見道婆收了上面茶盞來，忙命：「將那成窯的茶杯別收了，擱在外頭去罷。」寶玉會意，知為劉姥姥吃了，他嫌腌臢，不要了。又見妙玉另拿出兩隻杯奇珍古玩之杯與黛玉和寶釵，仍將前番自己常日吃茶的那隻綠玉斗來斟與寶玉。",
            img: "miaoyu_tea.png",
          },
        ],
        bg: "images/longcui_gate.jpg",
        options: [
          {
            text: "妙玉親自捧了小茶盤，將平日自己吃茶的那隻綠玉斗斟與你。",
            next: "tea_event_actual",
          },
        ],
      },
      tea_event_actual: {
        text: "【你笑道：「常言『世法平等』。他兩個就用那樣古玩奇珍，我就是個俗器了。」妙玉道：「這是俗器？不是我說狂話：只怕你家裡未必找的出這麼一個俗器來呢。」此時你說：",
        lines: [
          {
            speaker: "旁白",
            text: "【你笑道：「常言『世法平等』。他兩個就用那樣古玩奇珍，我就是個俗器了。」妙玉道：「這是俗器？不是我說狂話：只怕你家裡未必找的出這麼一個俗器來呢。」此時你說：",
            img: "miaoyu_tea.png",
          },
        ],
        bg: "images/longcui_interior.jpg",
        img: "miaoyu_tea.png",
        options: [
          {
            text: "俗語說，『隨鄉入鄉』，到了你這裡，自然把這金珠玉寶一概貶為俗器了。",
            next: "tea_choice_a",
            favor: 3,
          },
          {
            text: "我倒看不出這杯有何奇特之處。",
            next: "tea_choice_b",
            favor: -3,
          },
        ],
      },
      tea_choice_a: {
        text: "妙玉聽如此說，十分歡喜，遂又尋出一隻九曲十環出來，笑道：「就剩了這一個。你可吃的了這一海？」寶玉喜的忙道：「吃的了。」妙玉笑道：「你雖吃的了，也沒這些茶你糟蹋！豈不聞『一杯為品，二杯即是解渴的蠢物，三杯便是飲驢了？』你吃這一海，更成什麼？」",
        lines: [
          {
            speaker: "旁白",
            text: "妙玉聽如此說，十分歡喜，遂又尋出一隻九曲十環出來，笑道：「就剩了這一個。你可吃的了這一海？」寶玉喜的忙道：「吃的了。」妙玉笑道：「你雖吃的了，也沒這些茶你糟蹋！豈不聞『一杯為品，二杯即是解渴的蠢物，三杯便是飲驢了？』你吃這一海，更成什麼？」",
            img: null,
          },
        ],
        options: [
          {
            text: "喜道：『吃的了。』",
            next: "cup_event",
            effect: { favor: 2 },
          },
          {
            text: "猶豫道：『剩一海你可吃？』",
            next: "cup_event",
            effect: { favor: 0 },
          },
        ],
      },
      tea_choice_b: {
        text: "妙玉道：「剩一海你可吃？」寶玉喜的忙道：「吃的了。」妙玉：「不能給你吃，誰讓你道我的綠玉斗為俗器呢？」",
        lines: [
          {
            speaker: "旁白",
            text: "妙玉道：「剩一海你可吃？」寶玉喜的忙道：「吃的了。」妙玉：「不能給你吃，誰讓你道我的綠玉斗為俗器呢？」",
            img: null,
          },
        ],
        options: [
          {
            text: "賠笑道：『俗語說「隨鄉入鄉」，到了你這裡，自然把這金珠玉寶一概貶為俗器了。』",
            next: "cup_event",
            effect: { favor: 3 },
          },
          { text: "默然不語。", next: "cup_event", effect: { favor: 0 } },
        ],
      },
      cup_event: {
        text: "吃茶後你想到劉姥姥用過的茶杯丟了可惜，你對妙玉說：",
        lines: [
          {
            speaker: "旁白",
            text: "吃茶後你想到劉姥姥用過的茶杯丟了可惜，你對妙玉說：",
            img: null,
          },
        ],
        options: [
          {
            text: "『不如給了那貧婆子罷，他賣了也可以度日。』",
            next: "plum_event",
            cupChoice: "A",
          },
          {
            text: "『這杯子不如給我罷。』",
            next: "plum_event",
            cupChoice: "B",
          },
        ],
      },
      // 事件二：乞梅
      plum_event: {
        text: "【乞梅】冬日紅梅傲雪，你來到櫳翠庵門前，想向妙玉乞紅梅。",
        lines: [
          {
            speaker: "旁白",
            text: "【乞梅】冬日紅梅傲雪，你來到櫳翠庵門前，想向妙玉乞紅梅。",
            img: "miaoyu_plum.png",
          },
        ],
        bg: "images/longcui_snow.jpg",
        img: "miaoyu_plum.png",
        options: [
          { text: "喚人向妙玉傳達來意", next: "plum_a", effect: { favor: 1 } },
          { text: "直接進入", next: "plum_b", effect: { favor: 0 } },
        ],
      },
      plum_a: {
        text: "小兒傳達師傅問為何要梅？你答道：",
        lines: [
          {
            speaker: "旁白",
            text: "小兒傳達師傅問為何要梅？你答道：",
            img: null,
          },
        ],
        options: [
          { text: "如實交代來意。", next: "plum_result", effect: { favor: 0 } },
          {
            text: "讚道：『今早看見數枝紅梅，如胭脂一般，映著雪色，分外顯的精神。』",
            next: "plum_result",
            effect: { favor: 2 },
          },
        ],
      },
      plum_b: {
        text: "妙玉道：『你來此有何事？』你答道：",
        lines: [
          {
            speaker: "旁白",
            text: "妙玉道：『你來此有何事？』你答道：",
            img: null,
          },
        ],
        options: [
          { text: "如實交代來意。", next: "plum_result", effect: { favor: 0 } },
          {
            text: "讚道：『今早看見數枝紅梅，如胭脂一般，映著雪色，分外顯的精神。』",
            next: "plum_result",
            effect: { favor: 2 },
          },
        ],
      },
      plum_result: {
        text: "妙玉聽罷，親自挑選一支紅梅贈與你。你欣然收下。",
        lines: [
          {
            speaker: "旁白",
            text: "妙玉聽罷，親自挑選一支紅梅贈與你。你欣然收下。",
            img: null,
          },
        ],
        options: [
          { text: "時光飛逝，到了寶玉生日當天...", next: "birthday_event" },
        ],
      },
      // 事件三：生日賀帖
      birthday_event: {
        text: "【生日】你收到一張粉紅箋紙，上面寫著：『檻外人妙玉恭肅遙叩芳辰。』你忙尋找岫煙請教如何回帖。",
        lines: [
          {
            speaker: "旁白",
            text: "【生日】你收到一張粉紅箋紙，上面寫著：『檻外人妙玉恭肅遙叩芳辰。』你忙尋找岫煙請教如何回帖。",
            img: null,
          },
        ],
        options: [
          {
            text: "岫煙笑說：『他這脾氣竟不能改。』你忙解釋：『姐姐不知道，他原不在這些人之中。』",
            next: "birthday_reply",
            effect: { favor: 4 },
          },
          {
            text: "默然不語，直接去問黛玉。",
            next: "final_check",
            effect: { favor: 0 },
          },
        ],
      },
      birthday_reply: {
        text: "岫煙聽了，這才告訴你回帖當自稱『檻內人』。你如獲至寶，親自回帖投進櫳翠庵。",
        lines: [
          {
            speaker: "旁白",
            text: "岫煙聽了，這才告訴你回帖當自稱『檻內人』。你如獲至寶，親自回帖投進櫳翠庵。",
            img: null,
          },
        ],
        options: [{ text: "命運之日終將到來...", next: "final_check" }],
      },
      final_check: {
        isEnding: true,
        text: "（命運判定中...）",
        lines: [
          {
            speaker: "旁白",
            text: "（命運判定中...）",
            img: "miaoyu_end1.png",
          },
        ],
        decide: () => {
          if (cupChoice === "A") {
            return favorability >= 7 ? "ending_2" : "ending_1";
          } else {
            return favorability >= 8 ? "ending_3" : "ending_1";
          }
        },
      },
      ending_1: {
        text: "結局：【入紅塵俗世】\n賈府被抄家後，妙玉為生活被迫再次面對骯髒醜陋的俗世。兩人此後再無交集。",
        lines: [
          {
            speaker: "旁白",
            text: "結局：【入紅塵俗世】賈府被抄家後，妙玉為生活被迫再次面對骯髒醜陋的俗世。兩人此後再無交集。",
            img: "miaoyu_end1.png",
          },
        ],
        img: "miaoyu_end1.png",
        options: [{ text: "重玩", next: "restart" }],
      },
      ending_2: {
        text: "結局：【為救寶玉從順親王】\n你深陷牢獄之災，妙玉攜平日收於暗處之財，自願獻身順親王，換得你的自由。",
        lines: [
          {
            speaker: "旁白",
            text: "結局：【為救寶玉從順親王】你深陷牢獄之災，妙玉攜平日收於暗處之財，自願獻身順親王，換得你的自由。",
            img: "miaoyu_end2.png",
          },
        ],
        img: "miaoyu_end2.png",
        options: [{ text: "重玩", next: "restart" }],
      },
      ending_3: {
        text: "結局：【與君訣別】\n妙玉悟透繁華終是一場空。欲行之日，兩人知心一會，此後妙玉深山修行，坐化而終。",
        lines: [
          {
            speaker: "旁白",
            text: "結局：【與君訣別】妙玉悟透繁華終是一場空。欲行之日，兩人知心一會，此後妙玉深山修行，坐化而終。",
            img: "miaoyu_end3.png",
          },
        ],
        img: "miaoyu_end3.png",
        options: [{ text: "重玩", next: "restart" }],
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

function initGame() {
  currentStep = 0;
  scores = { A: 0, B: 0, C: 0, D: 0 };
  userChoices = [];
  favorability = 0;
  roleScores = {};
  cupChoice = "";
  dialogLines = [];
  dialogIndex = 0;
  currentRole = "";
  currentNodeKey = "";

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
  renderStory(finalRole, "start");
}

// --- 對話框模式狀態 ---
let dialogLines = []; // 目前節點的對話行陣列
let dialogIndex = 0; // 目前顯示到第幾行
let currentRole = ""; // 目前角色
let currentNodeKey = ""; // 目前節點
let _typewriterTimer = null; // 打字機計時器 ID

/**
 * 將節點資料轉換成對話行陣列。
 * 節點可以用 lines: [{speaker, text, img}] 定義多行對話；
 * 若沒有 lines，則把 node.text 當作單行顯示。
 */
function buildDialogLines(node) {
  if (node.lines && node.lines.length > 0) {
    return node.lines; // 直接使用自訂對話行
  }
  // 相容舊格式：把 node.text 包成單行
  return [{ speaker: "", text: node.text, img: node.img || null }];
}

/** 顯示目前對話行（dialogIndex），並更新對話框 UI */
function renderDialogLine() {
  const line = dialogLines[dialogIndex];
  const isLast = dialogIndex === dialogLines.length - 1;

  // 更新立繪
  const imgEl = document.getElementById("character-img");
  if (imgEl) {
    const imgSrc = line.img || null;
    if (imgSrc) {
      const resolvedImg =
        imgSrc.startsWith("images/") ||
        imgSrc.startsWith("http") ||
        imgSrc.startsWith("./")
          ? imgSrc
          : `images/${imgSrc}`;
      imgEl.src = resolvedImg;
      imgEl.style.display = "block";
    } else {
      imgEl.style.display = "none";
    }
  }

  // 更新說話者名字（若有 speaker 欄位）
  const speakerEl = document.getElementById("dialog-speaker");
  if (speakerEl) {
    speakerEl.innerText = line.speaker || "";
    speakerEl.style.display = line.speaker ? "block" : "none";
  }

  // 更新對話文字（打字機效果）
  const textEl = document.getElementById("story-text");
  if (textEl) typewriterEffect(textEl, line.text);

  // 更新按鈕區
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  if (!isLast) {
    // 還有下一行：顯示「繼續 ▶」按鈕
    const nextBtn = document.createElement("button");
    nextBtn.innerText = "繼續 ▶";
    nextBtn.className = "btn-next";
    nextBtn.onclick = () => {
      cancelTypewriter(); // 取消上一行的打字機
      dialogIndex++;
      renderDialogLine();
    };
    optionsDiv.appendChild(nextBtn);
  } else {
    // 最後一行：顯示選項按鈕
    const node = GAME_DATA.stories[currentRole][currentNodeKey];

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
          // --- 通用分數累計 ---
          // 1. effect 數字（黛玉／晴雯）
          if (typeof opt.effect === "number") {
            favorability += opt.effect;
          }
          // 2. effect 物件（妙玉 favor）
          else if (opt.effect && typeof opt.effect === "object") {
            favorability += opt.effect.favor || 0;
          }
          // 3. 直接寫在選項上的 favor（妙玉舊格式）
          if (typeof opt.favor === "number") favorability += opt.favor;

          // 4. 各角色線專用分數（襲人／寶釵／湘雲）
          const roleFields = [
            "infatuation",
            "advise",
            "jinYu",
            "lengXiang",
            "kylin",
            "mingshi",
          ];
          for (const field of roleFields) {
            if (typeof opt[field] === "number") {
              roleScores[field] = (roleScores[field] || 0) + opt[field];
            }
          }

          // 5. 妙玉茶杯選擇
          if (opt.cupChoice) cupChoice = opt.cupChoice;

          renderStory(currentRole, opt.next);
        };
        optionsDiv.appendChild(btn);
      });
    }
  }
}

/** 取消目前打字機 */
function cancelTypewriter() {
  if (_typewriterTimer !== null) {
    clearTimeout(_typewriterTimer);
    _typewriterTimer = null;
  }
}

/** 打字機逐字顯示效果 */
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

function renderStory(role, nodeKey) {
  if (nodeKey === "restart") {
    initGame();
    return;
  }

  if (nodeKey === "start") {
    favorability = 0;
    roleScores = {};
  }

  const node = GAME_DATA.stories[role][nodeKey];
  if (!node) {
    console.error("找不到劇情節點: role=" + role + ", nodeKey=" + nodeKey);
    return;
  }

  // ── 結局判定 ─────────────────────────────────────────────────
  if (node.isEnding) {
    let nextNode;

    if (typeof node.decide === "function") {
      // 妙玉線：自訂 decide()
      nextNode = node.decide();
    } else if (node.ending1) {
      // 多結局格式（襲人／寶釵／湘雲）：逐一判定 condition
      nextNode = "ending4";
      for (const key of ["ending1", "ending2", "ending3", "ending4"]) {
        const e = node[key];
        if (!e || !e.condition) continue;
        try {
          const sc = roleScores;
          let condStr = e.condition;
          // 把 roleScores 的 key 注入成區域變數
          Object.entries(sc).forEach(([k, v]) => {
            condStr = "var " + k + " = " + v + "; " + condStr;
          });
          if (Function('"use strict"; ' + condStr)()) {
            nextNode = key;
            break;
          }
        } catch (err) {
          /* condition 語法錯誤時跳過 */
        }
      }
    } else {
      // 簡單模式（黛玉／晴雯）
      nextNode = favorability >= 2 ? "happy_end" : "sad_end";
    }

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
