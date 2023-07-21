import { Database } from "@/types/supabase";
import { IconShare, IconUser } from "@tabler/icons-react";
import Link from "next/link";

export type Post = Database["public"]["Tables"]["posts"]["Row"];

export default function Post(props: { post: Post }) {
	return (
		<div className="card break-all rounded-none border-b-2 bg-neutral md:join-item md:rounded-box md:border-0">
			<div className="card-body">
				<h2 className="card-title">
					<div className="avatar rounded-full border-2 p-2">
						<IconUser size={25} />
					</div>
					{props.post.user_id}
				</h2>
				<p>{props.post.content}</p>
				<div className="card-actions justify-end">
					{/* <button
						className="btn btn-accent"
						onClick={() => {
							if (content) {
								post(props.session.user.id, content);
								setContent("");
							}
						}}>
						Post
					</button> */}
					<Link
						target="_blank"
						className="btn btn-circle"
						href={`/p/${props.post.id}`}>
						<IconShare size={24} />
					</Link>
				</div>
			</div>
		</div>
	);
}
