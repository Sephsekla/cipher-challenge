import { readFileSync } from "fs";
import prompt from "prompt";


const ciphertext : string = readFileSync('./ciphertext.txt', 'utf-8').replace(/(\r\n|\n|\r)/gm, `@`);
const charCodeOffset: number = 97; // Offset for character codes relative to alphabet position.
const alphabetLength: number = 26; // Length of the alphabet.

const ciphertextIndex: number[] = [ ...ciphertext ].map (
	character => getLetterPosition( character.toLowerCase() )
);


function isLetter( characterCode: number ) : boolean {
	return ( characterCode >= charCodeOffset ) && ( characterCode < charCodeOffset + alphabetLength );
}

function getLetterPosition( character: string ) : number {
	const characterCode: number = character.charCodeAt( 0 );
	return isLetter( characterCode ) ? characterCode - charCodeOffset : characterCode;
}

prompt.start();

prompt.get( [
	'encodedLetter',
	'guessDecodedLetter',

], 
( err: Error | null, result: { encodedLetter: string, guessDecodedLetter: string } ): void => {

	const { encodedLetter, guessDecodedLetter } = result;
	const offset: number = getLetterPosition( guessDecodedLetter ) - getLetterPosition( encodedLetter );

	const decodedCharCodes = ciphertextIndex.map(
		character => isLetter( character + charCodeOffset ) ? ( character + offset )%alphabetLength + charCodeOffset : character
	)

	console.log(decodedCharCodes);


	console.log( String.fromCharCode( ...decodedCharCodes ).toUpperCase().replace( /@/g, `
`) );
} );
