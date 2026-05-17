const GAME_DATA = {
    quizConfig: {
        music: "quiz_theme.mp3",
        bg: "quiz_bg.jpg"
    },
    quiz: [
        { 
            question: "春日午後，你最想做什麼？", 
            options: [
                { text: "在花園裡讀詩，偶爾對花落淚", category: "A" },
                { text: "整理書房，研讀詩書典籍", category: "B" },
                { text: "拉著朋友在湖邊打水漂、說笑話", category: "C" },
                { text: "獨自去寺廟靜坐，遠離塵囂", category: "D" }
            ] 
        },
        { 
            question: "有人誤會了你，你會怎麼做？", 
            options: [
                { text: "心裡非常難受，忍不住哭泣，卻說不出口", category: "A" },
                { text: "溫和地解釋清楚，不讓對方難堪", category: "B" },
                { text: "直接開口問清楚，笑著化解", category: "C" },
                { text: "沉默不語，覺得解釋也沒有意義", category: "D" }
            ] 
        },
        { 
            question: "你覺得感情最重要的是什麼？",
            options: [
                {text:"心靈契合，能讀懂彼此的感受", category: "A" },
                {text:"彼此尊重，共同守護一個家", category: "B" },
                {text:"輕鬆自在，在一起時總是笑聲不斷", category: "C" },
                {text:"純粹乾淨，不染俗世", category: "D" }
            ]
        },
        { 
            question: "你加入了學校的詩社，你的角色是？",
            options: [
                {text:"寫出最動人的詩，卻總帶著憂愁", category: "A" },
                {text:"默默把所有細節都安排好", category: "B" },
                {text:"第一個舉手，笑說「我來出題！」", category: "C" },
                {text:"坐在角落旁觀，偶爾說一句讓人驚艷的話", category: "D" }
            ]
        },
        { 
            question: "你的房間最可能是什麼樣子？",
            options: [
                {text:"到處是書和花瓣，窗邊有一盆將謝的菊", category: "A" },
                {text:"整齊乾淨，有一套精緻的茶具", category: "B" },
                {text:"衣服隨意放，牆上貼著塗鴉和笑話", category: "C" },
                {text:"素淨清冷，只有一爐香和幾本佛經", category: "D" }
            ]
        },
        { 
            question: "面對喜歡的人，你通常是？", 
            options: [
                { text: "在意他的每個眼神，多想一句話也睡不著", category: "A" },
                { text: "照顧他的生活，用行動代替言語", category: "B" },
                { text: "直接說出來，反正說錯了還可以笑著圓回去", category: "C" },
                { text: "從不主動，緣分到了自然會來", category: "D" }
            ] 
        }
    ],
    stories: {
        daiyu: {
            name: "林黛玉",
            music: "daiyu.mp3",
            start: {
                text: "【瀟湘館】黛玉正低頭葬花，見你來了，冷笑一聲：『你這會子來做什麼？不去找你的寶姐姐？』",
                bg: "xiaoxiang.jpg",
                img: "daiyu_angry.png",
                options: [
                    { text: "賠笑解釋：『心裡只記掛著妹妹，才剛從老太太那過來。』", next: "scene2", effect: 2 }, // 大加分
                    { text: "有些惱了：『你總是這般多心，倒叫人沒趣。』", next: "scene2", effect: -1 }      // 扣分
                ]
            },
            scene2: {
                text: "黛玉臉色稍緩，幽幽地說：『你說心裡記掛著我，那這塊舊手帕你可還留著？』",
                img: "daiyu_sad.png",
                options: [
                    { text: "立刻從懷中掏出，視若珍寶", next: "final_check", effect: 2 },
                    { text: "一時語塞，支支吾吾地找藉口", next: "final_check", effect: -2 }
                ]
            },
            // 結局判定點
            final_check: {
                isEnding: true,
                text: "（正在結算好感度...）",
                options: [] // 這裡不需要選項，程式會自動跳轉
            },
            happy_end: {
                text: "結局：【木石前盟】你用真心化解了她的疑慮，兩人在大觀園中許下終身。遊戲結束。",
                img: "daiyu_happy.png",
                options: [{ text: "重玩遊戲", next: "restart" }]
            },
            sad_end: {
                text: "結局：【終身誤】你的猶豫讓她傷透了心，最終她焚稿斷癡情，魂歸離恨天。遊戲結束。",
                img: "daiyu_dead.png",
                options: [{ text: "重玩遊戲", next: "restart" }]
            }
        },

        xiren: {
            name: "襲人",
            music: "xiren.mp3",
            start: {
                text: "【襲人】襲人正低頭整理衣物，見你來了，冷笑一聲：『你這會子來做什麼？不去找你的寶姐姐？』",
                bg: "xiren_bg.jpg",
                img: "xiren_angry.png",
                options: [
                    { text: "賠笑解釋：『心裡只記掛著妹妹，才剛從老太太那過來。』", next: "scene2", effect: 2 }, // 大加分
                    { text: "有些惱了：『你總是這般多心，倒叫人沒趣。』", next: "scene2", effect: -1 }      // 扣分
                ]
            },
            scene2: {
                text: "襲人臉色稍緩，幽幽地說：『你說心裡記掛著我，那這塊舊手帕你可還留著？』",
                img: "xiren_sad.png",
                options: [
                    { text: "立刻從懷中掏出，視若珍寶", next: "final_check", effect: 2 },
                    { text: "一時語塞，支支吾吾地找藉口", next: "final_check", effect: -2 }
                ]
            },
            // 結局判定點
            final_check: {
                isEnding: true,
                text: "（正在結算好感度...）",
                options: [] // 這裡不需要選項，程式會自動跳轉
            },
            happy_end: {
                text: "結局：【木石前盟】你用真心化解了她的疑慮，兩人在大觀園中許下終身。遊戲結束。",
                img: "xiren_happy.png",
                options: [{ text: "重玩遊戲", next: "restart" }]
            },
            sad_end: {
                text: "結局：【終身誤】你的猶豫讓她傷透了心，最終她焚稿斷癡情，魂歸離恨天。遊戲結束。",
                img: "xiren_dead.png",
                options: [{ text: "重玩遊戲", next: "restart" }]
            }
        },

        xiren: {
            name: "襲人",
            music: "xiren.mp3",
            start: {
                text: "【襲人】襲人正低頭整理衣物，見你來了，冷笑一聲：『你這會子來做什麼？不去找你的寶姐姐？』",
                bg: "xiren_bg.jpg",
                img: "xiren_angry.png",
                options: [
                    { text: "賠笑解釋：『心裡只記掛著妹妹，才剛從老太太那過來。』", next: "scene2", effect: 2 }, // 大加分
                    { text: "有些惱了：『你總是這般多心，倒叫人沒趣。』", next: "scene2", effect: -1 }      // 扣分
                ]
            },
            scene2: {
                text: "襲人臉色稍緩，幽幽地說：『你說心裡記掛著我，那這塊舊手帕你可還留著？』",
                img: "xiren_sad.png",
                options: [
                    { text: "立刻從懷中掏出，視若珍寶", next: "final_check", effect: 2 },
                    { text: "一時語塞，支支吾吾地找藉口", next: "final_check", effect: -2 }
                ]
            },
            // 結局判定點
            final_check: {
                isEnding: true,
                text: "（正在結算好感度...）",
                options: [] // 這裡不需要選項，程式會自動跳轉
            },
            happy_end: {
                text: "結局：【木石前盟】你用真心化解了她的疑慮，兩人在大觀園中許下終身。遊戲結束。",
                img: "xiren_happy.png",
                options: [{ text: "重玩遊戲", next: "restart" }]
            },
            sad_end: {
                text: "結局：【終身誤】你的猶豫讓她傷透了心，最終她焚稿斷癡情，魂歸離恨天。遊戲結束。",
                img: "xiren_dead.png",
                options: [{ text: "重玩遊戲", next: "restart" }]
            }
        },

        baocha: {
            name: "寶釵",
            music: "baocha.mp3",
            start: {
                text: "【寶釵】寶釵正低頭整理衣物，見你來了，冷笑一聲：『你這會子來做什麼？不去找你的寶姐姐？』",
                bg: "baocha_bg.jpg",
                img: "baocha_angry.png",
                options: [
                    { text: "賠笑解釋：『心裡只記掛著妹妹，才剛從老太太那過來。』", next: "scene2", effect: 2 }, // 大加分
                    { text: "有些惱了：『你總是這般多心，倒叫人沒趣。』", next: "scene2", effect: -1 }      // 扣分
                ]
            },
            scene2: {
                text: "寶釵臉色稍緩，幽幽地說：『你說心裡記掛著我，那這塊舊手帕你可還留著？』",
                img: "baocha_sad.png",
                options: [
                    { text: "立刻從懷中掏出，視若珍寶", next: "final_check", effect: 2 },
                    { text: "一時語塞，支支吾吾地找藉口", next: "final_check", effect: -2 }
                ]
            },
            // 結局判定點
            final_check: {
                isEnding: true,
                text: "（正在結算好感度...）",
                options: [] // 這裡不需要選項，程式會自動跳轉
            },
            happy_end: {
                text: "結局：【木石前盟】你用真心化解了她的疑慮，兩人在大觀園中許下終身。遊戲結束。",
                img: "baocha_happy.png",
                options: [{ text: "重玩遊戲", next: "restart" }]
            },
            sad_end: {
                text: "結局：【終身誤】你的猶豫讓她傷透了心，最終她焚稿斷癡情，魂歸離恨天。遊戲結束。",
                img: "baocha_dead.png",
                options: [{ text: "重玩遊戲", next: "restart" }]
            }
        },

        xiangyun: {
            name: "湘雲",
            music: "xiangyun.mp3",
            start: {
                text: "【湘雲】湘雲正低頭整理衣物，見你來了，冷笑一聲：『你這會子來做什麼？不去找你的寶姐姐？』",
                bg: "xiangyun_bg.jpg",
                img: "xiangyun_angry.png",
                options: [
                    { text: "賠笑解釋：『心裡只記掛著妹妹，才剛從老太太那過來。』", next: "scene2", effect: 2 }, // 大加分
                    { text: "有些惱了：『你總是這般多心，倒叫人沒趣。』", next: "scene2", effect: -1 }      // 扣分
                ]
            },
            scene2: {
                text: "湘雲臉色稍緩，幽幽地說：『你說心裡記掛著我，那這塊舊手帕你可還留著？』",
                img: "xiangyun_sad.png",
                options: [
                    { text: "立刻從懷中掏出，視若珍寶", next: "final_check", effect: 2 },
                    { text: "一時語塞，支支吾吾地找藉口", next: "final_check", effect: -2 }
                ]
            },
            // 結局判定點
            final_check: {
                isEnding: true,
                text: "（正在結算好感度...）",
                options: [] // 這裡不需要選項，程式會自動跳轉
            },
            happy_end: {
                text: "結局：【木石前盟】你用真心化解了她的疑慮，兩人在大觀園中許下終身。遊戲結束。",
                img: "xiangyun_happy.png",
                options: [{ text: "重玩遊戲", next: "restart" }]
            },
            sad_end: {
                text: "結局：【終身誤】你的猶豫讓她傷透了心，最終她焚稿斷癡情，魂歸離恨天。遊戲結束。",
                img: "xiangyun_dead.png",
                options: [{ text: "重玩遊戲", next: "restart" }]
            }
        },

        qingwen: {
            name: "晴雯",
            music: "qingwen.mp3",
            start: {
                text: "【晴雯】晴雯正低頭整理衣物，見你來了，冷笑一聲：『你這會子來做什麼？不去找你的寶姐姐？』",
                bg: "qingwen_bg.jpg",
                img: "qingwen_angry.png",
                options: [
                    { text: "賠笑解釋：『心裡只記掛著妹妹，才剛從老太太那過來。』", next: "scene2", effect: 2 }, // 大加分
                    { text: "有些惱了：『你總是這般多心，倒叫人沒趣。』", next: "scene2", effect: -1 }      // 扣分
                ]
            },
            scene2: {
                text: "晴雯臉色稍緩，幽幽地說：『你說心裡記掛著我，那這塊舊手帕你可還留著？』",
                img: "qingwen_sad.png",
                options: [
                    { text: "立刻從懷中掏出，視若珍寶", next: "final_check", effect: 2 },
                    { text: "一時語塞，支支吾吾地找藉口", next: "final_check", effect: -2 }
                ]
            },
            // 結局判定點
            final_check: {
                isEnding: true,
                text: "（正在結算好感度...）",
                options: [] // 這裡不需要選項，程式會自動跳轉
            },
            happy_end: {
                text: "結局：【木石前盟】你用真心化解了她的疑慮，兩人在大觀園中許下終身。遊戲結束。",
                img: "qingwen_happy.png",
                options: [{ text: "重玩遊戲", next: "restart" }]
            },
            sad_end: {
                text: "結局：【終身誤】你的猶豫讓她傷透了心，最終她焚稿斷癡情，魂歸離恨天。遊戲結束。",
                img: "qingwen_dead.png",
                options: [{ text: "重玩遊戲", next: "restart" }]
            }
        },

        miaoyu: {
            name: "妙玉",
            music: "miaoyu.mp3",
            start: {
                text: "【妙玉】妙玉正低頭整理衣物，見你來了，冷笑一聲：『你這會子來做什麼？不去找你的寶姐姐？』",
                bg: "miaoyu_bg.jpg",
                img: "miaoyu_angry.png",
                options: [
                    { text: "賠笑解釋：『心裡只記掛著妹妹，才剛從老太太那過來。』", next: "scene2", effect: 2 }, // 大加分
                    { text: "有些惱了：『你總是這般多心，倒叫人沒趣。』", next: "scene2", effect: -1 }      // 扣分
                ]
            },
            scene2: {
                text: "妙玉臉色稍緩，幽幽地說：『你說心裡記掛著我，那這塊舊手帕你可還留著？』",
                img: "miaoyu_sad.png",
                options: [
                    { text: "立刻從懷中掏出，視若珍寶", next: "final_check", effect: 2 },
                    { text: "一時語塞，支支吾吾地找藉口", next: "final_check", effect: -2 }
                ]
            },
            // 結局判定點
            final_check: {
                isEnding: true,
                text: "（正在結算好感度...）",
                options: [] // 這裡不需要選項，程式會自動跳轉
            },
            happy_end: {
                text: "結局：【木石前盟】你用真心化解了她的疑慮，兩人在大觀園中許下終身。遊戲結束。",
                img: "miaoyu_happy.png",
                options: [{ text: "重玩遊戲", next: "restart" }]
            },
            sad_end: {
                text: "結局：【終身誤】你的猶豫讓她傷透了心，最終她焚稿斷癡情，魂歸離恨天。遊戲結束。",
                img: "miaoyu_dead.png",
                options: [{ text: "重玩遊戲", next: "restart" }]
            }
        },
    }
};

