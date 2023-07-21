import Post from "@/components/Post";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export const revalidate = 0;

export default async function User({
	params: { id }
}: {
	params: { id: string };
}) {
	const supabase = createServerComponentClient<Database>({ cookies });

	const { data } = await supabase
		.from("posts")
		.select()
		.match({ id })
		.single();

	if (!data) {
		notFound();
	}

	return <Post post={data} />;
}
