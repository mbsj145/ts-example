# ts-example

first yarn install
second set .env
dev_db_url = "" //set mongodb url after mongodb+srv://
port = 4000
server_name = "localhost"


third npx nodemon or nodemon
1) upload data into database 
  http://localhost:4000/api/loadVaccineRecords
2) filter redords
  http://localhost:4000/api/vaccine-summary?c=AT&dateFrom=2020-W53&dateTo=2022-W01&range=10
  
  
  api call rate limit is 5 per minutes
  
  
  for test cases 
  1) RUN nom run test
