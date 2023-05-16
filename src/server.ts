import app from "./app";

function main() {
    try {
        app.listen(3000, 'localhost', async () => {
            console.log('starting server on 3000 port')
        })
    } catch (err) {
        console.error('Starting server Error', err)
    }
}
main()