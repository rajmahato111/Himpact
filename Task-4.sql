select Cust_Name 
from Customer 
inner join Salesman on Customer.salesman_id = Salesman.salesman_id
where commission > 0.12;