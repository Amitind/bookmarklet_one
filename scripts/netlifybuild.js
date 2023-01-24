// curl -X POST -H "Content-Type: application/json" -d {} https://api.netlify.com/build_hooks/63cd1c920fb8da7f6902fb12

// fetch post request to netlify server to activate build ?
// node scripts/netlifybuild.js
async function getData() {
    try {
        const response = await fetch('https://example.com/');
        // const data = await response.json();
        const data = await response.status;
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
getData();