

// 常に回答数を取得して表示する
$(document).ready(function(){
    // ローカルストレージに保存しているデータをすべて取得する
    var data = [];
    for(var i=0; i<localStorage.length; i++){
        // ローカルストレージに保存しているキーを取得する
        var key = localStorage.key(i);
        // キーを元に値を取得する
        var value = localStorage.getItem(key);
        // JSON形式に変換する
        var json = JSON.parse(value);
        // 配列に追加する
        data.push(json);
    }
    // 回答数を表示する
    $("#ans_num").text(data.length);
});

// 計算ボタンを押したら、それぞれの値を取得してローカルストレージに保存する
$(document).on("click","#send_btn",function(){
    // タイムスタンプをベースにユニークキーを作成する
    let key = new Date().getTime().toString();
    // それぞれの値を取得する
    var q1 = $('input[name="q1"]:checked').val();
    var q2 = $('input[name="q2"]:checked').val();
    var q3 = $('input[name="q3"]:checked').val();
    var q4 = $('input[name="q4"]:checked').val();
    var q5 = $('input[name="q5"]:checked').val();
    var q6 = $('input[name="q6"]:checked').val();
    var q7 = $('input[name="q7"]:checked').val();

    // 全ての回答をしたか入力チェック
    if(q1 == null || q2 == null || q3 == null || q4 == null || q5 == null || q6 == null || q7 == null){
        alert("全ての質問に回答してください");
        return false;
    }
    // JSON形式で保存する
    var data = {
        "q1":q1,
        "q2":q2,
        "q3":q3,
        "q4":q4,
        "q5":q5,
        "q6":q6,
        "q7":q7
    };
    // detaをJSON形式に変換する
    var json = JSON.stringify(data);
    // ローカルストレージに保存する
    localStorage.setItem(key,json);
    
    // 回答数を表示する
    $("#ans_num").text(localStorage.length);
    // 入力した値をリセットする
    $('input[name="q1"]:checked').prop('checked', false);
    $('input[name="q2"]:checked').prop('checked', false);
    $('input[name="q3"]:checked').prop('checked', false);
    $('input[name="q4"]:checked').prop('checked', false);   
    $('input[name="q5"]:checked').prop('checked', false);
    $('input[name="q6"]:checked').prop('checked', false);
    $('input[name="q7"]:checked').prop('checked', false);
});

