const fs = require('fs');

// apunte = note

const RELATIVE_PATH_OF_NOTES_FOLDER = 'apuntes/'

// Gets the list of the notes inside the 'apuntes/' folder
fs.readdir(RELATIVE_PATH_OF_NOTES_FOLDER, (err, listOfNoteFiles) => {
    if (err) {
        console.error('Error al leer directorio ', err)
        return;
    }

    console.table(listOfNoteFiles);

    const notes = new Array(listOfNoteFiles.length)
    let notesLoaded = 0

    listOfNoteFiles.sort()
    listOfNoteFiles.forEach((nameOfNoteFile, index) => {
        const RELATIVE_PATH_OF_NOTE_FILE = `${RELATIVE_PATH_OF_NOTES_FOLDER}${nameOfNoteFile}`;

        // Gets the content of each note
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

                // We only use the title and RELATIVE_PATH attributes, but we may use the rest in the future
                const note = {
                    title: noteTitle,
                    formattedDate,
                    date: formattedDate,
                    year: noteYear,
                    contentPerLine: noteContentPerLine,
                    content: noteContent,
                    RELATIVE_PATH: RELATIVE_PATH_OF_NOTE_FILE
                }

                notes[index] = `- [${note.title}](${note.RELATIVE_PATH.split(' ').join('%20')})`
                notesLoaded++

                const allNotesLoaded = notesLoaded === listOfNoteFiles.length
                if (allNotesLoaded) {
                    fs.readFile('README.md', 'utf-8', (err, readmeContent) => {
                        if (err) {
                            return console.error('Error al leer apunte (note) ', err);
                        }

                        const newNoteList = notes.join('\n')
                        const currentNoteList = readmeContent.split('<!--lista_apuntes-->')[1].split('## Lista de apuntes\n')[1].trimEnd()

                        if (currentNoteList === newNoteList) {
                            return console.info('Sin cambios, no se modifica el README.')
                        }

                        const readmeContentWithoutNoteList = readmeContent.split('<!--lista_apuntes-->')[0]
                        const content = `${readmeContentWithoutNoteList}<!--lista_apuntes-->\n## Lista de apuntes\n${newNoteList}\n<!--lista_apuntes-->`
                        fs.writeFile('README.md', content, (err) => {
                            return err ? console.error('ERROR ', err) : console.info(':D')
                        });
                        
                    })
                }
            }
        })
    })
});
