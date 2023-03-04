-- build the cyfhotel database
--

drop table invoices;
drop table reservations;
drop table customers;
drop table rooms;
drop table room_types;

CREATE TABLE room_types (
    room_type           VARCHAR(30) PRIMARY KEY,
    def_rate            NUMERIC(6,2)
);

INSERT INTO room_types VALUES('FAMILY',123.00);
INSERT INTO room_types VALUES('PREMIER',110.00);
INSERT INTO room_types VALUES('PREMIER PLUS',123.00);
INSERT INTO room_types VALUES('PREMIUM',85.00);
INSERT INTO room_types VALUES('PREMIUM PLUS',98.00);

CREATE TABLE rooms (
  room_no integer primary key,	-- always assigned a value
  rate NUMERIC(6,2) not null,	-- standard room rate per night
  room_type varchar(30),	-- room classification
  no_guests integer,		-- maximum people that can be accommodated
  foreign key (room_type) references room_types(room_type)
);

INSERT INTO rooms VALUES(101,85.00,'PREMIUM',2);
INSERT INTO rooms VALUES(102,85.00,'PREMIUM',2);
INSERT INTO rooms VALUES(103,85.00,'PREMIUM',2);
INSERT INTO rooms VALUES(104,85.00,'PREMIUM',2);
INSERT INTO rooms VALUES(105,85.00,'PREMIUM',2);
INSERT INTO rooms VALUES(106,85.00,'PREMIUM',2);
INSERT INTO rooms VALUES(107,85.00,'PREMIUM',2);
INSERT INTO rooms VALUES(108,98.00,'PREMIUM PLUS',2);
INSERT INTO rooms VALUES(109,98.00,'PREMIUM PLUS',2);
INSERT INTO rooms VALUES(110,98.00,'PREMIUM PLUS',2);
INSERT INTO rooms VALUES(111,98.00,'PREMIUM PLUS',2);
INSERT INTO rooms VALUES(112,98.00,'PREMIUM PLUS',2);
INSERT INTO rooms VALUES(201,85.00,'PREMIUM',2);
INSERT INTO rooms VALUES(202,85.00,'PREMIUM',2);
INSERT INTO rooms VALUES(203,85.00,'PREMIUM',2);
INSERT INTO rooms VALUES(204,85.00,'PREMIUM',2);
INSERT INTO rooms VALUES(205,85.00,'PREMIUM',3);
INSERT INTO rooms VALUES(206,85.00,'PREMIUM',3);
INSERT INTO rooms VALUES(207,85.00,'PREMIUM',3);
INSERT INTO rooms VALUES(208,98.00,'PREMIUM PLUS',2);
INSERT INTO rooms VALUES(209,98.00,'PREMIUM PLUS',2);
INSERT INTO rooms VALUES(210,98.00,'PREMIUM PLUS',2);
INSERT INTO rooms VALUES(211,98.00,'PREMIUM PLUS',3);
INSERT INTO rooms VALUES(212,98.00,'PREMIUM PLUS',3);
INSERT INTO rooms VALUES(301,110.00,'PREMIER',2);
INSERT INTO rooms VALUES(302,110.00,'PREMIER',2);
INSERT INTO rooms VALUES(303,110.00,'PREMIER',2);
INSERT INTO rooms VALUES(304,110.00,'PREMIER',2);
INSERT INTO rooms VALUES(305,110.00,'PREMIER',2);
INSERT INTO rooms VALUES(306,110.00,'PREMIER',2);
INSERT INTO rooms VALUES(307,110.00,'PREMIER',2);
INSERT INTO rooms VALUES(308,123.00,'PREMIER PLUS',2);
INSERT INTO rooms VALUES(309,123.00,'PREMIER PLUS',2);
INSERT INTO rooms VALUES(310,123.00,'PREMIER PLUS',2);
INSERT INTO rooms VALUES(311,123.00,'PREMIER PLUS',2);
INSERT INTO rooms VALUES(312,123.00,'PREMIER PLUS',2);
INSERT INTO rooms VALUES(401,110.00,'PREMIER',2);
INSERT INTO rooms VALUES(402,110.00,'PREMIER',2);
INSERT INTO rooms VALUES(403,110.00,'PREMIER',2);
INSERT INTO rooms VALUES(404,110.00,'PREMIER',2);
INSERT INTO rooms VALUES(405,110.00,'PREMIER',2);
INSERT INTO rooms VALUES(406,110.00,'PREMIER',2);
INSERT INTO rooms VALUES(407,110.00,'PREMIER',2);
INSERT INTO rooms VALUES(408,123.00,'PREMIER PLUS',2);
INSERT INTO rooms VALUES(409,123.00,'PREMIER PLUS',2);
INSERT INTO rooms VALUES(410,123.00,'PREMIER PLUS',2);
INSERT INTO rooms VALUES(411,123.00,'FAMILY',4);
INSERT INTO rooms VALUES(412,123.00,'FAMILY',4);

