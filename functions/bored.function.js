export default {
    name: 'bored',
    description: 'Get an idea what to do',
    arguments: 0,
    async execute(os, args) {
        try{
            const res = await fetch('https://www.boredapi.com/api/activity');
            const data = await res.json();
            os.next(data.activity);
        }
        catch(err) {
            os.next('Error: ' + err);
        }
    }
};
