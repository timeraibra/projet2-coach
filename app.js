window.addEventListener('load', () => {
    let myRequest = new Request("./data.json");
    fetch(myRequest)
        .then(res => res.json()) 
        .then(function(data){
            var liedonner = ['#work_actuel','#work_precedent','#play_actuel','#play_precedent','#study_actuel','#study_precedent','#exercise_actuel',
            '#exercise_precedent','#social_actuel','#social_precedent', '#self_actuel', '#self_precedent']
            var i = 0
            for (let index = 0; index < liedonner.length; index += 1) {
                document.querySelector(liedonner[index]).innerHTML =data[i].timeframes.daily.current + 'hrs';
                document.querySelector(liedonner[index + 1]).innerHTML ="Last day -" + data[i].timeframes.daily.previous + 'hrs';
                index = index + 1;
                i = i + 1;
            }
           
            document.querySelector('#daily').addEventListener('click', () => {
            i = 0;
            for (let index = 0; index < liedonner.length; index += 1) {
                document.querySelector(liedonner[index]).innerHTML =data[i].timeframes.daily.current + 'hrs';
                document.querySelector(liedonner[index + 1]).innerHTML ="Last day -" + data[i].timeframes.daily.previous + 'hrs';
                index = index + 1;
                i = i + 1;
            }
            });
            document.querySelector('#weekly').addEventListener('click', () => {
                 i = 0;
                for (let index = 0; index < liedonner.length; index += 1) {
                    document.querySelector(liedonner[index]).innerHTML =data[i].timeframes.weekly.current + 'hrs';
                    document.querySelector(liedonner[index + 1]).innerHTML ="Last week -" + data[i].timeframes.weekly.previous + 'hrs';
                    index = index + 1;
                    i = i + 1;
                }
            });
            document.querySelector('#monthly').addEventListener('click', () => {
                i = 0;
                for (let index = 0; index < liedonner.length; index += 1) {
                    document.querySelector(liedonner[index]).innerHTML =data[i].timeframes.monthly.current + 'hrs';
                    document.querySelector(liedonner[index + 1]).innerHTML ="Last month -" + data[i].timeframes.monthly.previous + 'hrs';
                    index = index + 1;
                    i = i + 1;
                }
            });
        });
})