CREATE TABLE customers (
  id 		SERIAL PRIMARY KEY,
  name 		VARCHAR(30) NOT NULL,
  email 	VARCHAR(120) NOT NULL,
  phone 	VARCHAR(20),
  address 	VARCHAR(120),
  city 		VARCHAR(30),
  postcode 	VARCHAR(12),
  country 	VARCHAR(20)
);

INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('John Smith','j.smith@johnsmith.org','0151 123 4567','11 New Road','Liverpool','L10 2AB','UK');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Sue Jones','s.jones1234@gmail.com','0201 234 5678','120 Old Street','London','N10 3CD','UK');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Alice Evans','alice.evans001@hotmail.com','0161 345 6789','3 High Road','Manchester','m13 4ef','UK');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Mohammed Trungpa','mo.trungpa@hotmail.com','0161 456 7890','25 Blue Road','Manchester','M25 6GH','UK');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Steven King','steve.king123@hotmail.com','01245 134 4678','19 Bed Street','Newtown', 'xy2 3ac','UK');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Nadia Sethuraman','nadia.sethuraman@mail.com',NULL,'135 Green Street','Manchester','M10 4BG','UK');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Melinda Marsh','mel.marsh-123@gmail.com','070 1513 5671','7 Preston Road','Oldham','OL3 5XZ','UK');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Martín Sommer','martin.sommer@dfgg.net','(91) 555 22 82','C/ Romero, 33','Madrid',28016,'Spain');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Laurence Lebihan','laurence.lebihan@xmzx.net','91.24.4555','12, rue des Bouchers','Marseille',13008,'France');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Keith Stewart','keith.stewart@gmail.com','078 4679 1282','84 Town Lane','Tadworth','td5 7ng','UK');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Carlos Porter','carlos.porter@ortynuf.com','070 2679 6812','81 Bath Rd','Salisbury','SA61 4GD','UK');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Carine Schmitt','carine.schmitt@dftu.net','40.32.2555','54, rue Royale', 'Nantes','44000','France');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Jean King','jean.king@hjgp.net','07025 551 838','8489 Strong St.', 'Las Vegas','83030','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Peter Ferguson','peter.ferguson@mxnx.net','03 9520 4555','636 St Kilda Road, Level 3', 'Melbourne','3004','Australia');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Janine Labrune','janine.labrune@dlsh.net','40.67.8555','67, rue des Cinquante Otages', 'Nantes','44000','France');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Jonas Bergulfsen','jonas.bergulfsen@dxbn.net','07-98 9555','Erling Skakkes gate 78', 'Stavern','4110','Norway');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Susan Nelson','susan.nelson@fsve.net','0415 555 1450','5677 Strong St.', 'San Rafael','97562','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Zbyszek Piestrzeniewicz','zbyszek.piestrzeniewicz@askt.net','(26) 642-7555','ul. Filtrowa 68', 'Warszawa','01-012','Poland');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Roland Keitel','roland.keitel@riys.net','+49 69 66 90 2555','Lyonerstr. 34', 'Frankfurt','60528','Germany');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Julie Murphy','julie.murphy@lrtc.net','0650 555 5787','5557 North Pendale Street', 'San Francisco','94217','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Kwai Lee','kwai.lee@imic.net','0212 555 7818','897 Long Airport Avenue', 'NYC','10022','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Diego Freyre','diego.freyre@amyr.net','(91) 555 94 44','C/ Moralzarzal, 86', 'Madrid','28034','Spain');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Christina Berglund','christina.berglund@cggp.net','0921-12 3555','Berguvsvägen 8', 'Luleå','S-958 22','Sweden');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Jytte Petersen','jytte.petersen@cpbn.net','31 12 3555','Vinbæltet 34', 'Kobenhavn','1734','Denmark');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Mary Saveley','mary.saveley@yppl.net','78.32.5555','2, rue du Commerce', 'Lyon','69004','France');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Eric Natividad','eric.natividad@swll.net','+65 221 7555','Bronz Sok., Bronz Apt. 3/6 Tesvikiye', 'Singapore','079903','Singapore');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Jeff Young','jeff.young@hahh.net','0212 555 7413','4092 Furth Circle, Suite 400', 'NYC','10022','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Kelvin Leong','kelvin.leong@mqzy.net','0215 555 1555','7586 Pompton St.', 'Allentown','70267','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Juri Hashimoto','juri.hashimoto@fttv.net','0650 555 6809','9408 Furth Circle', 'Burlingame','94217','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Wendy Victorino','wendy.victorino@ueai.net','+65 224 1555','106 Linden Road Sandown, 2nd Floor', 'Singapore','069045','Singapore');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Veysel Oeztan','veysel.oeztan@vqkn.net','+47 2267 3215','Brehmen St. 121, PR 334 Sentrum', 'Bergen','N 5804','Norway');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Keith Franco','keith.franco@dlha.net','2035557845','149 Spinnaker Dr., Suite 101', 'New Haven','97823','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Isabel de Castro','isabel.de.castro@fpro.net','(1) 356-5555','Estrada da saúde n. 58', 'Lisboa','1756','Portugal');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Martine Rancé','martine.rancé@xeqs.net','20.16.1555','184, chaussée de Tournai', 'Lille','59000','France');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Marie Bertrand','marie.bertrand@glut.net','(1) 42.34.2555','265, boulevard Charonne', 'Paris','75012','France');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Jerry Tseng','jerry.tseng@etea.net','6175555555','4658 Baden Av.', 'Cambridge','51247','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Julie King','julie.king@yhfj.net','2035552570','25593 South Bay Ln.', 'Bridgewater','97562','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Mory Kentary','mory.kentary@nqfg.net','+81 06 6342 5555','1-6-20 Dojima', 'Kita-ku',' 530-0003','Japan');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Michael Frick','michael.frick@jdep.net','2125551500','2678 Kingston Rd., Suite 101', 'NYC','10022','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Matti Karttunen','matti.karttunen@xkig.net','90-224 8555','Keskuskatu 45', 'Helsinki','21240','Finland');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Rachel Ashworth','rachel.ashworth@rzyb.net','(171) 555-1555','Fauntleroy Circus', 'Manchester','EC2 5NT','UK');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Dean Cassidy','dean.cassidy@sntj.net','+353 1862 1555','25 Maiden Lane, Floor No. 4', 'Dublin','2','Ireland');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Leslie Taylor','leslie.taylor@tunp.net','6175558428','16780 Pompton St.', 'Brickhaven','58339','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Elizabeth Devon','elizabeth.devon@bpcb.net','(171) 555-2282','12, Berkeley Gardens Blvd', 'Liverpool','WX1 6LT','UK');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Yoshi Tamuri','yoshi.tamuri@juuq.net','(604) 555-3392','1900 Oak St.', 'Vancouver','V3F 2K1','Canada');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Miguel Barajas','miguel.barajas@rsyq.net','6175557555','7635 Spinnaker Dr.', 'Brickhaven','58339','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Julie Young','julie.young@rmhl.net','6265557265','78934 Hillside Dr.', 'Pasadena','90003','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Brydey Walker','brydey.walker@kwtj.net','+612 9411 1555','Suntec Tower Three, 8 Temasek', 'Singapore','038988','Singapore');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Frédérique Citeaux','frédérique.citeaux@vekn.net','88.60.1555','24, place Kléber', 'Strasbourg','67000','France');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Mike Gao','mike.gao@pdrv.net','+852 2251 1555','Bank of China Tower, 1 Garden Road', 'Central Hong Kong',NULL,'Hong Kong');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Eduardo Saavedra','eduardo.saavedra@tiqa.net','(93) 203 4555','Rambla de Cataluña, 23', 'Barcelona','08022','Spain');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Mary Young','mary.young@ratm.net','3105552373','4097 Douglas Av.', 'Glendale','92561','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Horst Kloss','horst.kloss@bpzv.net','0372-555188','Taucherstraße 10', 'Cunewalde','01307','Germany');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Palle Ibsen','palle.ibsen@bjqn.net','86 21 3555','Smagsloget 45', 'Århus','8200','Denmark');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Jean Fresnière','jean.fresnière@uxsm.net','(514) 555-8054','43 rue St. Laurent', 'Montréal','H1J 1C3','Canada');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Alejandra Camino','alejandra.camino@omet.net','(91) 745 6555','Gran Vía, 1', 'Madrid','28001','Spain');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Valarie Thompson','valarie.thompson@brll.net','7605558146','361 Furth Circle', 'San Diego','91217','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Helen Bennett','helen.bennett@quet.net','(198) 555-8888','Garden House, Crowther Way 23', 'Cowes','PO31 7PJ','UK');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Annette Roulet','annette.roulet@lgha.net','61.77.6555','1 rue Alsace-Lorraine', 'Toulouse','31000','France');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Renate Messner','renate.messner@ebse.net','069-0555984','Magazinweg 7', 'Frankfurt','60528','Germany');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Paolo Accorti','paolo.accorti@xcuw.net','011-4988555','Via Monte Bianco 34', 'Torino','10100','Italy');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Daniel Da Silva','daniel.da.silva@hijy.net','+33 1 46 62 7555','27 rue du Colonel Pierre Avia', 'Paris','75508','France');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Daniel Tonini','daniel.tonini@mxvw.net','30.59.8555','67, avenue de lEurope', 'Versailles','78000','France');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Henriette Pfalzheim','henriette.pfalzheim@hmib.net','0221-5554327','Mehrheimerstr. 369', 'Köln','50739','Germany');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Elizabeth Lincoln','elizabeth.lincoln@elct.net','(604) 555-4555','23 Tsawassen Blvd.', 'Tsawassen','T2F 8M4','Canada');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Peter Franken','peter.franken@fszx.net','089-0877555','Berliner Platz 43', 'München','80805','Germany');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Anna O''Hara','anna.o"hara@hzjw.net','02 9936 8555','201 Miller Street, Level 15', 'North Sydney','2060','Australia');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Giovanni Rovelli','giovanni.rovelli@xrbz.net','035-640555','Via Ludovico il Moro 22', 'Bergamo','24100','Italy');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Adrian Huxley','adrian.huxley@hmep.net','+61 2 9495 8555','Monitor Money Building, 815 Pacific Hwy', 'Chatswood','2067','Australia');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Marta Hernandez','marta.hernandez@xqti.net','6175558555','39323 Spinnaker Dr.', 'Cambridge','51247','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Ed Harrison','ed.harrison@svjb.net','+41 26 425 50 01','Rte des Arsenaux 41', 'Fribourg','1700','Switzerland');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Mihael Holz','mihael.holz@dnji.net','0897-034555','Grenzacherweg 237', 'Genève','1203','Switzerland');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Jan Klaeboe','jan.klaeboe@mpnl.net','+47 2212 1555','Drammensveien 126A, PB 211 Sentrum', 'Oslo','N 0106','Norway');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Bradley Schuyler','bradley.schuyler@stie.net','+31 20 491 9555','Kingsfordweg 151', 'Amsterdam','1043 GR','Netherlands');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Mel Andersen','mel.andersen@nggg.net','030-0074555','Obere Str. 57', 'Berlin','12209','Germany');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Pirkko Koskitalo','pirkko.koskitalo@rcva.net','981-443655','Torikatu 38', 'Oulu','90110','Finland');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Catherine Dewey','catherine.dewey@ndft.net','(02) 5554 67','Rue Joseph-Bens 532', 'Bruxelles','B-1180','Belgium');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Steve Frick','steve.frick@unam.net','9145554562','3758 North Pendale Street', 'White Plains','24067','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Wing Huang','wing.huang@romc.net','5085559555','4575 Hillside Dr.', 'New Bedford','50553','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Julie Brown','julie.brown@zbfm.net','6505551386','7734 Strong St.', 'San Francisco','94217','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Mike Graham','mike.graham@nlpt.net','+64 9 312 5555','162-164 Grafton Road, Level 2', 'Auckland ',NULL,'New Zealand');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Ann Brown','ann.brown@xwkb.net','(171) 555-0297','35 King George', 'London','WX3 6FW','UK');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('William Brown','william.brown@wrbo.net','2015559350','7476 Moss Rd.', 'Newark','94019','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Ben Calaghan','ben.calaghan@bprq.net','61-7-3844-6555','31 Duncan St. West End', 'South Brisbane','4101','Australia');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Kalle Suominen','kalle.suominen@acif.net','+358 9 8045 555','Software Engineering Center, SEC Oy', 'Espoo','FIN-02271','Finland');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Philip Cramer','philip.cramer@gmlf.net','0555-09555','Maubelstr. 90', 'Brandenburg','14776','Germany');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Francisca Cervantes','francisca.cervantes@sxxp.net','2155554695','782 First Street', 'Philadelphia','71270','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Jesus Fernandez','jesus.fernandez@cgxs.net','+34 913 728 555','Merchants House, 27-30 Merchant''s Quay', 'Madrid','28023','Spain');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Brian Chandler','brian.chandler@wdgi.net','2155554369','6047 Douglas Av.', 'Los Angeles','91003','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Patricia McKenna','patricia.mckenna@eert.net','2967 555','8 Johnstown Road', 'Cork',NULL,'Ireland');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Laurence Lebihan','laurence.lebihan@xmzx.net','91.24.4555','12, rue des Bouchers', 'Marseille','13008','France');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Paul Henriot','paul.henriot@uwua.net','26.47.1555','59 rue de l''Abbaye', 'Reims','51100','France');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Armand Kuger','armand.kuger@axkq.net','+27 21 550 3555','1250 Pretorius Street', 'Hatfield','0028','South Africa');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Wales MacKinlay','wales.mackinlay@omis.net','64-9-3763555','199 Great North Road', 'Auckland',NULL,'New Zealand');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Karin Josephs','karin.josephs@gyfv.net','0251-555259','Luisenstr. 48', 'Münster','44087','Germany');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Juri Yoshido','juri.yoshido@klqb.net','6175559555','8616 Spinnaker Dr.', 'Boston','51003','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Dorothy Young','dorothy.young@cwtg.net','6035558647','2304 Long Airport Avenue', 'Nashua','62005','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Lino Rodriguez','lino.rodriguez@xscn.net','(1) 354-2555','Jardim das rosas n. 32', 'Lisboa','1675','Portugal');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Braun Urs','braun.urs@aols.net','0452-076555','Hauptstr. 29', 'Bern','3012','Switzerland');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Allen Nelson','allen.nelson@eruo.net','6175558555','7825 Douglas Av.', 'Brickhaven','58339','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Pascale Cartrain','pascale.cartrain@oggv.net','(071) 23 67 2555','Boulevard Tirou, 255', 'Charleroi','B-6000','Belgium');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Georg Pipps','georg.pipps@uyvb.net','6562-9555','Geislweg 14', 'Salzburg','5020','Austria');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Arnold Cruz','arnold.cruz@awqa.net','+63 2 555 3587','15 McCallum Street, NatWest Center #13-03', 'Makati City','1227 MM','Philippines');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Maurizio Moroni','maurizio.moroni@nqnk.net','0522-556555','Strada Provinciale 124', 'Reggio Emilia','42100','Italy');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Akiko Shimamura','akiko.shimamura@pipl.net','+81 3 3584 0555','2-2-8 Roppongi', 'Minato-ku','106-0032','Japan');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Dominique Perrier','dominique.perrier@bdim.net','(1) 47.55.6555','25, rue Lauriston', 'Paris','75016','France');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Rita Müller','rita.müller@gfsn.net','0711-555361','Adenauerallee 900', 'Stuttgart','70563','Germany');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Sarah McRoy','sarah.mcroy@fjnn.net','04 499 9555','101 Lambton Quay, Level 11', 'Wellington',NULL,'New Zealand');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Michael Donnermeyer','michael.donnermeyer@lvpk.net',' +49 89 61 08 9555','Hansastr. 15', 'Munich','80686','Germany');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Maria Hernandez','maria.hernandez@uzkx.net','2125558493','5905 Pompton St., Suite 750', 'NYC','10022','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Alexander Feuer','alexander.feuer@hzrr.net','0342-555176','Heerstr. 22', 'Leipzig','04179','Germany');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Dan Lewis','dan.lewis@bqfi.net','2035554407','2440 Pompton St.', 'Glendale','97561','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Martha Larsson','martha.larsson@abhf.net','0695-34 6555','Åkergatan 24', 'Bräcke','S-844 67','Sweden');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Sue Frick','sue.frick@npgp.net','4085553659','3086 Ingle Ln.', 'San Jose','94217','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Roland Mendel','roland.mendel@wclf.net','7675-3555','Kirchgasse 6', 'Graz','8010','Austria');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Leslie Murphy','leslie.murphy@lbgq.net','2035559545','567 North Pendale Street', 'New Haven','97823','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Yu Choi','yu.choi@vmpd.net','2125551957','5290 North Pendale Street, Suite 200', 'NYC','10022','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Martín Sommer','martín.sommer@wcoa.net','(91) 555 22 82','C/ Araquil, 67', 'Madrid','28023','Spain');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Sven Ottlieb','sven.ottlieb@dqyj.net','0241-039123','Walserweg 21', 'Aachen','52066','Germany');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Violeta Benitez','violeta.benitez@yqsd.net','5085552555','1785 First Street', 'New Bedford','50553','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Carmen Anton','carmen.anton@bhmy.net','+34 913 728555','c/ Gobelas, 19-1 Urb. La Florida', 'Madrid','28023','Spain');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Sean Clenahan','sean.clenahan@gzyw.net','61-9-3844-6555','7 Allen Street', 'Glen Waverly','3150','Australia');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Franco Ricotti','franco.ricotti@ycbk.net','+39 022515555','20093 Cologno Monzese, Alessandro Volta 16', 'Milan',NULL,'Italy');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Steve Thompson','steve.thompson@nirj.net','3105553722','3675 Furth Circle', 'Burbank','94019','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Hanna Moos','hanna.moos@fmga.net','0621-08555','Forsterstr. 57', 'Mannheim','68306','Germany');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Alexander Semenov','alexander.semenov@xgru.net','+7 812 293 0521','2 Pobedy Square', 'Saint Petersburg','196143','Russia');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Raanan Altagar,G M','raanan.altagar,g.m@mlap.net','+ 972 9 959 8555','3 Hagalim Blv.', 'Herzlia','47625','Israel');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('José Pedro Roel','josé.pedro.roel@qjmk.net','(95) 555 82 82','C/ Romero, 33', 'Sevilla','41101','Spain');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Rosa Salazar','rosa.salazar@fzik.net','2155559857','11328 Douglas Av.', 'Philadelphia','71270','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Sue Taylor','sue.taylor@wllx.net','4155554312','2793 Furth Circle', 'Brisbane','94217','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Thomas Smith','thomas.smith@nvze.net','(171) 555-7555','120 Hanover Sq.', 'London','WA1 1DP','UK');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Valarie Franco','valarie.franco@qait.net','6175552555','6251 Ingle Ln.', 'Boston','51003','USA');
INSERT INTO customers (name, email, phone, address, city, postcode, country) VALUES ('Tony Snowden','tony.snowden@rzcz.net','+64 9 5555500','Arenales 1938 3''A''', 'Auckland',NULL,'New Zealand');

