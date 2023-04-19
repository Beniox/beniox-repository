export default {
    name: 'notes',
    description: 'take notes',
    async execute(os, args) {
        if (args.length === 0) {
            os.say("What do you want to do with your notes?");
            os.say("1) List notes");
            os.say("2) Add note");
            os.say("3) Remove note");
            const option = await os.ask("Enter option:");

            if (option === '1') {
                args.push('list');
            } else if (option === '2') {
                args.push('add');
            } else if (option === '3') {
                args.push('remove');
            }

        }
        let notes = this.storage.get('notes') ?? [];


        let option = args[0];

        if (option === 'list') {
            console.log(notes);
            if(notes.length === 0) {
                os.next('No notes');
                return;
            }
            os.say('Notes:');
            for (let i = 0; i < notes.length; i++) {
                os.say(`${i + 1}. ${notes[i]}`);
            }
            os.next();
        }
        else if (option === 'add') {
            const note = await os.ask('Enter note:');
            notes.push(note);
            this.storage.set('notes', notes);
            os.next('Note added');
        }
        else if (option === 'remove') {
            const index = await os.ask('Enter index:');
            if (index > notes.length) {
                os.next('Error: index out of range');
                return;
            }
            notes.splice(index - 1, 1);
            this.storage.set('notes', notes);
            os.next('Note removed');
        }
        else {
            os.next('valid options: list, add, remove');
        }


    }
};
