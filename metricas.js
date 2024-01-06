const fs = require('fs');

// Run file with node metricas.js
// apunte = note

const RELATIVE_PATH_OF_NOTES = 'apuntes/'

fs.readdir(RELATIVE_PATH_OF_NOTES, (err, listOfNoteFiles) => {
    if (err) {
        console.error('Error al leer directorio ', err)
        return;
    }

    console.table(listOfNoteFiles)
});