// ローカルストレージに保存しているデータをすべて取得して、計算する
$(document).on("click","#calc_btn",function(){
    // ローカルストレージに保存しているデータをすべて取得する
    var data = [];
    for(var i=0; i<localStorage.length; i++){
        // ローカルストレージに保存しているキーを取得する
        var key = localStorage.key(i);
        // キーを元に値を取得する
        var value = localStorage.getItem(key);
        // JSON形式に変換する
        var json = JSON.parse(value);
        // 配列に追加する
        data.push(json);
    }
    // ローカルストレージに保存しているデータをすべて削除する
    localStorage.clear();
    // それぞれの値の平均を計算する
    var sum = 0;
    for(var i=0; i<data.length; i++){
        sum += parseInt(data[i]["q1"]);
        sum += parseInt(data[i]["q2"]);
        sum += parseInt(data[i]["q3"]);
        sum += parseInt(data[i]["q4"]);
        sum += parseInt(data[i]["q5"]);
        sum += parseInt(data[i]["q6"]);
        sum += parseInt(data[i]["q7"]);
    }
    var avg = sum / (data.length * 7);
    // 少数第2位を四捨五入する
    avg = Math.round(avg * 10) / 10;

    // Q1の平均を計算する
    var sum_q1 = 0;
    for(var i=0; i<data.length; i++){
        sum_q1 += parseInt(data[i]["q1"]);
    }
    var avg_q1 = sum_q1 / data.length;
    // Q2の平均を計算する
    var sum_q2 = 0;
    for(var i=0; i<data.length; i++){
        sum_q2 += parseInt(data[i]["q2"]);
    }
    var avg_q2 = sum_q2 / data.length;
    // Q3の平均を計算する
    var sum_q3 = 0;
    for(var i=0; i<data.length; i++){
        sum_q3 += parseInt(data[i]["q3"]);
    }
    var avg_q3 = sum_q3 / data.length;
    // Q4の平均を計算する
    var sum_q4 = 0;
    for(var i=0; i<data.length; i++){
        sum_q4 += parseInt(data[i]["q4"]);
    }
    var avg_q4 = sum_q4 / data.length;
    // Q5の平均を計算する
    var sum_q5 = 0;
    for(var i=0; i<data.length; i++){
        sum_q5 += parseInt(data[i]["q5"]);
    }
    var avg_q5 = sum_q5 / data.length;
    // Q6の平均を計算する
    var sum_q6 = 0;
    for(var i=0; i<data.length; i++){
        sum_q6 += parseInt(data[i]["q6"]);
    }
    var avg_q6 = sum_q6 / data.length;
    // Q7の平均を計算する
    var sum_q7 = 0;
    for(var i=0; i<data.length; i++){
        sum_q7 += parseInt(data[i]["q7"]);
    }
    var avg_q7 = sum_q7 / data.length;
    

    // Q1の標準偏差を計算する   
    var sum_q1 = 0;
    for(var i=0; i<data.length; i++){
        sum_q1 += Math.pow(parseInt(data[i]["q1"]) - avg_q1,2);
    }
    var std_q1 = Math.sqrt(sum_q1 / data.length);
    // Q2の標準偏差を計算する
    var sum_q2 = 0;
    for(var i=0; i<data.length; i++){
        sum_q2 += Math.pow(parseInt(data[i]["q2"]) - avg_q2,2);
    }
    var std_q2 = Math.sqrt(sum_q2 / data.length);
    // Q3の標準偏差を計算する
    var sum_q3 = 0;
    for(var i=0; i<data.length; i++){
        sum_q3 += Math.pow(parseInt(data[i]["q3"]) - avg_q3,2);
    }
    var std_q3 = Math.sqrt(sum_q3 / data.length);
    // Q4の標準偏差を計算する
    var sum_q4 = 0;
    for(var i=0; i<data.length; i++){
        sum_q4 += Math.pow(parseInt(data[i]["q4"]) - avg_q4,2);
    }
    var std_q4 = Math.sqrt(sum_q4 / data.length);
    // Q5の標準偏差を計算する
    var sum_q5 = 0;
    for(var i=0; i<data.length; i++){
        sum_q5 += Math.pow(parseInt(data[i]["q5"]) - avg_q5,2);
    }
    var std_q5 = Math.sqrt(sum_q5 / data.length);
    // Q6の標準偏差を計算する
    var sum_q6 = 0;
    for(var i=0; i<data.length; i++){
        sum_q6 += Math.pow(parseInt(data[i]["q6"]) - avg_q6,2);
    }
    var std_q6 = Math.sqrt(sum_q6 / data.length);
    // Q7の標準偏差を計算する
    var sum_q7 = 0;
    for(var i=0; i<data.length; i++){
        sum_q7 += Math.pow(parseInt(data[i]["q7"]) - avg_q7,2);
    }
    var std_q7 = Math.sqrt(sum_q7 / data.length);


    // 結果を表示する
    $("#form").hide();
    $("#result").show();
    $("#result_num").text(avg);
    if(avg >= 4){
        $("#result_text").text("結果：あなたのチームは心理的安全性が高いです");
    }else{
        $("#result_text").text("結果：あなたのチームは心理的安全性が低いです");
    }
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
    labels: ["話しやすさ", "お互いのFB", "新奇歓迎", "挑戦", "助け合い", "安全性","自分らしさの発揮"],
    datasets: [{
        label: "チームの心理的安全性の平均",
        data: [avg_q1, avg_q2, avg_q3, avg_q4, avg_q5,avg_q6,avg_q7],
        backgroundColor: "rgba(67, 133, 215, 0.5)",  //グラフ背景色
        borderColor: "rgba(67, 133, 215, 1)",        //グラフボーダー色
    },
    {
        label: "チームの心理的安全性の標準偏差",
        data: [std_q1, std_q2, std_q3, std_q4, std_q5,std_q6,std_q7],
        backgroundColor: "rgba(214, 91, 91, 0.5)",  //グラフ背景色
        borderColor: "rgba(214, 91, 91, 1)",        //グラフボーダー色\\\\
    }]
    },
    options: {
    scales: {
        r: {
        max: 5,        //グラフの最大値
        min: 0,        //グラフの最小値
        ticks: {
            stepSize: 1  //目盛間隔
        }
        }
    },
    }
});
});


