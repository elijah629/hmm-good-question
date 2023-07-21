"use client";

import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Session } from "@supabase/supabase-js";
import { IconUser } from "@tabler/icons-react";
import { useState } from "react";

export default function PostForm(props: { session: Session }) {
	async function post(user_id: string, content: string) {
		const supabase = createClientComponentClient<Database>();

		if (content) {
			await supabase.from("posts").insert({
				content,
				user_id
			});
		}
	}

	const [content, setContent] = useState<string>("");

	return (
		<div className="card rounded-none border-b-2 bg-neutral md:join-item md:rounded-box md:border-0">
			<div className="card-body">
				<h2 className="card-title">
					<div className="avatar rounded-full border-2 p-2">
						<IconUser size={25} />
					</div>
					{props.session.user.id}
				</h2>
				<textarea
					value={content}
					onChange={e => setContent(e.target.value)}
					className="textarea"
					placeholder="Whats interesting?"></textarea>
				<div className="card-actions justify-end">
					<button
						className="btn btn-accent"
						onClick={() => {
							if (content && content.length <= 150) {
								post(props.session.user.id, content);
								setContent("");
							}
						}}>
						Post
					</button>
				</div>
			</div>
		</div>
	);
}