CREATE TABLE reservations (
  id            SERIAL PRIMARY KEY,
  cust_id       INTEGER NOT NULL,
  room_no       INTEGER,
  checkin_date  DATE NOT NULL,
  checkout_date DATE,
  no_guests     INTEGER,
  booking_date  DATE,
  CONSTRAINT res_guest_fk FOREIGN KEY (cust_id) REFERENCES customers(id),
  CONSTRAINT res_room_fk  FOREIGN KEY (room_no) REFERENCES rooms(room_no)
);

INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(3,'2018-06-19',204,'2018-06-22',1,'2018-06-02');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(4,'2018-07-09',311,'2018-07-11',2,'2018-06-26');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(4,'2018-07-16',312,'2018-07-19',2,'2018-06-26');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(5,'2018-06-21',104,'2018-06-23',2,'2018-06-01');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(6,'2018-06-25',211,'2018-06-28',2,'2018-05-27');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(119,'2018-08-22',101,'2018-08-27',2,'2018-07-31');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(102,'2018-06-23',202,'2018-06-28',2,'2018-06-14');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(115,'2018-06-01',106,'2018-06-04',1,'2018-05-04');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(64,'2018-08-19',402,'2018-08-22',2,'2018-08-03');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(2,'2018-06-14',208,'2018-06-20',2,'2018-06-09');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(86,'2018-06-20',108,'2018-06-21',1,'2018-05-25');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(31,'2018-08-31',302,'2018-09-02',1,'2018-08-02');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(25,'2018-06-25',206,'2018-06-28',2,'2018-06-15');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(32,'2018-08-10',405,'2018-08-11',1,'2018-07-20');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(30,'2018-07-10',404,'2018-07-11',1,'2018-06-11');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(83,'2018-08-02',103,'2018-08-04',1,'2018-07-22');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(25,'2018-06-30',103,'2018-07-04',1,'2018-06-15');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(15,'2018-06-13',201,'2018-06-15',2,'2018-05-23');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(131,'2018-07-21',301,'2018-07-27',2,'2018-06-24');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(117,'2018-07-22',101,'2018-07-26',2,'2018-07-06');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(51,'2018-08-07',107,'2018-08-11',1,'2018-08-01');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(25,'2018-06-19',109,'2018-06-21',1,'2018-05-26');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(46,'2018-08-04',301,'2018-08-08',2,'2018-07-19');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(38,'2018-07-20',411,'2018-07-22',2,'2018-07-07');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(19,'2018-08-04',312,'2018-08-09',2,'2018-07-11');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(97,'2018-06-22',210,'2018-06-28',2,'2018-06-22');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(76,'2018-08-22',102,'2018-08-24',2,'2018-08-16');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(108,'2018-08-27',308,'2018-08-30',1,'2018-08-11');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(51,'2018-06-09',409,'2018-06-10',2,'2018-06-02');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(82,'2018-08-28',305,'2018-08-30',1,'2018-08-09');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(77,'2018-06-14',112,'2018-06-15',1,'2018-05-16');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(52,'2018-07-24',305,'2018-07-25',1,'2018-07-11');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(14,'2018-08-31',301,'2018-09-02',1,'2018-08-26');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(23,'2018-07-14',304,'2018-07-15',1,'2018-06-28');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(114,'2018-06-12',203,'2018-06-16',1,'2018-06-05');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(58,'2018-06-20',110,'2018-06-25',2,'2018-06-15');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(30,'2018-06-05',408,'2018-06-06',1,'2018-05-25');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(129,'2018-07-04',306,'2018-07-05',2,'2018-06-13');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(129,'2018-07-03',206,'2018-07-05',2,'2018-06-28');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(123,'2018-08-31',312,'2018-09-04',1,'2018-08-24');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(20,'2018-07-03',410,'2018-07-08',2,'2018-06-11');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(110,'2018-08-10',301,'2018-08-11',2,'2018-07-13');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(104,'2018-06-01',309,'2018-06-07',2,'2018-05-24');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(5,'2018-06-17',311,'2018-06-22',2,'2018-06-08');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(9,'2018-07-15',305,'2018-07-21',1,'2018-07-08');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(104,'2018-06-15',301,'2018-06-16',1,'2018-06-01');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(31,'2018-08-03',111,'2018-08-04',1,'2018-07-11');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(54,'2018-06-21',111,'2018-06-26',2,'2018-06-03');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(16,'2018-08-01',308,'2018-08-07',1,'2018-07-30');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(37,'2018-06-23',402,'2018-06-28',2,'2018-06-02');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(117,'2018-08-20',206,'2018-08-21',1,'2018-08-19');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(115,'2018-06-08',203,'2018-06-11',1,'2018-05-06');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(126,'2018-09-02',104,'2018-09-07',1,'2018-08-07');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(97,'2018-08-15',404,'2018-08-18',1,'2018-07-29');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(109,'2018-06-19',202,'2018-06-21',1,'2018-06-14');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(91,'2018-07-21',211,'2018-07-26',2,'2018-07-10');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(97,'2018-07-12',309,'2018-07-14',1,'2018-06-18');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(88,'2018-07-16',206,'2018-07-17',1,'2018-07-13');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(30,'2018-05-30',109,'2018-06-05',1,'2018-05-19');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(20,'2018-08-27',311,'2018-08-31',1,'2018-08-19');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(77,'2018-06-21',110,'2018-06-24',2,'2018-06-11');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(121,'2018-06-04',312,'2018-06-05',1,'2018-05-28');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(15,'2018-08-04',307,'2018-08-08',1,'2018-07-18');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(79,'2018-08-07',303,'2018-08-10',2,'2018-07-30');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(80,'2018-06-02',107,'2018-06-06',2,'2018-05-29');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(40,'2018-09-02',310,'2018-09-05',1,'2018-08-06');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(9,'2018-08-22',105,'2018-08-25',1,'2018-08-22');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(64,'2018-06-12',104,'2018-06-18',1,'2018-06-12');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(43,'2018-05-30',204,'2018-06-04',2,'2018-05-05');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(26,'2018-08-09',205,'2018-08-12',1,'2018-07-19');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(41,'2018-07-26',302,'2018-07-31',2,'2018-07-03');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(75,'2018-06-17',111,'2018-06-21',2,'2018-06-01');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(65,'2018-06-12',411,'2018-06-14',2,'2018-05-30');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(96,'2018-08-25',205,'2018-08-31',1,'2018-08-22');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(14,'2018-06-29',303,'2018-07-05',1,'2018-06-16');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(35,'2018-08-09',411,'2018-08-14',2,'2018-07-17');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(115,'2018-06-11',202,'2018-06-13',1,'2018-05-27');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(119,'2018-08-26',303,'2018-08-28',2,'2018-08-12');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(38,'2018-08-07',210,'2018-08-12',2,'2018-08-07');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(96,'2018-08-22',106,'2018-08-27',1,'2018-08-19');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(24,'2018-08-07',402,'2018-08-08',1,'2018-07-25');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(106,'2018-07-24',206,'2018-07-29',1,'2018-07-10');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(130,'2018-06-20',209,'2018-06-21',1,'2018-05-29');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(84,'2018-06-14',111,'2018-06-16',2,'2018-06-03');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(108,'2018-06-29',405,'2018-06-30',2,'2018-06-14');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(12,'2018-08-26',401,'2018-08-29',1,'2018-08-06');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(67,'2018-07-18',401,'2018-07-19',1,'2018-07-01');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(63,'2018-08-12',412,'2018-08-17',1,'2018-08-07');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(2,'2018-06-09',412,'2018-06-11',2,'2018-06-05');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(66,'2018-07-31',305,'2018-08-03',1,'2018-07-25');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(9,'2018-06-19',102,'2018-06-20',1,'2018-06-04');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(44,'2018-07-29',410,'2018-08-02',2,'2018-07-12');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(129,'2018-08-02',203,'2018-08-06',1,'2018-07-17');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(29,'2018-06-24',212,'2018-06-27',1,'2018-06-18');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(55,'2018-09-02',311,'2018-09-06',2,'2018-08-27');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(13,'2018-06-29',104,'2018-06-30',2,'2018-06-04');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(116,'2018-08-18',302,'2018-08-20',1,'2018-08-12');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(70,'2018-06-20',404,'2018-06-22',1,'2018-06-08');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(49,'2018-06-30',402,'2018-07-04',1,'2018-06-05');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(18,'2018-07-18',211,'2018-07-20',2,'2018-07-01');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(95,'2018-06-02',411,'2018-06-07',1,'2018-05-25');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(93,'2018-08-11',207,'2018-08-15',1,'2018-07-24');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(13,'2018-06-19',405,'2018-06-21',1,'2018-05-24');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(98,'2018-08-30',207,'2018-09-05',2,'2018-08-23');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(108,'2018-08-24',303,'2018-08-26',1,'2018-08-05');
INSERT INTO reservations (cust_id,checkin_date,room_no,checkout_date,no_guests,booking_date) VALUES(84,'2018-07-03',401,'2018-07-09',1,'2018-06-21');

