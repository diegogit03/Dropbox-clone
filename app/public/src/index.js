const name = prompt('digite seu usuario raiz:');

if (name) {
	const app = new DropBoxController(name);	
} else if (!name) {
	name = prompt('digite seu usuario raiz:');
}
