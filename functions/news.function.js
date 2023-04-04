export default {
    name: 'news',
    description: 'Get the current news from the tagesschau',
    async execute(os, args) {
        try {
            const response = await fetch('https://www.tagesschau.de/api2');
            const data = await response.json()
            const news = data.news[0];
            const date = new Date(news.date);
            os.next(`Tagesschau: ${news.title.replace(/['"]+/g, '')}. ${news.firstSentence} ${date.toLocaleDateString()}`);

        } catch (err) {
            os.next('Error: ' + err);
        }
    }
};