-- PL/pgSQL function to fix dates in the hotel database to make them current with the course run.

drop function if exists fixup_dates();

create function fixup_dates() returns integer as
$$
declare
  date_adj integer;
begin
  select current_date - max(booking_date) + 30
    into date_adj
    from reservations;

  update reservations set
    booking_date  = least(current_date, booking_date + date_adj),
    checkin_date  = checkin_date + date_adj,
    checkout_date = checkout_date + date_adj;

  return null;
end
$$ language plpgsql;

select fixup_dates();

update reservations set room_no = null where checkin_date > current_date;

CREATE TABLE invoices (
  id                SERIAL PRIMARY KEY,
  res_id            INTEGER NOT NULL,
  total             NUMERIC(10,2),
  invoice_date      DATE,
  paid              BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (res_id) REFERENCES reservations(id)
);

INSERT INTO invoices (res_id, total, invoice_date, paid)
  SELECT res.id,
         rm.rate * (res.checkout_date - res.checkin_date),
         res.checkout_date,
	       (rm.rate * (res.checkout_date - res.checkin_date) % 11) != 2
    FROM reservations res JOIN
         rooms rm ON (res.room_no = rm.room_no)
    WHERE res.checkout_date <= CURRENT_DATE
    ORDER BY res.checkout_date;

