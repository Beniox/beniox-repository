export default {
    name: 'dice',
    description: 'Roll a dice',
    arguments: 1,
    execute(os, args) {
        os.next(Math.floor(Math.random() * args[0] ?? 6) + 1);
    }
};
