
# **Azure Computer Vision API**

http://159.223.124.38:3000/

In this project we are designing Applications using Computer Vision API.

Azure API use algorithms to process images and return data based on the visual features you're interested in with Azure's Computer Vision service.

I am specifically working on Text extraction (OCR) for this project.

Text is extracted from images using the Optical Character Recognition (OCR) service. The new Read API can be used to extract typewritten and printed text from images and documents. It works with text on a variety of surfaces and backgrounds using deep learning-based models. These consist of official correspondence, invoices, receipts, whiteboards, posters, and business cards. Multiple languages can be extracted from printed text using the OCR APIs.

<br>
<b>Steps I followed for creating API on Azure.</b>

1. Created an account on Microsoft Azure.
2. Created a new resource.
3. Created Computer Vision API
4. Linked Computer Vision API with my resource.

After creating API on Azure, We would get the API Keys and endpoints of our API, Which we can use for accessing the resources.

<br>
<b>Prerequisites for the Project.</b>

- An Azure subscription
- Node.js
- Once you have your Azure subscription, create a Computer Vision resource in the Azure portal to get your key and endpoint. After it deploys, click Go to resource.
  - You will need the key and endpoint from the resource you create to connect your application to the Computer Vision service. You'll paste your key and endpoint into the code below later in the quickstart.
  - You can use the free pricing tier (F0) to try the service, and upgrade later to a paid tier for production.


<br>
<b>Steps to integrate</b>
<br>
In this project I have integrating Azure API with JavaScript Node application. I have use Axios library to call the OCR REST API.

First following rest API would be called to get Operation-Location header which would be use in next Rest API call.


```

curl -v -X POST "https://westcentralus.api.cognitive.microsoft.com/vision/v3.2/read/analyze" -H "Content-Type: application/json" -H "Ocp-Apim-Subscription-Key: \<subscription key\>" --data-ascii "{\"url\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Atomist\_quote\_from\_Democritus.png/338px-Atomist\_quote\_from\_Democritus.png\"}"

```

In below rest call, replace the Operation-Location with the header which we get from the previous call.

```

curl -v -X GET "https://westcentralus.api.cognitive.microsoft.com/vision/v3.2/read/analyzeResults/{operationId}" -H "Ocp-Apim-Subscription-Key: {subscription key}" --data-ascii "{body}"

```
<br>
Please visit following website to get the feel of the APi.
<br>
http://159.223.124.38:3000/

<br>
<br>
Examples and Outputs
<br>

Input Image.
<br>
![image](https://user-images.githubusercontent.com/22686539/207454199-fe492299-d59b-4658-be57-ea839ba2d70e.png)


Text Input.
<br>
![image](https://user-images.githubusercontent.com/22686539/207454396-98530941-7172-4cbc-935d-a058a33ac960.png)


Output
<br>
![image](https://user-images.githubusercontent.com/22686539/207454408-0a2428ec-b92f-4adb-a68d-8ea7ec34c685.png)

You can also access the API created using Postman application.

Following URL should call using post 
```

http://159.223.124.38:3000/readtext

```
and
```

{"imgUrl": "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zcGlyYXRpb25hbCUyMHF1b3RlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}

```
should be passed in body. Try changing imgUrl to get different output.



<b>PostMan<b>
<br>

![image](https://user-images.githubusercontent.com/22686539/207454432-bb063278-7758-40fa-a734-153fba8702e3.png)


<br>
## Tech/framework used

<b>Built with</b>
- [NodeJS](https://nodejs.dev/)
- [ExpressJs](https://expressjs.com/)
- [Azure Computer Vision API](https://azure.microsoft.com/en-us/products/cognitive-services/computer-vision/)
- [![DigitalOcean Referral Badge](https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg)](https://www.digitalocean.com/?refcode=51d7680bc512&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)

<br>

## How to use?
Steps to run the application on Local Host:
```
npm install
npm start
```
<br>
Future Scopes.

1. Improving the UI.
2. Implemented more computer vision API such as Facial recognition, Object recognition, Face Analysis, Object movement.
3. Making API faster.

<br>
## You can reach out 😊😊

Feel free to contact me about the problems. I will try to help as much as I can 

[![Linkedin Badge](https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/samihan-jawalkar-b38457a1/)
[![Mail Badge](https://img.shields.io/badge/email-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:samihan.jawalkar@gmail.com)](mailto:samihan.jawalkar@gmail.com)
[![Twitter Badge](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/samihan162)
[![Github Badge](https://img.shields.io/badge/github-333?style=for-the-badge&logo=github&logoColor=white)](https://github.com/samihan123)
