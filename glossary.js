const GLOSSARY = {
  "YPP": {
    term: "YPP（YouTube Partner Program）",
    desc: "YouTubeのパートナープログラム。収益化の申請に必要な条件は「チャンネル登録者1,000人以上」かつ「過去12ヶ月の総再生時間4,000時間以上」または「過去90日間のショート動画視聴回数1,000万回以上」。審査通過後にAdSense広告収益が得られる。",
    category: "収益化"
  },
  "CPM": {
    term: "CPM（Cost Per Mille）",
    desc: "広告1,000回表示あたりの広告費用。広告主が支払う単価の指標。ジャンルや視聴者属性によって大きく差があり、金融・ビジネス系は高CPM（¥500〜¥2,000）、エンタメ・ゲーム系は低CPM（¥100〜¥400）傾向にある。",
    category: "広告指標"
  },
  "RPM": {
    term: "RPM（Revenue Per Mille）",
    desc: "1,000回再生あたりのクリエイターの実際の収益。CPMの45%がYouTubeに取られ、残り55%がクリエイター取り分。RPM = CPM × 0.55 × 広告表示率。実際の手取り指標として最重要。",
    category: "広告指標"
  },
  "CTR": {
    term: "CTR（Click Through Rate）",
    desc: "サムネイルのクリック率。「クリック数 ÷ インプレッション数 × 100」で算出。業界平均は2〜10%。CTRが高いほどアルゴリズムに評価され、オススメ動画に表示されやすくなる。サムネイルとタイトルの組み合わせが鍵。",
    category: "動画指標"
  },
  "AVD": {
    term: "AVD（Average View Duration）",
    desc: "平均視聴時間。動画の長さに対して視聴者がどれだけ見続けたかを示す。視聴維持率とも呼ぶ。50%以上が優秀、30%以下は改善が必要なサイン。最初の15秒で視聴者を掴めるかどうかが最大のポイント。",
    category: "動画指標"
  },
  "インプレッション": {
    term: "インプレッション",
    desc: "サムネイルがYouTube上に表示された回数。ホーム画面・検索結果・関連動画などへの露出数。インプレッション数 × CTR = クリック数（視聴数）という関係。アルゴリズムがどれだけ動画を推薦しているかの指標。",
    category: "動画指標"
  },
  "AdSense": {
    term: "AdSense（グーグルアドセンス）",
    desc: "Googleが提供する広告配信サービス。YouTubeの広告収益はAdSenseアカウントを通じて支払われる。YPP審査通過後にAdSenseと紐づけが必要。収益の支払いは月ごとで、¥8,000（$100）以上になった翌月に振り込まれる。",
    category: "収益化"
  },
  "ロングテールキーワード": {
    term: "ロングテールキーワード",
    desc: "検索ボリュームは小さいが競合が少ない複合キーワード。例：「YouTube」より「顔出しなし YouTube スクリーンキャスト 稼ぎ方」など。新規チャンネルはまずロングテールを狙い、登録者を増やしてから競合の強いビッグキーワードに挑戦するのが定石。",
    category: "SEO"
  },
  "SEO": {
    term: "SEO（Search Engine Optimization）",
    desc: "YouTube検索で上位表示されるための最適化戦略。タイトル・説明文・タグへのキーワード挿入、サムネイルのCTR向上、視聴維持率の改善が主な施策。YouTubeはGoogleの子会社のため、Google検索にも動画が表示されることがある。",
    category: "SEO"
  },
  "スクリーンキャスト": {
    term: "スクリーンキャスト",
    desc: "PCやスマホの画面を録画しながらナレーションを入れる動画形式。顔出し不要で最も手軽に始められる手法。解説系・チュートリアル系・ソフトウェアレビュー系に適している。無料ツール：OBS Studio、QuickTime Player（Mac）。",
    category: "制作手法"
  },
  "ボイスオーバー": {
    term: "ボイスオーバー",
    desc: "映像に後からナレーション音声を重ねる手法。顔出しなし動画の基本スキル。良いマイクと防音環境が音質を左右する。AIボイス（VOICEVOX・COEIROINK等）を使えば声出しも不要になる。",
    category: "制作手法"
  },
  "エンドスクリーン": {
    term: "エンドスクリーン",
    desc: "動画の最後20秒に表示できるUI要素。関連動画・チャンネル登録ボタン・外部リンクを設置できる。登録者増加・再生回数の連鎖に有効。必ず全動画に設定すること。最低動画長さは25秒以上が条件。",
    category: "チャンネル運営"
  },
  "カード": {
    term: "カード（情報カード）",
    desc: "動画の再生中に表示できる小さな通知UI。関連動画・投票・外部リンクを挿入できる。視聴者が離脱しそうなタイミング（視聴維持率が下がるポイント）に差し込むと効果的。",
    category: "チャンネル運営"
  },
  "バイラル": {
    term: "バイラル（Viral）",
    desc: "動画がSNS・口コミで爆発的に広まる現象。狙って起こすのは難しいが、感情を動かすコンテンツ（驚き・共感・笑い）や「知らなかった！」系の情報が拡散されやすい。1本のバイラル動画がチャンネル全体の登録者を急増させることがある。",
    category: "成長戦略"
  },
  "アルゴリズム": {
    term: "アルゴリズム（YouTube推薦アルゴリズム）",
    desc: "YouTubeが動画をオススメする仕組み。主に「CTR × 視聴維持率 × エンゲージメント（いいね・コメント・シェア）」を総合評価して推薦量を決める。アップロード直後の48時間の初速が特に重要で、その反応次第で爆発的に広まるかが決まる。",
    category: "成長戦略"
  },
  "視聴維持率": {
    term: "視聴維持率",
    desc: "動画のどの時点で視聴者が離脱したかを示すグラフ。YouTube Studioで確認できる。「視聴維持率のグラフ」で視聴者が離脱するポイントがわかり、次の動画の改善に活かせる。冒頭15秒の維持率が最も重要。",
    category: "動画指標"
  },
  "収益化しきい値": {
    term: "収益化しきい値",
    desc: "YPP審査に必要な最低条件。①チャンネル登録者1,000人 + 過去12ヶ月4,000時間の再生時間、または②チャンネル登録者500人 + 過去90日間3本投稿 + 過去90日間ショート視聴回数300万回（ライブ配信収益化のみ）。2023年から要件緩和版も追加された。",
    category: "収益化"
  },
  "ニッチ": {
    term: "ニッチ（Niche）",
    desc: "競合が少なく特定の視聴者層に刺さる専門テーマ。「料理」より「一人暮らし社会人の5分時短レシピ」のように絞ることで、競合大手に勝てる隙間市場を見つけられる。顔出しなしYouTubeでは特にニッチ選定が成功の鍵。",
    category: "戦略"
  },
  "OBS": {
    term: "OBS Studio",
    desc: "無料・オープンソースの録画・配信ソフト。スクリーンキャスト録画、ゲーム実況、ライブ配信に使える万能ツール。Mac・Windows・Linux対応。顔出しなしYouTubeで最もよく使われる録画ソフトの一つ。",
    category: "ツール"
  },
  "VOICEVOX": {
    term: "VOICEVOX",
    desc: "無料の日本語テキスト読み上げ（TTS）ソフト。ずんだもん・春日部つむぎ等の人気キャラ音声が使え、商用利用も可能（キャラクターによって規約が異なる）。声を出したくない場合に声なし顔出しなし動画が作れる。",
    category: "ツール"
  },
  "サムネイル": {
    term: "サムネイル",
    desc: "動画の顔となる静止画像。CTRを左右する最重要要素の一つ。推奨サイズは1280×720px。「テキスト・顔（またはキャラ）・感情的な要素」の三要素が基本。Canva・Photoshopで作成できる。顔出しなしの場合はキャラや図解でCTRを上げる工夫が必要。",
    category: "制作技術"
  },
  "タグ": {
    term: "タグ（動画タグ）",
    desc: "動画のメタデータとして設定するキーワード群。以前ほど重要度は高くないが、チャンネルのカテゴリをアルゴリズムに伝える効果はある。タイトルと説明文のキーワードの方が優先度が高い。関連する具体的な単語を5〜15個程度設定するのが適切。",
    category: "SEO"
  },
  "エンゲージメント": {
    term: "エンゲージメント",
    desc: "いいね・コメント・共有・保存などの視聴者アクション総称。エンゲージメント率が高い動画はアルゴリズムに好まれ推薦されやすくなる。コメントに返信することでエンゲージメントが増え、コミュニティが育つ。",
    category: "動画指標"
  },
  "アフィリエイト": {
    term: "アフィリエイト（副収入）",
    desc: "動画説明欄に商品リンクを貼り、購入されると報酬が入る収益モデル。Amazon Associates・楽天・A8.net等が代表的。広告収益が少ない初期でも収益化できる手段。紹介した商品と動画テーマの関連性が高いほど購入率が上がる。",
    category: "収益化"
  },
  "ショート動画": {
    term: "ショート動画（YouTube Shorts）",
    desc: "60秒以内の縦型短尺動画。TikTokに対抗したYouTube機能。通常動画より早くインプレッションを稼ぎやすく、チャンネル立ち上げ期の認知拡大に有効。ただし広告単価が低いため収益化よりも登録者獲得ツールとして使うのが有効。",
    category: "制作手法"
  },
  "再生リスト": {
    term: "再生リスト",
    desc: "関連動画をまとめるチャンネル機能。視聴者が連続視聴するため総再生時間が伸び、YPP申請の4,000時間達成が早まる。シリーズ物のコンテンツは必ず再生リスト化する。SEO的にも再生リストのタイトルがインデックスされる。",
    category: "チャンネル運営"
  },
  "チャンネルアート": {
    term: "チャンネルアート",
    desc: "チャンネルページ上部に表示されるバナー画像。推奨サイズは2560×1440px。チャンネルの世界観・ジャンルを一目で伝える重要な第一印象。更新頻度・テーマ・ターゲット視聴者を視覚的に表現する。",
    category: "チャンネル運営"
  },
  "キーワードリサーチ": {
    term: "キーワードリサーチ",
    desc: "動画テーマ選定のための検索需要調査。TubeBuddy・vidIQ・Googleキーワードプランナーを使い、「検索ボリュームが高く競合が少ないキーワード」を探す作業。最初の10〜30本はリサーチに基づきテーマを決めることが再生数の早期改善に直結する。",
    category: "SEO"
  },
  "インフルエンサー": {
    term: "インフルエンサー戦略",
    desc: "他のYouTuberやSNSインフルエンサーとのコラボで相互にフォロワーを紹介し合う成長手法。顔出しなしでも同ジャンルの類似規模チャンネルとのコラボは有効。お互いの視聴者を共有することで急速な登録者増加が見込める。",
    category: "成長戦略"
  }
};

function showGlossary(key) {
  const item = GLOSSARY[key];
  if (!item) return;

  let modal = document.getElementById("glossary-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "glossary-modal";
    modal.innerHTML = `
      <div id="glossary-overlay"></div>
      <div id="glossary-popup">
        <div id="glossary-popup-category"></div>
        <h3 id="glossary-popup-term"></h3>
        <p id="glossary-popup-desc"></p>
        <button id="glossary-close">閉じる</button>
      </div>
    `;
    document.body.appendChild(modal);
    document.getElementById("glossary-overlay").addEventListener("click", closeGlossary);
    document.getElementById("glossary-close").addEventListener("click", closeGlossary);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeGlossary(); });
  }

  document.getElementById("glossary-popup-category").textContent = item.category;
  document.getElementById("glossary-popup-term").textContent = item.term;
  document.getElementById("glossary-popup-desc").textContent = item.desc;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeGlossary() {
  const modal = document.getElementById("glossary-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function initGlossaryLinks() {
  document.querySelectorAll("[data-term]").forEach((el) => {
    el.addEventListener("click", () => showGlossary(el.dataset.term));
  });
}

document.addEventListener("DOMContentLoaded", initGlossaryLinks);
