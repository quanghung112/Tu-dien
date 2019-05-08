var dem = 0;

function Doi() {
    if (dem % 2 == 0) {
        document.getElementById('Language1').innerHTML = 'Tieng viet';
        document.getElementById('Language2').innerHTML = 'Tieng anh';
    } else {
        document.getElementById('Language1').innerHTML = 'Tieng anh';
        document.getElementById('Language2').innerHTML = 'Tieng viet';
    }
    dem++;
    document.getElementById('Input').value='';
    document.getElementById('Output').value='';
}

function Dich() {
    let Eng = ['japan', 'south korea', 'employee', 'conduct', 'china', 'begin', 'building', 'find'];
    let Vie = ['Nhat Ban', 'Han Quoc', 'nhan vien', 'san pham', 'trung quoc', 'bat dau', 'toa nha', 'tim'];
    let word = document.getElementById('Input').value;
    let a = false;
    for (i = 0; i < Eng.length; i++) {
        if (dem % 2 == 0) {
            if (word == Eng[i]) {
                document.getElementById('Output').value = Vie[i];
                a = true;
            }
        }else {
            if (word == Vie[i]) {
                document.getElementById('Output').value = Eng[i];
                a = true;
            }
        }
    }
    if (a == false){
        alert('Tu ban tim kiem khong co');
        document.getElementById('Input').value='';
    }
}


