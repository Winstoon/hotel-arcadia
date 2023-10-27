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

    'adults': {
        [I18N.ZH]: '成人',
        [I18N.EN]: 'Adults',
        [I18N.JP]: '大人',
    },

    'children': {
        [I18N.ZH]: '儿童',
        [I18N.EN]: 'Children',
        [I18N.JP]: '子供',
    },

    'night': {
        [I18N.ZH]: '晚',
        [I18N.EN]: 'Night',
        [I18N.JP]: '晩',
    },

    'submit': {
        [I18N.ZH]: '提交',
        [I18N.EN]: 'Submit',
        [I18N.JP]: '提出する',
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
    },


    'reserve.cpt1': {
        [I18N.ZH]: '管家将于提交后1个工作日内，以邮件形式与您联系具体事宜（日本时间 周一至周五 9:00-18:00）',
        [I18N.EN]: 'The butler will contact you by email within 1 working day after submission (Monday to Friday 9:00-18:00 Japan time)',
        [I18N.JP]: '執事は提出後1営業日以内にメールでご連絡いたします（月曜日から金曜日9:00〜18:00日本時間）',
    },
    'reserve.cpt2': {
        [I18N.ZH]: '您也可以拨打预定电话 +81 136 55 8917（日本时间 周一至周五 9:00-18:00）',
        [I18N.EN]: 'You can also call the reservation phone +81 136 55 8917 (Monday to Friday 9:00-18:00 Japan time)',
        [I18N.JP]: '予約電話+81 136 55 8917（月曜日から金曜日9:00〜18:00日本時間）もご利用いただけます',
    },
    'reserve.cpt3': {
        [I18N.ZH]: '或发送邮件至 info@ryowhagroup.com 进行预订',
        [I18N.EN]: 'Or send an email to info@ryowhagroup.com to make a reservation',
        [I18N.JP]: 'または、info@ryowhagroup.com にメールを送信して予約してください',
    },

    'reserve.form.date': {
        [I18N.ZH]: '入住日期',
        [I18N.EN]: 'Check-in date',
        [I18N.JP]: 'チェックイン日',
    },
    'reserve.form.days': {
        [I18N.ZH]: '入住天数（5晚起订）',
        [I18N.EN]: 'Length of stay (5 nights minimum)',
        [I18N.JP]: '滞在期間（5泊以上）',
    },
    'reserve.form.adults': {
        [I18N.ZH]: '成人人数',
        [I18N.EN]: 'Number of adults',
        [I18N.JP]: '大人の数',
    },
    'reserve.form.children': {
        [I18N.ZH]: '儿童人数',
        [I18N.EN]: 'Number of children',
        [I18N.JP]: '子供の数',
    },
    'reserve.form.name': {
        [I18N.ZH]: '联系人',
        [I18N.EN]: 'Contact',
        [I18N.JP]: '連絡先',
    },
    'reserve.form.name.placeholder': {
        [I18N.ZH]: '请输入联系人姓名',
        [I18N.EN]: 'Please enter your contact name',
        [I18N.JP]: '連絡先の名前を入力してください',
    },
    'reserve.form.phone': {
        [I18N.ZH]: '联系电话',
        [I18N.EN]: 'Contact number',
        [I18N.JP]: '電話番号',
    },
    'reserve.form.phone.placeholder': {
        [I18N.ZH]: '请填写国家码+电话号码',
        [I18N.EN]: 'Please fill in the country code + phone number',
        [I18N.JP]: '国番号+電話番号を入力してください',
    },
    'reserve.form.email': {
        [I18N.ZH]: '电子邮箱',
        [I18N.EN]: 'Email',
        [I18N.JP]: 'メール',
    },
    'reserve.form.email.placeholder': {
        [I18N.ZH]: '请输入电子邮箱',
        [I18N.EN]: 'Please enter your email',
        [I18N.JP]: 'メールアドレスを入力してください',
    },
    'reserve.form.notes': {
        [I18N.ZH]: '其他',
        [I18N.EN]: 'Other',
        [I18N.JP]: 'その他',
    },
    'reserve.form.notes.placeholder': {
        [I18N.ZH]: '您的定制化需求',
        [I18N.EN]: 'Your customized needs',
        [I18N.JP]: 'カスタマイズされたニーズ',
    },
    'reserve.policy.title': {
        [I18N.ZH]: '入住政策：',
        [I18N.EN]: 'Check-in policy',
        [I18N.JP]: 'チェックインポリシー',
    },
    'reserve.policy.desc1': {
        [I18N.ZH]: '2023年12月1日起开放入住预定，5晚起订',
        [I18N.EN]: 'Open for reservation from December 1, 2023, minimum 5 nights',
        [I18N.JP]: '2023年12月1日から予約可能、最低5泊',
    },
    'reserve.policy.desc2': {
        [I18N.ZH]: '入住时间: 14点后；退房时间: 11点前',
        [I18N.EN]: 'Check-in time: after 14:00; Check-out time: before 11:00',
        [I18N.JP]: 'チェックイン時間：14:00以降；チェックアウト時間：11:00以前',
    },
    'reserve.policy.desc3': {
        [I18N.ZH]: '入住人数: 最多 15 位住客 (含最多 12 位成人住客，以及孩童、婴儿、随行人员)',
        [I18N.EN]: 'Number of guests: up to 15 guests (including up to 12 adults, as well as children, infants, and accompanying personnel)',
        [I18N.JP]: 'ゲスト数：最大15名（大人12名、子供、幼児、付添人を含む）',
    },
    'reserve.policy.desc4': {
        [I18N.ZH]: '入住人数必须为确认函所示人数，若未经协商超出约定人数，将额外收取人员费用 (超员费为＄300/晚/人，含早餐)',
        [I18N.EN]: 'The number of guests must be the number shown in the confirmation letter. If the number of guests exceeds the agreed number without consultation, an additional personnel fee will be charged (overcrowding fee is $300/night/person, including breakfast)',
        [I18N.JP]: 'ゲスト数は確認書に表示されている数でなければなりません。相談なしにゲスト数が合意数を超える場合は、追加の人員料金が請求されます（超過料金は＄300/泊/人、朝食付き）',
    },
    'reserve.policy.desc5': {
        [I18N.ZH]: '全屋室内禁止吸烟',
        [I18N.EN]: 'No smoking in the whole house',
        [I18N.JP]: '全館禁煙',
    },
    'reserve.policy.desc6': {
        [I18N.ZH]: '谢绝携带宠物入住',
        [I18N.EN]: 'No pets allowed',
        [I18N.JP]: 'ペット禁止',
    },

    'reserve.form.name.error': {
        [I18N.ZH]: '请输入联系人姓名',
        [I18N.EN]: 'Please enter your contact name',
        [I18N.JP]: '連絡先の名前を入力してください',
    },
    'reserve.form.phone.error': {
        [I18N.ZH]: '请输入联系电话',
        [I18N.EN]: 'Please enter your contact number',
        [I18N.JP]: '連絡先の電話番号を入力してください',
    },
    'reserve.form.email.error': {
        [I18N.ZH]: '请输入电子邮箱',
        [I18N.EN]: 'Please enter your email',
        [I18N.JP]: 'メールアドレスを入力してください',
    },
    'reserve.form.success.cpt': {
        [I18N.ZH]: '提交成功',
        [I18N.EN]: 'Submit successfully',
        [I18N.JP]: '正常に提出されました',
    },
    'reserve.form.success.desc': {
        [I18N.ZH]: '我们的管家将在1个工作日内与您联系',
        [I18N.EN]: 'Our butler will contact you within 1 working day',
        [I18N.JP]: '私たちの執事は1営業日以内にあなたに連絡します',
    }
}
