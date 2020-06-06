var P1 = (n1, ap1, ed1) => {
  let st = "";
  st = st.concat("Hola mi nombre es ", n1, " ", ap1, " y mi edad es ", ed1);
  return st;
};

function P2(...theArgs) {
  let num = 0;
  for (let args of theArgs) {
    num += args * args * args;
  }
  return num;
}

function P3(elem) {
  return typeof elem;
}

function P4(...theArgs) {
  let num = 0;
  for (let args of theArgs) {
    num += args;
  }
  return num;
}

function P5(array) {
  let aux = [];
  for (let a of array) {
    if (typeof a == "string") {
      aux.push(a);
    }
  }
  return aux;
}

function P6(arr) {
  //primero menor luego mayor
  let aux = [arr[0], arr[0]];
  for (const a of arr) {
    if (a < aux[0]) aux[0] = a;
    else if (a > aux[1]) aux[1] = a;
  }
  return aux;
}

function P7(arr) {
  let str = "";
  str = str.concat(
    "(",
    arr.slice(0, 3).join(""),
    ") ",
    arr.slice(3, 6).join(""),
    "-",
    arr.slice(6, 10).join("")
  );
  return str;
}

function P8(arr) {
  let naux = 0;
  let aux = [];
  for (const a2 of arr) {
    naux = a2[0];
    for (const a of a2) {
      if (a > naux) naux = a;
    }
    aux.push(naux);
  }
  return aux;
}

function P9(str, char) {
  let BFront = true;
  let BBack = true;
  let it = 0;
  let aux = [,];
  while (BBack || BFront) {
    if (BFront && str.charAt(it) == char) {
      aux[0] = it;
      BFront = false;
    }
    if (BBack && str.charAt(str.length - it) == char) {
      aux[1] = str.length - it;
      BBack = false;
    }
    it++;
  }
  return aux;
}

function P10(Obj) {
  let aux = [];
  let aux2;
  for (const key in Obj) {
    aux2 = [];
    aux2.push(key);
    aux2.push(Obj[key]);
    aux.push(aux2);
  }
  return aux;
}

function P11(arr) {
  let aux = 0;
  for (const a of arr) {
    aux += a["budget"];
  }
  return aux;
}

function P12(arr) {
  let aux = [];
  for (const a of arr) {
    aux.push(a["name"]);
  }
  return aux;
}

function P13(Obj) {
  let aux = [];
  let aux2;
  for (const key in Obj) {
    aux2 = [];
    aux2.push(key);
    aux2.push(Obj[key]);
    aux.push(aux2);
  }
  return aux;
}

function P14(num) {
  let aux = 0;
  for (let i = 0; i <= num; i++) {
    aux += i * i;
  }
  return aux;
}

function P15(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr.length;
  }
  return arr;
}

function P16(num) {
  let aux = [];
  for (let i = num; i >= 0; i--) {
    aux.push(i);
  }
  return aux;
}

function P17(arr) {
  let num = P6(arr);
  return Math.abs(num[1] - num[0]);
}

function P18(array) {
  let aux = [];
  for (let a of array) {
    if (typeof a == "number") {
      aux.push(a);
    }
  }
  return aux;
}

function P19(num, rep) {
  let aux = [];
  for (let i = 0; i < rep; i++) {
    aux.push(num);
  }
  return aux;
}

String.prototype.vreplace = P20;

function P20() {
  return this.replace(/[aeiou]/g, "u").replace(/[AEIOU]/g, "U");
}

function P21(str) {
  let aux = str.replace(/[,./]/g, "").split(/[ ]/);
  for (let i = 0; i < aux.length; i++) {
    if (aux[i] == "nemo") {
      return "Encontre a nemo en la palabra " + (i + 1);
    }
  }
}

function P22(str) {
  str = str.split(/[ ]/g);
  let reg = /[aeiou]([^aeiou]*?)(?= |$)/;
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    console.log(str[i][str[i].search(reg)]);
    str[i][str[i].search(reg)]="X";
  }
  console.log(str);
  return 0;
}
