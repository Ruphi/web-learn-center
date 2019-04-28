const div = document.createElement('div');
div.id = 'app';
div.innerHTML = '正在请求数据...';
document.body.appendChild(div);

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    console.log(xhr.status);
    console.log(xhr.response);
    if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById('app').innerHTML = '请求成功，<br/>'+ JSON.stringify(xhr.response);
    }
};
xhr.open('GET', './data.json');
xhr.send('');