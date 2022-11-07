// GLOBAL

function getEle(id) {
    return document.getElementById(id);
}

// Đầu vào: Mảng được nhập vào từ input
var listNumber = [];
// Push Number onclick vào mảng
getEle("btnNumber").onclick = function () {
    // console.log(123);
    var txtNumber = getEle("txtNumber").value * 1;
    listNumber.push(txtNumber);
    // console.log(listNumber);

    var rs = "👉";
    rs += "Các số đã nhập vào là: [" + listNumber + "]";
    getEle("infoNumber").innerHTML = rs;

}


// 1. Tính tổng các số dương
/**
 * Đầu vào: Mảng được nhập vào từ input
 * Xử lý: 
 *      + Chạy vòng lập từ index 0 đến index cuối cùng của mảng
 *      + Xét điều kiện nếu giá trị tại index thứ i > 0: cộng vào tổng;
 * Đầu ra: In kết quả tổng
 */
function tinhTong() {
    var tong = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            tong = tong + listNumber[i];
        }
    }

    var rs = "👉";
    rs += "Tổng số dương: " + tong;
    getEle("infoResult").innerHTML = rs;
}


// function del() {
//     listNumber[] = listNumber[];
// }


// 2. Đếm các số dương (không tính số 0)
/**
 * Đầu vào: Mảng được nhập vào từ input
 * Xử lý: 
 *      + Chạy vòng lập từ index 0 đến index cuối cùng của mảng
 *      + Xét điều kiện nếu giá trị tại index thứ i > 0: cộng vào count;
 * Đầu ra: In kết quả count
 */
function demSo() {
    var count = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (0 < listNumber[i]) {
            count++;
        }
    }
    var rs = "👉";
    rs += "Số dương: " + count;
    getEle("infoResult").innerHTML = rs;
}


// 3. Tìm số nhỏ nhất trong mảng
/**
 * Đầu vào: Mảng được nhập vào từ input
 * Xử lý: 
 *      + Cho min = giá trị tại index 0
 *      + Chạy vòng lập từ index 1 đến index cuối cùng của mảng
 *      + Xét điều kiện nếu giá trị tại index thứ i > min: gán giá trị đó vào min
 * Đầu ra: In kết quả min
 */
function soNhoNhat() {
    var min = listNumber[0];
    for (var i = 1; i < listNumber.length; i++) {
        if (listNumber[i] < min) {
            min = listNumber[i];
        } else {
            min = min;
        }
    }
    var rs = "👉";
    rs += "Số nhỏ nhất: " + min;
    getEle("infoResult").innerHTML = rs;
}


// 4. Tìm số dương nhỏ nhất trong mảng
/**
 * Đầu vào: Mảng được nhập vào từ input
 * Xử lý: 
 *      + Tạo mảng số dương, push các số có giá trị > 0 vào mảng này.
 *      + Kiểm tra:
 *          - Nếu mảng rỗng thì in ra kết quả không có số dương.
 *          - Ngược lại: đặt min = giá trị tại index 0; chạy vòng lập từ 0 đến cuối mảng, nếu giá trị < min, gán giá trị đó vào min
 * Đầu ra: In kết quả min
 */
function soDuongNN() {
    var rs = "👉";

    // Tạo mảng số dương
    var listSD = [];
    var temp = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            temp = listNumber[i];
            listSD.push(temp);
        }
    }
    // console.log(listSD);

    // Kiểm tra
    if (listSD.length == 0) {
        rs += "Không có số dương trong mảng";
    } else {
        var min = listSD[0];
        for (var j = 0; j < listSD.length; j++) {
            if (listSD[j] < min) {
                min = listSD[j];
            } else {
                min = min;
            }
        }
        rs += "Số nhỏ nhất: " + min;
    }
    getEle("infoResult").innerHTML = rs;
}


// 5. Tìm số chẳn cuối cùng trong mảng
/**
 * Đầu vào: mảng trong input
 * Xử lý:
 * 
 *      + Cách 2: cho i chạy từ 0 đến length mảng, nếu giá trị chia hết cho 2 thì gán vào biến soChanCC.
 *      + Cách 3: Tạo mảng số chẳn
 *          - Xét số nào chia hết cho 2 thì đưa vào mảng SC
 *          - gắn biến soChanCC cho số cuối cùng của mảng SC.
 * Đầu ra: in kết quả
 */
function soChan() {
    var soChanCC = 0;

    // Vòng lập ngược: chưa được
    // for (var i = (listNumber.length - 1); i >= 0; i--) {
    //     if (listNumber[i] % 2 == 1) return listNumber[i];
    //     {
    //         soChanCC = listNumber[i];
    //         break;

    //     }
    // }

    // vòng lập xuôi
    // for (var i = 0; i < listNumber.length; i++) {
    //     if (listNumber[i] % 2 == 0) {
    //         soChanCC = listNumber[i];
    //     }
    // }

    // Cách 3: Tạo mảng số chẳn
    var listSC = [];
    var temp = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] % 2 == 0) {
            temp = listNumber[i];
            listSC.push(temp);
        }
    }
    soChanCC += listSC[listSC.length - 1]

    // In kết quả
    var rs = "👉";
    rs += "Số chẵn cuối cùng: " + soChanCC;
    getEle("infoResult").innerHTML = rs;
}

