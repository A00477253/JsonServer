#How to run the json server

I have a file called db.json 
you can replace the json content that you are expecting from the backend with proper property name for example:
Let us taken an example of Customer json 

{
  "**customers**": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "+1234567890",
      "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "state": "CA",
        "postal_code": "12345",
        "country": "USA"
      }
    }
  ]
}
The api will be exposed as 
**http://localhost:3000/customers**
You can use all the api endpoints such as 
GET,POST,PUT,DELETE 
all the changes will happen locally in the file 

The command to start the server is 
**json-server --watch db.json**

here ** db.json** is the json file we need to add the json data that we need
  
   
