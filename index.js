import fs from 'fs';
// Erstelle einen Unterordner innerhalb deines Projektordners. In diesem Ordner soll die Datei angelegt werden.

let content = 'File was created';
fs.writeFile('./assets/anotherfile.txt', content, err => {
    if (err) {
        console.error(err);
    }
});
//Schreibe eine Funktion, die einen Parameter annimmt.


const myFunction = (filePath, content) => {
    // Nun prüfe: Wurde die Datei bereits erstellt? Ist das NICHT der Fall, erstelle sie mithilfe des File Systems von Node.js.    
    /*
    In diese Datei soll der Inhalt des Parameters geschrieben werden. Denk dran, diesen auch mit zu liefern, wenn du die Funktion aufrufst. 
    Existiert die Datei bereits? Dann füge der bereits bestehenden Datei den Inhalt des Parameters in einer neuen Zeile hinzu.
    */
    if (fs.existsSync(filePath)) {
        console.log('File exists! We will append the content!');
        fs.appendFile(filePath, (('\n' + '\n') + content), (err) => {
            if (err) console.log(err);
        });
    } else {
        console.log('File doesn t exist! We will create it and write the content!')
        fs.writeFile(filePath, content, err => {
            if (err) {
                console.error(err);
            }
        });
    }
}

myFunction('./assets/myfile.txt', 'Test 1');
myFunction('./assets/myfile.txt', 'Test 2');
myFunction('./assets/testfile.txt', 'New File was created!');