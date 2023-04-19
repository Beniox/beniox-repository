export default {
    name: 'dice',
    description: 'Roll a dice',
    execute(os, args) {
        os.next(Math.floor(Math.random() * args[0] ?? 6) + 1);
    }
};
