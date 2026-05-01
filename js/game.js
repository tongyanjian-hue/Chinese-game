/**
 * 劇本
 */
const GAME_DATA = {
    // 性格測驗題庫
    quiz: [
        { 
            question: "暮春時節，落花滿地，你的第一反應是？", 
            options: [
                { text: "感傷花落，想將它們掩埋", role: "daiyu" },
                { text: "欣賞殘韻，覺得是自然之理", role: "baocha" },
                { text: "邀友飲酒，及時行樂", role: "xiangyun" }
            ] 
        },
        { 
            question: "若要選一件隨身物件，你會選？", 
            options: [
                { text: "一卷詩集", role: "daiyu" },
                { text: "一只金鎖", role: "baocha" },
                { text: "一塊玉珮", role: "xiangyun" }
            ] 
        },
        // 編劇可以繼續增加到五題...
    ],
    // 角色劇情與結局
    stories: {
        daiyu: {
            name: "林黛玉",
            start: {
                text: "【瀟湘館】你見黛玉正獨自對著殘花垂淚，這一次你決定...",
                options: [
                    { text: "陪她一起葬花，訴說衷腸", next: "happy" },
                    { text: "勸她想開點，別總傷身", next: "sad" }
                ]
            },
            happy: { text: "結局：你們心意相通，改寫了淚盡而逝的命運。遊戲結束。", options: [{text: "重玩遊戲", next: "restart"}] },
            sad: { text: "結局：她覺得你終究不解她的心，最終鬱鬱而終。遊戲結束。", options: [{text: "重玩遊戲", next: "restart"}] }
        },
        baocha: {
            name: "薛寶釵",
            start: {
                text: "【蘅蕪苑】寶釵正優雅地撲蝶，你走上前去...",
                options: [
                    { text: "與她談論經濟仕途", next: "happy" },
                    { text: "只想與她談論詩詞歌賦", next: "sad" }
                ]
            },
            happy: { text: "結局：你們舉案齊眉，成了人人稱羨的模範夫妻。遊戲結束。", options: [{text: "重玩遊戲", next: "restart"}] },
            sad: { text: "結局：雖然成婚，但始終隔著一層心牆。遊戲結束。", options: [{text: "重玩遊戲", next: "restart"}] }
        }
        // 史湘雲的部分可以依此類推增加...
    }
};

/**
 * 遊戲執行
 */
let currentStep = 0;
let scores = { daiyu: 0, baocha: 0, xiangyun: 0 };

function initGame() {
    currentStep = 0;
    scores = { daiyu: 0, baocha: 0, xiangyun: 0 };
    renderQuiz();
}

function renderQuiz() {
    const q = GAME_DATA.quiz[currentStep];
    const storyText = document.getElementById('story-text');
    const optionsDiv = document.getElementById('options');
    
    storyText.innerText = `【測驗中 ${currentStep + 1}/5】\n${q.question}`;
    optionsDiv.innerHTML = '';
    
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt.text;
        btn.onclick = () => {
            scores[opt.role]++;
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
    // 找出分數最高的角色
    let maxRole = 'daiyu';
    if (scores.baocha > scores.daiyu) maxRole = 'baocha';
    if (scores.xiangyun > scores[maxRole]) maxRole = 'xiangyun';
    
    alert(`測驗結束！你即將互動的角色是：${GAME_DATA.stories[maxRole].name}`);
    renderStory(maxRole, 'start');
}

function renderStory(role, nodeKey) {
    if (nodeKey === 'restart') {
        initGame();
        return;
    }
    
    const node = GAME_DATA.stories[role][nodeKey];
    document.getElementById('story-text').innerText = node.text;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    node.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt.text;
        btn.onclick = () => renderStory(role, opt.next);
        optionsDiv.appendChild(btn);
    });
}

initGame();
