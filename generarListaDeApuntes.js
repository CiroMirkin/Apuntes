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

    const notes = []
    
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

                notes.push(`- [${note.title}](${note.RELATIVE_PATH.split(' ').join('%20')})`)

                // Checks if all the notes are in notes array
                const isThisTheLastNote = (listOfNoteFiles.length - 1) === index;
                if (isThisTheLastNote) {
                    // Modify the README.md file to include the list of notes
                    fs.readFile('README.md', 'utf-8', (err, readmeContent) => {
                        if (err) {
                            return console.error('Error al leer apunte (note) ', err);
                        } 
                        
                        const readmeContentWithoutNoteList = readmeContent.split('<!--lista_apuntes-->')[0]
                        const content = `${readmeContentWithoutNoteList}<!--lista_apuntes-->\n## Lista de apuntes\n${notes.join('\n')}\n<!--lista_apuntes-->`
                        fs.writeFile('README.md', content, (err) => {
                            return err ? console.error('ERROR ', err) : console.info(':D')
                        });
                        
                    })
                }
            }
        })
    })
});
