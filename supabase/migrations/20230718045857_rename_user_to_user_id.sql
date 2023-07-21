alter table "public"."posts" drop column "user";

alter table "public"."posts" add column "user_id" uuid not null;

create policy "Enable insert for authenticated users only"
on "public"."posts"
as permissive
for insert
to authenticated
with check ((auth.uid() = user_id));


create policy "Enable read access for all users"
on "public"."profiles"
as permissive
for select
to public
using (true);



