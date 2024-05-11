const fs = require('fs');

// Run file with node metricas.js
// apunte = note

const RELATIVE_PATH_OF_NOTES_FOLDER = 'apuntes/'

fs.readdir(RELATIVE_PATH_OF_NOTES_FOLDER, (err, listOfNoteFiles) => {
    if (err) {
        console.error('Error al leer directorio ', err)
        return;
    }

    console.table(listOfNoteFiles);

    const notes = []
    listOfNoteFiles.forEach((nameOfNoteFile, index) => {
        const RELATIVE_PATH_OF_NOTE_FILE = `${RELATIVE_PATH_OF_NOTES_FOLDER}${nameOfNoteFile}`;

        fs.readFile(RELATIVE_PATH_OF_NOTE_FILE, 'utf-8', (err, noteContent) => {
            if (err) {
                console.error('Error al leer apunte (note) ', err);
            } else {
                const noteContentPerLine = noteContent.split(/\r\n|\n/);

                let noteTitle = noteContentPerLine[0]
                noteTitle = [...noteTitle]
                noteTitle.shift()
                noteTitle = noteTitle.join('').trim()

                let formattedDate = noteContentPerLine[1]
                formattedDate = formattedDate.split('_').join('/')

                let noteYear = noteContentPerLine[1].split('_').at(-1)

                const note = {
                    title: noteTitle,
                    formattedDate,
                    date: formattedDate,
                    year: noteYear,
                    contentPerLine: noteContentPerLine,
                    content: noteContent,
                    RELATIVE_PATH: RELATIVE_PATH_OF_NOTE_FILE
                }

                notes.push(`\t- [${note.title}](${note.RELATIVE_PATH.split(' ').join('%20')})`)

                const isThisTheLastNote = (listOfNoteFiles.length - 1) === index;
                if (isThisTheLastNote) {
                    const header = "- [Introducción](README)\n- [Especificaciones](info.md)\n- Apuntes"
                    const content = `${header}\n${notes.join('\n')}`
                    // Now the whole notes are in notes array
                    fs.appendFile('_sidebar.md', content, (err) => {
                        if (err) {
                            return console.error('ERROR ', err)
                        } 
                        return console.info(':D')
                    });
                }
            }
        })
    })
});
