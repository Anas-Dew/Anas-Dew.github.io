window.onload = setTimeout(function() { feedbackalert();}, 20000);

function feedbackalert() {

        if (confirm("Got a minute?. Please give a feedback.") == true) {
            alert('redirecting to feedback form');
            window.open('https://forms.gle/3zyEzz4duYUgsVSn8', "_newtab" );   
        } else {
            alert('Okey, next time..!');
        }
};