// 6. Đổi chỗ.
/**
 * Đầu vào:
 *      + Mảng được nhập vào từ input
 *      + 2 vị trí đổi chỗ (số này - 1 = số index trong mảng)
 * Xử lý: 
 *      + tạo biến tạm;
 *      + gán biến tạm là số tại vị trí 1;
 *      + gán biến tại vị trí 1 là số tại vị trí 2;
 *      + gán biến tại vị trí 2 là số ở tạm;
 * Đầu ra: In kết quả mảng mới
 */
function doiCho() {
    var listChange = listNumber;
    var temp;
    var doiCho1 = getEle("doiCho1").value * 1;
    var doiCho2 = getEle("doiCho2").value * 1;

    temp = listChange[doiCho1 - 1];
    listChange[doiCho1 - 1] = listChange[doiCho2 - 1];
    listChange[doiCho2 - 1] = temp;

    var rs = "👉";
    rs += "Mảng sau khi đổi: [" + listChange + "]";
    getEle("infoDoiCho").innerHTML = rs;

}

// 7. Sắp xếp
/**
 * Đầu vào: + Mảng được nhập vào từ input
 * Xử lý:
 *      + Kiểm tra số tại index 0 đến index length - 1, so với số tại index 1 đến số có index length
 *      + Nếu số index nhỏ hơn > số index lớn hơn; thì temp = số index nhỏ hơn, số index nhỏ = số index lớn; số index lớn = temp;
 * Đầu ra: in mảng đã sắp xếp.
 */
function sapXep() {
    for (var i = 0; i < listNumber.length - 1; i++) {
        for (var j = i + 1; j < listNumber.length; j++) {
            if (listNumber[i] > listNumber[j]) {
                var temp = listNumber[i];
                listNumber[i] = listNumber[j];
                listNumber[j] = temp;
            }
        }
    }
    var rs = "👉";
    rs += "Mảng sau khi sắp xếp: [" + listNumber + "]";
    getEle("infoResult").innerHTML = rs;
}

// 8. tìm số nguyên tố đầu tiên
/**
 * Đầu vào: 
 */

// 
// Bài tập tìm số nguyên tố deadline 31/10 chưa tìm ra được giải thuật
function soNT2(x) {
    return Math.floor(Math.sqrt(x));
    // return Math.floor(x);
}

function soNguyenTo() {
    var soNT = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 2) {
            for (var j = 1; j <= soNT2(listNumber[i]); j++) {
                if ((listNumber[i] / j) != 0) {
                    // console.log(soNT);                
                    soNT = listNumber[i];
                    break;
                }
            }
        }
    }
    var rs = "👉";
    rs += "Số nguyên tố đầu tiên là: " + soNT;
    getEle("infoResult").innerHTML = rs;
}


// 9. Count số nguyên
/**
 * Đầu vào: mảng xét số nguyên được nhập vào.
 * Xử lý: 
 *      + Count = 0;
 *      + Vòng lập chạy từ 0 đến index cuối của mảng xét số nguyên
 *      + điều kiện: Number.isInteger của giá trị là true > count +1;
 * Ghi chú: kết quả của Number.isInteger là boolean
 * Đầu ra: in giá trị count
 */

// Push Number onclick vào mảng mới
var listNumberSN = [];
getEle("btnAddNum").onclick = function () {
    // console.log(123);
    var numberSN = getEle("numberSN").value * 1;
    listNumberSN.push(numberSN);
    // console.log(listNumberSN);
    var rs = "👉";
    rs += "Các số đã nhập vào là: [" + listNumberSN + "]";
    getEle("infoSoNguyen").innerHTML = rs;

}

function soNguyen() {
    var countSN = 0;
    for (var i = 0; i < listNumberSN.length; i++) {
        if (Number.isInteger(listNumberSN[i]) == true) {
            countSN++;
        }
    }
    var rs = "👉";
    rs += "Số nguyên: " + countSN;
    getEle("infoRsSoNguyen").innerHTML = rs;
}

// 10. So sánh số lượng âm và dương

/**
 * Đầu vào: mảng được nhập vào
 * Xử lý:
 *      + count số dương và count số âm
 *      + Vòng lập chạy từ 0 đến index cuối cùng
 *      + Nếu giá trị tạo vị trí nào lớn hơn 0 thì count SD ++; giá trị < 0, count SA ++;
 * Đầu ra: 
 *      + Xét nếu count SD > SA thì số dương > Số âm;
 *      + Xét nếu count SA > SD thì số âm > số dương;
 *      + nếu count SA = count SD thì số âm = số dương;
 * 
 */

// listNumber
function SoSanh() {
    var countSD = 0;
    var countSA = 0;
    var kq = "👉";
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            countSD++;
        } else if (listNumber[i] < 0) {
            countSA++;
        }
    }

    if (countSA < countSD) {
        kq += "Số dương > Số âm";
    } else if (countSD < countSA) {
        kq += "Số âm > Số dương";
    } else {
        kq += "Số âm = Số dương";
    }

    getEle("infoResult").innerHTML = kq;
}

// listNumberSN
function SoSanh2() {
    var countSD = 0;
    var countSA = 0;
    var kq = "👉";
    for (var i = 0; i < listNumberSN.length; i++) {
        if (listNumberSN[i] > 0) {
            countSD++;
        } else if (listNumberSN[i] < 0) {
            countSA++;
        }
    }

    if (countSA < countSD) {
        kq += "Số dương > Số âm";
    } else if (countSD < countSA) {
        kq += "Số âm > Số dương";
    } else {
        kq += "Số âm = Số dương";
    }

    getEle("infoRsSoNguyen").innerHTML = kq;
}