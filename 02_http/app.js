const http = require ('http');

const handleRequest = (request, response) => {
//         console.log(request.method);
//         console.log(request.url);
//         console.log(request.headers);
//         console.log("============");
//         response.end("hi there");
// if (request.method === "POST"){
//         response.writeHead(400);
//        return response.end("gk terima request");
// }

// if (request.method === "PUT"){
//       response.writeHead(400);
//       return response.end("gk terima request");
// }

// if (request.method === "GET"){
//       return response.end("halo pake get ne");
// }

// if (request.method === "DELETE"){
//        return response.end("halo pake delete ne");
// }

// return response.end("gk ada method");
 const dataSiswa = {
      nama : "rico",
      alamat : "aceh",
 }

//  console.log(typeof dataSiswa);
//  console.log(dataSiswa);
 //console.log(dataSiswa, "utf-8");
 console.log(typeof JSON.stringify(dataSiswa));
 console.log(JSON.stringify(dataSiswa));

 response.writeHead(200, { "Content-Type": "application/json"});
 return response.end(JSON.stringify(dataSiswa));

};

http.createServer(handleRequest).listen(8000);