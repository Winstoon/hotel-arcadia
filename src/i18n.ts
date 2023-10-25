export enum I18N {
    EN = 'EN',
    ZH = 'ZH',
    JP = 'JP'
}

export const I18N_LABELS = {
    [I18N.EN]: 'ENGLISH',
    [I18N.JP]: '日本語',
    [I18N.ZH]: '中文',
}

type I18NItem = {
    [I18N.EN]: string,
    [I18N.JP]: string,
    [I18N.ZH]: string,
}

type I18NFullData = {
    [key: string]: I18NItem
}

export const I18NS: I18NFullData = {
    'reserve': {
        [I18N.ZH]: '预订',
        [I18N.EN]: 'Reserve',
        [I18N.JP]: '予約',
    },

    'explore': {
        [I18N.ZH]: '探索',
        [I18N.EN]: 'Exploration',
        [I18N.JP]: '探索',
    },

    'environment': {
        [I18N.ZH]: '境',
        [I18N.EN]: 'Environment',
        [I18N.JP]: '境',
    },

    'residence': {
        [I18N.ZH]: '居',
        [I18N.EN]: 'Residence',
        [I18N.JP]: '居',
    },

    'delicious': {
        [I18N.ZH]: '肴',
        [I18N.EN]: 'Delicious',
        [I18N.JP]: '肴',
    },

    'home.s2.title': {
        [I18N.ZH]: 'ARCADIA 二世古 雪屋',
        [I18N.EN]: 'ARCADIA NISEKO YUKIYA',
        [I18N.JP]: 'ARCADIA ニセコ 雪屋',
    },
    'home.s2.desc1': {
        [I18N.ZH]: '滑雪盛揽 银白之梦',
        [I18N.EN]: 'Skiing and snowboarding in the white world',
        [I18N.JP]: '白い世界でスキーやスノーボード',
    },
    'home.s2.desc2': {
        [I18N.ZH]: '绵延叠嶂中探寻羊蹄山麓',
        [I18N.EN]: 'Explore the foot of Mt. Yotei in the mountains',
        [I18N.JP]: '山の中で羊蹄山の麓を探索する',
    },

    'home.s3.desc1': {
        [I18N.ZH]: '登临旷美雪岭 穿梭山林',
        [I18N.EN]: 'Climb the beautiful snow ridge and shuttle through the mountains',
        [I18N.JP]: '美しい雪の尾根を登り、山をシャトルする',
    },
    'home.s3.desc2': {
        [I18N.ZH]: '探秘晶莹皎洁的非凡之旅',
        [I18N.EN]: 'Explore the extraordinary journey of crystal clear',
        [I18N.JP]: 'クリスタルクリアの非凡な旅を探索する',
    },

    'home.s4.desc1': {
        [I18N.ZH]: '建筑与人文的灵动交融',
        [I18N.EN]: 'The dynamic blend of architecture and culture',
        [I18N.JP]: '建築と文化の動的なブレンド',
    },
    'home.s4.desc2': {
        [I18N.ZH]: '尽享超然物外的无尽惬意',
        [I18N.EN]: 'Enjoy endless comfort beyond the world',
        [I18N.JP]: '世界を超えた無限の快適さをお楽しみください',
    },

    'home.s5.desc1': {
        [I18N.ZH]: '私享主厨的诠释',
        [I18N.EN]: 'The chef\'s interpretation',
        [I18N.JP]: 'シェフの解釈',
    },
    'home.s5.desc2': {
        [I18N.ZH]: '回响技艺与珍馐的高定赏味',
        [I18N.EN]: 'Echoing skills and high-quality taste of rare delicacies',
        [I18N.JP]: '希少な珍味のエコー技術と高品質の味',
    },

    'home.s6.title': {
        [I18N.ZH]: 'ARCADIA坐落于北海道二世古地区最富盛名的比罗夫镇',
        [I18N.EN]: 'ARCADIA is located in the most famous Hirafu Town in Niseko, Hokkaido',
        [I18N.JP]: 'ARCADIAは、北海道ニセコの最も有名な比羅夫町にあります',
    },
    'home.s6.desc1': {
        [I18N.ZH]: '距离札幌新千岁机场（New Chitose Airport） 约2小时车程',
        [I18N.EN]: 'About 2 hours drive from New Chitose Airport in Sapporo',
        [I18N.JP]: '札幌の新千歳空港から約2時間のドライブ',
    },
    'home.s6.desc2': {
        [I18N.ZH]: '距离北海道札幌市(Sapporo, Hokkaido) 约2小时车程',
        [I18N.EN]: 'About 2 hours drive from Sapporo, Hokkaido',
        [I18N.JP]: '北海道札幌から約2時間のドライブ',
    },
    'home.s6.desc3': {
        [I18N.ZH]: '距离比罗夫村中心（Central Hirafu Village) 步行约5分钟',
        [I18N.EN]: 'About 5 minutes walk from Central Hirafu Village',
        [I18N.JP]: '比羅夫村の中心から徒歩約5分',
    },
    'home.s6.desc4': {
        [I18N.ZH]: '距离家庭滑雪缆车（Ace Family Chair Lift） 车程约5分钟',
        [I18N.EN]: 'About 5 minutes drive from the family ski lift (Ace Family Chair Lift)',
        [I18N.JP]: '家族スキーリフト（エースファミリーチェアリフト）から約5分のドライブ',
    },
    'home.s6.desc5': {
        [I18N.ZH]: '距离Yukoro温泉(2024年12月开业)20米 步行约1分钟',
        [I18N.EN]: 'About 20 meters from Yukoro Onsen (opening in December 2024), about 1 minute walk',
        [I18N.JP]: '湯コロ温泉（2024年12月オープン）から約20メートル、徒歩約1分',
    },
    
    'home.s6.desc6': {
        [I18N.ZH]: '地址：〒044-0036 日本国北海道虻田郡倶知安町南 6 条西 1 丁目 5 番地 1',
        [I18N.EN]: 'Address: 〒044-0036 1-5-1 Nishi 6-jo Minami, Kutchan-cho, Abuta-gun, Hokkaido, Japan',
        [I18N.JP]: '住所：〒044-0036 北海道虻田郡倶知安町南6条西1丁目5番地1',
    },
    'home.s6.desc7': {
        [I18N.ZH]: '查看地图>',
        [I18N.EN]: 'View map>',
        [I18N.JP]: '地図を見る>',
    },
    'home.s6.desc8': {
        [I18N.ZH]: '电话：+81 136 55 8917 （日本时间 周一至周五 9:00-18:00）',
        [I18N.EN]: 'Phone: +81 136 55 8917 (Monday to Friday 9:00-18:00 Japan time)',
        [I18N.JP]: '電話：+81 136 55 8917（月曜日から金曜日9:00〜18:00日本時間）',
    },
    'home.s6.desc9': {
        [I18N.ZH]: '传真：+81 136 55 8927',
        [I18N.EN]: 'Fax: +81 136 55 8927',
        [I18N.JP]: 'FAX：+81 136 55 8927',
    },
    'home.s6.desc10': {
        [I18N.ZH]: '邮箱：info@ryowhagroup.com',
        [I18N.EN]: 'Email: info@ryowhagroup.com',
        [I18N.JP]: 'メール：info@ryowhagroup.com'
    }
}
