// "for you" just recent posts

import { Database } from "@/types/supabase";
import {
	createClientComponentClient,
	createServerComponentClient
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Post from "./Post";
import ForYouPosts from "./ForYouPosts";

export default async function ForYou() {
	const supabase = createServerComponentClient<Database>({ cookies });
	const { data: posts } = await supabase
		.from("posts")
		.select()
		.order("ctid", { ascending: false });

	return (
		<>
			<ForYouPosts posts={posts!} />
		</>
	);
}
