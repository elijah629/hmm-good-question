"use client";

import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import * as Post from "./Post";

export default function ForYouPosts(props: { posts: Post.Post[] }) {
	const [posts, setPosts] = useState(props.posts);
	const supabase = createClientComponentClient<Database>();

	supabase
		.channel("any")
		.on(
			"postgres_changes",
			{ event: "INSERT", schema: "public", table: "posts" },
			payload => {
				setPosts([payload.new as Post.Post, ...posts]);
			}
		)
		.subscribe();

	return (
		<div className="flex flex-col items-center gap-4 p-4">
			{posts?.map(x => (
				<Post.default
					key={x.id}
					post={x}
				/>
			))}
		</div>
	);
}
