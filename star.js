let star = '';
let leng = 5;

/*
* 별찍기 - 기본
for (i = 0; i < leng; i++) {
    for (j = 0; j <= i; j++) {
        star += '*';
    }
    star += '\n';
}
*/

/*
* 별찍기 - 뒤집기
for (i = 0; i < leng; i++) {
    for (j = leng; j > i; j--) {
        star += '*';
    }
    star += '\n';
}
*/

/*
* 별찍기 - 기본 역방향
for (i = 0; i < leng; i++) {
    for (j = leng - 1; j > i; j--) {
        star += ' ';
    }
    for (j = 0; j <= i; j++) {
        star += '*';
    }
    star += '\n';
}
*/

/*
* 별찍기 - 뒤집기 역방향
for (i = 0; i < leng; i++) {
    for (j = 0; j <= i; j++) {
        star += ' ';
    }
    for (j = leng; j > i; j--) {
        star += '*';
    }
    star += '\n';
}
*/

/*
* 별찍기 정삼각형
for (i = 0; i < leng; i++) {
    for (j = leng - 1; j > i; j--) {
        star += ' ';
    }
    for (j = 0; j <= i; j++) {
        star += '*';
    }
    for (j = 1; j <= i; j++) {
        star += '*';
    }
    star += '\n';
}
*/

/*
*별찍기 역삼각형
for (i = 0; i < leng; i++) {
    for (j = 0; j <= i; j++) {
        star += ' ';
    }
    for (j = leng; j > i; j--) {
        star += '*';
    }
    for (j = leng - 1; j > i; j--) {
        star += '*';
    }
    star += '\n';
}
*/

/*
*별찍기 다이아 몬드
*/
for (i = 0; i < leng; i++) {
    for (j = leng - 1; j > i; j--) {
        star += ' ';
    }
    for (j = 0; j <= i; j++) {
        star += '*';
    }
    for (j = 1; j <= i; j++) {
        star += '*';
    }
    star += '\n';
}
for (i = 0; i < leng - 1; i++) {
    for (j = 0; j <= i; j++) {
        star += ' ';
    }
    for (j = leng - 1; j > i; j--) {
        star += '*';
    }
    for (j = leng - 2; j > i; j--) {
        star += '*';
    }
    star += '\n';
}

console.log(star);

