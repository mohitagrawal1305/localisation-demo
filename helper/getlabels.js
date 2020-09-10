const fs = require( 'fs' );
const path = require( 'path' );

export default function getLabels( fileName = 'common.json', lang = 'en' ) {
    
    const labelsDirectory = path.join(process.cwd(), 'locals', lang, fileName );
    
    const labels = fs.readFileSync(labelsDirectory, 'utf8');

    return JSON.parse( labels );
};