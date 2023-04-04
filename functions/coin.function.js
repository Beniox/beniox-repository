export default {
    name: 'coin',
    description: 'Flip a coin',
    arguments: 0,
    execute(os, args) {
        os.next(Math.random() < 0.5 ? 'Heads' : 'Tails');
    }
};
