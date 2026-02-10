## Docker in backend development================================
install docker desktop on your device and create a docker file in your project directory with the following content: 
After make docker file 
build on server terminal with the following command:
```bash
docker build -t <image-name> .
  check on docker desktop should be images tab you can see your image there
docker run -p 4000:4000 <image-name>
port binding for docker on locl]host
// Docker port binding "0.0.0.0",
// Docker port binding "0.0.0.0",
app.listen(PORT, "0.0.0.0", (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Server is running on port http://localhost:${PORT}`);
});