alter table "public"."posts" add constraint "posts_content_check" CHECK ((length(content) <= 150)) not valid;

alter table "public"."posts" validate constraint "posts_content_check";

create policy "Allow admin control"
on "public"."posts"
as permissive
for all
to service_role
using (true)
with check (true);


create policy "Enable read access for all users"
on "public"."posts"
as permissive
for select
to public
using (true);



