VideoStreaming using OBS studio with nginxrtmp and hls

For this project i am using alfg/nginx-rtmp docker image which acts as the nginx-rtmp server.But the little issue is that it only had one application (stream) but we needed 2 streams(primary and backup).I edited the existing nginx.conf file to handle two applications but evertime the docker-compose up is run nginx.conf is reset so for now i just created a simple bash script that copies nginx.conf to the container after it is run.

So to run the project follow these steps:

```bash
docker-compose build # to install all the remote images and build frontend iamge

./streamscript.sh #it runs the dockercompose and copies the actual nginx.conf.bak file to nginx.conf
```

This is just a temporary solution and in future i will export everything to docker compose.

Then after running the project you can start the obs studio 
when configuring server in obs you have to keep the container running and save the stream url to be 
```bash
rtmp://localhost:1935/backup
or
rtmp://localhost:1935/primary
```
The stream key is very important and u can name it anything you want for testing purposes name it demo because the url in the frontend will only for demo streamkey.

Then you can start streaming in obs studio and can access localhost:5000 in browser and u can see the stream directly from browser.

For testing purposes u can cancel the stream in obs while letting the stream in browser run and quickly change the streamurl from primary to backup.
Then u can access the browser again which after some time access the backup stream
