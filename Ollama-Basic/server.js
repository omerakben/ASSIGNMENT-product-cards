const corsAnywhere = require('cors-anywhere');

corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
}).listen(8080, 'localhost', () => {
  console.log('CORS Anywhere proxy running on http://localhost:8080');
});

