import { MigrationInterface, QueryRunner } from "typeorm";

export class MockPosts1597424501159 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Hôtel des Invalides', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 2, 'bob', '2021-08-06T20:43:42Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Borrowed Hearts (Borrowed Hearts: A Holiday Romance)', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 2, 'bob', '2021-08-26T16:14:19Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Eraserhead', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
    
    Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 2, 'bob', '2022-01-07T07:40:19Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Hope Springs', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 2, 'bob', '2021-07-23T11:44:33Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Home of Dark Butterflies, The (Tummien perhosten koti)', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
    
    Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 2, 'bob', '2021-09-07T23:21:46Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Riddick', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
    
    In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 2, 'bob', '2021-09-15T22:28:20Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Evenings on a Farm near Dikanka', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
    
    Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 2, 'bob', '2021-08-17T07:20:55Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Daughters of the Dust', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
    
    Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
    
    In congue. Etiam justo. Etiam pretium iaculis justo.', 2, 'bob', '2022-02-19T18:52:30Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Who''ll Stop the Rain', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 2, 'bob', '2021-12-03T07:24:05Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Battered Bastards of Baseball, The', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
    
    Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
    
    Fusce consequat. Nulla nisl. Nunc nisl.', 2, 'bob', '2021-09-20T11:48:02Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Bride Came C.O.D., The', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
    
    Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
    
    In congue. Etiam justo. Etiam pretium iaculis justo.', 2, 'bob', '2021-09-20T14:06:23Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Long Way Down, A', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
    
    Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 2, 'bob', '2021-08-31T14:59:46Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Ran', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 2, 'bob', '2022-03-12T05:16:33Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Cut', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
    
    Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 2, 'bob', '2022-02-07T06:49:58Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Beethoven''s Treasure Tail', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
    
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    
    Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 2, 'bob', '2021-10-04T00:54:13Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('King of Fighters, The', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 2, 'bob', '2022-02-18T17:12:57Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Pretty Devils', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 2, 'bob', '2021-12-09T23:18:40Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Things I Like, Things I Don''t Like (Foutaises)', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 2, 'bob', '2021-11-08T22:31:44Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Marriage Material', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
    
    Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
    
    Fusce consequat. Nulla nisl. Nunc nisl.', 2, 'bob', '2022-02-26T16:57:26Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Tuff Turf', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
    
    Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 2, 'bob', '2022-02-17T21:31:18Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Chapter Two', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 2, 'bob', '2021-05-18T21:00:10Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Woman in Red, The', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 2, 'bob', '2021-06-08T21:49:08Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('It Should Happen to You', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
    
    Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 2, 'bob', '2022-04-12T21:18:58Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Training Day', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
    
    Fusce consequat. Nulla nisl. Nunc nisl.
    
    Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 2, 'bob', '2021-07-14T23:33:06Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('King Ralph', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 2, 'bob', '2021-11-18T14:53:58Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Devil''s Backbone, The (Espinazo del diablo, El)', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
    
    Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
    
    Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 2, 'bob', '2022-01-10T03:33:42Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Leslie, My Name is Evil (Manson, My Name is Evil)', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
    
    In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
    
    Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 2, 'bob', '2021-10-07T12:43:27Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Far From Home: The Adventures of Yellow Dog', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
    
    Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
    
    Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 2, 'bob', '2022-03-13T23:02:23Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Everything or Nothing: The Untold Story of 007', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
    
    Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 2, 'bob', '2021-09-05T00:56:50Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Emergency Escape, The (Wyjscie awaryjne)', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 2, 'bob', '2021-05-15T19:50:01Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('The Hellions', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 2, 'bob', '2021-05-12T18:23:54Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Food of Love (Manjar de Amor)', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
    
    Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
    
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 2, 'bob', '2021-07-11T10:36:29Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Patterns', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
    
    Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 2, 'bob', '2021-09-20T21:24:40Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Sudden Death', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
    
    Phasellus in felis. Donec semper sapien a libero. Nam dui.', 2, 'bob', '2021-08-07T23:46:55Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Swimming Pool', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 2, 'bob', '2022-02-11T04:04:32Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Far Horizons, The', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 2, 'bob', '2021-06-13T04:26:42Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Vic+Flo Saw a Bear', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.
    
    Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
    
    Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 2, 'bob', '2022-02-17T02:32:42Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Acts of Worship ', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
    
    Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
    
    Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 2, 'bob', '2022-02-25T16:54:12Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Letter, The (La lettre)', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 2, 'bob', '2021-08-24T09:48:51Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Family Affair ', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
    
    Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 2, 'bob', '2022-03-11T05:32:48Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Village, The', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.', 2, 'bob', '2021-11-20T01:43:03Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Neil Young: Heart of Gold', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 2, 'bob', '2022-01-15T19:11:30Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('From the Clouds to the Resistance (Dalla nube alla resistenza)', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    
    Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
    
    Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 2, 'bob', '2021-07-20T13:17:32Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Three Came Home', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 2, 'bob', '2021-08-30T17:59:42Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Sibling Rivalry', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
    
    Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 2, 'bob', '2021-08-02T09:56:31Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Beverly Hills Chihuahua 3', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 2, 'bob', '2021-07-17T15:09:08Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('All Is Forgiven (Tout est pardonné)', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 2, 'bob', '2021-10-14T01:33:37Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Africa: Texas Style', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 2, 'bob', '2021-08-16T08:33:35Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Night on Earth', 'Fusce consequat. Nulla nisl. Nunc nisl.', 2, 'bob', '2021-07-25T09:14:30Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Frankenfish', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
    
    Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 2, 'bob', '2021-11-22T12:25:36Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Dragon Ball: The Curse Of The Blood Rubies (Doragon bôru: Shenron no densetsu)', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 2, 'bob', '2021-06-18T12:11:24Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('The Imitation Game', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 2, 'bob', '2021-10-09T03:47:00Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Colony, The', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.
    
    Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 2, 'bob', '2022-04-14T12:22:15Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('100 Feet', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
    
    Fusce consequat. Nulla nisl. Nunc nisl.
    
    Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 2, 'bob', '2021-11-26T10:52:03Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('The Harmony Game', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
    
    Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 2, 'bob', '2022-03-11T07:36:45Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Gloria', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
    
    In congue. Etiam justo. Etiam pretium iaculis justo.', 2, 'bob', '2022-03-03T12:33:57Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Hey Arnold! The Movie', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 2, 'bob', '2022-02-25T22:23:42Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Poolhall Junkies', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 2, 'bob', '2021-07-11T19:17:55Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Heartbreak Ridge', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
    
    Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 2, 'bob', '2021-09-10T07:59:01Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Looking for Lenny ', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
    
    Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
    
    In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 2, 'bob', '2022-01-03T23:23:35Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Girl with the Dragon Tattoo, The', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 2, 'bob', '2021-12-14T07:31:16Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Private Affairs of Bel Ami, The', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 2, 'bob', '2021-08-13T04:28:21Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Quadrille', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
    
    Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
    
    Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 2, 'bob', '2021-06-12T04:47:21Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Honeymoon', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 2, 'bob', '2022-02-28T03:19:35Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Stir Crazy', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 2, 'bob', '2022-04-18T13:56:47Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Silver City', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
    
    Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
    
    Phasellus in felis. Donec semper sapien a libero. Nam dui.', 2, 'bob', '2021-08-25T15:40:15Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Detroit Metal City (Detoroito Metaru Shiti)', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 2, 'bob', '2022-02-02T05:56:54Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Life Is a Long Quiet River (La vie est un long fleuve tranquille)', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
    
    In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 2, 'bob', '2022-03-25T21:15:51Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Winnie the Pooh and the Honey Tree', 'Fusce consequat. Nulla nisl. Nunc nisl.', 2, 'bob', '2021-05-15T20:51:53Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Mo'' Money', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
    
    Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
    
    In congue. Etiam justo. Etiam pretium iaculis justo.', 2, 'bob', '2021-11-30T15:23:14Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('In Bed (En la cama)', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
    
    Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
    
    Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 2, 'bob', '2022-01-17T03:25:06Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Burnt Offerings', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
    
    Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
    
    Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 2, 'bob', '2022-01-21T14:22:14Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Return to Peyton Place', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
    
    Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 2, 'bob', '2021-06-26T11:46:49Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Fantastic Four', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 2, 'bob', '2021-05-29T09:10:11Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Scooby-Doo! WrestleMania Mystery', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
    
    Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 2, 'bob', '2021-05-05T20:21:31Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Guantanamera', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
    
    Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 2, 'bob', '2021-08-08T00:36:27Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Wavelength', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
    
    Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
    
    In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 2, 'bob', '2022-02-13T12:18:13Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Prata Palomares', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
    
    Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
    
    In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 2, 'bob', '2022-03-12T22:22:56Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('The Land Before Time XIII: The Wisdom of Friends', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 2, 'bob', '2021-08-16T15:40:40Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Seven Chances', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 2, 'bob', '2022-01-20T03:55:02Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Moth, The (Cma)', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
    
    Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 2, 'bob', '2021-10-05T13:42:56Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('George & A.J.', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 2, 'bob', '2021-10-30T10:53:14Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Blitz', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 2, 'bob', '2021-08-07T03:16:49Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Garage Sale Mystery', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
    
    Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
    
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 2, 'bob', '2021-10-20T12:29:26Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Girls on Top', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
    
    In congue. Etiam justo. Etiam pretium iaculis justo.', 2, 'bob', '2022-04-17T13:06:58Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Barber, The', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.
    
    Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 2, 'bob', '2022-03-08T07:07:31Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('After Midnight', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 2, 'bob', '2021-04-22T15:24:22Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Rage', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
    
    Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 2, 'bob', '2021-12-23T10:17:29Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Month in the Country, A', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
    
    Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 2, 'bob', '2021-09-28T10:23:46Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Monsieur Verdoux', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 2, 'bob', '2021-05-26T13:02:17Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Love Serenade', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
    
    Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
    
    Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 2, 'bob', '2021-07-12T03:06:43Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Henry & June', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 2, 'bob', '2022-01-05T09:25:23Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Sweet Evil (L''enfance du mal)', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
    
    Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 2, 'bob', '2022-01-25T00:01:48Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Largo Winch (Heir Apparent: Largo Winch, The)', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 2, 'bob', '2021-11-16T14:01:28Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Bitch Slap', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
    
    Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 2, 'bob', '2021-05-05T03:31:16Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Suddenly (Tan de Repente)', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 2, 'bob', '2022-02-07T04:46:23Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Leontine', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
    
    Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 2, 'bob', '2021-11-25T10:24:25Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('It''s a Small World', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
    
    Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 2, 'bob', '2021-12-06T14:50:10Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Business of Being Born, The', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 2, 'bob', '2022-04-13T20:32:14Z');
    insert into post (title, text, "creatorId", "creatorUsername", "createdAt") values ('Hunter, The', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
    
    Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 2, 'bob', '2021-08-08T03:29:50Z');
    
    `);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
