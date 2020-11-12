 const quiz = [{
   question:'2020年、World Champion Shipで優勝したチームは？',
   answers:['G2','Suning','TES','DWG'  ],
   correct: 'DWG'
 },
 {
  question:'2017年8/23にリリースされたチャンピオンの名前は？',
  answers:['オレリオン・ソル','キヤナ','オーン','ニーコ'  ],
  correct: 'オーン'
},
{
  question:'ラムスのultの名前は？',
  answers:['ドシンドシン','ゴロンゴロン','ドスンドスン','ドカンドカン'  ],
  correct: 'ドスンドスン'
},
{
  question:'ドクター・ムンドのファーストネームは？',
  answers:['エドムンド','サームンド','アルムンド','ワームンド'  ],
  correct: 'エドムンド'
},
{
  question:'ヌヌは開発者の（　）の名前',
  answers:['ネコ','ハムスター','イヌ','ウサギ'  ],
  correct: 'イヌ'
},
{
  question:'アッシュの名前は、Riot共同創業者の（　）の名前が由来',
  answers:['妹','母','奥さん','姉'  ],
  correct: '奥さん'
},
{
  question:'リフトスカトルの最初の出現時間は？',
  answers:['3:00','3:15','2:50',':2:55' ],
  correct: '3:15'
},
{
  question:'アッシュの夫は？',
  answers:['ガレン','ダリウス','トリンダメア','ジェイス' ],
  correct: 'トリンダメア'
},
{
  question:'ヤスオのultの名前は？',
  answers:['風林火山','獅子歌歌','羅生門','鬼哭啾々' ],
  correct: '鬼哭啾々'
},
{
  question:'均衡の守人でないものは？',
  answers:['ゼド','シェン','アカリ','ケネン' ],
  correct: 'ゼド'
},
 ];

 const quizLength = quiz.length;
 let quizIndex = 0;

//スコア表示
let score = 0;
 
 
const button=document.getElementsByTagName('button');
const buttonLength = button.length;
//関数でまとめる！！　const ~ ()=>{}
//クイズの問題文　選択肢を定義
const setupQuiz = ()=> {
 console.log(document.getElementById('js-question').textContent= quiz[quizIndex].question);

let buttonIndex=0;

while(buttonIndex < buttonLength){
  button[buttonIndex].textContent =quiz[quizIndex].answers[buttonIndex]; 
   buttonIndex ++;}
}
setupQuiz();

const clickHandler = (e)=>{ if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解!');
    score++;
  }
    else{
    window.alert('不正解!'); }

     quizIndex++;
     if(quizIndex < quizLength){
　　　setupQuiz();

     }else{
       window.alert('終了！！あなたの正解数は' + score + '/'+ quizLength + 'です！');

     }
};

let handlerIndex = 0;

while(handlerIndex < buttonLength){
button[handlerIndex].addEventListener('click',(e)=>{
  clickHandler(e);  
});
handlerIndex++;
}
//ボタンをクリックしたら正誤判定

