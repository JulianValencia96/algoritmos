function NotaFinal(){

    let x = parseInt(document.getElementById('x').value);
    let y = parseInt(document.getElementById('y').value);
    let z = parseInt(document.getElementById('z').value);

    let ef = parseInt(document.getElementById('ef').value);
    let tf = parseInt(document.getElementById('tf').value);

    let V1 = ((x+y+z)/3) * 55 / 100;
    let V2 = ef * 30 / 100;
    let V3 = tf * 15 / 100;

    let Nf = V1 + V2 + V3;

    document.write("Nota: "+Nf);

}