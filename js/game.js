const story = {
    start: {
        text: "正值暮春時節，大觀園內落紅成陣。你漫步在沁芳橋畔，忽見前方有一纖弱身影，正低頭收拾落花。那人正是林黛玉。",
        options: [
            { text: "上前詢問她在做什麼", next: "ask" },
            { text: "默默在旁觀看，不忍打擾", next: "watch" }
        ]
    },
    ask: {
        text: "黛玉抬頭看你，眼圈微紅，輕聲道：『與其讓這些殘花被踐踏，不如將它們收進花塚，隨土而化。』",
        options: [
            { text: "與她一同葬花", next: "end1" },
            { text: "勸她莫要憂傷", next: "end2" }
        ]
    },
    watch: {
        text: "你遠遠看著她將花瓣一一收起，背影孤單。這時，寶玉從另一頭走來，也看到了這一幕。",
        options: [
            { text: "走向寶玉與他打招呼", next: "baoyu" },
            { text: "悄悄離開", next: "leave" }
        ]
    },
    end1: { text: "你們共同葬花，成了知心好友。遊戲結束。", options: [{ text: "重新開始", next: "start" }] },
    end2: { text: "她嘆了口氣，轉身離去。看來你還不夠懂她的心。遊戲結束。", options: [{ text: "重新開始", next: "start" }] },
    baoyu: { text: "寶玉熱情地拉著你去看新寫的詩，大觀園的一天充滿了驚喜。遊戲結束。", options: [{ text: "重新開始", next: "start" }] },
    leave: { text: "你悄悄離開了，大觀園的秘密仍等待你去發掘。遊戲結束。", options: [{ text: "重新開始", next: "start" }] }
};

function updatePage(key) {
    const state = story[key];
    document.getElementById('story-text').innerText = state.text;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    state.options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.innerText = opt.text;
        btn.onclick = () => updatePage(opt.next);
        optionsDiv.appendChild(btn);
    });
}

// 這是啟動遊戲的第一步
updatePage('start');

