-- Database: hometask

-- DROP DATABASE IF EXISTS hometask;

-- CREATE DATABASE hometask
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- COMMENT ON DATABASE hometask
--     IS 'hometask sql server is used for nodejs-mentoring-program-apac';

DROP table if exists users;
CREATE TABLE users (
	id varchar(50) unique,
	username varchar(50) unique,
	password varchar(50),
	age int4,
	isDeleted bool,
	primary key(id)
);

insert into users (id, username, password, age, isDeleted) values ('67006adb-3c81-4b9a-9315-f4cddb2c935b', 'drenny0', 'vgeaddL', 110, true);
insert into users (id, username, password, age, isDeleted) values ('98f3ee7f-6b5e-4f86-83c3-97cb98d12b07', 'znoor1', 'w8TjWM3', 19, true);
insert into users (id, username, password, age, isDeleted) values ('ddf3c2f8-4d38-45fc-ad32-374c3ee06b04', 'skissock2', 'nur3C7U', 27, false);
insert into users (id, username, password, age, isDeleted) values ('7b6294bd-f3f8-429c-b7d1-a4e4f1b93166', 'bbarker3', 'QgOCqngo', 40, true);
insert into users (id, username, password, age, isDeleted) values ('08c43d35-2adf-4475-8784-54b3a5fcd739', 'cerley4', '0T4SdamDRt9K', 85, false);
insert into users (id, username, password, age, isDeleted) values ('4b452c53-6830-464d-bb98-7f201a1aca5c', 'bfaulo5', 'oP3xiiVC', 30, false);
insert into users (id, username, password, age, isDeleted) values ('8ec7d972-7f54-480f-9361-3007fc552988', 'tmeriet6', 'IMVkuD', 22, false);
insert into users (id, username, password, age, isDeleted) values ('1f3c334e-64aa-48e9-9068-88d811a57685', 'jhosier7', 'joQSYY5HBG', 127, false);
insert into users (id, username, password, age, isDeleted) values ('f0089552-5476-4154-bfae-2a1a3bd15d8d', 'dbothams8', '77aEotCaFGzy', 40, true);
insert into users (id, username, password, age, isDeleted) values ('9ba0ecaa-1cce-464e-a9f1-c2d37aaf010d', 'cbetjeman9', 'nrmDyv9m77F', 45, false);
insert into users (id, username, password, age, isDeleted) values ('262fe095-5b67-46ea-b3a2-4a0da1533d42', 'sharberera', '2WtRhNKoGKxU', 33, true);
insert into users (id, username, password, age, isDeleted) values ('c8a1ce78-6772-4735-a6ca-fe5f11e7c3f0', 'smclanaghanb', 'UhlE5I', 30, false);
insert into users (id, username, password, age, isDeleted) values ('7bd46c16-3f7c-4ea2-8931-d1b7c046dd35', 'acullingfordc', 'NQbSveL', 65, false);
insert into users (id, username, password, age, isDeleted) values ('e62e5400-3e0c-49cb-8f6e-3168178d9785', 'jdearnessd', 'nSmRwtW', 99, false);
insert into users (id, username, password, age, isDeleted) values ('110873a8-0851-4b88-b199-f961805f2200', 'seirwine', '7g14aquCZA', 100, false);
insert into users (id, username, password, age, isDeleted) values ('acfe8e08-4333-4200-8279-ef0cb464ce2f', 'ktettleyf', 'iDpiFHDN', 28, true);
insert into users (id, username, password, age, isDeleted) values ('1268ba41-2dde-4867-89f6-0f3cc6586488', 'gghiraldig', 'LzNhZiKc', 91, false);
insert into users (id, username, password, age, isDeleted) values ('c45ce172-b922-475f-8b98-a9b3829b6d8a', 'ecollingridgeh', '3Fvu2bOM', 26, true);
insert into users (id, username, password, age, isDeleted) values ('e4d1701b-9b05-4e5c-8f04-6f3a50a76dd7', 'aflaxmani', 'AaJHf1', 59, false);
insert into users (id, username, password, age, isDeleted) values ('c987b223-dc4f-48bf-89f5-51d12178a906', 'ckarolewskij', '7BamE9foZ', 19, true);
insert into users (id, username, password, age, isDeleted) values ('3f958b87-e1b8-4072-94c1-fb4412828a73', 'lwhapplek', 'BrEeHiiMs7K', 20, true);
insert into users (id, username, password, age, isDeleted) values ('a4145529-f76e-4de8-b084-3b8ff682daaf', 'wchadbournl', '6XF8eJl0l95', 43, false);
insert into users (id, username, password, age, isDeleted) values ('eff0d2ca-cb2b-4e24-b093-c635f0a1baf9', 'dfawkesm', 'm6X7zkg', 87, true);
insert into users (id, username, password, age, isDeleted) values ('abc017d3-800c-4998-86b0-7cb455b0fa31', 'atarplyn', 'FawoCks19w', 14, false);
insert into users (id, username, password, age, isDeleted) values ('ee742207-1423-41b6-b739-027613e777a4', 'zkivelhano', 'K9Gd7Ujna2fz', 78, false);
insert into users (id, username, password, age, isDeleted) values ('3da82448-ae38-4289-bf3e-55851e7c7323', 'gtoffanop', 'bDXRn0FG', 81, true);
insert into users (id, username, password, age, isDeleted) values ('de2c58f6-c5b4-4f53-bd21-378ce0fb7116', 'dmoffatq', 'Ke2MbbNIUBZ', 7, false);
insert into users (id, username, password, age, isDeleted) values ('3e9c2858-44f3-4070-9313-a96642c6fce3', 'cantonijevicr', 'LoIX0Ay', 26, false);
insert into users (id, username, password, age, isDeleted) values ('1221a137-3e10-42a9-978a-9f9a7b70b323', 'mizakovitzs', '7OCZZST8v', 130, true);
insert into users (id, username, password, age, isDeleted) values ('9ea93399-0923-4380-832f-9f9715d5e9a8', 'pfellibrandt', '076K22', 97, false);
insert into users (id, username, password, age, isDeleted) values ('941916aa-1529-4f1c-a74c-012a26546925', 'gtraytonu', 'hqMM18R8e', 102, true);
insert into users (id, username, password, age, isDeleted) values ('87d68f99-4490-4045-aaa6-6916110283d3', 'srobesonv', 'ALfH1ZnFMq', 20, true);
insert into users (id, username, password, age, isDeleted) values ('e1db1247-2d68-4dab-bc57-fbe31019cf29', 'hleirmonthw', 'LYkmVi1WVaNc', 51, true);
insert into users (id, username, password, age, isDeleted) values ('42f1cf57-4a54-40a0-83f4-cfa432e133c7', 'wyashnovx', 'u09WfWfH7SVV', 27, true);
insert into users (id, username, password, age, isDeleted) values ('5888d0bb-0917-40d7-b636-5fb06ada7f32', 'hspadariy', 'Uj5f4K9F', 10, false);
insert into users (id, username, password, age, isDeleted) values ('72ff7be2-06fe-4e44-82f8-db41db4db538', 'jballstonz', 'CfCszTGA', 39, false);
insert into users (id, username, password, age, isDeleted) values ('02543d95-704c-4761-926d-d7c6d6b7d5c2', 'wmcarthur10', 'h0MlmUxmpv', 100, false);
insert into users (id, username, password, age, isDeleted) values ('643743a3-689e-459e-8100-6b142cef18ca', 'cdomke11', 'rADHDwBH', 45, false);
insert into users (id, username, password, age, isDeleted) values ('025b752b-c151-4dca-98c0-2a9e2fc546b9', 'lmandre12', 'UKJFbIv', 89, false);
insert into users (id, username, password, age, isDeleted) values ('df09dfa3-2782-4ea7-8583-c025b07b721b', 'epettyfar13', '1FAEdnLbE', 128, true);
insert into users (id, username, password, age, isDeleted) values ('a5d118bf-9a3f-419a-a1d0-d3430be23f1a', 'gfaber14', '5IcU7DfgZ2yk', 6, false);
insert into users (id, username, password, age, isDeleted) values ('2a26e72c-7d16-4ff4-b202-e86a073fd4fd', 'wcawker15', '73JwXdKpevw', 80, false);
insert into users (id, username, password, age, isDeleted) values ('dbc3f2c6-95cd-4d56-89e7-dcd1edbc34e0', 'ddebell16', 'gxDpiXGy', 28, true);
insert into users (id, username, password, age, isDeleted) values ('410b542c-8b5c-45e9-9b1e-a919c9657c45', 'wbilliard17', 'NuvB1A', 84, false);
insert into users (id, username, password, age, isDeleted) values ('5a598358-ebae-4705-815a-bbfa1cff2bea', 'dburdas18', 'ROUrZ6k', 90, false);
insert into users (id, username, password, age, isDeleted) values ('cbd4a2c0-9f0e-4f72-ae9c-887938ae35ea', 'rmichelmore19', 'JivB2Iro9', 27, true);
insert into users (id, username, password, age, isDeleted) values ('cef96fbd-b587-4021-a857-e1a92f3baa7d', 'tstyan1a', 'JGJfRXU', 50, false);
insert into users (id, username, password, age, isDeleted) values ('1903c24b-7a48-4dee-a41b-6339f2b3c80b', 'shallford1b', 'f1KjbuLEHAT', 11, true);
insert into users (id, username, password, age, isDeleted) values ('58f60eb8-dca3-4a25-9e1a-33f7d14b1f18', 'rmagrane1c', 'SXjmfgbTziAp', 82, false);
insert into users (id, username, password, age, isDeleted) values ('632a97a8-c7e0-4f0c-a1ee-373acfd10e7b', 'rmarquand1d', 'abVgGO', 48, true);
insert into users (id, username, password, age, isDeleted) values ('ae03e9c6-72ac-4c70-b885-a617b97fe460', 'smarten1e', 'elwmyIe0D', 49, true);
insert into users (id, username, password, age, isDeleted) values ('c93f2311-be45-4652-8023-df94bc0901fc', 'pmcian1f', 'Mc1h1vy', 23, true);
insert into users (id, username, password, age, isDeleted) values ('1dc41289-95f4-49c6-9fe7-0ad722ed6288', 'hpollins1g', 'oMpz6l', 108, true);
insert into users (id, username, password, age, isDeleted) values ('3d656c6d-c724-4ad4-8c40-793485508a15', 'vvannuchi1h', '5DxoK8L8LlP', 64, false);
insert into users (id, username, password, age, isDeleted) values ('5b64e6f6-c70f-44e7-a35d-711a30b4c036', 'mgrayham1i', 'moPYiKiBAFeH', 71, true);
insert into users (id, username, password, age, isDeleted) values ('5c94e48e-44b9-49c8-8642-991053124e24', 'rwozencroft1j', 'c1y1Hk8Jz', 126, false);
insert into users (id, username, password, age, isDeleted) values ('14c565c2-e62b-4519-b32f-ab600ee24702', 'pstot1k', 'qxfyWWPNhRm', 53, true);
insert into users (id, username, password, age, isDeleted) values ('25be92a1-7c6c-495f-b75b-f6fb5eae6d5c', 'lroscrigg1l', '7DvuaFgSc2c2', 126, false);
insert into users (id, username, password, age, isDeleted) values ('3977a2ce-e943-42a2-910a-c16882f04719', 'sadess1m', 'ojoMzrIyAw', 95, false);
insert into users (id, username, password, age, isDeleted) values ('0ee1253d-68a2-4833-9008-e39321d4a1e0', 'wbrownsmith1n', 'NxeSKgaOMQK', 24, false);
insert into users (id, username, password, age, isDeleted) values ('ec6a9797-0b43-43ed-ad98-bb99431dc707', 'kslamaker1o', 'wWNOUJH', 93, true);
insert into users (id, username, password, age, isDeleted) values ('50fea4bb-e5aa-49f4-b719-dbcda7a977b5', 'bleydon1p', 'pt52F98oqjVW', 45, false);
insert into users (id, username, password, age, isDeleted) values ('07df03d5-5cb3-4fa0-afe1-dbd7d8d7ca55', 'pasbrey1q', 'giqsDvXWgw', 12, true);
insert into users (id, username, password, age, isDeleted) values ('9cccea73-93e7-4269-ad41-64b555176970', 'cmonini1r', 'ORijXqLOsM', 23, false);
insert into users (id, username, password, age, isDeleted) values ('f4179417-ff8f-44c3-b6f1-3c82f25cd47f', 'ksquirrel1s', '41slbhocQ2T', 75, true);
insert into users (id, username, password, age, isDeleted) values ('9a39458f-9eb2-4173-b883-2316ede4a449', 'ecownden1t', 'KdBR7xcHTS', 32, false);
insert into users (id, username, password, age, isDeleted) values ('c04c7cad-1518-4fac-a89b-a478f1feaac5', 'cgeratasch1u', 'XaK4SFE', 12, false);
insert into users (id, username, password, age, isDeleted) values ('1c929e61-8902-4c66-8f4f-b517a0c0daeb', 'nturpin1v', 'UpNVfxl4MeC', 56, true);
insert into users (id, username, password, age, isDeleted) values ('a8b1e478-2a79-49d5-9d00-6e48ee597e14', 'rharrowell1w', 'AvNCPb7', 76, true);
insert into users (id, username, password, age, isDeleted) values ('91fd2523-4377-44d7-a842-320ea9897bc7', 'kbestwick1x', '2CzGBIi', 33, false);
insert into users (id, username, password, age, isDeleted) values ('6aa3c599-73c4-4085-8f7c-1e9d01b613e6', 'nstarbucke1y', 'AVJxwG', 45, false);
insert into users (id, username, password, age, isDeleted) values ('60568183-5161-427b-ae0f-cc5682a3abe7', 'cdepinna1z', 'bMI8yzZyI', 33, false);
insert into users (id, username, password, age, isDeleted) values ('0fe80868-9aa9-4d45-b262-cf4f5272552e', 'edarling20', 'U7Uhq2Z', 60, false);
insert into users (id, username, password, age, isDeleted) values ('214f5874-3731-4c61-87c8-a79913722a02', 'lshearer21', 'ERQT7UEW', 117, true);
insert into users (id, username, password, age, isDeleted) values ('1b84d7cc-b08b-4362-bfa7-3200c8cffc75', 'mhansford22', 'dE82Zri4', 107, false);
insert into users (id, username, password, age, isDeleted) values ('b374f1d8-babf-496f-a8a2-c6cc907dc281', 'afelmingham23', 'YaW2Tc8T', 68, true);
insert into users (id, username, password, age, isDeleted) values ('b75c48e3-f1f8-417b-a95a-bd6483afd798', 'fbelfield24', 'loRPHSVEo', 44, false);
insert into users (id, username, password, age, isDeleted) values ('0fa5a7fe-68a7-482d-9219-e3ef2425424d', 'sjeremiah25', 'onQSHrNU', 63, true);
insert into users (id, username, password, age, isDeleted) values ('b82f07de-165d-4572-a541-328f4a8ccf4e', 'cnewark26', 'R68Dgi9gNi', 41, true);
insert into users (id, username, password, age, isDeleted) values ('685af6cd-b5e0-4965-960e-6515e840d70a', 'bgaudin27', 'wqyRISG', 72, true);
insert into users (id, username, password, age, isDeleted) values ('d6accb2d-73fc-480d-801e-73932f7ff8e8', 'dmonteaux28', '3vEryKC', 55, true);
insert into users (id, username, password, age, isDeleted) values ('3dddb9de-1320-46d1-9ec5-fc7e633bb7da', 'kalstead29', 'uxxeH0', 62, false);
insert into users (id, username, password, age, isDeleted) values ('caa578c5-a58a-4970-be26-692728d82ef2', 'sgates2a', 'iFrOJNQC', 59, true);
insert into users (id, username, password, age, isDeleted) values ('18077a5e-70e2-4b5d-9106-bc11304c3f5d', 'icrowd2b', 'frcLa3TgA', 74, true);
insert into users (id, username, password, age, isDeleted) values ('b99c6721-a787-4786-8a47-5f3004badf81', 'pcrockatt2c', 'OXW0HYwZ', 53, true);
insert into users (id, username, password, age, isDeleted) values ('288963a3-68f8-48d9-a128-accae77e83da', 'jverty2d', 'Yymlx5', 69, false);
insert into users (id, username, password, age, isDeleted) values ('fbd66070-0ded-4e81-a27f-d4e52e87a25a', 'ccaulier2e', 'mZ4bFdxb', 86, true);
insert into users (id, username, password, age, isDeleted) values ('57eb0b44-e43c-4f0e-8704-1b390736cbde', 'mcawthron2f', 'vPtbv3d7VTD', 77, true);
insert into users (id, username, password, age, isDeleted) values ('67261814-e6cd-4d12-91a6-9be49fd622fa', 'mkilligrew2g', 'TdAnOGO', 73, false);
insert into users (id, username, password, age, isDeleted) values ('0c14ae6d-bd4b-4e3d-8d13-00b8201412c3', 'mraithby2h', 's3n0DG', 27, false);
insert into users (id, username, password, age, isDeleted) values ('3d45f9ff-2a39-4a53-bfa1-27005c558271', 'hmactimpany2i', 'eJMHX8', 21, false);
insert into users (id, username, password, age, isDeleted) values ('aada4f1f-f37b-4f73-a9cf-60e0229c8122', 'hbilliard2j', 'STgWOpOAohJN', 13, false);
insert into users (id, username, password, age, isDeleted) values ('414a69c3-2716-4f6c-a920-f7561ab558a1', 'phonacker2k', 'FalP5xCZ18', 104, false);
insert into users (id, username, password, age, isDeleted) values ('9ae5bc06-ee9a-4b01-b304-59d5f7d0981d', 'fdrivers2l', 'we7Z34XVOs', 14, true);
insert into users (id, username, password, age, isDeleted) values ('8303fd30-1a53-4be1-90af-770e87327936', 'ckuhnwald2m', 'vIbIOuV', 8, true);
insert into users (id, username, password, age, isDeleted) values ('3bf54c19-a57b-4f9e-89e9-df8d16d8f2ce', 'cjeger2n', 'WKFlZML', 43, true);
insert into users (id, username, password, age, isDeleted) values ('a0e62a42-cfa1-49e4-97ac-8e99f517eac8', 'gcapinetti2o', 'tJeNQjyWe', 47, true);
insert into users (id, username, password, age, isDeleted) values ('a22c4dc6-8c85-44f8-8202-ca4f11ace720', 'avaszoly2p', 'vBULH2Jc9BCs', 87, true);
insert into users (id, username, password, age, isDeleted) values ('83296141-ee26-4c07-8e48-53001523772f', 'abeedon2q', 'ZV83qlvjV', 97, false);
insert into users (id, username, password, age, isDeleted) values ('097a70ba-edfa-4eb7-b6d1-19b5a0bcf906', 'hbrosel2r', 'HH3yjZn7ia', 66, true);
