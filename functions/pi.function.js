export default {
    name: 'pi',
    description: 'Get the value of pi',
    async execute(os, args) {
        try {
            const amount = args[0] - 1 + 3 || 10;
            const res = await fetch(`https://uploadbeta.com/api/pi/?cached&n=${amount}`);
            const data = await res.json();
            os.next(`3.${data.substring(2)}`);
        }
        catch(err) {
            os.next('Error: ' + err);
        }
    }
};