let currentStep = 0;
let scores = { A: 0, B: 0, C: 0, D: 0 };
let userChoices = [];
let favorability = 0; // 新增好感度變數

function initGame() {
    currentStep = 0;
    scores = { A: 0, B: 0, C: 0, D: 0 };
    userChoices = [];
    favorability = 0; // 重置好感度

    // 播放測驗音樂與背景
    changeMusic(GAME_DATA.quizConfig.music);
    changeBackground(GAME_DATA.quizConfig.bg);
    renderQuiz();
}

function changeMusic(fileName) {
    const audio = document.getElementById('bg-music');
    audio.src = `sound/${fileName}`;
    audio.play().catch(e => console.log("等待使用者互動後播放"));
}

function changeBackground(fileName) {
    document.body.style.backgroundImage = `url('images/${fileName}')`;
}

function renderQuiz() {
    const q = GAME_DATA.quiz[currentStep];
    document.getElementById('story-text').innerText = `【前測 ${currentStep + 1}/6】\n${q.question}`;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    q.options.forEach(opt => {
        const btn = document.createElement('button');
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
    let winner = '';
    if (scores.A === maxScore) {
        winner = 'A';
    } else if (scores.D === maxScore) {
        winner = 'D';
    } else if (scores.B === maxScore) {
        winner = 'B';
    } else {
        winner = 'C';
    }

    // 3. 根據贏家類別與隱藏邏輯決定最終角色
    let finalRole = '';
    if (winner === 'A') {
        finalRole = 'daiyu';
    } else if (winner === 'D') {
        finalRole = 'miaoyu';
    } else if (winner === 'B') {
        // 第六題(索引5) 沒選B -> 寶釵；選B -> 襲人
        finalRole = (userChoices[5] === 'B') ? 'xiren' : 'baocha';
    } else if (winner === 'C') {
        // 第二題(索引1) 選C -> 湘雲；未選C -> 晴雯
        finalRole = (userChoices[1] === 'C') ? 'xiangyun' : 'qingwen';
    }

    // 4. 執行切換音樂與進入劇情
    if (!GAME_DATA.stories[finalRole]) {
        finalRole = 'daiyu';
    }
    changeMusic(GAME_DATA.stories[finalRole].music);
    renderStory(finalRole, 'start');
}

function renderStory(role, nodeKey) {
    if (nodeKey === 'restart') { initGame(); return; }
    
    // 進入角色劇情時，如果是第一步，重置好感度
    if (nodeKey === 'start') favorability = 0;

    const node = GAME_DATA.stories[role][nodeKey];

    // --- 結局判定邏輯 ---
    if (node.isEnding) {
        // 如果好感度大於等於 2 分，走好結局，否則走壞結局
        const nextNode = (favorability >= 2) ? 'happy_end' : 'sad_end';
        setTimeout(() => renderStory(role, nextNode), 1000); // 延遲一秒顯示結局，增加氣氛
        return;
    }

    // 更新畫面 (背景、立繪、文字)
    if (node.bg) changeBackground(node.bg);
    const imgEl = document.getElementById('character-img');
    if (node.img) {
        imgEl.src = `images/${node.img}`;
        imgEl.style.display = 'block';
    }

    document.getElementById('story-text').innerText = node.text;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    // 建立選項按鈕
    node.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt.text;
        btn.onclick = () => {
            // 如果這個選項有設定效果，就加減好感度
            if (typeof opt.effect === 'number') {
                favorability += opt.effect;
            }
            renderStory(role, opt.next);
        };
        optionsDiv.appendChild(btn);
    });
}

// 啟動點擊監聽，第一次點擊時播放背景音樂
document.addEventListener('click', () => {
    const audio = document.getElementById('bg-music');
    if (audio.paused && currentStep === 0) audio.play();
}, { once: true });

initGame();