export default {
    name: 'nod',
    description: 'Get the number of the day',
    async execute(os, args) {
        try {
            const res = await fetch('https://api.math.tools/numbers/nod');
            const data = await res.json();

            os.say(`Number of the day: ${data.contents.nod.numbers.number}`);

            Object.entries(data.contents.nod.numbers["general-facts"]).forEach(([key, ele]) => {
                if (ele.value == true) {
                    os.say(ele.display);
                }
            });

            Object.entries(data.contents.nod.numbers["prime-facts"]).forEach(([key, ele]) => {
                if (ele.value == true) {
                    os.say(ele.display);
                }
            });
            os.next();

        } catch (err) {
            os.next('Error: ' + err);
        }
    }
};
