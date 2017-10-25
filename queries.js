// 1. Find the average length of all tracks in Milliseconds
SELECT avg(milliseconds) FROM track;

// 2. Find the number of invoices in the USA
SELECT count(*) 
FROM invoice
WHERE billingcountry = 'USA';

// 3. Make a list of all the First Names of Customers that contain an 'a'
SELECT firstname
FROM customer
WHERE firstname LIKE '%a%';

// 4. Make a list of the 10 longest tracks
SELECT *
FROM track
ORDER BY milliseconds DESC
LIMIT 10;

// 5. Make a list of the 20 shortest tracks
SELECT *
FROM track
ORDER BY milliseconds ASC
LIMIT 20;

// 6. Find all the customers that live in California or Washington
SELECT * FROM customer
WHERE state = 'CA' OR state ='WA';

// 7. Find all the customers that live in California, Washington, Utah, Florida, or Arizona (Use IN keyword)
SELECT * FROM customer
WHERE state IN ('CA', 'WA', 'UT', 'FL', 'AZ');

// 8. Insert an artist to the database
INSERT INTO artist (name)
VALUES ('Miso Kovac');

// 9. Insert yourself as a customer to the database
INSERT INTO customer (firstname, lastname, company, address, city, state, country, postalcode, phone, fax, email, supportrepid)
VALUES ('D', 'M', 'DevMountain', 'Address', 'Dallas', 'TX', 'USA', 75201, 1111234567, 111222333, 'email@email.com', 3);

// 10. Find a list of all Playlists that start with `Classical` 
SELECT * FROM playlist
WHERE name LIKE 'Classical%'
