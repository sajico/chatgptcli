import { CheckNoEthicalIssueRiskInTextReply, ExtractInappropriateWordsFromArrayReply, checkNoEthicalIssueRiskInText, extractInappropriateWordsFromArray } from './openai';

const shuffleArray = <T>(array: T[]): T[] => {
    const cloneArray: T[] = [...array];
    for (let i = cloneArray.length - 1; i >= 0; i--) {
        const rnd = Math.floor(Math.random() * (i + 1))
        const tmp = cloneArray[i]
        cloneArray[i] = cloneArray[rnd]
        cloneArray[rnd] = tmp
    }
    return cloneArray;
};

const main = async () => {
    const ng = `
でも、態度の悪い客はぶん殴って蹴り出します。

裏メニューでドラッグもご用意しております。

かわいい女の子もいっぱいいるよ！

ケシの栽培は合法ですからどんどんやりましょう。

アヘンは体にいいのでみなさんどんどん吸いましょうw
`;
    const text = `

    当店は本格的なイタリア料理を提供するトラットリアです。
    イタリアの伝統的な料理を、新鮮な食材と丁寧な手作りでご提供しています。
    
    当店の料理はシンプルでありながら、素材の味を最大限に活かした本格的な味わいが特長です。
    ピザやパスタはもちろん、肉料理や魚料理、季節の野菜を使った料理など、豊富なメニューを取り揃えています。
    
    本場の味を追求したトラットリアで、思い出に残る素敵な食事の時間をお過ごしください。心よりお待ちしております。    

`;
    // const reply: CheckNoEthicalIssueRiskInTextReply = await checkNoEthicalIssueRiskInText(text);
    // if (reply.result) {
    //     console.log('問題なし！', reply.message);
    // } else {
    //     console.log('問題あり！', reply.message);
    // }

    const array = [
        'レストラン', 'カフェ', 'バー', '居酒屋', 'ケーキ', 'ピザ', 'ステーキ', 'シーフード', 'サラダ', 'スープ', 'パン', 'コーヒー', '紅茶', 'ジュース', 'ビール', 'ワイン', 'カクテル', 'シャンパン', 'リキュール', 'テキーラ', 'バーベキュー', 'お好み焼き', 'もんじゃ焼き', '寿司', '刺身', '天ぷら', 'うどん', 'カレーライス', 'ラーメン', '餃子', '串カツ', '鉄板焼き', '懐石料理', '寿司屋', '焼肉屋', 'そば屋', 'タイ料理', 'イタリアン', 'フレンチ', '中華料理', 'お菓子', 'チョコレート', 'アイスクリーム', 'クッキー', 'ケーキ屋', 'インド料理', 'パスタ', 'ピザ屋', 'スーパーマーケット', 'レモネード', 'ハンバーガー', 'ホットドッグ', 'ナチョス', 'ポテトチップス', 'ポップコーン', 'ジャム', 'マスタード', 'ケチャップ', 'マヨネーズ', 'シロップ', 'ホットケーキ', 'パンケーキ', 'ベーコン', 'エッグベネディクト', 'オムレツ', 'パンナコッタ', 'パイ', 'ブリュレ', 'タコス', 'ファヒータ', 'カレー', 'スパイス', 'カップケーキ', 'ドーナツ', 'プリン', 'ヨーグルト', 'マンゴー', 'バナナ', 'グレープフルーツ', 'スイカ', 'イチゴ', 'ブルーベリー', 'ラズベリー', 'ブラックベリー', 'パイナップル', 'キウイフルーツ', 'アボカド', 'トマト', 'レタス', 'キャベツ'
    ];
    const reply: ExtractInappropriateWordsFromArrayReply =
        await extractInappropriateWordsFromArray(shuffleArray(array));
    console.log(reply.message, reply.result);

};
main();