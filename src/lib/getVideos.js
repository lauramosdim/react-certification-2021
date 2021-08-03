const VIDEOS_URL =
    'https://gist.githubusercontent.com/jparciga/1d4dd34fb06ba74237f8966e2e777ff5/raw/f3af25f1505deb67e2cc9ee625a633f24d8983ff/youtube-videos-mock.json';

export const getVideos = async () => {
    try {
        const response = await fetch(VIDEOS_URL);
        const data = await response.json();
        return data;
    } catch (err) {
        return [];
    }
};
